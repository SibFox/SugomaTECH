import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IMainMultiBlock, $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $Random, $List, $Map, $List_ } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $BlockEntityMultiBlockBase, $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ContainerMenuEarthChest, $ContainerMenuEarthAnalyzer, $ContainerMenuEarthController } from "@package/com/denfop/containermenu";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/quarry_earth" {
    export class $BlockEntityEarthQuarryController extends $BlockEntityMultiBlockBase implements $IEarthQuarry, $IUpdatableTileEvent {
        getEnergy(): $Energy;
        getGuiContainer(arg0: $Player): $ContainerMenuEarthController;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        indexChunk: number;
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
        static random: $Random;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        analyzer: $IAnalyzer;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        map: $Map<$ChunkPos, $List<$DataPos>>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        earthChestList: $List<$IEarthChest>;
        static ticker: number;
        chunkPosList: $List<$ChunkPos>;
        static chunkPos: $List<$ChunkPos>;
        pollutionSoil: $SoilPollutionComponent;
        max: number;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        block_Col: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCasing extends $BlockEntityMultiBlockElement implements $ICasing {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $IEarthChest {
    }
    export interface $IEarthChest extends $IMultiElement {
        getSlot(): $Inventory;
        get slot(): $Inventory;
    }
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
    export class $IEarthQuarry {
    }
    export interface $IEarthQuarry extends $IMainMultiBlock {
    }
    export class $ITransport {
    }
    export interface $ITransport extends $IMultiElement {
    }
    export class $BlockEntityEarthQuarryAnalyzer extends $BlockEntityMultiBlockElement implements $IAnalyzer, $IUpdatableTileEvent {
        getChunkPoses(): $Map<$ChunkPos, $List<$DataPos>>;
        fullAnalyzed(): boolean;
        isAnalyzed(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuEarthAnalyzer;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockOres: number;
        blockState: $BlockState;
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
        blockCol: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get chunkPoses(): $Map<$ChunkPos, $List<$DataPos>>;
        get analyzed(): boolean;
    }
    export class $IAnalyzer {
    }
    export interface $IAnalyzer extends $IMultiElement {
        getChunkPoses(): $Map<$ChunkPos, $List<$DataPos>>;
        fullAnalyzed(): boolean;
        isAnalyzed(): boolean;
        get chunkPoses(): $Map<$ChunkPos, $List<$DataPos>>;
        get analyzed(): boolean;
    }
    export class $IRigDrill {
    }
    export interface $IRigDrill extends $IMultiElement {
        startOperation(arg0: $List_<$DataPos>): void;
    }
    export class $DataPos {
        static load(arg0: $CompoundTag_): $DataPos;
        getState(): $BlockState;
        save(): $CompoundTag;
        getPos(): $BlockPos;
        pos: $BlockPos;
        state: $BlockState;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityEarthTransport extends $BlockEntityMultiBlockElement implements $ITransport {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRigDrill extends $BlockEntityMultiBlockElement implements $IRigDrill {
        startOperation(arg0: $List_<$DataPos>): void;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityChest extends $BlockEntityMultiBlockElement implements $IEarthChest {
        getSlot(): $Inventory;
        getGuiContainer(arg0: $Player): $ContainerMenuEarthChest;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get slot(): $Inventory;
    }
}
