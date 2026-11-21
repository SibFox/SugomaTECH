import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        getSize(): number;
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getDamagePerBlock(): number;
        getWarningBlocks(): number;
        getSizeLerpTarget(): number;
        getSafeZone(): number;
        getWarningTime(): number;
        getSizeLerpTime(): number;
        getCenterX(): number;
        getCenterZ(): number;
        constructor(centerX: number, arg1: number, centerZ: number, arg3: number, damagePerBlock: number, arg5: number, safeZone: number, arg7: number, warningBlocks: number);
        constructor(border: $WorldBorder);
        get size(): number;
        get damagePerBlock(): number;
        get warningBlocks(): number;
        get sizeLerpTarget(): number;
        get safeZone(): number;
        get warningTime(): number;
        get sizeLerpTime(): number;
        get centerX(): number;
        get centerZ(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        setSize(damagePerBlock: number): void;
        getMinX(): number;
        tick(): void;
        addListener(listener: $BorderChangeListener): void;
        removeListener(listener: $BorderChangeListener): void;
        getListeners(): $List<$BorderChangeListener>;
        getStatus(): $BorderStatus;
        setAbsoluteMaxSize(size: number): void;
        getDamagePerBlock(): number;
        getDamageSafeZone(): number;
        isWithinBounds(pos: $Vec3_): boolean;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        getCollisionShape(): $VoxelShape;
        getDistanceToBorder(entity: $Entity): number;
        getDistanceToBorder(x: number, arg1: number): number;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        getLerpRemainingTime(): number;
        applySettings(serializer: $WorldBorder$Settings): void;
        setWarningTime(size: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        setWarningBlocks(size: number): void;
        getWarningBlocks(): number;
        setDamageSafeZone(damagePerBlock: number): void;
        getWarningTime(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getLerpTarget(): number;
        getLerpSpeed(): number;
        createSettings(): $WorldBorder$Settings;
        getAbsoluteMaxSize(): number;
        sable$setLevel(arg0: $Level_): void;
        handler$jan000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        handler$jan000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getCenterX(): number;
        getCenterZ(): number;
        setCenter(x: number, arg1: number): void;
        getMaxZ(): number;
        getMaxX(): number;
        getMinZ(): number;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get minX(): number;
        get listeners(): $List<$BorderChangeListener>;
        get status(): $BorderStatus;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get centerX(): number;
        get centerZ(): number;
        get maxZ(): number;
        get maxX(): number;
        get minZ(): number;
    }
}
