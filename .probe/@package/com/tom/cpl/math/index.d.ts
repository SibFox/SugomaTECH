import { $Direction } from "@package/com/tom/cpl/util";
import { $JsonMap } from "@package/com/tom/cpm/shared/editor/project";
import { $Map_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/tom/cpl/math" {
    export class $Rotation {
        add(arg0: $Rotation): $Rotation;
        asVec3f(arg0: boolean): $Vec3f;
        asQ(): $Quaternion;
        toMap3(): $Map<string, $Object>;
        static ZERO: $Rotation;
        x: number;
        y: number;
        z: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
        constructor();
        constructor(arg0: $Vec3f, arg1: boolean);
    }
    export class $BoundingBox {
        getFaceOnly(arg0: $Direction): $BoundingBox;
        offset(arg0: number, arg1: number, arg2: number): $BoundingBox;
        static create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $BoundingBox;
        mul(arg0: number): $BoundingBox;
        minY: number;
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $MatrixStack {
        clear(): boolean;
        scale(arg0: number, arg1: number, arg2: number): void;
        getLast(): $MatrixStack$Entry;
        rotate(arg0: $Quaternion): void;
        push(): void;
        pop(): void;
        mul(arg0: $MatrixStack$Entry): void;
        fork(): $MatrixStack;
        translate(arg0: number, arg1: number, arg2: number): void;
        storeLast(): $MatrixStack$Entry;
        setLast(arg0: $MatrixStack$Entry): void;
        static NO_RENDER: $MatrixStack$Entry;
        constructor();
    }
    export class $Vec3f {
        round(arg0: number): void;
        add(arg0: $Vec3f): $Vec3f;
        transform(arg0: $Mat3f): void;
        toMap(): $Map<string, $Object>;
        copy(): $Vec3f;
        normalize(): void;
        sub(arg0: $Vec3f): $Vec3f;
        sub(arg0: number): $Vec3f;
        mul(arg0: number): $Vec3f;
        mul(arg0: number, arg1: number, arg2: number): void;
        epsilon(arg0: number): boolean;
        getYaw(): number;
        getDegreesQuaternion(arg0: number): $Quaternion;
        getRadialQuaternion(arg0: number): $Quaternion;
        static NEGATIVE_X: $Vec3f;
        static ZERO: $Vec3f;
        static NEGATIVE_Y: $Vec3f;
        static MAX_POS: number;
        x: number;
        static POSITIVE_Z: $Vec3f;
        y: number;
        z: number;
        static POSITIVE_Y: $Vec3f;
        static NEGATIVE_Z: $Vec3f;
        static POSITIVE_X: $Vec3f;
        constructor(arg0: $Vec3f);
        constructor(arg0: $Vec2f, arg1: number);
        constructor(arg0: $JsonMap, arg1: $Vec3f);
        constructor(arg0: $Map_<string, $Object>, arg1: $Vec3f);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: number);
        get yaw(): number;
    }
    export class $Vec2i {
        toMap(): $Map<string, $Object>;
        x: number;
        y: number;
        constructor();
        constructor(arg0: $Vec4f);
        constructor(arg0: $JsonMap, arg1: $Vec2i);
        constructor(arg0: $Map_<string, $Object>, arg1: $Vec2i);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Vec2i);
    }
    export class $MatrixStack$Entry {
        copy(): $MatrixStack$Entry;
        getMatrix(): $Mat4f;
        getNormal(): $Mat3f;
        getMatrixArray(): number[];
        getNormalArray3(): number[];
        getNormalArray(): number[];
        get matrix(): $Mat4f;
        get normal(): $Mat3f;
        get matrixArray(): number[];
        get normalArray3(): number[];
        get normalArray(): number[];
    }
    export class $Quaternion {
        map<T>(arg0: $Quaternion$Qmap<T>): T;
        static reorder(arg0: $Vec3f, arg1: $Quaternion$RotationOrder, arg2: $Quaternion$RotationOrder): $Vec3f;
        mul(arg0: $Quaternion): void;
        getY(): number;
        getZ(): number;
        getX(): number;
        getAxis(): $Vec3f;
        getAngle(): number;
        getW(): number;
        static matrixToRotation(arg0: $Mat4f, arg1: $Quaternion$RotationOrder): $Vec3f;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Quaternion$RotationOrder, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Mat4f);
        constructor(arg0: $Vec3f, arg1: boolean);
        constructor(arg0: $Vec3f, arg1: number, arg2: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Quaternion$RotationOrder);
        get y(): number;
        get z(): number;
        get x(): number;
        get axis(): $Vec3f;
        get angle(): number;
        get w(): number;
    }
}
