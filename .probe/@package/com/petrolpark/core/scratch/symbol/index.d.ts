import { $ScratchArguments, $ScratchParameters } from "@package/com/petrolpark/core/scratch";
import { $IScratchEnvironment, $IScratchEnvironment$Type } from "@package/com/petrolpark/core/scratch/environment";
import { $ContextualMapCodec, $ContextualStreamCodec } from "@package/com/petrolpark/core/codec";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
export * as expression from "@package/com/petrolpark/core/scratch/symbol/expression";
export * as block from "@package/com/petrolpark/core/scratch/symbol/block";

declare module "@package/com/petrolpark/core/scratch/symbol" {
    export class $IScratchSymbol$Type<SYMBOL extends $IScratchSymbol<never, never, never>> {
    }
    export interface $IScratchSymbol$Type<SYMBOL extends $IScratchSymbol<never, never, never>> {
        codec(): $ContextualMapCodec<$IScratchEnvironment$Type<never>, SYMBOL>;
        streamCodec(): $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchEnvironment$Type<never>, SYMBOL>;
    }
    export class $IScratchSymbol<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> {
    }
    export interface $IScratchSymbol<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> {
        getParameters(): PARAMETERS;
        canEvaluate(arg0: ARGUMENTS): boolean;
        get parameters(): PARAMETERS;
    }
    /**
     * Values that may be interpreted as {@link $IScratchSymbol}.
     */
    export type $IScratchSymbol_<ENVIRONMENT, ARGUMENTS, PARAMETERS> = (() => PARAMETERS);
}
