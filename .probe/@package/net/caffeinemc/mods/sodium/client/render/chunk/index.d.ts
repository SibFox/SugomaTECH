import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder, $ChunkJob } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
import { $TextProvider } from "@package/net/caffeinemc/mods/sodium/client/gui/options";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockEntityRenderPredicate_, $BlockEntityRenderPredicate } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $Map_, $Map, $ArrayDeque, $Collection } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $CameraMovement_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
import { $CameraTransform, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
import { $SortBehavior_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $RenderSectionManagerAccessor as $RenderSectionManagerAccessor$1 } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $ChunkBuilderMeshingTask, $ChunkBuilderSortingTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
import { $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $RenderSectionExtension } from "@package/foundry/veil/forge/ext";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SortedRenderLists, $ChunkRenderListIterable_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc, $Matrix4fc } from "@package/org/joml";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        getDebugStrings(): $Collection<string>;
        getBuilder(): $ChunkBuilder;
        needsUpdate(): boolean;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        prepareFrame(arg0: $Vector3dc): void;
        getVisibleChunkCount(): number;
        getTotalSections(): number;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        finalizeRenderLists(arg0: $Viewport): void;
        beforeSectionUpdates(): void;
        processGFNIMovement(arg0: $CameraMovement_): void;
        markGraphDirty(): void;
        uploadChunks(): void;
        tickVisibleRenders(): void;
        onChunkAdded(arg0: number, arg1: number): void;
        onChunkRemoved(arg0: number, arg1: number): void;
        cleanupAndFlip(): void;
        updateChunks(arg0: boolean): void;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        getRenderLists(): $SortedRenderLists;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        handler$big000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        scheduleSort(arg0: number, arg1: boolean): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        getChunkRenderer(): $ChunkRenderer;
        getTaskLists(): $Map<$TaskQueueType, $ArrayDeque<$RenderSection>>;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$TaskQueueType_, $ArrayDeque<$RenderSection>>): void;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $SortBehavior_, arg3: $CommandList);
        get debugStrings(): $Collection<string>;
        get builder(): $ChunkBuilder;
        get visibleChunkCount(): number;
        get totalSections(): number;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
    }
    export class $TaskQueueType extends $Enum<$TaskQueueType> {
        static values(): $TaskQueueType[];
        static valueOf(arg0: string): $TaskQueueType;
        allowsUnlimitedUploadDuration(): boolean;
        queueSizeLimit(): number;
        static ALWAYS_DEFER: $TaskQueueType;
        static ZERO_FRAME_DEFER: $TaskQueueType;
        static ONE_FRAME_DEFER: $TaskQueueType;
        static INITIAL_BUILD: $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $TaskQueueType}.
     */
    export type $TaskQueueType_ = "zero_frame_defer" | "one_frame_defer" | "always_defer" | "initial_build";
    export class $RenderSection implements $RenderSectionExtension {
        "delete"(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        getPosition(): $SectionPos;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        isDisposed(): boolean;
        getSectionIndex(): number;
        getCenterX(): number;
        getCenterZ(): number;
        getCenterY(): number;
        getCulledBlockEntities(): $BlockEntity[];
        getGlobalBlockEntities(): $BlockEntity[];
        getAdjacent(arg0: number): $RenderSection;
        getOriginX(): number;
        getOriginY(): number;
        handler$bih000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        getSquaredDistance(arg0: $BlockPos_): number;
        isBuilt(): boolean;
        getChunkZ(): number;
        getChunkX(): number;
        getAdjacentMask(): number;
        getVisibilityData(): number;
        veil$markRendered(): void;
        setLastVisibleFrame(arg0: number): void;
        getIncomingDirections(): number;
        setIncomingDirections(arg0: number): void;
        veil$addIncomingDirections(arg0: number): void;
        addIncomingDirections(arg0: number): void;
        getPendingUpdateSince(): number;
        getTranslucentData(): $TranslucentData;
        getAnimatedSprites(): $TextureAtlasSprite[];
        setPendingUpdate(arg0: number, arg1: number): void;
        getRunningJob(): $ChunkJob;
        setTranslucentData(arg0: $TranslucentData): void;
        setRunningJob(arg0: $ChunkJob): void;
        getLastUploadFrame(): number;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        getPendingUpdate(): number;
        clearPendingUpdate(): void;
        prepareTrigger(arg0: boolean): void;
        setLastUploadFrame(arg0: number): void;
        setLastSubmittedFrame(arg0: number): void;
        setLastMeshResultSize(arg0: number): void;
        getLastSubmittedFrame(): number;
        veil$hasNotRendered(): boolean;
        getLastVisibleFrame(): number;
        getLastMeshResultSize(): number;
        getChunkY(): number;
        getOriginZ(): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get region(): $RenderRegion;
        get flags(): number;
        get position(): $SectionPos;
        set info(value: $BuiltSectionInfo);
        get disposed(): boolean;
        get sectionIndex(): number;
        get centerX(): number;
        get centerZ(): number;
        get centerY(): number;
        get culledBlockEntities(): $BlockEntity[];
        get globalBlockEntities(): $BlockEntity[];
        get originX(): number;
        get originY(): number;
        get built(): boolean;
        get chunkZ(): number;
        get chunkX(): number;
        get adjacentMask(): number;
        get visibilityData(): number;
        get pendingUpdateSince(): number;
        get animatedSprites(): $TextureAtlasSprite[];
        get chunkY(): number;
        get originZ(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform, arg5: boolean): void;
    }
    export class $DeferMode extends $Enum<$DeferMode> implements $TextProvider {
        static values(): $DeferMode[];
        static valueOf(arg0: string): $DeferMode;
        getLocalizedName(): $Component;
        getImportantRebuildQueueType(): $TaskQueueType;
        static ONE_FRAME: $DeferMode;
        static ALWAYS: $DeferMode;
        static ZERO_FRAMES: $DeferMode;
        get localizedName(): $Component;
        get importantRebuildQueueType(): $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $DeferMode}.
     */
    export type $DeferMode_ = "always" | "one_frame" | "zero_frames";
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        modelView(): $Matrix4fc;
        projection(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderMatrices}.
     */
    export type $ChunkRenderMatrices_ = { modelView?: $Matrix4fc, projection?: $Matrix4fc,  } | [modelView?: $Matrix4fc, projection?: $Matrix4fc, ];
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
    }
}
