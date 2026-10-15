import { $Level_ } from "@package/net/minecraft/world/level";
import { $CreativeModeTab_, $ArmorItem$Type, $ArmorMaterial, $ArmorItem$Type_, $CreativeModeTab, $Item, $ItemStack_, $ArmorItem } from "@package/net/minecraft/world/item";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $ItemAttributeModifiers } from "@package/net/minecraft/world/item/component";
import { $LivingEntity, $EquipmentSlot_, $Entity } from "@package/net/minecraft/world/entity";
import { $UpgradeItem } from "@package/com/denfop/api/item/upgrade";
import { $EnumInfoUpgradeModules, $IProperties } from "@package/com/denfop/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map } from "@package/java/util";
import { $HazmatLike, $VolcanoArmor } from "@package/com/denfop/api/item/armor";
import { $Supplier } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Holder_, $NonNullList, $Holder } from "@package/net/minecraft/core";
import { $EnergyItem } from "@package/com/denfop/api/item/energy";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LivingFallEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $IItemTab } from "@package/com/denfop/tabs";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as special from "@package/com/denfop/items/armour/special";

declare module "@package/com/denfop/items/armour" {
    export class $ItemAdvJetpack extends $ItemArmorEnergy implements $EnergyItem, $ISpecialArmor, $IProperties, $UpgradeItem {
        properties(): string[];
        use(arg0: $ItemStack_, arg1: number): void;
        getCharge(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        useJetpack(arg0: $Player, arg1: boolean): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemArmorUtility extends $ItemArmorBase {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: $ArmorItem$Type_);
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: string, arg2: $ArmorItem$Type_);
    }
    export class $JetpackVisualClient {
        static tick(arg0: $Player, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number): void;
    }
    export class $ItemSolarPanelHelmet extends $ItemArmorEnergy implements $EnergyItem, $ISpecialArmor, $UpgradeItem {
        updateVisibility(arg0: $Player): void;
        gainFuel(arg0: $Player): void;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: string);
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemArmorBase extends $ArmorItem implements $IItemTab {
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getItemCategory(): $CreativeModeTab;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: string, arg2: $ArmorItem$Type_);
        get itemCategory(): $CreativeModeTab;
    }
    export class $ISpecialArmor {
        static getDamageAfterAbsorb(arg0: number, arg1: number, arg2: number): number;
        static getDamageAfterMagicAbsorb(arg0: number, arg1: number): number;
        static hasCompleteArmor(arg0: $LivingEntity): boolean;
    }
    export interface $ISpecialArmor {
        getProperties(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): $ISpecialArmor$ArmorProperties;
        damageArmor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): void;
        handleUnblockableDamage(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): boolean;
        getArmorDisplay(arg0: $Player, arg1: $ItemStack_, arg2: number): number;
    }
    export class $ISpecialArmor$ArmorProperties implements $Comparable<$ISpecialArmor$ArmorProperties> {
        compareTo(arg0: $ISpecialArmor$ArmorProperties): number;
        copy(): $ISpecialArmor$ArmorProperties;
        static applyArmor(arg0: $LivingEntity, arg1: $NonNullList<$ItemStack_>, arg2: $DamageSource_, arg3: number): number;
        Toughness: number;
        Priority: number;
        Armor: number;
        AbsorbMax: number;
        Slot: number;
        AbsorbRatio: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $ArmorItem);
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $JetpackVisualClient$State extends $Enum<$JetpackVisualClient$State> {
    }
    /**
     * Values that may be interpreted as {@link $JetpackVisualClient$State}.
     */
    export type $JetpackVisualClient$State_ = "idle" | "start" | "ascent" | "hover" | "descent" | "boost";
    export class $ItemArmorVolcanoHazmat extends $ItemArmorUtility implements $VolcanoArmor, $ISpecialArmor {
        getProperties(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): $ISpecialArmor$ArmorProperties;
        isInLava(arg0: $Player): boolean;
        isRepairable(): boolean;
        damageArmor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): void;
        static hasCompleteHazmat(arg0: $LivingEntity): boolean;
        onEntityLivingFallEvent(arg0: $LivingFallEvent): void;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        getArmorDisplay(arg0: $Player, arg1: $ItemStack_, arg2: number): number;
        addsProtection(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        static hazmatAbsorbs(arg0: $DamageSource_): boolean;
        fullyProtects(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        handleUnblockableDamage(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: $ArmorItem$Type_);
        get repairable(): boolean;
    }
    export class $ItemArmorEnergy extends $ItemArmorBase implements $ISpecialArmor, $EnergyItem {
        getProperties(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): $ISpecialArmor$ArmorProperties;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        damageArmor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): void;
        getDamageAbsorptionRatio(): number;
        getArmorDisplay(arg0: $Player, arg1: $ItemStack_, arg2: number): number;
        getEnergyPerDamage(): number;
        getIsRepairable(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        handleUnblockableDamage(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: $ArmorItem$Type_, arg2: number, arg3: number, arg4: number);
        get damageAbsorptionRatio(): number;
        get energyPerDamage(): number;
    }
    export class $ItemArmorNightvisionGoggles extends $ItemArmorUtility implements $EnergyItem {
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $JetpackVisualClient$Data {
    }
    export class $ItemLappack extends $ItemArmorEnergy implements $EnergyItem, $ISpecialArmor, $UpgradeItem, $IProperties {
        properties(): string[];
        isRepairable(): boolean;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemEnchantability(): number;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        saveToolMode(arg0: $ItemStack_, arg1: number): void;
        static readToolMode(arg0: $ItemStack_): number;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
        get repairable(): boolean;
        get itemEnchantability(): number;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $BaseArmor extends $ArmorItem implements $IItemTab {
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getItemCategory(): $CreativeModeTab;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $ArmorItem$Type_, arg2: string, arg3: number);
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemArmorHazmat extends $ItemArmorUtility implements $HazmatLike, $ISpecialArmor {
        getProperties(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): $ISpecialArmor$ArmorProperties;
        isInLava(arg0: $Player): boolean;
        isRepairable(): boolean;
        damageArmor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): void;
        static hasCompleteHazmat(arg0: $LivingEntity): boolean;
        onEntityLivingFallEvent(arg0: $LivingFallEvent): void;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        getArmorDisplay(arg0: $Player, arg1: $ItemStack_, arg2: number): number;
        addsProtection(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        static hazmatAbsorbs(arg0: $DamageSource_): boolean;
        getLevel(): number;
        fullyProtects(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        handleUnblockableDamage(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: $ArmorItem$Type_);
        get repairable(): boolean;
        get level(): number;
    }
    export class $ItemAdvArmorHazmat extends $ItemArmorUtility implements $HazmatLike, $ISpecialArmor {
        getProperties(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): $ISpecialArmor$ArmorProperties;
        getLevel(): number;
        isInLava(arg0: $Player): boolean;
        getArmorTexture(arg0: $ItemStack_, arg1: $Entity, arg2: $EquipmentSlot_, arg3: string): string;
        isRepairable(): boolean;
        damageArmor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): void;
        static hasCompleteHazmat(arg0: $LivingEntity): boolean;
        onEntityLivingFallEvent(arg0: $LivingFallEvent): void;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        getArmorDisplay(arg0: $Player, arg1: $ItemStack_, arg2: number): number;
        addsProtection(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        static hazmatAbsorbs(arg0: $DamageSource_): boolean;
        fullyProtects(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        handleUnblockableDamage(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: $ArmorItem$Type_);
        get level(): number;
        get repairable(): boolean;
    }
}
