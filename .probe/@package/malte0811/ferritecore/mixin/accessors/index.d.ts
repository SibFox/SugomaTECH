import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getStorage(): $BitSet;
        getXMin(): number;
        getYMin(): number;
        getZMin(): number;
        getXMax(): number;
        getYMax(): number;
        getZMax(): number;
        get storage(): $BitSet;
        get XMin(): number;
        get YMin(): number;
        get ZMin(): number;
        get XMax(): number;
        get YMax(): number;
        get ZMax(): number;
    }
    export class $SliceShapeAccess {
    }
    export interface $SliceShapeAccess extends $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getZSize(): number;
        getYSize(): number;
        getXSize(): number;
        get ZSize(): number;
        get YSize(): number;
        get XSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        getZPoints(): $DoubleList;
        getYPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        setZPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
        set vertices(value: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $SubShapeAccess {
    }
    export interface $SubShapeAccess extends $DiscreteVSAccess {
        getParent(): $DiscreteVoxelShape;
        getStartZ(): number;
        getEndY(): number;
        getEndX(): number;
        getEndZ(): number;
        getStartY(): number;
        getStartX(): number;
        get parent(): $DiscreteVoxelShape;
        get startZ(): number;
        get endY(): number;
        get endX(): number;
        get endZ(): number;
        get startY(): number;
        get startX(): number;
    }
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        setFaces(arg0: $VoxelShape[]): void;
        getFaces(): $VoxelShape[];
        setShape(arg0: $DiscreteVoxelShape): void;
    }
}
