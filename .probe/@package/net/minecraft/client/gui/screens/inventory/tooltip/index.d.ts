import { $OrderedTextTooltipComponentAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $IExtendedText$TextAlignment_, $IExtendedText, $IExtendedText$TextAlignment } from "@package/com/anthonyhilyard/iceberg/component";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $BundleContents } from "@package/net/minecraft/world/item/component";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $ProfileResult_, $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Enum, $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vector2ic, $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/screens/inventory/tooltip" {
    export class $ClientActivePlayersTooltip$ActivePlayersTooltip extends $Record implements $TooltipComponent {
        profiles(): $List<$ProfileResult>;
        constructor(arg0: $List_<$ProfileResult_>);
    }
    /**
     * Values that may be interpreted as {@link $ClientActivePlayersTooltip$ActivePlayersTooltip}.
     */
    export type $ClientActivePlayersTooltip$ActivePlayersTooltip_ = { profiles?: $List_<$ProfileResult_>,  } | [profiles?: $List_<$ProfileResult_>, ];
    export class $DefaultTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
        static INSTANCE: $ClientTooltipPositioner;
    }
    export class $ClientTooltipPositioner {
    }
    export interface $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
    }
    /**
     * Values that may be interpreted as {@link $ClientTooltipPositioner}.
     */
    export type $ClientTooltipPositioner_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => $Vector2ic);
    export class $ClientBundleTooltip$Texture extends $Enum<$ClientBundleTooltip$Texture> {
        static values(): $ClientBundleTooltip$Texture[];
        static valueOf(arg0: string): $ClientBundleTooltip$Texture;
        static BLOCKED_SLOT: $ClientBundleTooltip$Texture;
        w: number;
        static SLOT: $ClientBundleTooltip$Texture;
        sprite: $ResourceLocation;
        h: number;
    }
    /**
     * Values that may be interpreted as {@link $ClientBundleTooltip$Texture}.
     */
    export type $ClientBundleTooltip$Texture_ = "blocked_slot" | "slot";
    export class $ClientTooltipComponent {
        static create(text: $FormattedCharSequence_): $ClientTooltipComponent;
        static create(visualTooltipComponent: $TooltipComponent): $ClientTooltipComponent;
    }
    export interface $ClientTooltipComponent {
        getWidth(font: $Font): number;
        getHeight(): number;
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        get height(): number;
    }
    export class $BelowOrAboveWidgetTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
        constructor(screenRectangle: $ScreenRectangle_);
    }
    export class $ClientBundleTooltip implements $ClientTooltipComponent {
        getWidth(font: $Font): number;
        getHeight(): number;
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        constructor(contents: $BundleContents);
        get height(): number;
    }
    export class $ClientActivePlayersTooltip implements $ClientTooltipComponent {
        getWidth(font: $Font): number;
        getHeight(): number;
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        constructor(tooltip: $ClientActivePlayersTooltip$ActivePlayersTooltip_);
        get height(): number;
    }
    export class $TooltipRenderUtil {
        static renderTooltipBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static renderTooltipBackground(guiGraphics: $GuiGraphics, x: number, y: number, length: number, z: number, color: number): void;
        static MOUSE_OFFSET: number;
        static PADDING_LEFT: number;
        static PADDING_RIGHT: number;
        static PADDING_TOP: number;
        static PADDING_BOTTOM: number;
        static BORDER_COLOR_TOP: number;
        static BACKGROUND_COLOR: number;
        static BORDER_COLOR_BOTTOM: number;
        constructor();
    }
    export class $MenuTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
        static MAX_OVERLAP_WITH_WIDGET: number;
        static MAX_DISTANCE_TO_WIDGET: number;
        constructor(screenRectangle: $ScreenRectangle_);
    }
    export class $ClientTextTooltip implements $ClientTooltipComponent, $OrderedTextTooltipComponentAccessor, $IExtendedText {
        getWidth(font: $Font): number;
        getHeight(): number;
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        getAlignment(): $IExtendedText$TextAlignment;
        setPadding(left: number, right: number, top: number, bottom: number): void;
        getBottomPadding(): number;
        getRightPadding(): number;
        setAlignment(alignment: $IExtendedText$TextAlignment_): void;
        getTopPadding(): number;
        getLeftPadding(): number;
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        setPadding(left: number, right: number): void;
        setPadding(padding: number): void;
        getText(): $FormattedCharSequence;
        leftPadding: number;
        topPadding: number;
        rightPadding: number;
        currentFont: $Font;
        textAlignment: $IExtendedText$TextAlignment;
        bottomPadding: number;
        text: $FormattedCharSequence;
        constructor(text: $FormattedCharSequence_);
        get height(): number;
    }
}
