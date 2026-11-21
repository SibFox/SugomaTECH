import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ICodecHelper, $IGuiHelper } from "@package/mezz/jei/api/helpers";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List, $Set, $List_ } from "@package/java/util";
import { $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $IJeiVariantRecipe, $JeiInform, $IRecipeCategory } from "@package/com/denfop/integration/jei";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ScreenMain } from "@package/com/denfop/screen";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/com/denfop/integration/jei/inoculator" {
    export class $InoculatorHandler implements $IJeiVariantRecipe {
        getInput(): $ItemStack;
        getOutput(): $ItemStack;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_): $InoculatorHandler;
        static getRecipe(arg0: $ItemStack_): $InoculatorHandler;
        static getRecipes(): $List<$InoculatorHandler>;
        static initRecipes(): void;
        matchesInput(arg0: $ItemStack_): boolean;
        setInputVariants(arg0: $List_<$List_<$ItemStack_>>): void;
        getInputVariants(arg0: number, arg1: $ItemStack_): $List<$ItemStack>;
        getInput1(): $ItemStack;
        output: $ItemStack;
        input: $ItemStack;
        input1: $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        static get recipes(): $List<$InoculatorHandler>;
    }
    export class $InoculatorCategory extends $ScreenMain<any> implements $IRecipeCategory<$InoculatorHandler> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $InoculatorHandler, arg2: $IFocusGroup): void;
        getRecipeType(): $RecipeType<$InoculatorHandler>;
        draw(arg0: $InoculatorHandler, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTitles(): string;
        getBackground(): $IDrawable;
        getIcon(): $IDrawable;
        getWidth(): number;
        getHeight(): number;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$InoculatorHandler>;
        isHandled(arg0: $InoculatorHandler): boolean;
        getRegistryName(arg0: $InoculatorHandler): $ResourceLocation;
        getTooltip(arg0: $ITooltipBuilder, arg1: $InoculatorHandler, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        onDisplayedIngredientsUpdate(arg0: $InoculatorHandler, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        handleInput(arg0: $InoculatorHandler, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $InoculatorHandler, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $InoculatorHandler, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: $InoculatorHandler, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        needsRecipeBorder(): boolean;
        container: $InoculatorHandler;
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
        menu: $InoculatorHandler;
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
        get recipeType(): $RecipeType<$InoculatorHandler>;
        get titles(): string;
        get background(): $IDrawable;
        get icon(): $IDrawable;
    }
}
