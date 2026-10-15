import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockEntityElectricLiquidTankInventory } from "@package/com/denfop/blockentity/base";
import { $InventoryFluid, $InventoryDischarge, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map, $Set } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Fluids$InternalFluidTank, $Energy, $Fluids, $ComponentBaseEnergy, $SoilPollutionComponent, $EnumTypeStyle } from "@package/com/denfop/componets";
import { $IType } from "@package/com/denfop/api/widget";
import { $UpgradableProperty, $IUpgradableBlock } from "@package/com/denfop/api/upgrades";
import { $ContainerMenuCombPump } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $Enum } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/combpump" {
    export class $BlockEntitySimpleCombinedPump extends $BlockEntityCombinedPump {
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        containerSlot: $InventoryFluid;
        level: $Level;
        energyQe: $ComponentBaseEnergy;
        active: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typePump: $EnumTypePump;
        typeAudio: $EnumTypeAudio;
        x: number;
        progress: number;
        y: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        z: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCombinedPump extends $BlockEntityElectricLiquidTankInventory implements $IUpgradableBlock, $IType {
        getStyle(): $EnumTypeStyle;
        pump(arg0: $BlockPos_, arg1: boolean): $FluidStack;
        setUpgradestat(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuCombPump;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(arg0: number, arg1: number, arg2: number): boolean;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        containerSlot: $InventoryFluid;
        level: $Level;
        energyQe: $ComponentBaseEnergy;
        active: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typePump: $EnumTypePump;
        typeAudio: $EnumTypeAudio;
        x: number;
        progress: number;
        y: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        z: number;
        constructor(arg0: number, arg1: number, arg2: $EnumTypePump_, arg3: $MultiBlockEntity, arg4: $BlockPos_, arg5: $BlockState_);
        get style(): $EnumTypeStyle;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityImpCombPump extends $BlockEntityCombinedPump {
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        containerSlot: $InventoryFluid;
        level: $Level;
        energyQe: $ComponentBaseEnergy;
        active: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typePump: $EnumTypePump;
        typeAudio: $EnumTypeAudio;
        x: number;
        progress: number;
        y: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        z: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $EnumTypePump extends $Enum<$EnumTypePump> {
        static values(): $EnumTypePump[];
        static valueOf(arg0: string): $EnumTypePump;
        getY(): number;
        getXz(): number;
        static P: $EnumTypePump;
        static A: $EnumTypePump;
        static S: $EnumTypePump;
        static PH: $EnumTypePump;
        static I: $EnumTypePump;
        get y(): number;
        get xz(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypePump}.
     */
    export type $EnumTypePump_ = "s" | "a" | "i" | "p" | "ph";
    export class $BlockEntityAdvCombPump extends $BlockEntityCombinedPump {
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        containerSlot: $InventoryFluid;
        level: $Level;
        energyQe: $ComponentBaseEnergy;
        active: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typePump: $EnumTypePump;
        typeAudio: $EnumTypeAudio;
        x: number;
        progress: number;
        y: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        z: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPerCombPump extends $BlockEntityCombinedPump {
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        containerSlot: $InventoryFluid;
        level: $Level;
        energyQe: $ComponentBaseEnergy;
        active: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typePump: $EnumTypePump;
        typeAudio: $EnumTypeAudio;
        x: number;
        progress: number;
        y: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        z: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
