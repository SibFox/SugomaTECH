import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AnimationMetadataSection } from "@package/net/minecraft/client/resources/metadata/animation";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $EmittableQuad, $MutableQuad } from "@package/com/supermartijn642/fusion/api/model/custom/quad";
import { $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $TextureType, $RawTextureInstance } from "@package/com/supermartijn642/fusion/api/texture";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Object } from "@package/java/lang";
import { $PropertyStore } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/texture/custom" {
    export class $TextureCreationContext {
    }
    export interface $TextureCreationContext {
        getIdentifier(): $ResourceLocation;
        getImage(): $NativeImage;
        getImageWidth(): number;
        getImageHeight(): number;
        getAnimationMetadata(): $AnimationMetadataSection;
        get identifier(): $ResourceLocation;
        get image(): $NativeImage;
        get imageWidth(): number;
        get imageHeight(): number;
        get animationMetadata(): $AnimationMetadataSection;
    }
    export class $TextureInstance<X> {
    }
    export interface $TextureInstance<X> {
        getIdentifier(): $ResourceLocation;
        getSprites(): $List<$SpriteInstance>;
        getCustomData(): X;
        initializeModelQuad(quad: $MutableQuad, sprite: $SpriteInstance, properties: $PropertyStore): $QuadProcessor<never>;
        getDefaultSprite(): $SpriteInstance;
        getTextureType(): $TextureType<never, X>;
        get identifier(): $ResourceLocation;
        get sprites(): $List<$SpriteInstance>;
        get customData(): X;
        get defaultSprite(): $SpriteInstance;
        get textureType(): $TextureType<never, X>;
    }
    export class $SpriteBuilder {
    }
    export interface $SpriteBuilder {
        name(name: string): $SpriteBuilder;
        image(image: $SpriteImageSource): $SpriteBuilder;
        submit(): void;
        setCreationCallback(callback: $Consumer_<$SpriteInstance>): $SpriteBuilder;
        markDefaultSprite(): $SpriteBuilder;
        markDefaultSprite(markDefault: boolean): $SpriteBuilder;
        customConstructor(width: number, height: number, arg2: $SpriteBuilder$Constructor): $SpriteBuilder;
        set creationCallback(value: $Consumer_<$SpriteInstance>);
    }
    export class $TextureOutput<X> {
    }
    export interface $TextureOutput<X> {
        setCustomData(customData: X): void;
        setCreationCallback(callback: $Consumer_<$TextureInstance<X>>): void;
        createSprite(): $SpriteBuilder;
        createSubTexture<Y>(texture: $RawTextureInstance<never, Y>, name: string, image: $NativeImage, animationMetadata: $AnimationMetadataSection): $TextureOutput$SubTextureOutput<Y>;
        set customData(value: X);
        set creationCallback(value: $Consumer_<$TextureInstance<X>>);
    }
    export class $TextureOutput$SubTextureOutput<X> {
    }
    export interface $TextureOutput$SubTextureOutput<X> {
        submit(): void;
        setCreationCallback(callback: $Consumer_<$TextureInstance<X>>): $TextureOutput$SubTextureOutput<X>;
        markDefault(markDefault: boolean): $TextureOutput$SubTextureOutput<X>;
        markDefault(): $TextureOutput$SubTextureOutput<X>;
        set creationCallback(value: $Consumer_<$TextureInstance<X>>);
    }
    export class $QuadProcessor<S> {
    }
    export interface $QuadProcessor<S> {
        processQuad(quad: $EmittableQuad, sprite: $SpriteInstance, state: S, properties: $PropertyStore): void;
        extractState(randomSupplier: $Supplier_<$RandomSource>, properties: $PropertyStore): S;
        extractState(stack: $ItemStack_, randomSupplier: $Supplier_<$RandomSource>, properties: $PropertyStore): S;
        extractState(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, randomSupplier: $Supplier_<$RandomSource>, properties: $PropertyStore): S;
        createGeometryKey(state: S, properties: $PropertyStore): $Object;
    }
    export class $SpriteInstance {
    }
    export interface $SpriteInstance {
        getIdentifier(): $ResourceLocation;
        getSprite(): $TextureAtlasSprite;
        getU0(): number;
        getV1(): number;
        getU1(): number;
        getV0(): number;
        getTexture(): $TextureInstance<never>;
        get identifier(): $ResourceLocation;
        get sprite(): $TextureAtlasSprite;
        get u0(): number;
        get v1(): number;
        get u1(): number;
        get v0(): number;
        get texture(): $TextureInstance<never>;
    }
}
