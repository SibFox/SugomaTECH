import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EnumInfoRotorUpgradeModules as $EnumInfoRotorUpgradeModules$1 } from "@package/com/denfop/api/windsystem/upgrade";
import { $EnumInfoRotorUpgradeModules } from "@package/com/denfop/api/water/upgrade";
import { $EnumInfoUpgradeModules, $ItemMain } from "@package/com/denfop/items";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $Map } from "@package/java/util";
import { $EnumSolarPanels } from "@package/com/denfop/blockentity/panels/entity";
import { $EnumCoolUpgrade, $ICoolItem } from "@package/com/denfop/api/otherenergies/cool";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";
import { $IReactorModule } from "@package/com/denfop/api/reactors";

declare module "@package/com/denfop/items/modules" {
    export class $ItemCoolingUpgrade<T extends $Enum<T>> extends $ItemMain<T> implements $ICoolItem {
        getTypeUpgrade(arg0: $ItemStack_): $EnumCoolUpgrade;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemEntityModule$Types extends $Enum<$ItemEntityModule$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemEntityModule$Types[];
        static valueOf(arg0: string): $ItemEntityModule$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemEntityModule$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static module_mob: $ItemEntityModule$Types;
        static module_player: $ItemEntityModule$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemEntityModule$Types}.
     */
    export type $ItemEntityModule$Types_ = "module_player" | "module_mob";
    export class $ItemUpgradeModule$Types extends $Enum<$ItemUpgradeModule$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemUpgradeModule$Types[];
        static valueOf(arg0: string): $ItemUpgradeModule$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemUpgradeModule$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static upgrademodule31: $ItemUpgradeModule$Types;
        static upgrademodule32: $ItemUpgradeModule$Types;
        static upgrademodule30: $ItemUpgradeModule$Types;
        static upgrademodule39: $ItemUpgradeModule$Types;
        static upgrademodule37: $ItemUpgradeModule$Types;
        static upgrademodule38: $ItemUpgradeModule$Types;
        static upgrademodule35: $ItemUpgradeModule$Types;
        static upgrademodule36: $ItemUpgradeModule$Types;
        static upgrademodule33: $ItemUpgradeModule$Types;
        static upgrademodule34: $ItemUpgradeModule$Types;
        static upgrademodule8: $ItemUpgradeModule$Types;
        static upgrademodule9: $ItemUpgradeModule$Types;
        static upgrademodule20: $ItemUpgradeModule$Types;
        static upgrademodule21: $ItemUpgradeModule$Types;
        static upgrademodule28: $ItemUpgradeModule$Types;
        static upgrademodule1: $ItemUpgradeModule$Types;
        static upgrademodule29: $ItemUpgradeModule$Types;
        static upgrademodule2: $ItemUpgradeModule$Types;
        static upgrademodule26: $ItemUpgradeModule$Types;
        static upgrademodule3: $ItemUpgradeModule$Types;
        static upgrademodule27: $ItemUpgradeModule$Types;
        static upgrademodule4: $ItemUpgradeModule$Types;
        static upgrademodule24: $ItemUpgradeModule$Types;
        static upgrademodule5: $ItemUpgradeModule$Types;
        static upgrademodule25: $ItemUpgradeModule$Types;
        static upgrademodule6: $ItemUpgradeModule$Types;
        static upgrademodule22: $ItemUpgradeModule$Types;
        static upgrademodule7: $ItemUpgradeModule$Types;
        static upgrademodule23: $ItemUpgradeModule$Types;
        static upgrademodule19: $ItemUpgradeModule$Types;
        static upgrademodule10: $ItemUpgradeModule$Types;
        static upgrademodule17: $ItemUpgradeModule$Types;
        static upgrademodule18: $ItemUpgradeModule$Types;
        static upgrademodule15: $ItemUpgradeModule$Types;
        static upgrademodule16: $ItemUpgradeModule$Types;
        static upgrademodule13: $ItemUpgradeModule$Types;
        static upgrademodule14: $ItemUpgradeModule$Types;
        static upgrademodule11: $ItemUpgradeModule$Types;
        static upgrademodule: $ItemUpgradeModule$Types;
        static upgrademodule12: $ItemUpgradeModule$Types;
        static upgrademodule42: $ItemUpgradeModule$Types;
        static upgrademodule43: $ItemUpgradeModule$Types;
        static upgrademodule40: $ItemUpgradeModule$Types;
        static upgrademodule41: $ItemUpgradeModule$Types;
        static upgrademodule48: $ItemUpgradeModule$Types;
        static upgrademodule49: $ItemUpgradeModule$Types;
        static upgrademodule46: $ItemUpgradeModule$Types;
        static upgrademodule47: $ItemUpgradeModule$Types;
        static upgrademodule44: $ItemUpgradeModule$Types;
        static upgrademodule45: $ItemUpgradeModule$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemUpgradeModule$Types}.
     */
    export type $ItemUpgradeModule$Types_ = "upgrademodule" | "upgrademodule1" | "upgrademodule2" | "upgrademodule3" | "upgrademodule4" | "upgrademodule5" | "upgrademodule6" | "upgrademodule7" | "upgrademodule8" | "upgrademodule9" | "upgrademodule10" | "upgrademodule11" | "upgrademodule12" | "upgrademodule13" | "upgrademodule14" | "upgrademodule15" | "upgrademodule16" | "upgrademodule17" | "upgrademodule18" | "upgrademodule19" | "upgrademodule20" | "upgrademodule21" | "upgrademodule22" | "upgrademodule23" | "upgrademodule24" | "upgrademodule25" | "upgrademodule26" | "upgrademodule27" | "upgrademodule28" | "upgrademodule29" | "upgrademodule30" | "upgrademodule31" | "upgrademodule32" | "upgrademodule33" | "upgrademodule34" | "upgrademodule35" | "upgrademodule36" | "upgrademodule37" | "upgrademodule38" | "upgrademodule39" | "upgrademodule40" | "upgrademodule41" | "upgrademodule42" | "upgrademodule43" | "upgrademodule44" | "upgrademodule45" | "upgrademodule46" | "upgrademodule47" | "upgrademodule48" | "upgrademodule49";
    export class $ItemModuleTypePanel<T extends $Enum<T>> extends $ItemMain<T> {
        static getSolarType(arg0: number): $EnumSolarPanels;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $EnumQuarryType extends $Enum<$EnumQuarryType> {
        static values(): $EnumQuarryType[];
        static valueOf(arg0: string): $EnumQuarryType;
        static SPEED: $EnumQuarryType;
        static FURNACE: $EnumQuarryType;
        static BLACKLIST: $EnumQuarryType;
        static WHITELIST: $EnumQuarryType;
        static MACERATOR: $EnumQuarryType;
        static POLISHER: $EnumQuarryType;
        static DEPTH: $EnumQuarryType;
        static LUCKY: $EnumQuarryType;
        static COMB_MAC: $EnumQuarryType;
    }
    /**
     * Values that may be interpreted as {@link $EnumQuarryType}.
     */
    export type $EnumQuarryType_ = "speed" | "lucky" | "blacklist" | "whitelist" | "depth" | "furnace" | "macerator" | "comb_mac" | "polisher";
    export class $ItemWaterRotorsUpgrade$Types extends $Enum<$ItemWaterRotorsUpgrade$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemWaterRotorsUpgrade$Types[];
        static valueOf(arg0: string): $ItemWaterRotorsUpgrade$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemWaterRotorsUpgrade$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static water_rotorupgrade9: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade8: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade7: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade6: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade5: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade4: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade3: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade2: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade1: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade13: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade14: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade15: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade16: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade10: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade11: $ItemWaterRotorsUpgrade$Types;
        static water_rotorupgrade12: $ItemWaterRotorsUpgrade$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemWaterRotorsUpgrade$Types}.
     */
    export type $ItemWaterRotorsUpgrade$Types_ = "water_rotorupgrade" | "water_rotorupgrade1" | "water_rotorupgrade2" | "water_rotorupgrade3" | "water_rotorupgrade4" | "water_rotorupgrade5" | "water_rotorupgrade6" | "water_rotorupgrade7" | "water_rotorupgrade8" | "water_rotorupgrade9" | "water_rotorupgrade10" | "water_rotorupgrade11" | "water_rotorupgrade12" | "water_rotorupgrade13" | "water_rotorupgrade14" | "water_rotorupgrade15" | "water_rotorupgrade16";
    export class $ItemSpawnerModules$Types extends $Enum<$ItemSpawnerModules$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemSpawnerModules$Types[];
        static valueOf(arg0: string): $ItemSpawnerModules$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemSpawnerModules$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static spawner_module: $ItemSpawnerModules$Types;
        static spawner_module5: $ItemSpawnerModules$Types;
        static spawner_module6: $ItemSpawnerModules$Types;
        static spawner_module3: $ItemSpawnerModules$Types;
        static spawner_module4: $ItemSpawnerModules$Types;
        static spawner_module7: $ItemSpawnerModules$Types;
        static spawner_module8: $ItemSpawnerModules$Types;
        static spawner_module1: $ItemSpawnerModules$Types;
        static spawner_module2: $ItemSpawnerModules$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemSpawnerModules$Types}.
     */
    export type $ItemSpawnerModules$Types_ = "spawner_module" | "spawner_module1" | "spawner_module2" | "spawner_module3" | "spawner_module4" | "spawner_module5" | "spawner_module6" | "spawner_module7" | "spawner_module8";
    export class $ItemQuarryModule$CraftingTypes extends $Enum<$ItemQuarryModule$CraftingTypes> implements $ISubEnum {
        getName(): string;
        static values(): $ItemQuarryModule$CraftingTypes[];
        static valueOf(arg0: string): $ItemQuarryModule$CraftingTypes;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemQuarryModule$CraftingTypes;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static ef: $ItemQuarryModule$CraftingTypes;
        static kar2: $ItemQuarryModule$CraftingTypes;
        static kar3: $ItemQuarryModule$CraftingTypes;
        static comb_macerator: $ItemQuarryModule$CraftingTypes;
        static kar1: $ItemQuarryModule$CraftingTypes;
        static whitemodule: $ItemQuarryModule$CraftingTypes;
        static ef2: $ItemQuarryModule$CraftingTypes;
        static ef1: $ItemQuarryModule$CraftingTypes;
        static ef4: $ItemQuarryModule$CraftingTypes;
        static ef3: $ItemQuarryModule$CraftingTypes;
        static for1: $ItemQuarryModule$CraftingTypes;
        static for2: $ItemQuarryModule$CraftingTypes;
        static macerator: $ItemQuarryModule$CraftingTypes;
        static for3: $ItemQuarryModule$CraftingTypes;
        static blackmodule: $ItemQuarryModule$CraftingTypes;
        static per: $ItemQuarryModule$CraftingTypes;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemQuarryModule$CraftingTypes}.
     */
    export type $ItemQuarryModule$CraftingTypes_ = "per" | "ef" | "ef1" | "ef2" | "ef3" | "ef4" | "for1" | "for2" | "for3" | "kar1" | "kar2" | "kar3" | "blackmodule" | "whitemodule" | "macerator" | "comb_macerator";
    export class $ItemModuleType$Types extends $Enum<$ItemModuleType$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemModuleType$Types[];
        static valueOf(arg0: string): $ItemModuleType$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemModuleType$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static module54: $ItemModuleType$Types;
        static module53: $ItemModuleType$Types;
        static module52: $ItemModuleType$Types;
        static module51: $ItemModuleType$Types;
        static module57: $ItemModuleType$Types;
        static module56: $ItemModuleType$Types;
        static module55: $ItemModuleType$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemModuleType$Types}.
     */
    export type $ItemModuleType$Types_ = "module51" | "module52" | "module53" | "module54" | "module55" | "module56" | "module57";
    export class $ItemCoolingUpgrade$Types extends $Enum<$ItemCoolingUpgrade$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemCoolingUpgrade$Types[];
        static valueOf(arg0: string): $ItemCoolingUpgrade$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemCoolingUpgrade$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static azote: $ItemCoolingUpgrade$Types;
        static hydrogen: $ItemCoolingUpgrade$Types;
        static helium: $ItemCoolingUpgrade$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemCoolingUpgrade$Types}.
     */
    export type $ItemCoolingUpgrade$Types_ = "azote" | "hydrogen" | "helium";
    export class $ItemSpawnerModules<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemBaseModules$Types extends $Enum<$ItemBaseModules$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemBaseModules$Types[];
        static valueOf(arg0: string): $ItemBaseModules$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemBaseModules$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static phase: $ItemBaseModules$Types;
        static output1: $ItemBaseModules$Types;
        static output2: $ItemBaseModules$Types;
        static moonlinse1: $ItemBaseModules$Types;
        static genday: $ItemBaseModules$Types;
        static gennight: $ItemBaseModules$Types;
        static storage: $ItemBaseModules$Types;
        static storage1: $ItemBaseModules$Types;
        static storage2: $ItemBaseModules$Types;
        static gennight1: $ItemBaseModules$Types;
        static output: $ItemBaseModules$Types;
        static phase1: $ItemBaseModules$Types;
        static phase2: $ItemBaseModules$Types;
        static gennight2: $ItemBaseModules$Types;
        static moonlinse: $ItemBaseModules$Types;
        static moonlinse2: $ItemBaseModules$Types;
        static genday1: $ItemBaseModules$Types;
        static genday2: $ItemBaseModules$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemBaseModules$Types}.
     */
    export type $ItemBaseModules$Types_ = "genday" | "genday1" | "genday2" | "gennight" | "gennight1" | "gennight2" | "storage" | "storage1" | "storage2" | "output" | "output1" | "output2" | "phase" | "phase1" | "phase2" | "moonlinse" | "moonlinse1" | "moonlinse2";
    export class $EnumModule extends $Enum<$EnumModule> {
        static values(): $EnumModule[];
        static valueOf(arg0: string): $EnumModule;
        static getFromID(arg0: number): $EnumModule;
        static NIGHT_I: $EnumModule;
        static STORAGE: $EnumModule;
        static MOON_LINSE: $EnumModule;
        static DAY_II: $EnumModule;
        static STORAGE_I: $EnumModule;
        static OUTPUT: $EnumModule;
        percent_description: number;
        description: string;
        type: $EnumBaseType;
        percent: number;
        static NIGHT_II: $EnumModule;
        static PHASE_I: $EnumModule;
        static STORAGE_II: $EnumModule;
        static PHASE: $EnumModule;
        static NIGHT: $EnumModule;
        meta: number;
        static OUTPUT_II: $EnumModule;
        static PHASE_II: $EnumModule;
        static MOON_LINSE_II: $EnumModule;
        static DAY_I: $EnumModule;
        static DAY: $EnumModule;
        static MOON_LINSE_I: $EnumModule;
        static OUTPUT_I: $EnumModule;
    }
    /**
     * Values that may be interpreted as {@link $EnumModule}.
     */
    export type $EnumModule_ = "day" | "day_i" | "day_ii" | "night" | "night_i" | "night_ii" | "storage" | "storage_i" | "storage_ii" | "output" | "output_i" | "output_ii" | "phase" | "phase_i" | "phase_ii" | "moon_linse" | "moon_linse_i" | "moon_linse_ii";
    export class $ItemUpgradeModule<T extends $Enum<T>> extends $ItemMain<T> {
        static getType(arg0: number): $EnumInfoUpgradeModules;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemRotorsUpgrade$Types extends $Enum<$ItemRotorsUpgrade$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemRotorsUpgrade$Types[];
        static valueOf(arg0: string): $ItemRotorsUpgrade$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemRotorsUpgrade$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static rotorupgrade19: $ItemRotorsUpgrade$Types;
        static rotorupgrade17: $ItemRotorsUpgrade$Types;
        static rotorupgrade1: $ItemRotorsUpgrade$Types;
        static rotorupgrade18: $ItemRotorsUpgrade$Types;
        static rotorupgrade11: $ItemRotorsUpgrade$Types;
        static rotorupgrade12: $ItemRotorsUpgrade$Types;
        static rotorupgrade10: $ItemRotorsUpgrade$Types;
        static rotorupgrade15: $ItemRotorsUpgrade$Types;
        static rotorupgrade16: $ItemRotorsUpgrade$Types;
        static rotorupgrade13: $ItemRotorsUpgrade$Types;
        static rotorupgrade14: $ItemRotorsUpgrade$Types;
        static rotorupgrade: $ItemRotorsUpgrade$Types;
        static rotorupgrade6: $ItemRotorsUpgrade$Types;
        static rotorupgrade7: $ItemRotorsUpgrade$Types;
        static rotorupgrade8: $ItemRotorsUpgrade$Types;
        static rotorupgrade9: $ItemRotorsUpgrade$Types;
        static rotorupgrade2: $ItemRotorsUpgrade$Types;
        static rotorupgrade3: $ItemRotorsUpgrade$Types;
        static rotorupgrade4: $ItemRotorsUpgrade$Types;
        static rotorupgrade5: $ItemRotorsUpgrade$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemRotorsUpgrade$Types}.
     */
    export type $ItemRotorsUpgrade$Types_ = "rotorupgrade" | "rotorupgrade1" | "rotorupgrade2" | "rotorupgrade3" | "rotorupgrade4" | "rotorupgrade5" | "rotorupgrade6" | "rotorupgrade7" | "rotorupgrade8" | "rotorupgrade9" | "rotorupgrade10" | "rotorupgrade11" | "rotorupgrade12" | "rotorupgrade13" | "rotorupgrade14" | "rotorupgrade15" | "rotorupgrade16" | "rotorupgrade17" | "rotorupgrade18" | "rotorupgrade19";
    export class $ItemRotorsUpgrade<T extends $Enum<T>> extends $ItemMain<T> {
        getType(arg0: number): $EnumInfoRotorUpgradeModules$1;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemModuleTypePanel$Types extends $Enum<$ItemModuleTypePanel$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemModuleTypePanel$Types[];
        static valueOf(arg0: string): $ItemModuleTypePanel$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemModuleTypePanel$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static module65: $ItemModuleTypePanel$Types;
        static module64: $ItemModuleTypePanel$Types;
        static module63: $ItemModuleTypePanel$Types;
        static module62: $ItemModuleTypePanel$Types;
        static module69: $ItemModuleTypePanel$Types;
        static module68: $ItemModuleTypePanel$Types;
        static module67: $ItemModuleTypePanel$Types;
        static module66: $ItemModuleTypePanel$Types;
        static module61: $ItemModuleTypePanel$Types;
        static module94: $ItemModuleTypePanel$Types;
        static module93: $ItemModuleTypePanel$Types;
        static module70: $ItemModuleTypePanel$Types;
        static module92: $ItemModuleTypePanel$Types;
        static module91: $ItemModuleTypePanel$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemModuleTypePanel$Types}.
     */
    export type $ItemModuleTypePanel$Types_ = "module61" | "module62" | "module63" | "module64" | "module65" | "module66" | "module67" | "module68" | "module69" | "module70" | "module91" | "module92" | "module93" | "module94";
    export class $ItemModuleType<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $EnumQuarryModules extends $Enum<$EnumQuarryModules> {
        static values(): $EnumQuarryModules[];
        static valueOf(arg0: string): $EnumQuarryModules;
        static getFromID(arg0: number): $EnumQuarryModules;
        static COMBMAC: $EnumQuarryModules;
        efficiency: number;
        static WHITELIST: $EnumQuarryModules;
        cost: number;
        static SPEED_I: $EnumQuarryModules;
        static DEPTH_III: $EnumQuarryModules;
        static SPEED_II: $EnumQuarryModules;
        static SPEED_V: $EnumQuarryModules;
        static LUCKY_I: $EnumQuarryModules;
        type: $EnumQuarryType;
        static FURNACE: $EnumQuarryModules;
        static BLACKLIST: $EnumQuarryModules;
        static SPEED_III: $EnumQuarryModules;
        static LUCKY_III: $EnumQuarryModules;
        static MACERATOR: $EnumQuarryModules;
        meta: number;
        static POLISHER: $EnumQuarryModules;
        static DEPTH_I: $EnumQuarryModules;
        static SPEED_IV: $EnumQuarryModules;
        static LUCKY_II: $EnumQuarryModules;
        static DEPTH_II: $EnumQuarryModules;
    }
    /**
     * Values that may be interpreted as {@link $EnumQuarryModules}.
     */
    export type $EnumQuarryModules_ = "furnace" | "speed_i" | "speed_ii" | "speed_iii" | "speed_iv" | "speed_v" | "lucky_i" | "lucky_ii" | "lucky_iii" | "depth_i" | "depth_ii" | "depth_iii" | "blacklist" | "whitelist" | "macerator" | "combmac" | "polisher";
    export class $ItemAdditionModule<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemQuarryModule<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemReactorModules$Types extends $Enum<$ItemReactorModules$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemReactorModules$Types[];
        static valueOf(arg0: string): $ItemReactorModules$Types;
        getId(): number;
        getGeneration(): number;
        getExchanger(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemReactorModules$Types;
        getComponentVent(): number;
        getCapacitor(): number;
        getStableHeat(): number;
        getRadiation(): number;
        getVent(): number;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static generation0: $ItemReactorModules$Types;
        static generation1: $ItemReactorModules$Types;
        static generation2: $ItemReactorModules$Types;
        static generation3: $ItemReactorModules$Types;
        static exchanger3: $ItemReactorModules$Types;
        static exchanger1: $ItemReactorModules$Types;
        static exchanger2: $ItemReactorModules$Types;
        static exchanger0: $ItemReactorModules$Types;
        static componentvent0: $ItemReactorModules$Types;
        static componentvent1: $ItemReactorModules$Types;
        static stableheat3: $ItemReactorModules$Types;
        static componentvent2: $ItemReactorModules$Types;
        static componentvent3: $ItemReactorModules$Types;
        static capacitor0: $ItemReactorModules$Types;
        static stableheat0: $ItemReactorModules$Types;
        static capacitor1: $ItemReactorModules$Types;
        static stableheat1: $ItemReactorModules$Types;
        static radiation0: $ItemReactorModules$Types;
        static stableheat2: $ItemReactorModules$Types;
        static radiation1: $ItemReactorModules$Types;
        static vent3: $ItemReactorModules$Types;
        static radiation2: $ItemReactorModules$Types;
        static radiation3: $ItemReactorModules$Types;
        static vent1: $ItemReactorModules$Types;
        static capacitor2: $ItemReactorModules$Types;
        static vent2: $ItemReactorModules$Types;
        static capacitor3: $ItemReactorModules$Types;
        static vent0: $ItemReactorModules$Types;
        get id(): number;
        get generation(): number;
        get exchanger(): number;
        get mainPath(): string;
        get componentVent(): number;
        get capacitor(): number;
        get stableHeat(): number;
        get radiation(): number;
        get vent(): number;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemReactorModules$Types}.
     */
    export type $ItemReactorModules$Types_ = "generation0" | "generation1" | "generation2" | "generation3" | "radiation0" | "radiation1" | "radiation2" | "radiation3" | "stableheat0" | "stableheat1" | "stableheat2" | "stableheat3" | "vent0" | "vent1" | "vent2" | "vent3" | "componentvent0" | "componentvent1" | "componentvent2" | "componentvent3" | "exchanger0" | "exchanger1" | "exchanger2" | "exchanger3" | "capacitor0" | "capacitor1" | "capacitor2" | "capacitor3";
    export class $ItemEntityModule<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemWaterRotorsUpgrade<T extends $Enum<T>> extends $ItemMain<T> {
        getType(arg0: number): $EnumInfoRotorUpgradeModules;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $EnumSpawnerType extends $Enum<$EnumSpawnerType> {
        static values(): $EnumSpawnerType[];
        static valueOf(arg0: string): $EnumSpawnerType;
        static SPEED: $EnumSpawnerType;
        static FIRE: $EnumSpawnerType;
        static EXPERIENCE: $EnumSpawnerType;
        static SPAWN: $EnumSpawnerType;
        static LUCKY: $EnumSpawnerType;
    }
    /**
     * Values that may be interpreted as {@link $EnumSpawnerType}.
     */
    export type $EnumSpawnerType_ = "lucky" | "speed" | "experience" | "spawn" | "fire";
    export class $EnumSpawnerModules extends $Enum<$EnumSpawnerModules> {
        static values(): $EnumSpawnerModules[];
        static valueOf(arg0: string): $EnumSpawnerModules;
        static getFromID(arg0: number): $EnumSpawnerModules;
        static SPEED: $EnumSpawnerModules;
        static EXPERIENCE_I: $EnumSpawnerModules;
        static SPAWN_I: $EnumSpawnerModules;
        static LUCKY_III: $EnumSpawnerModules;
        static FIRE: $EnumSpawnerModules;
        meta: number;
        static EXPERIENCE_II: $EnumSpawnerModules;
        static LUCKY_I: $EnumSpawnerModules;
        type: $EnumSpawnerType;
        static LUCKY_II: $EnumSpawnerModules;
        static SPAWN: $EnumSpawnerModules;
        percent: number;
    }
    /**
     * Values that may be interpreted as {@link $EnumSpawnerModules}.
     */
    export type $EnumSpawnerModules_ = "lucky_i" | "lucky_ii" | "lucky_iii" | "speed" | "experience_i" | "experience_ii" | "spawn" | "spawn_i" | "fire";
    export class $ItemReactorModules<T extends $Enum<T>> extends $ItemMain<T> implements $IReactorModule {
        getGeneration(arg0: $ItemStack_): number;
        getExchanger(arg0: $ItemStack_): number;
        getComponentVent(arg0: $ItemStack_): number;
        getCapacitor(arg0: $ItemStack_): number;
        getStableHeat(arg0: $ItemStack_): number;
        getRadiation(arg0: $ItemStack_): number;
        getVent(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $EnumBaseType extends $Enum<$EnumBaseType> {
        static values(): $EnumBaseType[];
        static valueOf(arg0: string): $EnumBaseType;
        static STORAGE: $EnumBaseType;
        static MOON_LINSE: $EnumBaseType;
        static PHASE: $EnumBaseType;
        static NIGHT: $EnumBaseType;
        static OUTPUT: $EnumBaseType;
        static DAY: $EnumBaseType;
    }
    /**
     * Values that may be interpreted as {@link $EnumBaseType}.
     */
    export type $EnumBaseType_ = "day" | "night" | "storage" | "output" | "phase" | "moon_linse";
    export class $ItemBaseModules<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemAdditionModule$Types extends $Enum<$ItemAdditionModule$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAdditionModule$Types[];
        static valueOf(arg0: string): $ItemAdditionModule$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAdditionModule$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static purifier: $ItemAdditionModule$Types;
        static charger: $ItemAdditionModule$Types;
        static personality: $ItemAdditionModule$Types;
        static rf: $ItemAdditionModule$Types;
        static tier_in: $ItemAdditionModule$Types;
        static mov_charge_rf: $ItemAdditionModule$Types;
        static tier_de: $ItemAdditionModule$Types;
        static mov_charge_eu_item: $ItemAdditionModule$Types;
        static wireless: $ItemAdditionModule$Types;
        static mov_charge_eu: $ItemAdditionModule$Types;
        static mov_charge_rf_item: $ItemAdditionModule$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAdditionModule$Types}.
     */
    export type $ItemAdditionModule$Types_ = "personality" | "tier_in" | "tier_de" | "charger" | "rf" | "mov_charge_eu" | "mov_charge_eu_item" | "mov_charge_rf" | "mov_charge_rf_item" | "purifier" | "wireless";
}
