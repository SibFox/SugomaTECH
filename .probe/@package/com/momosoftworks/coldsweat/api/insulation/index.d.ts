import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/momosoftworks/coldsweat/api/insulation" {
    export class $Insulation$Slot extends $Enum<$Insulation$Slot> implements $StringRepresentable {
        static values(): $Insulation$Slot[];
        static valueOf(arg0: string): $Insulation$Slot;
        static byName(arg0: string): $Insulation$Slot;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ITEM: $Insulation$Slot;
        static CODEC: $Codec<$Insulation$Slot>;
        static ARMOR: $Insulation$Slot;
        static CURIO: $Insulation$Slot;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Insulation$Slot>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Insulation$Slot}.
     */
    export type $Insulation$Slot_ = "item" | "curio" | "armor";
    export class $Insulation {
        getValue(): number;
        isEmpty(): boolean;
        split(): $List<$Insulation>;
        static combine(arg0: $List_<$Insulation>, arg1: $List_<$Insulation>): $List<$Insulation>;
        static sort(arg0: $List_<$Insulation>): $List<$Insulation>;
        copy<T extends $Insulation>(): T;
        static deepCopy(arg0: $List_<$Insulation>): $List<$Insulation>;
        static getCodec(): $Codec<$Insulation>;
        static splitList(arg0: $List_<$Insulation>): $List<$Insulation>;
        getCold(): number;
        getHeat(): number;
        getCompareValue(): number;
        constructor();
        get value(): number;
        get empty(): boolean;
        static get codec(): $Codec<$Insulation>;
        get cold(): number;
        get heat(): number;
        get compareValue(): number;
    }
}
