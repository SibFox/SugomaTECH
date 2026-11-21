import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $ChunkLevel, $LevelPollution, $LevelPollution_ } from "@package/com/denfop/api/pollution/component";
import { $List, $Map_, $Set_, $List_ } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";

declare module "@package/com/denfop/api/pollution/analyzer" {
    export class $PollutionAnalyzerSnapshotBuilder {
        static build(arg0: $ServerPlayer): $PollutionAnalyzerSnapshot;
        static build(arg0: $ServerLevel, arg1: $ChunkPos): $PollutionAnalyzerSnapshot;
    }
    export class $PollutionAnalyzerSourceSnapshot {
        getName(): string;
        getId(): string;
        isActive(): boolean;
        static fromTag(arg0: $CompoundTag_, arg1: $RegistryAccess): $PollutionAnalyzerSourceSnapshot;
        toTag(arg0: $RegistryAccess): $CompoundTag;
        getBlockX(): number;
        getBlockZ(): number;
        getBlockY(): number;
        getRegistryName(): string;
        nameComponent(): $Component;
        getAirCleaningPerSecond(): number;
        getSoilCleaningPerSecond(): number;
        getSoilCurrentContribution(): number;
        getAirCurrentContribution(): number;
        getChunkZ(): number;
        getChunkX(): number;
        getCleanerMedium(): string;
        isCleaner(): boolean;
        getMechanismLevel(): number;
        getRenderStack(): $ItemStack;
        getSoilReductionPercent(): number;
        getAirReductionPercent(): number;
        getTotalCleaningPerSecond(): number;
        getMaxMechanismLevel(): number;
        getSoilBaseContribution(): number;
        getAirBaseContribution(): number;
        getTotalCurrentContribution(): number;
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $ItemStack_, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: boolean, arg17: string, arg18: number, arg19: number, arg20: number, arg21: number);
        get name(): string;
        get id(): string;
        get active(): boolean;
        get blockX(): number;
        get blockZ(): number;
        get blockY(): number;
        get registryName(): string;
        get airCleaningPerSecond(): number;
        get soilCleaningPerSecond(): number;
        get soilCurrentContribution(): number;
        get airCurrentContribution(): number;
        get chunkZ(): number;
        get chunkX(): number;
        get cleanerMedium(): string;
        get cleaner(): boolean;
        get mechanismLevel(): number;
        get renderStack(): $ItemStack;
        get soilReductionPercent(): number;
        get airReductionPercent(): number;
        get totalCleaningPerSecond(): number;
        get maxMechanismLevel(): number;
        get soilBaseContribution(): number;
        get airBaseContribution(): number;
        get totalCurrentContribution(): number;
    }
    export class $PollutionAnalyzerButton extends $AbstractWidget {
        setSelected(arg0: boolean): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        xOffset: number;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: number, arg6: $PollutionAnalyzerButton$PressAction_);
        set selected(value: boolean);
    }
    export class $PollutionAnalyzerTerrainColumn {
        static fromTag(arg0: $CompoundTag_): $PollutionAnalyzerTerrainColumn;
        toTag(): $CompoundTag;
        getSurfaceHeight(): number;
        getGroundBlockKey(): string;
        getGroundHeight(): number;
        getUpperBlockKeys(): $List<string>;
        getSampleX(): number;
        getSampleZ(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string, arg5: $List_<string>);
        get surfaceHeight(): number;
        get groundBlockKey(): string;
        get groundHeight(): number;
        get upperBlockKeys(): $List<string>;
        get sampleX(): number;
        get sampleZ(): number;
    }
    export class $PollutionAnalyzerWorldPreviewCache$TempChunkData {
    }
    export class $PollutionAnalyzerWorldPreviewCache {
        getGlobalBaseY(): number;
        update(arg0: $ClientLevel, arg1: $ChunkPos): void;
        getChunks(): $List<$PollutionAnalyzerWorldPreviewCache$PreviewChunk>;
        getGlobalMaxVisibleY(): number;
        static FACE_EAST: number;
        static FACE_ALL: number;
        static HEIGHT_DIVISOR: number;
        static CHUNK_SIZE: number;
        static MIN_BODY_THICKNESS: number;
        static FACE_UP: number;
        static FACE_SOUTH: number;
        static REBUILD_INTERVAL_TICKS: number;
        static MAX_UPPER_BLOCKS: number;
        static RADIUS: number;
        static FACE_WEST: number;
        static FACE_DOWN: number;
        static FACE_NORTH: number;
        constructor();
        get globalBaseY(): number;
        get chunks(): $List<$PollutionAnalyzerWorldPreviewCache$PreviewChunk>;
        get globalMaxVisibleY(): number;
    }
    export class $PollutionAnalyzerForecastEngine$ChunkForecast {
        static empty(): $PollutionAnalyzerForecastEngine$ChunkForecast;
        getNow(): number;
        getSeriesSeconds(): number[];
        getRatePerSecond(): number;
        getTimeToFallSeconds(): number;
        getTimeToRiseSeconds(): number;
        getSeverityAtFiveMinutes(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]);
        get now(): number;
        get seriesSeconds(): number[];
        get ratePerSecond(): number;
        get timeToFallSeconds(): number;
        get timeToRiseSeconds(): number;
        get severityAtFiveMinutes(): number;
    }
    export class $PollutionAnalyzerCleanerResolver$CleanerPlan extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerCleanerResolver$CleanerPlan}.
     */
    export type $PollutionAnalyzerCleanerResolver$CleanerPlan_ = { baseCopies?: number, singleLevel?: number,  } | [baseCopies?: number, singleLevel?: number, ];
    export class $PollutionAnalyzerThresholds {
        static fromTag(arg0: $CompoundTag_): $PollutionAnalyzerThresholds;
        toTag(): $CompoundTag;
        getMedium(): string;
        getDangerFrom(): number;
        getRecommendedMax(): number;
        getCriticalFrom(): number;
        getWarningFrom(): number;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number);
        get medium(): string;
        get dangerFrom(): number;
        get recommendedMax(): number;
        get criticalFrom(): number;
        get warningFrom(): number;
    }
    export class $PollutionAnalyzerWorldPreviewCache$PreviewFluidCell {
        minX(): number;
        fluidHeight(): number;
        getFluidState(): $FluidState;
        minZ(): number;
        maxZ(): number;
        baseY(arg0: number): number;
        maxX(): number;
        getLocalX(): number;
        getLocalZ(): number;
        getWorldY(): number;
        getTint(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $FluidState, arg4: number, arg5: number);
        get fluidState(): $FluidState;
        get localX(): number;
        get localZ(): number;
        get worldY(): number;
        get tint(): number;
    }
    export class $PollutionAnalyzerForecastEngine {
        static simulate(arg0: $Set_<number>, arg1: $Map_<$ChunkPos, $ChunkLevel>, arg2: $Map_<$ChunkPos, $ChunkLevel>, arg3: $Map_<$ChunkPos, number>, arg4: $Map_<$ChunkPos, number>, arg5: $Map_<$ChunkPos, number>, arg6: $Map_<$ChunkPos, number>, arg7: number): $PollutionAnalyzerForecastEngine$Result;
    }
    export class $PollutionAnalyzerWorldPreviewCache$PreviewSolid {
        getState(): $BlockState;
        getWorldY(): number;
        displayZ(): number;
        displayX(): number;
        displayY(arg0: number): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $BlockState_);
        get state(): $BlockState;
        get worldY(): number;
    }
    export class $PollutionAnalyzerWorldPreviewCache$PreviewChunk {
        getCenterGroundY(): number;
        getFluids(): $List<$PollutionAnalyzerWorldPreviewCache$PreviewFluidCell>;
        getDisplayCenterHeight(arg0: number): number;
        getChunkZ(): number;
        getChunkX(): number;
        getMaxTopY(): number;
        getSolids(): $List<$PollutionAnalyzerWorldPreviewCache$PreviewSolid>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $List_<$PollutionAnalyzerWorldPreviewCache$PreviewSolid>, arg5: $List_<$PollutionAnalyzerWorldPreviewCache$PreviewFluidCell>);
        get centerGroundY(): number;
        get fluids(): $List<$PollutionAnalyzerWorldPreviewCache$PreviewFluidCell>;
        get chunkZ(): number;
        get chunkX(): number;
        get maxTopY(): number;
        get solids(): $List<$PollutionAnalyzerWorldPreviewCache$PreviewSolid>;
    }
    export class $PollutionAnalyzerCleanerOption {
        getStack(): $ItemStack;
        getDisplayName(): string;
        static fromTag(arg0: $CompoundTag_, arg1: $RegistryAccess): $PollutionAnalyzerCleanerOption;
        toTag(arg0: $RegistryAccess): $CompoundTag;
        getMaxLevel(): number;
        descriptionComponent(): $Component;
        getMedium(): string;
        getDescriptionKey(): string;
        getBaseReductionPerSecond(): number;
        getDetectedLevel(): number;
        isBlockLike(): boolean;
        getEstimatedReductionPerSecond(): number;
        getLevelBonusReductionPerSecond(): number;
        getRecommendedBaseMachineCount(): number;
        getRecommendedSingleMachineLevel(): number;
        constructor(arg0: string, arg1: $ItemStack_, arg2: string, arg3: string, arg4: boolean, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number);
        get stack(): $ItemStack;
        get displayName(): string;
        get maxLevel(): number;
        get medium(): string;
        get descriptionKey(): string;
        get baseReductionPerSecond(): number;
        get detectedLevel(): number;
        get blockLike(): boolean;
        get estimatedReductionPerSecond(): number;
        get levelBonusReductionPerSecond(): number;
        get recommendedBaseMachineCount(): number;
        get recommendedSingleMachineLevel(): number;
    }
    export class $PollutionAnalyzerClientHistory {
        capture(arg0: $PollutionAnalyzerSnapshot): void;
        getSoilRate(arg0: number): number[];
        getAirCleaning(arg0: number): number[];
        getAirTotal(arg0: number): number[];
        getSoilCleaning(arg0: number): number[];
        getSoilTotal(arg0: number): number[];
        getAirRate(arg0: number): number[];
        static HISTORY_TICKS: number;
        constructor();
    }
    export class $PollutionAnalyzerCleanerResolver {
        static resolveAirCleaner(arg0: $List_<$PollutionAnalyzerSourceSnapshot>): $PollutionAnalyzerCleanerOption;
        static resolveSoilCleaner(arg0: $List_<$PollutionAnalyzerSourceSnapshot>): $PollutionAnalyzerCleanerOption;
    }
    export class $PollutionAnalyzerSnapshot {
        getSources(): $List<$PollutionAnalyzerSourceSnapshot>;
        getChunk(arg0: number): $PollutionAnalyzerChunkSnapshot;
        static fromTag(arg0: $CompoundTag_, arg1: $RegistryAccess): $PollutionAnalyzerSnapshot;
        toTag(arg0: $RegistryAccess): $CompoundTag;
        getChunks(): $List<$PollutionAnalyzerChunkSnapshot>;
        getDimensionName(): string;
        getWindSide(): string;
        getCenterChunkX(): number;
        getCenterChunkZ(): number;
        isSupportedDimension(): boolean;
        getWindType(): string;
        getWorldGameTime(): number;
        getSoilCleaner(): $PollutionAnalyzerCleanerOption;
        getRecommendations(): $List<$PollutionAnalyzerRecommendation>;
        getAirThresholds(): $PollutionAnalyzerThresholds;
        getAirCleaner(): $PollutionAnalyzerCleanerOption;
        getSoilThresholds(): $PollutionAnalyzerThresholds;
        centerKey(): number;
        constructor(arg0: boolean, arg1: string, arg2: number, arg3: number, arg4: number, arg5: string, arg6: string, arg7: $PollutionAnalyzerThresholds, arg8: $PollutionAnalyzerThresholds, arg9: $PollutionAnalyzerCleanerOption, arg10: $PollutionAnalyzerCleanerOption, arg11: $List_<$PollutionAnalyzerChunkSnapshot>, arg12: $List_<$PollutionAnalyzerSourceSnapshot>, arg13: $List_<$PollutionAnalyzerRecommendation>);
        get sources(): $List<$PollutionAnalyzerSourceSnapshot>;
        get chunks(): $List<$PollutionAnalyzerChunkSnapshot>;
        get dimensionName(): string;
        get windSide(): string;
        get centerChunkX(): number;
        get centerChunkZ(): number;
        get supportedDimension(): boolean;
        get windType(): string;
        get worldGameTime(): number;
        get soilCleaner(): $PollutionAnalyzerCleanerOption;
        get recommendations(): $List<$PollutionAnalyzerRecommendation>;
        get airThresholds(): $PollutionAnalyzerThresholds;
        get airCleaner(): $PollutionAnalyzerCleanerOption;
        get soilThresholds(): $PollutionAnalyzerThresholds;
    }
    export class $PollutionAnalyzerRecommendation {
        static literal(arg0: number, arg1: string, arg2: string): $PollutionAnalyzerRecommendation;
        getArgs(): $List<string>;
        getSeverity(): number;
        static fromTag(arg0: $CompoundTag_): $PollutionAnalyzerRecommendation;
        toTag(): $CompoundTag;
        getTitleKey(): string;
        titleComponent(): $Component;
        bodyComponent(): $Component;
        getBodyKey(): string;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $List_<string>);
        get args(): $List<string>;
        get severity(): number;
        get titleKey(): string;
        get bodyKey(): string;
    }
    export class $PollutionAnalyzerChunkSnapshot {
        key(): number;
        static fromTag(arg0: $CompoundTag_): $PollutionAnalyzerChunkSnapshot;
        toTag(): $CompoundTag;
        getAirLevel(): $LevelPollution;
        getAirForecastFiveMinutes(): number;
        getAirCleaningPerSecond(): number;
        getSoilLevelOrdinal(): number;
        getSoilTimeToRiseSeconds(): number;
        getSoilTimeToFallSeconds(): number;
        getAirBandPollution(): number;
        getSoilRatePerSecond(): number;
        getSoilCleaningPerSecond(): number;
        getAirTimeToRiseSeconds(): number;
        getAirTimeToFallSeconds(): number;
        getSoilBandPollution(): number;
        getAirTotalTickSeries(): number[];
        getAirRatePerSecond(): number;
        getSoilTotalTickSeries(): number[];
        getSoilForecastFiveMinutes(): number;
        getSoilRateTickSeries(): number[];
        getAirRateTickSeries(): number[];
        getChunkZ(): number;
        getChunkX(): number;
        getAirSeverity(): number;
        getSoilSeverity(): number;
        getTerrainNW(): number;
        getRiskScore(): number;
        getSoilLevel(): $LevelPollution;
        getTerrainNE(): number;
        getTerrainColumns(): $List<$PollutionAnalyzerTerrainColumn>;
        getTerrainSW(): number;
        getTerrainSE(): number;
        getTerrainCenter(): number;
        getAirLevelOrdinal(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: number, arg18: number, arg19: number, arg20: number, arg21: number, arg22: number, arg23: number, arg24: $List_<$PollutionAnalyzerTerrainColumn>, arg25: number[], arg26: number[], arg27: number[], arg28: number[]);
        get airLevel(): $LevelPollution;
        get airForecastFiveMinutes(): number;
        get airCleaningPerSecond(): number;
        get soilLevelOrdinal(): number;
        get soilTimeToRiseSeconds(): number;
        get soilTimeToFallSeconds(): number;
        get airBandPollution(): number;
        get soilRatePerSecond(): number;
        get soilCleaningPerSecond(): number;
        get airTimeToRiseSeconds(): number;
        get airTimeToFallSeconds(): number;
        get soilBandPollution(): number;
        get airTotalTickSeries(): number[];
        get airRatePerSecond(): number;
        get soilTotalTickSeries(): number[];
        get soilForecastFiveMinutes(): number;
        get soilRateTickSeries(): number[];
        get airRateTickSeries(): number[];
        get chunkZ(): number;
        get chunkX(): number;
        get airSeverity(): number;
        get soilSeverity(): number;
        get terrainNW(): number;
        get riskScore(): number;
        get soilLevel(): $LevelPollution;
        get terrainNE(): number;
        get terrainColumns(): $List<$PollutionAnalyzerTerrainColumn>;
        get terrainSW(): number;
        get terrainSE(): number;
        get terrainCenter(): number;
        get airLevelOrdinal(): number;
    }
    export class $PollutionAnalyzerForecastEngine$Result {
        soil(arg0: number): $PollutionAnalyzerForecastEngine$ChunkForecast;
        air(arg0: number): $PollutionAnalyzerForecastEngine$ChunkForecast;
        getWindSide(): string;
        getWindType(): string;
        constructor(arg0: $Map_<number, $PollutionAnalyzerForecastEngine$ChunkForecast>, arg1: $Map_<number, $PollutionAnalyzerForecastEngine$ChunkForecast>, arg2: string, arg3: string);
        get windSide(): string;
        get windType(): string;
    }
    export class $PollutionAnalyzerMath {
        static severity(arg0: $ChunkLevel): number;
        static severity(arg0: $LevelPollution_, arg1: number): number;
        static airThresholds(): $PollutionAnalyzerThresholds;
        static averageTerrain(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static levelFromSeverity(arg0: number): $LevelPollution;
        static soilThresholds(): $PollutionAnalyzerThresholds;
        static normalizedRisk(arg0: number, arg1: $PollutionAnalyzerThresholds): number;
        static riskBand(arg0: number, arg1: $PollutionAnalyzerThresholds): number;
        static bandPollutionFromSeverity(arg0: number): number;
        static BAND_SIZE: number;
    }
    export class $PollutionAnalyzerButton$PressAction {
    }
    export interface $PollutionAnalyzerButton$PressAction {
        onPress(arg0: $PollutionAnalyzerButton): void;
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerButton$PressAction}.
     */
    export type $PollutionAnalyzerButton$PressAction_ = ((arg0: $PollutionAnalyzerButton) => void);
    export class $PollutionAnalyzerClientHistory$Series {
    }
}
