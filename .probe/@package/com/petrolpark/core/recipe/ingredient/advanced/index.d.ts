import { $Level_ } from "@package/net/minecraft/world/level";
import { $Lang$IndentedTooltipBuilder } from "@package/com/petrolpark/util";
import { $Predicate } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/core/recipe/ingredient/advanced" {
    export class $ITypelessAdvancedIngredient<STACK> {
    }
    export interface $ITypelessAdvancedIngredient<STACK> extends $Predicate<STACK> {
        simplify(): $ITypelessAdvancedIngredient<STACK>;
        checkedCast(arg0: $Object): STACK;
        modifyCounterExamples(arg0: $Stream<STACK>): $Stream<STACK>;
        streamCounterExamples(): $Stream<STACK>;
        addToCounterDescription(arg0: $Lang$IndentedTooltipBuilder): void;
        addToDescription(arg0: $Lang$IndentedTooltipBuilder): void;
        streamExamples(): $Stream<STACK>;
        modifyExamples(arg0: $Stream<STACK>): $Stream<STACK>;
    }
    export interface $IAdvancedIngredientType<STACK> extends RegistryMarked<RegistryTypes.PetrolparkAdvancedFluidIngredientTypeTag, RegistryTypes.PetrolparkAdvancedFluidIngredientType> {}
    export class $IAdvancedIngredientType<STACK> {
    }
    export interface $IAdvancedIngredientType<STACK> {
        codec(): $MapCodec<$IAdvancedIngredient<STACK>>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IAdvancedIngredient<STACK>>;
        streamApplicableIngredients(arg0: $Level_, arg1: STACK): $Stream<$IAdvancedIngredient<STACK>>;
    }
    /**
     * Values that may be interpreted as {@link $IAdvancedIngredientType}.
     */
    export type $IAdvancedIngredientType_<STACK> = RegistryTypes.PetrolparkAdvancedIngredientType | RegistryTypes.PetrolparkDoughIngredientType | RegistryTypes.PetrolparkAdvancedFluidIngredientType;
    export class $IAdvancedIngredient<STACK> {
    }
    export interface $IAdvancedIngredient<STACK> extends $ITypelessAdvancedIngredient<STACK> {
        getType(): $IAdvancedIngredientType<STACK>;
        simplify(): $IAdvancedIngredient<STACK>;
        get type(): $IAdvancedIngredientType<STACK>;
    }
}
