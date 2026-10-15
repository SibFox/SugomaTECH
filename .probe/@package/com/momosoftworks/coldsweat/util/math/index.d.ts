import { $BiConsumer_ } from "@package/java/util/function";
import { $Multimap, $Multiset } from "@package/com/google/common/collect";
import { $Map_, $Map, $Collection, $Map$Entry, $Set, $Collection_ } from "@package/java/util";
import { $Object, $Iterable_ } from "@package/java/lang";

declare module "@package/com/momosoftworks/coldsweat/util/math" {
    export class $RegistryMultiMap<K, V> implements $Multimap<K, V> {
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        get(arg0: K): $Set<V>;
        put(arg0: K, arg1: V): boolean;
        values(): $Collection<V>;
        clear(): void;
        isEmpty(): boolean;
        putAll(arg0: K, arg1: $Iterable_<V>): boolean;
        putAll(arg0: $Multimap<K, V>): boolean;
        putAll(arg0: $Collection_<$Map$Entry<K, V>>): boolean;
        containsKey(arg0: $Object): boolean;
        keys(): $Multiset<K>;
        keySet(): $Set<K>;
        containsValue(arg0: $Object): boolean;
        entries(): $Collection<$Map$Entry<K, V>>;
        removeAll(arg0: $Object): $Set<V>;
        getRaw(arg0: K): $Set<V>;
        replaceValues(arg0: K, arg1: $Iterable_<V>): $Set<V>;
        containsEntry(arg0: $Object, arg1: $Object): boolean;
        asMap(): $Map<K, $Collection<V>>;
        forEach(action: $BiConsumer_<K, V>): void;
        constructor(arg0: $Map_<K, $Collection_<V>>);
        constructor(arg0: $Collection_<$Map$Entry<K, V>>);
        constructor(arg0: $Multimap<K, V>);
        constructor();
        get empty(): boolean;
    }
}
