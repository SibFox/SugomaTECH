import { $EntityModel } from "@package/net/minecraft/client/model";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockEntitySolarPanel, $BlockEntityMiniPanels } from "@package/com/denfop/blockentity/panels/entity";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/denfop/render/panel" {
    export class $PollutionModel<T extends $Entity> extends $EntityModel<T> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $RandomSource, arg1: number);
    }
    export class $TileEntitySolarPanelRender implements $BlockEntityRenderer<$BlockEntitySolarPanel> {
        render(arg0: $BlockEntitySolarPanel, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntitySolarPanel, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntitySolarPanel): boolean;
        getRenderBoundingBox(arg0: $BlockEntitySolarPanel): $AABB;
        static texture: $ResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $DataPollution {
        getIndex(): number;
        setIndex(arg0: number): void;
        getModel(): $PollutionModel<any>;
        setModel(arg0: $PollutionModel<any>): void;
        constructor(arg0: number, arg1: $PollutionModel<any>);
    }
    export class $ModelCord {
    }
    export class $ModelMiniPanelGlass<T extends $Entity> extends $EntityModel<T> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: number);
    }
    export class $BottomModel<T extends $Entity> extends $EntityModel<T> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: number);
    }
    export class $TileEntityMiniPanelRender implements $BlockEntityRenderer<$BlockEntityMiniPanels> {
        render(arg0: $BlockEntityMiniPanels, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BlockEntityMiniPanels, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlockEntityMiniPanels): boolean;
        getRenderBoundingBox(arg0: $BlockEntityMiniPanels): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
}
