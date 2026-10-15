import { $JsonObject_, $JsonObject, $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/dev/tazer/mixed_litter/actions" {
    export class $VariantActionType {
        static resolveTexturePath(arg0: string): $ResourceLocation;
        static resolveArguments(arg0: $JsonElement_, arg1: $JsonObject_, arg2: $JsonObject_): $JsonObject;
    }
    export interface $VariantActionType {
        resolve(arg0: $JsonObject_, arg1: $JsonObject_, arg2: $JsonObject_): $VariantActionType;
    }
    /**
     * Values that may be interpreted as {@link $VariantActionType}.
     */
    export type $VariantActionType_ = RegistryTypes.MixedLitterActionTypes | ((arg0: $JsonObject, arg1: $JsonObject, arg2: $JsonObject) => $VariantActionType_);
    export class $Action extends $Record {
        type(): $VariantActionType;
        "arguments"(): $JsonObject;
        static CODEC: $Codec<$Action>;
        constructor(type: $VariantActionType_, arg1: $JsonObject_);
    }
    /**
     * Values that may be interpreted as {@link $Action}.
     */
    export type $Action_ = { arguments?: $JsonObject_, type?: $VariantActionType_,  } | [arguments?: $JsonObject_, type?: $VariantActionType_, ];
    export interface $VariantActionType extends RegistryMarked<RegistryTypes.MixedLitterActionTypesTag, RegistryTypes.MixedLitterActionTypes> {}
}
