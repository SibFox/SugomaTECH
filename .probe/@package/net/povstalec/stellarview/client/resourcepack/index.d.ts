import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $Camera } from "@package/net/minecraft/client";
import { $SpaceObject } from "@package/net/povstalec/stellarview/api/common/space_objects";
import { $Runnable_ } from "@package/java/lang";
import { $HashMap, $List, $List_ } from "@package/java/util";
import { $AxisRotation, $MinMax, $SpaceCoords, $Color$IntRGBA, $UV$Quad } from "@package/net/povstalec/stellarview/common/util";
import { $ViewObjectRenderer, $SpaceObjectRenderer } from "@package/net/povstalec/stellarview/client/render/space_objects";
import { $Matrix4f, $Vector3f } from "@package/org/joml";
import { $MeteorEffect$ShootingStar, $MeteorEffect$MeteorShower } from "@package/net/povstalec/stellarview/client/resourcepack/effects";
export * as effects from "@package/net/povstalec/stellarview/client/resourcepack/effects";

declare module "@package/net/povstalec/stellarview/client/resourcepack" {
    export class $ViewCenter$Stars {
        ignoreFog(): boolean;
        duringDay(): boolean;
        ignoreRain(): boolean;
        static CODEC: $Codec<$ViewCenter$Stars>;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean);
        constructor();
    }
    export class $ViewCenter {
        addCoords(arg0: $SpaceCoords): void;
        addCoords(arg0: $Vector3f): void;
        isStatic(): boolean;
        getCoords(): $SpaceCoords;
        fog(): $ViewCenter$Fog;
        ticks(): number;
        renderSky(arg0: $ClientLevel, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $Camera, arg5: $Matrix4f, arg6: boolean, arg7: $Runnable_): boolean;
        stars(): $ViewCenter$Stars;
        getAxisRotation(): $AxisRotation;
        setViewObjectRenderer(arg0: $ViewObjectRenderer<never>): void;
        setViewObjectRenderer(arg0: $HashMap<$ResourceLocation_, $SpaceObjectRenderer<never>>): boolean;
        starBrightness(): number;
        renderSkyObjects(arg0: $SpaceObjectRenderer<any>, arg1: $ClientLevel, arg2: number, arg3: $Matrix4f, arg4: $Camera, arg5: $Matrix4f, arg6: boolean, arg7: $Runnable_, arg8: $Tesselator): void;
        objectEquals(arg0: $SpaceObjectRenderer<any>): boolean;
        dayTicks(): number;
        subCoords(arg0: $SpaceCoords): void;
        getShootingStar(): $MeteorEffect$ShootingStar;
        dayBlending(): $ViewCenter$DayBlending;
        getRotationPeriod(): number;
        sunDayBlending(): $ViewCenter$DayBlending;
        getZRotation(arg0: $ClientLevel, arg1: $Camera, arg2: number): number;
        dayTickDifference(): number;
        getViewCenterKey(): ($ResourceKey<$SpaceObject>) | undefined;
        tickDifference(): number;
        getSkyboxes(): ($List<$Skybox>) | undefined;
        getMeteorShower(): $MeteorEffect$MeteorShower;
        getObjectAxisRotation(): $AxisRotation;
        dustCloudBrightness(): number;
        overrideMeteorShowerRarity(): number;
        overrideShootingStarRarity(): number;
        overrideMeteorEffects(): boolean;
        zRotationMultiplier(): number;
        static CODEC: $Codec<$ViewCenter>;
        static DAY_MAX_BRIGHTNESS: number;
        static DAY_MIN_VISIBLE_SIZE: number;
        createVoid: boolean;
        static DAY_MAX_VISIBLE_SIZE: number;
        createHorizon: boolean;
        constructor(arg0: ($ResourceKey_<$SpaceObject>) | undefined, arg1: ($List_<$Skybox>) | undefined, arg2: $AxisRotation, arg3: number, arg4: $ViewCenter$DayBlending, arg5: $ViewCenter$DayBlending, arg6: ($MeteorEffect$ShootingStar) | undefined, arg7: ($MeteorEffect$MeteorShower) | undefined, arg8: boolean, arg9: boolean, arg10: $ViewCenter$Stars, arg11: $ViewCenter$Fog, arg12: number);
        get static(): boolean;
        get coords(): $SpaceCoords;
        get axisRotation(): $AxisRotation;
        get shootingStar(): $MeteorEffect$ShootingStar;
        get rotationPeriod(): number;
        get viewCenterKey(): ($ResourceKey<$SpaceObject>) | undefined;
        get skyboxes(): ($List<$Skybox>) | undefined;
        get meteorShower(): $MeteorEffect$MeteorShower;
        get objectAxisRotation(): $AxisRotation;
    }
    export class $Skybox$SkyboxFacade {
        texture(): $ResourceLocation;
        rgba(): $Color$IntRGBA;
        uv(): $UV$Quad;
        static CODEC: $Codec<$Skybox$SkyboxFacade>;
        constructor(arg0: $ResourceLocation_, arg1: $UV$Quad, arg2: $Color$IntRGBA);
    }
    export class $ViewCenter$DayBlending {
        dayMinVisibleSize(): number;
        dayMaxVisibleSize(): number;
        dayMaxBrightness(): number;
        dayVisibleRange(): number;
        static SUN_DAY_BLENDING: $ViewCenter$DayBlending;
        static CODEC: $Codec<$ViewCenter$DayBlending>;
        static DAY_BLENDING: $ViewCenter$DayBlending;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $ViewCenter$Fog {
        isFoggyAt(arg0: number, arg1: number): boolean;
        static CODEC: $Codec<$ViewCenter$Fog>;
        constructor(arg0: $List_<$MinMax>);
        constructor();
    }
    export class $Skybox {
        render(arg0: $ClientLevel, arg1: number, arg2: $Matrix4f, arg3: $Tesselator): void;
        topFacade(): $Skybox$SkyboxFacade;
        eastFacade(): $Skybox$SkyboxFacade;
        westFacade(): $Skybox$SkyboxFacade;
        northFacade(): $Skybox$SkyboxFacade;
        southFacade(): $Skybox$SkyboxFacade;
        bottomFacade(): $Skybox$SkyboxFacade;
        static DEFAULT_DISTANCE: number;
        static CODEC: $Codec<$Skybox>;
        static BOX_COORDS: $Vector3f[][];
        constructor(arg0: $Skybox$SkyboxFacade, arg1: $Skybox$SkyboxFacade, arg2: $Skybox$SkyboxFacade, arg3: $Skybox$SkyboxFacade, arg4: $Skybox$SkyboxFacade, arg5: $Skybox$SkyboxFacade);
    }
}
