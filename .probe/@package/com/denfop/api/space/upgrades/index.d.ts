import { $Level_ } from "@package/net/minecraft/world/level";
import { $SpaceUpgradeItemInform } from "@package/com/denfop/api/space/upgrades/info";
import { $IRoversItem } from "@package/com/denfop/api/space/rovers/api";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EnumTypeUpgrade_ } from "@package/com/denfop/api/space/rovers/enums";
import { $EventItemLoad } from "@package/com/denfop/api/space/upgrades/event";
import { $Runnable } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $ISpaceUpgradeSystem } from "@package/com/denfop/api/space/upgrades/api";
export * as api from "@package/com/denfop/api/space/upgrades/api";
export * as event from "@package/com/denfop/api/space/upgrades/event";
export * as info from "@package/com/denfop/api/space/upgrades/info";

declare module "@package/com/denfop/api/space/upgrades" {
    export class $SpaceUpgradeSystem {
        static system: $ISpaceUpgradeSystem;
        constructor();
    }
    export class $BaseSpaceUpgradeSystem implements $ISpaceUpgradeSystem {
        write(arg0: $IRoversItem, arg1: $List_<$EnumTypeUpgrade_>, arg2: $ItemStack_): void;
        getRemaining(arg0: $ItemStack_): number;
        getModules(arg0: $EnumTypeUpgrade_, arg1: $ItemStack_): $SpaceUpgradeItemInform;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
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
        loadItem(arg0: $EventItemLoad): void;
        static addupgrade(arg0: $Item_, arg1: $ItemStack_): void;
        static list: $List<$Runnable>;
        constructor();
    }
}
