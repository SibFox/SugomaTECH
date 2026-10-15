import { $RecipeInput, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";

declare module "@package/com/petrolpark/petrolsparts/mixin/accessor" {
    export class $DeployerRecipeSearchEventAccessor {
    }
    export interface $DeployerRecipeSearchEventAccessor {
        setMaxPriority(arg0: number): void;
        setRecipe(arg0: $RecipeHolder_<$Recipe<$RecipeInput>>): void;
        set maxPriority(value: number);
        set recipe(value: $RecipeHolder_<$Recipe<$RecipeInput>>);
    }
}
