import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ParticleProvider_, $ParticleEngine$SpriteParticleRegistration_ } from "@package/net/minecraft/client/particle";
import { $ParticleType_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";

declare module "@package/plus/dragons/visuality/particle" {
    export class $VisualityParticleEngine {
    }
    export interface $VisualityParticleEngine {
        registerVisuality<O extends $ParticleOptions, T extends $ParticleType<O>>(arg0: $DeferredHolder<$ParticleType_<never>, T>, arg1: $ParticleProvider_<O>): void;
        registerVisuality<O extends $ParticleOptions, T extends $ParticleType<O>>(arg0: $DeferredHolder<$ParticleType_<never>, T>, arg1: $ParticleEngine$SpriteParticleRegistration_<O>): void;
    }
}
