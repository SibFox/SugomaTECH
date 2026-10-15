import { $Level_ } from "@package/net/minecraft/world/level";
import { $InteractionResult_, $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $CreativeModeTab_, $Item$Properties, $Item_, $BlockItem, $Item, $ItemStack_, $Rarity_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Enum, $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/supermartijn642/core/item" {
    export class $BaseBlockItem extends $BlockItem {
        interact(stack: $ItemStack_, player: $Player, hand: $InteractionHand_, level: $Level_): $BaseBlockItem$ItemUseResult;
        interactWithEntity(stack: $ItemStack_, target: $LivingEntity, player: $Player, hand: $InteractionHand_): $BaseBlockItem$InteractionFeedback;
        interactWithBlockFirst(stack: $ItemStack_, player: $Player, hand: $InteractionHand_, level: $Level_, hitPos: $BlockPos_, hitSide: $Direction_, hitLocation: $Vec3_): $BaseBlockItem$InteractionFeedback;
        isInCreativeGroup(tab: $CreativeModeTab_): boolean;
        inventoryUpdate(stack: $ItemStack_, level: $Level_, entity: $Entity, itemSlot: number, isSelected: boolean): void;
        interactWithBlock(stack: $ItemStack_, player: $Player, hand: $InteractionHand_, level: $Level_, hitPos: $BlockPos_, hitSide: $Direction_, hitLocation: $Vec3_): $BaseBlockItem$InteractionFeedback;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
        constructor(block: $Block_, properties: $ItemProperties);
    }
    export class $ItemProperties {
        group(group: $CreativeModeTab_): $ItemProperties;
        component<T>(type: $DataComponentType_<T>, value: T): $ItemProperties;
        static create(): $ItemProperties;
        maxStackSize(maxStackSize: number): $ItemProperties;
        food(foodProperties: $FoodProperties_): $ItemProperties;
        fireResistant(): $ItemProperties;
        durability(durability: number): $ItemProperties;
        rarity(rarity: $ItemRarity): $ItemProperties;
        rarity(rarity: $Rarity_): $ItemProperties;
        craftRemainder(item: $Item_): $ItemProperties;
        /**
         * @deprecated
         */
        toUnderlying(): $Item$Properties;
    }
    export class $BaseBlockItem$ItemUseResult {
        static fail(stack: $ItemStack_): $BaseBlockItem$ItemUseResult;
        static pass(stack: $ItemStack_): $BaseBlockItem$ItemUseResult;
        static success(stack: $ItemStack_): $BaseBlockItem$ItemUseResult;
        static consume(stack: $ItemStack_): $BaseBlockItem$ItemUseResult;
        /**
         * @deprecated
         */
        static fromUnderlying(underlying: $InteractionResultHolder<$ItemStack_>): $BaseBlockItem$ItemUseResult;
        /**
         * @deprecated
         */
        toUnderlying(isClientSide: boolean): $InteractionResultHolder<$ItemStack>;
    }
    export class $BaseBlockItem$InteractionFeedback extends $Enum<$BaseBlockItem$InteractionFeedback> {
        static values(): $BaseBlockItem$InteractionFeedback[];
        static valueOf(name: string): $BaseBlockItem$InteractionFeedback;
        /**
         * @deprecated
         */
        static fromUnderlying(interactionResult: $InteractionResult_): $BaseBlockItem$InteractionFeedback;
        static SUCCESS: $BaseBlockItem$InteractionFeedback;
        static PASS: $BaseBlockItem$InteractionFeedback;
        static CONSUME: $BaseBlockItem$InteractionFeedback;
    }
    /**
     * Values that may be interpreted as {@link $BaseBlockItem$InteractionFeedback}.
     */
    export type $BaseBlockItem$InteractionFeedback_ = "pass" | "consume" | "success";
}
