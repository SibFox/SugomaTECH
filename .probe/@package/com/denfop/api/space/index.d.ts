import { $IColonyNet } from "@package/com/denfop/api/space/colonies/api";
import { $IResearchSystem } from "@package/com/denfop/api/space/research/api";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $IFakeSpaceSystemBase } from "@package/com/denfop/api/space/fakebody";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $EnumTypeRovers, $EnumTypeRovers_ } from "@package/com/denfop/api/space/rovers/enums";
import { $Enum, $Runnable } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
export * as dimension from "@package/com/denfop/api/space/dimension";
export * as colonies from "@package/com/denfop/api/space/colonies";
export * as research from "@package/com/denfop/api/space/research";
export * as fakebody from "@package/com/denfop/api/space/fakebody";
export * as rovers from "@package/com/denfop/api/space/rovers";
export * as upgrades from "@package/com/denfop/api/space/upgrades";

declare module "@package/com/denfop/api/space" {
    export class $IPlanet {
    }
    export interface $IPlanet extends $IBody {
        getResource(): $ResourceLocation;
        getType(): $EnumType;
        getLevels(): $EnumLevels;
        getTemperature(): number;
        getPressure(): boolean;
        getSatelliteList(): $List<$ISatellite>;
        getDistanceFromStar(): number;
        getStar(): $IStar;
        canHaveColonies(): boolean;
        hasOxygen(): boolean;
        getRing(): $EnumRing;
        get resource(): $ResourceLocation;
        get type(): $EnumType;
        get levels(): $EnumLevels;
        get temperature(): number;
        get pressure(): boolean;
        get satelliteList(): $List<$ISatellite>;
        get distanceFromStar(): number;
        get star(): $IStar;
        get ring(): $EnumRing;
    }
    export class $Satellite implements $ISatellite {
        getSize(): number;
        getName(): string;
        getResource(): $ResourceLocation;
        getLocation(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getType(): $EnumType;
        getLevels(): $EnumLevels;
        getRotation(arg0: number): number;
        getDistance(): number;
        getTemperature(): number;
        getPressure(): boolean;
        getDistanceFromPlanet(): number;
        getRotationTimeZ(arg0: number): number;
        getOrbitPeriod(): number;
        getRotationTimeX(arg0: number): number;
        getRotationAngle(): number;
        getSystem(): $ISystem;
        canHaveColonies(): boolean;
        getPlanet(): $IPlanet;
        hasOxygen(): boolean;
        constructor(arg0: string, arg1: $ISystem, arg2: $ResourceLocation_, arg3: $EnumLevels_, arg4: $IPlanet, arg5: number, arg6: boolean, arg7: number, arg8: $EnumType_, arg9: boolean, arg10: boolean, arg11: number, arg12: number, arg13: number, arg14: number);
        get size(): number;
        get name(): string;
        get resource(): $ResourceLocation;
        get location(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get type(): $EnumType;
        get levels(): $EnumLevels;
        get distance(): number;
        get temperature(): number;
        get pressure(): boolean;
        get distanceFromPlanet(): number;
        get orbitPeriod(): number;
        get rotationAngle(): number;
        get system(): $ISystem;
        get planet(): $IPlanet;
    }
    export class $MiniAsteroid {
        getSize(): number;
        getY(): number;
        getRotationSpeed(): number;
        getZ(): number;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        setZ(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        get size(): number;
        get rotationSpeed(): number;
    }
    export class $SpaceInit {
        static reset(): void;
        static init(): void;
        static getTexture(arg0: string): $ResourceLocation;
        static jsonInit(): void;
        static saturn: $Planet;
        static kapteyn: $System;
        static cancri55: $System;
        static regSystem: $List<$Runnable>;
        static sextantis24: $System;
        static titan: $Satellite;
        static solarSystem: $System;
        static triton: $Satellite;
        static asteroids: $Asteroid;
        static io: $Satellite;
        static kepler148: $System;
        static haumea: $Planet;
        static kepler149: $System;
        static makemake: $Planet;
        static moon: $Satellite;
        static regSatellite: $List<$Runnable>;
        static uranus: $Planet;
        static titania: $Satellite;
        static regStar: $List<$Runnable>;
        static neptune: $Planet;
        static kepler186: $System;
        static eris: $Planet;
        static umbriel: $Satellite;
        static callisto: $Satellite;
        static enceladus: $Satellite;
        static mercury: $Planet;
        static regAsteroid: $List<$Runnable>;
        static tethys: $Satellite;
        static jupiter: $Planet;
        static sun: $Star;
        static venus: $Planet;
        static regBaseResource: $List<$Runnable>;
        static ganymede: $Satellite;
        static regPlanet: $List<$Runnable>;
        static ceres: $Planet;
        static europe: $Satellite;
        static oberon: $Satellite;
        static charon: $Satellite;
        static phobos: $Satellite;
        static mars: $Planet;
        static rhea: $Satellite;
        static miranda: $Satellite;
        static proteus: $Satellite;
        static pluto: $Planet;
        static deimos: $Satellite;
        static mimas: $Satellite;
        static dione: $Satellite;
        static ariel: $Satellite;
        static regColonyBaseResource: $List<$Runnable>;
        static earth: $Planet;
        constructor();
    }
    export class $ISpaceNet {
    }
    export interface $ISpaceNet {
        reset(): void;
        addResource(arg0: $IBaseResource): void;
        getColonieNet(): $IColonyNet;
        getBodyList(): $List<$IBody>;
        getSatelliteList(): $List<$ISatellite>;
        getSatelliteList(arg0: $IPlanet): $List<$ISatellite>;
        addAsteroid(arg0: $IAsteroid): void;
        addSatellite(arg0: $ISatellite): void;
        getFakeSpaceSystem(): $IFakeSpaceSystemBase;
        getBodyFromName(arg0: string): $IBody;
        getResearchSystem(): $IResearchSystem;
        getPlanetList(): $List<$IPlanet>;
        getPlanetList(arg0: $ISystem): $List<$IStar>;
        getPlanetList(arg0: $IStar): $List<$IPlanet>;
        getAsteroidList(): $List<$IAsteroid>;
        getSystem(): $List<$ISystem>;
        addStar(arg0: $IStar): void;
        addSystem(arg0: $ISystem): void;
        getBodyMap(): $Map<string, $IBody>;
        addPlanet(arg0: $IPlanet): void;
        get colonieNet(): $IColonyNet;
        get bodyList(): $List<$IBody>;
        get fakeSpaceSystem(): $IFakeSpaceSystemBase;
        get researchSystem(): $IResearchSystem;
        get asteroidList(): $List<$IAsteroid>;
        get system(): $List<$ISystem>;
        get bodyMap(): $Map<string, $IBody>;
    }
    export class $Star implements $IStar {
        getSize(): number;
        getName(): string;
        getResource(): $ResourceLocation;
        getLocation(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getRotation(arg0: number): number;
        getDistance(): number;
        getTemperature(): number;
        getPlanetList(): $List<$IPlanet>;
        getAsteroidList(): $List<$IAsteroid>;
        getRotationTimeZ(arg0: number): number;
        getOrbitPeriod(): number;
        getRotationTimeX(arg0: number): number;
        getRotationAngle(): number;
        getSystem(): $ISystem;
        constructor(arg0: string, arg1: $ISystem, arg2: $ResourceLocation_, arg3: number, arg4: number);
        get size(): number;
        get name(): string;
        get resource(): $ResourceLocation;
        get location(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get distance(): number;
        get temperature(): number;
        get planetList(): $List<$IPlanet>;
        get asteroidList(): $List<$IAsteroid>;
        get orbitPeriod(): number;
        get rotationAngle(): number;
        get system(): $ISystem;
    }
    export class $Asteroid implements $IAsteroid {
        getSize(): number;
        getName(): string;
        getResource(): $ResourceLocation;
        getLocation(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getType(): $EnumType;
        getLevels(): $EnumLevels;
        getRotation(arg0: number): number;
        getDistance(): number;
        getMaxDistance(): number;
        getTemperature(): number;
        getDistanceFromStar(): number;
        getRotationTimeZ(arg0: number): number;
        getOrbitPeriod(): number;
        getRotationTimeX(arg0: number): number;
        getRotationAngle(): number;
        getStar(): $IStar;
        getSystem(): $ISystem;
        getMinDistance(): number;
        canHaveColonies(): boolean;
        getMiniAsteroid(): $List<$MiniAsteroid>;
        constructor(arg0: string, arg1: $ISystem, arg2: $ResourceLocation_, arg3: $EnumLevels_, arg4: $IStar, arg5: number, arg6: number, arg7: $EnumType_, arg8: boolean, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number);
        get size(): number;
        get name(): string;
        get resource(): $ResourceLocation;
        get location(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get type(): $EnumType;
        get levels(): $EnumLevels;
        get distance(): number;
        get maxDistance(): number;
        get temperature(): number;
        get distanceFromStar(): number;
        get orbitPeriod(): number;
        get rotationAngle(): number;
        get star(): $IStar;
        get system(): $ISystem;
        get minDistance(): number;
        get miniAsteroid(): $List<$MiniAsteroid>;
    }
    export class $EnumLevels extends $Enum<$EnumLevels> {
        static values(): $EnumLevels[];
        static valueOf(arg0: string): $EnumLevels;
        static FIVE: $EnumLevels;
        static SIX: $EnumLevels;
        static THIRD: $EnumLevels;
        static SECOND: $EnumLevels;
        static FIRST: $EnumLevels;
        static NONE: $EnumLevels;
        static FOURTH: $EnumLevels;
        static SEVEN: $EnumLevels;
    }
    /**
     * Values that may be interpreted as {@link $EnumLevels}.
     */
    export type $EnumLevels_ = "first" | "second" | "third" | "fourth" | "five" | "six" | "seven" | "none";
    export class $IStar {
    }
    export interface $IStar extends $IBody {
        getResource(): $ResourceLocation;
        getPlanetList(): $List<$IPlanet>;
        getAsteroidList(): $List<$IAsteroid>;
        get resource(): $ResourceLocation;
        get planetList(): $List<$IPlanet>;
        get asteroidList(): $List<$IAsteroid>;
    }
    export class $ISystem {
    }
    export interface $ISystem {
        getName(): string;
        getStarList(): $List<$IStar>;
        getDistanceFromSolar(): number;
        get name(): string;
        get starList(): $List<$IStar>;
        get distanceFromSolar(): number;
    }
    export class $BaseSpaceSystem implements $ISpaceNet {
        reset(): void;
        addResource(arg0: $IBaseResource): void;
        getColonieNet(): $IColonyNet;
        getBodyList(): $List<$IBody>;
        getSatelliteList(arg0: $IPlanet): $List<$ISatellite>;
        getSatelliteList(): $List<$ISatellite>;
        addAsteroid(arg0: $IAsteroid): void;
        addSatellite(arg0: $ISatellite): void;
        getFakeSpaceSystem(): $IFakeSpaceSystemBase;
        getBodyFromName(arg0: string): $IBody;
        getResearchSystem(): $IResearchSystem;
        getPlanetList(): $List<$IPlanet>;
        getPlanetList(arg0: $IStar): $List<$IPlanet>;
        getPlanetList(arg0: $ISystem): $List<$IStar>;
        getAsteroidList(): $List<$IAsteroid>;
        getSystem(): $List<$ISystem>;
        addStar(arg0: $IStar): void;
        addSystem(arg0: $ISystem): void;
        getBodyMap(): $Map<string, $IBody>;
        addPlanet(arg0: $IPlanet): void;
        static fluidToLevel: $Map<$Fluid, number>;
        spaceSystemBase: $IFakeSpaceSystemBase;
        colonienet: $IColonyNet;
        spaceResearch: $IResearchSystem;
        static rocketFuel: $Map<number, number>;
        static rocketFuelCoef: $Map<number, number>;
        constructor();
        get colonieNet(): $IColonyNet;
        get bodyList(): $List<$IBody>;
        get fakeSpaceSystem(): $IFakeSpaceSystemBase;
        get researchSystem(): $IResearchSystem;
        get asteroidList(): $List<$IAsteroid>;
        get system(): $List<$ISystem>;
        get bodyMap(): $Map<string, $IBody>;
    }
    export class $IBody {
    }
    export interface $IBody {
        getSize(): number;
        getName(): string;
        getLocation(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getRotation(arg0: number): number;
        getDistance(): number;
        getTemperature(): number;
        getRotationTimeZ(arg0: number): number;
        getOrbitPeriod(): number;
        getRotationTimeX(arg0: number): number;
        getRotationAngle(): number;
        getSystem(): $ISystem;
        get size(): number;
        get name(): string;
        get location(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get distance(): number;
        get temperature(): number;
        get orbitPeriod(): number;
        get rotationAngle(): number;
        get system(): $ISystem;
    }
    export class $ISatellite {
    }
    export interface $ISatellite extends $IBody {
        getResource(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getType(): $EnumType;
        getLevels(): $EnumLevels;
        getTemperature(): number;
        getPressure(): boolean;
        getDistanceFromPlanet(): number;
        canHaveColonies(): boolean;
        getPlanet(): $IPlanet;
        hasOxygen(): boolean;
        get resource(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get type(): $EnumType;
        get levels(): $EnumLevels;
        get temperature(): number;
        get pressure(): boolean;
        get distanceFromPlanet(): number;
        get planet(): $IPlanet;
    }
    export class $EnumRing extends $Enum<$EnumRing> {
        static values(): $EnumRing[];
        static valueOf(arg0: string): $EnumRing;
        static VERTICAL: $EnumRing;
        static HORIZONTAL: $EnumRing;
    }
    /**
     * Values that may be interpreted as {@link $EnumRing}.
     */
    export type $EnumRing_ = "vertical" | "horizontal";
    export class $SpaceNet {
        static instance: $ISpaceNet;
        constructor();
    }
    export class $System implements $ISystem {
        getName(): string;
        getStarList(): $List<$IStar>;
        getDistanceFromSolar(): number;
        constructor(arg0: string);
        constructor(arg0: string, arg1: number);
        get name(): string;
        get starList(): $List<$IStar>;
        get distanceFromSolar(): number;
    }
    export class $Planet implements $IPlanet {
        getSize(): number;
        getName(): string;
        getResource(): $ResourceLocation;
        getLocation(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getType(): $EnumType;
        getLevels(): $EnumLevels;
        getRotation(arg0: number): number;
        getDistance(): number;
        getTemperature(): number;
        getPressure(): boolean;
        getSatelliteList(): $List<$ISatellite>;
        getDistanceFromStar(): number;
        getRotationTimeZ(arg0: number): number;
        getOrbitPeriod(): number;
        getRotationTimeX(arg0: number): number;
        getRotationAngle(): number;
        getStar(): $IStar;
        getSystem(): $ISystem;
        canHaveColonies(): boolean;
        hasOxygen(): boolean;
        getRing(): $EnumRing;
        constructor(arg0: string, arg1: $ISystem, arg2: $ResourceLocation_, arg3: $EnumLevels_, arg4: $IStar, arg5: number, arg6: boolean, arg7: number, arg8: $EnumType_, arg9: boolean, arg10: boolean, arg11: number, arg12: number, arg13: number, arg14: number);
        constructor(arg0: string, arg1: $ISystem, arg2: $ResourceLocation_, arg3: $EnumLevels_, arg4: $IStar, arg5: number, arg6: boolean, arg7: number, arg8: $EnumType_, arg9: boolean, arg10: boolean, arg11: number, arg12: number, arg13: number, arg14: number, arg15: $EnumRing_);
        get size(): number;
        get name(): string;
        get resource(): $ResourceLocation;
        get location(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get type(): $EnumType;
        get levels(): $EnumLevels;
        get distance(): number;
        get temperature(): number;
        get pressure(): boolean;
        get satelliteList(): $List<$ISatellite>;
        get distanceFromStar(): number;
        get orbitPeriod(): number;
        get rotationAngle(): number;
        get star(): $IStar;
        get system(): $ISystem;
        get ring(): $EnumRing;
    }
    export class $IAsteroid {
    }
    export interface $IAsteroid extends $IBody {
        getResource(): $ResourceLocation;
        getResources(): $List<$IBaseResource>;
        getType(): $EnumType;
        getLevels(): $EnumLevels;
        getMaxDistance(): number;
        getTemperature(): number;
        getDistanceFromStar(): number;
        getStar(): $IStar;
        getMinDistance(): number;
        canHaveColonies(): boolean;
        getMiniAsteroid(): $List<$MiniAsteroid>;
        get resource(): $ResourceLocation;
        get resources(): $List<$IBaseResource>;
        get type(): $EnumType;
        get levels(): $EnumLevels;
        get maxDistance(): number;
        get temperature(): number;
        get distanceFromStar(): number;
        get star(): $IStar;
        get minDistance(): number;
        get miniAsteroid(): $List<$MiniAsteroid>;
    }
    export class $IBaseResource {
    }
    export interface $IBaseResource {
        getBody(): $IBody;
        getItemStack(): $ItemStack;
        getChance(): number;
        getFluidStack(): $FluidStack;
        getMaxChance(): number;
        getTypeRovers(): $EnumTypeRovers;
        getPercentPanel(): number;
        writeNBTTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getPercentResearchBody(): number;
        get body(): $IBody;
        get itemStack(): $ItemStack;
        get chance(): number;
        get fluidStack(): $FluidStack;
        get maxChance(): number;
        get typeRovers(): $EnumTypeRovers;
        get percentPanel(): number;
        get percentResearchBody(): number;
    }
    export class $BaseResource implements $IBaseResource {
        getBody(): $IBody;
        getItemStack(): $ItemStack;
        getChance(): number;
        getFluidStack(): $FluidStack;
        getMaxChance(): number;
        getTypeRovers(): $EnumTypeRovers;
        getPercentPanel(): number;
        writeNBTTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getPercentResearchBody(): number;
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: $FluidStack_, arg1: number, arg2: number, arg3: number, arg4: $IBody, arg5: $EnumTypeRovers_);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: $IBody, arg5: $EnumTypeRovers_);
        get body(): $IBody;
        get itemStack(): $ItemStack;
        get chance(): number;
        get fluidStack(): $FluidStack;
        get maxChance(): number;
        get typeRovers(): $EnumTypeRovers;
        get percentPanel(): number;
        get percentResearchBody(): number;
    }
    export class $EnumType extends $Enum<$EnumType> {
        static values(): $EnumType[];
        static valueOf(arg0: string): $EnumType;
        static DANGEROUS: $EnumType;
        static SAFE: $EnumType;
        static NEUTRAL: $EnumType;
    }
    /**
     * Values that may be interpreted as {@link $EnumType}.
     */
    export type $EnumType_ = "dangerous" | "neutral" | "safe";
}
