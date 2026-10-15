import { $Level_ } from "@package/net/minecraft/world/level";
import { $SpaceUpgradeItemInform } from "@package/com/denfop/api/space/upgrades/info";
import { $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $IRoversItem } from "@package/com/denfop/api/space/rovers/api";
import { $EnumTypeUpgrade_ } from "@package/com/denfop/api/space/rovers/enums";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/denfop/api/space/upgrades/api" {
    export class $ISpaceUpgradeSystem {
    }
    export interface $ISpaceUpgradeSystem {
        write(arg0: $IRoversItem, arg1: $List_<$EnumTypeUpgrade_>, arg2: $ItemStack_): void;
        getRemaining(arg0: $ItemStack_): number;
        getModules(arg0: $EnumTypeUpgrade_, arg1: $ItemStack_): $SpaceUpgradeItemInform;
        setInformation(arg0: $IRoversItem, arg1: $List_<$EnumTypeUpgrade_>, arg2: $ItemStack_): void;
        hasModules(arg0: $EnumTypeUpgrade_, arg1: $ItemStack_): boolean;
        addRecipe(arg0: $Item_, ...arg1: $EnumTypeUpgrade_[]): void;
        shouldUpdate(arg0: $EnumTypeUpgrade_, arg1: $ItemStack_): boolean;
        removeUpdate(arg0: $ItemStack_, arg1: $Level_, arg2: number): void;
        updateListFromNBT(arg0: $IRoversItem, arg1: $ItemStack_): void;
        getListStack(arg0: $ItemStack_): $List<$ItemStack>;
        getAvailableUpgrade(arg0: $IRoversItem, arg1: $ItemStack_): $List<string>;
        getInformation(arg0: $ItemStack_): $List<$SpaceUpgradeItemInform>;
        hasInMap(arg0: $ItemStack_): boolean;
    }
}
