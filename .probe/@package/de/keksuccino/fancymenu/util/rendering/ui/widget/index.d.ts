import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $AbstractSliderButton } from "@package/net/minecraft/client/gui/components";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Runnable_, $Runnable, $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";

declare module "@package/de/keksuccino/fancymenu/util/rendering/ui/widget" {
    export class $UniqueLabeledSwitchCycleButton {
    }
    export interface $UniqueLabeledSwitchCycleButton {
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        setLabeledSwitchComponentLabel_FancyMenu(arg0: $Component_): void;
    }
    export class $CustomizableSlider {
    }
    export interface $CustomizableSlider {
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(arg0: number): void;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        setNineSliceSliderHandleBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        setNineSliceSliderHandleBorderLeft_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderTop_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderRight_FancyMenu(arg0: number): void;
    }
    export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<$CustomizableWidget$CustomBackgroundResetBehavior> {
        static values(): $CustomizableWidget$CustomBackgroundResetBehavior[];
        static valueOf(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_NEVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER_AND_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CustomizableWidget$CustomBackgroundResetBehavior}.
     */
    export type $CustomizableWidget$CustomBackgroundResetBehavior_ = "reset_never" | "reset_on_hover" | "reset_on_unhover" | "reset_on_hover_and_unhover";
    export class $UniqueWidget {
    }
    export interface $UniqueWidget {
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        getWidgetIdentifierFancyMenu(): string;
    }
    export class $CustomizableWidget {
    }
    export interface $CustomizableWidget {
        isHiddenFancyMenu(): boolean;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        setNineSliceBorderRight_FancyMenu(arg0: number): void;
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        getHoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        setNineSliceBorderBottom_FancyMenu(arg0: number): void;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        setUnderlineLabelOnHoverFancyMenu(arg0: boolean): void;
        setNineSliceBorderLeft_FancyMenu(arg0: number): void;
        getHitboxRotationDegreesFancyMenu(): number;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        stopCustomClickSoundFancyMenu(): void;
        getOriginalMessageFancyMenu(): $Component;
        getFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setNineSliceBorderTop_FancyMenu(arg0: number): void;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        resetWidgetCustomizationsFancyMenu(): void;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        stopUnhoverSoundFancyMenu(): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        setCustomYFancyMenu(arg0: number): void;
        getLabelScaleFancyMenu(): number;
        getCustomYFancyMenu(): number;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        getHoverSoundFancyMenu(): $IAudio;
        getCustomLabelFancyMenu(): $Component;
        resolveLabelScaleFancyMenu(): number;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        setLabelScaleFancyMenu(arg0: number): void;
        setCustomWidthFancyMenu(arg0: number): void;
        setLabelShadowFancyMenu(arg0: boolean): void;
        isLabelShadowFancyMenu(): boolean;
        getLastFocusStateFancyMenu(): boolean;
        setCustomHeightFancyMenu(arg0: number): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        getCustomXFancyMenu(): number;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        setCustomXFancyMenu(arg0: number): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getHoverLabelFancyMenu(): $Component;
        getUnhoverSoundFancyMenu(): $IAudio;
        getLastHoverStateFancyMenu(): boolean;
        stopHoverSoundFancyMenu(): void;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        resetWidgetSizeAndPositionFancyMenu(): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        getResetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        getHoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        setHiddenFancyMenu(arg0: boolean): void;
        set nineSliceBorderY_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        get hoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceBorderBottom_FancyMenu(value: number);
        set nineSliceBorderLeft_FancyMenu(value: number);
        get hitboxRotationDegreesFancyMenu(): number;
        get originalMessageFancyMenu(): $Component;
        get focusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceBorderX_FancyMenu(value: number);
        set nineSliceBorderTop_FancyMenu(value: number);
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get resetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get hoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
    }
}
