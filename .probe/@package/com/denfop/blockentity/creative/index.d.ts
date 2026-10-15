import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockEntityInventory, $BlockEntityLiquedTank, $BlockEntityElectricBlock } from "@package/com/denfop/blockentity/base";
import { $InventoryFluidByList, $InventoryCharge, $InventoryElectricBlock, $InventoryDischarge, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $BlockEntityQuantumStorage } from "@package/com/denfop/blockentity/mechanism/quantum_storage";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $EnumElectricBlock } from "@package/com/denfop/blockentity/wiring";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $BlockEntitySolariumStorage } from "@package/com/denfop/blockentity/mechanism/solarium_storage";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $WirelessComponent, $Energy, $Fluids, $ComponentBaseEnergy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ContainerMenuCreativeSteamTank } from "@package/com/denfop/containermenu";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $BlockEntityRadiationStorage } from "@package/com/denfop/blockentity/mechanism/radiation_storage";

declare module "@package/com/denfop/blockentity/creative" {
    export class $BlockEntityCreativeTank extends $BlockEntityLiquedTank {
        blockState: $BlockState;
        containerslot1: $InventoryFluidByList;
        fluidTank: $FluidTank;
        prev: number;
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
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        containerslot: $InventoryFluidByList;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCreativeRadiationStorage extends $BlockEntityRadiationStorage {
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
        radiation: $ComponentBaseEnergy;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCreativeQuantumStorage extends $BlockEntityQuantumStorage {
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
        qe: $ComponentBaseEnergy;
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
    export class $BlockEntityCreativeMFSU extends $BlockEntityElectricBlock {
        blockState: $BlockState;
        output_plus: number;
        inputslotA: $InventoryCharge;
        inputslotC: $InventoryElectricBlock;
        inputslotB: $InventoryDischarge;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        needsInvUpdate: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        chargepad: boolean;
        movementchargeitem: boolean;
        remove: boolean;
        output: number;
        addedToEnergyNet: boolean;
        rfeu: boolean;
        electricblock: $EnumElectricBlock;
        tier: number;
        load: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        maxStorage2: number;
        temp: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        wirelessComponent: $WirelessComponent;
        movementcharge: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        l: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        name: string;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCreativeSteamStorage extends $BlockEntityInventory {
        getFluidTank(): $FluidTank;
        canDrain(): boolean;
        canFill(): boolean;
        setUpgradestat(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuCreativeSteamTank;
        gaugeLiquidScaled(arg0: number): number;
        needsFluid(): boolean;
        blockState: $BlockState;
        fluidTank: $FluidTank;
        prev: number;
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
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        amount: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCreativeSolariumStorage extends $BlockEntitySolariumStorage {
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
        se: $ComponentBaseEnergy;
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
