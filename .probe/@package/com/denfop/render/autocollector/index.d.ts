import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntityAutoLatexCollector } from "@package/com/denfop/blockentity/mechanism";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/autocollector" {
    export class $TileEntityRenderAutoLatexCollector implements $BlockEntityRenderer<$BlockEntityAutoLatexCollector> {
        render(arg0: $BlockEntityAutoLatexCollector, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityAutoLatexCollector, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityAutoLatexCollector): boolean;
        getRenderBoundingBox(arg0: $BlockEntityAutoLatexCollector): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
