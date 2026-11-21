import { $SpaceMaterialSet } from "@package/com/denfop/api/space/dimension/worldgen";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SpaceVentType } from "@package/com/denfop/api/space/dimension";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IClientBlockExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $ThreadLocal, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BaseEntityBlock, $Block$BlockStatePairKey, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $HitResult, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3d } from "@package/org/joml";

declare module "@package/com/denfop/api/space/dimension/worldgen/block" {
    export class $SpaceGeyserBlockEntity$GeyserVisualProfile extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceGeyserBlockEntity$GeyserVisualProfile}.
     */
    export type $SpaceGeyserBlockEntity$GeyserVisualProfile_ = { coreCountMin?: number, burstHorizontalSpeed?: number, burstCountMin?: number, outerMaxUpSpeed?: number, topMistHeightSpread?: number, burstCooldownRandom?: number, coreRadius?: number, burstRadius?: number, coreCountMax?: number, topMistCountMin?: number, burstCountMax?: number, outerMinUpSpeed?: number, topMistUpSpeedMin?: number, outerHorizontalNoise?: number, outerCountMin?: number, topMistRadius?: number, outerRadiusMin?: number, horizontalDrift?: number, burstCooldownMin?: number, burstMaxUpSpeed?: number, topMistCountMax?: number, topMistUpSpeedMax?: number, baseHeightSpread?: number, topMistBaseHeight?: number, maxUpSpeed?: number, baseSpawnY?: number, outerCountMax?: number, topMistHorizontalSpeed?: number, burstChance?: number, outerRadiusMax?: number, minUpSpeed?: number, burstMinUpSpeed?: number,  } | [coreCountMin?: number, burstHorizontalSpeed?: number, burstCountMin?: number, outerMaxUpSpeed?: number, topMistHeightSpread?: number, burstCooldownRandom?: number, coreRadius?: number, burstRadius?: number, coreCountMax?: number, topMistCountMin?: number, burstCountMax?: number, outerMinUpSpeed?: number, topMistUpSpeedMin?: number, outerHorizontalNoise?: number, outerCountMin?: number, topMistRadius?: number, outerRadiusMin?: number, horizontalDrift?: number, burstCooldownMin?: number, burstMaxUpSpeed?: number, topMistCountMax?: number, topMistUpSpeedMax?: number, baseHeightSpread?: number, topMistBaseHeight?: number, maxUpSpeed?: number, baseSpawnY?: number, outerCountMax?: number, topMistHorizontalSpeed?: number, burstChance?: number, outerRadiusMax?: number, minUpSpeed?: number, burstMinUpSpeed?: number, ];
    export class $SpaceGeyserBlockEntityRenderer implements $BlockEntityRenderer<$SpaceGeyserBlockEntity> {
        render(arg0: $SpaceGeyserBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $SpaceGeyserBlockEntity, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $SpaceGeyserBlockEntity): boolean;
        getRenderBoundingBox(arg0: $SpaceGeyserBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SpaceGeyserBlock extends $BaseEntityBlock {
        explosionResistance: number;
        static ACTIVE: $BooleanProperty;
        static VENT_TYPE: $EnumProperty<$SpaceVentType>;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        descriptionId: string;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$SpaceGeyserBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor();
    }
    export class $SpaceGeyserBlockEntity extends $BlockEntity {
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpaceGeyserBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpaceGeyserBlockEntity): void;
        materials(arg0: $Level_): $SpaceMaterialSet;
        captureSourceState(arg0: boolean): void;
        getSourceState(): $BlockState;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get sourceState(): $BlockState;
    }
    export class $SpaceGeyserClientBlockExtensions implements $IClientBlockExtensions {
        addDestroyEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ParticleEngine): boolean;
        addHitEffects(arg0: $BlockState_, arg1: $Level_, arg2: $HitResult, arg3: $ParticleEngine): boolean;
        areBreakingParticlesTinted(arg0: $BlockState_, arg1: $ClientLevel, arg2: $BlockPos_): boolean;
        getFogColor(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Vector3d, arg5: number): $Vector3d;
        playBreakSound(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        constructor();
    }
    export class $SpaceGeyserBlockEntity$ParticleLod extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceGeyserBlockEntity$ParticleLod}.
     */
    export type $SpaceGeyserBlockEntity$ParticleLod_ = { countScale?: number, burstEnabled?: boolean, burstChanceScale?: number, secondaryChanceScale?: number, outerEnabled?: boolean, topEnabled?: boolean, emissionInterval?: number,  } | [countScale?: number, burstEnabled?: boolean, burstChanceScale?: number, secondaryChanceScale?: number, outerEnabled?: boolean, topEnabled?: boolean, emissionInterval?: number, ];
    export class $SpaceGeyserBlockEntityRenderer$FaceAppearance extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceGeyserBlockEntityRenderer$FaceAppearance}.
     */
    export type $SpaceGeyserBlockEntityRenderer$FaceAppearance_ = { sprite?: $TextureAtlasSprite, color?: number,  } | [sprite?: $TextureAtlasSprite, color?: number, ];
}
