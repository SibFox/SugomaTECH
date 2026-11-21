import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        setColor(arg0: $Colorc): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        tick(arg0: $QuasarParticle, arg1: number): void;
        setAdditive(arg0: boolean): void;
        isAdditive(): boolean;
        getRenderPosition(): $Vector3dc;
        setAlpha(arg0: number): void;
        getRenderRotation(): $Vector3fc;
        getAgePercent(): number;
        getRenderAge(): number;
        getRenderRadius(): number;
        getBlue(): number;
        getRed(): number;
        getGreen(): number;
        getAlpha(): number;
        getRenderType(): $RenderType;
        getPackedLight(): number;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        markDirty(): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        setFixedPackedLight(arg0: number): void;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        setGreen(arg0: number): void;
        getTrails(): $List<$Trail>;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getFixedPackedLight(): number;
        setSpriteData(arg0: $SpriteData_): void;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderPosition(): $Vector3dc;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get renderType(): $RenderType;
        get packedLight(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getForceModules(): $ForceParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        get allModules(): $ParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get initModules(): $InitParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        remove(): void;
        init(): void;
        getData(): $QuasarParticleData;
        onRemove(): void;
        getLevel(): $ClientLevel;
        getPosition(): $Vector3d;
        getSettings(): $ParticleSettings;
        render(arg0: number): void;
        tick(): void;
        getScheduler(): $TickTaskScheduler;
        getEnvironment(): $MolangEnvironment;
        getAge(): number;
        isRemoved(): boolean;
        getVelocity(): $Vector3d;
        getRotation(): $Vector3f;
        setAge(arg0: number): void;
        getModules(): $ParticleModuleSet;
        getBoundingBox(): $AABB;
        getRenderData(): $RenderData;
        getRadius(): number;
        setRadius(arg0: number): void;
        getRandomSource(): $RandomSource;
        getBlockPosition(): $BlockPos;
        getBlockStateInOrUnder(): $BlockState;
        getLifetime(): number;
        getEmitter(): $ParticleEmitter;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get data(): $QuasarParticleData;
        get level(): $ClientLevel;
        get position(): $Vector3d;
        get settings(): $ParticleSettings;
        get scheduler(): $TickTaskScheduler;
        get environment(): $MolangEnvironment;
        get removed(): boolean;
        get velocity(): $Vector3d;
        get rotation(): $Vector3f;
        get modules(): $ParticleModuleSet;
        get boundingBox(): $AABB;
        get renderData(): $RenderData;
        get randomSource(): $RandomSource;
        get blockPosition(): $BlockPos;
        get blockStateInOrUnder(): $BlockState;
        get lifetime(): number;
        get emitter(): $ParticleEmitter;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        getPosition(): $Vector3d;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        getRegistryName(): $ResourceLocation;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        getParticleSettings(): $ParticleSettings;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: $Vec3_): void;
        static clearErrors(): void;
        getRate(): number;
        setLoop(arg0: boolean): void;
        setRate(arg0: number): void;
        getParticleCount(): number;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        getAttachedEntity(): $Entity;
        setForceSpawn(arg0: boolean): void;
        getParticleData(): $QuasarParticleData;
        setMaxLifetime(arg0: number): void;
        getMaxParticles(): number;
        isForceSpawn(): boolean;
        setMaxParticles(arg0: number): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        setAttachedEntity(arg0: $Entity): void;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
        get registryName(): $ResourceLocation;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        sprite(): $ResourceLocation;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        stretchToLifetime(): boolean;
        frameHeight(): number;
        frameTime(): number;
        frameWidth(): number;
        frameCount(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number,  } | [frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number, ];
}
