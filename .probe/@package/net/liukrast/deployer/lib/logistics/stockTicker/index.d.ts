import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $List_, $List } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/liukrast/deployer/lib/logistics/stockTicker" {
    export class $GenericOrder<V> extends $Record {
        isEmpty(): boolean;
        static empty<V>(): $GenericOrder<V>;
        strategy(): $Hash$Strategy<V>;
        stacks(): $List<V>;
        static simpleCodec<V>(arg0: $Codec<V>, arg1: $Hash$Strategy<V>): $Codec<$GenericOrder<V>>;
        static simpleStreamCodec<V>(arg0: $StreamCodec_<$RegistryFriendlyByteBuf, V>, arg1: $Hash$Strategy<V>): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>;
        static DEFAULT_STRATEGY: $Hash$Strategy<$Object>;
        constructor(stacks: $List_<V>, strategy: $Hash$Strategy<V>);
    }
    /**
     * Values that may be interpreted as {@link $GenericOrder}.
     */
    export type $GenericOrder_<V> = { strategy?: $Hash$Strategy<any>, stacks?: $List_<any>,  } | [strategy?: $Hash$Strategy<any>, stacks?: $List_<any>, ];
    export class $GenericOrderContained<V> extends $Record {
        isEmpty(): boolean;
        static empty<V>(): $GenericOrderContained<V>;
        static simple<V>(arg0: $List_<V>, arg1: $Hash$Strategy<V>): $GenericOrderContained<V>;
        stacks(): $List<V>;
        orderedStacks(): $GenericOrder<V>;
        static fromOrderStreamCodec<V>(arg0: $StreamCodec_<$RegistryFriendlyByteBuf, $GenericOrder_<V>>): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrderContained<V>>;
        static fromOrderCodec<V>(arg0: $Codec<$GenericOrder_<V>>, arg1: $Codec<V>, arg2: $Hash$Strategy<V>): $Codec<$GenericOrderContained<V>>;
        constructor(orderedStacks: $GenericOrder_<V>);
    }
    /**
     * Values that may be interpreted as {@link $GenericOrderContained}.
     */
    export type $GenericOrderContained_<V> = { orderedStacks?: $GenericOrder_<any>,  } | [orderedStacks?: $GenericOrder_<any>, ];
}
