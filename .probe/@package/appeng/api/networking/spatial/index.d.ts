import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $IGridService } from "@package/appeng/api/networking";

declare module "@package/appeng/api/networking/spatial" {
    export class $ISpatialService {
    }
    export interface $ISpatialService extends $IGridService {
        requiredPower(): number;
        getLevel(): $Level;
        getMax(): $BlockPos;
        getMin(): $BlockPos;
        isValidRegion(): boolean;
        currentEfficiency(): number;
        hasRegion(): boolean;
        get level(): $Level;
        get max(): $BlockPos;
        get min(): $BlockPos;
        get validRegion(): boolean;
    }
}
