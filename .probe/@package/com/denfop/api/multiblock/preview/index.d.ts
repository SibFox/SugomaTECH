import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/com/denfop/api/multiblock/preview" {
    export class $PreviewAnimation {
        reset(): void;
        normalized(): number;
        finished(): boolean;
        tick(): void;
        easeOutCubic(): number;
        getDropOffsetBlocks(arg0: number): number;
        constructor(arg0: number);
    }
    export class $MultiblockPreviewScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_, arg1: $MultiblockPreviewModel);
    }
    export class $MultiblockPreviewScreens {
        static open(arg0: $Component_, arg1: $MultiblockPreviewModel): void;
    }
    export class $MultiblockPreviewModel {
        layers(): $List<$MultiblockPreviewModel$LayerGroup>;
        getLayer(arg0: number): $MultiblockPreviewModel$LayerGroup;
        minX(): number;
        minY(): number;
        static fromMap(arg0: $Map_<$BlockPos_, $ItemStack_>): $MultiblockPreviewModel;
        static fromMap(arg0: $Map_<$BlockPos_, $ItemStack_>, arg1: $Map_<$BlockPos_, $Direction_>): $MultiblockPreviewModel;
        minZ(): number;
        maxZ(): number;
        maxY(): number;
        maxX(): number;
        sizeY(): number;
        sizeZ(): number;
        sizeX(): number;
        maxSpan(): number;
        stepEntries(): $List<$MultiblockPreviewEntry>;
        getStepEntry(arg0: number): $MultiblockPreviewEntry;
        usedStacks(): $List<$MultiblockPreviewModel$UsedStackEntry>;
        stageCount(arg0: $PreviewMode_): number;
        constructor(arg0: $Map_<$BlockPos_, $ItemStack_>, arg1: $Map_<$BlockPos_, $Direction_>);
    }
    export class $MultiblockPreviewScreen$HoveredPreviewBlock {
    }
    export class $MultiblockPreviewEntry extends $Record {
        stack(): $ItemStack;
        direction(): $Direction;
        relativePos(): $BlockPos;
        isOrigin(): boolean;
        constructor(relativePos: $BlockPos_, stack: $ItemStack_, direction: $Direction_);
        get origin(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MultiblockPreviewEntry}.
     */
    export type $MultiblockPreviewEntry_ = { stack?: $ItemStack_, relativePos?: $BlockPos_, direction?: $Direction_,  } | [stack?: $ItemStack_, relativePos?: $BlockPos_, direction?: $Direction_, ];
    export class $MultiblockPreviewModel$LayerGroup extends $Record {
        size(): number;
        entries(): $List<$MultiblockPreviewEntry>;
        blocks(): $Collection<$MultiblockPreviewEntry>;
        yLevel(): number;
        constructor(yLevel: number, entries: $List_<$MultiblockPreviewEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiblockPreviewModel$LayerGroup}.
     */
    export type $MultiblockPreviewModel$LayerGroup_ = { entries?: $List_<$MultiblockPreviewEntry_>, yLevel?: number,  } | [entries?: $List_<$MultiblockPreviewEntry_>, yLevel?: number, ];
    export class $MultiblockPreviewScreen$InfoLine extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiblockPreviewScreen$InfoLine}.
     */
    export type $MultiblockPreviewScreen$InfoLine_ = { text?: $FormattedCharSequence_, color?: number,  } | [text?: $FormattedCharSequence_, color?: number, ];
    export class $TestMultiblockStructures {
        static createTestModel(arg0: $Map_<$BlockPos_, $ItemStack_>, arg1: $Map_<$BlockPos_, $Direction_>): $MultiblockPreviewModel;
    }
    export class $MultiblockPreviewModel$UsedStackEntry {
        stack(): $ItemStack;
        count(): number;
        increment(): void;
        constructor(arg0: $ItemStack_, arg1: number);
    }
    export class $PreviewMode extends $Enum<$PreviewMode> {
        static values(): $PreviewMode[];
        static valueOf(arg0: string): $PreviewMode;
        next(): $PreviewMode;
        title(): $Component;
        static LAYER_BY_LAYER: $PreviewMode;
        static STEP_BY_STEP: $PreviewMode;
    }
    /**
     * Values that may be interpreted as {@link $PreviewMode}.
     */
    export type $PreviewMode_ = "step_by_step" | "layer_by_layer";
}
