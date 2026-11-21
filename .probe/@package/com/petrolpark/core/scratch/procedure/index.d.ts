import { $IScratchEnvironment$Type } from "@package/com/petrolpark/core/scratch/environment";
import { $Object } from "@package/java/lang";

declare module "@package/com/petrolpark/core/scratch/procedure" {
    export class $IScratchContext<CONTEXT extends $IScratchContext<CONTEXT>> {
    }
    export interface $IScratchContext<CONTEXT extends $IScratchContext<CONTEXT>> {
    }
    export class $IScratchContextProvider<CONTEXT extends $IScratchContext<CONTEXT>> {
    }
    export interface $IScratchContextProvider<CONTEXT extends $IScratchContext<CONTEXT>> {
        isRoot(): boolean;
        enclosingContextProvider(): $IScratchContextProvider<never>;
        environmentType(): $IScratchEnvironment$Type<never>;
        get root(): boolean;
    }
    export class $IScratchContextHolder {
        static cast(arg0: $Object): $IScratchContextHolder;
    }
    export interface $IScratchContextHolder {
        populateContext<CONTEXT extends $IScratchContext<CONTEXT>>(arg0: $IScratchContextProvider<CONTEXT>, arg1: CONTEXT): void;
    }
    /**
     * Values that may be interpreted as {@link $IScratchContextHolder}.
     */
    export type $IScratchContextHolder_ = ((arg0: $IScratchContextProvider<any>, arg1: any) => void);
}
