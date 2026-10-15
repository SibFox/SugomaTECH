import { $Codec } from "@package/com/mojang/serialization";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiProperties, $IGhostIngredientHandler, $IGuiClickableArea } from "@package/mezz/jei/api/gui/handlers";
import { $IJeiHelpers } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager } from "@package/mezz/jei/api/runtime/config";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List, $Set, $Collection_, $List_, $Collection } from "@package/java/util";
import { $IRecipeTransferManager } from "@package/mezz/jei/api/recipe/transfer";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IClickableIngredientFactory } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $IIngredientType_, $IIngredientRenderer, $IIngredientTypeWithSubtypes, $IIngredientType, $ITypedIngredient, $IIngredientHelper } from "@package/mezz/jei/api/ingredients";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $IRecipeManager, $RecipeType, $IFocus } from "@package/mezz/jei/api/recipe";
import { $Enum, $Class } from "@package/java/lang";
export * as config from "@package/mezz/jei/api/runtime/config";

declare module "@package/mezz/jei/api/runtime" {
    export class $IEditModeConfig$HideMode extends $Enum<$IEditModeConfig$HideMode> {
        static values(): $IEditModeConfig$HideMode[];
        static valueOf(arg0: string): $IEditModeConfig$HideMode;
        static WILDCARD: $IEditModeConfig$HideMode;
        static SINGLE: $IEditModeConfig$HideMode;
    }
    /**
     * Values that may be interpreted as {@link $IEditModeConfig$HideMode}.
     */
    export type $IEditModeConfig$HideMode_ = "single" | "wildcard";
    export class $IClickableIngredient<T> {
    }
    export interface $IClickableIngredient<T> {
        getArea(): $Rect2i;
        getTypedIngredient(): $ITypedIngredient<T>;
        /**
         * @deprecated
         */
        getIngredient(): T;
        /**
         * @deprecated
         */
        getIngredientType(): $IIngredientType<T>;
        get area(): $Rect2i;
        get typedIngredient(): $ITypedIngredient<T>;
        get ingredient(): T;
        get ingredientType(): $IIngredientType<T>;
    }
    export class $IIngredientManager$IIngredientListener {
    }
    export interface $IIngredientManager$IIngredientListener {
        onIngredientsRemoved<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
        onIngredientsAdded<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
    }
    export class $IEditModeConfig {
    }
    export interface $IEditModeConfig {
        hideIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
        getIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): $Set<$IEditModeConfig$HideMode>;
        showIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
        isIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): boolean;
    }
    export class $IScreenHelper {
    }
    export interface $IScreenHelper {
        getClickableIngredientUnderMouse(arg0: $Screen, arg1: number, arg2: number): $Stream<$IClickableIngredient<never>>;
        getGuiExclusionAreas(arg0: $Screen): $Stream<$Rect2i>;
        getGuiProperties<T extends $Screen>(arg0: T): ($IGuiProperties) | undefined;
        getGhostIngredientHandlers<T extends $Screen>(arg0: T): $List<$IGhostIngredientHandler<T>>;
        getGuiClickableArea(arg0: $AbstractContainerScreen<never>, arg1: number, arg2: number): $Stream<$IGuiClickableArea>;
        /**
         * @deprecated
         */
        getGhostIngredientHandler<T extends $Screen>(arg0: T): ($IGhostIngredientHandler<T>) | undefined;
    }
    export class $IJeiKeyMapping {
    }
    export interface $IJeiKeyMapping {
        isUnbound(): boolean;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        getTranslatedKeyMessage(): $Component;
        get unbound(): boolean;
        get translatedKeyMessage(): $Component;
    }
    export class $IJeiKeyMappings {
    }
    export interface $IJeiKeyMappings {
        getShowRecipe(): $IJeiKeyMapping;
        getShowUses(): $IJeiKeyMapping;
        get showRecipe(): $IJeiKeyMapping;
        get showUses(): $IJeiKeyMapping;
    }
    export class $IJeiRuntime {
    }
    export interface $IJeiRuntime {
        getIngredientManager(): $IIngredientManager;
        getKeyMappings(): $IJeiKeyMappings;
        getRecipeManager(): $IRecipeManager;
        getScreenHelper(): $IScreenHelper;
        getConfigManager(): $IJeiConfigManager;
        getBookmarkOverlay(): $IBookmarkOverlay;
        getEditModeConfig(): $IEditModeConfig;
        getRecipesGui(): $IRecipesGui;
        getRecipeTransferManager(): $IRecipeTransferManager;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getIngredientListOverlay(): $IIngredientListOverlay;
        getIngredientFilter(): $IIngredientFilter;
        getJeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
        get keyMappings(): $IJeiKeyMappings;
        get recipeManager(): $IRecipeManager;
        get screenHelper(): $IScreenHelper;
        get configManager(): $IJeiConfigManager;
        get bookmarkOverlay(): $IBookmarkOverlay;
        get editModeConfig(): $IEditModeConfig;
        get recipesGui(): $IRecipesGui;
        get recipeTransferManager(): $IRecipeTransferManager;
        get ingredientVisibility(): $IIngredientVisibility;
        get ingredientListOverlay(): $IIngredientListOverlay;
        get ingredientFilter(): $IIngredientFilter;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IBookmarkOverlay {
    }
    export interface $IBookmarkOverlay {
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getItemStackUnderMouse(): $ItemStack;
        get itemStackUnderMouse(): $ItemStack;
    }
    export class $IIngredientListOverlay {
    }
    export interface $IIngredientListOverlay {
        hasKeyboardFocus(): boolean;
        isListDisplayed(): boolean;
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getVisibleIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        get listDisplayed(): boolean;
    }
    export class $IJeiFeatures {
    }
    export interface $IJeiFeatures {
        disableInventoryEffectRendererGuiHandler(): void;
    }
    /**
     * Values that may be interpreted as {@link $IJeiFeatures}.
     */
    export type $IJeiFeatures_ = (() => void);
    export class $IRecipesGui {
    }
    export interface $IRecipesGui {
        show<V>(arg0: $IFocus<V>): void;
        show(arg0: $List_<$IFocus<never>>): void;
        getParentScreen(): ($Screen) | undefined;
        showRecipes<T>(arg0: $IRecipeCategory<T>, arg1: $List_<T>, arg2: $List_<$IFocus<never>>): void;
        showTypes(arg0: $List_<$RecipeType<never>>): void;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        get parentScreen(): ($Screen) | undefined;
    }
    export class $IIngredientVisibility$IListener {
    }
    export interface $IIngredientVisibility$IListener {
        onIngredientVisibilityChanged<V>(arg0: $ITypedIngredient<V>, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientVisibility$IListener}.
     */
    export type $IIngredientVisibility$IListener_ = ((arg0: $ITypedIngredient<any>, arg1: boolean) => void);
    export class $IIngredientManager {
    }
    export interface $IIngredientManager {
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): ($ITypedIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: V): ($ITypedIngredient<V>) | undefined;
        createTypedIngredient<T>(arg0: T, arg1: boolean): ($ITypedIngredient<T>) | undefined;
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: boolean): ($ITypedIngredient<V>) | undefined;
        getIngredientHelper<V>(arg0: $IIngredientType_<V>): $IIngredientHelper<V>;
        getIngredientHelper<V>(arg0: V): $IIngredientHelper<V>;
        getIngredientTypeWithSubtypesFromBase<B, I>(arg0: B): ($IIngredientTypeWithSubtypes<B, I>) | undefined;
        getRegisteredIngredientTypes(): $Collection<$IIngredientType<never>>;
        getIngredientTypeChecked<V>(arg0: $Class<V>): ($IIngredientType<V>) | undefined;
        getIngredientTypeChecked<V>(arg0: V): ($IIngredientType<V>) | undefined;
        addIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getIngredientType<V>(arg0: V): $IIngredientType<V>;
        removeIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getIngredientRenderer<V>(arg0: V): $IIngredientRenderer<V>;
        getIngredientRenderer<V>(arg0: $IIngredientType_<V>): $IIngredientRenderer<V>;
        getAllIngredients<V>(arg0: $IIngredientType_<V>): $Collection<V>;
        getIngredientCodec<V>(arg0: $IIngredientType_<V>): $Codec<V>;
        getAllItemStacks(): $Collection<$ItemStack>;
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: V, arg1: $Rect2i, arg2: boolean): ($IClickableIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: $Rect2i, arg3: boolean): ($IClickableIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        getTypedIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): ($ITypedIngredient<V>) | undefined;
        normalizeTypedIngredient<V>(arg0: $ITypedIngredient<V>): $ITypedIngredient<V>;
        getIngredientTypeForUid(arg0: string): ($IIngredientType<never>) | undefined;
        registerIngredientListener(arg0: $IIngredientManager$IIngredientListener): void;
        getAllTypedIngredients<V>(arg0: $IIngredientType_<V>): $Collection<$ITypedIngredient<V>>;
        getIngredientAliases(arg0: $ITypedIngredient<never>): $Collection<string>;
        /**
         * @deprecated
         */
        getIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): (V) | undefined;
        getClickableIngredientFactory(): $IClickableIngredientFactory;
        get registeredIngredientTypes(): $Collection<$IIngredientType<never>>;
        get allItemStacks(): $Collection<$ItemStack>;
        get clickableIngredientFactory(): $IClickableIngredientFactory;
    }
    export class $IIngredientVisibility {
    }
    export interface $IIngredientVisibility {
        registerListener(arg0: $IIngredientVisibility$IListener_): void;
        isIngredientVisible<V>(arg0: $ITypedIngredient<V>): boolean;
        isIngredientVisible<V>(arg0: $IIngredientType_<V>, arg1: V): boolean;
    }
    export class $IIngredientFilter {
    }
    export interface $IIngredientFilter {
        getFilterText(): string;
        setFilterText(arg0: string): void;
        getFilteredItemStacks(): $List<$ItemStack>;
        getFilteredIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        get filteredItemStacks(): $List<$ItemStack>;
    }
}
