import { $IMixinKeyBinding } from "@package/org/anti_ad/mc/ipnext/mixin";
import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$1 } from "@package/traben/entity_model_features/mixin/mixins/accessor";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $AccessorKeyMapping } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $MinecraftAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$2 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $RecipeBookCategoriesAccessor } from "@package/org/sinytra/connector/mod/mixin/recipebook";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $IMixinOptions, $IMixinMinecraft } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $KeyBindingAccessor } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor as $MinecraftAccessor$1, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $Map_, $List_, $Collection, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $KeyMappingAccessor as $KeyMappingAccessor$1, $MouseHandlerAccessor as $MouseHandlerAccessor$3 } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $AccessorMinecraft } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Thread, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $MinecraftAccessorMixin } from "@package/com/vicmatskiv/pointblank/mixin";
import { $MetricsRecorder } from "@package/net/minecraft/util/profiling/metrics/profiling";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $StringSplitterAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/team/creative/creativecore/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $IMixinMinecraft as $IMixinMinecraft$1 } from "@package/de/keksuccino/drippyloadingscreen/mixin/mixins/common/client";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$2 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $KeyMappingAccessor } from "@package/net/blay09/mods/kuma/mixin";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $MinecraftClientAccessor } from "@package/net/bettercombat/mixin/client";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $IMixinMouseHandler } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $ChatVisiblity, $PlayerModelPart } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $KeyMappingInvoker } from "@package/dev/simulated_team/simulated/mixin/hold_interaction";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $Gson } from "@package/com/google/gson";
import { $KeyMappingAccessorMixin } from "@package/immersive_aircraft/mixin/client";
import { $WeaponAttributes$Attack, $MinecraftClient_BetterCombat, $AttackHand } from "@package/net/bettercombat/api";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CameraAccessor } from "@package/dev/kosmx/playerAnim/mixin/firstPerson";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $MinecraftClientAccess } from "@package/fudge/notenoughcrashes/patches";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$3, $MouseHandlerAccessor$2, $IMixinMouseHandler, $MouseHandlerAccessor, $MouseHandlerAccessor$1 {
        setup(windowPointer: number): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        ypos(): number;
        xpos(): number;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        handler$cbo000$supplementaries$supp$onMoveMouse(arg0: $CallbackInfo): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        getXVelocity(): number;
        getYVelocity(): number;
        wrapWithCondition$cbo000$supplementaries$supp$onMoveMouse(arg0: $LocalPlayer, arg1: number, arg2: number): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        getActiveButtonKonkrete(): number;
        getLastHandleMovementTime(): number;
        getMouseX(): number;
        getMouseY(): number;
        create$setYPos(movementTime: number): void;
        getActiveButton(): number;
        create$setXPos(movementTime: number): void;
        constructor(minecraft: $Minecraft);
        set up(value: number);
        get mouseGrabbed(): boolean;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get XVelocity(): number;
        get YVelocity(): number;
        get rightPressed(): boolean;
        get activeButtonKonkrete(): number;
        get lastHandleMovementTime(): number;
        get mouseX(): number;
        get mouseY(): number;
        get activeButton(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getSessionId(): string;
        getAccessToken(): string;
        getProfileId(): $UUID;
        getXuid(): (string) | undefined;
        getClientId(): (string) | undefined;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get sessionId(): string;
        get accessToken(): string;
        get profileId(): $UUID;
        get xuid(): (string) | undefined;
        get clientId(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        getCollections(): $List<$RecipeCollection>;
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
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
        constructor(options: $Options, x: number, y: number, width: number, height: number, instance: $OptionInstance<N>, values: $OptionInstance$SliderableValueSet<N>, tooltipSupplier: $OptionInstance$TooltipSupplier_<N>, onValueChanged: $Consumer_<N>, applyValueImmediately: boolean);
    }
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        codec(): $Codec<T>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>,  } | [codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { title?: string, period?: number, delay?: number, message?: string,  } | [title?: string, period?: number, delay?: number, message?: string, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        saveRow(): void;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options implements $IMixinOptions {
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        static isTrue(value: string): boolean;
        static isFalse(value: string): boolean;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        dumpOptionsForReport(): string;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        hideSplashTexts(): $OptionInstance<boolean>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        glintSpeed(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        fov(): $OptionInstance<number>;
        gamma(): $OptionInstance<number>;
        guiScale(): $OptionInstance<number>;
        narrator(): $OptionInstance<$NarratorStatus>;
        fullscreen(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        simulationDistance(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        framerateLimit(): $OptionInstance<number>;
        enableVsync(): $OptionInstance<boolean>;
        mipmapLevels(): $OptionInstance<number>;
        rawMouseInput(): $OptionInstance<boolean>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        getCameraType(): $CameraType;
        setCameraType(pointOfView: $CameraType_): void;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        renderDistance(): $OptionInstance<number>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        chatLinks(): $OptionInstance<boolean>;
        getMenuBackgroundBlurriness(): number;
        chatOpacity(): $OptionInstance<number>;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        textBackgroundOpacity(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        handler$llg000$parcool$onGetCameraType(arg0: $CallbackInfoReturnable<any>): void;
        static genericValueLabel(text: $Component_, value: number): $Component;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        autoJump(): $OptionInstance<boolean>;
        getBackgroundColor(chatColor: number): number;
        getBackgroundColor(opacity: number): number;
        notificationDisplayTime(): $OptionInstance<number>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        entityDistanceScaling(): $OptionInstance<number>;
        chatHeightUnfocused(): $OptionInstance<number>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        darknessEffectScale(): $OptionInstance<number>;
        getSoundSourceVolume(category: $SoundSource_): number;
        mouseWheelSensitivity(): $OptionInstance<number>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        setServerRenderDistance(serverRenderDistance: number): void;
        buildPlayerInformation(): $ClientInformation;
        getBackgroundOpacity(opacity: number): number;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        hideLightningFlash(): $OptionInstance<boolean>;
        getCloudsType(): $CloudStatus;
        operatorItemsTab(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        invertYMouse(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        chatHeightFocused(): $OptionInstance<number>;
        autoSuggestions(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        highContrast(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        panoramaSpeed(): $OptionInstance<number>;
        narratorHotkey(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        touchscreen(): $OptionInstance<boolean>;
        screenEffectScale(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        chatColors(): $OptionInstance<boolean>;
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        getModelPartsFancyMenu(): $Set<$PlayerModelPart>;
        invokeProcessOptionsFancyMenu(accessor: $Options$FieldAccess): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        modelParts: $Set<$PlayerModelPart>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        static LOGGER: $Logger;
        keyMappings: $KeyMapping[];
        minecraft: $Minecraft;
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        static GSON: $Gson;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get file(): $File;
        get effectiveRenderDistance(): number;
        set serverRenderDistance(value: number);
        get cloudsType(): $CloudStatus;
        get modelPartsFancyMenu(): $Set<$PlayerModelPart>;
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        codec(): $Codec<number>;
        validateValue(value: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        applyValueImmediately(): boolean;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { applyValueImmediately?: boolean, maxInclusive?: number, minInclusive?: number,  } | [applyValueImmediately?: boolean, maxInclusive?: number, minInclusive?: number, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        reset(): void;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        clickCount: number;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        defaultKey: $InputConstants$Key;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        codec(): $Codec<number>;
        validateValue(value: number): (number) | undefined;
        fromSliderValue(value: number): number;
        toSliderValue(value: number): number;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        applyValueImmediately(): boolean;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        advanceTime(time: number, arg1: boolean): number;
        updatePauseState(frozen: boolean): void;
        updateFrozenState(frozen: boolean): void;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        addedTime(): number;
        endOfEntry(): boolean;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number,  } | [endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        updateNarratorStatus(status: $NarratorStatus_): void;
        sayNow(message: string): void;
        sayNow(message: $Component_): void;
        say(message: $Component_): void;
        checkStatus(narratorEnabled: boolean): void;
        sayChat(message: $Component_): void;
        narrator: $Narrator;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        codec(): $Codec<number>;
        validateValue(value: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        maxSupplier(): $IntSupplier;
        createCycleButton(): boolean;
        encodableMaxInclusive(): number;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        applyValueImmediately(): boolean;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number, minInclusive?: number,  } | [maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number, minInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        fromSliderValue(value: number): T;
        toSliderValue(value: T): number;
        applyValueImmediately(): boolean;
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        icon(): $GuiMessageTag$Icon;
        logTag(): string;
        static chatError(): $GuiMessageTag;
        static systemSinglePlayer(): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        indicatorColor(): number;
        static chatModified(originalText: string): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_, logTag?: string,  } | [icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_, logTag?: string, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        apply(object: $Map_<string, $List_<$PeriodicNotificationManager$Notification_>>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        close(): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): $Map<string, $List<$PeriodicNotificationManager$Notification>>;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        icon(): $GuiMessageTag$Icon;
        addedTime(): number;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number,  } | [signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        getIconItems(): $List<$ItemStack>;
        static setAGGREGATE_CATEGORIES$connector_$md$6cde14$0(arg0: $Map_<any, any>): void;
        static REFURBISHED_FURNITURE_MICROWAVE_ITEMS: $RecipeBookCategories;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_SEARCH: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_MISC: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_SEARCH: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_FOOD: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_BLOCKS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_BLOCKS: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_BLOCKS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_MISC: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_SEARCH: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_FOOD: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_MISC: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_MICROWAVE_FOOD: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_FREEZER_ITEMS: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static REFURBISHED_FURNITURE_OVEN_ITEMS: $RecipeBookCategories;
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
        static set AGGREGATE_CATEGORIES$connector_$md$6cde14$0(value: $Map_<any, any>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search" | "refurbished_furniture_freezer_blocks" | "refurbished_furniture_freezer_food" | "refurbished_furniture_freezer_items" | "refurbished_furniture_freezer_misc" | "refurbished_furniture_freezer_search" | "refurbished_furniture_microwave_blocks" | "refurbished_furniture_microwave_food" | "refurbished_furniture_microwave_items" | "refurbished_furniture_microwave_misc" | "refurbished_furniture_microwave_search" | "refurbished_furniture_oven_blocks" | "refurbished_furniture_oven_food" | "refurbished_furniture_oven_items" | "refurbished_furniture_oven_misc" | "refurbished_furniture_oven_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        codec(): $Codec<T>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { codec?: $Codec<any>, values?: $List_<any>,  } | [codec?: $Codec<any>, values?: $List_<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        history(): $Collection<string>;
        addCommand(command: string): void;
        constructor(path: $Path_);
    }
    export class $Camera implements $CameraAccessor, $CameraZoomExtension, $CameraWaterOcclusionExtension {
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        move(zoom: number, dy: number, dx: number): void;
        getPosition(): $Vec3;
        tick(): void;
        sable$setZoomAmount(arg0: number): void;
        getUpVector(): $Vector3f;
        sable$isOccluded(): boolean;
        sable$getZoomAmount(): number;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        isInitialized(): boolean;
        rotation(): $Quaternionf;
        getEntity(): $Entity;
        isDetached(): boolean;
        getRoll(): number;
        getBlockAtCamera(): $BlockState;
        getLookVector(): $Vector3f;
        getLeftVector(): $Vector3f;
        getXRot(): number;
        getYRot(): number;
        getNearPlane(): $Camera$NearPlane;
        getMaxZoom(maxZoom: number): number;
        setRotation(zoom: number, dy: number, dx: number): void;
        /**
         * @deprecated
         */
        setRotation(yRot: number, xRot: number): void;
        /**
         * Sets the position and blockpos of the active render
         */
        setPosition(x: number, arg1: number, y: number): void;
        setPosition(pos: $Vec3_): void;
        handler$jjf000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        getBlockPosition(): $BlockPos;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        handler$jcj000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$jee001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$fhh000$immersive_aircraft$ia$setup(area: $BlockGetter, entity: $Entity, thirdPerson: boolean, inverseView: boolean, tickDelta: number, ci: $CallbackInfo): void;
        handler$cba000$supplementaries$supp$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        setDetached(arg0: boolean): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        static $assertionsDisabled: boolean;
        constructor();
        get upVector(): $Vector3f;
        get initialized(): boolean;
        get entity(): $Entity;
        get roll(): number;
        get blockAtCamera(): $BlockState;
        get lookVector(): $Vector3f;
        get leftVector(): $Vector3f;
        get XRot(): number;
        get YRot(): number;
        get nearPlane(): $Camera$NearPlane;
        get blockPosition(): $BlockPos;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient,  } | [quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(value: $Object): void;
        codec(): $Codec<$Object>;
        createButton(options: $Options): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<$Object>): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        getInitialValue(): $Object;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: $Object;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, codec: $Codec<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftAccessor, $MinecraftAccessorMixin, $IMixinMinecraft$1, $MinecraftClientAccessor, $MinecraftClient_BetterCombat, $MinecraftClientAccess, $AccessorMinecraft, $MinecraftClientAccessor$1, $MinecraftClientAccessor$2, $MinecraftClientKJS, $MinecraftAccessor$1, $IMixinMinecraft {
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        getConnection(): $ClientPacketListener;
        getRecorder(): $MetricsRecorder;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        disconnect(nextScreen: $Screen): void;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        modifyReturnValue$bmd000$exposure$onGetMainRenderTarget(original: $RenderTarget): $RenderTarget;
        handler$hho000$inventoryprofilesnext$handleInputEvents(arg0: $CallbackInfo): void;
        redirect$dlc000$glitchcore$startUseItem_getItemInHand(arg0: $LocalPlayer, arg1: $InteractionHand_): $ItemStack;
        handler$mgm000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        reloadResourcePacks(): $CompletableFuture<void>;
        getMainRenderTarget(): $RenderTarget;
        emergencySaveAndCrash(report: $CrashReport): void;
        handler$bjo000$balm$run(arg0: $CallbackInfo): void;
        handler$bia001$veil$close(arg0: $CallbackInfo): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        getTelemetryManager(): $ClientTelemetryManager;
        createWorldOpenFlows(): $WorldOpenFlows;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        getProgressListener(): $StoringChunkProgressListener;
        getDownloadedPackSource(): $DownloadedPackSource;
        getResourcePackDirectory(): $Path;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        getReportingContext(): $ReportingContext;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        getResourcePackRepository(): $PackRepository;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        getSituationalMusic(): $Music;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        getVanillaPackResources(): $VanillaPackResources;
        getMinecraftSessionService(): $MinecraftSessionService;
        getPlayerSocialManager(): $PlayerSocialManager;
        getCurrentAttackHand(): $AttackHand;
        getScheduledEvents(): $ScheduledEvents;
        handler$fig000$prism$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        handler$bgo000$veil$endFrame(arg0: $CallbackInfo): void;
        handler$bgo000$veil$beginFrame(arg0: $CallbackInfo): void;
        handler$lgi001$iceberg$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        handler$lbo000$ae2$pickColor(arg0: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        handler$ldk000$ae2wtlib$pickBlock(arg0: $CallbackInfo, arg1: $ItemStack_, arg2: number): void;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        handler$bmd000$exposure$disconnect(nextScreen: $Screen, keepResourcePacks: boolean, ci: $CallbackInfo): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getCurrentServer(): $ServerData;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        getProxy(): $Proxy;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        getProfiler(): $ProfilerFiller;
        setOverlay(loadingGui: $Overlay | null): void;
        getWindow(): $Window;
        setScreen(nextScreen: $Screen | null): void;
        delayCrash(report: $CrashReport): void;
        getToasts(): $ToastComponent;
        getFps(): number;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        pauseGame(leftClick: boolean): void;
        isBlocked(playerUUID: $UUID_): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        getUser(): $User;
        getOverlay(): $Overlay;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        handler$hfp000$collective$Minecraft_setLevel(arg0: $ClientLevel, arg1: $ReceivingLevelScreen$Reason_, arg2: $CallbackInfo): void;
        handler$bae000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$lmd000$cryonicconfig$clearServerConfig(ci: $CallbackInfo): void;
        localvar$mgm000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        getTextureManager(): $TextureManager;
        renderBuffers(): $RenderBuffers;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        directoryValidator(): $DirectoryValidator;
        setWindowActive(leftClick: boolean): void;
        commandHistory(): $CommandHistory;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        multiplayerBan(): $BanDetails;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateFontOptions(): void;
        static checkModStatus(): $ModCheck;
        getBlockRenderer(): $BlockRenderDispatcher;
        getDebugOverlay(): $DebugScreenOverlay;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        getItemRenderer(): $ItemRenderer;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        getModelManager(): $ModelManager;
        getChatStatus(): $Minecraft$ChatStatus;
        setLastInputType(lastInputType: $InputType_): void;
        delayCrashRaw(report: $CrashReport): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        getFrameTimeNs(): number;
        getCameraEntity(): $Entity;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        handleKeybinds(): void;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        clearClientLevel(nextScreen: $Screen): void;
        forceSetScreen(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        getGpuUtilization(): number;
        addCustomNbtData(stack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        getBlockColors(): $BlockColors;
        getGuiSprites(): $GuiSpriteManager;
        getLastInputType(): $InputType;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getLanguageManager(): $LanguageManager;
        getSplashManager(): $SplashManager;
        getGameProfile(): $GameProfile;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        getSkinManager(): $SkinManager;
        getFixerUpper(): $DataFixer;
        delayTextureReload(): $CompletableFuture<void>;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        getItemColors(): $ItemColors;
        getEntityModels(): $EntityModelSet;
        getTutorial(): $Tutorial;
        setCameraEntity(viewingEntity: $Entity): void;
        getSoundManager(): $SoundManager;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        getHotbarManager(): $HotbarManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        getNarrator(): $GameNarrator;
        getChatListener(): $ChatListener;
        setRecorder(recorder: $MetricsRecorder): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasTargetsInReach(): boolean;
        getComboCount(): number;
        getSwingProgress(): number;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cancelUpswing(): void;
        getUpswingTicks(): number;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        handler$jbe000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        handler$kka004$distanthorizons$close(ci: $CallbackInfo): void;
        handler$bmd000$exposure$onSetScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$bmd000$exposure$onStartAttack(cir: $CallbackInfoReturnable<any>): void;
        handler$dlc000$glitchcore$onBeginTick(arg0: $CallbackInfo): void;
        handler$dlc000$glitchcore$onEndTick(arg0: $CallbackInfo): void;
        handler$bmd000$exposure$onStartUseItem(ci: $CallbackInfo): void;
        handler$dlc001$glitchcore$onStartUseItem(arg0: $CallbackInfo): void;
        handler$bmd000$exposure$onLevelUnload(newLevel: $ClientLevel, reason: $ReceivingLevelScreen$Reason_, ci: $CallbackInfo): void;
        handler$clm000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        getResourceManager(): $ResourceManager;
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        pushGuiLayer(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWeaponSwingInProgress(): boolean;
        getCursorTarget(): $Entity;
        getCurrentAttack(): $WeaponAttributes$Attack;
        setStatusMessage(message: $Component_): void;
        getCurrentScreen(): $Screen;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getKeyBindPressedTicks(id: string): number;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setCurrentScreen(nextScreen: $Screen): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        tell(message: $Component_): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        isKeyBindDown(id: string): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        getName(): $Component;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        setTitle(defaultText: string): void;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getTimer(): $DeltaTracker$Timer;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        setMainRenderTarget(arg0: $RenderTarget): void;
        bookshelf$getFontManager(): $FontManager;
        openChatScreenFancyMenu(defaultText: string): void;
        ldlib2$getClientTickCount(): number;
        getReloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        setAttackCooldown(keyCount: number): void;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        getMissTime(): number;
        getFontManagerDrippy(): $FontManager;
        itemColors: $ItemColors;
        static instance: $Minecraft;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        running: boolean;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        static fps: number;
        static $assertionsDisabled: boolean;
        gameThread: $Thread;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        toast: $ToastComponent;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        get connection(): $ClientPacketListener;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get singleplayerServer(): $IntegratedServer;
        get telemetryManager(): $ClientTelemetryManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get progressListener(): $StoringChunkProgressListener;
        get downloadedPackSource(): $DownloadedPackSource;
        get resourcePackDirectory(): $Path;
        get textFilteringEnabled(): boolean;
        get reportingContext(): $ReportingContext;
        get paintingTextures(): $PaintingTextureManager;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get resourcePackRepository(): $PackRepository;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get situationalMusic(): $Music;
        get vanillaPackResources(): $VanillaPackResources;
        get minecraftSessionService(): $MinecraftSessionService;
        get playerSocialManager(): $PlayerSocialManager;
        get currentAttackHand(): $AttackHand;
        get scheduledEvents(): $ScheduledEvents;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get profileKeySignatureValidator(): $SignatureValidator;
        get currentServer(): $ServerData;
        get proxy(): $Proxy;
        static get launcherBrand(): string;
        get profiler(): $ProfilerFiller;
        get window(): $Window;
        get toasts(): $ToastComponent;
        get demo(): boolean;
        get user(): $User;
        get paused(): boolean;
        get textureManager(): $TextureManager;
        get localServer(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get debugOverlay(): $DebugScreenOverlay;
        get gameLoadFinished(): boolean;
        get itemRenderer(): $ItemRenderer;
        get levelSource(): $LevelStorageSource;
        get launchedVersion(): string;
        get enforceUnicode(): boolean;
        get modelManager(): $ModelManager;
        get chatStatus(): $Minecraft$ChatStatus;
        get versionType(): string;
        get frameTimeNs(): number;
        get musicManager(): $MusicManager;
        get nameBanned(): boolean;
        get gpuUtilization(): number;
        get blockColors(): $BlockColors;
        get guiSprites(): $GuiSpriteManager;
        get languageManager(): $LanguageManager;
        get splashManager(): $SplashManager;
        get gameProfile(): $GameProfile;
        get skinManager(): $SkinManager;
        get fixerUpper(): $DataFixer;
        get entityModels(): $EntityModelSet;
        get tutorial(): $Tutorial;
        get soundManager(): $SoundManager;
        get hotbarManager(): $HotbarManager;
        get singleplayer(): boolean;
        get narrator(): $GameNarrator;
        get chatListener(): $ChatListener;
        get comboCount(): number;
        get swingProgress(): number;
        get upswingTicks(): number;
        get resourceManager(): $ResourceManager;
        get locale(): $Locale;
        get weaponSwingInProgress(): boolean;
        get cursorTarget(): $Entity;
        get currentAttack(): $WeaponAttributes$Attack;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get currentWorldName(): string;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get altDown(): boolean;
        get ctrlDown(): boolean;
        get shiftDown(): boolean;
        get displayName(): $Component;
        get timer(): $DeltaTracker$Timer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get reloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        set attackCooldown(value: number);
        get fontManagerDrippy(): $FontManager;
    }
    export class $Camera$NearPlane {
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        getBottomRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getTopRight(): $Vec3;
        getTopLeft(): $Vec3;
        forward: $Vec3;
        constructor(forward: $Vec3_, left: $Vec3_, up: $Vec3_);
        get bottomRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get topRight(): $Vec3;
        get topLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        static create$nochatreports_$md$6cde14$0(arg0: string, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified" | "chat_ncr_encrypted";
    export class $KeyboardHandler {
        setup(window: number): void;
        tick(): void;
        handler$ecn000$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: $CallbackInfo): void;
        handler$ecn000$emi$onChar(window: number, codePoint: number, modifiers: number, info: $CallbackInfo): void;
        handler$fed000$notenoughcrashes$pollDebugCrashDontCrashInfinitely(ci: $CallbackInfo): void;
        setClipboard(string: string): void;
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        handler$mbm000$betterf3$processF3(key: number, cir: $CallbackInfoReturnable<any>): void;
        handler$bfl000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$dlb000$glitchcore$onKeyInput(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$bfl000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$mbm000$betterf3$processF3Messages(key: number, cir: $CallbackInfoReturnable<any>): void;
        getClipboard(): string;
        handler$cbh000$supplementaries$supp$onKeyPressCancellable(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        cached_key_FancyMenu: number;
        cached_scanCode_FancyMenu: number;
        cached_action_FancyMenu: number;
        cached_char_codePoint_FancyMenu: number;
        static DEBUG_CRASH_TIME: number;
        cached_char_windowPointer_FancyMenu: number;
        cached_char_modifiers_FancyMenu: number;
        cached_modifiers_FancyMenu: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        startRecovery(error: $Throwable): void;
        fillCrashReport(report: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        codec(): $Codec<T>;
        validateValue(value: T): (T) | undefined;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(part: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        codec(): $Codec<T>;
        validateValue(arg0: T): (T) | undefined;
        altValues(): $List<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altCondition(): $BooleanSupplier;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>,  } | [codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter implements $StringSplitterAccessor {
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        stringWidth(content: $FormattedText): number;
        stringWidth(content: $FormattedCharSequence_): number;
        stringWidth(content: string | null): number;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        getWidthProvider(): $StringSplitter$WidthProvider;
        widthProvider: $StringSplitter$WidthProvider;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingAccessor$1, $KeyMappingAccessor, $KeyMappingAccessorMixin, $AccessKeyMapping, $KeyMappingsAccessor, $KeyMappingInvoker, $AccessorKeyMapping, $IMixinKeyBinding, $KeyBindingAccessor, $KeyBindingAccessor$1 {
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        getCategory(): string;
        setKey(key: $InputConstants$Key): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        getDefaultKey(): $InputConstants$Key;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        getDefaultKeyModifier(): $KeyModifier;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getTranslatedKeyMessage(): $Component;
        getKeyConflictContext(): $IKeyConflictContext;
        saveString(): string;
        setDown(value: boolean): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        static click(key: $InputConstants$Key): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        getKeyModifier(): $KeyModifier;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$6cde14$4(): $Map<any, any>;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        getKey(): $InputConstants$Key;
        fabric_getTimesPressed(): number;
        setPressed(value: boolean): void;
        getTimesPressed(): number;
        setTimesPressed(arg0: number): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        getPressed(): boolean;
        getKeyCode(): $InputConstants$Key;
        controlling$getKey(): $InputConstants$Key;
        fabric_getBoundKey(): $InputConstants$Key;
        setClickCount(arg0: number): void;
        getClickCount(): number;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        invokeRelease(): void;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        clickCount: number;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        defaultKey: $InputConstants$Key;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string);
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        get default(): boolean;
        get name(): string;
        get unbound(): boolean;
        get category(): string;
        get defaultKeyModifier(): $KeyModifier;
        get translatedKeyMessage(): $Component;
        get keyModifier(): $KeyModifier;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get keyCode(): $InputConstants$Key;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        constructor(value: number);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        static byId(id: number): $NarratorStatus;
        shouldNarrateChat(): boolean;
        shouldNarrateSystem(): boolean;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static INFO_DISABLED_BY_PROFILE: $Component;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
