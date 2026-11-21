import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getRotY(): number;
        getRotX(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        getBone(): $GeoBone;
        getOffsetZ(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        stopPosAnim(arg0: number): void;
        stopRotAnim(arg0: number): void;
        startScaleAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startRotAnim(): void;
        startPosAnim(): void;
        stopScaleAnim(arg0: number): void;
        getScaleY(): number;
        getScaleX(): number;
        getScaleZ(): number;
        getLastResetRotationTick(): number;
        isScaleAnimInProgress(): boolean;
        isPosAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        isRotAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        constructor(arg0: $GeoBone);
        get rotY(): number;
        get rotX(): number;
        get offsetX(): number;
        get offsetY(): number;
        get rotZ(): number;
        get bone(): $GeoBone;
        get offsetZ(): number;
        get scaleY(): number;
        get scaleX(): number;
        get scaleZ(): number;
        get lastResetRotationTick(): number;
        get scaleAnimInProgress(): boolean;
        get posAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get rotAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
    }
}
