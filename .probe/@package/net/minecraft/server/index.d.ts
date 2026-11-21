import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $DynamicManager } from "@package/me/wesley1808/servercore/common/dynamic";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $PlayerDataStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_, $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $JsonElement_ } from "@package/com/google/gson";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $Statistics } from "@package/me/wesley1808/servercore/common/utils/statistics";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_ } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $PlayerAdvancementsAccessor } from "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor";
import { $IMinecraftServer } from "@package/me/wesley1808/servercore/common/interfaces";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $FabricOriginalKnownPacksGetter } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        logLine(string: string | null): void;
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements implements $PlayerAdvancementsAccessor {
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        stopListening(): void;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        flushDirty(serverPlayer: $ServerPlayer): void;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        handler$lga000$iceberg$onAward(advancementHolder: $AdvancementHolder_, criterionKey: string, callbackInfo: $CallbackInfoReturnable<any>, success: boolean): void;
        setPlayer(serverPlayer: $ServerPlayer): void;
        handler$mgj000$fabric_events_interaction_v0$preventGrantCriterion(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$mgj000$fabric_events_interaction_v0$preventOwnerOverride(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        getPlayer(): $ServerPlayer;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { cookie?: any, finalDimensions?: $RegistryAccess$Frozen,  } | [cookie?: any, finalDimensions?: $RegistryAccess$Frozen, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        managers(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager,  } | [managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        get(location: $ResourceLocation_): $AdvancementHolder;
        apply(object: $Map_<$ResourceLocation_, $JsonElement_>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        tree(): $AdvancementTree;
        getFabricDependencies(): $Collection<any>;
        getFabricId(): $ResourceLocation;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        constructor(registries: $HolderLookup$Provider);
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMotd(): string;
        getMaxPlayers(): number;
        getServerVersion(): string;
        getPlayerCount(): number;
        get motd(): string;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        isSprinting(): boolean;
        stopSprinting(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        stopStepping(): boolean;
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        updateJoiningPlayer(player: $ServerPlayer): void;
        requestGameToSprint(sprintTime: number): boolean;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        packRepository(): $PackRepository;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        safeMode(): boolean;
        initialDataConfig(): $WorldDataConfiguration;
        initMode(): boolean;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean,  } | [safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean, ];
    export class $ChainedJsonException$Entry {
        getJsonKeys(): string;
        getFilename(): string;
        addJsonKey(key: string): void;
        filename: string;
        constructor();
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        constructor(registryAccess: $RegistryAccess);
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        static getMissingTranslations(): $Set<string>;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static realStdoutPrintln(message: string): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        setFilenameAndFlush(message: string): void;
        static forException(exception: $Exception): $ChainedJsonException;
        prependJsonKey(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        missingTagAccessPolicy(missingTagAccessPolicy: $ReloadableServerResources$MissingTagAccessPolicy_): void;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        registryAccess: $RegistryAccess;
        constructor(registryAccess: $RegistryAccess);
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        datapackWorldgen(): $RegistryAccess$Frozen;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $RegistryAccess$Frozen;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager,  } | [datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        get properties(): $DedicatedServerProperties;
        get playerNames(): string[];
        get serverName(): string;
        get serverPort(): number;
        get serverIp(): string;
        get levelIdName(): string;
        get pluginNames(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFabricDependencies(): $Collection<any>;
        getFabricId(): $ResourceLocation;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get availableTags(): $Iterable<$ResourceLocation>;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $ITimeTrackingServer, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $IMinecraftServer, $Trackable, $MinecraftServerAccessor, $MinecraftServerKJS, $FabricOriginalKnownPacksGetter {
        getFile(path: string): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        getConnection(): $ServerConnectionListener;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        getProfileKeySignatureValidator(): $SignatureValidator;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        getStatus(): $ServerStatus;
        setId(serverId: string): void;
        setPort(idleTimeout: number): void;
        getProxy(): $Proxy;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        mfix$getLastTickStartTime(): number;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        servercore$onStarted(server: $MinecraftServer): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        dumpServerProperties(path: $Path_): void;
        servercore$getStatistics(): $Statistics;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        sendPacket(arg0: $Packet<any>): void;
        getProfiler(): $ProfilerFiller;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        shouldRun(runnable: $TickTask): boolean;
        getWorldPath(levelResource: $LevelResource): $Path;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        getServerDirectory(): $Path;
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getFunctions(): $ServerFunctionManager;
        sendSystemMessage(component: $Component_): void;
        getCommands(): $Commands;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        getStructureManager(): $StructureTemplateManager;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        getScoreboard(): $ServerScoreboard;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        fillSystemReport(report: $SystemReport): $SystemReport;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        registryAccess(): $RegistryAccess$Frozen;
        wrapRunnable(runnable: $Runnable_): $TickTask;
        getFixerUpper(): $DataFixer;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getRecipeManager(): $RecipeManager;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        getGameRules(): $GameRules;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        setLocalIp(serverId: string): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        runServer(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        setMotd(serverId: string): void;
        getResourceManager(): $ResourceManager;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        getServerResources(): $MinecraftServer$ReloadableResources;
        getWorldScreenshotFile(): ($Path) | undefined;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        levelKeys(): $Set<$ResourceKey<$Level>>;
        getCurrentSmoothedTickTime(): number;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        getSpawnRadius(level: $ServerLevel | null): number;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        doRunTask(task: $TickTask): void;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        getPersistentData(): $CompoundTag;
        createCommandSourceStack(): $CommandSourceStack;
        atl$getBaseClass(): $Class<any>;
        getData(): $AttachedData<any>;
        potionBrewing(): $PotionBrewing;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        getCustomBossEvents(): $CustomBossEvents;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        restoreInventories(): $Map<any, any>;
        getProfilePermissions(profile: $GameProfile): number;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        getPlayerList(): $PlayerList;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        loadLevel(): void;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        serverLinks(): $ServerLinks;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        overworld(): $ServerLevel;
        getCommandStorage(): $CommandStorage;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        servercore$getDynamicManager(): $DynamicManager;
        fabric_getOriginalKnownPacks(): $List<any>;
        constant$cgn000$servercore$modifyAutoSaveInterval(constant: number): number;
        addTickable(tickable: $Runnable_): void;
        handler$lbe000$ae2$injectSpatialLevel(arg0: $ChunkProgressListener, arg1: $CallbackInfo): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        getAverageTickTimeNanos(): number;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        getProfileRepository(): $GameProfileRepository;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        getSingleplayerProfile(): $GameProfile;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        setPlayerIdleTimeout(idleTimeout: number): void;
        getScaledTrackingDistance(trackingDistance: number): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        getModdedStatus(): $ModCheck;
        createLevels(listener: $ChunkProgressListener): void;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        getTickTimeLogger(): $SampleLogger;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        static setFatalException(fatalException: $RuntimeException): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceDifficulty(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        getSessionService(): $MinecraftSessionService;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        setPlayerList(list: $PlayerList): void;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        getNextTickTime(): number;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        initializeKeyPair(): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        handler$bhk000$veil$stopServer(arg0: $CallbackInfo): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        getTickTimesNanos(): number[];
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        getOverworld(): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        stopTimeProfiler(): $ProfileResults;
        getPackRepository(): $PackRepository;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTracking(): void;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        tell(component: $Component_): void;
        self(): $MinecraftServer;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        sendData(channel: string, data: $CompoundTag_): void;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        sendData(serverId: string): void;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get shutdown(): boolean;
        get connection(): $ServerConnectionListener;
        get scheduledEvents(): $ScheduledEvents;
        get stopped(): boolean;
        get tickCount(): number;
        get profileKeySignatureValidator(): $SignatureValidator;
        get dedicated(): boolean;
        get running(): boolean;
        get status(): $ServerStatus;
        set id(value: string);
        get timeProfilerRunning(): boolean;
        get profiler(): $ProfilerFiller;
        get hardcore(): boolean;
        get ready(): boolean;
        get paused(): boolean;
        get serverDirectory(): $Path;
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get functions(): $ServerFunctionManager;
        get commands(): $Commands;
        get spawningAnimals(): boolean;
        get structureManager(): $StructureTemplateManager;
        get absoluteMaxWorldSize(): number;
        get scoreboard(): $ServerScoreboard;
        get published(): boolean;
        get advancements(): $ServerAdvancementManager;
        get fixerUpper(): $DataFixer;
        get singleplayer(): boolean;
        get recipeManager(): $RecipeManager;
        get gameRules(): $GameRules;
        get resourceManager(): $ResourceManager;
        get maxChainedNeighborUpdates(): number;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get worldScreenshotFile(): ($Path) | undefined;
        get keyPair(): $KeyPair;
        get playerNames(): string[];
        get currentSmoothedTickTime(): number;
        get forcedGameType(): $GameType;
        get persistentData(): $CompoundTag;
        get data(): $AttachedData<any>;
        set difficultyLocked(value: boolean);
        get customBossEvents(): $CustomBossEvents;
        get commandBlockEnabled(): boolean;
        get commandStorage(): $CommandStorage;
        get averageTickTimeNanos(): number;
        get tickTimeLoggingEnabled(): boolean;
        get resourcePackRequired(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get profileRepository(): $GameProfileRepository;
        get spawnProtectionRadius(): number;
        get compressionThreshold(): number;
        get currentlySaving(): boolean;
        get serverModName(): string;
        get moddedStatus(): $ModCheck;
        get tickTimeLogger(): $SampleLogger;
        get statusJson(): string;
        get maxPlayers(): number;
        static set fatalException(value: $RuntimeException);
        get sessionService(): $MinecraftSessionService;
        get spawningMonsters(): boolean;
        get nextTickTime(): number;
        get epollEnabled(): boolean;
        get serverVersion(): string;
        get playerCount(): number;
        get functionCompilationLevel(): number;
        get operatorUserPermissionLevel(): number;
        get rateLimitPacketsPerSecond(): number;
        get tickTimesNanos(): number[];
        get recordingMetrics(): boolean;
        get packRepository(): $PackRepository;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        resourceManager(): $CloseableResourceManager;
        dataPackResources(): $ReloadableServerResources;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager,  } | [dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager, ];
    export class $ServerScoreboard extends $Scoreboard {
        addDirtyListener(runnable: $Runnable_): void;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        startTrackingObjective(objective: $Objective): void;
        stopTrackingObjective(objective: $Objective): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        setDirty(): void;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        listeners(): $List<$PreparableReloadListener>;
        getCommands(): $Commands;
        getAdvancements(): $ServerAdvancementManager;
        getRecipeManager(): $RecipeManager;
        getConditionContext(): $ICondition$IContext;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getRegistryLookup(): $HolderLookup$Provider;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
        get commands(): $Commands;
        get advancements(): $ServerAdvancementManager;
        get recipeManager(): $RecipeManager;
        get conditionContext(): $ICondition$IContext;
        get registryLookup(): $HolderLookup$Provider;
        get functionLibrary(): $ServerFunctionLibrary;
    }
    export class $WorldLoader$InitConfig extends $Record {
        functionCompilationLevel(): number;
        commandSelection(): $Commands$CommandSelection;
        packConfig(): $WorldLoader$PackConfig;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_,  } | [commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_, ];
    export class $TickTask implements $Runnable {
        run(): void;
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { url?: string, hash?: string, id?: $UUID_, prompt?: $Component_, isRequired?: boolean,  } | [url?: string, hash?: string, id?: $UUID_, prompt?: $Component_, isRequired?: boolean, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $Services extends $Record {
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        canValidateProfileKeys(): boolean;
        profileCache(): $GameProfileCache;
        sessionService(): $MinecraftSessionService;
        servicesKeySet(): $ServicesKeySet;
        profileRepository(): $GameProfileRepository;
        profileKeySignatureValidator(): $SignatureValidator;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService,  } | [servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        tick(): void;
        getTagNames(): $Iterable<$ResourceLocation>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        mfix$getProfilingResults(): string;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getGameLoopSender(): $CommandSourceStack;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get tagNames(): $Iterable<$ResourceLocation>;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get functionNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
}
