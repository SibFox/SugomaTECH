import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Predicate } from "@package/com/google/common/base";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IdentifiedInventory } from "@package/com/simibubi/create/content/logistics/packager";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemHelper$ExtractionCountMode_, $ItemHelper$ExtractionCountMode } from "@package/com/simibubi/create/foundation/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $VITBExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory" {
    export class $VersionedInventoryTrackerBehaviour extends $BlockEntityBehaviour implements $VITBExtension {
        reset(): void;
        awaitNewVersion(arg0: $InvManipulationBehaviour): void;
        awaitNewVersion(arg0: $IItemHandler): void;
        stillWaiting(arg0: $InvManipulationBehaviour): boolean;
        stillWaiting(arg0: $IItemHandler): boolean;
        deployer$stillWaiting(arg0: $Object): boolean;
        deployer$awaitNewVersion(arg0: $Object): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$VersionedInventoryTrackerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $CapManipulationBehaviourBase$InterfaceProvider {
        static towardBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
        static oppositeOfBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
    }
    export interface $CapManipulationBehaviourBase$InterfaceProvider {
        getTarget(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $BlockFace;
    }
    /**
     * Values that may be interpreted as {@link $CapManipulationBehaviourBase$InterfaceProvider}.
     */
    export type $CapManipulationBehaviourBase$InterfaceProvider_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $BlockFace);
    export class $InvManipulationBehaviour extends $CapManipulationBehaviourBase<$IItemHandler, $InvManipulationBehaviour> {
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number, arg2: $Predicate_<$ItemStack>): $ItemStack;
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number): $ItemStack;
        extract(): $ItemStack;
        insert(arg0: $ItemStack_): $ItemStack;
        static forExtraction(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        static forInsertion(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        getIdentifiedInventory(): $IdentifiedInventory;
        blockEntity: $SmartBlockEntity;
        static INSERT: $BehaviourType<$InvManipulationBehaviour>;
        static TYPE: $BehaviourType<$InvManipulationBehaviour>;
        static EXTRACT: $BehaviourType<$InvManipulationBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get identifiedInventory(): $IdentifiedInventory;
    }
    export class $CapManipulationBehaviourBase<T, S extends $CapManipulationBehaviourBase<never, never>> extends $BlockEntityBehaviour {
        getTarget(): $BlockFace;
        withFilter(arg0: $Predicate<$BlockEntity>): S;
        simulate(): S;
        getInventory(): T;
        hasInventory(): boolean;
        bypassSidedness(): S;
        redirect$jha000$sable$findNewCapOnSubLevel(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$jha000$sable$redirectPos$mixinextras$bridge$19(arg0: $Level_, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $LocalRef<any>): $Object;
        findNewCapability(): void;
        getModeFromFilter(): $ItemHelper$ExtractionCountMode;
        redirect$jha000$sable$redirectPos(arg0: $Level_, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $BlockFace): $Object;
        getAmountFromFilter(): number;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get target(): $BlockFace;
        get inventory(): T;
        get modeFromFilter(): $ItemHelper$ExtractionCountMode;
        get amountFromFilter(): number;
    }
}
