import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Spliterator, $ArrayList, $Iterator, $Collection_, $List, $List_, $Map } from "@package/java/util";
import { $Predicate, $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IdFilter_ } from "@package/com/almostreliable/lootjs/core/filters";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object, $Iterable, $Record } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/almostreliable/lootjs/util" {
    export class $NullableFunction<T, R> {
    }
    export interface $NullableFunction<T, R> {
        apply(arg0: T): R;
    }
    /**
     * Values that may be interpreted as {@link $NullableFunction}.
     */
    export type $NullableFunction_<T, R> = ((arg0: T) => R);
    export class $DebugInfo {
        add(arg0: string): void;
        release(): void;
        push(): void;
        pop(): void;
        constructor();
    }
    export class $Utils {
        static cast<T>(arg0: $Object): T;
        static quote(arg0: string): string;
        static quote(arg0: string, arg1: $Collection_<never>): string;
        static quote(arg0: $ResourceLocation_ | null): string;
        static formatItemStack(arg0: $ItemStack_): string;
        static mapOrThrow(arg0: $Object): $Map<string, $Object>;
        static listOrThrow(arg0: $Object): $List<$Object>;
        static getClassNameEnding<T>(arg0: T): string;
        static formatPosition(arg0: $Vec3_): string;
        static formatEntity(arg0: $Entity): string;
        constructor();
    }
    export class $DebugInfo$Line extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DebugInfo$Line}.
     */
    export type $DebugInfo$Line_ = { indent?: number, text?: string,  } | [indent?: number, text?: string, ];
    export class $ListHolder<W, T> implements $Iterable<W> {
        remove(arg0: number): W;
        size(): number;
        get(arg0: number): W;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: number, arg1: W): void;
        add(arg0: W): boolean;
        iterator(): $Iterator<W>;
        set(arg0: number, arg1: W): W;
        static asArrayList<T>(arg0: $List_<T>): $ArrayList<T>;
        spliterator(): $Spliterator<W>;
        forEach(arg0: $Consumer_<W>): void;
        constructor(arg0: $List_<W>);
        constructor();
        [Symbol.iterator](): Iterator<W>
        get empty(): boolean;
    }
    export class $LootObjectList<T> extends $ArrayList<T> {
        transform(arg0: $NullableFunction_<T, $Object>): void;
        removeById(arg0: $IdFilter_): void;
        constructor(arg0: $Collection_<T>);
        constructor(arg0: number);
        constructor();
    }
    export class $BlockFilter {
    }
    export interface $BlockFilter extends $Iterable<$Block>, $Predicate<$BlockState> {
        stream(): $Stream<$Block>;
    }
    export class $LootContextUtils {
        static getPlayerOrNull(arg0: $LootContext): $ServerPlayer;
        constructor();
    }
}
