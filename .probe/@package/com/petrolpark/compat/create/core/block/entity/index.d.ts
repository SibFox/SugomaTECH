import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";

declare module "@package/com/petrolpark/compat/create/core/block/entity" {
    export class $IKineticBlockEntityDuck {
        static getSource(arg0: $KineticBlockEntity): $KineticBlockEntity;
    }
    export interface $IKineticBlockEntityDuck {
        setSourceIndex(arg0: number | null): void;
        getSourceIndex(): number;
    }
}
