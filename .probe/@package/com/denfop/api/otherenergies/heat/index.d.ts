import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $HeatTileUnloadEvent, $HeatTileLoadEvent } from "@package/com/denfop/api/otherenergies/heat/event";
import { $Object } from "@package/java/lang";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $ArrayList, $List, $Map, $LinkedList, $List_ } from "@package/java/util";
import { $ConductorInfo } from "@package/com/denfop/api/energy/networking";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $Tuple } from "@package/net/minecraft/util";
export * as event from "@package/com/denfop/api/otherenergies/heat/event";

declare module "@package/com/denfop/api/otherenergies/heat" {
    export class $IHeatNet {
    }
    export interface $IHeatNet {
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $IHeatTile;
    }
    /**
     * Values that may be interpreted as {@link $IHeatNet}.
     */
    export type $IHeatNet_ = ((arg0: $Level, arg1: $BlockPos) => $IHeatTile);
    export class $IHeatSource {
    }
    export interface $IHeatSource extends $IHeatEmitter {
        isAllowed(): boolean;
        getOfferedHeat(): number;
        setAllowed(arg0: boolean): boolean;
        drawHeat(arg0: number): void;
        get offeredHeat(): number;
    }
    export class $IHeatEmitter {
    }
    export interface $IHeatEmitter extends $IHeatTile {
        emitsHeatTo(arg0: $IHeatAcceptor, arg1: $Direction_): boolean;
    }
    export class $IHeatTile {
    }
    export interface $IHeatTile {
        hashCode(): number;
        getTile(): $BlockEntity;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getHeatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        AddHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        getHeatTiles(): $Map<$Direction, $IHeatTile>;
        RemoveHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        get tile(): $BlockEntity;
        get pos(): $BlockPos;
        set id(value: number);
        get idNetwork(): number;
        get heatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        get heatTiles(): $Map<$Direction, $IHeatTile>;
    }
    export class $IHeatSink {
    }
    export interface $IHeatSink extends $IHeatAcceptor {
        getEnergyTickList(): $List<$IHeatSource>;
        getDemandedHeat(): number;
        receivedHeat(arg0: number): void;
        needTemperature(): boolean;
        get energyTickList(): $List<$IHeatSource>;
        get demandedHeat(): number;
    }
    export class $HeatTickList<T extends $HeatTick<$IHeatSource, $Path>> extends $ArrayList<T> {
        removeSource(arg0: $Object): $HeatTick<$IHeatSource, $Path>;
        constructor();
    }
    export class $IHeatConductor {
    }
    export interface $IHeatConductor extends $IHeatAcceptor, $IHeatEmitter {
        update_render(): void;
        getConductorBreakdownHeat(): number;
        removeConductor(): void;
        setHeatCable(arg0: $InfoCable): void;
        getHeatConductor(): $ConductorInfo;
        getHeatCable(): $InfoCable;
        get conductorBreakdownHeat(): number;
        get heatConductor(): $ConductorInfo;
    }
    export class $HeatTick<T, E> {
        getList(): $List<E>;
        getSource(): T;
        setList(arg0: $List_<E>): void;
        getConductors(): $LinkedList<$IHeatConductor>;
        setConductors(arg0: $LinkedList<$IHeatConductor>): void;
        constructor(arg0: T, arg1: $List_<E>);
        get source(): T;
    }
    export class $InfoCable {
        getFacing(): $Direction;
        getConductor(): $IHeatConductor;
        getPrev(): $InfoCable;
        constructor(arg0: $IHeatConductor, arg1: $Direction_, arg2: $InfoCable);
        get facing(): $Direction;
        get conductor(): $IHeatConductor;
        get prev(): $InfoCable;
    }
    export class $HeatNet {
        static instance: $IHeatNet;
        constructor();
    }
    export class $Path {
        getMin(): number;
        setMin(arg0: number): void;
        getConductors(): $List<$ConductorInfo>;
        min: number;
        targetDirection: $Direction;
        conductors: $List<$ConductorInfo>;
        target: $IHeatSink;
        constructor(arg0: $IHeatSink, arg1: $Direction_);
    }
    export class $EventHandler {
        tick(arg0: $LevelTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        onEnergyTileLoad(arg0: $HeatTileLoadEvent): void;
        onEnergyTileUnload(arg0: $HeatTileUnloadEvent): void;
        constructor();
    }
    export class $IHeatAcceptor {
    }
    export interface $IHeatAcceptor extends $IHeatTile {
        acceptsHeatFrom(arg0: $IHeatEmitter, arg1: $Direction_): boolean;
    }
    export class $HeatNetLocal {
        remove(arg0: $IHeatSource): void;
        removeAll(arg0: $List_<$HeatTick<$IHeatSource, $Path>>): void;
        getSources(arg0: $IHeatAcceptor): $List<$HeatTick<$IHeatSource, $Path>>;
        onTickEnd(): void;
        onUnload(): void;
        getTileEntity(arg0: $BlockPos_): $IHeatTile;
        discover(arg0: $IHeatSource, arg1: $HeatTick<$IHeatSource, $Path>): $Tuple<$List<$Path>, $LinkedList<$IHeatConductor>>;
        getValidReceivers(arg0: $IHeatTile): $List<$InfoTile<$IHeatTile>>;
        addTile(arg0: $IHeatTile): void;
        addTile(arg0: $IHeatTile, arg1: $BlockEntity): void;
        addTileEntity(arg0: $BlockPos_, arg1: $IHeatTile): void;
        removeTile(arg0: $IHeatTile): void;
        onTileEntityAdded(arg0: $IHeatAcceptor): void;
        removeTileEntity(arg0: $IHeatTile): void;
        emitHeatFrom(arg0: $IHeatSource, arg1: number, arg2: $HeatTick<$IHeatSource, $Path>): void;
        getTileFromIHeat(arg0: $IHeatTile): $BlockEntity;
        emitHeatFromNotAllowed(arg0: $IHeatSource, arg1: number, arg2: $HeatTick<$IHeatSource, $Path>): void;
        remove1(arg0: $IHeatSource): void;
    }
    export class $HeatNetGlobal implements $IHeatNet {
        static initialize(): $HeatNetGlobal;
        static onTickEnd(arg0: $Level_): void;
        static onWorldUnload(arg0: $Level_): void;
        static getForWorld(arg0: $Level_): $HeatNetLocal;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $IHeatTile;
        constructor();
    }
}
