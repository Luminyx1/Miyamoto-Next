#pragma once

#include <action/IAction.h>
#include <item/ItemID.h>

class ActionItemDataChange : public IAction
{
    ACTION_CREATE(ActionItemDataChange)

public:
    struct Context
    {
        ItemID                      item_id;
        std::shared_ptr<const void> before;
        std::shared_ptr<const void> after;
        u32                         data_change_flag = ~0u;

        ~Context();
    };

public:
    ActionItemDataChange(const void* context);

    bool apply() const override;
    void unapply() const override;

private:
    ItemID                      mItemID;
    std::shared_ptr<const void> mBefore;
    std::shared_ptr<const void> mAfter;
    u32                         mDataChangeFlag;
};
