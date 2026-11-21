import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/com/denfop/api/brewage" {
    export class $EnumWaterVariety extends $Enum<$EnumWaterVariety> {
        static values(): $EnumWaterVariety[];
        static valueOf(arg0: string): $EnumWaterVariety;
        getAmount(): $List<number>;
        static getVarietyFromLevelWater(arg0: number): $EnumWaterVariety;
        getVarieties(): $EnumWaterVariety[];
        static WITHOUT_NAME: $EnumWaterVariety;
        static WATERY: $EnumWaterVariety;
        static STODGE: $EnumWaterVariety;
        static THICK: $EnumWaterVariety;
        static LITE: $EnumWaterVariety;
        static STRONG: $EnumWaterVariety;
        static BLACK_STUFF: $EnumWaterVariety;
        get amount(): $List<number>;
        get varieties(): $EnumWaterVariety[];
    }
    /**
     * Values that may be interpreted as {@link $EnumWaterVariety}.
     */
    export type $EnumWaterVariety_ = "watery" | "lite" | "without_name" | "strong" | "thick" | "stodge" | "black_stuff";
    export class $EnumBeerVariety extends $Enum<$EnumBeerVariety> {
        static values(): $EnumBeerVariety[];
        static valueOf(arg0: string): $EnumBeerVariety;
        static getBeerVarietyFromRatio(arg0: number, arg1: number): $EnumBeerVariety;
        getRatioOfComponents(): $List<$Tuple<number, number>>;
        static SOUP: $EnumBeerVariety;
        static WHITE: $EnumBeerVariety;
        static BLACKSTUFF: $EnumBeerVariety;
        static DARK: $EnumBeerVariety;
        static PREFIXLESS: $EnumBeerVariety;
        static BLACK: $EnumBeerVariety;
        get ratioOfComponents(): $List<$Tuple<number, number>>;
    }
    /**
     * Values that may be interpreted as {@link $EnumBeerVariety}.
     */
    export type $EnumBeerVariety_ = "soup" | "white" | "prefixless" | "dark" | "black" | "blackstuff";
    export class $EnumTimeVariety extends $Enum<$EnumTimeVariety> {
        static values(): $EnumTimeVariety[];
        static valueOf(arg0: string): $EnumTimeVariety;
        static getVarietyFromTime(arg0: number): $EnumTimeVariety;
        getTime(): number;
        static DRAGONBLOOD: $EnumTimeVariety;
        static YOUNGSTER: $EnumTimeVariety;
        static ALE: $EnumTimeVariety;
        static BREW: $EnumTimeVariety;
        static BEER: $EnumTimeVariety;
        static BLACK_STUFF: $EnumTimeVariety;
        get time(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTimeVariety}.
     */
    export type $EnumTimeVariety_ = "brew" | "youngster" | "beer" | "ale" | "dragonblood" | "black_stuff";
}
