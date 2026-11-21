import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistrationHandler$Helper } from "@package/com/supermartijn642/core/registry";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID } from "@package/java/util";
import { $BaseBlockItem } from "@package/com/supermartijn642/core/item";
import { $EntityHoldingBlock, $BaseBlock, $BlockShape, $BaseBlockEntity, $BaseBlockEntityType } from "@package/com/supermartijn642/core/block";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_, $Block$BlockStatePairKey, $SimpleWaterloggedBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $ThreadLocal } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as capability from "@package/com/supermartijn642/chunkloaders/capability";
export * as extensions from "@package/com/supermartijn642/chunkloaders/extensions";

declare module "@package/com/supermartijn642/chunkloaders" {
    export class $ChunkLoaderBlock extends $BaseBlock implements $EntityHoldingBlock, $SimpleWaterloggedBlock {
        createNewBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, entityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static BASIC_SHAPE: $BlockShape;
        explosionResistance: number;
        static TILE_DATA: $DataComponentType<$CompoundTag>;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static ULTIMATE_SHAPE: $BlockShape;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        descriptionId: string;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static ADVANCED_SHAPE: $BlockShape;
        speedFactor: number;
        static SINGLE_SHAPE: $BlockShape;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(type: $ChunkLoaderType_);
    }
    export class $ChunkLoaderBlockEntity extends $BaseBlockEntity {
        getOwner(): $UUID;
        getChunkLoaderType(): $ChunkLoaderType;
        hasOwner(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        animationOffset: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_, type: $ChunkLoaderType_);
        get owner(): $UUID;
        get chunkLoaderType(): $ChunkLoaderType;
    }
    export class $ChunkLoaderType extends $Enum<$ChunkLoaderType> {
        static values(): $ChunkLoaderType[];
        static valueOf(name: string): $ChunkLoaderType;
        getIndex(): number;
        getItem(): $BaseBlockItem;
        getShape(): $BlockShape;
        getBlock(): $ChunkLoaderBlock;
        static byIndex(index: number): $ChunkLoaderType;
        getRange(): number;
        getRegistryName(): string;
        createBlockEntity(pos: $BlockPos_, state: $BlockState_): $ChunkLoaderBlockEntity;
        registerBlock(helper: $RegistrationHandler$Helper<$Block_>): void;
        registerItem(helper: $RegistrationHandler$Helper<$Item_>): void;
        registerBlockEntity(helper: $RegistrationHandler$Helper<$BlockEntityType_<never>>): void;
        getBlockEntityType(): $BaseBlockEntityType<$ChunkLoaderBlockEntity>;
        getFullRotation(): boolean;
        getGridSize(): number;
        getEnglishTranslation(): string;
        static SINGLE: $ChunkLoaderType;
        static ULTIMATE: $ChunkLoaderType;
        static BASIC: $ChunkLoaderType;
        static ADVANCED: $ChunkLoaderType;
        get index(): number;
        get item(): $BaseBlockItem;
        get shape(): $BlockShape;
        get block(): $ChunkLoaderBlock;
        get range(): number;
        get registryName(): string;
        get blockEntityType(): $BaseBlockEntityType<$ChunkLoaderBlockEntity>;
        get fullRotation(): boolean;
        get gridSize(): number;
        get englishTranslation(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChunkLoaderType}.
     */
    export type $ChunkLoaderType_ = "single" | "basic" | "advanced" | "ultimate";
}
