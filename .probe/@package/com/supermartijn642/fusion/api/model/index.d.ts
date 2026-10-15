import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ItemTransform, $ItemOverride, $BlockModel$GuiLight } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $List, $Map, $Collection } from "@package/java/util";
import { $ModelGeometry } from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
import { $UntypedModelInstance, $ModelTransform, $ModelBakingContext, $ModelStack, $ModelMaterial } from "@package/com/supermartijn642/fusion/api/model/custom";
import { $Property, $Serializer, $Either } from "@package/com/supermartijn642/fusion/api/util";
export * as custom from "@package/com/supermartijn642/fusion/api/model/custom";
export * as predicates from "@package/com/supermartijn642/fusion/api/model/predicates";

declare module "@package/com/supermartijn642/fusion/api/model" {
    export class $ModelInstance<T> {
        static of<T>(modelType: $ModelType<T>, modelData: T): $ModelInstance<T>;
    }
    export interface $ModelInstance<T> extends $UntypedModelInstance {
        getModelData(): T;
        getModelType(): $ModelType<T>;
        get modelData(): T;
        get modelType(): $ModelType<T>;
    }
    export class $ModelType<T> {
    }
    export interface $ModelType<T> extends $Serializer<T> {
        getProperty<X, C>(property: $Property<X, C>, context: C, data: T): (X) | undefined;
        getParents(data: T): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        getDependencies(data: T): $Collection<$ResourceLocation>;
        getShade(data: T): boolean;
        getMaterials(data: T): $Map<string, $Either<string, $ModelMaterial>>;
        getCondition(data: T): $ModelPredicate;
        getItemTransform(type: $ItemDisplayContext_, data: T): $ItemTransform;
        getTransform(data: T): $ModelTransform;
        bakeModel(context: $ModelBakingContext, modelStack: $ModelStack, data: T): $BakedModel;
        getAmbientOcclusion(data: T): boolean;
        getGeometry(data: T): $ModelGeometry;
        getItemOverrides(data: T): $List<$ItemOverride>;
        getGuiLight(data: T): $BlockModel$GuiLight;
        getEmissive(data: T): boolean;
    }
}
