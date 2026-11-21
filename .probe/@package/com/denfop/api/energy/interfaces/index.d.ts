import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Mode, $SunCoef } from "@package/com/denfop/api/energy/utils";
import { $List, $Map } from "@package/java/util";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $NodeStats, $ConductorInfo, $Path } from "@package/com/denfop/api/energy/networking";
import { $InfoCable } from "@package/com/denfop/api/energy";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/energy/interfaces" {
    export class $EnergyTile {
    }
    export interface $EnergyTile {
        getPos(): $BlockPos;
        setId(arg0: number): void;
        getTiles(): $Map<$Direction, $EnergyTile>;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        isRemovedTile(): boolean;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        get pos(): $BlockPos;
        set id(value: number);
        get tiles(): $Map<$Direction, $EnergyTile>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get removedTile(): boolean;
    }
    export class $Transformer {
    }
    export interface $Transformer {
        getinputflow(): number;
        getoutputflow(): number;
        getMode(): $Mode;
        isStepUp(): boolean;
        get inputflow(): number;
        get outputflow(): number;
        get mode(): $Mode;
        get stepUp(): boolean;
    }
    export class $EnergyAcceptor {
    }
    export interface $EnergyAcceptor extends $EnergyTile {
        acceptsEnergyFrom(arg0: $EnergyEmitter, arg1: $Direction_): boolean;
    }
    export class $MultiDual {
    }
    export interface $MultiDual extends $Dual {
    }
    export class $EnergyController {
    }
    export interface $EnergyController extends $EnergyTile {
        unload(): void;
        work(): void;
        getWork(): boolean;
    }
    export class $EnergyEmitter {
    }
    export interface $EnergyEmitter extends $EnergyTile {
        emitsEnergyTo(arg0: $EnergyAcceptor, arg1: $Direction_): boolean;
    }
    export class $Dual {
    }
    export interface $Dual extends $EnergySink, $EnergySource {
        getPerEnergy1(): number;
        getPastEnergy1(): number;
        setPastEnergy1(arg0: number): void;
        addPerEnergy1(arg0: number): void;
        get perEnergy1(): number;
    }
    export class $EnergyConductor {
    }
    export interface $EnergyConductor extends $EnergyAcceptor, $EnergyEmitter {
        getConductionLoss(): number;
        getInfo(): $ConductorInfo;
        getConductorBreakdownEnergy(): number;
        removeConductor(): void;
        getCable(): $InfoCable;
        setCable(arg0: $InfoCable): void;
        get conductionLoss(): number;
        get info(): $ConductorInfo;
        get conductorBreakdownEnergy(): number;
    }
    export class $EnergySource {
    }
    export interface $EnergySource extends $EnergyEmitter {
        isSource(): boolean;
        extractEnergy(arg0: $Direction_, arg1: number): void;
        extractEnergy(arg0: number): void;
        getSourceTier(): number;
        getSourceTier(arg0: $Direction_): number;
        getPastEnergy(): number;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        canExtractEnergy(arg0: $Direction_): number;
        canExtractEnergy(): number;
        get source(): boolean;
        get perEnergy(): number;
    }
    export class $EnergySink {
    }
    export interface $EnergySink extends $EnergyAcceptor {
        isSink(): boolean;
        receiveEnergy(arg0: number): void;
        receiveEnergy(arg0: $Direction_, arg1: number): void;
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
        get sink(): boolean;
        get tick(): number;
        get energyTickList(): $List<number>;
        get perEnergy(): number;
    }
    export class $EnergyNet {
    }
    export interface $EnergyNet {
        update(): void;
        getTile(arg0: $Level_, arg1: $BlockPos_): $EnergyTile;
        hasRestrictions(): boolean;
        getSunCoefficient(arg0: $Level_): $SunCoef;
        getTierFromPower(arg0: number): number;
        getTransformerMode(): boolean;
        needExplosion(): boolean;
        getPowerFromTier(arg0: number): number;
        getChunkPosListMap(arg0: $Level_): $Map<$ChunkPos, $List<$EnergySink>>;
        getEnergyPaths(arg0: $Level_, arg1: $BlockPos_): $List<$Path>;
        needIgnoringTiers(): boolean;
        getNodeStats(arg0: $EnergyTile, arg1: $Level_): $NodeStats;
        getBlockPosFromEnergyTile(arg0: $EnergyTile, arg1: $Level_): $BlockEntity;
        getLosing(): boolean;
        get transformerMode(): boolean;
        get losing(): boolean;
    }
}
