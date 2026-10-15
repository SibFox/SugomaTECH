import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Inventory } from "@package/com/denfop/inventory";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $EventAdderChannel, $EventRemoverChannel, $EventLoadTesseract, $EventUnLoadTesseract } from "@package/com/denfop/api/tesseract/event";
import { $Enum } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $Fluids$InternalFluidTank, $Energy } from "@package/com/denfop/componets";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
export * as event from "@package/com/denfop/api/tesseract/event";

declare module "@package/com/denfop/api/tesseract" {
    export class $ChannelHandler {
        removeChannel(arg0: $Channel): void;
        addChannel(arg0: $Channel): void;
        getListItem(): $List<$Channel>;
        getListFluid(): $List<$Channel>;
        getListEnergy(): $List<$Channel>;
        constructor();
        get listItem(): $List<$Channel>;
        get listFluid(): $List<$Channel>;
        get listEnergy(): $List<$Channel>;
    }
    export class $ITesseract {
    }
    export interface $ITesseract {
        getChannel(arg0: number): $Channel;
        getPos(): $BlockPos;
        getPlayer(): string;
        getWorld(): $Level;
        getEnergy(): $Energy;
        getTank(): $Fluids$InternalFluidTank;
        getSlotItem(): $Inventory;
        getChannels(): $List<$Channel>;
        get pos(): $BlockPos;
        get player(): string;
        get world(): $Level;
        get energy(): $Energy;
        get tank(): $Fluids$InternalFluidTank;
        get slotItem(): $Inventory;
        get channels(): $List<$Channel>;
    }
    export class $Channel {
        isPrivate(): boolean;
        isActive(): boolean;
        getChannel(): number;
        getPos(): $BlockPos;
        setMode(arg0: $TypeMode_): void;
        getMode(): $TypeMode;
        setActive(arg0: boolean): void;
        setPos(arg0: $BlockPos_): void;
        writeNBT(): $CompoundTag;
        setPrivate(arg0: boolean): void;
        setTesseract(arg0: $ITesseract): void;
        setTypeChannel(arg0: $TypeChannel_): void;
        getTypeChannel(): $TypeChannel;
        getTesseract(): $ITesseract;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: number, arg1: $TypeMode_, arg2: $TypeChannel_, arg3: boolean);
        constructor(arg0: number, arg1: $ITesseract, arg2: $TypeMode_, arg3: $TypeChannel_, arg4: boolean);
        get channel(): number;
    }
    export class $TesseractSystem implements $ITesseractSystem {
        static init(): void;
        onWorldUnload(arg0: $Level_): void;
        onTick(arg0: $Level_): void;
        getForWorld(arg0: $Level_): $TesseractLocalSystem;
        getPublicChannels(arg0: $Level_): $List<$Channel>;
        addTesseract(arg0: $ITesseract): void;
        removeChannel(arg0: $Channel): void;
        removeTesseract(arg0: $ITesseract): void;
        addChannel(arg0: $Channel): void;
        static instance: $TesseractSystem;
        static localSystemMap: $Map<$ResourceKey<$Level>, $TesseractLocalSystem>;
    }
    export class $TypeChannel extends $Enum<$TypeChannel> {
        static values(): $TypeChannel[];
        static valueOf(arg0: string): $TypeChannel;
        static ITEM: $TypeChannel;
        static ENERGY: $TypeChannel;
        static FLUID: $TypeChannel;
        static NONE: $TypeChannel;
    }
    /**
     * Values that may be interpreted as {@link $TypeChannel}.
     */
    export type $TypeChannel_ = "item" | "fluid" | "energy" | "none";
    export class $TypeMode extends $Enum<$TypeMode> {
        static values(): $TypeMode[];
        static valueOf(arg0: string): $TypeMode;
        static INOUT: $TypeMode;
        static INPUT: $TypeMode;
        static OUTPUT: $TypeMode;
        static NONE: $TypeMode;
    }
    /**
     * Values that may be interpreted as {@link $TypeMode}.
     */
    export type $TypeMode_ = "input" | "output" | "inout" | "none";
    export class $TesseractLocalSystem {
        remove(arg0: $ITesseract): void;
        add(arg0: $ITesseract): void;
        onTick(): void;
        onUnload(): void;
        getPublicChannels(): $List<$Channel>;
        removeChannel(arg0: $Channel): void;
        addChannel(arg0: $Channel): void;
        constructor();
        get publicChannels(): $List<$Channel>;
    }
    export class $ITesseractSystem {
    }
    export interface $ITesseractSystem {
        onWorldUnload(arg0: $Level_): void;
        onTick(arg0: $Level_): void;
        getPublicChannels(arg0: $Level_): $List<$Channel>;
        addTesseract(arg0: $ITesseract): void;
        removeChannel(arg0: $Channel): void;
        removeTesseract(arg0: $ITesseract): void;
        addChannel(arg0: $Channel): void;
    }
    export class $EventHandler {
        tick(arg0: $LevelTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        addTesseract(arg0: $EventLoadTesseract): void;
        removeChannel(arg0: $EventRemoverChannel): void;
        removeTesseract(arg0: $EventUnLoadTesseract): void;
        addChannel(arg0: $EventAdderChannel): void;
        constructor();
    }
}
