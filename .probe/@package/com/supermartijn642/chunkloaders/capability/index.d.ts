import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $UUID_, $UUID, $Set } from "@package/java/util";
import { $TicketHelper } from "@package/net/neoforged/neoforge/common/world/chunk";
import { $ChunkLoaderBlockEntity, $ChunkLoaderType_ } from "@package/com/supermartijn642/chunkloaders";

declare module "@package/com/supermartijn642/chunkloaders/capability" {
    export class $ServerChunkLoadingCapability extends $ChunkLoadingCapability {
        onLoadLevel(ticketHelper: $TicketHelper): void;
        getChunksToBeTicked(): $Set<$ChunkPos>;
        togglePlayerActivity(player: $UUID_, active: boolean): boolean;
        stopLoadingChunk(player: $UUID_, chunkPos: $ChunkPos): void;
        removeChunkLoader(entity: $ChunkLoaderBlockEntity): void;
        startLoadingChunk(player: $UUID_, chunkPos: $ChunkPos): void;
        addChunkLoader(entity: $ChunkLoaderBlockEntity): void;
        writeClientInfo(): $CompoundTag;
        constructor(level: $Level_);
        get chunksToBeTicked(): $Set<$ChunkPos>;
    }
    export class $ChunkLoadingCapability {
        static get(level: $Level_): $ChunkLoadingCapability;
        write(): $CompoundTag;
        read(compound: $CompoundTag_): void;
        getChunksLoadedByPlayer(player: $UUID_): $Set<$ChunkPos>;
        isChunkLoadedByPlayer(player: $UUID_, chunkPos: $ChunkPos): boolean;
        canPlayerLoadChunk(player: $UUID_, chunkPos: $ChunkPos): boolean;
        isChunkLoaded(chunkPos: $ChunkPos): boolean;
        getInactivePlayersLoadingChunk(chunkPos: $ChunkPos): $Set<$UUID>;
        getActivePlayersLoadingChunk(chunkPos: $ChunkPos): $Set<$UUID>;
        castClient(): $ClientChunkLoadingCapability;
        castServer(): $ServerChunkLoadingCapability;
        constructor(level: $Level_);
    }
    export class $ClientChunkLoadingCapability extends $ChunkLoadingCapability {
        togglePlayerActivity(player: $UUID_, active: boolean): void;
        stopLoadingChunk(player: $UUID_, chunkPos: $ChunkPos): void;
        removeChunkLoader(pos: $BlockPos_, owner: $UUID_, type: $ChunkLoaderType_): void;
        startLoadingChunk(player: $UUID_, chunkPos: $ChunkPos, active: boolean): void;
        addChunkLoader(pos: $BlockPos_, owner: $UUID_, type: $ChunkLoaderType_): void;
        readServerInfo(compound: $CompoundTag_): void;
        constructor(level: $Level_);
    }
}
