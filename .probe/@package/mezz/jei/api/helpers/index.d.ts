import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IDrawableBuilder, $IDrawable, $IDrawableAnimated, $IDrawableAnimated$StartDirection_, $IDrawableStatic } from "@package/mezz/jei/api/gui/drawable";
import { $ICraftingGridHelper } from "@package/mezz/jei/api/gui/ingredient";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $List, $Set, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IIngredientVisibility, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $ITypedIngredient, $IIngredientHelper } from "@package/mezz/jei/api/ingredients";
import { $IRecipeManager, $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Object, $Class } from "@package/java/lang";
import { $IScrollGridWidgetFactory, $IScrollBoxWidget, $IRecipeWidget } from "@package/mezz/jei/api/gui/widgets";
import { $ITickTimer } from "@package/mezz/jei/api/gui";

declare module "@package/mezz/jei/api/helpers" {
    export class $ICodecHelper {
    }
    export interface $ICodecHelper {
        getRecipeHolderCodec<T extends $RecipeHolder<never>>(): $Codec<T>;
        getSlowRecipeCategoryCodec<T>(arg0: $IRecipeCategory<T>, arg1: $IRecipeManager): $Codec<T>;
        getRecipeTypeCodec(arg0: $IRecipeManager): $Codec<$RecipeType<never>>;
        getTypedIngredientCodec<T>(arg0: $IIngredientType_<T>): $Codec<$ITypedIngredient<T>>;
        getTypedIngredientCodec(): $MapCodec<$ITypedIngredient<never>>;
        getIngredientTypeCodec(): $Codec<$IIngredientType<never>>;
        get recipeHolderCodec(): $Codec<T>;
        get ingredientTypeCodec(): $Codec<$IIngredientType<never>>;
    }
    export class $IPlatformFluidHelper<T> {
    }
    export interface $IPlatformFluidHelper<T> {
        create(arg0: $Holder_<$Fluid>, arg1: number): T;
        create(arg0: $Holder_<$Fluid>, arg1: number, arg2: $DataComponentPatch_): T;
        bucketVolume(): number;
        getFluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
        get fluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
    }
    export class $IStackHelper {
    }
    export interface $IStackHelper {
        isEquivalent(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $UidContext_): boolean;
        getUidForStack(arg0: $ItemStack_, arg1: $UidContext_): $Object;
        getUidForStack(arg0: $ITypedIngredient<$ItemStack_>, arg1: $UidContext_): $Object;
        /**
         * @deprecated
         */
        getUniqueIdentifierForStack(arg0: $ItemStack_, arg1: $UidContext_): string;
    }
    export class $IJeiHelpers {
    }
    export interface $IJeiHelpers {
        getIngredientManager(): $IIngredientManager;
        getRecipeType(arg0: $ResourceLocation_): ($RecipeType<never>) | undefined;
        getRecipeType<T>(arg0: $ResourceLocation_, arg1: $Class<T>): ($RecipeType<T>) | undefined;
        getColorHelper(): $IColorHelper;
        getFocusFactory(): $IFocusFactory;
        getCodecHelper(): $ICodecHelper;
        getModIdHelper(): $IModIdHelper;
        getPlatformFluidHelper(): $IPlatformFluidHelper<never>;
        getAllRecipeTypes(): $Stream<$RecipeType<never>>;
        getStackHelper(): $IStackHelper;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getIngredientVisibility(): $IIngredientVisibility;
        getGuiHelper(): $IGuiHelper;
        get ingredientManager(): $IIngredientManager;
        get colorHelper(): $IColorHelper;
        get focusFactory(): $IFocusFactory;
        get codecHelper(): $ICodecHelper;
        get modIdHelper(): $IModIdHelper;
        get platformFluidHelper(): $IPlatformFluidHelper<never>;
        get allRecipeTypes(): $Stream<$RecipeType<never>>;
        get stackHelper(): $IStackHelper;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get ingredientVisibility(): $IIngredientVisibility;
        get guiHelper(): $IGuiHelper;
    }
    export class $IColorHelper {
    }
    export interface $IColorHelper {
        getColors(arg0: $TextureAtlasSprite, arg1: number, arg2: number): $List<number>;
        getColors(arg0: $ItemStack_, arg1: number): $List<number>;
        getClosestColorName(arg0: number): string;
    }
    export class $IModIdHelper {
    }
    export interface $IModIdHelper {
        getModAliases(arg0: string): $Set<string>;
        getModNameForModId(arg0: string): string;
        isDisplayingModNameEnabled(): boolean;
        getModNameForTooltip<T>(arg0: $ITypedIngredient<T>): ($Component) | undefined;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: $ITypedIngredient<T>): $List<$Component>;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: T, arg2: $IIngredientHelper<T>): $List<$Component>;
        getFormattedModNameForModId(arg0: string): string;
        get displayingModNameEnabled(): boolean;
    }
    export class $IGuiHelper {
    }
    export interface $IGuiHelper {
        getOutputSlot(): $IDrawableStatic;
        createDrawable(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableStatic;
        createBlankDrawable(arg0: number, arg1: number): $IDrawableStatic;
        getRecipeArrowFilled(): $IDrawableStatic;
        getRecipeArrow(): $IDrawableStatic;
        getRecipePlusSign(): $IDrawableStatic;
        getSlotDrawable(): $IDrawableStatic;
        drawableBuilder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableBuilder;
        createTickTimer(arg0: number, arg1: number, arg2: boolean): $ITickTimer;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: $ITickTimer, arg2: $IDrawableAnimated$StartDirection_): $IDrawableAnimated;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: number, arg2: $IDrawableAnimated$StartDirection_, arg3: boolean): $IDrawableAnimated;
        /**
         * @deprecated
         */
        createScrollGridFactory(arg0: number, arg1: number): $IScrollGridWidgetFactory<never>;
        createAnimatedRecipeArrow(arg0: number): $IDrawableAnimated;
        getRecipeFlameFilled(): $IDrawableStatic;
        getRecipeFlameEmpty(): $IDrawableStatic;
        createDrawableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): $IDrawable;
        createDrawableIngredient<V>(arg0: $ITypedIngredient<V>): $IDrawable;
        createAnimatedRecipeFlame(arg0: number): $IDrawableAnimated;
        createWidgetFromDrawable(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeWidget;
        /**
         * @deprecated
         */
        createScrollBoxWidget(arg0: $IDrawable, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createDrawableItemStack(arg0: $ItemStack_): $IDrawable;
        createDrawableItemLike(arg0: $ItemLike_): $IDrawable;
        createCraftingGridHelper(): $ICraftingGridHelper;
        /**
         * @deprecated
         */
        getScrollBoxScrollbarExtraWidth(): number;
        get outputSlot(): $IDrawableStatic;
        get recipeArrowFilled(): $IDrawableStatic;
        get recipeArrow(): $IDrawableStatic;
        get recipePlusSign(): $IDrawableStatic;
        get slotDrawable(): $IDrawableStatic;
        get recipeFlameFilled(): $IDrawableStatic;
        get recipeFlameEmpty(): $IDrawableStatic;
        get scrollBoxScrollbarExtraWidth(): number;
    }
}
