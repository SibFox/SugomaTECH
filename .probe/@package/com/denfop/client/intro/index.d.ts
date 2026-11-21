import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $KeyMapping, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $ClientTickEvent$Post, $RegisterKeyMappingsEvent } from "@package/net/neoforged/neoforge/client/event";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $Comparable, $Object } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/denfop/client/intro" {
    export class $IntroDashboardScreen extends $Screen {
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
        constructor(arg0: $IntroDashboardData);
    }
    export class $IntroDashboardSecondScreen$DragTarget extends $Enum<$IntroDashboardSecondScreen$DragTarget> {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$DragTarget}.
     */
    export type $IntroDashboardSecondScreen$DragTarget_ = "none" | "languages" | "faq" | "former" | "changelog_preview" | "modal_changelog";
    export class $IntroChangelogService$VersionBase extends $Record implements $Comparable<$IntroChangelogService$VersionBase> {
        compareTo(arg0: $IntroChangelogService$VersionBase_): number;
        static from(arg0: string): $IntroChangelogService$VersionBase;
        major(): number;
        minor(): number;
        constructor(major: number, minor: number);
    }
    /**
     * Values that may be interpreted as {@link $IntroChangelogService$VersionBase}.
     */
    export type $IntroChangelogService$VersionBase_ = { major?: number, minor?: number,  } | [major?: number, minor?: number, ];
    export class $IntroDashboardSecondScreen$Layout extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$Layout}.
     */
    export type $IntroDashboardSecondScreen$Layout_ = { faq?: $IntroDashboardSecondScreen$ScrollArea_, frame?: $IntroDashboardSecondScreen$Rect_, changelog?: $IntroDashboardSecondScreen$ScrollArea_, nav?: $IntroDashboardSecondScreen$Rect_, languages?: $IntroDashboardSecondScreen$Rect_, billboard?: $IntroDashboardSecondScreen$Rect_, page1Btn?: $IntroDashboardSecondScreen$Rect_, page2Btn?: $IntroDashboardSecondScreen$Rect_, former?: $IntroDashboardSecondScreen$ScrollArea_,  } | [faq?: $IntroDashboardSecondScreen$ScrollArea_, frame?: $IntroDashboardSecondScreen$Rect_, changelog?: $IntroDashboardSecondScreen$ScrollArea_, nav?: $IntroDashboardSecondScreen$Rect_, languages?: $IntroDashboardSecondScreen$Rect_, billboard?: $IntroDashboardSecondScreen$Rect_, page1Btn?: $IntroDashboardSecondScreen$Rect_, page2Btn?: $IntroDashboardSecondScreen$Rect_, former?: $IntroDashboardSecondScreen$ScrollArea_, ];
    export class $IntroDashboardScreen$DragTarget extends $Enum<$IntroDashboardScreen$DragTarget> {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$DragTarget}.
     */
    export type $IntroDashboardScreen$DragTarget_ = "none" | "content" | "partners" | "team" | "addons" | "changelog";
    export class $IntroDashboardSecondScreen$ScrollSetter extends $Enum<$IntroDashboardSecondScreen$ScrollSetter> {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$ScrollSetter}.
     */
    export type $IntroDashboardSecondScreen$ScrollSetter_ = "faq" | "former" | "changelog_preview" | "modal_changelog";
    export class $IntroDashboardSecondScreen extends $Screen {
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
        constructor(arg0: $IntroDashboardData);
    }
    export class $IntroFaqEntry {
        main(): string;
        answer(): string;
        question(): string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $IntroMarkdownBlock {
        getHeight(arg0: number, arg1: $Font, arg2: $IntroImageManager): number;
        render(arg0: $GuiGraphics, arg1: $Font, arg2: $IntroImageManager, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        constructor();
    }
    export class $IntroMarkdownParser {
        parse(arg0: string): $List<$IntroMarkdownBlock>;
        constructor();
    }
    export class $IntroConstants {
        static CACHE_DIR: string;
        static MODID: string;
    }
    export class $IntroDashboardScreen$Rect extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$Rect}.
     */
    export type $IntroDashboardScreen$Rect_ = { x?: number, h?: number, y?: number, w?: number,  } | [x?: number, h?: number, y?: number, w?: number, ];
    export class $IntroDashboardThirdScreen$ScrollArea extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardThirdScreen$ScrollArea}.
     */
    export type $IntroDashboardThirdScreen$ScrollArea_ = { contentW?: number, contentX?: number, contentY?: number, scrollW?: number, panelW?: number, scrollY?: number, panelY?: number, panelX?: number, contentH?: number, scrollX?: number, scrollH?: number, panelH?: number,  } | [contentW?: number, contentX?: number, contentY?: number, scrollW?: number, panelW?: number, scrollY?: number, panelY?: number, panelX?: number, contentH?: number, scrollX?: number, scrollH?: number, panelH?: number, ];
    export class $IntroDashboardSecondScreen$LanguageSupportEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$LanguageSupportEntry}.
     */
    export type $IntroDashboardSecondScreen$LanguageSupportEntry_ = { code?: string, displayName?: string, state?: $IntroDashboardSecondScreen$LanguageSupportState_,  } | [code?: string, displayName?: string, state?: $IntroDashboardSecondScreen$LanguageSupportState_, ];
    export class $IntroDashboardSecondScreen$Rect extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$Rect}.
     */
    export type $IntroDashboardSecondScreen$Rect_ = { x?: number, h?: number, y?: number, w?: number,  } | [x?: number, h?: number, y?: number, w?: number, ];
    export class $IntroChangelogCache {
        static reset(): void;
        static request(): void;
        static isReady(): boolean;
        static getCurrentChangelogLines(arg0: $List_<string>): $List<string>;
        static getResultOrNull(): $IntroChangelogResult;
        static getFullChangelogLines(arg0: $List_<string>): $List<string>;
        static get ready(): boolean;
        static get resultOrNull(): $IntroChangelogResult;
    }
    export class $IntroHeadProfileCache$Holder {
    }
    export class $IntroDashboardScreen$SidebarSections extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$SidebarSections}.
     */
    export type $IntroDashboardScreen$SidebarSections_ = { changelog?: $IntroDashboardScreen$ScrollSection_, team?: $IntroDashboardScreen$ScrollSection_, addons?: $IntroDashboardScreen$ScrollSection_,  } | [changelog?: $IntroDashboardScreen$ScrollSection_, team?: $IntroDashboardScreen$ScrollSection_, addons?: $IntroDashboardScreen$ScrollSection_, ];
    export class $IntroExternalBanner extends $Record {
        url(): string;
        title(): string;
        subtitle(): string;
        iconSource(): string;
        constructor(title: string, subtitle: string, iconSource: string, url: string);
    }
    /**
     * Values that may be interpreted as {@link $IntroExternalBanner}.
     */
    export type $IntroExternalBanner_ = { subtitle?: string, title?: string, iconSource?: string, url?: string,  } | [subtitle?: string, title?: string, iconSource?: string, url?: string, ];
    export class $IntroVersionCheckResult extends $Record {
        mcVersion(): string;
        remoteAvailable(): boolean;
        localVersion(): string;
        remoteVersion(): string;
        updateRecommended(): boolean;
        checkedUrl(): string;
        constructor(mcVersion: string, localVersion: string, remoteVersion: string, remoteAvailable: boolean, updateRecommended: boolean, checkedUrl: string);
    }
    /**
     * Values that may be interpreted as {@link $IntroVersionCheckResult}.
     */
    export type $IntroVersionCheckResult_ = { checkedUrl?: string, remoteVersion?: string, updateRecommended?: boolean, mcVersion?: string, localVersion?: string, remoteAvailable?: boolean,  } | [checkedUrl?: string, remoteVersion?: string, updateRecommended?: boolean, mcVersion?: string, localVersion?: string, remoteAvailable?: boolean, ];
    export class $IntroHeadProfileCache {
        static getInstance(): $IntroHeadProfileCache;
        renderHead(arg0: $GuiGraphics, arg1: string, arg2: number, arg3: number, arg4: number): void;
        hasResolvedHead(arg0: string): boolean;
        static get instance(): $IntroHeadProfileCache;
    }
    export class $IntroDashboardSecondScreen$LabelBadgeMetrics extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$LabelBadgeMetrics}.
     */
    export type $IntroDashboardSecondScreen$LabelBadgeMetrics_ = { height?: number, scaledLineHeight?: number, width?: number, lines?: $List_<$FormattedCharSequence_>,  } | [height?: number, scaledLineHeight?: number, width?: number, lines?: $List_<$FormattedCharSequence_>, ];
    export class $IntroListBlock extends $IntroMarkdownBlock {
        constructor(arg0: $List_<string>);
    }
    export class $IntroDashboardScreen$LabelBadgeMetrics extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$LabelBadgeMetrics}.
     */
    export type $IntroDashboardScreen$LabelBadgeMetrics_ = { height?: number, scaledLineHeight?: number, width?: number, lines?: $List_<$FormattedCharSequence_>,  } | [height?: number, scaledLineHeight?: number, width?: number, lines?: $List_<$FormattedCharSequence_>, ];
    export class $IntroParagraphBlock extends $IntroMarkdownBlock {
        constructor(arg0: string);
    }
    export class $IntroDashboardThirdScreen$Layout extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardThirdScreen$Layout}.
     */
    export type $IntroDashboardThirdScreen$Layout_ = { backBtn?: $IntroDashboardThirdScreen$Rect_, support?: $IntroDashboardThirdScreen$Rect_, frame?: $IntroDashboardThirdScreen$Rect_, mods?: $IntroDashboardThirdScreen$Rect_, partners?: $IntroDashboardThirdScreen$Rect_, version?: $IntroDashboardThirdScreen$Rect_, nav?: $IntroDashboardThirdScreen$Rect_,  } | [backBtn?: $IntroDashboardThirdScreen$Rect_, support?: $IntroDashboardThirdScreen$Rect_, frame?: $IntroDashboardThirdScreen$Rect_, mods?: $IntroDashboardThirdScreen$Rect_, partners?: $IntroDashboardThirdScreen$Rect_, version?: $IntroDashboardThirdScreen$Rect_, nav?: $IntroDashboardThirdScreen$Rect_, ];
    export class $IntroDashboardThirdScreen$Rect extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardThirdScreen$Rect}.
     */
    export type $IntroDashboardThirdScreen$Rect_ = { x?: number, h?: number, y?: number, w?: number,  } | [x?: number, h?: number, y?: number, w?: number, ];
    export class $IntroVersionCheckService {
        static checkAsync(): $CompletableFuture<$IntroVersionCheckResult>;
        static checkNow(): $IntroVersionCheckResult;
    }
    export class $IntroChangelogService$ChangelogBlock extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroChangelogService$ChangelogBlock}.
     */
    export type $IntroChangelogService$ChangelogBlock_ = { version?: string, base?: $IntroChangelogService$VersionBase_, lines?: $List_<string>,  } | [version?: string, base?: $IntroChangelogService$VersionBase_, lines?: $List_<string>, ];
    export class $IntroDashboardScreen$AutoScrollState {
    }
    export class $IntroImageManager {
        get(arg0: string): $IntroRemoteImage;
        static getInstance(): $IntroImageManager;
        static get instance(): $IntroImageManager;
    }
    export class $IntroRemoteImage {
        getState(): $IntroRemoteImage$State;
        getWidth(): number;
        getHeight(): number;
        getSource(): string;
        getErrorMessage(): string;
        isLoading(): boolean;
        isReady(): boolean;
        tryStart(): boolean;
        getTiles(): $List<$IntroRemoteImage$Tile>;
        setFailed(arg0: string): void;
        isFailed(): boolean;
        setLoading(): void;
        setReady(arg0: $List_<$IntroRemoteImage$Tile>, arg1: number, arg2: number): void;
        constructor(arg0: string);
        get state(): $IntroRemoteImage$State;
        get width(): number;
        get height(): number;
        get source(): string;
        get errorMessage(): string;
        get tiles(): $List<$IntroRemoteImage$Tile>;
    }
    export class $IntroFormerMember {
        contribution(): string;
        displayName(): string;
        period(): string;
        role(): string;
        nickname(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string);
    }
    export class $IntroLocalization {
        static component(arg0: string): $Component;
        static tr(arg0: string): string;
        static tr(arg0: string, ...arg1: $Object[]): string;
        static text(arg0: string): string;
        static isTranslationKey(arg0: string): boolean;
    }
    export class $IntroChangelogService {
        static requestAsync(): $CompletableFuture<$IntroChangelogResult>;
        static getBaseVersion(arg0: string): $IntroChangelogService$VersionBase;
        static requestNow(): $IntroChangelogResult;
        static extractAllChangelogLines(arg0: $List_<string>): $List<string>;
        static extractFullChangelogLines(arg0: $List_<string>, arg1: string): $List<string>;
        static extractCurrentChangelogLines(arg0: $List_<string>, arg1: string): $List<string>;
    }
    export class $IntroDashboardData {
        static createDefault(): $IntroDashboardData;
        getAddons(): $List<$IntroAddonEntry>;
        getSubtitle(): string;
        getCurrentChangelogFallbackLines(): $List<string>;
        getModTitle(): string;
        getMarkdown(): string;
        getLogoSource(): string;
        getPartners(): $List<$IntroPartnerEntry>;
        getTeamMembers(): $List<$IntroTeamMember>;
        getBillboardSlides(): $List<$IntroBillboardSlide>;
        getFaqEntries(): $List<$IntroFaqEntry>;
        getFormerMembers(): $List<$IntroFormerMember>;
        getThirdPagePartners(): $List<$IntroExternalBanner>;
        getThirdPageSupportLinks(): $List<$IntroExternalBanner>;
        getFullChangelogLines(): $List<string>;
        getThirdPageRecommendedMods(): $List<$IntroAddonEntry>;
        getFullChangelogFallbackLines(): $List<string>;
        static DEFAULT_MARKDOWN: string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $List_<$IntroPartnerEntry>, arg5: $List_<$IntroTeamMember>, arg6: $List_<$IntroAddonEntry>, arg7: $List_<$IntroFaqEntry>, arg8: $List_<$IntroFormerMember>, arg9: $List_<$IntroBillboardSlide>, arg10: $List_<string>, arg11: $List_<string>, arg12: $List_<$IntroExternalBanner_>, arg13: $List_<$IntroAddonEntry>, arg14: $List_<$IntroExternalBanner_>);
        get addons(): $List<$IntroAddonEntry>;
        get subtitle(): string;
        get currentChangelogFallbackLines(): $List<string>;
        get modTitle(): string;
        get markdown(): string;
        get logoSource(): string;
        get partners(): $List<$IntroPartnerEntry>;
        get teamMembers(): $List<$IntroTeamMember>;
        get billboardSlides(): $List<$IntroBillboardSlide>;
        get faqEntries(): $List<$IntroFaqEntry>;
        get formerMembers(): $List<$IntroFormerMember>;
        get thirdPagePartners(): $List<$IntroExternalBanner>;
        get thirdPageSupportLinks(): $List<$IntroExternalBanner>;
        get fullChangelogLines(): $List<string>;
        get thirdPageRecommendedMods(): $List<$IntroAddonEntry>;
        get fullChangelogFallbackLines(): $List<string>;
    }
    export class $IntroClientEvents$GameEvents {
        static onClientTick(arg0: $ClientTickEvent$Post): void;
        constructor();
    }
    export class $IntroDashboardScreen$Layout extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$Layout}.
     */
    export type $IntroDashboardScreen$Layout_ = { contentScrollbarW?: number, contentScrollbarX?: number, contentBodyW?: number, contentBodyX?: number, contentBodyY?: number, partnerH?: number, frameW?: number, frameX?: number, frameY?: number, contentH?: number, contentInnerW?: number, rightH?: number, partnerW?: number, partnerX?: number, partnerY?: number, logoH?: number, contentW?: number, contentX?: number, contentY?: number, contentHeaderH?: number, rightW?: number, rightX?: number, rightY?: number, logoW?: number, contentBodyH?: number, logoX?: number, logoY?: number, frameH?: number,  } | [contentScrollbarW?: number, contentScrollbarX?: number, contentBodyW?: number, contentBodyX?: number, contentBodyY?: number, partnerH?: number, frameW?: number, frameX?: number, frameY?: number, contentH?: number, contentInnerW?: number, rightH?: number, partnerW?: number, partnerX?: number, partnerY?: number, logoH?: number, contentW?: number, contentX?: number, contentY?: number, contentHeaderH?: number, rightW?: number, rightX?: number, rightY?: number, logoW?: number, contentBodyH?: number, logoX?: number, logoY?: number, frameH?: number, ];
    export class $IntroPartnerEntry {
        getName(): string;
        getSubtitle(): string;
        getIconSource(): string;
        constructor(arg0: string, arg1: string, arg2: string);
        get name(): string;
        get subtitle(): string;
        get iconSource(): string;
    }
    export class $IntroDashboardScreen$ScrollSection extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$ScrollSection}.
     */
    export type $IntroDashboardScreen$ScrollSection_ = { scrollbarH?: number, contentW?: number, contentX?: number, contentY?: number, panelW?: number, panelX?: number, panelY?: number, contentH?: number, scrollbarW?: number, scrollbarX?: number, scrollbarY?: number, panelH?: number,  } | [scrollbarH?: number, contentW?: number, contentX?: number, contentY?: number, panelW?: number, panelX?: number, panelY?: number, contentH?: number, scrollbarW?: number, scrollbarX?: number, scrollbarY?: number, panelH?: number, ];
    export class $IntroDashboardThirdScreen$AutoScrollState {
    }
    export class $IntroRemoteImage$State extends $Enum<$IntroRemoteImage$State> {
        static values(): $IntroRemoteImage$State[];
        static valueOf(arg0: string): $IntroRemoteImage$State;
        static LOADING: $IntroRemoteImage$State;
        static READY: $IntroRemoteImage$State;
        static FAILED: $IntroRemoteImage$State;
        static IDLE: $IntroRemoteImage$State;
    }
    /**
     * Values that may be interpreted as {@link $IntroRemoteImage$State}.
     */
    export type $IntroRemoteImage$State_ = "idle" | "loading" | "ready" | "failed";
    export class $IntroHeadProfileCache$HeadEntry {
    }
    export class $IntroDashboardSecondScreen$ScrollArea extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$ScrollArea}.
     */
    export type $IntroDashboardSecondScreen$ScrollArea_ = { contentW?: number, contentX?: number, contentY?: number, scrollW?: number, panelW?: number, scrollY?: number, panelY?: number, panelX?: number, contentH?: number, scrollX?: number, scrollH?: number, panelH?: number,  } | [contentW?: number, contentX?: number, contentY?: number, scrollW?: number, panelW?: number, scrollY?: number, panelY?: number, panelX?: number, contentH?: number, scrollX?: number, scrollH?: number, panelH?: number, ];
    export class $IntroDashboardSecondScreen$LanguageSupportState extends $Enum<$IntroDashboardSecondScreen$LanguageSupportState> {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardSecondScreen$LanguageSupportState}.
     */
    export type $IntroDashboardSecondScreen$LanguageSupportState_ = "full" | "partial" | "unsupported";
    export class $IntroImageBlock extends $IntroMarkdownBlock {
        getSource(): string;
        getAltText(): string;
        constructor(arg0: string, arg1: string);
        get source(): string;
        get altText(): string;
    }
    export class $IntroTeamMember {
        getDisplayName(): string;
        getRole(): string;
        getNickname(): string;
        getContribution(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        get displayName(): string;
        get role(): string;
        get nickname(): string;
        get contribution(): string;
    }
    export class $IntroAddonEntry {
        getName(): string;
        getModId(): string;
        getSubtitle(): string;
        getIconSource(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        get name(): string;
        get modId(): string;
        get subtitle(): string;
        get iconSource(): string;
    }
    export class $IntroDrawUtil {
        static isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        static initials(arg0: string): string;
        static drawPanel(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static drawWrappedText(arg0: $GuiGraphics, arg1: $Font, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): number;
        static renderImageOrFallback(arg0: $GuiGraphics, arg1: $Font, arg2: $IntroImageManager, arg3: string, arg4: string, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static renderChipIcon(arg0: $GuiGraphics, arg1: $Font, arg2: $IntroImageManager, arg3: string, arg4: string, arg5: number, arg6: number, arg7: number): void;
        static drawGeneratedBadge(arg0: $GuiGraphics, arg1: $Font, arg2: string, arg3: number, arg4: number, arg5: number): void;
        static drawFittedImageBiased(arg0: $GuiGraphics, arg1: $IntroRemoteImage, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static drawStretchedImage(arg0: $GuiGraphics, arg1: $IntroRemoteImage, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static drawFittedImage(arg0: $GuiGraphics, arg1: $IntroRemoteImage, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static getWrappedHeight(arg0: $Font, arg1: string, arg2: number): number;
        static drawCoverImage(arg0: $GuiGraphics, arg1: $IntroRemoteImage, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static drawScaledWrappedText(arg0: $GuiGraphics, arg1: $Font, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
    }
    export class $IntroHeadingBlock extends $IntroMarkdownBlock {
        constructor(arg0: number, arg1: string);
    }
    export class $IntroClientEvents {
        static registerKeys(arg0: $RegisterKeyMappingsEvent): void;
        static OPEN_INTRO: $KeyMapping;
        constructor();
    }
    export class $IntroBillboardSlide {
        source(): string;
        title(): string;
        constructor(arg0: string, arg1: string);
    }
    export class $IntroRemoteImage$Tile {
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        getX(): number;
        getTextureLocation(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number);
        get width(): number;
        get height(): number;
        get y(): number;
        get x(): number;
        get textureLocation(): $ResourceLocation;
    }
    export class $IntroDashboardScreen$SectionMetrics extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$SectionMetrics}.
     */
    export type $IntroDashboardScreen$SectionMetrics_ = { usableWidth?: number, contentHeight?: number, scrollbarVisible?: boolean,  } | [usableWidth?: number, contentHeight?: number, scrollbarVisible?: boolean, ];
    export class $IntroDashboardScreen$ScrollSetter extends $Enum<$IntroDashboardScreen$ScrollSetter> {
    }
    /**
     * Values that may be interpreted as {@link $IntroDashboardScreen$ScrollSetter}.
     */
    export type $IntroDashboardScreen$ScrollSetter_ = "team" | "addons" | "changelog";
    export class $IntroDashboardThirdScreen extends $Screen {
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
        constructor(arg0: $IntroDashboardData);
    }
    export class $IntroChangelogResult extends $Record {
        static unavailable(arg0: string, arg1: string, arg2: string): $IntroChangelogResult;
        mcVersion(): string;
        fullChangelogLines(): $List<string>;
        remoteAvailable(): boolean;
        localVersion(): string;
        allChangelogLines(): $List<string>;
        checkedUrl(): string;
        currentChangelogLines(): $List<string>;
        constructor(mcVersion: string, localVersion: string, checkedUrl: string, remoteAvailable: boolean, currentChangelogLines: $List_<string>, fullChangelogLines: $List_<string>, allChangelogLines: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $IntroChangelogResult}.
     */
    export type $IntroChangelogResult_ = { localVersion?: string, mcVersion?: string, allChangelogLines?: $List_<string>, fullChangelogLines?: $List_<string>, remoteAvailable?: boolean, checkedUrl?: string, currentChangelogLines?: $List_<string>,  } | [localVersion?: string, mcVersion?: string, allChangelogLines?: $List_<string>, fullChangelogLines?: $List_<string>, remoteAvailable?: boolean, checkedUrl?: string, currentChangelogLines?: $List_<string>, ];
    export class $IntroImageBlock$RenderMetrics extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IntroImageBlock$RenderMetrics}.
     */
    export type $IntroImageBlock$RenderMetrics_ = { width?: number, height?: number,  } | [width?: number, height?: number, ];
    export class $IntroImageManager$Holder {
    }
    export class $IntroDashboardSecondScreen$AutoScrollState {
    }
}
