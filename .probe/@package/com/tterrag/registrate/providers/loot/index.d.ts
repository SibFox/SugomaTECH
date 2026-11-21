import { $Consumer_, $BiConsumer, $Consumer } from "@package/java/util/function";
import { $HolderLookup$Provider, $WritableRegistry, $Holder } from "@package/net/minecraft/core";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTableSubProvider, $LootTableProvider } from "@package/net/minecraft/data/loot";
import { $RegistrateProvider } from "@package/com/tterrag/registrate/providers";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $NonNullConsumer_ } from "@package/com/tterrag/registrate/util/nullness";
import { $LootTable, $ValidationContext, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $PackOutput } from "@package/net/minecraft/data";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/com/tterrag/registrate/providers/loot" {
    export class $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> {
        static register<T extends $RegistrateLootTables>(arg0: string, arg1: $LootContextParamSet, arg2: $TriFunction_<$HolderLookup$Provider, $AbstractRegistrate<any>, $Consumer<T>, T>): $RegistrateLootTableProvider$LootType<T>;
        static ENTITY: $RegistrateLootTableProvider$LootType<$RegistrateEntityLootTables>;
        static BLOCK: $RegistrateLootTableProvider$LootType<$RegistrateBlockLootTables>;
    }
    export interface $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> {
        getLootSet(): $LootContextParamSet;
        getLootCreator(arg0: $HolderLookup$Provider, arg1: $AbstractRegistrate<never>, arg2: $Consumer_<T>): T;
        get lootSet(): $LootContextParamSet;
    }
    export class $RegistrateLootTables {
    }
    export interface $RegistrateLootTables extends $LootTableSubProvider {
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistrateLootTables}.
     */
    export type $RegistrateLootTables_ = (() => void);
    export class $RegistrateLootTableProvider extends $LootTableProvider implements $RegistrateProvider {
        resolve<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        getProvider(): $HolderLookup$Provider;
        getSide(): $LogicalSide;
        addLootAction(arg0: $LootContextParamSet, arg1: $Consumer_<$BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>>): void;
        addLootAction<T extends $RegistrateLootTables>(arg0: $RegistrateLootTableProvider$LootType<T>, arg1: $NonNullConsumer_<T>): void;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>);
        get provider(): $HolderLookup$Provider;
        get side(): $LogicalSide;
    }
}
