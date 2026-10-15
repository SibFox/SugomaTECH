import { $ModelPart, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $Map, $List } from "@package/java/util";

declare module "@package/com/orf/gpushift/gpuv2/mixin" {
    export class $ModelPartAccessor {
    }
    export interface $ModelPartAccessor {
        gpushift$getCubes(): $List<$ModelPart$Cube>;
        gpushift$getChildren(): $Map<string, $ModelPart>;
    }
}
