import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $WeakReference } from "@package/java/lang/ref";
import { $BitStorage, $RandomSource, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $AttachmentType, $AttachmentType_, $IAttachmentHolder, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ExtendedPalettedContainer } from "@package/org/embeddedt/modernfix/chunk";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AttachmentType as $AttachmentType$1 } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $StructureSet$StructureSelectionEntry_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $DebugLevelChunkExtension } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $IProcessedChunk } from "@package/com/evandev/reliable_replacer/api";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ChunkAccessAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Set_, $Map, $Map$Entry, $Set, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $Supplier_, $Consumer_, $Predicate_, $BiConsumer_, $Function_, $UnaryOperator_, $BiPredicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $ILevelChunk } from "@package/me/wesley1808/servercore/common/interfaces/chunk";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $Logger } from "@package/org/slf4j";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $StructurifyChunkGenerator } from "@package/com/faboslav/structurify/common/api";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $IChunkGenerator } from "@package/org/embeddedt/modernfix/duck";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelChunkAuxiliaryLightManager, $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        factory(): $Palette$Factory;
        bits(): number;
        createData(registry: $IdMap<T>, paletteResize: $PaletteResize_<T>, size: number): $PalettedContainer$Data<T>;
        constructor(factory: $Palette$Factory_, bits: number);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { factory?: $Palette$Factory_, bits?: number,  } | [factory?: $Palette$Factory_, bits?: number, ];
    /**
     * A representation of a 16x16x16 cube of nibbles (half-bytes).
     */
    export class $DataLayer {
        /**
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         * @return The value of this data layer at the provided position.
         */
        get(x: number, y: number, z: number): number;
        isEmpty(): boolean;
        fill(size: number): void;
        /**
         * Sets the value of this data layer at the provided position.
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         */
        set(x: number, y: number, z: number, value: number): void;
        copy(): $DataLayer;
        getData(): number[];
        layerToString(unused: number): string;
        isDefinitelyFilledWith(value: number): boolean;
        isDefinitelyHomogenous(): boolean;
        data: number[];
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor(data: number[]);
        constructor(size: number);
        constructor();
        get empty(): boolean;
        get definitelyHomogenous(): boolean;
    }
    export class $ChunkGenerator implements $StructurifyChunkGenerator {
        validate(): void;
        getMinY(): number;
        codec(): $MapCodec<$ChunkGenerator>;
        wrapMethod$dan000$structurify$trySetStructureStart(arg0: $StructureSet$StructureSelectionEntry_, arg1: $StructureManager, arg2: $RegistryAccess, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkAccess, arg7: $ChunkPos, arg8: $SectionPos, arg9: $Operation_<any>): boolean;
        getBiomeSource(): $BiomeSource;
        findNearestMapStructure(level: $ServerLevel, structure: $HolderSet_<$Structure>, pos: $BlockPos_, searchRadius: number, skipKnownStructures: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        getNearestGeneratedStructure(structureHoldersSet: $Set_<$Holder_<$Structure>>, level: $ServerLevel, structureManager: $StructureManager, pos: $BlockPos_, skipKnownStructures: boolean, placement: $ConcentricRingsStructurePlacement): $Pair<$BlockPos, $Holder<$Structure>>;
        structurify$getFlatnessChecks(): $Map<any, any>;
        structurify$getOverlapChecks(): $Map<any, any>;
        structurify$getStructureChecks(): $Map<any, any>;
        getFirstOccupiedHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        structurify$getBiomeChecks(): $Map<any, any>;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        applyBiomeDecoration(level: $WorldGenLevel, chunk: $ChunkAccess, structureManager: $StructureManager): void;
        refreshFeaturesPerStep(): void;
        getMobsAt(biome: $Holder_<$Biome>, structureManager: $StructureManager, category: $MobCategory_, pos: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getSeaLevel(): number;
        structurify$getStructureSectionClaims(): $Map<any, any>;
        getGenDepth(): number;
        handler$fgo000$betteroceanmonuments$disableVanillaMonuments(arg0: $StructureSet$StructureSelectionEntry_, arg1: $StructureManager, arg2: $RegistryAccess, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkAccess, arg7: $ChunkPos, arg8: $SectionPos, arg9: $CallbackInfoReturnable<any>): void;
        createState(structureSetLookup: $HolderLookup<$StructureSet_>, randomState: $RandomState, seed: number): $ChunkGeneratorStructureState;
        getBaseHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getBaseColumn(x: number, z: number, height: $LevelHeightAccessor, random: $RandomState): $NoiseColumn;
        fillFromNoise(blender: $Blender, randomState: $RandomState, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        addDebugScreenInfo(info: $List_<string>, random: $RandomState, pos: $BlockPos_): void;
        buildSurface(level: $WorldGenRegion, structureManager: $StructureManager, random: $RandomState, chunk: $ChunkAccess): void;
        applyCarvers(level: $WorldGenRegion, seed: number, arg2: $RandomState, random: $BiomeManager, biomeManager: $StructureManager, structureManager: $ChunkAccess, chunk: $GenerationStep$Carving_): void;
        spawnOriginalMobs(level: $WorldGenRegion): void;
        createBiomes(randomState: $RandomState, blender: $Blender, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        getSpawnHeight(level: $LevelHeightAccessor): number;
        createStructures(registryAccess: $RegistryAccess, structureState: $ChunkGeneratorStructureState, structureManager: $StructureManager, chunk: $ChunkAccess, structureTemplateManager: $StructureTemplateManager): void;
        getFirstFreeHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        createReferences(level: $WorldGenLevel, structureManager: $StructureManager, chunk: $ChunkAccess): void;
        handler$bmi000$betterfortresses$disableVanillaFortresses(arg0: $StructureSet$StructureSelectionEntry_, arg1: $StructureManager, arg2: $RegistryAccess, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkAccess, arg7: $ChunkPos, arg8: $SectionPos, arg9: $CallbackInfoReturnable<any>): void;
        handler$cna000$bettermineshafts$disableVanillaMineshafts(arg0: $StructureSet$StructureSelectionEntry_, arg1: $StructureManager, arg2: $RegistryAccess, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkAccess, arg7: $ChunkPos, arg8: $SectionPos, arg9: $CallbackInfoReturnable<any>): void;
        wrapMethod$dan000$structurify$findNearestMapStructure(arg0: $ServerLevel, arg1: $HolderSet_<any>, arg2: $BlockPos_, arg3: number, arg4: boolean, arg5: $Operation_<any>): $Pair<any, any>;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(biomeSource: $BiomeSource);
        constructor(biomeSource: $BiomeSource, generationSettingsGetter: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        get minY(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get seaLevel(): number;
        get genDepth(): number;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, packedData: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(pos: number): $BlockState;
        setBlock(pos: number, state: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(x: number, y: number, z: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $ChunkGeneratorStructureState implements $IChunkGenerator {
        randomState(): $RandomState;
        ensureStructuresGenerated(): void;
        mfix$setStrongholdCachePath(arg0: $Path_, arg1: $MinecraftServer): void;
        hasStructureChunkInRange(structureSet: $Holder_<$StructureSet>, x: number, z: number, range: number): boolean;
        getRingPositionsFor(placement: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        getPlacementsForStructure(structure: $Holder_<$Structure>): $List<$StructurePlacement>;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        getLevelSeed(): number;
        static createForFlat(randomState: $RandomState, levelSeed: number, arg2: $BiomeSource, biomeSource: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        static createForNormal(randomState: $RandomState, seed: number, arg2: $BiomeSource, biomeSource: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        getStartForStructure(structure: $Structure_): $StructureStart;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        storage(): ($LongStream) | undefined;
        paletteEntries(): $List<T>;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { paletteEntries?: $List_<any>, storage?: ($LongStream) | undefined,  } | [paletteEntries?: $List_<any>, storage?: ($LongStream) | undefined, ];
    /**
     * During world generation, adjacent chunks may be fully generated (and thus be level chunks), but are often needed in proto chunk form. This wraps a completely generated chunk as a proto chunk.
     */
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(wrapped: $LevelChunk, allowWrites: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        size(): number;
        getIndex(x: number, y: number, z: number): number;
        getConfiguration<A>(registry: $IdMap<A>, size: number): $PalettedContainer$Configuration<A>;
        calculateBitsForSerialization<A>(registry: $IdMap<A>, size: number): number;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static GLOBAL_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
        constructor(sizeBits: number);
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>,  } | [fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity {
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $Trackable, $IProcessedChunk, $ChunkAccessAccessor {
        getData<T>(arg0: $AttachmentType_<T>): T;
        getHeight(type: $Heightmap$Types_, x: number, z: number): number;
        getHeight(): number;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getLevel(): $Level;
        getPos(): $ChunkPos;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData(type: $AttachmentType_<never>): boolean;
        addEntity(entity: $Entity): void;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        getSections(): $LevelChunkSection[];
        getAllStarts(): $Map<$Structure, $StructureStart>;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        reliableReplacer$isDirty(): boolean;
        getMinBuildHeight(): number;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        reliableReplacer$hasBeenProcessed(): boolean;
        getHighestFilledSectionIndex(): number;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAttachments(): boolean;
        atl$getBaseClass(): $Class<any>;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getStartForStructure(structure: $Structure_): $StructureStart;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        addPackedPostProcess(packedPosition: number, index: number): void;
        static getOrCreateOffsetList(packedPositions: $ShortList[], index: number): $ShortList;
        getBlockEntityNbtForSaving(pos: $BlockPos_, registries: $HolderLookup$Provider): $CompoundTag;
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isOldNoiseGeneration(): boolean;
        getHighestGeneratedStatus(): $ChunkStatus;
        incrementInhabitedTime(amount: number): void;
        getOrCreateNoiseChunk(noiseChunkCreator: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        getListenerRegistry(sectionY: number): $GameEventListenerRegistry;
        fillBiomesFromNoise(resolver: $BiomeResolver_, sampler: $Climate$Sampler_): void;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAnyStructureReferences(): boolean;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        initializeLightSources(): void;
        reliableReplacer$setDirty(lightCorrect: boolean): void;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isLightCorrect(): boolean;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        getUpgradeData(): $UpgradeData;
        getSkyLightSources(): $ChunkSkyLightSources;
        setHeightmap(type: $Heightmap$Types_, data: number[]): void;
        isYSpaceEmpty(startY: number, endY: number): boolean;
        setInhabitedTime(amount: number): void;
        hasPrimedHeightmap(type: $Heightmap$Types_): boolean;
        /**
         * @deprecated
         */
        carverBiome(caverBiomeSettingsSupplier: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        getBlockEntityNbt(pos: $BlockPos_): $CompoundTag;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        setBlendingData(blendingData: $BlendingData): void;
        getPersistedStatus(): $ChunkStatus;
        getPostProcessing(): $ShortList[];
        getBlendingData(): $BlendingData;
        setAllStarts(structureReferencesMap: $Map_<$Structure_, $StructureStart>): void;
        setBlockEntityNbt(tag: $CompoundTag_): void;
        isSectionEmpty(y: number): boolean;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUpgrading(): boolean;
        setLightCorrect(lightCorrect: boolean): void;
        getAllReferences(): $Map<any, any>;
        getBlockTicks(): $TickContainerAccess<$Block>;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        setBlockState(pos: $BlockPos_, state: $BlockState_, isMoving: boolean): $BlockState;
        setBlockEntity(blockEntity: $BlockEntity): void;
        getInhabitedTime(): number;
        markPosForPostprocessing(pos: $BlockPos_): void;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        reliableReplacer$markProcessed(): void;
        getOrCreateHeightmapUnprimed(type: $Heightmap$Types_): $Heightmap;
        reliableReplacer$resetProcessed(): void;
        removeBlockEntity(pos: $BlockPos_): void;
        setUnsaved(lightCorrect: boolean): void;
        getSection(index: number): $LevelChunkSection;
        findBlocks(predicate: $Predicate_<$BlockState>, output: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUnsaved(): boolean;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getLightEmission(pos: $BlockPos_): number;
        getMaxLightLevel(): number;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $AttachmentType_<never>): void;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $Supplier_<$AttachmentType<never>>): void;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData<T>(type: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $AttachmentType_<T>): (T) | undefined;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getMaxBuildHeight(): number;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrGet<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getAttachedOrSet<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        setAttached<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        removeAttached<A>(arg0: $AttachmentType$1<A>): A;
        getAttached<A>(arg0: $AttachmentType$1<A>): A;
        hasAttached(arg0: $AttachmentType$1<never>): boolean;
        getAttachedOrThrow<A>(arg0: $AttachmentType$1<A>): A;
        modifyAttached<A>(arg0: $AttachmentType$1<A>, arg1: $UnaryOperator_<A>): A;
        getAttachedOrElse<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, inhabitedTime: number, arg5: $LevelChunkSection[] | null, sections: $BlendingData | null);
        get level(): $Level;
        get pos(): $ChunkPos;
        get minBuildHeight(): number;
        get highestFilledSectionIndex(): number;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get oldNoiseGeneration(): boolean;
        get highestGeneratedStatus(): $ChunkStatus;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get persistedStatus(): $ChunkStatus;
        get upgrading(): boolean;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get highestSectionPosition(): number;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        palette(): $Palette<T>;
        write(buffer: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        copyFrom(palette: $Palette<T>, bitStorage: $BitStorage): void;
        storage(): $BitStorage;
        getSerializedSize(): number;
        constructor(configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, palette: $Palette<T>);
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { configuration?: $PalettedContainer$Configuration_<any>, palette?: $Palette<any>, storage?: $BitStorage,  } | [configuration?: $PalettedContainer$Configuration_<any>, palette?: $Palette<any>, storage?: $BitStorage, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ExtendedPalettedContainer<any>, $PalettedContainerROExtension<any> {
        get(x: number, y: number, z: number): T;
        get(index: number): T;
        /**
         * Counts the number of instances of each state in the container.
         * The provided consumer is invoked for each state with the number of instances.
         */
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        set(x: number, y: number, z: number, state: T): void;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        getAndSet(x: number, y: number, z: number, state: T): T;
        release(): void;
        acquire(): void;
        getAll(consumer: $Consumer_<T>): void;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
        recreate(): $PalettedContainer<T>;
        maybeHas(predicate: $Predicate_<T>): boolean;
        mfix$getPalette(): $Palette<any>;
        getSerializedSize(): number;
        static codecRW<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainer<T>>;
        getAndSetUnchecked(x: number, y: number, z: number, state: T): T;
        static codecRO<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainerRO<T>>;
        sodium$copy(): $PalettedContainerRO<any>;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        constructor(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, values: $List_<T>);
        constructor(registry: $IdMap<T>, palette: T, strategy: $PalettedContainer$Strategy);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(state: T, count: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData {
        isEmpty(): boolean;
        write(): $CompoundTag;
        upgrade(chunk: $LevelChunk): void;
        static CHUNKY_FIXERS: $Set<$UpgradeData$BlockFixer>;
        static EMPTY: $UpgradeData;
        static MAP: $Map<$Block, $UpgradeData$BlockFixer>;
        constructor(tag: $CompoundTag_, level: $LevelHeightAccessor);
        get empty(): boolean;
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        get(x: number, y: number, z: number): T;
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        write(buffer: $FriendlyByteBuf): void;
        getAll(consumer: $Consumer_<T>): void;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        recreate(): $PalettedContainer<T>;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(chunk: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, value: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>, resizeHandler: $PaletteResize_<T>, value: $List_<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(index: number);
    }
    export class $LevelChunkSection {
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        release(): void;
        acquire(): void;
        getFluidState(x: number, y: number, z: number): $FluidState;
        getStates(): $PalettedContainer<$BlockState>;
        getBlockState(x: number, y: number, z: number): $BlockState;
        fillBiomesFromNoise(biomeResolver: $BiomeResolver_, climateSampler: $Climate$Sampler_, x: number, y: number, z: number): void;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        setBlockState(x: number, y: number, z: number, state: $BlockState_): $BlockState;
        setBlockState(x: number, y: number, z: number, state: $BlockState_, useLocks: boolean): $BlockState;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTicking(): boolean;
        /**
         * @return `true` if this section has any states matching the given predicate. As the internal representation uses a `Palette`, this is more efficient than looping through every position in the section, or indeed the chunk.
         */
        maybeHas(predicate: $Predicate_<$BlockState>): boolean;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        hasOnlyAir(): boolean;
        readBiomes(buffer: $FriendlyByteBuf): void;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        getSerializedSize(): number;
        recalcBlockCounts(): void;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingFluids(): boolean;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingBlocks(): boolean;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(states: $PalettedContainer<$BlockState_>, biomes: $PalettedContainerRO<$Holder_<$Biome>>);
        constructor(biomeRegistry: $Registry<$Biome_>);
        get states(): $PalettedContainer<$BlockState>;
        get randomlyTicking(): boolean;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get serializedSize(): number;
        get randomlyTickingFluids(): boolean;
        get randomlyTickingBlocks(): boolean;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder, $ILevelChunk, $DebugLevelChunkExtension {
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isEmpty(): boolean;
        getFluidState(x: number, y: number, z: number): $FluidState;
        unpackTicks(pos: number): void;
        clearAllBlockEntities(): void;
        getBlockEntity(pos: $BlockPos_, creationType: $LevelChunk$EntityCreationType_): $BlockEntity;
        addAndRegisterBlockEntity(blockEntity: $BlockEntity): void;
        unregisterTickContainerFromLevel(level: $ServerLevel): void;
        servercore$shouldDoLightning(randomSource: $RandomSource, thunderChance: number): number;
        sable$getLastUpdate(): number;
        postProcessGeneration(): void;
        replaceWithPacketData(buffer: $FriendlyByteBuf, tag: $CompoundTag_, outputTagConsumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        runPostLoad(): void;
        replaceBiomes(buffer: $FriendlyByteBuf): void;
        setFullStatus(fullStatus: $Supplier_<$FullChunkStatus>): void;
        sable$setUpdated(): void;
        getAuxLightManager(arg0: $ChunkPos): $LevelChunkAuxiliaryLightManager;
        getFullStatus(): $FullChunkStatus;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        redirect$ipi000$sable$getLightEngine(arg0: $ChunkSource): $LevelLightEngine;
        registerTickContainerInLevel(level: $ServerLevel): void;
        isTicking(pos: $BlockPos_): boolean;
        setLoaded(loaded: boolean): void;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        level: $Level;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        loaded: boolean;
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(level: $ServerLevel, chunk: $ProtoChunk, postLoad: $LevelChunk$PostLoadProcessor_ | null);
        constructor(level: $Level_, pos: $ChunkPos, data: $UpgradeData, blockTicks: $LevelChunkTicks<$Block_>, fluidTicks: $LevelChunkTicks<$Fluid_>, inhabitedTime: number, arg6: $LevelChunkSection[] | null, sections: $LevelChunk$PostLoadProcessor_ | null, postLoad: $BlendingData | null);
        constructor(level: $Level_, pos: $ChunkPos);
        get empty(): boolean;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        close(): void;
        getChunk(chunkX: number, chunkZ: number, load: boolean): $LevelChunk;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        tick(hasTimeLeft: $BooleanSupplier_, tickChunks: boolean): void;
        getChunkNow(chunkX: number, chunkZ: number): $LevelChunk;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        /**
         * @return `true` if a chunk is loaded at the provided position, without forcing a chunk load.
         */
        hasChunk(chunkX: number, chunkZ: number): boolean;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        getLightEngine(): $LevelLightEngine;
        setSpawnSettings(hostile: boolean, peaceful: boolean): void;
        /**
         * @return A human-readable string representing data about this chunk source.
         */
        gatherStats(): string;
        getLoadedChunksCount(): number;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        constructor();
        get lightEngine(): $LevelLightEngine;
        get loadedChunksCount(): number;
    }
    export class $ProtoChunk extends $ChunkAccess {
        addEntity(tag: $CompoundTag_): void;
        getEntities(): $List<$CompoundTag>;
        static packOffsetCoordinates(pos: $BlockPos_): number;
        getOrCreateCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        static unpackOffsetCoordinates(packedPos: number, yOffset: number, chunkPos: $ChunkPos): $BlockPos;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        getCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        setBelowZeroRetrogen(belowZeroRetrogen: $BelowZeroRetrogen | null): void;
        setLightEngine(lightEngine: $LevelLightEngine): void;
        setPersistedStatus(status: $ChunkStatus_): void;
        setCarvingMask(step: $GenerationStep$Carving_, carvingMask: $CarvingMask): void;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, sections: $LevelChunkSection[] | null, blockTicks: $ProtoChunkTicks<$Block_>, liquidTicks: $ProtoChunkTicks<$Fluid_>, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        get entities(): $List<$CompoundTag>;
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        set belowZeroRetrogen(value: $BelowZeroRetrogen | null);
        set lightEngine(value: $LevelLightEngine);
        set persistedStatus(value: $ChunkStatus_);
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        getEntries(): $List<T>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>, values: $List_<T>);
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>);
        get size(): number;
        get entries(): $List<T>;
        get serializedSize(): number;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        processChunk(level: $LevelAccessor): void;
        updateShape(state: $BlockState_, direction: $Direction_, offsetState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, offsetPos: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        close(): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        getSection(pos: $BlockPos_): $LevelChunkSection;
        constructor(level: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(registry: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getLevel(): $BlockGetter;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        valueFor(id: number): T;
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        level: $Level;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        loaded: boolean;
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(level: $Level_, pos: $ChunkPos, biome: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        get(x: number, y: number, z: number): boolean;
        toArray(): number[];
        stream(pos: $ChunkPos): $Stream<$BlockPos>;
        set(x: number, y: number, z: number): void;
        setAdditionalMask(additionalMask: $CarvingMask$Mask_): void;
        constructor(mask: number, minY: number);
        constructor(mask: number[], minY: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
