import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $UUID, $LinkedHashMap } from "@package/java/util";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ETFTexture } from "@package/traben/entity_texture_features/features/texture_handlers";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Team } from "@package/net/minecraft/world/scores";
import { $Iterable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/utils" {
    export class $ETFLruCache$UUIDInteger extends $ETFLruCache<$UUID, number> {
        constructor();
        constructor(capacity: number);
    }
    export class $ETFRenderLayerWithTexture {
    }
    export interface $ETFRenderLayerWithTexture {
        etf$getId(): ($ResourceLocation) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ETFRenderLayerWithTexture}.
     */
    export type $ETFRenderLayerWithTexture_ = (() => ($ResourceLocation_) | undefined);
    export class $ETFLruCache<X, Y> extends $LinkedHashMap<X, Y> {
        defaultReturnValue(value: Y): void;
        removeEntryOnly(key: X): void;
        constructor();
        constructor(capacity: number);
    }
    export class $ETFEntity {
    }
    export interface $ETFEntity {
        etf$getETFRenderState(): $ETFEntityRenderState;
        etf$getOptifineVehicleId(): number;
        etf$getItemsEquipped(): $Iterable<$ItemStack>;
        etf$getScoreboardTeam(): $Team;
        etf$getArmorItems(): $Iterable<$ItemStack>;
        etf$getVelocity(): $Vec3;
        etf$getBlockY(): number;
        /**
         * @deprecated
         */
        etf$getPose(): $Pose;
        etf$isBlockEntity(): boolean;
        etf$distanceTo(arg0: $Entity): number;
        etf$getType(): $EntityType<never>;
        etf$getBlockPos(): $BlockPos;
        etf$getWorld(): $Level;
        etf$getEntityKey(): string;
        etf$getHandItems(): $Iterable<$ItemStack>;
        etf$getUuid(): $UUID;
        etf$getCustomName(): $Component;
        etf$getOptifineId(): number;
        etf$hasCustomName(): boolean;
        etf$canBeBright(): boolean;
        etf$getNbt(): $CompoundTag;
    }
    export class $ETFVertexConsumer {
    }
    export interface $ETFVertexConsumer {
        etf$initETFVertexConsumer(arg0: $MultiBufferSource_, arg1: $RenderType): void;
        etf$getProvider(): $MultiBufferSource;
        etf$getRenderLayer(): $RenderType;
        etf$getETFTexture(): $ETFTexture;
    }
}
