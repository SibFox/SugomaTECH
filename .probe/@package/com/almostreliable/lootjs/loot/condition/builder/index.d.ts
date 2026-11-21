import { $MinMaxBounds$Doubles_, $DistancePredicate } from "@package/net/minecraft/advancements/critereon";

declare module "@package/com/almostreliable/lootjs/loot/condition/builder" {
    export class $DistancePredicateBuilder {
        x(arg0: $MinMaxBounds$Doubles_): $DistancePredicateBuilder;
        z(arg0: $MinMaxBounds$Doubles_): $DistancePredicateBuilder;
        y(arg0: $MinMaxBounds$Doubles_): $DistancePredicateBuilder;
        build(): $DistancePredicate;
        absolute(arg0: $MinMaxBounds$Doubles_): $DistancePredicateBuilder;
        horizontal(arg0: $MinMaxBounds$Doubles_): $DistancePredicateBuilder;
        constructor();
    }
}
