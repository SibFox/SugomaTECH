import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockEntityWithoutLevelRenderer, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $BlockEntityRenderDispatcher, $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntityPrimalGasChamber } from "@package/com/denfop/blockentity/mechanism";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
export * as streak from "@package/com/denfop/render/streak";
export * as tank from "@package/com/denfop/render/tank";
export * as steam from "@package/com/denfop/render/steam";
export * as base from "@package/com/denfop/render/base";
export * as panel from "@package/com/denfop/render/panel";
export * as rolling from "@package/com/denfop/render/rolling";
export * as compressor from "@package/com/denfop/render/compressor";
export * as oilquarry from "@package/com/denfop/render/oilquarry";
export * as pump from "@package/com/denfop/render/pump";
export * as water from "@package/com/denfop/render/water";
export * as sintezator from "@package/com/denfop/render/sintezator";
export * as rocketpad from "@package/com/denfop/render/rocketpad";
export * as fluidintegrator from "@package/com/denfop/render/fluidintegrator";
export * as windgenerator from "@package/com/denfop/render/windgenerator";
export * as mini_smeltery from "@package/com/denfop/render/mini_smeltery";
export * as anvil from "@package/com/denfop/render/anvil";
export * as primal_silicon_crystal_handler from "@package/com/denfop/render/primal_silicon_crystal_handler";
export * as fluidheater from "@package/com/denfop/render/fluidheater";
export * as macerator from "@package/com/denfop/render/macerator";
export * as imp_refiner from "@package/com/denfop/render/imp_refiner";
export * as transport from "@package/com/denfop/render/transport";
export * as squeezer from "@package/com/denfop/render/squeezer";
export * as dryer from "@package/com/denfop/render/dryer";
export * as advoilrefiner from "@package/com/denfop/render/advoilrefiner";
export * as stronganvil from "@package/com/denfop/render/stronganvil";
export * as oilrefiner from "@package/com/denfop/render/oilrefiner";
export * as steam_turbine_tank from "@package/com/denfop/render/steam_turbine_tank";
export * as autocollector from "@package/com/denfop/render/autocollector";
export * as primal_laser_polisher from "@package/com/denfop/render/primal_laser_polisher";
export * as apiary from "@package/com/denfop/render/apiary";

declare module "@package/com/denfop/render" {
    export class $PatternItemRenderer extends $BlockEntityWithoutLevelRenderer {
        blockEntityRenderDispatcher: $BlockEntityRenderDispatcher;
        static INSTANCE: $PatternItemRenderer;
        constructor(arg0: $BlockEntityRenderDispatcher, arg1: $EntityModelSet);
    }
    export class $RenderFluidBlock {
        static renderFluid(arg0: $FluidStack_, arg1: $MultiBufferSource_, arg2: $Level_, arg3: $BlockPos_, arg4: $PoseStack, arg5: number, arg6: number, arg7: number): void;
        static renderFluid(arg0: $FluidStack_, arg1: $MultiBufferSource_, arg2: $Level_, arg3: $BlockPos_, arg4: $PoseStack, arg5: number, arg6: number, arg7: number): void;
        static renderFluid(arg0: $FluidStack_, arg1: $MultiBufferSource_, arg2: $Level_, arg3: $BlockPos_, arg4: $PoseStack, arg5: number, arg6: number): void;
        constructor();
    }
    export class $RenderFluidBlock$TickLerp {
    }
    export class $TileEntityRenderGasChamber implements $BlockEntityRenderer<$BlockEntityPrimalGasChamber> {
        render(arg0: $BlockEntityPrimalGasChamber, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityPrimalGasChamber, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityPrimalGasChamber): boolean;
        getRenderBoundingBox(arg0: $BlockEntityPrimalGasChamber): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
