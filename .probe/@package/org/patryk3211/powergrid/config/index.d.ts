import { $IMNA } from "@package/org/patryk3211/powergrid/electricity/sim/solver";
import { $Enum } from "@package/java/lang";
import { $ElectricalNetwork } from "@package/org/patryk3211/powergrid/electricity/sim";

declare module "@package/org/patryk3211/powergrid/config" {
    export class $CSolver$SolverBackend extends $Enum<$CSolver$SolverBackend> {
        static values(): $CSolver$SolverBackend[];
        static valueOf(name: string): $CSolver$SolverBackend;
        isSupported(): boolean;
        create(network: $ElectricalNetwork): $IMNA;
        static JAVA: $CSolver$SolverBackend;
        static NATIVE: $CSolver$SolverBackend;
        get supported(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CSolver$SolverBackend}.
     */
    export type $CSolver$SolverBackend_ = "java" | "native";
}
