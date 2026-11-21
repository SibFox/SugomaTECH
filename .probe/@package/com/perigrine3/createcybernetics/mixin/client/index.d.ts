import { $EntityModel } from "@package/net/minecraft/client/model";
import { $MultilineTextField } from "@package/net/minecraft/client/gui/components";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/perigrine3/createcybernetics/mixin/client" {
    export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
        createcybernetics$getModel(): M;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_<T, M> = (() => M);
    export class $MultiLineEditBoxAccessor {
    }
    export interface $MultiLineEditBoxAccessor {
        createCybernetics$getTextField(): $MultilineTextField;
    }
    /**
     * Values that may be interpreted as {@link $MultiLineEditBoxAccessor}.
     */
    export type $MultiLineEditBoxAccessor_ = (() => $MultilineTextField);
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        cc$getMenu(): $AbstractContainerMenu;
        cc$getLeftPos(): number;
        cc$getTopPos(): number;
    }
    export class $ScreenInvoker {
    }
    export interface $ScreenInvoker {
        cc$invokeAddRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
    }
    /**
     * Values that may be interpreted as {@link $ScreenInvoker}.
     */
    export type $ScreenInvoker_ = ((arg0: any) => any);
}
