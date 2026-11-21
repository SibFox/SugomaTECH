import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Set_, $Set } from "@package/java/util";
import { $Iterable, $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/upgrades" {
    export class $UpgradableProperty extends $Enum<$UpgradableProperty> {
        static values(): $UpgradableProperty[];
        static valueOf(arg0: string): $UpgradableProperty;
        static Transformer: $UpgradableProperty;
        static FluidExtract: $UpgradableProperty;
        static EnergyStorage: $UpgradableProperty;
        static ItemExtract: $UpgradableProperty;
        static FluidInput: $UpgradableProperty;
        static ItemInput: $UpgradableProperty;
        static Processing: $UpgradableProperty;
    }
    /**
     * Values that may be interpreted as {@link $UpgradableProperty}.
     */
    export type $UpgradableProperty_ = "processing" | "transformer" | "energystorage" | "itemextract" | "iteminput" | "fluidextract" | "fluidinput";
    export class $IUpgradeItem {
    }
    export interface $IUpgradeItem {
        getProcessTimeMultiplier(arg0: $ItemStack_): number;
        getExtraEnergyStorage(arg0: $ItemStack_): number;
        getEnergyDemandMultiplier(arg0: $ItemStack_): number;
        isSuitableFor(arg0: $ItemStack_, arg1: $Set_<$UpgradableProperty_>): boolean;
        getExtraTier(arg0: $ItemStack_): number;
    }
    export class $IUpgradableBlock {
    }
    export interface $IUpgradableBlock {
        getAllPossibleUpgradableProperties(): $Set<$UpgradableProperty>;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        get allPossibleUpgradableProperties(): $Set<$UpgradableProperty>;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $UpgradeRegistry {
        static register(arg0: $ItemStack_): $ItemStack;
        static getUpgrades(): $Iterable<$ItemStack>;
        constructor();
        static get upgrades(): $Iterable<$ItemStack>;
    }
}
