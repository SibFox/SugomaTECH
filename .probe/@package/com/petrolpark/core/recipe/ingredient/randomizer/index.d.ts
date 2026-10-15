import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/petrolpark/core/recipe/ingredient/randomizer" {
    export class $IngredientRandomizer {
        static CODEC: $Codec<$IngredientRandomizer>;
        static TYPED_CODEC: $Codec<$IngredientRandomizer>;
    }
    export interface $IngredientRandomizer extends $LootContextUser {
        getType(): $IngredientRandomizerType;
        generate(arg0: $LootContext): $Ingredient;
        get type(): $IngredientRandomizerType;
    }
    export class $IngredientRandomizerType extends $Record {
        codec(): $MapCodec<$IngredientRandomizer>;
        constructor(codec: $MapCodec_<$IngredientRandomizer>);
    }
    /**
     * Values that may be interpreted as {@link $IngredientRandomizerType}.
     */
    export type $IngredientRandomizerType_ = RegistryTypes.PetrolparkIngredientRandomizerType | { codec?: $MapCodec_<$IngredientRandomizer>,  } | [codec?: $MapCodec_<$IngredientRandomizer>, ];
    export interface $IngredientRandomizerType extends RegistryMarked<RegistryTypes.PetrolparkIngredientRandomizerTypeTag, RegistryTypes.PetrolparkIngredientRandomizerType> {}
}
