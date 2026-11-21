import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockEntityMultiMachine } from "@package/com/denfop/blockentity/base";
import { $Inventory, $InventoryDischarge } from "@package/com/denfop/inventory";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $CoolComponent, $Energy, $ProcessMultiComponent, $ComponentBaseEnergy, $SoilPollutionComponent, $HeatComponent } from "@package/com/denfop/componets";
import { $IFarmer } from "@package/com/denfop/blockentity/mechanism/multimechanism";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $EnumSolarPanels } from "@package/com/denfop/blockentity/panels/entity";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/multimechanism/triple" {
    export class $BlockEntityTripleCentrifuge extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
    }
    export class $BlockEntityTripleGearMachine extends $BlockEntityMultiMachine {
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTripleCombRecycler extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleExtractor extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleElectricFurnace extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleMacerator extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleOreWashing extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
    }
    export class $BlockEntityTripleCutting extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleFermer extends $BlockEntityMultiMachine implements $IFarmer {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getFertilizerSlot(): $Inventory;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get fertilizerSlot(): $Inventory;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleRolling extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityCombTripleMacerator extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleAssamplerScrap extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleRecycler extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleCompressor extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getWrenchDropRate(): number;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get wrenchDropRate(): number;
        get inventoryName(): string;
    }
    export class $BlockEntityTripleExtruding extends $BlockEntityMultiMachine {
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getInventoryName(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        multi_process: $ProcessMultiComponent;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        exp: $ComponentBaseEnergy;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        sizeWorkingSlot: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        solartype: $EnumSolarPanels;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get inventoryName(): string;
    }
}
