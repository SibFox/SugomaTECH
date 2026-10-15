import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/model/predicates/item" {
    export class $ItemModelPredicate {
    }
    export interface $ItemModelPredicate {
        test(stack: $ItemStack_): boolean;
        or(...predicates: $ItemModelPredicate[]): $ItemModelPredicate;
        negate(): $ItemModelPredicate;
        and(...predicates: $ItemModelPredicate[]): $ItemModelPredicate;
        simplify(): $ItemModelPredicate;
        alwaysTrue(): boolean;
        getSerializer(): $Serializer<$ItemModelPredicate>;
        alwaysFalse(): boolean;
        asModelPredicate(): $ModelPredicate;
        get serializer(): $Serializer<$ItemModelPredicate>;
    }
}
