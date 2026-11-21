import { $Enum } from "@package/java/lang";

declare module "@package/com/tom/cpl/command" {
    export class $ArgType extends $Enum<$ArgType> {
        static values(): $ArgType[];
        static valueOf(arg0: string): $ArgType;
        static PLAYER: $ArgType;
        static FLOAT: $ArgType;
        static STRING: $ArgType;
        static BOOLEAN: $ArgType;
        static INT: $ArgType;
    }
    /**
     * Values that may be interpreted as {@link $ArgType}.
     */
    export type $ArgType_ = "string" | "player" | "boolean" | "int" | "float";
}
