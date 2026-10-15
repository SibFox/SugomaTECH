import { $Map } from "@package/java/util";
import { $ModConfigSpec$BooleanValue, $ModConfigSpec$Builder, $ModConfigSpec$IntValue, $ModConfigSpec$DoubleValue, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";

declare module "@package/com/denfop/config" {
    export class $ModConfig {
        static itemInt(arg0: string, arg1: number): number;
        static itemDouble(arg0: string, arg1: number): number;
        static mechanismInt(arg0: string, arg1: number): number;
        static mechanismDouble(arg0: string, arg1: number): number;
        static mechanicInt(arg0: string, arg1: number): number;
        static mechanicDouble(arg0: string, arg1: number): number;
        static COMMON_SPEC: $ModConfigSpec;
        static COMMON: $ModConfig$Common;
        constructor();
    }
    export class $ModConfig$IntEntry {
    }
    export class $ModConfig$Common {
        mechanismDoubles: $Map<string, $ModConfigSpec$DoubleValue>;
        radiationChunksEnabled: $ModConfigSpec$BooleanValue;
        oceanMax: $ModConfigSpec$IntValue;
        itemDoubles: $Map<string, $ModConfigSpec$DoubleValue>;
        defaultMax: $ModConfigSpec$IntValue;
        enableNuclear: $ModConfigSpec$BooleanValue;
        enableEngineer: $ModConfigSpec$BooleanValue;
        abilityAllowUseFood: $ModConfigSpec$BooleanValue;
        cooldownEnabled: $ModConfigSpec$BooleanValue;
        gasRollChance: $ModConfigSpec$IntValue;
        mechanicInts: $Map<string, $ModConfigSpec$IntValue>;
        enableExplosion: $ModConfigSpec$BooleanValue;
        pressureWork: $ModConfigSpec$BooleanValue;
        enableMetallurg: $ModConfigSpec$BooleanValue;
        defaultMin: $ModConfigSpec$IntValue;
        hillChanceBonus: $ModConfigSpec$IntValue;
        baseChance: $ModConfigSpec$IntValue;
        abilityTreeAllow: $ModConfigSpec$BooleanValue;
        desertMin: $ModConfigSpec$IntValue;
        enableMechanic: $ModConfigSpec$BooleanValue;
        newsystem: $ModConfigSpec$BooleanValue;
        soilPollution: $ModConfigSpec$BooleanValue;
        defaultSpawnEnabled: $ModConfigSpec$BooleanValue;
        itemInts: $Map<string, $ModConfigSpec$IntValue>;
        gasVeinMaxCol: $ModConfigSpec$IntValue;
        radiationDamageEnabled: $ModConfigSpec$BooleanValue;
        maxVein: $ModConfigSpec$IntValue;
        savannaMin: $ModConfigSpec$IntValue;
        enableLosing: $ModConfigSpec$BooleanValue;
        mechanicDoubles: $Map<string, $ModConfigSpec$DoubleValue>;
        enableAllProfessions: $ModConfigSpec$BooleanValue;
        deepOceanChance: $ModConfigSpec$IntValue;
        gasMaxVein: $ModConfigSpec$IntValue;
        savannaChance: $ModConfigSpec$IntValue;
        desertChance: $ModConfigSpec$IntValue;
        cableEasyMode: $ModConfigSpec$BooleanValue;
        oceanChance: $ModConfigSpec$IntValue;
        defaultChance: $ModConfigSpec$IntValue;
        desertMax: $ModConfigSpec$IntValue;
        informationText: $ModConfigSpec$BooleanValue;
        radiationAccumulationEnabled: $ModConfigSpec$BooleanValue;
        savannaMax: $ModConfigSpec$IntValue;
        deepOceanMax: $ModConfigSpec$IntValue;
        enableChemist: $ModConfigSpec$BooleanValue;
        airPollution: $ModConfigSpec$BooleanValue;
        riverMax: $ModConfigSpec$IntValue;
        gasChance: $ModConfigSpec$IntValue;
        damageRadiation: $ModConfigSpec$BooleanValue;
        abilityAllowRender: $ModConfigSpec$BooleanValue;
        deepOceanMin: $ModConfigSpec$IntValue;
        riverMin: $ModConfigSpec$IntValue;
        enableEasyMode: $ModConfigSpec$BooleanValue;
        abilityAllow: $ModConfigSpec$BooleanValue;
        mechanismInts: $Map<string, $ModConfigSpec$IntValue>;
        radiationRenderEnabled: $ModConfigSpec$BooleanValue;
        oceanMin: $ModConfigSpec$IntValue;
        riverChance: $ModConfigSpec$IntValue;
        enableBotanist: $ModConfigSpec$BooleanValue;
        taigaSnowyChancePenalty: $ModConfigSpec$IntValue;
        abilityPickaxeAllow: $ModConfigSpec$BooleanValue;
        constructor(arg0: $ModConfigSpec$Builder);
    }
    export class $ModConfig$DoubleEntry {
    }
}
