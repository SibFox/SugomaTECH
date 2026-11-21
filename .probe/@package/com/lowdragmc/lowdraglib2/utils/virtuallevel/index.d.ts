import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $LongOpenHashSet, $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Codec } from "@package/com/mojang/serialization";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $Entity$RemovalReason_, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $ParticleManager } from "@package/com/lowdragmc/lowdraglib2/client/scene";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $ArrayList, $List, $Map_ } from "@package/java/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Predicate_, $Supplier } from "@package/java/util/function";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockInfo } from "@package/com/lowdragmc/lowdraglib2/utils/data";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";

declare module "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel" {
    export class $DummyWorld extends $Level {
        getBounds(): $AABB;
        addEntity(arg0: $Entity): void;
        getParticleManager(): $ParticleManager;
        tickWorld(): void;
        tickEntities(): void;
        removeEntity(arg0: number, arg1: $Entity$RemovalReason_): void;
        createParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        isFilledBlock(arg0: $BlockPos_): boolean;
        setParticleManager(arg0: $ParticleManager): void;
        prepareLighting(arg0: $BlockPos_): void;
        getFilledBlocks(): $LongSet;
        getAsClientWorld(): $Supplier<$ClientLevel>;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
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
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor();
        constructor(arg0: $RegistryAccess);
        get bounds(): $AABB;
        get filledBlocks(): $LongSet;
        get asClientWorld(): $Supplier<$ClientLevel>;
    }
    export class $TrackedDummyWorld extends $DummyWorld {
        clear(): void;
        addBlock(arg0: $BlockPos_, arg1: $BlockInfo): void;
        removeBlock(arg0: $BlockPos_): void;
        addBlocks(arg0: $Map_<$BlockPos_, $BlockInfo>): void;
        setBlockFilter(arg0: $Predicate_<$BlockPos>): void;
        getAllRenderedEntities(): $Iterable<$Entity>;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        proxyWorld: $WeakReference<$Level>;
        geneticsresequenced$antiFieldPositions: $LongOpenHashSet;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor();
        constructor(arg0: $Level_);
        set blockFilter(value: $Predicate_<$BlockPos>);
        get allRenderedEntities(): $Iterable<$Entity>;
    }
}
