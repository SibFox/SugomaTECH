import { $ContainerMenuAgriculturalAnalyzer } from "@package/com/denfop/containermenu";
import { $SameStack } from "@package/com/denfop/api/storage/autocrafting";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ItemStackInventory } from "@package/com/denfop/items";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ContainerItem } from "@package/com/denfop/datacomponent";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";
import { $StorageStack } from "@package/com/denfop/api/storage";

declare module "@package/com/denfop/api/storage/cell" {
    export class $ItemStackCell extends $ItemStackInventory implements $ICell {
        getStacks(): $ItemStack[];
        size(): number;
        add(arg0: $ItemStack_, arg1: boolean): number;
        add(arg0: $Item_, arg1: $DataComponentMap_, arg2: number, arg3: boolean): number;
        add(arg0: number, arg1: number): void;
        save(): void;
        getCellInfo(): $CellInfo;
        getItemsForCraft(arg0: $DataComponentMap_, arg1: $List_<$StorageStack>): number;
        getItemsForCraft(arg0: $Item_, arg1: $DataComponentMap_): number;
        removeItem(arg0: $ItemStack_): $ItemStack;
        removeStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        removeStack(arg0: $ItemStack_): $ItemStack;
        getStorage(): number;
        getFluids(): $FluidStack[];
        needUpdate(): boolean;
        getFluid(arg0: number): $FluidStack;
        getGuiContainer(arg0: $Player): $ContainerMenuAgriculturalAnalyzer;
        removeStackWithIgnoringAmount(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        addFluid(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): void;
        addFluid(arg0: $FluidStack_): $FluidStack;
        addFluid(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): void;
        removeFluid(arg0: $FluidStack_): number;
        removeFluid(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): number;
        setUpdate(arg0: boolean): void;
        getStorageStack(): $Map<string, $List<$StorageStack>>;
        canAddStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        canAddStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): number;
        canAddStack(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): number;
        canAddStack(arg0: $FluidStack_): number;
        canAddStack(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): number;
        canAddStack(arg0: $ItemStack_): number;
        addFluidDirect(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number, arg3: boolean): number;
        addFluidDirect(arg0: number, arg1: number): void;
        addFluidDirect(arg0: $FluidStack_, arg1: boolean): number;
        addFluidCrafting(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): void;
        canAddFluid(arg0: $FluidStack_): number;
        addStackCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): void;
        getStacksForCraft(): $Map<number, number>;
        removeStackWithIgnoringAmountCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        addStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): void;
        addStack(arg0: $ItemStack_): $ItemStack;
        addStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): void;
        removeItemFromListCraft(arg0: $SameStack, arg1: number): number;
        removeStackWithIgnoring(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): $ItemStack;
        getStorageStackFromItem(arg0: $ItemStack_): $List<$StorageStack>;
        removeFluidCrafting(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): number;
        removeFluidFromListCraft(arg0: $SameStack, arg1: number): number;
        getStorageStackFromFluid(arg0: $FluidStack_): $List<$StorageStack>;
        removeStackCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        containerStack: $ItemStack;
        stacksForCraft: $Map<number, number>;
        storageMap: $Map<string, $List<$StorageStack>>;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        inventorySize: number;
        itemStack1: $ItemStack;
        player: $Player;
        constructor(arg0: $ItemStack_, arg1: $CellInfo_);
        get stacks(): $ItemStack[];
        get cellInfo(): $CellInfo;
        get storage(): number;
        get fluids(): $FluidStack[];
        set update(value: boolean);
        get storageStack(): $Map<string, $List<$StorageStack>>;
    }
    export class $TypeCell extends $Enum<$TypeCell> {
        static values(): $TypeCell[];
        static valueOf(arg0: string): $TypeCell;
        static ITEM: $TypeCell;
        static FLUID: $TypeCell;
    }
    /**
     * Values that may be interpreted as {@link $TypeCell}.
     */
    export type $TypeCell_ = "fluid" | "item";
    export class $ICell {
    }
    export interface $ICell {
        getStacks(): $ItemStack[];
        add(arg0: $ItemStack_, arg1: boolean): number;
        save(): void;
        getCellInfo(): $CellInfo;
        getItemsForCraft(arg0: $DataComponentMap_, arg1: $List_<$StorageStack>): number;
        removeItem(arg0: $ItemStack_): $ItemStack;
        removeStack(arg0: $ItemStack_): $ItemStack;
        removeStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        getStorage(): number;
        getFluids(): $FluidStack[];
        needUpdate(): boolean;
        removeStackWithIgnoringAmount(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        addFluid(arg0: $FluidStack_): $FluidStack;
        addFluid(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): void;
        addFluid(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): void;
        removeFluid(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): number;
        removeFluid(arg0: $FluidStack_): number;
        setUpdate(arg0: boolean): void;
        getStorageStack(): $Map<string, $List<$StorageStack>>;
        canAddStack(arg0: $FluidStack_): number;
        canAddStack(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): number;
        canAddStack(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): number;
        canAddStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): number;
        canAddStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        canAddStack(arg0: $ItemStack_): number;
        addFluidDirect(arg0: $FluidStack_, arg1: boolean): number;
        addFluidCrafting(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): void;
        canAddFluid(arg0: $FluidStack_): number;
        addStackCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): void;
        getStacksForCraft(): $Map<number, number>;
        removeStackWithIgnoringAmountCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        addStack(arg0: $ItemStack_): $ItemStack;
        addStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): void;
        addStack(arg0: $Item_, arg1: $DataComponentMap_, arg2: number, arg3: $StorageStack): void;
        removeItemFromListCraft(arg0: $SameStack, arg1: number): number;
        removeStackWithIgnoring(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): $ItemStack;
        getStorageStackFromItem(arg0: $ItemStack_): $List<$StorageStack>;
        removeFluidCrafting(arg0: $Fluid_, arg1: $DataComponentMap_, arg2: number): number;
        removeFluidFromListCraft(arg0: $SameStack, arg1: number): number;
        getStorageStackFromFluid(arg0: $FluidStack_): $List<$StorageStack>;
        removeStackCrafting(arg0: $Item_, arg1: $DataComponentMap_, arg2: number): number;
        get stacks(): $ItemStack[];
        get cellInfo(): $CellInfo;
        get storage(): number;
        get fluids(): $FluidStack[];
        set update(value: boolean);
        get storageStack(): $Map<string, $List<$StorageStack>>;
        get stacksForCraft(): $Map<number, number>;
    }
    export class $CellInfo extends $Record {
        capacity(): number;
        typeCell(): $TypeCell;
        static ITEM_1000: $CellInfo;
        static ITEM_16000: $CellInfo;
        static ITEM_64000: $CellInfo;
        static FLUID_16000: $CellInfo;
        static ITEM_4000: $CellInfo;
        static FLUID_256000: $CellInfo;
        static ITEM_4096000: $CellInfo;
        static FLUID_64000: $CellInfo;
        static ITEM_1048576000: $CellInfo;
        static ITEM_65536000: $CellInfo;
        static ITEM_256000: $CellInfo;
        static ITEM_262144000: $CellInfo;
        static ITEM_2097152000: $CellInfo;
        static ITEM_16384000: $CellInfo;
        static ITEM_1024000: $CellInfo;
        static FLUID_1024000: $CellInfo;
        static FLUID_4000: $CellInfo;
        static FLUID_1000: $CellInfo;
        constructor(capacity: number, typeCell: $TypeCell_);
    }
    /**
     * Values that may be interpreted as {@link $CellInfo}.
     */
    export type $CellInfo_ = { typeCell?: $TypeCell_, capacity?: number,  } | [typeCell?: $TypeCell_, capacity?: number, ];
    export class $ICellItem {
    }
    export interface $ICellItem {
        getCellInfo(): $CellInfo;
        getCell(arg0: $ItemStack_): $ItemStackCell;
        get cellInfo(): $CellInfo;
    }
}
