import { $IContamination } from "@package/com/petrolpark/core/contamination";
export * as decay from "@package/com/petrolpark/core/item/decay";

declare module "@package/com/petrolpark/core/item" {
    export class $IItemStackDuck {
    }
    export interface $IItemStackDuck {
        getContamination(): $IContamination<never, never>;
        onContaminationSaved(): void;
        get contamination(): $IContamination<never, never>;
    }
}
