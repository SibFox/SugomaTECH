import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemPredicate, $ItemBuilder, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        mergeNbt(tag: $CompoundTag_): $Entity;
        setRotation(yaw: number, pitch: number): void;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        getMotionX(): number;
        setMotionX(x: number): void;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        getMotionZ(): number;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        setMotionZ(z: number): void;
        getScriptType(): $ScriptType;
        getMotionY(): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        setZ(z: number): void;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setNbt(nbt: $CompoundTag_): void;
        getNbt(): $CompoundTag;
        setX(x: number): void;
        spawn(): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        setY(y: number): void;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        getLevel(): $Level;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        getType(): string;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        getServer(): $MinecraftServer;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        get username(): string;
        get teamId(): string;
        get frame(): boolean;
        get serverPlayer(): boolean;
        get facing(): $Direction;
        get animal(): boolean;
        get profile(): $GameProfile;
        get clientPlayer(): boolean;
        get scriptType(): $ScriptType;
        get passengers(): $EntityArrayList;
        get monster(): boolean;
        get player(): boolean;
        set z(value: number);
        set x(value: number);
        get self(): boolean;
        set y(value: number);
        get block(): $LevelBlock;
        get level(): $Level;
        get teamName(): string;
        get type(): string;
        get living(): boolean;
        get server(): $MinecraftServer;
        get displayName(): $Component;
        get name(): $Component;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        get waterCreature(): boolean;
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        kjs$self(): $FluidStack;
        kjs$getId(): string;
        kjs$isEmpty(): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        kjs$getMod(): string;
        kjs$copy(amount: number): $FluidLike;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getFluid(): $Fluid;
        kjs$getAmount(): number;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        self(): $EntityGetter;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        kjs$self(): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asIngredient(): $Ingredient;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        getId(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getKey(): $ResourceKey<T>;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getTagKeys(): $List<$TagKey<T>>;
        getRegistry(): $Registry<T>;
        getTags(): $List<$ResourceLocation>;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        get id(): string;
        get key(): $ResourceKey<T>;
        get mod(): string;
        get registryId(): $ResourceKey<$Registry<T>>;
        get tagKeys(): $List<$TagKey<T>>;
        get registry(): $Registry<T>;
        get tags(): $List<$ResourceLocation>;
        get idLocation(): $ResourceLocation;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getMcPlayers(): $List<$Player>;
        getEntities(): $EntityArrayList;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get entities(): $EntityArrayList;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setDisplayName(component: $Component_): void;
        kjs$setIcon(icon: $ItemStack_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        kjs$getRegistry(): $Registry<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        get frame(): boolean;
        get item(): $ItemStack;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getId(): string;
        getBlock(): $Block;
        getKey(): $ResourceKey<$Block>;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        get id(): string;
        get block(): $Block;
        get key(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        rayTrace(): $KubeRayTraceResult;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        isUndead(): boolean;
        setOffHandItem(item: $ItemStack_): void;
        isLiving(): this is $LivingEntity;
        getOffHandItem(): $ItemStack;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        getChestArmorItem(): $ItemStack;
        getHeadArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        setHeadArmorItem(item: $ItemStack_): void;
        setFeetArmorItem(item: $ItemStack_): void;
        getTotalMovementSpeed(): number;
        getMainHandItem(): $ItemStack;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        setLegsArmorItem(item: $ItemStack_): void;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        setMainHandItem(item: $ItemStack_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getReachDistance(): number;
        getLegsArmorItem(): $ItemStack;
        getDefaultMovementSpeed(): number;
        setDefaultMovementSpeed(speed: number): void;
        setMovementSpeedAddition(speed: number): void;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        set maxHealth(value: number);
        get undead(): boolean;
        get living(): boolean;
        get totalMovementSpeed(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get reachDistance(): number;
        set movementSpeedAddition(value: number);
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        self(): $ServerLevel;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        tell(message: $Component_): void;
        self(): $MinecraftServer;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        sendData(channel: string, data: $CompoundTag_): void;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getOverworld(): $ServerLevel;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get overworld(): $ServerLevel;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getType(): $ResourceLocation;
        getMod(): string;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getGroup(): string;
        getSchema(): $RecipeSchema;
        setGroup(group: string): void;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get type(): $ResourceLocation;
        get mod(): string;
        get serializer(): $RecipeSerializer<never>;
        get schema(): $RecipeSchema;
        get orCreateId(): $ResourceLocation;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        tell(message: $Component_): void;
        self(): $Level;
        getSide(): $ScriptType;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getName(): $Component;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        createEntity(type: $EntityType_<never>): $Entity;
        isOverworld(): boolean;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        getDimension(): $ResourceLocation;
        setTime(time: number): void;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get side(): $ScriptType;
        get name(): $Component;
        get overworld(): boolean;
        get dimension(): $ResourceLocation;
        set time(value: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        self(): $FluidIngredient;
        withAmount(amount: number): $SizedFluidIngredient;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        get(): number[];
        target(): number;
        original(): $BufferedImage;
        constructor(original: $BufferedImage, target: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowKJS$KJSScaledIconProvider}.
     */
    export type $WindowKJS$KJSScaledIconProvider_ = { original?: $BufferedImage, target?: number,  } | [original?: $BufferedImage, target?: number, ];
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        notify(notification: $NotificationToastData_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        getMinecraft(): $Minecraft;
        set activePostShader(value: $ResourceLocation_);
        get self(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get minecraft(): $Minecraft;
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        getItems(): $Stream<$ItemStack>;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getStackArray(): $ItemStack[];
        kjs$asIngredient(): $Ingredient;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        isEmpty(): boolean;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        getFluid(): $Fluid;
        getAmount(): number;
        get empty(): boolean;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get fluid(): $Fluid;
        get amount(): number;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$set(rule: string, value: string): void;
        kjs$get(rule: string): $GameRules$Value<never>;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        getInventoryChangeListener(): $KubeJSInventoryListener;
        setStatusMessage(message: $Component_): void;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        spawn(): void;
        give(item: $ItemStack_): void;
        addXP(xp: number): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        getXp(): number;
        setXp(xp: number): void;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        setMouseItem(item: $ItemStack_): void;
        isMiningBlock(): boolean;
        getMouseItem(): $ItemStack;
        getSaturation(): number;
        setXpLevel(levels: number): void;
        giveInHand(item: $ItemStack_): void;
        setFoodLevel(foodLevel: number): void;
        getInventory(): $InventoryKJS;
        getStages(): $Stages;
        getStats(): $PlayerStatsJS;
        addFood(hunger: number, saturation: number): void;
        getFoodLevel(): number;
        setSaturation(saturation: number): void;
        addExhaustion(exhaustion: number): void;
        addXPLevels(levels: number): void;
        getXpLevel(): number;
        getCraftingGrid(): $InventoryKJS;
        setSelectedSlot(index: number): void;
        sendInventoryUpdate(): void;
        addItemCooldown(item: $Item_, ticks: number): void;
        boostElytraFlight(): void;
        getSelectedSlot(): number;
        getOpenInventory(): $AbstractContainerMenu;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        set statusMessage(value: $Component_);
        get username(): string;
        get profile(): $GameProfile;
        get player(): boolean;
        get fake(): boolean;
        get miningBlock(): boolean;
        get inventory(): $InventoryKJS;
        get stages(): $Stages;
        get stats(): $PlayerStatsJS;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        self(): $RecipeHolder<never>;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getRecipe(): $Recipe<never>;
        getSerializer(): $RecipeSerializer<never>;
        getGroup(): string;
        getSchema(): $RecipeSchema;
        setGroup(group: string): void;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get recipe(): $Recipe<never>;
        get serializer(): $RecipeSerializer<never>;
        get schema(): $RecipeSchema;
        get orCreateId(): $ResourceLocation;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get displayName(): $Component;
        get name(): $Component;
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        self(): $AdvancementNode;
        getId(): $ResourceLocation;
        getTitle(): $Component;
        getParent(): $AdvancementNode;
        getDisplay(): $DisplayInfo;
        getChildren(): $Set<$AdvancementNode>;
        hasDisplay(): boolean;
        addChild(a: $AdvancementNode): void;
        getDescription(): $Component;
        getDisplayText(): $Component;
        get id(): $ResourceLocation;
        get title(): $Component;
        get parent(): $AdvancementNode;
        get display(): $DisplayInfo;
        get children(): $Set<$AdvancementNode>;
        get description(): $Component;
        get displayText(): $Component;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        getBlock(level: $Level_): $LevelBlock;
        isEmpty(): boolean;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getAllItems(): $List<$ItemStack>;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        setChanged(): void;
        getHeight(): number;
        get empty(): boolean;
        get mutable(): boolean;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
        get height(): number;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        getBlock(): $Block;
        setBlockBuilder(b: $BlockBuilder): void;
        setLightEmission(v: number): void;
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setNameKey(key: string): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getBlockStates(): $List<$BlockState>;
        get block(): $Block;
        set blockBuilder(value: $BlockBuilder);
        set lightEmission(value: number);
        set requiresTool(value: boolean);
        set destroySpeed(value: number);
        set nameKey(value: string);
        get blockStates(): $List<$BlockState>;
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        notify(builder: $NotificationToastData_): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        setMouseItem(item: $ItemStack_): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        setSelectedSlot(index: number): void;
        unlockAdvancement(id: $ResourceLocation_): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        getSpawnLocation(): $LevelBlock;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        set activePostShader(value: $ResourceLocation_);
        get serverPlayer(): boolean;
        set mouseItem(value: $ItemStack_);
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        set selectedSlot(value: number);
        set creativeMode(value: boolean);
        get op(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        getId(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getKey(): $ResourceKey<$Block>;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        setLightEmission(v: number): void;
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        set lightEmission(value: number);
        set requiresTool(value: boolean);
        set destroySpeed(value: number);
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        getScheduledEvents(): $ScheduledEvents;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        self(): $ClientLevel;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setExplosionResistance(v: number): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setHasCollision(v: boolean): void;
        setIsRandomlyTicking(v: boolean): void;
        setJumpFactor(v: number): void;
        setSpeedFactor(v: number): void;
        setFriction(v: number): void;
        setSoundType(v: $SoundType_): void;
        set explosionResistance(value: number);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set hasCollision(value: boolean);
        set isRandomlyTicking(value: boolean);
        set jumpFactor(value: number);
        set speedFactor(value: number);
        set friction(value: number);
        set soundType(value: $SoundType_);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getItem(): $Item;
        getItemBuilder(): $ItemBuilder;
        getTypeItemStackKey(): $ItemStackKey;
        setCraftingRemainder(i: $Item_): void;
        setCanRepair(repairable: boolean): void;
        setItemBuilder(b: $ItemBuilder): void;
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        get item(): $Item;
        get typeItemStackKey(): $ItemStackKey;
        set craftingRemainder(value: $Item_);
        set canRepair(value: boolean);
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        forEach(action: $Consumer_<$Component>): void;
        getCodec(): $Codec<never>;
        clickChangePage(page: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        self(): $MutableComponent;
        bold(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        black(): $MutableComponent;
        red(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        gold(): $MutableComponent;
        blue(): $MutableComponent;
        gray(): $MutableComponent;
        white(): $MutableComponent;
        green(): $MutableComponent;
        yellow(): $MutableComponent;
        aqua(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        noColor(): $MutableComponent;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        darkPurple(): $MutableComponent;
        insertion(s: string): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        underlined(): $MutableComponent;
        hasSiblings(): boolean;
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        darkBlue(): $MutableComponent;
        darkGreen(): $MutableComponent;
        lightPurple(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        darkGray(): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        hasStyle(): boolean;
        darkAqua(): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        darkRed(): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        setStatusMessage(message: $Component_): void;
        getCurrentScreen(): $Screen;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getKeyBindPressedTicks(id: string): number;
        getCurrentWorldName(): string;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setCurrentScreen(gui: $Screen): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        tell(message: $Component_): void;
        self(): $Minecraft;
        getTitle(): string;
        isKeyBindDown(id: string): boolean;
        isAltDown(): boolean;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        isCtrlDown(): boolean;
        getName(): $Component;
        isShiftDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        setTitle(t: string): void;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get currentWorldName(): string;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get altDown(): boolean;
        get ctrlDown(): boolean;
        get name(): $Component;
        get shiftDown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        getHeight(): number;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        except(subtracted: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        self(): $Ingredient;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        isWildcard(): boolean;
        withCount(count: number): $SizedIngredient;
        getTagKey(): $TagKey<$Item>;
        asStack(): $SizedIngredient;
        getStackArray(): $ItemStack[];
        containsAnyTag(): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asIngredient(): $Ingredient;
        get codec(): $Codec<never>;
        get wildcard(): boolean;
        get tagKey(): $TagKey<$Item>;
        get stackArray(): $ItemStack[];
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        isItem(): this is $ItemEntity;
        getLifespan(): number;
        setLifespan(lifespan: number): void;
        setNoDespawn(): void;
        setInfinitePickUpDelay(): void;
        setTicksUntilDespawn(ticks: number): void;
        setNoPickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setDefaultPickUpDelay(): void;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        kjs$getResources(): $ReloadableServerResourcesKJS;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        getCodec(): $Codec<$ItemStack>;
        self(): $ItemStack;
        toStringJS(): string;
        getId(): string;
        getBlock(): $Block;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getKey(): $ResourceKey<$Item>;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        withCount(c: number): this;
        withCustomName(name: $Component_): this;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        areItemsEqual(other: $ItemStack_): boolean;
        toItemString(): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        getEnchantments(): $ItemEnchantments;
        areComponentsEqual(other: $ItemStack_): boolean;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getHarvestSpeed(block: $LevelBlock): number;
        getHarvestSpeed(): number;
        getMod(): string;
        getComponentString(): string;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Item>;
        asHolder(): $Holder<$Item>;
        getIdLocation(): $ResourceLocation;
        asIngredient(): $Ingredient;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<$ItemStack>;
        get id(): string;
        get block(): $Block;
        get key(): $ResourceKey<$Item>;
        get enchantments(): $ItemEnchantments;
        get mod(): string;
        get componentString(): string;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
        get idLocation(): $ResourceLocation;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        notify(notification: $NotificationToastData_): void;
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        get clientPlayer(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
