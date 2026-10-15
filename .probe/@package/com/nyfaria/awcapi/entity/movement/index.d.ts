import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Vec3i, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $PathType_, $Node } from "@package/net/minecraft/world/level/pathfinder";
import { $Mob } from "@package/net/minecraft/world/entity";

declare module "@package/com/nyfaria/awcapi/entity/movement" {
    export class $IAdvancedPathFindingEntity {
    }
    export interface $IAdvancedPathFindingEntity {
        pathFinderCleanup(): void;
        getPathingMalus(arg0: $BlockGetter, arg1: $Mob, arg2: $PathType_, arg3: $BlockPos_, arg4: $Vec3i, arg5: $Predicate_<$Direction>): number;
        getGroundSide(): $Direction;
        onPathingObstructed(arg0: $Direction_): void;
        getMaxStuckCheckTicks(): number;
        getBridgePathingMalus(arg0: $Mob, arg1: $BlockPos_, arg2: $Node): number;
        get groundSide(): $Direction;
        get maxStuckCheckTicks(): number;
    }
}
