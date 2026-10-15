import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ItemOverride, $BlockModel$GuiLight, $ItemTransform } from "@package/net/minecraft/client/renderer/block/model";
import { $Material, $ModelState, $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $List, $Map, $List_, $Collection } from "@package/java/util";
import { $QuadAccess, $MutableQuad } from "@package/com/supermartijn642/fusion/api/model/custom/quad";
import { $ModelGeometry } from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
import { $Consumer_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $ModelInstance } from "@package/com/supermartijn642/fusion/api/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $PropertyGetter, $Property, $Either } from "@package/com/supermartijn642/fusion/api/util";
import { $Vector3fc, $Matrix4fc, $Quaternionfc } from "@package/org/joml";
export * as geometry from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
export * as quad from "@package/com/supermartijn642/fusion/api/model/custom/quad";

declare module "@package/com/supermartijn642/fusion/api/model/custom" {
    export class $ModelBakingContext {
    }
    export interface $ModelBakingContext extends $ModelResolver {
        getMissingBakedModel(): $BakedModel;
        getModel(identifier: $ResourceLocation_): $ModelInstance<never>;
        getMaterial(material: $ModelMaterial): $TextureAtlasSprite;
        getTransformation(): $ModelTransform;
        pushWarning(warning: string): void;
        getModelIdentifier(): $ResourceLocation;
        walkModelTree<T>(modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
        walkModelTree<T>(model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
        get missingBakedModel(): $BakedModel;
        get transformation(): $ModelTransform;
        get modelIdentifier(): $ResourceLocation;
    }
    export class $CullableQuads$QuadMutator {
    }
    export interface $CullableQuads$QuadMutator {
        mutate(cullDirection: $Direction_, quad: $MutableQuad): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CullableQuads$QuadMutator}.
     */
    export type $CullableQuads$QuadMutator_ = ((cullDirection: $Direction, quad: $MutableQuad) => boolean);
    export class $UntypedModelInstance {
    }
    export interface $UntypedModelInstance extends $PropertyGetter {
        getParents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        getDependencies(): $Collection<$ResourceLocation>;
        getShade(): boolean;
        getMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        getCondition(): $ModelPredicate;
        getItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        getMaterial(key: string): $Either<string, $ModelMaterial>;
        getTransform(): $ModelTransform;
        bakeModel(context: $ModelBakingContext, modelStack: $ModelStack): $BakedModel;
        getAmbientOcclusion(): boolean;
        getGeometry(): $ModelGeometry;
        getItemOverrides(): $List<$ItemOverride>;
        getGuiLight(): $BlockModel$GuiLight;
        getEmissive(): boolean;
        get parents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        get dependencies(): $Collection<$ResourceLocation>;
        get shade(): boolean;
        get materials(): $Map<string, $Either<string, $ModelMaterial>>;
        get condition(): $ModelPredicate;
        get transform(): $ModelTransform;
        get ambientOcclusion(): boolean;
        get geometry(): $ModelGeometry;
        get itemOverrides(): $List<$ItemOverride>;
        get guiLight(): $BlockModel$GuiLight;
        get emissive(): boolean;
    }
    export class $ModelWalker<T> {
        static walkModelTree<T>(modelResolver: $ModelResolver_, model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
        static walkModelTree<T>(modelResolver: $ModelResolver_, modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
    }
    export interface $ModelWalker<T> {
        consume(modelInstance: $UntypedModelInstance, stack: $ModelStack): $ModelWalker$Result<T>;
    }
    /**
     * Values that may be interpreted as {@link $ModelWalker}.
     */
    export type $ModelWalker_<T> = ((modelInstance: $UntypedModelInstance, stack: $ModelStack) => $ModelWalker$Result<T>);
    export class $ModelMaterial {
        static of(atlas: $ResourceLocation_, texture: $ResourceLocation_): $ModelMaterial;
        static of(material: $Material): $ModelMaterial;
        static missing(atlas: $ResourceLocation_): $ModelMaterial;
        static blockAtlas(texture: $ResourceLocation_): $ModelMaterial;
        static isMissingSprite(sprite: $TextureAtlasSprite): boolean;
        static missingBlockAtlas(): $ModelMaterial;
    }
    export interface $ModelMaterial {
        texture(): $ResourceLocation;
        isMissing(): boolean;
        atlas(): $ResourceLocation;
        toMaterial(): $Material;
    }
    export class $CullableQuads {
        static builder(): $CullableQuads$Builder;
        static empty(): $CullableQuads;
        static combine(...quads: $CullableQuads[]): $CullableQuads;
    }
    export interface $CullableQuads {
        get(cullDirection: $Direction_): $List<$QuadAccess>;
        all(): $List<$QuadAccess>;
        up(): $List<$QuadAccess>;
        down(): $List<$QuadAccess>;
        west(): $List<$QuadAccess>;
        north(): $List<$QuadAccess>;
        south(): $List<$QuadAccess>;
        east(): $List<$QuadAccess>;
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads;
        unculled(): $List<$QuadAccess>;
    }
    export class $ModelWalker$Result<T> {
        static stop(): $ModelWalker$Result<void>;
        static stop<T>(value: T): $ModelWalker$Result<T>;
        static proceed<T>(): $ModelWalker$Result<T>;
        static endBranch<T>(): $ModelWalker$Result<T>;
        static stopIfPresent<T>(value: (T) | undefined): $ModelWalker$Result<T>;
    }
    export interface $ModelWalker$Result<T> {
    }
    export class $CullableQuads$Builder {
    }
    export interface $CullableQuads$Builder {
        add(quads: $CullableQuads): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quad: $QuadAccess): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quads: $List_<$QuadAccess>): $CullableQuads$Builder;
        build(): $CullableQuads;
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads$Builder;
    }
    export class $ModelStack {
        static empty(): $ModelStack;
    }
    export interface $ModelStack extends $Iterable<$UntypedModelInstance> {
        size(): number;
        get(index: number): $UntypedModelInstance;
        push(instance: $UntypedModelInstance): $ModelStack;
        push(instance: $UntypedModelInstance, identifier: $ResourceLocation_): $ModelStack;
        getIdentifier(index: number): $ResourceLocation;
        findPropertyIncludingParents<X, C>(property: $Property<X, C>, context: C, modelResolver: $ModelResolver_): (X) | undefined;
        findPropertyIncludingParents<X>(property: $Property<X, void>, modelResolver: $ModelResolver_): (X) | undefined;
        findMaterialIncludingParents(key: string, modelResolver: $ModelResolver_): $Either<string, $ModelMaterial>;
        findEmissiveIncludingParents(modelResolver: $ModelResolver_): boolean;
        findItemTransformIncludingParents(type: $ItemDisplayContext_, modelResolver: $ModelResolver_): $ItemTransform;
        findGuiLightIncludingParents(modelResolver: $ModelResolver_): $BlockModel$GuiLight;
        findProperty<X>(property: $Property<X, void>): (X) | undefined;
        findProperty<X, C>(property: $Property<X, C>, context: C): (X) | undefined;
        findShadeIncludingParents(modelResolver: $ModelResolver_): boolean;
        composeTransforms(): $ModelTransform;
        combineConditions(): $ModelPredicate;
        findAmbientOcclusionIncludingParents(modelResolver: $ModelResolver_): boolean;
        findMaterialRecursiveIncludingParents(key: string, reportCircular: $Consumer_<$List<string>>, modelResolver: $ModelResolver_): $ModelMaterial;
        findMaterialRecursive(key: string, reportCircular: $Consumer_<$List<string>>): $ModelMaterial;
        findAmbientOcclusion(): boolean;
        walkStackAndParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        findEmissive(): boolean;
        walkParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        findGuiLight(): $BlockModel$GuiLight;
        findItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        findMaterial(key: string): $Either<string, $ModelMaterial>;
        findMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        findGeometry(): $ModelGeometry;
        findShade(): boolean;
        walkStack<T>(walker: $ModelWalker_<T>): (T) | undefined;
        findMaterialsIncludingParents(modelResolver: $ModelResolver_): $Map<string, $Either<string, $ModelMaterial>>;
        findGeometryIncludingParents(modelResolver: $ModelResolver_): $ModelGeometry;
    }
    export class $ModelTransform {
        static of(matrix: $Matrix4fc, uvLock: boolean): $ModelTransform;
        static of(modelState: $ModelState): $ModelTransform;
        static of(transformation: $Transformation, uvLock: boolean): $ModelTransform;
        static identity(): $ModelTransform;
        static compose(...transforms: $ModelTransform[]): $ModelTransform;
    }
    export interface $ModelTransform {
        toTransformation(): $Transformation;
        scale(): $Vector3fc;
        translation(): $Vector3fc;
        matrix(): $Matrix4fc;
        uvLock(): boolean;
        rightRotation(): $Quaternionfc;
        toModelState(): $ModelState;
        leftRotation(): $Quaternionfc;
    }
    export class $ModelResolver {
        static MISSING_MODEL: $ResourceLocation;
    }
    export interface $ModelResolver {
        getModel(identifier: $ResourceLocation_): $UntypedModelInstance;
        getModelOrMissing(identifier: $ResourceLocation_): $UntypedModelInstance;
    }
    /**
     * Values that may be interpreted as {@link $ModelResolver}.
     */
    export type $ModelResolver_ = ((identifier: $ResourceLocation) => $UntypedModelInstance);
}
