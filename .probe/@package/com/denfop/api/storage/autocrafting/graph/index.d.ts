import { $ItemStack } from "@package/net/minecraft/world/item";
import { $PatternStack_, $SameStack, $PatternStack } from "@package/com/denfop/api/storage/autocrafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Set_, $List, $List_, $Collection, $Set } from "@package/java/util";
import { $ScreenIndustrialUpgrade } from "@package/com/denfop/screen";

declare module "@package/com/denfop/api/storage/autocrafting/graph" {
    export class $CraftGraphBuilder {
        buildGraph(arg0: $List_<$PatternStack_>, arg1: $SameStack): $CraftGraph;
        static getNodeIcon(arg0: $SameStack): $ItemStack;
        static getNodeTitle(arg0: $SameStack): string;
        constructor();
    }
    export class $CraftGraph {
        size(): number;
        getNode(arg0: number): $CraftNode;
        addNode(arg0: $CraftNode): void;
        addEdge(arg0: $CraftEdge): void;
        getNodes(): $Collection<$CraftNode>;
        getEdges(): $List<$CraftEdge>;
        collectDescendantsInclusive(arg0: number): $Set<number>;
        getRootNodeId(): number;
        collectAncestorsInclusive(arg0: number): $Set<number>;
        setLayoutDirty(arg0: boolean): void;
        isLayoutDirty(): boolean;
        setRootNodeId(arg0: number): void;
        constructor();
        get nodes(): $Collection<$CraftNode>;
        get edges(): $List<$CraftEdge>;
    }
    export class $CraftEdge {
        getFromNodeId(): number;
        getToNodeId(): number;
        constructor(arg0: number, arg1: number);
        get fromNodeId(): number;
        get toNodeId(): number;
    }
    export class $CraftGraphRenderer {
        render(arg0: $GuiGraphics, arg1: $CraftGraph, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: $Set_<number>): void;
        buildTooltip(arg0: $CraftNode): $List<$Component>;
        findHoveredNode(arg0: $CraftGraph, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): number;
        constructor(arg0: $Minecraft, arg1: $ScreenIndustrialUpgrade<never>);
    }
    export class $CraftGraphLayout {
        layout(arg0: $CraftGraph): void;
        static V_SPACING: number;
        static NODE_HEIGHT: number;
        static H_SPACING: number;
        static NODE_WIDTH: number;
        constructor();
    }
    export class $CraftGraphRenderer$Rect {
    }
    export class $CraftNodeType extends $Enum<$CraftNodeType> {
        static values(): $CraftNodeType[];
        static valueOf(arg0: string): $CraftNodeType;
        static TARGET: $CraftNodeType;
        static CRAFTABLE: $CraftNodeType;
        static MISSING: $CraftNodeType;
        static RESOURCE: $CraftNodeType;
        static CYCLE: $CraftNodeType;
    }
    /**
     * Values that may be interpreted as {@link $CraftNodeType}.
     */
    export type $CraftNodeType_ = "target" | "craftable" | "resource" | "cycle" | "missing";
    export class $CraftGraphRenderer$ScreenPoint extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CraftGraphRenderer$ScreenPoint}.
     */
    export type $CraftGraphRenderer$ScreenPoint_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $CraftNode {
        setCraftTime(arg0: number): void;
        setAvailableAmount(arg0: number): void;
        getMatchedOutput(): $SameStack;
        getId(): number;
        getType(): $CraftNodeType;
        getStack(): $SameStack;
        getChildren(): $List<number>;
        addParent(arg0: number): void;
        getPattern(): $PatternStack;
        getCacheKey(): string;
        addChild(arg0: number): void;
        getY(): number;
        getParents(): $List<number>;
        setPattern(arg0: $PatternStack_): void;
        getDepth(): number;
        getX(): number;
        isExpanded(): boolean;
        setX(arg0: number): void;
        setY(arg0: number): void;
        setExpanded(arg0: boolean): void;
        isItem(): boolean;
        setDepth(arg0: number): void;
        getRequiredAmount(): number;
        setRequiredAmount(arg0: number): void;
        setMatchedOutput(arg0: $SameStack): void;
        setCraftAmount(arg0: number): void;
        getAvailableAmount(): number;
        getCraftTime(): number;
        getCraftAmount(): number;
        getDisplayItemStack(): $ItemStack;
        constructor(arg0: number, arg1: $SameStack, arg2: $CraftNodeType_);
        get id(): number;
        get type(): $CraftNodeType;
        get stack(): $SameStack;
        get children(): $List<number>;
        get cacheKey(): string;
        get parents(): $List<number>;
        get item(): boolean;
        get displayItemStack(): $ItemStack;
    }
}
