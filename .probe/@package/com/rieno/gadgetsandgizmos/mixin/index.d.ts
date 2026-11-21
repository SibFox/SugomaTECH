import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";

declare module "@package/com/rieno/gadgetsandgizmos/mixin" {
    export class $CreativeModeInventoryScreenAccessor {
    }
    export interface $CreativeModeInventoryScreenAccessor {
        getMenu(): $AbstractContainerMenu;
        getTopPos(): number;
        getLeftPos(): number;
        get menu(): $AbstractContainerMenu;
        get topPos(): number;
        get leftPos(): number;
    }
}
