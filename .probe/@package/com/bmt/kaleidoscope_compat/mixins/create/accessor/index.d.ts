import { $BlockPos } from "@package/net/minecraft/core";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ClientContraption } from "@package/com/simibubi/create/content/contraptions/render";
import { $Map } from "@package/java/util";

declare module "@package/com/bmt/kaleidoscope_compat/mixins/create/accessor" {
    export class $ContraptionAccessor {
    }
    export interface $ContraptionAccessor {
        getClientContraption(): $AtomicReference<$ClientContraption>;
        getUpdateTags(): $Map<$BlockPos, $CompoundTag>;
        get clientContraption(): $AtomicReference<$ClientContraption>;
        get updateTags(): $Map<$BlockPos, $CompoundTag>;
    }
}
