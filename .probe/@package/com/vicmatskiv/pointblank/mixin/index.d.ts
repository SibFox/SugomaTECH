import { $Function } from "@package/java/util/function";
import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $RenderType$CompositeState, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Camera } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $EasingType } from "@package/software/bernie/geckolib/animation";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/vicmatskiv/pointblank/mixin" {
    export class $AnimatableManagerAccessor {
    }
    export interface $AnimatableManagerAccessor {
        setIsFirstTick(arg0: boolean): void;
        set isFirstTick(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AnimatableManagerAccessor}.
     */
    export type $AnimatableManagerAccessor_ = ((arg0: boolean) => void);
    export class $MinecraftAccessorMixin {
    }
    export interface $MinecraftAccessorMixin {
        setMainRenderTarget(arg0: $RenderTarget): void;
        set mainRenderTarget(value: $RenderTarget);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessorMixin}.
     */
    export type $MinecraftAccessorMixin_ = ((arg0: $RenderTarget) => void);
    export class $GameRendererAccessorMixin {
    }
    export interface $GameRendererAccessorMixin {
        getMainCamera(): $Camera;
        invokeRenderItemInHand(arg0: $Camera, arg1: number, arg2: $Matrix4f): void;
        getLightTexture(): $LightTexture;
        invokeGetFov(arg0: $Camera, arg1: number, arg2: boolean): number;
        setRenderDistance(arg0: number): void;
        get mainCamera(): $Camera;
        get lightTexture(): $LightTexture;
        set renderDistance(value: number);
    }
    export class $CompositeRenderTypeAccessor {
    }
    export interface $CompositeRenderTypeAccessor {
        getState(): $RenderType$CompositeState;
        get state(): $RenderType$CompositeState;
    }
    /**
     * Values that may be interpreted as {@link $CompositeRenderTypeAccessor}.
     */
    export type $CompositeRenderTypeAccessor_ = (() => $RenderType$CompositeState);
    export class $StructureTemplatePoolMixin {
    }
    export interface $StructureTemplatePoolMixin {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        get templates(): $ObjectArrayList<$StructurePoolElement>;
    }
    export class $AnimationControllerAccessor {
    }
    export interface $AnimationControllerAccessor {
        justStartedTransition(): boolean;
        getOverrideEasingTypeFunction<T extends $GeoAnimatable>(): $Function<T, $EasingType>;
        setIsJustStarting(arg0: boolean): void;
        get overrideEasingTypeFunction(): $Function<T, $EasingType>;
        set isJustStarting(value: boolean);
    }
}
