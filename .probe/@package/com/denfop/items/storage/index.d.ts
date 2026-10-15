import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $CreativeModeTab_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IProperties, $BaseEnergyItem } from "@package/com/denfop/items";
import { $List, $Map, $List_ } from "@package/java/util";
import { $PatternItem } from "@package/com/denfop/api/storage";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $CellInfo_, $ICellItem, $ItemStackCell, $CellInfo } from "@package/com/denfop/api/storage/cell";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $PatternStack } from "@package/com/denfop/api/storage/autocrafting";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Object } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IItemTab } from "@package/com/denfop/tabs";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/denfop/items/storage" {
    export class $ClientItemGridTooltipComponent implements $ClientTooltipComponent {
        getWidth(arg0: $Font): number;
        getHeight(): number;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        constructor(arg0: $ItemGridTooltipComponent_);
        get height(): number;
    }
    export class $ItemCell extends $Item implements $ICellItem, $IItemTab {
        getCellInfo(): $CellInfo;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getCell(arg0: $ItemStack_): $ItemStackCell;
        getItemCategory(): $CreativeModeTab;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        cellInfo: $CellInfo;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $CellInfo_);
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemGridTooltipComponent extends $Record implements $TooltipComponent {
        entries(): $List<$ItemGridTooltipComponent$Entry>;
        constructor(entries: $List_<$ItemGridTooltipComponent$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemGridTooltipComponent}.
     */
    export type $ItemGridTooltipComponent_ = { entries?: $List_<$ItemGridTooltipComponent$Entry_>,  } | [entries?: $List_<$ItemGridTooltipComponent$Entry_>, ];
    export class $ItemGridTooltipComponent$EntryItem extends $Record implements $ItemGridTooltipComponent$Entry {
        stack(): $ItemStack;
        count(): number;
        constructor(stack: $ItemStack_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $ItemGridTooltipComponent$EntryItem}.
     */
    export type $ItemGridTooltipComponent$EntryItem_ = { stack?: $ItemStack_, count?: number,  } | [stack?: $ItemStack_, count?: number, ];
    export class $ItemGridTooltipComponent$Entry {
    }
    export interface $ItemGridTooltipComponent$Entry {
        count(): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemGridTooltipComponent$Entry}.
     */
    export type $ItemGridTooltipComponent$Entry_ = (() => number);
    export class $ItemWirelessTerminal extends $BaseEnergyItem implements $IItemTab {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemGridTooltipComponent$EntryFluid extends $Record implements $ItemGridTooltipComponent$Entry {
        stack(): $FluidStack;
        count(): number;
        constructor(stack: $FluidStack_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $ItemGridTooltipComponent$EntryFluid}.
     */
    export type $ItemGridTooltipComponent$EntryFluid_ = { stack?: $FluidStack_, count?: number,  } | [stack?: $FluidStack_, count?: number, ];
    export class $ItemPattern extends $Item implements $PatternItem, $IItemTab, $IProperties {
        properties(): string[];
        getPreviewFluid(arg0: $ItemStack_, arg1: $HolderLookup$Provider): $FluidStack;
        getPreviewStack(arg0: $ItemStack_, arg1: $HolderLookup$Provider): $ItemStack;
        getPattern(arg0: $ItemStack_, arg1: $HolderLookup$Provider): $PatternStack;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        hasPattern(arg0: $ItemStack_): boolean;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
        get itemCategory(): $CreativeModeTab;
    }
}
