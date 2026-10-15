import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $LongOpenHashSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Codec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $Selection } from "@package/net/createmod/ponder/api/scene";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $ArrayList, $List, $Map } from "@package/java/util";
import { $PonderWorldAccessor } from "@package/com/almostreliable/ponderjs/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $PonderLevelAccessor } from "@package/com/petrolpark/mixin/compat/create/accessor/client";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";

declare module "@package/net/createmod/ponder/api/level" {
    export class $PonderLevel extends $SchematicLevel implements $PonderWorldAccessor, $PonderLevelAccessor {
        tick(): void;
        addParticle(arg0: $Particle | null): void;
        createBackup(): void;
        clearMask(): void;
        restore(): void;
        getBlockBreakingProgressions(): $Map<$BlockPos, number>;
        renderParticles(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        renderEntities(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Camera, arg3: number): void;
        addBlockDestroyEffects(arg0: $BlockPos_, arg1: $BlockState_): void;
        setBlockBreakingProgress(arg0: $BlockPos_, arg1: number): void;
        popLight(): void;
        setMask(arg0: $Selection | null): void;
        restoreBlocks(arg0: $Selection): void;
        pushFakeLight(arg0: number): void;
        ponderjs$makeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        invokeMakeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        scene: $PonderScene;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        geneticsresequenced$antiFieldPositions: $LongOpenHashSet;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        renderMode: boolean;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        anchor: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $BlockPos_, arg1: $Level_);
        get blockBreakingProgressions(): $Map<$BlockPos, number>;
        set mask(value: $Selection | null);
    }
}
