import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $KineticBlockEntityAccessor as $KineticBlockEntityAccessor$1 } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting } from "@package/net/minecraft";
import { $KineticEffectHandlerAccess } from "@package/com/enxv/aerouniversaljoint/access";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IKineticBlockEntityDuck } from "@package/com/petrolpark/compat/create/core/block/entity";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $KineticBlockEntityAccessor } from "@package/org/patryk3211/powergrid/mixin";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $KineticBlockEntityMixin } from "@package/io/github/cotrin8672/cem/mixin";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        showCapacityWithAnnotation(): boolean;
        hideStressImpact(): boolean;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $KineticEffectHandler implements $KineticEffectHandlerAccess {
        tick(): void;
        spawnRotationIndicators(): void;
        spawnEffect(arg0: $ParticleOptions_, arg1: number, arg2: number): void;
        triggerOverStressedEffect(): void;
        queueRotationIndicators(): void;
        aeronautics$getOverStressedEffect(): number;
        constructor(arg0: $KineticBlockEntity);
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getTextColor(): $ChatFormatting;
        getSpeedValue(): number;
        getParticleSpeed(): number;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get color(): number;
        get textColor(): $ChatFormatting;
        get speedValue(): number;
        get particleSpeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension, $IKineticBlockEntityDuck, $KineticBlockEntityMixin, $KineticBlockEntityAccessor, $KineticBlockEntityAccessor$1 {
        setSource(arg0: $BlockPos_): void;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        clearKineticInformation(): void;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        calculateStressApplied(): number;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        hasNetwork(): boolean;
        hasSource(): boolean;
        setNetwork(arg0: number): void;
        tickAudio(): void;
        isSource(): boolean;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        needsSpeedUpdate(): boolean;
        getFlickerScore(): number;
        getGeneratedSpeed(): number;
        isOverStressed(): boolean;
        static convertToLinear(arg0: number): number;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        getOrCreateNetwork(): $KineticNetwork;
        static convertToAngular(arg0: number): number;
        removeSource(): void;
        handler$kbl000$petrolpark$allowCompositeBlockEntitiesAsSourcesInValidation(arg0: $CallbackInfo, arg1: $BlockEntity, arg2: $KineticBlockEntity): void;
        modifyReturnValue$ikg000$petrolsparts$modifyAddPropagationLocations(arg0: $List_<any>, arg1: $IRotate, arg2: $BlockState_, arg3: $List_<any>): $List<any>;
        isSpeedRequirementFulfilled(): boolean;
        calculateAddedStressCapacity(): number;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        getTheoreticalSpeed(): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        redirect$fkg000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$fkg000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        handler$fkg000$simulated$removeConnected(arg0: $CallbackInfo): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        handler$fkg000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$fkg000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$fkg000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        handler$kbl001$petrolpark$addContaminationBehaviour(arg0: $List_<any>, arg1: $CallbackInfo): void;
        handler$kbl000$petrolpark$clearSourceIndexInformation(arg0: $CallbackInfo): void;
        simulated$setValidationCountdown(arg0: number): void;
        warnOfMovement(): void;
        onSpeedChanged(arg0: number): void;
        attachKinetics(): void;
        handler$kbl000$petrolpark$removeSourceIndex(arg0: $CallbackInfo): void;
        handler$fkm000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        modifyExpressionValue$kbl000$petrolpark$setCompositeKineticBlockEntityPartSource(arg0: $BlockEntity): $BlockEntity;
        setSourceIndex(arg0: number | null): void;
        getSourceIndex(): number;
        detachKinetics(): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getEffects(): $KineticEffectHandler;
        setFlickerTally(arg0: number): void;
        getFlickerTally(): number;
        getValidationCountdown(): number;
        setValidationCountdown(arg0: number): void;
        invokeValidateKinetics(): void;
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
        get flickerScore(): number;
        get generatedSpeed(): number;
        get overStressed(): boolean;
        get orCreateNetwork(): $KineticNetwork;
        get speedRequirementFulfilled(): boolean;
        get theoreticalSpeed(): number;
        get effects(): $KineticEffectHandler;
    }
}
