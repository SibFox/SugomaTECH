import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map, $List_ } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $ContainerMenuSteamTurbineControllerRod, $ContainerMenuSteamTurbineRod } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ISteam, $ISteamBlade, $ICoolant as $ICoolant$1, $IExchanger as $IExchanger$1, $IRod as $IRod$1 } from "@package/com/denfop/api/steam";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as controller from "@package/com/denfop/blockentity/mechanism/steamturbine/controller";
export * as exchanger from "@package/com/denfop/blockentity/mechanism/steamturbine/exchanger";
export * as tank from "@package/com/denfop/blockentity/mechanism/steamturbine/tank";
export * as pressure from "@package/com/denfop/blockentity/mechanism/steamturbine/pressure";
export * as coolant from "@package/com/denfop/blockentity/mechanism/steamturbine/coolant";

declare module "@package/com/denfop/blockentity/mechanism/steamturbine" {
    export class $ISocket {
    }
    export interface $ISocket extends $IMultiElement {
        getEnergy(): $Energy;
        get energy(): $Energy;
    }
    export class $IControllerRod {
    }
    export interface $IControllerRod extends $IMultiElement {
        getRods(): $List<$IRod>;
        setList(arg0: $List_<$IRod>): void;
        get rods(): $List<$IRod>;
        set list(value: $List_<$IRod>);
    }
    export class $ICoolant {
    }
    export interface $ICoolant extends $ICoolant$1 {
    }
    export class $BlockEntitySteamTurbineCasing extends $BlockEntityMultiBlockElement implements $ICasing {
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
    export class $BlockEntitySteamTurbineControllerRod extends $BlockEntityMultiBlockElement implements $IControllerRod, $IUpdatableTileEvent {
        getRods(): $List<$IRod>;
        setList(arg0: $List_<$IRod>): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSteamTurbineControllerRod;
        updateTileServer(arg0: $Player, arg1: number): void;
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
        get rods(): $List<$IRod>;
        set list(value: $List_<$IRod>);
    }
    export class $ITank {
    }
    export interface $ITank extends $IMultiElement {
        clear(arg0: boolean): void;
        getTank(): $FluidTank;
        setWaterTank(): void;
        setSteamTank(): void;
        get tank(): $FluidTank;
    }
    export class $IExchanger {
    }
    export interface $IExchanger extends $IExchanger$1 {
    }
    export class $BlockEntitySteamTurbineRod extends $BlockEntityMultiBlockElement implements $IRod {
        getSlot(): $Inventory;
        getRods(): $List<$ISteamBlade>;
        getGuiContainer(arg0: $Player): $ContainerMenuSteamTurbineRod;
        updateBlades(): void;
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
        get rods(): $List<$ISteamBlade>;
    }
    export class $IController {
    }
    export interface $IController extends $ISteam {
    }
    export class $IRod {
    }
    export interface $IRod extends $IRod$1 {
        getSlot(): $Inventory;
        getPos(): $BlockPos;
        getRods(): $List<$ISteamBlade>;
        updateBlades(): void;
        get slot(): $Inventory;
        get pos(): $BlockPos;
        get rods(): $List<$ISteamBlade>;
    }
    export class $IPressure {
    }
    export interface $IPressure extends $IMultiElement {
        getPressure(): number;
        get pressure(): number;
    }
    export class $IGlass {
    }
    export interface $IGlass extends $IMultiElement {
    }
    export class $BlockEntitySteamTurbineSocket extends $BlockEntityMultiBlockElement implements $ISocket {
        getEnergy(): $Energy;
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
        get energy(): $Energy;
    }
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
    export class $BlockEntitySteamTurbineGlass extends $BlockEntityMultiBlockElement implements $IGlass {
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
}
