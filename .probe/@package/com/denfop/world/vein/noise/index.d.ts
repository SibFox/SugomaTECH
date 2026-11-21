import { $List_, $Map, $Set, $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/denfop/world/vein/noise" {
    export class $PerlinNoiseViewer {
        static createVolcanoClusters(arg0: $RandomSource): $ShellCluster;
        static createClusters(arg0: $RandomSource): $List<$ShellCluster>;
        constructor();
    }
    export class $EDTVoronoi {
        static computeEDTWithLabels(arg0: $List_<$Center>, arg1: number, arg2: number): $EDTVoronoi$Result;
        static collectCenterPixels(arg0: $EDTVoronoi$Result, arg1: number, arg2: number, arg3: $RandomSource, arg4: number): $Map<number, $List<$Pixel>>;
        static fastAssign(arg0: $List_<$Center>, arg1: number, arg2: number, arg3: number, arg4: $RandomSource): $Map<number, $List<$Pixel>>;
        constructor();
    }
    export class $Pixel {
    }
    export class $Point {
        x: number;
        y: number;
        constructor(arg0: number, arg1: number);
    }
    export class $EDTVoronoi$Result {
        distSq: number[][];
        nearestIndex: number[][];
        constructor(arg0: number[][], arg1: number[][]);
    }
    export class $PerlinNoiseViewer$1Pixel {
    }
    export class $ShellCluster {
        grays: $Set<$Point>;
        lightGrays: $Set<$Point>;
        blacks: $Set<$Point>;
        point: $Point;
        constructor();
    }
    export class $PerlinNoise {
        noise(arg0: number, arg1: number): number;
        constructor(arg0: number);
        constructor();
    }
    export class $Center {
    }
}
