import { $Level } from "@package/net/minecraft/world/level";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $Team } from "@package/net/minecraft/world/scores";
import { $UUID } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/features/state" {
    export class $ETFEntityRenderState$ETFRenderStateInit {
    }
    export interface $ETFEntityRenderState$ETFRenderStateInit {
        make(arg0: $ETFEntity): $ETFEntityRenderState;
    }
    /**
     * Values that may be interpreted as {@link $ETFEntityRenderState$ETFRenderStateInit}.
     */
    export type $ETFEntityRenderState$ETFRenderStateInit_ = ((arg0: $ETFEntity) => $ETFEntityRenderState);
    export class $ETFEntityRenderState {
        static setEtfRenderStateConstructor(reason: string, init: $ETFEntityRenderState$ETFRenderStateInit_): void;
        static forEntity(entity: $ETFEntity): $ETFEntityRenderState;
    }
    export interface $ETFEntityRenderState {
        customName(): $Component;
        uuid(): $UUID;
        /**
         * @deprecated
         */
        entity(): $ETFEntity;
        /**
         * @deprecated
         */
        pose(): $Pose;
        world(): $Level;
        nbt(): $CompoundTag;
        isBlockEntity(): boolean;
        optifineVehicleId(): number;
        canRenderBright(): boolean;
        scoreboardTeam(): $Team;
        hasCustomName(): boolean;
        itemsEquipped(): $Iterable<$ItemStack>;
        handItems(): $Iterable<$ItemStack>;
        blockPos(): $BlockPos;
        velocity(): $Vec3;
        distanceTo(arg0: $Entity): number;
        armorItems(): $Iterable<$ItemStack>;
        entityType(): $EntityType<never>;
        blockY(): number;
        entityKey(): string;
        optifineId(): number;
        get blockEntity(): boolean;
    }
}
