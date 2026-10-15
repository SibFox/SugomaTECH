import { $Level_ } from "@package/net/minecraft/world/level";
import { $IBogglePatternGenerator } from "@package/com/petrolpark/core/recipe/bogglepattern/generator";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
export * as generator from "@package/com/petrolpark/core/recipe/bogglepattern/generator";

declare module "@package/com/petrolpark/core/recipe/bogglepattern" {
    export interface $BogglePattern extends RegistryMarked<RegistryTypes.PetrolparkBogglePatternTag, RegistryTypes.PetrolparkBogglePattern> {}
    export class $BogglePattern {
        getPattern(): number;
        getGenerator(): $IBogglePatternGenerator;
        getOrGeneratePattern(arg0: $Level_): number;
        forgetPattern(): void;
        static DIRECT_CODEC: $Codec<$BogglePattern>;
        static DIRECT_NETWORK_CODEC: $Codec<$BogglePattern>;
        constructor(arg0: $IBogglePatternGenerator);
        get pattern(): number;
        get generator(): $IBogglePatternGenerator;
    }
    /**
     * Values that may be interpreted as {@link $BogglePattern}.
     */
    export type $BogglePattern_ = RegistryTypes.PetrolparkBogglePattern;
}
