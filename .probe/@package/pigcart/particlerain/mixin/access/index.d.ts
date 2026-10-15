import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/pigcart/particlerain/mixin/access" {
    export class $SingleQuadParticleAccessor {
    }
    export interface $SingleQuadParticleAccessor {
        callRenderVertex(arg0: $VertexConsumer, arg1: $Quaternionf, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticleAccessor}.
     */
    export type $SingleQuadParticleAccessor_ = ((arg0: $VertexConsumer, arg1: $Quaternionf, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number) => void);
    export class $NativeImageAccessor {
    }
    export interface $NativeImageAccessor {
        getPixels(): number;
        callCheckAllocated(): void;
        get pixels(): number;
    }
    export class $ParticleEngineAccessor {
    }
    export interface $ParticleEngineAccessor {
        getTextureAtlas(): $TextureAtlas;
        callClearParticles(): void;
        get textureAtlas(): $TextureAtlas;
    }
}
