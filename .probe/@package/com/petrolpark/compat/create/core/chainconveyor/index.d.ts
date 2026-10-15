import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ArmBlockEntity$Phase, $ArmBlockEntity$Phase_, $ArmInteractionPoint } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $ChainConveyorBlockEntity, $ChainConveyorPackage } from "@package/com/simibubi/create/content/kinetics/chainConveyor";
import { $List, $Map } from "@package/java/util";

declare module "@package/com/petrolpark/compat/create/core/chainconveyor" {
    export class $ChainConveyorItemEvent$AddClient extends $Event implements $ICancellableEvent {
        set(arg0: boolean): void;
        or(arg0: boolean): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        stack: $ItemStack;
        level: $Level;
    }
    export class $ChainConveyorItemEvent$Remove extends $ChainConveyorItemEvent {
        chainConveyorPosition: number;
        level: $Level;
        chainConveyor: $ChainConveyorBlockEntity;
        chainConveyorConnection: $BlockPos;
        simulate: boolean;
    }
    export class $IChainConveyorBlockEntityDuck {
    }
    export interface $IChainConveyorBlockEntityDuck {
        getLoopingPackages(): $List<$ChainConveyorPackage>;
        getTravellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
        get loopingPackages(): $List<$ChainConveyorPackage>;
        get travellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
    }
    export class $IArmBlockEntityDuck {
    }
    export interface $IArmBlockEntityDuck {
        getOutputs(): $List<$ArmInteractionPoint>;
        getInputs(): $List<$ArmInteractionPoint>;
        getPhase(): $ArmBlockEntity$Phase;
        setPhase(arg0: $ArmBlockEntity$Phase_): void;
        setHeldItem(arg0: $ItemStack_): void;
        getHeldItem(): $ItemStack;
        invokeSearchForDestination(): void;
        setChasedPointIndex(arg0: number): void;
        invokeSearchForItem(): void;
        getChasedPointProgress(): number;
        setChasedPointProgress(arg0: number): void;
        invokeGetTargetedInteractionPoint(): $ArmInteractionPoint;
        get outputs(): $List<$ArmInteractionPoint>;
        get inputs(): $List<$ArmInteractionPoint>;
        set chasedPointIndex(value: number);
    }
    export class $ChainConveyorItemEvent extends $Event implements $ICancellableEvent {
        allow(): void;
        getStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        onSuccess(arg0: $Consumer_<$ItemStack>): void;
        isAllowed(): boolean;
        static canAdd(arg0: $Level_, arg1: $ItemStack_, arg2: $ChainConveyorBlockEntity, arg3: $BlockPos_, arg4: number, arg5: boolean): boolean;
        static getAdded(arg0: $Level_, arg1: $ItemStack_, arg2: $ChainConveyorBlockEntity, arg3: $BlockPos_, arg4: number, arg5: boolean): $ChainConveyorItemEvent$Add;
        static getRemoved(arg0: $Level_, arg1: $ChainConveyorBlockEntity, arg2: $BlockPos_, arg3: $ChainConveyorPackage, arg4: boolean): $ChainConveyorItemEvent$Remove;
        static getRemoved(arg0: $Level_, arg1: $ItemStack_, arg2: $ChainConveyorBlockEntity, arg3: $BlockPos_, arg4: number, arg5: boolean): $ChainConveyorItemEvent$Remove;
        static canAddClient(arg0: $Level_, arg1: $ItemStack_): boolean;
        setTransformedStack(arg0: $ItemStack_): void;
        isCanceled(): boolean;
        chainConveyorPosition: number;
        level: $Level;
        chainConveyor: $ChainConveyorBlockEntity;
        chainConveyorConnection: $BlockPos;
        simulate: boolean;
        get stack(): $ItemStack;
        get allowed(): boolean;
        set transformedStack(value: $ItemStack_);
    }
    export class $ChainConveyorItemEvent$Add extends $ChainConveyorItemEvent {
        chainConveyorPosition: number;
        level: $Level;
        chainConveyor: $ChainConveyorBlockEntity;
        chainConveyorConnection: $BlockPos;
        simulate: boolean;
    }
}
