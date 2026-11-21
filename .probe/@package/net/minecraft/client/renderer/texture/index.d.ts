import { $HttpTextureAccess, $TextureAccess } from "@package/journeymap/client/texture";
import { $AnimatedTextureDuck, $IPotentiallyInvisibleSpriteContents } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor as $SpriteContentsTickerAccessor$1, $SpriteContentsAccessor as $SpriteContentsAccessor$2, $TextureAtlasAccessor as $TextureAtlasAccessor$1, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$2 } from "@package/net/irisshaders/iris/mixin/texture";
import { $SpriteContentsExtension as $SpriteContentsExtension$4, $TextureAtlasSpriteExtension } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $TextureMetadataSection } from "@package/net/minecraft/client/resources/metadata/texture";
import { $FrameSize_, $AnimationMetadataSection } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ITextureSize } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $PBRAtlasHolder, $PBRSpriteHolder, $SpriteContentsExtension, $TextureAtlasExtension as $TextureAtlasExtension$1 } from "@package/net/irisshaders/iris/pbr/texture";
import { $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor as $SpriteContentsAnimatedTextureAccessor$1, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $SpriteFinderImpl$SpriteFinderAccess as $SpriteFinderImpl$SpriteFinderAccess$1 } from "@package/appeng/thirdparty/fabric";
import { $RuntimeException, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $File_, $File, $IOException, $Closeable } from "@package/java/io";
import { $SpriteInstance } from "@package/com/supermartijn642/fusion/api/texture/custom";
import { $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/irisshaders/iris/pbr";
import { $TextureAtlasSpriteExtension as $TextureAtlasSpriteExtension$1 } from "@package/com/supermartijn642/fusion/extensions";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $IMixinDynamicTexture } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $TickerExtension, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $SpriteContentsAccessor as $SpriteContentsAccessor$1, $TextureAtlasAccessor as $TextureAtlasAccessor$2 } from "@package/net/conczin/immersive_furniture/mixin/client";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getWidth(): number;
        getHeight(): number;
        stitch(): void;
        registerSprite(stitcherEntry: T): void;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        static smallestFittingMinTexel(dimension: number, mipLevel: number): number;
        mipLevel: number;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        handler$bgg000$veil$bind(arg0: $CallbackInfo): void;
        restoreLastBlurMipmap(): void;
        handler$bgg000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        releaseId(): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor();
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        static pack(u: number, hurt: boolean): number;
        static pack(u: number, v: number): number;
        teardownOverlayColor(): void;
        setupOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $HttpTextureAccess {
        journeymap$getNativeImage(): $NativeImage;
        processLegacySkin(image: $NativeImage): $NativeImage;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        file: $File;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        urlString: string;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        getPixel(animatedTexture: $SpriteContents$AnimatedTexture, frameIndex: number, mipLevel: number, x: number, y: number): number;
        handler$eag000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
        uploadInterpolatedFrame(x: number, y: number, ticker: $SpriteContents$Ticker): void;
        activeFrame: $NativeImage[];
        this$0: $SpriteContents;
        constructor(arg0: $SpriteContents);
    }
    export class $SpriteLoader$Preparations extends $Record {
        width(): number;
        height(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        missing(): $TextureAtlasSprite;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, width?: number, missing?: $TextureAtlasSprite,  } | [height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, width?: number, missing?: $TextureAtlasSprite, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(entry: T, mipLevel: number);
        constructor(entry: T, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { height?: number, entry?: $Stitcher$Entry, width?: number,  } | [height?: number, entry?: $Stitcher$Entry, width?: number, ];
    export class $SpriteLoader {
        static create(atlas: $TextureAtlas): $SpriteLoader;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        handler$ifc000$particlerain$stitch(arg0: $List_<any>, arg1: number, arg2: $Executor_, arg3: $CallbackInfoReturnable<any>): void;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        spriteContentsList: $List<any>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$2, $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
        constructor(index: number, time: number);
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor$1, $SpriteContentsTickerAccessor, $TickerExtension {
        close(): void;
        tickAndUpload(x: number, y: number): void;
        handler$eac000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        simulated$isPlaying(): boolean;
        simulated$setPlaying(arg0: boolean): void;
        getFrameIndex(): number;
        getFrame(): number;
        setFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getSubFrame(): number;
        setSubFrame(arg0: number): void;
        getFrameTicks(): number;
        subFrame: number;
        animationInfo: $SpriteContents$AnimatedTexture;
        frame: number;
        constructor(animationInfo: $SpriteContents, interpolationData: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData | null);
        get frameIndex(): number;
        get frameTicks(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$3, $SpriteContentsAccessor$2, $SpriteContentsExtension, $SpriteContentsInvoker, $SpriteContentsExtension$1, $SpriteContentsAccessor, $SpriteContentsExtension$4, $SpriteContentsExtension$2, $IPotentiallyInvisibleSpriteContents, $SpriteContentsAccessor$1 {
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        height(): number;
        metadata(): $ResourceMetadata;
        upload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        createTicker(): $SpriteTicker;
        uploadFirstFrame(x: number, y: number): void;
        getPBRHolder(): $PBRSpriteHolder;
        increaseMipLevel(mipLevel: number): void;
        getUniqueFrames(): $IntStream;
        isTransparent(frame: number, x: number, y: number): boolean;
        getFrameCount(): number;
        railways$isVisible(): boolean;
        getCreatedTicker(): $SpriteContents$Ticker;
        sodium$isActive(): boolean;
        sodium$setActive(arg0: boolean): void;
        getOriginalImage(): $NativeImage;
        createAnimatedTexture(frameSize: $FrameSize_, width: number, height: number, metadata: $AnimationMetadataSection): $SpriteContents$AnimatedTexture;
        simulated$getTicker(): $SpriteContents$Ticker;
        sodium$hasAnimation(): boolean;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        railways$uploadFrame(arg0: boolean): void;
        sodium$hasTransparentPixels(): boolean;
        railways$shouldDoInvisibility(): boolean;
        sodium$hasTranslucentPixels(): boolean;
        getImages(): $NativeImage[];
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getMipLevelData(): $NativeImage[];
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        immersiveFurniture$getFrameCount(): number;
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get PBRHolder(): $PBRSpriteHolder;
        get uniqueFrames(): $IntStream;
        get frameCount(): number;
        get createdTicker(): $SpriteContents$Ticker;
        get images(): $NativeImage[];
        get mipLevelData(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $IMixinDynamicTexture, $TextureAccess {
        getPixels(): $NativeImage;
        setPixels(pixels: $NativeImage): void;
        upload(): void;
        journeymap$putScale(arg0: number, arg1: $DynamicTexture): void;
        journeymap$getWidth(): number;
        journeymap$hasImage(): boolean;
        journeymap$getHeight(): number;
        journeymap$setDisplayWidth(arg0: number): void;
        journeymap$getScaledImage(arg0: number): $DynamicTexture;
        wrapOperation$lab000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_<any>): void;
        wrapOperation$lab000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        journeymap$setDisplayHeight(arg0: number): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        setPixelsKonkrete(pixels: $NativeImage): void;
        getPixelsKonkrete(): $NativeImage;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor$1, $AnimatedTextureDuck {
        createTicker(): $SpriteTicker;
        uploadFirstFrame(x: number, y: number): void;
        getUniqueFrames(): $IntStream;
        getFrameY(frameIndex: number): number;
        getFrameX(frameIndex: number): number;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        railways$uploadWithVisibility(): void;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        invokeUploadFrame(x: number, y: number, frameIndex: number): void;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        this$0: $SpriteContents;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor$1, $TextureAtlasExtension$1, $ResourceTextureAtlasAccessor, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl$SpriteFinderAccess$1, $TextureAtlasAccessor$2 {
        location(): $ResourceLocation;
        getWidth(): number;
        getHeight(): number;
        tick(): void;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        upload(preparations: $SpriteLoader$Preparations_): void;
        maxSupportedTextureSize(): number;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        fabric_spriteFinder(): $SpriteFinderImpl;
        cycleAnimationFrames(): void;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        clearTextureData(): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        getPBRHolder(): $PBRAtlasHolder;
        getSprites(): $List<$SpriteContents>;
        sodium$getHeight(): number;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getMipLevel(): number;
        callGetHeight(): number;
        callGetWidth(): number;
        sodium$getWidth(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        blur: boolean;
        id: number;
        sprites: $List<$SpriteContents>;
        constructor(location: $ResourceLocation_);
        get width(): number;
        get height(): number;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get PBRHolder(): $PBRAtlasHolder;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        add(holder: $Stitcher$Holder_<T>): boolean;
        getY(): number;
        getX(): number;
        constructor(originX: number, originY: number, width: number, height: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor, $ITextureSize {
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
        getTextureImage(resourceManager: $ResourceManager): $SimpleTexture$TextureImage;
        getWidth(): number;
        getHeight(): number;
        getLocation(): $ResourceLocation;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(location: $ResourceLocation_);
        get width(): number;
        get height(): number;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $TextureManagerExtension, $IdentifiableResourceReloadListener {
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        close(): void;
        release(path: $ResourceLocation_): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        tick(): void;
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        getFabricDependencies(): $Collection<any>;
        dumpAllSheets(path: $Path_): void;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        getFabricId(): $ResourceLocation;
        bindForSetup(path: $ResourceLocation_): void;
        handler$bfp000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        modify$bhd000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension$1, $TextureAtlasSpriteExtension {
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        contents(): $SpriteContents;
        getY(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        atlasLocation(): $ResourceLocation;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        getU(u: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        getV(u: number): number;
        getX(): number;
        createTicker(): $TextureAtlasSprite$Ticker;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        uploadFirstFrame(): void;
        getVOffset(u: number): number;
        getUOffset(u: number): number;
        setFusionSpriteInstance(instance: $SpriteInstance): void;
        getFusionSpriteInstance(): $SpriteInstance;
        sodium$hasUnknownImageContents(): boolean;
        x: number;
        y: number;
        v0: number;
        u0: number;
        v1: number;
        u1: number;
        constructor(atlasLocation: $ResourceLocation_, contents: $SpriteContents, originX: number, originY: number, x: number, y: number);
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
        static load(resourceManager: $ResourceManager, location: $ResourceLocation_): $SimpleTexture$TextureImage;
        close(): void;
        getImage(): $NativeImage;
        throwIfError(): void;
        getTextureMetadata(): $TextureMetadataSection;
        constructor(exception: $IOException);
        constructor(metadata: $TextureMetadataSection | null, image: $NativeImage);
        get image(): $NativeImage;
        get textureMetadata(): $TextureMetadataSection;
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
