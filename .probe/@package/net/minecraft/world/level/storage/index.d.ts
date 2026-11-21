import { $IPrimaryLevelData, $ExtraFightData } from "@package/com/yungnickyoung/minecraft/betterendisland/world";
import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        iconFile(): $Path;
        dataFile(): $Path;
        lockFile(): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        getDifficulty(): $Difficulty;
        enabledFeatures(): $FeatureFlagSet;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getKnownServerBrands(): $Set<string>;
        getDataConfiguration(): $WorldDataConfiguration;
        setDifficultyLocked(locked: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getStorageVersionName(storageVersionId: number): string;
        getCustomBossEvents(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        overworldData(): $ServerLevelData;
        setDifficulty(difficulty: $Difficulty_): void;
        setModdedInfo(name: string, isModded: boolean): void;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isSideSeries(): boolean;
        isCompatible(dataVersion: $DataVersion): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        getDifficulty(): $Difficulty;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDayTimeFraction(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get hardcore(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get allowCommands(): boolean;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        get dayTime(): number;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameTime(): number;
        get gameRules(): $GameRules;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
    }
    export class $DimensionDataStorage {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        getTranslationKey(): string;
        isSevere(): boolean;
        shouldBackup(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        deleteLevel(): void;
        hasWorldData(): boolean;
        getLevelId(): string;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        getLevelPath(folderName: $LevelResource): $Path;
        getIconFile(): ($Path) | undefined;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getFileModificationTime(useFallback: boolean): $Instant;
        readAdditionalLevelSaveData(arg0: boolean): void;
        safeClose(): void;
        getDataTag(): $Dynamic<never>;
        createPlayerStorage(): $PlayerDataStorage;
        checkForLowDiskSpace(): boolean;
        makeWorldBackup(): number;
        getWorldDir(): $Path;
        estimateDiskSpace(): number;
        getDataTagFallback(): $Dynamic<never>;
        renameLevel(saveName: string): void;
        renameAndDropPlayer(saveName: string): void;
        restoreLevelDataFromOld(): boolean;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get levelId(): string;
        get iconFile(): ($Path) | undefined;
        get dataTag(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTagFallback(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getDayTimeFraction(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        get levelName(): string;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set dayTime(value: number);
        set gameTime(value: number);
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        lastPlayed(): number;
        minecraftVersionName(): string;
        levelDataVersion(): number;
        minecraftVersion(): $DataVersion;
    }
    export class $LevelStorageSource {
        getName(): string;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        getLevelPath(saveName: string): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        isNewLevelIdAcceptable(saveName: string): boolean;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        getWorldDirValidator(): $DirectoryValidator;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        levelExists(saveName: string): boolean;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get baseDir(): $Path;
        get worldDirValidator(): $DirectoryValidator;
        get backupPath(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $IPrimaryLevelData, $PrimaryLevelDataExtension {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setThunderTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThundering(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        setExtraEndDragonFightData(arg0: $ExtraFightData): void;
        getExtraEndDragonFightData(): $ExtraFightData;
        getDifficulty(): $Difficulty;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setRaining(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDayTimeFraction(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getKnownServerBrands(): $Set<string>;
        getDataConfiguration(): $WorldDataConfiguration;
        setDifficultyLocked(locked: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getCustomBossEvents(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        overworldData(): $ServerLevelData;
        setDifficulty(difficulty: $Difficulty_): void;
        setModdedInfo(name: string, isModded: boolean): void;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setPreset(arg0: $ResourceLocation_): void;
        getPreset(): $ResourceLocation;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        handler$hfk000$collective$hasConfirmedExperimentalWarning(arg0: $CallbackInfoReturnable<any>): void;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getStorageVersionName(storageVersionId: number): string;
        static PLAYER: string;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get allowCommands(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        getIcon(): $Path;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getInfo(): $Component;
        getSettings(): $LevelSettings;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        isDisabled(): boolean;
        isCompatible(): boolean;
        canEdit(): boolean;
        canUpload(): boolean;
        canDelete(): boolean;
        isExperimental(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        primaryActionActive(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        requiresManualConversion(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        levelVersion(): $LevelVersion;
        canRecreate(): boolean;
        getLastPlayed(): number;
        isDowngrade(): boolean;
        hasCommands(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get icon(): $Path;
        get levelName(): string;
        get info(): $Component;
        get settings(): $LevelSettings;
        get hardcore(): boolean;
        get levelId(): string;
        get disabled(): boolean;
        get compatible(): boolean;
        get experimental(): boolean;
        get gameMode(): $GameType;
        get worldVersionName(): $MutableComponent;
        get lastPlayed(): number;
        get downgrade(): boolean;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
