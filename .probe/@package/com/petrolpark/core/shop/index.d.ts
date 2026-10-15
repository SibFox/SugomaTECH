import { $NumberProvider_, $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Codec } from "@package/com/mojang/serialization";
import { $ShopOrderModifierEntry_, $ShopOrderModifierEntry } from "@package/com/petrolpark/core/shop/offer/order";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Set, $List_ } from "@package/java/util";
import { $EntityPredicate_, $EntityPredicate } from "@package/net/minecraft/advancements/critereon";
import { $Holder } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ShopOffer, $ShopOfferGenerator_, $ShopOfferGenerator } from "@package/com/petrolpark/core/shop/offer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as offer from "@package/com/petrolpark/core/shop/offer";

declare module "@package/com/petrolpark/core/shop" {
    export class $Shop {
        getName(): $Component;
        getOfferGeneratorEntries(): $List<$Shop$OfferGeneratorEntry>;
        getCustomerEntities(): $EntityPredicate;
        getTranslationKey(): string;
        canServe(arg0: $ServerPlayer, arg1: $Entity): boolean;
        generateOffer(arg0: $LootContext): $ShopOffer;
        getGlobalOrderModifierEntries(): $List<$ShopOrderModifierEntry>;
        static CODEC: $Codec<$Holder<$Shop>>;
        offerGeneratorEntries: $List<$Shop$OfferGeneratorEntry>;
        customerEntities: $EntityPredicate;
        static DIRECT_CODEC: $Codec<$Shop>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Shop>>;
        constructor(arg0: string, arg1: $List_<$Shop$OfferGeneratorEntry_>, arg2: $List_<$ShopOrderModifierEntry_>, arg3: $EntityPredicate_);
        get name(): $Component;
        get translationKey(): string;
        get globalOrderModifierEntries(): $List<$ShopOrderModifierEntry>;
    }
    /**
     * Values that may be interpreted as {@link $Shop}.
     */
    export type $Shop_ = RegistryTypes.PetrolparkShop;
    export class $Shop$OfferGeneratorEntry extends $Record implements $LootContextUser {
        generator(): $ShopOfferGenerator;
        weight(): $NumberProvider;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        static CODEC: $Codec<$Shop$OfferGeneratorEntry>;
        constructor(generator: $ShopOfferGenerator_, weight: $NumberProvider_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $Shop$OfferGeneratorEntry}.
     */
    export type $Shop$OfferGeneratorEntry_ = { weight?: $NumberProvider_, generator?: $ShopOfferGenerator_,  } | [weight?: $NumberProvider_, generator?: $ShopOfferGenerator_, ];
    export interface $Shop extends RegistryMarked<RegistryTypes.PetrolparkShopTag, RegistryTypes.PetrolparkShop> {}
}
