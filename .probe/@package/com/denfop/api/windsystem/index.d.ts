import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Inventory } from "@package/com/denfop/inventory";
import { $List } from "@package/java/util";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $WindGeneratorEvent } from "@package/com/denfop/api/windsystem/event";
import { $BlockEntityWindTurbineController } from "@package/com/denfop/blockentity/windturbine";
import { $ITypeSlot } from "@package/com/denfop/api/widget";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $DamageItem } from "@package/com/denfop/api/item";
import { $BlockEntityWindGenerator } from "@package/com/denfop/blockentity/mechanism/wind";
import { $Color } from "@package/java/awt";
import { $Enum } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
export * as upgrade from "@package/com/denfop/api/windsystem/upgrade";
export * as event from "@package/com/denfop/api/windsystem/event";

declare module "@package/com/denfop/api/windsystem" {
    export class $EnumLevelGenerators extends $Enum<$EnumLevelGenerators> {
        static values(): $EnumLevelGenerators[];
        static valueOf(arg0: string): $EnumLevelGenerators;
        getMax(): number;
        getMin(): number;
        static ONE: $EnumLevelGenerators;
        static FOUR: $EnumLevelGenerators;
        static TWO: $EnumLevelGenerators;
        static THREE: $EnumLevelGenerators;
        get max(): number;
        get min(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumLevelGenerators}.
     */
    export type $EnumLevelGenerators_ = "one" | "two" | "three" | "four";
    export class $Wind {
        getTime(): number;
        setTime(arg0: number): void;
        getWind_Strength(): number;
        setWind_Strength(arg0: number): void;
        constructor(arg0: number, arg1: number);
    }
    export class $EnumTypeWind extends $Enum<$EnumTypeWind> {
        static values(): $EnumTypeWind[];
        static valueOf(arg0: string): $EnumTypeWind;
        getMax(): number;
        getMin(): number;
        static getValueFromWind(arg0: number): $EnumTypeWind;
        static EIGHT: $EnumTypeWind;
        static FIVE: $EnumTypeWind;
        static SIX: $EnumTypeWind;
        static NINE: $EnumTypeWind;
        static ONE: $EnumTypeWind;
        static FOUR: $EnumTypeWind;
        static TEN: $EnumTypeWind;
        static TWO: $EnumTypeWind;
        static THREE: $EnumTypeWind;
        static SEVEN: $EnumTypeWind;
        get max(): number;
        get min(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeWind}.
     */
    export type $EnumTypeWind_ = "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine" | "ten";
    export class $IWindMechanism {
    }
    export interface $IWindMechanism {
        getTime(): number;
        getSpace(): boolean;
        change(): void;
        getMin(): boolean;
        getItemStack(): $ItemStack;
        getFacing(): $Direction;
        getAngle(): number;
        setRotationSpeed(arg0: number): void;
        setWork(arg0: boolean): void;
        getRotor(): $WindRotor;
        getMinWind(): number;
        can_repair(): boolean;
        setCoefficient(arg0: number): void;
        need_repair(): boolean;
        getMinWindSpeed(): number;
        getLevelGenerator(): $EnumLevelGenerators;
        getRotorDiameter(): number;
        getCoefficient(): number;
        getRotorSide(): $EnumRotorSide;
        setRotorSide(arg0: $EnumRotorSide_): void;
        getAdditionalPower(): number;
        getAuto(): boolean;
        getAdditionalCoefficient(): number;
        getRotorRenderTexture(): $ResourceLocation;
        get time(): number;
        get space(): boolean;
        get min(): boolean;
        get itemStack(): $ItemStack;
        get facing(): $Direction;
        get angle(): number;
        set rotationSpeed(value: number);
        set work(value: boolean);
        get rotor(): $WindRotor;
        get minWind(): number;
        get minWindSpeed(): number;
        get levelGenerator(): $EnumLevelGenerators;
        get rotorDiameter(): number;
        get additionalPower(): number;
        get auto(): boolean;
        get additionalCoefficient(): number;
        get rotorRenderTexture(): $ResourceLocation;
    }
    export class $WindRotor {
    }
    export interface $WindRotor extends $DamageItem {
        getIndex(): number;
        getColor(): $Color;
        getLevel(): number;
        getEfficiency(arg0: $ItemStack_): number;
        getDiameter(arg0: $ItemStack_): number;
        getRotorRenderTexture(arg0: $ItemStack_): $ResourceLocation;
        getSourceTier(): number;
        get index(): number;
        get color(): $Color;
        get level(): number;
        get sourceTier(): number;
    }
    export class $InventoryWindTurbineRotor extends $Inventory implements $ITypeSlot {
        damage(arg0: number, arg1: number): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityWindTurbineController);
    }
    export class $EnumWindSide extends $Enum<$EnumWindSide> {
        static values(): $EnumWindSide[];
        static valueOf(arg0: string): $EnumWindSide;
        static getValue(arg0: number): $EnumWindSide;
        getList(): $List<$EnumHorizonSide>;
        getDirectionVector(): $Vec3;
        static SE: $EnumWindSide;
        static S: $EnumWindSide;
        static SW: $EnumWindSide;
        static E: $EnumWindSide;
        static W: $EnumWindSide;
        static NE: $EnumWindSide;
        static NW: $EnumWindSide;
        static N: $EnumWindSide;
        get list(): $List<$EnumHorizonSide>;
        get directionVector(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $EnumWindSide}.
     */
    export type $EnumWindSide_ = "w" | "s" | "n" | "e" | "nw" | "ne" | "sw" | "se";
    export class $IWindSystem {
    }
    export interface $IWindSystem {
        getTime(): number;
        getSpeed(): number;
        getSpeed(arg0: number): number;
        getPower(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $IWindMechanism): number;
        getPowerFromWaterRotor(arg0: $Level_, arg1: $IWindMechanism, arg2: $ItemStack_): number;
        getSpeedFromPower(arg0: $BlockPos_, arg1: $IWindMechanism, arg2: number): number;
        getWindSide(): $EnumWindSide;
        getWind_Strength(): number;
        getNewFacing(arg0: $Direction_, arg1: $IWindMechanism): void;
        getNewFacing(): $Direction;
        getEnumTypeWind(): $EnumTypeWind;
        getRotorSide(arg0: $Direction_): $EnumRotorSide;
        getPowerFromWindRotor(arg0: $Level_, arg1: $BlockPos_, arg2: $IWindMechanism, arg3: $ItemStack_): number;
        getNewPositionOfMechanism(arg0: $IWindMechanism): void;
        changeRotorSide(arg0: $IWindMechanism, arg1: $Direction_): void;
        getLevelWind(): number;
        getSpeedFromWaterPower(arg0: $BlockPos_, arg1: $IWindMechanism, arg2: number): number;
        get time(): number;
        get windSide(): $EnumWindSide;
        get wind_Strength(): number;
        get enumTypeWind(): $EnumTypeWind;
        get levelWind(): number;
    }
    export class $WindSystem implements $IWindSystem {
        getTime(): number;
        getSpeed(): number;
        getSpeed(arg0: number): number;
        getPower(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $IWindMechanism): number;
        getPowerFromWaterRotor(arg0: $Level_, arg1: $IWindMechanism, arg2: $ItemStack_): number;
        getSpeedFromPower(arg0: $BlockPos_, arg1: $IWindMechanism, arg2: number): number;
        getWindSide(): $EnumWindSide;
        getWind_Strength(): number;
        getNewFacing(arg0: $Direction_, arg1: $IWindMechanism): void;
        getNewFacing(): $Direction;
        getCoefficient(arg0: $IWindMechanism): number;
        getEnumTypeWind(): $EnumTypeWind;
        getRotorSide(arg0: $Direction_): $EnumRotorSide;
        getPowerFromWindRotor(arg0: $Level_, arg1: $BlockPos_, arg2: $IWindMechanism, arg3: $ItemStack_): number;
        getNewPositionOfMechanism(arg0: $IWindMechanism): void;
        changeRotorSide(arg0: $IWindMechanism, arg1: $Direction_): void;
        getLevelWind(): number;
        EventWorldUnload(arg0: $LevelEvent$Unload): void;
        LoadWindMechanism(arg0: $WindGeneratorEvent): void;
        getSpeedFromWaterPower(arg0: $BlockPos_, arg1: $IWindMechanism, arg2: number): number;
        windTick(arg0: $LevelTickEvent$Post): void;
        static windSystem: $IWindSystem;
        enumTypeWinds: $EnumTypeWind[];
        windSide: $EnumWindSide;
        enumTypeWind: $EnumTypeWind;
        tick: number;
        constructor();
        get time(): number;
        get wind_Strength(): number;
        get levelWind(): number;
    }
    export class $IWindUpgradeBlock {
    }
    export interface $IWindUpgradeBlock {
        getItemStack(): $ItemStack;
        getRotor(): $WindRotor;
        get itemStack(): $ItemStack;
        get rotor(): $WindRotor;
    }
    export class $InventoryWindRotor extends $Inventory implements $ITypeSlot {
        damage(arg0: number, arg1: number): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityWindGenerator);
    }
    export class $EnumHorizonSide extends $Enum<$EnumHorizonSide> {
        static values(): $EnumHorizonSide[];
        static valueOf(arg0: string): $EnumHorizonSide;
        getEnumWindSide(): $List<$EnumHorizonSide>;
        static EW: $EnumHorizonSide;
        static S: $EnumHorizonSide;
        static SW: $EnumHorizonSide;
        static E: $EnumHorizonSide;
        static W: $EnumHorizonSide;
        static NW: $EnumHorizonSide;
        static EN: $EnumHorizonSide;
        static SN: $EnumHorizonSide;
        static N: $EnumHorizonSide;
        static ES: $EnumHorizonSide;
        get enumWindSide(): $List<$EnumHorizonSide>;
    }
    /**
     * Values that may be interpreted as {@link $EnumHorizonSide}.
     */
    export type $EnumHorizonSide_ = "w" | "e" | "n" | "s" | "nw" | "sw" | "en" | "es" | "ew" | "sn";
    export class $EnumRotorSide extends $Enum<$EnumRotorSide> {
        static values(): $EnumRotorSide[];
        static valueOf(arg0: string): $EnumRotorSide;
        getGood_sides(): $EnumHorizonSide;
        getNeutral_sides(): $EnumHorizonSide;
        getBad_sides(): $EnumHorizonSide;
        static S: $EnumRotorSide;
        static E: $EnumRotorSide;
        good_sides: $EnumHorizonSide;
        static W: $EnumRotorSide;
        bad_sides: $EnumHorizonSide;
        neutral_sides: $EnumHorizonSide;
        static N: $EnumRotorSide;
    }
    /**
     * Values that may be interpreted as {@link $EnumRotorSide}.
     */
    export type $EnumRotorSide_ = "w" | "e" | "n" | "s";
    export class $InventoryUpgrade extends $Inventory implements $ITypeSlot {
        put(arg0: number, arg1: $ItemStack_, arg2: boolean): void;
        update(arg0: $ItemStack_): void;
        base: $CustomWorldContainer;
        constructor(arg0: $IWindUpgradeBlock);
    }
}
