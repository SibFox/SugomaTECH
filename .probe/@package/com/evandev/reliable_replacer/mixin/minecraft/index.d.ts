import { $ChunkHolder } from "@package/net/minecraft/server/level";
import { $Iterable, $Iterable_ } from "@package/java/lang";

declare module "@package/com/evandev/reliable_replacer/mixin/minecraft" {
    export class $ChunkMapAccessor {
    }
    export interface $ChunkMapAccessor {
        reliableReplacer$getChunks(): $Iterable<$ChunkHolder>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor}.
     */
    export type $ChunkMapAccessor_ = (() => $Iterable_<$ChunkHolder>);
}
