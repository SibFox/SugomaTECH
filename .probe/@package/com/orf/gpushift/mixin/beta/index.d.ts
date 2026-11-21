import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/com/orf/gpushift/mixin/beta" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        gpushift$invokeGetLightColor(arg0: number): number;
        gpushift$getLifetime(): number;
        gpushift$getGravity(): number;
        gpushift$getXd(): number;
        gpushift$getZd(): number;
        gpushift$getX(): number;
        gpushift$getRCol(): number;
        gpushift$getGCol(): number;
        gpushift$getAge(): number;
        gpushift$getYd(): number;
        gpushift$getZ(): number;
        gpushift$getY(): number;
        gpushift$getAlpha(): number;
        gpushift$getBCol(): number;
    }
    export class $TextureSheetParticleAccessor {
    }
    export interface $TextureSheetParticleAccessor {
        gpushift$getSprite(): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $TextureSheetParticleAccessor}.
     */
    export type $TextureSheetParticleAccessor_ = (() => $TextureAtlasSprite);
}
