import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $EnumRing_ } from "@package/com/denfop/api/space";
import { $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $SpaceDimensionProfile_, $SpaceBodyRef_ } from "@package/com/denfop/api/space/dimension";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";
import { $Runnable_, $Record } from "@package/java/lang";
import { $Matrix4f } from "@package/org/joml";
import { $RegisterDimensionSpecialEffectsEvent, $ViewportEvent$ComputeFogColor, $ViewportEvent$RenderFog } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/denfop/api/space/dimension/client" {
    export class $SpaceSkyRenderer$RingBand extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceSkyRenderer$RingBand}.
     */
    export type $SpaceSkyRenderer$RingBand_ = { innerScale?: number, alphaScale?: number, green?: number, outerScale?: number, red?: number, blue?: number,  } | [innerScale?: number, alphaScale?: number, green?: number, outerScale?: number, red?: number, blue?: number, ];
    export class $SpaceSkyRenderer$BodyRenderParams extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceSkyRenderer$BodyRenderParams}.
     */
    export type $SpaceSkyRenderer$BodyRenderParams_ = { angularRadiusDeg?: number, priority?: number, ringType?: $EnumRing_, spin?: number, distance?: number, yaw?: number, size?: number, pitch?: number, ringTilt?: number, alpha?: number,  } | [angularRadiusDeg?: number, priority?: number, ringType?: $EnumRing_, spin?: number, distance?: number, yaw?: number, size?: number, pitch?: number, ringTilt?: number, alpha?: number, ];
    export class $SpaceDimensionSpecialEffects extends $DimensionSpecialEffects {
        constructor(arg0: $SpaceDimensionProfile_);
    }
    export class $SpaceSkyRenderer$BodyRenderEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpaceSkyRenderer$BodyRenderEntry}.
     */
    export type $SpaceSkyRenderer$BodyRenderEntry_ = { body?: $SpaceBodyRef_, params?: $SpaceSkyRenderer$BodyRenderParams_,  } | [body?: $SpaceBodyRef_, params?: $SpaceSkyRenderer$BodyRenderParams_, ];
    export class $SpaceClientFogEvents {
        static onComputeFogColor(arg0: $ViewportEvent$ComputeFogColor): void;
        static onRenderFog(arg0: $ViewportEvent$RenderFog): void;
    }
    export class $SpaceSkyRenderer {
        static render(arg0: $SpaceDimensionProfile_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: $PoseStack, arg5: $Camera, arg6: $Matrix4f, arg7: boolean, arg8: $Runnable_): void;
    }
    export class $SpaceClientModEvents {
        static onRegisterSpecialEffects(arg0: $RegisterDimensionSpecialEffectsEvent): void;
    }
}
