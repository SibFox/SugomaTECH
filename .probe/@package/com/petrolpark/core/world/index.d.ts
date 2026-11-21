import { $Event } from "@package/net/neoforged/bus/api";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
export * as entity from "@package/com/petrolpark/core/world/entity";
export * as block from "@package/com/petrolpark/core/world/block";

declare module "@package/com/petrolpark/core/world" {
    export class $ChunkTickEvent$Post extends $ChunkTickEvent {
        constructor(arg0: $LevelChunk, arg1: number);
    }
    export class $ChunkTickEvent extends $Event {
        getChunk(): $LevelChunk;
        getRandomTickSpeed(): number;
        constructor(arg0: $LevelChunk, arg1: number);
        get chunk(): $LevelChunk;
        get randomTickSpeed(): number;
    }
    export class $ChunkTickEvent$Pre extends $ChunkTickEvent {
        constructor(arg0: $LevelChunk, arg1: number);
    }
}
