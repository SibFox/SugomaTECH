import { $Registry } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $Map_, $Map } from "@package/java/util";
import { $ICrop } from "@package/com/denfop/api/crop";

declare module "@package/com/denfop/api/crop/genetics" {
    export class $GeneticsManager {
        getInstance(): $GeneticsManager;
        static init(): void;
        addGenomeCrop(arg0: $ICrop, arg1: $GeneticTraits_): void;
        deleteGenomeCrop(arg0: $ICrop, arg1: $GeneticTraits_): void;
        loadGenomeToCrop(arg0: $Genome, arg1: $ICrop): void;
        static geneticTraitsMap: $Map<$GeneticTraits, $GeneticTraits>;
        static enumGeneticListMap: $Map<$EnumGenetic, $List<$GeneticTraits>>;
        static instance: $GeneticsManager;
        constructor();
    }
    export class $Genome implements $IGenome {
        static init(arg0: $Registry<$Biome_>): void;
        copy(): $Genome;
        getStack(): $ItemStack;
        getGeneticTraitsMap(): $Map<$EnumGenetic, $GeneticTraits>;
        writeNBT(arg0: $ItemStack_): void;
        getLevelGenome<T>(arg0: $EnumGenetic_, arg1: $Class<T>): T;
        addGenome(arg0: $GeneticTraits_): void;
        addGenome(arg0: $GeneticTraits_, arg1: $ItemStack_): void;
        loadCrop(arg0: $ICrop): void;
        getGenome(arg0: $EnumGenetic_): $GeneticTraits;
        hasGenome(arg0: $EnumGenetic_): boolean;
        removeGenome(arg0: $EnumGenetic_, arg1: $ItemStack_): $GeneticTraits;
        removeGenome(arg0: $GeneticTraits_, arg1: $ItemStack_): void;
        static geneticBiomes: $Map<$GeneticTraits, $List<$ResourceKey<$Biome>>>;
        constructor(arg0: $ItemStack_);
        constructor(arg0: $Map_<$EnumGenetic_, $GeneticTraits_>);
        get stack(): $ItemStack;
        get geneticTraitsMap(): $Map<$EnumGenetic, $GeneticTraits>;
    }
    export class $IGenomeItem {
    }
    export interface $IGenomeItem {
        getGenomeTraits(arg0: $ItemStack_): $GeneticTraits;
    }
    /**
     * Values that may be interpreted as {@link $IGenomeItem}.
     */
    export type $IGenomeItem_ = ((arg0: $ItemStack) => $GeneticTraits_);
    export class $IGenome {
    }
    export interface $IGenome {
        copy(): $Genome;
        writeNBT(arg0: $ItemStack_): void;
        getLevelGenome<T>(arg0: $EnumGenetic_, arg1: $Class<T>): T;
        loadCrop(arg0: $ICrop): void;
        getGenome(arg0: $EnumGenetic_): $GeneticTraits;
        hasGenome(arg0: $EnumGenetic_): boolean;
    }
    export class $GeneticTraits extends $Enum<$GeneticTraits> {
        static values(): $GeneticTraits[];
        static valueOf(arg0: string): $GeneticTraits;
        getValue<T>(arg0: $Class<T>): T;
        static init(): void;
        getPrev(): $GeneticTraits;
        getGenetic(): $EnumGenetic;
        static BEECOMBINE: $GeneticTraits;
        static PEST_II: $GeneticTraits;
        static WEATHER_II: $GeneticTraits;
        static CHANCE_III: $GeneticTraits;
        static GROW_SPEED_I: $GeneticTraits;
        static SOIL_III: $GeneticTraits;
        static SOIL_I: $GeneticTraits;
        static WEED_I: $GeneticTraits;
        static CHANCE_II: $GeneticTraits;
        static PEST_I: $GeneticTraits;
        static WATER: $GeneticTraits;
        static BIOME_I: $GeneticTraits;
        static AIR_III: $GeneticTraits;
        static RADIATION_I: $GeneticTraits;
        static BIOME_IV: $GeneticTraits;
        static SUN: $GeneticTraits;
        static BIOME_III: $GeneticTraits;
        static GROW_SPEED_II: $GeneticTraits;
        static NIGHT_GROW: $GeneticTraits;
        static LIGHT_I: $GeneticTraits;
        static GENOME_RESISTANCE_III: $GeneticTraits;
        static RADIATION_III: $GeneticTraits;
        static AIR_I: $GeneticTraits;
        static AIR_II: $GeneticTraits;
        static BIOME: $GeneticTraits;
        static WEATHER_I: $GeneticTraits;
        static GENOME_ADAPTIVE_III: $GeneticTraits;
        static YIELD_II: $GeneticTraits;
        static LIGHT_II: $GeneticTraits;
        static LIGHT_IV: $GeneticTraits;
        static PEST_III: $GeneticTraits;
        static WEED_II: $GeneticTraits;
        static BIOME_II: $GeneticTraits;
        static GENOME_ADAPTIVE_I: $GeneticTraits;
        static SEED_III: $GeneticTraits;
        static GENOME_ADAPTIVE_II: $GeneticTraits;
        static LIGHT_III: $GeneticTraits;
        static WEED_III: $GeneticTraits;
        static GROW_SPEED_III: $GeneticTraits;
        static SOIL_BLOCK: $GeneticTraits;
        static GENOME_RESISTANCE_I: $GeneticTraits;
        static SEED_I: $GeneticTraits;
        static CHANCE_I: $GeneticTraits;
        static YIELD_I: $GeneticTraits;
        static RADIATION_II: $GeneticTraits;
        static SOIL_II: $GeneticTraits;
        static YIELD_III: $GeneticTraits;
        static SEED_II: $GeneticTraits;
        static GENOME_RESISTANCE_II: $GeneticTraits;
        get prev(): $GeneticTraits;
        get genetic(): $EnumGenetic;
    }
    /**
     * Values that may be interpreted as {@link $GeneticTraits}.
     */
    export type $GeneticTraits_ = "soil_i" | "soil_ii" | "soil_iii" | "chance_i" | "chance_ii" | "chance_iii" | "beecombine" | "yield_i" | "yield_ii" | "yield_iii" | "weather_i" | "weather_ii" | "water" | "light_i" | "light_ii" | "light_iii" | "light_iv" | "biome_i" | "biome_ii" | "biome" | "biome_iii" | "biome_iv" | "grow_speed_i" | "grow_speed_ii" | "grow_speed_iii" | "pest_i" | "pest_ii" | "pest_iii" | "seed_i" | "seed_ii" | "seed_iii" | "weed_i" | "weed_ii" | "weed_iii" | "soil_block" | "sun" | "night_grow" | "air_i" | "air_ii" | "air_iii" | "radiation_i" | "radiation_ii" | "radiation_iii" | "genome_resistance_i" | "genome_resistance_ii" | "genome_resistance_iii" | "genome_adaptive_i" | "genome_adaptive_ii" | "genome_adaptive_iii";
    export class $EnumGenetic extends $Enum<$EnumGenetic> {
        static values(): $EnumGenetic[];
        static valueOf(arg0: string): $EnumGenetic;
        static GENOME_RESISTANCE: $EnumGenetic;
        static BEE: $EnumGenetic;
        static WEATHER: $EnumGenetic;
        static GROW_SPEED: $EnumGenetic;
        static BIOME: $EnumGenetic;
        static YIELD: $EnumGenetic;
        static WEED: $EnumGenetic;
        static LIGHT: $EnumGenetic;
        static AIR: $EnumGenetic;
        static SUN: $EnumGenetic;
        static RADIATION: $EnumGenetic;
        static NIGHT_GROW: $EnumGenetic;
        static SOIL_BLOCK: $EnumGenetic;
        static PEST: $EnumGenetic;
        static GENOME_ADAPTIVE: $EnumGenetic;
        static SEED: $EnumGenetic;
        static SOIL: $EnumGenetic;
        static CHANCE: $EnumGenetic;
        static WATER: $EnumGenetic;
    }
    /**
     * Values that may be interpreted as {@link $EnumGenetic}.
     */
    export type $EnumGenetic_ = "soil" | "chance" | "bee" | "yield" | "weather" | "water" | "light" | "biome" | "grow_speed" | "pest" | "seed" | "weed" | "soil_block" | "sun" | "night_grow" | "air" | "radiation" | "genome_resistance" | "genome_adaptive";
}
