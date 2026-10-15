import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityItemPipes } from "@package/com/denfop/blockentity/transport/tiles";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $NumberFormat } from "@package/java/text";
import { $DataCable } from "@package/com/denfop/render/transport";
import { $SlotInfo } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $ICableItem, $ItemType } from "@package/com/denfop/blockentity/transport/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/transport/tiles/transport" {
    export class $BlockEntityTransportPipe13 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe12 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe15 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe14 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe17 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe16 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe19 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe18 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe11 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe10 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe24 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe23 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe26 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe25 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe28 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe27 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe29 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe20 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe22 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe21 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe3 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe4 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe5 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe6 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe1 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe2 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe7 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe8 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTransportPipe9 extends $BlockEntityItemPipes {
        blockState: $BlockState;
        redstoneSignal: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        facingSide: $Direction;
        list: $SlotInfo;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        cableType: $ItemType;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
