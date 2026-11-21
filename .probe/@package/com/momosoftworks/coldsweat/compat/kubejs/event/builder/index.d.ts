import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $Temperature$Trait, $Temperature$Trait_, $Temperature$Units_ } from "@package/com/momosoftworks/coldsweat/api/util";
import { $BlockTemp } from "@package/com/momosoftworks/coldsweat/api/temperature/block_temp";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $EntityRequirement } from "@package/com/momosoftworks/coldsweat/data/codec/requirement";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map } from "@package/java/util";
import { $FuelData, $EntityClimateData, $InsulatorData, $EntityTempData, $SpawnBiomeData, $MountData, $DryingItemData, $ItemTempData, $FuelData$FuelType_, $FoodData } from "@package/com/momosoftworks/coldsweat/data/codec/configuration";
import { $Predicate, $Function_, $Predicate_ } from "@package/java/util/function";
import { $TempModifier$Factory } from "@package/com/momosoftworks/coldsweat/api/temperature/modifier";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $ValueGetter, $NegatableList, $AttributeModifierMap } from "@package/com/momosoftworks/coldsweat/data/codec/util";

declare module "@package/com/momosoftworks/coldsweat/compat/kubejs/event/builder" {
    export class $BlockTempBuilderJS$Function {
    }
    export interface $BlockTempBuilderJS$Function {
        getTemperature(arg0: $Level_, arg1: $LivingEntity, arg2: $BlockState_, arg3: $BlockPos_, arg4: number): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockTempBuilderJS$Function}.
     */
    export type $BlockTempBuilderJS$Function_ = ((arg0: $Level, arg1: $LivingEntity, arg2: $BlockState, arg3: $BlockPos, arg4: number) => number);
    export class $EntityTempBuilderJS {
        build(): $EntityTempData;
        range(arg0: $Function_<$Map<string, $Object>, number>): $EntityTempBuilderJS;
        range(arg0: number): $EntityTempBuilderJS;
        units(arg0: string): $EntityTempBuilderJS;
        entities(...arg0: string[]): $EntityTempBuilderJS;
        temperature(arg0: $Function_<$Map<string, $Object>, number>): $EntityTempBuilderJS;
        temperature(arg0: number): $EntityTempBuilderJS;
        maxEffect(arg0: number): $EntityTempBuilderJS;
        maxEffect(arg0: $Function_<$Map<string, $Object>, number>): $EntityTempBuilderJS;
        affectsSelf(arg0: boolean): $EntityTempBuilderJS;
        affectsSelf(arg0: $Function_<$Map<string, $Object>, boolean>): $EntityTempBuilderJS;
        minTemperature(arg0: $Function_<$Map<string, $Object>, number>): $EntityTempBuilderJS;
        minTemperature(arg0: number): $EntityTempBuilderJS;
        maxTemperature(arg0: $Function_<$Map<string, $Object>, number>): $EntityTempBuilderJS;
        maxTemperature(arg0: number): $EntityTempBuilderJS;
        entityPredicate(arg0: $Predicate_<$Entity>): $EntityTempBuilderJS;
        otherEntityPredicate(arg0: $Predicate_<$Entity>): $EntityTempBuilderJS;
        constructor();
    }
    export class $BlockTempBuilderJS {
        state(arg0: string, arg1: $Object): $BlockTempBuilderJS;
        build(arg0: $BlockTempBuilderJS$Function_): $BlockTemp;
        range(arg0: number): $BlockTempBuilderJS;
        units(arg0: $Temperature$Units_): $BlockTempBuilderJS;
        blocks(...arg0: string[]): $BlockTempBuilderJS;
        blockPredicate(arg0: $Predicate_<$LevelBlock>): $BlockTempBuilderJS;
        maxEffect(arg0: number): $BlockTempBuilderJS;
        minTemperature(arg0: number): $BlockTempBuilderJS;
        maxTemperature(arg0: number): $BlockTempBuilderJS;
        logarithmic(arg0: boolean): $BlockTempBuilderJS;
        fades(arg0: boolean): $BlockTempBuilderJS;
        predicate: $Predicate<$LevelBlock>;
        fade: boolean;
        constructor();
    }
    export class $FuelBuilderJS {
        build(arg0: $FuelData$FuelType_): $FuelData;
        items(...arg0: string[]): $FuelBuilderJS;
        fuel(arg0: number): $FuelBuilderJS;
        fuel(arg0: $Function_<$Map<string, $Object>, number>): $FuelBuilderJS;
        itemPredicate(arg0: $Predicate_<$ItemStack>): $FuelBuilderJS;
        constructor();
    }
    export class $InsulatorBuilderJS {
        slot(arg0: string): $InsulatorBuilderJS;
        build(): $InsulatorData;
        attribute(arg0: string, arg1: number, arg2: string): $InsulatorBuilderJS;
        items(...arg0: string[]): $InsulatorBuilderJS;
        insulation(arg0: number, arg1: number): $InsulatorBuilderJS;
        fillSlots(arg0: $Function_<$Map<string, $Object>, boolean>): $InsulatorBuilderJS;
        fillSlots(arg0: boolean): $InsulatorBuilderJS;
        itemPredicate(arg0: $Predicate_<$ItemStack>): $InsulatorBuilderJS;
        hideIfUnmet(arg0: boolean): $InsulatorBuilderJS;
        hideIfUnmet(arg0: $Function_<$Map<string, $Object>, boolean>): $InsulatorBuilderJS;
        hintText(arg0: string): $InsulatorBuilderJS;
        entityPredicate(arg0: $Predicate_<$Entity>): $InsulatorBuilderJS;
        hintKey(arg0: string): $InsulatorBuilderJS;
        adaptiveInsulation(arg0: number, arg1: number): $InsulatorBuilderJS;
        immuneToModifier(arg0: string, arg1: number): $InsulatorBuilderJS;
        immuneTempModifiers: $Map<$ResourceLocation, number>;
        attributes: $AttributeModifierMap;
        constructor();
    }
    export class $FoodBuilderJS {
        duration(arg0: $Function_<$Map<string, $Object>, number>): $FoodBuilderJS;
        duration(arg0: number): $FoodBuilderJS;
        build(): $FoodData;
        modifier(arg0: string, arg1: string): $FoodBuilderJS$ModBuilder;
        items(...arg0: string[]): $FoodBuilderJS;
        itemPredicate(arg0: $Predicate_<$ItemStack>): $FoodBuilderJS;
        temperature(arg0: $Function_<$Map<string, $Object>, number>): $FoodBuilderJS;
        temperature(arg0: number): $FoodBuilderJS;
        stackLimit(arg0: $Function_<$Map<string, $Object>, number>): $FoodBuilderJS;
        stackLimit(arg0: number): $FoodBuilderJS;
        entityPredicate(arg0: $Predicate_<$Entity>): $FoodBuilderJS;
        modifiers: $Map<$Temperature$Trait, $List<$TempModifier$Factory>>;
        constructor();
    }
    export class $SpawnBiomeBuilderJS {
        count(arg0: number, arg1: number): $SpawnBiomeBuilderJS;
        build(): $SpawnBiomeData;
        category(arg0: string): $SpawnBiomeBuilderJS;
        weight(arg0: number): $SpawnBiomeBuilderJS;
        entities(...arg0: string[]): $SpawnBiomeBuilderJS;
        biomes(...arg0: string[]): $SpawnBiomeBuilderJS;
        locationPredicate(arg0: $Predicate_<$BlockInWorld>): $SpawnBiomeBuilderJS;
        constructor();
    }
    export class $ItemTempBuilderJS {
        slots(...arg0: number[]): $ItemTempBuilderJS;
        build(): $ItemTempData;
        attribute(arg0: string, arg1: number, arg2: string): $ItemTempBuilderJS;
        items(...arg0: string[]): $ItemTempBuilderJS;
        itemPredicate(arg0: $Predicate_<$ItemStack>): $ItemTempBuilderJS;
        temperature(arg0: $Function_<$Map<string, $Object>, number>): $ItemTempBuilderJS;
        temperature(arg0: number): $ItemTempBuilderJS;
        hideIfUnmet(arg0: boolean): $ItemTempBuilderJS;
        hideIfUnmet(arg0: $Function_<$Map<string, $Object>, boolean>): $ItemTempBuilderJS;
        trait(arg0: string): $ItemTempBuilderJS;
        maxEffect(arg0: number): $ItemTempBuilderJS;
        maxEffect(arg0: $Function_<$Map<string, $Object>, number>): $ItemTempBuilderJS;
        minTemp(arg0: $Function_<$Map<string, $Object>, number>): $ItemTempBuilderJS;
        minTemp(arg0: number): $ItemTempBuilderJS;
        maxTemp(arg0: $Function_<$Map<string, $Object>, number>): $ItemTempBuilderJS;
        maxTemp(arg0: number): $ItemTempBuilderJS;
        equipmentSlots(...arg0: string[]): $ItemTempBuilderJS;
        entityPredicate(arg0: $Predicate_<$Entity>): $ItemTempBuilderJS;
        immuneToModifier(arg0: string, arg1: $Function_<$Map<string, $Object>, number>): $ItemTempBuilderJS;
        immuneToModifier(arg0: string, arg1: number): $ItemTempBuilderJS;
        slotsInRange(arg0: number, arg1: number): $ItemTempBuilderJS;
        immuneTempModifiers: $Map<$ResourceLocation, $ValueGetter<number>>;
        attributes: $AttributeModifierMap;
        constructor();
    }
    export class $FoodBuilderJS$ModBuilder {
        build(): $FoodBuilderJS;
        expireTime(arg0: number): $FoodBuilderJS$ModBuilder;
        nbt(arg0: $CompoundTag_): $FoodBuilderJS$ModBuilder;
        tickRate(arg0: number): $FoodBuilderJS$ModBuilder;
        constructor(arg0: $FoodBuilderJS, arg1: $Temperature$Trait_, arg2: string);
    }
    export class $DryingItemBuilderJS {
        result(arg0: $ItemStack_): $DryingItemBuilderJS;
        build(): $DryingItemData;
        items(...arg0: string[]): $DryingItemBuilderJS;
        sound(arg0: string): $DryingItemBuilderJS;
        itemPredicate(arg0: $Predicate_<$ItemStack>): $DryingItemBuilderJS;
        entityPredicate(arg0: $Predicate_<$Entity>): $DryingItemBuilderJS;
        constructor();
    }
    export class $EntityClimateBuilderJS {
        build(): $EntityClimateData;
        units(arg0: string): $EntityClimateBuilderJS;
        rate(arg0: number): $EntityClimateBuilderJS;
        entities(...arg0: string[]): $EntityClimateBuilderJS;
        temperature(arg0: number, arg1: number): $EntityClimateBuilderJS;
        maxTemp: number;
        entityPredicate: $NegatableList<$EntityRequirement>;
        minTemp: number;
        constructor();
    }
    export class $InsulatingMountBuilderJS {
        build(): $MountData;
        entities(...arg0: string[]): $InsulatingMountBuilderJS;
        heatInsulation(arg0: $Function_<$Map<string, $Object>, number>): $InsulatingMountBuilderJS;
        heatInsulation(arg0: number): $InsulatingMountBuilderJS;
        coldInsulation(arg0: $Function_<$Map<string, $Object>, number>): $InsulatingMountBuilderJS;
        coldInsulation(arg0: number): $InsulatingMountBuilderJS;
        entityPredicate(arg0: $Predicate_<$Entity>): $InsulatingMountBuilderJS;
        immuneToModifier(arg0: string, arg1: $Function_<$Map<string, $Object>, number>): $InsulatingMountBuilderJS;
        immuneToModifier(arg0: string, arg1: number): $InsulatingMountBuilderJS;
        riderPredicate(arg0: $Predicate_<$Entity>): $InsulatingMountBuilderJS;
        modifierImmunities: $Map<$ResourceLocation, $ValueGetter<number>>;
        constructor();
    }
}
