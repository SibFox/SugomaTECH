import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $Pose, $PortalProcessor, $PlayerRideableJumping, $Entity, $MoverType_, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $ClientRecipeBook, $Options } from "@package/net/minecraft/client";
import { $UUID, $List_, $Stack } from "@package/java/util";
import { $AccessorLocalPlayer } from "@package/com/railwayteam/railways/mixin/client";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $PlayerInfo, $ClientPacketListener, $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $LocalPlayerInterface } from "@package/net/irisshaders/iris/mixinterface";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $AbstractClientPlayerAccessor } from "@package/dev/engine_room/flywheel/backend/mixin";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AbstractContainerMenu, $InventoryMenu, $PlayerEnderChestContainer } from "@package/net/minecraft/world/inventory";
import { $ACPExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $GameType_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $TrailAppearance } from "@package/net/bettercombat/api/fx";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $IMixinLocalPlayer } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $Camera } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Abilities, $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $LivingEntityStickExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Portal$Transition } from "@package/net/minecraft/world/level/block";
import { $ClientPlayerKJS, $LocalClientPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $PlayerAttackAnimatable } from "@package/net/bettercombat/client/animation";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $AnimatedHand_ } from "@package/net/bettercombat/logic";
export * as inventory from "@package/net/minecraft/client/player/inventory";

declare module "@package/net/minecraft/client/player" {
    export class $LocalPlayer extends $AbstractClientPlayer implements $LocalPlayerInterface, $IQuiverPlayer, $AccessorLocalPlayer, $IMixinLocalPlayer, $LocalClientPlayerKJS, $PlayerFreezeExtension {
        drop(fullStack: boolean): boolean;
        getStatsCounter(): $StatsCounter;
        /**
         * Returns whether the entity is in a server world
         */
        shouldShowDeathScreen(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetPos(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isHandsBusy(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendOpenInventory(): void;
        handler$fhi000$immersive_aircraft$ia$isCrouching(cir: $CallbackInfoReturnable<any>): void;
        handler$khe001$journeymap$handleEntityEvent(arg0: number, arg1: $CallbackInfo): void;
        getRecipeBook(): $ClientRecipeBook;
        supplementaries$getQuiverSlot(): $SlotReference;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentMood(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpRidingScale(): number;
        setPermissionLevel(permissionLevel: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendRidingJump(): void;
        setShowDeathScreen(useConfusion: boolean): void;
        jumpableVehicle(): $PlayerRideableJumping;
        onGameModeChanged(gameMode: $GameType_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getWaterVision(): number;
        /**
         * Returns whether the entity is in a server world
         */
        isAutoJumpEnabled(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isControlledCamera(): boolean;
        updateAutoJump(movementX: number, movementZ: number): void;
        /**
         * Returns whether the entity is in a server world
         */
        isMovingSlowly(): boolean;
        wrapOperation$cbk000$supplementaries$suppl$preventMovementWhileOperatingCannon(arg0: $Input, arg1: boolean, arg2: number, arg3: $Operation_<any>): void;
        /**
         * Heal living entity (param: amount of half-hearts)
         */
        hurtTo(healAmount: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clientSideCloseContainer(): void;
        sable$calculateViewVector2(xRot: number, yRot: number): $Vec3;
        removeRecipeHighlight(recipe: $RecipeHolder_<never>): void;
        /**
         * Returns whether the entity is in a server world
         */
        getDoLimitedCrafting(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentConstantMood(): number;
        /**
         * Sets the current XP, total XP, and level number.
         */
        setExperienceValues(currentXP: number, maxXP: number, level: number): void;
        setDoLimitedCrafting(useConfusion: boolean): void;
        handler$llf002$parcool$onMove(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getActivePortalLocalTransition(): $Portal$Transition;
        handler$kie000$cpm$onAiStep(arg0: $CallbackInfo): void;
        handler$llf000$parcool$onIsShiftKeyDown(arg0: $CallbackInfoReturnable<any>): void;
        getMinecraft(): $Minecraft;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        railways$getYRotLast(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        railways$getXRotLast(): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getPermissionLevelKonkrete(): number;
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
        xBob: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        input: $Input;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        appliedScale: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        yBob: number;
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
        oSpinningEffectIntensity: number;
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
        minecraft: $Minecraft;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        deltaMovementOnPreviousTick: $Vec3;
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
        clientLevel: $ClientLevel;
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
        connection: $ClientPacketListener;
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        sprintTriggerTime: number;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        spinningEffectIntensity: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        xBobO: number;
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
        yBobO: number;
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
        static LOGGER: $Logger;
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
        handsBusy: boolean;
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
        constructor(minecraft: $Minecraft, clientLevel: $ClientLevel, connection: $ClientPacketListener, stats: $StatsCounter, recipeBook: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean);
        get statsCounter(): $StatsCounter;
        get recipeBook(): $ClientRecipeBook;
        get currentMood(): number;
        get jumpRidingScale(): number;
        set permissionLevel(value: number);
        set showDeathScreen(value: boolean);
        get waterVision(): number;
        get autoJumpEnabled(): boolean;
        get controlledCamera(): boolean;
        get movingSlowly(): boolean;
        get currentConstantMood(): number;
        get activePortalLocalTransition(): $Portal$Transition;
        get permissionLevelKonkrete(): number;
    }
    export class $KeyboardInput extends $Input {
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor(options: $Options);
    }
    export class $AbstractClientPlayer extends $Player implements $PlayerAttackAnimatable, $AbstractClientPlayerAccessor, $ClientPlayerKJS, $ACPExtension {
        playAttackAnimation(name: string, animatedHand: $AnimatedHand_, length: number, upswing: number): void;
        stopAttackAnimation(seconds: number): void;
        getSkin(): $PlayerSkin;
        handler$fhg000$immersive_aircraft$ia$getFieldOfViewModifier(cir: $CallbackInfoReturnable<any>): void;
        /**
         * Returns `true` if the player is in spectator mode.
         */
        isLeftHanded(): boolean;
        getPlayerInfo(): $PlayerInfo;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        deployer$getCape(): number;
        /**
         * Called to update the entity's position/logic.
         */
        updateAnimationsOnTick(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getFieldOfViewModifier(): number;
        playAttackParticles(isOffHand: boolean, weaponRange: number, delay: number, particles: $List_<any>, appearance: $TrailAppearance): void;
        getDeltaMovementLerped(patialTick: number): $Vec3;
        flywheel$getPlayerInfo(): $PlayerInfo;
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
        deltaMovementOnPreviousTick: $Vec3;
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
        clientLevel: $ClientLevel;
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
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
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
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
        get skin(): $PlayerSkin;
        get leftHanded(): boolean;
        get playerInfo(): $PlayerInfo;
        get fieldOfViewModifier(): number;
    }
    export class $Input {
        tick(isSneaking: boolean, sneakingSpeedMultiplier: number): void;
        getMoveVector(): $Vec2;
        hasForwardImpulse(): boolean;
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor();
        get moveVector(): $Vec2;
    }
    export class $RemotePlayer extends $AbstractClientPlayer implements $IQuiverEntity, $LivingEntityStickExtension {
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
        deltaMovementOnPreviousTick: $Vec3;
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
        clientLevel: $ClientLevel;
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
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
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
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
    }
}
