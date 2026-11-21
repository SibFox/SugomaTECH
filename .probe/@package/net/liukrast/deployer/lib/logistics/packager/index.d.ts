import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $GenericRequestPromise } from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
import { $GenericPackageOrderData } from "@package/net/liukrast/deployer/lib/logistics";
import { $Codec } from "@package/com/mojang/serialization";
import { $List, $UUID_, $List_, $Map } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $Function_, $Predicate_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Record, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $PackagerBlockEntity, $PackagerItemHandler } from "@package/com/simibubi/create/content/logistics/packager";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $CapManipulationBehaviourBase } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $GenericOrderContained_, $GenericOrder, $GenericOrderContained } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/liukrast/deployer/lib/logistics/packager" {
    export class $AbstractInventorySummary<K, V> {
        getStacks(): $List<V>;
        isEmpty(): boolean;
        add(arg0: $AbstractInventorySummary<K, V>): void;
        add(arg0: V): void;
        add(arg0: V, arg1: number): void;
        copy(): $AbstractInventorySummary<K, V>;
        copy(arg0: V): V;
        erase(arg0: V): boolean;
        setCount(arg0: V, arg1: number): void;
        getTotalCount(): number;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getCountOf(arg0: V): number;
        getStacksByCount(): $List<V>;
        getItemMap(): $Map<K, $List<V>>;
        isSameKeySameComponents(arg0: V, arg1: V): boolean;
        getTotalOfMatching(arg0: $Predicate_<V>): number;
        addAllStacks(arg0: $List_<V>): void;
        keyFrom(arg0: V): K;
        contributingLinks: number;
        constructor(arg0: $StockInventoryType_<K, V, never>);
        get stacks(): $List<V>;
        get empty(): boolean;
        get totalCount(): number;
        get stacksByCount(): $List<V>;
        get itemMap(): $Map<K, $List<V>>;
    }
    export interface $StockInventoryType<K, V, H> extends RegistryMarked<RegistryTypes.DeployerStockInventoryTag, RegistryTypes.DeployerStockInventory> {}
    export class $GenericPackagingRequest<V> extends $Record {
        context(): $GenericOrderContained<V>;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create<V>(arg0: V, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $GenericOrderContained_<V> | null): $GenericPackagingRequest<V>;
        address(): string;
        item(): V;
        subtract(arg0: number): void;
        linkIndex(): number;
        orderId(): number;
        finalLink(): $MutableBoolean;
        packageCounter(): $MutableInt;
        constructor(item: V, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $GenericOrderContained_<V> | null);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GenericPackagingRequest}.
     */
    export type $GenericPackagingRequest_<V> = { context?: $GenericOrderContained_<any>, finalLink?: $MutableBoolean, item?: any, address?: string, packageCounter?: $MutableInt, linkIndex?: number, orderId?: number, count?: $MutableInt,  } | [context?: $GenericOrderContained_<any>, finalLink?: $MutableBoolean, item?: any, address?: string, packageCounter?: $MutableInt, linkIndex?: number, orderId?: number, count?: $MutableInt, ];
    export class $StockInventoryType$IStorageHandler<K, V, H> {
    }
    export interface $StockInventoryType$IStorageHandler<K, V, H> {
        extract(arg0: H, arg1: V, arg2: boolean, arg3: $AbstractPackagerBlockEntity<K, V, H>): V;
        fill(arg0: H, arg1: V, arg2: boolean, arg3: $AbstractPackagerBlockEntity<K, V, H>): number;
        create(arg0: number): H;
        getStackInSlot(arg0: H, arg1: number): V;
        insertItem(arg0: H, arg1: number, arg2: V, arg3: boolean): V;
        getSlots(arg0: H): number;
        setInSlot(arg0: H, arg1: number, arg2: V, arg3: boolean): V;
        maxCountPerSlot(): number;
        getMaxPackageSlots(): number;
        isBulky(arg0: K): boolean;
        get maxPackageSlots(): number;
    }
    export class $AbstractPackagerBlockEntity<K, V, H> extends $PackagerBlockEntity {
        getHatchModel(arg0: boolean, arg1: $PartialModel): $PartialModel;
        getStockOf(arg0: $UUID_, arg1: V): number;
        getStockType(): $StockInventoryType<$Object, V, H>;
        isTargetingSameContainer(arg0: $IdentifiedContainer_<H>): boolean;
        createItemHandler(): $PackagerItemHandler;
        getAvailableStacks(): $AbstractInventorySummary<$Object, V>;
        supportsBlockEntity(arg0: $BlockEntity): boolean;
        attemptToSendSpecial(arg0: $List_<$GenericPackagingRequest_<V>>, arg1: number, arg2: boolean): void;
        attemptToSendSpecial(arg0: $List_<$GenericPackagingRequest_<V>>): void;
        safeUnwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        isValidPackage(arg0: $ItemStack_): boolean;
        pleaseBroadcast(arg0: $UUID_, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $GenericOrderContained_<V>, arg3: string): boolean;
        targetInventory: $CapManipulationBehaviourBase<H, $CapManipulationBehaviourBase<never, never>>;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get stockType(): $StockInventoryType<$Object, V, H>;
        get availableStacks(): $AbstractInventorySummary<$Object, V>;
    }
    export class $StockInventoryType<K, V, H> {
        getBlockCapability(): $BlockCapability<H, $Direction>;
        networkHandler(): $StockInventoryType$INetworkHandler<K, V, H>;
        packageHandler(): $StockInventoryType$IPackageHandler<K, V, H>;
        valueHandler(): $StockInventoryType$IValueHandler<K, V, H>;
        storageHandler(): $StockInventoryType$IStorageHandler<K, V, H>;
        registry: $SimpleRegistry<$Block, $GenericUnpackingHandler<K, V, H>>;
        defaultUnpackProcedure: $GenericUnpackingHandler<K, V, H>;
        get blockCapability(): $BlockCapability<H, $Direction>;
    }
    /**
     * Values that may be interpreted as {@link $StockInventoryType}.
     */
    export type $StockInventoryType_<K, V, H> = RegistryTypes.DeployerStockInventory;
    export class $StockInventoryType$INetworkHandler<K, V, H> {
    }
    export interface $StockInventoryType$INetworkHandler<K, V, H> {
        empty(): $AbstractInventorySummary<K, V>;
        getComponent(): $DataComponentType<$GenericPackageOrderData<V>>;
        createSummary(): $AbstractInventorySummary<K, V>;
        requestCodec(): $Codec<$GenericRequestPromise<V>>;
        get component(): $DataComponentType<$GenericPackageOrderData<V>>;
    }
    export class $IdentifiedContainer<H> extends $Record {
        handler(): H;
        identifier(): $InventoryIdentifier;
        constructor(identifier: $InventoryIdentifier_, handler: H);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedContainer}.
     */
    export type $IdentifiedContainer_<H> = { identifier?: $InventoryIdentifier_, handler?: any,  } | [identifier?: $InventoryIdentifier_, handler?: any, ];
    export class $StockInventoryType$IPackageHandler<K, V, H> {
    }
    export interface $StockInventoryType$IPackageHandler<K, V, H> {
        getContents(arg0: $ItemStack_): H;
        setOrder(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: $GenericOrderContained_<V>): void;
        containing(arg0: H): $ItemStack;
        packageOrderContext(): $DataComponentType<$GenericOrderContained<V>>;
        packageOrderData(): $DataComponentType<$GenericPackageOrderData<V>>;
        appendHoverText(arg0: $ItemStack_, arg1: $Item$TooltipContext, arg2: $List_<$Component_>, arg3: $TooltipFlag, arg4: H): void;
        getRandomBox(): $ItemStack;
        setBoxContent(arg0: $ItemStack_, arg1: H): void;
        get randomBox(): $ItemStack;
    }
    export class $StockInventoryType$IValueHandler<K, V, H> {
        test(arg0: $FilterItemStack, arg1: $Level_, arg2: V): boolean;
        isEmpty(arg0: V): boolean;
        empty(): V;
        getCount(arg0: V): number;
        copy(arg0: V): V;
        create(arg0: K, arg1: number): V;
        codec(): $Codec<V>;
        shrink(arg0: V, arg1: number): void;
        setCount(arg0: V, arg1: number): void;
        isStackable(arg0: V): boolean;
        fromValue(arg0: V): K;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, V>;
        createContained(arg0: $List_<V>): $GenericOrderContained<V>;
        copyWithCount(arg0: V, arg1: number): V;
        orderContainedStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrderContained<V>>;
        orderContainedCodec(): $Codec<$GenericOrderContained<V>>;
        hashStrategy(): $Hash$Strategy<V>;
        orderStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>;
        orderCodec(): $Codec<$GenericOrder<V>>;
        constructor(arg0: $Codec<V>, arg1: $StreamCodec_<$RegistryFriendlyByteBuf, V>);
        constructor(arg0: $Codec<V>, arg1: $BiFunction_<$Codec<V>, $Hash$Strategy<V>, $Codec<$GenericOrder<V>>>, arg2: $TriFunction_<$Codec<$GenericOrder<V>>, $Codec<V>, $Hash$Strategy<V>, $Codec<$GenericOrderContained<V>>>, arg3: $StreamCodec_<$RegistryFriendlyByteBuf, V>, arg4: $BiFunction_<$StreamCodec<$RegistryFriendlyByteBuf, V>, $Hash$Strategy<V>, $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>>, arg5: $Function_<$StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>, $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrderContained<V>>>);
    }
    export class $GenericUnpackingHandler<K, V, H> {
    }
    export interface $GenericUnpackingHandler<K, V, H> {
        unpack(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $List_<V>, arg5: $GenericOrderContained_<V> | null, arg6: boolean, arg7: $AbstractPackagerBlockEntity<K, V, H>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GenericUnpackingHandler}.
     */
    export type $GenericUnpackingHandler_<K, V, H> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Direction, arg4: $List<V>, arg5: $GenericOrderContained<V>, arg6: boolean, arg7: $AbstractPackagerBlockEntity<K, V, H>) => boolean);
}
