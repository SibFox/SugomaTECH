import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $Pair } from "@package/com/petrolpark/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/petrolpark/core/recipe/book" {
    export class $IRecipeBookProviderBlock$ProvisionType extends $Enum<$IRecipeBookProviderBlock$ProvisionType> {
        static values(): $IRecipeBookProviderBlock$ProvisionType[];
        static valueOf(arg0: string): $IRecipeBookProviderBlock$ProvisionType;
        static CAN_PROVIDE: $IRecipeBookProviderBlock$ProvisionType;
        static PROVIDES: $IRecipeBookProviderBlock$ProvisionType;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeBookProviderBlock$ProvisionType}.
     */
    export type $IRecipeBookProviderBlock$ProvisionType_ = "can_provide" | "provides";
    export class $IRecipeBookProviderBlock {
        static updateAvailableRecipes(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
    }
    export interface $IRecipeBookProviderBlock {
        streamProvidedRecipeBooks(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $Stream<$RecipeHolder<never>>;
        getRecipeBookProvisions(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $Set<$Pair<$BlockPos, $IRecipeBookProviderBlock$ProvisionType>>;
        shouldHighlightConnectedRecipeBookAcceptors(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        providesRecipeBook(arg0: $RecipeHolder_<never>, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): boolean;
    }
    export class $IRecipeBookAcceptorBlock {
    }
    export interface $IRecipeBookAcceptorBlock {
        onAvailableRecipesChanged(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        addProxyRecipeBookAcceptorPositions(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Consumer_<$BlockPos>): void;
        acceptsRecipeBook(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $RecipeHolder_<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeBookAcceptorBlock}.
     */
    export type $IRecipeBookAcceptorBlock_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $RecipeHolder<never>) => boolean);
    export class $IRecipeBookAcceptorBlockEntity {
    }
    export interface $IRecipeBookAcceptorBlockEntity {
        onAvailableRecipesChanged(): void;
        addProxyRecipeBookAcceptorPositions(arg0: $Consumer_<$BlockPos>): void;
        acceptsRecipeBook(arg0: $RecipeHolder_<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeBookAcceptorBlockEntity}.
     */
    export type $IRecipeBookAcceptorBlockEntity_ = ((arg0: $RecipeHolder<never>) => boolean);
}
