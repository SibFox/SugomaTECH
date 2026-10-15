import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $EnergyTileLoadEvent, $EventLoadController } from "@package/com/denfop/api/energy/event/load";
import { $EnergySource, $EnergyTile as $EnergyTile$1, $EnergyConductor } from "@package/com/denfop/api/energy/interfaces";
import { $EventUnloadController, $EnergyTileUnLoadEvent } from "@package/com/denfop/api/energy/event/unload";
import { $Object } from "@package/java/lang";
import { $IConductor, $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $ArrayList, $List, $Map, $LinkedList, $List_ } from "@package/java/util";
import { $Path } from "@package/com/denfop/api/energy/networking";
import { $LevelEvent$Unload, $LevelEvent } from "@package/net/neoforged/neoforge/event/level";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
export * as forgeenergy from "@package/com/denfop/api/energy/forgeenergy";
export * as networking from "@package/com/denfop/api/energy/networking";
export * as interfaces from "@package/com/denfop/api/energy/interfaces";
export * as utils from "@package/com/denfop/api/energy/utils";
export * as event from "@package/com/denfop/api/energy/event";

declare module "@package/com/denfop/api/energy" {
    export class $PathConductors<T> {
        add(arg0: T): void;
        rework(): void;
        getConductorList(): $List<T>;
        setConductorList(arg0: $List_<T>): void;
        constructor(arg0: $List_<T>);
    }
    export class $EnergyTileEvent extends $LevelEvent {
        tile: $EnergyTile$1;
        constructor(arg0: $EnergyTile$1, arg1: $Level_);
    }
    export class $EnergyTick {
        getList(): $List<$Path>;
        getSource(): $EnergySource;
        tick(): void;
        setList(arg0: $List_<$Path>): void;
        addEnergy(arg0: number): void;
        rework(): void;
        getConductors(): $List<number>;
        isDual(): boolean;
        getAdvSource(): $EnergySource;
        setConductors(arg0: $List_<number>): void;
        isAdv(): boolean;
        hasHash: boolean;
        conductors: $List<number>;
        constructor(arg0: $EnergySource, arg1: $List_<$Path>);
        get source(): $EnergySource;
        get dual(): boolean;
        get advSource(): $EnergySource;
        get adv(): boolean;
    }
    export class $EnergyTile implements $EnergyTile$1 {
        getPos(): $BlockPos;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $EnergyTile$1>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile$1>>;
        getIdNetwork(): number;
        RemoveTile(arg0: $EnergyTile$1, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile$1, arg1: $Direction_): void;
        isRemovedTile(): boolean;
        constructor();
        get pos(): $BlockPos;
        set id(value: number);
        get tiles(): $Map<$Direction, $EnergyTile$1>;
        get validReceivers(): $List<$InfoTile<$EnergyTile$1>>;
        get idNetwork(): number;
        get removedTile(): boolean;
    }
    export class $SystemTick<T, E> {
        getList(): $List<E>;
        getSource(): T;
        setList(arg0: $List_<E>): void;
        getConductors(): $LinkedList<$IConductor>;
        setConductors(arg0: $LinkedList<$IConductor>): void;
        constructor(arg0: T, arg1: $List_<E>);
        get source(): T;
    }
    export class $EventHandler {
        tick(arg0: $LevelTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        onEnergyTileUnLoad(arg0: $EventUnloadController): void;
        onEnergyTileUnLoad(arg0: $EnergyTileUnLoadEvent): void;
        onEnergyTileLoad(arg0: $EnergyTileLoadEvent): void;
        onEnergyTileLoad(arg0: $EventLoadController): void;
        constructor();
    }
    export class $Cable {
        getPos(): $BlockPos;
        getLimit(): number;
        constructor(arg0: $BlockPos_, arg1: number);
        get pos(): $BlockPos;
        get limit(): number;
    }
    export class $InfoCable {
        getFacing(): $Direction;
        getConductor(): $EnergyConductor;
        getPrev(): $InfoCable;
        constructor(arg0: $EnergyConductor, arg1: $Direction_, arg2: $InfoCable);
        get facing(): $Direction;
        get conductor(): $EnergyConductor;
        get prev(): $InfoCable;
    }
    export class $EnergyTickList<T extends $EnergyTick> extends $ArrayList<T> {
        removeSource(arg0: $Object): $EnergyTick;
        constructor();
    }
}
