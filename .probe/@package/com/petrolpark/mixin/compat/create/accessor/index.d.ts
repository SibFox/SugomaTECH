import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";
export * as client from "@package/com/petrolpark/mixin/compat/create/accessor/client";

declare module "@package/com/petrolpark/mixin/compat/create/accessor" {
    export class $ContraptionAccessor {
    }
    export interface $ContraptionAccessor {
        getInitialPassengers(): $Map<$BlockPos, $Entity>;
        get initialPassengers(): $Map<$BlockPos, $Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionAccessor}.
     */
    export type $ContraptionAccessor_ = (() => $Map_<$BlockPos_, $Entity>);
}
