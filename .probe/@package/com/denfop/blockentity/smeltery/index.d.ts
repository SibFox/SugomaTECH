import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IMainMultiBlock, $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $Inventory } from "@package/com/denfop/inventory";
import { $IHasRecipe, $IUpdateTick, $MachineRecipe, $InventoryOutput, $FluidHandlerRecipe, $InventoryRecipes } from "@package/com/denfop/api/recipe";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $ComponentProgress, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $ContainerMenuSmelteryCasting, $ContainerMenuSmelteryController, $ContainerMenuSmelteryFuelTank, $ContainerMenuSmelteryFurnace } from "@package/com/denfop/containermenu";
import { $BlockEntityMultiBlockBase, $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/smeltery" {
    export class $BlockEntitySmelteryFluidTank extends $BlockEntityMultiBlockElement implements $ITank {
        getTank(): $FluidTank;
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
        get tank(): $FluidTank;
    }
    export class $BlockEntitySmelteryCasing extends $BlockEntityMultiBlockElement implements $ICasing {
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
    export class $BlockEntitySmelteryCasting extends $BlockEntityMultiBlockElement implements $ICasting, $IHasRecipe {
        init(): void;
        getProgress(): $ComponentProgress;
        getOutputSlot(): $InventoryOutput;
        getGuiContainer(arg0: $Player): $ContainerMenuSmelteryCasting;
        getInputSlotB(): $Inventory;
        getFluid_handler(): $FluidHandlerRecipe;
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
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        inputSlotB: $Inventory;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        progress: $ComponentProgress;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $IFurnace {
    }
    export interface $IFurnace extends $IUpdateTick, $IMultiElement {
        isActive(): boolean;
        getOutput(): $MachineRecipe;
        getComponent(): $ComponentProgress;
        setActive(arg0: boolean): void;
        isChangeRecipe(): boolean;
        setChangeRecipe(arg0: boolean): void;
        getInvSlot(): $InventoryRecipes;
        get output(): $MachineRecipe;
        get component(): $ComponentProgress;
        get invSlot(): $InventoryRecipes;
    }
    export class $IFuelTank {
    }
    export interface $IFuelTank extends $IMultiElement {
        getSpeed(): number;
        getFuelTank(): $FluidTank;
        get speed(): number;
        get fuelTank(): $FluidTank;
    }
    export class $ICasting {
    }
    export interface $ICasting extends $IMultiElement {
        getProgress(): $ComponentProgress;
        getOutputSlot(): $InventoryOutput;
        getInputSlotB(): $Inventory;
        getFluid_handler(): $FluidHandlerRecipe;
        get progress(): $ComponentProgress;
        get outputSlot(): $InventoryOutput;
        get inputSlotB(): $Inventory;
        get fluid_handler(): $FluidHandlerRecipe;
    }
    export class $ICasing {
    }
    export interface $ICasing extends $IMultiElement {
    }
    export class $BlockEntitySmelteryController extends $BlockEntityMultiBlockBase implements $IController, $IHasRecipe, $IUpdatableTileEvent {
        init(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSmelteryController;
        getFirstTank(): $FluidTank;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        listFuelTank: $List<$IFuelTank>;
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
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        firstTank: $FluidTank;
        static mapRecipes: $Map<$List<$FluidStack>, $FluidStack>;
        casting: $ICasting;
        block: $BlockTileEntity<any>;
        listTank: $List<$ITank>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        list: $List<number>;
        static mapRecipes1: $Map<$FluidStack, $List<$FluidStack>>;
        furnaces: $List<$IFurnace>;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        activate: boolean;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $ITank {
    }
    export interface $ITank extends $IMultiElement {
        getTank(): $FluidTank;
        get tank(): $FluidTank;
    }
    export class $IController {
    }
    export interface $IController extends $IMainMultiBlock {
        getFirstTank(): $FluidTank;
        get firstTank(): $FluidTank;
    }
    export class $BlockEntitySmelteryFurnace extends $BlockEntityMultiBlockElement implements $IFurnace, $IHasRecipe {
        init(): void;
        isActive(): boolean;
        getOutput(): $MachineRecipe;
        getComponent(): $ComponentProgress;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: string, arg1: $ItemStack_, ...arg2: $FluidStack_[]): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSmelteryFurnace;
        isChangeRecipe(): boolean;
        setChangeRecipe(arg0: boolean): void;
        getInvSlot(): $InventoryRecipes;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        smeltery: $InventoryRecipes;
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
        progress: $ComponentProgress;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
        get component(): $ComponentProgress;
        get invSlot(): $InventoryRecipes;
    }
    export class $BlockEntitySmelteryFuelTank extends $BlockEntityMultiBlockElement implements $IFuelTank {
        getSpeed(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuSmelteryFuelTank;
        getFuelTank(): $FluidTank;
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
        get speed(): number;
        get fuelTank(): $FluidTank;
    }
}
