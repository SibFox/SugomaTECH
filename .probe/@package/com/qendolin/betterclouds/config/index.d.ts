import { $JsonElement_, $JsonElement, $JsonDeserializationContext_, $JsonSerializer, $JsonDeserializer, $JsonSerializationContext, $InstanceCreator } from "@package/com/google/gson";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $NameableEnum } from "@package/dev/isxander/yacl3/api";
import { $Type } from "@package/java/lang/reflect";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Pattern } from "@package/java/util/regex";
import { $Enum, $Exception } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/qendolin/betterclouds/config" {
    export class $Config {
        static getDefaultDimensions(): $List<$ResourceKey<$DimensionType>>;
        blockDistance(): number;
        shaderPreset(): $ShaderPresetConfig;
        sortNoisePresets(): void;
        sortNoisePresets(updateSelectedIndex: boolean): void;
        sortShaderPresets(updateSelectedIndex: boolean): void;
        sortShaderPresets(): void;
        noisePreset(): $NoisePresetConfig;
        loadDefaultPreset<T extends $AbstractPresetConfig>(loader: $PresetLoader<T>, presets: $List_<T>): void;
        loadDefaultPresets(): void;
        fuzziness: number;
        yOffset: number;
        windEffectFactor: number;
        distance: number;
        colorVariationFactor: number;
        fogRangeFactor: number;
        useIrisFBO: boolean;
        noisePresets: $List<$NoisePresetConfig>;
        scaleFalloffMin: number;
        sparsity: number;
        timeSource: $Config$TimeSource;
        randomPlacement: number;
        celestialBodyHalo: boolean;
        static REGISTRY_KEY_SERIALIZER: $Config$RegistryKeySerializer;
        enabled: boolean;
        spacing: number;
        static INSTANCE_CREATOR: $InstanceCreator<$Config>;
        lastTelemetryVersion: number;
        useSamplerCaching: boolean;
        irisSupport: boolean;
        enabledDimensions: $List<$ResourceKey<$DimensionType>>;
        gpuIncompatibleMessageEnabled: boolean;
        windSpeedFactor: number;
        bottomSparsity: number;
        chunkSize: number;
        cloudOverride: boolean;
        issueReportEnabled: boolean;
        static DEFAULT_PRESET_KEY: string;
        yRange: number;
        migrationVersion: number;
        sereneSeasonsConfig: $SereneSeasonsConfig;
        selectedNoisePreset: number;
        selectedPreset: number;
        presets: $List<$ShaderPresetConfig>;
        fabricSeasonsConfig: $FabricSeasonsConfig;
        fogEndFactor: number;
        useFrustumCulling: boolean;
        usePersistentBuffers: boolean;
        travelSpeed: number;
        samplingScale: number;
        sizeXZ: number;
        sizeY: number;
        constructor();
        constructor(other: $Config);
        static get defaultDimensions(): $List<$ResourceKey<$DimensionType>>;
    }
    export class $SereneSeasonsConfig {
        lateSummerCloudiness: number;
        midAutumnCloudiness: number;
        midWinterCloudiness: number;
        midSummerCloudiness: number;
        lateAutumnCloudiness: number;
        transitionDays: number;
        lateWinterCloudiness: number;
        earlyAutumnCloudiness: number;
        earlySpringCloudiness: number;
        earlyWinterCloudiness: number;
        midSpringCloudiness: number;
        lateSpringCloudiness: number;
        earlySummerCloudiness: number;
        constructor();
        constructor(other: $SereneSeasonsConfig);
    }
    export class $Config$RegistryKeySerializer implements $JsonSerializer<$ResourceKey<$DimensionType>>, $JsonDeserializer<$ResourceKey<$DimensionType>> {
        serialize(src: $ResourceKey_<$DimensionType>, typeOfSrc: $Type, context: $JsonSerializationContext): $JsonElement;
        deserialize(json: $JsonElement_, typeOfT: $Type, context: $JsonDeserializationContext_): $ResourceKey<$DimensionType>;
    }
    export class $FabricSeasonsConfig {
        fallCloudiness: number;
        transitionDays: number;
        winterCloudiness: number;
        springCloudiness: number;
        summerCloudiness: number;
        constructor();
        constructor(other: $FabricSeasonsConfig);
    }
    export class $ShaderPresetConfig extends $AbstractPresetConfig {
        gamma(): number;
        opacityFactor: number;
        sunriseEndTime: number;
        upscaleResolutionFactor: number;
        opacityExponent: number;
        editable: boolean;
        dayBrightness: number;
        sunsetStartTime: number;
        description: string;
        sunPathAngle: number;
        title: string;
        saturation: number;
        sunsetEndTime: number;
        tintGreen: number;
        static INSTANCE_CREATOR: $InstanceCreator<$ShaderPresetConfig>;
        sunriseStartTime: number;
        tintRed: number;
        worldCurvatureSize: number;
        tintBlue: number;
        opacity: number;
        nightBrightness: number;
        key: string;
        constructor(other: $ShaderPresetConfig);
        constructor(title: string);
        constructor();
    }
    export class $PresetLoader<T extends $AbstractPresetConfig> implements $PreparableReloadListener {
        load(manager: $ResourceManager, executor: $Executor_): $CompletableFuture<$Map<string, T>>;
        apply(data: $Map_<string, T>, manager: $ResourceManager, executor: $Executor_): $CompletableFuture<void>;
        reload(helper: $PreparableReloadListener$PreparationBarrier_, manager: $ResourceManager, loadProfiler: $ProfilerFiller, applyProfiler: $ProfilerFiller, loadExecutor: $Executor_, applyExecutor: $Executor_): $CompletableFuture<void>;
        presets(): $Map<string, T>;
        getName(): string;
        static SHADER: $PresetLoader<$ShaderPresetConfig>;
        resourceId: $ResourceLocation;
        static ALL_PRESETS: $List<$PresetLoader<never>>;
        static NOISE: $PresetLoader<$NoisePresetConfig>;
        id: $ResourceLocation;
        constructor(id: string, resourceId: string, gsonType: $Type);
        get name(): string;
    }
    export class $NoisePresetConfig extends $AbstractPresetConfig {
        octavesFromStringList(octaves: $List_<string>): boolean;
        octavesToStringList(): $List<string>;
        static BAD_STRING_PATTERN: $Pattern;
        octaves: $List<$List<number>>;
        static lastException: $Exception;
        static INSTANCE_CREATOR: $InstanceCreator<$NoisePresetConfig>;
        static COMMA_REGEX: $Pattern;
        editable: boolean;
        description: string;
        title: string;
        key: string;
        static OCTAVE_DELIMITER: string;
        constructor(other: $NoisePresetConfig);
        constructor(title: string);
        constructor();
    }
    export class $Config$TimeSource extends $Enum<$Config$TimeSource> implements $NameableEnum {
        static values(): $Config$TimeSource[];
        static valueOf(name: string): $Config$TimeSource;
        getDisplayName(): $Component;
        static PLAYTIME: $Config$TimeSource;
        static RENDERER: $Config$TimeSource;
        static WORLD: $Config$TimeSource;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Config$TimeSource}.
     */
    export type $Config$TimeSource_ = "world" | "playtime" | "renderer";
    export class $AbstractPresetConfig {
        markAsCopy(): void;
        isEqualTo(other: $AbstractPresetConfig): boolean;
        getEmptyPreset(): $AbstractPresetConfig;
        editable: boolean;
        description: string;
        title: string;
        key: string;
        constructor();
        get emptyPreset(): $AbstractPresetConfig;
    }
}
