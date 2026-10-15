import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Inventory } from "@package/com/denfop/inventory";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $Energy } from "@package/com/denfop/componets";
import { $Tuple } from "@package/net/minecraft/util";
import { $ICell } from "@package/com/denfop/api/storage/cell";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Processor, $PatternStack, $SameStack, $AutoCraftSystem, $PatternStack_, $AutoCraftSystemVisual } from "@package/com/denfop/api/storage/autocrafting";
import { $PatchedDataComponentMap, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Path } from "@package/com/denfop/api/otherenergies/common";
import { $Enum } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as autocrafting from "@package/com/denfop/api/storage/autocrafting";
export * as cell from "@package/com/denfop/api/storage/cell";

declare module "@package/com/denfop/api/storage" {
    export class $IMonitor {
    }
    export interface $IMonitor extends $ElectricStorage {
    }
    export class $StorageNetwork {
        getStacks(): $List<$SameStack>;
        getConsumeEnergy(): number;
        setFluidsCreate(arg0: $List_<$SameStack>): void;
        setItemsCreate(arg0: $List_<$SameStack>): void;
        addAutoCraft(arg0: $AutoCraftSystem): void;
        removeAutoCraft(arg0: $AutoCraftSystem): void;
        removeElement(arg0: $ElectricStorage): void;
        addElement(arg0: $ElectricStorage): void;
        getProcessors(): $List<$Processor>;
        getAll(): $List<$ICell>;
        tick(arg0: $Level_, arg1: $Energy, arg2: $BlockPos_): void;
        canRemove(arg0: $ItemStack_): number;
        canRemove(arg0: $FluidStack_): number;
        removeStack(arg0: $ItemStack_): void;
        removeStack(arg0: $FluidStack_): number;
        getController(): $Controller;
        addInterface(arg0: $Interface): void;
        setItems(arg0: $List_<$SameStack>): void;
        getFluids(): $List<$SameStack>;
        onUnload(arg0: $Level_): void;
        setFluids(arg0: $List_<$SameStack>): void;
        canAdd(arg0: $ItemStack_): number;
        canAdd(arg0: $FluidStack_): number;
        getItemStorage(): number;
        reBuild(arg0: $Level_, arg1: $List_<$BlockPos_>): void;
        reBuild(arg0: $List_<$Path>, arg1: $Level_): void;
        hasFreeEnergy(): boolean;
        getStacksCanCreate(): $List<$SameStack>;
        findPatternFor(arg0: $ItemStack_): $PatternStack;
        findPatternFor(arg0: $FluidStack_): $PatternStack;
        getAllPatterns(): $List<$PatternStack>;
        canRemoveMonitor(arg0: $FluidStack_): number;
        canRemoveMonitor(arg0: $ItemStack_): number;
        getFluidsCanCreate(): $List<$SameStack>;
        removeStackWithIgnoringCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        addStackCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): void;
        addStack(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): void;
        addStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): void;
        addStack(arg0: $ItemStack_): void;
        addStack(arg0: $FluidStack_): void;
        removeStackWithIgnoring(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        removeStackCrafting(arg0: $ItemStack_): void;
        createAutoCraftVisual(arg0: $SameStack): $AutoCraftSystemVisual;
        getDifferenceStorage(): number;
        getDifferenceStorage(arg0: boolean): number;
        addStackCraftingOutput(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): void;
        removeFluidStackCrafting(arg0: $FluidStack_): void;
        getAllStoredItemStacks(): $Tuple<$List<$SameStack>, $List<$SameStack>>;
        hasAvailableProcessors(): boolean;
        findStackForWorkBench(arg0: $SameStack): number;
        getAllStoredFluidStacks(): $Tuple<$List<$SameStack>, $List<$SameStack>>;
        removeImport(arg0: $Import): void;
        getPreCraftStacks(): $List<$SameStack>;
        createAutoCraft(arg0: $AutoCraftSystemVisual): $AutoCraftSystem;
        addPreCraft(arg0: $PreCraft): void;
        addStackImport(arg0: $FluidStack_, arg1: $Fluid_, arg2: $DataComponentMap_, arg3: number): void;
        addStackImport(arg0: $ItemStack_, arg1: $Item_, arg2: $DataComponentMap_, arg3: number): void;
        insertIntoHandler(arg0: $Export, arg1: $IItemHandler, arg2: $ItemStack_, arg3: boolean, arg4: number): $ItemStack;
        canRemoveExport(arg0: $ItemStack_): number;
        canRemoveExport(arg0: $FluidStack_): number;
        removeExport(arg0: $Export): void;
        getAllItemCells(): $List<$ICell>;
        checkFluidFilter(arg0: $Import, arg1: $FluidStack_, arg2: $List_<$FluidStack_>, arg3: boolean, arg4: number): boolean;
        getProcessorsIds(): $Map<number, $Processor>;
        removePreCraft(arg0: $PreCraft): void;
        checkItemFilter(arg0: $Import, arg1: $ItemStack_, arg2: $List_<$ItemStack_>, arg3: boolean, arg4: number): boolean;
        removeInterface(arg0: $Interface): void;
        getAllFluidCells(): $List<$ICell>;
        removeFluidStack(arg0: $FluidStack_): void;
        getItemMaxStorage(): number;
        addImport(arg0: $Import): void;
        workImport(arg0: $Import): void;
        workExport(arg0: $Export): void;
        addExport(arg0: $Export): void;
        findStack(arg0: $SameStack): number;
        canUpdate: boolean;
        patternStackInterfaceMap: $Map<$PatternStack, $Interface>;
        stacksMapCount: $Map<string, $Map<$SameStack, number>>;
        storageDeviceFluidCells: $List<$ICell>;
        reworkCell: boolean;
        storageDeviceItemsCells: $List<$ICell>;
        reBuildPreCraft: boolean;
        storageDeviceCells: $List<$StorageDeviceCell>;
        reBuildPatterns: boolean;
        constructor(arg0: $Controller);
        get stacks(): $List<$SameStack>;
        get consumeEnergy(): number;
        set fluidsCreate(value: $List_<$SameStack>);
        set itemsCreate(value: $List_<$SameStack>);
        get processors(): $List<$Processor>;
        get all(): $List<$ICell>;
        get controller(): $Controller;
        set items(value: $List_<$SameStack>);
        get itemStorage(): number;
        get stacksCanCreate(): $List<$SameStack>;
        get allPatterns(): $List<$PatternStack>;
        get fluidsCanCreate(): $List<$SameStack>;
        get allStoredItemStacks(): $Tuple<$List<$SameStack>, $List<$SameStack>>;
        get allStoredFluidStacks(): $Tuple<$List<$SameStack>, $List<$SameStack>>;
        get preCraftStacks(): $List<$SameStack>;
        get allItemCells(): $List<$ICell>;
        get processorsIds(): $Map<number, $Processor>;
        get allFluidCells(): $List<$ICell>;
        get itemMaxStorage(): number;
    }
    export class $TypeSlot extends $Enum<$TypeSlot> {
        static values(): $TypeSlot[];
        static valueOf(arg0: string): $TypeSlot;
        static RANDOM: $TypeSlot;
        static QUEUE: $TypeSlot;
    }
    /**
     * Values that may be interpreted as {@link $TypeSlot}.
     */
    export type $TypeSlot_ = "queue" | "random";
    export class $StorageDeviceCell {
    }
    export interface $StorageDeviceCell extends $ElectricStorage {
        getFluidCells(): $List<$ICell>;
        getItemCells(): $List<$ICell>;
        getSlots(): $Inventory;
        get fluidCells(): $List<$ICell>;
        get itemCells(): $List<$ICell>;
        get slots(): $Inventory;
    }
    export class $IMechanismInterface {
    }
    export interface $IMechanismInterface extends $Interface {
        getSides(arg0: $PatternStack_): $InterfaceSide;
        getBlockEntity(arg0: $Direction_): $BlockEntity;
    }
    export class $ElectricStorage {
    }
    export interface $ElectricStorage {
        setStorageNetwork(arg0: $StorageNetwork): void;
        getRequiredPower(): number;
        getPos(): $BlockPos;
        getWorld(): $Level;
        set storageNetwork(value: $StorageNetwork);
        get requiredPower(): number;
        get pos(): $BlockPos;
        get world(): $Level;
    }
    export class $EnumTypeSlots extends $Enum<$EnumTypeSlots> {
        static values(): $EnumTypeSlots[];
        static valueOf(arg0: string): $EnumTypeSlots;
        static BLACKLIST: $EnumTypeSlots;
        static WHITELIST: $EnumTypeSlots;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeSlots}.
     */
    export type $EnumTypeSlots_ = "blacklist" | "whitelist";
    export class $Interface {
    }
    export interface $Interface extends $TypeMechanismStorage {
        reload(): void;
        getPatterns(): $List<$PatternStack>;
        get patterns(): $List<$PatternStack>;
    }
    export class $TypeRedstone extends $Enum<$TypeRedstone> {
        static values(): $TypeRedstone[];
        static valueOf(arg0: string): $TypeRedstone;
        static HALF: $TypeRedstone;
        static NONE: $TypeRedstone;
        static FULL: $TypeRedstone;
    }
    /**
     * Values that may be interpreted as {@link $TypeRedstone}.
     */
    export type $TypeRedstone_ = "none" | "half" | "full";
    export class $Controller {
    }
    export interface $Controller extends $ElectricStorage {
        getPosController(): $BlockPos;
        setStackForCraft(arg0: $Map_<string, $Map_<$SameStack, number>>): void;
        getStorageNetwork(): $StorageNetwork;
        setStack(arg0: boolean, arg1: boolean, arg2: $List_<$SameStack>): void;
        getPower(): number;
        get posController(): $BlockPos;
        set stackForCraft(value: $Map_<string, $Map_<$SameStack, number>>);
        get storageNetwork(): $StorageNetwork;
        get power(): number;
    }
    export class $StorageStack {
        getSlot(): number;
        getCount(): number;
        copy(): $StorageStack;
        addCount(arg0: number): void;
        getTag(): $PatchedDataComponentMap;
        removeCount(arg0: number): void;
        constructor(arg0: $DataComponentMap_, arg1: number, arg2: number);
        get slot(): number;
        get count(): number;
        get tag(): $PatchedDataComponentMap;
    }
    export class $TypeStack extends $Enum<$TypeStack> {
        static values(): $TypeStack[];
        static valueOf(arg0: string): $TypeStack;
        static ITEM: $TypeStack;
        static FLUID: $TypeStack;
    }
    /**
     * Values that may be interpreted as {@link $TypeStack}.
     */
    export type $TypeStack_ = "item" | "fluid";
    export class $PatternItem {
    }
    export interface $PatternItem {
        getPattern(arg0: $ItemStack_, arg1: $HolderLookup$Provider): $PatternStack;
        hasPattern(arg0: $ItemStack_): boolean;
    }
    export class $TypeComponent extends $Enum<$TypeComponent> {
        static values(): $TypeComponent[];
        static valueOf(arg0: string): $TypeComponent;
        static USE: $TypeComponent;
        static IGNORE: $TypeComponent;
    }
    /**
     * Values that may be interpreted as {@link $TypeComponent}.
     */
    export type $TypeComponent_ = "ignore" | "use";
    export class $Export {
    }
    export interface $Export extends $TypeMechanismStorage {
        getTypeStack(): $TypeStack;
        getSlotMode(): $TypeSlot;
        getIndexFromSlot(arg0: number): number;
        getComponent(): $TypeComponent;
        getRedstoneSignal(): number;
        getRedstone(): $TypeRedstone;
        get typeStack(): $TypeStack;
        get slotMode(): $TypeSlot;
        get component(): $TypeComponent;
        get redstoneSignal(): number;
        get redstone(): $TypeRedstone;
    }
    export class $PreCraft {
    }
    export interface $PreCraft extends $ElectricStorage {
        getPreCrafts(): $List<$SameStack>;
        get preCrafts(): $List<$SameStack>;
    }
    export class $TypeMechanismStorage {
    }
    export interface $TypeMechanismStorage extends $ElectricStorage {
        getStacks(): $List<$ItemStack>;
        getTypeSlots(): $EnumTypeSlots;
        getFluidStacks(): $List<$FluidStack>;
        getDirection(): $Direction;
        getBlockEntityNeighbor(): $BlockEntity;
        get stacks(): $List<$ItemStack>;
        get typeSlots(): $EnumTypeSlots;
        get fluidStacks(): $List<$FluidStack>;
        get direction(): $Direction;
        get blockEntityNeighbor(): $BlockEntity;
    }
    export class $IWorkbenchInterface {
    }
    export interface $IWorkbenchInterface extends $Interface {
    }
    export class $InterfaceSide extends $Enum<$InterfaceSide> {
        static values(): $InterfaceSide[];
        static valueOf(arg0: string): $InterfaceSide;
        getDirections(): $List<$Direction>;
        static DOWN: $InterfaceSide;
        static NORTH: $InterfaceSide;
        static WEST: $InterfaceSide;
        static UP: $InterfaceSide;
        static SOUTH: $InterfaceSide;
        static ANY: $InterfaceSide;
        static EAST: $InterfaceSide;
        get directions(): $List<$Direction>;
    }
    /**
     * Values that may be interpreted as {@link $InterfaceSide}.
     */
    export type $InterfaceSide_ = "any" | "up" | "down" | "north" | "west" | "east" | "south";
    export class $Import {
    }
    export interface $Import extends $TypeMechanismStorage {
        getTypeStack(): $TypeStack;
        getIndexFromSlot(arg0: number): number;
        getComponent(): $TypeComponent;
        getRedstoneSignal(): number;
        getRedstone(): $TypeRedstone;
        get typeStack(): $TypeStack;
        get component(): $TypeComponent;
        get redstoneSignal(): number;
        get redstone(): $TypeRedstone;
    }
}
