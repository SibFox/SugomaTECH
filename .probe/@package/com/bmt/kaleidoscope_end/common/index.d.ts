import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Endermite } from "@package/net/minecraft/world/entity/monster";

declare module "@package/com/bmt/kaleidoscope_end/common" {
    export class $KEEndermiteInfo implements $INBTSerializable<$CompoundTag> {
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        aiStep(): void;
        isInLove(): boolean;
        setInLove(arg0: $Player | null): void;
        burstLoveParticle(arg0: $Endermite): void;
        fed: boolean;
        inLove: number;
        cooldown: number;
        loveTime: number;
        constructor(arg0: $Endermite);
    }
}
