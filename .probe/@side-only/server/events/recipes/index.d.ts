import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CookingBookCategory_, $Ingredient_, $CraftingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $ChanceResult_ } from "@package/vectorwing/farmersdelight/common/crafting/ingredient";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $CookingPotRecipeBookTab_ } from "@package/vectorwing/farmersdelight/client/recipebook";
import { $Map_, $List_ } from "@package/java/util";
import { $ProcessingOutput, $HeatCondition_ } from "@package/com/simibubi/create/content/processing/recipe";

declare module "@side-only/server/events/recipes" {
    export class Create$Cutting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$MechanicalCrafting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        acceptMirrored(acceptMirrored: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Create$Milling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class DocumentedRecipes {
        farmersdelight: {
            cutting(ingredients: $List_<$Ingredient_>, tool: $Ingredient_, result: $List_<$ChanceResult_>, sound?: $SoundEvent_): Farmersdelight$Cutting;
            cooking(recipeBookTab: $CookingPotRecipeBookTab_, ingredients: $List_<$Ingredient_>, result: $ItemStack_, experience?: number, cookingtime?: number, container?: $ItemStack_): Farmersdelight$Cooking;
        }
        minecraft: {
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
        }
        kubejs: {
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
        }
        create: {
            deploying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Deploying;
            compacting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Compacting;
            splashing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Splashing;
            item_application(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$ItemApplication;
            sequenced_assembly(results: $List_<$ProcessingOutput>, ingredient: $Ingredient_, sequence: $List_<$KubeRecipe>, transitionalItem?: $ProcessingOutput, loops?: number): Create$SequencedAssembly;
            filling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Filling;
            crushing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Crushing;
            mechanical_crafting(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>, acceptMirrored?: boolean): Create$MechanicalCrafting;
            milling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Milling;
            cutting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Cutting;
            haunting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Haunting;
            basin(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Basin;
            mixing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Mixing;
            pressing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Pressing;
            sandpaper_polishing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$SandpaperPolishing;
            conversion(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Conversion;
            emptying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Emptying;
        }
        kaleidoscope_tavern: {
            pressing_tub(fluid: string, ingredient: $Ingredient_, fluidAmount?: number): KaleidoscopeTavern$PressingTub;
            barrel(result: $ItemStack_, fluid: string, carrier?: $Ingredient_, unitTime?: number, ingredients?: $List_<$Ingredient_>): KaleidoscopeTavern$Barrel;
        }
        kaleidoscope_cookery: {
            flex_pot(result: $ItemStack_, ingredients: $List_<$Ingredient_> | $Ingredient_, carrier?: $Ingredient_, time?: number, stirFryCount?: number): KaleidoscopeCookery$FlexPot;
            chopping_board(ingredient: $Ingredient_, result: $ItemStack_, modelId: string, cutCount?: number): KaleidoscopeCookery$ChoppingBoard;
            steamer(result: $ItemStack_, ingredient: $Ingredient_): KaleidoscopeCookery$Steamer;
            flex_stockpot(result: $ItemStack_, ingredients: $List_<$Ingredient_> | $Ingredient_, soupBase?: string, time?: number, carrier?: $Ingredient_, cookingTexture?: string, finishedTexture?: string, cookingBubbleColor?: number, finishedBubbleColor?: number): KaleidoscopeCookery$FlexStockpot;
            teapot(result: $ItemStack_, ingredient: $Ingredient_, teaFluid: string, ingredientCount?: number, time?: number): KaleidoscopeCookery$Teapot;
            pot(result: $ItemStack_, ingredients: $List_<$Ingredient_>, cookingTime: number, carrier?: $Ingredient_, time?: number, experience?: number): KaleidoscopeCookery$Pot;
            stockpot(result: $ItemStack_, ingredients: $List_<$Ingredient_>, soupBase: string, carrier?: $Ingredient_, time?: number, cookingBubbleColor?: number, cookingTexture?: string, finishedBubbleColor?: number, finishedTexture?: string): KaleidoscopeCookery$Stockpot;
            millstone(result: $ItemStack_, ingredient: $Ingredient_): KaleidoscopeCookery$Millstone;
        }
    }
    export class Create$Conversion extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Create$Crushing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Haunting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class KaleidoscopeCookery$Pot extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        cookingTime(cookingTime: number): this;
        carrier(carrier: $Ingredient_): this;
        time(time: number): this;
        experience(experience: number): this;
    }
    export class Farmersdelight$Cutting extends $KubeRecipe {
        ingredients(ingredients: $List_<$Ingredient_>): this;
        tool(tool: $Ingredient_): this;
        result(result: $List_<$ChanceResult_>): this;
        sound(sound: $SoundEvent_): this;
    }
    export class KaleidoscopeTavern$Barrel extends $KubeRecipe {
        result(result: $ItemStack_): this;
        fluid(fluid: string): this;
        carrier(carrier: $Ingredient_): this;
        unitTime(unitTime: number): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class KaleidoscopeCookery$ChoppingBoard extends $KubeRecipe {
        ingredient(ingredient: $Ingredient_): this;
        result(result: $ItemStack_): this;
        modelId(modelId: string): this;
        cutCount(cutCount: number): this;
    }
    export class Create$Mixing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class KaleidoscopeCookery$FlexPot extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_> | $Ingredient_): this;
        carrier(carrier: $Ingredient_): this;
        time(time: number): this;
        stirFryCount(stirFryCount: number): this;
    }
    export class Create$SandpaperPolishing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class KaleidoscopeCookery$Teapot extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        teaFluid(teaFluid: string): this;
        ingredientCount(ingredientCount: number): this;
        time(time: number): this;
    }
    export class Create$Filling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Create$ItemApplication extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Pressing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class KaleidoscopeCookery$Stockpot extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        soupBase(soupBase: string): this;
        carrier(carrier: $Ingredient_): this;
        time(time: number): this;
        cookingBubbleColor(cookingBubbleColor: number): this;
        cookingTexture(cookingTexture: string): this;
        finishedBubbleColor(finishedBubbleColor: number): this;
        finishedTexture(finishedTexture: string): this;
    }
    export class KaleidoscopeCookery$Millstone extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Create$Compacting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Emptying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Create$SequencedAssembly extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredient(ingredient: $Ingredient_): this;
        sequence(sequence: $List_<$KubeRecipe>): this;
        transitionalItem(transitionalItem: $ProcessingOutput): this;
        loops(loops: number): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class KaleidoscopeTavern$PressingTub extends $KubeRecipe {
        fluid(fluid: string): this;
        ingredient(ingredient: $Ingredient_): this;
        fluidAmount(fluidAmount: number): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Farmersdelight$Cooking extends $KubeRecipe {
        recipeBookTab(recipeBookTab: $CookingPotRecipeBookTab_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        result(result: $ItemStack_): this;
        experience(experience: number): this;
        cookingtime(cookingtime: number): this;
        container(container: $ItemStack_): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class KaleidoscopeCookery$FlexStockpot extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_> | $Ingredient_): this;
        soupBase(soupBase: string): this;
        time(time: number): this;
        carrier(carrier: $Ingredient_): this;
        cookingTexture(cookingTexture: string): this;
        finishedTexture(finishedTexture: string): this;
        cookingBubbleColor(cookingBubbleColor: number): this;
        finishedBubbleColor(finishedBubbleColor: number): this;
    }
    export class KaleidoscopeCookery$Steamer extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Create$Deploying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Splashing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Basin extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
}
