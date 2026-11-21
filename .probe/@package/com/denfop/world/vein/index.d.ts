import { $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $BlockPileConfiguration, $NoneFeatureConfiguration, $DeltaFeatureConfiguration, $RandomBooleanFeatureConfiguration, $EndGatewayConfiguration, $NetherForestVegetationConfig, $ColumnFeatureConfiguration, $UnderwaterMagmaConfiguration, $RandomFeatureConfiguration, $SpikeConfiguration, $MultifaceGrowthConfiguration, $ReplaceSphereConfiguration, $RootSystemConfiguration, $DiskConfiguration, $TwistingVinesConfig, $LayerConfiguration, $PointedDripstoneConfiguration, $SpringConfiguration, $SimpleRandomFeatureConfiguration, $VegetationPatchConfiguration, $HugeMushroomFeatureConfiguration, $ProbabilityFeatureConfiguration, $SculkPatchConfiguration, $LargeDripstoneConfiguration, $GeodeConfiguration, $TreeConfiguration, $RandomPatchConfiguration, $CountConfiguration, $BlockColumnConfiguration, $SimpleBlockConfiguration, $BlockStateConfiguration, $DripstoneClusterConfiguration, $OreConfiguration, $ReplaceBlockConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $ShellCluster } from "@package/com/denfop/world/vein/noise";
import { $Codec } from "@package/com/mojang/serialization";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $List, $List_, $Map } from "@package/java/util";
import { $IMineral } from "@package/com/denfop/blocks";
import { $Tuple } from "@package/net/minecraft/util";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FossilFeatureConfiguration, $Feature, $BonusChestFeature, $HugeFungusConfiguration, $LakeFeature$Configuration, $SeagrassFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Color } from "@package/java/awt";
import { $Enum } from "@package/java/lang";
import { $ServerStoppingEvent } from "@package/net/neoforged/neoforge/event/server";
import { $ChunkEvent$Load, $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
export * as noise from "@package/com/denfop/world/vein/noise";

declare module "@package/com/denfop/world/vein" {
    export class $VeinType {
        getId(): number;
        getOres(): $List<$ChanceOre>;
        getHeavyOre(): $IMineral;
        getMeta(): number;
        setVein(arg0: $TypeVein_): void;
        getVein(): $TypeVein;
        getDeposits(): $BlockState;
        getDeposits_meta(): number;
        addChanceOre(arg0: $ChanceOre): void;
        static maxId: number;
        static veinTypeMap: $Map<number, $VeinType>;
        constructor(arg0: $BlockState_, arg1: $TypeVein_, arg2: $List_<$ChanceOre>);
        constructor(arg0: $IMineral, arg1: number, arg2: $TypeVein_, ...arg3: $ChanceOre[]);
        constructor(arg0: $IMineral, arg1: number, arg2: number, arg3: $TypeVein_, ...arg4: $ChanceOre[]);
        get id(): number;
        get ores(): $List<$ChanceOre>;
        get heavyOre(): $IMineral;
        get meta(): number;
        get deposits(): $BlockState;
        get deposits_meta(): number;
    }
    export class $AlgorithmVein$VeinModel {
    }
    export class $AlgorithmVein$WorldChunkKey {
    }
    export class $ChanceOre {
        getBlock(): $BlockState;
        getChance(): number;
        getMeta(): number;
        needGenerate(arg0: $WorldGenLevel): boolean;
        constructor(arg0: $BlockState_, arg1: number, arg2: number);
        get block(): $BlockState;
        get chance(): number;
        get meta(): number;
    }
    export class $VeinStructure {
        getLevel(): $WorldGenLevel;
        getChunk(): $ChunkAccess;
        getBlockPos(): $BlockPos;
        getVeinType(): $VeinType;
        getDepositsMeta(): number;
        constructor(arg0: $WorldGenLevel, arg1: $VeinType, arg2: $BlockPos_, arg3: $ChunkAccess, arg4: number);
        get level(): $WorldGenLevel;
        get chunk(): $ChunkAccess;
        get blockPos(): $BlockPos;
        get veinType(): $VeinType;
        get depositsMeta(): number;
    }
    export class $AlgorithmVein$PendingBlockPlacement {
    }
    export class $AlgorithmVein$VeinWorldEvents {
        static onChunkLoad(arg0: $ChunkEvent$Load): void;
        static onLevelUnload(arg0: $LevelEvent$Unload): void;
        static onLevelTick(arg0: $LevelTickEvent$Post): void;
        static onServerStopping(arg0: $ServerStoppingEvent): void;
    }
    export class $AlgorithmVein$PendingPlacementKind extends $Enum<$AlgorithmVein$PendingPlacementKind> {
    }
    /**
     * Values that may be interpreted as {@link $AlgorithmVein$PendingPlacementKind}.
     */
    export type $AlgorithmVein$PendingPlacementKind_ = "stone_replace" | "deepslate_replace";
    export class $AlgorithmVein$PendingDepositCandidate {
    }
    export class $AlgorithmVein$DeepOreCandidate {
    }
    export class $TypeVein extends $Enum<$TypeVein> {
        static values(): $TypeVein[];
        static valueOf(arg0: string): $TypeVein;
        getLevel(): number;
        getMax(): number;
        getNeed(): number;
        getMax_length(): number;
        getMinNeed(): number;
        static BIG: $TypeVein;
        static SMALL: $TypeVein;
        static MEDIUM: $TypeVein;
        get level(): number;
        get max(): number;
        get need(): number;
        get max_length(): number;
        get minNeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $TypeVein}.
     */
    export type $TypeVein_ = "small" | "medium" | "big";
    export class $AlgorithmVein extends $Feature<$NoneFeatureConfiguration> {
        static setBlockState1(arg0: $WorldGenLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: $ChunkAccess): void;
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static veinStructureList: $List<$VeinStructure>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static shellClusterChuncks: $Map<number, $Map<number, $Tuple<$Color, number>>>;
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
        static veinCoordination: $Map<number, $Map<number, $List<number>>>;
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
        static shellClusterList: $List<$ShellCluster>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static volcano: $ShellCluster;
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
        constructor(arg0: $Codec<$NoneFeatureConfiguration>);
    }
}
