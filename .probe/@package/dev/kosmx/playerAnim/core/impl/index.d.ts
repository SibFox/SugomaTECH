import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f, $Pair } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/core/impl" {
    export class $AnimationProcessor {
        isActive(): boolean;
        getBend(modelName: string): $Pair<number, number>;
        tick(): void;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        getFirstPersonMode(): $FirstPersonMode;
        get3DTransform(modelName: string, type: $TransformType_, value0: $Vec3f): $Vec3f;
        setTickDelta(tickDelta: number): void;
        isFirstPersonAnimationDisabled(): boolean;
        constructor(animation: $IAnimation);
        get active(): boolean;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get firstPersonMode(): $FirstPersonMode;
        set tickDelta(value: number);
        get firstPersonAnimationDisabled(): boolean;
    }
}
