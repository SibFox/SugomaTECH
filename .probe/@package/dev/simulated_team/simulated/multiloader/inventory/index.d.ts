import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Record } from "@package/java/lang";
import { $Set_, $List, $Set } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/dev/simulated_team/simulated/multiloader/inventory" {
    export class $AbstractContainer {
    }
    export interface $AbstractContainer extends $NBTSerializable, $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setChanged(): void;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        clearContent(): void;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        populateFields(arg0: $ContainerSlot): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        get empty(): boolean;
        get maxStackSize(): number;
        get containerSize(): number;
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setChanged(): void;
        getMaxStackSize(): number;
        getContainerSize(): number;
        clearContent(): void;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        populateFields(arg0: $ContainerSlot): void;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        getHeight(): number;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get containerSize(): number;
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
    }
    export class $ItemInfoWrapper extends $Record {
        patchMap(): $DataComponentPatch;
        type(): $Item;
        static generateFromStack(arg0: $ItemStack_): $ItemInfoWrapper;
        static generateFromInfo(arg0: $ItemInfoWrapper_): $ItemStack;
        constructor(type: $Item_, patchMap: $DataComponentPatch_);
    }
    /**
     * Values that may be interpreted as {@link $ItemInfoWrapper}.
     */
    export type $ItemInfoWrapper_ = { patchMap?: $DataComponentPatch_, type?: $Item_,  } | [patchMap?: $DataComponentPatch_, type?: $Item_, ];
    export class $ContainerSlot implements $NBTSerializable {
        clear(): void;
        isEmpty(): boolean;
        static of(arg0: number, arg1: $Item_, arg2: $AbstractContainer): $ContainerSlot;
        static of(arg0: number, arg1: $ItemStack_, arg2: $AbstractContainer): $ContainerSlot;
        getParent(): $AbstractContainer;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getType(): $Item;
        getIndex(): number;
        getStack(): $ItemStack;
        shrink(arg0: number): void;
        setStack(arg0: $ItemStack_): void;
        canInsert(arg0: $ItemInfoWrapper_): boolean;
        canExtract(): boolean;
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        static EMPTY: $ContainerSlot;
        constructor();
        constructor(arg0: number, arg1: $ItemStack_, arg2: $Item_, arg3: $AbstractContainer);
        get empty(): boolean;
        get parent(): $AbstractContainer;
        get type(): $Item;
        get index(): number;
    }
}
