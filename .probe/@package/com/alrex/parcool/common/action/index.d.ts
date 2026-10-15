import { $Supplier_ } from "@package/java/util/function";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Parkourability } from "@package/com/alrex/parcool/common/attachment/common";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparable, $Enum } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $RenderFrameEvent } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/alrex/parcool/common/action" {
    export class $Action {
        finish(arg0: $Player): void;
        start(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        onStart(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        tick(): void;
        isDoing(): boolean;
        onServerTick(arg0: $Player, arg1: $Parkourability): void;
        onClientTick(arg0: $Player, arg1: $Parkourability): void;
        getNotDoingTick(): number;
        canContinue(arg0: $Player, arg1: $Parkourability): boolean;
        onWorkingTick(arg0: $Player, arg1: $Parkourability): void;
        onStop(arg0: $Player): void;
        onTick(arg0: $Player, arg1: $Parkourability): void;
        canStart(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): boolean;
        onRenderTick(arg0: $RenderFrameEvent, arg1: $Player, arg2: $Parkourability): void;
        getDoingTick(): number;
        getStatusValue(arg0: $LocalPlayer, arg1: $Parkourability): number;
        isJustStarted(): boolean;
        onStopInServer(arg0: $Player): void;
        onStartInServer(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        getTickFromLastStarted(): number;
        wantsToShowStatusBar(arg0: $LocalPlayer, arg1: $Parkourability): boolean;
        onStartInOtherClient(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        onStopInOtherClient(arg0: $Player): void;
        onStartInLocalClient(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        restoreSynchronizedState(arg0: $ByteBuffer): void;
        onStopInLocalClient(arg0: $Player): void;
        getStaminaConsumeTiming(): $StaminaConsumeTiming;
        onWorkingTickInOtherClient(arg0: $Player, arg1: $Parkourability): void;
        onWorkingTickInServer(arg0: $Player, arg1: $Parkourability): void;
        onWorkingTickInClient(arg0: $Player, arg1: $Parkourability): void;
        onWorkingTickInLocalClient(arg0: $Player, arg1: $Parkourability): void;
        saveSynchronizedState(arg0: $ByteBuffer): void;
        constructor();
        get doing(): boolean;
        get notDoingTick(): number;
        get doingTick(): number;
        get justStarted(): boolean;
        get tickFromLastStarted(): number;
        get staminaConsumeTiming(): $StaminaConsumeTiming;
    }
    export class $BehaviorEnforcer$ID implements $Comparable<$BehaviorEnforcer$ID> {
        compareTo(arg0: $BehaviorEnforcer$ID): number;
    }
    export class $StaminaConsumeTiming extends $Enum<$StaminaConsumeTiming> {
        static values(): $StaminaConsumeTiming[];
        static valueOf(arg0: string): $StaminaConsumeTiming;
        static OnWorking: $StaminaConsumeTiming;
        static OnStart: $StaminaConsumeTiming;
        static None: $StaminaConsumeTiming;
    }
    /**
     * Values that may be interpreted as {@link $StaminaConsumeTiming}.
     */
    export type $StaminaConsumeTiming_ = "none" | "onstart" | "onworking";
    export class $BehaviorEnforcer {
        getEnforcedPosition(): $Vec3;
        cancelJump(): boolean;
        cancelSprint(): boolean;
        static newID(): $BehaviorEnforcer$ID;
        addMarkerCancellingDescendFromEdge(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        cancelFallFlying(): boolean;
        cancelSneak(): boolean;
        cancelDescendFromEdge(): boolean;
        getEnforcedMovePoint(): $Vec3;
        addMarkerCancellingFallFlying(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        cancelShowingName(): boolean;
        addMarkerCancellingJump(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        addMarkerCancellingShowName(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        setMarkerEnforceMovePoint(arg0: $BehaviorEnforcer$Marker_, arg1: $Supplier_<$Vec3>): void;
        addMarkerCancellingSprint(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        addMarkerCancellingSneak(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        setMarkerEnforcePosition(arg0: $BehaviorEnforcer$Marker_, arg1: $Supplier_<$Vec3>): void;
        constructor();
        get enforcedPosition(): $Vec3;
        get enforcedMovePoint(): $Vec3;
    }
    export class $AdditionalProperties {
        getNotCreativeFlyingTick(): number;
        getActualNotLandingTick(): number;
        onJump(): void;
        isInAirByJumping(): boolean;
        getNotInWaterTick(): number;
        onTick(arg0: $Player, arg1: $Parkourability): void;
        getNotLandingTick(): number;
        getLandingTick(): number;
        getPreviousNotLandingTick(): number;
        getNotSprintingTick(): number;
        getLastSprintingTick(): number;
        getTickAfterLastJump(): number;
        getSprintingTick(): number;
        getSneakingTick(): number;
        getNotSneakingTick(): number;
        getInWaterTick(): number;
        getLastSneakingTick(): number;
        constructor();
        get notCreativeFlyingTick(): number;
        get actualNotLandingTick(): number;
        get inAirByJumping(): boolean;
        get notInWaterTick(): number;
        get notLandingTick(): number;
        get landingTick(): number;
        get previousNotLandingTick(): number;
        get notSprintingTick(): number;
        get lastSprintingTick(): number;
        get tickAfterLastJump(): number;
        get sprintingTick(): number;
        get sneakingTick(): number;
        get notSneakingTick(): number;
        get inWaterTick(): number;
        get lastSneakingTick(): number;
    }
    export class $BehaviorEnforcer$Marker {
    }
    export interface $BehaviorEnforcer$Marker {
        remain(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BehaviorEnforcer$Marker}.
     */
    export type $BehaviorEnforcer$Marker_ = (() => boolean);
}
