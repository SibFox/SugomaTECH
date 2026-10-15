import { $Level_ } from "@package/net/minecraft/world/level";
import { $EventItemLoad, $EventItemBlackListLoad } from "@package/com/denfop/api/item/upgrade/event";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $EnumInfoUpgradeModules, $EnumInfoUpgradeModules_ } from "@package/com/denfop/items";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as event from "@package/com/denfop/api/item/upgrade/event";

declare module "@package/com/denfop/api/item/upgrade" {
    export class $UpgradeItem {
    }
    export interface $UpgradeItem {
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeItem}.
     */
    export type $UpgradeItem_ = (() => $List_<$EnumInfoUpgradeModules_>);
    export class $UpgradeItemInform {
        getName(): string;
        matched(arg0: $EnumInfoUpgradeModules_): boolean;
        getInformation(arg0: $EnumInfoUpgradeModules_): number;
        number: number;
        static CODEC: $Codec<$UpgradeItemInform>;
        upgrade: $EnumInfoUpgradeModules;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $UpgradeItemInform>;
        constructor(arg0: $EnumInfoUpgradeModules_, arg1: number);
        get name(): string;
    }
    export class $BaseUpgradeBaseSystem implements $UpgradeBaseSystem {
        write(arg0: $UpgradeItem_, arg1: $List_<$EnumInfoUpgradeModules_>, arg2: $ItemStack_, arg3: $RegistryAccess): void;
        getRemaining(arg0: $ItemStack_): number;
        getModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_): $UpgradeItemInform;
        getModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_, arg2: $List_<$UpgradeItemInform>): $UpgradeItemInform;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        setInformation(arg0: $UpgradeItem_, arg1: $List_<$EnumInfoUpgradeModules_>, arg2: $ItemStack_, arg3: $RegistryAccess): void;
        hasModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_): boolean;
        hasModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_, arg2: $List_<$UpgradeItemInform>): boolean;
        addRecipe(arg0: $Item_, arg1: $List_<$EnumInfoUpgradeModules_>): void;
        updateLevel(arg0: $ItemStack_): void;
        shouldUpdate(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_): boolean;
        removeUpdate(arg0: $ItemStack_, arg1: $Level_, arg2: number): void;
        updateListFromNBT(arg0: $UpgradeItem_, arg1: $ItemStack_, arg2: $RegistryAccess): void;
        addModification(): void;
        getListStack(arg0: $ItemStack_): $List<$ItemStack>;
        addModificate(arg0: $ItemStack_, arg1: string): void;
        getModifications(arg0: $ItemStack_): boolean;
        hasBlackList(arg0: $ItemStack_): boolean;
        getBlackList(arg0: $ItemStack_): $List<string>;
        getUpgradeFromList(arg0: $ItemStack_): $List<number>;
        needModificate(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getAvailableUpgrade(arg0: $UpgradeItem_, arg1: $ItemStack_): $List<string>;
        getListModifications(arg0: $ItemStack_): $List<$UpgradeModificator>;
        updateBlackListFromStack(arg0: $ItemStack_): void;
        updateBlackListFromNBT(arg0: $UpgradeWithBlackList_, arg1: $ItemStack_, arg2: $CompoundTag_, arg3: $RegistryAccess): void;
        getInformation(arg0: $ItemStack_): $List<$UpgradeItemInform>;
        hasInMap(arg0: $ItemStack_): boolean;
        loadItem(arg0: $EventItemBlackListLoad): void;
        loadItem(arg0: $EventItemLoad): void;
        static addupgrade(arg0: $Item_, arg1: $ItemStack_, arg2: string): void;
        static addupgrade(arg0: $Item_, arg1: $ItemStack_): void;
        getPositiveUpgradeFromLevel(arg0: $ItemStack_): $List<number>;
        constructor();
    }
    export class $UpgradeSystem {
        static system: $UpgradeBaseSystem;
        constructor();
    }
    export class $EnumUpgrades extends $Enum<$EnumUpgrades> {
        static values(): $EnumUpgrades[];
        static valueOf(arg0: string): $EnumUpgrades;
        static HELMET: $EnumUpgrades;
        static JETPACK: $EnumUpgrades;
        static LAPPACK: $EnumUpgrades;
        static BOOTS: $EnumUpgrades;
        static SABERS: $EnumUpgrades;
        static BOW: $EnumUpgrades;
        list: $List<$EnumInfoUpgradeModules>;
        static PURIFIER: $EnumUpgrades;
        static LEGGINGS: $EnumUpgrades;
        static MAGNET: $EnumUpgrades;
        static BAGS: $EnumUpgrades;
        static GRAVITOOL: $EnumUpgrades;
        static SOLAR_HELMET: $EnumUpgrades;
        static BODY: $EnumUpgrades;
        static INSTRUMENTS: $EnumUpgrades;
    }
    /**
     * Values that may be interpreted as {@link $EnumUpgrades}.
     */
    export type $EnumUpgrades_ = "instruments" | "purifier" | "gravitool" | "solar_helmet" | "helmet" | "body" | "leggings" | "boots" | "sabers" | "bow" | "bags" | "magnet" | "lappack" | "jetpack";
    export class $UpgradeModificator {
        matches(arg0: string): boolean;
        matches(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$UpgradeModificator>;
        type: string;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $UpgradeModificator>;
        itemstack: $Item;
        constructor(arg0: $Item_, arg1: string);
    }
    export class $UpgradeBaseSystem {
    }
    export interface $UpgradeBaseSystem {
        write(arg0: $UpgradeItem_, arg1: $List_<$EnumInfoUpgradeModules_>, arg2: $ItemStack_, arg3: $RegistryAccess): void;
        getRemaining(arg0: $ItemStack_): number;
        getModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_, arg2: $List_<$UpgradeItemInform>): $UpgradeItemInform;
        getModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_): $UpgradeItemInform;
        setInformation(arg0: $UpgradeItem_, arg1: $List_<$EnumInfoUpgradeModules_>, arg2: $ItemStack_, arg3: $RegistryAccess): void;
        hasModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_, arg2: $List_<$UpgradeItemInform>): boolean;
        hasModules(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_): boolean;
        addRecipe(arg0: $Item_, arg1: $List_<$EnumInfoUpgradeModules_>): void;
        updateLevel(arg0: $ItemStack_): void;
        shouldUpdate(arg0: $EnumInfoUpgradeModules_, arg1: $ItemStack_): boolean;
        removeUpdate(arg0: $ItemStack_, arg1: $Level_, arg2: number): void;
        updateListFromNBT(arg0: $UpgradeItem_, arg1: $ItemStack_, arg2: $RegistryAccess): void;
        addModification(): void;
        getListStack(arg0: $ItemStack_): $List<$ItemStack>;
        addModificate(arg0: $ItemStack_, arg1: string): void;
        getModifications(arg0: $ItemStack_): boolean;
        hasBlackList(arg0: $ItemStack_): boolean;
        getBlackList(arg0: $ItemStack_): $List<string>;
        getUpgradeFromList(arg0: $ItemStack_): $List<number>;
        needModificate(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getAvailableUpgrade(arg0: $UpgradeItem_, arg1: $ItemStack_): $List<string>;
        getListModifications(arg0: $ItemStack_): $List<$UpgradeModificator>;
        updateBlackListFromStack(arg0: $ItemStack_): void;
        updateBlackListFromNBT(arg0: $UpgradeWithBlackList_, arg1: $ItemStack_, arg2: $CompoundTag_, arg3: $RegistryAccess): void;
        getInformation(arg0: $ItemStack_): $List<$UpgradeItemInform>;
        hasInMap(arg0: $ItemStack_): boolean;
    }
    export class $LevelInstruments {
    }
    export interface $LevelInstruments {
        getLevel(arg0: $ItemStack_): number;
        getMaxLevel(arg0: $ItemStack_): number;
        addExperience(arg0: $ItemStack_, arg1: number): void;
        getExperience(arg0: $ItemStack_): number;
    }
    export class $UpgradeWithBlackList {
    }
    export interface $UpgradeWithBlackList extends $UpgradeItem {
    }
    /**
     * Values that may be interpreted as {@link $UpgradeWithBlackList}.
     */
    export type $UpgradeWithBlackList_ = (() => void);
}
