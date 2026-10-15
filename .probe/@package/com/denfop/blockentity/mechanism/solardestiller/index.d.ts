import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $InventoryFluidByList, $InventoryTank, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map, $Set } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $EnumTypeStyle_, $SoilPollutionComponent, $EnumTypeStyle } from "@package/com/denfop/componets";
import { $IType } from "@package/com/denfop/api/widget";
import { $UpgradableProperty, $IUpgradableBlock } from "@package/com/denfop/api/upgrades";
import { $ContainerMenuSolarDestiller } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/solardestiller" {
    export class $BlockEntityAdvSolarDestiller extends $BlockEntityBaseSolarDestiller {
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
        wateroutputSlot: $InventoryOutput;
        destiwateroutputSlott: $InventoryOutput;
        destiwaterinputSlot: $InventoryTank;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        waterinputSlot: $InventoryFluidByList;
        outputTank: $FluidTank;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $FluidTank;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityImpSolarDestiller extends $BlockEntityBaseSolarDestiller {
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
        wateroutputSlot: $InventoryOutput;
        destiwateroutputSlott: $InventoryOutput;
        destiwaterinputSlot: $InventoryTank;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        waterinputSlot: $InventoryFluidByList;
        outputTank: $FluidTank;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $FluidTank;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPhotonicDestiller extends $BlockEntityBaseSolarDestiller {
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
        wateroutputSlot: $InventoryOutput;
        destiwateroutputSlott: $InventoryOutput;
        destiwaterinputSlot: $InventoryTank;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        waterinputSlot: $InventoryFluidByList;
        outputTank: $FluidTank;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $FluidTank;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntitySolarDestiller extends $BlockEntityBaseSolarDestiller {
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
        wateroutputSlot: $InventoryOutput;
        destiwateroutputSlott: $InventoryOutput;
        destiwaterinputSlot: $InventoryTank;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        waterinputSlot: $InventoryFluidByList;
        outputTank: $FluidTank;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $FluidTank;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityBaseSolarDestiller extends $BlockEntityInventory implements $IUpgradableBlock, $IType {
        getStyle(): $EnumTypeStyle;
        getTickRate(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuSolarDestiller;
        updateVisibility(): void;
        canWork(): boolean;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        gaugeLiquidScaled(arg0: number, arg1: number): number;
        getAmountWater(): number;
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
        wateroutputSlot: $InventoryOutput;
        destiwateroutputSlott: $InventoryOutput;
        destiwaterinputSlot: $InventoryTank;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        waterinputSlot: $InventoryFluidByList;
        outputTank: $FluidTank;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $FluidTank;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $EnumTypeStyle_, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
        get style(): $EnumTypeStyle;
        get tickRate(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get amountWater(): number;
    }
    export class $BlockEntityPerSolarDestiller extends $BlockEntityBaseSolarDestiller {
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
        wateroutputSlot: $InventoryOutput;
        destiwateroutputSlott: $InventoryOutput;
        destiwaterinputSlot: $InventoryTank;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        waterinputSlot: $InventoryFluidByList;
        outputTank: $FluidTank;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $FluidTank;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
