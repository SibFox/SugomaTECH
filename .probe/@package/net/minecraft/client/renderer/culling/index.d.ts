import { $BlockPos_, $Position, $SectionPos } from "@package/net/minecraft/core";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $FrustumExtension } from "@package/foundry/veil/ext";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix4fc, $Vector2dc, $Vector4fc, $Vector3dc, $Vector4f, $Vector3ic, $Vector2fc, $Vector3fc, $FrustumIntersection } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $FrustumExtension, $CullFrustum, $ViewportProvider {
        prepare(camX: number, arg1: number, camY: number): void;
        getPosition(): $Vector3dc;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        testAab(aabb: $AABB_): boolean;
        testAab(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): boolean;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getViewVector(): $Vector3fc;
        isVisible(aabb: $AABB_): boolean;
        offsetToFullyIncludeCameraCube(offset: number): $Frustum;
        getModelViewProjectionMatrix(): $Matrix4fc;
        toFrustum(): $Frustum;
        getPlanes(): $Vector4fc[];
        sodium$createViewport(): $Viewport;
        testLineSegment(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): boolean;
        veil$setupFrustum(arg0: $Matrix4fc, arg1: $Matrix4fc): void;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testPoint(arg0: $Position): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testBlock(arg0: $BlockPos_): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testSection(arg0: $SectionPos): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        camY: number;
        camZ: number;
        intersection: $FrustumIntersection;
        camX: number;
        matrix: $Matrix4f;
        static OFFSET_STEP: number;
        viewVector: $Vector4f;
        constructor(frustum: $Matrix4f, projection: $Matrix4f);
        constructor(other: $Frustum);
        get position(): $Vector3dc;
        get modelViewProjectionMatrix(): $Matrix4fc;
        get planes(): $Vector4fc[];
    }
}
