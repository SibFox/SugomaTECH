import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntityAnvil } from "@package/com/denfop/blockentity/base";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/anvil" {
    export class $RenderItemAnvil implements $BlockEntityRenderer<$BlockEntityAnvil> {
        render(arg0: $BlockEntityAnvil, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        renderItem(arg0: $ItemStack_, arg1: $Level_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number): void;
        shouldRender(arg0: $BlockEntityAnvil, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityAnvil): boolean;
        getRenderBoundingBox(arg0: $BlockEntityAnvil): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
