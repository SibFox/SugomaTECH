import { $ClientChunkCache$Storage } from "@package/net/minecraft/client/multiplayer";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Runnable } from "@package/java/lang";
import { $Queue } from "@package/java/util";

declare module "@package/me/cominixo/betterf3/ducks" {
    export class $ClientChunkMapAccess {
    }
    export interface $ClientChunkMapAccess {
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        get chunks(): $AtomicReferenceArray<$LevelChunk>;
    }
    /**
     * Values that may be interpreted as {@link $ClientChunkMapAccess}.
     */
    export type $ClientChunkMapAccess_ = (() => $AtomicReferenceArray<$LevelChunk>);
    export class $ChunkBuilderAccess {
    }
    export interface $ChunkBuilderAccess {
        betterF3$getUploadQueue(): $Queue<$Runnable>;
        betterF3$getBufferCount(): number;
        betterF3$getQueuedTaskCount(): number;
    }
    export class $ClientChunkManagerAccess {
    }
    export interface $ClientChunkManagerAccess {
        getChunks(): $ClientChunkCache$Storage;
        get chunks(): $ClientChunkCache$Storage;
    }
    /**
     * Values that may be interpreted as {@link $ClientChunkManagerAccess}.
     */
    export type $ClientChunkManagerAccess_ = (() => $ClientChunkCache$Storage);
}
