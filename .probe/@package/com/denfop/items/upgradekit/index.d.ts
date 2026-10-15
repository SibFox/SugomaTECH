import { $Item } from "@package/net/minecraft/world/item";
import { $EnumSolarPanels } from "@package/com/denfop/blockentity/panels/entity";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemMain } from "@package/com/denfop/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/com/denfop/items/upgradekit" {
    export class $ItemUpgradePanelKit<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static tick: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemUpgradePanelKit$Types extends $Enum<$ItemUpgradePanelKit$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemUpgradePanelKit$Types[];
        static valueOf(arg0: string): $ItemUpgradePanelKit$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemUpgradePanelKit$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static upgradepanelkit8: $ItemUpgradePanelKit$Types;
        static upgradepanelkit9: $ItemUpgradePanelKit$Types;
        static upgradepanelkit6: $ItemUpgradePanelKit$Types;
        static upgradepanelkit7: $ItemUpgradePanelKit$Types;
        static upgradepanelkit11: $ItemUpgradePanelKit$Types;
        static upgradepanelkit12: $ItemUpgradePanelKit$Types;
        static upgradepanelkit10: $ItemUpgradePanelKit$Types;
        static upgradepanelkit1: $ItemUpgradePanelKit$Types;
        static upgradepanelkit4: $ItemUpgradePanelKit$Types;
        static upgradepanelkit5: $ItemUpgradePanelKit$Types;
        static upgradepanelkit2: $ItemUpgradePanelKit$Types;
        static upgradepanelkit3: $ItemUpgradePanelKit$Types;
        static upgradepanelkit13: $ItemUpgradePanelKit$Types;
        static upgradepanelkit: $ItemUpgradePanelKit$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemUpgradePanelKit$Types}.
     */
    export type $ItemUpgradePanelKit$Types_ = "upgradepanelkit" | "upgradepanelkit1" | "upgradepanelkit2" | "upgradepanelkit3" | "upgradepanelkit4" | "upgradepanelkit5" | "upgradepanelkit6" | "upgradepanelkit7" | "upgradepanelkit8" | "upgradepanelkit9" | "upgradepanelkit10" | "upgradepanelkit11" | "upgradepanelkit12" | "upgradepanelkit13";
    export class $ItemUpgradePanelKit$EnumSolarPanelsKit extends $Enum<$ItemUpgradePanelKit$EnumSolarPanelsKit> {
        static values(): $ItemUpgradePanelKit$EnumSolarPanelsKit[];
        static valueOf(arg0: string): $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static registerkit(): void;
        static getFromID(arg0: number): $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static PHOTON: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        solarpanel_new: $EnumSolarPanels;
        static SINGULAR: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static QUANTUM: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static PROTON: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static NEUTRONIUM: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static QUARK: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        item_meta: number;
        static SPECTRAL: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static ADVANCED: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static BARION: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static GRAVITON: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static HADRON: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static PERFECT: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static DIFFRACTION: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        static HYBRID: $ItemUpgradePanelKit$EnumSolarPanelsKit;
        register: boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemUpgradePanelKit$EnumSolarPanelsKit}.
     */
    export type $ItemUpgradePanelKit$EnumSolarPanelsKit_ = "advanced" | "hybrid" | "perfect" | "quantum" | "spectral" | "proton" | "singular" | "diffraction" | "photon" | "neutronium" | "barion" | "hadron" | "graviton" | "quark";
    export class $ItemUpgradeKit<T extends $Enum<T>> extends $ItemMain<T> {
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
    export class $ItemUpgradeMachinesKit<T extends $Enum<T>> extends $ItemMain<T> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static inform: number[];
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static tick: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemUpgradeMachinesKit$Types extends $Enum<$ItemUpgradeMachinesKit$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemUpgradeMachinesKit$Types[];
        static valueOf(arg0: string): $ItemUpgradeMachinesKit$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemUpgradeMachinesKit$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static upgradepanelkitmachine: $ItemUpgradeMachinesKit$Types;
        static upgradepanelkitmachine1: $ItemUpgradeMachinesKit$Types;
        static upgradepanelkitmachine2: $ItemUpgradeMachinesKit$Types;
        static upgradepanelkitmachine3: $ItemUpgradeMachinesKit$Types;
        static upgradekitmachine4: $ItemUpgradeMachinesKit$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemUpgradeMachinesKit$Types}.
     */
    export type $ItemUpgradeMachinesKit$Types_ = "upgradepanelkitmachine" | "upgradepanelkitmachine1" | "upgradepanelkitmachine2" | "upgradepanelkitmachine3" | "upgradekitmachine4";
    export class $ItemUpgradeKit$Types extends $Enum<$ItemUpgradeKit$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemUpgradeKit$Types[];
        static valueOf(arg0: string): $ItemUpgradeKit$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemUpgradeKit$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static upgradekit2: $ItemUpgradeKit$Types;
        static upgradekit3: $ItemUpgradeKit$Types;
        static upgradekit4: $ItemUpgradeKit$Types;
        static upgradekit5: $ItemUpgradeKit$Types;
        static upgradekit6: $ItemUpgradeKit$Types;
        static upgradekit7: $ItemUpgradeKit$Types;
        static upgradekit8: $ItemUpgradeKit$Types;
        static upgradekit: $ItemUpgradeKit$Types;
        static upgradekit1: $ItemUpgradeKit$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemUpgradeKit$Types}.
     */
    export type $ItemUpgradeKit$Types_ = "upgradekit" | "upgradekit1" | "upgradekit2" | "upgradekit3" | "upgradekit4" | "upgradekit5" | "upgradekit6" | "upgradekit7" | "upgradekit8";
}
