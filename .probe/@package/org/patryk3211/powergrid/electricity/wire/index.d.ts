import { $WireItemEntry } from "@package/org/patryk3211/powergrid/electricity/wire/registry";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item_, $DyeColor_, $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SubLevelAccess } from "@package/dev/ryanhcode/sable/companion";
import { $EntityDimensions, $EntityType_, $Entity$RemovalReason, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $UUID } from "@package/java/util";
import { $OwnedFloatingNode } from "@package/org/patryk3211/powergrid/electricity/sim/node";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $EntityDataS2CPacket$IConsumer } from "@package/org/patryk3211/powergrid/network/packets";
import { $Enum, $Class } from "@package/java/lang";
import { $ElectricalNetwork } from "@package/org/patryk3211/powergrid/electricity/sim";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
export * as registry from "@package/org/patryk3211/powergrid/electricity/wire/registry";

declare module "@package/org/patryk3211/powergrid/electricity/wire" {
    export class $IWireEndpoint {
    }
    export interface $IWireEndpoint {
        type(): $WireEndpointType;
        write(arg0: $CompoundTag_): void;
        read(arg0: $CompoundTag_): void;
        getNode(world: $Level_): $OwnedFloatingNode;
        isValid(world: $Level_): boolean;
        serialize(): $CompoundTag;
        getSubLevel(world: $Level_): $SubLevelAccess;
        makeOffset(offset: $BlockPos_): $IWireEndpoint;
        getExactPosition(arg0: $Level_): $Vec3;
        canAcceptType<T extends $BaseWireEntity>(clazz: $Class<T>): boolean;
        assignWireEntity(entity: $BaseWireEntity): void;
        moveWireEntity(entity: $BaseWireEntity): void;
        removeWireEntity(entity: $BaseWireEntity): void;
        joinNetwork(world: $Level_, network: $ElectricalNetwork): void;
    }
    export class $WireEndpointType extends $Enum<$WireEndpointType> {
        static values(): $WireEndpointType[];
        static valueOf(name: string): $WireEndpointType;
        serialize(endpoint: $IWireEndpoint): $CompoundTag;
        static deserialize(tag: $CompoundTag_): $IWireEndpoint;
        isConnectable(): boolean;
        static AUTO_CORD: $WireEndpointType;
        static SPLIT_CORD: $WireEndpointType;
        static BLOCK: $WireEndpointType;
        static SOCKET: $WireEndpointType;
        static BLOCK_WIRE: $WireEndpointType;
        static CIRCUIT_BOARD: $WireEndpointType;
        static IMAGINARY: $WireEndpointType;
        static JUNCTION: $WireEndpointType;
        static DEFERRED_JUNCTION: $WireEndpointType;
        get connectable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WireEndpointType}.
     */
    export type $WireEndpointType_ = "block" | "junction" | "block_wire" | "imaginary" | "deferred_junction" | "circuit_board" | "socket" | "split_cord" | "auto_cord";
    export class $BaseWireEntity extends $Entity implements $EntityDataS2CPacket$IConsumer {
        current(): number;
        setColor(color: number): void;
        setColor(color: $DyeColor_): void;
        getItem(): $Item;
        getColor(): number;
        setItem(item: $Item_, count: number): void;
        getTemperature(): number;
        isConnectedTo(pos: $BlockPos_, terminal: number): boolean;
        getWireCount(): number;
        getResistance(): number;
        getWireEntry(): $WireItemEntry;
        getEndpoint1(): $IWireEndpoint;
        setEndpoint1(endpoint: $IWireEndpoint): void;
        setEndpoint2(endpoint: $IWireEndpoint): void;
        sublevelMove(endpoint1: $IWireEndpoint, endpoint2: $IWireEndpoint): void;
        isOverheated(): boolean;
        onEntityDataPacket(data: $CompoundTag_): void;
        getEndpoint2(): $IWireEndpoint;
        flipEndpoints(): void;
        measuredCurrent(): number;
        incrementWireCount(count: number): void;
        static entityUnload(entity: $Entity, world: $ServerLevel): void;
        sendExtraData(): void;
        endpointRemoved(endpoint: $IWireEndpoint): void;
        makeWire(): void;
        dropWire(): void;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(type: $EntityType_<never>, world: $Level_);
        get temperature(): number;
        get wireCount(): number;
        get resistance(): number;
        get wireEntry(): $WireItemEntry;
        get overheated(): boolean;
    }
}
