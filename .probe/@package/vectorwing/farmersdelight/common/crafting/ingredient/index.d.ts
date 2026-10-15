import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/vectorwing/farmersdelight/common/crafting/ingredient" {
    export class $ChanceResult extends $Record {
        stack(): $ItemStack;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static read(arg0: $RegistryFriendlyByteBuf): $ChanceResult;
        chance(): number;
        rollOutput(arg0: $RandomSource, arg1: number): $ItemStack;
        static CODEC: $Codec<$ChanceResult>;
        static EMPTY: $ChanceResult;
        constructor(stack: $ItemStack_, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $ChanceResult}.
     */
    export type $ChanceResult_ = { stack?: $ItemStack_, chance?: number,  } | [stack?: $ItemStack_, chance?: number, ];
}
