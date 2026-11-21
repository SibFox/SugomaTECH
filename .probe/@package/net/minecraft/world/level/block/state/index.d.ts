import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $PehkuiBlockStateExtensions } from "@package/virtuoel/pehkui/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $BlockPropertiesAccessor } from "@package/com/supermartijn642/core/mixin";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $DerivedBlock$Settings } from "@package/eu/ha3/presencefootsteps/api";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Rotation_, $Block_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $AbstractBlockSettingsAccessor, $AbstractBlockAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Map, $Map$Entry, $List, $Map_, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockBehaviourAccess } from "@package/snownee/passablefoliage/mixin";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/com/yungnickyoung/minecraft/bettermineshafts/mixin";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Pattern } from "@package/java/util/regex";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $IBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StateCache, $IStateCacheAccessor } from "@package/xfacthd/framedblocks/api/block/cache";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $AccessorStateDefinitionBuilder } from "@package/xfacthd/framedblocks/mixin";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$2 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        any(): S;
        getPossibleStates(): $ImmutableList<S>;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(propertyCodec: $MapCodec_<S>, holderSupplier: $Supplier_<S>, value: string, property: $Property<T>): $MapCodec<S>;
        owner: O;
        static NAME_PATTERN: $Pattern;
        constructor(stateValueFunction: $Function_<O, S>, owner: O, valueFunction: $StateDefinition$Factory_<O, S>, propertiesByName: $Map_<string, $Property<never>>);
        get properties(): $Collection<$Property<never>>;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        getCollisionShape(): $VoxelShape;
        isFaceSturdy(direction: $Direction_, supportType: $SupportType_): boolean;
        setCollisionShape(arg0: $VoxelShape): void;
        getFaceSturdy(): boolean[];
        getOcclusionShapes(): $VoxelShape[];
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        setFaceSturdy(arg0: boolean[]): void;
        largeCollisionShape: boolean;
        lightBlock: number;
        isCollisionShapeFullBlock: boolean;
        collisionShape: $VoxelShape;
        solidRender: boolean;
        occlusionShapes: $VoxelShape[];
        propagatesSkylightDown: boolean;
        constructor(state: $BlockState_);
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> implements $AccessorStateDefinitionBuilder {
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        framedblocks$getProperties(): $Map<string, $Property<never>>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $BlockBehaviourAccessor$1, $BlockBehaviourAccess, $AbstractBlockAccessor, $BlockBehaviourAccessor$2, $BlockBehaviourKJS, $BlockBehaviourAccessor {
        properties(): $BlockBehaviour$Properties;
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        codec(): $MapCodec<$Block>;
        onRemove(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        /**
         * Return a random long to be passed to `BakedModel#getQuads`, used for random model rotations
         */
        getSeed(state: $BlockState_, pos: $BlockPos_): number;
        /**
         * Performs a random tick on a block.
         */
        tick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        entityInside(state: $BlockState_, level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        onExplosionHit(state: $BlockState_, level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        requiredFeatures(): $FeatureFlagSet;
        getFluidState(state: $BlockState_): $FluidState;
        asItem(): $Item;
        isAir(state: $BlockState_): boolean;
        attack(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        /**
         * The type of render function called. MODEL for mixed tesr and static model, MODELBLOCK_ANIMATED for TESR-only, LIQUID for vanilla liquids, INVISIBLE to skip all rendering
         */
        getRenderShape(state: $BlockState_): $RenderShape;
        getCollisionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        canSurvive(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        getLootTable(): $ResourceKey<$LootTable>;
        /**
         * @deprecated
         */
        getSoundType(state: $BlockState_): $SoundType;
        isCollisionShapeFullBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        updateIndirectNeighbourShapes(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number): void;
        canBeReplaced(arg0: $BlockState_, arg1: $Fluid_): boolean;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        getMaxVerticalOffset(): number;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        useShapeForLightOcclusion(arg0: $BlockState_): boolean;
        setExplosionResistance(arg0: number): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        getBlockSupportShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        setHasCollision(arg0: boolean): void;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        propagatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getMaxHorizontalOffset(): number;
        isOcclusionShapeFullBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        asBlock(): $Block;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        randomTick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        skipRendering(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        static simpleCodec<B extends $Block>(arg0: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        setJumpFactor(arg0: number): void;
        isSignalSource(arg0: $BlockState_): boolean;
        setSpeedFactor(arg0: number): void;
        setFriction(arg0: number): void;
        setSoundType(arg0: $SoundType_): void;
        isRandomlyTicking(arg0: $BlockState_): boolean;
        spawnAfterBreak(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $ItemStack_, arg4: boolean): void;
        getShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        isPathfindable(arg0: $BlockState_, arg1: $PathComputationType_): boolean;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        defaultDestroyTime(): number;
        triggerEvent(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: number, arg4: number): boolean;
        defaultMapColor(): $MapColor;
        getMenuProvider(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $MenuProvider;
        getLightBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        getVisualShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        useWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
        getDestroyProgress(arg0: $BlockState_, arg1: $Player, arg2: $BlockGetter, arg3: $BlockPos_): number;
        getDirectSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        getIdLocation(): $ResourceLocation;
        getProperties(): $BlockBehaviour$Properties;
        callIsCollisionShapeFullBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        invokeIsRandomlyTicking(arg0: $BlockState_): boolean;
        invokeGetFluidState(arg0: $BlockState_): $FluidState;
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getHasCollision(): boolean;
        callCanSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        explosionResistance: number;
        drops: $ResourceKey<$LootTable>;
        dynamicShape: boolean;
        static UPDATE_SHAPE_ORDER: $Direction[];
        speedFactor: number;
        hasCollision: boolean;
        soundType: $SoundType;
        friction: number;
        jumpFactor: number;
        constructor(properties: $BlockBehaviour$Properties);
        get lootTable(): $ResourceKey<$LootTable>;
        get maxVerticalOffset(): number;
        set randomTickCallback(value: $Consumer_<any>);
        get maxHorizontalOffset(): number;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
        get idLocation(): $ResourceLocation;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateExtension {
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        isScaffolding(arg0: $LivingEntity): boolean;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        modifyReturnValue$kdf000$petrolpark$scaleFrictionAttribute(arg0: number, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity | null): number;
        handler$zcc000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        supportsExternalFaceHiding(): boolean;
        hasDynamicLightEmission(): boolean;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        isStickyBlock(): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        isSlimeBlock(): boolean;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get empty(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get stickyBlock(): boolean;
        get slimeBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $PehkuiBlockStateExtensions, $BlockStateKJS, $IStateCacheAccessor {
        is(tag: $TagKey_<$Block>): boolean;
        is(block: $Holder_<$Block>): boolean;
        is(holder: $HolderSet_<$Block>): boolean;
        is(block: $ResourceKey_<$Block>): boolean;
        is(block: $Block_): boolean;
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        onRemove(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        requiresCorrectToolForDrops(): boolean;
        initCache(): void;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        clearCache(): void;
        getBlock(): $Block;
        getSeed(pos: $BlockPos_): number;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        entityInside(level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        onExplosionHit(level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        modifyReturnValue$can000$supplementaries$supp$modifyPlanterOffset(arg0: $Vec3_, arg1: $BlockGetter, arg2: $BlockPos_): $Vec3;
        getFluidState(): $FluidState;
        getTags(): $Stream<$TagKey<$Block>>;
        isAir(): boolean;
        attack(level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        asState(): $BlockState;
        getTicker<T extends $BlockEntity>(level: $Level_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getRenderShape(): $RenderShape;
        hasBlockEntity(): boolean;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        pehkui_getOutlineShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        framedblocks$initCache(arg0: $StateCache): void;
        framedblocks$getCache(): $StateCache;
        hasLargeCollisionShape(): boolean;
        handleNeighborChanged(level: $Level_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        handler$mba000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        handler$zom000$iris$getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        handler$mba000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        handler$dlh000$sereneseasons$onRandomTick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $RandomSource, arg3: $CallbackInfo): void;
        getPistonPushReaction(): $PushReaction;
        instrument(): $NoteBlockInstrument;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        canBeReplaced(fluid: $Fluid_): boolean;
        canBeReplaced(): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        getBlockHolder(): $Holder<$Block>;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType_<never>): boolean;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasOffsetFunction(): boolean;
        isCacheInvalid(): boolean;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        pehkui_getBlock(): $Block;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        setLightEmission(arg0: number): void;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        setRequiresTool(arg0: boolean): void;
        useShapeForLightOcclusion(): boolean;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        setDestroySpeed(arg0: number): void;
        getAnalogOutputSignal(level: $Level_, pos: $BlockPos_): number;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasAnalogOutputSignal(): boolean;
        shouldSpawnTerrainParticles(): boolean;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        canOcclude(): boolean;
        onPlace(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * @deprecated
         */
        liquid(): boolean;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        isSignalSource(): boolean;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        isRandomlyTicking(): boolean;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        isPathfindable(arg0: $PathComputationType_): boolean;
        onProjectileHit(level: $Level_, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        triggerEvent(level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        getMenuProvider(level: $Level_, pos: $BlockPos_): $MenuProvider;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        useWithoutItem(level: $Level_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        getId(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getKey(): $ResourceKey<$Block>;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        getIdLocation(): $ResourceLocation;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(owner: $Block_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$BlockState_>);
        get block(): $Block;
        get fluidState(): $FluidState;
        get air(): boolean;
        get renderShape(): $RenderShape;
        get soundType(): $SoundType;
        get pistonPushReaction(): $PushReaction;
        get blockHolder(): $Holder<$Block>;
        get cacheInvalid(): boolean;
        set requiresTool(value: boolean);
        get solid(): boolean;
        get signalSource(): boolean;
        get randomlyTicking(): boolean;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $BlockPropertiesAccessor, $AbstractBlockSettingsAccessor, $DerivedBlock$Settings {
        static of(): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        setBaseBlock(arg0: $Block_): void;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        getBaseBlock(): $Block;
        dynamicShape(): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block_): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        getSoundType(): $SoundType;
        getFriction(): number;
        getDynamicShape(): boolean;
        setIgnitedByLava(arg0: boolean): void;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        setForceSolidOff(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        getForceSolidOn(): boolean;
        setHasCollision(arg0: boolean): void;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getPushReaction(): $PushReaction;
        getCanOcclude(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getReplaceable(): boolean;
        setReplaceable(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        getInstrument(): $NoteBlockInstrument;
        getLuminance(): $ToIntFunction<$BlockState>;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        setDynamicShape(arg0: boolean): void;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getIgnitedByLava(): boolean;
        getForceSolidOff(): boolean;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getDestroyTime(): number;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getLiquid(): boolean;
        getExplosionResistance(): number;
        getDrops(): $ResourceKey<$LootTable>;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getLootTableSupplier(): $Supplier<$ResourceKey<$LootTable>>;
        getIsRandomlyTicking(): boolean;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        setLootTableSupplier(supplier: $Supplier_<$ResourceKey<$LootTable>>): void;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getSpawnTerrainParticles(): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        getRequiredFeatures(): $FeatureFlagSet;
        setSpawnTerrainParticles(arg0: boolean): void;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getHasCollision(): boolean;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        getIsAir(): boolean;
        setIsAir(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
        get luminance(): $ToIntFunction<$BlockState>;
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any> {
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        static codec<O, S extends $StateHolder<O, S>>(propertyMap: $Codec<O>, holderFunction: $Function_<O, S>): $Codec<S>;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        redirect$mam000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        static findNextInCollection<T>(collection: $Collection_<T>, value: T): T;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        getNeighborTable(): $Table<any, any, any>;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        getStateMap(): $FastMap<any>;
        getStateIndex(): number;
        setStateMap(arg0: $FastMap<any>): void;
        setStateIndex(arg0: number): void;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        owner: $Object;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$Object>;
        constructor(owner: $Object, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$Object>);
        get properties(): $Collection<$Property<never>>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
    }
}
