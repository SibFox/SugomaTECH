import { $Rect2i, $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $OptionInstance, $Minecraft, $GuiMessage_, $GuiMessage, $GuiMessage$Line, $GuiMessageTag, $NarratorStatus, $OptionInstance$TooltipSupplier_, $Options, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $AggregatedSuggestions, $AggregatedSuggestions_ } from "@package/endorh/smartcompletion";
import { $TooltipAccessor } from "@package/traben/entity_texture_features/mixin/mixins/accessor";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $ArrayListDeque, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $BossEvent$BossBarColor, $BossEvent$BossBarOverlay_, $BossEvent$BossBarOverlay, $BossEvent, $BossEvent$BossBarColor_ } from "@package/net/minecraft/world";
import { $SoundManager, $SoundEventListener, $WeighedSoundEvents } from "@package/net/minecraft/client/sounds";
import { $TabManager, $Tab } from "@package/net/minecraft/client/gui/components/tabs";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $MultiLineEditBoxAccessor } from "@package/com/perigrine3/createcybernetics/mixin/client";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $AbstractWidgetInvoker } from "@package/com/faboslav/structurify/common/mixin";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $IMixinAbstractWidget, $IMixinEditBox } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $FocusNavigationEvent_, $ScreenRectangle, $ScreenDirection_, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $RemoteDebugSampleType_, $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $AbstractWidgetAccessor } from "@package/it/hurts/octostudios/octolib/mixin";
import { $AbstractWidgetAccess } from "@package/pigcart/particlerain/config/gui";
import { $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $IMixinEditBox as $IMixinEditBox$1, $IMixinAbstractWidget as $IMixinAbstractWidget$1, $IMixinAbstractSliderButton, $IMixinSplashRenderer, $IMixinButton, $IMixinCommandSuggestions, $IMixinBossHealthOverlay, $IMixinSuggestionsList } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $EditBoxAccessor } from "@package/journeymap/common/mixin/client";
import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $BuggerScreenRenderLinesInvoker } from "@package/io/github/mortuusars/exposure/mixin/client";
import { $UUID_, $Map, $OptionalInt, $List, $Collection_, $List_, $AbstractList, $UUID } from "@package/java/util";
import { $ImageButtonAccessor, $CheckboxAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $BooleanSupplier_, $Supplier, $Consumer_, $BiFunction, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BiFunction_ } from "@package/java/util/function";
import { $Suggestions, $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $MultiLineEditBoxAccessor as $MultiLineEditBoxAccessor$1, $MultilineTextFieldAccessor } from "@package/dev/terminalmc/chatnotify/mixin/accessor";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $CustomizableWidget$CustomBackgroundResetBehavior_, $UniqueLabeledSwitchCycleButton, $CustomizableSlider, $CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget, $UniqueWidget } from "@package/de/keksuccino/fancymenu/util/rendering/ui/widget";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $SmartCommandSuggestions } from "@package/endorh/smartcompletion/duck";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $AccessorAbstractWidget } from "@package/net/darkhax/bookshelf/common/mixin/access/client/gui";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $ComponentPath, $GuiGraphics, $Gui, $Font } from "@package/net/minecraft/client/gui";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier, $TooltipAccessor {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        setCachedTooltip(arg0: $List_<$FormattedCharSequence_>): void;
        static MAX_WIDTH: number;
        narration: $Component;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        splitWithLanguage: $Language;
        constructor(message: $Component_, narration: $Component_ | null);
    }
    export class $CommonButtons {
        static language(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        static accessibility(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        setDelay(delay: $Duration_): void;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        updateNarration(output: $NarrationElementOutput): void;
        createTooltipPositioner(screenRectangle: $ScreenRectangle_, hovering: boolean, focused: boolean): $ClientTooltipPositioner;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { action?: $Consumer_<$PopupScreen>, message?: $Component_,  } | [action?: $Consumer_<$PopupScreen>, message?: $Component_, ];
    export class $MultilineTextField$StringView extends $Record {
        beginIndex(): number;
        endIndex(): number;
        static EMPTY: $MultilineTextField$StringView;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { beginIndex?: number, endIndex?: number,  } | [beginIndex?: number, endIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        renderMenuBackground(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isSelected(): boolean;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
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
        constructor(tabManager: $TabManager, tab: $Tab, width: number, height: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer implements $IMixinSplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        getSplashFancyMenu(): string;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        splash: string;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
        get splashFancyMenu(): string;
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        renderBorder(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        renderBackground(guiGraphics: $GuiGraphics): void;
        scrollRate(): number;
        setScrollAmount(scrollAmount: number): void;
        scrollAmount(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        scrollbarWidth(): number;
        renderContents(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        scrollbarVisible(): boolean;
        withinContentAreaTopBottom(top: number, bottom: number): boolean;
        withinContentAreaPoint(x: number, arg1: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        totalInnerPadding(): number;
        renderDecorations(guiGraphics: $GuiGraphics): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScrollAmount(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getInnerHeight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        innerPadding(): number;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get maxScrollAmount(): number;
        get innerHeight(): number;
    }
    export class $Button extends $AbstractButton implements $IMixinButton {
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        setPressActionFancyMenu(arg0: $Button$OnPress_): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_);
        set pressActionFancyMenu(value: $Button$OnPress_);
    }
    export class $CycleButton$Builder<T> {
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(width: number): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(font: $Font, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, maxRows: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, component: $Component_, maxWidth: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        getWidth(): number;
        getLineCount(): number;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number): void;
        renderLeftAligned(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderLeftAlignedNoShadow(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): number;
        get width(): number;
        get lineCount(): number;
    }
    export class $CommandSuggestions$SuggestionsList implements $IMixinSuggestionsList {
        cycle(change: number): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getNarrationMessage(): $Component;
        select(change: number): void;
        mouseScrolled(delta: number): boolean;
        mouseClicked(keyCode: number, scanCode: number, modifiers: number): boolean;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        handler$hoo000$smartcompletion$onMouseClick(mouseX: number, mouseY: number, button: number, cir: $CallbackInfoReturnable<any>): void;
        handler$hoo000$smartcompletion$onMouseScrolled(amount: number, cir: $CallbackInfoReturnable<any>): void;
        handler$hoo000$smartcompletion$onUseSuggestion(ci: $CallbackInfo): void;
        handler$hoo002$smartcompletion$onKeyPressed(keyCode: number, scanCode: number, modifiers: number, ci: $CallbackInfoReturnable<any>): void;
        handler$hoo000$smartcompletion$afterUseSuggestion(ci: $CallbackInfo): void;
        useSuggestion(): void;
        handler$hoo000$smartcompletion$onRender(gg: $GuiGraphics, mouseX: number, mouseY: number, ci: $CallbackInfo): void;
        getLastMouseFancyMenu(): $Vec2;
        setLastMouseFancyMenu(arg0: $Vec2): void;
        getCurrentFancyMenu(): number;
        getRectFancyMenu(): $Rect2i;
        getOffsetFancyMenu(): number;
        tabCycles: boolean;
        this$0: $CommandSuggestions;
        static $assertionsDisabled: boolean;
        get narrationMessage(): $Component;
        get currentFancyMenu(): number;
        get rectFancyMenu(): $Rect2i;
        get offsetFancyMenu(): number;
    }
    export class $LogoRenderer {
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number): void;
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number, height: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(keepLogoThroughFade: boolean);
    }
    export class $Checkbox$Builder {
        pos(x: number, y: number): $Checkbox$Builder;
        build(): $Checkbox;
        selected(option: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(selected: boolean): $Checkbox$Builder;
        maxWidth(maxWidth: number): $Checkbox$Builder;
        tooltip(tooltip: $Tooltip): $Checkbox$Builder;
        onValueChange(onValueChange: $Checkbox$OnValueChange_): $Checkbox$Builder;
        constructor(message: $Component_, font: $Font);
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { score?: number, name?: $Component_, scoreWidth?: number, formattedScore?: $Component_,  } | [score?: number, name?: $Component_, scoreWidth?: number, formattedScore?: $Component_, ];
    export class $ImageWidget$Texture extends $ImageWidget {
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
    }
    export class $SpriteIconButton extends $Button {
        static builder(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton$Builder;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        active: boolean;
        static DEFAULT_HEIGHT: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        constructor(width: number, height: number, message: $Component_, spriteWidth: number, spriteHeight: number, sprite: $ResourceLocation_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_ | null);
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $AbstractSelectionListAccessor {
        remove(index: number): E;
        addEntry(entry: E): number;
        getEntry(index: number): E;
        nextEntry(direction: $ScreenDirection_): E;
        nextEntry(direction: $ScreenDirection_, predicate: $Predicate_<E>): E;
        nextEntry(direction: $ScreenDirection_, predicate: $Predicate_<E>, selected: E | null): E;
        removeEntry(entry: E): boolean;
        ensureVisible(entry: E): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getItemCount(): number;
        /**
         * Gets the focused GUI element.
         */
        getSelected(): E;
        scroll(scroll: number): void;
        updateSize(width: number, layout: $HeaderAndFooterLayout): void;
        setSelected(entry: E | null): void;
        getEntryAtPosition(mouseX: number, arg1: number): E;
        renderItem(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number, index: number, left: number, top: number, width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxPosition(): number;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): E;
        /**
         * Gets the focused GUI element.
         */
        getHovered(): E;
        getScrollAmount(): number;
        setScrollAmount(scroll: number): void;
        renderSelection(guiGraphics: $GuiGraphics, top: number, width: number, height: number, outerColor: number, innerColor: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowLeft(): number;
        updateSizeAndPosition(width: number, height: number, y: number): void;
        getRowTop(index: number): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowRight(): number;
        enableScissor(guiGraphics: $GuiGraphics): void;
        setRenderHeader(renderHeader: boolean, headerHeight: number): void;
        centerScrollOn(entry: E): void;
        clearEntries(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        scrollbarVisible(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScroll(): number;
        replaceEntries(entries: $Collection_<E>): void;
        addEntryToTop(entry: E): void;
        isValidMouseClick(index: number): boolean;
        clampScrollAmount(): void;
        clickedHeader(x: number, y: number): boolean;
        bindEntryToSelf(entry: $AbstractSelectionList$Entry<E>): void;
        /**
         * Gets the focused GUI element.
         */
        getFirstElement(): E;
        removeEntryFromTop(entry: E): boolean;
        renderHeader(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getRowBottom(index: number): number;
        renderListItems(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getScrollbarPosition(): number;
        renderDecorations(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getDefaultScrollbarPosition(): number;
        isSelectedItem(index: number): boolean;
        renderListSeparators(guiGraphics: $GuiGraphics): void;
        renderListBackground(guiGraphics: $GuiGraphics): void;
        setClampedScrollAmount(scroll: number): void;
        updateScrollingState(mouseX: number, arg1: number, mouseY: number): void;
        narrateListElementPosition(narrationElementOutput: $NarrationElementOutput, entry: E): void;
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        xOffset: number;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: E;
        height: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get itemCount(): number;
        get maxPosition(): number;
        get focused(): E;
        get rowLeft(): number;
        get rowWidth(): number;
        get rowRight(): number;
        get maxScroll(): number;
        get firstElement(): E;
        get scrollbarPosition(): number;
        get defaultScrollbarPosition(): number;
        set clampedScrollAmount(value: number);
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        active: boolean;
        static DEFAULT_HEIGHT: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_ | null);
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener | null): void;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
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
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        targetPercent: number;
        setTime: number;
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $MultilineTextField implements $MultilineTextFieldAccessor, $MultilineTextFieldAccess {
        value(): string;
        setValue(text: string): void;
        cursor(): number;
        getSelected(): $MultilineTextField$StringView;
        getLineCount(): number;
        keyPressed(keyCode: number): boolean;
        insertText(text: string): void;
        deleteText(length: number): void;
        hasSelection(): boolean;
        getSelectedText(): string;
        setCharacterLimit(length: number): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        hasCharacterLimit(): boolean;
        setSelecting(selecting: boolean): void;
        getLineView(offset: number): $MultilineTextField$StringView;
        characterLimit(): number;
        setCursorListener(cursorListener: $Runnable_): void;
        getLineAtCursor(): number;
        seekCursorToPoint(x: number, arg1: number): void;
        seekCursorLine(length: number): void;
        getNextWord(): $MultilineTextField$StringView;
        getPreviousWord(): $MultilineTextField$StringView;
        seekCursor(whence: $Whence_, position: number): void;
        setSelectCursor(length: number): void;
        chatnotify$setSelectCursor(length: number): void;
        chatnotify$getCursor(): number;
        chatnotify$setWidth(length: number): void;
        chatnotify$setCursor(length: number): void;
        static NO_CHARACTER_LIMIT: number;
        constructor(font: $Font, width: number);
        get selected(): $MultilineTextField$StringView;
        get lineCount(): number;
        get selectedText(): string;
        set valueListener(value: $Consumer_<string>);
        set selecting(value: boolean);
        set cursorListener(value: $Runnable_);
        get lineAtCursor(): number;
        get nextWord(): $MultilineTextField$StringView;
        get previousWord(): $MultilineTextField$StringView;
        set selectCursor(value: number);
    }
    export class $ChatComponent$State {
        messages: $List<$GuiMessage>;
        history: $List<string>;
        delayedMessageDeletions: $List<$ChatComponent$DelayedMessageDeletion>;
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        narratables(): $List<$NarratableEntry>;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Sets if the GUI element is dragging or not.
         */
        setDragging(dragging: boolean): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): $GuiEventListener;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(listener: $GuiEventListener | null): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isDragging(): boolean;
        focusPathAtIndex(event: $FocusNavigationEvent_, index: number): $ComponentPath;
        /**
         * Returns the first event listener that intersects with the mouse coordinates.
         */
        getChildAt(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
    }
    export class $Checkbox extends $AbstractButton implements $CheckboxAccessor {
        static getDefaultWidth(message: $Component_, font: $Font): number;
        static builder(message: $Component_, font: $Font): $Checkbox$Builder;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        selected(): boolean;
        static getBoxSize(font: $Font): number;
        /**
         * Sets the focus state of the GUI element.
         */
        setSelected(focused: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, maxWidth: number, message: $Component_, font: $Font, selected: boolean, onValueChange: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
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
        constructor(font: $Font, message: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(width: number, height: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(width: number): $SpriteIconButton$Builder;
        sprite(sprite: $ResourceLocation_, spriteWidth: number, spriteHeight: number): $SpriteIconButton$Builder;
        narration(narration: $Button$CreateNarration_): $SpriteIconButton$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean);
    }
    export class $PlainTextButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, font: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
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
    }
    export class $WidgetSprites extends $Record {
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_,  } | [enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, ];
    export class $ImageButton extends $Button implements $ImageButtonAccessor {
        getSprites(): $WidgetSprites;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(component: $FormattedText, maxWidth: number, font: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        initTextureValues(sprites: $WidgetSprites_): void;
        setStateTriggered(triggered: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isStateTriggered(): boolean;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, initialState: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { text?: $FormattedCharSequence_, width?: number,  } | [text?: $FormattedCharSequence_, width?: number, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>,  } | [slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { location?: $Vec3_, time?: number,  } | [location?: $Vec3_, time?: number, ];
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $AbstractWidgetInvoker, $AccessorAbstractWidget, $IMixinAbstractWidget, $AbstractWidgetAccessor, $AbstractWidgetAccess, $IMixinAbstractWidget$1, $UniqueWidget, $CustomizableWidget {
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setSize(width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        setMessage(message: $Component_): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHiddenFancyMenu(): boolean;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        setWidth(height: number): void;
        setHeight(height: number): void;
        clicked(mouseX: number, arg1: number): boolean;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverOrFocusStateFancyMenu(focused: boolean): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        addHoverStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        setNineSliceBorderY_FancyMenu(height: number): void;
        setNineSliceBorderRight_FancyMenu(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        getHoverStateListenersFancyMenu(): $List<any>;
        setNineSliceBorderBottom_FancyMenu(height: number): void;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        /**
         * Sets the focus state of the GUI element.
         */
        setUnderlineLabelOnHoverFancyMenu(focused: boolean): void;
        setNineSliceBorderLeft_FancyMenu(height: number): void;
        getHitboxRotationDegreesFancyMenu(): number;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        getFocusStateListenersFancyMenu(): $List<any>;
        getWidgetIdentifierFancyMenu(): string;
        addFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        setNineSliceBorderX_FancyMenu(height: number): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setNineSliceBorderTop_FancyMenu(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverOrFocusStateFancyMenu(): boolean;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        resetWidgetCustomizationsFancyMenu(): void;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        setAlpha(alpha: number): void;
        setTooltip(tooltip: $Tooltip | null): void;
        setRectangle(width: number, height: number, x: number, y: number): void;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        setFGColor(height: number): void;
        onRelease(mouseX: number, arg1: number): void;
        onDrag(mouseX: number, arg1: number, mouseY: number, arg3: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        getTooltip(): $Tooltip;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        setHoverLabelFancyMenu(message: $Component_): void;
        setCustomYFancyMenu(arg0: number): void;
        getLabelScaleFancyMenu(): number;
        getCustomYFancyMenu(): number;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, width: number, color: number): void;
        getHoverSoundFancyMenu(): $IAudio;
        getCustomLabelFancyMenu(): $Component;
        resolveLabelScaleFancyMenu(): number;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastFocusStateFancyMenu(focused: boolean): void;
        defaultButtonNarrationText(narrationElementOutput: $NarrationElementOutput): void;
        setLabelScaleFancyMenu(alpha: number): void;
        setCustomWidthFancyMenu(arg0: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setLabelShadowFancyMenu(focused: boolean): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isLabelShadowFancyMenu(): boolean;
        createNarrationMessage(): $MutableComponent;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastFocusStateFancyMenu(): boolean;
        setCustomHeightFancyMenu(arg0: number): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        getCustomXFancyMenu(): number;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverStateFancyMenu(focused: boolean): void;
        setCustomXFancyMenu(arg0: number): void;
        setCustomLabelFancyMenu(message: $Component_): void;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getHoverLabelFancyMenu(): $Component;
        getUnhoverSoundFancyMenu(): $IAudio;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverStateFancyMenu(): boolean;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        static renderScrollingString$bookshelf_$md$6cde14$0(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        resetWidgetSizeAndPositionFancyMenu(): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        getResetCustomizationsListenersFancyMenu(): $List<any>;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        addHoverOrFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        /**
         * Sets the focus state of the GUI element.
         */
        setNineSliceCustomBackground_FancyMenu(focused: boolean): void;
        getHoverOrFocusStateListenersFancyMenu(): $List<any>;
        setX(height: number): void;
        setY(height: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setHiddenFancyMenu(focused: boolean): void;
        clearFGColor(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        isValidClickButton(button: number): boolean;
        playDownSound(handler: $SoundManager): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        setTabOrderGroup(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        pigcart$getOffset(): number;
        pigcart$setOffset(height: number): void;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        setPosition(width: number, height: number): void;
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickFocusStateListenersFancyMenu(focused: boolean): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverStateListenersFancyMenu(focused: boolean): void;
        stopCustomClickSoundFancyMenu(): void;
        getOriginalMessageFancyMenu(): $Component;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopUnhoverSoundFancyMenu(): void;
        stopHoverSoundFancyMenu(): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverOrFocusStateListenersFancyMenu(focused: boolean): void;
        getAlphaFancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLocalX(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLocalY(): number;
        setMessageFieldFancyMenu(message: $Component_): void;
        setHeightFancyMenu(height: number): void;
        setHeightKonkrete(height: number): void;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get right(): number;
        set nineSliceBorderY_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        get hoverStateListenersFancyMenu(): $List<any>;
        set nineSliceBorderBottom_FancyMenu(value: number);
        set nineSliceBorderLeft_FancyMenu(value: number);
        get hitboxRotationDegreesFancyMenu(): number;
        get focusStateListenersFancyMenu(): $List<any>;
        set nineSliceBorderX_FancyMenu(value: number);
        set nineSliceBorderTop_FancyMenu(value: number);
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        get bottom(): number;
        get hovered(): boolean;
        set tooltipDelay(value: $Duration_);
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get resetCustomizationsListenersFancyMenu(): $List<any>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get hoverOrFocusStateListenersFancyMenu(): $List<any>;
        get hoveredOrFocused(): boolean;
        get currentFocusPath(): $ComponentPath;
        get originalMessageFancyMenu(): $Component;
        get alphaFancyMenu(): number;
        get localX(): number;
        get localY(): number;
        set messageFieldFancyMenu(value: $Component_);
        set heightFancyMenu(value: number);
        set heightKonkrete(value: number);
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number,  } | [maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number, ];
    export class $DebugScreenOverlay implements $BuggerScreenRenderLinesInvoker {
        reset(): void;
        getGameInformation(): $List<string>;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        render(guiGraphics: $GuiGraphics): void;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        localvar$bgk000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(frameDuration: number): void;
        clearChunkCache(): void;
        toggleFpsCharts(): void;
        toggleOverlay(): void;
        showNetworkCharts(): boolean;
        handler$mbl000$betterf3$renderAnimation(context: $GuiGraphics, ci: $CallbackInfo): void;
        handler$mbl000$betterf3$renderBefore(context: $GuiGraphics, ci: $CallbackInfo): void;
        handler$elj000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        getPingLogger(): $LocalSampleLogger;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        getTickTimeLogger(): $LocalSampleLogger;
        redirect$mbl000$betterf3$allocationRateCalculatorGet(instance: $DebugScreenOverlay$AllocationRateCalculator, allocatedBytes: number): number;
        handler$mbn000$betterf3$addAutomaticDebugOption(minecraft: $Minecraft, ci: $CallbackInfo): void;
        handler$fel000$fabric_renderer_api_v1$getLeftText(arg0: $CallbackInfoReturnable<any>): void;
        drawGameInformation(guiGraphics: $GuiGraphics): void;
        collectGameInformationText(): $List<string>;
        getSystemInformation(): $List<string>;
        drawSystemInformation(guiGraphics: $GuiGraphics): void;
        handler$lfk000$immersive_furniture$immersiveFurniture$getLeftText(arg0: $CallbackInfoReturnable<any>): void;
        handler$mbk000$betterf3$drawText(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        localvar$jbg000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        handler$mbl000$betterf3$renderFontScaleBefore(context: $GuiGraphics, ci: $CallbackInfo): void;
        handler$mgp000$presencefootsteps$onGetRightText(arg0: $CallbackInfoReturnable<any>): void;
        collectSystemInformationText(): $List<string>;
        drawLines(guiGraphics: $GuiGraphics, lines: $List_<string>, leftSide: boolean): void;
        renderFpsCharts: boolean;
        static HEIGHTMAP_NAMES: $Map<$Heightmap$Types, string>;
        renderProfilerChart: boolean;
        constructor(minecraft: $Minecraft);
        get gameInformation(): $List<string>;
        get bandwidthLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get tickTimeLogger(): $LocalSampleLogger;
        get systemInformation(): $List<string>;
    }
    export class $PopupScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(backgroundScreen: $Screen, width: number, image: $ResourceLocation_ | null, title: $Component_, message: $Component_, buttons: $List_<$PopupScreen$ButtonOption_>, onClose: $Runnable_ | null);
    }
    export class $DebugScreenOverlay$AllocationRateCalculator {
        bytesAllocatedPerSecond(heapUsage: number): number;
        constructor();
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox, $IMixinEditBox, $EditBoxAccessor, $IMixinEditBox$1 {
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(validator: $Predicate_<string>): void;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLength(): number;
        setBordered(select: boolean): void;
        setResponder(responder: $Consumer_<string>): void;
        setCanLoseFocus(select: boolean): void;
        setVisible(select: boolean): void;
        setEditable(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        moveCursor(delta: number, select: boolean): void;
        getWordPosition(delta: number): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteText(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        getScreenX(delta: number): number;
        setHint(hint: $Component_): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        setTextShadow(select: boolean): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        moveCursorToEnd(select: boolean): void;
        moveCursorToStart(select: boolean): void;
        moveCursorTo(delta: number, select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        renderHighlight(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Returns the current position of the cursor.
         */
        maxLength(): number;
        getFormatter(): $BiFunction<string, number, $FormattedCharSequence>;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthKonkrete(): number;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        onValueChangeKonkrete(textToWrite: string): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableKonkrete(): boolean;
        invokeRenderHighlight(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getSuggestionFancyMenu(): string;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getBorderedFancyMenu(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getUneditableTextColor(): number;
        /**
         * Returns the current position of the cursor.
         */
        getHightlightPosKonkrete(): number;
        /**
         * Returns the current position of the cursor.
         */
        getDisplayPosFancyMenu(): number;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthFancyMenu(): number;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorFancyMenu(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableFancyMenu(): boolean;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setDisplayPosFancyMenu(num: number): void;
        /**
         * Returns the current position of the cursor.
         */
        getHighlightPosFancyMenu(): number;
        getFocusedTimeFancyMenu(): number;
        /**
         * Returns the current position of the cursor.
         */
        getTextColor(): number;
        getHint(): $Component;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isEditable(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getHighlightPos(): number;
        getHintFancyMenu(): $Component;
        getFocusTime(): number;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getSuggestion(): string;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorUneditableFancyMenu(): number;
        invokeRenderHighlightFancyMenu(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        xOffset: number;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        displayPos: number;
        packedFGColor: number;
        highlightPos: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static FORWARDS: number;
        value: string;
        font: $Font;
        height: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        constructor(font: $Font, width: number, height: number, message: $Component_);
        set filter(value: $Predicate_<string>);
        get highlighted(): string;
        set textColorUneditable(value: number);
        get innerWidth(): number;
        get maxLengthKonkrete(): number;
        get isEditableKonkrete(): boolean;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get suggestionFancyMenu(): string;
        get borderedFancyMenu(): boolean;
        get uneditableTextColor(): number;
        get hightlightPosKonkrete(): number;
        get maxLengthFancyMenu(): number;
        get textColorFancyMenu(): number;
        get isEditableFancyMenu(): boolean;
        get highlightPosFancyMenu(): number;
        get focusedTimeFancyMenu(): number;
        get hintFancyMenu(): $Component;
        get focusTime(): number;
        get textColorUneditableFancyMenu(): number;
    }
    export class $StringWidget extends $AbstractStringWidget {
        setColor(color: number): $StringWidget;
        alignLeft(): $StringWidget;
        alignRight(): $StringWidget;
        alignCenter(): $StringWidget;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        constructor(width: number, height: number, message: $Component_, font: $Font);
        constructor(message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        active: boolean;
        static DEFAULT_HEIGHT: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_ | null);
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(checkbox: $Checkbox, value: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(width: number): void;
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
        constructor(maxWidth: number, message: $Component_, font: $Font, alwaysShowBorder: boolean, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton implements $UniqueLabeledSwitchCycleButton {
        getValue(): T;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: T): void;
        createDefaultNarrationMessage(): $MutableComponent;
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        setLabeledSwitchComponentLabel_FancyMenu(message: $Component_): void;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        onValueChange: $CycleButton$OnValueChange<T>;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, name: $Component_, index: number, value: T, values: $CycleButton$ValueListSupplier<T>, valueStringifier: $Function_<T, $Component>, narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>, onValueChange: $CycleButton$OnValueChange_<T>, tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, displayOnlyValue: boolean);
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(color: number): $FittingMultiLineTextWidget;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        showingScrollBar(): boolean;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        options: $Options;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(options: $Options, x: number, y: number, width: number, height: number, value: number);
    }
    export class $ImageWidget extends $AbstractWidget {
        static texture(width: number, height: number, texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $ImageWidget;
        static sprite(width: number, height: number, sprite: $ResourceLocation_): $ImageWidget;
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
        constructor(x: number, y: number, width: number, height: number);
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        xOffset: number;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay implements $IMixinBossHealthOverlay {
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        render(guiGraphics: $GuiGraphics): void;
        shouldPlayMusic(): boolean;
        shouldCreateWorldFog(): boolean;
        shouldDarkenScreen(): boolean;
        handler$mbo00f$betterf3$init(info: $CallbackInfo): void;
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(minecraft: $Minecraft);
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(color: number): $AbstractStringWidget;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getColor(): number;
        getFont(): $Font;
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
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        get font(): $Font;
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        renderBack(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        xOffset: number;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: E;
        height: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { signature?: $MessageSignature_, deletableAfter?: number,  } | [signature?: $MessageSignature_, deletableAfter?: number, ];
    export class $AbstractButton extends $AbstractWidget {
        onPress(): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
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
        constructor(width: number, height: number, model: $EntityModelSet, skin: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setColor(color: number): $MultiLineTextWidget;
        setMaxWidth(color: number): $MultiLineTextWidget;
        setMaxRows(color: number): $MultiLineTextWidget;
        setCentered(centered: boolean): $MultiLineTextWidget;
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
        constructor(message: $Component_, font: $Font);
        constructor(x: number, y: number, message: $Component_, font: $Font);
        set color(value: number);
        set maxWidth(value: number);
        set maxRows(value: number);
        set centered(value: boolean);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions implements $SmartCommandSuggestions, $IMixinCommandSuggestions {
        handler$hon000$smartcompletion$beforeUpdateCommandInfo(ci: $CallbackInfo): void;
        setAllowSuggestions(allowHiding: boolean): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getNarrationMessage(): $Component;
        updateCommandInfo(): void;
        setAllowHiding(allowHiding: boolean): void;
        getUsageNarration(): $Component;
        mouseScrolled(delta: number): boolean;
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        isVisible(): boolean;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        hide(): void;
        handler$hon000$smartcompletion$onShowSuggestions(narrateFirstEntry: boolean, ci: $CallbackInfo): void;
        smartcompletion$getLastAggregatedSuggestions(): $AggregatedSuggestions;
        handler$hon001$smartcompletion$onKeyPressed(keyCode: number, scanCode: number, modifiers: number, cir: $CallbackInfoReturnable<any>): void;
        smartcompletion$updateAggregatedSuggestions(suggestions: $AggregatedSuggestions_, narrateFirstEntry: boolean): void;
        handler$hon000$smartcompletion$onUpdateCommandInfo(ci: $CallbackInfo): void;
        handler$hon000$smartcompletion$onInit(minecraft: $Minecraft, screen: $Screen, editBox: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number, ci: $CallbackInfo): void;
        smartcompletion$enforceShowSuggestions(): void;
        smartcompletion$getSuggestionLineLimit(): number;
        smartcompletion$setKeepSuggestions(allowHiding: boolean): void;
        smartcompletion$isAnchorToBottom(): boolean;
        smartcompletion$isKeepSuggestions(): boolean;
        smartcompletion$hasUnparsedInput(): boolean;
        smartcompletion$getMinecraft(): $Minecraft;
        renderUsage(guiGraphics: $GuiGraphics): void;
        showSuggestions(allowHiding: boolean): void;
        renderSuggestions(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): boolean;
        static calculateSuggestionSuffix(inputText: string, suggestionText: string): string;
        smartcompletion$getInput(): $EditBox;
        smartcompletion$getFont(): $Font;
        getInput(): $EditBox;
        getMinecraft(): $Minecraft;
        enforceShowSuggestions(): void;
        getFont(): $Font;
        getLastAggregatedSuggestions(): $AggregatedSuggestions;
        updateAggregatedSuggestions(suggestions: $AggregatedSuggestions_): void;
        isAnchorToBottom(): boolean;
        setKeepSuggestions(allowHiding: boolean): void;
        isKeepSuggestions(): boolean;
        hasUnparsedInput(): boolean;
        getSuggestionLineLimit(): number;
        getPendingSuggestionsFancyMenu(): $CompletableFuture<$Suggestions>;
        setPendingSuggestionsFancyMenu(arg0: $CompletableFuture<$Suggestions>): void;
        getKeepSuggestionsFancyMenu(): boolean;
        getAllowSuggestionsFancyMenu(): boolean;
        invokeUpdateUsageInfoFancyMenu(): void;
        invokeSortSuggestionsFancyMenu(suggestions: $Suggestions): $List<$Suggestion>;
        getCommandUsageFancyMenu(): $List<$FormattedCharSequence>;
        getSuggestionsFancyMenu(): $CommandSuggestions$SuggestionsList;
        getCurrentParseFancyMenu(): $ParseResults<$SharedSuggestionProvider>;
        setCurrentParseFancyMenu(arg0: $ParseResults<$SharedSuggestionProvider>): void;
        setSuggestionsFancyMenu(arg0: $CommandSuggestions$SuggestionsList): void;
        minecraft: $Minecraft;
        fillColor: number;
        input: $EditBox;
        keepSuggestions: boolean;
        anchorToBottom: boolean;
        static $assertionsDisabled: boolean;
        lineStartOffset: number;
        suggestions: $CommandSuggestions$SuggestionsList;
        suggestionLineLimit: number;
        font: $Font;
        constructor(minecraft: $Minecraft, screen: $Screen, input: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number);
        set allowSuggestions(value: boolean);
        get narrationMessage(): $Component;
        set allowHiding(value: boolean);
        get usageNarration(): $Component;
        get visible(): boolean;
        get lastAggregatedSuggestions(): $AggregatedSuggestions;
        get keepSuggestionsFancyMenu(): boolean;
        get allowSuggestionsFancyMenu(): boolean;
        get commandUsageFancyMenu(): $List<$FormattedCharSequence>;
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(onClose: $Runnable_): $PopupScreen$Builder;
        setMessage(message: $Component_): $PopupScreen$Builder;
        setWidth(width: number): $PopupScreen$Builder;
        addButton(message: $Component_, action: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setImage(image: $ResourceLocation_): $PopupScreen$Builder;
        constructor(backgroundScreen: $Screen, title: $Component_);
        set message(value: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $ChatComponent {
        scrollChat(posInc: number): void;
        getWidth(): number;
        static getWidth(height: number): number;
        getHeight(): number;
        static getHeight(height: number): number;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        getRecentChat(): $ArrayListDeque<string>;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        getLinesPerPage(): number;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        getScale(): number;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        addMessage(chatComponent: $Component_): void;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        constant$fij000$placebo$unEscapeChatLogNewlines(arg0: string): string;
        storeState(): $ChatComponent$State;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        static defaultUnfocusedPct(): number;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        deleteMessage(messageSignature: $MessageSignature_): void;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        restoreState(state: $ChatComponent$State): void;
        trimmedMessages: $List<$GuiMessage$Line>;
        allMessages: $List<$GuiMessage>;
        constructor(minecraft: $Minecraft);
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get scale(): number;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay {
        reset(): void;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        setFooter(footer: $Component_ | null): void;
        setHeader(footer: $Component_ | null): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        renderPingIcon(guiGraphics: $GuiGraphics, width: number, x: number, y: number, playerInfo: $PlayerInfo): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set footer(value: $Component_ | null);
        set header(value: $Component_ | null);
    }
    export class $PlayerFaceRenderer {
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number, drawHat: boolean, upsideDown: boolean): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, skin: $PlayerSkin_, x: number, y: number, size: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        addSmall(leftOption: $AbstractWidget, rightOption: $AbstractWidget | null): void;
        addSmall(options: $List_<$AbstractWidget>): void;
        addSmall(...options: $OptionInstance<never>[]): void;
        findOption(option: $OptionInstance<never>): $AbstractWidget;
        applyUnsavedChanges(): void;
        addBig(option: $OptionInstance<never>): void;
        getMouseOver(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        xOffset: number;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $OptionsList$Entry;
        height: number;
        constructor(minecraft: $Minecraft, width: number, screen: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget implements $IMixinAbstractSliderButton, $CustomizableSlider {
        getSprite(): $ResourceLocation;
        setNineSliceSliderHandleBorderX_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        setNineSliceSliderHandleBorderY_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setNineSliceCustomSliderBackground_FancyMenu(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceSliderBackgroundBorderX_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderY_FancyMenu(height: number): void;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(height: number): void;
        updateMessage(): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        applyValue(): void;
        setNineSliceCustomSliderHandle_FancyMenu(focused: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        setNineSliceSliderHandleBorderBottom_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        setNineSliceSliderHandleBorderLeft_FancyMenu(height: number): void;
        setNineSliceSliderHandleBorderTop_FancyMenu(height: number): void;
        setNineSliceSliderHandleBorderRight_FancyMenu(height: number): void;
        getHandleSprite(): $ResourceLocation;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        getCanChangeValueFancyMenu(): boolean;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, value: number);
        get sprite(): $ResourceLocation;
        get handleSprite(): $ResourceLocation;
        get canChangeValueFancyMenu(): boolean;
    }
    export class $LockIconButton extends $Button {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isLocked(): boolean;
        setLocked(locked: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, onPress: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget implements $MultiLineEditBoxAccessor$1, $MultiLineEditBoxAccessor {
        getValue(): string;
        setValue(fullText: string): void;
        setCharacterLimit(characterLimit: number): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        createCybernetics$getTextField(): $MultilineTextField;
        chatnotify$getTextField(): $MultilineTextField;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        textField: $MultilineTextField;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, placeholder: $Component_, message: $Component_);
        set characterLimit(value: number);
        set valueListener(value: $Consumer_<string>);
    }
}
