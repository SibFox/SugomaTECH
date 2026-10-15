import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $InventoryFluidByList } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IBlastInputFluid, $IBlastMain, $InventoryBlastFurnace, $IBlastHeat, $IBlastOutputItem, $IBlastInputItem, $IOtherBlastPart } from "@package/com/denfop/blockentity/mechanism/blastfurnace/api";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Fluids, $SoilPollutionComponent, $HeatComponent } from "@package/com/denfop/componets";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ContainerMenuBlastFurnace } from "@package/com/denfop/containermenu";
import { $BlockEntityMultiBlockBase, $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AudioFixer, $EnumTypeAudio_, $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/blastfurnace/block" {
    export class $BlockEntityBlastOutput extends $BlockEntityMultiBlockElement implements $IBlastOutputItem {
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
    export class $BlockEntityBlastFurnaceMain extends $BlockEntityMultiBlockBase implements $IBlastMain, $IUpdatableTileEvent, $AudioFixer {
        setType(arg0: $EnumTypeAudio_): void;
        getProgress(): number;
        getHeat(): $IBlastHeat;
        getSound(): $SoundEvent;
        getGuiContainer(arg0: $Player): $ContainerMenuBlastFurnace;
        getInputFluid(): $IBlastInputFluid;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        setInputFluid(arg0: $IBlastInputFluid): void;
        setHeat(arg0: $IBlastHeat): void;
        heat: $HeatComponent;
        blastInputFluid: $IBlastInputFluid;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        output1: $InventoryOutput;
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
        invSlotBlastFurnace: $InventoryBlastFurnace;
        tank1: $FluidTank;
        block: $BlockTileEntity<any>;
        tank: $FluidTank;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        outputStack: $ItemStack;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        blastHeat: $IBlastHeat;
        activate: boolean;
        fluidSlot: $InventoryFluidByList;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get enable(): boolean;
    }
    export class $BlockEntityFluidInput extends $BlockEntityMultiBlockElement implements $IBlastInputFluid {
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
    export class $BlockEntityOtherPart extends $BlockEntityMultiBlockElement implements $IOtherBlastPart {
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
    export class $BlockEntityHeatBlock extends $BlockEntityMultiBlockElement implements $IBlastHeat {
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
    export class $BlockEntityBlastInputItem extends $BlockEntityMultiBlockElement implements $IBlastInputItem {
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
}
