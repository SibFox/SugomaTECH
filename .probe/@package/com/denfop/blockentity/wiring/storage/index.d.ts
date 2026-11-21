import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockEntityElectricBlock } from "@package/com/denfop/blockentity/base";
import { $InventoryCharge, $InventoryElectricBlock, $InventoryDischarge } from "@package/com/denfop/inventory";
import { $EnumElectricBlock } from "@package/com/denfop/blockentity/wiring";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $WirelessComponent, $Energy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/wiring/storage" {
    export class $BlockEntityElectricPerMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricHadrMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricKvrMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricCESU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricUltMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricBarMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricAdvMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricBatBox extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricGraMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityElectricMFE extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
