import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $INetworkObject, $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/pollution/component" {
    export class $LevelPollution extends $Enum<$LevelPollution> {
        static values(): $LevelPollution[];
        static valueOf(arg0: string): $LevelPollution;
        static VERY_HIGH: $LevelPollution;
        static HIGH: $LevelPollution;
        static MEDIUM: $LevelPollution;
        static LOW: $LevelPollution;
        static VERY_LOW: $LevelPollution;
    }
    /**
     * Values that may be interpreted as {@link $LevelPollution}.
     */
    export type $LevelPollution_ = "very_low" | "low" | "medium" | "high" | "very_high";
    export class $ChunkLevel implements $INetworkObject {
        getPos(): $ChunkPos;
        setPos(arg0: $ChunkPos): void;
        addPollution(arg0: number): void;
        getLevelPollution(): $LevelPollution;
        removePollution(arg0: number): boolean;
        writePacket(arg0: $CustomPacketBuffer): $CustomPacketBuffer;
        setPollution(arg0: number): void;
        setLevelPollution(arg0: $LevelPollution_): void;
        writeCompound(): $CompoundTag;
        getDefaultPos(): $ChunkPos;
        getPollution(): number;
        addChunkPos(arg0: number, arg1: number): void;
        setDefaultPos(arg0: $ChunkPos): void;
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $ChunkPos, arg1: $LevelPollution_, arg2: number);
    }
}
