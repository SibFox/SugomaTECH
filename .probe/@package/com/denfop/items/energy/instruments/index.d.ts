import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $CreativeModeTab_, $CreativeModeTab, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $UpgradeWithBlackList, $LevelInstruments, $UpgradeItemInform } from "@package/com/denfop/api/item/upgrade";
import { $EnumInfoUpgradeModules, $IProperties, $IItemStackInventory } from "@package/com/denfop/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map, $Set, $List_ } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ChatFormatting } from "@package/net/minecraft";
import { $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $EnergyItem } from "@package/com/denfop/api/item/energy";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";
import { $IItemTab } from "@package/com/denfop/tabs";

declare module "@package/com/denfop/items/energy/instruments" {
    export class $EnumVarietyInstruments extends $Enum<$EnumVarietyInstruments> {
        static values(): $EnumVarietyInstruments[];
        static valueOf(arg0: string): $EnumVarietyInstruments;
        getCapacity(): number;
        getTier(): number;
        getEnergyPerOperation(): number;
        getEnergyPerBigOperation(): number;
        getEnergyPerbigHolePowerOperation(): number;
        getEnergyPerultraLowPowerOperation(): number;
        getUltra_power(): number;
        getNormal_power(): number;
        getEnergy_transfer(): number;
        getBig_holes(): number;
        getMega_holes(): number;
        static NANO: $EnumVarietyInstruments;
        static VAJRA: $EnumVarietyInstruments;
        static DIAMOND: $EnumVarietyInstruments;
        static QUANTUM: $EnumVarietyInstruments;
        static SIMPLE: $EnumVarietyInstruments;
        static CHAINSAW: $EnumVarietyInstruments;
        static SPECTRAL: $EnumVarietyInstruments;
        static PERFECT_DRILL: $EnumVarietyInstruments;
        get capacity(): number;
        get tier(): number;
        get energyPerOperation(): number;
        get energyPerBigOperation(): number;
        get energyPerbigHolePowerOperation(): number;
        get energyPerultraLowPowerOperation(): number;
        get ultra_power(): number;
        get normal_power(): number;
        get energy_transfer(): number;
        get big_holes(): number;
        get mega_holes(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumVarietyInstruments}.
     */
    export type $EnumVarietyInstruments_ = "chainsaw" | "simple" | "diamond" | "vajra" | "nano" | "quantum" | "spectral" | "perfect_drill";
    export class $EnumOperations extends $Enum<$EnumOperations> {
        static values(): $EnumOperations[];
        static valueOf(arg0: string): $EnumOperations;
        getDescription(): string;
        getArea_z(): number;
        getArea_x(): number;
        getArea_y(): number;
        getName_mode(): string;
        getTextFormatting(): $ChatFormatting;
        static TUNNEL: $EnumOperations;
        static ORE: $EnumOperations;
        static MEGAHOLES: $EnumOperations;
        static TREE: $EnumOperations;
        static BIGHOLES: $EnumOperations;
        static SHEARS: $EnumOperations;
        static ULTRAHOLES: $EnumOperations;
        static DEFAULT: $EnumOperations;
        get description(): string;
        get area_z(): number;
        get area_x(): number;
        get area_y(): number;
        get name_mode(): string;
        get textFormatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $EnumOperations}.
     */
    export type $EnumOperations_ = "default" | "bigholes" | "megaholes" | "ultraholes" | "ore" | "tree" | "tunnel" | "shears";
    export class $EnumTypeInstruments extends $Enum<$EnumTypeInstruments> {
        static values(): $EnumTypeInstruments[];
        static valueOf(arg0: string): $EnumTypeInstruments;
        getEnumInfoUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        getMineableBlocks(): $Set<$BlockState>;
        getListItems(): $List<$TagKey<$Block>>;
        getListOperations(): $List<$EnumOperations>;
        getType_name(): string;
        getToolType(): $Set<string>;
        static DIAMOND_DRILL: $EnumTypeInstruments;
        static VAJRA: $EnumTypeInstruments;
        static ULT_VAJRA: $EnumTypeInstruments;
        static PICKAXE: $EnumTypeInstruments;
        static CHAINSAW: $EnumTypeInstruments;
        static SHOVEL: $EnumTypeInstruments;
        static AXE: $EnumTypeInstruments;
        static DRILL: $EnumTypeInstruments;
        static SIMPLE_DRILL: $EnumTypeInstruments;
        static PERFECT_DRILL: $EnumTypeInstruments;
        get enumInfoUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        get mineableBlocks(): $Set<$BlockState>;
        get listItems(): $List<$TagKey<$Block>>;
        get listOperations(): $List<$EnumOperations>;
        get type_name(): string;
        get toolType(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeInstruments}.
     */
    export type $EnumTypeInstruments_ = "shovel" | "pickaxe" | "drill" | "simple_drill" | "diamond_drill" | "axe" | "chainsaw" | "perfect_drill" | "vajra" | "ult_vajra";
    export class $ItemEnergyInstruments extends $Item implements $EnergyItem, $IItemStackInventory, $UpgradeWithBlackList, $LevelInstruments, $IProperties, $IItemTab {
        properties(): string[];
        getOperations(): $List<$EnumOperations>;
        getMaxLevel(arg0: $ItemStack_): number;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getInventory(arg0: $Player, arg1: $ItemStack_): $CustomWorldContainer;
        energy(arg0: $ItemStack_, arg1: $List_<$UpgradeItemInform>): number;
        onDestroyed(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $LivingEntity): boolean;
        check_list(arg0: $Block_, arg1: number, arg2: $List_<string>): boolean;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        onBlockDestroyed(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $LivingEntity, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: number, arg11: boolean, arg12: $List_<string>): boolean;
        onBlockDestroyed(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $LivingEntity, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: number, arg11: boolean, arg12: $List_<string>, arg13: boolean): boolean;
        saveToolMode(arg0: $ItemStack_, arg1: number): void;
        readToolMode(arg0: $ItemStack_): number;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        getToolClasses(arg0: $ItemStack_): $Set<string>;
        getLevel(arg0: $ItemStack_): number;
        addExperience(arg0: $ItemStack_, arg1: number): void;
        getExperience(arg0: $ItemStack_): number;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $EnumTypeInstruments_, arg1: $EnumVarietyInstruments_, arg2: string);
        get operations(): $List<$EnumOperations>;
        get itemCategory(): $CreativeModeTab;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
}
