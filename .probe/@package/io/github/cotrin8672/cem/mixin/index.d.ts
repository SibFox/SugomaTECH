import { $KineticEffectHandler } from "@package/com/simibubi/create/content/kinetics/base";

declare module "@package/io/github/cotrin8672/cem/mixin" {
    export class $BlockEntityBehaviourMixin {
    }
    export interface $BlockEntityBehaviourMixin {
        getLazyTickCounter(): number;
        setLazyTickCounter(arg0: number): void;
        getLazyTickRate(): number;
        get lazyTickRate(): number;
    }
    export class $SmartBlockEntityMixin {
    }
    export interface $SmartBlockEntityMixin {
        setInitialized(arg0: boolean): void;
        setLazyTickRate(arg0: number): void;
        getInitialized(): boolean;
        getLazyTickCounter(): number;
        setLazyTickCounter(arg0: number): void;
        getLazyTickRate(): number;
    }
    export class $ServerGamePacketListenerImplMixin {
    }
    export interface $ServerGamePacketListenerImplMixin {
        setAboveGroundTickCount(arg0: number): void;
        set aboveGroundTickCount(value: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImplMixin}.
     */
    export type $ServerGamePacketListenerImplMixin_ = ((arg0: number) => void);
    export class $KineticBlockEntityMixin {
    }
    export interface $KineticBlockEntityMixin {
        getEffects(): $KineticEffectHandler;
        setFlickerTally(arg0: number): void;
        getFlickerTally(): number;
        getValidationCountdown(): number;
        setValidationCountdown(arg0: number): void;
        invokeValidateKinetics(): void;
        get effects(): $KineticEffectHandler;
    }
}
