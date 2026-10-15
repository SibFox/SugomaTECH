import { $DataSimpleItem, $DataMultiBlock, $DataItem, $DataBlock, $DataBlockEntity } from "@package/com/denfop/dataregistry";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $Map, $Collection_ } from "@package/java/util";
import { $IInputItemStack } from "@package/com/denfop/recipe";

declare module "@package/com/denfop/recipes" {
    export class $BaseRecipeFour {
        static init(): void;
        static getBlockStack(arg0: $MultiBlockEntity): $ItemStack;
        static DEFAULT_SENSOR: $Item;
        static PER_SENSOR: $Item;
        static IMP_SENSOR: $Item;
        static ADV_SENSOR: $Item;
        static PHOTON_SENSOR: $Item;
        constructor();
    }
    export class $FurnaceRecipes {
        static recipe(): void;
        constructor();
    }
    export class $ScrapboxRecipeManager {
        clear(): void;
        apply(arg0: $ItemStack_): $ItemStack;
        isIterable(): boolean;
        getDrops(): $Map<$ItemStack, number>;
        addRecipe(arg0: $IInputItemStack, arg1: $Collection_<$ItemStack_>, arg2: $CompoundTag_, arg3: boolean): boolean;
        addRecipe(arg0: $IInputItemStack, arg1: $CompoundTag_, arg2: boolean, ...arg3: $ItemStack_[]): boolean;
        getDrop(arg0: $ItemStack_): $ItemStack;
        getRandomDrop(): $ItemStack;
        addDrop(arg0: $ItemStack_, arg1: number): void;
        static instance: $ScrapboxRecipeManager;
        constructor();
        get iterable(): boolean;
        get drops(): $Map<$ItemStack, number>;
        get randomDrop(): $ItemStack;
    }
    export class $MetalFormerRecipe {
        static init(): void;
        static itemNames(): $List<string>;
        static itemNames1(): $List<string>;
        static itemNames7(): $List<string>;
        static addExtruding(arg0: string, arg1: string, arg2: number): void;
        static addExtruding(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): void;
        static addExtruding(arg0: string, arg1: $ItemStack_, arg2: number): void;
        static addExtruding(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addCutting(arg0: string, arg1: $ItemStack_, arg2: number): void;
        static addCutting(arg0: $ItemStack_, arg1: string): void;
        static addCutting(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): void;
        static addCutting(arg0: string, arg1: number, arg2: $ItemStack_): void;
        static addcutting(arg0: string, arg1: string, arg2: number): void;
        static addmolot(arg0: string, arg1: $ItemStack_, arg2: number): void;
        static addmolot(arg0: string, arg1: string, arg2: number): void;
        static addmolot(arg0: string, arg1: string): void;
        static addmolot(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_): void;
        static addmolot(arg0: string, arg1: $ItemStack_): void;
        static recipe2: string[];
        static recipe1: string[];
        static recipe: string[];
        static list_baseore1: $List<string>;
        constructor();
    }
    export class $RecipeQuantumGenerators {
        static register(): void;
        constructor();
    }
    export class $BasicRecipeThree {
        static recipe(): void;
        static getBlockStack(arg0: $MultiBlockEntity): $ItemStack;
        static DEFAULT_SENSOR: $Item;
        static PER_SENSOR: $Item;
        static IMP_SENSOR: $Item;
        static ADV_SENSOR: $Item;
        static PHOTON_SENSOR: $Item;
        constructor();
    }
    export class $ScrapboxRecipeManager$Drop {
    }
    export class $OreWashingRecipe {
        static init(): void;
        static addrecipe(arg0: number, arg1: $ItemStack_): void;
        static addrecipe(arg0: string, arg1: string, arg2: $ItemStack_): void;
        static addrecipe(arg0: $ItemStack_): void;
        static addrecipe1(arg0: $ItemStack_, ...arg1: $ItemStack_[]): void;
        constructor();
    }
    export class $CentrifugeRecipe {
        static init(): void;
        static addcentrifuge(arg0: number, arg1: $ItemStack_): void;
        static addcentrifuge(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addcentrifuge(arg0: string, arg1: $ItemStack_): void;
        static addcentrifuge(arg0: $Object, ...arg1: $ItemStack_[]): void;
        static addcentrifuge(arg0: $Item_, ...arg1: $ItemStack_[]): void;
        static addcentrifuges1(arg0: number, arg1: $ItemStack_): void;
        static addcentrifuge1(arg0: string, ...arg1: $ItemStack_[]): void;
        static addcentrifuge1(arg0: string, arg1: $ItemStack_): void;
        static addcentrifuge1(arg0: number, arg1: $ItemStack_): void;
        static addcentrifuges(arg0: number, arg1: $ItemStack_): void;
        static growCount(arg0: $Item_, arg1: number): $ItemStack;
        static growCount(arg0: $ItemStack_, arg1: number): $ItemStack;
        constructor();
    }
    export class $BaseRecipes {
        static init(): void;
        static getBlockStack(arg0: $MultiBlockEntity): $ItemStack;
        static recipe_machines(): void;
        static craft_modules(arg0: number, arg1: number, arg2: number): void;
        static DEFAULT_SENSOR: $Item;
        static PER_SENSOR: $Item;
        static IMP_SENSOR: $Item;
        static ADV_SENSOR: $Item;
        static PHOTON_SENSOR: $Item;
        constructor();
    }
    export class $PotionRecipes$Mix<T> extends $Record {
        from(): $Holder<T>;
        to(): $Holder<T>;
        ingredient(): $Ingredient;
        constructor(from: $Holder_<T>, ingredient: $Ingredient_, to: $Holder_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PotionRecipes$Mix}.
     */
    export type $PotionRecipes$Mix_<T> = { ingredient?: $Ingredient_, from?: $Holder_<any>, to?: $Holder_<any>,  } | [ingredient?: $Ingredient_, from?: $Holder_<any>, to?: $Holder_<any>, ];
    export class $CompressorRecipe {
        static recipe(): void;
        static itemNames(): $List<string>;
        static itemNames1(): $List<string>;
        static itemNames7(): $List<string>;
        static addcompressor(arg0: $Item_, arg1: $Item_): void;
        static addcompressor(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addcompressor(arg0: $Item_, arg1: $ItemStack_): void;
        static addcompressor(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_): void;
        static addcompressor(arg0: $Item_, arg1: number, arg2: $Item_): void;
        static addcompressor(arg0: string, arg1: number, arg2: $ItemStack_): void;
        static addcompressor(arg0: string, arg1: number, arg2: string): void;
        static addcompressor1(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static recipe2: string[];
        static recipe1: string[];
        constructor();
    }
    export class $RecipeSimplyQuarries {
        static register(): void;
        constructor();
    }
    export class $RecipeWateringCan {
        static register(): void;
        constructor();
    }
    export class $MaceratorRecipe {
        static recipe(): void;
        static itemNames(): $List<string>;
        static addmacerator(arg0: $Item_, arg1: $Item_): void;
        static addmacerator(arg0: $Item_, arg1: number, arg2: $Item_): void;
        static addmacerator(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_): void;
        static addmacerator(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addmacerator(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_, arg3: number): void;
        static addmacerator(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): void;
        static addmacerator(arg0: string, arg1: string): void;
        static addmacerator(arg0: string, arg1: $ItemStack_): void;
        static addmacerator(arg0: string, arg1: string, arg2: number): void;
        static itemNames1(): $List<string>;
        static itemNames7(): $List<string>;
        static addmacerator1(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static number: number[];
        static recipe1: string[];
        constructor();
    }
    export class $BasicRecipeTwo {
        static recipe(): void;
        static getBlockStack(arg0: $MultiBlockEntity): $ItemStack;
        static DEFAULT_SENSOR: $Item;
        static PER_SENSOR: $Item;
        static IMP_SENSOR: $Item;
        static ADV_SENSOR: $Item;
        static PHOTON_SENSOR: $Item;
        constructor();
    }
    export class $ExtractorRecipe {
        static init(): void;
        static addextractor(arg0: string, arg1: number, arg2: string): void;
        static addextractor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): void;
        static addextractor(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addextractor(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_): void;
        static addextractor(arg0: string, arg1: number, arg2: $ItemStack_): void;
        constructor();
    }
    export class $ScrapboxRecipeManager$DropTier extends $Enum<$ScrapboxRecipeManager$DropTier> {
    }
    /**
     * Values that may be interpreted as {@link $ScrapboxRecipeManager$DropTier}.
     */
    export type $ScrapboxRecipeManager$DropTier_ = "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic";
    export class $ItemStackHelper {
        static fromData(arg0: $DataSimpleItem<never, never>, arg1: number, arg2: number): $ItemStack;
        static fromData(arg0: $DataBlock<never, never, never>, arg1: number, arg2: number): $ItemStack;
        static fromData(arg0: $DataBlock<never, never, never>, arg1: number): $ItemStack;
        static fromData(arg0: $DataSimpleItem<never, never>): $ItemStack;
        static fromData(arg0: $DataMultiBlock<never, never, never>): $ItemStack;
        static fromData(arg0: $DataSimpleItem<never, never>, arg1: number): $ItemStack;
        static fromData(arg0: $Item_): $ItemStack;
        static fromData(arg0: $Item_, arg1: number, arg2: number): $ItemStack;
        static fromData(arg0: $Item_, arg1: number): $ItemStack;
        static fromData(arg0: $DataBlock<never, never, never>): $ItemStack;
        static fromData(arg0: $DataBlockEntity<never>): $ItemStack;
        static fromData(arg0: $DataBlockEntity<never>, arg1: number): $ItemStack;
        static fromData(arg0: $Block_): $ItemStack;
        static fromData(arg0: $Block_, arg1: number): $ItemStack;
        static fromData(arg0: $DataBlockEntity<never>, arg1: number, arg2: number): $ItemStack;
        static fromData(arg0: $DataMultiBlock<never, never, never>, arg1: number): $ItemStack;
        static fromData(arg0: $DataMultiBlock<never, never, never>, arg1: number, arg2: number): $ItemStack;
        static fromData(arg0: $DataItem<never, never>): $ItemStack;
        static fromData(arg0: $DataItem<never, never>, arg1: number): $ItemStack;
        static fromData(arg0: $DataItem<never, never>, arg1: number, arg2: number): $ItemStack;
        constructor();
    }
    export class $RecipesPowerUtils {
        static register(): void;
        constructor();
    }
    export class $PotionRecipes {
        static init(): void;
        static addContainer(arg0: $Item_): void;
        static addMix(arg0: $Holder_<$Potion>, arg1: $Item_, arg2: $Holder_<$Potion>): void;
        static addStartMix(arg0: $Item_, arg1: $Holder_<$Potion>): void;
        static expectPotion(arg0: $Item_): void;
        static containerMixes: $List<$PotionRecipes$Mix<$Item>>;
        static containers: $List<$Ingredient>;
        static potionMixes: $List<$PotionRecipes$Mix<$Potion>>;
        constructor();
    }
}
