import { $Level_ } from "@package/net/minecraft/world/level";
import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/energy/utils" {
    export class $SunCoef {
        getCoef(): number;
        calculate(): void;
        constructor(arg0: $Level_);
        get coef(): number;
    }
    export class $Mode extends $Enum<$Mode> {
        static values(): $Mode[];
        static valueOf(arg0: string): $Mode;
        static stepdown: $Mode;
        static stepup: $Mode;
        static redstone: $Mode;
    }
    /**
     * Values that may be interpreted as {@link $Mode}.
     */
    export type $Mode_ = "redstone" | "stepdown" | "stepup";
}
