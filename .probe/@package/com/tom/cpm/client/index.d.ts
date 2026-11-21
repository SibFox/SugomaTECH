import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";

declare module "@package/com/tom/cpm/client" {
    export class $ClientBase$PlayerNameTagRenderer<E extends $Entity> {
    }
    export interface $ClientBase$PlayerNameTagRenderer<E extends $Entity> {
        cpm$renderNameTag(arg0: E, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        cpm$entityRenderDispatcher(): $EntityRenderDispatcher;
    }
    export class $LivingRendererAccess {
    }
    export interface $LivingRendererAccess {
        cpm$onGetRenderType(arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: $CallbackInfoReturnable<$RenderType>): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingRendererAccess}.
     */
    export type $LivingRendererAccess_ = ((arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: $CallbackInfoReturnable<$RenderType>) => void);
}
