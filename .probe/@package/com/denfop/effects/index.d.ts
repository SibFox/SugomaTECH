import { $DeferredHolder, $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ParticleProvider, $Particle, $AshParticle, $SpriteSet } from "@package/net/minecraft/client/particle";
import { $ParticleType_, $ParticleType, $SimpleParticleType } from "@package/net/minecraft/core/particles";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/denfop/effects" {
    export class $EffectsRegister {
        static register(arg0: $DeferredRegister<$ParticleType_<never>>): void;
        static STEAM_ASH: $DeferredHolder<$ParticleType<never>, $SimpleParticleType>;
        constructor();
    }
    export class $SteamAshParticle$Factory implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SteamAshParticle extends $AshParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
}
