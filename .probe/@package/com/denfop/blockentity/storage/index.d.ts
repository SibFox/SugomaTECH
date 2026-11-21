import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $InventoryPatternOutput, $InventoryPreCraft, $Inventory } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $TypeRedstone, $Export, $IMechanismInterface, $Controller, $StorageDeviceCell, $StorageNetwork, $TypeComponent, $TypeSlot, $IMonitor, $EnumTypeSlots, $TypeStack, $Import, $PreCraft, $IWorkbenchInterface, $InterfaceSide } from "@package/com/denfop/api/storage";
import { $ICell } from "@package/com/denfop/api/storage/cell";
import { $NumberFormat } from "@package/java/text";
import { $DataCable } from "@package/com/denfop/render/transport";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $IAcceptor, $EnergyType_, $IConductor, $InfoTile, $IEmitter, $InfoCable, $ITile, $EnergyType } from "@package/com/denfop/api/otherenergies/common";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityMultiCable } from "@package/com/denfop/blockentity/transport/tiles";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ISubEnum, $BlockTileEntity } from "@package/com/denfop/blocks";
import { $AbstractComponent, $ComponentBaseEnergy, $AirPollutionComponent, $Energy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $ContainerBus, $ContainerMonitor, $ContainerInterface, $ContainerPatternMonitor, $ContainerMenuTank, $ContainerAutoCraftMonitor, $ContainerInterfaceWorkbench, $ContainerStorageCells, $ContainerBaseProcessor, $ContainerPreCraft, $SlotInfo, $ContainerFluidMonitor } from "@package/com/denfop/containermenu";
import { $ICableItem } from "@package/com/denfop/blockentity/transport/types";
import { $AutoCraftOutput, $Processor, $PatternStack, $SameStack, $AutoCraftSystem, $PatternStack_ } from "@package/com/denfop/api/storage/autocrafting";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ConductorInfo } from "@package/com/denfop/api/energy/networking";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as processor from "@package/com/denfop/blockentity/storage/processor";

declare module "@package/com/denfop/blockentity/storage" {
    export class $BlockEntityAutoCraftMonitor extends $BlockEntityInventory implements $IMonitor, $IUpdatableTileEvent {
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getCraftOutputs(): $Map<number, $List<$AutoCraftOutput>>;
        cancelAutoCraft(arg0: number): void;
        removeCraft(arg0: number): void;
        removeNetworkCraft(arg0: number): void;
        getProcessor(): $Processor;
        getGuiContainer(arg0: $Player): $ContainerAutoCraftMonitor;
        updateTileServer(arg0: $Player, arg1: number): void;
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
        processorId: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        hasSystem: boolean;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        autoCraftSystem: $AutoCraftSystem;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get craftOutputs(): $Map<number, $List<$AutoCraftOutput>>;
        get processor(): $Processor;
    }
    export class $BlockEntityBus extends $BlockEntityInventory implements $IUpdatableTileEvent {
        getStacks(): $List<$ItemStack>;
        setConnectivity(arg0: number): void;
        getTypeSlots(): $EnumTypeSlots;
        getTypeStack(): $TypeStack;
        getFluidStacks(): $List<$FluidStack>;
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getSlotMode(): $TypeSlot;
        getIndexFromSlot(arg0: number): number;
        getListSlot(): $SlotInfo;
        getComponent(): $TypeComponent;
        getRedstoneSignal(): number;
        getDirection(): $Direction;
        isImport(): boolean;
        isFluid(): boolean;
        getGuiContainer(arg0: $Player): $ContainerBus;
        updateConnectivity(): void;
        getRedstone(): $TypeRedstone;
        getBlockEntityNeighbor(): $BlockEntity;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        listSlot: $SlotInfo;
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
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        indexesMap: $Map<number, number>;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        componentMode: $TypeComponent;
        pollutionAir: $AirPollutionComponent;
        slotMode: $TypeSlot;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        redstoneMode: $TypeRedstone;
        constructor(arg0: $MultiBlockEntity, arg1: boolean, arg2: boolean, arg3: $BlockPos_, arg4: $BlockState_);
        get stacks(): $List<$ItemStack>;
        get typeSlots(): $EnumTypeSlots;
        get typeStack(): $TypeStack;
        get fluidStacks(): $List<$FluidStack>;
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get component(): $TypeComponent;
        get redstoneSignal(): number;
        get direction(): $Direction;
        get import(): boolean;
        get fluid(): boolean;
        get redstone(): $TypeRedstone;
        get blockEntityNeighbor(): $BlockEntity;
    }
    export class $BlockEntityImportBus extends $BlockEntityBus implements $Import {
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        listSlot: $SlotInfo;
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
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        indexesMap: $Map<number, number>;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        componentMode: $TypeComponent;
        pollutionAir: $AirPollutionComponent;
        slotMode: $TypeSlot;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        redstoneMode: $TypeRedstone;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityStorageSystemCable extends $BlockEntityMultiCable implements $IConductor {
        getTile(): $BlockEntity;
        getInfo(arg0: $EnergyType_): $ConductorInfo;
        setId(arg0: number): void;
        canInteractWith(): boolean;
        getTiles(arg0: $EnergyType_): $Map<$Direction, $ITile>;
        getTiles(): $Map<$Direction, $ITile>;
        getConductorBreakdownEnergy(arg0: $EnergyType_): number;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(arg0: $EnergyType_): $List<$InfoTile<$ITile>>;
        getIdNetwork(): number;
        emitsTo(arg0: $IAcceptor, arg1: $Direction_): boolean;
        RemoveTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        AddTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        getEnergies(): $List<$EnergyType>;
        getEnergyType(): $EnergyType;
        hasEnergies(): boolean;
        acceptsFrom(arg0: $IEmitter, arg1: $Direction_): boolean;
        getCable(arg0: $EnergyType_): $InfoCable;
        setCable(arg0: $EnergyType_, arg1: $InfoCable): void;
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
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        static list: $List<$BlockEntityType<$BlockEntityMultiCable>>;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get tile(): $BlockEntity;
        set id(value: number);
        get idNetwork(): number;
        get energies(): $List<$EnergyType>;
        get energyType(): $EnergyType;
    }
    export class $BlockEntityInterfaceWorkbench extends $BlockEntityInventory implements $IWorkbenchInterface {
        getStacks(): $List<$ItemStack>;
        getTypeSlots(): $EnumTypeSlots;
        getFluidStacks(): $List<$FluidStack>;
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        reload(): void;
        getDirection(): $Direction;
        getSlots(): $Inventory;
        getPatterns(): $List<$PatternStack>;
        getGuiContainer(arg0: $Player): $ContainerInterfaceWorkbench;
        getBlockEntityNeighbor(): $BlockEntity;
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
        get stacks(): $List<$ItemStack>;
        get typeSlots(): $EnumTypeSlots;
        get fluidStacks(): $List<$FluidStack>;
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get direction(): $Direction;
        get slots(): $Inventory;
        get patterns(): $List<$PatternStack>;
        get blockEntityNeighbor(): $BlockEntity;
    }
    export class $BlockEntityPreCraft extends $BlockEntityInventory implements $PreCraft, $IUpdatableTileEvent {
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getPreCrafts(): $List<$SameStack>;
        getGuiContainer(arg0: $Player): $ContainerPreCraft;
        updateCraft(): void;
        updateTileServer(arg0: $Player, arg1: number): void;
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
        network: $StorageNetwork;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        inputItems: $InventoryPreCraft;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get preCrafts(): $List<$SameStack>;
    }
    export class $StorageSystemCableType extends $Enum<$StorageSystemCableType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $StorageSystemCableType;
        static values(): $StorageSystemCableType[];
        static valueOf(arg0: string): $StorageSystemCableType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        maxInsulation: number;
        static storagecable: $StorageSystemCableType;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StorageSystemCableType}.
     */
    export type $StorageSystemCableType_ = "storagecable_storagecable";
    export class $BlockEntityFluidExportBus extends $BlockEntityBus implements $Export {
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        listSlot: $SlotInfo;
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
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        indexesMap: $Map<number, number>;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        componentMode: $TypeComponent;
        pollutionAir: $AirPollutionComponent;
        slotMode: $TypeSlot;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        redstoneMode: $TypeRedstone;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityFluidMonitor extends $BlockEntityInventory implements $IMonitor {
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getGuiContainer(arg0: $Player): $ContainerFluidMonitor;
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
        fieldString: string;
        isLoaded: boolean;
        remove: boolean;
        network: $StorageNetwork;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        fieldMode: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        checkField: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        decreasing: number;
        viewMode: number;
        prevSizeMode: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        sizeMode: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
    }
    export class $BlockEntityEntityStorageCells extends $BlockEntityInventory implements $StorageDeviceCell {
        getFluidCells(): $List<$ICell>;
        getItemCells(): $List<$ICell>;
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getSlots(): $Inventory;
        getGuiContainer(arg0: $Player): $ContainerStorageCells;
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
        value: number;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        maxValue: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get fluidCells(): $List<$ICell>;
        get itemCells(): $List<$ICell>;
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get slots(): $Inventory;
    }
    export class $BlockEntityInterface extends $BlockEntityInventory implements $IMechanismInterface, $IUpdatableTileEvent {
        getStacks(): $List<$ItemStack>;
        getTypeSlots(): $EnumTypeSlots;
        getFluidStacks(): $List<$FluidStack>;
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        reload(): void;
        getSides(arg0: $PatternStack_): $InterfaceSide;
        getSides(arg0: number): $InterfaceSide;
        getDirection(): $Direction;
        getBlockEntity(arg0: $Direction_): $BlockEntity;
        getSlots(): $Inventory;
        getPatterns(): $List<$PatternStack>;
        getGuiContainer(arg0: $Player): $ContainerInterface;
        getBlockEntityNeighbor(): $BlockEntity;
        updateTileServer(arg0: $Player, arg1: number): void;
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
        get stacks(): $List<$ItemStack>;
        get typeSlots(): $EnumTypeSlots;
        get fluidStacks(): $List<$FluidStack>;
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get direction(): $Direction;
        get slots(): $Inventory;
        get patterns(): $List<$PatternStack>;
        get blockEntityNeighbor(): $BlockEntity;
    }
    export class $BlockEntityBaseProcessor extends $BlockEntityInventory implements $Processor, $IUpdatableTileEvent {
        getId(): number;
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        saveItemsForCraft(arg0: $CompoundTag_): $CompoundTag;
        canAddAutoCraft(): boolean;
        getCraftOutputs(): $List<$AutoCraftOutput>;
        getAutoCrafts(): $Collection<$AutoCraftSystem>;
        addAutoCraft(arg0: $AutoCraftSystem): void;
        cancelAutoCraft(arg0: number): void;
        loadItemsForCraft(arg0: $CompoundTag_): void;
        getAutoCraft(arg0: number): $AutoCraftSystem;
        removeCraft(arg0: number): void;
        getItemsForCraft(arg0: number): $Map<string, $Map<$SameStack, number>>;
        removeNetworkCraft(arg0: number): void;
        setId(arg0: number): void;
        getMaxSize(): number;
        getIndexes(): $Set<number>;
        getGuiContainer(arg0: $Player): $ContainerBaseProcessor;
        getAllItemsForCraft(): $Map<number, $Map<string, $Map<$SameStack, number>>>;
        getAutoCraftSystems(): $Map<number, $AutoCraftSystem>;
        updateTileServer(arg0: $Player, arg1: number): void;
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
        hasSystem: boolean;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        autoCraftSystem: $AutoCraftSystem;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $MultiBlockEntity, arg1: number, arg2: $BlockPos_, arg3: $BlockState_);
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get craftOutputs(): $List<$AutoCraftOutput>;
        get autoCrafts(): $Collection<$AutoCraftSystem>;
        get maxSize(): number;
        get indexes(): $Set<number>;
        get allItemsForCraft(): $Map<number, $Map<string, $Map<$SameStack, number>>>;
        get autoCraftSystems(): $Map<number, $AutoCraftSystem>;
    }
    export class $BlockEntityFluidImportBus extends $BlockEntityBus implements $Import {
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        listSlot: $SlotInfo;
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
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        indexesMap: $Map<number, number>;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        componentMode: $TypeComponent;
        pollutionAir: $AirPollutionComponent;
        slotMode: $TypeSlot;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        redstoneMode: $TypeRedstone;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityExportBus extends $BlockEntityBus implements $Export {
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        listSlot: $SlotInfo;
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
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        indexesMap: $Map<number, number>;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        componentMode: $TypeComponent;
        pollutionAir: $AirPollutionComponent;
        slotMode: $TypeSlot;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        redstoneMode: $TypeRedstone;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityMonitor extends $BlockEntityInventory implements $IMonitor {
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getGuiContainer(arg0: $Player): $ContainerMonitor;
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
        fieldString: string;
        isLoaded: boolean;
        remove: boolean;
        network: $StorageNetwork;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        fieldMode: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        checkField: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        decreasing: number;
        viewMode: number;
        prevSizeMode: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        sizeMode: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
    }
    export class $BlockEntityPatternMonitor extends $BlockEntityInventory implements $IMonitor, $IUpdatableTileEvent {
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getGuiContainer(arg0: $Player): $ContainerPatternMonitor;
        updateCraft(): void;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        value1: number;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        fieldString: string;
        isLoaded: boolean;
        modeCraft: number;
        remove: boolean;
        network: $StorageNetwork;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        outputItems: $InventoryPatternOutput;
        block: $BlockTileEntity<any>;
        fieldMode: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        value: number;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        inputItems: $InventoryPatternOutput;
        checkField: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        decreasing: number;
        viewMode: number;
        prevSizeMode: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        patternItem: $Inventory;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        sizeMode: number;
        patternItemOutput: $InventoryOutput;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
    }
    export class $BlockEntityController extends $BlockEntityInventory implements $Controller {
        getPosController(): $BlockPos;
        setStackForCraft(arg0: $Map_<string, $Map_<$SameStack, number>>): void;
        getStorageNetwork(): $StorageNetwork;
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        setStack(arg0: boolean, arg1: boolean, arg2: $List_<$SameStack>): void;
        getPower(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuTank;
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
        energy: $ComponentBaseEnergy;
        energyDefault: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        networkSystem: $StorageNetwork;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get posController(): $BlockPos;
        set stackForCraft(value: $Map_<string, $Map_<$SameStack, number>>);
        get requiredPower(): number;
        get power(): number;
    }
}
