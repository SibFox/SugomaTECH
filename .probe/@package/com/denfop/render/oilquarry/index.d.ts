import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityQuarryVein } from "@package/com/denfop/blockentity/base";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/oilquarry" {
    export class $DataBlock {
        getState(): $BakedModel;
        setState(arg0: $BakedModel): void;
        getBlockState(): $BlockState;
        setBlockState(arg0: $BlockState_): void;
        constructor(arg0: $BlockState_);
    }
    export class $QuarryOilRenderer implements $BlockEntityRenderer<$BlockEntityQuarryVein> {
        render(arg0: $BlockEntityQuarryVein, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityQuarryVein, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityQuarryVein): boolean;
        getRenderBoundingBox(arg0: $BlockEntityQuarryVein): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
