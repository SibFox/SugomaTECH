import { $SpaceTeleportReason_, $SpaceTeleportPhase, $SpaceTeleportReason, $SpaceTeleportPhase_, $SpaceTeleportFxType, $SpaceTeleportFxType_ } from "@package/com/denfop/items/space/teleport";
import { $RegisterGuiLayersEvent, $ViewportEvent$ComputeFov, $ViewportEvent$ComputeCameraAngles } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/denfop/client/space" {
    export class $SpaceTeleportClientCameraEffects {
        static onComputeCameraAngles(arg0: $ViewportEvent$ComputeCameraAngles): void;
        static onComputeFov(arg0: $ViewportEvent$ComputeFov): void;
    }
    export class $SpaceTeleportClientOverlays {
        static register(arg0: $RegisterGuiLayersEvent): void;
    }
    export class $SpaceTeleportClientState {
        isActive(): boolean;
        getReason(): $SpaceTeleportReason;
        getPhase(): $SpaceTeleportPhase;
        getCharge(): number;
        hasFx(): boolean;
        getFxType(): $SpaceTeleportFxType;
        startFx(arg0: $SpaceTeleportFxType_, arg1: number, arg2: string, arg3: boolean): void;
        applySync(arg0: boolean, arg1: $SpaceTeleportPhase_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SpaceTeleportReason_, arg8: boolean): void;
        getMaxCharge(): number;
        getTicksUntilCritical(): number;
        getBodyName(): string;
        isItemPresent(): boolean;
        isFxReverse(): boolean;
        getFxBodyName(): string;
        getFxProgress(): number;
        getCountdownTicks(): number;
        static INSTANCE: $SpaceTeleportClientState;
        get active(): boolean;
        get reason(): $SpaceTeleportReason;
        get phase(): $SpaceTeleportPhase;
        get charge(): number;
        get fxType(): $SpaceTeleportFxType;
        get maxCharge(): number;
        get ticksUntilCritical(): number;
        get bodyName(): string;
        get itemPresent(): boolean;
        get fxReverse(): boolean;
        get fxBodyName(): string;
        get fxProgress(): number;
        get countdownTicks(): number;
    }
}
