import { $ViewCenter } from "@package/net/povstalec/stellarview/client/resourcepack";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";
import { $ArrayList, $List, $List_ } from "@package/java/util";
import { $TextureLayer, $Color$FloatRGBA, $SphericalCoords, $UV$Quad } from "@package/net/povstalec/stellarview/common/util";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/povstalec/stellarview/client/resourcepack/effects" {
    export class $MeteorEffect$ShootingStar extends $MeteorEffect {
        static DEFAULT_DISTANCE: number;
        static UV: $UV$Quad;
        static CODEC: $Codec<$MeteorEffect$ShootingStar>;
        static SPHERICAL_START: $SphericalCoords;
        constructor(arg0: $List_<$MeteorEffect$MeteorType>, arg1: number);
        constructor();
    }
    export class $MeteorEffect$MeteorShower extends $MeteorEffect {
        static DEFAULT_DISTANCE: number;
        static UV: $UV$Quad;
        static CODEC: $Codec<$MeteorEffect$MeteorShower>;
        static SPHERICAL_START: $SphericalCoords;
        constructor(arg0: $List_<$MeteorEffect$MeteorType>, arg1: number);
        constructor();
    }
    export class $MeteorEffect$MeteorType {
        getWeight(): number;
        render(arg0: $Tesselator, arg1: $Matrix4f, arg2: $SphericalCoords, arg3: $Color$FloatRGBA, arg4: number, arg5: number, arg6: number): void;
        getTextureLayers(): $ArrayList<$TextureLayer>;
        static CODEC: $Codec<$MeteorEffect$MeteorType>;
        constructor(arg0: $List_<$TextureLayer>, arg1: number);
        get weight(): number;
        get textureLayers(): $ArrayList<$TextureLayer>;
    }
    export class $MeteorEffect {
        render(arg0: $ViewCenter, arg1: $ClientLevel, arg2: $Camera, arg3: number, arg4: $Matrix4f, arg5: $Tesselator, arg6: number, arg7: number, arg8: number, arg9: $MeteorEffect$MeteorType, arg10: number, arg11: number): void;
        render(arg0: $ViewCenter, arg1: $ClientLevel, arg2: $Camera, arg3: number, arg4: $Matrix4f, arg5: $Tesselator): void;
        rgba(arg0: $ViewCenter, arg1: $ClientLevel, arg2: $Camera, arg3: number, arg4: number): $Color$FloatRGBA;
        getRarity(): number;
        getRarity(arg0: $ViewCenter): number;
        canRender(arg0: $ViewCenter): boolean;
        getMeteorTypes(): $List<$MeteorEffect$MeteorType>;
        static DEFAULT_DISTANCE: number;
        static UV: $UV$Quad;
        static SPHERICAL_START: $SphericalCoords;
        constructor(arg0: $List_<$MeteorEffect$MeteorType>, arg1: number);
        get meteorTypes(): $List<$MeteorEffect$MeteorType>;
    }
}
