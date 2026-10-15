import { $IColony, $IBuildingItem, $IColonyBuilding } from "@package/com/denfop/api/space/colonies/api";
import { $CreativeModeTab_, $CreativeModeTab, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemFluidContainer, $BaseEnergyItem, $ItemMain } from "@package/com/denfop/items";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $NonNullList } from "@package/net/minecraft/core";
import { $EnergyItem } from "@package/com/denfop/api/item/energy";
import { $IRoversItem } from "@package/com/denfop/api/space/rovers/api";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnumRoversLevel_, $EnumTypeRovers, $EnumRoversLevel, $EnumTypeUpgrade, $EnumRoversLevelFluid_, $EnumTypeRovers_ } from "@package/com/denfop/api/space/rovers/enums";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";
import { $IItemTab } from "@package/com/denfop/tabs";
import { $EnumTypeBuilding } from "@package/com/denfop/api/space/colonies/enums";
export * as teleport from "@package/com/denfop/items/space/teleport";

declare module "@package/com/denfop/items/space" {
    export class $ItemSpace<T extends $Enum<T>> extends $ItemMain<T> {
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
    export class $ItemResearchLens<T extends $Enum<T>> extends $ItemMain<T> {
        static getType(arg0: number): $EnumTypeUpgrade;
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
    export class $ItemSpace$Types extends $Enum<$ItemSpace$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemSpace$Types[];
        static valueOf(arg0: string): $ItemSpace$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemSpace$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static ganymede_pebble: $ItemSpace$Types;
        static titania_pebble: $ItemSpace$Types;
        static ariel_boulder: $ItemSpace$Types;
        static mercury_boulder: $ItemSpace$Types;
        static oberon_boulder: $ItemSpace$Types;
        static umbriel_pebble: $ItemSpace$Types;
        static charon_pebble: $ItemSpace$Types;
        static phobos_pebble: $ItemSpace$Types;
        static ceres_pebble: $ItemSpace$Types;
        static callisto_boulder: $ItemSpace$Types;
        static pluto_boulder: $ItemSpace$Types;
        static triton_boulder: $ItemSpace$Types;
        static eris_pebble: $ItemSpace$Types;
        static mimas_boulder: $ItemSpace$Types;
        static rhea_boulder: $ItemSpace$Types;
        static mercury_pebble: $ItemSpace$Types;
        static haumea_boulder: $ItemSpace$Types;
        static asteroids_pebble: $ItemSpace$Types;
        static pluto_pebble: $ItemSpace$Types;
        static makemake_pebble: $ItemSpace$Types;
        static enceladus_boulder: $ItemSpace$Types;
        static phobos_boulder: $ItemSpace$Types;
        static ganymede_boulder: $ItemSpace$Types;
        static oberon_pebble: $ItemSpace$Types;
        static ceres_boulder: $ItemSpace$Types;
        static callisto_pebble: $ItemSpace$Types;
        static mimas_pebble: $ItemSpace$Types;
        static miranda_boulder: $ItemSpace$Types;
        static charon_boulder: $ItemSpace$Types;
        static enceladus_pebble: $ItemSpace$Types;
        static umbriel_boulder: $ItemSpace$Types;
        static triton_pebble: $ItemSpace$Types;
        static europe_pebble: $ItemSpace$Types;
        static eris_boulder: $ItemSpace$Types;
        static titan_pebble: $ItemSpace$Types;
        static deimos_boulder: $ItemSpace$Types;
        static deimos_pebble: $ItemSpace$Types;
        static venus_pebble: $ItemSpace$Types;
        static europe_boulder: $ItemSpace$Types;
        static tethys_pebble: $ItemSpace$Types;
        static miranda_pebble: $ItemSpace$Types;
        static moon_pebble: $ItemSpace$Types;
        static io_boulder: $ItemSpace$Types;
        static tethys_boulder: $ItemSpace$Types;
        static moon_boulder: $ItemSpace$Types;
        static venus_boulder: $ItemSpace$Types;
        static io_pebble: $ItemSpace$Types;
        static makemake_boulder: $ItemSpace$Types;
        static asteroids_boulder: $ItemSpace$Types;
        static dione_boulder: $ItemSpace$Types;
        static titan_boulder: $ItemSpace$Types;
        static proteus_pebble: $ItemSpace$Types;
        static rhea_pebble: $ItemSpace$Types;
        static proteus_boulder: $ItemSpace$Types;
        static haumea_pebble: $ItemSpace$Types;
        static titania_boulder: $ItemSpace$Types;
        static dione_pebble: $ItemSpace$Types;
        static mars_pebble: $ItemSpace$Types;
        static mars_boulder: $ItemSpace$Types;
        static ariel_pebble: $ItemSpace$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemSpace$Types}.
     */
    export type $ItemSpace$Types_ = "ariel_boulder" | "asteroids_boulder" | "callisto_boulder" | "ceres_boulder" | "charon_boulder" | "deimos_boulder" | "dione_boulder" | "enceladus_boulder" | "eris_boulder" | "europe_boulder" | "ganymede_boulder" | "haumea_boulder" | "io_boulder" | "makemake_boulder" | "mars_boulder" | "mercury_boulder" | "mimas_boulder" | "miranda_boulder" | "moon_boulder" | "oberon_boulder" | "phobos_boulder" | "pluto_boulder" | "proteus_boulder" | "rhea_boulder" | "tethys_boulder" | "titan_boulder" | "titania_boulder" | "triton_boulder" | "umbriel_boulder" | "venus_boulder" | "ariel_pebble" | "asteroids_pebble" | "callisto_pebble" | "ceres_pebble" | "charon_pebble" | "deimos_pebble" | "dione_pebble" | "enceladus_pebble" | "eris_pebble" | "europe_pebble" | "ganymede_pebble" | "haumea_pebble" | "io_pebble" | "makemake_pebble" | "mars_pebble" | "mercury_pebble" | "mimas_pebble" | "miranda_pebble" | "moon_pebble" | "oberon_pebble" | "phobos_pebble" | "pluto_pebble" | "proteus_pebble" | "rhea_pebble" | "tethys_pebble" | "titan_pebble" | "titania_pebble" | "triton_pebble" | "umbriel_pebble" | "venus_pebble";
    export class $ItemColonialBuilding$Types extends $Enum<$ItemColonialBuilding$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemColonialBuilding$Types[];
        static valueOf(arg0: string): $ItemColonialBuilding$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemColonialBuilding$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static medium_factory: $ItemColonialBuilding$Types;
        static low_protection: $ItemColonialBuilding$Types;
        static low_factory: $ItemColonialBuilding$Types;
        static medium_oxygen: $ItemColonialBuilding$Types;
        static medium_entertainment: $ItemColonialBuilding$Types;
        static storage: $ItemColonialBuilding$Types;
        static medium_house: $ItemColonialBuilding$Types;
        static medium_mining_factory: $ItemColonialBuilding$Types;
        static high_house: $ItemColonialBuilding$Types;
        static high_panel: $ItemColonialBuilding$Types;
        static oxygen: $ItemColonialBuilding$Types;
        static low_entertainment: $ItemColonialBuilding$Types;
        static high_factory: $ItemColonialBuilding$Types;
        static low_panel: $ItemColonialBuilding$Types;
        static low_house: $ItemColonialBuilding$Types;
        static medium_fluid_mining_factory: $ItemColonialBuilding$Types;
        static high_oxygen: $ItemColonialBuilding$Types;
        static high_fluid_mining_factory: $ItemColonialBuilding$Types;
        static medium_protection: $ItemColonialBuilding$Types;
        static low_mining_factory: $ItemColonialBuilding$Types;
        static low_fluid_mining_factory: $ItemColonialBuilding$Types;
        static high_mining_factory: $ItemColonialBuilding$Types;
        static very_high_protection: $ItemColonialBuilding$Types;
        static high_entertainment: $ItemColonialBuilding$Types;
        static high_protection: $ItemColonialBuilding$Types;
        static medium_panel: $ItemColonialBuilding$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemColonialBuilding$Types}.
     */
    export type $ItemColonialBuilding$Types_ = "low_protection" | "medium_protection" | "high_protection" | "very_high_protection" | "low_house" | "medium_house" | "high_house" | "low_mining_factory" | "medium_mining_factory" | "high_mining_factory" | "low_fluid_mining_factory" | "medium_fluid_mining_factory" | "high_fluid_mining_factory" | "low_factory" | "medium_factory" | "high_factory" | "low_panel" | "medium_panel" | "high_panel" | "oxygen" | "storage" | "low_entertainment" | "medium_entertainment" | "high_entertainment" | "medium_oxygen" | "high_oxygen";
    export class $ItemPlanetaryTranslocator extends $BaseEnergyItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemResearchLens$Types extends $Enum<$ItemResearchLens$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemResearchLens$Types[];
        static valueOf(arg0: string): $ItemResearchLens$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemResearchLens$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static lens_7: $ItemResearchLens$Types;
        static lens_5: $ItemResearchLens$Types;
        static lens_6: $ItemResearchLens$Types;
        static lens_3: $ItemResearchLens$Types;
        static lens_4: $ItemResearchLens$Types;
        static lens_1: $ItemResearchLens$Types;
        static lens_2: $ItemResearchLens$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemResearchLens$Types}.
     */
    export type $ItemResearchLens$Types_ = "lens_1" | "lens_2" | "lens_3" | "lens_4" | "lens_5" | "lens_6" | "lens_7";
    export class $ItemColonialBuilding<T extends $Enum<T>> extends $ItemMain<T> implements $IBuildingItem {
        static getType(arg0: number): $EnumTypeUpgrade;
        getBuilding(arg0: $ItemStack_): $EnumTypeBuilding;
        getBuilding(arg0: $IColony, arg1: $ItemStack_, arg2: boolean): $IColonyBuilding;
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
    export class $ItemSpaceUpgradeModule<T extends $Enum<T>> extends $ItemMain<T> {
        static getType(arg0: number): $EnumTypeUpgrade;
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
    export class $ItemRover extends $ItemFluidContainer implements $IRoversItem, $EnergyItem, $IItemTab {
        getName(): string;
        getType(): $EnumTypeRovers;
        getLevel(): $EnumRoversLevel;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getFluidHandler(arg0: $ItemStack_): $IFluidHandlerItem;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemCategory(): $CreativeModeTab;
        getAddProgress(): number;
        getUpgradeModules(): $List<$EnumTypeUpgrade>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        upgrades: $List<$EnumTypeUpgrade>;
        moonlight$clientAnimationProvider: $Object;
        capacity: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: number, arg2: $EnumRoversLevel_, arg3: $EnumTypeRovers_, arg4: number, arg5: number, arg6: number, arg7: $EnumRoversLevelFluid_, arg8: number);
        get name(): string;
        get type(): $EnumTypeRovers;
        get level(): $EnumRoversLevel;
        get itemCategory(): $CreativeModeTab;
        get addProgress(): number;
        get upgradeModules(): $List<$EnumTypeUpgrade>;
    }
    export class $ItemSpaceUpgradeModule$Types extends $Enum<$ItemSpaceUpgradeModule$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemSpaceUpgradeModule$Types[];
        static valueOf(arg0: string): $ItemSpaceUpgradeModule$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemSpaceUpgradeModule$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static space_upgrademodule: $ItemSpaceUpgradeModule$Types;
        static space_upgrademodule5: $ItemSpaceUpgradeModule$Types;
        static space_upgrademodule6: $ItemSpaceUpgradeModule$Types;
        static space_upgrademodule3: $ItemSpaceUpgradeModule$Types;
        static space_upgrademodule4: $ItemSpaceUpgradeModule$Types;
        static space_upgrademodule1: $ItemSpaceUpgradeModule$Types;
        static space_upgrademodule2: $ItemSpaceUpgradeModule$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemSpaceUpgradeModule$Types}.
     */
    export type $ItemSpaceUpgradeModule$Types_ = "space_upgrademodule" | "space_upgrademodule1" | "space_upgrademodule2" | "space_upgrademodule3" | "space_upgrademodule4" | "space_upgrademodule5" | "space_upgrademodule6";
}
