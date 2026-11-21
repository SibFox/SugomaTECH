import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $EquipmentSlot, $EquipmentSlotGroup, $EquipmentSlotGroup_, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Pattern } from "@package/java/util/regex";
import { $List, $List_ } from "@package/java/util";
import { $ItemSubPredicate, $ItemSubPredicate$Type, $MinMaxBounds$Ints_, $MinMaxBounds$Ints } from "@package/net/minecraft/advancements/critereon";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootType, $LootType_ } from "@package/com/almostreliable/lootjs/core";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $LootTable, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";

declare module "@package/com/almostreliable/lootjs/core/filters" {
    export class $ItemFilter {
        static tag(arg0: string): $ItemFilter;
        static item(arg0: $ItemStack_, arg1: boolean): $ItemFilter;
        static allOf(...arg0: $ItemFilter_[]): $ItemFilter;
        static not(arg0: $ItemFilter_): $ItemFilter;
        static toolAction(...arg0: string[]): $ItemFilter;
        static custom(arg0: $Predicate_<$ItemStack>, arg1: string): $ItemFilter;
        static custom(arg0: $Predicate_<$ItemStack>): $ItemFilter;
        static anyOf(...arg0: $ItemFilter_[]): $ItemFilter;
        static hasStoredEnchantment(arg0: $IdFilter_): $ItemFilter;
        static hasStoredEnchantment(arg0: $IdFilter_, arg1: $MinMaxBounds$Ints_): $ItemFilter;
        static equipmentSlot(arg0: $EquipmentSlot_): $ItemFilter;
        static hasEnchantment(arg0: $IdFilter_, arg1: $MinMaxBounds$Ints_): $ItemFilter;
        static hasEnchantment(arg0: $IdFilter_): $ItemFilter;
        static anyToolAction(...arg0: string[]): $ItemFilter;
        static equipmentSlotGroup(arg0: $EquipmentSlotGroup_): $ItemFilter;
        static hasComponent(...arg0: $DataComponentType_<never>[]): $ItemFilter;
        static BLOCK_ITEM: $ItemFilter;
        static ARMOR: $ItemFilter;
        static DAMAGED: $ItemFilter;
        static NONE: $ItemFilter;
        static ANY: $ItemFilter;
        static ENCHANTED: $ItemFilter;
        static EMPTY: $ItemFilter;
        static DAMAGEABLE: $ItemFilter;
        static EDIBLE: $ItemFilter;
    }
    export interface $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
    }
    /**
     * Values that may be interpreted as {@link $ItemFilter}.
     */
    export type $ItemFilter_ = ((arg0: $ItemStack) => boolean);
    export class $ItemFilterImpl$Custom extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        predicate(): $Predicate<$ItemStack>;
        description(): string;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(predicate: $Predicate_<$ItemStack>, description: string | null);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$Custom}.
     */
    export type $ItemFilterImpl$Custom_ = { description?: string, predicate?: $Predicate_<$ItemStack>,  } | [description?: string, predicate?: $Predicate_<$ItemStack>, ];
    export class $ItemFilterImpl$HasComponent extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        types(): $DataComponentType<never>[];
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(types: $DataComponentType_<never>[]);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$HasComponent}.
     */
    export type $ItemFilterImpl$HasComponent_ = { types?: $DataComponentType_<never>[],  } | [types?: $DataComponentType_<never>[], ];
    export class $ItemFilterImpl$AllOf extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        static compose(arg0: $ItemFilter_[]): $ItemFilter;
        composite(): $ItemFilter;
        itemFilters(): $ItemFilter[];
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(itemFilters: $ItemFilter_[], composite: $ItemFilter_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$AllOf}.
     */
    export type $ItemFilterImpl$AllOf_ = { itemFilters?: $ItemFilter_[], composite?: $ItemFilter_,  } | [itemFilters?: $ItemFilter_[], composite?: $ItemFilter_, ];
    export class $IdFilter$ByMod extends $Record implements $IdFilter {
        test(arg0: $ResourceLocation_): boolean;
        mod(): string;
        or(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        negate(): $Predicate<$ResourceLocation>;
        and(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        constructor(mod: string);
    }
    /**
     * Values that may be interpreted as {@link $IdFilter$ByMod}.
     */
    export type $IdFilter$ByMod_ = { mod?: string,  } | [mod?: string, ];
    export class $IdFilter$ByLocation extends $Record implements $IdFilter {
        test(arg0: $ResourceLocation_): boolean;
        location(): $ResourceLocation;
        or(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        negate(): $Predicate<$ResourceLocation>;
        and(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        constructor(location: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $IdFilter$ByLocation}.
     */
    export type $IdFilter$ByLocation_ = { location?: $ResourceLocation_,  } | [location?: $ResourceLocation_, ];
    export class $ItemFilterImpl$IsEquipmentSlotGroup extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        equipmentSlotGroup(): $EquipmentSlotGroup;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(equipmentSlotGroup: $EquipmentSlotGroup_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$IsEquipmentSlotGroup}.
     */
    export type $ItemFilterImpl$IsEquipmentSlotGroup_ = { equipmentSlotGroup?: $EquipmentSlotGroup_,  } | [equipmentSlotGroup?: $EquipmentSlotGroup_, ];
    export class $LootTableFilter$ByLootType extends $Record implements $LootTableFilter {
        type(): $LootType;
        test(arg0: $LootTable): boolean;
        test(arg0: $LootContext): boolean;
        constructor(type: $LootType_);
    }
    /**
     * Values that may be interpreted as {@link $LootTableFilter$ByLootType}.
     */
    export type $LootTableFilter$ByLootType_ = { type?: $LootType_,  } | [type?: $LootType_, ];
    export class $ItemFilterImpl$AnyOf extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        static compose(arg0: $ItemFilter_[]): $ItemFilter;
        composite(): $ItemFilter;
        itemFilters(): $ItemFilter[];
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(itemFilters: $ItemFilter_[], composite: $ItemFilter_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$AnyOf}.
     */
    export type $ItemFilterImpl$AnyOf_ = { itemFilters?: $ItemFilter_[], composite?: $ItemFilter_,  } | [itemFilters?: $ItemFilter_[], composite?: $ItemFilter_, ];
    export class $ItemFilterImpl$ByIngredient extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        ingredient(): $Ingredient;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(ingredient: $Ingredient_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$ByIngredient}.
     */
    export type $ItemFilterImpl$ByIngredient_ = { ingredient?: $Ingredient_,  } | [ingredient?: $Ingredient_, ];
    export class $LootTableFilter$ByIdFilter extends $Record implements $LootTableFilter {
        test(arg0: $LootTable): boolean;
        test(arg0: $LootContext): boolean;
        filter(): $IdFilter;
        constructor(filter: $IdFilter_);
    }
    /**
     * Values that may be interpreted as {@link $LootTableFilter$ByIdFilter}.
     */
    export type $LootTableFilter$ByIdFilter_ = { filter?: $IdFilter_,  } | [filter?: $IdFilter_, ];
    export class $IdFilter$Or extends $Record implements $IdFilter {
        test(arg0: $ResourceLocation_): boolean;
        filters(): $List<$IdFilter>;
        or(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        negate(): $Predicate<$ResourceLocation>;
        and(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        constructor(filters: $List_<$IdFilter_>);
    }
    /**
     * Values that may be interpreted as {@link $IdFilter$Or}.
     */
    export type $IdFilter$Or_ = { filters?: $List_<$IdFilter_>,  } | [filters?: $List_<$IdFilter_>, ];
    export class $ItemFilterImpl$HasEnchantment extends $Record implements $ItemFilter {
        type(): $DataComponentType<$ItemEnchantments>;
        test(arg0: $ItemStack_): boolean;
        filter(): $IdFilter;
        levelBounds(): $MinMaxBounds$Ints;
        hasEnchantmentsInComponent(arg0: $ItemEnchantments_): boolean;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(filter: $IdFilter_, levelBounds: $MinMaxBounds$Ints_, type: $DataComponentType_<$ItemEnchantments_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$HasEnchantment}.
     */
    export type $ItemFilterImpl$HasEnchantment_ = { filter?: $IdFilter_, type?: $DataComponentType_<$ItemEnchantments_>, levelBounds?: $MinMaxBounds$Ints_,  } | [filter?: $IdFilter_, type?: $DataComponentType_<$ItemEnchantments_>, levelBounds?: $MinMaxBounds$Ints_, ];
    export class $ItemFilterImpl$ByTag extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        tag(): $TagKey<$Item>;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(tag: $TagKey_<$Item>);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$ByTag}.
     */
    export type $ItemFilterImpl$ByTag_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $LootTableFilter {
    }
    export interface $LootTableFilter {
        test(arg0: $LootTable): boolean;
        test(arg0: $LootContext): boolean;
    }
    export class $ItemFilterImpl$AnyOfToolAction extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        static compose(arg0: $List_<$ItemAbility_>): $Predicate<$ItemStack>;
        composite(): $Predicate<$ItemStack>;
        toolActions(): $List<$ItemAbility>;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(toolActions: $List_<$ItemAbility_>, composite: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$AnyOfToolAction}.
     */
    export type $ItemFilterImpl$AnyOfToolAction_ = { toolActions?: $List_<$ItemAbility_>, composite?: $Predicate_<$ItemStack>,  } | [toolActions?: $List_<$ItemAbility_>, composite?: $Predicate_<$ItemStack>, ];
    export class $ItemFilterImpl$AllOfToolAction extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        static compose(arg0: $List_<$ItemAbility_>): $Predicate<$ItemStack>;
        composite(): $Predicate<$ItemStack>;
        toolActions(): $List<$ItemAbility>;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(toolActions: $List_<$ItemAbility_>, composite: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$AllOfToolAction}.
     */
    export type $ItemFilterImpl$AllOfToolAction_ = { toolActions?: $List_<$ItemAbility_>, composite?: $Predicate_<$ItemStack>,  } | [toolActions?: $List_<$ItemAbility_>, composite?: $Predicate_<$ItemStack>, ];
    export class $ItemFilterImpl$IsEquipmentSlot extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        equipmentSlot(): $EquipmentSlot;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(equipmentSlot: $EquipmentSlot_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$IsEquipmentSlot}.
     */
    export type $ItemFilterImpl$IsEquipmentSlot_ = { equipmentSlot?: $EquipmentSlot_,  } | [equipmentSlot?: $EquipmentSlot_, ];
    export class $ItemFilterWrapper extends $Record implements $ItemSubPredicate, $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        matches(arg0: $ItemStack_): boolean;
        filter(): $ItemFilter;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        static CODEC: $Codec<$ItemFilterWrapper>;
        static TYPE: $ItemSubPredicate$Type<$ItemFilterWrapper>;
        constructor(filter: $ItemFilter_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterWrapper}.
     */
    export type $ItemFilterWrapper_ = { filter?: $ItemFilter_,  } | [filter?: $ItemFilter_, ];
    export class $IdFilter {
    }
    export interface $IdFilter extends $Predicate<$ResourceLocation> {
    }
    /**
     * Values that may be interpreted as {@link $IdFilter}.
     */
    export type $IdFilter_ = (() => void);
    export class $ItemFilterImpl$ByItem extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        filter(): $ItemStack;
        checkComponents(): boolean;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(filter: $ItemStack_, checkComponents: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$ByItem}.
     */
    export type $ItemFilterImpl$ByItem_ = { filter?: $ItemStack_, checkComponents?: boolean,  } | [filter?: $ItemStack_, checkComponents?: boolean, ];
    export class $IdFilter$ByPattern extends $Record implements $IdFilter {
        test(arg0: $ResourceLocation_): boolean;
        pattern(): $Pattern;
        or(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        negate(): $Predicate<$ResourceLocation>;
        and(arg0: $Predicate_<$ResourceLocation>): $Predicate<$ResourceLocation>;
        constructor(pattern: $Pattern);
    }
    /**
     * Values that may be interpreted as {@link $IdFilter$ByPattern}.
     */
    export type $IdFilter$ByPattern_ = { pattern?: $Pattern,  } | [pattern?: $Pattern, ];
    export class $ItemFilterImpl {
        constructor();
    }
    export class $ItemFilterImpl$Not extends $Record implements $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        itemFilter(): $ItemFilter;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
        constructor(itemFilter: $ItemFilter_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterImpl$Not}.
     */
    export type $ItemFilterImpl$Not_ = { itemFilter?: $ItemFilter_,  } | [itemFilter?: $ItemFilter_, ];
}
