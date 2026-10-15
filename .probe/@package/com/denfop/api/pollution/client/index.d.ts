import { $BlockAndTintGetter, $ChunkPos } from "@package/net/minecraft/world/level";
import { $IntSupplier_ } from "@package/java/util/function";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $Collection_ } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics, $LayeredDraw$Layer } from "@package/net/minecraft/client/gui";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $RenderLevelStageEvent, $ViewportEvent$ComputeFogColor, $ScreenEvent$Render$Post, $ViewportEvent$RenderFog, $RegisterColorHandlersEvent$Block } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/denfop/api/pollution/client" {
    export class $PollutionWeatherColumnCache$ColumnEntry {
        getDensitySeed(): number;
        getRadialFactor(): number;
        getTerrainY(): number;
        getWorldZ(): number;
        getWorldX(): number;
        getSeed01b(): number;
        getSeed01(): number;
        getSeed01c(): number;
        get densitySeed(): number;
        get radialFactor(): number;
        get terrainY(): number;
        get worldZ(): number;
        get worldX(): number;
        get seed01b(): number;
        get seed01(): number;
        get seed01c(): number;
    }
    export class $PollutionVisualType extends $Enum<$PollutionVisualType> {
        static values(): $PollutionVisualType[];
        static valueOf(arg0: string): $PollutionVisualType;
        static MIXED: $PollutionVisualType;
        static SOIL: $PollutionVisualType;
        static AIR: $PollutionVisualType;
        static NONE: $PollutionVisualType;
        static RADIATION: $PollutionVisualType;
    }
    /**
     * Values that may be interpreted as {@link $PollutionVisualType}.
     */
    export type $PollutionVisualType_ = "none" | "air" | "soil" | "radiation" | "mixed";
    export class $PollutionWeatherRenderer {
        static render(arg0: $RenderLevelStageEvent, arg1: $PollutionVisualData): void;
    }
    export class $PollutionBlockColorCache$TintType extends $Enum<$PollutionBlockColorCache$TintType> {
        static values(): $PollutionBlockColorCache$TintType[];
        static valueOf(arg0: string): $PollutionBlockColorCache$TintType;
        static GRASS: $PollutionBlockColorCache$TintType;
        static WATER_PLANT: $PollutionBlockColorCache$TintType;
        static FOLIAGE: $PollutionBlockColorCache$TintType;
    }
    /**
     * Values that may be interpreted as {@link $PollutionBlockColorCache$TintType}.
     */
    export type $PollutionBlockColorCache$TintType_ = "grass" | "foliage" | "water_plant";
    export class $PollutionLocalTintCache$ChunkSeverityProvider {
    }
    export interface $PollutionLocalTintCache$ChunkSeverityProvider {
    }
    /**
     * Values that may be interpreted as {@link $PollutionLocalTintCache$ChunkSeverityProvider}.
     */
    export type $PollutionLocalTintCache$ChunkSeverityProvider_ = (() => void);
    export class $PollutionLocalTintState {
        isActive(): boolean;
        getFoliageTintColor(): number;
        getGrassTintColor(): number;
        getSaturationLoss(): number;
        getBiomeInfluence(): number;
        getSoilInfluence(): number;
        getWaterTintColor(): number;
        getAirInfluence(): number;
        getRadiationInfluence(): number;
        static NONE: $PollutionLocalTintState;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        get active(): boolean;
        get foliageTintColor(): number;
        get grassTintColor(): number;
        get saturationLoss(): number;
        get biomeInfluence(): number;
        get soilInfluence(): number;
        get waterTintColor(): number;
        get airInfluence(): number;
        get radiationInfluence(): number;
    }
    export class $PollutionWeatherColumnCache {
        ensureFresh(arg0: $Minecraft, arg1: number, arg2: number): void;
        reset(): void;
        getEntries(): $PollutionWeatherColumnCache$ColumnEntry[];
        getEntryCount(): number;
        constructor();
        get entries(): $PollutionWeatherColumnCache$ColumnEntry[];
        get entryCount(): number;
    }
    export class $PollutionVisualUpdateCache {
        reset(): void;
        updateSnapshot(arg0: $Minecraft, arg1: $LocalPlayer, arg2: number, arg3: $PollutionVisualData): void;
        shouldRecompute(arg0: $Minecraft, arg1: $LocalPlayer, arg2: number): boolean;
        constructor();
    }
    export class $PollutionVisualData {
        isActive(): boolean;
        lerpTo(arg0: $PollutionVisualData, arg1: number): $PollutionVisualData;
        getOverlayColor(): number;
        getSkyColor(): number;
        getFogColor(): number;
        getFoliageTintColor(): number;
        getGrassTintColor(): number;
        getSaturationLoss(): number;
        getFogInfluence(): number;
        getBiomeInfluence(): number;
        getFogFarFactor(): number;
        getFogNearFactor(): number;
        getSkyInfluence(): number;
        getSoilInfluence(): number;
        getWaterTintColor(): number;
        getAirInfluence(): number;
        getRadiationInfluence(): number;
        getScreenInfluence(): number;
        getOverallInfluence(): number;
        getDominantType(): $PollutionVisualType;
        getHorizonHaze(): number;
        getShimmerStrength(): number;
        getCloudVeil(): number;
        static NONE: $PollutionVisualData;
        constructor(arg0: $PollutionVisualType_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: number, arg18: number, arg19: number, arg20: number);
        get active(): boolean;
        get overlayColor(): number;
        get skyColor(): number;
        get fogColor(): number;
        get foliageTintColor(): number;
        get grassTintColor(): number;
        get saturationLoss(): number;
        get fogInfluence(): number;
        get biomeInfluence(): number;
        get fogFarFactor(): number;
        get fogNearFactor(): number;
        get skyInfluence(): number;
        get soilInfluence(): number;
        get waterTintColor(): number;
        get airInfluence(): number;
        get radiationInfluence(): number;
        get screenInfluence(): number;
        get overallInfluence(): number;
        get dominantType(): $PollutionVisualType;
        get horizonHaze(): number;
        get shimmerStrength(): number;
        get cloudVeil(): number;
    }
    export class $PollutionScreenOverlay extends $Enum<$PollutionScreenOverlay> implements $LayeredDraw$Layer {
        static values(): $PollutionScreenOverlay[];
        static valueOf(arg0: string): $PollutionScreenOverlay;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static INSTANCE: $PollutionScreenOverlay;
    }
    /**
     * Values that may be interpreted as {@link $PollutionScreenOverlay}.
     */
    export type $PollutionScreenOverlay_ = "instance";
    export class $PollutionVisualForgeEvents {
        static onClientTick(arg0: $LevelTickEvent$Post): void;
        static onRenderLevelStage(arg0: $RenderLevelStageEvent): void;
        static onComputeFogColor(arg0: $ViewportEvent$ComputeFogColor): void;
        static onRenderFog(arg0: $ViewportEvent$RenderFog): void;
    }
    export class $PollutionVisualColors {
        static multiply(arg0: number, arg1: number): number;
        static red(arg0: number): number;
        static rgb(arg0: number, arg1: number, arg2: number): number;
        static desaturate(arg0: number, arg1: number): number;
        static green(arg0: number): number;
        static blue(arg0: number): number;
        static argb(arg0: number, arg1: number): number;
        static blue01(arg0: number): number;
        static red01(arg0: number): number;
        static green01(arg0: number): number;
        static applyBiomeDegradation(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static applyRadiationWaterBoost(arg0: number, arg1: number): number;
        static applyRadiationGreenBoost(arg0: number, arg1: number): number;
        static brighten(arg0: number, arg1: number): number;
        static lerpColor(arg0: number, arg1: number, arg2: number): number;
        static smoothstep01(arg0: number): number;
        static weightedColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        static clamp01(arg0: number): number;
        static RADIATION_OVERLAY: number;
        static AIR_GRASS: number;
        static SOIL_FOG: number;
        static AIR_OVERLAY: number;
        static SOIL_FOLIAGE: number;
        static SOIL_OVERLAY: number;
        static RADIATION_GRASS: number;
        static RADIATION_FOG: number;
        static SOIL_WATER: number;
        static AIR_FOLIAGE: number;
        static RADIATION_SKY: number;
        static AIR_WATER: number;
        static AIR_SKY: number;
        static SOIL_SKY: number;
        static RADIATION_FOLIAGE: number;
        static RADIATION_WATER: number;
        static SOIL_GRASS: number;
        static AIR_FOG: number;
    }
    export class $PollutionEnvironmentBlockColors {
        static register(arg0: $RegisterColorHandlersEvent$Block): void;
        static applyWaterPlantTint(arg0: number, arg1: number, arg2: $BlockPos_): number;
        static getWaterPlantTintFromWorld(arg0: $BlockAndTintGetter, arg1: $BlockPos_): number;
        static WATER_PLANT_HANDLER: $BlockColor;
    }
    export class $PollutionWeatherReplacementHook {
        static shouldSuppressVanillaWeather(arg0: number): boolean;
    }
    export class $PollutionLocalTintCache {
        static get(arg0: $BlockPos_): $PollutionLocalTintState;
        static clear(): void;
        static getCellKey(arg0: $BlockPos_): number;
        static getCellSampleZ(arg0: number): number;
        static getCellSampleZ(arg0: $BlockPos_): number;
        static getCellSampleX(arg0: number): number;
        static getCellSampleX(arg0: $BlockPos_): number;
        static getCellSamplePos(arg0: $BlockPos_): $BlockPos;
        static invalidateChunkKeys(arg0: $LongSet): void;
        static invalidateArea(arg0: $ChunkPos, arg1: number): void;
        static MAX_DEPENDENCY_RADIUS_CHUNKS: number;
        static CELL_SIZE_BLOCKS: number;
    }
    export class $PollutionVisualCalculator$ChunkSeverityProvider {
    }
    export interface $PollutionVisualCalculator$ChunkSeverityProvider {
    }
    /**
     * Values that may be interpreted as {@link $PollutionVisualCalculator$ChunkSeverityProvider}.
     */
    export type $PollutionVisualCalculator$ChunkSeverityProvider_ = (() => void);
    export class $PollutionWeatherUtil {
        static getPollutedPrecipitationStrength(arg0: $Minecraft, arg1: $PollutionVisualData, arg2: number): number;
        static getPrecipitationColor(arg0: $PollutionVisualData, arg1: boolean): number;
        static shouldReplaceVanillaWeather(arg0: $Minecraft, arg1: $PollutionVisualData, arg2: number): boolean;
        static isSnowAtPlayer(arg0: $Minecraft): boolean;
    }
    export class $PollutionClientRenderRefresh {
        static reset(): void;
        static queueSingleChunkRadiationUpdated(arg0: $ChunkPos): void;
        static queueFullRadiationSnapshotApplied(arg0: $Collection_<$ChunkPos>): void;
        static onSingleChunkPollutionUpdated(arg0: $ChunkPos): void;
        static onFullPollutionSnapshotApplied(arg0: $Collection_<$ChunkPos>): void;
        static flushIfNeeded(arg0: $Minecraft): void;
        static queueFullPollutionSnapshotApplied(arg0: $Collection_<$ChunkPos>): void;
        static queueSingleChunkPollutionUpdated(arg0: $ChunkPos): void;
    }
    export class $PollutionVisualCalculator {
        static calculate(arg0: $LocalPlayer): $PollutionVisualData;
    }
    export class $PollutionSkyRenderer {
        static render(arg0: $RenderLevelStageEvent, arg1: $PollutionVisualData): void;
    }
    export class $PollutionBlockColorCache {
        static clear(): void;
        static getOrCompute(arg0: number, arg1: number, arg2: $PollutionBlockColorCache$TintType_, arg3: $IntSupplier_): number;
        static invalidateChunkKeys(arg0: $LongSet): void;
    }
    export class $PollutionVisualController {
        static tickClient(arg0: $Minecraft): void;
        static getCurrent(): $PollutionVisualData;
        static getPulse(arg0: number): number;
        static get current(): $PollutionVisualData;
    }
    export class $RadiationFoodClientOverlay {
        static onScreenRenderPost(arg0: $ScreenEvent$Render$Post): void;
    }
}
