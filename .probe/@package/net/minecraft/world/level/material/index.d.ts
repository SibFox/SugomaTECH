import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $FluidVariantCache } from "@package/net/fabricmc/fabric/impl/transfer/fluid";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FlowingFluidAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map, $Map$Entry } from "@package/java/util";
import { $FluidInvokerMixin } from "@package/com/teamabnormals/blueprint/core/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Holder$Reference, $Registry, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Reference2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IFluidStateExtension, $IFluidExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FluidDefinition_, $FluidDefinition } from "@package/einstein/subtle_effects/data";
import { $StateDefinition, $StateDefinition$Builder, $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $Short2BooleanMap, $Short2ObjectMap } from "@package/it/unimi/dsi/fastutil/shorts";
import { $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidDefinitionAccessor } from "@package/einstein/subtle_effects/util";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $InjectedFluidExtension } from "@package/dev/architectury/extensions/injected";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/fluid";
import { $FluidKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/material" {
    export class $EmptyFluid extends $Fluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $LavaFluid$Flowing extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export interface $Fluid extends RegistryMarked<RegistryTypes.FluidTag, RegistryTypes.Fluid> {}
    export class $LavaFluid$Source extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $WaterFluid extends $FlowingFluid {
        wrapOperation$jal000$sable$addUnderwaterParticle(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static byId(id: number): $MapColor$Brightness;
        static byIdUnsafe(id: number): $MapColor$Brightness;
        static LOWEST: $MapColor$Brightness;
        static HIGH: $MapColor$Brightness;
        static LOW: $MapColor$Brightness;
        modifier: number;
        id: number;
        static NORMAL: $MapColor$Brightness;
    }
    /**
     * Values that may be interpreted as {@link $MapColor$Brightness}.
     */
    export type $MapColor$Brightness_ = "low" | "normal" | "high" | "lowest";
    export class $Fluid implements $IFluidExtension, $FluidDefinitionAccessor, $InjectedFluidExtension, $FluidVariantCache, $FluidInvokerMixin, $FluidKJS {
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        is(tag: $TagKey_<$Fluid>): boolean;
        getHeight(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): number;
        getShape(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        defaultFluidState(): $FluidState;
        tick(level: $Level_, pos: $BlockPos_, state: $FluidState): void;
        getAmount(state: $FluidState): number;
        handler$hpl000$fabric_transfer_api_v1$hookGetBucketFillSound(arg0: $CallbackInfoReturnable<any>): void;
        getBucket(): $Item;
        getId(): string;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        animateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        /**
         * Returns the type of this fluid.
         * 
         * Important: This MUST be overridden on your fluid, otherwise an
         * error will be thrown.
         */
        getFluidType(): $FluidType;
        getKey(): $ResourceKey<any>;
        subtleEffects$setFluidDefinition(arg0: $FluidDefinition_): void;
        fabric_getCachedFluidVariant(): $FluidVariant;
        getOwnHeight(state: $FluidState): number;
        subtleEffects$getFluidDefinition(): $FluidDefinition;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        getExplosionResistance(): number;
        registerDefaultState(state: $FluidState): void;
        createFluidStateDefinition(builder: $StateDefinition$Builder<$Fluid_, $FluidState>): void;
        isSame(fluid: $Fluid_): boolean;
        randomTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        isSource(state: $FluidState): boolean;
        createLegacyBlock(state: $FluidState): $BlockState;
        asHolder(): $Holder$Reference<any>;
        isRandomlyTicking(): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getTickDelay(level: $LevelReader): number;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        arch$holder(): $Holder<$Fluid>;
        isEmpty(): boolean;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        getFluid(): $Fluid;
        getAmount(): number;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        getIdLocation(): $ResourceLocation;
        copy(amount: number): $FluidLike;
        callAnimateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
        get bucket(): $Item;
        get id(): string;
        get fluidType(): $FluidType;
        get key(): $ResourceKey<any>;
        get randomlyTicking(): boolean;
        get pickupSound(): ($SoundEvent) | undefined;
        get dripParticle(): $ParticleOptions;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get fluid(): $Fluid;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get tags(): $List<$ResourceLocation>;
        get idLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $Fluid}.
     */
    export type $Fluid_ = RegistryTypes.Fluid;
    export class $MapColor {
        static byId(id: number): $MapColor;
        getPackedId(brightness: $MapColor$Brightness_): number;
        calculateRGBColor(brightness: $MapColor$Brightness_): number;
        static getColorFromPackedId(packedId: number): number;
        col: number;
        static WOOD: $MapColor;
        static CRIMSON_STEM: $MapColor;
        static TERRACOTTA_LIGHT_BLUE: $MapColor;
        static PODZOL: $MapColor;
        static WARPED_WART_BLOCK: $MapColor;
        static COLOR_LIGHT_GREEN: $MapColor;
        static COLOR_BLACK: $MapColor;
        static TERRACOTTA_GREEN: $MapColor;
        static WARPED_NYLIUM: $MapColor;
        static FIRE: $MapColor;
        static GRASS: $MapColor;
        static TERRACOTTA_ORANGE: $MapColor;
        static GLOW_LICHEN: $MapColor;
        static COLOR_CYAN: $MapColor;
        id: number;
        static NONE: $MapColor;
        static WOOL: $MapColor;
        static QUARTZ: $MapColor;
        static WATER: $MapColor;
        static TERRACOTTA_YELLOW: $MapColor;
        static SAND: $MapColor;
        static SNOW: $MapColor;
        static DIRT: $MapColor;
        static LAPIS: $MapColor;
        static DEEPSLATE: $MapColor;
        static COLOR_YELLOW: $MapColor;
        static COLOR_LIGHT_GRAY: $MapColor;
        static TERRACOTTA_LIGHT_GRAY: $MapColor;
        static CRIMSON_NYLIUM: $MapColor;
        static TERRACOTTA_BLUE: $MapColor;
        static WARPED_HYPHAE: $MapColor;
        static METAL: $MapColor;
        static TERRACOTTA_GRAY: $MapColor;
        static WARPED_STEM: $MapColor;
        static PLANT: $MapColor;
        static GOLD: $MapColor;
        static DIAMOND: $MapColor;
        static COLOR_RED: $MapColor;
        static COLOR_ORANGE: $MapColor;
        static COLOR_BLUE: $MapColor;
        static NETHER: $MapColor;
        static TERRACOTTA_BLACK: $MapColor;
        static TERRACOTTA_PINK: $MapColor;
        static COLOR_MAGENTA: $MapColor;
        static TERRACOTTA_WHITE: $MapColor;
        static COLOR_GRAY: $MapColor;
        static COLOR_LIGHT_BLUE: $MapColor;
        static TERRACOTTA_LIGHT_GREEN: $MapColor;
        static COLOR_GREEN: $MapColor;
        static COLOR_PURPLE: $MapColor;
        static EMERALD: $MapColor;
        static ICE: $MapColor;
        static COLOR_BROWN: $MapColor;
        static TERRACOTTA_PURPLE: $MapColor;
        static TERRACOTTA_BROWN: $MapColor;
        static TERRACOTTA_MAGENTA: $MapColor;
        static RAW_IRON: $MapColor;
        static COLOR_PINK: $MapColor;
        static TERRACOTTA_RED: $MapColor;
        static CRIMSON_HYPHAE: $MapColor;
        static STONE: $MapColor;
        static TERRACOTTA_CYAN: $MapColor;
        static CLAY: $MapColor;
    }
    export class $WaterFluid$Source extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $FlowingFluid extends $Fluid implements $FlowingFluidAccessor {
        spread(level: $Level_, pos: $BlockPos_, state: $FluidState): void;
        getSource(): $Fluid;
        getSource(falling: boolean): $FluidState;
        getFlowing(): $Fluid;
        getFlowing(level: number, falling: boolean): $FluidState;
        handler$ihi000$create$canPassThroughOnWaterWheel(arg0: $BlockGetter, arg1: $Fluid_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        isSolidFace(level: $BlockGetter, neighborPos: $BlockPos_, side: $Direction_): boolean;
        static getLegacyLevel(state: $FluidState): number;
        getSpreadDelay(level: $Level_, pos: $BlockPos_, currentState: $FluidState, newState: $FluidState): number;
        canSpreadTo(level: $BlockGetter, fromPos: $BlockPos_, fromBlockState: $BlockState_, direction: $Direction_, toPos: $BlockPos_, toBlockState: $BlockState_, toFluidState: $FluidState, fluid: $Fluid_): boolean;
        getNewLiquid(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FluidState;
        getSlopeDistance(level: $LevelReader, spreadPos: $BlockPos_, distance: number, direction: $Direction_, currentSpreadState: $BlockState_, sourcePos: $BlockPos_, stateCache: $Short2ObjectMap<$Pair<$BlockState_, $FluidState>>, waterHoleCache: $Short2BooleanMap): number;
        getSpread(level: $Level_, pos: $BlockPos_, state: $BlockState_): $Map<$Direction, $FluidState>;
        getDropOff(level: $LevelReader): number;
        spreadTo(level: $LevelAccessor, pos: $BlockPos_, blockState: $BlockState_, direction: $Direction_, fluidState: $FluidState): void;
        beforeDestroyingBlock(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): void;
        getSlopeFindDistance(level: $LevelReader): number;
        /**
         * @deprecated
         */
        canConvertToSource(level: $Level_): boolean;
        create$getNewLiquid(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FluidState;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $PushReaction extends $Enum<$PushReaction> {
        static values(): $PushReaction[];
        static valueOf(arg0: string): $PushReaction;
        static DESTROY: $PushReaction;
        static BLOCK: $PushReaction;
        static PUSH_ONLY: $PushReaction;
        static IGNORE: $PushReaction;
        static NORMAL: $PushReaction;
    }
    /**
     * Values that may be interpreted as {@link $PushReaction}.
     */
    export type $PushReaction_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
    export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IFluidStateExtension {
        isEmpty(): boolean;
        holder(): $Holder<$Fluid>;
        getType(): $Fluid;
        is(fluid: $Fluid_): boolean;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluids: $HolderSet_<$Fluid>): boolean;
        getHeight(level: $BlockGetter, pos: $BlockPos_): number;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getFlow(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        tick(level: $Level_, pos: $BlockPos_): void;
        getTags(): $Stream<$TagKey<$Fluid>>;
        getAmount(): number;
        animateTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        isSourceOfType(fluid: $Fluid_): boolean;
        getOwnHeight(): number;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        randomTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        isSource(): boolean;
        shouldRenderBackwardUpFace(level: $BlockGetter, pos: $BlockPos_): boolean;
        createLegacyBlock(): $BlockState;
        isRandomlyTicking(): boolean;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(level: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        canExtinguish(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns the type of this fluid.
         */
        getFluidType(): $FluidType;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        static PROPERTIES_TAG: string;
        owner: $Fluid;
        static AMOUNT_MAX: number;
        static CODEC: $Codec<$FluidState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static AMOUNT_FULL: number;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$FluidState>;
        constructor(owner: $Fluid_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$FluidState>);
        get empty(): boolean;
        get type(): $Fluid;
        get tags(): $Stream<$TagKey<$Fluid>>;
        get amount(): number;
        get ownHeight(): number;
        get source(): boolean;
        get randomlyTicking(): boolean;
        get dripParticle(): $ParticleOptions;
        get fluidType(): $FluidType;
    }
    export class $WaterFluid$Flowing extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $Fluids {
        static LAVA: $FlowingFluid;
        static FLOWING_WATER: $FlowingFluid;
        static EMPTY: $Fluid;
        static FLOWING_LAVA: $FlowingFluid;
        static WATER: $FlowingFluid;
        constructor();
    }
    export class $LavaFluid extends $FlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $FogType extends $Enum<$FogType> {
        static values(): $FogType[];
        static valueOf(arg0: string): $FogType;
        static LAVA: $FogType;
        static POWDER_SNOW: $FogType;
        static NONE: $FogType;
        static WATER: $FogType;
    }
    /**
     * Values that may be interpreted as {@link $FogType}.
     */
    export type $FogType_ = "lava" | "water" | "powder_snow" | "none";
}
