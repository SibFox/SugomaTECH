import { $ViewCenter } from "@package/net/povstalec/stellarview/client/resourcepack";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StarLike$StarType } from "@package/net/povstalec/stellarview/api/common/space_objects";
import { $Enum } from "@package/java/lang";
import { $Random, $List, $List_ } from "@package/java/util";
import { $Quaterniond, $Quaternionf, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/net/povstalec/stellarview/common/util" {
    export class $UV {
        v(arg0: number): number;
        v(): number;
        u(arg0: number): number;
        u(): number;
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_, arg1: $UV$PhaseHandler): $UV;
        static CODEC: $Codec<$UV>;
        static U: string;
        static V: string;
        constructor(arg0: $UV$PhaseHandler | null, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number);
    }
    export class $SpaceCoords implements $INBTSerializable<$CompoundTag> {
        add(arg0: $Vector3f): $SpaceCoords;
        add(arg0: number, arg1: number, arg2: number): $SpaceCoords;
        add(arg0: $SpaceCoords): $SpaceCoords;
        x(): $SpaceCoords$SpaceDistance;
        copy(): $SpaceCoords;
        z(): $SpaceCoords$SpaceDistance;
        y(): $SpaceCoords$SpaceDistance;
        distance(arg0: $SpaceCoords): number;
        sub(arg0: $SpaceCoords): $SpaceCoords;
        sub(arg0: $Vector3f): $SpaceCoords;
        static getQuaterniond(arg0: $ClientLevel, arg1: $ViewCenter, arg2: number): $Quaterniond;
        lyDistanceSquared(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        distanceSquared(arg0: $SpaceCoords): number;
        distanceToCenter(): number;
        skyPosition(arg0: $ClientLevel, arg1: $ViewCenter, arg2: number, arg3: number, arg4: boolean): $SphericalCoords;
        skyPosition(arg0: $ClientLevel, arg1: $ViewCenter, arg2: number, arg3: boolean): $SphericalCoords;
        static getQuaternionf(arg0: $ClientLevel, arg1: $ViewCenter, arg2: number): $Quaternionf;
        distanceToCenterSquared(): number;
        static KM_PER_LY: number;
        static CODEC: $Codec<$SpaceCoords>;
        static X: string;
        static NULL_COORDS: $SpaceCoords;
        static Y: string;
        static Z: string;
        static LIGHT_SPEED: number;
        static MAX_KM_VALUE: number;
        constructor();
        constructor(arg0: $Vector3f);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $SpaceCoords$SpaceDistance, arg1: $SpaceCoords$SpaceDistance, arg2: $SpaceCoords$SpaceDistance);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $TextureLayer implements $INBTSerializable<$CompoundTag> {
        shoulBlend(): boolean;
        mulSize(arg0: number): number;
        size(): number;
        maxSize(): number;
        rotation(arg0: number): number;
        rotation(): number;
        minSize(): number;
        texture(): $ResourceLocation;
        rgba(): $Color$FloatRGBA;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        uv(): $UV$Quad;
        clampAtMaxSize(): boolean;
        clampAtMinSize(): boolean;
        static ROTATION: string;
        static MAX_VISUAL_SIZE: number;
        static CODEC: $Codec<$TextureLayer>;
        static MIN_VISUAL_SIZE: number;
        static SIZE: string;
        static MAX_SIZE: string;
        static CLAMP_AT_MIN_SIZE: string;
        static TEXTURE: string;
        static RGBA: string;
        static MIN_SIZE: string;
        static BLEND: string;
        static UV_QUAD: string;
        static CLAMP_AT_MAX_SIZE: string;
        constructor();
        constructor(arg0: $ResourceLocation_, arg1: $Color$FloatRGBA, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean, arg8: number, arg9: $UV$Quad);
    }
    export class $UV$PhaseHandler {
        doPhases(): boolean;
        v(arg0: number): number;
        u(arg0: number): number;
        rows(): number;
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $UV$PhaseHandler;
        phase(arg0: number): number;
        columns(): number;
        static TICKS_PER_PHASE: string;
        static CODEC: $Codec<$UV$PhaseHandler>;
        static COLUMNS: string;
        static DEFAULT_PHASE_HANDLER: $UV$PhaseHandler;
        static PHASE_TICK_OFFSET: string;
        static ROWS: string;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $StellarCoordinates$Galactic {
        toSpaceCoords(): $SpaceCoords;
        distance: $SpaceCoords$SpaceDistance;
        galacticLongtitude: number;
        galacticLatitude: number;
        constructor(arg0: number, arg1: number, arg2: $SpaceCoords$SpaceDistance);
    }
    export class $SphericalCoords {
        static cartesianZ(arg0: $SphericalCoords): number;
        static cartesianX(arg0: $SphericalCoords): number;
        static sphericalR(arg0: $Vector3d): number;
        static sphericalR(arg0: $Vector3f): number;
        static cartesianY(arg0: $SphericalCoords): number;
        static sphericalTheta(arg0: $Vector3d): number;
        static sphericalTheta(arg0: $Vector3f): number;
        static sphericalPhi(arg0: $Vector3f): number;
        static sphericalPhi(arg0: $Vector3d): number;
        toCartesianF(): $Vector3f;
        toCartesianD(): $Vector3d;
        static cartesianToSpherical(arg0: $Vector3f): $SphericalCoords;
        static cartesianToSpherical(arg0: $Vector3d): $SphericalCoords;
        static sphericalToCartesianD(arg0: $SphericalCoords): $Vector3d;
        static sphericalToCartesianF(arg0: $SphericalCoords): $Vector3f;
        phi: number;
        r: number;
        theta: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $Vector3f);
        constructor(arg0: $Vector3f, arg1: number);
        constructor(arg0: $Vector3d);
        constructor(arg0: $Vector3d, arg1: number);
    }
    export class $Color$FloatRGB implements $INBTSerializable<$CompoundTag> {
        red(): number;
        green(): number;
        blue(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        setGreen(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number);
        constructor();
    }
    export class $Color$IntRGB implements $INBTSerializable<$CompoundTag> {
        red(): number;
        green(): number;
        blue(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        setGreen(arg0: number): void;
        static CODEC: $Codec<$Color$IntRGB>;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number);
        constructor();
    }
    export class $SpaceCoords$SpaceDistance implements $INBTSerializable<$CompoundTag> {
        static lyToKm(arg0: number): number;
        toLy(): number;
        static kmToLy(arg0: number): number;
        add(arg0: number): $SpaceCoords$SpaceDistance;
        add(arg0: $SpaceCoords$SpaceDistance): $SpaceCoords$SpaceDistance;
        add(arg0: number): $SpaceCoords$SpaceDistance;
        copy(): $SpaceCoords$SpaceDistance;
        km(): number;
        sub(arg0: number): $SpaceCoords$SpaceDistance;
        sub(arg0: number): $SpaceCoords$SpaceDistance;
        sub(arg0: $SpaceCoords$SpaceDistance): $SpaceCoords$SpaceDistance;
        mul(arg0: number, arg1: boolean): $SpaceCoords$SpaceDistance;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        ly(): number;
        toKm(): number;
        static KM: string;
        static CODEC: $Codec<$SpaceCoords$SpaceDistance>;
        static LY: string;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: number);
    }
    export class $UV$Quad {
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $UV$Quad;
        bottomLeft(): $UV;
        topRight(): $UV;
        topLeft(): $UV;
        bottomRight(): $UV;
        static TOP_LEFT: string;
        static DEFAULT_QUAD_UV: $UV$Quad;
        static CODEC: $Codec<$UV$Quad>;
        static PHASE_HANDLER: string;
        static BOTTOM_RIGHT: string;
        static TOP_RIGHT: string;
        static FLIP_UV: string;
        static BOTTOM_LEFT: string;
        constructor(arg0: boolean);
        constructor(arg0: $UV$PhaseHandler, arg1: boolean);
        constructor(arg0: $UV$PhaseHandler, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $UV$PhaseHandler, arg1: $UV, arg2: $UV, arg3: $UV, arg4: $UV, arg5: $UV$Rotation_, arg6: boolean);
        constructor(arg0: $UV$PhaseHandler, arg1: $UV, arg2: $UV, arg3: $UV, arg4: $UV);
        constructor(arg0: $UV$PhaseHandler, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
    }
    export class $MinMax {
        getMax(): number;
        getMin(): number;
        isInBounds(arg0: number): boolean;
        static CODEC: $Codec<$MinMax>;
        constructor(arg0: number, arg1: number);
        get max(): number;
        get min(): number;
    }
    export class $AxisRotation implements $INBTSerializable<$CompoundTag> {
        add(arg0: $AxisRotation): $AxisRotation;
        add(arg0: number, arg1: number, arg2: number): $AxisRotation;
        copy(): $AxisRotation;
        sub(arg0: $AxisRotation): $AxisRotation;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        quaternionf(): $Quaternionf;
        xAxis(): number;
        zAxis(): number;
        yAxis(): number;
        quaterniond(): $Quaterniond;
        static CODEC: $Codec<$AxisRotation>;
        static Z_AXIS: string;
        static X_AXIS: string;
        static Y_AXIS: string;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number);
    }
    export class $StellarCoordinates$RightAscension {
        static toRightAscension(arg0: number, arg1: number, arg2: number): number;
        hours: number;
        seconds: number;
        static CODEC: $Codec<$StellarCoordinates$RightAscension>;
        static HOURS: string;
        minutes: number;
        static SECONDS: string;
        static MINUTES: string;
        radians: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $DustCloudInfo implements $INBTSerializable<$CompoundTag> {
        getRandomDustCloudType(arg0: $Random): $DustCloudInfo$DustCloudType;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        static WHITE_DUST_CLOUD: $DustCloudInfo$DustCloudType;
        static CODEC: $Codec<$DustCloudInfo>;
        static DUST_CLOUD_TYPES: string;
        static TOTAL_WEIGHT: string;
        static DEFAULT_DUST_CLOUDS: $List<$DustCloudInfo$DustCloudType>;
        static DEFAULT_DUST_CLOUD_INFO: $DustCloudInfo;
        constructor(arg0: $List_<$DustCloudInfo$DustCloudType>);
        constructor(arg0: $List_<$DustCloudInfo$DustCloudType>, arg1: number);
        constructor();
    }
    export class $Color$IntRGBA extends $Color$IntRGB {
        alpha(): number;
        setAlpha(arg0: number): void;
        static CODEC: $Codec<$Color$IntRGBA>;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number);
        constructor();
    }
    export class $UV$Rotation extends $Enum<$UV$Rotation> {
        static values(): $UV$Rotation[];
        static valueOf(arg0: string): $UV$Rotation;
        shiftUV(arg0: $UV[], arg1: number): $UV;
        static rotationFromUV(arg0: number, arg1: number, arg2: number, arg3: number): $UV$Rotation;
        static rotationFromInt(arg0: number): $UV$Rotation;
        static DEG_90: $UV$Rotation;
        static DEG_270: $UV$Rotation;
        static DEG_0: $UV$Rotation;
        static DEG_180: $UV$Rotation;
    }
    /**
     * Values that may be interpreted as {@link $UV$Rotation}.
     */
    export type $UV$Rotation_ = "deg_0" | "deg_90" | "deg_180" | "deg_270";
    export class $StarInfo implements $INBTSerializable<$CompoundTag> {
        lod1Weight(): number;
        lod2Weight(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        totalWeight(): number;
        randomLOD3StarType(arg0: $Random): $StarLike$StarType;
        randomLOD2StarType(arg0: $Random): $StarLike$StarType;
        randomLOD1StarType(arg0: $Random): $StarLike$StarType;
        lod3Weight(): number;
        static LOD2_TYPES: string;
        static LOD3_TYPES: string;
        static DEFAULT_STARS: $List<$StarLike$StarType>;
        static CODEC: $Codec<$StarInfo>;
        static DEFAULT_STAR_INFO: $StarInfo;
        static LOD1_TYPES: string;
        static LOD3_WEIGHT: string;
        static LOD1_WEIGHT: string;
        static LOD2_WEIGHT: string;
        static WHITE_STAR: $StarLike$StarType;
        constructor();
        constructor(arg0: $List_<$StarLike$StarType>, arg1: $List_<$StarLike$StarType>, arg2: $List_<$StarLike$StarType>, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $List_<$StarLike$StarType>);
    }
    export class $Color$FloatRGBA extends $Color$FloatRGB {
        alpha(): number;
        setAlpha(arg0: number): void;
        static CODEC: $Codec<$Color$FloatRGBA>;
        static INT_CODEC: $Codec<$Color$FloatRGBA>;
        static DEFAULT: $Color$FloatRGBA;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor();
        constructor(arg0: number);
    }
    export class $StellarCoordinates$Equatorial {
        toGalactic(): $StellarCoordinates$Galactic;
        static toGalactic(arg0: number, arg1: number, arg2: $SpaceCoords$SpaceDistance): $StellarCoordinates$Galactic;
        static DECLINATION_NGP: number;
        static L_NCP: number;
        declination: $StellarCoordinates$Declination;
        static CODEC: $Codec<$StellarCoordinates$Equatorial>;
        distance: $SpaceCoords$SpaceDistance;
        static DISTNACE: string;
        rightAscension: $StellarCoordinates$RightAscension;
        static RIGHT_ASCENSION_NGP: number;
        static RIGHT_ASCENSION: string;
        static DECLINATION: string;
        constructor(arg0: $StellarCoordinates$RightAscension, arg1: $StellarCoordinates$Declination, arg2: $SpaceCoords$SpaceDistance);
    }
    export class $StellarCoordinates$Declination {
        static isNegative(arg0: number): boolean;
        static toDeclination(arg0: number, arg1: number, arg2: number): number;
        seconds: number;
        static DEGREES: string;
        static CODEC: $Codec<$StellarCoordinates$Declination>;
        minutes: number;
        static SECONDS: string;
        static MINUTES: string;
        radians: number;
        degrees: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $DustCloudInfo$DustCloudType implements $INBTSerializable<$CompoundTag> {
        getRGB(): $Color$IntRGB;
        getWeight(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        randomSize(arg0: $Random): number;
        randomBrightness(arg0: $Random): number;
        static MIN_SIZE: string;
        static MIN_BRIGHTNESS: string;
        static CODEC: $Codec<$DustCloudInfo$DustCloudType>;
        static MAX_SIZE: string;
        static MAX_BRIGHTNESS: string;
        weight: number;
        static RGB: string;
        static WEIGHT: string;
        constructor();
        constructor(arg0: $Color$IntRGB, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
}
