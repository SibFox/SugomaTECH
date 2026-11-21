import { $Stream } from "@package/java/util/stream";
import { $IScratchEnvironment } from "@package/com/petrolpark/core/scratch/environment";
import { $ContextualStreamCodec, $ContextualCodec } from "@package/com/petrolpark/core/codec";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IScratchParameter, $IScratchArgument } from "@package/com/petrolpark/core/scratch/argument";
import { $Collection_ } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $IScratchContext, $IScratchContextHolder, $IScratchContextProvider } from "@package/com/petrolpark/core/scratch/procedure";
export * as classes from "@package/com/petrolpark/core/scratch/classes";
export * as symbol from "@package/com/petrolpark/core/scratch/symbol";
export * as procedure from "@package/com/petrolpark/core/scratch/procedure";
export * as environment from "@package/com/petrolpark/core/scratch/environment";
export * as argument from "@package/com/petrolpark/core/scratch/argument";

declare module "@package/com/petrolpark/core/scratch" {
    export class $ScratchArguments$And$Builder<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, NEXT extends $ScratchArguments$More<ENVIRONMENT, never, never>> extends $ScratchArguments$And<ENVIRONMENT, TYPE, ARGUMENT, NEXT> implements $ScratchArguments$More$Builder<ENVIRONMENT> {
        after<PREVIOUS_TYPE, PREVIOUS_ARGUMENT extends $IScratchArgument<ENVIRONMENT, PREVIOUS_TYPE>>(arg0: PREVIOUS_ARGUMENT): $ScratchArguments$And$Builder<ENVIRONMENT, PREVIOUS_TYPE, PREVIOUS_ARGUMENT, $ScratchArguments$And<ENVIRONMENT, TYPE, ARGUMENT, NEXT>>;
        build(): $ScratchArguments$And<ENVIRONMENT, TYPE, ARGUMENT, NEXT>;
    }
    export class $ScratchParameters$Just$Builder<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, PARAMETER extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT>> extends $ScratchParameters$Just<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER> implements $ScratchParameters$More$Builder<ENVIRONMENT> {
        after<PREVIOUS_TYPE, PREVIOUS_ARGUMENT extends $IScratchArgument<ENVIRONMENT, PREVIOUS_TYPE>, PREVIOUS_PARAMETER extends $IScratchParameter<ENVIRONMENT, PREVIOUS_TYPE, PREVIOUS_ARGUMENT>>(arg0: PREVIOUS_PARAMETER): $ScratchParameters$And$Builder<ENVIRONMENT, PREVIOUS_TYPE, PREVIOUS_ARGUMENT, PREVIOUS_PARAMETER, $ScratchArguments$Just<ENVIRONMENT, TYPE, ARGUMENT>, $ScratchParameters$Just<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER>>;
        build(): $ScratchParameters$Just<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER>;
    }
    export class $ScratchParameters$And$Builder<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, PARAMETER extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT>, NEXT_ARGUMENTS extends $ScratchArguments$More<ENVIRONMENT, never, never>, NEXT extends $ScratchParameters$More<ENVIRONMENT, never, never, never, NEXT_ARGUMENTS>> extends $ScratchParameters$And<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER, NEXT_ARGUMENTS, NEXT> implements $ScratchParameters$More$Builder<ENVIRONMENT> {
        after<PREVIOUS_TYPE, PREVIOUS_ARGUMENT extends $IScratchArgument<ENVIRONMENT, PREVIOUS_TYPE>, PREVIOUS_PARAMETER extends $IScratchParameter<ENVIRONMENT, PREVIOUS_TYPE, PREVIOUS_ARGUMENT>>(arg0: PREVIOUS_PARAMETER): $ScratchParameters$And$Builder<ENVIRONMENT, PREVIOUS_TYPE, PREVIOUS_ARGUMENT, PREVIOUS_PARAMETER, $ScratchArguments$And<ENVIRONMENT, TYPE, ARGUMENT, NEXT_ARGUMENTS>, $ScratchParameters$And<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER, NEXT_ARGUMENTS, NEXT>>;
        build(): $ScratchParameters$And<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER, NEXT_ARGUMENTS, NEXT>;
    }
    export class $ScratchParameters$Just<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, PARAMETER extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT>> extends $ScratchParameters$More<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER, $ScratchArguments$Just<ENVIRONMENT, TYPE, ARGUMENT>> implements $ScratchSignature$Just<TYPE> {
    }
    export class $ScratchParameters<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>> {
        static parameters<ENVIRONMENT extends $IScratchEnvironment>(): $ScratchParameters$None$Builder<ENVIRONMENT>;
    }
    export interface $ScratchParameters<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>> extends $ScratchSignature {
        stream(): $Stream<$IScratchParameter<ENVIRONMENT, never, never>>;
        argumentsStreamCodec(): $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchContextProvider<never>, ARGUMENTS>;
        argumentsCodec(): $ContextualCodec<$IScratchContextProvider<never>, ARGUMENTS>;
    }
    export class $ScratchSignature$None {
    }
    export interface $ScratchSignature$None extends $ScratchSignature {
    }
    export class $ScratchArguments$None$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchArguments$None<ENVIRONMENT> implements $ScratchArguments$Builder<ENVIRONMENT> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>>(arg0: ARGUMENT): $ScratchArguments$Just$Builder<ENVIRONMENT, TYPE, ARGUMENT>;
        build(): $ScratchArguments$None<ENVIRONMENT>;
        constructor();
    }
    export class $ScratchParameters$None$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchParameters$None<ENVIRONMENT> implements $ScratchParameters$Builder<ENVIRONMENT> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, PARAMETER extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT>>(arg0: PARAMETER): $ScratchParameters$Just$Builder<ENVIRONMENT, TYPE, ARGUMENT, PARAMETER>;
        build(): $ScratchParameters$None<ENVIRONMENT>;
        constructor();
    }
    export class $ScratchParameters$More$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchParameters$More$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchParameters$Builder<ENVIRONMENT> {
    }
    export class $ScratchParameters$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchParameters$Builder<ENVIRONMENT extends $IScratchEnvironment> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, PARAMETER extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT>>(arg0: PARAMETER): $ScratchParameters$More$Builder<ENVIRONMENT>;
        build(): $ScratchParameters<ENVIRONMENT, never>;
    }
    export class $ScratchArguments$None<ENVIRONMENT extends $IScratchEnvironment> implements $ScratchArguments<ENVIRONMENT, $ScratchSignature$None>, $ScratchSignature$None {
        stream(): $Stream<$IScratchArgument<ENVIRONMENT, never>>;
        canEvaluate(): boolean;
        populateContext<CONTEXT extends $IScratchContext<CONTEXT>>(arg0: $IScratchContextProvider<CONTEXT>, arg1: CONTEXT): void;
        constructor();
    }
    export class $ScratchSignature {
    }
    export interface $ScratchSignature {
    }
    export class $ScratchArguments$More$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchArguments$More$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchArguments$Builder<ENVIRONMENT> {
    }
    export class $ScratchParameters$None<ENVIRONMENT extends $IScratchEnvironment> implements $ScratchParameters<ENVIRONMENT, $ScratchArguments$None<ENVIRONMENT>>, $ScratchSignature$None {
        stream(): $Stream<$IScratchParameter<ENVIRONMENT, never, never>>;
        argumentsStreamCodec(): $ContextualStreamCodec<$ByteBuf, $IScratchContextProvider<never>, $ScratchArguments$None<ENVIRONMENT>>;
        argumentsCodec(): $ContextualCodec<$IScratchContextProvider<never>, $ScratchArguments$None<ENVIRONMENT>>;
        constructor();
    }
    export class $ScratchArguments$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchArguments$Builder<ENVIRONMENT extends $IScratchEnvironment> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>>(arg0: ARGUMENT): $ScratchArguments$More$Builder<ENVIRONMENT>;
        build(): $ScratchArguments<ENVIRONMENT, never>;
    }
    export class $ScratchArguments$Just$Builder<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> extends $ScratchArguments$Just<ENVIRONMENT, TYPE, ARGUMENT> implements $ScratchArguments$More$Builder<ENVIRONMENT> {
        after<PREVIOUS_TYPE, PREVIOUS_ARGUMENT extends $IScratchArgument<ENVIRONMENT, PREVIOUS_TYPE>>(arg0: PREVIOUS_ARGUMENT): $ScratchArguments$And$Builder<ENVIRONMENT, PREVIOUS_TYPE, PREVIOUS_ARGUMENT, $ScratchArguments$Just<ENVIRONMENT, TYPE, ARGUMENT>>;
        build(): $ScratchArguments$Just<ENVIRONMENT, TYPE, ARGUMENT>;
    }
    export class $ScratchArguments$Just<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> extends $ScratchArguments$More<ENVIRONMENT, TYPE, ARGUMENT> implements $ScratchSignature$Just<TYPE> {
    }
    export class $ScratchArguments<ENVIRONMENT extends $IScratchEnvironment, SIGNATURE extends $ScratchSignature> {
        static of<ENVIRONMENT extends $IScratchEnvironment>(arg0: $Collection_<$IScratchArgument<ENVIRONMENT, never>>): $ScratchArguments<ENVIRONMENT, never>;
        static "arguments"<ENVIRONMENT extends $IScratchEnvironment>(): $ScratchArguments$None$Builder<ENVIRONMENT>;
    }
    export interface $ScratchArguments<ENVIRONMENT extends $IScratchEnvironment, SIGNATURE extends $ScratchSignature> extends $ScratchSignature, $IScratchContextHolder {
        stream(): $Stream<$IScratchArgument<ENVIRONMENT, never>>;
        canEvaluate(): boolean;
        populateContext<CONTEXT extends $IScratchContext<CONTEXT>>(arg0: $IScratchContextProvider<CONTEXT>, arg1: CONTEXT): void;
    }
    /**
     * Values that may be interpreted as {@link $ScratchArguments}.
     */
    export type $ScratchArguments_<ENVIRONMENT, SIGNATURE> = (() => $Stream<$IScratchArgument<ENVIRONMENT, never>>);
}
