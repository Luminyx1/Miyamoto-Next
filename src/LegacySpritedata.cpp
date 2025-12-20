#include "filedevice/rio_FileDevice.h"
#include "filedevice/rio_FileDeviceMgr.h"
#include "misc/rio_Types.h"
#include <LegacySpritedata.h>
#include <pugixml.hpp>

namespace {
    std::pair<u32, u32> parseBitRange(const pugi::xml_node& node) {
        int shift = 0;
        std::string sbit;

        if (node.attribute("nybble"))
        {
            sbit = node.attribute("nybble").as_string();
            shift = 2;
        }
        else
        {
            sbit = node.attribute("bit").as_string();
            shift = 0;
        }
    
        u32 startBit = 0;
        u32 endBit = 0;

        size_t dashPos = sbit.find('-');
        if (dashPos == std::string::npos)
        {
            int val = std::stoi(sbit);
    
            if (shift == 0)
            {
                startBit = val;
                endBit = val + 1; // Exclusive end
            }
            else
            {
                startBit = ((val - 1) << shift) + 1;
                endBit = (val << shift) + 1;
            }
        }
        else
        {
            int val1 = std::stoi(sbit.substr(0, dashPos));
            int val2 = std::stoi(sbit.substr(dashPos + 1));

            startBit = ((val1 - 1) << shift) + 1;
            endBit = (val2 << shift) + 1;
        }
    
        return { startBit, endBit };
    }
}

bool LegacySpritedata::createSingleton()
{
    if (sInstance)
        return false;
    
    sInstance = new LegacySpritedata();
    return true;
}

void LegacySpritedata::destroySingleton()
{
    if (!sInstance)
        return;
    
    delete sInstance;
    sInstance = nullptr;
}

LegacySpritedata::LegacySpritedata()
{
    rio::FileDevice::LoadArg arg;
    arg.path = "spritedata.xml";

    char* file = (char*)rio::FileDeviceMgr::instance()->load(arg);
    
    pugi::xml_document doc;
    const pugi::xml_parse_result result = doc.load_string(file);
    RIO_ASSERT(result);
    
    const pugi::xml_node root = doc.child("sprites");

    for (const pugi::xml_node spriteNode : root.children("sprite"))
    {
        SpriteDataEntry entry;
        entry.id = spriteNode.attribute("id").as_int();
        entry.name = spriteNode.attribute("name").as_string();
        entry.notes = spriteNode.attribute("notes").as_string();

        for (const pugi::xml_node field : spriteNode.children())
        {
            const std::string tag = field.name();
            
            enum class Type
            {
                List, Checkbox, Value, Bitfield
            };

            Type type;
            if (tag == "checkbox")
                type = Type::Checkbox;
            else if (tag == "list")
                type = Type::List;
            else if (tag == "value")
                type = Type::Value;
            else if (tag == "bitfield")
                type = Type::Bitfield;
            else
            {
                RIO_LOG("LegacySpritedata: Unknown tag name '%s' in sprite '%s'\n", tag.c_str(), entry.name.c_str());
                //RIO_ASSERT(false); // <-- add strict mode?
                continue;
            }
            SpriteDataEntry::Setting setting;
            setting.title = field.attribute("title").as_string();
            setting.comment = field.attribute("comment").as_string();

            if (type == Type::Bitfield)
            {
                setting.bitStart = field.attribute("startbit").as_uint();
                u32 bitNum = field.attribute("bitnum").as_uint();
                setting.bitEnd = setting.bitStart + bitNum;
                setting.data = SpriteDataEntry::Bitfield();
            }
            else
            {
                auto [start, end] = parseBitRange(field);
                setting.bitStart = start;
                setting.bitEnd = end;

                if (type == Type::Checkbox)
                {
                    SpriteDataEntry::Checkbox cb;
                    cb.mask = field.attribute("mask").as_uint(1);
                    setting.data = cb;
                } 
                else if (type == Type::List)
                {
                    SpriteDataEntry::List lst;
                    for (pugi::xml_node e : field.children("entry"))
                    {
                        lst.values.push_back({
                            e.attribute("value").as_uint()
                        });

                        char* name = (char*)rio::MemUtil::alloc(strlen(e.text().as_string()) + 1, 4);
                        std::strcpy(name, e.text().as_string());

                        lst.names.push_back({
                            name
                        });
                    }
                    setting.data = lst;
                }
                else if (type == Type::Value)
                {
                    setting.data = SpriteDataEntry::Value();
                }
            }

            entry.settings.push_back(std::move(setting));
        }

        mSprites[entry.id] = std::move(entry);
    }

    rio::MemUtil::free(file);
}

LegacySpritedata::~LegacySpritedata()
{
    for (const auto& [id, sprite] : mSprites)
    {
        for (const SpriteDataEntry::Setting& setting : sprite.settings)
        {
            if (std::holds_alternative<SpriteDataEntry::List>(setting.data))
            {
                const SpriteDataEntry::List& lst = std::get<SpriteDataEntry::List>(setting.data);
                for (const char* namePtr : lst.names)
                {
                    rio::MemUtil::free((void*)namePtr);
                }
            }
        }
    }
}
