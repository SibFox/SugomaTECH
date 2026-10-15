import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $CraftingBookCategory, $CraftingInput, $CraftingBookCategory_, $Ingredient, $CraftingRecipe, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $List, $List_ } from "@package/java/util";
import { $ShapedRecipePattern, $IInputItemStack } from "@package/com/denfop/recipe";
export * as element from "@package/com/denfop/api/crafting/element";

declare module "@package/com/denfop/api/crafting" {
    export class $PartRecipe {
        encode(arg0: $CustomPacketBuffer): void;
        getIndex(): string;
        getInput(): $IInputItemStack;
        constructor(arg0: string, arg1: $IInputItemStack);
        get index(): string;
        get input(): $IInputItemStack;
    }
    export class $BaseRecipe implements $CraftingRecipe {
        matches(arg0: $CraftingInput): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static create(arg0: $CustomPacketBuffer): $BaseRecipe;
        category(): $CraftingBookCategory;
        getInput(): $IInputItemStack[];
        getWidth(): number;
        getHeight(): number;
        getPattern(): $ShapedRecipePattern;
        getOutput(): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        toNetwork(arg0: $RegistryFriendlyByteBuf): void;
        getListInput(): $NonNullList<$IInputItemStack>;
        getPartRecipe(): $List<$PartRecipe>;
        getInputIndex(): number[];
        getRecipeGrid(): $RecipeGrid;
        getType(): $RecipeType<never>;
        getGroup(): string;
        isSpecial(): boolean;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: string, arg1: $CraftingBookCategory_, arg2: $ItemStack_, arg3: $RecipeGrid, arg4: $List_<$PartRecipe>);
        constructor(arg0: $ItemStack_, arg1: $RecipeGrid, arg2: $List_<$PartRecipe>);
        get input(): $IInputItemStack[];
        get width(): number;
        get height(): number;
        get pattern(): $ShapedRecipePattern;
        get output(): $ItemStack;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get listInput(): $NonNullList<$IInputItemStack>;
        get partRecipe(): $List<$PartRecipe>;
        get inputIndex(): number[];
        get recipeGrid(): $RecipeGrid;
        get type(): $RecipeType<never>;
        get group(): string;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $BaseShapelessRecipe implements $CraftingRecipe {
        matches(arg0: $CraftingInput): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        static create(arg0: $CustomPacketBuffer): $BaseShapelessRecipe;
        category(): $CraftingBookCategory;
        getOutput(): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        toNetwork(arg0: $RegistryFriendlyByteBuf): void;
        getRecipeInputList(): $List<$IInputItemStack>;
        getGroup(): string;
        isSpecial(): boolean;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $List_<$IInputItemStack>);
        get type(): $RecipeType<never>;
        get output(): $ItemStack;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get recipeInputList(): $List<$IInputItemStack>;
        get group(): string;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $RecipeGrid {
        encode(arg0: $CustomPacketBuffer): void;
        getIndex(): number;
        getArgs(): $List<string>;
        getCharactersList(): $List<string>;
        getGrids(): $List<$List<string>>;
        isHasTwoX(): boolean;
        isHasTwoY(): boolean;
        getY2(): number;
        getX2(): number;
        constructor(arg0: $List_<string>);
        get index(): number;
        get args(): $List<string>;
        get charactersList(): $List<string>;
        get grids(): $List<$List<string>>;
        get hasTwoX(): boolean;
        get hasTwoY(): boolean;
        get y2(): number;
        get x2(): number;
    }
}
