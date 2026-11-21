import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $LootModifier } from "@package/com/almostreliable/lootjs/loot/modifier";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $HolderLookup$Provider, $RegistryAccess, $Registry, $Holder$Reference, $HolderGetter$Provider, $WritableRegistry, $Holder, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $RegistryOps, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $IdFilter } from "@package/com/almostreliable/lootjs/core/filters";
import { $LootItemConditionType } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $LootTable, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
export * as core from "@package/com/almostreliable/lootjs/core";
export * as kube from "@package/com/almostreliable/lootjs/kube";
export * as util from "@package/com/almostreliable/lootjs/util";
export * as loot from "@package/com/almostreliable/lootjs/loot";
export * as mixin from "@package/com/almostreliable/lootjs/mixin";

declare module "@package/com/almostreliable/lootjs" {
    export class $LootJSConditions {
        static DISTANCE: $Holder<$LootItemConditionType>;
        static MATCH_PLAYER: $Holder<$LootItemConditionType>;
        static MATCH_EQUIP: $Holder<$LootItemConditionType>;
        static BIOME: $Holder<$LootItemConditionType>;
        static PLAYER_PARAM: $Holder<$LootItemConditionType>;
        static LIGHT_LEVEL: $Holder<$LootItemConditionType>;
        static ANY_DIMENSION: $Holder<$LootItemConditionType>;
        static MATCH_ANY_INVENTORY_SLOT: $Holder<$LootItemConditionType>;
        static PARAM: $Holder<$LootItemConditionType>;
        static ANY_STRUCTURE: $Holder<$LootItemConditionType>;
        constructor();
    }
    export class $LookupProvider implements $HolderLookup$Provider {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        constructor(arg0: $RegistryAccess);
    }
    export class $LootEvents {
        static invoke(arg0: $WritableRegistry<$LootTable>): void;
        static listen(arg0: $Consumer_<$WritableRegistry<$LootTable>>): void;
        static invokeModifiers(arg0: $Map_<$ResourceLocation_, $IGlobalLootModifier>): void;
        static listenModifiers(arg0: $Consumer_<$Map<$ResourceLocation, $IGlobalLootModifier>>): void;
        constructor();
    }
    export class $LootJS {
        static lookup(): $HolderLookup$Provider;
        static storeLookup(arg0: $RegistryAccess): void;
        static DEBUG_ACTION: $Consumer<string>;
        static LOG: $Logger;
        static LOOKUP_PROVIDER: $HolderLookup$Provider;
        constructor(arg0: $IEventBus);
    }
    export class $LootModificationsAPI {
        modifiers(): $List<$LootModifier>;
        static isDebug(): boolean;
        static reload(): void;
        static invokeActions(arg0: $List_<$ItemStack_>, arg1: $LootContext): void;
        static addModification(arg0: $LootModifier): void;
        static DISABLE_WITHER_DROPPING_NETHER_STAR: boolean;
        static DISABLE_ZOMBIE_DROPPING_HEAD: boolean;
        static FILTERS: $List<$IdFilter>;
        static DISABLE_SKELETON_DROPPING_HEAD: boolean;
        static DEBUG_LOOT_MODIFIERS: boolean;
        static DISABLE_CREEPER_DROPPING_HEAD: boolean;
        static get debug(): boolean;
    }
    export class $BuildConfig {
        static MOD_ID: string;
        static MOD_NAME: string;
        static MOD_VERSION: string;
    }
    export class $PlatformLoader {
        constructor();
    }
}
