import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder, $Ingredient$Value, $Ingredient$Value_, $Ingredient_, $RecipeType_, $RecipeType, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $Set_, $List, $List_, $Map_, $Map, $Set } from "@package/java/util";

declare module "@package/com/evandev/reliable_recipes/mixin/accessor" {
    export class $ShapedRecipeAccessor {
    }
    export interface $ShapedRecipeAccessor {
        setResult(arg0: $ItemStack_): void;
        set result(value: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipeAccessor}.
     */
    export type $ShapedRecipeAccessor_ = ((arg0: $ItemStack) => void);
    export class $HolderReferenceAccessor {
    }
    export interface $HolderReferenceAccessor {
        getTags(): $Set<$TagKey<never>>;
        setTags(arg0: $Set_<$TagKey_<never>>): void;
    }
    export class $HolderSetNamedAccessor {
    }
    export interface $HolderSetNamedAccessor {
        getContents(): $List<$Holder<never>>;
        setContents(arg0: $List_<$Holder_<never>>): void;
    }
    export class $RecipeManagerAccessor {
    }
    export interface $RecipeManagerAccessor {
        getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        getRecipes(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        setByName(arg0: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        setRecipes(arg0: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>): void;
    }
    export class $SingleItemRecipeAccessor {
    }
    export interface $SingleItemRecipeAccessor {
        setResult(arg0: $ItemStack_): void;
        setIngredient(arg0: $Ingredient_): void;
        set result(value: $ItemStack_);
        set ingredient(value: $Ingredient_);
    }
    export class $IngredientAccessor {
    }
    export interface $IngredientAccessor {
        getValues(): $Ingredient$Value[];
        setValues(arg0: $Ingredient$Value_[]): void;
    }
    export class $AbstractCookingRecipeAccessor {
    }
    export interface $AbstractCookingRecipeAccessor {
        setResult(arg0: $ItemStack_): void;
        setIngredient(arg0: $Ingredient_): void;
        set result(value: $ItemStack_);
        set ingredient(value: $Ingredient_);
    }
    export class $ShapelessRecipeAccessor {
    }
    export interface $ShapelessRecipeAccessor {
        setResult(arg0: $ItemStack_): void;
        set result(value: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $ShapelessRecipeAccessor}.
     */
    export type $ShapelessRecipeAccessor_ = ((arg0: $ItemStack) => void);
}
