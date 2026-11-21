import { $InputStream, $Closeable } from "@package/java/io";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AspectRatio } from "@package/de/keksuccino/fancymenu/util/rendering";
export * as resources from "@package/de/keksuccino/fancymenu/util/resource/resources";

declare module "@package/de/keksuccino/fancymenu/util/resource" {
    export class $PlayableResource {
    }
    export interface $PlayableResource extends $Resource {
        stop(): void;
        pause(): void;
        isPaused(): boolean;
        isPlaying(): boolean;
        play(): void;
        get paused(): boolean;
        get playing(): boolean;
    }
    export class $Resource {
    }
    export interface $Resource extends $Closeable {
        open(): $InputStream;
        isClosed(): boolean;
        isReady(): boolean;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        waitForReady(arg0: number): void;
        isLoadingCompleted(): boolean;
        isLoadingFailed(): boolean;
        get closed(): boolean;
        get ready(): boolean;
        get loadingCompleted(): boolean;
        get loadingFailed(): boolean;
    }
    export class $RenderableResource {
        static MISSING_TEXTURE_LOCATION: $ResourceLocation;
        static FULLY_TRANSPARENT_TEXTURE: $ResourceLocation;
    }
    export interface $RenderableResource extends $Resource {
        reset(): void;
        getWidth(): number;
        getHeight(): number;
        getAspectRatio(): $AspectRatio;
        getResourceLocation(): $ResourceLocation;
        get width(): number;
        get height(): number;
        get aspectRatio(): $AspectRatio;
        get resourceLocation(): $ResourceLocation;
    }
}
