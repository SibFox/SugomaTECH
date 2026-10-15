import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Set } from "@package/java/util";
import { $DistancePredicate_, $DistancePredicate, $EntityPredicate_, $EntityPredicate } from "@package/net/minecraft/advancements/critereon";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemFilter_, $ItemFilter } from "@package/com/almostreliable/lootjs/core/filters";
import { $LootItemCondition, $LootItemConditionType } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext, $ValidationContext } from "@package/net/minecraft/world/level/storage/loot";
export * as builder from "@package/com/almostreliable/lootjs/loot/condition/builder";

declare module "@package/com/almostreliable/lootjs/loot/condition" {
    export class $MatchPlayer extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): $EntityPredicate;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(predicate: $EntityPredicate_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MatchPlayer}.
     */
    export type $MatchPlayer_ = { predicate?: $EntityPredicate_,  } | [predicate?: $EntityPredicate_, ];
    export class $MatchBiome extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        biomes(): $HolderSet<$Biome>;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(biomes: $HolderSet_<$Biome>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MatchBiome}.
     */
    export type $MatchBiome_ = { biomes?: $HolderSet_<$Biome>,  } | [biomes?: $HolderSet_<$Biome>, ];
    export class $CustomParamPredicate<T> implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(arg0: $LootContextParam<$LootContext>, arg1: $Predicate_<$LootContext>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $PlayerParamPredicate implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(arg0: $Predicate_<$ServerPlayer>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $MatchEquipmentSlot extends $Record implements $LootItemCondition {
        slot(): $EquipmentSlot;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        itemFilter(): $ItemFilter;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(slot: $EquipmentSlot_, itemFilter: $ItemFilter_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MatchEquipmentSlot}.
     */
    export type $MatchEquipmentSlot_ = { slot?: $EquipmentSlot_, itemFilter?: $ItemFilter_,  } | [slot?: $EquipmentSlot_, itemFilter?: $ItemFilter_, ];
    export class $IsLightLevel extends $Record implements $LootItemCondition {
        min(): number;
        max(): number;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(min: number, max: number);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $IsLightLevel}.
     */
    export type $IsLightLevel_ = { max?: number, min?: number,  } | [max?: number, min?: number, ];
    export class $MatchKillerDistance extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): $DistancePredicate;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(predicate: $DistancePredicate_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MatchKillerDistance}.
     */
    export type $MatchKillerDistance_ = { predicate?: $DistancePredicate_,  } | [predicate?: $DistancePredicate_, ];
    export class $MatchStructure extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        exact(): boolean;
        structures(): $HolderSet<$Structure>;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(structures: $HolderSet_<$Structure>, exact: boolean);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MatchStructure}.
     */
    export type $MatchStructure_ = { structures?: $HolderSet_<$Structure>, exact?: boolean,  } | [structures?: $HolderSet_<$Structure>, exact?: boolean, ];
    export class $MatchDimension extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        dimensions(): $ResourceLocation[];
        getType(): $LootItemConditionType;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(dimensions: $ResourceLocation_[]);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MatchDimension}.
     */
    export type $MatchDimension_ = { dimensions?: $ResourceLocation_[],  } | [dimensions?: $ResourceLocation_[], ];
    export class $MatchAnyInventorySlot extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        filter(): $ItemFilter;
        getType(): $LootItemConditionType;
        hotbar(): boolean;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor(filter: $ItemFilter_, hotbar: boolean);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MatchAnyInventorySlot}.
     */
    export type $MatchAnyInventorySlot_ = { filter?: $ItemFilter_, hotbar?: boolean,  } | [filter?: $ItemFilter_, hotbar?: boolean, ];
}
