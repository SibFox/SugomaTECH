import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ICoolAcceptor, $ICoolTile, $ICoolSource, $ICoolSink, $ICoolEmitter } from "@package/com/denfop/api/otherenergies/cool";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Set_, $List, $Map, $Set } from "@package/java/util";
import { $BufferEnergy, $CoolComponent } from "@package/com/denfop/componets";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/componets/cold" {
    export class $EnergyNetDelegateSource extends $EnergyNetDelegate implements $ICoolSource {
        isAllowed(): boolean;
        getOfferedCool(): number;
        setAllowed(arg0: boolean): void;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $ICoolTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $CoolComponent);
        get offeredCool(): number;
    }
    export class $EnergyNetDelegate implements $ICoolTile {
        acceptsCoolFrom(arg0: $ICoolEmitter, arg1: $Direction_): boolean;
        RemoveCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        emitsCoolTo(arg0: $ICoolAcceptor, arg1: $Direction_): boolean;
        AddCoolTile(arg0: $ICoolTile, arg1: $Direction_): void;
        getCoolTiles(): $Map<$Direction, $ICoolTile>;
        getTile(): $BlockEntity;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getSourceEnergy(): number;
        setSinkDirections(arg0: $Set_<$Direction_>): void;
        getCoolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
        setSourceDirections(arg0: $Set_<$Direction_>): void;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $ICoolTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $CoolComponent);
        get coolTiles(): $Map<$Direction, $ICoolTile>;
        get tile(): $BlockEntity;
        get pos(): $BlockPos;
        set id(value: number);
        get idNetwork(): number;
        get sourceEnergy(): number;
        get coolValidReceivers(): $List<$InfoTile<$ICoolTile>>;
    }
    export class $EnergyNetDelegateSink extends $EnergyNetDelegate implements $ICoolSink {
        getEnergyTickList(): $List<$ICoolSource>;
        getDemandedCool(): number;
        receivedCold(arg0: number): void;
        needCooling(): boolean;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $ICoolTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $CoolComponent);
        get energyTickList(): $List<$ICoolSource>;
        get demandedCool(): number;
    }
}
