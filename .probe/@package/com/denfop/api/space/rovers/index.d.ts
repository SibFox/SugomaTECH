import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IRoversItem, $IRovers } from "@package/com/denfop/api/space/rovers/api";
import { $EnumTypeRovers } from "@package/com/denfop/api/space/rovers/enums";
export * as api from "@package/com/denfop/api/space/rovers/api";
export * as enums from "@package/com/denfop/api/space/rovers/enums";

declare module "@package/com/denfop/api/space/rovers" {
    export class $Rovers implements $IRovers {
        getName(): string;
        getType(): $EnumTypeRovers;
        getItem(): $IRoversItem;
        getItemStack(): $ItemStack;
        constructor(arg0: $IRoversItem, arg1: $ItemStack_);
        get name(): string;
        get type(): $EnumTypeRovers;
        get item(): $IRoversItem;
        get itemStack(): $ItemStack;
    }
}
