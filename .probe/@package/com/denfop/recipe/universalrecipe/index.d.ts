import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Recipe, $CraftingInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $EnumLevels_, $EnumType_, $EnumLevels, $EnumType } from "@package/com/denfop/api/space";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Object } from "@package/java/lang";
import { $IInputItemStack } from "@package/com/denfop/recipe";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/denfop/recipe/universalrecipe" {
    export class $AsteroidSerializer implements $RecipeSerializer<$AsteroidRecipe> {
        codec(): $MapCodec<$AsteroidRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AsteroidRecipe>;
        static MAP_CODEC: $MapCodec<$AsteroidRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AsteroidRecipe>;
        constructor();
    }
    export class $ColonySerializer implements $RecipeSerializer<$ColonyRecipe> {
        codec(): $MapCodec<$ColonyRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ColonyRecipe>;
        static MAP_CODEC: $MapCodec<$ColonyRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ColonyRecipe>;
        constructor();
    }
    export class $PlanetSerializer implements $RecipeSerializer<$PlanetRecipe> {
        codec(): $MapCodec<$PlanetRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $PlanetRecipe>;
        static stringList: $List<string>;
        static MAP_CODEC: $MapCodec<$PlanetRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PlanetRecipe>;
        constructor();
    }
    export class $IURecipeSerializer implements $RecipeSerializer<$IURecipe> {
        codec(): $MapCodec<$IURecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IURecipe>;
        static MAP_CODEC: $MapCodec<$IURecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IURecipe>;
        constructor();
    }
    export class $ColonyRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getInputs(): $List<$IInputItemStack>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: string, arg1: $List_<$IInputItemStack>, arg2: number);
        get type(): $RecipeType<never>;
        get inputs(): $List<$IInputItemStack>;
        get serializer(): $RecipeSerializer<never>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $IURecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getFluidStacks(): $List<$FluidStack>;
        getOutputs(): $List<$ItemStack>;
        getInputs(): $List<$IInputItemStack>;
        getParams(): $Map<string, $Object>;
        getRecipeType(): string;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        isFluid(): boolean;
        getParamsTag(): $CompoundTag;
        getOutputsFluid(): $List<$FluidStack>;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: string, arg1: boolean, arg2: $List_<$IInputItemStack>, arg3: $List_<$FluidStack_>, arg4: $List_<$ItemStack_>, arg5: $List_<$FluidStack_>, arg6: $Map_<string, $Object>);
        get type(): $RecipeType<never>;
        get fluidStacks(): $List<$FluidStack>;
        get outputs(): $List<$ItemStack>;
        get inputs(): $List<$IInputItemStack>;
        get params(): $Map<string, $Object>;
        get recipeType(): string;
        get serializer(): $RecipeSerializer<never>;
        get fluid(): boolean;
        get paramsTag(): $CompoundTag;
        get outputsFluid(): $List<$FluidStack>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $SatelliteSerializer implements $RecipeSerializer<$SatelliteRecipe> {
        codec(): $MapCodec<$SatelliteRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SatelliteRecipe>;
        static MAP_CODEC: $MapCodec<$SatelliteRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SatelliteRecipe>;
        constructor();
    }
    export class $SmelteryRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getOutputs(): $List<$IInputItemStack>;
        getInputs(): $List<$IInputItemStack>;
        getOperation(): string;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: string, arg1: $List_<$IInputItemStack>, arg2: $List_<$IInputItemStack>);
        get type(): $RecipeType<never>;
        get outputs(): $List<$IInputItemStack>;
        get inputs(): $List<$IInputItemStack>;
        get operation(): string;
        get serializer(): $RecipeSerializer<never>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $IURecipeDelete implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRecipeType(): string;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        isFluid(): boolean;
        isRemoveAll(): boolean;
        getInputsAll(): $List<$IInputItemStack>;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: string, arg1: boolean, arg2: $List_<$IInputItemStack>, arg3: boolean);
        get type(): $RecipeType<never>;
        get recipeType(): string;
        get serializer(): $RecipeSerializer<never>;
        get fluid(): boolean;
        get removeAll(): boolean;
        get inputsAll(): $List<$IInputItemStack>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $QuantumQuarryRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getInputs(): $List<$IInputItemStack>;
        getRecipeType(): string;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getTypeOperation(): string;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: string, arg1: string, arg2: $List_<$IInputItemStack>);
        get type(): $RecipeType<never>;
        get inputs(): $List<$IInputItemStack>;
        get recipeType(): string;
        get serializer(): $RecipeSerializer<never>;
        get typeOperation(): string;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $SystemSerializer implements $RecipeSerializer<$SystemRecipe> {
        codec(): $MapCodec<$SystemRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SystemRecipe>;
        static MAP_CODEC: $MapCodec<$SystemRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SystemRecipe>;
        constructor();
    }
    export class $StarSerializer implements $RecipeSerializer<$StarRecipe> {
        codec(): $MapCodec<$StarRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $StarRecipe>;
        static MAP_CODEC: $MapCodec<$StarRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StarRecipe>;
        constructor();
    }
    export class $PlanetRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        distance: number;
        level: $EnumLevels;
        rotation: number;
        pressure: boolean;
        type: $EnumType;
        texturePath: string;
        systemName: string;
        size: number;
        starName: string;
        name: string;
        temperature: number;
        angle: number;
        colonies: boolean;
        time: number;
        oxygen: boolean;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $EnumLevels_, arg4: string, arg5: number, arg6: boolean, arg7: number, arg8: $EnumType_, arg9: boolean, arg10: boolean, arg11: number, arg12: number, arg13: number, arg14: number);
        get serializer(): $RecipeSerializer<never>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $SystemRecipe implements $Recipe<$CraftingInput> {
        getName(): string;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getDistanceFromStar(): number;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: string, arg1: number);
        get name(): string;
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get distanceFromStar(): number;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $StarRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        systemName: string;
        size: number;
        name: string;
        angle: number;
        texturePath: string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number);
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $SpaceBodyRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        percent(): number;
        getInputs(): $List<$IInputItemStack>;
        chance(): number;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        typeRover(): string;
        bodyName(): string;
        typeOperation(): string;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        input: $List<$IInputItemStack>;
        roverType: string;
        operationType: string;
        constructor(arg0: string, arg1: number, arg2: number, arg3: string, arg4: string, arg5: $List_<$IInputItemStack>);
        get type(): $RecipeType<never>;
        get inputs(): $List<$IInputItemStack>;
        get serializer(): $RecipeSerializer<never>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $SpaceBodySerializer implements $RecipeSerializer<$SpaceBodyRecipe> {
        codec(): $MapCodec<$SpaceBodyRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SpaceBodyRecipe>;
        static MAP_CODEC: $MapCodec<$SpaceBodyRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SpaceBodyRecipe>;
        constructor();
    }
    export class $SmelterSerializer implements $RecipeSerializer<$SmelteryRecipe> {
        codec(): $MapCodec<$SmelteryRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmelteryRecipe>;
        static MAP_CODEC: $MapCodec<$SmelteryRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmelteryRecipe>;
        constructor();
    }
    export class $AsteroidRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        amount: number;
        distance: number;
        level: $EnumLevels;
        rotation: number;
        maxLocation: number;
        type: $EnumType;
        texturePath: string;
        systemName: string;
        size: number;
        starName: string;
        minLocation: number;
        name: string;
        temperature: number;
        angle: number;
        colonies: boolean;
        time: number;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $EnumLevels_, arg4: string, arg5: number, arg6: number, arg7: $EnumType_, arg8: boolean, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number);
        get serializer(): $RecipeSerializer<never>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $SatelliteRecipe implements $Recipe<$CraftingInput> {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        planetName: string;
        distance: number;
        level: $EnumLevels;
        rotation: number;
        pressure: boolean;
        type: $EnumType;
        texturePath: string;
        systemName: string;
        size: number;
        name: string;
        temperature: number;
        angle: number;
        colonies: boolean;
        time: number;
        oxygen: boolean;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $EnumLevels_, arg4: string, arg5: number, arg6: boolean, arg7: number, arg8: $EnumType_, arg9: boolean, arg10: boolean, arg11: number, arg12: number, arg13: number, arg14: number);
        get serializer(): $RecipeSerializer<never>;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $IUDeleteRecipeSerializer implements $RecipeSerializer<$IURecipeDelete> {
        codec(): $MapCodec<$IURecipeDelete>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IURecipeDelete>;
        static MAP_CODEC: $MapCodec<$IURecipeDelete>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IURecipeDelete>;
        constructor();
    }
    export class $QuantumQuarrySerializer implements $RecipeSerializer<$QuantumQuarryRecipe> {
        codec(): $MapCodec<$QuantumQuarryRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $QuantumQuarryRecipe>;
        static MAP_CODEC: $MapCodec<$QuantumQuarryRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $QuantumQuarryRecipe>;
        constructor();
    }
}
