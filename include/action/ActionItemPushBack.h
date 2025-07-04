#pragma once

#include <action/IAction.h>
#include <item/ItemType.h>

#include <vector>

class ActionItemPushBack : public IAction
{
    ACTION_CREATE(ActionItemPushBack)

public:
    struct Item
    {
        ItemType                    item_type;
        std::shared_ptr<const void> data;
        std::shared_ptr<const void> extra;

        Item(ItemType item_type_, const std::shared_ptr<const void>& data_, const std::shared_ptr<const void>& extra_ = nullptr)
            : item_type(item_type_)
            , data(data_)
            , extra(extra_)
        {
        }
    };

    struct Context
    {
        std::vector<Item>   items;
        bool                transform = false;
        u16                 center_unit_x,
                            center_unit_y;

        ~Context();
    };

public:
    ActionItemPushBack(const void* context);

    bool apply() const override;
    void unapply() const override;

private:
    std::vector<Item>   mItems;
    bool                mTransform;
    u16                 mCenterUnitX,
                        mCenterUnitY;
};
