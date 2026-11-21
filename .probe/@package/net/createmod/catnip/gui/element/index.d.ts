import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/catnip/gui/element" {
    export class $FadableScreenElement {
    }
    export interface $FadableScreenElement extends $ScreenElement {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FadableScreenElement}.
     */
    export type $FadableScreenElement_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenElement {
    }
    export interface $ScreenElement {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenElement}.
     */
    export type $ScreenElement_ = ((arg0: $GuiGraphics, arg1: number, arg2: number) => void);
    export class $BoxElement extends $AbstractRenderElement {
        flatBorder<T extends $BoxElement>(arg0: number): T;
        flatBorder<T extends $BoxElement>(arg0: $Color): T;
        gradientBorder<T extends $BoxElement>(arg0: $Color, arg1: $Color): T;
        gradientBorder<T extends $BoxElement>(arg0: $Couple<$Color>): T;
        gradientBorder<T extends $BoxElement>(arg0: number, arg1: number): T;
        withBackground<T extends $BoxElement>(arg0: number): T;
        withBackground<T extends $BoxElement>(arg0: $Color): T;
        withBorderOffset<T extends $BoxElement>(arg0: number): T;
        static COLOR_VANILLA_BACKGROUND: $Color;
        static COLOR_BACKGROUND_TRANSPARENT: $Color;
        static COLOR_BACKGROUND_FLAT: $Color;
        static COLOR_VANILLA_BORDER: $Couple<$Color>;
        static EMPTY: $RenderElement;
        constructor();
    }
}
