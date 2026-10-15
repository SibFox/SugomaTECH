import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockEntityApiary } from "@package/com/denfop/blockentity/bee";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Biome_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $CustomPacketBuffer, $INetworkObject } from "@package/com/denfop/network/packet";
import { $Enum } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $ICrop } from "@package/com/denfop/api/crop";
export * as genetics from "@package/com/denfop/api/bee/genetics";

declare module "@package/com/denfop/api/bee" {
    export class $BeeAI {
        test(arg0: number[][], arg1: number[]): number;
        static init(): void;
        getSeed(): number;
        forward(arg0: number[]): number[];
        train(arg0: number[][], arg1: number[][]): void;
        predict(arg0: number[]): number;
        getAnswer(): number[];
        getWeightsHiddenOutput(): number[];
        getWeightsInputHidden(): number[];
        static beeAI: $BeeAI;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $BeeAI$ActivationFunction_, arg4: $BeeAI$Solver_, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: number);
        get seed(): number;
        get answer(): number[];
        get weightsHiddenOutput(): number[];
        get weightsInputHidden(): number[];
    }
    export class $BeeInit {
        static init(): void;
        static SWAMP_BEE: $BeeBase;
        static TROPICAL_BEE: $BeeBase;
        static PLAINS_BEE: $BeeBase;
        static WINTER_BEE: $BeeBase;
        static FOREST_BEE: $BeeBase;
        constructor();
    }
    export class $Product {
        equals(arg0: $ICrop): boolean;
        getChance(): number;
        getCrop(): $ICrop;
        addChance(arg0: number): void;
        removeChance(arg0: number): void;
        constructor(arg0: number, arg1: $ICrop);
        get chance(): number;
        get crop(): $ICrop;
    }
    export class $BeeAI$ActivationFunction extends $Enum<$BeeAI$ActivationFunction> {
        static values(): $BeeAI$ActivationFunction[];
        static valueOf(arg0: string): $BeeAI$ActivationFunction;
        static IDENTITY: $BeeAI$ActivationFunction;
        static TANH: $BeeAI$ActivationFunction;
        static LOGISTIC: $BeeAI$ActivationFunction;
        static RELU: $BeeAI$ActivationFunction;
    }
    /**
     * Values that may be interpreted as {@link $BeeAI$ActivationFunction}.
     */
    export type $BeeAI$ActivationFunction_ = "identity" | "logistic" | "tanh" | "relu";
    export class $BeeBase implements $Bee {
        getName(): string;
        getId(): number;
        copy(): $BeeBase;
        getMaxMortalityRate(): number;
        getWeatherResistance(): number;
        getUnCompatibleBees(): $List<$Bee>;
        readPacket(arg0: $CustomPacketBuffer): void;
        isNight(): boolean;
        addBiome(arg0: $ResourceKey_<$Biome>): void;
        getBiomes(): $List<$ResourceKey<$Biome>>;
        getChance(): number;
        setChance(arg0: number): void;
        getTickLifecycles(): number;
        addPercentProduct(arg0: $ICrop, arg1: number): void;
        removeAllPercent(arg0: number): void;
        getSizeTerritory(): $AABB;
        canWorkInBiome(arg0: $ResourceKey_<$Biome>): boolean;
        canWorkInBiome(arg0: $Biome_, arg1: $Level_): boolean;
        getOffspring(): number;
        getTickBirthRate(): number;
        getMaxSwarm(): number;
        getCropFlower(): $ICrop;
        writePacket(arg0: $CustomPacketBuffer): $CustomPacketBuffer;
        getProduct(): $List<$Product>;
        isSun(): boolean;
        setUnCompatibleBees(arg0: $List_<$Bee>): void;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $AABB_, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: $ICrop, arg11: $List_<$Bee>, arg12: number, arg13: number);
        get name(): string;
        get id(): number;
        get maxMortalityRate(): number;
        get weatherResistance(): number;
        get night(): boolean;
        get biomes(): $List<$ResourceKey<$Biome>>;
        get tickLifecycles(): number;
        get sizeTerritory(): $AABB;
        get offspring(): number;
        get tickBirthRate(): number;
        get maxSwarm(): number;
        get cropFlower(): $ICrop;
        get product(): $List<$Product>;
        get sun(): boolean;
    }
    export class $BeeAI$Solver extends $Enum<$BeeAI$Solver> {
        static values(): $BeeAI$Solver[];
        static valueOf(arg0: string): $BeeAI$Solver;
        static SGD: $BeeAI$Solver;
        static ADAM: $BeeAI$Solver;
    }
    /**
     * Values that may be interpreted as {@link $BeeAI$Solver}.
     */
    export type $BeeAI$Solver_ = "sgd" | "adam";
    export class $Bee {
    }
    export interface $Bee extends $INetworkObject {
        getName(): string;
        getId(): number;
        copy(): $Bee;
        getMaxMortalityRate(): number;
        getWeatherResistance(): number;
        getUnCompatibleBees(): $List<$Bee>;
        readPacket(arg0: $CustomPacketBuffer): void;
        isNight(): boolean;
        addBiome(arg0: $ResourceKey_<$Biome>): void;
        getBiomes(): $List<$ResourceKey<$Biome>>;
        getChance(): number;
        setChance(arg0: number): void;
        getTickLifecycles(): number;
        addPercentProduct(arg0: $ICrop, arg1: number): void;
        removeAllPercent(arg0: number): void;
        getSizeTerritory(): $AABB;
        canWorkInBiome(arg0: $ResourceKey_<$Biome>): boolean;
        canWorkInBiome(arg0: $Biome_, arg1: $Level_): boolean;
        getOffspring(): number;
        getTickBirthRate(): number;
        getMaxSwarm(): number;
        getCropFlower(): $ICrop;
        getProduct(): $List<$Product>;
        isSun(): boolean;
        setUnCompatibleBees(arg0: $List_<$Bee>): void;
        get name(): string;
        get id(): number;
        get maxMortalityRate(): number;
        get weatherResistance(): number;
        get night(): boolean;
        get biomes(): $List<$ResourceKey<$Biome>>;
        get tickLifecycles(): number;
        get sizeTerritory(): $AABB;
        get offspring(): number;
        get tickBirthRate(): number;
        get maxSwarm(): number;
        get cropFlower(): $ICrop;
        get product(): $List<$Product>;
        get sun(): boolean;
    }
    export class $BeeNetwork {
        static init(): void;
        addNewApiaryToWorld(arg0: $BlockEntityApiary): void;
        removeApiaryFromWorld(arg0: $BlockEntityApiary): void;
        getApiaryFromChunk(arg0: $Level_, arg1: $ChunkPos): $List<$BlockEntityApiary>;
        getBeeMap(): $Map<number, $Bee>;
        getBee(arg0: number): $Bee;
        addBee(arg0: $BeeBase): void;
        static instance: $BeeNetwork;
        constructor();
        get beeMap(): $Map<number, $Bee>;
    }
}
