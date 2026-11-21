import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/fuzs/stylisheffects/api/v1/client" {
    export class $MobEffectWidgetContext extends $Record {
        static of(effectInstance: $MobEffectInstance, renderer: $MobEffectWidgetContext$Renderer_, screenSide: $MobEffectWidgetContext$ScreenSide_): $MobEffectWidgetContext;
        renderer(): $MobEffectWidgetContext$Renderer;
        effectInstance(): $MobEffectInstance;
        screenSide(): $MobEffectWidgetContext$ScreenSide;
        constructor(effectInstance: $MobEffectInstance, renderer: $MobEffectWidgetContext$Renderer_, screenSide: $MobEffectWidgetContext$ScreenSide_);
    }
    /**
     * Values that may be interpreted as {@link $MobEffectWidgetContext}.
     */
    export type $MobEffectWidgetContext_ = { effectInstance?: $MobEffectInstance, renderer?: $MobEffectWidgetContext$Renderer_, screenSide?: $MobEffectWidgetContext$ScreenSide_,  } | [effectInstance?: $MobEffectInstance, renderer?: $MobEffectWidgetContext$Renderer_, screenSide?: $MobEffectWidgetContext$ScreenSide_, ];
    export class $MobEffectWidgetContext$Renderer extends $Enum<$MobEffectWidgetContext$Renderer> {
        static values(): $MobEffectWidgetContext$Renderer[];
        static valueOf(name: string): $MobEffectWidgetContext$Renderer;
        isCompact(): boolean;
        static GUI_SMALL: $MobEffectWidgetContext$Renderer;
        static INVENTORY_FULL_SIZE: $MobEffectWidgetContext$Renderer;
        static GUI_COMPACT: $MobEffectWidgetContext$Renderer;
        static INVENTORY_COMPACT: $MobEffectWidgetContext$Renderer;
        static NONE: $MobEffectWidgetContext$Renderer;
        get compact(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectWidgetContext$Renderer}.
     */
    export type $MobEffectWidgetContext$Renderer_ = "none" | "gui_small" | "gui_compact" | "inventory_compact" | "inventory_full_size";
    export class $MobEffectWidgetContext$ScreenSide extends $Enum<$MobEffectWidgetContext$ScreenSide> {
        static values(): $MobEffectWidgetContext$ScreenSide[];
        static valueOf(name: string): $MobEffectWidgetContext$ScreenSide;
        right(): boolean;
        inverse(): $MobEffectWidgetContext$ScreenSide;
        static LEFT: $MobEffectWidgetContext$ScreenSide;
        static RIGHT: $MobEffectWidgetContext$ScreenSide;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectWidgetContext$ScreenSide}.
     */
    export type $MobEffectWidgetContext$ScreenSide_ = "left" | "right";
}
