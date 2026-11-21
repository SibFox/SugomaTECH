import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntitySintezator } from "@package/com/denfop/blockentity/base";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/sintezator" {
    export class $TileEntitySintezatorRenderer implements $BlockEntityRenderer<$BlockEntitySintezator> {
        render(arg0: $BlockEntitySintezator, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntitySintezator, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntitySintezator): boolean;
        getRenderBoundingBox(arg0: $BlockEntitySintezator): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
