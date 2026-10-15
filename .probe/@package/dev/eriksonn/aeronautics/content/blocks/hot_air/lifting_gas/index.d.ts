import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/dev/eriksonn/aeronautics/content/blocks/hot_air/lifting_gas" {
    export interface $LiftingGasType extends RegistryMarked<RegistryTypes.AeronauticsLiftingGasTypeTag, RegistryTypes.AeronauticsLiftingGasType> {}
    export class $LiftingGasType {
    }
    export interface $LiftingGasType {
        getName(): $Component;
        getResponsivenessAdjustmentRange(): number;
        getResponsivenessAdjustmentFactor(): number;
        getFillingTime(): number;
        getLiftStrength(): number;
        getEmptyingTime(): number;
        get name(): $Component;
        get responsivenessAdjustmentRange(): number;
        get responsivenessAdjustmentFactor(): number;
        get fillingTime(): number;
        get liftStrength(): number;
        get emptyingTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $LiftingGasType}.
     */
    export type $LiftingGasType_ = RegistryTypes.AeronauticsLiftingGasType;
}
