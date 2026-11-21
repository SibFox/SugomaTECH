import { $Level_ } from "@package/net/minecraft/world/level";
import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $IAdvancedIngredient } from "@package/com/petrolpark/core/recipe/ingredient/advanced";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Set } from "@package/java/util";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $ValidationContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/petrolpark/core/shop/offer/order" {
    export class $ShopOrder {
        test(arg0: $ItemStack_): boolean;
        getRequiredItem(): $Ingredient;
        getOrderModifiers(): $List<$ShopOrderModifier>;
        static CODEC: $Codec<$ShopOrder>;
        static EMPTY: $ShopOrder;
        constructor(arg0: $Ingredient_, arg1: $List_<$ShopOrderModifier>);
        get requiredItem(): $Ingredient;
        get orderModifiers(): $List<$ShopOrderModifier>;
    }
    export class $ShopOrderModifier implements $LootContextUser {
        getAdvancedIngredient(): $IAdvancedIngredient<$ItemStack>;
        getDescription(arg0: $Level_): $List<$Component>;
        getMultiplier(arg0: $ItemStack_, arg1: $Level_): $NumberProvider;
        getFailureNumberProvider(): $NumberProvider;
        getSuccessMultiplier(): $NumberProvider;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $Codec<$ShopOrderModifier>;
        ingredient: $IAdvancedIngredient<$ItemStack>;
        successMultiplier: $NumberProvider;
        failureMultiplier: $NumberProvider;
        constructor(arg0: $IAdvancedIngredient<$ItemStack_>, arg1: $NumberProvider_, arg2: $NumberProvider_);
        get advancedIngredient(): $IAdvancedIngredient<$ItemStack>;
        get failureNumberProvider(): $NumberProvider;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ShopOrderModifierEntry extends $Record {
        hidden(): boolean;
        chance(): $NumberProvider;
        orderModifier(): $ShopOrderModifier;
        static CODEC: $Codec<$ShopOrderModifierEntry>;
        constructor(orderModifier: $ShopOrderModifier, chance: $NumberProvider_, hidden: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ShopOrderModifierEntry}.
     */
    export type $ShopOrderModifierEntry_ = { chance?: $NumberProvider_, hidden?: boolean, orderModifier?: $ShopOrderModifier,  } | [chance?: $NumberProvider_, hidden?: boolean, orderModifier?: $ShopOrderModifier, ];
}
