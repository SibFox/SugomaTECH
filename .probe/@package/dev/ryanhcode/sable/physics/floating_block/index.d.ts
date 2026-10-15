import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List } from "@package/java/util";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vector3dc, $Quaterniond, $Vector3d } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ryanhcode/sable/physics/floating_block" {
    export class $FloatingBlockMaterial extends $Record {
        liftStrength(): number;
        fastVerticalFriction(): number;
        slowVerticalFriction(): number;
        slowHorizontalFriction(): number;
        fastHorizontalFriction(): number;
        preventSelfLift(): boolean;
        scaleWithGravity(): boolean;
        scaleWithPressure(): boolean;
        transitionSpeed(): number;
        static CODEC: $Codec<$FloatingBlockMaterial>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FloatingBlockMaterial>;
        constructor(preventSelfLift: boolean, scaleWithPressure: boolean, scaleWithGravity: boolean, liftStrength: number, transitionSpeed: number, slowVerticalFriction: number, fastVerticalFriction: number, slowHorizontalFriction: number, fastHorizontalFriction: number);
    }
    /**
     * Values that may be interpreted as {@link $FloatingBlockMaterial}.
     */
    export type $FloatingBlockMaterial_ = { preventSelfLift?: boolean, fastHorizontalFriction?: number, scaleWithPressure?: boolean, slowVerticalFriction?: number, transitionSpeed?: number, fastVerticalFriction?: number, scaleWithGravity?: boolean, slowHorizontalFriction?: number, liftStrength?: number,  } | [preventSelfLift?: boolean, fastHorizontalFriction?: number, scaleWithPressure?: boolean, slowVerticalFriction?: number, transitionSpeed?: number, fastVerticalFriction?: number, scaleWithGravity?: boolean, slowHorizontalFriction?: number, liftStrength?: number, ];
    export class $FloatingBlockCluster {
        getBlockData(): $FloatingBlockData;
        getMaterial(): $FloatingBlockMaterial;
        constructor(arg0: $FloatingBlockMaterial_);
        get blockData(): $FloatingBlockData;
        get material(): $FloatingBlockMaterial;
    }
    export class $FloatingBlockData {
        addFloatingBlock(arg0: $Vector3dc, arg1: number): void;
        translateOrigin(arg0: $Vector3dc): void;
        getPressureScale(): number;
        computePressureScale(arg0: $SubLevel): void;
        removeFloatingBlock(arg0: $Vector3dc, arg1: number): void;
        constructor();
        get pressureScale(): number;
    }
    export class $FloatingBlockController {
        physicsTick(arg0: number, arg1: number, arg2: $Vector3dc, arg3: $Vector3dc, arg4: $Vector3d, arg5: $Vector3d): void;
        addFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        needsTicking(): boolean;
        queueAddFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        queueRemoveFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        removeFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        constructor(arg0: $ServerSubLevel);
    }
    export class $FloatingClusterContainer {
        addFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        needsTicking(): boolean;
        queueAddFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        queueRemoveFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        processBlockChanges(arg0: $Vector3dc): void;
        removeFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        positionOffset: $Vector3d;
        velocity: $Vector3d;
        clusters: $List<$FloatingBlockCluster>;
        rotationOffset: $Quaterniond;
        angularVelocity: $Vector3d;
        constructor();
    }
}
