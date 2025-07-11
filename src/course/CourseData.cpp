#include <CourseView.h>
#include <course/Bg.h>
#include <course/BgUnitFile.h>
#include <course/CourseData.h>
#include <resource/SharcArchiveRes.h>
#include <resource/SharcWriter.h>
#include <resource/SZSCompressor.h>
#include <resource/SZSDecompressor.h>
#include <system/ResMgr.h>

#include <unordered_set>

namespace {

inline std::string path_basename(const std::string& path)
{
    return path.substr(path.find_last_of("/\\") + 1);
}

inline std::string remove_extension(const std::string& filename)
{
    const std::string::size_type pos = filename.find_last_of('.');
    if (pos > 0 && pos != std::string::npos)
        return filename.substr(0, pos);

    return filename;
}

}

char CourseData::sCourseDataFileName  [COURSE_DATA_FILE_NAME_LEN       + 1] = "course/courseX.bin";
char CourseData::sCourseDataFileL0Name[COURSE_DATA_FILE_LAYER_NAME_LEN + 1] = "course/courseX_bgdatL0.bin";
char CourseData::sCourseDataFileL1Name[COURSE_DATA_FILE_LAYER_NAME_LEN + 1] = "course/courseX_bgdatL1.bin";
char CourseData::sCourseDataFileL2Name[COURSE_DATA_FILE_LAYER_NAME_LEN + 1] = "course/courseX_bgdatL2.bin";

CourseData* CourseData::sInstance = nullptr;

bool CourseData::createSingleton()
{
    if (sInstance)
        return false;

    sInstance = new CourseData();
    return true;
}

void CourseData::destroySingleton()
{
    if (!sInstance)
        return;

    delete sInstance;
    sInstance = nullptr;
}

CourseData::CourseData()
{
    Bg::createSingleton();
}

CourseData::~CourseData()
{
    clearResData_();

    Bg::destroySingleton();
}

void CourseData::createNew()
{
    Bg::instance()->clear();
    clearResData_();

    mFile[0].createNew(0);
    for (s32 i = 1; i < CD_FILE_MAX_NUM; i++)
        mFile[i].clear();

    rio::FileDevice::LoadArg arg;
    arg.path = "unit/Pa0_jyotyu.szs";
    arg.alignment = 0x2000;

    u8* arc_dat = SZSDecompressor::tryDecomp(arg);
    RIO_ASSERT(arc_dat);

    [[maybe_unused]] bool success = Bg::instance()->loadUnit(arc_dat, arg.read_size, "Pa0_jyotyu");
    RIO_ASSERT(success);
}

bool CourseData::loadFromPack(const std::string& path)
{
    rio::FileDevice::LoadArg arg;
    arg.path = /* std::string("native://") + */ path;
    arg.alignment = 0x2000;

    u8* pack_arc_dat = SZSDecompressor::tryDecomp(arg, false);
    if (!pack_arc_dat)
        return false;

    SharcArchiveRes pack_arc;
    if (!pack_arc.prepareArchive(pack_arc_dat))
    {
        RIO_LOG("Could not load Sharc file...\n");
        rio::MemUtil::free(pack_arc_dat);
        return false;
    }

    std::unordered_set<std::string> read_files;

    RIO_LOG("\nLoaded %s\n", path.c_str());
    // RIO_LOG("Level data magic: %c%c%c%c\n", pack_arc_dat[0], pack_arc_dat[1], pack_arc_dat[2], pack_arc_dat[3]);

    /*
    const std::vector<SharcArchiveRes::Entry>& entries = pack_arc.readEntry();
    for (const auto& entry : entries)
        RIO_LOG("%s\n", entry.name);
    */

    SharcArchiveRes archive;
    bool inner_archive = false;

    if (pack_arc.getFileConst("course/course1.bin") != nullptr)
        archive = pack_arc;

    else
    {
        inner_archive = true;

        std::string level_name = "";

        const void* level_dat = nullptr;

        u32                 level_name_len = 0;
        const char* const   level_name_dat = static_cast<const char*>(pack_arc.getFileConst("levelname", &level_name_len));

        if (level_name_len)
        {
            level_name = std::string(level_name_dat, level_name_len);
            level_dat = pack_arc.getFileConst(level_name.c_str());
        }

        if (!level_dat)
        {
            level_name = remove_extension(path_basename(path));
            level_dat = pack_arc.getFileConst(level_name.c_str());
        }
        else
        {
            read_files.insert(level_name);
            read_files.emplace("levelname");
        }

        if (!level_dat)
        {
            RIO_LOG("Inner level not found...\n");
            rio::MemUtil::free(pack_arc_dat);
            return false;
        }
        else
        {
            read_files.insert(level_name);
        }

        // RIO_LOG("Level name is: %s\n", level_name.c_str());

        if (!archive.prepareArchive(level_dat))
        {
            RIO_LOG("Could not load inner Sharc file...\n");
            rio::MemUtil::free(pack_arc_dat);
            return false;
        }
    }

    for (s32 i = 0; i < CD_FILE_MAX_NUM; i++)
    {
        sCourseDataFileName  [COURSE_DATA_FILE_ID_POS] = '1' + i;
        sCourseDataFileL0Name[COURSE_DATA_FILE_ID_POS] = '1' + i;
        sCourseDataFileL1Name[COURSE_DATA_FILE_ID_POS] = '1' + i;
        sCourseDataFileL2Name[COURSE_DATA_FILE_ID_POS] = '1' + i;

        CourseDataFile& cd_file = mFile[i];

        cd_file.load(
            i,
            archive.getFileConst(sCourseDataFileName),
            archive.getFileConst(sCourseDataFileL0Name),
            archive.getFileConst(sCourseDataFileL1Name),
            archive.getFileConst(sCourseDataFileL2Name)
        );

        if (!inner_archive)
        {
            read_files.emplace(sCourseDataFileName);
            read_files.emplace(sCourseDataFileL0Name);
            read_files.emplace(sCourseDataFileL1Name);
            read_files.emplace(sCourseDataFileL2Name);
        }

        if (i == 0)
        {
            if (!cd_file.isValid())
            {
                RIO_LOG("File 0 must be valid!\n");
                RIO_ASSERT(false);
                return false;
            }

            Bg::instance()->clear();
        }
        else
        {
            if (!cd_file.isValid())
                continue;
        }

        RIO_LOG("Has file %d\n", i);

        for (s32 j = 0; j < CD_FILE_ENV_MAX_NUM; j++)
        {
            std::string env_name = cd_file.getEnvironment(j);
            if (!env_name.empty())
            {
                [[maybe_unused]] bool success = Bg::instance()->loadUnit(pack_arc, env_name);
                RIO_ASSERT(success);

                read_files.emplace(env_name);
            }
        }
    }

    clearResData_();

    const std::vector<SharcArchiveRes::Entry>& entries = pack_arc.readEntry();
    for (const SharcArchiveRes::Entry& entry : entries)
    {
        const std::string& name = entry.name;

        if (read_files.find(name) != read_files.end())
            continue;

        u32 size = 0;
        const void* const data = pack_arc.getFileConst(name.c_str(), &size);

        u8* new_data = static_cast<u8*>(rio::MemUtil::alloc(size, 0x2000));
        rio::MemUtil::copy(new_data, data, size);

        mResData.try_emplace(name, std::span{ new_data, size });

        ResMgr::instance()->loadArchiveRes(name, new_data, false);
    }

    rio::MemUtil::free(pack_arc_dat);
    return true;
}

std::span<u8> CourseData::save() const
{
    SharcWriter<0x65> pack_writer;
    for (const auto& file : mResData)
        pack_writer.addFile(file.first, file.second);

    std::vector<u8*> to_free;
    to_free.reserve(Bg::instance()->getUnitFileMap().size() + 4 * CD_FILE_MAX_NUM);

    for (const auto& file : Bg::instance()->getUnitFileMap())
    {
        const auto& file_data = file.second->save();
        RIO_ASSERT(file_data.data() && file_data.size());
        pack_writer.addFile(file.first, file_data); to_free.push_back(file_data.data());
    }

    for (s32 i = 0; i < CD_FILE_MAX_NUM; i++)
    {
        const CourseDataFile& cd_file = mFile[i];
        if (!cd_file.isValid())
            continue;

        sCourseDataFileName  [COURSE_DATA_FILE_ID_POS] = '1' + i;
        sCourseDataFileL0Name[COURSE_DATA_FILE_ID_POS] = '1' + i;
        sCourseDataFileL1Name[COURSE_DATA_FILE_ID_POS] = '1' + i;
        sCourseDataFileL2Name[COURSE_DATA_FILE_ID_POS] = '1' + i;

        const auto& cd_file_data = cd_file.save();

        pack_writer.addFile(sCourseDataFileName, cd_file_data[0]); to_free.push_back(cd_file_data[0].data());
        if (cd_file_data[1].data()) { pack_writer.addFile(sCourseDataFileL0Name, cd_file_data[1]); to_free.push_back(cd_file_data[1].data()); }
        if (cd_file_data[2].data()) { pack_writer.addFile(sCourseDataFileL1Name, cd_file_data[2]); to_free.push_back(cd_file_data[2].data()); }
        if (cd_file_data[3].data()) { pack_writer.addFile(sCourseDataFileL2Name, cd_file_data[3]); to_free.push_back(cd_file_data[3].data()); }
    }

    const auto& ret = pack_writer.save(true);

    for (u8* ptr : to_free)
        rio::MemUtil::free(ptr);

    return ret;
}

void CourseData::clearResData_()
{
    if (CourseView::instance())
        CourseView::instance()->uninitialize();

    for (const auto& file : mResData)
    {
        ResMgr::instance()->destroyArchiveRes(file.first);
        rio::MemUtil::free(file.second.data());
    }

    mResData.clear();
}
