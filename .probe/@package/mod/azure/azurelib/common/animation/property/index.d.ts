import { $AzAnimationPropertiesCodec } from "@package/mod/azure/azurelib/common/animation/property/codec";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
export * as codec from "@package/mod/azure/azurelib/common/animation/property/codec";

declare module "@package/mod/azure/azurelib/common/animation/property" {
    export class $AzAnimationProperties {
        animationSpeed(): number;
        transitionLength(): number;
        easingType(): $AzEasingType;
        withShouldReverse(arg0: boolean): $AzAnimationProperties;
        withEasingType(arg0: $AzEasingType): $AzAnimationProperties;
        withAnimationSpeed(arg0: number): $AzAnimationProperties;
        startTickOffset(): number;
        repeatXTimes(): number;
        hasEasingType(): boolean;
        withRepeatXTimes(arg0: number): $AzAnimationProperties;
        hasAnimationSpeed(): boolean;
        hasStartTickOffset(): boolean;
        isReversing(): boolean;
        freezeTickOffset(): number;
        hasReversing(): boolean;
        hasRepeatXTimes(): boolean;
        withTransitionLength(arg0: number): $AzAnimationProperties;
        withStartTickOffset(arg0: number): $AzAnimationProperties;
        hasFreezeTickOffset(): boolean;
        hasTransitionLength(): boolean;
        withFreezeTickOffset(arg0: number): $AzAnimationProperties;
        static CODEC: $AzAnimationPropertiesCodec;
        static EMPTY: $AzAnimationProperties;
        static DEFAULT: $AzAnimationProperties;
        constructor(arg0: number, arg1: $AzEasingType, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
        get reversing(): boolean;
    }
}
