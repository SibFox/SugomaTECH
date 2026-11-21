import { $ItemLike } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $VanillaRecipeProvider } from "@package/net/minecraft/data/recipes/packs";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $List } from "@package/java/util";
import { $PackOutput, $PackOutput$PathProvider } from "@package/net/minecraft/data";

declare module "@package/com/denfop/datagen/furnace" {
    export class $FurnaceRecipe {
        getInput(): $ItemStack;
        getOutput(): $ItemStack;
        getXp(): number;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number);
        get input(): $ItemStack;
        get output(): $ItemStack;
        get xp(): number;
    }
    export class $FurnaceProvider extends $VanillaRecipeProvider {
        static addSmelting(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): void;
        static LAPIS_SMELTABLES: $ImmutableList<$ItemLike>;
        advancementPathProvider: $PackOutput$PathProvider;
        static EMERALD_SMELTABLES: $ImmutableList<$ItemLike>;
        static COPPER_SMELTABLES: $ImmutableList<$ItemLike>;
        static REDSTONE_SMELTABLES: $ImmutableList<$ItemLike>;
        static COAL_SMELTABLES: $ImmutableList<$ItemLike>;
        static furnaceRecipeList: $List<$FurnaceRecipe>;
        static GOLD_SMELTABLES: $ImmutableList<$ItemLike>;
        static IRON_SMELTABLES: $ImmutableList<$ItemLike>;
        recipePathProvider: $PackOutput$PathProvider;
        static DIAMOND_SMELTABLES: $ImmutableList<$ItemLike>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
}
