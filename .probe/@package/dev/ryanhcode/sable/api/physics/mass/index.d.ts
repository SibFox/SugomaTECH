import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BiFunction } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix3dc, $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/mass" {
    export class $MassTracker implements $MassData {
        moveCenterOfMass(arg0: $Vector3d): void;
        static build(arg0: $BlockGetter, arg1: $BoundingBox3ic): $MassTracker;
        getInverseInertiaTensor(): $Matrix3dc;
        getCenterOfMass(): $Vector3dc;
        getMass(): number;
        addBlockMass(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: number, arg4: $Vec3_): void;
        getInverseMass(): number;
        getInertiaTensor(): $Matrix3dc;
        isInvalid(): boolean;
        getInverseNormalMass(arg0: $Vector3dc, arg1: $Vector3dc): number;
        static BLOCK_CENTER_OF_MASS: $BiFunction<$BlockGetter, $BlockState, $Vector3dc>;
        constructor();
        get inverseInertiaTensor(): $Matrix3dc;
        get centerOfMass(): $Vector3dc;
        get mass(): number;
        get inverseMass(): number;
        get inertiaTensor(): $Matrix3dc;
        get invalid(): boolean;
    }
    export class $MassData {
    }
    export interface $MassData {
        isInvalid(): boolean;
        getInverseInertiaTensor(): $Matrix3dc;
        getCenterOfMass(): $Vector3dc;
        getMass(): number;
        getInverseNormalMass(arg0: $Vector3dc, arg1: $Vector3dc): number;
        getInverseMass(): number;
        getInertiaTensor(): $Matrix3dc;
        get invalid(): boolean;
        get inverseInertiaTensor(): $Matrix3dc;
        get centerOfMass(): $Vector3dc;
        get mass(): number;
        get inverseMass(): number;
        get inertiaTensor(): $Matrix3dc;
    }
}
