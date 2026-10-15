import { $TagBuilder } from "@package/net/minecraft/tags";
import { $BlockTagsProvider as $BlockTagsProvider$1, $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $Pair } from "@package/oshi/util/tuples";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List, $Map } from "@package/java/util";
import { $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/com/denfop/datagen/blocktags" {
    export class $BlockTagsProvider extends $BlockTagsProvider$1 {
        registryKey: $ResourceKey<$Registry<$Block>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        static list: $List<$IBlockTag>;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $IBlockTag {
    }
    export interface $IBlockTag {
        getBlock(): $Block;
        getHarvestLevel(): $Pair<string, number>;
        get block(): $Block;
        get harvestLevel(): $Pair<string, number>;
    }
}
