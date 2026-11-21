import { $ChunkLoadingCapability } from "@package/com/supermartijn642/chunkloaders/capability";

declare module "@package/com/supermartijn642/chunkloaders/extensions" {
    export class $ChunkLoadersLevel {
    }
    export interface $ChunkLoadersLevel {
        getChunkLoadingCapability(): $ChunkLoadingCapability;
        get chunkLoadingCapability(): $ChunkLoadingCapability;
    }
    /**
     * Values that may be interpreted as {@link $ChunkLoadersLevel}.
     */
    export type $ChunkLoadersLevel_ = (() => $ChunkLoadingCapability);
}
