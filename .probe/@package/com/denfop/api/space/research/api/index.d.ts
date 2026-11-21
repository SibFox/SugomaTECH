import { $Level } from "@package/net/minecraft/world/level";
import { $IBody, $EnumLevels, $EnumLevels_ } from "@package/com/denfop/api/space";
import { $BlockPos } from "@package/net/minecraft/core";
import { $IRoversItem, $IRovers } from "@package/com/denfop/api/space/rovers/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Data, $SpaceOperation } from "@package/com/denfop/api/space/fakebody";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $UUID, $Map } from "@package/java/util";

declare module "@package/com/denfop/api/space/research/api" {
    export class $IContainerBlock {
    }
    export interface $IContainerBlock {
        getSlotOutput(): $InventoryOutput;
        getResearchTable(): $IResearchTable;
        setResearchTable(arg0: $IResearchTable): void;
        get slotOutput(): $InventoryOutput;
    }
    export class $IResearchTable {
    }
    export interface $IResearchTable {
        setLevel(arg0: $EnumLevels_): void;
        getPlayer(): $UUID;
        getSpaceBody(): $Map<$IBody, $SpaceOperation>;
        getLevelTable(): $EnumLevels;
        set level(value: $EnumLevels_);
        get player(): $UUID;
        get spaceBody(): $Map<$IBody, $SpaceOperation>;
        get levelTable(): $EnumLevels;
    }
    export class $IRocketLaunchPad {
    }
    export interface $IRocketLaunchPad {
        getPos(): $BlockPos;
        charge(arg0: $ItemStack_): void;
        getPlayer(): $UUID;
        addFluidStack(arg0: $FluidStack_): void;
        refuel(arg0: $ItemStack_, arg1: $IRoversItem): void;
        getRover(): $IRoversItem;
        getWorldPad(): $Level;
        getRoverStack(): $ItemStack;
        getSlotOutput(): $InventoryOutput;
        addDataRocket(arg0: $ItemStack_): void;
        getRoverSlot(): $Inventory;
        consumeRover(): void;
        get pos(): $BlockPos;
        get player(): $UUID;
        get rover(): $IRoversItem;
        get worldPad(): $Level;
        get roverStack(): $ItemStack;
        get slotOutput(): $InventoryOutput;
        get roverSlot(): $Inventory;
    }
    export class $IResearchSystem {
    }
    export interface $IResearchSystem {
        returnOperation(arg0: $IBody, arg1: $IResearchTable): void;
        sendingOperation(arg0: $IRovers, arg1: $IBody, arg2: $IResearchTable): void;
        getDataFromPlayer(arg0: $IResearchTable, arg1: $IBody): $Data;
        canSendingOperation(arg0: $IRovers, arg1: $IBody, arg2: $IResearchTable): boolean;
        sendingAutoOperation(arg0: $IRovers, arg1: $IBody, arg2: $IResearchTable): void;
    }
}
