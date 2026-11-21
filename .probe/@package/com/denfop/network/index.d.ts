import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $EncodedType_, $CustomPacketBuffer, $IPacket } from "@package/com/denfop/network/packet";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $Queue, $List, $Map, $Collection } from "@package/java/util";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $RegisterPayloadHandlersEvent } from "@package/net/neoforged/neoforge/network/event";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object, $Runnable, $Class } from "@package/java/lang";
import { $IWorldTickCallback } from "@package/com/denfop/world";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as packet from "@package/com/denfop/network/packet";

declare module "@package/com/denfop/network" {
    export class $WorldData {
        static get(arg0: $Level_, arg1: boolean): $WorldData;
        static get(arg0: $Level_): $WorldData;
        getWorld(): $Level;
        static onWorldUnload(arg0: $Level_): void;
        static onWorldLoad(arg0: $Level_): void;
        static onServerStopped(): void;
        static onServerStopping(): void;
        static isStoppingOrUnloading(arg0: $Level_): boolean;
        static idxClient: $Map<$ResourceKey<$Level>, $WorldData>;
        mapUpdateContainer: $Map<$BlockEntityBase, $Map<$Player, $CustomPacketBuffer>>;
        mapUpdateField: $Map<$BlockEntityBase, $List<$CustomPacketBuffer>>;
        static idxServer: $Map<$ResourceKey<$Level>, $WorldData>;
        mapUpdateOvertimeField: $Map<$BlockPos, $BlockEntityBase>;
        singleUpdates: $Queue<$IWorldTickCallback>;
        listUpdateTile: $List<$BlockEntityBase>;
        constructor(arg0: $Level_);
        get world(): $Level;
    }
    export class $DecoderHandler {
        static decode(arg0: $CustomPacketBuffer, arg1: $EncodedType_): $Object;
        static decode(arg0: $CustomPacketBuffer): $Object;
        static decode<T>(arg0: $CustomPacketBuffer, arg1: $Class<T>): T;
        static getValue<T>(arg0: $Object): T;
        static getBlock(arg0: $ResourceLocation_): $Block;
        static decodeDeferred(arg0: $CustomPacketBuffer, arg1: $Class<never>): $Object;
        constructor();
    }
    export class $EncoderHandler {
        static encode(arg0: $CustomPacketBuffer, arg1: $Object, arg2: boolean): void;
        static encode(arg0: $CustomPacketBuffer, arg1: $Object): void;
        constructor();
    }
    export class $DistExecutor {
        static unsafeRunForDist<T>(arg0: $Supplier_<$Supplier<T>>, arg1: $Supplier_<$Supplier<T>>): T;
        static unsafeRunWhenOn(arg0: $Dist_, arg1: $Supplier_<$Runnable>): void;
        constructor();
    }
    export class $NetworkManagerClient extends $NetworkManager {
        static packetMap: $Map<number, $IPacket>;
        static reg: boolean;
        static packetTypeMap: $Map<number, $CustomPacketPayload$Type<$IPacket>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IPacket>;
        constructor();
    }
    export class $UpdateTileEntityPacket {
        static send(arg0: $WorldData): void;
        constructor();
    }
    export class $IUpdatableTileEvent {
    }
    export interface $IUpdatableTileEvent {
        updateTileServer(arg0: $Player, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IUpdatableTileEvent}.
     */
    export type $IUpdatableTileEvent_ = ((arg0: $Player, arg1: number) => void);
    export class $NetworkManager {
        register(arg0: $RegisterPayloadHandlersEvent): void;
        sendPacket(arg0: $IPacket, arg1: $Player, arg2: $CustomPacketBuffer): void;
        sendPacket(arg0: $IPacket, arg1: $CustomPacketBuffer, arg2: $ServerPlayer): void;
        sendPacket(arg0: $IPacket, arg1: $ServerPlayer): void;
        sendPacket(arg0: $IPacket): void;
        sendPacket(arg0: $IPacket, arg1: $CustomPacketBuffer): void;
        registerPacket(arg0: $IPacket): void;
        onTickEnd(arg0: $WorldData): void;
        static getPlayersInRange<T extends $Collection<$ServerPlayer>>(arg0: $Level_, arg1: $BlockPos_, arg2: T): T;
        addTileFieldToUpdate(arg0: $BlockEntityBase, arg1: $CustomPacketBuffer): void;
        addTileContainerToUpdate(arg0: $BlockEntityBase, arg1: $ServerPlayer, arg2: $CustomPacketBuffer): void;
        makePacket(arg0: $IPacket): $IPacket;
        makePacket(arg0: $IPacket, arg1: $CustomPacketBuffer): $IPacket;
        addTileToOvertimeUpdate(arg0: $BlockEntityBase): void;
        removeTileToOvertimeUpdate(arg0: $BlockEntityBase): void;
        onPacketData(arg0: $CustomPacketBuffer, arg1: number): void;
        onPacketData(arg0: $CustomPacketBuffer, arg1: $IPayloadContext): void;
        addTileToUpdate(arg0: $BlockEntityBase): void;
        static packetMap: $Map<number, $IPacket>;
        static reg: boolean;
        static packetTypeMap: $Map<number, $CustomPacketPayload$Type<$IPacket>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IPacket>;
        constructor();
    }
    export class $Sides<T> {
        getClient(): T;
        getServer(): T;
        constructor(arg0: string, arg1: string);
        get client(): T;
        get server(): T;
    }
}
