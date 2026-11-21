import { $Closeable } from "@package/java/io";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $DepthShader, $CoverageShader, $ShadingShader, $ShaderParameters_, $DebugShader } from "@package/com/qendolin/betterclouds/clouds/shaders";
import { $Matrix4f, $Vector3d } from "@package/org/joml";
import { $Config } from "@package/com/qendolin/betterclouds/config";
export * as shaders from "@package/com/qendolin/betterclouds/clouds/shaders";

declare module "@package/com/qendolin/betterclouds/clouds" {
    export class $Renderer$PrepareResult extends $Enum<$Renderer$PrepareResult> {
        static values(): $Renderer$PrepareResult[];
        static valueOf(name: string): $Renderer$PrepareResult;
        static NO_RENDER: $Renderer$PrepareResult;
        static FALLBACK: $Renderer$PrepareResult;
        static RENDER: $Renderer$PrepareResult;
    }
    /**
     * Values that may be interpreted as {@link $Renderer$PrepareResult}.
     */
    export type $Renderer$PrepareResult_ = "render" | "no_render" | "fallback";
    export class $Renderer implements $AutoCloseable {
        resources(): $Resources;
        close(): void;
        prepare(viewMat: $Matrix4f, projMat: $Matrix4f, ticks: number, tickDelta: number, cam: $Vector3d): $Renderer$PrepareResult;
        reload(manager: $ResourceManager): void;
        render(ticks: number, tickDelta: number, cam: $Vector3d, frustumPos: $Vector3d, frustum: $Frustum): void;
        setWorld(world: $ClientLevel): void;
        getWorldSeed(): number;
        constructor(client: $Minecraft);
        set world(value: $ClientLevel);
        get worldSeed(): number;
    }
    export class $PerfTimer implements $AutoCloseable {
        reset(): void;
        start(): void;
        stop(): void;
        close(): void;
        frames(): number;
        cpu(): $List<number>;
        gpu(): $List<number>;
        constructor();
    }
    export class $ChunkedGenerator implements $AutoCloseable {
        update(camera: $Vector3d, cloudTicks: number, rendererTicks: number, tickDelta: number, options: $Config, cloudiness: number): void;
        clear(): void;
        buffer(): $Buffer;
        close(): void;
        config(): $Config;
        swap(): void;
        allocate(options: $Config, fancy: boolean): void;
        bind(): void;
        generate(): void;
        unbind(): void;
        chunks(): $List<$ChunkedGenerator$ChunkIndex>;
        originX(): number;
        originZ(): number;
        instanceVertexCount(): number;
        reallocateIfStale(options: $Config, fancy: boolean): boolean;
        renderOriginX(cameraX: number): number;
        renderOriginZ(cameraZ: number): number;
        canGenerate(): boolean;
        canSwap(): boolean;
        canRender(): boolean;
        generating(): boolean;
        cloudCount(): number;
        static cacheHash(x: number, z: number): number;
        constructor(seed: number);
    }
    export class $ChunkedGenerator$ChunkIndex {
        count(): number;
        bounds(cloudsHeight: number, sizeXZ: number, sizeY: number): $AABB;
        start(): number;
        constructor(start: number, count: number, bounds: $AABB_);
    }
    export class $Resources implements $Closeable {
        close(): void;
        generator(): $ChunkedGenerator;
        timer(): $PerfTimer;
        reloadShaders(manager: $ResourceManager, shaderParameters: $ShaderParameters_): void;
        reloadMeshPrimitives(): void;
        deleteMeshPrimitives(): void;
        failedToLoadCritical(): boolean;
        oitCoverageDepthTexture(): number;
        reloadFramebuffer(width: number, height: number): void;
        reloadGenerator(seed: number, fancy: boolean): void;
        oitDataTexture(): number;
        oitCoverageTexture(): number;
        shadingShader(): $ShadingShader;
        reloadTextures(client: $Minecraft): void;
        coverageShader(): $CoverageShader;
        deleteShaders(): void;
        debugShader(): $DebugShader;
        deleteTimer(): void;
        deleteGenerator(): void;
        deleteFramebuffer(): void;
        depthShader(): $DepthShader;
        oitFbo(): number;
        fboWidth(): number;
        fboHeight(): number;
        static unbindVao(): void;
        cubeVao(): number;
        static unbindVbo(): void;
        reloadTimer(): void;
        static NOISE_TEXTURE: $ResourceLocation;
        static LIGHTING_TEXTURE: $ResourceLocation;
        constructor();
    }
    export class $Buffer implements $AutoCloseable {
        put(x: number, y: number, z: number): void;
        clear(): void;
        close(): void;
        swap(): void;
        bind(): void;
        unbind(): void;
        hasChanged(size: number, fancy: boolean, persistent: boolean): boolean;
        setVAPointerToInstance(baseInstance: number): void;
        instanceVertexCount(): number;
        bindDrawBuffer(): void;
        swapCount(): number;
        constructor(size: number, fancy: boolean, preferPersistent: boolean);
        set VAPointerToInstance(value: number);
    }
}
