import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Object } from "@package/java/lang";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $ArrayList, $List, $Map, $LinkedList, $List_ } from "@package/java/util";
import { $ConductorInfo } from "@package/com/denfop/api/energy/networking";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $PressureTileUnloadEvent, $PressureTileLoadEvent } from "@package/com/denfop/api/otherenergies/pressure/event";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $Tuple } from "@package/net/minecraft/util";
export * as event from "@package/com/denfop/api/otherenergies/pressure/event";

declare module "@package/com/denfop/api/otherenergies/pressure" {
    export class $PressureNetGlobal implements $IPressureNet {
        static initialize(): $PressureNetGlobal;
        static onTickEnd(arg0: $Level_): void;
        static onWorldUnload(arg0: $Level_): void;
        static getForWorld(arg0: $Level_): $PressureNetLocal;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $IPressureTile;
        constructor();
    }
    export class $IPressureEmitter {
    }
    export interface $IPressureEmitter extends $IPressureTile {
        emitsPressureTo(arg0: $IPressureAcceptor, arg1: $Direction_): boolean;
    }
    export class $PressureTickList<T extends $PressureTick<$IPressureSource, $PressurePath>> extends $ArrayList<T> {
        removeSource(arg0: $Object): $PressureTick<$IPressureSource, $PressurePath>;
        constructor();
    }
    export class $IPressureAcceptor {
    }
    export interface $IPressureAcceptor extends $IPressureTile {
        acceptsPressureFrom(arg0: $IPressureEmitter, arg1: $Direction_): boolean;
    }
    export class $IPressureSource {
    }
    export interface $IPressureSource extends $IPressureEmitter {
        isAllowed(): boolean;
        drawPressure(arg0: number): void;
        getOfferedPressure(): number;
        setAllowed(arg0: boolean): boolean;
        get offeredPressure(): number;
    }
    export class $PressureTick<T, E> {
        getList(): $List<E>;
        getSource(): T;
        setList(arg0: $List_<E>): void;
        getConductors(): $LinkedList<$IPressureConductor>;
        setConductors(arg0: $LinkedList<$IPressureConductor>): void;
        constructor(arg0: T, arg1: $List_<E>);
        get source(): T;
    }
    export class $IPressureConductor {
    }
    export interface $IPressureConductor extends $IPressureAcceptor, $IPressureEmitter {
        update_render(): void;
        getConductor(): $ConductorInfo;
        removeConductor(): void;
        getCable(): $InfoCable;
        setCable(arg0: $InfoCable): void;
        get conductor(): $ConductorInfo;
    }
    export class $InfoCable {
        getFacing(): $Direction;
        getConductor(): $IPressureConductor;
        getPrev(): $InfoCable;
        constructor(arg0: $IPressureConductor, arg1: $Direction_, arg2: $InfoCable);
        get facing(): $Direction;
        get conductor(): $IPressureConductor;
        get prev(): $InfoCable;
    }
    export class $EventHandler {
        tick(arg0: $LevelTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        onEnergyTileLoad(arg0: $PressureTileLoadEvent): void;
        onEnergyTileUnload(arg0: $PressureTileUnloadEvent): void;
        constructor();
    }
    export class $PressurePath {
        getConductors(): $List<$ConductorInfo>;
        conductors: $List<$ConductorInfo>;
    }
    export class $IPressureSink {
    }
    export interface $IPressureSink extends $IPressureAcceptor {
        getEnergyTickList(): $List<$IPressureSource>;
        receivedPressure(arg0: number): void;
        needTemperature(): boolean;
        getDemandedPressure(): number;
        get energyTickList(): $List<$IPressureSource>;
        get demandedPressure(): number;
    }
    export class $IPressureNet {
    }
    export interface $IPressureNet {
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $IPressureTile;
    }
    /**
     * Values that may be interpreted as {@link $IPressureNet}.
     */
    export type $IPressureNet_ = ((arg0: $Level, arg1: $BlockPos) => $IPressureTile);
    export class $IPressureTile {
    }
    export interface $IPressureTile {
        getTile(): $BlockEntity;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $IPressureTile>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$IPressureTile>>;
        getIdNetwork(): number;
        RemoveTile(arg0: $IPressureTile, arg1: $Direction_): void;
        AddTile(arg0: $IPressureTile, arg1: $Direction_): void;
        get tile(): $BlockEntity;
        get pos(): $BlockPos;
        set id(value: number);
        get tiles(): $Map<$Direction, $IPressureTile>;
        get validReceivers(): $List<$InfoTile<$IPressureTile>>;
        get idNetwork(): number;
    }
    export class $PressureNetLocal implements $IPressureNet {
        remove(arg0: $IPressureSource): void;
        get(arg0: $IPressureSource): $PressureTick<$IPressureSource, $PressurePath>;
        put(arg0: $IPressureSource, arg1: $List_<$PressurePath>): void;
        clear(): void;
        containsKey(arg0: $PressureTick<$IPressureSource, $PressurePath>): boolean;
        containsKey(arg0: $IPressureSource): boolean;
        removeAll(arg0: $List_<$PressureTick<$IPressureSource, $PressurePath>>): void;
        getSources(arg0: $IPressureAcceptor): $List<$PressureTick<$IPressureSource, $PressurePath>>;
        getPaths(arg0: $IPressureAcceptor): $List<$PressurePath>;
        onTickEnd(): void;
        onUnload(): void;
        discover(arg0: $IPressureSource, arg1: $PressureTick<$IPressureSource, $PressurePath>): $Tuple<$List<$PressurePath>, $LinkedList<$IPressureConductor>>;
        getValidReceivers(arg0: $IPressureTile): $List<$InfoTile<$IPressureTile>>;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $IPressureTile;
        addTileEntity(arg0: $BlockPos_, arg1: $IPressureTile): void;
        removeTile(arg0: $IPressureTile): void;
        emitEnergyFrom(arg0: $IPressureSource, arg1: number, arg2: $PressureTick<$IPressureSource, $PressurePath>): number;
        onTileEntityAdded(arg0: $IPressureAcceptor): void;
        removeTileEntity(arg0: $IPressureTile): void;
        remove1(arg0: $IPressureSource): void;
        constructor();
    }
    export class $PressureNet {
        static instance: $IPressureNet;
        constructor();
    }
}
