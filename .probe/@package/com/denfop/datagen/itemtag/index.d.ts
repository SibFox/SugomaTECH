import { $TagBuilder, $TagKey_ } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemTagsProvider, $TagsProvider$TagLookup_ } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List, $Map } from "@package/java/util";
import { $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/com/denfop/datagen/itemtag" {
    export class $IItemTag {
    }
    export interface $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemTagProvider extends $ItemTagsProvider {
        addPlateDense(arg0: string, arg1: $Item_): void;
        addPlate(arg0: string, arg1: $Item_): void;
        addCustom(arg0: string, arg1: $Item_): void;
        addIngot(arg0: string, arg1: $Item_): void;
        addGem(arg0: string, arg1: $Item_): void;
        addDust(arg0: string, arg1: $Item_): void;
        addCasing(arg0: string, arg1: $Item_): void;
        static containsInAnyTag(arg0: $ItemStack_, ...arg1: $TagKey_<$Item>[]): boolean;
        static containsInTag(arg0: $ResourceLocation_, arg1: $Item_): boolean;
        static containsInTag(arg0: $TagKey_<$Item>, arg1: $ItemStack_): boolean;
        registryKey: $ResourceKey<$Registry<$Item>>;
        static mapItems: $Map<$ResourceLocation, $List<$ItemStack>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        static list: $List<$IItemTag>;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg3: $ExistingFileHelper);
    }
}
