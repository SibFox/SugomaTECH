import { $EntityRenderDispatcher, $LivingEntityRenderer, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ClientBase$PlayerNameTagRenderer, $LivingRendererAccess } from "@package/com/tom/cpm/client";
import { $ETFPlayerSkinHolder, $ETFPlayerTexture } from "@package/traben/entity_texture_features/features/player";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/entity/player" {
    export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> implements $ClientBase$PlayerNameTagRenderer<any>, $LivingRendererAccess, $ETFPlayerSkinHolder {
        scale(livingEntity: $AbstractClientPlayer, poseStack: $PoseStack, partialTickTime: number): void;
        render(entity: $AbstractClientPlayer, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        cpm$renderNameTag(entity: $AbstractClientPlayer, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        renderLeftHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        renderRightHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractClientPlayer): $ResourceLocation;
        getRenderOffset(entity: $AbstractClientPlayer, partialTicks: number): $Vec3;
        md6cde14$immersive_aircraft$getShadowRadius$3(entity: $Entity): number;
        handler$ejl000$notenoughanimations$onCreate(info: $CallbackInfo): void;
        handler$lli000$parcool$onSetupRotationsHead(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$lli000$parcool$onSetupRotationsTail(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        setupRotations(entity: $AbstractClientPlayer, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        handler$khm000$cpm$onRenderRightArmPre(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        handler$khm000$cpm$onGetEntityTexture(arg0: $AbstractClientPlayer, arg1: $CallbackInfoReturnable<any>): void;
        handler$khm000$cpm$onRenderLeftArmPost(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        handler$khm000$cpm$onRenderLeftArmPre(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        handler$khm000$cpm$onRenderRightArmPost(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        md6cde14$playeranimator$getShadowRadius$2(entity: $Entity): number;
        cpm$entityRenderDispatcher(): $EntityRenderDispatcher;
        etf$getETFPlayerTexture(): $ETFPlayerTexture;
        redirect$khm000$cpm$getSkinTex(arg0: $PlayerSkin_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $AbstractClientPlayer, arg5: $ModelPart, arg6: $ModelPart): $ResourceLocation;
        handler$khm000$cpm$onRenderName2(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$kll000$blueprint$moveName(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$khm000$cpm$onRenderName1(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        redirect$khm000$cpm$getArmLayer(arg0: $ResourceLocation_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $AbstractClientPlayer, arg5: $ModelPart, arg6: $ModelPart): $RenderType;
        renderNameTag(entity: $AbstractClientPlayer, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>>;
        shadowStrength: number;
        model: $PlayerModel<$AbstractClientPlayer>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, useSlimModel: boolean);
    }
}
