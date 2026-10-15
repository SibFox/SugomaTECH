import { $MandrelBlockEntity } from "@package/com/petrolpark/compat/create/common/processing/mandrel";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/compat/create/common/processing/mandrel/animation" {
    export interface $MandrelAnimationType extends RegistryMarked<RegistryTypes.PetrolparkMandrelAnimationTypeTag, RegistryTypes.PetrolparkMandrelAnimationType> {}
    export class $MandrelAnimationType extends $Record {
        codec(): $MapCodec<$IMandrelAnimation>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IMandrelAnimation>;
        constructor(codec: $MapCodec_<$IMandrelAnimation>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, $IMandrelAnimation>);
    }
    /**
     * Values that may be interpreted as {@link $MandrelAnimationType}.
     */
    export type $MandrelAnimationType_ = RegistryTypes.PetrolparkMandrelAnimationType | { codec?: $MapCodec_<$IMandrelAnimation>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $IMandrelAnimation>,  } | [codec?: $MapCodec_<$IMandrelAnimation>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $IMandrelAnimation>, ];
    export class $IMandrelAnimation {
        static CODEC: $Codec<$IMandrelAnimation>;
        static TYPED_CODEC: $Codec<$IMandrelAnimation>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IMandrelAnimation>;
    }
    export interface $IMandrelAnimation {
        getType(): $MandrelAnimationType;
        animate(arg0: $MandrelBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getTotalAngleSubtended(arg0: $MandrelBlockEntity): number;
        get type(): $MandrelAnimationType;
    }
}
