import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Object } from "@package/java/lang";
import { $ArrayList, $List, $Map, $LinkedList, $List_ } from "@package/java/util";
import { $SystemTick } from "@package/com/denfop/api/energy";
import { $NodeStats, $ConductorInfo } from "@package/com/denfop/api/energy/networking";
import { $LevelEvent$Unload, $LevelEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/com/denfop/api/otherenergies/common" {
    export class $EnergyBase {
        static init(): void;
        static getGlobal(arg0: $EnergyType_): $IGlobalNet;
        static handler: $EnergyHandler;
        static positrons: $GlobalNet;
        static biofuel: $GlobalNet;
        static storage: $GlobalNet;
        static ampere: $GlobalNet;
        static SE: $IGlobalNet;
        static globalNetMap: $Map<$EnergyType, $IGlobalNet>;
        static QE: $GlobalNet;
        static listGlobal: $List<$IGlobalNet>;
        static rad: $GlobalNet;
        static NE: $GlobalNet;
        static steam: $GlobalNet;
        static EXP: $GlobalNet;
        constructor();
    }
    export class $ILocalNet {
    }
    export interface $ILocalNet {
        getPaths(arg0: $ISource): $List<$Path>;
        getPaths(arg0: $IAcceptor): $List<$Path>;
        onUnload(): void;
        getTileEntity(arg0: $BlockPos_): $ITile;
        getNodeStats(arg0: $ITile): $NodeStats;
        addTile(arg0: $ITile): void;
        removeTile(arg0: $ITile): void;
        TickEnd(): void;
    }
    export class $SystemTickList<T extends $SystemTick<$ISource, $Path>> extends $ArrayList<T> {
        get(arg0: $Object): T;
        removeSource(arg0: $Object): $SystemTick<$ISource, $Path>;
        constructor();
    }
    export class $IGlobalNet {
    }
    export interface $IGlobalNet {
        getLocalSystem(arg0: $Level_): $ILocalNet;
        getLocalSystem(arg0: $ResourceKey_<$Level>): $ILocalNet;
        onUnload(arg0: $ResourceKey_<$Level>): void;
        getNodeStats(arg0: $ITile, arg1: $Level_): $NodeStats;
        addTile(arg0: $Level_, arg1: $ITile): void;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $ITile;
        getLocalNetMap(): $Map<$ResourceKey<$Level>, $ILocalNet>;
        removeTile(arg0: $Level_, arg1: $ITile): void;
        TickEnd(arg0: $ResourceKey_<$Level>): void;
        get localNetMap(): $Map<$ResourceKey<$Level>, $ILocalNet>;
    }
    export class $ISource {
    }
    export interface $ISource extends $IEmitter {
        isSource(): boolean;
        extractEnergy(arg0: number): void;
        canProvideEnergy(): number;
        getPastEnergy(): number;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        get source(): boolean;
        get perEnergy(): number;
    }
    export class $ISink {
    }
    export interface $ISink extends $IAcceptor {
        receivedEnergy(arg0: number): void;
        isSink(): boolean;
        getTick(): number;
        getEnergyTickList(): $List<$ISource>;
        getDemanded(): number;
        addTick(arg0: number): void;
        getPastEnergy(): number;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        get sink(): boolean;
        get tick(): number;
        get energyTickList(): $List<$ISource>;
        get demanded(): number;
        get perEnergy(): number;
    }
    export class $IAcceptor {
    }
    export interface $IAcceptor extends $ITile {
        acceptsFrom(arg0: $IEmitter, arg1: $Direction_): boolean;
    }
    export class $ITile {
    }
    export interface $ITile {
        getTile(): $BlockEntity;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        getTiles(arg0: $EnergyType_): $Map<$Direction, $ITile>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(arg0: $EnergyType_): $List<$InfoTile<$ITile>>;
        getIdNetwork(): number;
        RemoveTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        AddTile(arg0: $EnergyType_, arg1: $ITile, arg2: $Direction_): void;
        get tile(): $BlockEntity;
        get pos(): $BlockPos;
        set id(value: number);
        get idNetwork(): number;
    }
    export class $InfoCable {
        getFacing(): $Direction;
        getConductor(): $IConductor;
        getPrev(): $InfoCable;
        constructor(arg0: $IConductor, arg1: $Direction_, arg2: $InfoCable);
        get facing(): $Direction;
        get conductor(): $IConductor;
        get prev(): $InfoCable;
    }
    export class $IEmitter {
    }
    export interface $IEmitter extends $ITile {
        emitsTo(arg0: $IAcceptor, arg1: $Direction_): boolean;
    }
    export class $IConductor {
    }
    export interface $IConductor extends $IEmitter, $IAcceptor {
        getInfo(arg0: $EnergyType_): $ConductorInfo;
        getConductorBreakdownEnergy(arg0: $EnergyType_): number;
        removeConductor(): void;
        getEnergies(): $List<$EnergyType>;
        getEnergyType(): $EnergyType;
        hasEnergies(): boolean;
        getCable(arg0: $EnergyType_): $InfoCable;
        setCable(arg0: $EnergyType_, arg1: $InfoCable): void;
        get energies(): $List<$EnergyType>;
        get energyType(): $EnergyType;
    }
    export class $Path {
        tick(arg0: number, arg1: number): void;
        getSink(): $ISink;
        conductorList: $ArrayList<$ConductorInfo>;
        get sink(): $ISink;
    }
    export class $EnergyHandler {
        tick(arg0: $EnergyEvent): void;
        tick(arg0: $LevelEvent$Unload): void;
        tick(arg0: $LevelTickEvent$Post): void;
        constructor();
    }
    export class $EnumTypeEvent extends $Enum<$EnumTypeEvent> {
        static values(): $EnumTypeEvent[];
        static valueOf(arg0: string): $EnumTypeEvent;
        static LOAD: $EnumTypeEvent;
        static UNLOAD: $EnumTypeEvent;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeEvent}.
     */
    export type $EnumTypeEvent_ = "load" | "unload";
    export class $GlobalNet implements $IGlobalNet {
        getLocalSystem(arg0: $ResourceKey_<$Level>): $ILocalNet;
        getLocalSystem(arg0: $Level_): $ILocalNet;
        onUnload(arg0: $ResourceKey_<$Level>): void;
        getNodeStats(arg0: $ITile, arg1: $Level_): $NodeStats;
        addTile(arg0: $Level_, arg1: $ITile): void;
        getSubTile(arg0: $Level_, arg1: $BlockPos_): $ITile;
        getLocalNetMap(): $Map<$ResourceKey<$Level>, $ILocalNet>;
        removeTile(arg0: $Level_, arg1: $ITile): void;
        TickEnd(arg0: $ResourceKey_<$Level>): void;
        constructor(arg0: $EnergyType_);
        get localNetMap(): $Map<$ResourceKey<$Level>, $ILocalNet>;
    }
    export class $IDual {
    }
    export interface $IDual extends $ISink, $ISource {
        addTick1(arg0: number): void;
        getTick1(): number;
        getPerEnergy1(): number;
        getPastEnergy1(): number;
        setPastEnergy1(arg0: number): void;
        addPerEnergy1(arg0: number): void;
        get tick1(): number;
        get perEnergy1(): number;
    }
    export class $EnergyEvent extends $LevelEvent {
        getTile(): $ITile;
        getEvent(): $EnumTypeEvent;
        getEnergyType(): $EnergyType;
        constructor(arg0: $Level_, arg1: $EnumTypeEvent_, arg2: $EnergyType_, arg3: $ITile);
        get tile(): $ITile;
        get event(): $EnumTypeEvent;
        get energyType(): $EnergyType;
    }
    export class $InfoTile<T> {
        tileEntity: T;
        direction: $Direction;
        constructor(arg0: T, arg1: $Direction_);
    }
    export class $LocalNet implements $ILocalNet {
        getTotalEmitted(arg0: $ITile): number;
        getTotalAccepted(arg0: $ITile): number;
        remove(arg0: $ISource): void;
        get(arg0: $ISource): $SystemTick<$ISource, $Path>;
        put(arg0: $ISource, arg1: $List_<$Path>): void;
        clear(): void;
        containsKey(arg0: $ISource): boolean;
        containsKey(arg0: $SystemTick<$ISource, $Path>): boolean;
        removeAll(arg0: $List_<$SystemTick<$ISource, $Path>>): void;
        getSources(arg0: $IAcceptor): $List<$SystemTick<$ISource, $Path>>;
        getPaths(arg0: $IAcceptor): $List<$Path>;
        getPaths(arg0: $ISource): $List<$Path>;
        onUnload(): void;
        getTileEntity(arg0: $BlockPos_): $ITile;
        discover(arg0: $ISource, arg1: $SystemTick<$ISource, $Path>): $Tuple<$List<$Path>, $LinkedList<$IConductor>>;
        getValidReceivers(arg0: $ITile): $List<$InfoTile<$ITile>>;
        getNodeStats(arg0: $ITile): $NodeStats;
        addTile(arg0: $ITile): void;
        addTileEntity(arg0: $BlockPos_, arg1: $ITile): void;
        removeTile(arg0: $ITile): void;
        TickEnd(): void;
        emitEnergyFrom(arg0: $ISource, arg1: number, arg2: $SystemTick<$ISource, $Path>): number;
        onTileEntityAdded(arg0: $IAcceptor): void;
        removeTileEntity(arg0: $ITile): void;
        remove1(arg0: $ISource): void;
        constructor(arg0: $EnergyType_);
    }
    export class $EnergyType extends $Enum<$EnergyType> {
        static values(): $EnergyType[];
        static valueOf(arg0: string): $EnergyType;
        getPrefix(): string;
        isAuto_mode(): boolean;
        isDraw(): boolean;
        static STORAGE: $EnergyType;
        static NIGHT: $EnergyType;
        static QUANTUM: $EnergyType;
        static SOLARIUM: $EnergyType;
        static STEAM: $EnergyType;
        static BIOFUEL: $EnergyType;
        static AMPERE: $EnergyType;
        static EXPERIENCE: $EnergyType;
        static POSITRONS: $EnergyType;
        static RADIATION: $EnergyType;
        get prefix(): string;
        get auto_mode(): boolean;
        get draw(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnergyType}.
     */
    export type $EnergyType_ = "solarium" | "night" | "quantum" | "experience" | "positrons" | "radiation" | "steam" | "biofuel" | "ampere" | "storage";
}
