import { $EntityModel } from "@package/net/minecraft/client/model";
import { $BlockEntitySteamTankBoiler } from "@package/com/denfop/blockentity/mechanism/steamboiler";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntitySteamStorage } from "@package/com/denfop/blockentity/mechanism/steam";
import { $BlockEntityCreativeSteamStorage } from "@package/com/denfop/blockentity/creative";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/render/steam" {
    export class $TileEntityRenderCreativeSteamStorage implements $BlockEntityRenderer<$BlockEntityCreativeSteamStorage> {
        render(arg0: $BlockEntityCreativeSteamStorage, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityCreativeSteamStorage, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityCreativeSteamStorage): boolean;
        getRenderBoundingBox(arg0: $BlockEntityCreativeSteamStorage): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $TileEntityRenderSteamStorage implements $BlockEntityRenderer<$BlockEntitySteamStorage> {
        render(arg0: $BlockEntitySteamStorage, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntitySteamStorage, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntitySteamStorage): boolean;
        getRenderBoundingBox(arg0: $BlockEntitySteamStorage): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SteamTankBoilerRenderer implements $BlockEntityRenderer<$BlockEntitySteamTankBoiler> {
        render(arg0: $BlockEntitySteamTankBoiler, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntitySteamTankBoiler, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntitySteamTankBoiler): boolean;
        getRenderBoundingBox(arg0: $BlockEntitySteamTankBoiler): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SteamRod<T extends $Entity> extends $EntityModel<T> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: number);
    }
}
