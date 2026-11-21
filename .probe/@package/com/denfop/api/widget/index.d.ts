import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $FluidStack_, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $List_ } from "@package/java/util";
import { $Supplier, $Supplier_ } from "@package/com/google/common/base";
import { $Fluids$InternalFluidTank, $EnumTypeStyle_, $EnumTypeStyle } from "@package/com/denfop/componets";
import { $Supplier_ as $Supplier_$1 } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ScreenIndustrialUpgrade } from "@package/com/denfop/screen";

declare module "@package/com/denfop/api/widget" {
    export class $TanksWidget extends $ScreenWidget {
        static createNormal(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $List_<$Fluids$InternalFluidTank>): $TanksWidget;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static v: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
    }
    export class $ImageInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ScrollDirection extends $Enum<$ScrollDirection> {
        static values(): $ScrollDirection[];
        static valueOf(arg0: string): $ScrollDirection;
        static stopped: $ScrollDirection;
        multiplier: number;
        static up: $ScrollDirection;
        static down: $ScrollDirection;
    }
    /**
     * Values that may be interpreted as {@link $ScrollDirection}.
     */
    export type $ScrollDirection_ = "stopped" | "up" | "down";
    export class $ScreenWidget extends $AbstractWidget {
        contains(arg0: number, arg1: number): boolean;
        getType(): $EnumTypeComponent;
        getIndex(): number;
        visible(): boolean;
        getComponent(): $WidgetDefault<never>;
        setIndex(arg0: number): void;
        withTooltip(arg0: $Supplier_<string>): $ScreenWidget;
        withTooltip(arg0: string): $ScreenWidget;
        addY(arg0: number): void;
        buttonClicked(arg0: number, arg1: number): void;
        drawBackground(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        drawForeground(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        setGui(arg0: $ScreenIndustrialUpgrade<never>): void;
        onMouseClick(arg0: number, arg1: number, arg2: $MouseButton_): boolean;
        getGui(): $ScreenIndustrialUpgrade<never>;
        renderBar(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static bindBlockTexture(): void;
        getTooltipProvider(): $Supplier<string>;
        static addLines(arg0: $List_<string>, arg1: string): void;
        static bindCommonTexture2(): void;
        static bindCommonTexture1(): void;
        static bindCommonTexture3(): void;
        static bindCommonTexture4(): void;
        static bindCommonTexture5(): void;
        static bindCommonTexture(): void;
        static getBlockTextureMap(): $TextureAtlas;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $WidgetDefault<never>);
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $EnumTypeComponent_, arg4: $WidgetDefault<never>);
        get type(): $EnumTypeComponent;
        get component(): $WidgetDefault<never>;
        get tooltipProvider(): $Supplier<string>;
        static get blockTextureMap(): $TextureAtlas;
    }
    export class $SpaceMainGreenInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ITypeSlot {
    }
    export interface $ITypeSlot {
        getTypeSlot(): $EnumTypeSlot;
        getTypeSlot(arg0: number): $EnumTypeSlot;
    }
    export class $EnumTypeRender extends $Enum<$EnumTypeRender> {
        static values(): $EnumTypeRender[];
        static valueOf(arg0: string): $EnumTypeRender;
        static UNIQUE: $EnumTypeRender;
        static WIDTH: $EnumTypeRender;
        static HEIGHT: $EnumTypeRender;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeRender}.
     */
    export type $EnumTypeRender_ = "height" | "width" | "unique";
    export class $EmptyWidget {
        constructor();
    }
    export class $ButtonListSliderWidget {
        constructor();
    }
    export class $StorageInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $FluidDefaultWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $FluidStack_);
    }
    export class $SpaceMainRedInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $SliderWidget extends $AbstractWidget {
        handleMouseWheel(arg0: $ScrollDirection_, arg1: number, arg2: number): boolean;
        getSliderPosition(): number;
        setSliderPosition(arg0: number): void;
        setSliderValue(arg0: number, arg1: boolean): void;
        getSliderValue(): number;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        responder: $ButtonListSliderWidget$GuiResponder;
        formatHelper: $SliderWidget$FormatHelper;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        isMouseDown: boolean;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(arg0: $ButtonListSliderWidget$GuiResponder, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: $SliderWidget$FormatHelper_);
        constructor(arg0: $ButtonListSliderWidget$GuiResponder, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: $SliderWidget$FormatHelper_, arg9: number);
    }
    export class $WidgetDefault<T> {
        visible(): boolean;
        getComponent(): T;
        getText(arg0: $ScreenWidget): string;
        drawBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $ScreenWidget): void;
        constructor(arg0: T);
        get component(): T;
    }
    export class $VerticalSliderWidget$FormatHelper {
    }
    export interface $VerticalSliderWidget$FormatHelper {
        getText(arg0: number, arg1: string, arg2: number): string;
    }
    /**
     * Values that may be interpreted as {@link $VerticalSliderWidget$FormatHelper}.
     */
    export type $VerticalSliderWidget$FormatHelper_ = ((arg0: number, arg1: string, arg2: number) => string);
    export class $VerticalSliderWidget extends $AbstractWidget {
        setMin(arg0: number): void;
        setMax(arg0: number): void;
        handleMouseWheel(arg0: $ScrollDirection_, arg1: number, arg2: number): boolean;
        setSliderValue(arg0: number): void;
        getSliderValue(): number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        xOffset: number;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $ButtonListSliderWidget$GuiResponder, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: $VerticalSliderWidget$FormatHelper_, arg9: number);
        set min(value: number);
        set max(value: number);
    }
    export class $TankWidget$TankGuiStyle extends $Enum<$TankWidget$TankGuiStyle> {
        static values(): $TankWidget$TankGuiStyle[];
        static valueOf(arg0: string): $TankWidget$TankGuiStyle;
        static Plain: $TankWidget$TankGuiStyle;
        withBorder: boolean;
        static Borderless: $TankWidget$TankGuiStyle;
        static BorderlessMirrored: $TankWidget$TankGuiStyle;
        mirrorGauge: boolean;
        static Normal: $TankWidget$TankGuiStyle;
        withGauge: boolean;
    }
    /**
     * Values that may be interpreted as {@link $TankWidget$TankGuiStyle}.
     */
    export type $TankWidget$TankGuiStyle_ = "normal" | "borderless" | "borderlessmirrored" | "plain";
    export class $EnumTypeSlot extends $Enum<$EnumTypeSlot> {
        static values(): $EnumTypeSlot[];
        static valueOf(arg0: string): $EnumTypeSlot;
        getHeight(): number;
        getWeight(): number;
        getY(): number;
        getX(): number;
        static FISHING_ROD: $EnumTypeSlot;
        static BUCKET: $EnumTypeSlot;
        static WATER_ROD_PART: $EnumTypeSlot;
        static QUARRY1: $EnumTypeSlot;
        static CROP: $EnumTypeSlot;
        static CATHODE: $EnumTypeSlot;
        static EXP_MODULE: $EnumTypeSlot;
        static WIRELESS: $EnumTypeSlot;
        static PLASM: $EnumTypeSlot;
        static COLOR: $EnumTypeSlot;
        static FERTILIZER: $EnumTypeSlot;
        static SOLARIUM: $EnumTypeSlot;
        static QUARRY: $EnumTypeSlot;
        static WATER_ROTOR: $EnumTypeSlot;
        static EXCHANGE: $EnumTypeSlot;
        static ROD_PART: $EnumTypeSlot;
        static STORAGE_CELL: $EnumTypeSlot;
        static RECIPE_SCHEDULE: $EnumTypeSlot;
        static BATTERY: $EnumTypeSlot;
        static MATTER: $EnumTypeSlot;
        static TUBE: $EnumTypeSlot;
        static CAPACITOR: $EnumTypeSlot;
        static ROTOR_UPGRADE: $EnumTypeSlot;
        static BIT: $EnumTypeSlot;
        static PRIVATE: $EnumTypeSlot;
        static ROTOR: $EnumTypeSlot;
        static ROD_PART1: $EnumTypeSlot;
        static BLOCKS: $EnumTypeSlot;
        static UPGRADE: $EnumTypeSlot;
        static ANODE: $EnumTypeSlot;
        static LIST: $EnumTypeSlot;
        get height(): number;
        get weight(): number;
        get y(): number;
        get x(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeSlot}.
     */
    export type $EnumTypeSlot_ = "bucket" | "list" | "color" | "rotor" | "rotor_upgrade" | "blocks" | "rod_part" | "rod_part1" | "quarry" | "quarry1" | "water_rod_part" | "water_rotor" | "upgrade" | "wireless" | "private" | "cathode" | "anode" | "matter" | "solarium" | "exp_module" | "fishing_rod" | "plasm" | "recipe_schedule" | "fertilizer" | "battery" | "crop" | "tube" | "bit" | "exchange" | "capacitor" | "storage_cell";
    export class $ItemStackWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $Supplier_$1<$ItemStack>);
    }
    export class $AdvancedTooltipWidget extends $TooltipWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $VerticalSliderListWidget$FormatHelper {
    }
    export interface $VerticalSliderListWidget$FormatHelper {
        getText(arg0: number, arg1: string, arg2: number): string;
    }
    /**
     * Values that may be interpreted as {@link $VerticalSliderListWidget$FormatHelper}.
     */
    export type $VerticalSliderListWidget$FormatHelper_ = ((arg0: number, arg1: string, arg2: number) => string);
    export class $IButtonClick {
    }
    export interface $IButtonClick {
        click(arg0: $MouseButton_): void;
    }
    /**
     * Values that may be interpreted as {@link $IButtonClick}.
     */
    export type $IButtonClick_ = ((arg0: $MouseButton) => void);
    export class $ItemStackTooltipWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $Supplier_$1<$ItemStack>, arg4: string);
    }
    export class $ResearchTableInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $IType {
    }
    export interface $IType {
        getStyle(): $EnumTypeStyle;
        get style(): $EnumTypeStyle;
    }
    /**
     * Values that may be interpreted as {@link $IType}.
     */
    export type $IType_ = (() => $EnumTypeStyle_);
    export class $StorageButtonWidget extends $ScreenWidget {
        getText(): string;
        xOffset: number;
        highlighted: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        static button: $ResourceLocation;
        packedFGColor: number;
        hasHighlighted: boolean;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<any>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $BlockEntityBase, arg6: number, arg7: string);
        get text(): string;
    }
    export class $ComponentCustomizeSize {
        getWidth(): number;
        getHeight(): number;
        constructor(arg0: number, arg1: number);
        get width(): number;
        get height(): number;
    }
    export class $MouseButton extends $Enum<$MouseButton> {
        static get(arg0: number): $MouseButton;
        static values(): $MouseButton[];
        static valueOf(arg0: string): $MouseButton;
        static left: $MouseButton;
        static right: $MouseButton;
        id: number;
    }
    /**
     * Values that may be interpreted as {@link $MouseButton}.
     */
    export type $MouseButton_ = "left" | "right";
    export class $ButtonListSliderWidget$GuiResponder {
    }
    export interface $ButtonListSliderWidget$GuiResponder {
        setEntryValue(arg0: number, arg1: boolean): void;
        setEntryValue(arg0: number, arg1: number): void;
        setEntryValue(arg0: number, arg1: string): void;
    }
    export class $VerticalSliderListWidget extends $AbstractWidget {
        setMin(arg0: number): void;
        setMax(arg0: number): void;
        handleMouseWheel(arg0: $ScrollDirection_, arg1: number, arg2: number): boolean;
        setSliderValue(arg0: number): void;
        getSliderValue(): number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        xOffset: number;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $ButtonListSliderWidget$GuiResponder, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: $VerticalSliderListWidget$FormatHelper_, arg9: number);
        set min(value: number);
        set max(value: number);
    }
    export class $SteamInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $TankWidget extends $ScreenWidget {
        static createNormal(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $IFluidTank): $TankWidget;
        static getSafeFluidSprite(arg0: $FluidStack_): $TextureAtlasSprite;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static v: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $IFluidTank);
    }
    export class $ImageScreenWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ItemWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: $Supplier_<$ItemStack>);
    }
    export class $SliderWidget$FormatHelper {
    }
    export interface $SliderWidget$FormatHelper {
        getText(arg0: number, arg1: string, arg2: number): string;
    }
    /**
     * Values that may be interpreted as {@link $SliderWidget$FormatHelper}.
     */
    export type $SliderWidget$FormatHelper_ = ((arg0: number, arg1: string, arg2: number) => string);
    export class $TooltipWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ButtonWidget extends $ScreenWidget {
        getText(): string;
        xOffset: number;
        highlighted: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<any>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $BlockEntityBase, arg6: number, arg7: string);
        get text(): string;
    }
    export class $SpaceMainBlueInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $EnumTypeComponent extends $Enum<$EnumTypeComponent> {
        static values(): $EnumTypeComponent[];
        static valueOf(arg0: string): $EnumTypeComponent;
        isSpace(): boolean;
        getHeight(): number;
        getWeight(): number;
        getY(): number;
        getX(): number;
        getEndY(): number;
        getEndX(): number;
        getY1(): number;
        getX1(): number;
        getRender(): $EnumTypeRender;
        isHasDescription(): boolean;
        isBio(): boolean;
        isSteam(): boolean;
        isNextBar(): boolean;
        static CHECK_MARK: $EnumTypeComponent;
        static STEAM_DEFAULT: $EnumTypeComponent;
        static SOLARIUM_ENERGY_WEIGHT: $EnumTypeComponent;
        static QUANTUM_HEIGHT1: $EnumTypeComponent;
        static WORK_BUTTON: $EnumTypeComponent;
        static NIGHT_PROCESS: $EnumTypeComponent;
        static QUANTUM_ENERGY_HEIGHT: $EnumTypeComponent;
        static BUTTON1: $EnumTypeComponent;
        static PREV: $EnumTypeComponent;
        static FIRE: $EnumTypeComponent;
        static PROCESS: $EnumTypeComponent;
        static BLACK: $EnumTypeComponent;
        static NONE: $EnumTypeComponent;
        static WATER: $EnumTypeComponent;
        static WIND: $EnumTypeComponent;
        static EXP_BUTTON: $EnumTypeComponent;
        static PHOTONIC: $EnumTypeComponent;
        static BIO_MULTI_PROCESS: $EnumTypeComponent;
        static LEFT: $EnumTypeComponent;
        static SOLARIUM_MAKER: $EnumTypeComponent;
        static TOP: $EnumTypeComponent;
        static EXP_HEIGHT: $EnumTypeComponent;
        static HEAT_REACTOR: $EnumTypeComponent;
        static BUTTON: $EnumTypeComponent;
        static FACTORY_PROCESS: $EnumTypeComponent;
        static FRAME: $EnumTypeComponent;
        static IMPROVED: $EnumTypeComponent;
        static FLUID_PART: $EnumTypeComponent;
        static STEAM_MULTI_PROCESS: $EnumTypeComponent;
        static COOL_ENERGY_WEIGHT: $EnumTypeComponent;
        static AMPERE: $EnumTypeComponent;
        static RIGHT: $EnumTypeComponent;
        static RADIATION_PROCESS: $EnumTypeComponent;
        static CANCEL: $EnumTypeComponent;
        static ENERGY_WEIGHT_2: $EnumTypeComponent;
        static ANTIUPGRADE: $EnumTypeComponent;
        static ENERGY_WEIGHT_1: $EnumTypeComponent;
        static LASER_PROCESS: $EnumTypeComponent;
        static POSITRONS: $EnumTypeComponent;
        static PROCESS1: $EnumTypeComponent;
        static PROCESS2: $EnumTypeComponent;
        static SPACE_FLUID: $EnumTypeComponent;
        static DOWN: $EnumTypeComponent;
        static REDSTONE: $EnumTypeComponent;
        static ADV_REACTOR: $EnumTypeComponent;
        static STAMP_PROCESS: $EnumTypeComponent;
        static INFO: $EnumTypeComponent;
        static ENCHANT_PROCESS: $EnumTypeComponent;
        static BIO_FLUID: $EnumTypeComponent;
        static PLUS_BUTTON: $EnumTypeComponent;
        static DEFAULT_REACTOR: $EnumTypeComponent;
        static SPACE_PROGRESS: $EnumTypeComponent;
        static IMP_REACTOR: $EnumTypeComponent;
        static SOUND_BUTTON: $EnumTypeComponent;
        static ENERGY: $EnumTypeComponent;
        static NULL: $EnumTypeComponent;
        static MINUS_BUTTON: $EnumTypeComponent;
        static ENERGY_HEIGHT: $EnumTypeComponent;
        static STORAGE_DEFAULT: $EnumTypeComponent;
        static NIGHT_ENERGY_WEIGHT: $EnumTypeComponent;
        static PER_REACTOR: $EnumTypeComponent;
        static CHANGEMODE: $EnumTypeComponent;
        static ACCEPT: $EnumTypeComponent;
        static SCROLL_UP: $EnumTypeComponent;
        static FLUID_REACTOR: $EnumTypeComponent;
        static OIL: $EnumTypeComponent;
        static GRAPHITE_REACTOR: $EnumTypeComponent;
        static PERFECT: $EnumTypeComponent;
        static ENERGY_HEIGHT_1: $EnumTypeComponent;
        static GAS: $EnumTypeComponent;
        static STEAM_ENERGY_HEIGHT: $EnumTypeComponent;
        static ENERGY_WEIGHT: $EnumTypeComponent;
        static BIO_DEFAULT: $EnumTypeComponent;
        static FLUID_PART7: $EnumTypeComponent;
        static FLUID_PART6: $EnumTypeComponent;
        static NO: $EnumTypeComponent;
        static CIRCLE_BAR: $EnumTypeComponent;
        static FLUID_PART5: $EnumTypeComponent;
        static FLUID_PART4: $EnumTypeComponent;
        static FLUID_PART3: $EnumTypeComponent;
        static FLUID_PART2: $EnumTypeComponent;
        static RAD_1: $EnumTypeComponent;
        static FLUID_PART1: $EnumTypeComponent;
        static QUANTUM_ENERGY_WEIGHT: $EnumTypeComponent;
        static STEAM_PROCESS: $EnumTypeComponent;
        static HEAT: $EnumTypeComponent;
        static NEXT: $EnumTypeComponent;
        static EMPTY: $EnumTypeComponent;
        static FLUID_PART9: $EnumTypeComponent;
        static FLUID_PART8: $EnumTypeComponent;
        static STEAM_PROCESS2: $EnumTypeComponent;
        static SPACE_DEFAULT: $EnumTypeComponent;
        static WHITE: $EnumTypeComponent;
        static FLUIDS_SLOT: $EnumTypeComponent;
        static MULTI_PROCESS: $EnumTypeComponent;
        static STEAM_FLUID: $EnumTypeComponent;
        static ADVANCED: $EnumTypeComponent;
        static HYDRO: $EnumTypeComponent;
        static SPACE_MULTI_PROCESS: $EnumTypeComponent;
        static RAD: $EnumTypeComponent;
        static UPGRADE: $EnumTypeComponent;
        static BIGGEST_FRAME: $EnumTypeComponent;
        static COLD: $EnumTypeComponent;
        static PROGRESS4: $EnumTypeComponent;
        static EXP: $EnumTypeComponent;
        static PROGRESS3: $EnumTypeComponent;
        static DEFAULT: $EnumTypeComponent;
        static SCROLL_DOWN: $EnumTypeComponent;
        static BIG_FRAME: $EnumTypeComponent;
        static GAS_REACTOR: $EnumTypeComponent;
        get space(): boolean;
        get height(): number;
        get weight(): number;
        get y(): number;
        get x(): number;
        get endY(): number;
        get endX(): number;
        get y1(): number;
        get x1(): number;
        get render(): $EnumTypeRender;
        get hasDescription(): boolean;
        get bio(): boolean;
        get steam(): boolean;
        get nextBar(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeComponent}.
     */
    export type $EnumTypeComponent_ = "energy" | "ampere" | "energy_weight_2" | "space_progress" | "energy_weight" | "advanced" | "improved" | "perfect" | "photonic" | "next" | "prev" | "default" | "steam_default" | "steam_fluid" | "bio_default" | "bio_fluid" | "space_default" | "space_fluid" | "space_multi_process" | "multi_process" | "steam_multi_process" | "bio_multi_process" | "cold" | "heat" | "progress3" | "progress4" | "circle_bar" | "exp" | "fluid_part" | "fluid_part1" | "fluid_part2" | "fluid_part3" | "fluid_part4" | "fluid_part5" | "fluid_part6" | "fluid_part7" | "fluid_part9" | "fluid_part8" | "empty" | "hydro" | "wind" | "changemode" | "water" | "solarium_energy_weight" | "night_energy_weight" | "quantum_energy_weight" | "cool_energy_weight" | "sound_button" | "work_button" | "plus_button" | "minus_button" | "process" | "steam_process" | "steam_process2" | "process1" | "process2" | "oil" | "upgrade" | "antiupgrade" | "no" | "left" | "right" | "top" | "down" | "accept" | "cancel" | "scroll_up" | "scroll_down" | "black" | "white" | "redstone" | "rad" | "rad_1" | "energy_weight_1" | "energy_height" | "energy_height_1" | "steam_energy_height" | "quantum_energy_height" | "button" | "fire" | "gas" | "button1" | "frame" | "exp_button" | "big_frame" | "exp_height" | "quantum_height1" | "solarium_maker" | "biggest_frame" | "info" | "laser_process" | "factory_process" | "stamp_process" | "night_process" | "radiation_process" | "enchant_process" | "positrons" | "fluids_slot" | "null" | "default_reactor" | "adv_reactor" | "imp_reactor" | "per_reactor" | "fluid_reactor" | "gas_reactor" | "graphite_reactor" | "heat_reactor" | "check_mark" | "none" | "storage_default";
    export class $SpaceMainInterfaceWidget extends $ScreenWidget {
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static commonTexture5: $ResourceLocation;
        static commonTexture: $ResourceLocation;
        static commonTexture4: $ResourceLocation;
        static commonTexture3: $ResourceLocation;
        static commonTexture2: $ResourceLocation;
        static commonTexture1: $ResourceLocation;
        static space_progress: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        gui: $ScreenIndustrialUpgrade<never>;
        height: number;
        constructor(arg0: $ScreenIndustrialUpgrade<never>, arg1: number, arg2: number, arg3: number, arg4: number);
    }
}
