import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntityStrongAnvil } from "@package/com/denfop/blockentity/base";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/stronganvil" {
    export class $RenderItemStrongAnvil implements $BlockEntityRenderer<$BlockEntityStrongAnvil> {
        render(arg0: $BlockEntityStrongAnvil, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityStrongAnvil, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityStrongAnvil): boolean;
        getRenderBoundingBox(arg0: $BlockEntityStrongAnvil): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
