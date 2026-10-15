import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $IMainMultiBlock, $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $InventoryTurbineRotorBlades } from "@package/com/denfop/inventory";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $SoilPollutionComponent, $EnumTypeStyle } from "@package/com/denfop/componets";
import { $IType } from "@package/com/denfop/api/widget";
import { $BlockEntityMultiBlockBase, $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $ContainerMenuWindTurbine } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IWindMechanism, $EnumLevelGenerators, $InventoryWindTurbineRotor, $EnumWindSide, $EnumRotorSide_, $EnumRotorSide, $EnumTypeWind, $WindRotor } from "@package/com/denfop/api/windsystem";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/windturbine" {
    export class $BlockEntityWindTurbineCasing2 extends $BlockEntityMultiBlockElement implements $ICasing2 {
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
    export class $BlockEntityWindTurbineCasing1 extends $BlockEntityMultiBlockElement implements $ICasing1 {
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
    export class $BlockEntityWindTurbineStabilizer extends $BlockEntityMultiBlockElement implements $IStabilizer {
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
    export class $IStabilizer {
    }
    export interface $IStabilizer extends $IMultiElement {
    }
    export class $BlockEntityWindTurbineSocket extends $BlockEntityMultiBlockElement implements $ISocket {
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
    export class $ICasing1 {
    }
    export interface $ICasing1 extends $IMultiElement {
    }
    export class $ICasing2 {
    }
    export interface $ICasing2 extends $IMultiElement {
    }
    export class $BlockEntityWindTurbineController$ClientRotorModels {
    }
    export class $BlockEntityWindTurbineCasing extends $BlockEntityMultiBlockElement implements $ICasing {
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
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
    export class $BlockEntityWindTurbineController extends $BlockEntityMultiBlockBase implements $IWindMechanism, $IType, $IUpdatableTileEvent {
        getTime(): number;
        getSpace(): boolean;
        change(): void;
        getMin(): boolean;
        getStyle(): $EnumTypeStyle;
        getItemStack(): $ItemStack;
        getAngle(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuWindTurbine;
        setRotationSpeed(arg0: number): void;
        setWork(arg0: boolean): void;
        getRotor(): $WindRotor;
        checkSpace(): boolean;
        getMinWind(): number;
        can_repair(): boolean;
        setCoefficient(arg0: number): void;
        need_repair(): boolean;
        getMinWindSpeed(): number;
        getLevelGenerator(): $EnumLevelGenerators;
        getRotorDiameter(): number;
        getCoefficient(): number;
        getRotorSide(): $EnumRotorSide;
        setRotorSide(arg0: $EnumRotorSide_): void;
        getAdditionalPower(): number;
        getAuto(): boolean;
        getAdditionalCoefficient(): number;
        getRotorRenderTexture(): $ResourceLocation;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        wind_side: $EnumWindSide;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot_blades: $InventoryTurbineRotorBlades;
        slot: $InventoryWindTurbineRotor;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        mind_wind: number;
        enumTypeWind: $EnumTypeWind;
        wind_speed: number;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $ISocket;
        generation: number;
        timers: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        coefficient_power: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        mind_speed: number;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get time(): number;
        get space(): boolean;
        get min(): boolean;
        get style(): $EnumTypeStyle;
        get itemStack(): $ItemStack;
        get angle(): number;
        set rotationSpeed(value: number);
        set work(value: boolean);
        get rotor(): $WindRotor;
        get minWind(): number;
        get minWindSpeed(): number;
        get levelGenerator(): $EnumLevelGenerators;
        get rotorDiameter(): number;
        get additionalPower(): number;
        get auto(): boolean;
        get additionalCoefficient(): number;
        get rotorRenderTexture(): $ResourceLocation;
    }
    export class $IController {
    }
    export interface $IController extends $IMainMultiBlock {
    }
    export class $ISocket {
    }
    export interface $ISocket extends $IMultiElement {
        getEnergy(): $Energy;
        get energy(): $Energy;
    }
}
