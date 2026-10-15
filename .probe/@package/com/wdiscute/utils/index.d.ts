import { $DeferredItem, $DeferredBlock } from "@package/net/neoforged/neoforge/registries";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/wdiscute/utils" {
    export class $MaybeStack extends $Record {
        /**
         * @deprecated
         */
        stack(): $ItemStack;
        isEmpty(): boolean;
        static of(arg0: $ResourceLocation_): $MaybeStack;
        /**
         * @deprecated
         */
        rl(): $ResourceLocation;
        toStack(): $ItemStack;
        toItem(): $Item;
        static CODEC: $Codec<$MaybeStack>;
        static EMPTY: $MaybeStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MaybeStack>;
        constructor(arg0: $DeferredBlock<$Block_>);
        constructor(arg0: $ItemStack_);
        constructor(arg0: $Item_);
        constructor(rl: $ResourceLocation_, stack: $ItemStack_);
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: string, arg1: string);
        constructor(arg0: $DeferredItem<$Item_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MaybeStack}.
     */
    export type $MaybeStack_ = { stack?: $ItemStack_, rl?: $ResourceLocation_,  } | [stack?: $ItemStack_, rl?: $ResourceLocation_, ];
}
