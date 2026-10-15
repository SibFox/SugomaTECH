import { $ServerLevelAccessor, $Level, $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $LongOpenHashSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $ArrayList, $List, $Map, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $SchematicLevelExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create/schematics";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";

declare module "@package/net/createmod/catnip/levelWrappers" {
    export class $SchematicLevel extends $WrappedLevel implements $ServerLevelAccessor, $SchematicLevelAccessor, $SchematicLevelExtension {
        getBounds(): $BoundingBox;
        setBounds(arg0: $BoundingBox): void;
        getLevel(): $ServerLevel;
        getBlockEntities(): $Iterable<$BlockEntity>;
        getEntityList(): $List<$Entity>;
        sable$getSubLevels(): $List<any>;
        getBlockMap(): $Map<$BlockPos, $BlockState>;
        getAllPositions(): $Set<$BlockPos>;
        getRenderedBlockEntities(): $Iterable<$BlockEntity>;
        addFreshEntityWithPassengers(arg0: $Entity): void;
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
        constructor(arg0: $Level_);
        constructor(arg0: $BlockPos_, arg1: $Level_);
        get level(): $ServerLevel;
        get blockEntities(): $Iterable<$BlockEntity>;
        get entityList(): $List<$Entity>;
        get blockMap(): $Map<$BlockPos, $BlockState>;
        get allPositions(): $Set<$BlockPos>;
        get renderedBlockEntities(): $Iterable<$BlockEntity>;
    }
    export class $WrappedLevel extends $Level {
        getLevel(): $Level;
        setChunkSource(arg0: $ChunkSource): void;
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
        constructor(arg0: $Level_);
        get level(): $Level;
        set chunkSource(value: $ChunkSource);
    }
    export class $SchematicLevelAccessor {
    }
    export interface $SchematicLevelAccessor extends $LevelAccessor {
        getBounds(): $BoundingBox;
        setBounds(arg0: $BoundingBox): void;
        getBlockEntities(): $Iterable<$BlockEntity>;
        getEntityList(): $List<$Entity>;
        getBlockMap(): $Map<$BlockPos, $BlockState>;
        getAllPositions(): $Set<$BlockPos>;
        getRenderedBlockEntities(): $Iterable<$BlockEntity>;
        get blockEntities(): $Iterable<$BlockEntity>;
        get entityList(): $List<$Entity>;
        get blockMap(): $Map<$BlockPos, $BlockState>;
        get allPositions(): $Set<$BlockPos>;
        get renderedBlockEntities(): $Iterable<$BlockEntity>;
    }
}
