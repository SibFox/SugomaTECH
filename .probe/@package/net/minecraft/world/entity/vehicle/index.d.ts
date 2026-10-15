import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $VariantHolder, $Pose_, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $HasCustomInventoryScreen, $Leashable, $Pose, $PortalProcessor, $SlotAccess, $Entity, $Leashable$LeashData } from "@package/net/minecraft/world/entity";
import { $FluidType_, $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $MinecartFurnaceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set_, $UUID, $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $Container } from "@package/net/minecraft/world";
import { $Predicate_, $Function_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $IBoatExtension, $IAbstractMinecartExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $IMinecartCollisionHandler } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $CollisionGetter, $BlockGetter, $BaseCommandBlock, $Level, $BaseSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DynamicLightSource } from "@package/toni/sodiumdynamiclights";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Hopper } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/vehicle" {
    export class $Boat extends $VehicleEntity implements $Leashable, $VariantHolder<$Boat$Type>, $IBoatExtension {
        getVariant(): $Boat$Type;
        setInput(inputLeft: boolean, inputRight: boolean, inputUp: boolean, inputDown: boolean): void;
        setVariant(variant: $Boat$Type_): void;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        static canVehicleCollide(vehicle: $Entity, entity: $Entity): boolean;
        setPaddleState(left: boolean, right: boolean): void;
        /**
         * Applies this boat's yaw to the given entity. Used to update the orientation of its passenger.
         */
        clampRotation(entityToUpdate: $Entity): void;
        getBubbleAngle(partialTicks: number): number;
        getPaddleSound(): $SoundEvent;
        getRowingTime(side: number, limbSwing: number): number;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getGroundFriction(): number;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getWaterLevelAbove(): number;
        /**
         * Update the boat's speed, based on momentum.
         */
        controlBoat(): void;
        getPaddleState(side: number): boolean;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getMaxPassengers(): number;
        hasEnoughSpaceFor(passenger: $Entity): boolean;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getSinglePassengerXOffset(): number;
        getLeashData(): $Leashable$LeashData;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        dropLeash(left: boolean, right: boolean): void;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isLeashed(): boolean;
        /**
         * Update the boat's speed, based on momentum.
         */
        leashTooFarBehaviour(): void;
        setDelayedLeashHolderId(bubbleTime: number): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        /**
         * Applies this boat's yaw to the given entity. Used to update the orientation of its passenger.
         */
        closeRangeLeashBehaviour(entityToUpdate: $Entity): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canHaveALeashAttachedToIt(): boolean;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeLeashed(): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        mayBeLeashed(): boolean;
        /**
         * Returns whether the entity is within the fluid type of the state.
         */
        canBoatInFluid(state: $FluidState): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canBoatInFluid(type: $FluidType_): boolean;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        lastYd: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        deltaRotation: number;
        entityData: $SynchedEntityData;
        status: $Boat$Status;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$Boat>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get paddleSound(): $SoundEvent;
        get groundFriction(): number;
        get waterLevelAbove(): number;
        get maxPassengers(): number;
        get singlePassengerXOffset(): number;
        get leashHolder(): $Entity;
        get leashed(): boolean;
        set delayedLeashHolderId(value: number);
    }
    export class $Boat$Type extends $Enum<$Boat$Type> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $Boat$Type[];
        static valueOf(name: string): $Boat$Type;
        static byName(name: string): $Boat$Type;
        static getExtensionInfo(): $ExtensionInfo;
        /**
         * Get a boat type by its enum ordinal
         */
        static byId(id: number): $Boat$Type;
        getSerializedName(): string;
        isRaft(): boolean;
        getPlanks(): $Block;
        getSticks(): $Item;
        getRemappedEnumConstantName(): string;
        static MANGROVE: $Boat$Type;
        boatItem: $Supplier<$Item>;
        static SPRUCE: $Boat$Type;
        static CHERRY: $Boat$Type;
        static BAMBOO: $Boat$Type;
        static CODEC: $StringRepresentable$EnumCodec<$Boat$Type>;
        static BIRCH: $Boat$Type;
        static JUNGLE: $Boat$Type;
        static ACACIA: $Boat$Type;
        static OAK: $Boat$Type;
        chestBoatItem: $Supplier<$Item>;
        static DARK_OAK: $Boat$Type;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get raft(): boolean;
        get planks(): $Block;
        get sticks(): $Item;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Type}.
     */
    export type $Boat$Type_ = "oak" | "spruce" | "birch" | "jungle" | "acacia" | "cherry" | "dark_oak" | "mangrove" | "bamboo";
    export class $ContainerEntity {
    }
    export interface $ContainerEntity extends $Container, $MenuProvider {
        position(): $Vec3;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isEmpty(): boolean;
        level(): $Level;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isRemoved(): boolean;
        setLootTableSeed(lootTableSeed: number): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        getBoundingBox(): $AABB;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        unpackChestVehicleLootTable(player: $Player | null): void;
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        isChestVehicleStillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isChestVehicleEmpty(): boolean;
        getChestVehicleSlot(index: number): $SlotAccess;
        getChestVehicleItem(slot: number): $ItemStack;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        get empty(): boolean;
        get removed(): boolean;
        get boundingBox(): $AABB;
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
    }
    export class $MinecartHopper extends $AbstractMinecartContainer implements $Hopper {
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isEnabled(): boolean;
        /**
         * Set whether this hopper minecart is being blocked by an activator rail.
         */
        setEnabled(enabled: boolean): void;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isGridAligned(): boolean;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        suckInItems(): boolean;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelX(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelZ(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelY(): number;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getSuckAabb(): $AABB;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$MinecartHopper>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get gridAligned(): boolean;
        get levelX(): number;
        get levelZ(): number;
        get levelY(): number;
        get suckAabb(): $AABB;
    }
    export class $MinecartChest extends $AbstractMinecartContainer {
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$MinecartChest>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $AbstractMinecart extends $VehicleEntity implements $IAbstractMinecartExtension, $DynamicLightSource {
        getPos(x: number, arg1: number, y: number): $Vec3;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getDefaultDisplayOffset(): number;
        /**
         * Gets the maximum speed for a minecart
         */
        getMaxSpeedWithRail(): number;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxSpeedAirVertical(): number;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxSpeedAirLateral(): number;
        setDisplayBlockState(displayState: $BlockState_): void;
        getCollisionHandler(): $IMinecartCollisionHandler;
        /**
         * Moves a minecart that is not attached to a rail
         */
        applyNaturalSlowdown(): void;
        setMaxSpeedAirVertical(yaw: number): void;
        setMaxSpeedAirLateral(yaw: number): void;
        static registerCollisionHandler(arg0: $IMinecartCollisionHandler | null): void;
        /**
         * Gets the maximum speed for a minecart
         */
        getMaxSpeed(): number;
        /**
         * Called every tick the minecart is on an activator rail.
         */
        activateMinecart(x: number, y: number, z: number, powered: boolean): void;
        /**
         * Moves a minecart that is not attached to a rail
         */
        comeOffTrack(): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        hasCustomDisplay(): boolean;
        moveAlongTrack(pos: $BlockPos_, state: $BlockState_): void;
        moveMinecartOnRail(pos: $BlockPos_): void;
        setDisplayOffset(displayOffset: number): void;
        getMinecartType(): $AbstractMinecart$Type;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getDisplayOffset(): number;
        setCustomDisplay(customDisplay: boolean): void;
        setCanUseRail(customDisplay: boolean): void;
        getDisplayBlockState(): $BlockState;
        static createMinecart(level: $ServerLevel, x: number, arg2: number, y: number, arg4: $AbstractMinecart$Type_, z: $ItemStack_, arg6: $Player | null): $AbstractMinecart;
        setCurrentCartSpeedCapOnRail(yaw: number): void;
        getDefaultDisplayBlockState(): $BlockState;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getCurrentCartSpeedCapOnRail(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canUseRail(): boolean;
        getPosOffs(x: number, arg1: number, y: number, arg3: number): $Vec3;
        /**
         * Gets the maximum speed for a minecart
         */
        getDragAir(): number;
        setDragAir(renderDistWeight: number): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        shouldDoRailFunctions(): boolean;
        /**
         * Internal, returns the current spot to look for the attached rail.
         */
        getCurrentRailPosition(): $BlockPos;
        /**
         * Gets the maximum speed for a minecart
         */
        getSlopeAdjustment(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeRidden(): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isPoweredCart(): boolean;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxCartSpeedOnRail(): number;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getComparatorLevel(): number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        constructor(entityType: $EntityType_<never>, level: $Level_, x: number, arg3: number, y: number);
        get defaultDisplayOffset(): number;
        get maxSpeedWithRail(): number;
        get collisionHandler(): $IMinecartCollisionHandler;
        get maxSpeed(): number;
        get minecartType(): $AbstractMinecart$Type;
        set customDisplay(value: boolean);
        get defaultDisplayBlockState(): $BlockState;
        get currentRailPosition(): $BlockPos;
        get slopeAdjustment(): number;
        get poweredCart(): boolean;
        get maxCartSpeedOnRail(): number;
        get comparatorLevel(): number;
    }
    export class $DismountHelper {
        static findSafeDismountLocation(entityType: $EntityType_<never>, level: $CollisionGetter, pos: $BlockPos_, onlySafePositions: boolean): $Vec3;
        static offsetsForDirection(direction: $Direction_): number[][];
        static findCeilingFrom(pos: $BlockPos_, ceiling: number, shapeForPos: $Function_<$BlockPos, $VoxelShape>): number;
        static nonClimbableShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        static isBlockFloorValid(distance: number): boolean;
        static canDismountTo(level: $CollisionGetter, offset: $Vec3_, passenger: $LivingEntity, pose: $Pose_): boolean;
        static canDismountTo(level: $CollisionGetter, passenger: $LivingEntity, boundingBox: $AABB_): boolean;
        constructor();
    }
    export class $AbstractMinecart$Type extends $Enum<$AbstractMinecart$Type> {
        static values(): $AbstractMinecart$Type[];
        static valueOf(arg0: string): $AbstractMinecart$Type;
        static CHEST: $AbstractMinecart$Type;
        static FURNACE: $AbstractMinecart$Type;
        static RIDEABLE: $AbstractMinecart$Type;
        static COMMAND_BLOCK: $AbstractMinecart$Type;
        static TNT: $AbstractMinecart$Type;
        static SPAWNER: $AbstractMinecart$Type;
        static HOPPER: $AbstractMinecart$Type;
    }
    /**
     * Values that may be interpreted as {@link $AbstractMinecart$Type}.
     */
    export type $AbstractMinecart$Type_ = "rideable" | "chest" | "furnace" | "tnt" | "spawner" | "hopper" | "command_block" | "railway_jukebox" | "railway_workbench";
    export class $Boat$Status extends $Enum<$Boat$Status> {
        static values(): $Boat$Status[];
        static valueOf(arg0: string): $Boat$Status;
        static UNDER_WATER: $Boat$Status;
        static UNDER_FLOWING_WATER: $Boat$Status;
        static IN_AIR: $Boat$Status;
        static IN_WATER: $Boat$Status;
        static ON_LAND: $Boat$Status;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Status}.
     */
    export type $Boat$Status_ = "in_water" | "under_water" | "under_flowing_water" | "on_land" | "in_air";
    export class $ChestBoat extends $Boat implements $HasCustomInventoryScreen, $ContainerEntity {
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        setLootTableSeed(lootTableSeed: number): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackLootTable(player: $Player | null): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        openCustomInventoryScreen(player: $Player): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        unpackChestVehicleLootTable(player: $Player | null): void;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isChestVehicleEmpty(): boolean;
        getChestVehicleSlot(slot: number): $SlotAccess;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(slot: number): $ItemStack;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldCloseCurrentScreen(): boolean;
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
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        lastYd: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        deltaRotation: number;
        entityData: $SynchedEntityData;
        status: $Boat$Status;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$Boat>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get containerSize(): number;
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $Minecart extends $AbstractMinecart {
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $VehicleEntity extends $Entity {
        destroy(source: $DamageSource_): void;
        destroy(dropItem: $Item_): void;
        getDamage(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtDir(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtTime(): number;
        getDropItem(): $Item;
        setHurtTime(hurtDir: number): void;
        shouldSourceDestroy(source: $DamageSource_): boolean;
        setDamage(damage: number): void;
        handler$faj001$cold_sweat$hurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        setHurtDir(hurtDir: number): void;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get dropItem(): $Item;
    }
    export class $MinecartSpawner extends $AbstractMinecart {
        getSpawner(): $BaseSpawner;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$MinecartSpawner>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get spawner(): $BaseSpawner;
    }
    export class $MinecartCommandBlock extends $AbstractMinecart {
        getCommandBlock(): $BaseCommandBlock;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DATA_ID_COMMAND_NAME: $EntityDataAccessor<string>;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        static DATA_ID_LAST_OUTPUT: $EntityDataAccessor<$Component>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$MinecartCommandBlock>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get commandBlock(): $BaseCommandBlock;
    }
    export class $MinecartCommandBlock$MinecartCommandBase extends $BaseCommandBlock {
        getMinecart(): $MinecartCommandBlock;
        this$0: $MinecartCommandBlock;
        constructor(arg0: $MinecartCommandBlock);
        get minecart(): $MinecartCommandBlock;
    }
    export class $MinecartFurnace extends $AbstractMinecart implements $MinecartFurnaceAccessor {
        setHasFuel(hasFuel: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasFuel(): boolean;
        create$setFuel(id: number): void;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        create$getFuel(): number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        zPush: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        xPush: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$MinecartFurnace>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
    }
    export class $MinecartTNT extends $AbstractMinecart {
        /**
         * Makes the minecart explode.
         */
        explode(radiusModifier: number): void;
        explode(damageSource: $DamageSource_ | null, radiusModifier: number): void;
        /**
         * Ignites this TNT cart.
         */
        primeFuse(): void;
        /**
         * Returns `true` if the TNT minecart is ignited.
         */
        isPrimed(): boolean;
        /**
         * Gets the remaining fuse time in ticks.
         */
        getFuse(): number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$MinecartTNT>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        get primed(): boolean;
        get fuse(): number;
    }
    export class $AbstractMinecartContainer extends $AbstractMinecart implements $ContainerEntity {
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        setLootTableSeed(lootTableSeed: number): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        createMenu(containerId: number, playerInventory: $Inventory): $AbstractContainerMenu;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        unpackChestVehicleLootTable(player: $Player | null): void;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(index: number): $ItemStack;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(index: number, stack: $ItemStack_): void;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level_, entity: $Entity): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isChestVehicleEmpty(): boolean;
        getChestVehicleSlot(slot: number): $SlotAccess;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(index: number): $ItemStack;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(index: number, count: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
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
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldCloseCurrentScreen(): boolean;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        vehicle: $VehicleEntity;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        constructor(entityType: $EntityType_<never>, x: number, arg2: number, y: number, arg4: $Level_);
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
}
