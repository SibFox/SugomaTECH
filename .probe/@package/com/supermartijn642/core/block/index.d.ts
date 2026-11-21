import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_, $Set } from "@package/java/util";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $Consumer_, $BiFunction_ } from "@package/java/util/function";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_, $EntityBlock, $Block$BlockStatePairKey, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $ThreadLocal } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $SignBlockEntity, $ChiseledBookShelfBlockEntity, $ConduitBlockEntity, $JigsawBlockEntity, $BarrelBlockEntity, $BlastFurnaceBlockEntity, $SmokerBlockEntity, $SkullBlockEntity, $CalibratedSculkSensorBlockEntity, $BlockEntityTicker, $BannerBlockEntity, $ChestBlockEntity, $CrafterBlockEntity, $LecternBlockEntity, $DecoratedPotBlockEntity, $EnchantingTableBlockEntity, $BellBlockEntity, $CommandBlockEntity, $DropperBlockEntity, $JukeboxBlockEntity, $DispenserBlockEntity, $BrushableBlockEntity, $SculkShriekerBlockEntity, $BlockEntityType, $SculkCatalystBlockEntity, $EnderChestBlockEntity, $BedBlockEntity, $SculkSensorBlockEntity, $SpawnerBlockEntity, $CampfireBlockEntity, $TheEndGatewayBlockEntity, $TrialSpawnerBlockEntity, $BeehiveBlockEntity, $BlockEntityType_, $DaylightDetectorBlockEntity, $BlockEntity, $ComparatorBlockEntity, $StructureBlockEntity, $FurnaceBlockEntity, $ShulkerBoxBlockEntity, $TrappedChestBlockEntity, $BeaconBlockEntity, $TheEndPortalBlockEntity, $BrewingStandBlockEntity, $HangingSignBlockEntity, $HopperBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/supermartijn642/core/block" {
    export class $BaseBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<T> {
        static create<T extends $BaseBlockEntity>(entitySupplier: $BiFunction_<$BlockPos, $BlockState, T>, ...validBlocks: $Block_[]): $BaseBlockEntityType<T>;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
    }
    export class $BlockShape$LineConsumer {
    }
    export interface $BlockShape$LineConsumer {
        apply(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockShape$LineConsumer}.
     */
    export type $BlockShape$LineConsumer_ = ((x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => void);
    export class $BlockShape$PointConsumer {
    }
    export interface $BlockShape$PointConsumer {
        apply(x: number, y: number, z: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockShape$PointConsumer}.
     */
    export type $BlockShape$PointConsumer_ = ((x: number, y: number, z: number) => void);
    export class $BaseBlock extends $Block {
        explosionResistance: number;
        static TILE_DATA: $DataComponentType<$CompoundTag>;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
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
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(saveTileData: boolean, properties: $BlockBehaviour$Properties);
        constructor(saveTileData: boolean, properties: $BlockProperties);
    }
    export class $EntityHoldingBlock {
    }
    export interface $EntityHoldingBlock extends $EntityBlock {
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, entityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        createNewBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $EntityHoldingBlock}.
     */
    export type $EntityHoldingBlock_ = ((pos: $BlockPos, state: $BlockState) => $BlockEntity);
    export class $BlockShape {
        isEmpty(): boolean;
        offset(direction: $Direction_): $BlockShape;
        offset(pos: $BlockPos_): $BlockShape;
        offset(x: number, y: number, z: number): $BlockShape;
        static empty(): $BlockShape;
        static create(box: $AABB_): $BlockShape;
        static create(box: $VoxelShape): $BlockShape;
        static create(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): $BlockShape;
        flip(axis: $Direction$Axis_): $BlockShape;
        grow(amount: number): $BlockShape;
        rotate(axis: $Direction$Axis_): $BlockShape;
        static or(shape: $BlockShape, ...shapes: $BlockShape[]): $BlockShape;
        intersects(shape: $BlockShape): boolean;
        static intersects(shape1: $BlockShape, shape2: $BlockShape): boolean;
        minX(): number;
        minY(): number;
        shrink(amount: number): $BlockShape;
        simplify(): $AABB;
        getStart(axis: $Direction$Axis_): number;
        minZ(): number;
        maxZ(): number;
        maxY(): number;
        maxX(): number;
        getEnd(axis: $Direction$Axis_): number;
        static createBlockShape(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): $BlockShape;
        /**
         * @deprecated
         */
        getUnderlying(): $VoxelShape;
        toBoxes(): $List<$AABB>;
        static fullCube(): $BlockShape;
        forEachBox(action: $Consumer_<$AABB>): void;
        forEachCorner(action: $BlockShape$PointConsumer_): void;
        forEachEdge(action: $BlockShape$LineConsumer_): void;
        constructor(shapes: $List_<$AABB_>);
        constructor(shape: $AABB_);
        constructor(shape: $VoxelShape);
        get underlying(): $VoxelShape;
    }
    export class $BaseBlockEntity extends $BlockEntity {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        dataChanged(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(tileEntityTypeIn: $BlockEntityType_<never>, pos: $BlockPos_, state: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
}
