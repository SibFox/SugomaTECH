import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/core/item/decay/product" {
    export class $IDecayProduct {
        static CODEC: $Codec<$IDecayProduct>;
        static TYPED_CODEC: $Codec<$IDecayProduct>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IDecayProduct>;
    }
    export interface $IDecayProduct {
        get(arg0: $ItemStack_): $ItemStack;
        getType(): $DecayProductType;
        get type(): $DecayProductType;
    }
    export interface $DecayProductType extends RegistryMarked<RegistryTypes.PetrolparkDecayProductTypeTag, RegistryTypes.PetrolparkDecayProductType> {}
    export class $DecayProductType extends $Record {
        codec(): $MapCodec<$IDecayProduct>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IDecayProduct>;
        constructor(codec: $MapCodec_<$IDecayProduct>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, $IDecayProduct>);
    }
    /**
     * Values that may be interpreted as {@link $DecayProductType}.
     */
    export type $DecayProductType_ = RegistryTypes.PetrolparkDecayProductType | { codec?: $MapCodec_<$IDecayProduct>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $IDecayProduct>,  } | [codec?: $MapCodec_<$IDecayProduct>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $IDecayProduct>, ];
}
