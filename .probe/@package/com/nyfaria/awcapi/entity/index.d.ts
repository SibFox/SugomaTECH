import { $BlockPos, $BlockPos_, $Direction$Axis_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $MoverType_, $Mob } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $IAdvancedPathFindingEntity } from "@package/com/nyfaria/awcapi/entity/movement";
export * as movement from "@package/com/nyfaria/awcapi/entity/movement";

declare module "@package/com/nyfaria/awcapi/entity" {
    export class $PathingTarget {
        side: $Direction;
        pos: $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $Direction_);
    }
    export class $Orientation {
        getLocal(arg0: $Vec3_): $Vec3;
        getGlobal(arg0: number, arg1: number): $Vec3;
        getGlobal(arg0: $Vec3_): $Vec3;
        getLocalRotation(arg0: $Vec3_): $Pair<number, number>;
        normal: $Vec3;
        localY: $Vec3;
        componentY: number;
        localZ: $Vec3;
        componentZ: number;
        localX: $Vec3;
        pitch: number;
        yaw: number;
        componentX: number;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_, arg3: $Vec3_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $ClimberComponent {
        onMove(arg0: $MoverType_, arg1: $Vec3_, arg2: boolean): boolean;
        tick(): void;
        onJump(): boolean;
        writeToNbt(arg0: $CompoundTag_): void;
        getCollisionsSmoothingRange(): number;
        setCollisionsInclusionRange(arg0: number): void;
        getCollisionsInclusionRange(): number;
        setCollisionsSmoothingRange(arg0: number): void;
        getMovementSpeed(): number;
        canClimbInLava(): boolean;
        setCanClimbInLava(arg0: boolean): void;
        canClimbInWater(): boolean;
        getGroundDirection(): $Pair<$Direction, $Vec3>;
        setCanClimbInWater(arg0: boolean): void;
        readFromNbt(arg0: $CompoundTag_): void;
        getGroundSide(): $Direction;
        setJumpDirection(arg0: $Vec3_): void;
        getOrientation(): $Orientation;
        calculateOrientation(arg0: number): $Orientation;
        getAttachmentOffset(arg0: $Direction$Axis_, arg1: number): number;
        setRenderOrientation(arg0: $Orientation): void;
        getRenderOrientation(): $Orientation;
        getTrackedMovementTarget(): $Vec3;
        getAdjustedOnPosition(arg0: $BlockPos_): $BlockPos;
        getTrackedPathingTargets(): $List<$PathingTarget>;
        getJumpDirection(): $Vec3;
        updateOffsetsAndOrientation(): void;
        getAdjustedCanTriggerWalking(arg0: boolean): boolean;
        onTravel(arg0: $Vec3_, arg1: boolean): boolean;
        livingTick(): void;
        getAttachmentNormal(): $Vec3;
        constructor(arg0: $Mob);
        get movementSpeed(): number;
        get groundDirection(): $Pair<$Direction, $Vec3>;
        get groundSide(): $Direction;
        get orientation(): $Orientation;
        get trackedMovementTarget(): $Vec3;
        get trackedPathingTargets(): $List<$PathingTarget>;
        get attachmentNormal(): $Vec3;
    }
    export class $IAdvancedClimber {
    }
    export interface $IAdvancedClimber extends $IAdvancedPathFindingEntity {
        asMob(): $Mob;
        getCollisionsSmoothingRange(): number;
        setCollisionsInclusionRange(arg0: number): void;
        getCollisionsInclusionRange(): number;
        setCollisionsSmoothingRange(arg0: number): void;
        setLerpYRot(arg0: number): void;
        canClimbOnBlock(arg0: $BlockState_, arg1: $BlockPos_): boolean;
        getMovementSpeed(): number;
        getVerticalOffset(arg0: number): number;
        canClimbInLava(): boolean;
        setLerpYHeadRot(arg0: number): void;
        setLerpHeadSteps(arg0: number): void;
        setCanClimbInLava(arg0: boolean): void;
        canClimbInWater(): boolean;
        getGroundDirection(): $Pair<$Direction, $Vec3>;
        setLerpXRot(arg0: number): void;
        setCanClimbInWater(arg0: boolean): void;
        setJumpDirection(arg0: $Vec3_): void;
        getOrientation(): $Orientation;
        calculateOrientation(arg0: number): $Orientation;
        getClimberComponent(): $ClimberComponent;
        shouldTrackPathingTargets(): boolean;
        getBlockSlipperiness(arg0: $BlockPos_): number;
        getAttachmentOffset(arg0: $Direction$Axis_, arg1: number): number;
        setRenderOrientation(arg0: $Orientation): void;
        getRenderOrientation(): $Orientation;
        getTrackedMovementTarget(): $Vec3;
        canClimberTriggerWalking(): boolean;
        getTrackedPathingTargets(): $List<$PathingTarget>;
        set lerpYRot(value: number);
        get movementSpeed(): number;
        set lerpYHeadRot(value: number);
        set lerpHeadSteps(value: number);
        get groundDirection(): $Pair<$Direction, $Vec3>;
        set lerpXRot(value: number);
        set jumpDirection(value: $Vec3_);
        get orientation(): $Orientation;
        get climberComponent(): $ClimberComponent;
        get trackedMovementTarget(): $Vec3;
        get trackedPathingTargets(): $List<$PathingTarget>;
    }
}
