import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        defaultCellSetting(): $LayoutSettings;
        spacing(columnSpacing: number): $GridLayout;
        newCellSettings(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        columnSpacing(columnSpacing: number): $GridLayout;
        rowSpacing(columnSpacing: number): $GridLayout;
        width: number;
        height: number;
        constructor();
        constructor(x: number, y: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T): T;
        defaultCellSetting(): $LayoutSettings;
        getGrid(): $GridLayout;
        newCellSettings(): $LayoutSettings;
        this$0: $GridLayout;
        constructor(columns: $GridLayout, arg1: number);
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
        constructor(arg0: $LayoutElement, arg1: $LayoutSettings);
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        setMinHeight(minHeight: number): $FrameLayout;
        setMinWidth(minHeight: number): $FrameLayout;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        newChildLayoutSettings(): $LayoutSettings;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        defaultChildLayoutSetting(): $LayoutSettings;
        children: $List<$FrameLayout$ChildContainer>;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        constructor(width: number, height: number);
        constructor();
        set minHeight(value: number);
        set minWidth(value: number);
    }
    export class $LinearLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        getY(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        defaultCellSetting(): $LayoutSettings;
        spacing(spacing: number): $LinearLayout;
        static horizontal(): $LinearLayout;
        getX(): number;
        newCellSettings(): $LayoutSettings;
        arrangeElements(): void;
        setX(x: number): void;
        setY(x: number): void;
        static vertical(): $LinearLayout;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        wrapped: $GridLayout;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        getX(): number;
        setX(x: number): void;
        setY(x: number): void;
        arrangeElements(): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        getRectangle(): $ScreenRectangle;
        getX(): number;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        setX(x: number): void;
        setY(x: number): void;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
        setSpacing(layout: $GridLayout, spacing: number): void;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        copy(): $LayoutSettings;
        padding(padding: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        paddingVertical(padding: number): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyBottom(): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        static width(height: number): $SpacerElement;
        static height(height: number): $SpacerElement;
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        getX(): number;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setX(x: number): void;
        setY(x: number): void;
        getRectangle(): $ScreenRectangle;
        setPosition(width: number, height: number): void;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        width: number;
        height: number;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        copy(): $LayoutSettings$LayoutSettingsImpl;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(padding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings$LayoutSettingsImpl;
        align(xAlignment: number, yAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        paddingTop(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingBottom(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingVertical(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingRight(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyMiddle(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(other: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        getSecondaryLength(element: $LayoutElement): number;
        getSecondaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        getPrimaryLength(element: $LayoutElement): number;
        getPrimaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        getPrimaryPosition(element: $LayoutElement): number;
        setPrimaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number): void;
        getSecondaryPosition(element: $LayoutElement): number;
        setSecondaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number, length: number): void;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getContentHeight(): number;
        getX(): number;
        arrangeElements(): void;
        setX(footerHeight: number): void;
        setY(footerHeight: number): void;
        addToHeader<T extends $LayoutElement>(child: T): T;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        setHeaderHeight(footerHeight: number): void;
        setFooterHeight(footerHeight: number): void;
        addTitleHeader(message: $Component_, font: $Font): void;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        getFooterHeight(): number;
        getHeaderHeight(): number;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        headerFrame: $FrameLayout;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(screen: $Screen, headerHeight: number, footerHeight: number);
        constructor(screen: $Screen, height: number);
        constructor(screen: $Screen);
        get width(): number;
        get height(): number;
        get contentHeight(): number;
        get rectangle(): $ScreenRectangle;
    }
}
