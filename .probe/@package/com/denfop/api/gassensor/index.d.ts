import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $UUID_, $List, $List_ } from "@package/java/util";
import { $PlayerEvent$PlayerLoggedOutEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $GenData } from "@package/com/denfop/world";
import { $ServerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $RenderLevelStageEvent, $RenderGuiLayerEvent$Post, $ClientPlayerNetworkEvent$LoggingOut } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/denfop/api/gassensor" {
    export class $GasSensorScanState {
        static empty(arg0: number): $GasSensorScanState;
        static unsupported(arg0: number, arg1: number, arg2: number): $GasSensorScanState;
        static fromTag(arg0: $CompoundTag_): $GasSensorScanState;
        toTag(): $CompoundTag;
        getProgress(): number;
        getById(arg0: string): $GasSensorVeinEntry;
        getCenterChunkX(): number;
        getCurrentChunkX(): number;
        getFoundCount(): number;
        getRadiusChunks(): number;
        getTotalCandidates(): number;
        getCenterChunkZ(): number;
        getCurrentChunkZ(): number;
        isScanning(): boolean;
        getVeins(): $List<$GasSensorVeinEntry>;
        isSupportedDimension(): boolean;
        getProcessedCandidates(): number;
        constructor(arg0: boolean, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $List_<$GasSensorVeinEntry>);
        get progress(): number;
        get centerChunkX(): number;
        get currentChunkX(): number;
        get foundCount(): number;
        get radiusChunks(): number;
        get totalCandidates(): number;
        get centerChunkZ(): number;
        get currentChunkZ(): number;
        get scanning(): boolean;
        get veins(): $List<$GasSensorVeinEntry>;
        get supportedDimension(): boolean;
        get processedCandidates(): number;
    }
    export class $GasSensorClientEvents {
        static render(arg0: $RenderLevelStageEvent): void;
        static onLogout(arg0: $ClientPlayerNetworkEvent$LoggingOut): void;
        static onGuiOverlay(arg0: $RenderGuiLayerEvent$Post): void;
    }
    export class $GasSensorServerEvents {
        static onServerTick(arg0: $ServerTickEvent$Post): void;
        static onPlayerLogout(arg0: $PlayerEvent$PlayerLoggedOutEvent): void;
    }
    export class $GasSensorScannerManager {
        static requestScan(arg0: $ServerPlayer, arg1: number): void;
        static clear(arg0: $UUID_): void;
        static tick(arg0: $MinecraftServer): void;
    }
    export class $GasSensorVeinEntry {
        getTypeName(): string;
        getId(): string;
        static fromTag(arg0: $CompoundTag_): $GasSensorVeinEntry;
        toTag(): $CompoundTag;
        getBlockX(): number;
        getBlockZ(): number;
        getBlockY(): number;
        getTranslationKey(): string;
        getDistanceBlocks(): number;
        getPreviewCells(): $List<$GasSensorVeinEntry$PreviewCell>;
        getMinRelativeX(): number;
        getMinRelativeZ(): number;
        getMaxRelativeX(): number;
        getAmountMb(): number;
        getMinRelativeY(): number;
        getMaxRelativeY(): number;
        getMaxRelativeZ(): number;
        getSpanY(): number;
        getSpanZ(): number;
        getChunkZ(): number;
        getChunkX(): number;
        getSpanX(): number;
        getFluidRegistryName(): string;
        getPreviewCellCount(): number;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: $List_<$GasSensorVeinEntry$PreviewCell_>);
        get typeName(): string;
        get id(): string;
        get blockX(): number;
        get blockZ(): number;
        get blockY(): number;
        get translationKey(): string;
        get distanceBlocks(): number;
        get previewCells(): $List<$GasSensorVeinEntry$PreviewCell>;
        get minRelativeX(): number;
        get minRelativeZ(): number;
        get maxRelativeX(): number;
        get amountMb(): number;
        get minRelativeY(): number;
        get maxRelativeY(): number;
        get maxRelativeZ(): number;
        get spanY(): number;
        get spanZ(): number;
        get chunkZ(): number;
        get chunkX(): number;
        get spanX(): number;
        get fluidRegistryName(): string;
        get previewCellCount(): number;
    }
    export class $GasSensorClientHooks {
        static open(arg0: $ItemStack_): void;
    }
    export class $GasSensorClientCache {
        static applyResult(arg0: $GasSensorScanState): void;
        static applyProgress(arg0: $GasSensorScanState): void;
        static clear(): void;
        static getState(): $GasSensorScanState;
        static getSelectedVeinId(): string;
        static getSelectedVein(): $GasSensorVeinEntry;
        static getFollowedVein(): $GasSensorVeinEntry;
        static setSelectedVeinId(arg0: string): void;
        static toggleFollowSelected(): boolean;
        static isFollowingSelected(): boolean;
        static get state(): $GasSensorScanState;
        static get selectedVein(): $GasSensorVeinEntry;
        static get followedVein(): $GasSensorVeinEntry;
        static get followingSelected(): boolean;
    }
    export class $GasSensorOverlayRenderer {
        static render(arg0: $GuiGraphics): void;
        static renderWorld(arg0: $RenderLevelStageEvent): void;
    }
    export class $GasSensorVeinEntry$PreviewCell extends $Record {
        static fromTag(arg0: $CompoundTag_): $GasSensorVeinEntry$PreviewCell;
        toTag(): $CompoundTag;
        relativeZ(): number;
        relativeX(): number;
        amountMb(): number;
        relativeY(): number;
        constructor(relativeX: number, relativeY: number, relativeZ: number, amountMb: number);
    }
    /**
     * Values that may be interpreted as {@link $GasSensorVeinEntry$PreviewCell}.
     */
    export type $GasSensorVeinEntry$PreviewCell_ = { relativeX?: number, relativeY?: number, relativeZ?: number, amountMb?: number,  } | [relativeX?: number, relativeY?: number, relativeZ?: number, amountMb?: number, ];
    export class $GasSensorScanUtil {
        static isAreaLoaded(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number): boolean;
        static scanCandidate(arg0: $ServerLevel, arg1: $ServerPlayer, arg2: $ChunkPos, arg3: $GenData): $GasSensorVeinEntry;
    }
    export class $GasSensorOverlayRenderer$MarkerTarget extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $GasSensorOverlayRenderer$MarkerTarget}.
     */
    export type $GasSensorOverlayRenderer$MarkerTarget_ = { x?: number, y?: number, z?: number,  } | [x?: number, y?: number, z?: number, ];
    export class $GasSensorScannerManager$ScanSession {
    }
}
