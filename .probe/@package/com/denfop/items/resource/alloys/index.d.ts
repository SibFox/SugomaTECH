import { $Item } from "@package/net/minecraft/world/item";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemMain } from "@package/com/denfop/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $Object, $Enum } from "@package/java/lang";
import { $IItemTag } from "@package/com/denfop/datagen/itemtag";

declare module "@package/com/denfop/items/resource/alloys" {
    export class $ItemAlloysPlate<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
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
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemAlloysDust<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
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
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemAlloysIngot$Type extends $Enum<$ItemAlloysIngot$Type> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAlloysIngot$Type[];
        static valueOf(arg0: string): $ItemAlloysIngot$Type;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAlloysIngot$Type;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static vitalium: $ItemAlloysIngot$Type;
        static superalloy_haynes: $ItemAlloysIngot$Type;
        static alumel: $ItemAlloysIngot$Type;
        static nimonic: $ItemAlloysIngot$Type;
        static superalloy_rene: $ItemAlloysIngot$Type;
        static tantalum_tungsten_hafnium: $ItemAlloysIngot$Type;
        static permalloy: $ItemAlloysIngot$Type;
        static stellite: $ItemAlloysIngot$Type;
        static cobalt_chrome: $ItemAlloysIngot$Type;
        static beryllium_bronze: $ItemAlloysIngot$Type;
        static zeliber: $ItemAlloysIngot$Type;
        static aluminium_silicon: $ItemAlloysIngot$Type;
        static alcled: $ItemAlloysIngot$Type;
        static aluminum_bronze: $ItemAlloysIngot$Type;
        static muntsa: $ItemAlloysIngot$Type;
        static ferromanganese: $ItemAlloysIngot$Type;
        static stainless_steel: $ItemAlloysIngot$Type;
        static hafnium_boride_alloy: $ItemAlloysIngot$Type;
        static woods: $ItemAlloysIngot$Type;
        static inconel: $ItemAlloysIngot$Type;
        static gallium_arsenic: $ItemAlloysIngot$Type;
        static molybdenum_steel: $ItemAlloysIngot$Type;
        static duralumin: $ItemAlloysIngot$Type;
        static nitenol: $ItemAlloysIngot$Type;
        static yttrium_aluminium_garnet: $ItemAlloysIngot$Type;
        static red_brass: $ItemAlloysIngot$Type;
        static hafnium_carbide: $ItemAlloysIngot$Type;
        static osmiridium: $ItemAlloysIngot$Type;
        static vanadoalumite: $ItemAlloysIngot$Type;
        static nichrome: $ItemAlloysIngot$Type;
        static aluminium_lithium_alloy: $ItemAlloysIngot$Type;
        static niobium_titanium: $ItemAlloysIngot$Type;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAlloysIngot$Type}.
     */
    export type $ItemAlloysIngot$Type_ = "aluminum_bronze" | "alumel" | "red_brass" | "muntsa" | "nichrome" | "alcled" | "vanadoalumite" | "vitalium" | "duralumin" | "ferromanganese" | "aluminium_silicon" | "beryllium_bronze" | "zeliber" | "stainless_steel" | "inconel" | "nitenol" | "stellite" | "hafnium_boride_alloy" | "woods" | "nimonic" | "tantalum_tungsten_hafnium" | "permalloy" | "aluminium_lithium_alloy" | "cobalt_chrome" | "hafnium_carbide" | "molybdenum_steel" | "niobium_titanium" | "osmiridium" | "superalloy_haynes" | "superalloy_rene" | "yttrium_aluminium_garnet" | "gallium_arsenic";
    export class $ItemAlloysCasing$Types extends $Enum<$ItemAlloysCasing$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAlloysCasing$Types[];
        static valueOf(arg0: string): $ItemAlloysCasing$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAlloysCasing$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static vitalium: $ItemAlloysCasing$Types;
        static superalloy_haynes: $ItemAlloysCasing$Types;
        static alumel: $ItemAlloysCasing$Types;
        static nimonic: $ItemAlloysCasing$Types;
        static superalloy_rene: $ItemAlloysCasing$Types;
        static tantalum_tungsten_hafnium: $ItemAlloysCasing$Types;
        static permalloy: $ItemAlloysCasing$Types;
        static stellite: $ItemAlloysCasing$Types;
        static cobalt_chrome: $ItemAlloysCasing$Types;
        static beryllium_bronze: $ItemAlloysCasing$Types;
        static zeliber: $ItemAlloysCasing$Types;
        static aluminium_silicon: $ItemAlloysCasing$Types;
        static alcled: $ItemAlloysCasing$Types;
        static aluminum_bronze: $ItemAlloysCasing$Types;
        static muntsa: $ItemAlloysCasing$Types;
        static ferromanganese: $ItemAlloysCasing$Types;
        static stainless_steel: $ItemAlloysCasing$Types;
        static hafnium_boride_alloy: $ItemAlloysCasing$Types;
        static woods: $ItemAlloysCasing$Types;
        static inconel: $ItemAlloysCasing$Types;
        static gallium_arsenic: $ItemAlloysCasing$Types;
        static molybdenum_steel: $ItemAlloysCasing$Types;
        static duralumin: $ItemAlloysCasing$Types;
        static nitenol: $ItemAlloysCasing$Types;
        static yttrium_aluminium_garnet: $ItemAlloysCasing$Types;
        static red_brass: $ItemAlloysCasing$Types;
        static hafnium_carbide: $ItemAlloysCasing$Types;
        static osmiridium: $ItemAlloysCasing$Types;
        static vanadoalumite: $ItemAlloysCasing$Types;
        static nichrome: $ItemAlloysCasing$Types;
        static aluminium_lithium_alloy: $ItemAlloysCasing$Types;
        static niobium_titanium: $ItemAlloysCasing$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAlloysCasing$Types}.
     */
    export type $ItemAlloysCasing$Types_ = "aluminum_bronze" | "alumel" | "red_brass" | "muntsa" | "nichrome" | "alcled" | "vanadoalumite" | "vitalium" | "duralumin" | "ferromanganese" | "aluminium_silicon" | "beryllium_bronze" | "zeliber" | "stainless_steel" | "inconel" | "nitenol" | "stellite" | "hafnium_boride_alloy" | "woods" | "nimonic" | "tantalum_tungsten_hafnium" | "permalloy" | "aluminium_lithium_alloy" | "cobalt_chrome" | "hafnium_carbide" | "molybdenum_steel" | "niobium_titanium" | "osmiridium" | "superalloy_haynes" | "superalloy_rene" | "yttrium_aluminium_garnet" | "gallium_arsenic";
    export class $ItemAlloysDust$Type extends $Enum<$ItemAlloysDust$Type> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAlloysDust$Type[];
        static valueOf(arg0: string): $ItemAlloysDust$Type;
        getId(): number;
        getOtherPart(): string;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAlloysDust$Type;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static vitalium: $ItemAlloysDust$Type;
        static superalloy_haynes: $ItemAlloysDust$Type;
        static alumel: $ItemAlloysDust$Type;
        static nimonic: $ItemAlloysDust$Type;
        static superalloy_rene: $ItemAlloysDust$Type;
        static tantalum_tungsten_hafnium: $ItemAlloysDust$Type;
        static permalloy: $ItemAlloysDust$Type;
        static stellite: $ItemAlloysDust$Type;
        static cobalt_chrome: $ItemAlloysDust$Type;
        static beryllium_bronze: $ItemAlloysDust$Type;
        static zeliber: $ItemAlloysDust$Type;
        static aluminium_silicon: $ItemAlloysDust$Type;
        static alcled: $ItemAlloysDust$Type;
        static aluminum_bronze: $ItemAlloysDust$Type;
        static muntsa: $ItemAlloysDust$Type;
        static ferromanganese: $ItemAlloysDust$Type;
        static stainless_steel: $ItemAlloysDust$Type;
        static hafnium_boride_alloy: $ItemAlloysDust$Type;
        static woods: $ItemAlloysDust$Type;
        static inconel: $ItemAlloysDust$Type;
        static gallium_arsenic: $ItemAlloysDust$Type;
        static molybdenum_steel: $ItemAlloysDust$Type;
        static duralumin: $ItemAlloysDust$Type;
        static nitenol: $ItemAlloysDust$Type;
        static yttrium_aluminium_garnet: $ItemAlloysDust$Type;
        static red_brass: $ItemAlloysDust$Type;
        static hafnium_carbide: $ItemAlloysDust$Type;
        static osmiridium: $ItemAlloysDust$Type;
        static vanadoalumite: $ItemAlloysDust$Type;
        static nichrome: $ItemAlloysDust$Type;
        static aluminium_lithium_alloy: $ItemAlloysDust$Type;
        static niobium_titanium: $ItemAlloysDust$Type;
        get id(): number;
        get otherPart(): string;
        get mainPath(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAlloysDust$Type}.
     */
    export type $ItemAlloysDust$Type_ = "aluminum_bronze" | "alumel" | "red_brass" | "muntsa" | "nichrome" | "alcled" | "vanadoalumite" | "vitalium" | "duralumin" | "ferromanganese" | "aluminium_silicon" | "beryllium_bronze" | "zeliber" | "stainless_steel" | "inconel" | "nitenol" | "stellite" | "hafnium_boride_alloy" | "woods" | "nimonic" | "tantalum_tungsten_hafnium" | "permalloy" | "aluminium_lithium_alloy" | "cobalt_chrome" | "hafnium_carbide" | "molybdenum_steel" | "niobium_titanium" | "osmiridium" | "superalloy_haynes" | "superalloy_rene" | "yttrium_aluminium_garnet" | "gallium_arsenic";
    export class $ItemAlloysIngot<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
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
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemAlloysDoublePlate<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
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
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemAlloysDoublePlate$Type extends $Enum<$ItemAlloysDoublePlate$Type> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAlloysDoublePlate$Type[];
        static valueOf(arg0: string): $ItemAlloysDoublePlate$Type;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAlloysDoublePlate$Type;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static vitalium: $ItemAlloysDoublePlate$Type;
        static superalloy_haynes: $ItemAlloysDoublePlate$Type;
        static alumel: $ItemAlloysDoublePlate$Type;
        static nimonic: $ItemAlloysDoublePlate$Type;
        static superalloy_rene: $ItemAlloysDoublePlate$Type;
        static tantalum_tungsten_hafnium: $ItemAlloysDoublePlate$Type;
        static permalloy: $ItemAlloysDoublePlate$Type;
        static stellite: $ItemAlloysDoublePlate$Type;
        static cobalt_chrome: $ItemAlloysDoublePlate$Type;
        static beryllium_bronze: $ItemAlloysDoublePlate$Type;
        static zeliber: $ItemAlloysDoublePlate$Type;
        static aluminium_silicon: $ItemAlloysDoublePlate$Type;
        static alcled: $ItemAlloysDoublePlate$Type;
        static aluminum_bronze: $ItemAlloysDoublePlate$Type;
        static muntsa: $ItemAlloysDoublePlate$Type;
        static ferromanganese: $ItemAlloysDoublePlate$Type;
        static stainless_steel: $ItemAlloysDoublePlate$Type;
        static hafnium_boride_alloy: $ItemAlloysDoublePlate$Type;
        static woods: $ItemAlloysDoublePlate$Type;
        static inconel: $ItemAlloysDoublePlate$Type;
        static gallium_arsenic: $ItemAlloysDoublePlate$Type;
        static molybdenum_steel: $ItemAlloysDoublePlate$Type;
        static duralumin: $ItemAlloysDoublePlate$Type;
        static nitenol: $ItemAlloysDoublePlate$Type;
        static yttrium_aluminium_garnet: $ItemAlloysDoublePlate$Type;
        static red_brass: $ItemAlloysDoublePlate$Type;
        static hafnium_carbide: $ItemAlloysDoublePlate$Type;
        static osmiridium: $ItemAlloysDoublePlate$Type;
        static vanadoalumite: $ItemAlloysDoublePlate$Type;
        static nichrome: $ItemAlloysDoublePlate$Type;
        static aluminium_lithium_alloy: $ItemAlloysDoublePlate$Type;
        static niobium_titanium: $ItemAlloysDoublePlate$Type;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAlloysDoublePlate$Type}.
     */
    export type $ItemAlloysDoublePlate$Type_ = "aluminum_bronze" | "alumel" | "red_brass" | "muntsa" | "nichrome" | "alcled" | "vanadoalumite" | "vitalium" | "duralumin" | "ferromanganese" | "aluminium_silicon" | "beryllium_bronze" | "zeliber" | "stainless_steel" | "inconel" | "nitenol" | "stellite" | "hafnium_boride_alloy" | "woods" | "nimonic" | "tantalum_tungsten_hafnium" | "permalloy" | "aluminium_lithium_alloy" | "cobalt_chrome" | "hafnium_carbide" | "molybdenum_steel" | "niobium_titanium" | "osmiridium" | "superalloy_haynes" | "superalloy_rene" | "yttrium_aluminium_garnet" | "gallium_arsenic";
    export class $ItemAlloysNugget<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
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
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemAlloysPlate$Types extends $Enum<$ItemAlloysPlate$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAlloysPlate$Types[];
        static valueOf(arg0: string): $ItemAlloysPlate$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAlloysPlate$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static vitalium: $ItemAlloysPlate$Types;
        static superalloy_haynes: $ItemAlloysPlate$Types;
        static alumel: $ItemAlloysPlate$Types;
        static nimonic: $ItemAlloysPlate$Types;
        static superalloy_rene: $ItemAlloysPlate$Types;
        static tantalum_tungsten_hafnium: $ItemAlloysPlate$Types;
        static permalloy: $ItemAlloysPlate$Types;
        static stellite: $ItemAlloysPlate$Types;
        static cobalt_chrome: $ItemAlloysPlate$Types;
        static beryllium_bronze: $ItemAlloysPlate$Types;
        static zeliber: $ItemAlloysPlate$Types;
        static aluminium_silicon: $ItemAlloysPlate$Types;
        static alcled: $ItemAlloysPlate$Types;
        static aluminum_bronze: $ItemAlloysPlate$Types;
        static muntsa: $ItemAlloysPlate$Types;
        static ferromanganese: $ItemAlloysPlate$Types;
        static stainless_steel: $ItemAlloysPlate$Types;
        static hafnium_boride_alloy: $ItemAlloysPlate$Types;
        static woods: $ItemAlloysPlate$Types;
        static inconel: $ItemAlloysPlate$Types;
        static gallium_arsenic: $ItemAlloysPlate$Types;
        static molybdenum_steel: $ItemAlloysPlate$Types;
        static duralumin: $ItemAlloysPlate$Types;
        static nitenol: $ItemAlloysPlate$Types;
        static yttrium_aluminium_garnet: $ItemAlloysPlate$Types;
        static red_brass: $ItemAlloysPlate$Types;
        static hafnium_carbide: $ItemAlloysPlate$Types;
        static osmiridium: $ItemAlloysPlate$Types;
        static vanadoalumite: $ItemAlloysPlate$Types;
        static nichrome: $ItemAlloysPlate$Types;
        static aluminium_lithium_alloy: $ItemAlloysPlate$Types;
        static niobium_titanium: $ItemAlloysPlate$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAlloysPlate$Types}.
     */
    export type $ItemAlloysPlate$Types_ = "aluminum_bronze" | "alumel" | "red_brass" | "muntsa" | "nichrome" | "alcled" | "vanadoalumite" | "vitalium" | "duralumin" | "ferromanganese" | "aluminium_silicon" | "beryllium_bronze" | "zeliber" | "stainless_steel" | "inconel" | "nitenol" | "stellite" | "hafnium_boride_alloy" | "woods" | "nimonic" | "tantalum_tungsten_hafnium" | "permalloy" | "aluminium_lithium_alloy" | "cobalt_chrome" | "hafnium_carbide" | "molybdenum_steel" | "niobium_titanium" | "osmiridium" | "superalloy_haynes" | "superalloy_rene" | "yttrium_aluminium_garnet" | "gallium_arsenic";
    export class $ItemAlloysCasing<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
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
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemAlloysGear$Types extends $Enum<$ItemAlloysGear$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAlloysGear$Types[];
        static valueOf(arg0: string): $ItemAlloysGear$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAlloysGear$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static vitalium: $ItemAlloysGear$Types;
        static superalloy_haynes: $ItemAlloysGear$Types;
        static alumel: $ItemAlloysGear$Types;
        static nimonic: $ItemAlloysGear$Types;
        static superalloy_rene: $ItemAlloysGear$Types;
        static tantalum_tungsten_hafnium: $ItemAlloysGear$Types;
        static permalloy: $ItemAlloysGear$Types;
        static stellite: $ItemAlloysGear$Types;
        static cobalt_chrome: $ItemAlloysGear$Types;
        static beryllium_bronze: $ItemAlloysGear$Types;
        static zeliber: $ItemAlloysGear$Types;
        static aluminium_silicon: $ItemAlloysGear$Types;
        static alcled: $ItemAlloysGear$Types;
        static aluminum_bronze: $ItemAlloysGear$Types;
        static muntsa: $ItemAlloysGear$Types;
        static ferromanganese: $ItemAlloysGear$Types;
        static stainless_steel: $ItemAlloysGear$Types;
        static hafnium_boride_alloy: $ItemAlloysGear$Types;
        static woods: $ItemAlloysGear$Types;
        static inconel: $ItemAlloysGear$Types;
        static gallium_arsenic: $ItemAlloysGear$Types;
        static molybdenum_steel: $ItemAlloysGear$Types;
        static duralumin: $ItemAlloysGear$Types;
        static nitenol: $ItemAlloysGear$Types;
        static yttrium_aluminium_garnet: $ItemAlloysGear$Types;
        static red_brass: $ItemAlloysGear$Types;
        static hafnium_carbide: $ItemAlloysGear$Types;
        static osmiridium: $ItemAlloysGear$Types;
        static vanadoalumite: $ItemAlloysGear$Types;
        static nichrome: $ItemAlloysGear$Types;
        static aluminium_lithium_alloy: $ItemAlloysGear$Types;
        static niobium_titanium: $ItemAlloysGear$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAlloysGear$Types}.
     */
    export type $ItemAlloysGear$Types_ = "aluminum_bronze" | "alumel" | "red_brass" | "muntsa" | "nichrome" | "alcled" | "vanadoalumite" | "vitalium" | "duralumin" | "ferromanganese" | "aluminium_silicon" | "beryllium_bronze" | "zeliber" | "stainless_steel" | "inconel" | "nitenol" | "stellite" | "hafnium_boride_alloy" | "woods" | "nimonic" | "tantalum_tungsten_hafnium" | "permalloy" | "aluminium_lithium_alloy" | "cobalt_chrome" | "hafnium_carbide" | "molybdenum_steel" | "niobium_titanium" | "osmiridium" | "superalloy_haynes" | "superalloy_rene" | "yttrium_aluminium_garnet" | "gallium_arsenic";
    export class $ItemAlloysNugget$Types extends $Enum<$ItemAlloysNugget$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemAlloysNugget$Types[];
        static valueOf(arg0: string): $ItemAlloysNugget$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemAlloysNugget$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static vitalium: $ItemAlloysNugget$Types;
        static superalloy_haynes: $ItemAlloysNugget$Types;
        static alumel: $ItemAlloysNugget$Types;
        static nimonic: $ItemAlloysNugget$Types;
        static superalloy_rene: $ItemAlloysNugget$Types;
        static tantalum_tungsten_hafnium: $ItemAlloysNugget$Types;
        static permalloy: $ItemAlloysNugget$Types;
        static stellite: $ItemAlloysNugget$Types;
        static cobalt_chrome: $ItemAlloysNugget$Types;
        static beryllium_bronze: $ItemAlloysNugget$Types;
        static zeliber: $ItemAlloysNugget$Types;
        static aluminium_silicon: $ItemAlloysNugget$Types;
        static alcled: $ItemAlloysNugget$Types;
        static aluminum_bronze: $ItemAlloysNugget$Types;
        static muntsa: $ItemAlloysNugget$Types;
        static ferromanganese: $ItemAlloysNugget$Types;
        static stainless_steel: $ItemAlloysNugget$Types;
        static hafnium_boride_alloy: $ItemAlloysNugget$Types;
        static woods: $ItemAlloysNugget$Types;
        static inconel: $ItemAlloysNugget$Types;
        static gallium_arsenic: $ItemAlloysNugget$Types;
        static molybdenum_steel: $ItemAlloysNugget$Types;
        static duralumin: $ItemAlloysNugget$Types;
        static nitenol: $ItemAlloysNugget$Types;
        static yttrium_aluminium_garnet: $ItemAlloysNugget$Types;
        static red_brass: $ItemAlloysNugget$Types;
        static hafnium_carbide: $ItemAlloysNugget$Types;
        static osmiridium: $ItemAlloysNugget$Types;
        static vanadoalumite: $ItemAlloysNugget$Types;
        static nichrome: $ItemAlloysNugget$Types;
        static aluminium_lithium_alloy: $ItemAlloysNugget$Types;
        static niobium_titanium: $ItemAlloysNugget$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemAlloysNugget$Types}.
     */
    export type $ItemAlloysNugget$Types_ = "aluminum_bronze" | "alumel" | "red_brass" | "muntsa" | "nichrome" | "alcled" | "vanadoalumite" | "vitalium" | "duralumin" | "ferromanganese" | "aluminium_silicon" | "beryllium_bronze" | "zeliber" | "stainless_steel" | "inconel" | "nitenol" | "stellite" | "hafnium_boride_alloy" | "woods" | "nimonic" | "tantalum_tungsten_hafnium" | "permalloy" | "aluminium_lithium_alloy" | "cobalt_chrome" | "hafnium_carbide" | "molybdenum_steel" | "niobium_titanium" | "osmiridium" | "superalloy_haynes" | "superalloy_rene" | "yttrium_aluminium_garnet" | "gallium_arsenic";
    export class $ItemAlloysGear<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
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
        get item(): $Item;
        get tags(): string[];
    }
}
