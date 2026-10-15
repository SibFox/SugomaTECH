import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntityMultiCable } from "@package/com/denfop/blockentity/transport/tiles";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/transport" {
    export class $TileEntityCableRenderer implements $BlockEntityRenderer<$BlockEntityMultiCable> {
        render(arg0: $BlockEntityMultiCable, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityMultiCable, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityMultiCable): boolean;
        getRenderBoundingBox(arg0: $BlockEntityMultiCable): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $DataCable {
        getBakedModel(): $BakedModel;
        getItemStack(): $ItemStack;
        setItemStack(arg0: $ItemStack_): void;
        setBakedModel(arg0: $BakedModel): void;
        getConnect(): number;
        setConnect(arg0: number): void;
        constructor(arg0: number, arg1: $ItemStack_, arg2: $BakedModel);
    }
}
