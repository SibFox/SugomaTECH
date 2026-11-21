import { $Function_, $Function, $ToIntFunction } from "@package/java/util/function";
import { $NoteBlockInstrument } from "@package/net/minecraft/world/level/block/state/properties";
import { $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$OffsetFunction_, $BlockBehaviour$Properties, $BlockState, $BlockBehaviour$OffsetFunction, $BlockBehaviour$StatePredicate } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/object/builder" {
    export class $DefaultAttributeRegistryAccessor {
        static getRegistry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get registry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export interface $DefaultAttributeRegistryAccessor {
    }
    export class $AbstractBlockSettingsAccessor {
    }
    export interface $AbstractBlockSettingsAccessor {
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
        getIsRandomlyTicking(): boolean;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
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
        get jumpFactor(): number;
        get speedFactor(): number;
        get soundType(): $SoundType;
        get friction(): number;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get instrument(): $NoteBlockInstrument;
        get luminance(): $ToIntFunction<$BlockState>;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get destroyTime(): number;
        get explosionResistance(): number;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
    }
    export class $AbstractBlockAccessor {
    }
    export interface $AbstractBlockAccessor {
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBlockAccessor}.
     */
    export type $AbstractBlockAccessor_ = (() => $BlockBehaviour$Properties);
}
