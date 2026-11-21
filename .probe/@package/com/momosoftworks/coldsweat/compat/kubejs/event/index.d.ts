import { $Level } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Temperature$Trait, $Temperature$Trait_ } from "@package/com/momosoftworks/coldsweat/api/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TempModifierEvent$Add, $TemperatureChangedEvent } from "@package/com/momosoftworks/coldsweat/api/event/common/temperautre";
import { $Placement } from "@package/com/momosoftworks/coldsweat/api/util/placement";
import { $List, $Map } from "@package/java/util";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeStartupEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubeLivingEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $Consumer_, $Predicate_, $Function_, $Function } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $LoadRegistriesEvent$Pre } from "@package/com/momosoftworks/coldsweat/api/event/core/registry";
import { $TempModifier } from "@package/com/momosoftworks/coldsweat/api/temperature/modifier";
import { $DefaultTempModifiersEvent } from "@package/com/momosoftworks/coldsweat/api/event/core/init";
import { $InsulateItemEvent } from "@package/com/momosoftworks/coldsweat/api/event/common/insulation";
import { $ItemTempBuilderJS, $FoodBuilderJS, $EntityTempBuilderJS, $BlockTempBuilderJS, $SpawnBiomeBuilderJS, $BlockTempBuilderJS$Function_, $EntityClimateBuilderJS, $InsulatorBuilderJS, $FuelBuilderJS, $DryingItemBuilderJS, $InsulatingMountBuilderJS } from "@package/com/momosoftworks/coldsweat/compat/kubejs/event/builder";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TempModifierDataJS } from "@package/com/momosoftworks/coldsweat/compat/kubejs/util";
import { $Object } from "@package/java/lang";
export * as builder from "@package/com/momosoftworks/coldsweat/compat/kubejs/event/builder";

declare module "@package/com/momosoftworks/coldsweat/compat/kubejs/event" {
    export class $DefaultModifiersEventJS implements $KubeLivingEntityEvent {
        getModifiers(): $Map<$Temperature$Trait, $List<$TempModifier>>;
        getEntity(): $LivingEntity;
        addModifier(arg0: string, arg1: $TempModifier, arg2: $Placement): void;
        addModifier(arg0: string, arg1: $TempModifier): void;
        placed(arg0: string, arg1: string, arg2: $Predicate_<$TempModifier>): $Placement;
        removeModifiers(arg0: string, arg1: $Predicate_<$TempModifier>): void;
        addModifiers(arg0: string, ...arg1: $TempModifier[]): void;
        addModifierById(arg0: string, arg1: $ResourceLocation_, arg2: $Consumer_<$TempModifier>, arg3: $Placement): void;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(arg0: $DefaultTempModifiersEvent);
        get modifiers(): $Map<$Temperature$Trait, $List<$TempModifier>>;
        get entity(): $LivingEntity;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ModRegistriesEventJS implements $KubeStartupEvent {
        addBoilerFuel(arg0: $Consumer_<$FuelBuilderJS>): void;
        addDryingItem(arg0: $Consumer_<$DryingItemBuilderJS>): void;
        addBiomeOffset(arg0: number, arg1: number, arg2: string, arg3: string[], arg4: number): void;
        addBiomeOffset(arg0: number, arg1: number, arg2: string, ...arg3: string[]): void;
        addItemTemperature(arg0: $Consumer_<$ItemTempBuilderJS>): void;
        addEntityClimate(arg0: $Consumer_<$EntityClimateBuilderJS>): void;
        addSpawnBiomes(arg0: $Consumer_<$SpawnBiomeBuilderJS>): void;
        addTempModifier(arg0: string, arg1: $Function_<$TempModifierDataJS, $Function<number, number>>): void;
        addIceboxFuel(arg0: $Consumer_<$FuelBuilderJS>): void;
        addStructureOffset(arg0: number, ...arg1: string[]): void;
        addStructureOffset(arg0: number, arg1: string, ...arg2: string[]): void;
        addInsulator(arg0: $Consumer_<$InsulatorBuilderJS>): void;
        addDimensionOffset(arg0: number, arg1: number, arg2: string, ...arg3: string[]): void;
        addDimensionOffset(arg0: number, arg1: string, ...arg2: string[]): void;
        addInsulatingMount(arg0: $Consumer_<$InsulatingMountBuilderJS>): void;
        addFoodTemperature(arg0: $Consumer_<$FoodBuilderJS>): void;
        addHearthFuel(arg0: $Consumer_<$FuelBuilderJS>): void;
        addBiomeTemperature(arg0: number, arg1: number, arg2: string, arg3: string[], arg4: number): void;
        addBiomeTemperature(arg0: number, arg1: number, arg2: string, ...arg3: string[]): void;
        addBlockTemperature(arg0: number, arg1: string, arg2: $Consumer_<$BlockTempBuilderJS>): void;
        addBlockTemperature(arg0: $Consumer_<$BlockTempBuilderJS>, arg1: $BlockTempBuilderJS$Function_): void;
        addEntityTemperature(arg0: $Consumer_<$EntityTempBuilderJS>): void;
        addDimensionTemperature(arg0: number, arg1: string, ...arg2: string[]): void;
        addDimensionTemperature(arg0: number, arg1: number, arg2: string, ...arg3: string[]): void;
        addSoulspringLampFuel(arg0: $Consumer_<$FuelBuilderJS>): void;
        addStructureTemperature(arg0: number, arg1: string, ...arg2: string[]): void;
        addStructureTemperature(arg0: number, ...arg1: string[]): void;
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
        constructor(arg0: $LoadRegistriesEvent$Pre);
    }
    export class $TempChangedEventJS implements $KubeLivingEntityEvent {
        getEntity(): $LivingEntity;
        getTemperature(): number;
        getTrait(): string;
        setTemperature(arg0: number): void;
        getOldTemperature(): number;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(arg0: $TemperatureChangedEvent);
        get entity(): $LivingEntity;
        get trait(): string;
        get oldTemperature(): number;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ApplyInsulationEventJS implements $KubePlayerEvent {
        getEntity(): $Player;
        getPlayer(): $Player;
        setInsulator(arg0: $ItemStack_): void;
        getInsulator(): $ItemStack;
        getArmorItem(): $ItemStack;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(arg0: $InsulateItemEvent);
        get entity(): $Player;
        get player(): $Player;
        get armorItem(): $ItemStack;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $AddModifierEventJS implements $KubeLivingEntityEvent {
        getEntity(): $LivingEntity;
        getModifier(): $TempModifier;
        getTrait(): $Temperature$Trait;
        setTrait(arg0: $Temperature$Trait_): void;
        setModifier(arg0: $TempModifier): void;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(arg0: $TempModifierEvent$Add);
        get entity(): $LivingEntity;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
