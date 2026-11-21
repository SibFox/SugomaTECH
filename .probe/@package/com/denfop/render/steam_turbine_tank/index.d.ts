import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntityBaseSteamTurbineTank } from "@package/com/denfop/blockentity/mechanism/steamturbine/tank";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/steam_turbine_tank" {
    export class $TileEntityRenderSteamTurbineTank implements $BlockEntityRenderer<$BlockEntityBaseSteamTurbineTank> {
        render(arg0: $BlockEntityBaseSteamTurbineTank, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityBaseSteamTurbineTank, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityBaseSteamTurbineTank): boolean;
        getRenderBoundingBox(arg0: $BlockEntityBaseSteamTurbineTank): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
