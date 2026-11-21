import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Enum, $Object } from "@package/java/lang";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $ArrayList, $List, $Map, $LinkedList, $List_ } from "@package/java/util";
import { $CoolTileUnloadEvent, $CoolTileLoadEvent } from "@package/com/denfop/api/otherenergies/cool/event";
import { $ConductorInfo } from "@package/com/denfop/api/energy/networking";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $Tuple } from "@package/net/minecraft/util";
export * as event from "@package/com/denfop/api/otherenergies/cool/event";

declare module "@package/com/denfop/api/otherenergies/cool" {
    export class $EventHandler {
        tick(arg0: $LevelTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        onEnergyTileLoad(arg0: $CoolTileLoadEvent): void;
        onEnergyTileUnload(arg0: $CoolTileUnloadEvent): void;
        constructor();
    }
    export class $InfoCable {
        getFacing(): $Direction;
        getConductor(): $ICoolConductor;
        getPrev(): $InfoCable;
        constructor(arg0: $ICoolConductor, arg1: $Direction_, arg2: $InfoCable);
        get facing(): $Direction;
        get conductor(): $ICoolConductor;
        get prev(): $InfoCable;
    }
    export class $CoolNet {
        static instance: $ICoolNet;
        constructor();
    }
    export class $CoolNetGlobal implements $ICoolNet {
        static initialize(): $CoolNetGlobal;
        static onTickEnd(arg0: $Level_): void;
        static onWorldUnload(arg0: $Level_): void;
        static getForWorld(arg0: $Level_): $CoolNetLocal;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $ICoolTile;
        constructor();
    }
    export class $ICoolSource {
    }
    export interface $ICoolSource extends $ICoolEmitter {
        isAllowed(): boolean;
        getOfferedCool(): number;
        setAllowed(arg0: boolean): void;
        get offeredCool(): number;
    }
    export class $ICoolConductor {
    }
    export interface $ICoolConductor extends $ICoolAcceptor, $ICoolEmitter {
        getCoolConductor(): $ConductorInfo;
        setCoolCable(arg0: $InfoCable): void;
        update_render(): void;
        getCoolCable(): $InfoCable;
        removeConductor(): void;
        getConductorBreakdownCold(): number;
        get coolConductor(): $ConductorInfo;
        get conductorBreakdownCold(): number;
    }
    export class $CoolTick<T, E> {
        getList(): $List<E>;
        getSource(): T;
        setList(arg0: $List_<E>): void;
        getConductors(): $LinkedList<$ICoolConductor>;
        setConductors(arg0: $LinkedList<$ICoolConductor>): void;
        constructor(arg0: T, arg1: $List_<E>);
        get source(): T;
    }
    export class $ICoolTile {
    }
    export interface $ICoolTile {
        hashCode(): number;
        RemoveCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        AddCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        getCoolTiles(): $Map<$Direction, $ICoolTile>;
        getTile(): $BlockEntity;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getCoolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
        get coolTiles(): $Map<$Direction, $ICoolTile>;
        get tile(): $BlockEntity;
        get pos(): $BlockPos;
        set id(value: number);
        get idNetwork(): number;
        get coolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
    }
    export class $Path {
        getMin(): number;
        setMin(arg0: number): void;
        getConductors(): $List<$ConductorInfo>;
        min: number;
        targetDirection: $Direction;
        conductors: $List<$ConductorInfo>;
        target: $ICoolSink;
        constructor(arg0: $ICoolSink, arg1: $Direction_);
    }
    export class $ICoolSink {
    }
    export interface $ICoolSink extends $ICoolAcceptor {
        getEnergyTickList(): $List<$ICoolSource>;
        getDemandedCool(): number;
        receivedCold(arg0: number): void;
        needCooling(): boolean;
        get energyTickList(): $List<$ICoolSource>;
        get demandedCool(): number;
    }
    export class $ICoolAcceptor {
    }
    export interface $ICoolAcceptor extends $ICoolTile {
        acceptsCoolFrom(arg0: $ICoolEmitter, arg1: $Direction_): boolean;
    }
    export class $ICoolItem {
    }
    export interface $ICoolItem {
        getTypeUpgrade(arg0: $ItemStack_): $EnumCoolUpgrade;
    }
    /**
     * Values that may be interpreted as {@link $ICoolItem}.
     */
    export type $ICoolItem_ = ((arg0: $ItemStack) => $EnumCoolUpgrade_);
    export class $CoolNetLocal {
        remove(arg0: $ICoolSource): void;
        removeAll(arg0: $List_<$CoolTick<$ICoolSource, $Path>>): void;
        getSources(arg0: $ICoolAcceptor): $List<$CoolTick<$ICoolSource, $Path>>;
        onTickEnd(): void;
        onUnload(): void;
        getTileEntity(arg0: $BlockPos_): $ICoolTile;
        discover(arg0: $ICoolSource, arg1: $CoolTick<$ICoolSource, $Path>): $Tuple<$List<$Path>, $LinkedList<$ICoolConductor>>;
        getValidReceivers(arg0: $ICoolTile): $List<$InfoTile<$ICoolTile>>;
        addTile(arg0: $ICoolTile, arg1: $BlockEntity): void;
        addTile(arg0: $ICoolTile): void;
        addTileEntity(arg0: $BlockPos_, arg1: $ICoolTile): void;
        removeTile(arg0: $ICoolTile): void;
        onTileEntityAdded(arg0: $ICoolAcceptor): void;
        removeTileEntity(arg0: $ICoolTile): void;
        getTileFromICool(arg0: $ICoolTile): $BlockEntity;
        emitCoolFrom(arg0: $ICoolSource, arg1: number, arg2: $CoolTick<$ICoolSource, $Path>): number;
        emitCoolFromNotAllowed(arg0: $ICoolSource, arg1: number, arg2: $CoolTick<$ICoolSource, $Path>): number;
        remove1(arg0: $ICoolSource): void;
    }
    export class $CoolTickList<T extends $CoolTick<$ICoolSource, $Path>> extends $ArrayList<T> {
        removeSource(arg0: $Object): $CoolTick<$ICoolSource, $Path>;
        constructor();
    }
    export class $ICoolNet {
    }
    export interface $ICoolNet {
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $ICoolTile;
    }
    /**
     * Values that may be interpreted as {@link $ICoolNet}.
     */
    export type $ICoolNet_ = ((arg0: $Level, arg1: $BlockPos) => $ICoolTile);
    export class $EnumCoolUpgrade extends $Enum<$EnumCoolUpgrade> {
        static values(): $EnumCoolUpgrade[];
        static valueOf(arg0: string): $EnumCoolUpgrade;
        getLevel(): number;
        static HYDROGEN: $EnumCoolUpgrade;
        static AZOTE: $EnumCoolUpgrade;
        static HELIUM: $EnumCoolUpgrade;
        get level(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumCoolUpgrade}.
     */
    export type $EnumCoolUpgrade_ = "azote" | "hydrogen" | "helium";
    export class $ICoolEmitter {
    }
    export interface $ICoolEmitter extends $ICoolTile {
        emitsCoolTo(arg0: $ICoolAcceptor, arg1: $Direction_): boolean;
    }
}
