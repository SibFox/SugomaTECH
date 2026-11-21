import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $SpaceFluidDistributionType, $SpaceOreDistributionType } from "@package/com/denfop/api/space/dimension/worldgen";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $AmbientParticleSettings, $Biome } from "@package/net/minecraft/world/level/biome";
import { $List, $List_, $Map } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $PlayerTickEvent$Post, $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $EnumRing_, $EnumRing, $EnumType_, $EnumType } from "@package/com/denfop/api/space";
import { $RegistrySetBuilder } from "@package/net/minecraft/core";
import { $Music } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LivingFallEvent, $LivingEvent$LivingJumpEvent, $LivingBreatheEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Enum, $Record } from "@package/java/lang";
import { $NoiseGeneratorSettings } from "@package/net/minecraft/world/level/levelgen";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $LevelStem, $DimensionType } from "@package/net/minecraft/world/level/dimension";
export * as worldgen from "@package/com/denfop/api/space/dimension/worldgen";
export * as client from "@package/com/denfop/api/space/dimension/client";

declare module "@package/com/denfop/api/space/dimension" {
    export class $SpaceFluidPocket extends $Record {
        name(): string;
        state(): $BlockState;
        minY(): number;
        weight(): number;
        maxY(): number;
        fluidId(): string;
        fluid(): $Fluid;
        baseChance(): number;
        radiusMax(): number;
        radiusMin(): number;
        ventType(): $SpaceVentType;
        surfaceLake(): boolean;
        surfaceAllowed(): boolean;
        requireHotContext(): boolean;
        requireColdContext(): boolean;
        caveOnly(): boolean;
        distributionType(): $SpaceFluidDistributionType;
        constructor(state: $BlockState_, weight: number, minY: number, maxY: number, ventType: $SpaceVentType_, surfaceLake: boolean, fluid: $Fluid_);
    }
    /**
     * Values that may be interpreted as {@link $SpaceFluidPocket}.
     */
    export type $SpaceFluidPocket_ = { surfaceLake?: boolean, fluid?: $Fluid_, state?: $BlockState_, ventType?: $SpaceVentType_, minY?: number, maxY?: number, weight?: number,  } | [surfaceLake?: boolean, fluid?: $Fluid_, state?: $BlockState_, ventType?: $SpaceVentType_, minY?: number, maxY?: number, weight?: number, ];
    export class $SpaceRuntimeEvents {
        static onLivingFall(arg0: $LivingFallEvent): void;
        static onLivingJump(arg0: $LivingEvent$LivingJumpEvent): void;
        static onLevelTick(arg0: $LevelTickEvent$Post): void;
        static onLivingTick(arg0: $LivingBreatheEvent): void;
    }
    export class $SpaceGenerationMode extends $Enum<$SpaceGenerationMode> {
        static values(): $SpaceGenerationMode[];
        static valueOf(arg0: string): $SpaceGenerationMode;
        static ASTEROID_FIELD: $SpaceGenerationMode;
        static CRYO_CHEMICAL: $SpaceGenerationMode;
        static AIRLESS_BARREN: $SpaceGenerationMode;
        static DUSTY_DESERT: $SpaceGenerationMode;
        static VOLCANIC: $SpaceGenerationMode;
        static AIRLESS_CRATERED: $SpaceGenerationMode;
        static NONE: $SpaceGenerationMode;
        static ICY_SHELL: $SpaceGenerationMode;
    }
    /**
     * Values that may be interpreted as {@link $SpaceGenerationMode}.
     */
    export type $SpaceGenerationMode_ = "none" | "airless_barren" | "airless_cratered" | "volcanic" | "dusty_desert" | "icy_shell" | "cryo_chemical" | "asteroid_field";
    export class $SpaceBlockResolver {
        static resolvePalette(arg0: $SpaceBodyRef_, arg1: $SpaceGenerationMode_): $SpaceTerrainPalette;
    }
    export class $SpaceDatagenRegistryBuilder {
        static createBuiltinBuilder(): $RegistrySetBuilder;
    }
    export class $SpaceBodyProfiles {
        static invalidate(): void;
        static byName(arg0: string): $SpaceDimensionProfile;
        static byBody(arg0: $SpaceBodyRef_): $SpaceDimensionProfile;
        static byDimensionPath(arg0: string): $SpaceDimensionProfile;
    }
    export class $SpaceDimensionKeys {
        static craterAdditionConfiguredKey(arg0: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static cavityPlacedKey(arg0: string): $ResourceKey<$PlacedFeature>;
        static shaftPlacedKey(arg0: string): $ResourceKey<$PlacedFeature>;
        static oreConfiguredKey(arg0: string, arg1: number): $ResourceKey<$ConfiguredFeature<never, never>>;
        static levelStemKey(arg0: string): $ResourceKey<$LevelStem>;
        static fluidConfiguredKey(arg0: string, arg1: number): $ResourceKey<$ConfiguredFeature<never, never>>;
        static orePlacedKey(arg0: string, arg1: number): $ResourceKey<$PlacedFeature>;
        static fluidPlacedKey(arg0: string, arg1: number): $ResourceKey<$PlacedFeature>;
        static lavaTubePlacedKey(arg0: string): $ResourceKey<$PlacedFeature>;
        static geyserPlacedKey(arg0: string, arg1: number): $ResourceKey<$PlacedFeature>;
        static shaftConfiguredKey(arg0: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static lakeConfiguredKey(arg0: string, arg1: number): $ResourceKey<$ConfiguredFeature<never, never>>;
        static volcanoPlacedKey(arg0: string): $ResourceKey<$PlacedFeature>;
        static configuredKey(arg0: string, arg1: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static dimensionTypeKey(arg0: string): $ResourceKey<$DimensionType>;
        static craterPlacedKey(arg0: string): $ResourceKey<$PlacedFeature>;
        static lakePlacedKey(arg0: string, arg1: number): $ResourceKey<$PlacedFeature>;
        static noiseSettingsKey(arg0: string): $ResourceKey<$NoiseGeneratorSettings>;
        static levelKey(arg0: string): $ResourceKey<$Level>;
        static effectsLocation(arg0: string): $ResourceLocation;
        static bodyId(arg0: string): $ResourceLocation;
        static biomeKey(arg0: string): $ResourceKey<$Biome>;
        static asteroidFieldConfiguredKey(arg0: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static asteroidFieldPlacedKey(arg0: string): $ResourceKey<$PlacedFeature>;
        static craterConfiguredKey(arg0: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static craterAdditionPlacedKey(arg0: string): $ResourceKey<$PlacedFeature>;
        static volcanoConfiguredKey(arg0: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static geyserConfiguredKey(arg0: string, arg1: number): $ResourceKey<$ConfiguredFeature<never, never>>;
        static cavityConfiguredKey(arg0: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static lavaTubeConfiguredKey(arg0: string): $ResourceKey<$ConfiguredFeature<never, never>>;
        static placedKey(arg0: string, arg1: string): $ResourceKey<$PlacedFeature>;
    }
    export class $SpaceRuntimeEvents$JetpackControlState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceRuntimeEvents$JetpackControlState}.
     */
    export type $SpaceRuntimeEvents$JetpackControlState_ = { active?: boolean, available?: boolean, hoverMode?: boolean,  } | [active?: boolean, available?: boolean, hoverMode?: boolean, ];
    export class $SpaceBodyDefinitionRegistry {
        static get(arg0: string): $SpaceBodyDefinition;
        static clear(): void;
        static register(arg0: string, arg1: $SpaceBodyDefinition): void;
        static getOrCreate(arg0: string): $SpaceBodyDefinition;
        static getOrBuild(arg0: $SpaceBodyRef_, arg1: $SpaceGenerationMode_): $SpaceBodyDefinition;
        static bootstrapDefaults(): void;
        static TOP: string;
        static FLUID: string;
        static SUBSURFACE: string;
        static RIM: string;
        static COBBLE: string;
        static STONE: string;
    }
    export class $SpaceTerrainPalette extends $Record {
        fluids(): $List<$SpaceFluidPocket>;
        defaultBlock(): $BlockState;
        ores(): $List<$SpaceOreEntry>;
        defaultFluid(): $BlockState;
        topBlock(): $BlockState;
        cobbleBlock(): $BlockState;
        subsurfaceBlock(): $BlockState;
        rimBlock(): $BlockState;
        constructor(defaultBlock: $BlockState_, topBlock: $BlockState_, subsurfaceBlock: $BlockState_, rimBlock: $BlockState_, cobbleBlock: $BlockState_, defaultFluid: $BlockState_, ores: $List_<$SpaceOreEntry_>, fluids: $List_<$SpaceFluidPocket_>);
    }
    /**
     * Values that may be interpreted as {@link $SpaceTerrainPalette}.
     */
    export type $SpaceTerrainPalette_ = { subsurfaceBlock?: $BlockState_, ores?: $List_<$SpaceOreEntry_>, rimBlock?: $BlockState_, cobbleBlock?: $BlockState_, defaultFluid?: $BlockState_, topBlock?: $BlockState_, fluids?: $List_<$SpaceFluidPocket_>, defaultBlock?: $BlockState_,  } | [subsurfaceBlock?: $BlockState_, ores?: $List_<$SpaceOreEntry_>, rimBlock?: $BlockState_, cobbleBlock?: $BlockState_, defaultFluid?: $BlockState_, topBlock?: $BlockState_, fluids?: $List_<$SpaceFluidPocket_>, defaultBlock?: $BlockState_, ];
    export class $SpaceBodyRef$Kind extends $Enum<$SpaceBodyRef$Kind> {
        static values(): $SpaceBodyRef$Kind[];
        static valueOf(arg0: string): $SpaceBodyRef$Kind;
        static ASTEROID: $SpaceBodyRef$Kind;
        static SATELLITE: $SpaceBodyRef$Kind;
        static PLANET: $SpaceBodyRef$Kind;
    }
    /**
     * Values that may be interpreted as {@link $SpaceBodyRef$Kind}.
     */
    export type $SpaceBodyRef$Kind_ = "planet" | "satellite" | "asteroid";
    export class $SpaceBodyLayers {
        get(arg0: string, arg1: $BlockState_): $BlockState;
        put(arg0: string, arg1: $BlockState_): $SpaceBodyLayers;
        static create(): $SpaceBodyLayers;
        has(arg0: string): boolean;
        static air(): $BlockState;
        static TOP: string;
        static FLUID: string;
        static SUBSURFACE: string;
        static RIM: string;
        static COBBLE: string;
        static STONE: string;
        constructor();
    }
    export class $SpaceOreEntry extends $Record {
        name(): string;
        size(): number;
        state(): $BlockState;
        minY(): number;
        pathLength(): number;
        weight(): number;
        maxY(): number;
        oreBlockId(): string;
        depthBonus(): number;
        baseChance(): number;
        replaceableBlockIds(): $List<string>;
        verticalRadius(): number;
        horizontalRadius(): number;
        veinSize(): number;
        caveOnly(): boolean;
        requireNearAir(): boolean;
        requireNearFluid(): boolean;
        requireNearLava(): boolean;
        distributionType(): $SpaceOreDistributionType;
        constructor(state: $BlockState_, weight: number, veinSize: number, minY: number, maxY: number);
    }
    /**
     * Values that may be interpreted as {@link $SpaceOreEntry}.
     */
    export type $SpaceOreEntry_ = { weight?: number, minY?: number, veinSize?: number, maxY?: number, state?: $BlockState_,  } | [weight?: number, minY?: number, veinSize?: number, maxY?: number, state?: $BlockState_, ];
    export class $SpaceBodyCatalog {
        static byName(arg0: string): $SpaceBodyRef;
        static allBodies(): $List<$SpaceBodyRef>;
    }
    export class $SpaceResourceIntrospector$SolidKind extends $Enum<$SpaceResourceIntrospector$SolidKind> {
    }
    /**
     * Values that may be interpreted as {@link $SpaceResourceIntrospector$SolidKind}.
     */
    export type $SpaceResourceIntrospector$SolidKind_ = "stone" | "cobble" | "ore";
    export class $SpaceSolarRadiationEvents {
        static onPlayerTick(arg0: $PlayerTickEvent$Post): void;
    }
    export class $SpaceVentType extends $Enum<$SpaceVentType> implements $StringRepresentable {
        static values(): $SpaceVentType[];
        static valueOf(arg0: string): $SpaceVentType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LAVA: $SpaceVentType;
        static ACID: $SpaceVentType;
        static STEAM: $SpaceVentType;
        static GAS: $SpaceVentType;
        static CRYO: $SpaceVentType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpaceVentType}.
     */
    export type $SpaceVentType_ = "steam" | "lava" | "acid" | "cryo" | "gas";
    export class $SpaceBodyRef extends $Record {
        name(): string;
        size(): number;
        type(): $EnumType;
        kind(): $SpaceBodyRef$Kind;
        parentName(): string;
        texture(): $ResourceLocation;
        ring(): $EnumRing;
        systemName(): string;
        temperature(): number;
        pressure(): boolean;
        rotationAngle(): number;
        distanceFromStar(): number;
        oxygen(): boolean;
        colonies(): boolean;
        starName(): string;
        isAsteroid(): boolean;
        orbitDistance(): number;
        isSatellite(): boolean;
        orbitPeriod(): number;
        constructor(name: string, kind: $SpaceBodyRef$Kind_, systemName: string, starName: string, parentName: string, texture: $ResourceLocation_, temperature: number, pressure: boolean, oxygen: boolean, colonies: boolean, size: number, orbitDistance: number, distanceFromStar: number, rotationAngle: number, orbitPeriod: number, type: $EnumType_, ring: $EnumRing_);
        get asteroid(): boolean;
        get satellite(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpaceBodyRef}.
     */
    export type $SpaceBodyRef_ = { type?: $EnumType_, kind?: $SpaceBodyRef$Kind_, temperature?: number, colonies?: boolean, parentName?: string, starName?: string, oxygen?: boolean, orbitPeriod?: number, ring?: $EnumRing_, distanceFromStar?: number, size?: number, name?: string, texture?: $ResourceLocation_, systemName?: string, orbitDistance?: number, pressure?: boolean, rotationAngle?: number,  } | [type?: $EnumType_, kind?: $SpaceBodyRef$Kind_, temperature?: number, colonies?: boolean, parentName?: string, starName?: string, oxygen?: boolean, orbitPeriod?: number, ring?: $EnumRing_, distanceFromStar?: number, size?: number, name?: string, texture?: $ResourceLocation_, systemName?: string, orbitDistance?: number, pressure?: boolean, rotationAngle?: number, ];
    export class $SpaceBootstrap {
        static ensureSpaceCatalogInitialized(): void;
    }
    export class $SpaceBodyDefinition {
        layer(arg0: string, arg1: $BlockState_): $SpaceBodyDefinition;
        getLayer(arg0: string): $BlockState;
        static create(): $SpaceBodyDefinition;
        getLayers(): $Map<string, $BlockState>;
        fluid(arg0: $SpaceFluidPocket_): $SpaceBodyDefinition;
        getFluids(): $List<$SpaceFluidPocket>;
        ore(arg0: $SpaceOreEntry_): $SpaceBodyDefinition;
        getOres(): $List<$SpaceOreEntry>;
        getLayerOrDefault(arg0: string, arg1: $BlockState_): $BlockState;
        get layers(): $Map<string, $BlockState>;
        get fluids(): $List<$SpaceFluidPocket>;
        get ores(): $List<$SpaceOreEntry>;
    }
    export class $SpaceResourceIntrospector$CandidateFluid extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceResourceIntrospector$CandidateFluid}.
     */
    export type $SpaceResourceIntrospector$CandidateFluid_ = { weight?: number, fluid?: $Fluid_, state?: $BlockState_,  } | [weight?: number, fluid?: $Fluid_, state?: $BlockState_, ];
    export class $SpaceSolarRadiationLogic {
        static hasSolarHazard(arg0: $SpaceDimensionProfile_): boolean;
        static computeExposure(arg0: $SpaceDimensionProfile_, arg1: number, arg2: boolean, arg3: boolean): number;
        static computeBaseSolarIntensity(arg0: $SpaceDimensionProfile_): number;
        static computeDayNightFactor(arg0: boolean): number;
        static computeAltitudeMultiplier(arg0: $SpaceDimensionProfile_, arg1: number): number;
    }
    export class $SpaceDimensionProfile extends $Record {
        body(): $SpaceBodyRef;
        height(): number;
        minY(): number;
        static none(arg0: $SpaceBodyRef_, arg1: $SpaceTerrainPalette_, arg2: $ResourceLocation_): $SpaceDimensionProfile;
        natural(): boolean;
        music(): $Music;
        downfall(): number;
        gravity(): number;
        fluids(): $List<$SpaceFluidPocket>;
        logicalHeight(): number;
        respawnAnchorWorks(): boolean;
        piglinSafe(): boolean;
        seaLevel(): number;
        fixedTime(): number;
        hasRaids(): boolean;
        hasSkyLight(): boolean;
        effectsLocation(): $ResourceLocation;
        fogColor(): $Vec3;
        waterColor(): number;
        skyColor(): $Vec3;
        sunSize(): number;
        ambientLight(): number;
        coordinateScale(): number;
        infiniburn(): $TagKey<$Block>;
        ultraWarm(): boolean;
        bedWorks(): boolean;
        drawStars(): boolean;
        terrain(): $SpaceTerrainPalette;
        defaultBlock(): $BlockState;
        ores(): $List<$SpaceOreEntry>;
        hasCeiling(): boolean;
        waterFogColor(): number;
        defaultFluid(): $BlockState;
        cloudHeight(): number;
        topBlock(): $BlockState;
        lavaTubeRarity(): number;
        drawSunrise(): boolean;
        ambientParticle(): $AmbientParticleSettings;
        volcanoRarity(): number;
        baseNoiseSettings(): $ResourceKey<$NoiseGeneratorSettings>;
        fogDistanceFactor(): number;
        cavityRarity(): number;
        generateOres(): boolean;
        craterRarity(): number;
        starBrightness(): number;
        shaftRarity(): number;
        generatesTerrain(): boolean;
        dayLength(): number;
        generateVerticalShafts(): boolean;
        cobbleBlock(): $BlockState;
        isAsteroidField(): boolean;
        generateLavaTubes(): boolean;
        generateCavities(): boolean;
        generateGeysers(): boolean;
        generateLakes(): boolean;
        generateCraters(): boolean;
        generateVolcanoes(): boolean;
        subsurfaceBlock(): $BlockState;
        generationMode(): $SpaceGenerationMode;
        atmosphereDensity(): number;
        hasAtmosphere(): boolean;
        rimBlock(): $BlockState;
        temperatureForBiome(): number;
        generateAsteroidField(): boolean;
        constructor(body: $SpaceBodyRef_, generationMode: $SpaceGenerationMode_, effectsLocation: $ResourceLocation_, baseNoiseSettings: $ResourceKey_<$NoiseGeneratorSettings>, gravity: number, dayLength: number, fixedTime: number | null, natural: boolean, hasSkyLight: boolean, hasCeiling: boolean, ultraWarm: boolean, bedWorks: boolean, respawnAnchorWorks: boolean, piglinSafe: boolean, hasRaids: boolean, minY: number, height: number, logicalHeight: number, seaLevel: number, coordinateScale: number, ambientLight: number, cloudHeight: number, infiniburn: $TagKey_<$Block>, hasAtmosphere: boolean, atmosphereDensity: number, skyColor: $Vec3_, fogColor: $Vec3_, waterColor: number, waterFogColor: number, sunSize: number, starBrightness: number, drawStars: boolean, drawSunrise: boolean, fogDistanceFactor: number, terrain: $SpaceTerrainPalette_, generateCraters: boolean, generateOres: boolean, generateLakes: boolean, generateGeysers: boolean, generateVolcanoes: boolean, generateCavities: boolean, generateVerticalShafts: boolean, generateLavaTubes: boolean, generateAsteroidField: boolean, craterRarity: number, volcanoRarity: number, cavityRarity: number, shaftRarity: number, lavaTubeRarity: number, ambientParticle: $AmbientParticleSettings | null, music: $Music | null);
        get asteroidField(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpaceDimensionProfile}.
     */
    export type $SpaceDimensionProfile_ = { cloudHeight?: number, generateCavities?: boolean, generateAsteroidField?: boolean, drawSunrise?: boolean, volcanoRarity?: number, seaLevel?: number, waterColor?: number, minY?: number, body?: $SpaceBodyRef_, waterFogColor?: number, starBrightness?: number, skyColor?: $Vec3_, ambientLight?: number, generateVolcanoes?: boolean, generateOres?: boolean, hasAtmosphere?: boolean, dayLength?: number, generateLavaTubes?: boolean, infiniburn?: $TagKey_<$Block>, terrain?: $SpaceTerrainPalette_, music?: $Music, hasSkyLight?: boolean, fixedTime?: number, hasRaids?: boolean, hasCeiling?: boolean, fogDistanceFactor?: number, shaftRarity?: number, cavityRarity?: number, respawnAnchorWorks?: boolean, ultraWarm?: boolean, generationMode?: $SpaceGenerationMode_, bedWorks?: boolean, atmosphereDensity?: number, height?: number, craterRarity?: number, fogColor?: $Vec3_, baseNoiseSettings?: $ResourceKey_<$NoiseGeneratorSettings>, generateCraters?: boolean, ambientParticle?: $AmbientParticleSettings, lavaTubeRarity?: number, piglinSafe?: boolean, effectsLocation?: $ResourceLocation_, logicalHeight?: number, generateGeysers?: boolean, natural?: boolean, generateVerticalShafts?: boolean, sunSize?: number, generateLakes?: boolean, drawStars?: boolean, gravity?: number, coordinateScale?: number,  } | [cloudHeight?: number, generateCavities?: boolean, generateAsteroidField?: boolean, drawSunrise?: boolean, volcanoRarity?: number, seaLevel?: number, waterColor?: number, minY?: number, body?: $SpaceBodyRef_, waterFogColor?: number, starBrightness?: number, skyColor?: $Vec3_, ambientLight?: number, generateVolcanoes?: boolean, generateOres?: boolean, hasAtmosphere?: boolean, dayLength?: number, generateLavaTubes?: boolean, infiniburn?: $TagKey_<$Block>, terrain?: $SpaceTerrainPalette_, music?: $Music, hasSkyLight?: boolean, fixedTime?: number, hasRaids?: boolean, hasCeiling?: boolean, fogDistanceFactor?: number, shaftRarity?: number, cavityRarity?: number, respawnAnchorWorks?: boolean, ultraWarm?: boolean, generationMode?: $SpaceGenerationMode_, bedWorks?: boolean, atmosphereDensity?: number, height?: number, craterRarity?: number, fogColor?: $Vec3_, baseNoiseSettings?: $ResourceKey_<$NoiseGeneratorSettings>, generateCraters?: boolean, ambientParticle?: $AmbientParticleSettings, lavaTubeRarity?: number, piglinSafe?: boolean, effectsLocation?: $ResourceLocation_, logicalHeight?: number, generateGeysers?: boolean, natural?: boolean, generateVerticalShafts?: boolean, sunSize?: number, generateLakes?: boolean, drawStars?: boolean, gravity?: number, coordinateScale?: number, ];
    export class $SpaceResourceIntrospector {
        static resolveTerrain(arg0: $SpaceBodyRef_, arg1: $SpaceGenerationMode_): $SpaceTerrainPalette;
    }
    export class $SpaceResourceIntrospector$CandidateBlock extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceResourceIntrospector$CandidateBlock}.
     */
    export type $SpaceResourceIntrospector$CandidateBlock_ = { weight?: number, state?: $BlockState_,  } | [weight?: number, state?: $BlockState_, ];
}
