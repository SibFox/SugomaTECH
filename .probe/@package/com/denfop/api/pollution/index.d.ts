import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ChunkLevel } from "@package/com/denfop/api/pollution/component";
import { $PollutionSoilUnLoadEvent, $PollutionSoilLoadEvent } from "@package/com/denfop/api/pollution/soil";
import { $Map } from "@package/java/util";
import { $EnumWindSide_ } from "@package/com/denfop/api/windsystem";
import { $PollutionAirUnLoadEvent, $PollutionAirLoadEvent } from "@package/com/denfop/api/pollution/air";
import { $PlayerEvent$PlayerChangedDimensionEvent, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Vec2f } from "@package/com/denfop/api/pollution/utils";
import { $PlayerTickEvent$Post, $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
export * as radiation from "@package/com/denfop/api/pollution/radiation";
export * as analyzer from "@package/com/denfop/api/pollution/analyzer";
export * as client from "@package/com/denfop/api/pollution/client";
export * as component from "@package/com/denfop/api/pollution/component";
export * as soil from "@package/com/denfop/api/pollution/soil";
export * as layer from "@package/com/denfop/api/pollution/layer";
export * as air from "@package/com/denfop/api/pollution/air";
export * as utils from "@package/com/denfop/api/pollution/utils";

declare module "@package/com/denfop/api/pollution" {
    export class $PollutionMechanism {
    }
    export interface $PollutionMechanism {
        getChunkPos(): $ChunkPos;
        getPollution(): number;
        get chunkPos(): $ChunkPos;
        get pollution(): number;
    }
    export class $EventHandler {
        onPlayerTick(arg0: $PlayerTickEvent$Post): void;
        onLevelTick(arg0: $LevelTickEvent$Post): void;
        onPlayerLoggedIn(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        onPlayerChangedDimension(arg0: $PlayerEvent$PlayerChangedDimensionEvent): void;
        onPollutionAirLoad(arg0: $PollutionAirLoadEvent): void;
        onPollutionAirUnload(arg0: $PollutionAirUnLoadEvent): void;
        onPollutionSoilUnload(arg0: $PollutionSoilUnLoadEvent): void;
        onPollutionSoilLoad(arg0: $PollutionSoilLoadEvent): void;
        constructor();
    }
    export class $PollutionManager {
        update(arg0: $Player, arg1: number): void;
        update(arg0: $Player): void;
        work(arg0: $Player): void;
        tick(arg0: $Level_): void;
        loadData(arg0: $CompoundTag_): void;
        getVector(arg0: $EnumWindSide_): $Vec2f;
        getChunkLevelSoil(arg0: $ChunkPos): $ChunkLevel;
        getChunkLevelAir(arg0: $ChunkPos): $ChunkLevel;
        addChunkLevelSoil(arg0: $ChunkLevel): void;
        addAirPollutionMechanism(arg0: $PollutionMechanism): void;
        clearSyncedPollution(): void;
        processVegetationDecay(arg0: $ServerLevel): void;
        addSoilPollutionMechanism(arg0: $PollutionMechanism): void;
        getPollutionSoilMap(): $Map<$ChunkPos, $ChunkLevel>;
        removeAirPollutionMechanism(arg0: $PollutionMechanism): void;
        removeSoilPollutionMechanism(arg0: $PollutionMechanism): void;
        writeCompound(): $CompoundTag;
        processSoilTerrain(arg0: $ServerLevel): void;
        getPollutionAirMap(): $Map<$ChunkPos, $ChunkLevel>;
        addChunkLevelAir(arg0: $ChunkLevel): void;
        processLeafDecay(arg0: $ServerLevel): void;
        calculateDistance(arg0: $ChunkPos, arg1: $ChunkPos): number;
        static pollutionManager: $PollutionManager;
        constructor();
        get pollutionSoilMap(): $Map<$ChunkPos, $ChunkLevel>;
        get pollutionAirMap(): $Map<$ChunkPos, $ChunkLevel>;
    }
}
