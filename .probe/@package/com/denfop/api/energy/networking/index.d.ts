import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $ICoolConductor } from "@package/com/denfop/api/otherenergies/cool";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $SunCoef } from "@package/com/denfop/api/energy/utils";
import { $IHeatConductor } from "@package/com/denfop/api/otherenergies/heat";
import { $EnergyNet, $EnergySource, $EnergyTile, $EnergyConductor, $EnergySink, $EnergyController, $EnergyAcceptor } from "@package/com/denfop/api/energy/interfaces";
import { $List, $Map, $LinkedList, $List_ } from "@package/java/util";
import { $IConductor, $InfoTile, $EnergyType_ } from "@package/com/denfop/api/otherenergies/common";
import { $EnergyTick } from "@package/com/denfop/api/energy";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/com/denfop/api/energy/networking" {
    export class $EnergyNetGlobal implements $EnergyNet {
        update(): void;
        static initialize(): $EnergyNetGlobal;
        getTile(arg0: $Level_, arg1: $BlockPos_): $EnergyTile;
        hasRestrictions(): boolean;
        static onTickEnd(arg0: $Level_): void;
        static onWorldUnload(arg0: $Level_): void;
        getTileEntity(arg0: $Level_, arg1: $BlockPos_): $EnergyTile;
        getTileEntity(arg0: $Level_, arg1: number, arg2: number, arg3: number): $EnergyTile;
        static getForWorld(arg0: $Level_): $EnergyNetLocal;
        static getForWorld(arg0: $ResourceKey_<$Level>): $EnergyNetLocal;
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
        static instance: $EnergyNet;
        static tick: number;
        static EMPTY: $EnergyTile;
        constructor();
        get transformerMode(): boolean;
        get losing(): boolean;
    }
    export class $EnergyNetLocal {
        remove(arg0: $EnergySource): void;
        clear(): void;
        removeAll(arg0: $List_<$EnergyTick>): void;
        getSources(arg0: $EnergyAcceptor): $List<$EnergyTick>;
        getPos(arg0: $EnergyTile): $BlockPos;
        getPaths(arg0: $EnergyAcceptor): $List<$Path>;
        onTickEnd(): void;
        setWorld(arg0: $Level_): void;
        onUnload(): void;
        getTileEntity(arg0: $BlockPos_): $EnergyTile;
        removeController(arg0: $EnergyController): void;
        discover(arg0: $EnergySource, arg1: $EnergyTick): $Tuple<$List<$Path>, $LinkedList<number>>;
        getValidReceiversSubstitute(arg0: $EnergyTile): $List<$InfoTile<$EnergyTile>>;
        getTileFromIEnergy(arg0: $EnergyTile): $BlockEntity;
        getValidReceivers(arg0: $EnergyTile): $List<$InfoTile<$EnergyTile>>;
        getChunkPosListMap(): $Map<$ChunkPos, $List<$EnergySink>>;
        getEnergyPaths(arg0: $EnergyTile): $List<$Path>;
        getNodeStats(arg0: $EnergyTile): $NodeStats;
        getChunkCoordinatesIEnergyTileMap(): $Map<$BlockPos, $EnergyTile>;
        addTile(arg0: $EnergyTile): void;
        addTile(arg0: $EnergyTile, arg1: $BlockEntity): void;
        getSuncoef(): $SunCoef;
        addController(arg0: $EnergyController): void;
        addTileEntity(arg0: $BlockPos_, arg1: $EnergyTile): void;
        removeTile(arg0: $EnergyTile): void;
        emitEnergyFrom(arg0: $EnergySource, arg1: number, arg2: $EnergyTick): number;
        explodeTiles(arg0: $EnergySink): void;
        onTileEntityAdded(arg0: $EnergyAcceptor): void;
        removeTileEntity(arg0: $EnergyTile): void;
        getTotalEnergyEmitted(arg0: $EnergyTile): number;
        getTotalEnergySunken(arg0: $EnergyTile): number;
        onTileEntityRemoved(arg0: $EnergyAcceptor): void;
        remove1(arg0: $EnergySource): void;
        static EMPTY: $EnergyNetLocal;
        set world(value: $Level_);
        get chunkPosListMap(): $Map<$ChunkPos, $List<$EnergySink>>;
        get chunkCoordinatesIEnergyTileMap(): $Map<$BlockPos, $EnergyTile>;
        get suncoef(): $SunCoef;
    }
    export class $NodeStats {
        getEnergyOut(): number;
        getEnergyIn(): number;
        constructor(arg0: number, arg1: number);
        get energyOut(): number;
        get energyIn(): number;
    }
    export class $ConductorInfo {
        getPos(): $BlockPos;
        getEnergy(arg0: number): number;
        addEnergy(arg0: number, arg1: number): void;
        getBreakdownEnergy(): number;
        constructor(arg0: $BlockPos_, arg1: $IHeatConductor);
        constructor(arg0: $BlockPos_, arg1: $ICoolConductor);
        constructor(arg0: $BlockPos_, arg1: $IConductor, arg2: $EnergyType_);
        constructor(arg0: $BlockPos_, arg1: $EnergyConductor);
        get pos(): $BlockPos;
        get breakdownEnergy(): number;
    }
    export class $Path {
        tick(arg0: number, arg1: number): void;
        getMin(): number;
        setMin(arg0: number): void;
        setHasController(arg0: boolean): void;
        getConductorList(): $List<$ConductorInfo>;
        sourceDirection: $Direction;
        target: $EnergySink;
        set hasController(value: boolean);
        get conductorList(): $List<$ConductorInfo>;
    }
}
