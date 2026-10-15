import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";

declare module "@package/com/petrolpark/util/mixininterfaces" {
    export class $IGameRendererMixin {
    }
    export interface $IGameRendererMixin {
        petrolpark$addMobEffectInstanceShader(arg0: $ResourceLocation_, arg1: $MobEffectInstance): void;
        petrolpark$removeMobEffectInstanceShader(arg0: $MobEffectInstance): void;
        petrolpark$cleanShaderEffects(): void;
    }
    export class $IMobEffectInstanceMixin {
    }
    export interface $IMobEffectInstanceMixin {
        petrolpark$updateUniforms(): void;
        petrolpark$setTotalDuration(arg0: number): void;
        petrolpark$getTotalDuration(): number;
    }
}
