import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        static undefined(): $StyleLength;
        static points(arg0: number): $StyleLength;
        isUndefined(): boolean;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        static ofAuto(): $StyleLength;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        inexactEquals(arg0: $StyleLength): boolean;
        asYogaValue(): $YogaValue;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        static undefined(): $StyleSizeLength;
        static points(arg0: number): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        isUndefined(): boolean;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        isStretch(): boolean;
        static ofAuto(): $StyleSizeLength;
        static ofFitContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        asYogaValue(): $YogaValue;
        static ofMaxContent(): $StyleSizeLength;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get auto(): boolean;
        get stretch(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
    }
}
