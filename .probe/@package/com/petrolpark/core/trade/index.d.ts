import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $VillagerTrades$ItemListing } from "@package/net/minecraft/world/entity/npc";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/core/trade" {
    export class $ITradeListingReference {
        static CODEC: $Codec<$ITradeListingReference>;
        static FAILURE: $VillagerTrades$ItemListing;
        static TYPED_CODEC: $Codec<$ITradeListingReference>;
    }
    export interface $ITradeListingReference {
        get(): $VillagerTrades$ItemListing;
        getType(): $ITradeListingReference$Type;
        get type(): $ITradeListingReference$Type;
    }
    export class $ITradeListingReference$Type extends $Record {
        codec(): $MapCodec<$ITradeListingReference>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ITradeListingReference>;
        constructor(codec: $MapCodec_<$ITradeListingReference>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, $ITradeListingReference>);
    }
    /**
     * Values that may be interpreted as {@link $ITradeListingReference$Type}.
     */
    export type $ITradeListingReference$Type_ = RegistryTypes.PetrolparkTradeListingReferenceType | { codec?: $MapCodec_<$ITradeListingReference>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ITradeListingReference>,  } | [codec?: $MapCodec_<$ITradeListingReference>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ITradeListingReference>, ];
    export interface $ITradeListingReference$Type extends RegistryMarked<RegistryTypes.PetrolparkTradeListingReferenceTypeTag, RegistryTypes.PetrolparkTradeListingReferenceType> {}
}
