import { $Component_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $BooleanConsumer_, $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $BaseScreenAccessor } from "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Color4I, $ImageIcon, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Iterable_, $Enum, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Key, $KeyModifiers, $MouseButton } from "@package/dev/ftb/mods/ftblibrary/ui/input";
export * as input from "@package/dev/ftb/mods/ftblibrary/ui/input";

declare module "@package/dev/ftb/mods/ftblibrary/ui" {
    export class $ContextMenu extends $ModalPanel implements $PopupMenu {
        setMaxRows(maxRows: number): void;
        getModalPanel(): $ModalPanel;
        hasIcons(): boolean;
        setDrawVerticalSeparators(drawVerticalSeparators: boolean): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        set maxRows(value: number);
        get modalPanel(): $ModalPanel;
        set drawVerticalSeparators(value: boolean);
    }
    export class $Panel extends $Widget {
        add(widget: $Widget): void;
        addAll(list: $Iterable_<$Widget>): void;
        setOffset(flag: boolean): void;
        align(layout: $WidgetLayout_): number;
        getOnlyInteractWithWidgetsInside(): boolean;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getContentHeight(): number;
        clearWidgets(): void;
        drawWidget(graphics: $GuiGraphics, theme: $Theme, widget: $Widget, x: number, y: number, w: number, h: number): void;
        setScrollY(scroll: number): void;
        setScrollX(scroll: number): void;
        isOffset(): boolean;
        addWidgets(): void;
        getWidget(index: number): $Widget;
        getWidgets(): $List<$Widget>;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getScrollX(): number;
        getScrollY(): number;
        setOnlyRenderWidgetsInside(value: boolean): void;
        getOnlyRenderWidgetsInside(): boolean;
        isMouseOverAnyWidget(): boolean;
        isDefaultScrollVertical(): boolean;
        drawOffsetBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getContentWidth(): number;
        setScrollStep(s: number): void;
        refreshWidgets(): void;
        alignWidgets(): void;
        getScrollStep(): number;
        scrollPanel(scroll: number): boolean;
        movePanelScroll(dx: number, dy: number): boolean;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
        get contentHeight(): number;
        get widgets(): $List<$Widget>;
        get mouseOverAnyWidget(): boolean;
        get defaultScrollVertical(): boolean;
        get contentWidth(): number;
    }
    export class $WidgetType extends $Enum<$WidgetType> {
        static values(): $WidgetType[];
        static valueOf(name: string): $WidgetType;
        static mouseOver(mouseOver: boolean): $WidgetType;
        static DISABLED: $WidgetType;
        static MOUSE_OVER: $WidgetType;
        static NORMAL: $WidgetType;
    }
    /**
     * Values that may be interpreted as {@link $WidgetType}.
     */
    export type $WidgetType_ = "normal" | "mouse_over" | "disabled";
    export class $Theme {
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, flags: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, color: $Color4I, flags: number): number;
        drawWidget(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawGui(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        getFont(): $Font;
        drawScrollBarBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawPanelBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        getStringWidth(text: $FormattedText): number;
        getStringWidth(text: string): number;
        getStringWidth(text: $FormattedCharSequence_): number;
        trimStringToWidth(text: string, width: number): string;
        trimStringToWidth(text: $FormattedText, width: number): $FormattedText;
        getContentColor(type: $WidgetType_): $Color4I;
        getFontHeight(): number;
        drawTextBox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawScrollBar(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, vertical: boolean): void;
        drawButton(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        trimStringToWidthReverse(text: string, width: number): string;
        drawContextMenuBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawContainerSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawCheckbox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, selected: boolean, radioButton: boolean): void;
        drawHorizontalTab(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, selected: boolean): void;
        drawCheckboxBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, radioButton: boolean): void;
        getInvertedContentColor(): $Color4I;
        listFormattedStringToWidth(text: $FormattedText, width: number): $List<$FormattedText>;
        static MOUSE_OVER: number;
        static BACKGROUND_SQUARES: $ImageIcon;
        static CENTERED: number;
        static SHADOW: number;
        static CENTERED_V: number;
        static DARK: number;
        static renderDebugBoxes: boolean;
        static UNICODE: number;
        static DEFAULT: $Theme;
        constructor();
        get font(): $Font;
        get fontHeight(): number;
        get invertedContentColor(): $Color4I;
    }
    export class $BaseScreen extends $Panel implements $BaseScreenAccessor {
        getMinecraft(): $Minecraft;
        onInit(): boolean;
        isMouseOver(widget: $Widget): boolean;
        isMouseOver(x: number, y: number, w: number, h: number): boolean;
        shouldCloseOnEsc(): boolean;
        initGui(): void;
        updateGui(mx: number, my: number, pt: number): void;
        openYesNo(title: $Component_, desc: $Component_, callback: $Runnable_): void;
        getTheme(): $Theme;
        onBack(): void;
        onPostInit(): void;
        openContextMenu(menuItems: $List_<$ContextMenuItem>): $ContextMenu;
        openContextMenu(newContextMenu: $ContextMenu): void;
        drawForeground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        usePreviousScreenOnBack(): boolean;
        drawDefaultBackground(graphics: $GuiGraphics): boolean;
        getPrevScreen(): $Screen;
        anyModalPanelOpen(): boolean;
        openYesNoFull(title: $Component_, desc: $Component_, callback: $BooleanConsumer_): void;
        setPreviousScreen(prevScreen: $Screen): void;
        setFocusedWidget(widget: $Widget): void;
        getContextMenu(): ($ModalPanel) | undefined;
        openDropdownMenu(menuItems: $List_<$ContextMenuItem>): $DropDownMenu;
        openDropdownMenu(dropDownMenu: $DropDownMenu): void;
        popModalPanel(): $ModalPanel;
        closeModalPanel(panel: $ModalPanel): void;
        openPopupMenu(popupMenu: $PopupMenu_): void;
        pushModalPanel(modalPanel: $ModalPanel): void;
        shouldRenderBlur(): boolean;
        setRenderBlur(renderBlur: boolean): void;
        onClosedByKey(key: $Key): boolean;
        doesGuiPauseGame(): boolean;
        getMaxZLevel(): number;
        atl$setPrevScreen(arg0: $Screen): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(previousScreen: $Screen);
        constructor();
        get minecraft(): $Minecraft;
        get theme(): $Theme;
        get prevScreen(): $Screen;
        set previousScreen(value: $Screen);
        set focusedWidget(value: $Widget);
        get contextMenu(): ($ModalPanel) | undefined;
        set renderBlur(value: boolean);
        get maxZLevel(): number;
    }
    export class $ModalPanel extends $Panel {
        getExtraZlevel(): number;
        setExtraZlevel(extraZlevel: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
    }
    export class $IScreenWrapper {
    }
    export interface $IScreenWrapper extends $IOpenableScreen {
        closeGui(openPrevScreen: boolean): void;
        openGui(): void;
        getGui(): $BaseScreen;
        get gui(): $BaseScreen;
    }
    /**
     * Values that may be interpreted as {@link $IScreenWrapper}.
     */
    export type $IScreenWrapper_ = (() => $BaseScreen);
    export class $CursorType extends $Enum<$CursorType> {
        static values(): $CursorType[];
        static valueOf(name: string): $CursorType;
        static set(type: $CursorType_): void;
        static VRESIZE: $CursorType;
        static ARROW: $CursorType;
        static CROSSHAIR: $CursorType;
        static IBEAM: $CursorType;
        static HRESIZE: $CursorType;
        static HAND: $CursorType;
    }
    /**
     * Values that may be interpreted as {@link $CursorType}.
     */
    export type $CursorType_ = "arrow" | "ibeam" | "crosshair" | "hand" | "hresize" | "vresize";
    export class $Button extends $Widget {
        setIcon(i: $Icon): $Button;
        setTitle(s: $Component_): $Button;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        onClicked(arg0: $MouseButton): void;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        setForceButtonSize(forceButtonSize: boolean): $Button;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, t: $Component_, i: $Icon);
        constructor(panel: $Panel);
        set icon(value: $Icon);
        set title(value: $Component_);
        set forceButtonSize(value: boolean);
    }
    export class $DropDownMenu extends $ModalPanel implements $PopupMenu {
        setMaxHeightPercent(maxHeightPercent: number): void;
        getModalPanel(): $ModalPanel;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        set maxHeightPercent(value: number);
        get modalPanel(): $ModalPanel;
    }
    export class $IOpenableScreen {
    }
    export interface $IOpenableScreen extends $Runnable {
        run(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        closeGui(openPrevScreen: boolean): void;
        closeGui(): void;
        openGui(): void;
        closeContextMenu(): void;
        openGuiLater(): void;
    }
    /**
     * Values that may be interpreted as {@link $IOpenableScreen}.
     */
    export type $IOpenableScreen_ = (() => void);
    export class $WidgetLayout {
        static VERTICAL: $WidgetLayout;
        static NO_PADDING: $WidgetLayout$Padding;
        static HORIZONTAL: $WidgetLayout;
        static NONE: $WidgetLayout;
    }
    export interface $WidgetLayout {
        align(arg0: $Panel): number;
        getLayoutPadding(): $WidgetLayout$Padding;
        get layoutPadding(): $WidgetLayout$Padding;
    }
    /**
     * Values that may be interpreted as {@link $WidgetLayout}.
     */
    export type $WidgetLayout_ = ((arg0: $Panel) => number);
    export class $PopupMenu {
    }
    export interface $PopupMenu {
        getModalPanel(): $ModalPanel;
        get modalPanel(): $ModalPanel;
    }
    /**
     * Values that may be interpreted as {@link $PopupMenu}.
     */
    export type $PopupMenu_ = (() => $ModalPanel);
    export class $ContextMenuItem implements $Comparable<$ContextMenuItem> {
        compareTo(o: $ContextMenuItem): number;
        isEnabled(): boolean;
        static separator(): $ContextMenuItem;
        getIcon(): $Icon;
        static title(title: $Component_): $ContextMenuItem;
        getTitle(): $Component;
        setEnabled(enabled: boolean): $ContextMenuItem;
        createWidget(panel: $ContextMenu): $Widget;
        static subMenu(title: $Component_, icon: $Icon, subItems: $List_<$ContextMenuItem>): $ContextMenuItem;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        onClicked(button: $Button, panel: $Panel, mouseButton: $MouseButton): void;
        addMouseOverText(list: $TooltipList): void;
        getYesNoText(): $Component;
        isClickable(): boolean;
        setCloseMenu(v: boolean): $ContextMenuItem;
        setYesNoText(s: $Component_): $ContextMenuItem;
        static SEPARATOR: $ContextMenuItem;
        constructor(title: $Component_, icon: $Icon, callback: $Consumer_<$Button>);
        get icon(): $Icon;
        get clickable(): boolean;
        set closeMenu(value: boolean);
    }
    export class $Widget$DrawLayer extends $Enum<$Widget$DrawLayer> {
        static values(): $Widget$DrawLayer[];
        static valueOf(name: string): $Widget$DrawLayer;
        static FOREGROUND: $Widget$DrawLayer;
        static BACKGROUND: $Widget$DrawLayer;
    }
    /**
     * Values that may be interpreted as {@link $Widget$DrawLayer}.
     */
    export type $Widget$DrawLayer_ = "background" | "foreground";
    export class $Widget implements $IScreenWrapper, $Comparable<$Widget> {
        compareTo(widget: $Widget): number;
        isEnabled(): boolean;
        getParent(): $Panel;
        setSize(w: number, h: number): void;
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        tick(): void;
        getCursor(): $CursorType;
        getTitle(): $Component;
        static isKeyDown(key: number): boolean;
        setWidth(v: number): void;
        getWidgetType(): $WidgetType;
        getWindow(): $Window;
        /**
         * @deprecated
         */
        getScreen(): $Window;
        setHeight(v: number): void;
        onClosed(): void;
        static isShiftKeyDown(): boolean;
        isMouseOver(): boolean;
        mouseReleased(button: $MouseButton): void;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        mouseScrolled(scroll: number): boolean;
        keyReleased(key: $Key): void;
        setPos(x: number, y: number): void;
        shouldDraw(): boolean;
        mousePressed(button: $MouseButton): boolean;
        getX(): number;
        keyPressed(key: $Key): boolean;
        charTyped(c: string, modifiers: $KeyModifiers): boolean;
        getMouseX(): number;
        getMouseY(): number;
        getPartialTicks(): number;
        setX(v: number): void;
        setY(v: number): void;
        draw(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getPosX(): number;
        getPosY(): number;
        shouldAddMouseOverText(): boolean;
        isGhostIngredientTarget(ingredient: $Object): boolean;
        acceptGhostIngredient(ingredient: $Object): void;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        mouseDoubleClicked(button: $MouseButton): boolean;
        setPosAndSize(x: number, y: number, w: number, h: number): $Widget;
        addMouseOverText(list: $TooltipList): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        static setClipboardString(string: string): void;
        setDrawLayer(drawLayer: $Widget$DrawLayer_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        playClickSound(): void;
        static getClipboardString(): string;
        static isMouseButtonDown(button: $MouseButton): boolean;
        getDrawLayer(): $Widget$DrawLayer;
        static isCtrlKeyDown(): boolean;
        handleClick(scheme: string, path: string): boolean;
        handleClick(click: string): boolean;
        getGui(): $BaseScreen;
        getIngredientUnderMouse(): ($PositionedIngredient) | undefined;
        closeGui(openPrevScreen: boolean): void;
        openGui(): void;
        run(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        closeGui(): void;
        closeContextMenu(): void;
        openGuiLater(): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(p: $Panel);
        get enabled(): boolean;
        get parent(): $Panel;
        get cursor(): $CursorType;
        get title(): $Component;
        get widgetType(): $WidgetType;
        get window(): $Window;
        get screen(): $Window;
        static get shiftKeyDown(): boolean;
        get mouseOver(): boolean;
        get mouseX(): number;
        get mouseY(): number;
        get partialTicks(): number;
        static get ctrlKeyDown(): boolean;
        get gui(): $BaseScreen;
        get ingredientUnderMouse(): ($PositionedIngredient) | undefined;
    }
}
