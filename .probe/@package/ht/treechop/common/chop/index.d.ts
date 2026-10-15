import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/ht/treechop/common/chop" {
    export class $Chop {
        apply(arg0: $Level_, arg1: $Player, arg2: $ItemStack_, arg3: boolean): void;
        getBlockPos(): $BlockPos;
        getNumChops(): number;
        constructor(arg0: $BlockPos_, arg1: number);
        get blockPos(): $BlockPos;
        get numChops(): number;
    }
}
