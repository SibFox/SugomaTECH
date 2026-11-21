import { $JsonElement_ } from "@package/com/google/gson";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $KubeIconTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/client/icon";
import { $CustomRecipeSchemaFunctionRegistry_, $RecipeSchemaFunctionRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
import { $Map_ } from "@package/java/util";
import { $EventGroup, $EventHandler, $EventGroupRegistry_, $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $RecipeComponentTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $LootModificationEvent, $LootTableEvent } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_ } from "@package/java/util/function";
import { $WritableRegistry } from "@package/net/minecraft/core";
import { $NameProvider$Registry_, $AttachedData, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $RecipePostProcessorTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $ClassFilter, $KubeJSPlugin } from "@package/dev/latvian/mods/kubejs/plugin";
import { $RecipeMappingRegistry, $RecipeSchemaRegistry, $RecipeFactoryRegistry } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $DataComponentTypeInfoRegistry_, $BindingRegistry_, $TypeWrapperRegistry, $ScriptManager, $TypeDescriptionRegistry, $RecordDefaultsRegistry_ } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntityAttachmentRegistry_ } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $IngredientActionTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
import { $LangKubeEvent_ } from "@package/dev/latvian/mods/kubejs/client";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeAssetGenerator, $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataExport } from "@package/dev/latvian/mods/kubejs/server";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ServerRegistryRegistry_, $BuilderTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/registry";
import { $RecipeViewerEntryType } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $ResourceLocation_, $RegistryOps$RegistryInfoLookup, $RegistryOps } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $LocalWebServer_, $LocalWebServerAPIRegistry_, $LocalWebServerRegistry } from "@package/dev/latvian/mods/kubejs/web";
export * as wrappers from "@package/com/almostreliable/lootjs/kube/wrappers";

declare module "@package/com/almostreliable/lootjs/kube" {
    export class $KubeOps extends $RegistryOps<$Object> {
        static create(arg0: $RegistryAccessContainer): $KubeOps;
        delegate: $DynamicOps<$Object>;
        lookupProvider: $RegistryOps$RegistryInfoLookup;
        constructor(arg0: $RegistryOps<$Object>);
    }
    export class $LootTableEventJS extends $LootTableEvent implements $KubeEvent {
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $WritableRegistry<$LootTable>);
    }
    export class $LootModificationEventJS extends $LootModificationEvent implements $KubeEvent {
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $Map_<$ResourceLocation_, $IGlobalLootModifier>);
    }
    export class $LootJSPlugin implements $KubeJSPlugin {
        registerEvents(arg0: $EventGroupRegistry_): void;
        initStartup(): void;
        registerTypeWrappers(arg0: $TypeWrapperRegistry): void;
        registerBindings(arg0: $BindingRegistry_): void;
        registerTypeDescriptions(arg0: $TypeDescriptionRegistry): void;
        init(): void;
        /**
         * @deprecated
         */
        clearCaches(): void;
        afterScriptsLoaded(manager: $ScriptManager): void;
        afterInit(): void;
        attachPlayerData(event: $AttachedData<$Player>): void;
        attachLevelData(event: $AttachedData<$Level_>): void;
        registerRecordDefaults(registry: $RecordDefaultsRegistry_): void;
        beforeScriptsLoaded(manager: $ScriptManager): void;
        registerRecipePostProcessors(registry: $RecipePostProcessorTypeRegistry_): void;
        registerIngredientActionTypes(registry: $IngredientActionTypeRegistry_): void;
        registerRecipeViewerEntryTypes(registry: $Consumer_<$RecipeViewerEntryType>): void;
        registerRecipeSchemaFunctionTypes(registry: $RecipeSchemaFunctionRegistry_): void;
        registerLocalWebServerWithAuth(registry: $LocalWebServerRegistry): void;
        registerBlockEntityAttachments(registry: $BlockEntityAttachmentRegistry_): void;
        attachServerData(event: $AttachedData<$MinecraftServer>): void;
        generateLang(event: $LangKubeEvent_): void;
        generateData(generator: $KubeDataGenerator): void;
        generateAssets(generator: $KubeAssetGenerator): void;
        exportServerData(arg0: $DataExport): void;
        registerIconTypes(registry: $KubeIconTypeRegistry_): void;
        registerClasses(filter: $ClassFilter): void;
        breakpoint(args: $Object[]): void;
        registerRecipeMappings(registry: $RecipeMappingRegistry): void;
        localWebServerStarted(server: $LocalWebServer_): void;
        registerBuilderTypes(registry: $BuilderTypeRegistry_): void;
        registerItemNameProviders(registry: $NameProvider$Registry_<$Item, $ItemStack>): void;
        beforeRecipeLoading(event: $RecipesKubeEvent, manager: $RecipeManagerKJS, recipeJsons: $Map_<$ResourceLocation_, $JsonElement_>): void;
        registerLocalWebServerAPIs(registry: $LocalWebServerAPIRegistry_): void;
        registerRecipeFactories(registry: $RecipeFactoryRegistry): void;
        registerRecipeSchemas(registry: $RecipeSchemaRegistry): void;
        registerServerRegistries(registry: $ServerRegistryRegistry_): void;
        registerRecipeComponents(registry: $RecipeComponentTypeRegistry_): void;
        registerLocalWebServer(registry: $LocalWebServerRegistry): void;
        registerDataComponentTypeDescriptions(registry: $DataComponentTypeInfoRegistry_): void;
        registerCustomRecipeSchemaFunctions(registry: $CustomRecipeSchemaFunctionRegistry_): void;
        constructor();
    }
    export class $LootJSEvent {
        static GROUP: $EventGroup;
        static MODIFIERS: $EventHandler;
        static LOOT_TABLES: $EventHandler;
    }
    export interface $LootJSEvent {
    }
}
