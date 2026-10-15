import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/io/github/mortuusars/exposure/util/color" {
    export class $Color$Unbounded extends $Record {
        clamp(): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color$Unbounded;
        constructor(r: number, g: number, b: number, a: number);
    }
    /**
     * Values that may be interpreted as {@link $Color$Unbounded}.
     */
    export type $Color$Unbounded_ = { a?: number, r?: number, b?: number, g?: number,  } | [a?: number, r?: number, b?: number, g?: number, ];
    export class $Color extends $Record {
        static clamp(channel: number): number;
        add(other: $Color_): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color;
        static red(argb: number): number;
        getRGB(): number;
        static rgb(r: number, g: number, b: number): $Color;
        static rgb(rgb: number): $Color;
        subtract(other: $Color_): $Color;
        static pack(alpha: number, red: number, green: number, blue: number): number;
        getG(): number;
        getA(): number;
        getB(): number;
        static green(argb: number): number;
        static blue(argb: number): number;
        static argb(a: number, r: number, g: number, b: number): $Color;
        static argb(argb: number): $Color;
        static alpha(argb: number): number;
        addUnbounded(other: $Color$Unbounded_): $Color$Unbounded;
        addUnbounded(other: $Color_): $Color$Unbounded;
        subtractUnbounded(other: $Color_): $Color$Unbounded;
        asHexString(): string;
        withAlpha(alpha: number): $Color;
        squaredDifferenceTo(argb: number): number;
        squaredDifferenceTo(color: $Color_): number;
        getARGB(): number;
        static redF(argb: number): number;
        getBF(): number;
        withAlphaF(alpha: number): $Color;
        static abgr(abgr: number): $Color;
        getBGR(): number;
        static greenF(argb: number): number;
        getR(): number;
        static blueF(argb: number): number;
        static bgr(bgr: number): $Color;
        getRF(): number;
        getAF(): number;
        static rgbF(r: number, g: number, b: number): $Color;
        getABGR(): number;
        getGF(): number;
        static argbF(a: number, r: number, g: number, b: number): $Color;
        static alphaF(argb: number): number;
        static fromHex(hexColor: string): $Color;
        static ARGBtoABGR(ARGB: number): number;
        static ABGRtoARGB(ABGR: number): number;
        static WHITE: $Color;
        static CODEC: $Codec<$Color>;
        static HEX_STRING_CODEC: $Codec<$Color>;
        static BLACK: $Color;
        static TRANSPARENT: $Color;
        constructor(a: number, r: number, g: number, b: number);
        get RGB(): number;
        get ARGB(): number;
        get BF(): number;
        get BGR(): number;
        get RF(): number;
        get AF(): number;
        get ABGR(): number;
        get GF(): number;
    }
    /**
     * Values that may be interpreted as {@link $Color}.
     */
    export type $Color_ = { a?: number, r?: number, b?: number, g?: number,  } | [a?: number, r?: number, b?: number, g?: number, ];
}
