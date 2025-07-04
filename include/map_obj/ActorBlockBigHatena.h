#pragma once

#include <map_obj/ActorBlockBigBase.h>

class ActorBlockBigHatena : public ActorBlockBigBase
{
    MAP_ACTOR_ITEM_CREATE_DEFAULT(ActorBlockBigHatena)

public:
    ActorBlockBigHatena(const MapActorData& map_actor_data, u32 index)
        : ActorBlockBigBase(map_actor_data, index, UnitID(114), false)
    {
    }
};
