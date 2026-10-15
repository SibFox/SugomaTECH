import { $ViewCenter } from "@package/net/povstalec/stellarview/client/resourcepack";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";
import { $OrbitingObject, $TexturedObject, $OrbitingObject$OrbitalPeriod, $OrbitingObject$OrbitInfo, $ViewObject, $SpaceObject } from "@package/net/povstalec/stellarview/api/common/space_objects";
import { $Runnable_ } from "@package/java/lang";
import { $ArrayList } from "@package/java/util";
import { $AxisRotation, $Color$FloatRGBA, $SpaceCoords, $SphericalCoords, $UV$Quad } from "@package/net/povstalec/stellarview/common/util";
import { $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/net/povstalec/stellarview/client/render/space_objects" {
    export class $SpaceObjectRenderer<RenderedObject extends $SpaceObject> {
        renderFrom(arg0: $ViewCenter, arg1: $ClientLevel, arg2: number, arg3: $Matrix4f, arg4: $Camera, arg5: $Matrix4f, arg6: boolean, arg7: $Runnable_, arg8: $Tesselator): void;
        addParent(arg0: $SpaceObjectRenderer<never>): void;
        children(): $ArrayList<$SpaceObjectRenderer<never>>;
        getPosition(arg0: $ViewCenter, arg1: number, arg2: number): $Vector3f;
        getPosition(arg0: $ViewCenter, arg1: $AxisRotation, arg2: number, arg3: number): $Vector3f;
        addChild(arg0: $SpaceObjectRenderer<never>): void;
        render(arg0: $ViewCenter, arg1: $ClientLevel, arg2: number, arg3: $Matrix4f, arg4: $Camera, arg5: $Matrix4f, arg6: boolean, arg7: $Runnable_, arg8: $Tesselator, arg9: $Vector3f, arg10: $AxisRotation): void;
        axisRotation(): $AxisRotation;
        addChildRaw(arg0: $SpaceObjectRenderer<never>): void;
        renderedObject(): RenderedObject;
        setupSpaceObject(arg0: $ResourceLocation_, arg1: $SpaceObjectRenderer<never>): void;
        spaceCoords(): $SpaceCoords;
        constructor(arg0: RenderedObject);
    }
    export class $OrbitingObjectRenderer<T extends $OrbitingObject> extends $TexturedObjectRenderer<T> {
        setupSynodicOrbit(arg0: $OrbitingObject$OrbitalPeriod | null): void;
        orbitInfo(): $OrbitingObject$OrbitInfo;
        static DEFAULT_DISTANCE: number;
        constructor(arg0: T);
        set upSynodicOrbit(value: $OrbitingObject$OrbitalPeriod | null);
    }
    export class $TexturedObjectRenderer<T extends $TexturedObject> extends $SpaceObjectRenderer<T> {
        static renderOnSphere(arg0: $Color$FloatRGBA, arg1: $Color$FloatRGBA, arg2: $ResourceLocation_, arg3: $UV$Quad, arg4: $ClientLevel, arg5: $Camera, arg6: $Tesselator, arg7: $Matrix4f, arg8: $SphericalCoords, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: boolean): void;
        static DEFAULT_DISTANCE: number;
        constructor(arg0: T);
    }
    export class $ViewObjectRenderer<T extends $ViewObject> extends $OrbitingObjectRenderer<T> {
        static DEFAULT_DISTANCE: number;
        constructor(arg0: T);
    }
}
