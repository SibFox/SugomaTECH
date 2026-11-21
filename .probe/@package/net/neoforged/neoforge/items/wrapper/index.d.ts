import { $Level_ } from "@package/net/minecraft/world/level";
import { $WorldlyContainer, $Container } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $LivingEntity, $EquipmentSlot$Type_ } from "@package/net/minecraft/world/entity";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/net/neoforged/neoforge/items/wrapper" {
    export class $PlayerOffhandInvWrapper extends $RangedWrapper {
        constructor(inv: $Inventory);
    }
    export class $PlayerArmorInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(inv: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    /**
     * Exposes the armor or hands inventory of an `LivingEntity` as an `IItemHandler` using `LivingEntity#getItemBySlot(EquipmentSlot)` and
     * `LivingEntity#setItemSlot(EquipmentSlot, ItemStack)`.
     */
    export class $EntityEquipmentInvWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(entity: $LivingEntity, slotType: $EquipmentSlot$Type_);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $PlayerInvWrapper extends $CombinedInvWrapper {
        constructor(inv: $Inventory);
    }
    /**
     * An `IItemHandler` that delegates each method to another `IItemHandler`.
     * The `Supplier` is re-evaluated each time a method is called.
     */
    export class $ForwardingItemHandler implements $IItemHandler {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(delegate: $IItemHandler);
        constructor(delegate: $Supplier_<$IItemHandler>);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    /**
     * A wrapper that composes another IItemHandlerModifiable, exposing only a range of the composed slots.
     * Shifting of slot indices is handled automatically for you.
     */
    export class $RangedWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(compose: $IItemHandlerModifiable, minSlot: number, maxSlotExclusive: number);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    /**
     * Exposes the armor inventory of an `LivingEntity` as an `IItemHandler` using `LivingEntity#getItemBySlot(EquipmentSlot)` and
     * `LivingEntity#setItemSlot(EquipmentSlot, ItemStack)`.
     */
    export class $EntityArmorInvWrapper extends $EntityEquipmentInvWrapper {
        constructor(entity: $LivingEntity);
    }
    export class $EmptyItemHandler implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        static INSTANCE: $IItemHandler;
        constructor();
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $SidedInvWrapper implements $IItemHandlerModifiable {
        static getSlot(inv: $WorldlyContainer, slot: number, side: $Direction_): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(inv: $WorldlyContainer, side: $Direction_);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $InvWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getInv(): $Container;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(inv: $Container);
        get inv(): $Container;
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    /**
     * Exposes the player inventory WITHOUT the armor inventory as IItemHandler.
     * Also takes core of inserting/extracting having the same logic as picking up items.
     */
    export class $PlayerMainInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(inv: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    /**
     * Exposes the hands inventory of an `LivingEntity` as an `IItemHandler` using `LivingEntity#getItemBySlot(EquipmentSlot)` and
     * `LivingEntity#setItemSlot(EquipmentSlot, ItemStack)`.
     */
    export class $EntityHandsInvWrapper extends $EntityEquipmentInvWrapper {
        constructor(entity: $LivingEntity);
    }
    export class $SidedInvWrapper$InsertLimit {
    }
    export interface $SidedInvWrapper$InsertLimit {
    }
    /**
     * Values that may be interpreted as {@link $SidedInvWrapper$InsertLimit}.
     */
    export type $SidedInvWrapper$InsertLimit_ = (() => void);
    export class $RecipeWrapper implements $RecipeInput {
        /**
         * Returns the size of this inventory.
         */
        size(): number;
        /**
         * Returns the stack in this slot. This stack should be a modifiable reference, not a copy of a stack in your inventory.
         */
        getItem(slot: number): $ItemStack;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(inv: $IItemHandler);
        get empty(): boolean;
    }
    export class $CombinedInvWrapper implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(...arg0: $IItemHandlerModifiable[]);
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
}
