import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Inventory } from "@package/com/denfop/inventory";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $ChunkLevel } from "@package/com/denfop/api/pollution/component";
import { $List, $List_, $Map } from "@package/java/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Genome } from "@package/com/denfop/api/bee/genetics";
import { $BlockEntityApothecaryBee } from "@package/com/denfop/blockentity/mechanism";
import { $Enum } from "@package/java/lang";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $BlockEntityInventory, $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $AbstractComponent, $AirPollutionComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $ContainerMenuApiary } from "@package/com/denfop/containermenu";
import { $BeeAI, $Bee as $Bee$1 } from "@package/com/denfop/api/bee";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DamageItem } from "@package/com/denfop/api/item";
import { $Radiation } from "@package/com/denfop/api/pollution/radiation";
import { $AABB_, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/denfop/blockentity/bee" {
    export class $TileEntityForestHive extends $TileEntityHive {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $EnumStatus extends $Enum<$EnumStatus> {
        static values(): $EnumStatus[];
        static valueOf(arg0: string): $EnumStatus;
        static FRIENDLY: $EnumStatus;
        static ANGRY: $EnumStatus;
        static NORMAL: $EnumStatus;
    }
    /**
     * Values that may be interpreted as {@link $EnumStatus}.
     */
    export type $EnumStatus_ = "friendly" | "angry" | "normal";
    export class $TileEntityPlainsHive extends $TileEntityHive {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $FrameItem {
    }
    export interface $FrameItem extends $DamageItem {
        getAttribute(arg0: number): $FrameAttributeLevel;
    }
    export class $BlockEntityApiary extends $BlockEntityInventory implements $IApiaryTile {
        reset(): void;
        contains(arg0: $BlockPos_): boolean;
        set(): void;
        getId(): number;
        distanceTo(arg0: $Vec3_, arg1: $BlockPos_): number;
        death(arg0: $Bee): void;
        getStatusMap(): $Map<number, $EnumStatus>;
        getChanceCrossing(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuApiary;
        healBeesFromApothecary(arg0: $BlockEntityApothecaryBee): void;
        isWork(): boolean;
        getEntitiesWithinAABB(arg0: $AABB_): $List<$Player>;
        getGenome(): $Genome;
        setTickDrainFood(arg0: number): void;
        getTickDrainJelly(): number;
        getTickDrainFood(): number;
        setTickDrainJelly(arg0: number): void;
        getNearbyEntitiesWithWeight(): $Map<$Player, number>;
        getQueen(): $Bee$1;
        feedBees(arg0: $List_<$Bee>): void;
        healBees(): void;
        blockState: $BlockState;
        builders: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        maxDefaultFood: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        royalJelly: number;
        attacks: number;
        chunkLevel: $ChunkLevel;
        maxDefaultJelly: number;
        block: $BlockTileEntity<any>;
        id: number;
        updateClientList: $List<$AbstractComponent>;
        illTask: number;
        problemList: $List<$EnumProblem>;
        teBlock: $MultiBlockEntity;
        bees: number;
        rain: boolean;
        invSlotProduct: $InventoryOutput;
        coef: number;
        chunkPos: $ChunkPos;
        level: $Level;
        work: boolean;
        ill: number;
        birth: number;
        active: string;
        thundering: boolean;
        maxFood: number;
        jellyCellSlot: $Inventory;
        worldPosition: $BlockPos;
        task: number;
        pollutionAir: $AirPollutionComponent;
        biome: $Biome;
        doctors: number;
        deathTask: number;
        invSlotJelly: $InventoryOutput;
        static beeAI: $BeeAI;
        advComponentMap: $Map<string, $AbstractComponent>;
        chunk: $LevelChunk;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        static hasDamagePlayer: boolean;
        foodCellSlot: $Inventory;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        workers: number;
        harvest: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        birthBeeList: $List<$Bee>;
        static ATTACHMENTS_NBT_KEY: string;
        radLevel: $Radiation;
        food: number;
        frameSlot: $Inventory;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        invSlotFood: $InventoryOutput;
        maxJelly: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get statusMap(): $Map<number, $EnumStatus>;
        get chanceCrossing(): number;
        get genome(): $Genome;
        get nearbyEntitiesWithWeight(): $Map<$Player, number>;
        get queen(): $Bee$1;
    }
    export class $EnumTypeBee extends $Enum<$EnumTypeBee> {
        static values(): $EnumTypeBee[];
        static valueOf(arg0: string): $EnumTypeBee;
        static BUILDER: $EnumTypeBee;
        static ATTACK: $EnumTypeBee;
        static WORKER: $EnumTypeBee;
        static NONE: $EnumTypeBee;
        static DOCTOR: $EnumTypeBee;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeBee}.
     */
    export type $EnumTypeBee_ = "doctor" | "worker" | "attack" | "builder" | "none";
    export class $TileEntityHive extends $BlockEntityBase {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $Bee$1, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $TileEntityTropicalHive extends $TileEntityHive {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $EnumProblem extends $Enum<$EnumProblem> {
        static values(): $EnumProblem[];
        static valueOf(arg0: string): $EnumProblem;
        static ILL: $EnumProblem;
        static JELLY: $EnumProblem;
        static BEES: $EnumProblem;
        static FOOD: $EnumProblem;
    }
    /**
     * Values that may be interpreted as {@link $EnumProblem}.
     */
    export type $EnumProblem_ = "food" | "jelly" | "bees" | "ill";
    export class $TileEntityWinterHive extends $TileEntityHive {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $EnumTypeLife extends $Enum<$EnumTypeLife> {
        static values(): $EnumTypeLife[];
        static valueOf(arg0: string): $EnumTypeLife;
        static BEE: $EnumTypeLife;
        static LARVA: $EnumTypeLife;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeLife}.
     */
    export type $EnumTypeLife_ = "larva" | "bee";
    export class $Bee {
        getId(): number;
        getType(): $EnumTypeLife;
        setType(arg0: $EnumTypeLife_): void;
        isDead(): boolean;
        isChild(): boolean;
        getFood(): number;
        writeToNBT(): $CompoundTag;
        removeJelly(): void;
        getTick(): number;
        addTick(arg0: number, arg1: number): void;
        isIll(): boolean;
        addFood(arg0: number): void;
        getJelly(): number;
        addJelly(arg0: number): void;
        setIll(arg0: boolean): void;
        getTypeBee(): $EnumTypeBee;
        getMaxLife(): number;
        setDead(arg0: boolean): void;
        setTypeBee(arg0: $EnumTypeBee_): void;
        removeFood(): void;
        getBirthTick(): number;
        isWasBirth(): boolean;
        static CODEC: $Codec<$Bee>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Bee>;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: $EnumTypeBee_, arg8: $EnumTypeLife_, arg9: boolean, arg10: boolean);
        constructor(arg0: $EnumTypeBee_, arg1: $Bee$1, arg2: $EnumTypeLife_, arg3: number, arg4: number);
        get id(): number;
        get child(): boolean;
        get food(): number;
        get tick(): number;
        get jelly(): number;
        get maxLife(): number;
        get birthTick(): number;
        get wasBirth(): boolean;
    }
    export class $TileEntitySwampHive extends $TileEntityHive {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $IApiaryTile {
    }
    export interface $IApiaryTile {
        getChanceCrossing(): number;
        getQueen(): $Bee$1;
        get chanceCrossing(): number;
        get queen(): $Bee$1;
    }
    export class $FrameAttributeLevel extends $Enum<$FrameAttributeLevel> {
        static values(): $FrameAttributeLevel[];
        static valueOf(arg0: string): $FrameAttributeLevel;
        getValue(): number;
        getAttribute(): $FrameAttribute;
        static SPEED_BIRTH_RATE_II: $FrameAttributeLevel;
        static STORAGE_FOOD_I: $FrameAttributeLevel;
        static CHANCE_CROSSING_III: $FrameAttributeLevel;
        static PRODUCING_II: $FrameAttributeLevel;
        static SPEED_CROP_III: $FrameAttributeLevel;
        static SPEED_BIRTH_RATE_I: $FrameAttributeLevel;
        static STORAGE_FOOD_III: $FrameAttributeLevel;
        static SPEED_BIRTH_RATE_III: $FrameAttributeLevel;
        static SLOW_AGING_II: $FrameAttributeLevel;
        static SLOW_AGING_III: $FrameAttributeLevel;
        static STORAGE_JELLY_I: $FrameAttributeLevel;
        static PRODUCING_III: $FrameAttributeLevel;
        static SPEED_CROP_II: $FrameAttributeLevel;
        static STORAGE_JELLY_III: $FrameAttributeLevel;
        static STORAGE_FOOD_II: $FrameAttributeLevel;
        static CHANCE_CROSSING_I: $FrameAttributeLevel;
        static SLOW_AGING_I: $FrameAttributeLevel;
        static CHANCE_CROSSING_II: $FrameAttributeLevel;
        static CHANCE_HEALING_III: $FrameAttributeLevel;
        static CHANCE_HEALING_I: $FrameAttributeLevel;
        static SPEED_CROP_I: $FrameAttributeLevel;
        static PRODUCING_I: $FrameAttributeLevel;
        static CHANCE_HEALING_II: $FrameAttributeLevel;
        static STORAGE_JELLY_II: $FrameAttributeLevel;
        get value(): number;
        get attribute(): $FrameAttribute;
    }
    /**
     * Values that may be interpreted as {@link $FrameAttributeLevel}.
     */
    export type $FrameAttributeLevel_ = "slow_aging_i" | "slow_aging_ii" | "slow_aging_iii" | "producing_i" | "producing_ii" | "producing_iii" | "speed_crop_i" | "speed_crop_ii" | "speed_crop_iii" | "speed_birth_rate_i" | "speed_birth_rate_ii" | "speed_birth_rate_iii" | "chance_crossing_i" | "chance_crossing_ii" | "chance_crossing_iii" | "storage_jelly_i" | "storage_jelly_ii" | "storage_jelly_iii" | "storage_food_i" | "storage_food_ii" | "storage_food_iii" | "chance_healing_i" | "chance_healing_ii" | "chance_healing_iii";
    export class $FrameAttribute extends $Enum<$FrameAttribute> {
        static values(): $FrameAttribute[];
        static valueOf(arg0: string): $FrameAttribute;
        static CHANCE_HEALING: $FrameAttribute;
        static SLOW_AGING: $FrameAttribute;
        static SPEED_BIRTH_RATE: $FrameAttribute;
        static STORAGE_JELLY: $FrameAttribute;
        static PRODUCING: $FrameAttribute;
        static STORAGE_FOOD: $FrameAttribute;
        static SPEED_CROP: $FrameAttribute;
        static CHANCE_CROSSING: $FrameAttribute;
    }
    /**
     * Values that may be interpreted as {@link $FrameAttribute}.
     */
    export type $FrameAttribute_ = "slow_aging" | "producing" | "speed_crop" | "speed_birth_rate" | "chance_crossing" | "chance_healing" | "storage_food" | "storage_jelly";
}
