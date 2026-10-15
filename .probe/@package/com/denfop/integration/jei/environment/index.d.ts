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
import { $JeiInform, $IRecipeCategory } from "@package/com/denfop/integration/jei";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ScreenMain } from "@package/com/denfop/screen";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/com/denfop/integration/jei/environment" {
    export class $EnvironmentalTransformationHandler$Type extends $Enum<$EnvironmentalTransformationHandler$Type> {
        static values(): $EnvironmentalTransformationHandler$Type[];
        static valueOf(arg0: string): $EnvironmentalTransformationHandler$Type;
        static SALTPETER_FROM_MUD: $EnvironmentalTransformationHandler$Type;
        static PEAT_FROM_COMPOSTER: $EnvironmentalTransformationHandler$Type;
    }
    /**
     * Values that may be interpreted as {@link $EnvironmentalTransformationHandler$Type}.
     */
    export type $EnvironmentalTransformationHandler$Type_ = "peat_from_composter" | "saltpeter_from_mud";
    export class $EnvironmentalTransformationCategory extends $ScreenMain<any> implements $IRecipeCategory<$EnvironmentalTransformationHandler> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $EnvironmentalTransformationHandler, arg2: $IFocusGroup): void;
        getRecipeType(): $RecipeType<$EnvironmentalTransformationHandler>;
        draw(arg0: $EnvironmentalTransformationHandler, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTitles(): string;
        getTooltipStrings(arg0: $EnvironmentalTransformationHandler, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        getBackground(): $IDrawable;
        getIcon(): $IDrawable;
        getWidth(): number;
        getHeight(): number;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$EnvironmentalTransformationHandler>;
        isHandled(arg0: $EnvironmentalTransformationHandler): boolean;
        getRegistryName(arg0: $EnvironmentalTransformationHandler): $ResourceLocation;
        getTooltip(arg0: $ITooltipBuilder, arg1: $EnvironmentalTransformationHandler, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        onDisplayedIngredientsUpdate(arg0: $EnvironmentalTransformationHandler, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        handleInput(arg0: $EnvironmentalTransformationHandler, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $EnvironmentalTransformationHandler, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $EnvironmentalTransformationHandler, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        needsRecipeBorder(): boolean;
        container: $EnvironmentalTransformationHandler;
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
        menu: $EnvironmentalTransformationHandler;
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
        get recipeType(): $RecipeType<$EnvironmentalTransformationHandler>;
        get titles(): string;
        get background(): $IDrawable;
        get icon(): $IDrawable;
    }
    export class $EnvironmentalTransformationHandler {
        getType(): $EnvironmentalTransformationHandler$Type;
        getIntermediateOutput(): $ItemStack;
        getTotalTimeSeconds(): number;
        hasIntermediateOutput(): boolean;
        getDescriptionKey(): string;
        static addRecipe(arg0: $EnvironmentalTransformationHandler$Type_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_, arg5: string, arg6: string, arg7: number): $EnvironmentalTransformationHandler;
        static getRecipes(): $List<$EnvironmentalTransformationHandler>;
        static initRecipes(): void;
        getFinalOutput(): $ItemStack;
        getFirstInput(): $ItemStack;
        getTitleKey(): string;
        getSecondInput(): $ItemStack;
        getTotalTimeTicks(): number;
        hasSecondInput(): boolean;
        constructor(arg0: $EnvironmentalTransformationHandler$Type_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_, arg5: string, arg6: string, arg7: number);
        get type(): $EnvironmentalTransformationHandler$Type;
        get intermediateOutput(): $ItemStack;
        get totalTimeSeconds(): number;
        get descriptionKey(): string;
        static get recipes(): $List<$EnvironmentalTransformationHandler>;
        get finalOutput(): $ItemStack;
        get firstInput(): $ItemStack;
        get titleKey(): string;
        get secondInput(): $ItemStack;
        get totalTimeTicks(): number;
    }
}
