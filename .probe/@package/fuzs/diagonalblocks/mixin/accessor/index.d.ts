import { $Direction$Axis_ } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/fuzs/diagonalblocks/mixin/accessor" {
    export class $VoxelShapeAccessor {
    }
    export interface $VoxelShapeAccessor {
        diagonalfences$getShape(): $DiscreteVoxelShape;
        diagonalfences$setShape(arg0: $DiscreteVoxelShape): void;
        diagonalfences$callGetCoords(arg0: $Direction$Axis_): $DoubleList;
    }
}
