import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/com/denfop/api/vein/gas" {
    export class $TypeGas extends $Enum<$TypeGas> {
        static values(): $TypeGas[];
        static valueOf(arg0: string): $TypeGas;
        static FLORINE: $TypeGas;
        static CHLORINE: $TypeGas;
        static IODINE: $TypeGas;
        static BROMIDE: $TypeGas;
        static NONE: $TypeGas;
    }
    /**
     * Values that may be interpreted as {@link $TypeGas}.
     */
    export type $TypeGas_ = "none" | "florine" | "chlorine" | "bromide" | "iodine";
    export class $GasVein {
    }
    export interface $GasVein {
        getType(): $TypeGas;
        setType(arg0: $TypeGas_): void;
        getChunk(): $ChunkPos;
        getCol(): number;
        writeTag(): $CompoundTag;
        setFind(arg0: boolean): void;
        writePacket(arg0: $RegistryAccess): $CustomPacketBuffer;
        removeCol(arg0: number): void;
        isFind(): boolean;
        getMaxCol(): number;
        setCol(arg0: number): void;
        setMaxCol(arg0: number): void;
        get chunk(): $ChunkPos;
    }
    export class $GasVeinBaseSystem {
    }
    export interface $GasVeinBaseSystem {
        unload(): void;
        getEMPTY(): $GasVeinBase;
        getChunkPos(): $List<$ChunkPos>;
        getVein(arg0: $ChunkPos): $GasVeinBase;
        addVein(arg0: $CompoundTag_): void;
        addVein(arg0: $ChunkAccess): void;
        getVeinsList(): $List<$GasVeinBase>;
        get EMPTY(): $GasVeinBase;
        get chunkPos(): $List<$ChunkPos>;
        get veinsList(): $List<$GasVeinBase>;
    }
    export class $GasVeinBase implements $GasVein {
        getType(): $TypeGas;
        setType(arg0: $TypeGas_): void;
        getChunk(): $ChunkPos;
        getCol(): number;
        writeTag(): $CompoundTag;
        setFind(arg0: boolean): void;
        writePacket(arg0: $RegistryAccess): $CustomPacketBuffer;
        removeCol(arg0: number): void;
        isFind(): boolean;
        getMaxCol(): number;
        setCol(arg0: number): void;
        setMaxCol(arg0: number): void;
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $TypeGas_, arg1: $ChunkPos);
        get chunk(): $ChunkPos;
    }
    export class $GasVeinSystem implements $GasVeinBaseSystem {
        unload(): void;
        getEMPTY(): $GasVeinBase;
        getChunkPos(): $List<$ChunkPos>;
        getVein(arg0: $ChunkPos): $GasVeinBase;
        addVein(arg0: $ChunkAccess): void;
        addVein(arg0: $CompoundTag_): void;
        getVeinsList(): $List<$GasVeinBase>;
        static system: $GasVeinBaseSystem;
        static EMPTY: $GasVeinBase;
        constructor();
        get chunkPos(): $List<$ChunkPos>;
        get veinsList(): $List<$GasVeinBase>;
    }
}
