import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $LootModifier, $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/denfop/loot" {
    export class $AddFromLootTableModifier extends $LootModifier {
        static CODEC: $MapCodec<$AddFromLootTableModifier>;
        static ADD_FROM_LOOT_TABLE: $DeferredHolder<$MapCodec<$IGlobalLootModifier>, $MapCodec<$AddFromLootTableModifier>>;
        constructor(arg0: $LootItemCondition[], arg1: $ResourceKey_<$LootTable>);
    }
}
