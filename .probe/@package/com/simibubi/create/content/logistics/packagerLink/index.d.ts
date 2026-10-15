import { $StockInventoryType_ } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GenericRequestPromise } from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RPQExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Object, $Runnable_, $Enum } from "@package/java/lang";
import { $Comparator, $List } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";

declare module "@package/com/simibubi/create/content/logistics/packagerLink" {
    export class $RequestPromise {
        tick(): void;
        static ageComparator(): $Comparator<$RequestPromise>;
        static CODEC: $Codec<$RequestPromise>;
        ticksExisted: number;
        promisedStack: $BigItemStack;
        constructor(arg0: $BigItemStack);
        constructor(arg0: number, arg1: $BigItemStack);
    }
    export class $LogisticallyLinkedBehaviour$RequestType extends $Enum<$LogisticallyLinkedBehaviour$RequestType> {
        static values(): $LogisticallyLinkedBehaviour$RequestType[];
        static valueOf(arg0: string): $LogisticallyLinkedBehaviour$RequestType;
        static PLAYER: $LogisticallyLinkedBehaviour$RequestType;
        static REDSTONE: $LogisticallyLinkedBehaviour$RequestType;
        static RESTOCK: $LogisticallyLinkedBehaviour$RequestType;
    }
    /**
     * Values that may be interpreted as {@link $LogisticallyLinkedBehaviour$RequestType}.
     */
    export type $LogisticallyLinkedBehaviour$RequestType_ = "restock" | "redstone" | "player";
    export class $RequestPromiseQueue implements $RPQExtension {
        isEmpty(): boolean;
        add(arg0: $RequestPromise): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Runnable_): $RequestPromiseQueue;
        flatten(arg0: boolean): $List<$RequestPromise>;
        tick(): void;
        forceClear(arg0: $ItemStack_): void;
        setOnChanged(arg0: $Runnable_): void;
        getTotalPromisedAndRemoveExpired(arg0: $ItemStack_, arg1: number): number;
        itemEnteredSystem(arg0: $ItemStack_, arg1: number): void;
        deployer$getTotalPromisedAndRemoveExpired(arg0: $StockInventoryType_<any, any, any>, arg1: $Object, arg2: number): number;
        deployer$flatten(arg0: $StockInventoryType_<any, any, any>, arg1: boolean): $List<any>;
        deployer$add(arg0: $StockInventoryType_<any, any, any>, arg1: $GenericRequestPromise<any>): void;
        deployer$forceClear(arg0: $StockInventoryType_<any, any, any>, arg1: $Object): void;
        deployer$genericEnteredSystem(arg0: $StockInventoryType_<any, any, any>, arg1: $Object, arg2: number): void;
        constructor(arg0: $Runnable_);
        get empty(): boolean;
        set onChanged(value: $Runnable_);
    }
}
