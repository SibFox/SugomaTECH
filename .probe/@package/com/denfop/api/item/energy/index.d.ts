import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/com/denfop/api/item/energy" {
    export class $ElectricItemManager {
    }
    export interface $ElectricItemManager {
        canUse(arg0: $ItemStack_, arg1: number): boolean;
        use(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): boolean;
        charge(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: boolean): number;
        getCharge(arg0: $ItemStack_): number;
        getTier(arg0: $ItemStack_): number;
        getToolTip(arg0: $ItemStack_): string;
        discharge(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): number;
        getMaxCharge(arg0: $ItemStack_): number;
    }
    export class $EnergyItem {
    }
    export interface $EnergyItem {
        getBarWidth(arg0: $ItemStack_): number;
        getBarColor(arg0: $ItemStack_): number;
        isBarVisible(arg0: $ItemStack_): boolean;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
    }
}
