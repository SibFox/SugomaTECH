import { $Enum } from "@package/java/lang";
import { $UUID_, $Map, $UUID } from "@package/java/util";

declare module "@package/com/denfop/api/primitive" {
    export class $EnumPrimitive extends $Enum<$EnumPrimitive> {
        static values(): $EnumPrimitive[];
        static valueOf(arg0: string): $EnumPrimitive;
        static COMPRESSOR: $EnumPrimitive;
        static ELECTRONIC: $EnumPrimitive;
        static SQUEEZER: $EnumPrimitive;
        static ANVIL: $EnumPrimitive;
        static ROLLING: $EnumPrimitive;
        static MACERATOR: $EnumPrimitive;
        static STRONG_ANVIL: $EnumPrimitive;
        static LASER: $EnumPrimitive;
        static WIRE_INSULATOR: $EnumPrimitive;
        static DRYER: $EnumPrimitive;
        static PCB: $EnumPrimitive;
    }
    /**
     * Values that may be interpreted as {@link $EnumPrimitive}.
     */
    export type $EnumPrimitive_ = "macerator" | "anvil" | "strong_anvil" | "rolling" | "compressor" | "electronic" | "pcb" | "dryer" | "squeezer" | "laser" | "wire_insulator";
    export class $PrimitiveHandler {
        static addExperience(arg0: $EnumPrimitive_, arg1: number, arg2: $UUID_): void;
        static getPlayersData(arg0: $EnumPrimitive_): $Map<$UUID, number>;
        static getMapPrimitives(): $Map<$EnumPrimitive, $Map<$UUID, number>>;
        constructor();
        static get mapPrimitives(): $Map<$EnumPrimitive, $Map<$UUID, number>>;
    }
}
