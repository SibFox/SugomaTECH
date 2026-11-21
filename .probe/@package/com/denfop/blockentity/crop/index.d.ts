import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityApiary } from "@package/com/denfop/blockentity/bee";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Inventory } from "@package/com/denfop/inventory";
import { $BlockEntityInventory, $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map, $List_ } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Fluids$InternalFluidTank, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $ContainerMenuMultiCrop } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Genome, $GeneticTraits_ } from "@package/com/denfop/api/crop/genetics";
import { $DataBlock } from "@package/com/denfop/render/oilquarry";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $ICrop, $EnumSoil } from "@package/com/denfop/api/crop";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/crop" {
    export class $TileEntityCrop extends $BlockEntityBase implements $ICropTile {
        contains(arg0: $BlockPos_): boolean;
        event(): void;
        spawnBonemealParticles(arg0: $Level_, arg1: $BlockPos_): void;
        getBiome(): $Holder<$Biome>;
        getDownBlock(): $Block;
        getChunkPositions(): $List<$ChunkPos>;
        getAxisAlignedBB(): $AABB;
        addPestUse(): void;
        getPestUse(): number;
        getChunkPosListMap(): $Map<$ChunkPos, $List<$BlockEntityApiary>>;
        getCrop(): $ICrop;
        getTickPest(): number;
        setTickPest(): void;
        getDownState(): $BlockState;
        getCropItem(): $ItemStack;
        isHasDouble(): boolean;
        plantNewCrop(arg0: $ItemStack_): void;
        resetCrop(): void;
        addGenome(arg0: $List_<$GeneticTraits_>, arg1: $Genome, arg2: number, arg3: number): void;
        getGenome(): $Genome;
        fertilizeCrop(arg0: $ItemStack_): void;
        setBeeId(arg0: number): void;
        getBeeId(): number;
        harvest(arg0: boolean): $List<$ItemStack>;
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
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        hasDouble: boolean;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        downBlock: $Block;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        static hasWeed: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        upDataBlock: $DataBlock;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get biome(): $Holder<$Biome>;
        get chunkPositions(): $List<$ChunkPos>;
        get axisAlignedBB(): $AABB;
        get pestUse(): number;
        get chunkPosListMap(): $Map<$ChunkPos, $List<$BlockEntityApiary>>;
        get crop(): $ICrop;
        get downState(): $BlockState;
        get cropItem(): $ItemStack;
        get genome(): $Genome;
    }
    export class $BlockEntityDualMultiCrop extends $BlockEntityMultiCrop {
        blockState: $BlockState;
        fertilizerSlot: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        upBlockSlot: $Inventory;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        fluidPestTank: $Fluids$InternalFluidTank;
        pestUse: number[];
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        tickSoil: number[];
        isLoaded: boolean;
        remove: boolean;
        enumSoils: $EnumSoil[];
        maxTickSoil: number[];
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        place: boolean[];
        biomeCoef: number[];
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        tickPest: number[];
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        downBlockSlot: $Inventory;
        genome: $Genome[];
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidWaterTank: $Fluids$InternalFluidTank;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        crop: $ICrop[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityMultiCrop extends $BlockEntityInventory {
        canPlace(arg0: $ICrop, arg1: number): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuMultiCrop;
        getTickPest(arg0: number): number;
        setTickPest(arg0: number): void;
        blockState: $BlockState;
        fertilizerSlot: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        upBlockSlot: $Inventory;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        fluidPestTank: $Fluids$InternalFluidTank;
        pestUse: number[];
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        tickSoil: number[];
        isLoaded: boolean;
        remove: boolean;
        enumSoils: $EnumSoil[];
        maxTickSoil: number[];
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        place: boolean[];
        biomeCoef: number[];
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        tickPest: number[];
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        downBlockSlot: $Inventory;
        genome: $Genome[];
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidWaterTank: $Fluids$InternalFluidTank;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        crop: $ICrop[];
        constructor(arg0: number, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $BlockEntityQuadMultiCrop extends $BlockEntityMultiCrop {
        blockState: $BlockState;
        fertilizerSlot: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        upBlockSlot: $Inventory;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        fluidPestTank: $Fluids$InternalFluidTank;
        pestUse: number[];
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        tickSoil: number[];
        isLoaded: boolean;
        remove: boolean;
        enumSoils: $EnumSoil[];
        maxTickSoil: number[];
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        place: boolean[];
        biomeCoef: number[];
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        tickPest: number[];
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        downBlockSlot: $Inventory;
        genome: $Genome[];
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidWaterTank: $Fluids$InternalFluidTank;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        crop: $ICrop[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $ICropTile {
    }
    export interface $ICropTile {
        getCrop(): $ICrop;
        get crop(): $ICrop;
    }
    /**
     * Values that may be interpreted as {@link $ICropTile}.
     */
    export type $ICropTile_ = (() => $ICrop);
    export class $BlockEntitySingleMultiCrop extends $BlockEntityMultiCrop {
        blockState: $BlockState;
        fertilizerSlot: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        upBlockSlot: $Inventory;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        fluidPestTank: $Fluids$InternalFluidTank;
        pestUse: number[];
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        tickSoil: number[];
        isLoaded: boolean;
        remove: boolean;
        enumSoils: $EnumSoil[];
        maxTickSoil: number[];
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        place: boolean[];
        biomeCoef: number[];
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        tickPest: number[];
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        downBlockSlot: $Inventory;
        genome: $Genome[];
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidWaterTank: $Fluids$InternalFluidTank;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        crop: $ICrop[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityTripleMultiCrop extends $BlockEntityMultiCrop {
        blockState: $BlockState;
        fertilizerSlot: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        upBlockSlot: $Inventory;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        fluidPestTank: $Fluids$InternalFluidTank;
        pestUse: number[];
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        tickSoil: number[];
        isLoaded: boolean;
        remove: boolean;
        enumSoils: $EnumSoil[];
        maxTickSoil: number[];
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        place: boolean[];
        biomeCoef: number[];
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        tickPest: number[];
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        downBlockSlot: $Inventory;
        genome: $Genome[];
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        fluidWaterTank: $Fluids$InternalFluidTank;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        crop: $ICrop[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
