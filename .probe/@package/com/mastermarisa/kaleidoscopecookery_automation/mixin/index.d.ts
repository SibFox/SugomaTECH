import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $StockpotInput } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/container";
import { $StockpotRecipe, $StockpotRecipe_ } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/recipe";

declare module "@package/com/mastermarisa/kaleidoscopecookery_automation/mixin" {
    export class $StockpotBlockEntityAccessor {
    }
    export interface $StockpotBlockEntityAccessor {
        invokeApplyRecipe(arg0: $Level_, arg1: $StockpotInput, arg2: $RecipeHolder_<$StockpotRecipe_>): void;
    }
    /**
     * Values that may be interpreted as {@link $StockpotBlockEntityAccessor}.
     */
    export type $StockpotBlockEntityAccessor_ = ((arg0: $Level, arg1: $StockpotInput, arg2: $RecipeHolder<$StockpotRecipe>) => void);
}
