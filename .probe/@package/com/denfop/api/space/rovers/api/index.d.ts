import { $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EnumTypeRovers, $EnumRoversLevel, $EnumTypeUpgrade, $EnumTypeUpgrade_ } from "@package/com/denfop/api/space/rovers/enums";
import { $List } from "@package/java/util";

declare module "@package/com/denfop/api/space/rovers/api" {
    export class $IRovers {
    }
    export interface $IRovers {
        getName(): string;
        getType(): $EnumTypeRovers;
        getItem(): $IRoversItem;
        getItemStack(): $ItemStack;
        get name(): string;
        get type(): $EnumTypeRovers;
        get item(): $IRoversItem;
        get itemStack(): $ItemStack;
    }
    export class $IRoversItem {
    }
    export interface $IRoversItem {
        getName(): string;
        getType(): $EnumTypeRovers;
        getLevel(): $EnumRoversLevel;
        getFluidHandler(arg0: $ItemStack_): $IFluidHandlerItem;
        getAddProgress(): number;
        getUpgradeModules(): $List<$EnumTypeUpgrade>;
        get name(): string;
        get type(): $EnumTypeRovers;
        get level(): $EnumRoversLevel;
        get addProgress(): number;
        get upgradeModules(): $List<$EnumTypeUpgrade>;
    }
    export class $IUpgrade {
    }
    export interface $IUpgrade {
        getType(): $EnumTypeUpgrade;
        get type(): $EnumTypeUpgrade;
    }
    /**
     * Values that may be interpreted as {@link $IUpgrade}.
     */
    export type $IUpgrade_ = (() => $EnumTypeUpgrade_);
}
