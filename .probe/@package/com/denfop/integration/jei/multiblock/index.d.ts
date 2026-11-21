import { $Codec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $MultiBlockStructure } from "@package/com/denfop/api/multiblock";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Set, $List_ } from "@package/java/util";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record } from "@package/java/lang";
import { $ScreenMain } from "@package/com/denfop/screen";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ICodecHelper, $IGuiHelper } from "@package/mezz/jei/api/helpers";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $IInteractiveJeiCategory, $JeiInform, $IRecipeCategory } from "@package/com/denfop/integration/jei";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/com/denfop/integration/jei/multiblock" {
    export class $MultiBlockJeiRenderer {
        static render(arg0: $GuiGraphics, arg1: $MultiBlockStructure, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $MultiBlockJeiRenderer$LayerMode_, arg9: number, arg10: number, arg11: number): $MultiBlockJeiRenderer$HoveredBlock;
        static getVisibleLayerIndex(arg0: $MultiBlockStructure, arg1: $MultiBlockJeiRenderer$LayerMode_, arg2: number): number;
        static findHoveredBlock(arg0: $MultiBlockStructure, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MultiBlockJeiRenderer$LayerMode_, arg8: number, arg9: number, arg10: number): $MultiBlockJeiRenderer$HoveredBlock;
    }
    export class $MultiBlockJeiRenderer$HoveredBlock extends $Record {
        stack(): $ItemStack;
        direction(): $Direction;
        relativePos(): $BlockPos;
        constructor(relativePos: $BlockPos_, stack: $ItemStack_, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $MultiBlockJeiRenderer$HoveredBlock}.
     */
    export type $MultiBlockJeiRenderer$HoveredBlock_ = { stack?: $ItemStack_, relativePos?: $BlockPos_, direction?: $Direction_,  } | [stack?: $ItemStack_, relativePos?: $BlockPos_, direction?: $Direction_, ];
    export class $MultiBlockJeiRenderer$LayerMode extends $Enum<$MultiBlockJeiRenderer$LayerMode> {
        static values(): $MultiBlockJeiRenderer$LayerMode[];
        static valueOf(arg0: string): $MultiBlockJeiRenderer$LayerMode;
        static AUTO: $MultiBlockJeiRenderer$LayerMode;
        static ALL: $MultiBlockJeiRenderer$LayerMode;
        static SINGLE: $MultiBlockJeiRenderer$LayerMode;
    }
    /**
     * Values that may be interpreted as {@link $MultiBlockJeiRenderer$LayerMode}.
     */
    export type $MultiBlockJeiRenderer$LayerMode_ = "auto" | "all" | "single";
    export class $MultiBlockCategory extends $ScreenMain<any> implements $IRecipeCategory<$MultiBlockHandler>, $IInteractiveJeiCategory<$MultiBlockHandler> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $MultiBlockHandler, arg2: $IFocusGroup): void;
        getRecipeType(): $RecipeType<$MultiBlockHandler>;
        draw(arg0: $MultiBlockHandler, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTitles(): string;
        handleInput(arg0: $MultiBlockHandler, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        getTooltipStrings(arg0: $MultiBlockHandler, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        getBackground(): $IDrawable;
        getIcon(): $IDrawable;
        getWidth(): number;
        getHeight(): number;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$MultiBlockHandler>;
        isHandled(arg0: $MultiBlockHandler): boolean;
        getRegistryName(arg0: $MultiBlockHandler): $ResourceLocation;
        getTooltip(arg0: $ITooltipBuilder, arg1: $MultiBlockHandler, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        onDisplayedIngredientsUpdate(arg0: $MultiBlockHandler, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $MultiBlockHandler, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $MultiBlockHandler, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        needsRecipeBorder(): boolean;
        container: $MultiBlockHandler;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static currentTexture: $ResourceLocation;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $MultiBlockHandler;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        isBlack: boolean;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $IGuiHelper, arg1: $JeiInform<any, any>);
        get recipeType(): $RecipeType<$MultiBlockHandler>;
        get titles(): string;
        get background(): $IDrawable;
        get icon(): $IDrawable;
    }
    export class $MultiBlockHandler {
        getName(): string;
        getDisplayName(): $Component;
        getStructure(): $MultiBlockStructure;
        getTypeCount(): number;
        static addRecipe(arg0: string, arg1: $MultiBlockStructure): $MultiBlockHandler;
        static getRecipes(): $List<$MultiBlockHandler>;
        static initRecipes(): void;
        getIngredientStacks(): $List<$ItemStack>;
        getBlockCount(): number;
        getLayerCount(): number;
        static refreshRecipes(): void;
        getCatalystStack(): $ItemStack;
        constructor(arg0: string, arg1: $MultiBlockStructure);
        get name(): string;
        get displayName(): $Component;
        get structure(): $MultiBlockStructure;
        get typeCount(): number;
        static get recipes(): $List<$MultiBlockHandler>;
        get ingredientStacks(): $List<$ItemStack>;
        get blockCount(): number;
        get layerCount(): number;
        get catalystStack(): $ItemStack;
    }
}
