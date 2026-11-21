import { $ItemLike } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Predicate_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/tterrag/registrate/util/entry" {
    export class $ItemProviderEntry<R extends $ItemLike, T extends R> extends $RegistryEntry<R, T> implements $ItemLike {
        is(arg0: $Item_): boolean;
        asItem(): $Item;
        asStack(arg0: number): $ItemStack;
        asStack(): $ItemStack;
        isIn(arg0: $ItemStack_): boolean;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, T>);
    }
    export class $ItemEntry<T extends $Item> extends $ItemProviderEntry<$Item, T> {
        static cast<T extends $Item>(arg0: $RegistryEntry<$Item_, T>): $ItemEntry<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Item_, T>);
    }
    export class $RegistryEntry<R, S extends R> extends $DeferredHolder<R, S> implements $NonNullSupplier<S> {
        filter(arg0: $Predicate_<R>): ($RegistryEntry<R, S>) | undefined;
        is<X>(arg0: X): boolean;
        getSibling<X, Y extends X>(arg0: $ResourceKey_<$Registry<X>>): $RegistryEntry<X, Y>;
        getSibling<X, Y extends X>(arg0: $Registry<X>): $RegistryEntry<X, Y>;
        lazy(): $NonNullSupplier<S>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, S>);
    }
}
