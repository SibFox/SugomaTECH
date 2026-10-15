import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Dual, $EnergySource, $EnergyEmitter, $EnergySink, $EnergyAcceptor, $EnergyTile } from "@package/com/denfop/api/energy/interfaces";
import { $List, $Map } from "@package/java/util";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/energy/forgeenergy" {
    export class $EnergyForgeSource extends $EnergyForge implements $EnergySource {
        isSource(): boolean;
        extractEnergy(arg0: number): void;
        extractEnergy(arg0: $Direction_, arg1: number): void;
        getSourceTier(): number;
        getSourceTier(arg0: $Direction_): number;
        getPastEnergy(): number;
        emitsEnergyTo(arg0: $EnergyAcceptor, arg1: $Direction_): boolean;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        canExtractEnergy(arg0: $Direction_): number;
        canExtractEnergy(): number;
        constructor(arg0: $BlockEntity);
        get source(): boolean;
        get perEnergy(): number;
    }
    export class $EnergyForgeSink extends $EnergyForge implements $EnergySink {
        acceptsEnergyFrom(arg0: $EnergyEmitter, arg1: $Direction_): boolean;
        isSink(): boolean;
        receiveEnergy(arg0: $Direction_, arg1: number): void;
        receiveEnergy(arg0: number): void;
        getTick(): number;
        getEnergyTickList(): $List<number>;
        getDemandedEnergy(): number;
        getDemandedEnergy(arg0: $Direction_): number;
        getSinkTier(arg0: $Direction_): number;
        getSinkTier(): number;
        addTick(arg0: number): void;
        getPastEnergy(): number;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        constructor(arg0: $BlockEntity);
        get sink(): boolean;
        get tick(): number;
        get energyTickList(): $List<number>;
        get perEnergy(): number;
    }
    export class $EnergyForge implements $EnergyTile {
        getPos(): $BlockPos;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $EnergyTile>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        getStorages(): $Map<$Direction, $IEnergyStorage>;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        isRemovedTile(): boolean;
        constructor(arg0: $BlockEntity);
        get pos(): $BlockPos;
        set id(value: number);
        get tiles(): $Map<$Direction, $EnergyTile>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get storages(): $Map<$Direction, $IEnergyStorage>;
        get removedTile(): boolean;
    }
    export class $EnergyForgeSinkSource extends $EnergyForge implements $Dual {
        acceptsEnergyFrom(arg0: $EnergyEmitter, arg1: $Direction_): boolean;
        isSink(): boolean;
        isSource(): boolean;
        extractEnergy(arg0: $Direction_, arg1: number): void;
        extractEnergy(arg0: number): void;
        receiveEnergy(arg0: $Direction_, arg1: number): void;
        receiveEnergy(arg0: number): void;
        getTick(): number;
        getPerEnergy1(): number;
        getPastEnergy1(): number;
        getEnergyTickList(): $List<number>;
        setPastEnergy1(arg0: number): void;
        addPerEnergy1(arg0: number): void;
        getDemandedEnergy(): number;
        getDemandedEnergy(arg0: $Direction_): number;
        getSourceTier(arg0: $Direction_): number;
        getSourceTier(): number;
        getSinkTier(arg0: $Direction_): number;
        getSinkTier(): number;
        addTick(arg0: number): void;
        getPastEnergy(): number;
        emitsEnergyTo(arg0: $EnergyAcceptor, arg1: $Direction_): boolean;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        canExtractEnergy(arg0: $Direction_): number;
        canExtractEnergy(): number;
        constructor(arg0: $BlockEntity);
        get sink(): boolean;
        get source(): boolean;
        get tick(): number;
        get perEnergy1(): number;
        get energyTickList(): $List<number>;
        get perEnergy(): number;
    }
}
