import { $TaffySize, $FloatPoint, $FloatRect, $FloatSize } from "@package/dev/vfyjxf/taffy/geometry";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Set } from "@package/java/util";
import { $TaffyStyle, $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";
import { $MeasureFunc_, $MeasureFunc } from "@package/dev/vfyjxf/taffy/util";

declare module "@package/dev/vfyjxf/taffy/tree" {
    export class $LayoutOutput extends $Record {
        size(): $FloatSize;
        static hidden(): $LayoutOutput;
        contentSize(): $FloatSize;
        static fromSizesAndBaselines(arg0: $FloatSize, arg1: $FloatSize, arg2: $FloatPoint): $LayoutOutput;
        marginsCanCollapseThrough(): boolean;
        topMargin(): $CollapsibleMarginSet;
        static fromSizes(arg0: $FloatSize, arg1: $FloatSize): $LayoutOutput;
        firstBaselines(): $FloatPoint;
        bottomMargin(): $CollapsibleMarginSet;
        static fromOuterSize(arg0: $FloatSize): $LayoutOutput;
        static HIDDEN: $LayoutOutput;
        static DEFAULT: $LayoutOutput;
        constructor(size: $FloatSize, contentSize: $FloatSize, firstBaselines: $FloatPoint, topMargin: $CollapsibleMarginSet, bottomMargin: $CollapsibleMarginSet, marginsCanCollapseThrough: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LayoutOutput}.
     */
    export type $LayoutOutput_ = { marginsCanCollapseThrough?: boolean, contentSize?: $FloatSize, size?: $FloatSize, bottomMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, topMargin?: $CollapsibleMarginSet,  } | [marginsCanCollapseThrough?: boolean, contentSize?: $FloatSize, size?: $FloatSize, bottomMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, topMargin?: $CollapsibleMarginSet, ];
    export class $Layout extends $Record {
        size(): $FloatSize;
        location(): $FloatPoint;
        copy(): $Layout;
        order(): number;
        padding(): $FloatRect;
        margin(): $FloatRect;
        border(): $FloatRect;
        static withOrder(arg0: number): $Layout;
        scrollHeight(): number;
        contentSize(): $FloatSize;
        scrollbarSize(): $FloatSize;
        contentBoxY(): number;
        contentBoxX(): number;
        scrollWidth(): number;
        contentBoxSize(): $FloatSize;
        contentBoxWidth(): number;
        contentBoxHeight(): number;
        constructor(order: number, location: $FloatPoint, size: $FloatSize, contentSize: $FloatSize, scrollbarSize: $FloatSize, border: $FloatRect, padding: $FloatRect, margin: $FloatRect);
        constructor(arg0: number);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Layout}.
     */
    export type $Layout_ = { padding?: $FloatRect, size?: $FloatSize, location?: $FloatPoint, scrollbarSize?: $FloatSize, contentSize?: $FloatSize, border?: $FloatRect, margin?: $FloatRect, order?: number,  } | [padding?: $FloatRect, size?: $FloatSize, location?: $FloatPoint, scrollbarSize?: $FloatSize, contentSize?: $FloatSize, border?: $FloatRect, margin?: $FloatRect, order?: number, ];
    export class $RunMode extends $Enum<$RunMode> {
        static values(): $RunMode[];
        static valueOf(arg0: string): $RunMode;
        static PERFORM_HIDDEN_LAYOUT: $RunMode;
        static COMPUTE_SIZE: $RunMode;
        static PERFORM_LAYOUT: $RunMode;
    }
    /**
     * Values that may be interpreted as {@link $RunMode}.
     */
    export type $RunMode_ = "perform_layout" | "compute_size" | "perform_hidden_layout";
    export class $CollapsibleMarginSet {
        resolve(): number;
        copy(): $CollapsibleMarginSet;
        static zero(): $CollapsibleMarginSet;
        static fromMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithSet(arg0: $CollapsibleMarginSet): $CollapsibleMarginSet;
        static ZERO: $CollapsibleMarginSet;
    }
    export class $LayoutChangeListener {
    }
    export interface $LayoutChangeListener {
        onLayoutChanged(arg0: $NodeId_, arg1: $Layout_, arg2: $Layout_): void;
    }
    /**
     * Values that may be interpreted as {@link $LayoutChangeListener}.
     */
    export type $LayoutChangeListener_ = ((arg0: $NodeId, arg1: $Layout, arg2: $Layout) => void);
    export class $NodeId extends $Record {
        value(): number;
        static of(arg0: number): $NodeId;
        getId(): number;
        toIndex(): number;
        constructor(value: number);
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NodeId}.
     */
    export type $NodeId_ = { value?: number,  } | [value?: number, ];
    export class $TaffyTree {
        remove(arg0: $NodeId_): void;
        clear(): void;
        getParent(arg0: $NodeId_): $NodeId;
        acknowledgeLayout(arg0: $NodeId_): void;
        newWithChildren(arg0: $TaffyStyle, arg1: $List_<$NodeId_>): $NodeId;
        newWithChildren(arg0: $TaffyStyle, ...arg1: $NodeId_[]): $NodeId;
        getUnroundedLayout(arg0: $NodeId_): $Layout;
        roundingEnabled(): boolean;
        hasNewLayout(arg0: $NodeId_): boolean;
        hasDirtyDescendant(arg0: $NodeId_): boolean;
        setUnroundedLayout(arg0: $NodeId_, arg1: $Layout_): void;
        enableRounding(): void;
        getMeasureFunc(arg0: $NodeId_): $MeasureFunc;
        setMeasureFunc(arg0: $NodeId_, arg1: $MeasureFunc_): void;
        removeChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        newLeafWithMeasure(arg0: $TaffyStyle, arg1: $MeasureFunc_): $NodeId;
        getCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_): $LayoutOutput;
        totalNodeCount(): number;
        setChildren(arg0: $NodeId_, ...arg1: $NodeId_[]): void;
        getChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        getAllNodes(): $Set<$NodeId>;
        acknowledgeSubtree(arg0: $NodeId_): void;
        storeCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_, arg4: $LayoutOutput_): void;
        childCount(arg0: $NodeId_): number;
        getChildren(arg0: $NodeId_): $List<$NodeId>;
        isDirty(arg0: $NodeId_): boolean;
        clearCache(arg0: $NodeId_): void;
        addChild(arg0: $NodeId_, arg1: $NodeId_): void;
        setLayout(arg0: $NodeId_, arg1: $Layout_): void;
        getLayout(arg0: $NodeId_): $Layout;
        removeChild(arg0: $NodeId_, arg1: $NodeId_): void;
        getStyle(arg0: $NodeId_): $TaffyStyle;
        containsNode(arg0: $NodeId_): boolean;
        setStyle(arg0: $NodeId_, arg1: $TaffyStyle): void;
        setLayoutChangeListener(arg0: $LayoutChangeListener_): void;
        markDirty(arg0: $NodeId_): void;
        newLeaf(arg0: $TaffyStyle): $NodeId;
        disableRounding(): void;
        insertChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): void;
        computeLayout(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>): void;
        /**
         * @deprecated
         */
        hasUnconsumedLayout(arg0: $NodeId_): boolean;
        getLayoutChangeListener(): $LayoutChangeListener;
        replaceChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): $NodeId;
        computeLayoutWithMeasure(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>, arg2: $MeasureFunc_): void;
        needsVisit(arg0: $NodeId_): boolean;
        printTree(arg0: $NodeId_): void;
        constructor();
        constructor(arg0: number);
        get allNodes(): $Set<$NodeId>;
    }
}
