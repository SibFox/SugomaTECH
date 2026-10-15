import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f } from "@package/dev/kosmx/playerAnim/core/util";

declare module "@package/dev/kosmx/playerAnim/api/layered" {
    export class $AnimationStack implements $IAnimation {
        isActive(): boolean;
        tick(): void;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        setupAnim(tickDelta: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        get3DTransform(modelName: string, type: $TransformType_, tickDelta: number, value0: $Vec3f): $Vec3f;
        addAnimLayer(priority: number, layer: $IAnimation): void;
        removeLayer(layerLevel: number): boolean;
        removeLayer(layer: $IAnimation): boolean;
        constructor();
        get active(): boolean;
        set upAnim(value: number);
    }
    export class $IAnimation {
    }
    export interface $IAnimation {
        isActive(): boolean;
        tick(): void;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        setupAnim(arg0: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        get3DTransform(arg0: string, arg1: $TransformType_, arg2: number, arg3: $Vec3f): $Vec3f;
        get active(): boolean;
        set upAnim(value: number);
    }
}
