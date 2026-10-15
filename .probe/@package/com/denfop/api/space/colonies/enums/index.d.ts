import { $Enum } from "@package/java/lang";

declare module "@package/com/denfop/api/space/colonies/enums" {
    export class $EnumTypeFactory extends $Enum<$EnumTypeFactory> {
        static values(): $EnumTypeFactory[];
        static valueOf(arg0: string): $EnumTypeFactory;
        static getID(arg0: number): $EnumTypeFactory;
        getLevel(): number;
        getEnergy(): number;
        getPeople(): number;
        static HIGH: $EnumTypeFactory;
        static MEDIUM: $EnumTypeFactory;
        static LOW: $EnumTypeFactory;
        get level(): number;
        get energy(): number;
        get people(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeFactory}.
     */
    export type $EnumTypeFactory_ = "low" | "medium" | "high";
    export class $EnumTypeSolarPanel extends $Enum<$EnumTypeSolarPanel> {
        static values(): $EnumTypeSolarPanel[];
        static valueOf(arg0: string): $EnumTypeSolarPanel;
        static getID(arg0: number): $EnumTypeSolarPanel;
        getLevel(): number;
        getGeneration(): number;
        getPeople(): number;
        static HIGH: $EnumTypeSolarPanel;
        static MEDIUM: $EnumTypeSolarPanel;
        static LOW: $EnumTypeSolarPanel;
        get level(): number;
        get generation(): number;
        get people(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeSolarPanel}.
     */
    export type $EnumTypeSolarPanel_ = "low" | "medium" | "high";
    export class $EnumHouses extends $Enum<$EnumHouses> {
        static values(): $EnumHouses[];
        static valueOf(arg0: string): $EnumHouses;
        static getID(arg0: number): $EnumHouses;
        getLevel(): $EnumHousesLevel;
        getMax(): number;
        getEnergy(): number;
        getConsumeOxygen(): number;
        static HIGH: $EnumHouses;
        static MEDIUM: $EnumHouses;
        static LOW: $EnumHouses;
        get level(): $EnumHousesLevel;
        get max(): number;
        get energy(): number;
        get consumeOxygen(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumHouses}.
     */
    export type $EnumHouses_ = "low" | "medium" | "high";
    export class $EnumProtectionLevel extends $Enum<$EnumProtectionLevel> {
        static values(): $EnumProtectionLevel[];
        static valueOf(arg0: string): $EnumProtectionLevel;
        getLevel(): number;
        getEnergy(): number;
        getPeople(): number;
        getProtection(): number;
        static VERY_HIGH: $EnumProtectionLevel;
        static HIGH: $EnumProtectionLevel;
        static MEDIUM: $EnumProtectionLevel;
        static LOW: $EnumProtectionLevel;
        get level(): number;
        get energy(): number;
        get people(): number;
        get protection(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumProtectionLevel}.
     */
    export type $EnumProtectionLevel_ = "low" | "medium" | "high" | "very_high";
    export class $EnumProblems extends $Enum<$EnumProblems> {
        static values(): $EnumProblems[];
        static valueOf(arg0: string): $EnumProblems;
        getWidth(): number;
        getHeight(): number;
        getY(): number;
        getX(): number;
        static OXYGEN: $EnumProblems;
        static ENERGY: $EnumProblems;
        static PROTECTION: $EnumProblems;
        static WORKERS: $EnumProblems;
        static FOOD: $EnumProblems;
        get width(): number;
        get height(): number;
        get y(): number;
        get x(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumProblems}.
     */
    export type $EnumProblems_ = "oxygen" | "workers" | "energy" | "protection" | "food";
    export class $EnumTypeBuilding extends $Enum<$EnumTypeBuilding> {
        static values(): $EnumTypeBuilding[];
        static valueOf(arg0: string): $EnumTypeBuilding;
        static OXYGEN: $EnumTypeBuilding;
        static STORAGE: $EnumTypeBuilding;
        static GENERATORS: $EnumTypeBuilding;
        static FABRIC: $EnumTypeBuilding;
        static ENTERTAINMENT: $EnumTypeBuilding;
        static PROTECTION: $EnumTypeBuilding;
        static HOUSES: $EnumTypeBuilding;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeBuilding}.
     */
    export type $EnumTypeBuilding_ = "houses" | "oxygen" | "generators" | "fabric" | "storage" | "protection" | "entertainment";
    export class $EnumHousesLevel extends $Enum<$EnumHousesLevel> {
        static values(): $EnumHousesLevel[];
        static valueOf(arg0: string): $EnumHousesLevel;
        getLevel(): number;
        static HIGH: $EnumHousesLevel;
        static MEDIUM: $EnumHousesLevel;
        static LOW: $EnumHousesLevel;
        get level(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumHousesLevel}.
     */
    export type $EnumHousesLevel_ = "low" | "medium" | "high";
    export class $EnumEntertainment extends $Enum<$EnumEntertainment> {
        static values(): $EnumEntertainment[];
        static valueOf(arg0: string): $EnumEntertainment;
        static getID(arg0: number): $EnumEntertainment;
        getLevel(): number;
        getEnergy(): number;
        getEntertainment(): number;
        getNeedPeople(): number;
        static HIGH: $EnumEntertainment;
        static MEDIUM: $EnumEntertainment;
        static LOW: $EnumEntertainment;
        get level(): number;
        get energy(): number;
        get entertainment(): number;
        get needPeople(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumEntertainment}.
     */
    export type $EnumEntertainment_ = "low" | "medium" | "high";
    export class $EnumMiningFactory extends $Enum<$EnumMiningFactory> {
        static values(): $EnumMiningFactory[];
        static valueOf(arg0: string): $EnumMiningFactory;
        static getID(arg0: number): $EnumMiningFactory;
        getMaxValue(): number;
        getLevel(): number;
        getEnergy(): number;
        getChance(): number;
        getMaxItemValue(): number;
        getNeedPeople(): number;
        static HIGH: $EnumMiningFactory;
        static MEDIUM: $EnumMiningFactory;
        static LOW: $EnumMiningFactory;
        get maxValue(): number;
        get level(): number;
        get energy(): number;
        get chance(): number;
        get maxItemValue(): number;
        get needPeople(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumMiningFactory}.
     */
    export type $EnumMiningFactory_ = "low" | "medium" | "high";
    export class $EnumTypeOxygenFactory extends $Enum<$EnumTypeOxygenFactory> {
        static values(): $EnumTypeOxygenFactory[];
        static valueOf(arg0: string): $EnumTypeOxygenFactory;
        static getID(arg0: number): $EnumTypeOxygenFactory;
        getLevel(): number;
        getGeneration(): number;
        getEnergy(): number;
        getPeople(): number;
        static HIGH: $EnumTypeOxygenFactory;
        static MEDIUM: $EnumTypeOxygenFactory;
        static LOW: $EnumTypeOxygenFactory;
        get level(): number;
        get generation(): number;
        get energy(): number;
        get people(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeOxygenFactory}.
     */
    export type $EnumTypeOxygenFactory_ = "low" | "medium" | "high";
}
