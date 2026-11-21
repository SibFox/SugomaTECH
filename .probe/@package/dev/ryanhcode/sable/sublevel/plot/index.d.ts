import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID_, $Map$Entry, $Set, $List, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $ObjectCollection } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChunkHolder, $ChunkResult, $ChunkHolder$PlayerProvider_, $ChunkHolder$LevelChangeListener_, $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Holder$Reference, $Holder_, $Holder, $Direction_, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $BlockEntitySubLevelActor, $BlockSubLevelLiftProvider$LiftProviderContext, $BlockEntitySubLevelReactionWheel } from "@package/dev/ryanhcode/sable/api/block";
import { $Iterable, $Class, $Object } from "@package/java/lang";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $ServerLevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $EntityGetter, $ClipContext, $ClipBlockStateContext, $CommonLevelAccessor, $LevelHeightAccessor, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $ServerSubLevel, $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReferenceArray, $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer, $KinematicContraption } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc } from "@package/org/joml";
export * as heat from "@package/dev/ryanhcode/sable/sublevel/plot/heat";

declare module "@package/dev/ryanhcode/sable/sublevel/plot" {
    export class $ClientLevelPlot extends $LevelPlot {
        getSubLevel(): $ClientSubLevel;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ClientSubLevel);
        get subLevel(): $ClientSubLevel;
    }
    export class $LevelPlot {
        contains(arg0: $Vec3_): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Vector3dc): boolean;
        contains(arg0: $ChunkPos): boolean;
        onRemove(): void;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        tick(): void;
        setBoundingBox(arg0: $BoundingBox3ic): void;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getBoundingBox(): $BoundingBox3ic;
        getSubLevel(): $SubLevel;
        onBlockChange(arg0: $BlockPos_, arg1: $BlockState_): void;
        getLightEngine(): $LevelLightEngine;
        toLocal(arg0: $ChunkPos): $ChunkPos;
        getBlockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        updateBoundingBox(): void;
        addChunkHolder(arg0: $ChunkPos, arg1: $PlotChunkHolder, arg2: boolean): void;
        getBlockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        getBlockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        getLoadedChunks(): $Collection<$PlotChunkHolder>;
        toGlobal(arg0: $ChunkPos): $ChunkPos;
        getEmbeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        getCenterBlock(): $BlockPos;
        getChunkMin(): $ChunkPos;
        expandIfNecessary(arg0: $BlockPos_): void;
        newEmptyChunk(arg0: $ChunkPos): void;
        getCenterChunk(): $ChunkPos;
        getChunkMax(): $ChunkPos;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $SubLevel);
        get subLevel(): $SubLevel;
        get lightEngine(): $LevelLightEngine;
        get blockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        get blockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        get blockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        get loadedChunks(): $Collection<$PlotChunkHolder>;
        get embeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        get centerBlock(): $BlockPos;
        get chunkMin(): $ChunkPos;
        get centerChunk(): $ChunkPos;
        get chunkMax(): $ChunkPos;
    }
    export class $PlotChunkHolder extends $ChunkHolder {
        static create(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelLightEngine, arg3: $LevelChunk): $PlotChunkHolder;
        getChunk(): $LevelChunk;
        getBoundingBox(): $BoundingBox3ic;
        handleBlockChange(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: $BlockState_): void;
        setHeatSection(arg0: number, arg1: $HeatDataChunkSection): void;
        getHeatSection(arg0: number): $HeatDataChunkSection;
        static UNLOADED_LEVEL_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        startedWork: $AtomicReference<$ChunkStatus>;
        futures: $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(arg0: $LevelChunk, arg1: $ChunkPos, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get chunk(): $LevelChunk;
        get boundingBox(): $BoundingBox3ic;
    }
    export class $HeatDataChunkSection {
        get(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getIndex(arg0: number, arg1: number, arg2: number): number;
        static SIZE: number;
        constructor();
    }
    export class $EmbeddedPlotLevelAccessor implements $CommonLevelAccessor, $ServerLevelAccessor {
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getLevel(): $ServerLevel;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        hasChunk(arg0: number, arg1: number): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        isClientSide(): boolean;
        getLevelData(): $LevelData;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getChunkSource(): $ChunkSource;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        getServer(): $MinecraftServer;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        dimensionType(): $DimensionType;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        nextSubTickCount(): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getLightEngine(): $LevelLightEngine;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getEntityCollisions(arg0: $Entity | null, arg1: $AABB_): $List<$VoxelShape>;
        isUnobstructed(arg0: $Entity | null, arg1: $VoxelShape): boolean;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getEntities(arg0: $Entity | null, arg1: $AABB_): $List<$Entity>;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity> | null): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getHeight(): number;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        isWaterAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        getMinBuildHeight(): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        dayTime(): number;
        getDifficulty(): $Difficulty;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        playSound(arg0: $Player | null, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        self(): $EntityGetter;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        canSeeSky(arg0: $BlockPos_): boolean;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBlockCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity | null, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $AABB_): boolean;
        noCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        noBlockCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        collidesWithSuffocatingBlock(arg0: $Entity | null, arg1: $AABB_): boolean;
        getCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity | null): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntities(): $EntityArrayList;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxBuildHeight(): number;
        getSectionIndex(arg0: number): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        constructor(arg0: $LevelPlot);
        get level(): $ServerLevel;
        get clientSide(): boolean;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get seaLevel(): number;
        get blockTicks(): $LevelTickAccess<$Block>;
        get lightEngine(): $LevelLightEngine;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get minBuildHeight(): number;
        get difficulty(): $Difficulty;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get moonPhase(): number;
        get moonBrightness(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
    }
    export class $ServerLevelPlot extends $LevelPlot {
        load(arg0: $CompoundTag_): void;
        save(): $CompoundTag;
        setBiome(arg0: $ResourceKey_<$Biome>): void;
        getSubLevel(): $ServerSubLevel;
        destroyAllBlocks(): void;
        addContraption(arg0: $KinematicContraption): void;
        removeContraption(arg0: $KinematicContraption): void;
        getContraptions(): $Collection<$KinematicContraption>;
        getLiftProviders(): $ObjectCollection<$BlockSubLevelLiftProvider$LiftProviderContext>;
        kickAllEntities(): void;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ServerSubLevel);
        set biome(value: $ResourceKey_<$Biome>);
        get subLevel(): $ServerSubLevel;
        get contraptions(): $Collection<$KinematicContraption>;
        get liftProviders(): $ObjectCollection<$BlockSubLevelLiftProvider$LiftProviderContext>;
    }
}
