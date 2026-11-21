import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $InventoryFluid, $InventoryDischarge, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $InventoryOutput, $RecipeInfo } from "@package/com/denfop/api/recipe";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $BlockEntityBaseReplicator, $BlockEntityBaseReplicator$Mode } from "@package/com/denfop/blockentity/mechanism";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/replicator" {
    export class $BlockEntityImpReplicator extends $BlockEntityBaseReplicator {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $RecipeInfo;
        uuProcessed: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        cellSlot: $InventoryOutput;
        remove: boolean;
        mode: $BlockEntityBaseReplicator$Mode;
        maxIndex: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAdvReplicator extends $BlockEntityBaseReplicator {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $RecipeInfo;
        uuProcessed: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        cellSlot: $InventoryOutput;
        remove: boolean;
        mode: $BlockEntityBaseReplicator$Mode;
        maxIndex: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPerReplicator extends $BlockEntityBaseReplicator {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $RecipeInfo;
        uuProcessed: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        cellSlot: $InventoryOutput;
        remove: boolean;
        mode: $BlockEntityBaseReplicator$Mode;
        maxIndex: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityReplicator extends $BlockEntityBaseReplicator {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $RecipeInfo;
        uuProcessed: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        cellSlot: $InventoryOutput;
        remove: boolean;
        mode: $BlockEntityBaseReplicator$Mode;
        maxIndex: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
