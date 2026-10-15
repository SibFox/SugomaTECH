import { $ItemLike } from "@package/net/minecraft/world/level";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ItemStack, $Item$Properties, $Item } from "@package/net/minecraft/world/item";
import { $Ingredient, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $Date, $Map } from "@package/java/util";

declare module "@package/com/petrolpark/core/badge" {
    export interface $Badge extends RegistryMarked<RegistryTypes.PetrolparkBadgeTag, RegistryTypes.PetrolparkBadge> {}
    export class $Badge implements $ItemLike {
        getName(): $Component;
        getId(): $ResourceLocation;
        getDescription(): $Component;
        setId(arg0: $ResourceLocation_): void;
        asItem(): $BadgeItem;
        static getBadge(arg0: $ResourceLocation_): $Badge;
        static getBadge(arg0: string, arg1: string): $Badge;
        getDuplicationIngredient(): $Ingredient;
        getExampleDuplicationRecipe(): $CraftingRecipe;
        setDuplicationItem(arg0: $Supplier_<$Ingredient>): void;
        setBadgeItem(arg0: $ItemEntry<$BadgeItem>): void;
        constructor();
        get name(): $Component;
        get description(): $Component;
        get duplicationIngredient(): $Ingredient;
        get exampleDuplicationRecipe(): $CraftingRecipe;
        set duplicationItem(value: $Supplier_<$Ingredient>);
        set badgeItem(value: $ItemEntry<$BadgeItem>);
    }
    /**
     * Values that may be interpreted as {@link $Badge}.
     */
    export type $Badge_ = RegistryTypes.PetrolparkBadge;
    export class $BadgeItem extends $Item {
        static of(arg0: $Player, arg1: $Badge_, arg2: $Date): $ItemStack;
        badge: $Supplier<$Badge>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $Supplier_<$Badge>);
    }
}
