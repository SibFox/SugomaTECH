import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/snownee/passablefoliage/mixin" {
    export class $BlockBehaviourAccess {
    }
    export interface $BlockBehaviourAccess {
        callIsCollisionShapeFullBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccess}.
     */
    export type $BlockBehaviourAccess_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
}
