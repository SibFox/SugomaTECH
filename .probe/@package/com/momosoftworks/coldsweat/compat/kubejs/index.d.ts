import { $Level_ } from "@package/net/minecraft/world/level";
import { $TempModifier } from "@package/com/momosoftworks/coldsweat/api/temperature/modifier";
import { $RegistryAccess, $BlockPos_ } from "@package/net/minecraft/core";
import { $Temperature$Trait } from "@package/com/momosoftworks/coldsweat/api/util";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $DynamicHolder } from "@package/com/momosoftworks/coldsweat/util/serialization";
export * as event from "@package/com/momosoftworks/coldsweat/compat/kubejs/event";
export * as util from "@package/com/momosoftworks/coldsweat/compat/kubejs/util";

declare module "@package/com/momosoftworks/coldsweat/compat/kubejs" {
    export class $KubeBindings {
        static getModifiers(arg0: $Entity, arg1: string, arg2: string): $List<$TempModifier>;
        static getColdInsulation(arg0: $Entity): number;
        static getHeatInsulation(arg0: $Entity): number;
        static convertTemperature(arg0: number, arg1: string, arg2: string, arg3: boolean): number;
        static createModifier(arg0: string): $TempModifier;
        static getConfigSetting(arg0: string): $DynamicHolder<never>;
        static addModifier(arg0: $Entity, arg1: $TempModifier, arg2: string): void;
        static getTemperature(arg0: $Entity, arg1: string): number;
        static getRegistryAccess(): $RegistryAccess;
        static getTrait(arg0: string): $Temperature$Trait;
        static getBiomeTemperature(arg0: $Level_, arg1: $BlockPos_): number;
        static getTemperatureAt(arg0: $Level_, arg1: $BlockPos_): number;
        static setTemperature(arg0: $Entity, arg1: string, arg2: number): void;
        static getBlockTemperature(arg0: $LevelBlock): number;
        constructor();
        static get registryAccess(): $RegistryAccess;
    }
}
