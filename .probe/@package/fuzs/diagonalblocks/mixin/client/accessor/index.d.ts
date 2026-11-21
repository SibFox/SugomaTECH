import { $StateDefinition, $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Condition_, $Condition } from "@package/net/minecraft/client/renderer/block/model/multipart";
import { $Iterable, $Iterable_ } from "@package/java/lang";

declare module "@package/fuzs/diagonalblocks/mixin/client/accessor" {
    export class $AndConditionAccessor {
    }
    export interface $AndConditionAccessor {
        diagonalfences$getConditions(): $Iterable<$Condition>;
    }
    /**
     * Values that may be interpreted as {@link $AndConditionAccessor}.
     */
    export type $AndConditionAccessor_ = (() => $Iterable_<$Condition>);
    export class $KeyValueConditionAccessor {
    }
    export interface $KeyValueConditionAccessor {
        diagonalfences$getValue(): string;
        diagonalfences$getKey(): string;
    }
    export class $MultiPartAccessor {
    }
    export interface $MultiPartAccessor {
        diagonalfences$getDefinition(): $StateDefinition<$Block, $BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $MultiPartAccessor}.
     */
    export type $MultiPartAccessor_ = (() => $StateDefinition<$Block_, $BlockState_>);
    export class $OrConditionAccessor {
    }
    export interface $OrConditionAccessor {
        diagonalfences$getConditions(): $Iterable<$Condition>;
    }
    /**
     * Values that may be interpreted as {@link $OrConditionAccessor}.
     */
    export type $OrConditionAccessor_ = (() => $Iterable_<$Condition>);
    export class $SelectorAccessor {
    }
    export interface $SelectorAccessor {
        diagonalfences$getCondition(): $Condition;
    }
    /**
     * Values that may be interpreted as {@link $SelectorAccessor}.
     */
    export type $SelectorAccessor_ = (() => $Condition_);
}
