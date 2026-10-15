import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntityImpOilRefiner } from "@package/com/denfop/blockentity/mechanism";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/imp_refiner" {
    export class $TileEntityImpOilRefinerRender implements $BlockEntityRenderer<$BlockEntityImpOilRefiner> {
        render(arg0: $BlockEntityImpOilRefiner, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityImpOilRefiner, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityImpOilRefiner): boolean;
        getRenderBoundingBox(arg0: $BlockEntityImpOilRefiner): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
