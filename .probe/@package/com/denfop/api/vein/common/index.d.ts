import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $List } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/vein/common" {
    export class $VeinSystem implements $VeinBaseSystem {
        unload(): void;
        getEMPTY(): $VeinBase;
        getChunkPos(): $List<$ChunkPos>;
        getVein(arg0: $ChunkPos): $VeinBase;
        addVein(arg0: $CompoundTag_): void;
        addVein(arg0: $LevelChunk, arg1: $BlockPos_): void;
        getVeinsList(): $List<$VeinBase>;
        static system: $VeinBaseSystem;
        static EMPTY: $VeinBase;
        constructor();
        get chunkPos(): $List<$ChunkPos>;
        get veinsList(): $List<$VeinBase>;
    }
    export class $VeinBaseSystem {
    }
    export interface $VeinBaseSystem {
        unload(): void;
        getEMPTY(): $VeinBase;
        getChunkPos(): $List<$ChunkPos>;
        getVein(arg0: $ChunkPos): $VeinBase;
        addVein(arg0: $CompoundTag_): void;
        addVein(arg0: $LevelChunk, arg1: $BlockPos_): void;
        getVeinsList(): $List<$VeinBase>;
        get EMPTY(): $VeinBase;
        get chunkPos(): $List<$ChunkPos>;
        get veinsList(): $List<$VeinBase>;
    }
    export class $Type extends $Enum<$Type> {
        static values(): $Type[];
        static valueOf(arg0: string): $Type;
        static getID(arg0: number): $Type;
        static OIL: $Type;
        static GAS: $Type;
        static VEIN: $Type;
        static EMPTY: $Type;
    }
    /**
     * Values that may be interpreted as {@link $Type}.
     */
    export type $Type_ = "oil" | "vein" | "gas" | "empty";
    export class $Vein {
    }
    export interface $Vein {
        get(): boolean;
        equals(arg0: $Object): boolean;
        getType(): $Type;
        setType(arg0: $Type_): void;
        getChunk(): $ChunkPos;
        getCol(): number;
        writeTag(): $CompoundTag;
        getMeta(): number;
        setFind(arg0: boolean): void;
        writePacket(arg0: $RegistryAccess): $CustomPacketBuffer;
        removeCol(arg0: number): void;
        isOldMineral(): boolean;
        getMaxCol(): number;
        canMining(): boolean;
        setCol(arg0: number): void;
        setMeta(arg0: number): void;
        setMaxCol(arg0: number): void;
        get chunk(): $ChunkPos;
        set find(value: boolean);
        get oldMineral(): boolean;
    }
    export class $VeinBase implements $Vein {
        get(): boolean;
        getType(): $Type;
        setType(arg0: $Type_): void;
        getChunk(): $ChunkPos;
        getCol(): number;
        writeTag(): $CompoundTag;
        getMeta(): number;
        setFind(arg0: boolean): void;
        writePacket(arg0: $RegistryAccess): $CustomPacketBuffer;
        removeCol(arg0: number): void;
        isFind(): boolean;
        isOldMineral(): boolean;
        getMaxCol(): number;
        canMining(): boolean;
        setCol(arg0: number): void;
        setMeta(arg0: number): void;
        setMaxCol(arg0: number): void;
        setOldMineral(arg0: boolean): void;
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $Type_, arg1: number, arg2: $ChunkPos);
        get chunk(): $ChunkPos;
    }
}
