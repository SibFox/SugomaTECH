import { $Inventory } from "@package/com/denfop/inventory";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $HeatComponent } from "@package/com/denfop/componets";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
export * as simple from "@package/com/denfop/blockentity/mechanism/multimechanism/simple";
export * as dual from "@package/com/denfop/blockentity/mechanism/multimechanism/dual";
export * as triple from "@package/com/denfop/blockentity/mechanism/multimechanism/triple";
export * as photonic from "@package/com/denfop/blockentity/mechanism/multimechanism/photonic";
export * as quad from "@package/com/denfop/blockentity/mechanism/multimechanism/quad";

declare module "@package/com/denfop/blockentity/mechanism/multimechanism" {
    export class $IMultiMachine {
    }
    export interface $IMultiMachine {
        getSize(arg0: number): number;
        consume(arg0: number): void;
        getHeat(): $HeatComponent;
        getTank(): $FluidTank;
        canoperate(arg0: number): boolean;
        initiate(arg0: number): void;
        getTypeAudio(): $EnumTypeAudio;
        get heat(): $HeatComponent;
        get tank(): $FluidTank;
        get typeAudio(): $EnumTypeAudio;
    }
    export class $IFarmer {
    }
    export interface $IFarmer {
        getFertilizerSlot(): $Inventory;
        get fertilizerSlot(): $Inventory;
    }
    /**
     * Values that may be interpreted as {@link $IFarmer}.
     */
    export type $IFarmer_ = (() => $Inventory);
}
