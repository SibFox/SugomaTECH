import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongPredicate_ } from "@package/java/util/function";
import { $Long2ObjectOpenHashMap, $LongLinkedOpenHashSet, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos_, $Direction_, $SectionPos, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $DataLayer, $LightChunk, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum, $Object } from "@package/java/lang";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getLightValue(levelPos: $BlockPos_): number;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
    }
    export class $DynamicGraphMinFixedPoint {
        removeFromQueue(levelPos: number): void;
        removeIf(predicate: $LongPredicate_): void;
        setLevel(chunkPos: number, arg1: number): void;
        getLevel(chunkPos: number): number;
        getQueueSize(): number;
        checkNode(levelPos: number): void;
        runUpdates(toUpdateCount: number): number;
        hasWork(): boolean;
        isSource(pos: number): boolean;
        checkNeighbor(fromPos: number, arg1: number, toPos: number, arg3: boolean): void;
        /**
         * Returns level propagated from start position with specified level to the neighboring end position.
         */
        getComputedLevel(startPos: number, arg1: number, endPos: number): number;
        checkNeighborsAfterUpdate(pos: number, arg1: number, level: boolean): void;
        /**
         * Returns level propagated from start position with specified level to the neighboring end position.
         */
        computeLevelFromNeighbor(startPos: number, arg1: number, endPos: number): number;
        checkEdge(fromPos: number, arg1: number, toPos: number, arg3: boolean): void;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static getFromLevel(entry: number): number;
        static isFromEmptyShape(entry: number): boolean;
        static increaseSkySourceInDirections(down: boolean, north: boolean, south: boolean, west: boolean, east: boolean): number;
        static increaseOnlyOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static decreaseSkipOneDirection(level: number, direction: $Direction_): number;
        static decreaseAllDirections(level: number): number;
        static shouldPropagateInDirection(entry: number, arg1: $Direction_): boolean;
        static increaseSkipOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static increaseLightFromEmission(level: number, fromEmptyShape: boolean): number;
        static isIncreaseFromEmission(entry: number): boolean;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        getLayer(index: number): $DataLayer;
        copy(): M;
        clearCache(): void;
        disableCache(): void;
        setLayer(sectionPos: number, arg1: $DataLayer): void;
        removeLayer(index: number): $DataLayer;
        hasLayer(sectionPos: number): boolean;
        copyDataLayer(index: number): $DataLayer;
        map: $Long2ObjectOpenHashMap<$DataLayer>;
        constructor(map: $Long2ObjectOpenHashMap<$DataLayer>);
    }
    export class $LevelLightEngine implements $LightEventListener {
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        getDebugData(lightLayer: $LightLayer_, sectionPos: $SectionPos): string;
        getLayerListener(type: $LightLayer_): $LayerLightEventListener;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(pos: $ChunkPos, retain: boolean): void;
        lightOnInSection(sectionPos: $SectionPos): boolean;
        runLightUpdates(): number;
        getLightSectionCount(): number;
        retainData(pos: $ChunkPos, retain: boolean): void;
        queueSectionData(lightLayer: $LightLayer_, sectionPos: $SectionPos, dataLayer: $DataLayer | null): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        getMinLightSection(): number;
        hasLightWork(): boolean;
        getMaxLightSection(): number;
        getDebugSectionType(lightLayer: $LightLayer_, sectionPos: $SectionPos): $LayerLightSectionStorage$SectionType;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunkGetter: $LightChunkGetter, blockLight: boolean, skyLight: boolean);
        get lightSectionCount(): number;
        get minLightSection(): number;
        get maxLightSection(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        constructor(expectedSize: number, loadFactor: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $SkyLightSectionStorage;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, sectionStorage: $SkyLightSectionStorage);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getState(pos: $BlockPos_): $BlockState;
        getChunk(x: number, z: number): $LightChunk;
        checkNode(packedPos: number): void;
        static getLightBlockInto(level: $BlockGetter, state1: $BlockState_, pos1: $BlockPos_, state2: $BlockState_, pos2: $BlockPos_, direction: $Direction_, defaultReturnValue: number): number;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        getDebugData(sectionPos: number): string;
        getLightValue(levelPos: $BlockPos_): number;
        static hasDifferentLightProperties(level: $BlockGetter, pos: $BlockPos_, state1: $BlockState_, state2: $BlockState_): boolean;
        getOcclusionShape(state: $BlockState_, pos: number, arg2: $Direction_): $VoxelShape;
        static getOcclusionShape(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, direction: $Direction_): $VoxelShape;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(chunkPos: $ChunkPos, retainData: boolean): void;
        runLightUpdates(): number;
        getOpacity(state: $BlockState_, pos: $BlockPos_): number;
        retainData(chunkPos: $ChunkPos, retainData: boolean): void;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        hasLightWork(): boolean;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        static isEmptyShape(state: $BlockState_): boolean;
        shapeOccludes(packedPos1: number, arg1: $BlockState_, state1: number, packedPos2: $BlockState_, arg4: $Direction_): boolean;
        enqueueDecrease(packedPos1: number, arg1: number): void;
        propagateIncrease(packedPos: number, arg1: number, queueEntry: number): void;
        propagateDecrease(packedPos1: number, arg1: number): void;
        enqueueIncrease(packedPos1: number, arg1: number): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        flywheel$storage(): $Object;
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $Object;
        constructor(chunkSource: $LightChunkGetter, storage: $Object);
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(value: number, arg1: number): void;
        dequeue(value: number, arg1: number, levelIndex: number): void;
        removeFirstLong(): number;
        constructor(levelCount: number, expectedSize: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        getLightValue(packedPos: number, arg1: boolean): number;
        getBottomSectionY(): number;
        getTopSectionY(levelPos: number): number;
        isAboveData(sectionPos: number): boolean;
        hasLightDataAtOrBelow(y: number): boolean;
        flywheel$skyDataLayer(sectionPos: number): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(chunkSource: $LightChunkGetter);
        get bottomSectionY(): number;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        getLightValue(levelPos: $BlockPos_): number;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        runLightUpdates(): number;
        propagateLightSources(chunkPos: $ChunkPos): void;
        hasLightWork(): boolean;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        runLightUpdates(): number;
        propagateLightSources(chunkPos: $ChunkPos): void;
        hasLightWork(): boolean;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        updateSectionStatus(sectionColumnPos: number, arg1: boolean): void;
        getLightValue(levelPos: number): number;
        setLightEnabled(sectionColumnPos: number, arg1: boolean): void;
        lightOnInSection(sectionPos: number): boolean;
        retainData(sectionColumnPos: number, arg1: boolean): void;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        getDataLayerData(sectionPos: number): $DataLayer;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        setStoredLevel(levelPos: number, arg1: number): void;
        swapSectionMap(): void;
        getStoredLevel(levelPos: number): number;
        hasInconsistencies(): boolean;
        onNodeRemoved(sectionPos: number): void;
        putSectionState(sectionPos: number, arg1: number): void;
        getDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        getDataLayer(map: M, sectionPos: number): $DataLayer;
        createDataLayer(sectionPos: number): $DataLayer;
        onNodeAdded(sectionPos: number): void;
        markSectionAndNeighborsAsAffected(sectionPos: number): void;
        markNewInconsistencies(lightEngine: $LightEngine<M, never>): void;
        getDataLayerToWrite(sectionPos: number): $DataLayer;
        storingLightForSection(sectionPos: number): boolean;
        flywheel$callGetDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: M;
        chunkSource: $LightChunkGetter;
        updatingSectionData: M;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(layer: $LightLayer_, chunkSource: $LightChunkGetter, updatingSectionData: M);
    }
    export class $ChunkSkyLightSources {
        update(level: $BlockGetter, x: number, y: number, z: number): boolean;
        fillFrom(chunk: $ChunkAccess): void;
        getLowestSourceY(x: number, z: number): number;
        getHighestLowestSourceY(): number;
        static NEGATIVE_INFINITY: number;
        constructor(level: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $BlockLightSectionStorage;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, storage: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(chunkSource: $LightChunkGetter);
    }
}
