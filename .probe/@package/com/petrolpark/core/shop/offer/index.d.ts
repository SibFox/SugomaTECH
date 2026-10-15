import { $IReward } from "@package/com/petrolpark/core/data/reward";
import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Codec } from "@package/com/mojang/serialization";
import { $IngredientRandomizer } from "@package/com/petrolpark/core/recipe/ingredient/randomizer";
import { $ShopOrderModifierEntry_, $ShopOrder, $ShopOrderModifierEntry } from "@package/com/petrolpark/core/shop/offer/order";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IRewardGenerator } from "@package/com/petrolpark/core/data/reward/generator";
import { $Record } from "@package/java/lang";
import { $Shop_ } from "@package/com/petrolpark/core/shop";
import { $List, $List_, $Set } from "@package/java/util";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $LootContext, $ValidationContext } from "@package/net/minecraft/world/level/storage/loot";
export * as order from "@package/com/petrolpark/core/shop/offer/order";

declare module "@package/com/petrolpark/core/shop/offer" {
    export class $ShopOffer extends $Record {
        order(): $ShopOrder;
        rewards(): $List<$IReward>;
        static CODEC: $Codec<$ShopOffer>;
        static EMPTY: $ShopOffer;
        constructor(rewards: $List_<$IReward>, order: $ShopOrder);
    }
    /**
     * Values that may be interpreted as {@link $ShopOffer}.
     */
    export type $ShopOffer_ = { rewards?: $List_<$IReward>, order?: $ShopOrder,  } | [rewards?: $List_<$IReward>, order?: $ShopOrder, ];
    export class $ShopOfferGenerator implements $LootContextUser {
        generate(arg0: $LootContext, arg1: $Shop_): $ShopOffer;
        getTimeGenerator(): $NumberProvider;
        getOrderRandomizer(): $IngredientRandomizer;
        getRewardGenerator(): $IRewardGenerator;
        getOrderModifiers(): $List<$ShopOrderModifierEntry>;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        timeGenerator: $NumberProvider;
        rewardGenerator: $IRewardGenerator;
        orderModifiers: $List<$ShopOrderModifierEntry>;
        static DIRECT_CODEC: $Codec<$ShopOfferGenerator>;
        orderRandomizer: $IngredientRandomizer;
        constructor(arg0: $NumberProvider_, arg1: $IRewardGenerator, arg2: $IngredientRandomizer, arg3: $List_<$ShopOrderModifierEntry_>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ShopOfferGenerator}.
     */
    export type $ShopOfferGenerator_ = RegistryTypes.PetrolparkShopOfferGenerator;
    export interface $ShopOfferGenerator extends RegistryMarked<RegistryTypes.PetrolparkShopOfferGeneratorTag, RegistryTypes.PetrolparkShopOfferGenerator> {}
}
