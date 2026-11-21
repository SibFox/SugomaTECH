import { $ScratchArguments } from "@package/com/petrolpark/core/scratch";
import { $IScratchEnvironment } from "@package/com/petrolpark/core/scratch/environment";
import { $ContextualCodec, $ContextualStreamCodec } from "@package/com/petrolpark/core/codec";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IScratchExpression, $ExpressionAndArguments_ } from "@package/com/petrolpark/core/scratch/symbol/expression";
import { $IScratchContextProvider } from "@package/com/petrolpark/core/scratch/procedure";

declare module "@package/com/petrolpark/core/scratch/argument" {
    export class $IExpressionScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> {
    }
    export interface $IExpressionScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT> {
        pass<ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>>(arg0: $IScratchExpression<ENVIRONMENT, TYPE, ARGUMENTS, never>, arg1: ARGUMENTS): ARGUMENT;
        pass<ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>>(arg0: $ExpressionAndArguments_<ENVIRONMENT, TYPE, ARGUMENTS>): ARGUMENT;
    }
    export class $IScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> {
    }
    export interface $IScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> {
        key(): string;
        argumentCodec(): $ContextualCodec<$IScratchContextProvider<never>, ARGUMENT>;
        argumentStreamCodec(): $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchContextProvider<never>, ARGUMENT>;
    }
    export class $IScratchArgument<ENVIRONMENT extends $IScratchEnvironment, TYPE> {
    }
    export interface $IScratchArgument<ENVIRONMENT extends $IScratchEnvironment, TYPE> {
        parameter(): $IScratchParameter<ENVIRONMENT, TYPE, $IScratchArgument<ENVIRONMENT, TYPE>>;
        get(arg0: ENVIRONMENT): TYPE;
        canEvaluate(): boolean;
    }
}
