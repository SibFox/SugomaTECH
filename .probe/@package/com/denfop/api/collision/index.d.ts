import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Set } from "@package/java/util";

declare module "@package/com/denfop/api/collision" {
    export class $MultiCellCollisionShapeHelper$CellCache {
    }
    export class $MultiCellCollisionShapeHelper {
        static buildClippedShapeForCell(arg0: $BlockEntityBase, arg1: $BlockPos_, arg2: $BlockPos_, arg3: boolean): $VoxelShape;
        static collectCoveredCells(arg0: $BlockEntityBase, arg1: $BlockPos_, arg2: boolean): $Set<$BlockPos>;
    }
    export class $MultiCellCollisionShapeHelper$MasterCache {
    }
    export class $IMultiCellCollisionProvider {
    }
    export interface $IMultiCellCollisionProvider {
        useMultiCellCollision(): boolean;
    }
    export class $MultiCellCollisionManager {
        static removeAll(arg0: $Level_, arg1: $BlockPos_): void;
        static refresh(arg0: $Level_, arg1: $BlockPos_): void;
    }
}
