import { $Timer } from "@package/com/denfop/utils";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EnergyNetDelegate as $EnergyNetDelegate$1 } from "@package/com/denfop/componets/system";
import { $Inventory$TypeItemSlot_, $InventoryUpgrade, $Inventory } from "@package/com/denfop/inventory";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $InventoryMultiRecipes, $InventorySteamMultiRecipes, $IMultiUpdateTick, $InventoryOutput, $MachineRecipe, $InventoryBioMultiRecipes, $InventoryRecipes } from "@package/com/denfop/api/recipe";
import { $Set_, $Map, $Set, $UUID, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $PollutionMechanism as $PollutionMechanism$1 } from "@package/com/denfop/api/pollution";
import { $RandomSource } from "@package/net/minecraft/util";
import { $IPressureTile } from "@package/com/denfop/api/otherenergies/pressure";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $EnergyNetDelegate as $EnergyNetDelegate$4 } from "@package/com/denfop/componets/heat";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_ as $Supplier_$1 } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ICoolTile } from "@package/com/denfop/api/otherenergies/cool";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $EnumTypeMachines, $EnumTypeMachines_ } from "@package/com/denfop/blockentity/mechanism";
import { $Dual, $EnergySource, $EnergyTile, $EnergyEmitter, $EnergySink, $EnergyAcceptor, $MultiDual } from "@package/com/denfop/api/energy/interfaces";
import { $AudioFixer } from "@package/com/denfop/api/sound";
import { $InfoTile, $EnergyType_, $EnergyType, $ITile } from "@package/com/denfop/api/otherenergies/common";
import { $Enum, $Iterable, $Object } from "@package/java/lang";
import { $EnergyNetDelegate as $EnergyNetDelegate$3 } from "@package/com/denfop/componets/cold";
import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $EnumMultiMachine_, $IBioMachine, $ISteamMechanism, $BlockEntityInventory, $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $IHeatTile } from "@package/com/denfop/api/otherenergies/heat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Predicate, $Supplier_ } from "@package/com/google/common/base";
import { $IMultiMachine } from "@package/com/denfop/blockentity/mechanism/multimechanism";
import { $BlockEntityMiniPanels } from "@package/com/denfop/blockentity/panels/entity";
import { $EnergyNetDelegate as $EnergyNetDelegate$2 } from "@package/com/denfop/componets/pressure";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $BlockEntity, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as system from "@package/com/denfop/componets/system";
export * as client from "@package/com/denfop/componets/client";
export * as cold from "@package/com/denfop/componets/cold";
export * as heat from "@package/com/denfop/componets/heat";
export * as pressure from "@package/com/denfop/componets/pressure";

declare module "@package/com/denfop/componets" {
    export class $ComponentProcess extends $AbstractComponent {
        getOutput(): $MachineRecipe;
        updateRecipe(): void;
        getDefaultEnergyConsume(): number;
        checkRecipe(): boolean;
        consumeEnergy(): void;
        setHasTank(arg0: boolean): void;
        getDefaultOperationLength(): number;
        getOperationsPerTick(): number;
        operate(arg0: $MachineRecipe): void;
        setHasAudio(arg0: boolean): void;
        getEnergyConsume(): number;
        setSlotOutput(arg0: $InventoryOutput): void;
        setInvSlotRecipes(arg0: $InventoryRecipes): void;
        setExpSource(): void;
        setAction(arg0: $Action): void;
        setOverclockRates(arg0: $InventoryUpgrade): void;
        operateOnce(arg0: $List_<$ItemStack_>): void;
        getOperationLength(): void;
        checkHeatRecipe(): boolean;
        checkFluidRecipe(): boolean;
        checkRadiation(arg0: boolean): boolean;
        operateWithMax(arg0: $MachineRecipe): void;
        operateWithMax(arg0: $MachineRecipe, arg1: number): void;
        onFailedProcess(): void;
        consumeEnergy1(): void;
        canAddItemStack(): boolean;
        checkSE(): boolean;
        checkExp(arg0: boolean): boolean;
        getOperationDefaultLength(): void;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: number);
        get output(): $MachineRecipe;
        get defaultEnergyConsume(): number;
        set hasTank(value: boolean);
        get defaultOperationLength(): number;
        get operationsPerTick(): number;
        set hasAudio(value: boolean);
        get energyConsume(): number;
        set slotOutput(value: $InventoryOutput);
        set invSlotRecipes(value: $InventoryRecipes);
        set action(value: $Action);
        set overclockRates(value: $InventoryUpgrade);
        get operationLength(): void;
        get operationDefaultLength(): void;
    }
    export class $ComponentMiniPanel$EnergyNetDelegateSource extends $ComponentMiniPanel$EnergyNetDelegate implements $EnergySource {
        extractEnergy(arg0: $Direction_, arg1: number): void;
        getSourceTier(arg0: $Direction_): number;
        canExtractEnergy(arg0: $Direction_): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
    }
    export class $EnergyNetDelegateDual extends $EnergyNetDelegate implements $Dual {
        acceptsEnergyFrom(arg0: $EnergyEmitter, arg1: $Direction_): boolean;
        isSink(): boolean;
        isSource(): boolean;
        extractEnergy(arg0: number): void;
        receiveEnergy(arg0: number): void;
        getTick(): number;
        getPerEnergy1(): number;
        getPastEnergy1(): number;
        getEnergyTickList(): $List<number>;
        setPastEnergy1(arg0: number): void;
        addPerEnergy1(arg0: number): void;
        getDemandedEnergy(): number;
        getSourceTier(): number;
        getSinkTier(): number;
        addTick(arg0: number): void;
        getPastEnergy(): number;
        emitsEnergyTo(arg0: $EnergyAcceptor, arg1: $Direction_): boolean;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        canExtractEnergy(): number;
        receiveEnergy(arg0: $Direction_, arg1: number): void;
        getDemandedEnergy(arg0: $Direction_): number;
        getSinkTier(arg0: $Direction_): number;
        extractEnergy(arg0: $Direction_, arg1: number): void;
        getSourceTier(arg0: $Direction_): number;
        canExtractEnergy(arg0: $Direction_): number;
        worldPosition: $BlockPos;
        limit_amount: number;
        sendingSidabled: boolean;
        limit: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        get sink(): boolean;
        get source(): boolean;
        get perEnergy1(): number;
        get energyTickList(): $List<number>;
        get perEnergy(): number;
    }
    export class $Redstone extends $AbstractComponent {
        update(): void;
        subscribe(arg0: $RedstoneHandler): void;
        getRedstoneInput(): number;
        hasRedstoneInput(): boolean;
        constructor(arg0: $BlockEntityInventory);
        get redstoneInput(): number;
    }
    export class $BufferEnergy {
        allow: boolean;
        sinkTier: number;
        need: boolean;
        storage: number;
        sourceTier: number;
        capacity: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $Fluids$FluidHandler implements $IFluidHandler {
    }
    export class $TypeUpgrade extends $Enum<$TypeUpgrade> {
        static values(): $TypeUpgrade[];
        static valueOf(arg0: string): $TypeUpgrade;
        getStack(): $ItemStack;
        static STACK: $TypeUpgrade;
        static INSTANT: $TypeUpgrade;
        static SORTING: $TypeUpgrade;
        get stack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $TypeUpgrade}.
     */
    export type $TypeUpgrade_ = "stack" | "instant" | "sorting";
    export class $IComponentUpdate {
    }
    export interface $IComponentUpdate {
        setOverclockRates(): void;
    }
    /**
     * Values that may be interpreted as {@link $IComponentUpdate}.
     */
    export type $IComponentUpdate_ = (() => void);
    export class $ComponentBaseEnergy extends $AbstractComponent {
        getType(): $EnergyType;
        getCapacity(): number;
        setCapacity(arg0: number): void;
        getDelegate(): $ITile;
        getEnergy(): number;
        addEnergy(arg0: number): number;
        useEnergy(arg0: number, arg1: boolean): number;
        useEnergy(arg0: number): boolean;
        createDelegate(): void;
        setSourceTier(arg0: number): void;
        setReceivingEnabled(arg0: boolean): void;
        getSourceTier(): number;
        getSinkTier(): number;
        static asBasicSink(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: number): $ComponentBaseEnergy;
        static asBasicSink(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number): $ComponentBaseEnergy;
        setDirections(arg0: $Set_<$Direction_>, arg1: $Set_<$Direction_>): void;
        setSendingEnabled(arg0: boolean): void;
        setSinkTier(arg0: number): void;
        getFillRatio(): number;
        canUseEnergy(arg0: number): boolean;
        static asBasicSource(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: number): $ComponentBaseEnergy;
        static asBasicSource(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number): $ComponentBaseEnergy;
        getFreeEnergy(): number;
        delegate: $EnergyNetDelegate$1;
        loaded: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $List_<$Direction_>, arg4: $List_<$Direction_>, arg5: number, arg6: number);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number, arg6: number);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number);
        get type(): $EnergyType;
        get energy(): number;
        set receivingEnabled(value: boolean);
        set sendingEnabled(value: boolean);
        get fillRatio(): number;
        get freeEnergy(): number;
    }
    export class $BioProcessMultiComponent extends $AbstractComponent implements $IMultiUpdateTick {
        getOutput(arg0: number): $MachineRecipe;
        getProgress(arg0: number): number;
        getRecipeOutput(): $MachineRecipe;
        getRecipeOutput(arg0: number): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe, arg1: number): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        operate(arg0: number, arg1: $MachineRecipe): void;
        setOverclockRates(): void;
        operateOnce(arg0: number, arg1: $List_<$ItemStack_>): void;
        getSizeWorkingSlot(): number;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        heat: $HeatComponent;
        inputSlots: $InventoryBioMultiRecipes;
        operationLength: number;
        isCentrifuge: boolean;
        outputSlot: $InventoryOutput;
        energyConsume: number;
        constructor(arg0: $IBioMachine, arg1: $EnumMultiMachine_);
        get sizeWorkingSlot(): number;
    }
    export class $WirelessComponent extends $AbstractComponent {
        removeAll(): void;
        setUpdate(arg0: boolean): void;
        setEnergySource(arg0: $EnergySource): void;
        isHasUpdate(): boolean;
        removeConnect(arg0: $BlockPos_): void;
        addConnect(arg0: $BlockPos_): void;
        constructor(arg0: $BlockEntityBase);
        set update(value: boolean);
        set energySource(value: $EnergySource);
        get hasUpdate(): boolean;
    }
    export class $Action {
        doAction(): void;
        needAction(arg0: $TypeLoad_): boolean;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $TypeAction_, arg3: $TypeLoad_, ...arg4: $Object[]);
    }
    export class $PressureComponent extends $AbstractComponent {
        getCapacity(): number;
        setCapacity(arg0: number): void;
        getDelegate(): $IPressureTile;
        getEnergy(): number;
        addEnergy(arg0: number): number;
        useEnergy(arg0: number): boolean;
        useEnergy(arg0: number, arg1: boolean): number;
        createDelegate(): void;
        setSourceTier(arg0: number): void;
        setReceivingEnabled(arg0: boolean): void;
        getSourceTier(): number;
        getSinkTier(): number;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $PressureComponent;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $PressureComponent;
        setDirections(arg0: $Set_<$Direction_>, arg1: $Set_<$Direction_>): void;
        setSendingEnabled(arg0: boolean): void;
        setSinkTier(arg0: number): void;
        getFillRatio(): number;
        canUseEnergy(arg0: number): boolean;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $PressureComponent;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $PressureComponent;
        delegate: $EnergyNetDelegate$2;
        loaded: boolean;
        auto: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number);
        constructor(arg0: $BlockEntityInventory, arg1: number);
        get energy(): number;
        set receivingEnabled(value: boolean);
        set sendingEnabled(value: boolean);
        get fillRatio(): number;
    }
    export class $ComponentBioProcessRender {
        getProcess(): $BioProcessMultiComponent;
        getTypeMachines(): $EnumTypeMachines;
        constructor(arg0: $BioProcessMultiComponent, arg1: $EnumTypeMachines_);
        get process(): $BioProcessMultiComponent;
        get typeMachines(): $EnumTypeMachines;
    }
    export class $ComponentUpgrade extends $AbstractComponent {
        hasUpgrade(arg0: $TypeUpgrade_): boolean;
        setChange(arg0: boolean): void;
        isChange(): boolean;
        constructor(arg0: $BlockEntityInventory, ...arg1: $TypeUpgrade_[]);
    }
    export class $ComponentUpgradeSlots extends $AbstractComponent {
        condition(): boolean;
        setOverclockRates(arg0: $InventoryUpgrade): void;
        update: boolean;
        constructor(arg0: $BlockEntityInventory, arg1: $InventoryUpgrade);
        set overclockRates(value: $InventoryUpgrade);
    }
    export class $TypeAction extends $Enum<$TypeAction> {
        static values(): $TypeAction[];
        static valueOf(arg0: string): $TypeAction;
        static AUDIO: $TypeAction;
    }
    /**
     * Values that may be interpreted as {@link $TypeAction}.
     */
    export type $TypeAction_ = "audio";
    export class $ComponentMiniPanel extends $AbstractComponent {
        getCapacity(): number;
        setCapacity(arg0: number): void;
        getDelegate(): $EnergyTile;
        setEnabled(arg0: boolean): void;
        getStorage(): number;
        getEnergy(): number;
        getComparatorValue(): number;
        getChunkPos(): $ChunkPos;
        getTiles(): $Map<$Direction, $EnergyTile>;
        forceAddEnergy(arg0: number): void;
        addEnergy(arg0: number): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        useEnergy(arg0: number, arg1: boolean): number;
        useEnergy(arg0: number): boolean;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        setSourceTier(arg0: number): void;
        setReceivingEnabled(arg0: boolean): void;
        getSourceTier(): number;
        getSourceDirs(): $Set<$Direction>;
        setDirections(arg0: $Set_<$Direction_>): void;
        setSendingEnabled(arg0: boolean): void;
        getFillRatio(): number;
        canUseEnergy(arg0: number): boolean;
        setOverclockRates(arg0: $InventoryUpgrade): void;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $ComponentMiniPanel;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $ComponentMiniPanel;
        getFreeEnergy(): number;
        setBonusCapacity(arg0: number): void;
        getBonusCapacity(): number;
        getBonusProdution(): number;
        getProdution(): number;
        setBonusProdution(arg0: number): void;
        setProdution(arg0: number): void;
        addCapacity(arg0: number): void;
        delegate: $ComponentMiniPanel$EnergyNetDelegate;
        loaded: boolean;
        fullEnergy: boolean;
        sendingSidabled: boolean;
        defaultSourceTier: number;
        tick: number;
        storage: number;
        sourceTier: number;
        receivingDisabled: boolean;
        capacity: number;
        sourceDirections: $Set<$Direction>;
        multiSource: boolean;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: number, arg4: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: number);
        constructor(arg0: $BlockEntityMiniPanels, arg1: number);
        set enabled(value: boolean);
        get energy(): number;
        get comparatorValue(): number;
        get chunkPos(): $ChunkPos;
        get tiles(): $Map<$Direction, $EnergyTile>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        set receivingEnabled(value: boolean);
        get sourceDirs(): $Set<$Direction>;
        set directions(value: $Set_<$Direction_>);
        set sendingEnabled(value: boolean);
        get fillRatio(): number;
        set overclockRates(value: $InventoryUpgrade);
        get freeEnergy(): number;
    }
    export class $ComponentPrivate extends $AbstractComponent {
        getPlayers(): $List<string>;
        getPlayerByUUID(arg0: $Level_, arg1: string): $Player;
        getPlayersUUID(): $List<$UUID>;
        setActivate(arg0: boolean): void;
        constructor(arg0: $BlockEntityInventory);
        get players(): $List<string>;
        get playersUUID(): $List<$UUID>;
        set activate(value: boolean);
    }
    export class $Connect {
    }
    export class $ComponentValue<T> {
        getValue(): T;
        setValue(arg0: $Supplier_$1<T>): $ComponentValue<T>;
        constructor();
    }
    export class $ProcessMultiComponent$StackGroup {
    }
    export class $TypePurifierJob extends $Enum<$TypePurifierJob> {
    }
    /**
     * Values that may be interpreted as {@link $TypePurifierJob}.
     */
    export type $TypePurifierJob_ = "itemstack" | "actions" | "none";
    export class $ComponentTimer extends $AbstractComponent {
        getTime(): string;
        getTimes(): number;
        isCanWork(): boolean;
        resetTime(): void;
        setCanWork(arg0: boolean): void;
        setCanWorkWithOut(arg0: boolean): void;
        getIndexWork(): number;
        getTimers(): $List<$Timer>;
        getTickFromSecond(): number;
        getDefaultTimers(): $List<$Timer>;
        constructor(arg0: $BlockEntityInventory, ...arg1: $Timer[]);
        get time(): string;
        get times(): number;
        set canWorkWithOut(value: boolean);
        get indexWork(): number;
        get timers(): $List<$Timer>;
        get tickFromSecond(): number;
        get defaultTimers(): $List<$Timer>;
    }
    export class $AirPollutionComponent extends $AbstractComponent {
        getPercent(): number;
        setPollution(arg0: number): void;
        getDefault_pollution(): number;
        isEffectivelyActive(): boolean;
        static spawnAirPollutionDirected(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        getCurrentContribution(): number;
        constructor(arg0: $BlockEntityInventory, arg1: number);
        get percent(): number;
        set pollution(value: number);
        get default_pollution(): number;
        get effectivelyActive(): boolean;
        get currentContribution(): number;
    }
    export class $CoolComponent extends $AbstractComponent {
        getCapacity(): number;
        setCapacity(arg0: number): void;
        getDelegate(): $ICoolTile;
        getEnergy(): number;
        addEnergy(arg0: number): number;
        useEnergy(arg0: number, arg1: boolean): number;
        useEnergy(arg0: number): boolean;
        createDelegate(): void;
        setSourceTier(arg0: number): void;
        getSinkDirs(): $Set<$Direction>;
        getSourceTier(): number;
        getSinkTier(): number;
        getSourceDirs(): $Set<$Direction>;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $CoolComponent;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $CoolComponent;
        setDirections(arg0: $Set_<$Direction_>, arg1: $Set_<$Direction_>): void;
        setSinkTier(arg0: number): void;
        getFillRatio(): number;
        canUseEnergy(arg0: number): boolean;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $CoolComponent;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $CoolComponent;
        delegate: $EnergyNetDelegate$3;
        loaded: boolean;
        world: $Level;
        upgrade: boolean;
        meta: number;
        static cooling: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number);
        constructor(arg0: $BlockEntityInventory, arg1: number);
        get energy(): number;
        get sinkDirs(): $Set<$Direction>;
        get sourceDirs(): $Set<$Direction>;
        get fillRatio(): number;
    }
    export class $ComponentStorageEnergy extends $ComponentBaseEnergy {
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $ComponentStorageEnergy;
        static asBasicSink(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number): $ComponentStorageEnergy;
        static asBasicSink(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: number): $ComponentStorageEnergy;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $ComponentStorageEnergy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $ComponentStorageEnergy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $ComponentStorageEnergy;
        delegate: $EnergyNetDelegate$1;
        loaded: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $List_<$Direction_>, arg4: $List_<$Direction_>, arg5: number, arg6: number, arg7: boolean);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number, arg6: number, arg7: boolean);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number);
    }
    export class $ComponentSteamProcess extends $AbstractComponent {
        getOutput(): $MachineRecipe;
        updateRecipe(): void;
        getDefaultEnergyConsume(): number;
        checkRecipe(): boolean;
        consumeEnergy(): void;
        setHasTank(arg0: boolean): void;
        getDefaultOperationLength(): number;
        getOperationsPerTick(): number;
        operate(arg0: $MachineRecipe): void;
        setHasAudio(arg0: boolean): void;
        getEnergyConsume(): number;
        setSlotOutput(arg0: $InventoryOutput): void;
        setInvSlotRecipes(arg0: $InventoryRecipes): void;
        setAction(arg0: $Action): void;
        operateOnce(arg0: $List_<$ItemStack_>): void;
        checkHeatRecipe(): boolean;
        checkFluidRecipe(): boolean;
        operateWithMax(arg0: $MachineRecipe): void;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: number, arg3: number);
        get output(): $MachineRecipe;
        get defaultEnergyConsume(): number;
        set hasTank(value: boolean);
        get defaultOperationLength(): number;
        get operationsPerTick(): number;
        set hasAudio(value: boolean);
        get energyConsume(): number;
        set slotOutput(value: $InventoryOutput);
        set invSlotRecipes(value: $InventoryRecipes);
        set action(value: $Action);
    }
    export class $ProcessMultiComponent extends $AbstractComponent implements $IMultiUpdateTick {
        getOutput(arg0: number): $MachineRecipe;
        setMode(arg0: number): void;
        getMode(): number;
        getProgress(arg0: number): number;
        getCold(): $CoolComponent;
        getRecipeOutput(arg0: number): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        cycleMode(): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        setRecipeOutput(arg0: $MachineRecipe, arg1: number): void;
        onActivated(arg0: $ItemStack_): boolean;
        setModulestorage(arg0: boolean): void;
        operate(arg0: number, arg1: $MachineRecipe, arg2: number): void;
        setModulesize(arg0: boolean): void;
        getUpgradeSlot(): $InventoryUpgrade;
        shrinkModule(arg0: number): void;
        setOverclockRates(): void;
        operateOnce(arg0: number, arg1: $List_<$ItemStack_>, arg2: number): void;
        setQuickly(arg0: boolean): void;
        getSizeWorkingSlot(): number;
        setModule(arg0: number): void;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        col: number[];
        module_separate: boolean;
        quickly: boolean;
        module: number;
        module_infinity_water: boolean;
        outputSlot: $InventoryOutput;
        energyConsume: number;
        defaultEnergyConsume: number;
        output: $MachineRecipe[];
        inputSlots: $InventoryMultiRecipes;
        defaultOperationLength: number;
        operationLength: number;
        modulestorage: boolean;
        upgradeSlot: $InventoryUpgrade;
        modulesize: boolean;
        energy: $Energy;
        constructor(arg0: $IMultiMachine, arg1: $EnumMultiMachine_);
        get cold(): $CoolComponent;
        get sizeWorkingSlot(): number;
    }
    export class $ComponentBioFuelEnergy extends $ComponentBaseEnergy {
        getFluidTank(): $FluidTank;
        setFluidTank(arg0: $FluidTank): void;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $ComponentBioFuelEnergy;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $ComponentBioFuelEnergy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $ComponentBioFuelEnergy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $ComponentBioFuelEnergy;
        delegate: $EnergyNetDelegate$1;
        loaded: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $List_<$Direction_>, arg4: $List_<$Direction_>, arg5: number, arg6: number, arg7: boolean);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number, arg6: number, arg7: boolean);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number);
    }
    export class $Energy extends $AbstractComponent {
        setMultiSource(arg0: boolean): $Energy;
        setPacketOutput(arg0: number): void;
        getCapacity(): number;
        setCapacity(arg0: number): void;
        getDelegate(): $EnergyTile;
        setLimit(arg0: boolean): void;
        setEnabled(arg0: boolean): void;
        getEnergy(): number;
        getComparatorValue(): number;
        getChunkPos(): $ChunkPos;
        forceAddEnergy(arg0: number): void;
        addEnergy(arg0: number): number;
        useEnergy(arg0: number, arg1: boolean): number;
        useEnergy(arg0: number): boolean;
        createDelegate(): void;
        getDefaultCapacity(): number;
        setSourceTier(arg0: number): void;
        setReceivingEnabled(arg0: boolean): void;
        getSinkDirs(): $Set<$Direction>;
        getSourceTier(): number;
        getSinkTier(): number;
        getSourceDirs(): $Set<$Direction>;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $Energy;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $Energy;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: boolean): $Energy;
        setDirections(arg0: $List_<$Direction_>, arg1: $List_<$Direction_>): void;
        setDirections(arg0: $Set_<$Direction_>, arg1: $Set_<$Direction_>): void;
        setSendingEnabled(arg0: boolean): void;
        setSinkTier(arg0: number): void;
        addManagedSlot(arg0: $Inventory): $Energy;
        getFillRatio(): number;
        canUseEnergy(arg0: number): boolean;
        setOverclockRates(arg0: $InventoryUpgrade): void;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $Energy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $Energy;
        getFreeEnergy(): number;
        addCapacity(arg0: number): void;
        upgrade: boolean;
        managedSlots: $List<$Inventory>;
        sourceDirections: $Set<$Direction>;
        multiSource: boolean;
        delegate: $EnergyNetDelegate;
        loaded: boolean;
        fullEnergy: boolean;
        limit_amount: number;
        defaultCapacity: number;
        defaultSinkTier: number;
        sourcePackets: number;
        limit: boolean;
        defaultSourceTier: number;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $List_<$Direction_>, arg3: $List_<$Direction_>, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number);
        constructor(arg0: $BlockEntityInventory, arg1: number);
        set packetOutput(value: number);
        set enabled(value: boolean);
        get energy(): number;
        get comparatorValue(): number;
        get chunkPos(): $ChunkPos;
        set receivingEnabled(value: boolean);
        get sinkDirs(): $Set<$Direction>;
        get sourceDirs(): $Set<$Direction>;
        set sendingEnabled(value: boolean);
        get fillRatio(): number;
        set overclockRates(value: $InventoryUpgrade);
        get freeEnergy(): number;
    }
    export class $HeatComponent extends $AbstractComponent {
        getCapacity(): number;
        setCapacity(arg0: number): void;
        getDelegate(): $IHeatTile;
        getEnergy(): number;
        addEnergy(arg0: number): number;
        useEnergy(arg0: number, arg1: boolean): number;
        useEnergy(arg0: number): boolean;
        createDelegate(): void;
        setSourceTier(arg0: number): void;
        getSinkDirs(): $Set<$Direction>;
        getSourceTier(): number;
        getSinkTier(): number;
        getSourceDirs(): $Set<$Direction>;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $HeatComponent;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $HeatComponent;
        setDirections(arg0: $Set_<$Direction_>, arg1: $Set_<$Direction_>): void;
        setSinkTier(arg0: number): void;
        getFillRatio(): number;
        canUseEnergy(arg0: number): boolean;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $HeatComponent;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $HeatComponent;
        delegate: $EnergyNetDelegate$4;
        loaded: boolean;
        auto: boolean;
        world: $Level;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Set_<$Direction_>, arg3: $Set_<$Direction_>, arg4: number);
        constructor(arg0: $BlockEntityInventory, arg1: number);
        get energy(): number;
        get sinkDirs(): $Set<$Direction>;
        get sourceDirs(): $Set<$Direction>;
        get fillRatio(): number;
    }
    export class $EnergyNetDelegateMultiDual extends $EnergyNetDelegate implements $MultiDual {
        acceptsEnergyFrom(arg0: $EnergyEmitter, arg1: $Direction_): boolean;
        isSink(): boolean;
        isSource(): boolean;
        extractEnergy(arg0: number): void;
        receiveEnergy(arg0: number): void;
        getTick(): number;
        getPerEnergy1(): number;
        getPastEnergy1(): number;
        getEnergyTickList(): $List<number>;
        setPastEnergy1(arg0: number): void;
        addPerEnergy1(arg0: number): void;
        getDemandedEnergy(): number;
        getSourceTier(): number;
        getSinkTier(): number;
        addTick(arg0: number): void;
        getPastEnergy(): number;
        emitsEnergyTo(arg0: $EnergyAcceptor, arg1: $Direction_): boolean;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        canExtractEnergy(): number;
        receiveEnergy(arg0: $Direction_, arg1: number): void;
        getDemandedEnergy(arg0: $Direction_): number;
        getSinkTier(arg0: $Direction_): number;
        extractEnergy(arg0: $Direction_, arg1: number): void;
        getSourceTier(arg0: $Direction_): number;
        canExtractEnergy(arg0: $Direction_): number;
        worldPosition: $BlockPos;
        limit_amount: number;
        sendingSidabled: boolean;
        limit: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        get sink(): boolean;
        get source(): boolean;
        get perEnergy1(): number;
        get energyTickList(): $List<number>;
        get perEnergy(): number;
    }
    export class $EnergyNetDelegate implements $EnergyTile {
        setId(arg0: number): void;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        getSourceEnergy(): number;
        setSinkDirections(arg0: $Set_<$Direction_>): void;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        setSourceDirections(arg0: $Set_<$Direction_>): void;
        getConductors(): $Map<$Direction, $EnergyTile>;
        isRemovedTile(): boolean;
        worldPosition: $BlockPos;
        limit_amount: number;
        sendingSidabled: boolean;
        limit: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $Energy);
        constructor(arg0: $BlockEntityBase, arg1: $Set_<$Direction_>, arg2: $BufferEnergy);
        set id(value: number);
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get sourceEnergy(): number;
        get conductors(): $Map<$Direction, $EnergyTile>;
        get removedTile(): boolean;
    }
    export class $ComponentProcessRender {
        getProcess(): $ProcessMultiComponent;
        getTypeMachines(): $EnumTypeMachines;
        constructor(arg0: $ProcessMultiComponent, arg1: $EnumTypeMachines_);
        get process(): $ProcessMultiComponent;
        get typeMachines(): $EnumTypeMachines;
    }
    export class $ComponentSoundButton extends $ComponentButton {
        getAudioFixer(): $AudioFixer;
        constructor(arg0: $BlockEntityBase, arg1: number, arg2: $AudioFixer);
        get audioFixer(): $AudioFixer;
    }
    export class $ComponentPollution extends $AbstractComponent {
        isActive(): boolean;
        getStack(): $ItemStack;
        getTime(): number;
        getChunkPos(): $ChunkPos;
        setTimer(arg0: $ComponentTimer): void;
        getAllTime(): number;
        constructor(arg0: $BlockEntityInventory);
        get active(): boolean;
        get stack(): $ItemStack;
        get time(): number;
        get chunkPos(): $ChunkPos;
        set timer(value: $ComponentTimer);
        get allTime(): number;
    }
    export class $PollutionMechanism implements $PollutionMechanism$1 {
        getChunkPos(): $ChunkPos;
        getPollution(): number;
        chunkPos: $ChunkPos;
        pollution: number;
        constructor(arg0: $ChunkPos);
        constructor(arg0: $ChunkPos, arg1: number);
    }
    export class $ComponentProgress extends $AbstractComponent {
        getMaxValue(): number;
        getProgress(): number;
        getProgress(arg0: number): number;
        setProgress(arg0: number): void;
        setProgress(arg0: number, arg1: number): void;
        setMaxValue(arg0: number): void;
        getBar(): number;
        getBar(arg0: number): number;
        addProgress(): void;
        addProgress(arg0: number, arg1: number): void;
        addProgress(arg0: number): void;
        cancellationProgress(arg0: number): void;
        cancellationProgress(): void;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: number);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: number);
    }
    export class $ComponentSteamEnergy extends $ComponentBaseEnergy {
        getFluidTank(): $FluidTank;
        setFluidTank(arg0: $FluidTank): void;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number, arg2: number): $ComponentSteamEnergy;
        static asBasicSink(arg0: $BlockEntityInventory, arg1: number): $ComponentSteamEnergy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number): $ComponentSteamEnergy;
        static asBasicSource(arg0: $BlockEntityInventory, arg1: number, arg2: number): $ComponentSteamEnergy;
        delegate: $EnergyNetDelegate$1;
        loaded: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        static speedGeneration: number;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $List_<$Direction_>, arg4: $List_<$Direction_>, arg5: number, arg6: number, arg7: boolean);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number, arg6: number, arg7: boolean);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number, arg3: $Set_<$Direction_>, arg4: $Set_<$Direction_>, arg5: number);
        constructor(arg0: $EnergyType_, arg1: $BlockEntityInventory, arg2: number);
    }
    export class $ComponentRenderInventory {
        contains(arg0: $Inventory): boolean;
        getTypeComponentSlot(): $EnumTypeComponentSlot;
        getSlotList(): $List<$Inventory>;
        getBlackSlotList(): $List<$Inventory>;
        constructor(arg0: $EnumTypeComponentSlot_);
        constructor(arg0: $EnumTypeComponentSlot_, arg1: $List_<$Inventory>);
        constructor(arg0: $EnumTypeComponentSlot_, arg1: $List_<$Inventory>, arg2: $List_<$Inventory>);
        get typeComponentSlot(): $EnumTypeComponentSlot;
        get slotList(): $List<$Inventory>;
        get blackSlotList(): $List<$Inventory>;
    }
    export class $EnergyNetDelegateSource extends $EnergyNetDelegate implements $EnergySource {
        isSource(): boolean;
        extractEnergy(arg0: number): void;
        getSourceTier(): number;
        getPastEnergy(): number;
        emitsEnergyTo(arg0: $EnergyAcceptor, arg1: $Direction_): boolean;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        canExtractEnergy(): number;
        extractEnergy(arg0: $Direction_, arg1: number): void;
        getSourceTier(arg0: $Direction_): number;
        canExtractEnergy(arg0: $Direction_): number;
        worldPosition: $BlockPos;
        maxOutput: number;
        limit_amount: number;
        sendingSidabled: boolean;
        limit: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $Energy);
        constructor(arg0: $BlockEntityBase, arg1: $Set_<$Direction_>, arg2: $BufferEnergy);
        get source(): boolean;
        get perEnergy(): number;
    }
    export class $RedstoneHandler {
        action(arg0: number): void;
        constructor();
    }
    export class $AbstractComponent {
        getParent(): $BlockEntityBase;
        getCapability<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_): T;
        isClient(): boolean;
        setParent(arg0: $BlockEntityBase): void;
        onLoaded(): void;
        isServer(): boolean;
        writeToNbt(): $CompoundTag;
        updateComponent(): $CustomPacketBuffer;
        getDrops(): $List<$ItemStack>;
        readFromNbt(arg0: $CompoundTag_): void;
        onNeighborChange(arg0: $BlockState_, arg1: $BlockPos_): void;
        canEntityDestroy(arg0: $Entity): boolean;
        markDirty(): void;
        onUnloaded(): void;
        onPlaced(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $Direction_): void;
        blockBreak(): void;
        onBlockActivated(arg0: $Player, arg1: $InteractionHand_): boolean;
        updateEntityClient(): void;
        updateEntityServer(): void;
        addInformation(arg0: $ItemStack_, arg1: $List_<string>): void;
        writeNBTToDrops(arg0: $CompoundTag_): $CompoundTag;
        wrenchCanRemove(arg0: $Player): boolean;
        onNetworkUpdate(arg0: $CustomPacketBuffer): void;
        workPurifier(): void;
        canUsePurifier(arg0: $Player): boolean;
        getPurifierJob(): $TypePurifierJob;
        actionGetDrop(): void;
        canUpgradeBlock(): boolean;
        ActionPurifier(): void;
        getProvidedCapabilities(arg0: $Direction_): $Collection<$BlockCapability<never, never>>;
        needWriteNBTToDrops(): boolean;
        onSneakingActivated(arg0: $Player, arg1: $InteractionHand_): boolean;
        onContainerUpdate(arg0: $ServerPlayer): void;
        getItemStackUpgrade(): $ItemStack;
        constructor(arg0: $BlockEntityBase);
        get client(): boolean;
        get server(): boolean;
        get drops(): $List<$ItemStack>;
        get purifierJob(): $TypePurifierJob;
        get itemStackUpgrade(): $ItemStack;
    }
    export class $ComponentButton {
        getEvent(): number;
        active(): boolean;
        getText(): string;
        ClickEvent(): void;
        getEntityBlock(): $BlockEntityBase;
        constructor(arg0: $BlockEntityBase, arg1: number);
        constructor(arg0: $BlockEntityBase, arg1: number, arg2: string);
        get event(): number;
        get text(): string;
        get entityBlock(): $BlockEntityBase;
    }
    export class $TypeLoad extends $Enum<$TypeLoad> {
        static values(): $TypeLoad[];
        static valueOf(arg0: string): $TypeLoad;
        static PROGRESS: $TypeLoad;
        static AFTER_PROGRESS: $TypeLoad;
        static ALWAYS: $TypeLoad;
    }
    /**
     * Values that may be interpreted as {@link $TypeLoad}.
     */
    export type $TypeLoad_ = "always" | "progress" | "after_progress";
    export class $SoilPollutionComponent extends $AbstractComponent {
        getPercent(): number;
        static spawnSoilPollution(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        setPollution(arg0: number): void;
        getDefault_pollution(): number;
        isEffectivelyActive(): boolean;
        getCurrentContribution(): number;
        constructor(arg0: $BlockEntityInventory, arg1: number);
        get percent(): number;
        set pollution(value: number);
        get default_pollution(): number;
        get effectivelyActive(): boolean;
        get currentContribution(): number;
    }
    export class $SteamProcessMultiComponent extends $AbstractComponent implements $IMultiUpdateTick {
        getOutput(arg0: number): $MachineRecipe;
        getProgress(arg0: number): number;
        getRecipeOutput(arg0: number): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        setRecipeOutput(arg0: $MachineRecipe, arg1: number): void;
        operate(arg0: number, arg1: $MachineRecipe): void;
        setOverclockRates(): void;
        operateOnce(arg0: number, arg1: $List_<$ItemStack_>): void;
        getSizeWorkingSlot(): number;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        inputSlots: $InventorySteamMultiRecipes;
        operationLength: number;
        outputSlot: $InventoryOutput;
        energyConsume: number;
        constructor(arg0: $ISteamMechanism, arg1: $EnumMultiMachine_);
        get sizeWorkingSlot(): number;
    }
    export class $EnumTypeStyle extends $Enum<$EnumTypeStyle> {
        static values(): $EnumTypeStyle[];
        static valueOf(arg0: string): $EnumTypeStyle;
        getY(): number;
        getX(): number;
        static SPACE: $EnumTypeStyle;
        static STORAGE: $EnumTypeStyle;
        static PHOTONIC: $EnumTypeStyle;
        static PERFECT: $EnumTypeStyle;
        static STEAM: $EnumTypeStyle;
        static BIO: $EnumTypeStyle;
        static DEFAULT: $EnumTypeStyle;
        static IMPROVED: $EnumTypeStyle;
        static ADVANCED: $EnumTypeStyle;
        get y(): number;
        get x(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeStyle}.
     */
    export type $EnumTypeStyle_ = "default" | "advanced" | "improved" | "perfect" | "photonic" | "steam" | "bio" | "space" | "storage";
    export class $Fluids extends $AbstractComponent {
        getFluidTank(arg0: string): $FluidTank;
        isHasInput(): boolean;
        addTank(arg0: string, arg1: number, arg2: $Collection_<$Direction_>, arg3: $Collection_<$Direction_>, arg4: $Predicate<$Fluid_>, arg5: $Inventory$TypeItemSlot_): $Fluids$InternalFluidTank;
        addTank(arg0: $Fluids$InternalFluidTank): $Fluids$InternalFluidTank;
        addTank(arg0: string, arg1: number, arg2: $Predicate<$Fluid_>, arg3: $Inventory$TypeItemSlot_): $Fluids$InternalFluidTank;
        addTank(arg0: string, arg1: number): $Fluids$InternalFluidTank;
        addTank(arg0: string, arg1: number, arg2: $Inventory$TypeItemSlot_): $Fluids$InternalFluidTank;
        addTank(arg0: string, arg1: number, arg2: $Predicate<$Fluid_>): $Fluids$InternalFluidTank;
        addTank(arg0: string, arg1: number, arg2: $Inventory$TypeItemSlot_, arg3: $Predicate<$Fluid_>): $Fluids$InternalFluidTank;
        isHasExtract(): boolean;
        static fluidPredicate(arg0: $List_<$Fluid_>): $Predicate<$Fluid>;
        static fluidPredicate(...arg0: $Fluid_[]): $Predicate<$Fluid>;
        getManagedTanks(): $List<$Fluids$InternalFluidTank>;
        addTankInsert(arg0: string, arg1: number, arg2: $Predicate<$Fluid_>): $Fluids$InternalFluidTank;
        addTankInsert(arg0: string, arg1: number): $Fluids$InternalFluidTank;
        addTankExtract(arg0: string, arg1: number, arg2: $Predicate<$Fluid_>): $Fluids$InternalFluidTank;
        addTankExtract(arg0: string, arg1: number): $Fluids$InternalFluidTank;
        addUnmanagedTanks(arg0: $Fluids$InternalFluidTank): void;
        addUnmanagedTanks(arg0: $Collection_<$Fluids$InternalFluidTank>): void;
        changeConnectivity(arg0: $Fluids$InternalFluidTank, arg1: $Collection_<$Direction_>, arg2: $Collection_<$Direction_>): void;
        changeConnectivity(arg0: $Fluids$InternalFluidTank, arg1: $Inventory$TypeItemSlot_): void;
        getAllTanks(): $Iterable<$Fluids$InternalFluidTank>;
        addUnmanagedTankHook(arg0: $Supplier_<$Collection<$Fluids$InternalFluidTank>>): void;
        static LAVA: $Fluid;
        static EMPTY: $Fluid;
        static WATER: $Fluid;
        constructor(arg0: $BlockEntityInventory);
        get hasInput(): boolean;
        get hasExtract(): boolean;
        get managedTanks(): $List<$Fluids$InternalFluidTank>;
        get allTanks(): $Iterable<$Fluids$InternalFluidTank>;
    }
    export class $ComponentMiniPanel$EnergyNetDelegate extends $BlockEntity implements $EnergyTile {
        isRemovedTile(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        get removedTile(): boolean;
    }
    export class $Fluids$InternalFluidTank extends $FluidTank {
        getIdentifier(): string;
        readPacket(arg0: $CustomPacketBuffer): void;
        isInput(): boolean;
        canDrain(arg0: $Direction_): boolean;
        canFill(arg0: $Direction_): boolean;
        isOutput(): boolean;
        writePacket(): $CustomPacketBuffer;
        setCanAccept(arg0: boolean): void;
        acceptsFluid(arg0: $Fluid_): boolean;
        getFluidList(): $List<string>;
        getAcceptedFluids(): $Predicate<$Fluid>;
        setTypeItemSlot(arg0: $Inventory$TypeItemSlot_): void;
        setAcceptedFluids(arg0: $Predicate<$Fluid_>): void;
        modeFluid: number;
        get identifier(): string;
        get input(): boolean;
        get output(): boolean;
        set canAccept(value: boolean);
        get fluidList(): $List<string>;
        set typeItemSlot(value: $Inventory$TypeItemSlot_);
    }
    export class $EnergyNetDelegateSink extends $EnergyNetDelegate implements $EnergySink {
        acceptsEnergyFrom(arg0: $EnergyEmitter, arg1: $Direction_): boolean;
        isSink(): boolean;
        receiveEnergy(arg0: number): void;
        getTick(): number;
        getEnergyTickList(): $List<number>;
        getDemandedEnergy(): number;
        getSinkTier(): number;
        addTick(arg0: number): void;
        getPastEnergy(): number;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        receiveEnergy(arg0: $Direction_, arg1: number): void;
        getDemandedEnergy(arg0: $Direction_): number;
        getSinkTier(arg0: $Direction_): number;
        worldPosition: $BlockPos;
        limit_amount: number;
        sendingSidabled: boolean;
        limit: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $Energy);
        get sink(): boolean;
        get energyTickList(): $List<number>;
        get perEnergy(): number;
    }
    export class $EnumTypeComponentSlot extends $Enum<$EnumTypeComponentSlot> {
        static values(): $EnumTypeComponentSlot[];
        static valueOf(arg0: string): $EnumTypeComponentSlot;
        static ALL: $EnumTypeComponentSlot;
        static INVENTORY: $EnumTypeComponentSlot;
        static SLOT: $EnumTypeComponentSlot;
        static SLOTS_UPGRADE_JEI: $EnumTypeComponentSlot;
        static SLOTS_UPGRADE: $EnumTypeComponentSlot;
        static SLOTS__JEI: $EnumTypeComponentSlot;
        static MAIN_INVENTORY: $EnumTypeComponentSlot;
        static DEFAULT: $EnumTypeComponentSlot;
        static SLOTS__JEI_OUTPUT: $EnumTypeComponentSlot;
        static SLOTS__JEI_INPUT: $EnumTypeComponentSlot;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeComponentSlot}.
     */
    export type $EnumTypeComponentSlot_ = "slot" | "default" | "inventory" | "main_inventory" | "all" | "slots_upgrade" | "slots_upgrade_jei" | "slots__jei" | "slots__jei_input" | "slots__jei_output";
    export class $ComponentSteamProcessRender {
        getProcess(): $SteamProcessMultiComponent;
        getTypeMachines(): $EnumTypeMachines;
        constructor(arg0: $SteamProcessMultiComponent, arg1: $EnumTypeMachines_);
        get process(): $SteamProcessMultiComponent;
        get typeMachines(): $EnumTypeMachines;
    }
}
