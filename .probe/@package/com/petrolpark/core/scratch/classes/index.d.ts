import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IScratchEnvironment_, $IScratchEnvironment } from "@package/com/petrolpark/core/scratch/environment";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ExpressionAndArguments_, $ExpressionAndArguments } from "@package/com/petrolpark/core/scratch/symbol/expression";
import { $IExpressionScratchParameter, $IScratchArgument, $IScratchParameter } from "@package/com/petrolpark/core/scratch/argument";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/core/scratch/classes" {
    export class $IScratchClass$Caster<FROM_TYPE, TO_TYPE> {
    }
    export interface $IScratchClass$Caster<FROM_TYPE, TO_TYPE> {
        cast<ARGUMENT extends $IScratchArgument<$IScratchEnvironment, TO_TYPE>>(arg0: $IExpressionScratchParameter<$IScratchEnvironment_, TO_TYPE, ARGUMENT>, arg1: $ExpressionAndArguments_<$IScratchEnvironment_, FROM_TYPE, never>): ARGUMENT;
    }
    /**
     * Values that may be interpreted as {@link $IScratchClass$Caster}.
     */
    export type $IScratchClass$Caster_<FROM_TYPE, TO_TYPE> = ((arg0: $IExpressionScratchParameter<$IScratchEnvironment, TO_TYPE, any>, arg1: $ExpressionAndArguments<$IScratchEnvironment, FROM_TYPE, never>) => any);
    export interface $IScratchClassType extends RegistryMarked<RegistryTypes.PetrolparkScratchClassTypeTag, RegistryTypes.PetrolparkScratchClassType> {}
    export class $ISyncedScratchClass<TYPE, DEFAULT_ARGUMENT extends $IScratchArgument<$IScratchEnvironment, TYPE>> {
    }
    export interface $ISyncedScratchClass<TYPE, DEFAULT_ARGUMENT extends $IScratchArgument<$IScratchEnvironment, TYPE>> extends $IScratchClass<TYPE, DEFAULT_ARGUMENT> {
        asSynced(): $ISyncedScratchClass<TYPE, DEFAULT_ARGUMENT>;
    }
    export class $IScratchClassType {
    }
    export interface $IScratchClassType {
        scratchClassStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IScratchClass<never, never>>;
        scratchClassCodec(): $MapCodec<$IScratchClass<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $IScratchClassType}.
     */
    export type $IScratchClassType_ = RegistryTypes.PetrolparkScratchClassType;
    export class $IScratchClass<TYPE, DEFAULT_ARGUMENT extends $IScratchArgument<$IScratchEnvironment, TYPE>> {
        static CODEC: $Codec<$IScratchClass<never, never>>;
        static TYPED_CODEC: $Codec<$IScratchClass<never, never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IScratchClass<never, never>>;
    }
    export interface $IScratchClass<TYPE, DEFAULT_ARGUMENT extends $IScratchArgument<$IScratchEnvironment, TYPE>> {
        cast<TO_TYPE>(arg0: $IScratchClass<TO_TYPE, never>): ($IScratchClass$Caster<TYPE, TO_TYPE>) | undefined;
        getType(): $IScratchClassType;
        fallback(): TYPE;
        codec(): $Codec<TYPE>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, TYPE>;
        createDefaultParameter<ENVIRONMENT extends $IScratchEnvironment>(arg0: string): $IScratchParameter<ENVIRONMENT, TYPE, DEFAULT_ARGUMENT>;
        asSynced(): $ISyncedScratchClass<TYPE, DEFAULT_ARGUMENT>;
        get type(): $IScratchClassType;
    }
}
