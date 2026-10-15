import { $TimeContext } from "@package/betterdays/time";
import { RegistryTypes, RegistryMarked } from "@special/types";

declare module "@package/betterdays/time/effects" {
    export class $TimeEffect {
    }
    export interface $TimeEffect {
        onTimeTick(arg0: $TimeContext): void;
    }
    /**
     * Values that may be interpreted as {@link $TimeEffect}.
     */
    export type $TimeEffect_ = RegistryTypes.BetterdaysTimeEffect | ((arg0: $TimeContext) => void);
    export interface $TimeEffect extends RegistryMarked<RegistryTypes.BetterdaysTimeEffectTag, RegistryTypes.BetterdaysTimeEffect> {}
}
