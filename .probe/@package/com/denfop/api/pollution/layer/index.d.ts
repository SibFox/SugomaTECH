import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/com/denfop/api/pollution/layer" {
    export class $EnvironmentalLayerManager$AccumulatedLayerTarget {
    }
    export class $EnvironmentalLayerManager {
        static tick(arg0: $ServerLevel): void;
    }
    export class $EnvironmentalLayerHelper {
        static tryAccumulate(arg0: $ServerLevel, arg1: number, arg2: number, arg3: $Block_, arg4: number, arg5: boolean): boolean;
        static tryAccumulate(arg0: $ServerLevel, arg1: $ChunkPos, arg2: $Block_, arg3: number, arg4: boolean): boolean;
    }
    export class $EnvironmentalLayerManager$VinePlacement {
    }
}
