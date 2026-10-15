import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IArmBlockEntityDuck } from "@package/com/petrolpark/compat/create/core/chainconveyor";

declare module "@package/com/simibubi/create/content/kinetics/mechanicalArm" {
    export class $ArmBlockEntity$Phase extends $Enum<$ArmBlockEntity$Phase> {
        static values(): $ArmBlockEntity$Phase[];
        static valueOf(arg0: string): $ArmBlockEntity$Phase;
        static MOVE_TO_INPUT: $ArmBlockEntity$Phase;
        static SEARCH_OUTPUTS: $ArmBlockEntity$Phase;
        static SEARCH_INPUTS: $ArmBlockEntity$Phase;
        static MOVE_TO_OUTPUT: $ArmBlockEntity$Phase;
        static DANCING: $ArmBlockEntity$Phase;
    }
    /**
     * Values that may be interpreted as {@link $ArmBlockEntity$Phase}.
     */
    export type $ArmBlockEntity$Phase_ = "search_inputs" | "move_to_input" | "search_outputs" | "move_to_output" | "dancing";
    export class $ArmInteractionPoint {
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: boolean): $ItemStack;
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: number, arg3: boolean): $ItemStack;
        insert(arg0: $ArmBlockEntity, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getType(): $ArmInteractionPointType;
        static create(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        isValid(): boolean;
        serialize(arg0: $BlockPos_): $CompoundTag;
        static deserialize(arg0: $CompoundTag_, arg1: $Level_, arg2: $BlockPos_): $ArmInteractionPoint;
        setLevel(arg0: $Level_): void;
        getLevel(): $Level;
        getPos(): $BlockPos;
        getMode(): $ArmInteractionPoint$Mode;
        keepAlive(): void;
        cycleMode(): void;
        getTargetAngles(arg0: $BlockPos_, arg1: boolean): $ArmAngleTarget;
        getSlotCount(arg0: $ArmBlockEntity): number;
        updateCachedState(): void;
        static transformPos(arg0: $CompoundTag_, arg1: $StructureTransform): void;
        static isInteractable(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
        get type(): $ArmInteractionPointType;
        get valid(): boolean;
        get pos(): $BlockPos;
        get mode(): $ArmInteractionPoint$Mode;
    }
    export class $ArmAngleTarget {
        constructor(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction_, arg3: boolean);
    }
    export interface $ArmInteractionPointType extends RegistryMarked<RegistryTypes.CreateArmInteractionPointTypeTag, RegistryTypes.CreateArmInteractionPointType> {}
    export class $ArmBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $IArmBlockEntityDuck {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getOutputs(): $List<any>;
        getInputs(): $List<any>;
        getPhase(): $ArmBlockEntity$Phase;
        static getRange(): number;
        setPhase(arg0: $ArmBlockEntity$Phase_): void;
        setHeldItem(arg0: $ItemStack_): void;
        getHeldItem(): $ItemStack;
        invokeSearchForDestination(): void;
        setChasedPointIndex(arg0: number): void;
        invokeSearchForItem(): void;
        getChasedPointProgress(): number;
        writeInteractionPoints(arg0: $CompoundTag_): void;
        setChasedPointProgress(arg0: number): void;
        invokeGetTargetedInteractionPoint(): $ArmInteractionPoint;
        redstoneUpdate(): void;
        wrapMethod$kaj000$petrolpark$dontCollectChainConveyorItem(arg0: $Operation_<any>): void;
        handler$kaj000$petrolpark$destroyChainConveyorPoints(arg0: $CallbackInfo): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        sourceIndex: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get outputs(): $List<any>;
        get inputs(): $List<any>;
        static get range(): number;
        set chasedPointIndex(value: number);
    }
    export class $ArmInteractionPoint$Mode extends $Enum<$ArmInteractionPoint$Mode> {
        static values(): $ArmInteractionPoint$Mode[];
        static valueOf(arg0: string): $ArmInteractionPoint$Mode;
        getColor(): number;
        getTranslationKey(): string;
        static TAKE: $ArmInteractionPoint$Mode;
        static DEPOSIT: $ArmInteractionPoint$Mode;
        get color(): number;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPoint$Mode}.
     */
    export type $ArmInteractionPoint$Mode_ = "deposit" | "take";
    export class $ArmInteractionPointType {
        static init(): void;
        getPriority(): number;
        canCreatePoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static getPrimaryType(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPointType;
        createPoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPointType}.
     */
    export type $ArmInteractionPointType_ = RegistryTypes.CreateArmInteractionPointType;
}
