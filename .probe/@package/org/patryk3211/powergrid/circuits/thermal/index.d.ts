import { $Consumer_ } from "@package/java/util/function";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $UUID_, $Collection_, $UUID } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $AbstractElectricWire } from "@package/org/patryk3211/powergrid/electricity/sim";

declare module "@package/org/patryk3211/powergrid/circuits/thermal" {
    export class $ThermalBuilder {
        build(): $ThermalUnit;
        addHeatSource(wire: $AbstractElectricWire): $ThermalBuilder;
        setMaxPower(power: number, temperature: number): $ThermalBuilder;
        setMaxCurrent(current: number, resistance: number, temperature: number): $ThermalBuilder;
        setThermalMass(thermalMass: number): $ThermalBuilder;
        setDissipationFactor(dissipationFactor: number): $ThermalBuilder;
        withTemperatureCallback(temperatureCallback: $Consumer_<number>): $ThermalBuilder;
        setOverheatTemperature(overheatTemperature: number): $ThermalBuilder;
        withOverheatCallback(overheatCallback: $Runnable_): $ThermalBuilder;
        constructor(componentUUID: $UUID_, index: number);
        set thermalMass(value: number);
        set dissipationFactor(value: number);
        set overheatTemperature(value: number);
    }
    export class $ThermalUnit {
        getKey(): string;
        write(nbt: $CompoundTag_): void;
        read(nbt: $CompoundTag_): void;
        getId(): $UUID;
        getPosition(): $Vec3;
        tick(dissipationMultiplier: number): void;
        withPosition(position: $Vec3_): $ThermalUnit;
        getTemperature(): number;
        setTemperature(temperature: number): void;
        getOverheatTemperature(): number;
        hasOverheated(): boolean;
        constructor(componentUUID: $UUID_, index: number, thermalMass: number, dissipationFactor: number, overheatTemperature: number, heatSources: $Collection_<$AbstractElectricWire>, temperatureCallback: $Consumer_<number>, overheatCallback: $Runnable_);
        get key(): string;
        get id(): $UUID;
        get position(): $Vec3;
        get overheatTemperature(): number;
    }
    export class $ThermalBuilder$IEmitter {
    }
    export interface $ThermalBuilder$IEmitter {
        builder(): $ThermalBuilder;
    }
    /**
     * Values that may be interpreted as {@link $ThermalBuilder$IEmitter}.
     */
    export type $ThermalBuilder$IEmitter_ = (() => $ThermalBuilder);
}
