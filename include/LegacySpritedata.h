#pragma once

#include <misc/rio_Types.h>

#include <map>
#include <vector>
#include <variant>
#include <string>

class LegacySpritedata {
public:
    static bool createSingleton();
    static void destroySingleton();
    static LegacySpritedata* instance() { return sInstance; }

private:
    static constexpr const char* cSection = "LegacySpritedata";
    static inline LegacySpritedata* sInstance = nullptr;

    LegacySpritedata();
    ~LegacySpritedata();

    LegacySpritedata(const LegacySpritedata&) = delete;
    LegacySpritedata& operator=(const LegacySpritedata&) = delete;

public:
    struct SpriteDataEntry {
        struct List {
            std::vector<u32> values;
            std::vector<const char*> names;
        };
        
        struct Checkbox {
            u8 mask;
        };
        
        struct Value {
            
        };
        
        struct Bitfield {
            
        };
        
        struct Setting {
            std::variant<std::monostate, List, Checkbox, Value, Bitfield> data;
            std::string title, comment;
            u8 bitStart, bitEnd; // upper bound is exclusive
        };

        s32 id;
        std::string name, notes;
        std::vector<Setting> settings;
    };
    
    [[nodiscard]]
    const SpriteDataEntry* get(u16 id) const
    {
        const auto it = mSprites.find(id);
        if (it == mSprites.end())
        {
            return nullptr;
        }
        return &it->second;
    }
    
private:
    std::map<u16, SpriteDataEntry> mSprites;
};
