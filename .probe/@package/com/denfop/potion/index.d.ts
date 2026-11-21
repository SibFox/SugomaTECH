import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MobEffect$AttributeTemplate, $MobEffect, $MobEffectCategory_ } from "@package/net/minecraft/world/effect";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/denfop/potion" {
    export class $IUPotion extends $MobEffect {
        applyEffect(arg0: $LivingEntity, arg1: number): void;
        static frostbite: $IUPotion;
        static CODEC: $Codec<$Holder<$MobEffect>>;
        static rad: $DeferredHolder<$MobEffect, $IUPotion>;
        static poison: $DeferredHolder<$MobEffect, $IUPotion>;
        static radiation: $IUPotion;
        static frost: $DeferredHolder<$MobEffect, $IUPotion>;
        static poison_gas: $IUPotion;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(arg0: $MobEffectCategory_, arg1: number);
    }
}
