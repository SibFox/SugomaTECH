import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BaseShapelessRecipe, $BaseRecipe } from "@package/com/denfop/api/crafting";
import { $DataSimpleItem } from "@package/com/denfop/dataregistry";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as universalrecipe from "@package/com/denfop/recipe/universalrecipe";

declare module "@package/com/denfop/recipe" {
    export class $ShapedRecipePattern {
        matches(arg0: $CraftingInput): boolean;
        static of(arg0: $Map_<string, $Ingredient_>, arg1: $List_<string>): $ShapedRecipePattern;
        static of(arg0: $Map_<string, $Ingredient_>, ...arg1: string[]): $ShapedRecipePattern;
        getData(): ($ShapedRecipePattern$Data) | undefined;
        width(): number;
        height(): number;
        static getMaxHeight(): number;
        static setCraftingSize(arg0: number, arg1: number): void;
        static getMaxWidth(): number;
        ingredients(): $NonNullList<$Ingredient>;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipePattern>;
        constructor(arg0: number, arg1: number, arg2: $NonNullList<$Ingredient_>, arg3: ($ShapedRecipePattern$Data_) | undefined);
        get data(): ($ShapedRecipePattern$Data) | undefined;
        static get maxHeight(): number;
        static get maxWidth(): number;
    }
    export class $ShapedRecipePattern$Data extends $Record {
        pattern(): $List<string>;
        key(): $Map<string, $Ingredient>;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern$Data>;
        constructor(key: $Map_<string, $Ingredient_>, pattern: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipePattern$Data}.
     */
    export type $ShapedRecipePattern$Data_ = { pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>,  } | [pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>, ];
    export class $InputFluidStack$FluidHandlerInfo {
    }
    export class $InputItemStack implements $IInputItemStack {
        matches(arg0: $ItemStack_): boolean;
        static create(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $IInputItemStack;
        getTag(): $TagKey<$Item>;
        getInputs(): $List<$ItemStack>;
        getAmount(): number;
        hasTag(): boolean;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        growAmount(arg0: number): void;
        input: $ItemStack;
        amount: number;
        static EMPTY: $InputItemStack;
        constructor(arg0: $ItemStack_, arg1: number);
        constructor(arg0: $ItemStack_);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        get tag(): $TagKey<$Item>;
        get inputs(): $List<$ItemStack>;
    }
    export class $IndustrialShapedRecipeSerializer implements $RecipeSerializer<$BaseRecipe> {
        codec(): $MapCodec<$BaseRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $BaseRecipe>;
        static CODEC: $MapCodec<$BaseRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BaseRecipe>;
        constructor();
    }
    export class $CraftingManager {
        addRecipe(arg0: $ItemStack_, ...arg1: $Object[]): $BaseRecipe;
        addRecipe(arg0: string, ...arg1: $Object[]): $BaseRecipe;
        addRecipe(arg0: $Item_, ...arg1: $Object[]): $BaseRecipe;
        addRecipe(arg0: $DataSimpleItem<never, never>, ...arg1: $Object[]): $BaseRecipe;
        addShapelessRecipe(arg0: $DataSimpleItem<never, never>, ...arg1: $Object[]): $BaseShapelessRecipe;
        addShapelessRecipe(arg0: $Block_, ...arg1: $Object[]): $BaseShapelessRecipe;
        addShapelessRecipe(arg0: $Item_, ...arg1: $Object[]): $BaseShapelessRecipe;
        addShapelessRecipe(arg0: $ItemStack_, ...arg1: $Object[]): $BaseShapelessRecipe;
        constructor();
    }
    export class $InputOreDict implements $IInputItemStack {
        matches(arg0: $ItemStack_): boolean;
        static setSize(arg0: $ItemStack_, arg1: number): $ItemStack;
        getTag(): $TagKey<$Item>;
        getInputs(): $List<$ItemStack>;
        getAmount(): number;
        hasTag(): boolean;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        growAmount(arg0: number): void;
        amount: number;
        meta: number;
        constructor(arg0: $TagKey_<$Item>, arg1: number);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: number, arg1: $TagKey_<$Item>);
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: string);
        constructor(arg0: string, arg1: number);
        constructor(arg0: string, arg1: number, arg2: number);
        get tag(): $TagKey<$Item>;
        get inputs(): $List<$ItemStack>;
    }
    export class $IInputItemStack {
    }
    export interface $IInputItemStack {
        matches(arg0: $ItemStack_): boolean;
        getTag(): $TagKey<$Item>;
        getInputs(): $List<$ItemStack>;
        getAmount(): number;
        hasTag(): boolean;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        growAmount(arg0: number): void;
        get tag(): $TagKey<$Item>;
        get inputs(): $List<$ItemStack>;
        get amount(): number;
    }
    export class $IInputHandler {
    }
    export interface $IInputHandler {
        getInput(arg0: string): $IInputItemStack;
        getInput(arg0: string, arg1: number): $IInputItemStack;
        getInput(arg0: string, arg1: number, arg2: number): $IInputItemStack;
        getInput(arg0: $Fluid_): $IInputItemStack;
        getInput(arg0: $Fluid_, arg1: number): $IInputItemStack;
        getInput(arg0: $ItemStack_): $IInputItemStack;
        getInput(arg0: $ItemStack_[]): $IInputItemStack;
        getInput(arg0: $Object): $IInputItemStack;
        getInput(arg0: $Object, arg1: number): $IInputItemStack;
        getInput(arg0: $ItemStack_, arg1: number): $IInputItemStack;
    }
    export class $InputFluidStack implements $IInputItemStack {
        matches(arg0: $ItemStack_): boolean;
        getTag(): $TagKey<$Item>;
        getInputs(): $List<$ItemStack>;
        getAmount(): number;
        hasTag(): boolean;
        static getFluidContainer(arg0: $Fluid_): $List<$ItemStack>;
        getFluid(): $FluidStack;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        growAmount(arg0: number): void;
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: $Fluid_, arg1: number);
        constructor(arg0: $FluidStack_);
        constructor(arg0: $Fluid_);
        get tag(): $TagKey<$Item>;
        get inputs(): $List<$ItemStack>;
        get amount(): number;
        get fluid(): $FluidStack;
    }
    export class $IndustrialShapelessRecipeSerializer implements $RecipeSerializer<$BaseShapelessRecipe> {
        codec(): $MapCodec<$BaseShapelessRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $BaseShapelessRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BaseShapelessRecipe>;
        constructor();
    }
}
