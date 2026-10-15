import { $WorldGenLevel, $Level_ } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $DeltaFeatureConfiguration, $EndGatewayConfiguration, $ColumnFeatureConfiguration, $UnderwaterMagmaConfiguration, $MultifaceGrowthConfiguration, $RootSystemConfiguration, $LayerConfiguration, $PointedDripstoneConfiguration, $SpringConfiguration, $HugeMushroomFeatureConfiguration, $ProbabilityFeatureConfiguration, $FeatureConfiguration, $RandomPatchConfiguration, $SimpleBlockConfiguration, $DripstoneClusterConfiguration, $ReplaceBlockConfiguration, $BlockPileConfiguration, $NoneFeatureConfiguration, $RandomBooleanFeatureConfiguration, $NetherForestVegetationConfig, $RandomFeatureConfiguration, $SpikeConfiguration, $ReplaceSphereConfiguration, $DiskConfiguration, $TwistingVinesConfig, $SimpleRandomFeatureConfiguration, $VegetationPatchConfiguration, $SculkPatchConfiguration, $LargeDripstoneConfiguration, $GeodeConfiguration, $TreeConfiguration, $CountConfiguration, $BlockColumnConfiguration, $BlockStateConfiguration, $OreConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $Codec } from "@package/com/mojang/serialization";
import { $SpaceGeyserBlockEntity, $SpaceGeyserBlock } from "@package/com/denfop/api/space/dimension/worldgen/block";
import { $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $SpaceDimensionProfile_, $SpaceDimensionProfile, $SpaceBodyRef_, $SpaceGenerationMode_ } from "@package/com/denfop/api/space/dimension";
import { $Map, $List, $Map_, $List_ } from "@package/java/util";
import { $SpaceAsteroidFieldFeatureConfig, $SpaceBodyFeatureConfig } from "@package/com/denfop/api/space/dimension/worldgen/feature";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Predicate_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Feature, $ConfiguredFeature, $HugeFungusConfiguration, $LakeFeature$Configuration, $SeagrassFeature, $FossilFeatureConfiguration, $BonusChestFeature, $ConfiguredFeature_ } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $SurfaceRules$RuleSource, $NoiseGeneratorSettings_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelStem_, $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as feature from "@package/com/denfop/api/space/dimension/worldgen/feature";
export * as block from "@package/com/denfop/api/space/dimension/worldgen/block";

declare module "@package/com/denfop/api/space/dimension/worldgen" {
    export class $AbstractSpaceExoticFeature<C extends $FeatureConfiguration> extends $Feature<C> {
        static resolveProfile(arg0: $ResourceLocation_): $SpaceDimensionProfile;
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
    }
    export class $SpaceAdvancedCaveFeature$Node extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceAdvancedCaveFeature$Node}.
     */
    export type $SpaceAdvancedCaveFeature$Node_ = { x?: number, y?: number, z?: number,  } | [x?: number, y?: number, z?: number, ];
    export class $SpaceFormationFeatureConfig extends $Record implements $FeatureConfiguration {
        kind(): $SpaceFormationKind;
        primary(): $BlockState;
        maxHeight(): number;
        minHeight(): number;
        secondary(): $BlockState;
        fluid(): $BlockState;
        maxRadius(): number;
        minRadius(): number;
        tertiary(): $BlockState;
        branches(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpaceFormationFeatureConfig>;
        constructor(kind: $SpaceFormationKind_, primary: $BlockState_, secondary: $BlockState_, tertiary: $BlockState_, fluid: $BlockState_, minRadius: number, maxRadius: number, minHeight: number, maxHeight: number, branches: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SpaceFormationFeatureConfig}.
     */
    export type $SpaceFormationFeatureConfig_ = { fluid?: $BlockState_, minRadius?: number, secondary?: $BlockState_, minHeight?: number, maxRadius?: number, kind?: $SpaceFormationKind_, tertiary?: $BlockState_, maxHeight?: number, branches?: number, primary?: $BlockState_,  } | [fluid?: $BlockState_, minRadius?: number, secondary?: $BlockState_, minHeight?: number, maxRadius?: number, kind?: $SpaceFormationKind_, tertiary?: $BlockState_, maxHeight?: number, branches?: number, primary?: $BlockState_, ];
    export class $SpaceDimensionTypesBootstrap {
        static bootstrap(arg0: $BootstrapContext<$DimensionType_>): void;
    }
    export class $SpaceMaterialSet extends $Record {
        static resolve(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: $SpacePlanetTraits_, arg3: $SpaceDimensionProfile_): $SpaceMaterialSet;
        static resolve(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: $SpacePlanetTraits_): $SpaceMaterialSet;
        ore(): $BlockState;
        stone(): $BlockState;
        liquid(): $BlockState;
        bridge(): $BlockState;
        crystal(): $BlockState;
        accent(): $BlockState;
        cavityFill(): $BlockState;
        constructor(stone: $BlockState_, bridge: $BlockState_, accent: $BlockState_, crystal: $BlockState_, ore: $BlockState_, liquid: $BlockState_, cavityFill: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $SpaceMaterialSet}.
     */
    export type $SpaceMaterialSet_ = { ore?: $BlockState_, stone?: $BlockState_, bridge?: $BlockState_, cavityFill?: $BlockState_, liquid?: $BlockState_, crystal?: $BlockState_, accent?: $BlockState_,  } | [ore?: $BlockState_, stone?: $BlockState_, bridge?: $BlockState_, cavityFill?: $BlockState_, liquid?: $BlockState_, crystal?: $BlockState_, accent?: $BlockState_, ];
    export class $SpacePorousCaveFeature extends $Feature<$SpaceCaveFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceCaveFeatureConfig_>);
    }
    export class $SpaceCraterFeature extends $Feature<$SpaceFormationFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceFormationFeatureConfig_>);
    }
    export class $SpaceBiomesBootstrap {
        static bootstrap(arg0: $BootstrapContext<$Biome_>): void;
    }
    export class $SpaceCraterFeatureConfig$CraterBands extends $Record {
        small(): $SpaceCraterFeatureConfig$CraterBand;
        medium(): $SpaceCraterFeatureConfig$CraterBand;
        large(): $SpaceCraterFeatureConfig$CraterBand;
        giant(): $SpaceCraterFeatureConfig$CraterBand;
        static CODEC: $Codec<$SpaceCraterFeatureConfig$CraterBands>;
        constructor(small: $SpaceCraterFeatureConfig$CraterBand_, medium: $SpaceCraterFeatureConfig$CraterBand_, large: $SpaceCraterFeatureConfig$CraterBand_, giant: $SpaceCraterFeatureConfig$CraterBand_);
    }
    /**
     * Values that may be interpreted as {@link $SpaceCraterFeatureConfig$CraterBands}.
     */
    export type $SpaceCraterFeatureConfig$CraterBands_ = { large?: $SpaceCraterFeatureConfig$CraterBand_, giant?: $SpaceCraterFeatureConfig$CraterBand_, medium?: $SpaceCraterFeatureConfig$CraterBand_, small?: $SpaceCraterFeatureConfig$CraterBand_,  } | [large?: $SpaceCraterFeatureConfig$CraterBand_, giant?: $SpaceCraterFeatureConfig$CraterBand_, medium?: $SpaceCraterFeatureConfig$CraterBand_, small?: $SpaceCraterFeatureConfig$CraterBand_, ];
    export class $SpaceSurfaceRiftFeature extends $Feature<$SpaceFormationFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceFormationFeatureConfig_>);
    }
    export class $SpaceDebrisSwarmFeature extends $AbstractSpaceExoticFeature<$SpaceDebrisSwarmFeature$Config> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor();
    }
    export class $SpaceCarvingSupport {
        static fillEllipsoid(arg0: $WorldGenLevel, arg1: $Vec3_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_): void;
        static fillHexPrism(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $BlockState_): void;
        static ring(arg0: $BlockPos_, arg1: number, arg2: number): $List<$BlockPos>;
        static canReplace(arg0: $BlockState_): boolean;
        static carveEllipsoid(arg0: $WorldGenLevel, arg1: $Vec3_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_): void;
        static surfaceY(arg0: $WorldGenLevel, arg1: number, arg2: number): number;
        static scatterDebris(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $BlockState_, arg5: number): void;
        static traceFill(arg0: $WorldGenLevel, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: number, arg5: number, arg6: $BlockState_): void;
        static traceCarve(arg0: $WorldGenLevel, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: number, arg5: number, arg6: $BlockState_): void;
        static fillPrism(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number, arg5: $BlockState_): void;
    }
    export class $SpaceAdditionCraterFeature$CraterDescriptor extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceAdditionCraterFeature$CraterDescriptor}.
     */
    export type $SpaceAdditionCraterFeature$CraterDescriptor_ = { centerX?: number, outerRadius?: number, centerZ?: number, rimHeight?: number, roughness?: number, peakRadius?: number, size?: $SpaceAdditionCraterFeature$CraterSize_, rimOuterRadius?: number, radius?: number, centralPeak?: boolean, ejectaHeight?: number, depth?: number, noiseSalt?: number, peakHeight?: number,  } | [centerX?: number, outerRadius?: number, centerZ?: number, rimHeight?: number, roughness?: number, peakRadius?: number, size?: $SpaceAdditionCraterFeature$CraterSize_, rimOuterRadius?: number, radius?: number, centralPeak?: boolean, ejectaHeight?: number, depth?: number, noiseSalt?: number, peakHeight?: number, ];
    export class $SpaceAdvancedCaveFeature$Connection extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceAdvancedCaveFeature$Connection}.
     */
    export type $SpaceAdvancedCaveFeature$Connection_ = { a?: $SpaceAdvancedCaveFeature$Node_, b?: $SpaceAdvancedCaveFeature$Node_,  } | [a?: $SpaceAdvancedCaveFeature$Node_, b?: $SpaceAdvancedCaveFeature$Node_, ];
    export class $SpaceCraterFeatureConfig$SpawnSettings extends $Record {
        attemptsPerCandidateChunk(): number;
        spawnChance(): number;
        static CODEC: $Codec<$SpaceCraterFeatureConfig$SpawnSettings>;
        constructor(attemptsPerCandidateChunk: number, spawnChance: number);
    }
    /**
     * Values that may be interpreted as {@link $SpaceCraterFeatureConfig$SpawnSettings}.
     */
    export type $SpaceCraterFeatureConfig$SpawnSettings_ = { attemptsPerCandidateChunk?: number, spawnChance?: number,  } | [attemptsPerCandidateChunk?: number, spawnChance?: number, ];
    export class $SpaceCraterFeatureConfig$CraterBand extends $Record {
        weight(): number;
        maxRadius(): number;
        minRadius(): number;
        static CODEC: $Codec<$SpaceCraterFeatureConfig$CraterBand>;
        constructor(minRadius: number, maxRadius: number, weight: number);
    }
    /**
     * Values that may be interpreted as {@link $SpaceCraterFeatureConfig$CraterBand}.
     */
    export type $SpaceCraterFeatureConfig$CraterBand_ = { weight?: number, maxRadius?: number, minRadius?: number,  } | [weight?: number, maxRadius?: number, minRadius?: number, ];
    export class $SpaceShapeMath {
        static smoothNoise(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static unit(arg0: number): number;
        static remap(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static hashInt(arg0: number, arg1: number): number;
        static smoothStep(arg0: number): number;
        static rotateY(arg0: $Vec3_, arg1: number): $Vec3;
        static randomUnit(arg0: number): $Vec3;
        static mixSeed(arg0: number, arg1: number): number;
        static rotateAroundAxis(arg0: $Vec3_, arg1: $Vec3_, arg2: number): $Vec3;
        static signedUnit(arg0: number): number;
        static ridgeNoise(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static latticeNoise(arg0: number, arg1: number, arg2: number, arg3: number): number;
    }
    export class $SpaceLevelStemsBootstrap {
        static bootstrap(arg0: $BootstrapContext<$LevelStem_>): void;
    }
    export class $SpacePlacedFeaturesBootstrap {
        static bootstrap(arg0: $BootstrapContext<$PlacedFeature_>): void;
    }
    export class $SpaceVolcanicFieldFeature extends $Feature<$SpaceFormationFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceFormationFeatureConfig_>);
    }
    export class $SpaceAdvancedCaveFeature$LocalArea {
    }
    export class $SpaceNoiseSettingsBootstrap {
        static bootstrap(arg0: $BootstrapContext<$NoiseGeneratorSettings_>): void;
    }
    export class $SpaceAdditionCraterFeature extends $Feature<$SpaceCraterFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceCraterFeatureConfig_>);
    }
    export class $SpaceTunnelSystemFeature extends $Feature<$SpaceCaveFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceCaveFeatureConfig_>);
    }
    export class $SpaceAdditionCraterFeature$ChunkBounds {
    }
    export class $SpaceTunnelSystemFeature$SafeChunkBox {
    }
    export class $SpaceFractureFeature$LocalChunkBounds {
    }
    export class $SpaceDebrisSwarmFeature$Config extends $Record implements $FeatureConfiguration {
        count(): number;
        radius(): number;
        roughness(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpaceDebrisSwarmFeature$Config>;
        constructor(count: number, radius: number, roughness: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SpaceDebrisSwarmFeature$Config}.
     */
    export type $SpaceDebrisSwarmFeature$Config_ = { count?: number, roughness?: number, radius?: number,  } | [count?: number, roughness?: number, radius?: number, ];
    export class $SpaceFormationKind extends $Enum<$SpaceFormationKind> implements $StringRepresentable {
        static values(): $SpaceFormationKind[];
        static valueOf(arg0: string): $SpaceFormationKind;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CRYSTAL_OUTCROP: $SpaceFormationKind;
        static PLATEAU: $SpaceFormationKind;
        static DEBRIS_FIELD: $SpaceFormationKind;
        static SURFACE_RIFT: $SpaceFormationKind;
        static PILLAR_FIELD: $SpaceFormationKind;
        static ARCH: $SpaceFormationKind;
        static CRATER: $SpaceFormationKind;
        static MOUNTAIN_SPIRE: $SpaceFormationKind;
        static VOLCANIC_FIELD: $SpaceFormationKind;
        static ICE_CLIFF: $SpaceFormationKind;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpaceFormationKind}.
     */
    export type $SpaceFormationKind_ = "pillar_field" | "arch" | "plateau" | "mountain_spire" | "ice_cliff" | "crystal_outcrop" | "debris_field" | "volcanic_field" | "crater" | "surface_rift";
    export class $SpaceWorldgenContent {
        static SPACE_GEYSER: $DeferredHolder<$Block, $SpaceGeyserBlock>;
        static SPACE_VOLCANO: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        static SPACE_REGIONAL_HYDROLOGY: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        static SPACE_ASTEROID_FIELD: $DeferredHolder<$Feature<never>, $Feature<$SpaceAsteroidFieldFeatureConfig>>;
        static VOLCANIC_FIELD: $DeferredHolder<$Feature<never>, $Feature<$SpaceFormationFeatureConfig>>;
        static SPACE_GENERIC_FLUID: $DeferredHolder<$Feature<never>, $Feature<$SpaceFluidFeatureConfig>>;
        static SPACE_GEYSER_FEATURE: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        static TUNNEL_SYSTEM: $DeferredHolder<$Feature<never>, $Feature<$SpaceCaveFeatureConfig>>;
        static SPACE_LAVA_TUBE: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        static SPACE_CAVITY: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        static SPACE_ADDITION_CRATER: $DeferredHolder<$Feature<never>, $Feature<$SpaceCraterFeatureConfig>>;
        static SPACE_GEYSER_BE: $DeferredHolder<$BlockEntityType<never>, $BlockEntityType<$SpaceGeyserBlockEntity>>;
        static ADVANCED_CAVE: $DeferredHolder<$Feature<never>, $Feature<$SpaceCaveFeatureConfig>>;
        static SURFACE_RIFT: $DeferredHolder<$Feature<never>, $Feature<$SpaceFormationFeatureConfig>>;
        static SPACE_CRYO_SURFACE_COVER: $DeferredHolder<$Feature<never>, $Feature<$NoneFeatureConfiguration>>;
        static CHAMBER: $DeferredHolder<$Feature<never>, $Feature<$SpaceCaveFeatureConfig>>;
        static SPACE_LAKE_BASIN: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        static POROUS_CAVE: $DeferredHolder<$Feature<never>, $Feature<$SpaceCaveFeatureConfig>>;
        static SPACE_VERTICAL_SHAFT: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        static FRACTURE: $DeferredHolder<$Feature<never>, $Feature<$SpaceCaveFeatureConfig>>;
        static SPACE_ICE_SURFACE_COVER: $DeferredHolder<$Feature<never>, $Feature<$NoneFeatureConfiguration>>;
        static DEBRIS_FIELD: $DeferredHolder<$Feature<never>, $Feature<$SpaceFormationFeatureConfig>>;
        static CRATER: $DeferredHolder<$Feature<never>, $Feature<$SpaceFormationFeatureConfig>>;
        static SPACE_GENERIC_ORE: $DeferredHolder<$Feature<never>, $Feature<$SpaceOreFeatureConfig>>;
        static ROCK_FORMATION: $DeferredHolder<$Feature<never>, $Feature<$SpaceFormationFeatureConfig>>;
        static SPACE_CRATER: $DeferredHolder<$Feature<never>, $Feature<$SpaceBodyFeatureConfig>>;
        constructor();
    }
    export class $SpaceRockFormationFeature extends $Feature<$SpaceFormationFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceFormationFeatureConfig_>);
    }
    export class $SpaceDebrisFieldFeature extends $Feature<$SpaceFormationFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceFormationFeatureConfig_>);
    }
    export class $SpaceCraterFeatureConfig extends $Record implements $FeatureConfiguration {
        primary(): $BlockState;
        rim(): $BlockState;
        static defaultConfig(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockState_): $SpaceCraterFeatureConfig;
        spawn(): $SpaceCraterFeatureConfig$SpawnSettings;
        ejecta(): $BlockState;
        attemptsPerCandidateChunk(): number;
        smallMaxRadius(): number;
        giantWeight(): number;
        giantMaxRadius(): number;
        ejectaBlanket(): boolean;
        mediumMaxRadius(): number;
        largeMinRadius(): number;
        giantMinRadius(): number;
        centralPeaks(): boolean;
        smallWeight(): number;
        mediumWeight(): number;
        spawnChance(): number;
        smallMinRadius(): number;
        largeMaxRadius(): number;
        largeWeight(): number;
        mediumMinRadius(): number;
        bands(): $SpaceCraterFeatureConfig$CraterBands;
        static denseConfig(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockState_): $SpaceCraterFeatureConfig;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpaceCraterFeatureConfig>;
        constructor(primary: $BlockState_, rim: $BlockState_, ejecta: $BlockState_, spawn: $SpaceCraterFeatureConfig$SpawnSettings_, bands: $SpaceCraterFeatureConfig$CraterBands_, centralPeaks: boolean, ejectaBlanket: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SpaceCraterFeatureConfig}.
     */
    export type $SpaceCraterFeatureConfig_ = { primary?: $BlockState_, spawn?: $SpaceCraterFeatureConfig$SpawnSettings_, ejecta?: $BlockState_, bands?: $SpaceCraterFeatureConfig$CraterBands_, ejectaBlanket?: boolean, rim?: $BlockState_, centralPeaks?: boolean,  } | [primary?: $BlockState_, spawn?: $SpaceCraterFeatureConfig$SpawnSettings_, ejecta?: $BlockState_, bands?: $SpaceCraterFeatureConfig$CraterBands_, ejectaBlanket?: boolean, rim?: $BlockState_, centralPeaks?: boolean, ];
    export class $SpaceFeatureUtils {
        static isSolidTerrain(arg0: $BlockState_): boolean;
        static signedVariance(arg0: string, arg1: number, arg2: number, arg3: number): number;
        static carveTunnel(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_, arg8: $Predicate_<$BlockState>): void;
        static canAccess(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        static placeSpike(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: number, arg3: $BlockState_): void;
        static surfaceY(arg0: $WorldGenLevel, arg1: number, arg2: number): number;
        static isReplaceableForCarving(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockState_): boolean;
        static paintShell(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number, arg5: $BlockState_, arg6: $Predicate_<$BlockState>): void;
        static carveSphere(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number, arg5: $BlockState_, arg6: $Predicate_<$BlockState>): void;
        static lineOfSpheres(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: $BlockPos_, arg3: number, arg4: $BlockState_, arg5: $Predicate_<$BlockState>): void;
        static clampToCurrentChunk(arg0: $WorldGenLevel, arg1: $BlockPos_): $BlockPos;
    }
    export class $SpaceFractureFeature extends $Feature<$SpaceCaveFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceCaveFeatureConfig_>);
    }
    export class $SpaceSurfaceRuleFactory {
        static create(arg0: $SpaceDimensionProfile_): $SurfaceRules$RuleSource;
        static addBedrockFloor(arg0: $SurfaceRules$RuleSource): $SurfaceRules$RuleSource;
        static BEDROCK_LAYERS: number;
    }
    export class $SpaceConfiguredFeaturesBootstrap {
        static bootstrap(arg0: $BootstrapContext<$ConfiguredFeature_<never, never>>): void;
    }
    export class $SpaceAdditionCraterFeature$CraterSize extends $Enum<$SpaceAdditionCraterFeature$CraterSize> {
    }
    /**
     * Values that may be interpreted as {@link $SpaceAdditionCraterFeature$CraterSize}.
     */
    export type $SpaceAdditionCraterFeature$CraterSize_ = "small" | "medium" | "large" | "giant";
    export class $SpaceCaveFeatureConfig extends $Record implements $FeatureConfiguration {
        kind(): $SpaceCaveKind;
        minLength(): number;
        maxLength(): number;
        primary(): $BlockState;
        secondary(): $BlockState;
        fluid(): $BlockState;
        maxRadius(): number;
        minRadius(): number;
        flooded(): boolean;
        openToSurface(): boolean;
        maxVertical(): number;
        tertiary(): $BlockState;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpaceCaveFeatureConfig>;
        constructor(kind: $SpaceCaveKind_, primary: $BlockState_, secondary: $BlockState_, tertiary: $BlockState_, fluid: $BlockState_, minRadius: number, maxRadius: number, minLength: number, maxLength: number, maxVertical: number, openToSurface: boolean, flooded: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SpaceCaveFeatureConfig}.
     */
    export type $SpaceCaveFeatureConfig_ = { flooded?: boolean, tertiary?: $BlockState_, minRadius?: number, openToSurface?: boolean, fluid?: $BlockState_, maxLength?: number, primary?: $BlockState_, minLength?: number, maxVertical?: number, secondary?: $BlockState_, kind?: $SpaceCaveKind_, maxRadius?: number,  } | [flooded?: boolean, tertiary?: $BlockState_, minRadius?: number, openToSurface?: boolean, fluid?: $BlockState_, maxLength?: number, primary?: $BlockState_, minLength?: number, maxVertical?: number, secondary?: $BlockState_, kind?: $SpaceCaveKind_, maxRadius?: number, ];
    export class $SpaceWorldgenProfile extends $Record {
        fractureCount(): number;
        chamberCount(): number;
        liquidCount(): number;
        tunnelCount(): number;
        craterLinkedCount(): number;
        atmosphereSoft(): boolean;
        porousCount(): number;
        volcanicFieldCount(): number;
        craterCount(): number;
        pillarCount(): number;
        crystalCount(): number;
        debrisCount(): number;
        plateauCount(): number;
        static of(arg0: $SpaceBodyRef_, arg1: $SpaceGenerationMode_): $SpaceWorldgenProfile;
        icy(): boolean;
        volcanic(): boolean;
        dusty(): boolean;
        cratered(): boolean;
        hallCount(): number;
        shaftCount(): number;
        spireCount(): number;
        archCount(): number;
        riftCount(): number;
        constructor(tunnelCount: number, hallCount: number, fractureCount: number, porousCount: number, shaftCount: number, chamberCount: number, craterLinkedCount: number, liquidCount: number, pillarCount: number, archCount: number, plateauCount: number, spireCount: number, debrisCount: number, volcanicFieldCount: number, craterCount: number, riftCount: number, crystalCount: number, volcanic: boolean, icy: boolean, dusty: boolean, cratered: boolean, atmosphereSoft: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpaceWorldgenProfile}.
     */
    export type $SpaceWorldgenProfile_ = { craterCount?: number, crystalCount?: number, tunnelCount?: number, volcanic?: boolean, chamberCount?: number, hallCount?: number, liquidCount?: number, shaftCount?: number, pillarCount?: number, cratered?: boolean, atmosphereSoft?: boolean, dusty?: boolean, volcanicFieldCount?: number, craterLinkedCount?: number, riftCount?: number, fractureCount?: number, plateauCount?: number, icy?: boolean, debrisCount?: number, archCount?: number, spireCount?: number, porousCount?: number,  } | [craterCount?: number, crystalCount?: number, tunnelCount?: number, volcanic?: boolean, chamberCount?: number, hallCount?: number, liquidCount?: number, shaftCount?: number, pillarCount?: number, cratered?: boolean, atmosphereSoft?: boolean, dusty?: boolean, volcanicFieldCount?: number, craterLinkedCount?: number, riftCount?: number, fractureCount?: number, plateauCount?: number, icy?: boolean, debrisCount?: number, archCount?: number, spireCount?: number, porousCount?: number, ];
    export class $SpaceChamberFeature extends $Feature<$SpaceCaveFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceCaveFeatureConfig_>);
    }
    export class $SpaceCaveKind extends $Enum<$SpaceCaveKind> implements $StringRepresentable {
        static values(): $SpaceCaveKind[];
        static valueOf(arg0: string): $SpaceCaveKind;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static BRANCHED_CAVES: $SpaceCaveKind;
        static SPIRAL_CAVES: $SpaceCaveKind;
        static THERMAL_CHAMBER: $SpaceCaveKind;
        static CHAMBER_CAVES: $SpaceCaveKind;
        static ARCH_CAVES: $SpaceCaveKind;
        static VOLCANIC_CHAMBER: $SpaceCaveKind;
        static CASCADE_CAVES: $SpaceCaveKind;
        static POROUS: $SpaceCaveKind;
        static DOME_CAVES: $SpaceCaveKind;
        static VERTICAL_COLLECTORS: $SpaceCaveKind;
        static LABYRINTH_CAVES: $SpaceCaveKind;
        static CREVICE_CAVES: $SpaceCaveKind;
        static MULTI_TIER_CAVES: $SpaceCaveKind;
        static WINDING_CAVES: $SpaceCaveKind;
        static VERTICAL_SHAFT: $SpaceCaveKind;
        static LIQUID_CHAMBER: $SpaceCaveKind;
        static TUNNEL_CAVES: $SpaceCaveKind;
        static CANYON_CAVES: $SpaceCaveKind;
        static CATHEDRAL_CAVES: $SpaceCaveKind;
        static AMPHITHEATER_CAVES: $SpaceCaveKind;
        static CRATER_LINKED_CHAMBER: $SpaceCaveKind;
        static STONE_TUNNELS: $SpaceCaveKind;
        static WELL_CAVES: $SpaceCaveKind;
        static FRACTURE: $SpaceCaveKind;
        static HALL_SYSTEM: $SpaceCaveKind;
        static COLLAPSE_CAVES: $SpaceCaveKind;
        static GALLERY_CAVES: $SpaceCaveKind;
        static SHAFT_CAVES: $SpaceCaveKind;
        static FROZEN_CHAMBER: $SpaceCaveKind;
        static POCKET_CAVES: $SpaceCaveKind;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpaceCaveKind}.
     */
    export type $SpaceCaveKind_ = "stone_tunnels" | "hall_system" | "fracture" | "porous" | "vertical_shaft" | "volcanic_chamber" | "frozen_chamber" | "thermal_chamber" | "liquid_chamber" | "crater_linked_chamber" | "tunnel_caves" | "labyrinth_caves" | "shaft_caves" | "dome_caves" | "well_caves" | "multi_tier_caves" | "branched_caves" | "spiral_caves" | "arch_caves" | "chamber_caves" | "canyon_caves" | "pocket_caves" | "crevice_caves" | "amphitheater_caves" | "cathedral_caves" | "gallery_caves" | "winding_caves" | "cascade_caves" | "collapse_caves" | "vertical_collectors";
    export class $SpaceFluidDistributionType extends $Enum<$SpaceFluidDistributionType> implements $StringRepresentable {
        static values(): $SpaceFluidDistributionType[];
        static valueOf(arg0: string): $SpaceFluidDistributionType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND_LAKE: $SpaceFluidDistributionType;
        static RESERVOIR: $SpaceFluidDistributionType;
        static ACID: $SpaceFluidDistributionType;
        static CODEC: $Codec<$SpaceFluidDistributionType>;
        static GAS: $SpaceFluidDistributionType;
        static POCKET: $SpaceFluidDistributionType;
        static CRYO: $SpaceFluidDistributionType;
        static VEIN: $SpaceFluidDistributionType;
        static LAVA_SYSTEM: $SpaceFluidDistributionType;
        static SURFACE_LAKE: $SpaceFluidDistributionType;
        static GEOTHERMAL: $SpaceFluidDistributionType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpaceFluidDistributionType}.
     */
    export type $SpaceFluidDistributionType_ = "reservoir" | "pocket" | "vein" | "underground_lake" | "surface_lake" | "geothermal" | "lava_system" | "cryo" | "acid" | "gas";
    export class $SpaceDistortedSpireFeature extends $AbstractSpaceExoticFeature<$SpaceDistortedSpireFeature$Config> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor();
    }
    export class $SpaceDistortedSpireFeature$Config extends $Record implements $FeatureConfiguration {
        height(): number;
        radius(): number;
        twist(): number;
        roughness(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpaceDistortedSpireFeature$Config>;
        constructor(height: number, radius: number, twist: number, roughness: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SpaceDistortedSpireFeature$Config}.
     */
    export type $SpaceDistortedSpireFeature$Config_ = { roughness?: number, height?: number, radius?: number, twist?: number,  } | [roughness?: number, height?: number, radius?: number, twist?: number, ];
    export class $SpaceOreDistributionType extends $Enum<$SpaceOreDistributionType> implements $StringRepresentable {
        static values(): $SpaceOreDistributionType[];
        static valueOf(arg0: string): $SpaceOreDistributionType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CORE: $SpaceOreDistributionType;
        static FRACTURE: $SpaceOreDistributionType;
        static CAVE_WALL: $SpaceOreDistributionType;
        static DEEP: $SpaceOreDistributionType;
        static CODEC: $Codec<$SpaceOreDistributionType>;
        static SCATTERED: $SpaceOreDistributionType;
        static GEOLOGICAL: $SpaceOreDistributionType;
        static LAYERED: $SpaceOreDistributionType;
        static VEIN: $SpaceOreDistributionType;
        static CLUSTER: $SpaceOreDistributionType;
        static GRADIENT: $SpaceOreDistributionType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpaceOreDistributionType}.
     */
    export type $SpaceOreDistributionType_ = "vein" | "cluster" | "layered" | "scattered" | "deep" | "cave_wall" | "geological" | "fracture" | "core" | "gradient";
    export class $StringRepresentableCodec {
        static of<E extends $Enum<E>>(arg0: E[]): $Codec<E>;
    }
    export class $SpaceAdvancedCaveFeature extends $Feature<$SpaceCaveFeatureConfig> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$SpaceCaveFeatureConfig_>);
    }
    export class $SpaceFeatureUtils$Bounds {
    }
    export class $SpacePlanetTraits extends $Record {
        thinAtmosphere(): boolean;
        mineralRichness(): number;
        static from(arg0: $WorldGenLevel): $SpacePlanetTraits;
        static from(arg0: $Level_): $SpacePlanetTraits;
        static from(arg0: $Object, arg1: $ResourceLocation_): $SpacePlanetTraits;
        gravity(): number;
        dimensionId(): $ResourceLocation;
        temperature(): number;
        atmosphere(): number;
        cryogenic(): boolean;
        lowGravity(): boolean;
        tectonicallyActive(): boolean;
        heavyGravity(): boolean;
        volcanic(): boolean;
        anomaly(): number;
        tectonics(): number;
        volatility(): number;
        constructor(dimensionId: $ResourceLocation_, gravity: number, temperature: number, atmosphere: number, tectonics: number, volatility: number, mineralRichness: number, anomaly: number);
    }
    /**
     * Values that may be interpreted as {@link $SpacePlanetTraits}.
     */
    export type $SpacePlanetTraits_ = { dimensionId?: $ResourceLocation_, atmosphere?: number, anomaly?: number, temperature?: number, volatility?: number, tectonics?: number, mineralRichness?: number, gravity?: number,  } | [dimensionId?: $ResourceLocation_, atmosphere?: number, anomaly?: number, temperature?: number, volatility?: number, tectonics?: number, mineralRichness?: number, gravity?: number, ];
    export class $SpaceFluidFeatureConfig extends $Record implements $FeatureConfiguration {
        minY(): number;
        maxY(): number;
        fluidId(): string;
        bodyId(): string;
        baseChance(): number;
        radiusMax(): number;
        radiusMin(): number;
        surfaceAllowed(): boolean;
        requireHotContext(): boolean;
        requireColdContext(): boolean;
        caveOnly(): boolean;
        distributionType(): $SpaceFluidDistributionType;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpaceFluidFeatureConfig>;
        constructor(bodyId: string, fluidId: string, distributionType: $SpaceFluidDistributionType_, radiusMin: number, radiusMax: number, minY: number, maxY: number, baseChance: number, caveOnly: boolean, surfaceAllowed: boolean, requireHotContext: boolean, requireColdContext: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SpaceFluidFeatureConfig}.
     */
    export type $SpaceFluidFeatureConfig_ = { minY?: number, radiusMin?: number, caveOnly?: boolean, radiusMax?: number, surfaceAllowed?: boolean, baseChance?: number, distributionType?: $SpaceFluidDistributionType_, requireColdContext?: boolean, bodyId?: string, fluidId?: string, requireHotContext?: boolean, maxY?: number,  } | [minY?: number, radiusMin?: number, caveOnly?: boolean, radiusMax?: number, surfaceAllowed?: boolean, baseChance?: number, distributionType?: $SpaceFluidDistributionType_, requireColdContext?: boolean, bodyId?: string, fluidId?: string, requireHotContext?: boolean, maxY?: number, ];
    export class $SpaceTerrainSupportHelper {
        static canReplaceForSupport(arg0: $BlockState_): boolean;
        static findSurfaceY(arg0: $WorldGenLevel, arg1: number, arg2: number, arg3: number): number;
        static createColumnTracker(): $Map<number, number>;
        static isGround(arg0: $BlockState_): boolean;
        static placeTrackedSolid(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Map_<number, number>): void;
        static stitchUnsupportedColumnsDown(arg0: $WorldGenLevel, arg1: $Map_<number, number>, arg2: $BlockPos_, arg3: number, arg4: $BlockState_, arg5: $BlockState_): void;
    }
    export class $SpaceWorldgenFluidHelper {
        static isAdjacentToAir(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        static canReplaceWithFluid(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        static isColdContext(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        static isAdjacentToLava(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
        static isAdjacentToFluid(arg0: $WorldGenLevel, arg1: $BlockPos_): boolean;
    }
    export class $SpaceOreFeatureConfig extends $Record implements $FeatureConfiguration {
        size(): number;
        minY(): number;
        pathLength(): number;
        maxY(): number;
        bodyId(): string;
        oreBlockId(): string;
        depthBonus(): number;
        baseChance(): number;
        replaceableBlockIds(): $List<string>;
        verticalRadius(): number;
        horizontalRadius(): number;
        caveOnly(): boolean;
        requireNearAir(): boolean;
        requireNearFluid(): boolean;
        requireNearLava(): boolean;
        distributionType(): $SpaceOreDistributionType;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpaceOreFeatureConfig>;
        constructor(bodyId: string, oreBlockId: string, replaceableBlockIds: $List_<string>, distributionType: $SpaceOreDistributionType_, size: number, pathLength: number, horizontalRadius: number, verticalRadius: number, minY: number, maxY: number, baseChance: number, depthBonus: number, requireNearAir: boolean, requireNearFluid: boolean, requireNearLava: boolean, caveOnly: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SpaceOreFeatureConfig}.
     */
    export type $SpaceOreFeatureConfig_ = { requireNearFluid?: boolean, bodyId?: string, size?: number, baseChance?: number, oreBlockId?: string, minY?: number, verticalRadius?: number, pathLength?: number, requireNearLava?: boolean, maxY?: number, horizontalRadius?: number, replaceableBlockIds?: $List_<string>, caveOnly?: boolean, depthBonus?: number, requireNearAir?: boolean, distributionType?: $SpaceOreDistributionType_,  } | [requireNearFluid?: boolean, bodyId?: string, size?: number, baseChance?: number, oreBlockId?: string, minY?: number, verticalRadius?: number, pathLength?: number, requireNearLava?: boolean, maxY?: number, horizontalRadius?: number, replaceableBlockIds?: $List_<string>, caveOnly?: boolean, depthBonus?: number, requireNearAir?: boolean, distributionType?: $SpaceOreDistributionType_, ];
}
