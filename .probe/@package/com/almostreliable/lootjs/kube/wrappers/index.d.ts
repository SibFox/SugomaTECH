import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $IdFilter, $LootTableFilter, $ItemFilter } from "@package/com/almostreliable/lootjs/core/filters";
import { $BlockFilter } from "@package/com/almostreliable/lootjs/util";
import { $Object } from "@package/java/lang";
import { $ItemLootEntry, $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $MobEffectsPredicate, $LightPredicate, $PlayerPredicate$AdvancementPredicate, $MinMaxBounds$Doubles, $StatePropertiesPredicate, $EntitySubPredicate, $NbtPredicate, $ItemPredicate, $EntityTypePredicate, $MinMaxBounds$Ints, $DamageSourcePredicate } from "@package/net/minecraft/advancements/critereon";

declare module "@package/com/almostreliable/lootjs/kube/wrappers" {
    export class $MinMaxBoundsWrapper {
        static ofMinMaxDoubles(arg0: $RegistryAccessContainer, arg1: $Object): $MinMaxBounds$Doubles;
        static ofMinMaxInt(arg0: $RegistryAccessContainer, arg1: $Object): $MinMaxBounds$Ints;
        constructor();
    }
    export class $MobEffectsPredicateWrapper {
        static of(arg1: $Object): $MobEffectsPredicate;
        constructor();
    }
    export class $ItemFilterWrapper {
        static ofItemFilter(arg1: $Object): $ItemFilter;
        constructor();
    }
    export class $StatePropsPredicateWrapper {
        static of(arg0: $Object | null): $StatePropertiesPredicate;
        constructor();
    }
    export class $BasicWrapper {
        static ofIdFilter(arg0: $Object): $IdFilter;
        static ofNbtPredicate(arg1: $Object, arg2: $TypeInfo_): $NbtPredicate;
        static ofBlockFilter(arg1: $Object): $BlockFilter;
        static ofLightPredicate(arg0: $RegistryAccessContainer, arg1: $Object): $LightPredicate;
        static ofLootTableFilter(arg0: $Object): $LootTableFilter;
        static ofAdvancementPredicate(arg0: $RegistryAccessContainer, arg1: $Object): $PlayerPredicate$AdvancementPredicate;
        static ofEntityTypePredicate(arg1: $Object | null): $EntityTypePredicate;
        static ofDamageSourcePredicate(arg1: $Object, arg2: $TypeInfo_): $DamageSourcePredicate;
        static ofEntitySubPredicate(arg1: $Object, arg2: $TypeInfo_): $EntitySubPredicate;
        static EMPTY_ENTITY_TYPE_PREDICATE: $EntityTypePredicate;
        constructor();
    }
    export class $NumberProviderWrapper {
        static constant(arg0: number): $NumberProvider;
        static binomial(arg0: $NumberProvider_, arg1: $NumberProvider_): $NumberProvider;
        static uniform(arg0: $NumberProvider_, arg1: $NumberProvider_): $NumberProvider;
        constructor();
    }
    export class $LootEntryWrapper {
        static ofItemLootEntry(arg1: $Object | null): $ItemLootEntry;
        static ofLootEntry(arg1: $Object | null): $LootEntry;
        constructor();
    }
    export class $ItemPredicateWrapper {
        static of(arg1: $Object, arg2: $TypeInfo_): $ItemPredicate;
        constructor();
    }
}
