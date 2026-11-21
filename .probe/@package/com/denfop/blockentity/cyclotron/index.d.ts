import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IMainMultiBlock, $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $IHasRecipe, $IUpdateTick, $MachineRecipe, $InventoryOutput, $InventoryRecipes } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $ComponentBaseEnergy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $BlockEntityMultiBlockBase, $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $ContainerMenuCyclotronCoolant, $ContainerMenuCyclotronQuantum, $ContainerMenuCyclotronController, $ContainerMenuCyclotronCryogen, $ContainerMenuCyclotronElectrostaticDeflector, $ContainerMenuCyclotronChamber, $ContainerMenuPositrons } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/cyclotron" {
    export class $ICoolant {
    }
    export interface $ICoolant extends $IMultiElement {
        getCoolantTank(): $FluidTank;
        get coolantTank(): $FluidTank;
    }
    export class $IQuantum {
    }
    export interface $IQuantum extends $IMultiElement {
        getQuantum(): $ComponentBaseEnergy;
        get quantum(): $ComponentBaseEnergy;
    }
    export class $BlockEntityCyclotronCasing extends $BlockEntityMultiBlockElement implements $ICasing {
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
    export class $BlockEntityCyclotronController extends $BlockEntityMultiBlockBase implements $IController, $IHasRecipe {
        init(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuCyclotronController;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        cryogen: $ICryogen;
        positrons: $IPositrons;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        quantum: $IQuantum;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        electrostaticDeflector: $IElectrostaticDeflector;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        bombardmentChamber: $IBombardmentChamber;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        activate: boolean;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        coolant: $ICoolant;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCyclotronChamber extends $BlockEntityMultiBlockElement implements $IBombardmentChamber, $IUpdateTick {
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        getInputSlot(): $InventoryRecipes;
        onUpdate(): void;
        getChance(): number;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuCyclotronChamber;
        getPositrons(): number;
        getCryogen(): number;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
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
        get output(): $MachineRecipe;
        get inputSlot(): $InventoryRecipes;
        get chance(): number;
        get positrons(): number;
        get cryogen(): number;
    }
    export class $BlockEntityCyclotronQuantum extends $BlockEntityMultiBlockElement implements $IQuantum {
        getGuiContainer(arg0: $Player): $ContainerMenuCyclotronQuantum;
        getQuantum(): $ComponentBaseEnergy;
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
        get quantum(): $ComponentBaseEnergy;
    }
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
    export class $IPositrons {
    }
    export interface $IPositrons extends $IMultiElement {
        getPositrons(): $ComponentBaseEnergy;
        get positrons(): $ComponentBaseEnergy;
    }
    export class $IElectrostaticDeflector {
    }
    export interface $IElectrostaticDeflector extends $IMultiElement {
        getOutputSlot(): $InventoryOutput;
        get outputSlot(): $InventoryOutput;
    }
    export class $IParticleAccelerator {
    }
    export interface $IParticleAccelerator extends $IMultiElement {
    }
    export class $BlockEntityCyclotronCoolant extends $BlockEntityMultiBlockElement implements $ICoolant {
        getGuiContainer(arg0: $Player): $ContainerMenuCyclotronCoolant;
        getCoolantTank(): $FluidTank;
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
        get coolantTank(): $FluidTank;
    }
    export class $IController {
    }
    export interface $IController extends $IMainMultiBlock {
    }
    export class $BlockEntityCyclotronParticleAccelerator extends $BlockEntityMultiBlockElement implements $IParticleAccelerator {
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
    export class $BlockEntityCyclotronPositrons extends $BlockEntityMultiBlockElement implements $IPositrons {
        getGuiContainer(arg0: $Player): $ContainerMenuPositrons;
        getPositrons(): $ComponentBaseEnergy;
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
        get positrons(): $ComponentBaseEnergy;
    }
    export class $BlockEntityCyclotronElectrostaticDeflector extends $BlockEntityMultiBlockElement implements $IElectrostaticDeflector {
        getOutputSlot(): $InventoryOutput;
        getGuiContainer(arg0: $Player): $ContainerMenuCyclotronElectrostaticDeflector;
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
        get outputSlot(): $InventoryOutput;
    }
    export class $BlockEntityCyclotronCryogen extends $BlockEntityMultiBlockElement implements $ICryogen {
        getGuiContainer(arg0: $Player): $ContainerMenuCyclotronCryogen;
        getCryogenTank(): $FluidTank;
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
        get cryogenTank(): $FluidTank;
    }
    export class $IBombardmentChamber {
    }
    export interface $IBombardmentChamber extends $IMultiElement, $IUpdateTick {
        getOutput(): $MachineRecipe;
        getInputSlot(): $InventoryRecipes;
        getChance(): number;
        getPositrons(): number;
        getCryogen(): number;
        get output(): $MachineRecipe;
        get inputSlot(): $InventoryRecipes;
        get chance(): number;
        get positrons(): number;
        get cryogen(): number;
    }
    export class $ICryogen {
    }
    export interface $ICryogen extends $IMultiElement {
        getCryogenTank(): $FluidTank;
        get cryogenTank(): $FluidTank;
    }
}
