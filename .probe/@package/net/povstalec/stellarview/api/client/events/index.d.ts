import { $ViewCenter } from "@package/net/povstalec/stellarview/client/resourcepack";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $HashMap, $Map_, $Map } from "@package/java/util";
import { $DustCloudInfo, $StarInfo } from "@package/net/povstalec/stellarview/common/util";
import { $SpaceObjectRenderer } from "@package/net/povstalec/stellarview/client/render/space_objects";

declare module "@package/net/povstalec/stellarview/api/client/events" {
    export class $SpaceRendererReloadEvent extends $Event implements $ICancellableEvent {
        getRenderedSpaceObjects(): $Map<$ResourceLocation, $SpaceObjectRenderer<never>>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $HashMap<$ResourceLocation_, $SpaceObjectRenderer<never>>);
        get renderedSpaceObjects(): $Map<$ResourceLocation, $SpaceObjectRenderer<never>>;
    }
    export class $StellarViewReloadEvent extends $Event implements $ICancellableEvent {
        getJsonMap(): $Map<$ResourceLocation, $JsonElement>;
        getManager(): $ResourceManager;
        getFiller(): $ProfilerFiller;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Map_<$ResourceLocation_, $JsonElement_>, arg1: $ResourceManager, arg2: $ProfilerFiller);
        get jsonMap(): $Map<$ResourceLocation, $JsonElement>;
        get manager(): $ResourceManager;
        get filler(): $ProfilerFiller;
    }
    export class $ViewCenterReloadEvent extends $Event implements $ICancellableEvent {
        getViewCenters(): $Map<$ResourceLocation, $ViewCenter>;
        getRenderedSpaceObjects(): $Map<$ResourceLocation, $SpaceObjectRenderer<never>>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $HashMap<$ResourceLocation_, $SpaceObjectRenderer<never>>, arg1: $HashMap<$ResourceLocation_, $ViewCenter>);
        get viewCenters(): $Map<$ResourceLocation, $ViewCenter>;
        get renderedSpaceObjects(): $Map<$ResourceLocation, $SpaceObjectRenderer<never>>;
    }
    export class $StellarViewEffectsReloadEvent extends $Event implements $ICancellableEvent {
        getStarTypes(): $Map<$ResourceLocation, $StarInfo>;
        getDustCloudTypes(): $Map<$ResourceLocation, $DustCloudInfo>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $HashMap<$ResourceLocation_, $StarInfo>, arg1: $HashMap<$ResourceLocation_, $DustCloudInfo>);
        get starTypes(): $Map<$ResourceLocation, $StarInfo>;
        get dustCloudTypes(): $Map<$ResourceLocation, $DustCloudInfo>;
    }
}
