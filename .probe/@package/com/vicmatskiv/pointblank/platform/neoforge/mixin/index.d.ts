import { $BakedModel } from "@package/net/minecraft/client/resources/model";

declare module "@package/com/vicmatskiv/pointblank/platform/neoforge/mixin" {
    export class $BakedModelMixin {
    }
    export interface $BakedModelMixin {
        getBaseModel(): $BakedModel;
        get baseModel(): $BakedModel;
    }
    /**
     * Values that may be interpreted as {@link $BakedModelMixin}.
     */
    export type $BakedModelMixin_ = (() => $BakedModel);
}
