import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $BlockEntityLiquedTank } from "@package/com/denfop/blockentity/base";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/tank" {
    export class $DataFluid {
        getState(): $BakedModel;
        setState(arg0: $BakedModel): void;
        setFluid(arg0: $Fluid_): void;
        getFluid(): $Fluid;
        constructor(arg0: $Fluid_);
    }
    export class $TileEntityTankRender implements $BlockEntityRenderer<$BlockEntityLiquedTank> {
        render(arg0: $BlockEntityLiquedTank, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityLiquedTank, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityLiquedTank): boolean;
        getRenderBoundingBox(arg0: $BlockEntityLiquedTank): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
