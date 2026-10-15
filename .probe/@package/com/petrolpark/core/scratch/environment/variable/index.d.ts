import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/core/scratch/environment/variable" {
    export interface $IScratchScope extends RegistryMarked<RegistryTypes.PetrolparkScratchScopeTag, RegistryTypes.PetrolparkScratchScope> {}
    export class $IScratchScope {
        static CODEC: $Codec<$IScratchScope>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IScratchScope>;
    }
    export interface $IScratchScope {
    }
    /**
     * Values that may be interpreted as {@link $IScratchScope}.
     */
    export type $IScratchScope_ = RegistryTypes.PetrolparkScratchScope;
}
