import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Energy, $Fluids, $Fluids$InternalFluidTank } from "@package/com/denfop/componets";
export * as pump from "@package/com/denfop/blockentity/reactors/heat/pump";
export * as circulationpump from "@package/com/denfop/blockentity/reactors/heat/circulationpump";
export * as graphite_controller from "@package/com/denfop/blockentity/reactors/heat/graphite_controller";
export * as controller from "@package/com/denfop/blockentity/reactors/heat/controller";
export * as reactor from "@package/com/denfop/blockentity/reactors/heat/reactor";
export * as fueltank from "@package/com/denfop/blockentity/reactors/heat/fueltank";
export * as chamber from "@package/com/denfop/blockentity/reactors/heat/chamber";
export * as coolant from "@package/com/denfop/blockentity/reactors/heat/coolant";
export * as casing from "@package/com/denfop/blockentity/reactors/heat/casing";
export * as socket from "@package/com/denfop/blockentity/reactors/heat/socket";

declare module "@package/com/denfop/blockentity/reactors/heat" {
    export class $ISocket {
    }
    export interface $ISocket extends $IMultiElement {
        getEnergy(): $Energy;
        get energy(): $Energy;
    }
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
    export class $IGraphiteController {
    }
    export interface $IGraphiteController extends $IMultiElement {
        getIndex(): number;
        getFuelGraphite(): number;
        getLevelGraphite(): number;
        consumeGraphite(): void;
        getGraphite(): $ItemStack;
        consumeFuelGraphite(arg0: number): void;
        get index(): number;
        get fuelGraphite(): number;
        get levelGraphite(): number;
        get graphite(): $ItemStack;
    }
    export class $ITank {
    }
    export interface $ITank extends $IMultiElement {
        setFluid(arg0: $Fluid_): void;
        getFluids(): $Fluids;
        getTank(): $Fluids$InternalFluidTank;
        set fluid(value: $Fluid_);
        get fluids(): $Fluids;
        get tank(): $Fluids$InternalFluidTank;
    }
    export class $IPump {
    }
    export interface $IPump extends $IMultiElement {
        getSlot(): $Inventory;
        getEnergy(): number;
        getPower(): number;
        get slot(): $Inventory;
        get energy(): number;
        get power(): number;
    }
    export class $IReactor {
    }
    export interface $IReactor extends $IMultiElement {
    }
    export class $ICoolant {
    }
    export interface $ICoolant extends $IMultiElement {
        getMaxRegenerate(): number;
        getHeliumToRegenerate(): number;
        addHeliumToRegenerate(arg0: number): void;
        get maxRegenerate(): number;
        get heliumToRegenerate(): number;
    }
    export class $IChamber {
    }
    export interface $IChamber extends $IMultiElement {
    }
    export class $ICirculationPump {
    }
    export interface $ICirculationPump extends $IMultiElement {
        getSlot(): $Inventory;
        getEnergy(): number;
        getPower(): number;
        get slot(): $Inventory;
        get energy(): number;
        get power(): number;
    }
}
