import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockEntityMultiMatter, $IMatter } from "@package/com/denfop/blockentity/base";
import { $InventoryFluid, $InventoryDischarge, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $InventoryOutput, $InventoryRecipes } from "@package/com/denfop/api/recipe";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/generator/things/matter" {
    export class $BlockEntityUltimateMatter extends $BlockEntityMultiMatter {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        static worldMatterMap: $Map<$ResourceKey<$Level>, $Map<$ChunkPos, $List<$IMatter>>>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        energycost: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        scrap: number;
        redstonePowered: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        amplifierSlot: $InventoryRecipes;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPhotonicMatter extends $BlockEntityMultiMatter {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        static worldMatterMap: $Map<$ResourceKey<$Level>, $Map<$ChunkPos, $List<$IMatter>>>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        energycost: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        scrap: number;
        redstonePowered: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        amplifierSlot: $InventoryRecipes;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAdvancedMatter extends $BlockEntityMultiMatter {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        static worldMatterMap: $Map<$ResourceKey<$Level>, $Map<$ChunkPos, $List<$IMatter>>>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        energycost: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        scrap: number;
        redstonePowered: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        amplifierSlot: $InventoryRecipes;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityImprovedMatter extends $BlockEntityMultiMatter {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        static worldMatterMap: $Map<$ResourceKey<$Level>, $Map<$ChunkPos, $List<$IMatter>>>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        energycost: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        scrap: number;
        redstonePowered: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        amplifierSlot: $InventoryRecipes;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
