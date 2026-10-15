import { $Item, $Item_ } from "@package/net/minecraft/world/item";

declare module "@package/com/redcraft86/lanternlib/mixin" {
    export class $AccessItem {
    }
    export interface $AccessItem {
        ll_setCraftRemainder(arg0: $Item_): void;
        ll_getCraftRemainder(): $Item;
    }
}
