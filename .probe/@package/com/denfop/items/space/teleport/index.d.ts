import { $IBody } from "@package/com/denfop/api/space";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $PlayerEvent$Clone, $PlayerEvent$PlayerRespawnEvent, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";

declare module "@package/com/denfop/items/space/teleport" {
    export class $SpaceTeleportController$BlockPosLike extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceTeleportController$BlockPosLike}.
     */
    export type $SpaceTeleportController$BlockPosLike_ = { x?: number, y?: number, z?: number,  } | [x?: number, y?: number, z?: number, ];
    export class $SpaceTeleportScreenData$Entry {
        write(arg0: $CustomPacketBuffer): void;
        isBodyEntry(): boolean;
        displayTitle: string;
        systemHeader: boolean;
        bodyName: string;
        indentLevel: number;
        selectable: boolean;
        researchPercent: number;
        dimensionExists: boolean;
        canTeleport: boolean;
        constructor(arg0: string, arg1: string, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: number, arg7: boolean);
        constructor(arg0: $CustomPacketBuffer);
        get bodyEntry(): boolean;
    }
    export class $SpaceTeleportReason extends $Enum<$SpaceTeleportReason> {
        static values(): $SpaceTeleportReason[];
        static valueOf(arg0: string): $SpaceTeleportReason;
        static byOrdinal(arg0: number): $SpaceTeleportReason;
        static INVALID_TARGET: $SpaceTeleportReason;
        static LOW_CHARGE: $SpaceTeleportReason;
        static ITEM_LOST: $SpaceTeleportReason;
        static LOGIN_RECOVERY: $SpaceTeleportReason;
        static MANUAL: $SpaceTeleportReason;
        static NONE: $SpaceTeleportReason;
    }
    /**
     * Values that may be interpreted as {@link $SpaceTeleportReason}.
     */
    export type $SpaceTeleportReason_ = "none" | "manual" | "low_charge" | "item_lost" | "login_recovery" | "invalid_target";
    export class $SpaceTeleportController {
        static ensureItemUuid(arg0: $ItemStack_): void;
        static onPlayerTick(arg0: $PlayerTickEvent$Post): void;
        static clearSession(arg0: $ServerPlayer): void;
        static onLogin(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        static onRespawn(arg0: $PlayerEvent$PlayerRespawnEvent): void;
        static onClone(arg0: $PlayerEvent$Clone): void;
        static loadSession(arg0: $ServerPlayer): $SpaceTeleportSession;
        static requestTeleport(arg0: $ServerPlayer, arg1: string): void;
        static requestReturn(arg0: $ServerPlayer): void;
        static saveSession(arg0: $ServerPlayer, arg1: $SpaceTeleportSession): void;
        static buildScreenData(arg0: $ServerPlayer, arg1: $ItemStack_): $SpaceTeleportScreenData;
        static TELEPORT_START_COST: number;
        static OUTBOUND_PREP_TICKS: number;
        static SAFE_SEARCH_RADIUS: number;
        static EMERGENCY_PREP_TICKS: number;
        static CRITICAL_CHARGE: number;
        static RETURN_PREP_TICKS: number;
    }
    export class $SpaceTeleportSession {
        clear(): void;
        write(): $CompoundTag;
        read(arg0: $CompoundTag_): void;
        isActive(): boolean;
        getRemainingTicks(arg0: number): number;
        originZ: number;
        phase: $SpaceTeleportPhase;
        reason: $SpaceTeleportReason;
        trackedItemUuid: string;
        originX: number;
        originDimension: string;
        originY: number;
        originYaw: number;
        targetBodyName: string;
        phaseEndGameTime: number;
        originPitch: number;
        static TAG_NAME: string;
        constructor();
        constructor(arg0: $CompoundTag_);
        get active(): boolean;
    }
    export class $SpaceTeleportSafePositionFinder {
        static findNearestSafe(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number): $BlockPos;
    }
    export class $SpaceTeleportScreenData {
        write(arg0: $CustomPacketBuffer): void;
        setScreen(): void;
        phase: $SpaceTeleportPhase;
        returnCountdownTicks: number;
        reason: $SpaceTeleportReason;
        entries: $List<$SpaceTeleportScreenData$Entry>;
        currentCharge: number;
        maxCharge: number;
        ticksUntilCritical: number;
        activeBodyName: string;
        itemPresent: boolean;
        sessionActive: boolean;
        selectedBodyName: string;
        constructor(arg0: $List_<$SpaceTeleportScreenData$Entry>, arg1: string, arg2: number, arg3: number, arg4: boolean, arg5: $SpaceTeleportPhase_, arg6: string, arg7: number, arg8: number, arg9: $SpaceTeleportReason_, arg10: boolean);
        constructor(arg0: $CustomPacketBuffer);
    }
    export class $SpaceTeleportEnergyLogic {
        static estimateRemainingTicks(arg0: number, arg1: $IBody, arg2: number, arg3: number): number;
        static getActiveDrainPerSecond(arg0: $IBody, arg1: number, arg2: number): number;
        static getTeleportCost(arg0: $IBody, arg1: number): number;
        static getDistanceMultiplier(arg0: $IBody): number;
        static getDesiredStaySeconds(arg0: $IBody): number;
        static getLocalDistanceUnits(arg0: $IBody): number;
        static getSystemDistanceUnits(arg0: $IBody): number;
        static getReturnCost(arg0: $IBody, arg1: number): number;
        static getDistanceUnits(arg0: $IBody): number;
        static DEFAULT_MAX_CHARGE: number;
        static DEFAULT_CRITICAL_CHARGE: number;
    }
    export class $SpaceTeleportPhase extends $Enum<$SpaceTeleportPhase> {
        static values(): $SpaceTeleportPhase[];
        static valueOf(arg0: string): $SpaceTeleportPhase;
        static byOrdinal(arg0: number): $SpaceTeleportPhase;
        static RETURN_PREP: $SpaceTeleportPhase;
        static ACTIVE: $SpaceTeleportPhase;
        static INACTIVE: $SpaceTeleportPhase;
        static OUTBOUND_PREP: $SpaceTeleportPhase;
    }
    /**
     * Values that may be interpreted as {@link $SpaceTeleportPhase}.
     */
    export type $SpaceTeleportPhase_ = "inactive" | "outbound_prep" | "active" | "return_prep";
    export class $SpaceTeleportFxType extends $Enum<$SpaceTeleportFxType> {
        static values(): $SpaceTeleportFxType[];
        static valueOf(arg0: string): $SpaceTeleportFxType;
        static byOrdinal(arg0: number): $SpaceTeleportFxType;
        static RETURN_TUNNEL: $SpaceTeleportFxType;
        static ARRIVAL: $SpaceTeleportFxType;
        static RETURN_ARRIVAL: $SpaceTeleportFxType;
        static OUTBOUND_TUNNEL: $SpaceTeleportFxType;
        static RETURN_CHARGE: $SpaceTeleportFxType;
        static NONE: $SpaceTeleportFxType;
        static OUTBOUND_CHARGE: $SpaceTeleportFxType;
    }
    /**
     * Values that may be interpreted as {@link $SpaceTeleportFxType}.
     */
    export type $SpaceTeleportFxType_ = "none" | "outbound_charge" | "outbound_tunnel" | "arrival" | "return_charge" | "return_tunnel" | "return_arrival";
}
