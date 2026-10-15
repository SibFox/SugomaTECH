import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
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

declare module "@package/com/denfop/blockentity/mechanism/multimechanism/simple" {
    export class $BlockEntityGearMachine extends $BlockEntityMultiMachine {
        static itemNames(): $List<string>;
        static addrecipe(arg0: string, arg1: string): void;
        static itemNames1(): $List<string>;
        static itemNames7(): $List<string>;
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
    export class $BlockEntityMacerator extends $BlockEntityMultiMachine {
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
    export class $BlockEntityExtractor extends $BlockEntityMultiMachine {
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
    export class $BlockEntityRecycler extends $BlockEntityMultiMachine {
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
    export class $BlockEntityElectricFurnace extends $BlockEntityMultiMachine {
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
    export class $BlockEntityRolling extends $BlockEntityMultiMachine {
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
    export class $BlockEntityCombMacerator extends $BlockEntityMultiMachine {
        static addRecipe(arg0: string, arg1: string): void;
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        static addmacerator(arg0: string, arg1: string, arg2: number): void;
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
        static ores: $List<string>;
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
    export class $BlockEntityCutting extends $BlockEntityMultiMachine {
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
    export class $BlockEntityCentrifuge extends $BlockEntityMultiMachine {
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
    export class $BlockEntityCompressor extends $BlockEntityMultiMachine {
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
    export class $BlockEntityOreWashing extends $BlockEntityMultiMachine {
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
    export class $BlockEntityFermer extends $BlockEntityMultiMachine implements $IFarmer {
        static addrecipe(arg0: $Item_, arg1: $Item_, arg2: number): void;
        static addrecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): void;
        static addrecipe(arg0: $Item_, arg1: $ItemStack_, arg2: number): void;
        static addrecipe(arg0: $ItemStack_, arg1: $Item_, arg2: number): void;
        static addrecipe(arg0: $Item_, arg1: $Item_): void;
        static addrecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addrecipe(arg0: $ItemStack_, arg1: $Item_): void;
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
    export class $BlockEntityAssamplerScrap extends $BlockEntityMultiMachine {
        static addrecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
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
    export class $BlockEntityExtruding extends $BlockEntityMultiMachine {
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
