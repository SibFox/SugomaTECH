import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $InventorySubstitute, $CableItem, $Inventory } from "@package/com/denfop/inventory";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map, $Set, $List_ } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $ContainerMenuSubstitute, $ContainerMenuController, $ContainerMenuRemover } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnergyTile, $EnergyConductor, $EnergyController } from "@package/com/denfop/api/energy/interfaces";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Path } from "@package/com/denfop/api/energy/networking";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/energy" {
    export class $BlockEntityEnergySubstitute extends $BlockEntityInventory implements $IUpdatableTileEvent, $EnergyController {
        unload(): void;
        work(): void;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $EnergyTile>;
        getGuiContainer(arg0: $Player): $ContainerMenuSubstitute;
        setMaxValue(arg0: number, arg1: number, arg2: $CableItem): void;
        discover(): void;
        getWork(): boolean;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        getCableItemList(): $List<$CableItem>;
        setCableItemList(arg0: $List_<$CableItem>): void;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        updateTileServer(arg0: $Player, arg1: number): void;
        isRemovedTile(): boolean;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $InventorySubstitute;
        conductorList: $Set<$EnergyConductor>;
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
        size: number;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        max_value: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set id(value: number);
        get tiles(): $Map<$Direction, $EnergyTile>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get removedTile(): boolean;
    }
    export class $BlockEntityEnergyRemover extends $BlockEntityInventory implements $IUpdatableTileEvent, $EnergyController {
        unload(): void;
        work(): void;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $EnergyTile>;
        getGuiContainer(arg0: $Player): $ContainerMenuRemover;
        discover(): void;
        getWork(): boolean;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        updateTileServer(arg0: $Player, arg1: number): void;
        isRemovedTile(): boolean;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        conductorList: $Set<$EnergyConductor>;
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
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set id(value: number);
        get tiles(): $Map<$Direction, $EnergyTile>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get removedTile(): boolean;
    }
    export class $BlockEntityEnergyController extends $BlockEntityInventory implements $IUpdatableTileEvent, $EnergyController {
        unload(): void;
        work(): void;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $EnergyTile>;
        getGuiContainer(arg0: $Player): $ContainerMenuController;
        getWork(): boolean;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        updateTileServer(arg0: $Player, arg1: number): void;
        isRemovedTile(): boolean;
        energyPathList: $List<$Path>;
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
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        size: number;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set id(value: number);
        get tiles(): $Map<$Direction, $EnergyTile>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get removedTile(): boolean;
    }
}
