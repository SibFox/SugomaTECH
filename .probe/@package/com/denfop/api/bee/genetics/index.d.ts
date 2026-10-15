import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $Map_, $Map } from "@package/java/util";

declare module "@package/com/denfop/api/bee/genetics" {
    export class $EnumGenetic extends $Enum<$EnumGenetic> {
        static values(): $EnumGenetic[];
        static valueOf(arg0: string): $EnumGenetic;
        static POPULATION: $EnumGenetic;
        static GENOME_RESISTANCE: $EnumGenetic;
        static SWARM: $EnumGenetic;
        static WEATHER: $EnumGenetic;
        static AIR: $EnumGenetic;
        static HARDENING: $EnumGenetic;
        static JELLY: $EnumGenetic;
        static SUN: $EnumGenetic;
        static RADIATION: $EnumGenetic;
        static MORTALITY_RATE: $EnumGenetic;
        static COEF_BIOME: $EnumGenetic;
        static PEST: $EnumGenetic;
        static RADIUS: $EnumGenetic;
        static NIGHT: $EnumGenetic;
        static PRODUCT: $EnumGenetic;
        static GENOME_ADAPTIVE: $EnumGenetic;
        static SOIL: $EnumGenetic;
        static BIRTH: $EnumGenetic;
        static FOOD: $EnumGenetic;
    }
    /**
     * Values that may be interpreted as {@link $EnumGenetic}.
     */
    export type $EnumGenetic_ = "food" | "jelly" | "product" | "hardening" | "population" | "birth" | "coef_biome" | "weather" | "pest" | "sun" | "night" | "soil" | "air" | "radiation" | "genome_resistance" | "genome_adaptive" | "radius" | "swarm" | "mortality_rate";
    export class $GeneticTraits extends $Enum<$GeneticTraits> {
        static values(): $GeneticTraits[];
        static valueOf(arg0: string): $GeneticTraits;
        getValue<T>(arg0: $Class<T>): T;
        static init(): void;
        getPrev(): $GeneticTraits;
        getGenetic(): $EnumGenetic;
        static HARDENING_II: $GeneticTraits;
        static PEST_II: $GeneticTraits;
        static WEATHER_II: $GeneticTraits;
        static SOIL_III: $GeneticTraits;
        static SOIL_I: $GeneticTraits;
        static NIGHT: $GeneticTraits;
        static JELLY_I: $GeneticTraits;
        static PEST_I: $GeneticTraits;
        static RADIUS_I: $GeneticTraits;
        static POPULATION_III: $GeneticTraits;
        static BIRTH_III: $GeneticTraits;
        static FOOD_II: $GeneticTraits;
        static MORTALITY_II: $GeneticTraits;
        static FOOD_III: $GeneticTraits;
        static AIR_III: $GeneticTraits;
        static BIRTH_II: $GeneticTraits;
        static RADIATION_I: $GeneticTraits;
        static SUN: $GeneticTraits;
        static SWARM_II: $GeneticTraits;
        static GENOME_RESISTANCE_III: $GeneticTraits;
        static RADIATION_III: $GeneticTraits;
        static MORTALITY_I: $GeneticTraits;
        static HARDENING_I: $GeneticTraits;
        static JELLY_III: $GeneticTraits;
        static BIRTH_I: $GeneticTraits;
        static PRODUCT_I: $GeneticTraits;
        static SWARM_III: $GeneticTraits;
        static AIR_I: $GeneticTraits;
        static HARDENING_III: $GeneticTraits;
        static AIR_II: $GeneticTraits;
        static BIOME: $GeneticTraits;
        static POPULATION_I: $GeneticTraits;
        static PRODUCT_III: $GeneticTraits;
        static WEATHER_I: $GeneticTraits;
        static RADIUS_II: $GeneticTraits;
        static GENOME_ADAPTIVE_III: $GeneticTraits;
        static MORTALITY_III: $GeneticTraits;
        static FOOD_I: $GeneticTraits;
        static PEST_III: $GeneticTraits;
        static RADIUS_III: $GeneticTraits;
        static GENOME_ADAPTIVE_I: $GeneticTraits;
        static POPULATION_II: $GeneticTraits;
        static GENOME_ADAPTIVE_II: $GeneticTraits;
        static JELLY_II: $GeneticTraits;
        static GENOME_RESISTANCE_I: $GeneticTraits;
        static PRODUCT_II: $GeneticTraits;
        static SWARM_I: $GeneticTraits;
        static RADIATION_II: $GeneticTraits;
        static SOIL_II: $GeneticTraits;
        static GENOME_RESISTANCE_II: $GeneticTraits;
        get prev(): $GeneticTraits;
        get genetic(): $EnumGenetic;
    }
    /**
     * Values that may be interpreted as {@link $GeneticTraits}.
     */
    export type $GeneticTraits_ = "soil_i" | "soil_ii" | "soil_iii" | "food_i" | "food_ii" | "food_iii" | "biome" | "jelly_i" | "jelly_ii" | "jelly_iii" | "weather_i" | "weather_ii" | "product_i" | "product_ii" | "product_iii" | "birth_i" | "birth_ii" | "birth_iii" | "hardening_i" | "hardening_ii" | "hardening_iii" | "population_i" | "population_ii" | "population_iii" | "swarm_i" | "swarm_ii" | "swarm_iii" | "mortality_i" | "mortality_ii" | "mortality_iii" | "pest_i" | "pest_ii" | "pest_iii" | "radius_i" | "radius_ii" | "radius_iii" | "sun" | "night" | "air_i" | "air_ii" | "air_iii" | "radiation_i" | "radiation_ii" | "radiation_iii" | "genome_resistance_i" | "genome_resistance_ii" | "genome_resistance_iii" | "genome_adaptive_i" | "genome_adaptive_ii" | "genome_adaptive_iii";
    export class $GeneticsManager {
        getInstance(): $GeneticsManager;
        static init(): void;
        static geneticTraitsMap: $Map<$GeneticTraits, $GeneticTraits>;
        static enumGeneticListMap: $Map<$EnumGenetic, $List<$GeneticTraits>>;
        static instance: $GeneticsManager;
        constructor();
    }
    export class $Genome implements $GenomeBase {
        copy(): $Genome;
        getStack(): $ItemStack;
        getGeneticTraitsMap(): $Map<$EnumGenetic, $GeneticTraits>;
        writeNBT(arg0: $ItemStack_): void;
        getLevelGenome<T>(arg0: $EnumGenetic_, arg1: $Class<T>): T;
        addGenome(arg0: $GeneticTraits_): void;
        addGenome(arg0: $GeneticTraits_, arg1: $ItemStack_): void;
        getGenome(arg0: $EnumGenetic_): $GeneticTraits;
        hasGenome(arg0: $EnumGenetic_): boolean;
        removeGenome(arg0: $EnumGenetic_, arg1: $ItemStack_): $GeneticTraits;
        removeGenome(arg0: $GeneticTraits_, arg1: $ItemStack_): void;
        constructor(arg0: $ItemStack_);
        constructor(arg0: $Map_<$EnumGenetic_, $GeneticTraits_>);
        get stack(): $ItemStack;
        get geneticTraitsMap(): $Map<$EnumGenetic, $GeneticTraits>;
    }
    export class $GenomeItem {
    }
    export interface $GenomeItem {
        getGenomeTraits(arg0: $ItemStack_): $GeneticTraits;
    }
    /**
     * Values that may be interpreted as {@link $GenomeItem}.
     */
    export type $GenomeItem_ = ((arg0: $ItemStack) => $GeneticTraits_);
    export class $GenomeBase {
    }
    export interface $GenomeBase {
        copy(): $Genome;
        writeNBT(arg0: $ItemStack_): void;
        getLevelGenome<T>(arg0: $EnumGenetic_, arg1: $Class<T>): T;
        getGenome(arg0: $EnumGenetic_): $GeneticTraits;
        hasGenome(arg0: $EnumGenetic_): boolean;
    }
}
