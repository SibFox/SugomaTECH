import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Iterator } from "@package/java/util";
import { $Iterable } from "@package/java/lang";

declare module "@package/appeng/api/inventories" {
    export class $InternalInventory {
        static empty(): $InternalInventory;
        static wrapExternal(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $ItemTransfer;
        [Symbol.iterator](): Iterator<$ItemStack>
    }
    export interface $InternalInventory extends $Iterable<$ItemStack>, $ItemTransfer {
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        iterator(): $Iterator<$ItemStack>;
        getStackInSlot(arg0: number): $ItemStack;
        addItems(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        addItems(arg0: $ItemStack_): $ItemStack;
        getSlotInv(arg0: number): $InternalInventory;
        toItemHandler(): $IItemHandler;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getRedstoneSignal(): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        simulateAdd(arg0: $ItemStack_): $ItemStack;
        removeItems(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        getSubInventory(arg0: number, arg1: number): $InternalInventory;
        removeSimilarItems(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        simulateRemove(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        setItemDirect(arg0: number, arg1: $ItemStack_): void;
        toContainer(): $Container;
        sendChangeNotification(arg0: number): void;
        simulateSimilarRemove(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        [Symbol.iterator](): Iterator<$ItemStack>
        get redstoneSignal(): number;
    }
    export class $ItemTransfer {
    }
    export interface $ItemTransfer {
        addItems(arg0: $ItemStack_): $ItemStack;
        addItems(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        simulateAdd(arg0: $ItemStack_): $ItemStack;
        removeItems(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        removeSimilarItems(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        simulateRemove(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        simulateSimilarRemove(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
    }
}
