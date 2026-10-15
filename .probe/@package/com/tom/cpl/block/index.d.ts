import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Stack } from "@package/com/tom/cpl/item";
export * as entity from "@package/com/tom/cpl/block/entity";

declare module "@package/com/tom/cpl/block" {
    export class $World {
    }
    export interface $World {
        getBlock(arg0: number, arg1: number, arg2: number): $BlockState;
        getDimension(): string;
        getBiome(): $Biome;
        getMaxHeight(): number;
        isCovered(): boolean;
        getMinHeight(): number;
        getYHeight(): number;
        getWeather(): $World$WeatherType;
        get dimension(): string;
        get biome(): $Biome;
        get maxHeight(): number;
        get covered(): boolean;
        get minHeight(): number;
        get YHeight(): number;
        get weather(): $World$WeatherType;
    }
    export class $Biome {
        getBiome(): $Object;
        listTags(): $List<string>;
        getTemperature(): number;
        getBiomeId(): string;
        getRainType(): $BiomeHandler$RainType;
        getHumidity(): number;
        isInTag(arg0: string): boolean;
        get biome(): $Object;
        get temperature(): number;
        get biomeId(): string;
        get rainType(): $BiomeHandler$RainType;
        get humidity(): number;
    }
    export class $BlockState {
        listTags(): $List<string>;
        getBlockId(): string;
        getBlockStates(): $List<string>;
        getStackFromState(): $Stack;
        getAllValuesFor(arg0: string): $List<string>;
        getPropertyValue(arg0: string): string;
        equalsFull(arg0: $BlockState): boolean;
        isInTag(arg0: string): boolean;
        getPropertyValueInt(arg0: string): number;
        static handler: $BlockStateHandler<$Object>;
        static AIR: $BlockState;
        get blockId(): string;
        get blockStates(): $List<string>;
        get stackFromState(): $Stack;
    }
}
