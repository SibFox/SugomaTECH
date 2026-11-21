import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $BlockEntityElectricBlock } from "@package/com/denfop/blockentity/base";
import { $IRecipes } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RecipeBuilder, $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $IInputHandler, $CraftingManager, $IInputItemStack } from "@package/com/denfop/recipe";
export * as guidebook from "@package/com/denfop/api/guidebook";
export * as storage from "@package/com/denfop/api/storage";
export * as space from "@package/com/denfop/api/space";
export * as widget from "@package/com/denfop/api/widget";
export * as otherenergies from "@package/com/denfop/api/otherenergies";
export * as energy from "@package/com/denfop/api/energy";
export * as multiblock from "@package/com/denfop/api/multiblock";
export * as windsystem from "@package/com/denfop/api/windsystem";
export * as pollution from "@package/com/denfop/api/pollution";
export * as solar from "@package/com/denfop/api/solar";
export * as reactors from "@package/com/denfop/api/reactors";
export * as vein from "@package/com/denfop/api/vein";
export * as menu from "@package/com/denfop/api/menu";
export * as crafting from "@package/com/denfop/api/crafting";
export * as item from "@package/com/denfop/api/item";
export * as tesseract from "@package/com/denfop/api/tesseract";
export * as recipe from "@package/com/denfop/api/recipe";
export * as steam from "@package/com/denfop/api/steam";
export * as crop from "@package/com/denfop/api/crop";
export * as gassensor from "@package/com/denfop/api/gassensor";
export * as bee from "@package/com/denfop/api/bee";
export * as collision from "@package/com/denfop/api/collision";
export * as water from "@package/com/denfop/api/water";
export * as upgrades from "@package/com/denfop/api/upgrades";
export * as container from "@package/com/denfop/api/container";
export * as sound from "@package/com/denfop/api/sound";
export * as brewage from "@package/com/denfop/api/brewage";
export * as primitive from "@package/com/denfop/api/primitive";
export * as blockentity from "@package/com/denfop/api/blockentity";

declare module "@package/com/denfop/api" {
    export class $IKeyboard {
    }
    export interface $IKeyboard {
        isFlyModeKeyDown(arg0: $Player): boolean;
        isSneakKeyDown(arg0: $Player): boolean;
        isVerticalMode(arg0: $Player): boolean;
        isForwardKeyDown(arg0: $Player): boolean;
        isBootsMode(arg0: $Player): boolean;
        isLeggingsMode(arg0: $Player): boolean;
        isChangeKeyDown(arg0: $Player): boolean;
        isStreakKeyDown(arg0: $Player): boolean;
        isJumpKeyDown(arg0: $Player): boolean;
        isBlackListModeViewKeyDown(arg0: $Player): boolean;
        isBlackListModeKeyDown(arg0: $Player): boolean;
        isArmorKey(arg0: $Player): boolean;
    }
    export class $IStorage {
    }
    export interface $IStorage {
        getOutput(): number;
        getTier(): number;
        getRedstoneMode(): number;
        shouldEmitRedstone(): boolean;
        shouldEmitEnergy(): boolean;
        getEUCapacity(): number;
        getEUStored(): number;
        get output(): number;
        get tier(): number;
        get redstoneMode(): number;
        get EUCapacity(): number;
        get EUStored(): number;
    }
    export class $Recipes {
        static registerRecipes(): void;
        static getRecipe(): $CraftingManager;
        static registerRecipe(arg0: $RecipeOutput, arg1: $RecipeBuilder): void;
        static registerRecipe(arg0: $RecipeOutput, arg1: $RecipeBuilder, arg2: string): void;
        static registerRecipe(arg0: $Recipe<any>): string;
        static registerWithSorter(): void;
        static getRecipeMap(): $Map<string, $Recipe<any>>;
        static recipes: $IRecipes;
        static inputFactory: $IInputHandler;
        static recipe: $CraftingManager;
        constructor();
        static get recipeMap(): $Map<string, $Recipe<any>>;
    }
    export class $InputHandler implements $IInputHandler {
        getInput(arg0: string, arg1: number): $IInputItemStack;
        getInput(arg0: string): $IInputItemStack;
        getInput(arg0: $ItemStack_, arg1: number): $IInputItemStack;
        getInput(arg0: string, arg1: number, arg2: number): $IInputItemStack;
        getInput(arg0: $Fluid_): $IInputItemStack;
        getInput(arg0: $Fluid_, arg1: number): $IInputItemStack;
        getInput(arg0: $ItemStack_): $IInputItemStack;
        getInput(arg0: $ItemStack_[]): $IInputItemStack;
        getInput(arg0: $Object): $IInputItemStack;
        getInput(arg0: $TagKey_<$Item>): $IInputItemStack;
        getInput(arg0: $TagKey_<$Item>, arg1: number): $IInputItemStack;
        getInput(arg0: $Object, arg1: number): $IInputItemStack;
        constructor();
    }
    export class $IElectricBlock {
    }
    export interface $IElectricBlock {
        getDummyElec(): $BlockEntityElectricBlock;
        get dummyElec(): $BlockEntityElectricBlock;
    }
    /**
     * Values that may be interpreted as {@link $IElectricBlock}.
     */
    export type $IElectricBlock_ = (() => $BlockEntityElectricBlock);
}
