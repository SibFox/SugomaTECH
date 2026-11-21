import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $RecipeInput, $Recipe } from "@package/net/minecraft/world/item/crafting";

declare module "@package/com/petrolpark/core/contamination/recipe" {
    export class $IHandleContaminationMyselfRecipe<I extends $RecipeInput> {
    }
    export interface $IHandleContaminationMyselfRecipe<I extends $RecipeInput> extends $Recipe<I> {
        isContaminationHandled(arg0: I, arg1: $HolderLookup$Provider): boolean;
    }
}
