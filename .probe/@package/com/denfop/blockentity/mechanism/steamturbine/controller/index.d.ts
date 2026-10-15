import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $IRod, $ICoolant, $ITank, $IExchanger, $IController, $IPressure, $ISocket } from "@package/com/denfop/blockentity/mechanism/steamturbine";
import { $ContainerMenuBaseSteamTurbineController } from "@package/com/denfop/containermenu";
import { $BlockEntityMultiBlockBase } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumSteamPhase, $Steam } from "@package/com/denfop/api/steam";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/steamturbine/controller" {
    export class $BlockEntitySimpleSteamTurbineController extends $BlockEntityBaseSteamTurbineController {
        listExchanger: $List<$IExchanger>;
        heat: number;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        stableenumSteamPhase: $EnumSteamPhase;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        steam: $Steam;
        block: $BlockTileEntity<any>;
        listCoolant: $List<$ICoolant>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        tankWater: $ITank;
        teBlock: $MultiBlockEntity;
        energy: $ISocket;
        phase: number;
        generation: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        tankSteam: $ITank;
        iRodListMap: $List<$IRod>;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        pressure: $IPressure;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        enumSteamPhase: $EnumSteamPhase;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityBaseSteamTurbineController extends $BlockEntityMultiBlockBase implements $IController, $IUpdatableTileEvent {
        getStableSteamPhase(): $EnumSteamPhase;
        getInfo(): $List<$IRod>;
        getCoolant(): $List<$ICoolant>;
        addHeat(arg0: number): void;
        addPhase(arg0: number): void;
        removeHeat(arg0: number): void;
        getPhase(): number;
        getHeat(): number;
        updateInfo(): void;
        getEnergy(): $ISocket;
        getAngle(): number;
        getExchanger(): $List<$IExchanger>;
        getSteamFluid(): $FluidTank;
        getWaterFluid(): $FluidTank;
        removePhase(arg0: number): void;
        getSteamPhase(): $EnumSteamPhase;
        getPressure(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuBaseSteamTurbineController;
        isWork(): boolean;
        getMaxHeat(): number;
        setGeneration(arg0: number): void;
        listExchanger: $List<$IExchanger>;
        heat: number;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        stableenumSteamPhase: $EnumSteamPhase;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        steam: $Steam;
        block: $BlockTileEntity<any>;
        listCoolant: $List<$ICoolant>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        tankWater: $ITank;
        teBlock: $MultiBlockEntity;
        energy: $ISocket;
        phase: number;
        generation: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        tankSteam: $ITank;
        iRodListMap: $List<$IRod>;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        pressure: $IPressure;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        enumSteamPhase: $EnumSteamPhase;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: number, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
        get stableSteamPhase(): $EnumSteamPhase;
        get info(): $List<$IRod>;
        get coolant(): $List<$ICoolant>;
        get angle(): number;
        get exchanger(): $List<$IExchanger>;
        get steamFluid(): $FluidTank;
        get waterFluid(): $FluidTank;
        get steamPhase(): $EnumSteamPhase;
        get maxHeat(): number;
    }
    export class $BlockEntityPerSteamTurbineController extends $BlockEntityBaseSteamTurbineController {
        listExchanger: $List<$IExchanger>;
        heat: number;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        stableenumSteamPhase: $EnumSteamPhase;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        steam: $Steam;
        block: $BlockTileEntity<any>;
        listCoolant: $List<$ICoolant>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        tankWater: $ITank;
        teBlock: $MultiBlockEntity;
        energy: $ISocket;
        phase: number;
        generation: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        tankSteam: $ITank;
        iRodListMap: $List<$IRod>;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        pressure: $IPressure;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        enumSteamPhase: $EnumSteamPhase;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAdvSteamTurbineController extends $BlockEntityBaseSteamTurbineController {
        listExchanger: $List<$IExchanger>;
        heat: number;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        stableenumSteamPhase: $EnumSteamPhase;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        steam: $Steam;
        block: $BlockTileEntity<any>;
        listCoolant: $List<$ICoolant>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        tankWater: $ITank;
        teBlock: $MultiBlockEntity;
        energy: $ISocket;
        phase: number;
        generation: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        tankSteam: $ITank;
        iRodListMap: $List<$IRod>;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        pressure: $IPressure;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        enumSteamPhase: $EnumSteamPhase;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityImpSteamTurbineController extends $BlockEntityBaseSteamTurbineController {
        listExchanger: $List<$IExchanger>;
        heat: number;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        stableenumSteamPhase: $EnumSteamPhase;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        steam: $Steam;
        block: $BlockTileEntity<any>;
        listCoolant: $List<$ICoolant>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        tankWater: $ITank;
        teBlock: $MultiBlockEntity;
        energy: $ISocket;
        phase: number;
        generation: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        tankSteam: $ITank;
        iRodListMap: $List<$IRod>;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        pressure: $IPressure;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        enumSteamPhase: $EnumSteamPhase;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
