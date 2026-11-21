import { $IResearchTable } from "@package/com/denfop/api/space/research/api";
import { $GasSensorScanState } from "@package/com/denfop/api/gassensor";
import { $EnumSound_ } from "@package/com/denfop/sound";
import { $IFakeBody } from "@package/com/denfop/api/space/fakebody";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ChunkLevel } from "@package/com/denfop/api/pollution/component";
import { $Map_, $Collection_, $List_, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Point } from "@package/com/denfop/items/relocator";
import { $IBody } from "@package/com/denfop/api/space";
import { $PollutionAnalyzerSnapshot } from "@package/com/denfop/api/pollution/analyzer";
import { $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $EnumPlayerAbility_ } from "@package/com/denfop/ability";
import { $BlockEntityResearchTableSpace } from "@package/com/denfop/blockentity/mechanism";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $SpaceTeleportFxType_, $SpaceTeleportPhase_, $SpaceTeleportReason_ } from "@package/com/denfop/items/space/teleport";
import { $Explosion, $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $IColony } from "@package/com/denfop/api/space/colonies/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerStreakInfo } from "@package/com/denfop/render/streak";
import { $BlockEntityPatternMonitor, $BlockEntityPreCraft } from "@package/com/denfop/blockentity/storage";
import { $ContainerMenuBase } from "@package/com/denfop/containermenu";
import { $SameStack } from "@package/com/denfop/api/storage/autocrafting";
import { $EnumSolarPanels_, $BlockEntitySolarPanel } from "@package/com/denfop/blockentity/panels/entity";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $Radiation } from "@package/com/denfop/api/pollution/radiation";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/network/packet" {
    export class $PacketItemStackUpdate implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: string, arg1: $Object, arg2: $ServerPlayer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PackerUpdateClientAddStack implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $ItemStack_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateRelocator implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketCreateAutoSends implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $EnumTypePacket extends $Enum<$EnumTypePacket> {
        static values(): $EnumTypePacket[];
        static valueOf(arg0: string): $EnumTypePacket;
        static SERVER: $EnumTypePacket;
        static CLIENT: $EnumTypePacket;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypePacket}.
     */
    export type $EnumTypePacket_ = "server" | "client";
    export class $PacketChangeSpaceOperation implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSpaceTeleportStateSync implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: boolean, arg2: $SpaceTeleportPhase_, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $SpaceTeleportReason_, arg9: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketAddRelocatorPoint implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $Point);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketRadiationChunk implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Radiation);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateSkipQuest implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: string, arg2: string);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $CustomPacketBuffer extends $RegistryFriendlyByteBuf {
        flip(): void;
        readString(): string;
        writeString(arg0: string): $CustomPacketBuffer;
        toByteBuf(): $ByteBuf;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        constructor(arg0: $RegistryAccess);
        constructor(arg0: number[], arg1: $RegistryAccess);
        constructor(arg0: number, arg1: $RegistryAccess);
        constructor(arg0: $ByteBuf, arg1: $RegistryAccess);
        constructor(arg0: $RegistryFriendlyByteBuf);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $PacketUpdateStorageForCraft implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $Map_<string, $Map_<$SameStack, number>>, arg1: $BlockPos_, arg2: $Level_);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketCanAddCraft implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $BlockPos_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketReturnRoversToPlanet implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $IResearchTable, arg1: $Player, arg2: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateBody implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockEntityResearchTableSpace, arg1: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateNetworkSystem implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Level_, arg1: $List_<$BlockPos_>, arg2: $BlockPos_, arg3: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateMonitor implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: string);
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: number);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSynhronyzationRelocator implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $List_<$Point>);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketPollution implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Collection_<$ChunkLevel>, arg1: $Collection_<$ChunkLevel>, arg2: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketRadiation implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $List_<$Radiation>, arg1: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PackerUpdateClientRemoveStack implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $ItemStack_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketPlanetaryTeleportRequest implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: string, arg1: $Level_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $IUpdatableItemStack {
    }
    export interface $IUpdatableItemStack {
        readContainer(arg0: $CustomPacketBuffer): void;
        writeContainer(): $CustomPacketBuffer;
    }
    export class $INetworkObject {
    }
    export interface $INetworkObject {
        writePacket(arg0: $CustomPacketBuffer): $CustomPacketBuffer;
    }
    /**
     * Values that may be interpreted as {@link $INetworkObject}.
     */
    export type $INetworkObject_ = ((arg0: $CustomPacketBuffer) => $CustomPacketBuffer);
    export class $PacketActivateAbility implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketOpenPlanetaryTranslocatorScreen implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $ItemStack_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateFakeBody implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $IResearchTable, arg1: $IFakeBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketChangeSameStack implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $BlockEntityPreCraft, arg1: boolean, arg2: number, arg3: $SameStack, arg4: boolean);
        constructor(arg0: $BlockEntityPatternMonitor, arg1: boolean, arg2: number, arg3: $SameStack, arg4: boolean);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSendRoversToPlanet implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $IResearchTable, arg1: $Player, arg2: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketCreateNetwork implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockPos_, arg1: $Level_, arg2: $List_<$BlockPos_>);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSyncAbilityCooldowns implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        buffer: $CustomPacketBuffer;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $Map_<$EnumPlayerAbility_, number>);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketChangeSolarPanel implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $EnumSolarPanels_, arg1: $BlockEntitySolarPanel);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSoundPlayer implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $EnumSound_, arg1: $Player);
        constructor(arg0: string, arg1: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSetFluid implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockEntityPatternMonitor, arg1: boolean, arg2: number, arg3: $SameStack, arg4: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketDeleteColony implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $IPacket {
    }
    export interface $IPacket extends $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$IPacket>;
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketColorPickerAllLoggIn implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PollutionPacketIO {
        static writeChunkLevel(arg0: $CustomPacketBuffer, arg1: $ChunkLevel): void;
        static applyChunkLevel(arg0: $ChunkLevel, arg1: $EnumPollutionSyncType_): void;
        static readChunkLevel(arg0: $CustomPacketBuffer): $ChunkLevel;
        static writeType(arg0: $CustomPacketBuffer, arg1: $EnumPollutionSyncType_): void;
        static readType(arg0: $CustomPacketBuffer): $EnumPollutionSyncType;
    }
    export class $PacketRemoveStack implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_);
        constructor(arg0: $Player, arg1: $FluidStack_, arg2: $Level_, arg3: $BlockPos_);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateOvertimeTile implements $IPacket {
        static apply(arg0: $BlockPos_, arg1: $Level_, arg2: number[]): void;
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $CustomPacketBuffer, arg1: $ServerPlayer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketAddStack implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $Player, arg1: $FluidStack_, arg2: $BlockPos_);
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $BlockPos_);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketAddBuildingToColony implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $IColony, arg1: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdatePreCraft implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: number, arg3: $SameStack);
        constructor(arg0: $BlockEntityPreCraft, arg1: boolean, arg2: number, arg3: $SameStack, arg4: boolean);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSuccessUpdateColony implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSendResourceToEarth implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateRadiationValue implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ChunkPos, arg1: number, arg2: $ServerLevel);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateInventory implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ContainerMenuBase<$CustomWorldContainer>, arg1: $ServerPlayer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdatePatternMonitor implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockEntityPatternMonitor, arg1: $ItemStack_, arg2: number, arg3: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateFieldTile implements $IPacket {
        static apply(arg0: $BlockPos_, arg1: $Level_, arg2: number[]): void;
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $CustomPacketBuffer, arg1: $ServerPlayer);
        constructor(arg0: $BlockEntityBase, arg1: string, arg2: $Object);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketClientUpdateNetworkSystem implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketPollutionAnalyzerSnapshot implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $PollutionAnalyzerSnapshot, arg1: $ServerPlayer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketItemStackEvent implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: number, arg1: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketGasSensorScanProgress implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $GasSensorScanState);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $EncodedType extends $Enum<$EncodedType> {
        static values(): $EncodedType[];
        static valueOf(arg0: string): $EncodedType;
        static Enum: $EncodedType;
        static Null: $EncodedType;
        static DataOre: $EncodedType;
        static Radiation: $EncodedType;
        static NBTTagCompound: $EncodedType;
        static BaseFluidRecipe: $EncodedType;
        static String: $EncodedType;
        static World: $EncodedType;
        static Item: $EncodedType;
        static Vec3: $EncodedType;
        static BlockPos: $EncodedType;
        static ChunkPos: $EncodedType;
        static Boolean: $EncodedType;
        static UUID: $EncodedType;
        static Vein: $EncodedType;
        static Short: $EncodedType;
        static inputStack: $EncodedType;
        static Character: $EncodedType;
        static classToTypeMap: $Map<$Class<never>, $EncodedType>;
        static RecipeInfo: $EncodedType;
        static Fluid: $EncodedType;
        cls: $Class<never>;
        static Double: $EncodedType;
        static Float: $EncodedType;
        static recipeOutput: $EncodedType;
        static GameProfile: $EncodedType;
        static Byte: $EncodedType;
        static Long: $EncodedType;
        static Block: $EncodedType;
        static Collection: $EncodedType;
        static Object: $EncodedType;
        static ItemStack: $EncodedType;
        static Enchantment: $EncodedType;
        static DataComponentPatch: $EncodedType;
        static MachineRecipe: $EncodedType;
        static FluidStack: $EncodedType;
        static TileEntity: $EncodedType;
        static tuple: $EncodedType;
        static ResourceLocation: $EncodedType;
        static BaseRecipe: $EncodedType;
        static network_object: $EncodedType;
        static Component: $EncodedType;
        static types: $EncodedType[];
        static Potion: $EncodedType;
        threadSafe: boolean;
        static InvSlot: $EncodedType;
        static inputFluidStack: $EncodedType;
        static Array: $EncodedType;
        static Integer: $EncodedType;
        static FluidTank: $EncodedType;
    }
    /**
     * Values that may be interpreted as {@link $EncodedType}.
     */
    export type $EncodedType_ = "null" | "array" | "byte" | "short" | "integer" | "long" | "float" | "double" | "boolean" | "character" | "network_object" | "string" | "enum" | "uuid" | "block" | "item" | "tileentity" | "itemstack" | "world" | "nbttagcompound" | "resourcelocation" | "gameprofile" | "potion" | "enchantment" | "blockpos" | "chunkpos" | "vec3" | "fluid" | "vein" | "machinerecipe" | "fluidstack" | "fluidtank" | "invslot" | "tuple" | "datacomponentpatch" | "baserecipe" | "basefluidrecipe" | "recipeoutput" | "inputstack" | "inputfluidstack" | "component" | "radiation" | "collection" | "recipeinfo" | "dataore" | "object";
    export class $PacketUpdateStorageCell implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $List_<$SameStack>, arg1: boolean, arg2: boolean, arg3: $BlockPos_, arg4: $Level_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketRelocatorTeleportPlayer implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $Point);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketPlanetaryReturnRequest implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: boolean, arg1: $Level_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketClearUpdatePatternMonitor implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockEntityPatternMonitor);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateInformationAboutQuestsPlayer implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Map_<string, $List_<string>>, arg1: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $IUpdatableItemStackEvent {
    }
    export interface $IUpdatableItemStackEvent {
        updateField(arg0: string, arg1: $CustomPacketBuffer, arg2: $ItemStack_): void;
        updateEvent(arg0: number, arg1: $ItemStack_): void;
    }
    export class $PacketGasSensorScanResult implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $GasSensorScanState);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketCanAddCraftClient implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $EnumPollutionSyncType extends $Enum<$EnumPollutionSyncType> {
        static values(): $EnumPollutionSyncType[];
        static valueOf(arg0: string): $EnumPollutionSyncType;
        getId(): number;
        static byId(arg0: number): $EnumPollutionSyncType;
        static SOIL: $EnumPollutionSyncType;
        static AIR: $EnumPollutionSyncType;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumPollutionSyncType}.
     */
    export type $EnumPollutionSyncType_ = "air" | "soil";
    export class $PacketColorPicker implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $PlayerStreakInfo, arg1: string, arg2: $RegistryAccess);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketStopSoundPlayer implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $EnumSound_, arg1: $Player);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateServerTile implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockEntity, arg1: number);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketDrainFluidPipette implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockEntity, arg1: string, arg2: number);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketPollutionAnalyzerRequest implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: boolean, arg1: $RegistryAccess);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateCompleteQuest implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: string, arg2: string);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketGasSensorScanRequest implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: number, arg1: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateRecipe implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: string, arg1: boolean, arg2: $ServerPlayer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateBookMarks implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $DataComponentPatch_, arg1: $Player);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketRemoveShiftStack implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        addItemStackToInventory(arg0: $Player, arg1: $ItemStack_): $ItemStack;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateFieldContainerTile implements $IPacket {
        static apply(arg0: $BlockPos_, arg1: $Level_, arg2: number[]): void;
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $CustomPacketBuffer, arg1: $ServerPlayer);
        constructor(arg0: $BlockEntityBase, arg1: $ServerPlayer);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketRadiationUpdateValue implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: number);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateVeinData implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ServerPlayer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateMonitorInterface implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketSpaceTeleportFx implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $SpaceTeleportFxType_, arg2: number, arg3: string, arg4: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketKeys implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: number, arg1: $RegistryAccess);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketStopSound implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketFixerRecipe implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $ServerPlayer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketCreateColony implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $IBody);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketAddAutoCraft implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $SameStack);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketAbstractComponent implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $BlockEntityBase, arg1: string, arg2: $ServerPlayer, arg3: $CustomPacketBuffer);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketRemoveRelocatorPoint implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Player, arg1: $Point);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdatePollution implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Level_, arg1: $ChunkLevel, arg2: $EnumPollutionSyncType_);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketExplosion implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Explosion, arg1: number, arg2: boolean, arg3: boolean);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateTile implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $CustomPacketBuffer, arg1: $ServerPlayer);
        constructor(arg0: $BlockEntityBase);
        constructor();
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
    export class $PacketUpdateRadiation implements $IPacket {
        getId(): number;
        readPacket(arg0: $CustomPacketBuffer, arg1: $Player): void;
        getPacketBuffer(): $CustomPacketBuffer;
        setPacketBuffer(arg0: $CustomPacketBuffer): void;
        getPacketType(): $EnumTypePacket;
        type(): $CustomPacketPayload$Type<$IPacket>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor();
        constructor(arg0: $Radiation, arg1: $ServerLevel);
        get id(): number;
        get packetType(): $EnumTypePacket;
    }
}
