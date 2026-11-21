import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ArrayList, $Random, $List_ } from "@package/java/util";
import { $AxisRotation, $TextureLayer, $SpaceCoords, $Color$IntRGB, $SpaceCoords$SpaceDistance, $StellarCoordinates$Equatorial } from "@package/net/povstalec/stellarview/common/util";
import { $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/net/povstalec/stellarview/api/common/space_objects" {
    export class $OrbitingObject$OrbitInfo implements $INBTSerializable<$CompoundTag> {
        periapsis(): number;
        apoapsis(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setupSweep(): void;
        static approximateEccentricAnomaly(arg0: number, arg1: number, arg2: number): number;
        orbitalPeriod(): $OrbitingObject$OrbitalPeriod;
        inclination(): number;
        getOrbitVector(arg0: number, arg1: number, arg2: number): $Vector3f;
        getOrbitVector(arg0: number, arg1: number): $Vector3f;
        orbitClampNumber(): number;
        eccentricity(): number;
        meanAnomaly(arg0: number, arg1: number): number;
        orbitMatrix(): $Matrix4f;
        movementMatrix(arg0: number): $Matrix4f;
        eccentricAnomaly(arg0: number, arg1: number): number;
        getOrbitMatrix(): $Matrix4f;
        epochMeanAnomaly(): number;
        longtitudeOfAscendingNode(): number;
        argumentOfPeriapsis(): number;
        static CODEC: $Codec<$OrbitingObject$OrbitInfo>;
        static INCLINATION: string;
        static APOAPSIS: string;
        static EPOCH_MEAN_ANOMALY: string;
        static PERIAPSIS: string;
        static ARGUMENT_OF_PERIAPSIS: string;
        static LONGITUDE_OF_ASCENDING_NODE: string;
        static ORBIT_CLAMP_DISTANCE: string;
        static ORBITAL_PERIOD: string;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: $OrbitingObject$OrbitalPeriod, arg4: number, arg5: number, arg6: number, arg7: number);
    }
    export class $StarLike$StarType implements $INBTSerializable<$CompoundTag> {
        getRGB(): $Color$IntRGB;
        getWeight(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        randomSize(arg0: $Random): number;
        randomBrightness(arg0: $Random): number;
        getMaxVisibleDistance(): number;
        static MIN_SIZE: string;
        static MIN_BRIGHTNESS: string;
        static CODEC: $Codec<$StarLike$StarType>;
        static MAX_SIZE: string;
        maxVisibleDistance: number;
        static MAX_BRIGHTNESS: string;
        weight: number;
        static RGB: string;
        static WEIGHT: string;
        static MAX_VISIBLE_DISTANCE: string;
        constructor();
        constructor(arg0: $Color$IntRGB, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $OrbitingObject extends $TexturedObject {
        setupSynodicOrbit(arg0: $OrbitingObject$OrbitalPeriod | null): void;
        orbitInfo(): $OrbitingObject$OrbitInfo;
        static INITIAL_ORBIT_VECTOR: $Vector3f;
        static CODEC: $Codec<$OrbitingObject>;
        static SPACE_OBJECT_LOCATION: $ResourceLocation;
        static FADE_OUT_HANDLER: string;
        static PARENT: string;
        static REGISTRY_KEY: $ResourceKey<$Registry<$SpaceObject>>;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$SpaceObject>>;
        static TEXTURE_LAYERS: string;
        static ID: string;
        static AXIS_ROTATION: string;
        static ORBIT_INFO: string;
        static COORDS: string;
        constructor();
        constructor(arg0: ($SpaceObject$ParentInfo) | undefined, arg1: $Either<$SpaceCoords, $StellarCoordinates$Equatorial>, arg2: $AxisRotation, arg3: ($OrbitingObject$OrbitInfo) | undefined, arg4: $List_<$TextureLayer>, arg5: $TexturedObject$FadeOutHandler);
        set upSynodicOrbit(value: $OrbitingObject$OrbitalPeriod | null);
    }
    export class $SpaceObject$ParentInfo implements $INBTSerializable<$CompoundTag> {
        relative(): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        parentLocation(): $ResourceLocation;
        static CODEC: $Codec<$SpaceObject$ParentInfo>;
        static RELATIVE: string;
        static PARENT_LOCATION: string;
        constructor();
        constructor(arg0: $ResourceLocation_, arg1: boolean);
    }
    export class $ViewObject extends $OrbitingObject {
        static INITIAL_ORBIT_VECTOR: $Vector3f;
        static CODEC: $Codec<$OrbitingObject>;
        static SPACE_OBJECT_LOCATION: $ResourceLocation;
        static FADE_OUT_HANDLER: string;
        static PARENT: string;
        static REGISTRY_KEY: $ResourceKey<$Registry<$SpaceObject>>;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$SpaceObject>>;
        static TEXTURE_LAYERS: string;
        static ID: string;
        static AXIS_ROTATION: string;
        static ORBIT_INFO: string;
        static COORDS: string;
        constructor();
        constructor(arg0: ($SpaceObject$ParentInfo) | undefined, arg1: $Either<$SpaceCoords, $StellarCoordinates$Equatorial>, arg2: $AxisRotation, arg3: ($OrbitingObject$OrbitInfo) | undefined, arg4: $List_<$TextureLayer>, arg5: $TexturedObject$FadeOutHandler);
    }
    export class $SpaceObject implements $INBTSerializable<$CompoundTag> {
        getParent(): ($SpaceObject) | undefined;
        isRelative(): boolean;
        getChildren(): $ArrayList<$SpaceObject>;
        addParent(arg0: $SpaceObject): void;
        getCoords(): $SpaceCoords;
        addChild(arg0: $SpaceObject): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        addChildRaw(arg0: $SpaceObject): boolean;
        getAxisRotation(): $AxisRotation;
        getParentInfo(): ($SpaceObject$ParentInfo) | undefined;
        static distanceSize(arg0: number): number;
        setPosAndRotation(arg0: $SpaceCoords, arg1: $AxisRotation): void;
        getParentLocation(): $ResourceLocation;
        setResourceLocation(arg0: $ResourceLocation_): void;
        static SPACE_OBJECT_LOCATION: $ResourceLocation;
        static PARENT: string;
        static REGISTRY_KEY: $ResourceKey<$Registry<$SpaceObject>>;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$SpaceObject>>;
        static ID: string;
        static AXIS_ROTATION: string;
        static COORDS: string;
        constructor();
        constructor(arg0: ($SpaceObject$ParentInfo) | undefined, arg1: $Either<$SpaceCoords, $StellarCoordinates$Equatorial>, arg2: $AxisRotation);
        get parent(): ($SpaceObject) | undefined;
        get relative(): boolean;
        get children(): $ArrayList<$SpaceObject>;
        get coords(): $SpaceCoords;
        get axisRotation(): $AxisRotation;
        get parentInfo(): ($SpaceObject$ParentInfo) | undefined;
        get parentLocation(): $ResourceLocation;
        set resourceLocation(value: $ResourceLocation_);
    }
    export class $OrbitingObject$OrbitalPeriod implements $INBTSerializable<$CompoundTag> {
        orbits(): number;
        synodic(): boolean;
        frequency(): number;
        ticks(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        updateFromParentPeriod(arg0: $OrbitingObject$OrbitalPeriod | null): void;
        static SYNODIC: string;
        static CODEC: $Codec<$OrbitingObject$OrbitalPeriod>;
        static TICKS: string;
        static ORBITS: string;
        constructor();
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $TexturedObject extends $SpaceObject {
        fadeOut(arg0: number): number;
        getTextureLayers(): $ArrayList<$TextureLayer>;
        getFadeOutHandler(): $TexturedObject$FadeOutHandler;
        static SPACE_OBJECT_LOCATION: $ResourceLocation;
        static FADE_OUT_HANDLER: string;
        static PARENT: string;
        static REGISTRY_KEY: $ResourceKey<$Registry<$SpaceObject>>;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$SpaceObject>>;
        static TEXTURE_LAYERS: string;
        static ID: string;
        static AXIS_ROTATION: string;
        static COORDS: string;
        constructor();
        constructor(arg0: ($SpaceObject$ParentInfo) | undefined, arg1: $Either<$SpaceCoords, $StellarCoordinates$Equatorial>, arg2: $AxisRotation, arg3: $List_<$TextureLayer>, arg4: $TexturedObject$FadeOutHandler);
        get textureLayers(): $ArrayList<$TextureLayer>;
        get fadeOutHandler(): $TexturedObject$FadeOutHandler;
    }
    export class $TexturedObject$FadeOutHandler implements $INBTSerializable<$CompoundTag> {
        getMaxChildRenderDistance(): $SpaceCoords$SpaceDistance;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getFadeOutEndDistance(): $SpaceCoords$SpaceDistance;
        getFadeOutStartDistance(): $SpaceCoords$SpaceDistance;
        static CODEC: $Codec<$TexturedObject$FadeOutHandler>;
        static FADE_OUT_END_DISTANCE: string;
        static DEFAULT_NEBULA_HANDLER: $TexturedObject$FadeOutHandler;
        static DEFAULT_STAR_HANDLER: $TexturedObject$FadeOutHandler;
        static FADE_OUT_START_DISTANCE: string;
        static MAX_CHILD_RENDER_DISTANCE: string;
        static DEFAULT_PLANET_HANDLER: $TexturedObject$FadeOutHandler;
        constructor();
        constructor(arg0: $SpaceCoords$SpaceDistance, arg1: $SpaceCoords$SpaceDistance, arg2: $SpaceCoords$SpaceDistance);
        get maxChildRenderDistance(): $SpaceCoords$SpaceDistance;
        get fadeOutEndDistance(): $SpaceCoords$SpaceDistance;
        get fadeOutStartDistance(): $SpaceCoords$SpaceDistance;
    }
}
