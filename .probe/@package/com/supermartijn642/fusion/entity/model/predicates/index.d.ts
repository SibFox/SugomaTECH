import { $Entity } from "@package/net/minecraft/world/entity";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/entity/model/predicates" {
    export class $EntityModelPredicate {
    }
    export interface $EntityModelPredicate {
        test(entity: $Entity): boolean;
        or(...predicates: $EntityModelPredicate[]): $EntityModelPredicate;
        negate(): $EntityModelPredicate;
        and(...predicates: $EntityModelPredicate[]): $EntityModelPredicate;
        simplify(): $EntityModelPredicate;
        alwaysTrue(): boolean;
        getSerializer(): $Serializer<$EntityModelPredicate>;
        alwaysFalse(): boolean;
        get serializer(): $Serializer<$EntityModelPredicate>;
    }
}
