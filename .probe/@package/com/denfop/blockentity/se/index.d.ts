import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntitySolarGeneratorEnergy } from "@package/com/denfop/blockentity/base";
import { $InventoryGenSunarrium } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $ComponentBaseEnergy, $AbstractComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/se" {
    export class $BlockEntitySolarGenerator extends $BlockEntitySolarGeneratorEnergy {
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        maxSunEnergy: number;
        lst: $List<number>;
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
        generation: number;
        coef_day: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        coef_night: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        itemstack: $ItemStack;
        input: $InventoryGenSunarrium;
        worldPosition: $BlockPos;
        update_night: number;
        pollutionAir: $AirPollutionComponent;
        sunenergy: $ComponentBaseEnergy;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        cof: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityImpSolarGenerator extends $BlockEntitySolarGeneratorEnergy {
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        maxSunEnergy: number;
        lst: $List<number>;
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
        generation: number;
        coef_day: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        coef_night: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        itemstack: $ItemStack;
        input: $InventoryGenSunarrium;
        worldPosition: $BlockPos;
        update_night: number;
        pollutionAir: $AirPollutionComponent;
        sunenergy: $ComponentBaseEnergy;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        cof: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAdvSolarGenerator extends $BlockEntitySolarGeneratorEnergy {
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        maxSunEnergy: number;
        lst: $List<number>;
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
        generation: number;
        coef_day: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        coef_night: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        itemstack: $ItemStack;
        input: $InventoryGenSunarrium;
        worldPosition: $BlockPos;
        update_night: number;
        pollutionAir: $AirPollutionComponent;
        sunenergy: $ComponentBaseEnergy;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static cof: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
