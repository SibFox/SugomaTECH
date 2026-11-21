import { $ColorPalette } from "@package/io/github/mortuusars/exposure/data";
import { $DitherMode, $DitherMode_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ExposureType, $ExposureType_ } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/film/properties" {
    export class $Levels extends $Record {
        white(): number;
        black(): number;
        midtones(): number;
        highlights(): number;
        shadows(): number;
        static CODEC: $Codec<$Levels>;
        static EMPTY: $Levels;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Levels>;
        constructor(shadows: number, midtones: number, highlights: number, black: number, white: number);
    }
    /**
     * Values that may be interpreted as {@link $Levels}.
     */
    export type $Levels_ = { midtones?: number, highlights?: number, white?: number, shadows?: number, black?: number,  } | [midtones?: number, highlights?: number, white?: number, shadows?: number, black?: number, ];
    export class $HSB extends $Record {
        saturation(): number;
        hue(): number;
        brightness(): number;
        static CODEC: $Codec<$HSB>;
        static EMPTY: $HSB;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $HSB>;
        constructor(hue: number, saturation: number, brightness: number);
    }
    /**
     * Values that may be interpreted as {@link $HSB}.
     */
    export type $HSB_ = { saturation?: number, brightness?: number, hue?: number,  } | [saturation?: number, brightness?: number, hue?: number, ];
    export class $ColorBalance extends $Record {
        b(): number;
        g(): number;
        r(): number;
        static CODEC: $Codec<$ColorBalance>;
        static EMPTY: $ColorBalance;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ColorBalance>;
        constructor(r: number, g: number, b: number);
    }
    /**
     * Values that may be interpreted as {@link $ColorBalance}.
     */
    export type $ColorBalance_ = { r?: number, g?: number, b?: number,  } | [r?: number, g?: number, b?: number, ];
    export class $FilmProperties extends $Record {
        getSize(): number;
        size(): (number) | undefined;
        type(): $ExposureType;
        style(): $FilmStyle;
        getColorPalette(access: $RegistryAccess): $Holder<$ColorPalette>;
        withStyle(style: $FilmStyle_): $FilmProperties;
        withType(type: $ExposureType_): $FilmProperties;
        withSize(size: number): $FilmProperties;
        withColorPalette(colorPalette: $ResourceKey_<$ColorPalette>): $FilmProperties;
        withDitherMode(ditherMode: $DitherMode_): $FilmProperties;
        colorPalette(): $ResourceKey<$ColorPalette>;
        ditherMode(): $DitherMode;
        static CODEC: $Codec<$FilmProperties>;
        static EMPTY: $FilmProperties;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FilmProperties>;
        constructor(type: $ExposureType_, size: (number) | undefined, colorPalette: $ResourceKey_<$ColorPalette>, ditherMode: $DitherMode_, style: $FilmStyle_);
    }
    /**
     * Values that may be interpreted as {@link $FilmProperties}.
     */
    export type $FilmProperties_ = { type?: $ExposureType_, style?: $FilmStyle_, colorPalette?: $ResourceKey_<$ColorPalette>, size?: (number) | undefined, ditherMode?: $DitherMode_,  } | [type?: $ExposureType_, style?: $FilmStyle_, colorPalette?: $ResourceKey_<$ColorPalette>, size?: (number) | undefined, ditherMode?: $DitherMode_, ];
    export class $FilmStyle extends $Record {
        static create(): $FilmStyle;
        levels(): $Levels;
        colorBalance(): $ColorBalance;
        noise(): number;
        hsb(): $HSB;
        contrast(): number;
        withLevels(levels: $Levels_): $FilmStyle;
        withHSB(hsb: $HSB_): $FilmStyle;
        sensitivity(): number;
        withNoise(noise: number): $FilmStyle;
        withSensitivity(sensitivity: number): $FilmStyle;
        withColorBalance(colorBalance: $ColorBalance_): $FilmStyle;
        withContrast(contrast: number): $FilmStyle;
        static CODEC: $Codec<$FilmStyle>;
        static EMPTY: $FilmStyle;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FilmStyle>;
        constructor(sensitivity: number, contrast: number, levels: $Levels_, hsb: $HSB_, colorBalance: $ColorBalance_, noise: number);
    }
    /**
     * Values that may be interpreted as {@link $FilmStyle}.
     */
    export type $FilmStyle_ = { sensitivity?: number, levels?: $Levels_, noise?: number, colorBalance?: $ColorBalance_, contrast?: number, hsb?: $HSB_,  } | [sensitivity?: number, levels?: $Levels_, noise?: number, colorBalance?: $ColorBalance_, contrast?: number, hsb?: $HSB_, ];
}
