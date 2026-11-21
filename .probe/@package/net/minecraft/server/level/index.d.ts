import { $ServerChunkCacheAccessor as $ServerChunkCacheAccessor$2 } from "@package/org/embeddedt/modernfix/common/mixin/bugfix/chunk_deadlock";
import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongMap, $LongOpenHashSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerScoreboard, $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $Entity$RemovalReason, $LivingEntity, $Mob, $Pose, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $ILevelEventRedirect } from "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ServerLevelSceneExtension } from "@package/dev/ryanhcode/sable/mixinterface/physics";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ServerPlayerAccessor } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $BlueprintServerLevel } from "@package/com/teamabnormals/blueprint/common/world/storage/receiver";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $ServerPlayerRespawnExtension } from "@package/dev/ryanhcode/sable/mixinterface/respawn_point";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $WritableLevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $Duration_ } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $ChunkMapAccessor$TrackedEntityAccessor as $ChunkMapAccessor$TrackedEntityAccessor$1, $LightningAccessor, $ChunkMapAccessor as $ChunkMapAccessor$1 } from "@package/org/patryk3211/powergrid/mixin";
import { $ChunkMapAccessor, $ChunkMapAccessor$TrackedEntityAccessor } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $Stack, $List, $List_, $Collection, $Queue, $Comparator, $Set, $UUID } from "@package/java/util";
import { $ChunkMapAccessor as $ChunkMapAccessor$2, $TrackedEntityAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $ThreadedAnvilChunkStorageAccessor, $EntityTrackerAccessor as $EntityTrackerAccessor$1 } from "@package/org/patryk3211/powergrid/mixin/forge";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $IServerChunkCache, $IServerLevel } from "@package/me/wesley1808/servercore/common/interfaces/chunk";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $BlockApiCacheImpl, $ServerWorldCache } from "@package/net/fabricmc/fabric/impl/lookup/block";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $Writer } from "@package/java/io";
import { $CustomSpawner_, $Explosion, $LightLayer_, $ChunkPos, $BlockGetter, $Level$ExplosionInteraction_, $ColorResolver_, $ExplosionDamageCalculator, $Level_, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Camera } from "@package/io/github/mortuusars/exposure/world/camera";
import { $LinkManager, $LinkManager$Access } from "@package/com/mrcrayfish/furniture/refurbished/electricity";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ChunkMapAccessor as $ChunkMapAccessor$3 } from "@package/com/evandev/reliable_replacer/mixin/minecraft";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerPlayerEntityMixin } from "@package/immersive_aircraft/mixin";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ServerChunkCacheAccessor as $ServerChunkCacheAccessor$1 } from "@package/dev/ryanhcode/sable/mixin/level_accelerator";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit, $SortedArraySet } from "@package/net/minecraft/util";
import { $ConductorEntity, $ServerPlayerPossessionAccess } from "@package/com/railwayteam/railways/content/conductor";
import { $BossEvent$BossBarColor, $BossEvent$BossBarOverlay_, $InteractionResult, $BossEvent$BossBarOverlay, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ReportedException } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ContainerSynchronizer, $AbstractContainerMenu, $InventoryMenu, $PlayerEnderChestContainer, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $PersistentEntitySectionManager, $EntityInLevelCallback, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $Biome$Precipitation, $Biome, $BiomeManager, $Biome_, $Biome$Precipitation_ } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $TextFilter, $ServerPlayerConnection, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Inventory, $ChatVisiblity, $Abilities, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkScanAccess, $ChunkStorage, $IOWorker } from "@package/net/minecraft/world/level/chunk/storage";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $AtomicReferenceArray, $AtomicReference, $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $IClearableChunkHolder, $ISuspendedHolderTrackingChunkMap } from "@package/org/embeddedt/modernfix/duck/release_protochunks";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerChunkLoadingManagerAccessor, $EntityTrackerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $ServerChunkCacheAccessor, $ChunkMapAccessor as $ChunkMapAccessor$4 } from "@package/journeymap/common/mixin/server";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $DynamicGraphMinFixedPoint, $LightEngine, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $ChunkStep_, $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $IMixinServerPlayer_neoforge } from "@package/com/seibel/distanthorizons/common/wrappers/misc";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $LevelTicks, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $ChunkLevelTypeEventTracker } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Logger } from "@package/org/slf4j";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $Stream } from "@package/java/util/stream";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        minX(): number;
        center(): $ChunkPos;
        minZ(): number;
        maxZ(): number;
        maxX(): number;
        viewDistance(): number;
        /**
         * Determines if another `ChunkTrackingView`'s bounds intersects with its own
         */
        squareIntersects(other: $ChunkTrackingView$Positioned_): boolean;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        isInViewDistance(x: number, z: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackingView$Positioned}.
     */
    export type $ChunkTrackingView$Positioned_ = { center?: $ChunkPos, viewDistance?: number,  } | [center?: $ChunkPos, viewDistance?: number, ];
    export class $PlayerRespawnLogic {
        static getOverworldRespawnPos(level: $ServerLevel, x: number, z: number): $BlockPos;
        static getSpawnPosInChunk(level: $ServerLevel, chunkPos: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>> {
        compareTo(other: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        timedOut(currentTime: number): boolean;
        getTicketLevel(): number;
        setCreatedTick(timestamp: number): void;
        isForceTicks(): boolean;
        constructor(type: $TicketType<$Ticket<never>>, ticketLevel: number, key: $Ticket<never>);
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get type(): $TicketType<$Ticket<never>>;
        get ticketLevel(): number;
        set createdTick(value: number);
        get forceTicks(): boolean;
    }
    export class $TicketType<T> {
        static create<T>(name: string, comparator: $Comparator<T>): $TicketType<T>;
        static create<T>(name: string, comparator: $Comparator<T>, lifespan: number): $TicketType<T>;
        timeout(): number;
        getComparator(): $Comparator<T>;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        constructor(name: string, comparator: $Comparator<T>, timeout: number);
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        /**
         * Makes the boss visible to the given player.
         */
        addPlayer(player: $ServerPlayer): void;
        setVisible(visible: boolean): void;
        isVisible(): boolean;
        /**
         * The returned collection is unmodifiable
         */
        getPlayers(): $Collection<$ServerPlayer>;
        /**
         * Makes the boss visible to the given player.
         */
        removePlayer(player: $ServerPlayer): void;
        removeAllPlayers(): void;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(name: $Component_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_);
        get players(): $Collection<$ServerPlayer>;
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $IClearableChunkHolder, $ChunkLevelTypeEventTracker {
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        sectionLightChanged(type: $LightLayer_, sectionY: number): void;
        broadcastChanges(chunk: $LevelChunk): void;
        blockChanged(pos: $BlockPos_): void;
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getTickingChunk(): $LevelChunk;
        wasAccessibleSinceLastSave(): boolean;
        refreshAccessibility(): void;
        setTicketLevel(queueLevel: number): void;
        isReadyForSaving(): boolean;
        addSendDependency(dependency: $CompletableFuture<never>): void;
        getSendSyncFuture(): $CompletableFuture<never>;
        getChunkToSend(): $LevelChunk;
        getSaveSyncFuture(): $CompletableFuture<never>;
        updateFutures(chunkMap: $ChunkMap, executor: $Executor_): void;
        fabric_setCurrentEventLevelType(arg0: $FullChunkStatus_): void;
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        fabric_getCurrentEventLevelType(): $FullChunkStatus;
        mfix$resetProtoChunkFutures(): void;
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
        constructor(pos: $ChunkPos, ticketLevel: number, levelHeightAccessor: $LevelHeightAccessor, lightEngine: $LevelLightEngine, onLevelChange: $ChunkHolder$LevelChangeListener_, playerProvider: $ChunkHolder$PlayerProvider_);
        get tickingChunk(): $LevelChunk;
        set ticketLevel(value: number);
        get readyForSaving(): boolean;
        get sendSyncFuture(): $CompletableFuture<never>;
        get chunkToSend(): $LevelChunk;
        get saveSyncFuture(): $CompletableFuture<never>;
    }
    export class $WorldGenRegion implements $WorldGenLevel {
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        getHeight(): number;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        getCenter(): $ChunkPos;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getFluidState(pos: $BlockPos_): $FluidState;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity> | null): $List<$Entity>;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getShade(direction: $Direction_, shade: boolean): number;
        ensureCanWrite(pos: $BlockPos_): boolean;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        isClientSide(): boolean;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        getBlockState(pos: $BlockPos_): $BlockState;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        getServer(): $MinecraftServer;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        addFreshEntity(entity: $Entity): boolean;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        getMinBuildHeight(): number;
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        dimensionType(): $DimensionType;
        getSeaLevel(): number;
        /**
         * Gets the random world seed.
         */
        nextSubTickCount(): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getLightEngine(): $LevelLightEngine;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity>): $Player;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        localvar$iem000$easymagic$setBlock(blockState: $BlockState_): $BlockState;
        addFreshEntityWithPassengers(entity: $Entity): void;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        /**
         * Gets the random world seed.
         */
        dayTime(): number;
        getDifficulty(): $Difficulty;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        getTimeOfDay(partialTick: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        isWaterAt(pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        containsAnyLiquid(collisionBox: $AABB_): boolean;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        self(): $EntityGetter;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        canSeeSky(pos: $BlockPos_): boolean;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        noCollision(entity: $Entity): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        isUnobstructed(entity: $Entity): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        hasNeighborSignal(pos: $BlockPos_): boolean;
        getDirectSignalTo(pos: $BlockPos_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(center: $BlockPos_, range: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will cause a block update.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntities(): $EntityArrayList;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        getBlockStates(aabb: $AABB_): $Stream<$BlockState>;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getLightEmission(pos: $BlockPos_): number;
        getMaxLightLevel(): number;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
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
        hasBiomes(): boolean;
        getBiomeFabric(pos: $BlockPos_): $Holder<$Biome>;
        constructor(level: $ServerLevel, cache: $StaticCache2D<$GenerationChunkHolder>, generatingStep: $ChunkStep_, center: $ChunkAccess);
        get level(): $ServerLevel;
        get seed(): number;
        get center(): $ChunkPos;
        set currentlyGenerating(value: $Supplier_<string> | null);
        get clientSide(): boolean;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get minBuildHeight(): number;
        get seaLevel(): number;
        get blockTicks(): $LevelTickAccess<$Block>;
        get lightEngine(): $LevelLightEngine;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get difficulty(): $Difficulty;
        get moonPhase(): number;
        get moonBrightness(): number;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get maxSection(): number;
        get sectionsCount(): number;
    }
    export class $ChunkTrackingView {
        static of(center: $ChunkPos, viewDistance: number): $ChunkTrackingView;
        /**
         * Calculates the chunks that the player needs to drop in the `oldChunkTrackingView` and the chunks that need to be sent for the `newChunkTrackingView`. The chunks that overlap in both views can be kept.
         */
        static difference(oldChunkTrackingView: $ChunkTrackingView, newChunkTrackingView: $ChunkTrackingView, chunkMarker: $Consumer_<$ChunkPos>, chunkDropper: $Consumer_<$ChunkPos>): void;
        static isInViewDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number): boolean;
        /**
         * Check if a chunk `(x,z)` is within a `viewDistance` which is centered on `(centerX, centerZ)`
         */
        static isWithinDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        isInViewDistance(x: number, z: number): boolean;
    }
    export class $GenerationChunkHolder {
        getPos(): $ChunkPos;
        getChunkIfPresentUnchecked(status: $ChunkStatus_): $ChunkAccess;
        getPersistedStatus(): $ChunkStatus;
        getFullStatus(): $FullChunkStatus;
        removeTask(task: $ChunkGenerationTask): void;
        getTicketLevel(): number;
        getChunkIfPresent(status: $ChunkStatus_): $ChunkAccess;
        scheduleChunkGenerationTask(targetStatus: $ChunkStatus_, chunkMap: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getGenerationRefCount(): number;
        decreaseGenerationRefCount(): void;
        increaseGenerationRefCount(): void;
        updateHighestAllowedStatus(chunkMap: $ChunkMap): void;
        rescheduleChunkTask(chunkMap: $ChunkMap, targetStatus: $ChunkStatus_ | null): void;
        getLatestStatus(): $ChunkStatus;
        getLatestChunk(): $ChunkAccess;
        getQueueLevel(): number;
        getAllFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        replaceProtoChunk(chunk: $ImposterProtoChunk): void;
        applyStep(step: $ChunkStep_, chunkMap: $GeneratingChunkMap, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        startedWork: $AtomicReference<$ChunkStatus>;
        futures: $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        constructor(pos: $ChunkPos);
        get persistedStatus(): $ChunkStatus;
        get fullStatus(): $FullChunkStatus;
        get ticketLevel(): number;
        get generationRefCount(): number;
        get latestStatus(): $ChunkStatus;
        get latestChunk(): $ChunkAccess;
        get queueLevel(): number;
        get allFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
    }
    export class $ChunkResult<T> {
        static of<T>(value: T): $ChunkResult<T>;
        static orElse<R>(chunkResult: $ChunkResult<R>, orElse: R | null): R;
        static error<T>(error: string): $ChunkResult<T>;
        static error<T>(errorSupplier: $Supplier_<string>): $ChunkResult<T>;
    }
    export interface $ChunkResult<T> {
        map<R>(mappingFunction: $Function_<T, R>): $ChunkResult<R>;
        orElse(value: T | null): T;
        orElseThrow<E extends $Throwable>(exceptionSupplier: $Supplier_<E>): T;
        isSuccess(): boolean;
        ifSuccess(action: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
        holder(): $ChunkHolder;
        chunk(): $LevelChunk;
        constructor(chunk: $LevelChunk, holder: $ChunkHolder);
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCache$ChunkAndHolder}.
     */
    export type $ServerChunkCache$ChunkAndHolder_ = { holder?: $ChunkHolder, chunk?: $LevelChunk,  } | [holder?: $ChunkHolder, chunk?: $LevelChunk, ];
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $IServerChunkCache, $ServerChunkCacheAccessor$2, $ServerChunkCacheAccessor$1, $ServerChunkCacheAccessor {
        save(flush: boolean): void;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        getLevel(): $Level;
        handler$fcm000$immersive_melodies$immersiveMelodies$injectServerChunkManagerInit(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        handler$ipg000$sable$init(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        runDistanceManagerUpdates(): boolean;
        getVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        getGenerator(): $ChunkGenerator;
        getPendingTasksCount(): number;
        pollTask(): boolean;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        addEntity(entity: $Entity): void;
        randomState(): $RandomState;
        getPoiManager(): $PoiManager;
        getDataStorage(): $DimensionDataStorage;
        chunkScanner(): $ChunkScanAccess;
        getGeneratorState(): $ChunkGeneratorStructureState;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        isPositionTicking(chunkPos: number): boolean;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        setSimulationDistance(simulationDistance: number): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        blockChanged(pos: $BlockPos_): void;
        removeEntity(entity: $Entity): void;
        setViewDistance(simulationDistance: number): void;
        getTickingGenerated(): number;
        removeTicketsOnClosing(): void;
        getChunkFuture(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getChunkDebugData(chunkPos: $ChunkPos): string;
        servercore$requiresBroadcast(holder: $ChunkHolder): void;
        self(): $ServerChunkCache;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcast(entity: $Entity, payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcastAndSend(entity: $Entity, payload: $CustomPacketPayload_): void;
        getChunkMap(): $ChunkMap;
        mfix$getMainThreadProcessor(): $ServerChunkCache$MainThreadExecutor;
        invokeGetVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        mainThread: $Thread;
        distanceManager: $DistanceManager;
        level: $ServerLevel;
        lightEngine: $ThreadedLevelLightEngine;
        chunkMap: $ChunkMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, generator: $ChunkGenerator, viewDistance: number, simulationDistance: number, sync: boolean, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>);
        get generator(): $ChunkGenerator;
        get pendingTasksCount(): number;
        get poiManager(): $PoiManager;
        get dataStorage(): $DimensionDataStorage;
        get generatorState(): $ChunkGeneratorStructureState;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        set simulationDistance(value: number);
        set viewDistance(value: number);
        get tickingGenerated(): number;
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        constructor(arg0: T);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Success}.
     */
    export type $ChunkResult$Success_<T> = { value?: any,  } | [value?: any, ];
    export class $PlayerMap {
        ignored(player: $ServerPlayer): boolean;
        addPlayer(player: $ServerPlayer, skipPlayer: boolean): void;
        removePlayer(player: $ServerPlayer): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        ignorePlayer(player: $ServerPlayer): void;
        ignoredOrUnknown(player: $ServerPlayer): boolean;
        unIgnorePlayer(player: $ServerPlayer): void;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static isLoaded(level: number): boolean;
        static byStatus(status: $ChunkStatus_): number;
        static byStatus(status: $FullChunkStatus_): number;
        static fullStatus(level: number): $FullChunkStatus;
        static isBlockTicking(level: number): boolean;
        static getStatusAroundFullChunk(level: number): $ChunkStatus;
        static getStatusAroundFullChunk(distance: number, chunkStatus: $ChunkStatus_ | null): $ChunkStatus;
        static isEntityTicking(level: number): boolean;
        static generationStatus(level: number): $ChunkStatus;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static ENTITY_TICKING_LEVEL: number;
        static MAX_LEVEL: number;
        static BLOCK_TICKING_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        getLastSentYRot(): number;
        getPositionBase(): $Vec3;
        getLastSentXRot(): number;
        getLastSentMovement(): $Vec3;
        addPairing(player: $ServerPlayer): void;
        removePairing(player: $ServerPlayer): void;
        sendChanges(): void;
        getLastSentYHeadRot(): number;
        updateInterval: number;
        tickCount: number;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(level: $ServerLevel, entity: $Entity, updateInterval: number, trackDelta: boolean, broadcast: $Consumer_<$Packet<never>>);
        get lastSentYRot(): number;
        get positionBase(): $Vec3;
        get lastSentXRot(): number;
        get lastSentMovement(): $Vec3;
        get lastSentYHeadRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        runGenerationTasks(): void;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
    }
    export class $ColumnPos extends $Record {
        x(): number;
        z(): number;
        toLong(): number;
        static asLong(x: number, z: number): number;
        static getZ(pos: number): number;
        static getX(pos: number): number;
        toChunkPos(): $ChunkPos;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { x?: number, z?: number,  } | [x?: number, z?: number, ];
    export class $ChunkTaskPriorityQueue<T> {
        release(chunkPos: number, arg1: boolean): void;
        pop(): $Stream<$Either<T, $Runnable>>;
        submit(task: (T) | undefined, chunkPos: number, arg2: number): void;
        hasWork(): boolean;
        resortChunkTasks(queueLevel: number, chunkPos: $ChunkPos, ticketLevel: number): void;
        getAcquired(): $LongSet;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(name: string, maxTasks: number);
        get acquired(): $LongSet;
    }
    export class $ChunkGenerationTask {
        static create(chunkMap: $GeneratingChunkMap, targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        getCenter(): $GenerationChunkHolder;
        markForCancellation(): void;
        runUntilWait(): $CompletableFuture<never>;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
        this$0: $ServerChunkCache;
        constructor(level: $ServerChunkCache, arg1: $Level_);
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        compareTo(other: $BlockDestructionProgress): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getId(): number;
        getPos(): $BlockPos;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getProgress(): number;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        setProgress(damage: number): void;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getUpdatedRenderTick(): number;
        create$setExtraPositions(arg0: $Set_<any>): void;
        create$getExtraPositions(): $Set<any>;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        updateTick(damage: number): void;
        constructor(id: number, pos: $BlockPos_);
        get id(): number;
        get pos(): $BlockPos;
        get updatedRenderTick(): number;
    }
    export class $TickingTracker extends $ChunkTracker {
        getLevel(chunkPos: $ChunkPos): number;
        addTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        runAllUpdates(): void;
        removeTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        getTicketDebugString(chunkPos: number): string;
        replacePlayerTicketsLevel(ticketLevel: number): void;
        levelCount: number;
        chunks: $Long2ByteMap;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable {
        close(): void;
        updateChunkStatus(chunkPos: $ChunkPos): void;
        lightChunk(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        initializeLight(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        waitForPendingTasks(x: number, z: number): $CompletableFuture<never>;
        tryScheduleUpdate(): void;
        runUpdate(): void;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunk: $LightChunkGetter, chunkMap: $ChunkMap, skyLight: boolean, taskMailbox: $ProcessorMailbox<$Runnable_>, sorterMailbox: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
        task: $Runnable;
        pos: number;
        clearQueue: boolean;
        constructor(task: $Runnable_, pos: number, arg2: boolean);
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        getLevelFromSource(pos: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        error(): $Supplier<string>;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Fail}.
     */
    export type $ChunkResult$Fail_<T> = { error?: $Supplier_<string>,  } | [error?: $Supplier_<string>, ];
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
        task: $Function<$ProcessorHandle<$Unit>, T>;
        pos: number;
        level: $IntSupplier;
        constructor(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_);
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        isOrAfter(status: $FullChunkStatus_): boolean;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
        onDestroyed(arg0: $Entity): void;
        onTickingStart(arg0: $Entity): void;
        onTickingEnd(arg0: $Entity): void;
        onSectionChange(arg0: $Entity): void;
        onTrackingEnd(arg0: $Entity): void;
        onTrackingStart(arg0: $Entity): void;
        onCreated(arg0: $Entity): void;
        this$0: $ServerLevel;
        constructor(arg0: $ServerLevel);
    }
    export class $ClientInformation extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        language(): string;
        static createDefault(): $ClientInformation;
        chatVisibility(): $ChatVisiblity;
        allowsListing(): boolean;
        viewDistance(): number;
        modelCustomisation(): number;
        textFilteringEnabled(): boolean;
        mainHand(): $HumanoidArm;
        chatColors(): boolean;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientInformation}.
     */
    export type $ClientInformation_ = { modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_, chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string, viewDistance?: number,  } | [modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_, chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string, viewDistance?: number, ];
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $ISuspendedHolderTrackingChunkMap, $ChunkMapAccessor$2, $ChunkMapAccessor$3, $ChunkMapAccessor, $ServerChunkLoadingManagerAccessor, $ChunkMapAccessor$4, $ChunkMapAccessor$1, $ThreadedAnvilChunkStorageAccessor {
        size(): number;
        generator(): $ChunkGenerator;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        getVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        setServerViewDistance(viewDistance: number): void;
        tick(hasMoreTime: $BooleanSupplier_): void;
        tick(): void;
        addEntity(entity: $Entity): void;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        getChunks(): $Iterable<$ChunkHolder>;
        dumpChunks(writer: $Writer): void;
        randomState(): $RandomState;
        getPoiManager(): $PoiManager;
        getDistanceManager(): $DistanceManager;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
        hasWork(): boolean;
        anyPlayerCloseEnoughForSpawning(chunkPos: $ChunkPos): boolean;
        getLightEngine(): $ThreadedLevelLightEngine;
        removeEntity(entity: $Entity): void;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        getTickingGenerated(): number;
        generatorState(): $ChunkGeneratorStructureState;
        runGenerationTasks(): void;
        getChunkDebugData(pos: $ChunkPos): string;
        promoteChunkMap(): boolean;
        saveAllChunks(flush: boolean): void;
        getStorageName(): string;
        onFullChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        onChunkReadyToSend(chunk: $LevelChunk): void;
        getUpdatingChunkIfPresent(chunkPos: number): $ChunkHolder;
        /**
         * Sets level and loads/unloads chunk.
         */
        updateChunkScheduling(chunkPos: number, arg1: number, newLevel: $ChunkHolder | null, holder: number): $ChunkHolder;
        prepareEntityTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getPlayerViewDistance(player: $ServerPlayer): number;
        resendBiomesForChunks(chunks: $List_<$ChunkAccess>): void;
        waitForLightBeforeSending(chunkPos: $ChunkPos, range: number): void;
        prepareTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        prepareAccessibleChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        mfix$getMainThreadExecutor(): $Executor;
        getPlayersCloseForSpawning(chunkPos: $ChunkPos): $List<$ServerPlayer>;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        debugFuturesAndCreateReportedException(exception: $IllegalStateException, details: string): $ReportedException;
        /**
         * Checks if a chunk is on the edge of the player's view distance.
         */
        isChunkTracked(player: $ServerPlayer, x: number, z: number): boolean;
        getChunkQueueLevel(chunkPos: number): $IntSupplier;
        saveChunkIfNeeded(holder: $ChunkHolder): boolean;
        updatePlayerStatus(player: $ServerPlayer, track: boolean): void;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        getChunkToSend(chunkPos: number): $LevelChunk;
        scheduleUnload(chunkPos: number, arg1: $ChunkHolder): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        mfix$markForSuspensionCheck(chunkPos: $ChunkPos): void;
        getEntityMap(): $Int2ObjectMap<$TrackedEntityAccessor>;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        invokeGetChunks(): $Iterable<$ChunkHolder>;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        reliableReplacer$getChunks(): $Iterable<$ChunkHolder>;
        getEntityTrackers(): $Int2ObjectMap<$EntityTrackerAccessor$1>;
        fixerUpper: $DataFixer;
        entityMap: $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        toDrop: $LongSet;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static $assertionsDisabled: boolean;
        static MAX_VIEW_DISTANCE: number;
        mainThreadExecutor: $BlockableEventLoop<$Runnable>;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        pendingUnloads: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        unloadQueue: $Queue<$Runnable>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        modified: boolean;
        static FORCED_TICKET_LEVEL: number;
        worker: $IOWorker;
        chunkSaveCooldowns: $Long2LongMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, mainThreadExecutor: $BlockableEventLoop<$Runnable_>, lightChunk: $LightChunkGetter, generator: $ChunkGenerator, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>, viewDistance: number, sync: boolean);
        set serverViewDistance(value: number);
        get chunks(): $Iterable<$ChunkHolder>;
        get poiManager(): $PoiManager;
        get distanceManager(): $DistanceManager;
        get lightEngine(): $ThreadedLevelLightEngine;
        get tickingGenerated(): number;
        get storageName(): string;
        get entityTrackers(): $Int2ObjectMap<$EntityTrackerAccessor$1>;
    }
    export class $ServerPlayerGameMode {
        /**
         * Sets the world instance.
         */
        setLevel(serverLevel: $ServerLevel): void;
        tick(): void;
        /**
         * Get if we are in creative game mode.
         */
        isCreative(): boolean;
        useItem(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_, hitResult: $BlockHitResult): $InteractionResult;
        /**
         * Get if we are in creative game mode.
         */
        isSurvival(): boolean;
        getPreviousGameModeForPlayer(): $GameType;
        getGameModeForPlayer(): $GameType;
        setGameModeForPlayer(gameModeForPlayer: $GameType_, previousGameModeForPlayer: $GameType_ | null): void;
        changeGameModeForPlayer(gameModeForPlayer: $GameType_): boolean;
        /**
         * Attempts to harvest a block
         */
        destroyBlock(pos: $BlockPos_): boolean;
        handleBlockBreakAction(pos: $BlockPos_, action: $ServerboundPlayerActionPacket$Action_, face: $Direction_, maxBuildHeight: number, sequence: number): void;
        destroyAndAck(pos: $BlockPos_, sequence: number, message: string): void;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
        get creative(): boolean;
        get survival(): boolean;
        get previousGameModeForPlayer(): $GameType;
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager {
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        this$0: $ChunkMap;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $ChunkMap, mainThreadExecutor: $Executor_, arg2: $Executor_);
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        position(): $Vec3;
        static of(position: $Vec3_, towardsPos: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        yaw(): number;
        constructor(position: $Vec3_, yaw: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayer$RespawnPosAngle}.
     */
    export type $ServerPlayer$RespawnPosAngle_ = { position?: $Vec3_, yaw?: number,  } | [position?: $Vec3_, yaw?: number, ];
    export class $DistanceManager {
        getChunk(chunkPos: number): $ChunkHolder;
        updateSimulationDistance(viewDistance: number): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        addPlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        getDebugStatus(): string;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        inBlockTickingRange(chunkPos: number): boolean;
        /**
         * Returns the number of chunks taken into account when calculating the mob cap
         */
        getNaturalSpawnChunkCount(): number;
        inEntityTickingRange(chunkPos: number): boolean;
        addTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removePlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        runAllUpdates(chunkMap: $ChunkMap): boolean;
        removeTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicketsOnClosing(): void;
        purgeStaleTickets(): void;
        shouldForceTicks(chunkPos: number): boolean;
        hasTickets(): boolean;
        updateChunkScheduling(chunkPos: number, arg1: number, newLevel: $ChunkHolder | null, holder: number): $ChunkHolder;
        updatePlayerTickets(viewDistance: number): void;
        getTicketDebugString(chunkPos: number): string;
        hasPlayersNearby(chunkPos: number): boolean;
        tickingTracker(): $TickingTracker;
        isChunkToRemove(chunkPos: number): boolean;
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $Executor_, mainThreadExecutor: $Executor_);
        get debugStatus(): string;
        get naturalSpawnChunkCount(): number;
    }
    export class $ServerPlayer extends $Player implements $VeilPacketManager$PacketSink, $IQuiverPlayer, $ServerPlayerEntityMixin, $ServerPlayerAccessor, $ServerPlayerKJS, $PlayerFreezeExtension, $ServerPlayerRespawnExtension, $IMixinServerPlayer_neoforge, $ServerPlayerPossessionAccess {
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getLanguage(): string;
        drop(bypassHiddenChat: boolean): boolean;
        getStatsCounter(): $ServerStatsCounter;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        disconnect(): void;
        restoreFrom(that: $ServerPlayer, keepEverything: boolean): void;
        sendPacket(arg0: $Packet<any>): void;
        lookAt(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_): void;
        sendSystemMessage(chatComponent: $Component_, actionBar: boolean): void;
        serverLevel(): $ServerLevel;
        handler$kji000$distanthorizons$changeDimension(dimensionTransition: $DimensionTransition_, cir: $CallbackInfoReturnable<any>): void;
        handler$kji000$distanthorizons$setServerLevel(level: $ServerLevel, ci: $CallbackInfo): void;
        handler$hfm000$collective$ServerPlayer_restoreFrom(arg0: $ServerPlayer, arg1: boolean, arg2: $CallbackInfo): void;
        handler$dld000$glitchcore$onChangeDimension(arg0: $DimensionTransition_, arg1: $CallbackInfoReturnable<any>): void;
        distantHorizons$getDimensionChangeDestination(): $ServerLevel;
        updateOptions(clientInformation: $ClientInformation_): void;
        getAdvancements(): $PlayerAdvancements;
        teleportTo(newLevel: $ServerLevel, x: number, arg2: number, y: number, arg4: number, z: number): void;
        sendChatMessage(message: $OutgoingChatMessage, filtered: boolean, boundType: $ChatType$Bound_): void;
        /**
         * Returns if other players can attack this player
         */
        allowsListing(): boolean;
        /**
         * Returns if other players can attack this player
         */
        isRespawnForced(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetSentInfo(): void;
        setServerLevel(level: $ServerLevel): void;
        setPlayerInput(strafe: number, forward: number, jumping: boolean, sneaking: boolean): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        showEndCredits(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        initInventoryMenu(): void;
        /**
         * Returns if other players can attack this player
         */
        hasDisconnected(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRespawnAngle(): number;
        doCheckFallDamage(movementX: number, arg1: number, movementY: number, arg3: boolean): void;
        getLastSectionPos(): $SectionPos;
        setLastSectionPos(sectionPos: $SectionPos): void;
        getRecipeBook(): $ServerRecipeBook;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListHeader(): $Component;
        setKnownMovement(knownMovement: $Vec3_): void;
        setRespawnPosition(dimension: $ResourceKey_<$Level>, position: $BlockPos_ | null, angle: number, forced: boolean, sendMessage: boolean): void;
        getChatVisibility(): $ChatVisiblity;
        /**
         * Returns if other players can attack this player
         */
        canChatInColor(): boolean;
        setTabListHeader(component: $Component_): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        refreshTabListName(): void;
        getTextFilter(): $TextFilter;
        loadGameTypes(compound: $CompoundTag_ | null): void;
        clientInformation(): $ClientInformation;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(gameMode: $GameType_): boolean;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListFooter(): $Component;
        setChatSession(chatSession: $RemoteChatSession_): void;
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getIpAddress(): string;
        getChatSession(): $RemoteChatSession;
        sendServerStatus(serverStatus: $ServerStatus_): void;
        setTabListFooter(component: $Component_): void;
        railways$getPossessedConductor(): $ConductorEntity;
        supplementaries$getQuiverSlot(): $SlotReference;
        handler$blb000$exposure$onDrop(dropStack: boolean, cir: $CallbackInfoReturnable<any>): void;
        static findRespawnAndUseSpawnBlock(level: $ServerLevel, pos: $BlockPos_, angle: number, forced: boolean, keepInventory: boolean): ($ServerPlayer$RespawnPosAngle) | undefined;
        wrapMethod$iog000$sable$teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $Set_<any>, arg5: number, arg6: number, arg7: $Operation_<any>): boolean;
        wrapMethod$iog000$sable$teleportTo(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackEnteredOrExitedLavaOnVehicle(): void;
        setSpawnExtraParticlesOnFall(spawnExtraParticlesOnFall: boolean): void;
        supplementaries$setQuiverSlot(arg0: $SlotReference): void;
        railways$setPossessedConductor(arg0: $ConductorEntity): void;
        getLastActionTime(): number;
        getRespawnDimension(): $ResourceKey<$Level>;
        /**
         * Add experience levels to this player.
         */
        setExperiencePoints(levels: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        requestedViewDistance(): number;
        handler$imf018$sable$tick(arg0: $CallbackInfo): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackStartFallingPosition(): void;
        /**
         * Add experience levels to this player.
         */
        setExperienceLevels(levels: number): void;
        createCommonSpawnInfo(level: $ServerLevel): $CommonPlayerSpawnInfo;
        /**
         * Returns if other players can attack this player
         */
        isChangingDimension(): boolean;
        checkMovementStatistics(dx: number, arg1: number, dy: number): void;
        checkRidingStatistics(dx: number, arg1: number, dy: number): void;
        sable$getQueuedFreeze(): $Pair<any, any>;
        setRaidOmenPosition(raidOmenPosition: $BlockPos_): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        hasChangedDimension(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        clearRaidOmenPosition(): void;
        getRaidOmenPosition(): $BlockPos;
        setChunkTrackingView(chunkTrackingView: $ChunkTrackingView): void;
        sable$takeQueuedFreezeFrom(player: $ServerPlayer): void;
        copyRespawnPosition(player: $ServerPlayer): void;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        shouldFilterMessageTo(player: $ServerPlayer): boolean;
        getChunkTrackingView(): $ChunkTrackingView;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListDisplayName(): $Component;
        sable$getRespawnPoint(): $UUID;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetLastActionTime(): void;
        getRespawnPosition(): $BlockPos;
        handler$ldi000$ae2wtlib$restockDrop(arg0: boolean, arg1: $CallbackInfoReturnable<any>, arg2: $ItemStack_): void;
        findRespawnPositionAndUseSpawnBlock(keepInventory: boolean, postDimensionTransition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doTick(): void;
        bedInRange(pos: $BlockPos_, direction: $Direction_): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        unlockAdvancement(statKey: $ResourceLocation_): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(spawnExtraParticlesOnFall: boolean): void;
        revokeAdvancement(statKey: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        getSpawnLocation(): $LevelBlock;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Checks, whether the player is a server operator.
         * Returns if other players can attack this player
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        heal(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(component: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        kick(): void;
        getContainerSynchronizer(): $ContainerSynchronizer;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        ic$nextContainerCounter(): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getContainerCounter(): number;
        getCamera(): $Entity;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        setCamera(targetEntity: $Entity): void;
        lerpYRot: number;
        xRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        containerSynchronizer: $ContainerSynchronizer;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        gameMode: $ServerPlayerGameMode;
        appliedScale: number;
        object: $Object;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        swimAmount: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        containerListener: $ContainerListener;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        oExposureCameraActionAnim: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        exposureCameraActionAnim: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        wonGame: boolean;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        abilities: $Abilities;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        activeExposureCamera: $Camera;
        oRun: number;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        swimAmountO: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(server: $MinecraftServer, level: $ServerLevel, gameProfile: $GameProfile, clientInformation: $ClientInformation_);
        get language(): string;
        get statsCounter(): $ServerStatsCounter;
        get advancements(): $PlayerAdvancements;
        get respawnForced(): boolean;
        get respawnAngle(): number;
        get recipeBook(): $ServerRecipeBook;
        set knownMovement(value: $Vec3_);
        get chatVisibility(): $ChatVisiblity;
        get textFilter(): $TextFilter;
        get ipAddress(): string;
        set spawnExtraParticlesOnFall(value: boolean);
        get lastActionTime(): number;
        get respawnDimension(): $ResourceKey<$Level>;
        set experiencePoints(value: number);
        set experienceLevels(value: number);
        get changingDimension(): boolean;
        get tabListDisplayName(): $Component;
        set creativeMode(value: boolean);
        get op(): boolean;
        get containerCounter(): number;
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        static message<T>(chunk: $GenerationChunkHolder, task: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(chunk: $GenerationChunkHolder, task: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message(task: $Runnable_, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        close(): void;
        static release(task: $Runnable_, pos: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        getProcessor<T>(processor: $ProcessorHandle<T>, flush: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        getDebugStatus(): string;
        hasWork(): boolean;
        getReleaseProcessor(processor: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
        constructor(queues: $List_<$ProcessorHandle<never>>, task: $Executor_, maxTasks: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $IServerLevel, $VeilPacketManager$PacketSink, $ILevelEventRedirect, $ServerWorldCache, $LinkManager$Access, $ServerLevelKJS, $ServerLevelAccessor, $ServerLevelSceneExtension, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LightningAccessor, $BlueprintServerLevel {
        save(progress: $ProgressListener | null, flush: boolean, skipSave: boolean): void;
        unload(chunk: $LevelChunk): void;
        getLevel(): $ServerLevel;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        sable$getPlotContainer(): $SubLevelContainer;
        addDuringTeleport(entity: $Entity): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetEmptyTime(): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>): $List<T>;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        refurbishedFurniture$GetLinkManager(): $LinkManager;
        handler$dla000$glitchcore$onAddPlayer(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        sendPacket(packet: $Packet<any>): void;
        getRaidAt(pos: $BlockPos_): $Raid;
        isRaided(pos: $BlockPos_): boolean;
        getRaids(): $Raids;
        isVillage(pos: $BlockPos_): boolean;
        isVillage(pos: $SectionPos): boolean;
        tickCustomSpawners(spawnEnemies: boolean, spawnFriendlies: boolean): void;
        getPoiManager(): $PoiManager;
        getDataStorage(): $DimensionDataStorage;
        tickNonPassenger(entity: $Entity): void;
        tickPrecipitation(blockPos: $BlockPos_): void;
        isHandlingTick(): boolean;
        /**
         * @deprecated
         */
        setDragonFight(dragonFight: $EndDragonFight | null): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetWeatherCycle(): void;
        getRandomPlayer(): $ServerPlayer;
        saveDebugReport(path: $Path_): void;
        getLogicalHeight(): number;
        isCloseToVillage(pos: $BlockPos_, sections: number): boolean;
        onReputationEvent(type: $ReputationEventType, target: $Entity, host: $ReputationEventHandler_): void;
        /**
         * @deprecated
         * Returns the Entity with the given ID, or null if it doesn't exist in this World.
         */
        getEntityOrPart(id: number): $Entity;
        getPortalForcer(): $PortalForcer;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getWatchdogStats(): string;
        getForcedChunks(): $LongSet;
        clearBlockEvents(boundingBox: $BoundingBox): void;
        addRespawnedPlayer(player: $ServerPlayer): void;
        getDragonFight(): $EndDragonFight;
        startTickingChunk(chunk: $LevelChunk): void;
        getPathTypeCache(): $PathTypeCache;
        addNewPlayer(player: $ServerPlayer): void;
        areEntitiesLoaded(chunkPos: number): boolean;
        getRandomSequence(location: $ResourceLocation_): $RandomSource;
        getRandomSequences(): $RandomSequences;
        setDefaultSpawnPos(pos: $BlockPos_, angle: number): void;
        setChunkForced(chunkX: number, chunkZ: number, add: boolean): boolean;
        findClosestBiome3d(biomePredicate: $Predicate_<$Holder<$Biome>>, pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number): $Pair$1<$BlockPos, $Holder<$Biome>>;
        /**
         * Gets an unmodifiable iterator of all loaded entities in the world.
         */
        getAllEntities(): $Iterable<$Entity>;
        sectionsToVillage(pos: $SectionPos): number;
        sable$setSceneID(timeFlash: number): void;
        supp$setRedirected(arg0: boolean, arg1: $Vec3_): void;
        sable$getSceneID(): number;
        setWeatherParameters(clearTime: number, weatherTime: number, isRaining: boolean, isThundering: boolean): void;
        getStructureManager(): $StructureTemplateManager;
        findLightningTargetAround(pos: $BlockPos_): $BlockPos;
        onStructureStartsAvailable(chunk: $ChunkAccess): void;
        fabric_invalidateCache(blockPos: $BlockPos_): void;
        isNaturalSpawningAllowed(pos: $BlockPos_): boolean;
        isNaturalSpawningAllowed(chunkPos: $ChunkPos): boolean;
        fabric_registerCache(arg0: $BlockPos_, arg1: $BlockApiCacheImpl<any, any>): void;
        findNearestMapStructure(structureTag: $TagKey_<$Structure>, pos: $BlockPos_, radius: number, skipExistingChunks: boolean): $BlockPos;
        addLegacyChunkEntities(entities: $Stream<$Entity>): void;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        isPositionEntityTicking(pos: $BlockPos_): boolean;
        addWorldGenChunkEntities(entities: $Stream<$Entity>): void;
        redirect$dlj000$sereneseasons$tickIceAndSnow_getPrecipitationAt(arg0: $Biome_, arg1: $BlockPos_): $Biome$Precipitation;
        sendParticles(player: $ServerPlayer, longDistance: boolean, posX: number, arg3: number, posY: number, arg5: $Packet<never>): boolean;
        sendParticles<T extends $ParticleOptions>(player: $ServerPlayer, type: T, longDistance: boolean, posX: number, arg4: number, posY: number, arg6: number, posZ: number, arg8: number, particleCount: number, xOffset: number): boolean;
        sendParticles<T extends $ParticleOptions>(type: T, posX: number, arg2: number, posY: number, arg4: number, posZ: number, arg6: number, particleCount: number, xOffset: number): number;
        getScoreboard(): $ServerScoreboard;
        getLevelData(arg0: number): $Object;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ServerChunkCache;
        setDayTime(time: number): void;
        getDragons(): $List<$EnderDragon>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>, maxResults: number): $List<$ServerPlayer>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        tickChunk(chunk: $LevelChunk, randomTickSpeed: number): void;
        wrapOperation$kdm000$petrolpark$postPrecipitationEvent(arg0: $Block_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Biome$Precipitation_, arg5: $Operation_<any>, arg6: $BlockPos_): void;
        handler$imk000$sable$kickEntity(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        tryAddFreshEntityWithPassengers(entity: $Entity): boolean;
        handler$glg013$gigeresque$tick(arg0: $CallbackInfo): void;
        handler$iph000$sable$saveSubLevels(arg0: $ProgressListener, arg1: boolean, arg2: boolean, arg3: $CallbackInfo): void;
        wrapMethod$iok000$sable$preExplode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<any>, arg12: $Operation_<any>): $Explosion;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        /**
         * Resets the updateEntityTick field to 0
         */
        cleanCapabilityListenerReferences(): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        servercore$resetIceAndSnowTick(): void;
        structureManager(): $StructureManager;
        handler$fcn000$immersive_melodies$immersiveMelodies$injectTickEntity(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$fcn000$immersive_melodies$immersiveMelodies$injectTickPassenger(arg0: $Entity, arg1: $Entity, arg2: $CallbackInfo): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        wrapWithCondition$kdm000$petrolpark$swingLegsIfRidingHorseMillContraption(entity: $Entity): boolean;
        getPersistentData(): $CompoundTag;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        addWithUUID(entity: $Entity): boolean;
        getBlockTicks(): $LevelTicks<$Block>;
        getFluidTicks(): $LevelTicks<$Fluid>;
        handler$kdm000$petrolpark$postChunkTickEventPost(arg0: $LevelChunk, arg1: number, arg2: $CallbackInfo): void;
        handler$kdm000$petrolpark$postChunkTickEventPre(arg0: $LevelChunk, arg1: number, arg2: $CallbackInfo): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        updateSleepingPlayerList(): void;
        isFlat(): boolean;
        canSleepThroughNights(): boolean;
        removePlayerImmediately(player: $ServerPlayer, reason: $Entity$RemovalReason_): void;
        handler$hfl000$collective$serverLevel_close(arg0: $CallbackInfo): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        tickTime(): void;
        ensureCanWrite(pos: $BlockPos_): boolean;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        self(): $ServerLevel;
        addFreshEntityWithPassengers(entity: $Entity): void;
        create$getEntityTickList(): $EntityTickList;
        invokeGetLightningPos(pos: $BlockPos_): $BlockPos;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        navigatingMobs: $Set<$Mob>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        entityTickList: $EntityTickList;
        raids: $Raids;
        rainLevel: number;
        dragonParts: $Int2ObjectMap<$PartEntity<never>>;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        serverLevelData: $ServerLevelData;
        level: $ServerLevel;
        static RAIN_DURATION: $IntProvider;
        players: $List<$ServerPlayer>;
        geneticsresequenced$antiFieldPositions: $LongOpenHashSet;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        isUpdatingNavigations: boolean;
        addend: number;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(server: $MinecraftServer, dispatcher: $Executor_, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, serverLevelData: $ServerLevelData, dimension: $ResourceKey_<$Level>, levelStem: $LevelStem_, progressListener: $ChunkProgressListener, isDebug: boolean, biomeZoomSeed: number, arg9: $List_<$CustomSpawner_>, customSpawners: boolean, tickTime: $RandomSequences | null);
        get seed(): number;
        get poiManager(): $PoiManager;
        get dataStorage(): $DimensionDataStorage;
        get handlingTick(): boolean;
        get randomPlayer(): $ServerPlayer;
        get logicalHeight(): number;
        get portalForcer(): $PortalForcer;
        get watchdogStats(): string;
        get forcedChunks(): $LongSet;
        get pathTypeCache(): $PathTypeCache;
        get randomSequences(): $RandomSequences;
        get allEntities(): $Iterable<$Entity>;
        get scoreboard(): $ServerScoreboard;
        get chunkSource(): $ServerChunkCache;
        get dragons(): $List<$EnderDragon>;
        get persistentData(): $CompoundTag;
        get blockTicks(): $LevelTicks<$Block>;
        get fluidTicks(): $LevelTicks<$Fluid>;
        get flat(): boolean;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        getLevelFromSource(pos: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkMap$TrackedEntity implements $TrackedEntityAccessor, $ChunkMapAccessor$TrackedEntityAccessor, $EntityTrackerAccessor, $ChunkMapAccessor$TrackedEntityAccessor$1, $EntityTrackerAccessor$1 {
        broadcast(packet: $Packet<never>): void;
        broadcastAndSend(packet: $Packet<never>): void;
        removePlayer(player: $ServerPlayer): void;
        updatePlayers(playersList: $List_<$ServerPlayer>): void;
        updatePlayer(player: $ServerPlayer): void;
        broadcastRemoved(): void;
        localvar$gde000$railways$securitycraft$modifyFlag(arg0: boolean): boolean;
        getSeenBy(): $Set<$ServerPlayerConnection>;
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        serverEntity: $ServerEntity;
        lastSectionPos: $SectionPos;
        this$0: $ChunkMap;
        entity: $Entity;
        seenBy: $Set<$ServerPlayerConnection>;
        constructor(entity: $ChunkMap, range: $Entity, updateInterval: number, trackDelta: number, arg4: boolean);
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
}
