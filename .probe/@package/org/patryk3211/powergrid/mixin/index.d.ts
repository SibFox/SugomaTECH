import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Set, $Set_ } from "@package/java/util";
export * as forge from "@package/org/patryk3211/powergrid/mixin/forge";

declare module "@package/org/patryk3211/powergrid/mixin" {
    export class $ChunkMapAccessor {
    }
    export interface $ChunkMapAccessor {
        getEntityMap(): $Int2ObjectMap<never>;
        get entityMap(): $Int2ObjectMap<never>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor}.
     */
    export type $ChunkMapAccessor_ = (() => $Int2ObjectMap<never>);
    export class $ChunkMapAccessor$TrackedEntityAccessor {
    }
    export interface $ChunkMapAccessor$TrackedEntityAccessor {
        getSeenBy(): $Set<$ServerPlayerConnection>;
        get seenBy(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor$TrackedEntityAccessor}.
     */
    export type $ChunkMapAccessor$TrackedEntityAccessor_ = (() => $Set_<$ServerPlayerConnection>);
    export class $LightningAccessor {
    }
    export interface $LightningAccessor {
        invokeGetLightningPos(arg0: $BlockPos_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $LightningAccessor}.
     */
    export type $LightningAccessor_ = ((arg0: $BlockPos) => $BlockPos_);
    export class $KineticBlockEntityAccessor {
    }
    export interface $KineticBlockEntityAccessor {
        setFlickerTally(arg0: number): void;
        set flickerTally(value: number);
    }
    /**
     * Values that may be interpreted as {@link $KineticBlockEntityAccessor}.
     */
    export type $KineticBlockEntityAccessor_ = ((arg0: number) => void);
}
