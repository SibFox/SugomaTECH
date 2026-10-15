import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $IMainMultiBlock, $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $InventoryFluidByList, $Inventory, $InventoryDrainTank } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Fluids, $SoilPollutionComponent, $HeatComponent } from "@package/com/denfop/componets";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockEntityMultiBlockBase, $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $ContainerMenuCokeOven } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AudioFixer, $EnumTypeAudio_, $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/cokeoven" {
    export class $IInputFluid {
    }
    export interface $IInputFluid extends $IMultiElement {
        getFluidTank(): $FluidTank;
        getFluid(): $Fluids;
        get fluidTank(): $FluidTank;
        get fluid(): $Fluids;
    }
    export class $IOutputFluid {
    }
    export interface $IOutputFluid extends $IMultiElement {
        getFluidTank(): $FluidTank;
        getFluid(): $Fluids;
        get fluidTank(): $FluidTank;
        get fluid(): $Fluids;
    }
    export class $BlockEntityCokeOvenOutputFluid extends $BlockEntityMultiBlockElement implements $IOutputFluid {
        getFluidTank(): $FluidTank;
        getFluid(): $Fluids;
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
        get fluidTank(): $FluidTank;
        get fluid(): $Fluids;
    }
    export class $BlockEntityCokeOvenInputFluid extends $BlockEntityMultiBlockElement implements $IInputFluid {
        getFluidTank(): $FluidTank;
        getFluid(): $Fluids;
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
        get fluidTank(): $FluidTank;
        get fluid(): $Fluids;
    }
    export class $IHeat {
    }
    export interface $IHeat extends $IMultiElement {
    }
    export class $BlockEntityCokeOvenInputItem extends $BlockEntityMultiBlockElement implements $IInputItem {
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
    export class $BlockEntityOtherPart extends $BlockEntityMultiBlockElement implements $IPart {
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
    export class $IPart {
    }
    export interface $IPart extends $IMultiElement {
    }
    export class $InventoryCokeOven extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityCokeOvenMain);
    }
    export class $BlockEntityCokeOvenMain extends $BlockEntityMultiBlockBase implements $IMain, $IUpdatableTileEvent, $AudioFixer {
        setType(arg0: $EnumTypeAudio_): void;
        getProgress(): number;
        getHeat(): $IHeat;
        getSound(): $SoundEvent;
        getGuiContainer(arg0: $Player): $ContainerMenuCokeOven;
        getInputFluid(): $IInputFluid;
        getOutputFluid(): $IOutputFluid;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        setInputFluid(arg0: $IInputFluid): void;
        setOutputFluid(arg0: $IOutputFluid): void;
        setHeat(arg0: $IHeat): void;
        heat: $HeatComponent;
        blastInputFluid: $IInputFluid;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        output1: $InventoryOutput;
        output2: $InventoryOutput;
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
        output: $InventoryOutput;
        bar: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        invSlotBlastFurnace: $InventoryCokeOven;
        tank1: $FluidTank;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        blastOutputFluid: $IOutputFluid;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryDrainTank;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        blastHeat: $IHeat;
        activate: boolean;
        fluidSlot: $InventoryFluidByList;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get enable(): boolean;
    }
    export class $BlockEntityHeatBlock extends $BlockEntityMultiBlockElement implements $IHeat {
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
    export class $IInputItem {
    }
    export interface $IInputItem extends $IMultiElement {
    }
    export class $IMain {
    }
    export interface $IMain extends $IMainMultiBlock {
        getProgress(): number;
        getHeat(): $IHeat;
        getInputFluid(): $IInputFluid;
        getOutputFluid(): $IOutputFluid;
        setInputFluid(arg0: $IInputFluid): void;
        setOutputFluid(arg0: $IOutputFluid): void;
        setHeat(arg0: $IHeat): void;
        get progress(): number;
    }
}
