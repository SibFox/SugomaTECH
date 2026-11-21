import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $Energy, $Fluids, $Fluids$InternalFluidTank } from "@package/com/denfop/componets";
export * as graphite_controller from "@package/com/denfop/blockentity/reactors/graphite/graphite_controller";
export * as chamber from "@package/com/denfop/blockentity/reactors/graphite/chamber";
export * as socket from "@package/com/denfop/blockentity/reactors/graphite/socket";
export * as cooling from "@package/com/denfop/blockentity/reactors/graphite/cooling";
export * as reactor from "@package/com/denfop/blockentity/reactors/graphite/reactor";
export * as tank from "@package/com/denfop/blockentity/reactors/graphite/tank";
export * as exchanger from "@package/com/denfop/blockentity/reactors/graphite/exchanger";
export * as casing from "@package/com/denfop/blockentity/reactors/graphite/casing";
export * as capacitor from "@package/com/denfop/blockentity/reactors/graphite/capacitor";
export * as controller from "@package/com/denfop/blockentity/reactors/graphite/controller";

declare module "@package/com/denfop/blockentity/reactors/graphite" {
    export class $IExchanger {
    }
    export interface $IExchanger extends $IMultiElement {
        getPercent(arg0: number): number;
    }
    export class $IChamber {
    }
    export interface $IChamber extends $IMultiElement {
    }
    export class $IExchangerItem {
    }
    export interface $IExchangerItem {
        getPercent(): number;
        damageItem(arg0: $ItemStack_, arg1: number): boolean;
        getLevelExchanger(): number;
        get percent(): number;
        get levelExchanger(): number;
    }
    export class $IReactor {
    }
    export interface $IReactor extends $IMultiElement {
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
    export class $ICapacitor {
    }
    export interface $ICapacitor extends $IMultiElement {
        getPercent(arg0: number): number;
    }
    export class $ICapacitorItem {
    }
    export interface $ICapacitorItem {
        getPercent(): number;
        damageItem(arg0: $ItemStack_, arg1: number): boolean;
        getLevelCapacitor(): number;
        get percent(): number;
        get levelCapacitor(): number;
    }
    export class $ICooling {
    }
    export interface $ICooling extends $IMultiElement {
        work(arg0: number): number;
    }
    export class $IGraphiteController {
    }
    export interface $IGraphiteController extends $IMultiElement {
        setIndex(arg0: number): void;
        getFuelGraphite(): number;
        getLevelGraphite(): number;
        consumeGraphite(): void;
        getGraphite(): $ItemStack;
        consumeFuelGraphite(arg0: number): void;
        set index(value: number);
        get fuelGraphite(): number;
        get levelGraphite(): number;
        get graphite(): $ItemStack;
    }
}
