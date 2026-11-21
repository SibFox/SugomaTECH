import { $ConcurrentMap } from "@package/java/util/concurrent";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $AccessorPartialModel } from "@package/com/railwayteam/railways/mixin/client";

declare module "@package/dev/engine_room/flywheel/lib/model/baked" {
    export class $PartialModel implements $AccessorPartialModel {
        get(): $BakedModel;
        static of(modelLocation: $ResourceLocation_): $PartialModel;
        modelLocation(): $ResourceLocation;
        static getALL$railways_$md$6cde14$0(): $ConcurrentMap<any, any>;
        static setPopulateOnInit$railways_$md$6cde14$1(arg0: boolean): void;
        static getPopulateOnInit$railways_$md$6cde14$2(): boolean;
        railways$setBakedModel(arg0: $BakedModel): void;
        railways$getBakedModel(): $BakedModel;
        static get ALL$railways_$md$6cde14$0(): $ConcurrentMap<any, any>;
        static set populateOnInit$railways_$md$6cde14$1(value: boolean);
        static get populateOnInit$railways_$md$6cde14$2(): boolean;
    }
}
