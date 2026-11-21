import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ListTag_, $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $EquipmentSlot_, $Pose_, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $HumanoidArm_, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AnimationStack, $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource, $SignatureValidator_, $Unit, $SignatureValidator, $OptionEnum } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand, $InteractionHand_, $Nameable, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $IPlayerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $NotificationToastData_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PlayerEnderChestContainer, $AbstractContainerMenu, $ClickAction_, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemCooldowns, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DynamicLightSource } from "@package/toni/sodiumdynamiclights";
import { $MutableComponent, $Component_, $ThrowingComponent, $Component } from "@package/net/minecraft/network/chat";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $AnimationApplier } from "@package/dev/kosmx/playerAnim/impl/animation";
import { $PlayerAccessor as $PlayerAccessor$1 } from "@package/fuzs/easymagic/mixin/accessor";
import { $PlayerData } from "@package/dev/tr7zw/notenoughanimations/access";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $IAnimatedPlayer } from "@package/dev/kosmx/playerAnim/impl";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $CameraOperator, $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $InventoryKJS, $PlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $Stat_ } from "@package/net/minecraft/stats";
import { $Vector3dc } from "@package/org/joml";
import { $AttackHand, $EntityPlayer_BetterCombat } from "@package/net/bettercombat/api";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $Stack, $OptionalInt, $UUID, $List, $Collection_, $List_, $Collection, $Optional } from "@package/java/util";
import { $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $WardenSpawnTracker } from "@package/net/minecraft/world/entity/monster/warden";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $AccessorPlayer } from "@package/com/illusivesoulworks/comforts/mixin";
import { $DataHolder } from "@package/dev/tr7zw/notenoughanimations/versionless/animations";
import { $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $IntList, $Int2IntMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $GameType_, $BaseCommandBlock, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Camera } from "@package/io/github/mortuusars/exposure/world/camera";
import { $PrivateKey, $PublicKey } from "@package/java/security";
import { $PlayerAccessor } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $PlayerEntityAccessor } from "@package/net/bettercombat/mixin/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $ETFPlayerEntity } from "@package/traben/entity_texture_features/features/player";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $PlayerAttackProperties } from "@package/net/bettercombat/logic";

declare module "@package/net/minecraft/world/entity/player" {
    export class $ProfileKeyPair extends $Record {
        privateKey(): $PrivateKey;
        publicKey(): $ProfilePublicKey;
        dueRefresh(): boolean;
        refreshedAfter(): $Instant;
        static CODEC: $Codec<$ProfileKeyPair>;
        constructor(arg0: $PrivateKey, arg1: $ProfilePublicKey_, arg2: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $ProfileKeyPair}.
     */
    export type $ProfileKeyPair_ = { refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_, privateKey?: $PrivateKey,  } | [refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_, privateKey?: $PrivateKey, ];
    export class $ProfilePublicKey$Data extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        key(): $PublicKey;
        hasExpired(gracePeriod: $Duration_): boolean;
        hasExpired(): boolean;
        expiresAt(): $Instant;
        validateSignature(signatureValidator: $SignatureValidator_, profileId: $UUID_): boolean;
        keySignature(): number[];
        static CODEC: $Codec<$ProfilePublicKey$Data>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $Instant, arg1: $PublicKey, arg2: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey$Data}.
     */
    export type $ProfilePublicKey$Data_ = { key?: $PublicKey, keySignature?: number[], expiresAt?: $Instant,  } | [key?: $PublicKey, keySignature?: number[], expiresAt?: $Instant, ];
    export class $Abilities {
        getFlyingSpeed(): number;
        addSaveData(compound: $CompoundTag_): void;
        loadSaveData(compound: $CompoundTag_): void;
        getWalkingSpeed(): number;
        setFlyingSpeed(flyingSpeed: number): void;
        setWalkingSpeed(flyingSpeed: number): void;
        invulnerable: boolean;
        /**
         * @deprecated
         */
        mayfly: boolean;
        instabuild: boolean;
        mayBuild: boolean;
        flying: boolean;
        constructor();
    }
    export class $Inventory implements $Container, $Nameable {
        getName(): $Component;
        /**
         * Reads from the given tag list and fills the slots in the inventory with the correct items.
         */
        load(listTag: $ListTag_): void;
        isEmpty(): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(stack: $ItemStack_): boolean;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(slot: number, stack: $ItemStack_): boolean;
        contains(tag: $TagKey_<$Item>): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        contains(stack: $ItemStack_): boolean;
        contains(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Writes the inventory out as a list of compound tags. This is where the slot indices are used (+100 for armor, +80 for crafting).
         */
        save(listTag: $ListTag_): $ListTag;
        /**
         * Copy the ItemStack contents from another InventoryPlayer instance
         */
        replaceWith(playerInventory: $Inventory): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the item stack currently held by the player.
         */
        getSelected(): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        removeItem(stack: $ItemStack_): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Drop all armor and main inventory items.
         */
        dropAll(): void;
        /**
         * Drop all armor and main inventory items.
         */
        tick(): void;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingItem(stack: $ItemStack_): number;
        addResource(slot: number, stack: $ItemStack_): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        addResource(stack: $ItemStack_): number;
        pickSlot(index: number): void;
        /**
         * Change the selected item in the hotbar after a mouse scroll. Select the slot to the left if `direction` is positive, or to the right if negative.
         */
        swapPaint(direction: number): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getArmor(slot: number): $ItemStack;
        handler$hib000$inventoryprofilesnext$addStackPre(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hib000$inventoryprofilesnext$getEmptySlot(arg0: $CallbackInfoReturnable<any>): void;
        handler$kok000$moonlight$ml$restoreNotDropped(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        handler$hib000$inventoryprofilesnext$addStackPost(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        setPickedItem(stack: $ItemStack_): void;
        static isHotbarSlot(index: number): boolean;
        getDestroySpeed(state: $BlockState_): number;
        removeFromSelected(removeStack: boolean): $ItemStack;
        clearOrCountMatchingItems(stackPredicate: $Predicate_<$ItemStack>, maxCount: number, inventory: $Container): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getSlotWithRemainingSpace(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSuitableHotbarSlot(): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingUnusedItem(stack: $ItemStack_): number;
        hasRemainingSpaceForItem(destination: $ItemStack_, origin: $ItemStack_): boolean;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        hasAnyMatching(predicate: $Predicate_<any>): boolean;
        /**
         * Drop all armor and main inventory items.
         */
        clearContent(): void;
        handler$hib000$inventoryprofilesnext$setPickedItemPre(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        handler$hib000$inventoryprofilesnext$setPickedItemPost(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        /**
         * Returns the number of slots in the inventory.
         */
        static getSelectionSize(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getFreeSlot(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getTimesChanged(): number;
        placeItemBackInInventory(stack: $ItemStack_, sendPacket: boolean): void;
        placeItemBackInInventory(stack: $ItemStack_): void;
        fillStackedContents(stackedContent: $StackedContents): void;
        handler$kok000$moonlight$ml$fireDropEvent(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        getDisplayName(): $Component;
        getCustomName(): $Component;
        hasCustomName(): boolean;
        self(): $Container;
        /**
         * Drop all armor and main inventory items.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        static NOT_FOUND_INDEX: number;
        armor: $NonNullList<$ItemStack>;
        static INVENTORY_SIZE: number;
        static POP_TIME_DURATION: number;
        static SLOT_OFFHAND: number;
        static ALL_ARMOR_SLOTS: number[];
        items: $NonNullList<$ItemStack>;
        compartments: $List<$NonNullList<$ItemStack>>;
        offhand: $NonNullList<$ItemStack>;
        selected: number;
        static HELMET_SLOT_ONLY: number[];
        player: $Player;
        constructor(player: $Player);
        get name(): $Component;
        set pickedItem(value: $ItemStack_);
        get suitableHotbarSlot(): number;
        get containerSize(): number;
        static get selectionSize(): number;
        get freeSlot(): number;
        get timesChanged(): number;
        get displayName(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
        getName(): $Component;
        static values(): $PlayerModelPart[];
        static valueOf(arg0: string): $PlayerModelPart;
        getId(): string;
        getMask(): number;
        getBit(): number;
        static RIGHT_PANTS_LEG: $PlayerModelPart;
        static LEFT_PANTS_LEG: $PlayerModelPart;
        static JACKET: $PlayerModelPart;
        static RIGHT_SLEEVE: $PlayerModelPart;
        static HAT: $PlayerModelPart;
        static LEFT_SLEEVE: $PlayerModelPart;
        static CAPE: $PlayerModelPart;
        get id(): string;
        get mask(): number;
        get bit(): number;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelPart}.
     */
    export type $PlayerModelPart_ = "cape" | "jacket" | "left_sleeve" | "right_sleeve" | "left_pants_leg" | "right_pants_leg" | "hat";
    export class $StackedContents$RecipePicker {
    }
    export class $ProfilePublicKey extends $Record {
        data(): $ProfilePublicKey$Data;
        createSignatureValidator(): $SignatureValidator;
        static createValidated(signatureValidator: $SignatureValidator_, profileId: $UUID_, data: $ProfilePublicKey$Data_): $ProfilePublicKey;
        static EXPIRED_PROFILE_PUBLIC_KEY: $Component;
        static EXPIRY_GRACE_PERIOD: $Duration;
        static TRUSTED_CODEC: $Codec<$ProfilePublicKey>;
        constructor(arg0: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey}.
     */
    export type $ProfilePublicKey_ = { data?: $ProfilePublicKey$Data_,  } | [data?: $ProfilePublicKey$Data_, ];
    export class $Player$BedSleepingProblem extends $Enum<$Player$BedSleepingProblem> {
        static values(): $Player$BedSleepingProblem[];
        static valueOf(arg0: string): $Player$BedSleepingProblem;
        getMessage(): $Component;
        static OBSTRUCTED: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_HERE: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_NOW: $Player$BedSleepingProblem;
        static NOT_SAFE: $Player$BedSleepingProblem;
        static OTHER_PROBLEM: $Player$BedSleepingProblem;
        static TOO_FAR_AWAY: $Player$BedSleepingProblem;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Player$BedSleepingProblem}.
     */
    export type $Player$BedSleepingProblem_ = "not_possible_here" | "not_possible_now" | "too_far_away" | "obstructed" | "other_problem" | "not_safe";
    export class $ChatVisiblity extends $Enum<$ChatVisiblity> implements $OptionEnum {
        static values(): $ChatVisiblity[];
        static valueOf(arg0: string): $ChatVisiblity;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ChatVisiblity;
        getCaption(): $Component;
        static SYSTEM: $ChatVisiblity;
        static HIDDEN: $ChatVisiblity;
        static FULL: $ChatVisiblity;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatVisiblity}.
     */
    export type $ChatVisiblity_ = "full" | "system" | "hidden";
    export class $StackedContents {
        put(stackingIndex: number, increment: number): void;
        clear(): void;
        has(stackingIndex: number): boolean;
        take(stackingIndex: number, amount: number): number;
        accountStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_, amount: number): void;
        accountSimpleStack(stack: $ItemStack_): void;
        static getStackingIndex(stack: $ItemStack_): number;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null): boolean;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null, amount: number): boolean;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, stackingIndexList: $IntList | null): number;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, amount: number, stackingIndexList: $IntList | null): number;
        static fromStackingIndex(stackingIndex: number): $ItemStack;
        contents: $Int2IntMap;
        constructor();
    }
    export class $ProfilePublicKey$ValidationException extends $ThrowingComponent {
        constructor(arg0: $Component_);
    }
    export class $Player extends $LivingEntity implements $IPlayerExtension, $PlayerAttackProperties, $EntityPlayer_BetterCombat, $IAnimatedPlayer, $CameraHolder, $CameraOperator, $PlayerAccessor, $IQuiverEntity, $PlayerEntityAccessor, $Trackable, $PlayerData, $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension, $DynamicLightSource, $ETFPlayerEntity, $PlayerAccessor$1, $PlayerFreezeExtension, $AccessorPlayer, $PlayerKJS {
        getData(holder: $DataHolder<any>, builder: $Supplier_<any>): $Object;
        /**
         * Drops an item into the world.
         */
        drop(itemStack: $ItemStack_, includeThrowerName: boolean): $ItemEntity;
        /**
         * Creates and drops the provided item. Depending on the dropAround, it will drop the item around the player, instead of dropping the item from where the player is pointing at. Likewise, if includeThrowerName is true, the dropped item entity will have the thrower set as the player.
         */
        drop(droppedItem: $ItemStack_, dropAround: boolean, includeThrowerName: boolean): $ItemEntity;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentItemAttackStrengthDelay(): number;
        updateTutorialInventoryAction(carried: $ItemStack_, clicked: $ItemStack_, action: $ClickAction_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        destroyVanishingCursedItems(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryResetCurrentImpulseContext(): void;
        playerAnimator_getAnimation(): $AnimationApplier;
        playerAnimator_getAnimation(id: $ResourceLocation_): $IAnimation;
        modify$efc000$bettercombat$getHand(hand: $InteractionHand_): $InteractionHand;
        simulated$getCurrentTypewriter(): $BlockPos;
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        playerAnimator_setAnimation(id: $ResourceLocation_, animation: $IAnimation): $IAnimation;
        simulated$setCurrentTypewriter(pos: $BlockPos_): void;
        getPlayerAwardedForExposure(): $Optional<any>;
        simulated$getLaunchedPlunger(): $LaunchedPlungerEntity;
        simulated$setLaunchedPlunger(arg0: $LaunchedPlungerEntity): void;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getExposureCameraActionAnim(adjustTicks: number): number;
        handler$gcn000$railways$addModDataVersions(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isIgnoringFallDamageFromCurrentImpulse(): boolean;
        redirect$inf000$sable$fixRidingBoundingBox(arg0: $AABB_, arg1: $AABB_): $AABB;
        setIgnoreFallDamageFromCurrentImpulse(ignoreFallDamageFromCurrentImpulse: boolean): void;
        handler$gmc000$gigeresque$tickMovement(arg0: $CallbackInfo): void;
        handler$llb000$parcool$onJumpFromGround(arg0: $CallbackInfo): void;
        handler$fcd000$cold_sweat$reduceEquipDelay(arg0: $CallbackInfoReturnable<any>): void;
        handler$gmc000$gigeresque$noAttacking(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$gmc000$gigeresque$stopPlayerUsing(arg0: $Entity, arg1: $InteractionHand_, arg2: $CallbackInfoReturnable<any>): void;
        handler$efc000$bettercombat$getEquippedStack_Pre(slot: $EquipmentSlot_, cir: $CallbackInfoReturnable<any>): void;
        interactOn(entityToInteractOn: $Entity, hand: $InteractionHand_): $InteractionResult;
        openMenu(menu: $MenuProvider | null): $OptionalInt;
        addItem(stack: $ItemStack_): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getScore(): number;
        /**
         * Add experience levels to this player.
         */
        setScore(levels: number): void;
        /**
         * Add a stat once
         */
        resetStat(stat: $Stat_<never>): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        crit(target: $Entity): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        magicCrit(target: $Entity): void;
        displayClientMessage(chatComponent: $Component_, actionBar: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetAttackStrengthTicker(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isTextFilteringEnabled(): boolean;
        getActiveExposureCamera(): $Camera;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getAttackStrengthScale(adjustTicks: number): number;
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
        getPrefixes(): $Collection<$MutableComponent>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        respawn(): void;
        /**
         * Checks, whether the player is in Creative mode.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isCreative(): boolean;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        attack(target: $Entity): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isScoping(): boolean;
        freeAt(pos: $BlockPos_): boolean;
        canEat(canAlwaysEat: boolean): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isHurt(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayBuild(): boolean;
        setMainArm(hand: $HumanoidArm_): void;
        isUpdated(currentAir: number): number;
        /**
         * Add experience levels to this player.
         */
        setUpdated(levels: number): void;
        handler$ejj000$notenoughanimations$overrideMaxHeadRoationRelativeToBody(ci: $CallbackInfoReturnable<any>): void;
        getScoreboard(): $Scoreboard;
        getAbilities(): $Abilities;
        /**
         * Returns the GameProfile for this player
         */
        getGameProfile(): $GameProfile;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isReducedDebugInfo(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isLocalPlayer(): boolean;
        /**
         * @deprecated
         */
        getDestroySpeed(state: $BlockState_): number;
        /**
         * Add experience levels to this player.
         */
        setComboCount(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getComboCount(): number;
        getCurrentAttack(): $AttackHand;
        getCooldowns(): $ItemCooldowns;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getLuck(): number;
        awardStat(statKey: $ResourceLocation_): void;
        /**
         * Adds a value to a statistic field.
         */
        awardStat(stat: $Stat_<never>, increment: number): void;
        /**
         * Add a stat once
         */
        awardStat(stat: $Stat_<never>): void;
        awardStat(stat: $ResourceLocation_, increment: number): void;
        handler$fhd000$immersive_aircraft$updatePostInjection(ci: $CallbackInfo): void;
        handler$cko000$fabric_entity_events_v1$injectElytraCheck(arg0: $CallbackInfoReturnable<any>): void;
        handler$fhd000$immersive_aircraft$shouldDismountInjection(cir: $CallbackInfoReturnable<any>): void;
        redirect$efc000$bettercombat$getMainHandStack_Redirect(instance: $Player): $ItemStack;
        redirect$efc000$bettercombat$setStackInHand_Redirect(instance: $Player, handArg: $InteractionHand_, itemStack: $ItemStack_): void;
        wrapMethod$kdk000$petrolpark$setExtendedInventoryMainhand(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $Operation_<any>): void;
        handler$fhd000$immersive_aircraft$isScopingInjection(cir: $CallbackInfoReturnable<any>): void;
        handler$gmc000$gigeresque$tellPlayer(arg0: $CallbackInfo): void;
        handler$efc000$bettercombat$post_Tick(ci: $CallbackInfo): void;
        handler$ejj012$notenoughanimations$tick(info: $CallbackInfo): void;
        handler$gmc000$gigeresque$shouldDismount(arg0: $CallbackInfoReturnable<any>): void;
        canPlayerFitWithinBlocksAndEntitiesWhen(pose: $Pose_): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isDisableBodyRotation(): boolean;
        setDisableBodyRotation(ignoreFallDamageFromCurrentImpulse: boolean): void;
        handler$fhd000$immersive_aircraft$getDestroySpeed(cir: $CallbackInfoReturnable<any>): void;
        wrapWithCondition$llb000$parcool$wrapSetSprinting(arg0: $Player, arg1: boolean): boolean;
        handler$kdk000$petrolpark$addExtendedInventory(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $GameProfile, arg4: $CallbackInfo): void;
        handler$llb000$parcool$onTryToStartFallFlying(arg0: $CallbackInfoReturnable<any>): void;
        handler$llb000$parcool$onIsStayingOnGroundSurface(arg0: $CallbackInfoReturnable<any>): void;
        stopSleepInBed(wakeImmediately: boolean, updateLevelForSleepingPlayers: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        updateIsUnderwater(): boolean;
        canHarmPlayer(other: $Player): boolean;
        playNotifySound(sound: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number): void;
        /**
         * Add experience levels to this player.
         */
        increaseScore(levels: number): void;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updatePlayerPose(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        wantsToStopRiding(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        closeMenu(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        disableShield(): void;
        getDigSpeed(arg0: $BlockState_, arg1: $BlockPos_ | null): number;
        openTextEdit(signEntity: $SignBlockEntity, isFrontText: boolean): void;
        openCommandBlock(commandBlockEntity: $CommandBlockEntity): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        doCloseContainer(): void;
        openStructureBlock(structureEntity: $StructureBlockEntity): void;
        resetRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Returns the player's FoodStats object.
         */
        getFoodData(): $FoodData;
        openJigsawBlock(jigsawBlockEntity: $JigsawBlockEntity): void;
        openItemGui(stack: $ItemStack_, hand: $InteractionHand_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSleepTimer(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopFallFlying(): void;
        /**
         * Returns whether this player can modify the block at a certain location with the given stack.
         * 
         * The position being queried is `pos.offset(facing.getOpposite())`.
         * 
         * @return Whether this player may modify the queried location in the current world
         * @see ItemStack#canPlaceOn(Block)
         * @see ItemStack#canEditBlocks()
         * @see PlayerCapabilities#allowEdit
         */
        mayUseItemAt(pos: $BlockPos_, facing: $Direction_, stack: $ItemStack_): boolean;
        sendMerchantOffers(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean): void;
        isModelPartShown(part: $PlayerModelPart_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDisplayName(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onUpdateAbilities(): void;
        setForcedPose(pose: $Pose_ | null): void;
        getForcedPose(): $Pose;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sweepAttack(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        hasContainerOpen(): boolean;
        awardRecipesByKey(recipes: $List_<$ResourceLocation_>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startFallFlying(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getEnchantmentSeed(): number;
        startSleepInBed(bedPos: $BlockPos_): $Either<$Player$BedSleepingProblem, $Unit>;
        getSuffixes(): $Collection<$MutableComponent>;
        awardRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        openHorseInventory(horse: $AbstractHorse, inventory: $Container): void;
        getEnchantedDamage(entity: $Entity, damage: number, damageSource: $DamageSource_): number;
        etf$getName(): $Component;
        /**
         * Handler for `World#setEntityState`
         */
        setCombatFlags(id: number): void;
        getSideSword(): $ItemStack;
        getLastHeldItems(): $ItemStack[];
        setSideSword(stack: $ItemStack_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isRotateBodyToHead(): boolean;
        atl$getBaseClass(): $Class<any>;
        etf$isTeammate(other: $Player): boolean;
        etf$getInventory(): $Inventory;
        getLastRotations(): number[];
        getPoseOverwrite(): $Pose;
        setPoseOverwrite(pose: $Pose_): void;
        getCombatFlags(): number;
        setLastRotations(lastRotations: number[]): void;
        /**
         * @deprecated
         */
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        getAnimationStack(): $AnimationStack;
        etf$getEntity(): $Entity;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$teleport(): void;
        getInventory(): $InventoryKJS;
        getStages(): $Stages;
        getData(): $AttachedData<any>;
        setLastDeathLocation(lastDeathLocation: ($GlobalPos_) | undefined): void;
        /**
         * @deprecated
         */
        hasCorrectToolForDrops(state: $BlockState_): boolean;
        hasCorrectToolForDrops(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        getLastDeathLocation(): ($GlobalPos) | undefined;
        setShoulderEntityRight(compound: $CompoundTag_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isStayingOnGroundSurface(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSleepingLongEnough(): boolean;
        triggerRecipeCrafted(recipe: $RecipeHolder_<never>, items: $List_<$ItemStack_>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetCurrentImpulseContext(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        tryToStartFallFlying(): boolean;
        /**
         * Add experience levels to this player.
         */
        giveExperiencePoints(levels: number): void;
        blockActionRestricted(level: $Level_, pos: $BlockPos_, gameMode: $GameType_): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpNeededForNextLevel(): number;
        /**
         * Add experience levels to this player.
         */
        giveExperienceLevels(levels: number): void;
        openMinecartCommandBlock(commandEntity: $BaseCommandBlock): void;
        createItemCooldowns(): $ItemCooldowns;
        onEnchantmentPerformed(enchantedItem: $ItemStack_, levelCost: number): void;
        getWardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        /**
         * Returns the InventoryEnderChest of this player.
         */
        getEnderChestInventory(): $PlayerEnderChestContainer;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSecondaryUseActive(): boolean;
        causeFoodExhaustion(yaw: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeEntitiesOnShoulder(): void;
        startAutoSpinAttack(ticks: number, damage: number, itemStack: $ItemStack_): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityRight(): $CompoundTag;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityLeft(): $CompoundTag;
        setShoulderEntityLeft(compound: $CompoundTag_): void;
        entityInteractionRange(): number;
        blockInteractionRange(): number;
        getExposureAuthorEntity(): $Entity;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        getMainHandIdleAnimation(): string;
        getExposureCameraOperator(): $Optional<any>;
        setReducedDebugInfo(ignoreFallDamageFromCurrentImpulse: boolean): void;
        setActiveExposureCamera(camera: $Camera): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$tickStopFreezing(): void;
        getCraftingGrid(): $InventoryKJS;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getItemSwapAnimationTimer(): number;
        /**
         * Add experience levels to this player.
         */
        setLastAnimationSwapTick(levels: number): void;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        etf$getUuidAsString(): string;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        getOffHandIdleAnimation(): string;
        setRotateBodyToHead(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Add experience levels to this player.
         */
        setItemSwapAnimationTimer(levels: number): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        canUseGameMasterBlocks(): boolean;
        getPlayerExecutingExposure(): $Optional<any>;
        canInteractWithEntity(boundingBox: $AABB_, distance: number): boolean;
        canInteractWithEntity(entity: $Entity, distance: number): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeActiveExposureCamera(): void;
        supplementaries$getQuiver(): $ItemStack;
        setEntityOnShoulder(entityCompound: $CompoundTag_): boolean;
        supplementaries$setQuiver(stack: $ItemStack_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getLastAnimationSwapTick(): number;
        sable$getFrozenToSubLevel(): $UUID;
        canInteractWithBlock(pos: $BlockPos_, distance: number): boolean;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * The maximum size for #extraDataWriter is 32600 bytes.
         */
        openMenu(menuProvider: $MenuProvider, extraDataWriter: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * Use `FriendlyByteBuf#readBlockPos()` to read the position you pass to this method.
         */
        openMenu(menuProvider: $MenuProvider, pos: $BlockPos_): $OptionalInt;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayFly(): boolean;
        isCloseEnough(entity: $Entity, distance: number): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFakePlayer(): boolean;
        /**
         * @deprecated
         */
        getAnimation(): $AnimationApplier;
        getServerPlayerAwardedForExposure(): ($ServerPlayer) | undefined;
        getServerPlayerExecutingExposure(): ($ServerPlayer) | undefined;
        asHolderEntity(): $Entity;
        getActiveExposureCameraOptional(): ($Camera) | undefined;
        asOperatorEntity(): $LivingEntity;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        supplementaries$hasQuiver(): boolean;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startTracking(): void;
        give(stack: $ItemStack_): void;
        /**
         * Add experience levels to this player.
         */
        addXP(levels: number): void;
        /**
         * Checks if the player is fake.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFake(): this is $FakePlayer;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXp(): number;
        /**
         * Add experience levels to this player.
         */
        setXp(levels: number): void;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        setMouseItem(stack: $ItemStack_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isMiningBlock(): boolean;
        getMouseItem(): $ItemStack;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSaturation(): number;
        /**
         * Add experience levels to this player.
         */
        setXpLevel(levels: number): void;
        giveInHand(stack: $ItemStack_): void;
        /**
         * Add experience levels to this player.
         */
        setFoodLevel(levels: number): void;
        getStats(): $PlayerStatsJS;
        addFood(hunger: number, saturation: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFoodLevel(): number;
        setSaturation(yaw: number): void;
        addExhaustion(yaw: number): void;
        /**
         * Add experience levels to this player.
         */
        addXPLevels(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpLevel(): number;
        /**
         * Add experience levels to this player.
         */
        setSelectedSlot(levels: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendInventoryUpdate(): void;
        addItemCooldown(item: $Item_, ticks: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        boostElytraFlight(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSelectedSlot(): number;
        getOpenInventory(): $AbstractContainerMenu;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
        invokeSetShoulderEntityRight(compound: $CompoundTag_): void;
        invokeSetShoulderEntityLeft(compound: $CompoundTag_): void;
        /**
         * Add experience levels to this player.
         */
        setEnchantmentSeed(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setSleepCounter(levels: number): void;
        lerpYRot: number;
        xRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        appliedScale: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        swimAmount: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static DEFAULT_BB_HEIGHT: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        oExposureCameraActionAnim: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        exposureCameraActionAnim: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        abilities: $Abilities;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        activeExposureCamera: $Camera;
        oRun: number;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        swimAmountO: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(level: $Level_, pos: $BlockPos_, yRot: number, gameProfile: $GameProfile);
        get currentItemAttackStrengthDelay(): number;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get playerAwardedForExposure(): $Optional<any>;
        get ignoringFallDamageFromCurrentImpulse(): boolean;
        set ignoreFallDamageFromCurrentImpulse(value: boolean);
        get textFilteringEnabled(): boolean;
        get prefixes(): $Collection<$MutableComponent>;
        get creative(): boolean;
        get scoping(): boolean;
        get hurt(): boolean;
        set mainArm(value: $HumanoidArm_);
        get scoreboard(): $Scoreboard;
        get gameProfile(): $GameProfile;
        get localPlayer(): boolean;
        get currentAttack(): $AttackHand;
        get cooldowns(): $ItemCooldowns;
        get luck(): number;
        get sleepTimer(): number;
        get suffixes(): $Collection<$MutableComponent>;
        get lastHeldItems(): $ItemStack[];
        get animationStack(): $AnimationStack;
        get stages(): $Stages;
        get stayingOnGroundSurface(): boolean;
        get sleepingLongEnough(): boolean;
        get xpNeededForNextLevel(): number;
        get wardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        get secondaryUseActive(): boolean;
        get exposureAuthorEntity(): $Entity;
        get mainHandIdleAnimation(): string;
        get exposureCameraOperator(): $Optional<any>;
        get craftingGrid(): $InventoryKJS;
        get offHandIdleAnimation(): string;
        get playerExecutingExposure(): $Optional<any>;
        set entityOnShoulder(value: $CompoundTag_);
        get fakePlayer(): boolean;
        get animation(): $AnimationApplier;
        get serverPlayerAwardedForExposure(): ($ServerPlayer) | undefined;
        get serverPlayerExecutingExposure(): ($ServerPlayer) | undefined;
        get activeExposureCameraOptional(): ($Camera) | undefined;
        get fake(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get openInventory(): $AbstractContainerMenu;
        set sleepCounter(value: number);
    }
}
