import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $IScratchScope, $IScratchScope_ } from "@package/com/petrolpark/core/scratch/environment/variable";
import { $IScratchSymbol_ } from "@package/com/petrolpark/core/scratch/symbol";
export * as variable from "@package/com/petrolpark/core/scratch/environment/variable";

declare module "@package/com/petrolpark/core/scratch/environment" {
    export interface $IScratchEnvironment$Type<ENVIRONMENT> extends RegistryMarked<RegistryTypes.PetrolparkScratchEnvironmentTypeTag, RegistryTypes.PetrolparkScratchEnvironmentType> {}
    export class $IScratchEnvironment$Type<ENVIRONMENT extends $IScratchEnvironment> {
        static CODEC: $Codec<$IScratchEnvironment$Type<never>>;
    }
    export interface $IScratchEnvironment$Type<ENVIRONMENT extends $IScratchEnvironment> {
        allows(arg0: $IScratchSymbol_<ENVIRONMENT, never, never>): boolean;
        canAccess(arg0: $IScratchScope_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IScratchEnvironment$Type}.
     */
    export type $IScratchEnvironment$Type_<ENVIRONMENT> = RegistryTypes.PetrolparkScratchEnvironmentType | ((arg0: $IScratchScope) => boolean);
    export class $IScratchEnvironment {
    }
    export interface $IScratchEnvironment {
        getType(): $IScratchEnvironment$Type<never>;
        get type(): $IScratchEnvironment$Type<never>;
    }
    /**
     * Values that may be interpreted as {@link $IScratchEnvironment}.
     */
    export type $IScratchEnvironment_ = (() => $IScratchEnvironment$Type_<never>);
}
