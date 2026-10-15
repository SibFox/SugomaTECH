import { $Level_ } from "@package/net/minecraft/world/level";
import { $ITypeSlot } from "@package/com/denfop/api/widget";
import { $EventRotorItemLoad } from "@package/com/denfop/api/windsystem/upgrade/event";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Enum } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";
import { $InventoryUpgrade } from "@package/com/denfop/api/windsystem";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as event from "@package/com/denfop/api/windsystem/upgrade/event";

declare module "@package/com/denfop/api/windsystem/upgrade" {
    export class $EnumInfoRotorUpgradeModules extends $Enum<$EnumInfoRotorUpgradeModules> {
        static values(): $EnumInfoRotorUpgradeModules[];
        static valueOf(arg0: string): $EnumInfoRotorUpgradeModules;
        getCoef(): number;
        getLevel(): number;
        getIds(): $List<number>;
        getMax(): number;
        static getFromID(arg0: number): $EnumInfoRotorUpgradeModules;
        getLimition(): boolean;
        static STRENGTH_III: $EnumInfoRotorUpgradeModules;
        static WIND_III: $EnumInfoRotorUpgradeModules;
        static POWER_I: $EnumInfoRotorUpgradeModules;
        static POWER_III: $EnumInfoRotorUpgradeModules;
        max: number;
        static WIND_POWER_I: $EnumInfoRotorUpgradeModules;
        static EFFICIENCY_II: $EnumInfoRotorUpgradeModules;
        static POWER_II: $EnumInfoRotorUpgradeModules;
        static WIND_POWER_II: $EnumInfoRotorUpgradeModules;
        static EFFICIENCY_III: $EnumInfoRotorUpgradeModules;
        static WIND_I: $EnumInfoRotorUpgradeModules;
        static WIND_II: $EnumInfoRotorUpgradeModules;
        list: $List<number>;
        static EFFICIENCY_I: $EnumInfoRotorUpgradeModules;
        static AUTO: $EnumInfoRotorUpgradeModules;
        static WIND_POWER_III: $EnumInfoRotorUpgradeModules;
        static MIN: $EnumInfoRotorUpgradeModules;
        static STRENGTH_II: $EnumInfoRotorUpgradeModules;
        static STRENGTH_I: $EnumInfoRotorUpgradeModules;
        static REPAIR_II: $EnumInfoRotorUpgradeModules;
        static REPAIR_III: $EnumInfoRotorUpgradeModules;
        static REPAIR_I: $EnumInfoRotorUpgradeModules;
        get coef(): number;
        get level(): number;
        get ids(): $List<number>;
        get limition(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumInfoRotorUpgradeModules}.
     */
    export type $EnumInfoRotorUpgradeModules_ = "strength_i" | "strength_ii" | "strength_iii" | "efficiency_i" | "efficiency_ii" | "efficiency_iii" | "power_i" | "power_ii" | "power_iii" | "auto" | "min" | "wind_i" | "wind_ii" | "wind_iii" | "wind_power_i" | "wind_power_ii" | "wind_power_iii" | "repair_i" | "repair_ii" | "repair_iii";
    export class $InventoryRotor extends $Inventory implements $ITypeSlot {
        base: $CustomWorldContainer;
        constructor(arg0: $InventoryUpgrade);
    }
    export class $RotorUpgradeItemInform {
        getName(): string;
        matched(arg0: $EnumInfoRotorUpgradeModules_): boolean;
        getInformation(arg0: $EnumInfoRotorUpgradeModules_): number;
        number: number;
        static CODEC: $Codec<$RotorUpgradeItemInform>;
        upgrade: $EnumInfoRotorUpgradeModules;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $RotorUpgradeItemInform>;
        constructor(arg0: $EnumInfoRotorUpgradeModules_, arg1: number);
        get name(): string;
    }
    export class $RotorUpgradeSystem implements $IRotorUpgradeSystem {
        write(arg0: $IRotorUpgradeItem, arg1: $List_<$EnumInfoRotorUpgradeModules_>, arg2: $ItemStack_): void;
        getRemaining(arg0: $ItemStack_): number;
        getList(arg0: $ItemStack_): $Map<number, $ItemStack>;
        addUpdate(arg0: $ItemStack_, arg1: $Level_, arg2: $EnumInfoRotorUpgradeModules_): void;
        getModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $List_<$RotorUpgradeItemInform>): $RotorUpgradeItemInform;
        getModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_): $RotorUpgradeItemInform;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        setInformation(arg0: $IRotorUpgradeItem, arg1: $List_<$EnumInfoRotorUpgradeModules_>, arg2: $ItemStack_): void;
        hasModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_): boolean;
        hasModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_, arg2: $List_<$RotorUpgradeItemInform>): boolean;
        shouldUpdate(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_): boolean;
        removeUpdate(arg0: $ItemStack_, arg1: $Level_, arg2: number): void;
        updateListFromNBT(arg0: $IRotorUpgradeItem, arg1: $ItemStack_): void;
        getListStack(arg0: $ItemStack_): $List<$ItemStack>;
        getInformation(arg0: $ItemStack_): $List<$RotorUpgradeItemInform>;
        hasInMap(arg0: $ItemStack_): boolean;
        loadItem(arg0: $EventRotorItemLoad): void;
        static instance: $IRotorUpgradeSystem;
        constructor();
    }
    export class $IRotorUpgradeItem {
    }
    export interface $IRotorUpgradeItem {
    }
    export class $IRotorUpgradeSystem {
    }
    export interface $IRotorUpgradeSystem {
        write(arg0: $IRotorUpgradeItem, arg1: $List_<$EnumInfoRotorUpgradeModules_>, arg2: $ItemStack_): void;
        getRemaining(arg0: $ItemStack_): number;
        getList(arg0: $ItemStack_): $Map<number, $ItemStack>;
        addUpdate(arg0: $ItemStack_, arg1: $Level_, arg2: $EnumInfoRotorUpgradeModules_): void;
        getModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $List_<$RotorUpgradeItemInform>): $RotorUpgradeItemInform;
        getModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_): $RotorUpgradeItemInform;
        setInformation(arg0: $IRotorUpgradeItem, arg1: $List_<$EnumInfoRotorUpgradeModules_>, arg2: $ItemStack_): void;
        hasModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_): boolean;
        hasModules(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_, arg2: $List_<$RotorUpgradeItemInform>): boolean;
        shouldUpdate(arg0: $EnumInfoRotorUpgradeModules_, arg1: $ItemStack_): boolean;
        removeUpdate(arg0: $ItemStack_, arg1: $Level_, arg2: number): void;
        updateListFromNBT(arg0: $IRotorUpgradeItem, arg1: $ItemStack_): void;
        getListStack(arg0: $ItemStack_): $List<$ItemStack>;
        getInformation(arg0: $ItemStack_): $List<$RotorUpgradeItemInform>;
        hasInMap(arg0: $ItemStack_): boolean;
    }
}
