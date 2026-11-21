import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Energy, $Fluids, $Fluids$InternalFluidTank } from "@package/com/denfop/componets";
export * as socket from "@package/com/denfop/blockentity/reactors/gas/socket";
export * as controller from "@package/com/denfop/blockentity/reactors/gas/controller";
export * as intercooler from "@package/com/denfop/blockentity/reactors/gas/intercooler";
export * as chamber from "@package/com/denfop/blockentity/reactors/gas/chamber";
export * as compressor from "@package/com/denfop/blockentity/reactors/gas/compressor";
export * as regenerator from "@package/com/denfop/blockentity/reactors/gas/regenerator";
export * as cell from "@package/com/denfop/blockentity/reactors/gas/cell";
export * as coolant from "@package/com/denfop/blockentity/reactors/gas/coolant";
export * as casing from "@package/com/denfop/blockentity/reactors/gas/casing";
export * as recirculation_pump from "@package/com/denfop/blockentity/reactors/gas/recirculation_pump";

declare module "@package/com/denfop/blockentity/reactors/gas" {
    export class $IRegenerator {
    }
    export interface $IRegenerator extends $IMultiElement {
        getMaxHelium(): number;
        addHelium(arg0: number): void;
        getHelium(): number;
        get maxHelium(): number;
        get helium(): number;
    }
    export class $IRecirculationPump {
    }
    export interface $IRecirculationPump extends $IMultiElement {
        getSlot(): $Inventory;
        getEnergy(): number;
        getPower(): number;
        get slot(): $Inventory;
        get energy(): number;
        get power(): number;
    }
    export class $IChamber {
    }
    export interface $IChamber extends $IMultiElement {
    }
    export class $IInterCooler {
    }
    export interface $IInterCooler extends $IMultiElement {
        getSlot(): $Inventory;
        getEnergy(): number;
        getPower(): number;
        get slot(): $Inventory;
        get energy(): number;
        get power(): number;
    }
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
    export class $ICompressor {
    }
    export interface $ICompressor extends $IMultiElement {
        getEnergy(): number;
        getPressure(): number;
        get energy(): number;
        get pressure(): number;
    }
    export class $ICell {
    }
    export interface $ICell extends $IMultiElement {
        setFluid(arg0: $Fluid_): void;
        getFluids(): $Fluids;
        getTank(): $Fluids$InternalFluidTank;
        set fluid(value: $Fluid_);
        get fluids(): $Fluids;
        get tank(): $Fluids$InternalFluidTank;
    }
    export class $ICoolant {
    }
    export interface $ICoolant extends $IMultiElement {
        getLevelRefrigerator(): number;
        get levelRefrigerator(): number;
    }
    export class $ISocket {
    }
    export interface $ISocket extends $IMultiElement {
        getEnergy(): $Energy;
        get energy(): $Energy;
    }
}
