import { $EntityModel } from "@package/net/minecraft/client/model";
import { $BlockEntityWindTurbineController } from "@package/com/denfop/blockentity/windturbine";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntityWindGenerator } from "@package/com/denfop/blockentity/mechanism/wind";
import { $Enum } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/windgenerator" {
    export class $RotorDamageProfile$BladeGeometry extends $Enum<$RotorDamageProfile$BladeGeometry> {
        static values(): $RotorDamageProfile$BladeGeometry[];
        static valueOf(arg0: string): $RotorDamageProfile$BladeGeometry;
        static CHIPPED: $RotorDamageProfile$BladeGeometry;
        static MISSING: $RotorDamageProfile$BladeGeometry;
        static BROKEN: $RotorDamageProfile$BladeGeometry;
        static FULL: $RotorDamageProfile$BladeGeometry;
        static STUMP: $RotorDamageProfile$BladeGeometry;
    }
    /**
     * Values that may be interpreted as {@link $RotorDamageProfile$BladeGeometry}.
     */
    export type $RotorDamageProfile$BladeGeometry_ = "full" | "chipped" | "broken" | "stump" | "missing";
    export class $WindGeneratorRenderer {
        static rotorModels: $Map<number, $EntityModel<any>>;
        constructor();
    }
    export class $RotorModel extends $EntityModel<$Entity> {
        renderDamagedRotor(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: $RotorDamageProfile, arg5: number, arg6: boolean): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: number);
    }
    export class $KineticGeneratorRenderer implements $BlockEntityRenderer<$BlockEntityWindGenerator> {
        render(arg0: $BlockEntityWindGenerator, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRenderOffScreen(arg0: $BlockEntityWindGenerator): boolean;
        shouldRender(arg0: $BlockEntityWindGenerator, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BlockEntityWindGenerator): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $RotorDamageProfile$BladeRenderState {
        getShade(): number;
        getGeometry(): $RotorDamageProfile$BladeGeometry;
        getTiltX(): number;
        getTiltY(): number;
        hasCrackA(): boolean;
        hasCrackB(): boolean;
        getTiltZ(): number;
        constructor();
        get shade(): number;
        get geometry(): $RotorDamageProfile$BladeGeometry;
        get tiltX(): number;
        get tiltY(): number;
        get tiltZ(): number;
    }
    export class $RotorDamageProfile {
        static resolve(arg0: $BlockEntityWindGenerator): $RotorDamageProfile;
        static resolve(arg0: $BlockEntityWindTurbineController): $RotorDamageProfile;
        getWearTint(): number;
        getCrackTint(): number;
        getBladeWobble(arg0: number, arg1: number, arg2: boolean): number;
        getDamageFraction(): number;
        getDamageLevel(): number;
        getBlade(arg0: number): $RotorDamageProfile$BladeRenderState;
        get wearTint(): number;
        get crackTint(): number;
        get damageFraction(): number;
        get damageLevel(): number;
    }
}
