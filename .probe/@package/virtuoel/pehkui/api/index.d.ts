import { $Float2FloatFunction_, $Float2FloatFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SortedSet, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Event } from "@package/net/fabricmc/fabric/api/event";

declare module "@package/virtuoel/pehkui/api" {
    export class $ScaleModifier implements $Comparable<$ScaleModifier> {
        compareTo(o: $ScaleModifier): number;
        getPriority(): number;
        modifyScale(scaleData: $ScaleData, modifiedScale: number, delta: number): number;
        modifyPrevScale(scaleData: $ScaleData, modifiedScale: number): number;
        constructor();
        constructor(priority: number);
        get priority(): number;
    }
    export class $ScaleData {
        equals(other: $ScaleData): boolean;
        setScale(scale: number): void;
        tick(): void;
        getScaleType(): $ScaleType;
        getScale(): number;
        getScale(delta: number): number;
        getEntity(): $Entity;
        toPacket(buffer: $FriendlyByteBuf): $FriendlyByteBuf;
        writeNbt(tag: $CompoundTag_): $CompoundTag;
        readNbt(tag: $CompoundTag_): void;
        shouldSync(): boolean;
        getBaseScale(): number;
        getBaseScale(delta: number): number;
        fromScale(scaleData: $ScaleData, notifyListener: boolean): $ScaleData;
        fromScale(scaleData: $ScaleData): $ScaleData;
        setScaleTickDelay(ticks: number): void;
        getPrevScale(): number;
        setPersistence(persistent: boolean): void;
        shouldPersist(): boolean;
        markForSync(sync: boolean): void;
        getTargetScale(): number;
        setBaseScale(scale: number): void;
        setTargetScale(targetScale: number): void;
        getInitialScale(): number;
        hasDefaultValues(): boolean;
        averagedFromScales(scaleData: $ScaleData, ...scales: $ScaleData[]): $ScaleData;
        getPrevBaseScale(): number;
        getPersistence(): boolean;
        getScaleTickDelay(): number;
        onUpdate(): void;
        isReset(): boolean;
        setEasing(easing: $Float2FloatFunction_): void;
        resetScale(notifyListener: boolean): $ScaleData;
        resetScale(): $ScaleData;
        getEasing(): $Float2FloatFunction;
        getBaseValueModifiers(): $SortedSet<$ScaleModifier>;
        get scaleType(): $ScaleType;
        get entity(): $Entity;
        get prevScale(): number;
        get initialScale(): number;
        get prevBaseScale(): number;
        get reset(): boolean;
        get baseValueModifiers(): $SortedSet<$ScaleModifier>;
    }
    export class $ScaleType {
        getDefaultBaseValueModifiers(): $Set<$ScaleModifier>;
        getScaleData(entity: $Entity): $ScaleData;
        getDefaultBaseScale(): number;
        setDefaultEasing(defaultEasing: $Float2FloatFunction_): void;
        clampTargetScale(data: $ScaleData, newScale: number): number;
        getDefaultEasing(): $Float2FloatFunction;
        clampBaseScale(data: $ScaleData, newScale: number): number;
        getPostTickEvent(): $Event<any>;
        getPreTickEvent(): $Event<any>;
        getDefaultTickDelay(): number;
        getScaleChangedEvent(): $Event<any>;
        getDefaultPersistence(): boolean;
        getAffectsDimensions(): boolean;
        setDefaultPersistence(persistent: boolean): void;
        get defaultBaseValueModifiers(): $Set<$ScaleModifier>;
        get defaultBaseScale(): number;
        get postTickEvent(): $Event<any>;
        get preTickEvent(): $Event<any>;
        get defaultTickDelay(): number;
        get scaleChangedEvent(): $Event<any>;
        get affectsDimensions(): boolean;
    }
}
