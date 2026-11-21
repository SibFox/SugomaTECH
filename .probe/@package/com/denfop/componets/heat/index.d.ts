import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IHeatSink, $IHeatEmitter, $IHeatTile, $IHeatAcceptor, $IHeatSource } from "@package/com/denfop/api/otherenergies/heat";
import { $Set_, $List, $Map, $Set } from "@package/java/util";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $BufferEnergy, $HeatComponent } from "@package/com/denfop/componets";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/componets/heat" {
    export class $EnergyNetDelegateSource extends $EnergyNetDelegate implements $IHeatSource {
        isAllowed(): boolean;
        emitsHeatTo(arg0: $IHeatAcceptor, arg1: $Direction_): boolean;
        getOfferedHeat(): number;
        setAllowed(arg0: boolean): boolean;
        drawHeat(arg0: number): void;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $IHeatTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $HeatComponent);
        get offeredHeat(): number;
    }
    export class $EnergyNetDelegate implements $IHeatTile {
        getTile(): $BlockEntity;
        getPos(): $BlockPos;
        setId(arg0: number): void;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getIdNetwork(): number;
        getHeatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        getSourceEnergy(): number;
        setSinkDirections(arg0: $Set_<$Direction_>): void;
        AddHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        acceptsHeatFrom(arg0: $IHeatEmitter, arg1: $Direction_): boolean;
        getHeatTiles(): $Map<$Direction, $IHeatTile>;
        RemoveHeatTile(arg0: $IHeatTile, arg1: $Direction_): void;
        setSourceDirections(arg0: $Set_<$Direction_>): void;
        emitHeatTo(arg0: $IHeatAcceptor, arg1: $Direction_): boolean;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $IHeatTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $HeatComponent);
        get tile(): $BlockEntity;
        get pos(): $BlockPos;
        set id(value: number);
        get idNetwork(): number;
        get heatValidReceivers(): $List<$InfoTile<$IHeatTile>>;
        get sourceEnergy(): number;
        get heatTiles(): $Map<$Direction, $IHeatTile>;
    }
    export class $EnergyNetDelegateSink extends $EnergyNetDelegate implements $IHeatSink {
        getEnergyTickList(): $List<$IHeatSource>;
        getDemandedHeat(): number;
        receivedHeat(arg0: number): void;
        setHeatStored(arg0: number): void;
        needTemperature(): boolean;
        worldPosition: $BlockPos;
        energyConductorMap: $Map<$Direction, $IHeatTile>;
        sendingSidabled: boolean;
        sinkDirections: $Set<$Direction>;
        buffer: $BufferEnergy;
        tick: number;
        hashCodeSource: number;
        receivingDisabled: boolean;
        sourceDirections: $Set<$Direction>;
        constructor(arg0: $HeatComponent);
        get energyTickList(): $List<$IHeatSource>;
        get demandedHeat(): number;
        set heatStored(value: number);
    }
}
