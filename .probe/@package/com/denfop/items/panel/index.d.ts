import { $Item } from "@package/net/minecraft/world/item";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemMain } from "@package/com/denfop/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $Object, $Enum } from "@package/java/lang";
import { $EnumSolarType, $IOutputItem, $IBatteryItem, $ISolarItem } from "@package/com/denfop/api/solar";

declare module "@package/com/denfop/items/panel" {
    export class $ItemDaySolarPanelGlass<T extends $Enum<T>> extends $ItemMain<T> implements $ISolarItem {
        getType(): $EnumSolarType;
        getResourceLocation(arg0: number): $ResourceLocation;
        getGenerationValue(arg0: number): number;
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
        get type(): $EnumSolarType;
    }
    export class $ItemDayNightSolarPanelGlass$Types extends $Enum<$ItemDayNightSolarPanelGlass$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemDayNightSolarPanelGlass$Types[];
        static valueOf(arg0: string): $ItemDayNightSolarPanelGlass$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemDayNightSolarPanelGlass$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static kvr: $ItemDayNightSolarPanelGlass$Types;
        static spe: $ItemDayNightSolarPanelGlass$Types;
        static adm: $ItemDayNightSolarPanelGlass$Types;
        static pro: $ItemDayNightSolarPanelGlass$Types;
        static adr: $ItemDayNightSolarPanelGlass$Types;
        static hyb: $ItemDayNightSolarPanelGlass$Types;
        static adv: $ItemDayNightSolarPanelGlass$Types;
        static bar: $ItemDayNightSolarPanelGlass$Types;
        static pho: $ItemDayNightSolarPanelGlass$Types;
        static gra: $ItemDayNightSolarPanelGlass$Types;
        static sin: $ItemDayNightSolarPanelGlass$Types;
        static ult: $ItemDayNightSolarPanelGlass$Types;
        static qua: $ItemDayNightSolarPanelGlass$Types;
        static neu: $ItemDayNightSolarPanelGlass$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemDayNightSolarPanelGlass$Types}.
     */
    export type $ItemDayNightSolarPanelGlass$Types_ = "adv" | "hyb" | "ult" | "qua" | "spe" | "pro" | "sin" | "adm" | "pho" | "neu" | "bar" | "adr" | "gra" | "kvr";
    export class $ItemNightSolarPanelGlass<T extends $Enum<T>> extends $ItemMain<T> implements $ISolarItem {
        getType(): $EnumSolarType;
        getResourceLocation(arg0: number): $ResourceLocation;
        getGenerationValue(arg0: number): number;
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
        get type(): $EnumSolarType;
    }
    export class $ItemBatterySolarPanel$Types extends $Enum<$ItemBatterySolarPanel$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemBatterySolarPanel$Types[];
        static valueOf(arg0: string): $ItemBatterySolarPanel$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemBatterySolarPanel$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static kvr: $ItemBatterySolarPanel$Types;
        static spe: $ItemBatterySolarPanel$Types;
        static adm: $ItemBatterySolarPanel$Types;
        static pro: $ItemBatterySolarPanel$Types;
        static adr: $ItemBatterySolarPanel$Types;
        static hyb: $ItemBatterySolarPanel$Types;
        static adv: $ItemBatterySolarPanel$Types;
        static bar: $ItemBatterySolarPanel$Types;
        static pho: $ItemBatterySolarPanel$Types;
        static gra: $ItemBatterySolarPanel$Types;
        static sin: $ItemBatterySolarPanel$Types;
        static ult: $ItemBatterySolarPanel$Types;
        static qua: $ItemBatterySolarPanel$Types;
        static neu: $ItemBatterySolarPanel$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemBatterySolarPanel$Types}.
     */
    export type $ItemBatterySolarPanel$Types_ = "adv" | "hyb" | "ult" | "qua" | "spe" | "pro" | "sin" | "adm" | "pho" | "neu" | "bar" | "adr" | "gra" | "kvr";
    export class $ItemNightSolarPanelGlass$Types extends $Enum<$ItemNightSolarPanelGlass$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemNightSolarPanelGlass$Types[];
        static valueOf(arg0: string): $ItemNightSolarPanelGlass$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemNightSolarPanelGlass$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static kvr: $ItemNightSolarPanelGlass$Types;
        static spe: $ItemNightSolarPanelGlass$Types;
        static adm: $ItemNightSolarPanelGlass$Types;
        static pro: $ItemNightSolarPanelGlass$Types;
        static adr: $ItemNightSolarPanelGlass$Types;
        static hyb: $ItemNightSolarPanelGlass$Types;
        static adv: $ItemNightSolarPanelGlass$Types;
        static bar: $ItemNightSolarPanelGlass$Types;
        static pho: $ItemNightSolarPanelGlass$Types;
        static gra: $ItemNightSolarPanelGlass$Types;
        static sin: $ItemNightSolarPanelGlass$Types;
        static ult: $ItemNightSolarPanelGlass$Types;
        static qua: $ItemNightSolarPanelGlass$Types;
        static neu: $ItemNightSolarPanelGlass$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemNightSolarPanelGlass$Types}.
     */
    export type $ItemNightSolarPanelGlass$Types_ = "adv" | "hyb" | "ult" | "qua" | "spe" | "pro" | "sin" | "adm" | "pho" | "neu" | "bar" | "adr" | "gra" | "kvr";
    export class $ItemDayNightSolarPanelGlass<T extends $Enum<T>> extends $ItemMain<T> implements $ISolarItem {
        getType(): $EnumSolarType;
        getResourceLocation(arg0: number): $ResourceLocation;
        getGenerationValue(arg0: number): number;
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
        get type(): $EnumSolarType;
    }
    export class $ItemOutputSolarPanel<T extends $Enum<T>> extends $ItemMain<T> implements $IOutputItem {
        getOutput(arg0: number): number;
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
    export class $ItemBatterySolarPanel<T extends $Enum<T>> extends $ItemMain<T> implements $IBatteryItem {
        getCapacity(arg0: number): number;
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
    export class $ItemDaySolarPanelGlass$Types extends $Enum<$ItemDaySolarPanelGlass$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemDaySolarPanelGlass$Types[];
        static valueOf(arg0: string): $ItemDaySolarPanelGlass$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemDaySolarPanelGlass$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static kvr: $ItemDaySolarPanelGlass$Types;
        static spe: $ItemDaySolarPanelGlass$Types;
        static adm: $ItemDaySolarPanelGlass$Types;
        static pro: $ItemDaySolarPanelGlass$Types;
        static adr: $ItemDaySolarPanelGlass$Types;
        static hyb: $ItemDaySolarPanelGlass$Types;
        static adv: $ItemDaySolarPanelGlass$Types;
        static bar: $ItemDaySolarPanelGlass$Types;
        static pho: $ItemDaySolarPanelGlass$Types;
        static gra: $ItemDaySolarPanelGlass$Types;
        static sin: $ItemDaySolarPanelGlass$Types;
        static ult: $ItemDaySolarPanelGlass$Types;
        static qua: $ItemDaySolarPanelGlass$Types;
        static neu: $ItemDaySolarPanelGlass$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemDaySolarPanelGlass$Types}.
     */
    export type $ItemDaySolarPanelGlass$Types_ = "adv" | "hyb" | "ult" | "qua" | "spe" | "pro" | "sin" | "adm" | "pho" | "neu" | "bar" | "adr" | "gra" | "kvr";
    export class $ItemOutputSolarPanel$Types extends $Enum<$ItemOutputSolarPanel$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemOutputSolarPanel$Types[];
        static valueOf(arg0: string): $ItemOutputSolarPanel$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemOutputSolarPanel$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static kvr: $ItemOutputSolarPanel$Types;
        static spe: $ItemOutputSolarPanel$Types;
        static adm: $ItemOutputSolarPanel$Types;
        static pro: $ItemOutputSolarPanel$Types;
        static adr: $ItemOutputSolarPanel$Types;
        static hyb: $ItemOutputSolarPanel$Types;
        static adv: $ItemOutputSolarPanel$Types;
        static bar: $ItemOutputSolarPanel$Types;
        static pho: $ItemOutputSolarPanel$Types;
        static gra: $ItemOutputSolarPanel$Types;
        static sin: $ItemOutputSolarPanel$Types;
        static ult: $ItemOutputSolarPanel$Types;
        static qua: $ItemOutputSolarPanel$Types;
        static neu: $ItemOutputSolarPanel$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemOutputSolarPanel$Types}.
     */
    export type $ItemOutputSolarPanel$Types_ = "adv" | "hyb" | "ult" | "qua" | "spe" | "pro" | "sin" | "adm" | "pho" | "neu" | "bar" | "adr" | "gra" | "kvr";
}
