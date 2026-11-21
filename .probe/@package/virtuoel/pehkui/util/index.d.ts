import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Number } from "@package/java/lang";
import { $UUID, $Map } from "@package/java/util";
import { $ScaleData, $ScaleType } from "@package/virtuoel/pehkui/api";
import { $MinMaxBounds, $MinMaxBounds$Doubles_ } from "@package/net/minecraft/advancements/critereon";

declare module "@package/virtuoel/pehkui/util" {
    export class $PehkuiEntityExtensions {
    }
    export interface $PehkuiEntityExtensions {
        pehkui_getScales(): $Map<$ScaleType, $ScaleData>;
        pehkui_setOnGround(arg0: boolean): void;
        pehkui_getOnGround(): boolean;
        pehkui_getScaleData(arg0: $ScaleType): $ScaleData;
        pehkui_setScaleCache(arg0: $ScaleData[]): void;
        pehkui_setShouldSyncScales(arg0: boolean): void;
        pehkui_isFirstUpdate(): boolean;
        pehkui_writeScaleNbt(arg0: $CompoundTag_): $CompoundTag;
        pehkui_getScaleCache(): $ScaleData[];
        pehkui_readScaleNbt(arg0: $CompoundTag_): void;
        pehkui_constructScaleData(arg0: $ScaleType): $ScaleData;
        pehkui_shouldSyncScales(): boolean;
        pehkui_shouldIgnoreScaleNbt(): boolean;
        pehkui_setShouldIgnoreScaleNbt(arg0: boolean): void;
    }
    export class $NbtCompoundExtensions {
    }
    export interface $NbtCompoundExtensions {
        pehkui_containsUuid(arg0: string): boolean;
        pehkui_getUuid(arg0: string): $UUID;
    }
    export class $PehkuiEntitySelectorReaderExtensions {
    }
    export interface $PehkuiEntitySelectorReaderExtensions {
        pehkui_setScaleRange(arg0: $MinMaxBounds$Doubles_): void;
        pehkui_getScaleRange(): $MinMaxBounds<$Number>;
        pehkui_setScaleType(arg0: $ScaleType): void;
        pehkui_getScaleType(): $ScaleType;
        pehkui_setComputedScaleType(arg0: $ScaleType): void;
        pehkui_setComputedScaleRange(arg0: $MinMaxBounds$Doubles_): void;
        pehkui_getComputedScaleType(): $ScaleType;
        pehkui_getComputedScaleRange(): $MinMaxBounds<$Number>;
    }
    export class $PehkuiBlockStateExtensions {
    }
    export interface $PehkuiBlockStateExtensions {
        pehkui_getOutlineShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        pehkui_getBlock(): $Block;
    }
}
