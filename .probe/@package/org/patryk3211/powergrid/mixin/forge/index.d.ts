import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Set, $Set_ } from "@package/java/util";

declare module "@package/org/patryk3211/powergrid/mixin/forge" {
    export class $EntityTrackerAccessor {
    }
    export interface $EntityTrackerAccessor {
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $EntityTrackerAccessor}.
     */
    export type $EntityTrackerAccessor_ = (() => $Set_<$ServerPlayerConnection>);
    export class $ThreadedAnvilChunkStorageAccessor {
    }
    export interface $ThreadedAnvilChunkStorageAccessor {
        getEntityTrackers(): $Int2ObjectMap<$EntityTrackerAccessor>;
        get entityTrackers(): $Int2ObjectMap<$EntityTrackerAccessor>;
    }
    /**
     * Values that may be interpreted as {@link $ThreadedAnvilChunkStorageAccessor}.
     */
    export type $ThreadedAnvilChunkStorageAccessor_ = (() => $Int2ObjectMap<$EntityTrackerAccessor_>);
}
