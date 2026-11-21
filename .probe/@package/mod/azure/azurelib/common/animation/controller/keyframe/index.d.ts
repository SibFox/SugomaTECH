import { $AzBoneAnimationQueueCache, $AzBoneSnapshotCache, $AzAnimationController } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzBoneSnapshot, $AzBone } from "@package/mod/azure/azurelib/common/model";
import { $AzCustomKeyframeHandler, $AzParticleKeyframeHandler, $AzSoundKeyframeHandler } from "@package/mod/azure/azurelib/common/animation/controller/keyframe/handler";
import { $AzQueuedAnimation_ } from "@package/mod/azure/azurelib/common/animation/primitive";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $List_ } from "@package/java/util";
import { $IValue_, $IValue } from "@package/mod/azure/azurelib/core/math";

declare module "@package/mod/azure/azurelib/common/animation/controller/keyframe" {
    export class $AzKeyframe<T extends $IValue> extends $Record {
        length(): number;
        endValue(): T;
        startValue(): T;
        easingType(): $AzEasingType;
        easingArgs(): $List<T>;
        constructor(length: number, startValue: T, endValue: T, easingType: $AzEasingType, easingArgs: $List_<T>);
        constructor(arg0: number, arg1: T, arg2: T, arg3: $AzEasingType);
        constructor(arg0: number, arg1: T, arg2: T);
    }
    /**
     * Values that may be interpreted as {@link $AzKeyframe}.
     */
    export type $AzKeyframe_<T> = { endValue?: $IValue_, easingType?: $AzEasingType, easingArgs?: $List_<$IValue_>, startValue?: $IValue_, length?: number,  } | [endValue?: $IValue_, easingType?: $AzEasingType, easingArgs?: $List_<$IValue_>, startValue?: $IValue_, length?: number, ];
    export class $AzKeyframeExecutor<T> extends $AzAbstractKeyframeExecutor {
        execute(arg0: $AzQueuedAnimation_, arg1: T, arg2: boolean): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>);
    }
    export class $AzKeyframeCallbacks<T> {
        static builder<T>(): $AzKeyframeCallbacks$Builder<T>;
        static noop<T>(): $AzKeyframeCallbacks<T>;
        customKeyframeHandler(): $AzCustomKeyframeHandler<T>;
        soundKeyframeHandler(): $AzSoundKeyframeHandler<T>;
        particleKeyframeHandler(): $AzParticleKeyframeHandler<T>;
    }
    export class $AzKeyframeStack<T extends $AzKeyframe<never>> extends $Record {
        static from<F extends $AzKeyframe<never>>(arg0: $AzKeyframeStack_<F>): $AzKeyframeStack<F>;
        xKeyframes(): $List<T>;
        yKeyframes(): $List<T>;
        zKeyframes(): $List<T>;
        getLastKeyframeTime(): number;
        constructor();
        constructor(xKeyframes: $List_<T>, yKeyframes: $List_<T>, zKeyframes: $List_<T>);
        get lastKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $AzKeyframeStack}.
     */
    export type $AzKeyframeStack_<T> = { yKeyframes?: $List_<$AzKeyframe_<never>>, zKeyframes?: $List_<$AzKeyframe_<never>>, xKeyframes?: $List_<$AzKeyframe_<never>>,  } | [yKeyframes?: $List_<$AzKeyframe_<never>>, zKeyframes?: $List_<$AzKeyframe_<never>>, xKeyframes?: $List_<$AzKeyframe_<never>>, ];
    export class $AzBoneAnimationQueue {
        bone(): $AzBone;
        addNextPosition(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzAnimationPoint, arg5: $AzAnimationPoint, arg6: $AzAnimationPoint): void;
        addNextRotation(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzBoneSnapshot, arg5: $AzAnimationPoint, arg6: $AzAnimationPoint, arg7: $AzAnimationPoint): void;
        addPositions(arg0: $AzAnimationPoint, arg1: $AzAnimationPoint, arg2: $AzAnimationPoint): void;
        addNextScale(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzAnimationPoint, arg5: $AzAnimationPoint, arg6: $AzAnimationPoint): void;
        addRotations(arg0: $AzAnimationPoint, arg1: $AzAnimationPoint, arg2: $AzAnimationPoint): void;
        addScales(arg0: $AzAnimationPoint, arg1: $AzAnimationPoint, arg2: $AzAnimationPoint): void;
        clearFrame(): void;
        addPosYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        pollSclX(): $AzAnimationPoint;
        pollRotX(): $AzAnimationPoint;
        pollPosX(): $AzAnimationPoint;
        pollRotY(): $AzAnimationPoint;
        pollRotZ(): $AzAnimationPoint;
        pollPosY(): $AzAnimationPoint;
        pollSclZ(): $AzAnimationPoint;
        pollSclY(): $AzAnimationPoint;
        pollPosZ(): $AzAnimationPoint;
        constructor(arg0: $AzBone);
    }
    export class $AzKeyframeTransitioner<T> extends $AzAbstractKeyframeExecutor {
        transition(arg0: $Map_<string, $AzBone>, arg1: boolean, arg2: number): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>, arg2: $AzBoneSnapshotCache);
    }
    export class $AzBoneAnimation extends $Record {
        boneName(): string;
        scaleKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        positionKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        rotationKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        constructor(boneName: string, rotationKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, scaleKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>);
    }
    /**
     * Values that may be interpreted as {@link $AzBoneAnimation}.
     */
    export type $AzBoneAnimation_ = { boneName?: string, scaleKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, rotationKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>,  } | [boneName?: string, scaleKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, rotationKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, ];
    export class $AzKeyframeCallbackHandler<T> {
        reset(): void;
        handle(arg0: T, arg1: number): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzKeyframeCallbacks<T>);
    }
    export class $AzKeyframeManager<T> {
        keyframeCallbackHandler(): $AzKeyframeCallbackHandler<T>;
        keyframeExecutor(): $AzKeyframeExecutor<T>;
        keyframeTransitioner(): $AzKeyframeTransitioner<T>;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>, arg2: $AzBoneSnapshotCache, arg3: $AzKeyframeCallbacks<T>);
    }
}
