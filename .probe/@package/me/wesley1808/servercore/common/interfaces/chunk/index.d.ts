import { $ChunkHolder } from "@package/net/minecraft/server/level";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/me/wesley1808/servercore/common/interfaces/chunk" {
    export class $ILevelChunk {
    }
    export interface $ILevelChunk {
        servercore$shouldDoLightning(arg0: $RandomSource, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ILevelChunk}.
     */
    export type $ILevelChunk_ = ((arg0: $RandomSource, arg1: number) => number);
    export class $IServerChunkCache {
    }
    export interface $IServerChunkCache {
        servercore$requiresBroadcast(arg0: $ChunkHolder): void;
    }
    /**
     * Values that may be interpreted as {@link $IServerChunkCache}.
     */
    export type $IServerChunkCache_ = ((arg0: $ChunkHolder) => void);
    export class $IServerLevel {
    }
    export interface $IServerLevel {
        servercore$resetIceAndSnowTick(): void;
    }
    /**
     * Values that may be interpreted as {@link $IServerLevel}.
     */
    export type $IServerLevel_ = (() => void);
}
