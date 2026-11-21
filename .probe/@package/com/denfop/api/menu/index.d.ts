import { $SameStack } from "@package/com/denfop/api/storage/autocrafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/denfop/api/menu" {
    export class $VirtualSlot {
    }
    export interface $VirtualSlot {
        size(): number;
        get(arg0: number): $ItemStack;
        getFluidStackList(): $List<$FluidStack>;
        setFluid(arg0: number, arg1: $SameStack): void;
        isFluid(): boolean;
        setFluidList(arg0: $List_<$FluidStack_>): void;
        canPlaceVirtualItem(arg0: number, arg1: $ItemStack_): boolean;
        get fluidStackList(): $List<$FluidStack>;
        set fluidList(value: $List_<$FluidStack_>);
    }
}
