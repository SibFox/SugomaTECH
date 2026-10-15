import { $Consumer_ } from "@package/java/util/function";
import { $Direction } from "@package/net/minecraft/core";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $AutoCloseable } from "@package/java/lang";
import { $Vector3f, $Vector3fc } from "@package/org/joml";

declare module "@package/com/supermartijn642/fusion/api/model/custom/quad" {
    export class $QuadAccess {
        static create(quad: $BakedQuad): $QuadAccess;
    }
    export interface $QuadAccess {
        position(vertexIndex: number): $Vector3fc;
        x(vertexIndex: number): number;
        v(vertexIndex: number): number;
        z(vertexIndex: number): number;
        u(vertexIndex: number): number;
        y(vertexIndex: number): number;
        copyPosition(vertexIndex: number, dest: $Vector3f): $Vector3fc;
        ambientOcclusion(): boolean;
        facing(): $Direction;
        sprite(): $TextureAtlasSprite;
        lightEmission(): number;
        shade(): boolean;
        tintIndex(): number;
        emissive(): boolean;
        chunkRenderType(): $RenderType;
        itemRenderType(): $RenderType;
        toBakedQuad(): $BakedQuad;
    }
    export class $EmittableQuad$Popper {
    }
    export interface $EmittableQuad$Popper extends $AutoCloseable {
        close(): void;
        popTransform(): void;
    }
    /**
     * Values that may be interpreted as {@link $EmittableQuad$Popper}.
     */
    export type $EmittableQuad$Popper_ = (() => void);
    export class $EmittableQuad$Transform {
    }
    export interface $EmittableQuad$Transform {
        transform(quad: $EmittableQuad): void;
    }
    /**
     * Values that may be interpreted as {@link $EmittableQuad$Transform}.
     */
    export type $EmittableQuad$Transform_ = ((quad: $EmittableQuad) => void);
    export class $EmittableQuad {
        static create(emitter: $Consumer_<$MutableQuad>): $EmittableQuad;
    }
    export interface $EmittableQuad extends $MutableQuad {
        emit(): void;
        pushTransform(transform: $EmittableQuad$Transform_): $EmittableQuad$Popper;
    }
    export class $MutableQuad {
        static create(): $MutableQuad;
        static create(quad: $BakedQuad): $MutableQuad;
    }
    export interface $MutableQuad extends $QuadAccess {
        position(vertexIndex: number, position: $Vector3fc): $MutableQuad;
        position(vertexIndex: number, x: number, y: number, z: number): $MutableQuad;
        copyFrom(quad: $QuadAccess): $MutableQuad;
        ambientOcclusion(ambientOcclusion: boolean): $MutableQuad;
        sprite(sprite: $TextureAtlasSprite): $MutableQuad;
        uv(vertexIndex: number, u: number, v: number): $MutableQuad;
        lightEmission(lightEmission: number): $MutableQuad;
        shade(shade: boolean): $MutableQuad;
        tintIndex(tintIndex: number): $MutableQuad;
        renderTypes(chunkRenderType: $RenderType, itemRenderType: $RenderType): $MutableQuad;
        emissive(emissive: boolean): $MutableQuad;
        chunkRenderType(chunkRenderType: $RenderType): $MutableQuad;
        itemRenderType(itemRenderType: $RenderType): $MutableQuad;
        createCopy(): $MutableQuad;
        copyBakedQuad(quad: $BakedQuad): $MutableQuad;
    }
}
