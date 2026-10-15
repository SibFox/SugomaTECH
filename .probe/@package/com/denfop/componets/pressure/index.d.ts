import { $IPressureTile, $IPressureSink, $IPressureEmitter, $IPressureAcceptor, $IPressureSource } from "@package/com/denfop/api/otherenergies/pressure";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $List, $Map, $Set } from "@package/java/util";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $BufferEnergy, $PressureComponent } from "@package/com/denfop/componets";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/componets/pressure" {
    export class $EnergyNetDelegateSource extends $EnergyNetDelegate implements $IPressureSource {
        isAllowed(): boolean;
        getSourceTier(): number;
        drawPressure(arg0: number): void;
        getOfferedPressure(): number;
        setAllowed(arg0: boolean): boolean;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $IPressureTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $PressureComponent);
        get sourceTier(): number;
        get offeredPressure(): number;
    }
    export class $EnergyNetDelegateSink extends $EnergyNetDelegate implements $IPressureSink {
        getEnergyTickList(): $List<$IPressureSource>;
        getSinkTier(): number;
        receivedPressure(arg0: number): void;
        setPressureStored(arg0: number): void;
        needTemperature(): boolean;
        getDemandedPressure(): number;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $IPressureTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $PressureComponent);
        get energyTickList(): $List<$IPressureSource>;
        get sinkTier(): number;
        set pressureStored(value: number);
        get demandedPressure(): number;
    }
    export class $EnergyNetDelegate implements $IPressureTile {
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
        getSinkDirs(): $Set<$Direction>;
        getSourceDirs(): $Set<$Direction>;
        emitsPressureTo(arg0: $IPressureAcceptor, arg1: $Direction_): boolean;
        acceptsPressureFrom(arg0: $IPressureEmitter, arg1: $Direction_): boolean;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $IPressureTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $PressureComponent);
        get tile(): $BlockEntity;
        get pos(): $BlockPos;
        set id(value: number);
        get tiles(): $Map<$Direction, $IPressureTile>;
        get validReceivers(): $List<$InfoTile<$IPressureTile>>;
        get idNetwork(): number;
        get sinkDirs(): $Set<$Direction>;
        get sourceDirs(): $Set<$Direction>;
    }
}
