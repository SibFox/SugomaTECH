import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $OptionalInt } from "@package/java/util";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/fuzs/easymagic/mixin/client/accessor" {
    export class $ChiseledBookShelfBlockAccessor {
    }
    export interface $ChiseledBookShelfBlockAccessor {
        easymagic$callGetHitSlot(arg0: $BlockHitResult, arg1: $BlockState_): $OptionalInt;
    }
    /**
     * Values that may be interpreted as {@link $ChiseledBookShelfBlockAccessor}.
     */
    export type $ChiseledBookShelfBlockAccessor_ = ((arg0: $BlockHitResult, arg1: $BlockState) => $OptionalInt);
}
