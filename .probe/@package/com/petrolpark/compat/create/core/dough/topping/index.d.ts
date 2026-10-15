import { $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $DoughData_ } from "@package/com/petrolpark/compat/create/core/dough";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/compat/create/core/dough/topping" {
    export interface $IDoughTopping extends RegistryMarked<RegistryTypes.PetrolparkDoughToppingTag, RegistryTypes.PetrolparkDoughTopping> {}
    export interface $IDoughTopping$Type<T> extends RegistryMarked<RegistryTypes.PetrolparkDoughToppingTypeTag, RegistryTypes.PetrolparkDoughToppingType> {}
    export class $IDoughTopping {
        static CODEC: $Codec<$Holder<$IDoughTopping>>;
        static DIRECT_CODEC: $Codec<$IDoughTopping>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$IDoughTopping>>;
    }
    export interface $IDoughTopping {
        name(): $Component;
        getType(): $IDoughTopping$Type<never>;
        textureLocation(arg0: $DoughData_): $ResourceLocation;
        getTint(arg0: $DoughData_): number;
        get type(): $IDoughTopping$Type<never>;
    }
    /**
     * Values that may be interpreted as {@link $IDoughTopping}.
     */
    export type $IDoughTopping_ = RegistryTypes.PetrolparkDoughTopping;
    export class $IDoughTopping$Type<T extends $IDoughTopping> {
    }
    export interface $IDoughTopping$Type<T extends $IDoughTopping> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $IDoughTopping$Type}.
     */
    export type $IDoughTopping$Type_<T> = RegistryTypes.PetrolparkDoughToppingType;
}
