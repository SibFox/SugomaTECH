import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $BlockEntityLiquidTankInventory } from "@package/com/denfop/blockentity/base";
import { $InventoryCharge, $InventoryFluid } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $Fluids, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ContainerMenuPetrolGenerator, $ContainerMenuDieselGenerator, $ContainerMenuHydrogenGenerator, $ContainerMenuGasGenerator, $ContainerMenuBiomassGenerator } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $BlockEntityGeoGenerator as $BlockEntityGeoGenerator$1 } from "@package/com/denfop/blockentity/mechanism/generator/energy";
import { $AudioFixer, $EnumTypeAudio_, $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/generator/energy/fluid" {
    export class $BlockEntityPhoGeoGenerator extends $BlockEntityGeoGenerator$1 {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        fuel: number;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        chargeSlot: $InventoryCharge;
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
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAdvGeoGenerator extends $BlockEntityGeoGenerator$1 {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        fuel: number;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        chargeSlot: $InventoryCharge;
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
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityImpGeoGenerator extends $BlockEntityGeoGenerator$1 {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        fuel: number;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        chargeSlot: $InventoryCharge;
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
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityDieselGenerator extends $BlockEntityLiquidTankInventory implements $AudioFixer, $IUpdatableTileEvent {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        isConverting(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuDieselGenerator;
        gainEnergy(): boolean;
        getWrenchDropRate(): number;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        production: number;
        fluidTank: $FluidTank;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        chargeSlot: $InventoryCharge;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        coef: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get converting(): boolean;
        get wrenchDropRate(): number;
        get enable(): boolean;
    }
    export class $BlockEntityPetrolGenerator extends $BlockEntityLiquidTankInventory implements $AudioFixer, $IUpdatableTileEvent {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        isConverting(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuPetrolGenerator;
        gainEnergy(): boolean;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        production: number;
        fluidTank: $FluidTank;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        chargeSlot: $InventoryCharge;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        coef: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get converting(): boolean;
        get enable(): boolean;
    }
    export class $BlockEntityPerGeoGenerator extends $BlockEntityGeoGenerator$1 {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        fuel: number;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        chargeSlot: $InventoryCharge;
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
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityGasGenerator extends $BlockEntityLiquidTankInventory implements $AudioFixer, $IUpdatableTileEvent {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        isConverting(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuGasGenerator;
        gainEnergy(): boolean;
        getWrenchDropRate(): number;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        updateTileServer(arg0: $Player, arg1: number): void;
        gaugeStorageScaled(arg0: number): number;
        blockState: $BlockState;
        production: number;
        fluidTank: $FluidTank;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        chargeSlot: $InventoryCharge;
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
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get converting(): boolean;
        get wrenchDropRate(): number;
        get enable(): boolean;
    }
    export class $BlockEntityGeoGenerator extends $BlockEntityGeoGenerator$1 {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        fuel: number;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        chargeSlot: $InventoryCharge;
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
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityBioFuelGenerator extends $BlockEntityLiquidTankInventory implements $AudioFixer, $IUpdatableTileEvent {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        isConverting(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuBiomassGenerator;
        gainEnergy(): boolean;
        getWrenchDropRate(): number;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        production: number;
        fluidTank: $FluidTank;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        chargeSlot: $InventoryCharge;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        coef: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get converting(): boolean;
        get wrenchDropRate(): number;
        get enable(): boolean;
    }
    export class $BlockEntityHydrogenGenerator extends $BlockEntityLiquidTankInventory implements $AudioFixer, $IUpdatableTileEvent {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        isConverting(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuHydrogenGenerator;
        gainEnergy(): boolean;
        getWrenchDropRate(): number;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        production: number;
        fluidTank: $FluidTank;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        chargeSlot: $InventoryCharge;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        coef: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get converting(): boolean;
        get wrenchDropRate(): number;
        get enable(): boolean;
    }
}
