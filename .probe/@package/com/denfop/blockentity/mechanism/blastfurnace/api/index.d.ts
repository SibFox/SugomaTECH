import { $BlockEntityBlastFurnaceMain } from "@package/com/denfop/blockentity/mechanism/blastfurnace/block";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $IMultiElement, $IMainMultiBlock } from "@package/com/denfop/api/multiblock";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Fluids } from "@package/com/denfop/componets";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/com/denfop/blockentity/mechanism/blastfurnace/api" {
    export class $IBlastInputItem {
    }
    export interface $IBlastInputItem extends $IBlastPart {
    }
    export class $IBlastMain {
    }
    export interface $IBlastMain extends $IMainMultiBlock {
        getProgress(): number;
        getHeat(): $IBlastHeat;
        getInputFluid(): $IBlastInputFluid;
        setInputFluid(arg0: $IBlastInputFluid): void;
        setHeat(arg0: $IBlastHeat): void;
        get progress(): number;
    }
    export class $IBlastOutputItem {
    }
    export interface $IBlastOutputItem extends $IBlastPart {
    }
    export class $IBlastInputFluid {
    }
    export interface $IBlastInputFluid extends $IBlastPart {
        getFluidTank(): $FluidTank;
        getFluid(): $Fluids;
        get fluidTank(): $FluidTank;
        get fluid(): $Fluids;
    }
    export class $InventoryBlastFurnace extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityBlastFurnaceMain);
    }
    export class $IBlastHeat {
    }
    export interface $IBlastHeat extends $IBlastPart {
    }
    export class $IOtherBlastPart {
    }
    export interface $IOtherBlastPart extends $IBlastPart {
    }
    export class $IBlastPart {
    }
    export interface $IBlastPart extends $IMultiElement {
    }
}
