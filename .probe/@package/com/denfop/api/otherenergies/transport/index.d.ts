import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ArrayList, $List, $Map, $LinkedList, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $Tuple } from "@package/net/minecraft/util";
import { $TransportTileUnLoadEvent, $TransportTileLoadEvent } from "@package/com/denfop/api/otherenergies/transport/event";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Object } from "@package/java/lang";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/com/denfop/api/otherenergies/transport/event";

declare module "@package/com/denfop/api/otherenergies/transport" {
    export class $TransportTickList<T extends $TransportTick<$ITransportSource<any, any>, $Path>> extends $ArrayList<T> {
        removeSource(arg0: $Object): $TransportTick<$ITransportSource<any, any>, $Path>;
        constructor();
    }
    export class $TypeSlots {
        getList(): $List<$ItemStack>;
        getEnumTypeList(): $EnumTypeList;
        constructor(arg0: $List_<$ItemStack_>, arg1: $EnumTypeList_);
        get list(): $List<$ItemStack>;
        get enumTypeList(): $EnumTypeList;
    }
    export class $TransportNetLocal {
        emitTransportFrom(arg0: $ITransportSource<$ItemStack_, $IItemHandler>, arg1: $List_<$Path>): void;
        remove(arg0: $ITransportSource<any, any>): void;
        containsKey(arg0: $TransportTick<$ITransportSource<any, any>, $Path>): boolean;
        removeAll(arg0: $List_<$TransportTick<$ITransportSource<any, any>, $Path>>): void;
        getSources(arg0: $ITransportAcceptor<any, any>): $List<$TransportTick<$ITransportSource<any, any>, $Path>>;
        onTickEnd(): void;
        onUnload(): void;
        getTileEntity(arg0: $BlockPos_): $ITransportTile<any, any>;
        discover(arg0: $ITransportSource<any, any>): $Tuple<$List<$Path>, $LinkedList<$ITransportConductor<any, any>>>;
        canInsertOrExtract(arg0: $ITransportConductor<any, any>, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canInsertOrExtract(arg0: $ITransportConductor<any, any>, arg1: $FluidStack_, arg2: $Direction_): boolean;
        addTile(arg0: $ITransportTile<any, any>): void;
        emitTransportFluidFrom(arg0: $ITransportSource<$FluidStack_, $IFluidHandler>, arg1: $List_<$Path>): void;
        addTileEntity(arg0: $BlockPos_, arg1: $ITransportTile<any, any>): void;
        removeTile(arg0: $ITransportTile<any, any>): void;
        onTileEntityAdded(arg0: $ITransportAcceptor<any, any>): void;
        removeTileEntity(arg0: $ITransportTile<any, any>): void;
        onTileEntityRemoved(arg0: $ITransportAcceptor<any, any>): void;
        getTileFromITransport(arg0: $ITransportTile<any, any>): $BlockEntity;
        hasInSystem(arg0: $ITransportAcceptor<any, any>): boolean;
        remove1(arg0: $ITransportSource<any, any>): void;
        tickUpdate: number;
    }
    export class $TransportTick<T, E> {
        setItemList(arg0: $List_<E>): void;
        getEnergyItemPaths(): $List<E>;
        getList(): $List<E>;
        getSource(): T;
        setList(arg0: $List_<E>): void;
        getEnergyFluidPaths(): $List<E>;
        getConductors(): $LinkedList<$ITransportConductor<any, any>>;
        setFluidList(arg0: $List_<E>): void;
        setConductors(arg0: $LinkedList<$ITransportConductor<any, any>>): void;
        constructor(arg0: T, arg1: $List_<E>);
        set itemList(value: $List_<E>);
        get energyItemPaths(): $List<E>;
        get source(): T;
        get energyFluidPaths(): $List<E>;
        set fluidList(value: $List_<E>);
    }
    export class $EnumTypeList extends $Enum<$EnumTypeList> {
        static values(): $EnumTypeList[];
        static valueOf(arg0: string): $EnumTypeList;
        static BLACKLIST: $EnumTypeList;
        static WHITELIST: $EnumTypeList;
        static NONE: $EnumTypeList;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeList}.
     */
    export type $EnumTypeList_ = "blacklist" | "whitelist" | "none";
    export class $TransportNetLocal$FluidFilterLists {
    }
    export class $EventHandler {
        tick(arg0: $LevelTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        onEnergyTileUnLoad(arg0: $TransportTileUnLoadEvent<any, any>): void;
        onEnergyTileLoad(arg0: $TransportTileLoadEvent<any, any>): void;
        constructor();
    }
    export class $ITransportSink<T, E> {
    }
    export interface $ITransportSink<T, E> extends $ITransportAcceptor<T, E> {
        isFluidSink(): boolean;
        isSink(): boolean;
        getEnergyTickList(): $List<number>;
        getDemanded(arg0: $Direction_): $List<number>;
        isItemSink(): boolean;
        get fluidSink(): boolean;
        get sink(): boolean;
        get energyTickList(): $List<number>;
        get itemSink(): boolean;
    }
    export class $ITransportTile<T, E> {
    }
    export interface $ITransportTile<T, E> {
        getHandler(arg0: $Direction_): E;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $ITransportTile<any, any>>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        getIdNetwork(): number;
        RemoveTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        AddTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        get pos(): $BlockPos;
        set id(value: number);
        get tiles(): $Map<$Direction, $ITransportTile<any, any>>;
        get validReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        get idNetwork(): number;
    }
    export class $ITransportNet {
    }
    export interface $ITransportNet {
        addTile<T extends $BlockEntity>(arg0: T): void;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $ITransportTile<any, any>;
        removeTile(arg0: $ITransportTile<any, any>): void;
    }
    export class $ITransportSource<T, E> {
    }
    export interface $ITransportSource<T, E> extends $ITransportEmitter<T, E> {
        isSource(): boolean;
        draw(arg0: T, arg1: number, arg2: $Direction_): void;
        isFluid(): boolean;
        isItem(): boolean;
        getOffered(arg0: number, arg1: $Direction_): $TransportItem<T>;
        get source(): boolean;
        get fluid(): boolean;
        get item(): boolean;
    }
    export class $ITransportConductor<T, E> {
    }
    export interface $ITransportConductor<T, E> extends $ITransportAcceptor<T, E>, $ITransportEmitter<T, E> {
        getWhiteListItems(arg0: $Direction_): $List<$ItemStack>;
        getBlackListItems(arg0: $Direction_): $List<$ItemStack>;
        getBlackListFluids(arg0: $Direction_): $List<$FluidStack>;
        getWhiteListFluids(arg0: $Direction_): $List<$FluidStack>;
        getMax(): number;
        getMax(arg0: number): number;
        setMax(arg0: number): void;
        isInput(): boolean;
        isOutput(): boolean;
        isItem(): boolean;
        canWork(): boolean;
        getCable(): $InfoCable;
        setCable(arg0: $InfoCable): void;
        get input(): boolean;
        get output(): boolean;
        get item(): boolean;
    }
    export class $TransportFluidItemSinkSource implements $ITransportSource<any, any>, $ITransportSink<any, any> {
        isFluidSink(): boolean;
        getHandler(arg0: $Direction_): $Object;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        isSink(): boolean;
        isSource(): boolean;
        draw(arg0: $Object, arg1: number, arg2: $Direction_): void;
        isFluid(): boolean;
        getTiles(): $Map<$Direction, $ITransportTile<any, any>>;
        isItem(): boolean;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        getIdNetwork(): number;
        emitsTo(arg0: $ITransportAcceptor<any, any>, arg1: $Direction_): boolean;
        getEnergyTickList(): $List<number>;
        getDemanded(arg0: $Direction_): $List<number>;
        RemoveTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        AddTile(arg0: $ITransportTile<any, any>, arg1: $Direction_): void;
        acceptsFrom(arg0: $ITransportEmitter<any, any>, arg1: $Direction_): boolean;
        getOffered(arg0: number, arg1: $Direction_): $TransportItem<never>;
        isItemSink(): boolean;
        constructor(arg0: $BlockEntity, arg1: $BlockPos_);
        get fluidSink(): boolean;
        get pos(): $BlockPos;
        set id(value: number);
        get sink(): boolean;
        get source(): boolean;
        get fluid(): boolean;
        get tiles(): $Map<$Direction, $ITransportTile<any, any>>;
        get item(): boolean;
        get validReceivers(): $List<$InfoTile<$ITransportTile<any, any>>>;
        get idNetwork(): number;
        get energyTickList(): $List<number>;
        get itemSink(): boolean;
    }
    export class $Path {
        getHandler(): $IItemHandler;
        getFluidHandler(): $IFluidHandler;
        get handler(): $IItemHandler;
        get fluidHandler(): $IFluidHandler;
    }
    export class $TransportNetGlobal implements $ITransportNet {
        static initialize(): $TransportNetGlobal;
        static onTickEnd(arg0: $Level_): void;
        static onWorldUnload(arg0: $Level_): void;
        static getForWorld(arg0: $Level_): $TransportNetLocal;
        addTile<T extends $BlockEntity>(arg0: T): void;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $ITransportTile<any, any>;
        removeTile(arg0: $ITransportTile<any, any>): void;
        static instance: $TransportNetGlobal;
        constructor();
    }
    export class $ITransportEmitter<T, E> {
    }
    export interface $ITransportEmitter<T, E> extends $ITransportTile<T, E> {
        emitsTo(arg0: $ITransportAcceptor<T, E>, arg1: $Direction_): boolean;
    }
    export class $ITransportAcceptor<T, E> {
    }
    export interface $ITransportAcceptor<T, E> extends $ITransportTile<T, E> {
        acceptsFrom(arg0: $ITransportEmitter<T, E>, arg1: $Direction_): boolean;
    }
    export class $FluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        getFluidInTank(arg0: number): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        constructor();
        get tanks(): number;
    }
    export class $TransportNetLocal$SinkDemandKey {
    }
    export class $TransportItem<T> {
        getList(): $List<T>;
        setList(arg0: $List_<T>): void;
        setList(...arg0: T[]): void;
        getList1(): $List<number>;
        setList1(arg0: $List_<number>): void;
        setList1(...arg0: number[]): void;
        constructor();
    }
    export class $ItemFluidHandler implements $IItemHandler, $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getStackInSlot(arg0: number): $ItemStack;
        getItemHandler(): $IItemHandler;
        getFluidHandler(): $IFluidHandler;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getTankCapacity(arg0: number): number;
        getFluidInTank(arg0: number): $FluidStack;
        getSlots(): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
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
        constructor(arg0: $IItemHandler, arg1: $IFluidHandler);
        get tanks(): number;
        get itemHandler(): $IItemHandler;
        get fluidHandler(): $IFluidHandler;
        get empty(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $InfoCable {
        getFacing(): $Direction;
        getConductor(): $ITransportConductor<any, any>;
        getPrev(): $InfoCable;
        constructor(arg0: $ITransportConductor<any, any>, arg1: $Direction_, arg2: $InfoCable);
        get facing(): $Direction;
        get conductor(): $ITransportConductor<any, any>;
        get prev(): $InfoCable;
    }
    export class $TransportNetLocal$ItemFilterLists {
    }
    export class $TransportNetLocal$ConductorSideKey {
    }
}
