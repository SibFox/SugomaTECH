import { $BlockEntityMiniPanels$EnumState_, $BlockEntityMiniPanels$EnumState } from "@package/com/denfop/blockentity/panels/entity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/com/denfop/api/solar" {
    export class $ISolarTile {
    }
    export interface $ISolarTile {
        setCapacity(arg0: number): void;
        setOutput(arg0: number): void;
        setLoad(arg0: number): void;
        setBonus(arg0: $EnumTypeParts_, arg1: number): void;
        getBonus(arg0: $EnumTypeParts_): number;
        setStables(arg0: number, arg1: $List_<$BlockEntityMiniPanels$EnumState_>): void;
        getStables(): $List<$List<$BlockEntityMiniPanels$EnumState>>;
        getCapacityItems(): $List<$ItemStack>;
        setGeneration(arg0: $EnumSolarType_, arg1: number): void;
        getCoreLevel(): number;
        getOutputItems(): $List<$ItemStack>;
        setCoreLevel(arg0: number): void;
        getGenerationItems(): $List<$ItemStack>;
        getCoresItems(): $List<$ItemStack>;
        set capacity(value: number);
        set output(value: number);
        set load(value: number);
        get capacityItems(): $List<$ItemStack>;
        get outputItems(): $List<$ItemStack>;
        get generationItems(): $List<$ItemStack>;
        get coresItems(): $List<$ItemStack>;
    }
    export class $IBatteryItem {
    }
    export interface $IBatteryItem {
        getCapacity(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IBatteryItem}.
     */
    export type $IBatteryItem_ = ((arg0: number) => number);
    export class $IOutputItem {
    }
    export interface $IOutputItem {
        getOutput(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IOutputItem}.
     */
    export type $IOutputItem_ = ((arg0: number) => number);
    export class $EnumSolarType extends $Enum<$EnumSolarType> {
        static values(): $EnumSolarType[];
        static valueOf(arg0: string): $EnumSolarType;
        static NIGHT: $EnumSolarType;
        static DAY_NIGHT: $EnumSolarType;
        static DAY: $EnumSolarType;
    }
    /**
     * Values that may be interpreted as {@link $EnumSolarType}.
     */
    export type $EnumSolarType_ = "day" | "night" | "day_night";
    export class $ISolarItem {
    }
    export interface $ISolarItem {
        getType(): $EnumSolarType;
        getResourceLocation(arg0: number): $ResourceLocation;
        getGenerationValue(arg0: number): number;
        get type(): $EnumSolarType;
    }
    export class $EnumTypeParts extends $Enum<$EnumTypeParts> {
        static values(): $EnumTypeParts[];
        static valueOf(arg0: string): $EnumTypeParts;
        static CAPACITY: $EnumTypeParts;
        static OUTPUT: $EnumTypeParts;
        static GENERATION: $EnumTypeParts;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeParts}.
     */
    export type $EnumTypeParts_ = "capacity" | "output" | "generation";
    export class $SolarEnergySystem {
        calculateCores(arg0: $ISolarTile): void;
        recalculation(arg0: $ISolarTile, arg1: $EnumTypeParts_): void;
        static system: $SolarEnergySystem;
        static indexes: number[][];
        constructor();
    }
}
