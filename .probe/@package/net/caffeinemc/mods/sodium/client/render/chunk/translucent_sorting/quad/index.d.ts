import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad" {
    export class $TQuad {
        getCenter(): $Vector3fc;
        getFacing(): $ModelQuadFacing;
        getAccurateNormal(): $Vector3fc;
        getAccurateDotProduct(): number;
        getQuantizedDotProduct(): number;
        getExtents(): number[];
        getQuadHash(): number;
        getQuantizedNormal(): $Vector3fc;
        static extentsEqual(arg0: number[], arg1: number[]): boolean;
        extentsEqual(arg0: number[]): boolean;
        useQuantizedFacing(): $ModelQuadFacing;
        getVertexPositions(): number[];
        static extentsIntersect(arg0: $TQuad, arg1: $TQuad): boolean;
        static extentsIntersect(arg0: number[], arg1: number[]): boolean;
        getPackedNormal(): number;
        static VERTEX_EPSILON: number;
        static QUANTIZE_EPSILON: number;
        get center(): $Vector3fc;
        get facing(): $ModelQuadFacing;
        get accurateNormal(): $Vector3fc;
        get accurateDotProduct(): number;
        get quantizedDotProduct(): number;
        get extents(): number[];
        get quadHash(): number;
        get quantizedNormal(): $Vector3fc;
        get vertexPositions(): number[];
        get packedNormal(): number;
    }
}
