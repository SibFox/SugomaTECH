import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Slot } from "@package/net/minecraft/world/inventory";
export * as client from "@package/com/perigrine3/createcybernetics/mixin/client";

declare module "@package/com/perigrine3/createcybernetics/mixin" {
    export class $AbstractContainerMenuInvoker {
    }
    export interface $AbstractContainerMenuInvoker {
        cc$invokeAddSlot(arg0: $Slot): $Slot;
        cc$invokeMoveItemStackTo(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
    }
    export class $AbstractContainerMenuAccessor {
    }
    export interface $AbstractContainerMenuAccessor {
        cc$getSlots(): $NonNullList<$Slot>;
    }
    /**
     * Values that may be interpreted as {@link $AbstractContainerMenuAccessor}.
     */
    export type $AbstractContainerMenuAccessor_ = (() => $NonNullList<$Slot>);
}
