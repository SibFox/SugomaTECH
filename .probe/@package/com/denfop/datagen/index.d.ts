import { $BaseShapelessRecipe, $BaseRecipe } from "@package/com/denfop/api/crafting";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $TagsProvider, $PoiTypeTagsProvider, $DamageTypeTagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LootPoolSingletonContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $RecipeBuilder, $RecipeOutput, $RecipeCategory_ } from "@package/net/minecraft/data/recipes";
import { $Map, $Set } from "@package/java/util";
import { $PaintingVariant_, $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $ItemModelProvider, $ItemModelBuilder } from "@package/net/neoforged/neoforge/client/model/generators";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $Criterion_ } from "@package/net/minecraft/advancements";
import { $Predicate, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $ConfiguredFeature, $ConfiguredFeature_ } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Record } from "@package/java/lang";
import { $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IngredientType, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $ItemLike_, $ItemLike } from "@package/net/minecraft/world/level";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagBuilder, $TagKey_ } from "@package/net/minecraft/tags";
import { $ExistingFileHelper, $GlobalLootModifierProvider, $ExistingFileHelper$ResourceType } from "@package/net/neoforged/neoforge/common/data";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $PlacedFeature_, $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Stream } from "@package/java/util/stream";
import { $LootTableProvider, $LootTableSubProvider } from "@package/net/minecraft/data/loot";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VanillaRecipeProvider } from "@package/net/minecraft/data/recipes/packs";
import { $DamageType_, $DamageType } from "@package/net/minecraft/world/damagesource";
export * as itemtag from "@package/com/denfop/datagen/itemtag";
export * as furnace from "@package/com/denfop/datagen/furnace";
export * as blocktags from "@package/com/denfop/datagen/blocktags";
export * as loader from "@package/com/denfop/datagen/loader";

declare module "@package/com/denfop/datagen" {
    export class $DamageTypeTags extends $DamageTypeTagsProvider {
        registryKey: $ResourceKey<$Registry<$DamageType>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $ModItemModelProvider extends $ItemModelProvider {
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $ItemModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $PackOutput, arg1: $ExistingFileHelper);
    }
    export class $IULootModifierProvider extends $GlobalLootModifierProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $PaintingVariantProvider {
        static bootstrap(arg0: $BootstrapContext<$PaintingVariant_>): void;
        static chemist_picture: $ResourceKey<$PaintingVariant>;
        constructor();
    }
    export class $StackComponent extends $Record implements $ICustomIngredient {
        stack(): $ItemStack;
        test(arg0: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getStackArray(): $ItemStack[];
        kjs$asIngredient(): $Ingredient;
        isWildcard(): boolean;
        testItem(item: $Item_): boolean;
        getStacks(): $ItemStackSet;
        getFirst(): $ItemStack;
        getItemIds(): $Set<string>;
        getItemTypes(): $Set<$Item>;
        getItemStream(): $Stream<$Item>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $Codec<$StackComponent>;
        constructor(stack: $ItemStack_);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get wildcard(): boolean;
        get stacks(): $ItemStackSet;
        get first(): $ItemStack;
        get itemIds(): $Set<string>;
        get itemTypes(): $Set<$Item>;
        get itemStream(): $Stream<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $StackComponent}.
     */
    export type $StackComponent_ = { stack?: $ItemStack_,  } | [stack?: $ItemStack_, ];
    export class $IUPoiTypeTagsProvider extends $PoiTypeTagsProvider {
        registryKey: $ResourceKey<$Registry<$PoiType>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $DamageTypes {
        static bootstrap(arg0: $BootstrapContext<$DamageType_>): void;
        static radiationObject: $ResourceKey<$DamageType>;
        static poison_gasObject: $ResourceKey<$DamageType>;
        static beeObject: $ResourceKey<$DamageType>;
        static currentObject: $ResourceKey<$DamageType>;
        static frostbiteObject: $ResourceKey<$DamageType>;
        constructor();
    }
    export class $IULootTables {
        static INJECT_JUNGLE_TEMPLE: $ResourceKey<$LootTable>;
        static INJECT_SIMPLE_DUNGEON: $ResourceKey<$LootTable>;
        static VOLCANO: $ResourceKey<$LootTable>;
        static INJECT_DESERT_PYRAMID: $ResourceKey<$LootTable>;
        static INJECT_NETHER_BRIDGE: $ResourceKey<$LootTable>;
        static INJECT_VILLAGE_TOOLSMITH: $ResourceKey<$LootTable>;
        static INJECT_STRONGHOLD_LIBRARY: $ResourceKey<$LootTable>;
        static INJECT_STRONGHOLD_CORRIDOR: $ResourceKey<$LootTable>;
        static INJECT_STRONGHOLD_CROSSING: $ResourceKey<$LootTable>;
        static INJECT_SPAWN_BONUS_CHEST: $ResourceKey<$LootTable>;
        static INJECT_ABANDONED_MINESHAFT: $ResourceKey<$LootTable>;
        static INJECT_END_CITY_TREASURE: $ResourceKey<$LootTable>;
        static INJECT_IGLOO_CHEST: $ResourceKey<$LootTable>;
    }
    export class $PaintingVariantTagsProvider extends $TagsProvider<$PaintingVariant> {
        registryKey: $ResourceKey<$Registry<$PaintingVariant>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $ConfiguredFeaturesGen {
        static bootstrap(arg0: $BootstrapContext<$ConfiguredFeature_<never, never>>): void;
        static OIL: $ResourceKey<$ConfiguredFeature<never, never>>;
        static SALTPETER: $ResourceKey<$ConfiguredFeature<never, never>>;
        static VOLCANO: $ResourceKey<$ConfiguredFeature<never, never>>;
        static CALCIUM: $ResourceKey<$ConfiguredFeature<never, never>>;
        static GEN_HIVE: $ResourceKey<$ConfiguredFeature<never, never>>;
        static RUB_TREE: $ResourceKey<$ConfiguredFeature<never, never>>;
        static GEN_GAS: $ResourceKey<$ConfiguredFeature<never, never>>;
        static GLOBAL_ORE: $ResourceKey<$ConfiguredFeature<never, never>>;
        static VEIN: $ResourceKey<$ConfiguredFeature<never, never>>;
        static PEAT: $ResourceKey<$ConfiguredFeature<never, never>>;
        constructor();
    }
    export class $IULootTableProvider extends $LootTableProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $RecipeProvider extends $VanillaRecipeProvider {
        static LAPIS_SMELTABLES: $ImmutableList<$ItemLike>;
        advancementPathProvider: $PackOutput$PathProvider;
        static EMERALD_SMELTABLES: $ImmutableList<$ItemLike>;
        static COPPER_SMELTABLES: $ImmutableList<$ItemLike>;
        static REDSTONE_SMELTABLES: $ImmutableList<$ItemLike>;
        static COAL_SMELTABLES: $ImmutableList<$ItemLike>;
        static ID: number;
        static GOLD_SMELTABLES: $ImmutableList<$ItemLike>;
        static IRON_SMELTABLES: $ImmutableList<$ItemLike>;
        recipePathProvider: $PackOutput$PathProvider;
        static DIAMOND_SMELTABLES: $ImmutableList<$ItemLike>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $ShapedRecipeBuilder implements $RecipeBuilder {
        group(arg0: string | null): $ShapedRecipeBuilder;
        add(arg0: $BaseRecipe): void;
        pattern(arg0: string): $ShapedRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        getResult(): $Item;
        define(arg0: string, arg1: $TagKey_<$Item>): $ShapedRecipeBuilder;
        define(arg0: string, arg1: $Ingredient_): $ShapedRecipeBuilder;
        define(arg0: string, arg1: $ItemLike_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemLike_): $ShapedRecipeBuilder;
        showNotification(arg0: boolean): $ShapedRecipeBuilder;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $ShapedRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        constructor(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
        get result(): $Item;
    }
    export class $ShapelessRecipeBuilder implements $RecipeBuilder {
        group(arg0: string | null): $ShapelessRecipeBuilder;
        add(arg0: $BaseShapelessRecipe): void;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        requires(arg0: $Ingredient_, arg1: number): $ShapelessRecipeBuilder;
        requires(arg0: $Ingredient_): $ShapelessRecipeBuilder;
        requires(arg0: $TagKey_<$Item>): $ShapelessRecipeBuilder;
        requires(arg0: $ItemLike_): $ShapelessRecipeBuilder;
        requires(arg0: $ItemLike_, arg1: number): $ShapelessRecipeBuilder;
        getResult(): $Item;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemLike_): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number): $ShapelessRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        constructor(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
        get result(): $Item;
    }
    export class $ModPlacedFeatures {
        static bootstrap(arg0: $BootstrapContext<$PlacedFeature_>): void;
        static GEN_HIVE_PLACED: $ResourceKey<$PlacedFeature>;
        static GLOBAL_ORE_PLACED: $ResourceKey<$PlacedFeature>;
        static GEN_GAS_PLACED: $ResourceKey<$PlacedFeature>;
        static OIL_PLACED: $ResourceKey<$PlacedFeature>;
        static PEAT_PLACED: $ResourceKey<$PlacedFeature>;
        static VEIN_PLACED: $ResourceKey<$PlacedFeature>;
        static RUB_TREE_PLACED: $ResourceKey<$PlacedFeature>;
        static VOLCANO_PLACED: $ResourceKey<$PlacedFeature>;
        static SALTPETER_PLACED: $ResourceKey<$PlacedFeature>;
        static CALCIUM_PLACED: $ResourceKey<$PlacedFeature>;
        constructor();
    }
    export class $IUChestLoot implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        addItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): $LootPoolSingletonContainer$Builder<never>;
        getVolcano(): $LootTable$Builder;
        getDesertPyramide(): $LootTable$Builder;
        getAbandonedMineshaft(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
        get volcano(): $LootTable$Builder;
        get desertPyramide(): $LootTable$Builder;
        get abandonedMineshaft(): $LootTable$Builder;
    }
}
