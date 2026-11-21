import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $UUID, $Collection_ } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/corpse/corelib/death" {
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        getPlayer(): $ServerPlayer;
        getDeath(): $Death;
        removeDrops(): void;
        storeDeath(): void;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
    export class $Death {
        getId(): $UUID;
        getTimestamp(): number;
        getDimension(): string;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getBlockPos(): $BlockPos;
        getModel(): number;
        getAllItems(): $NonNullList<$ItemStack>;
        getEquipment(): $NonNullList<$ItemStack>;
        getExperience(): number;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getPlayerUUID(): $UUID;
        getPosZ(): number;
        getPosX(): number;
        getPosY(): number;
        getPlayerName(): string;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        static fromPlayer(arg0: $Player): $Death;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        getMainInventory(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        get id(): $UUID;
        get timestamp(): number;
        get dimension(): string;
        get blockPos(): $BlockPos;
        get model(): number;
        get allItems(): $NonNullList<$ItemStack>;
        get equipment(): $NonNullList<$ItemStack>;
        get experience(): number;
        get playerUUID(): $UUID;
        get posZ(): number;
        get posX(): number;
        get posY(): number;
        get playerName(): string;
        get offHandInventory(): $NonNullList<$ItemStack>;
        get mainInventory(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get additionalItems(): $NonNullList<$ItemStack>;
    }
}
