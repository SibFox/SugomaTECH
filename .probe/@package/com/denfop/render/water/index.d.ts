import { $EntityModel } from "@package/net/minecraft/client/model";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntityBaseWaterGenerator } from "@package/com/denfop/blockentity/mechanism/water";
import { $BlockEntityHydroTurbineController } from "@package/com/denfop/blockentity/hydroturbine";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $Enum } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/water" {
    export class $WaterRotorModel extends $EntityModel<$Entity> {
        renderDamagedRotor(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: $WaterRotorDamageProfile, arg5: number, arg6: boolean): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: number);
    }
    export class $WaterRotorDamageProfile$BladeRenderState {
        getShade(): number;
        getOffsetY(): number;
        getGeometry(): $WaterRotorDamageProfile$BladeGeometry;
        getTiltX(): number;
        getTiltY(): number;
        getOffsetZ(): number;
        hasCrackA(): boolean;
        hasCrackB(): boolean;
        getTiltZ(): number;
        constructor();
        get shade(): number;
        get offsetY(): number;
        get geometry(): $WaterRotorDamageProfile$BladeGeometry;
        get tiltX(): number;
        get tiltY(): number;
        get offsetZ(): number;
        get tiltZ(): number;
    }
    export class $WaterGeneratorRenderer implements $BlockEntityRenderer<$BlockEntityBaseWaterGenerator> {
        render(arg0: $BlockEntityBaseWaterGenerator, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRenderOffScreen(arg0: $BlockEntityBaseWaterGenerator): boolean;
        shouldRender(arg0: $BlockEntityBaseWaterGenerator, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BlockEntityBaseWaterGenerator): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $WaterRotorDamageProfile$BladeGeometry extends $Enum<$WaterRotorDamageProfile$BladeGeometry> {
        static values(): $WaterRotorDamageProfile$BladeGeometry[];
        static valueOf(arg0: string): $WaterRotorDamageProfile$BladeGeometry;
        static ERODED: $WaterRotorDamageProfile$BladeGeometry;
        static CHIPPED: $WaterRotorDamageProfile$BladeGeometry;
        static MISSING: $WaterRotorDamageProfile$BladeGeometry;
        static BROKEN: $WaterRotorDamageProfile$BladeGeometry;
        static FULL: $WaterRotorDamageProfile$BladeGeometry;
        static STUMP: $WaterRotorDamageProfile$BladeGeometry;
    }
    /**
     * Values that may be interpreted as {@link $WaterRotorDamageProfile$BladeGeometry}.
     */
    export type $WaterRotorDamageProfile$BladeGeometry_ = "full" | "eroded" | "chipped" | "broken" | "stump" | "missing";
    export class $WaterRotorDamageProfile {
        static resolve(arg0: $BlockEntityBaseWaterGenerator): $WaterRotorDamageProfile;
        static resolve(arg0: $BlockEntityHydroTurbineController): $WaterRotorDamageProfile;
        getWearTint(): number;
        getCrackTint(): number;
        getBladeWobble(arg0: number, arg1: number, arg2: boolean): number;
        getDamageState(): number;
        getDamageFraction(): number;
        getDamageLevel(): number;
        getBlade(arg0: number): $WaterRotorDamageProfile$BladeRenderState;
        get wearTint(): number;
        get crackTint(): number;
        get damageState(): number;
        get damageFraction(): number;
        get damageLevel(): number;
    }
}
