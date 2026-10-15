import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $InventoryFluid, $InventoryDischarge, $InventoryDrainTank, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $BlockEntityElectricMachine, $IManufacturerBlock } from "@package/com/denfop/blockentity/base";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map, $Set } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $Fluids, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $UpgradableProperty, $IUpgradableBlock } from "@package/com/denfop/api/upgrades";
import { $ContainerMenuLavaGenerator, $ContainerMenuHeliumGenerator, $ContainerMenuWaterGenerator, $ContainerMenuAirCollector } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/generator/things/fluid" {
    export class $BlockEntityLavaGenerator extends $BlockEntityElectricMachine implements $IUpgradableBlock {
        setUpgradestat(): void;
        attemptGeneration(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuLavaGenerator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getProgressAsString(): string;
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get progressAsString(): string;
    }
    export class $BlockEntityAirCollector extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IManufacturerBlock {
        getFluidTank(arg0: number): $FluidTank;
        setUpgradestat(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuAirCollector;
        static getAirPurificationPerSecond(arg0: number): number;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        gaugeLiquidScaled(arg0: number): number;
        gaugeLiquidScaled(arg0: number): number;
        update_collector(): void;
        update_collector(arg0: $BlockPos_): void;
        static getAirPurificationPerCycle(arg0: number): number;
        static getCarbonDioxidePerCycle(arg0: number): number;
        getStartSoundFile(): string;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        fluidTank: $FluidTank[];
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryDrainTank[];
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get startSoundFile(): string;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityWaterGenerator extends $BlockEntityElectricMachine implements $IUpgradableBlock {
        setUpgradestat(): void;
        attemptGeneration(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuWaterGenerator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getProgressAsString(): string;
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get progressAsString(): string;
    }
    export class $BlockEntityHeliumGenerator extends $BlockEntityElectricMachine implements $IUpgradableBlock {
        setUpgradestat(): void;
        attemptGeneration(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuHeliumGenerator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getProgressAsString(): string;
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get progressAsString(): string;
    }
}
