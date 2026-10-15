import { $Timer } from "@package/com/denfop/utils";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $Energy, $Fluids, $Fluids$InternalFluidTank } from "@package/com/denfop/componets";
import { $EnumTypeSecurity_, $EnumTypeSecurity } from "@package/com/denfop/api/reactors";
export * as casing from "@package/com/denfop/blockentity/reactors/water/casing";
export * as controller from "@package/com/denfop/blockentity/reactors/water/controller";
export * as socket from "@package/com/denfop/blockentity/reactors/water/socket";
export * as tank from "@package/com/denfop/blockentity/reactors/water/tank";
export * as outputfluid from "@package/com/denfop/blockentity/reactors/water/outputfluid";
export * as levelfuel from "@package/com/denfop/blockentity/reactors/water/levelfuel";
export * as chamber from "@package/com/denfop/blockentity/reactors/water/chamber";
export * as inputfluid from "@package/com/denfop/blockentity/reactors/water/inputfluid";
export * as security from "@package/com/denfop/blockentity/reactors/water/security";
export * as reactor from "@package/com/denfop/blockentity/reactors/water/reactor";

declare module "@package/com/denfop/blockentity/reactors/water" {
    export class $IReactor {
    }
    export interface $IReactor extends $IMultiElement {
    }
    export class $IChamber {
    }
    export interface $IChamber extends $IMultiElement {
    }
    export class $ISocket {
    }
    export interface $ISocket extends $IMultiElement {
        getEnergy(): $Energy;
        get energy(): $Energy;
    }
    export class $IInput {
    }
    export interface $IInput extends $IMultiElement {
        addFluids(arg0: $Fluids): void;
        clearList(): void;
    }
    export class $IOutput {
    }
    export interface $IOutput extends $IMultiElement {
        addFluids(arg0: $Fluids): void;
        clearList(): void;
    }
    export class $ILevelFuel {
    }
    export interface $ILevelFuel extends $IMultiElement {
    }
    export class $ISecurity {
    }
    export interface $ISecurity extends $IMultiElement {
        setActive(arg0: string): void;
        getSecurity(): $EnumTypeSecurity;
        getYellow_timer(): $Timer;
        setSecurity(arg0: $EnumTypeSecurity_): void;
        getRed_timer(): $Timer;
        set active(value: string);
        get yellow_timer(): $Timer;
        get red_timer(): $Timer;
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
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
}
