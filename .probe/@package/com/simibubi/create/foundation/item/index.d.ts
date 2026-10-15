import { $BiPredicate_, $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemHandlerContainer, $SyncedBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Enum } from "@package/java/lang";

declare module "@package/com/simibubi/create/foundation/item" {
    export class $SmartInventory extends $ItemHandlerContainer implements $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
        allowExtraction(): $SmartInventory;
        getStackLimit(arg0: number, arg1: $ItemStack_): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getSlots(): number;
        withMaxStackSize(arg0: number): $SmartInventory;
        forbidInsertion(): $SmartInventory;
        allowInsertion(): $SmartInventory;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        whenContentsChanged(arg0: $Consumer_<number>): $SmartInventory;
        forbidExtraction(): $SmartInventory;
        kjs$self(): $IItemHandler;
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean, arg4: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity);
        get slots(): number;
    }
    export class $ItemHelper$ExtractionCountMode extends $Enum<$ItemHelper$ExtractionCountMode> {
        static values(): $ItemHelper$ExtractionCountMode[];
        static valueOf(arg0: string): $ItemHelper$ExtractionCountMode;
        static EXACTLY: $ItemHelper$ExtractionCountMode;
        static UPTO: $ItemHelper$ExtractionCountMode;
    }
    /**
     * Values that may be interpreted as {@link $ItemHelper$ExtractionCountMode}.
     */
    export type $ItemHelper$ExtractionCountMode_ = "exactly" | "upto";
}
