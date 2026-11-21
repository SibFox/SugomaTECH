import { $CompoundTag_ } from "@package/net/minecraft/nbt";

declare module "@package/com/leclowndu93150/animalweights" {
    export class $WeightHolder {
    }
    export interface $WeightHolder {
        animalweights$setWeightData(arg0: $WeightData): void;
        animalweights$getWeightData(): $WeightData;
    }
    export class $WeightData {
        static load(arg0: $CompoundTag_): $WeightData;
        save(arg0: $CompoundTag_): void;
        getWeight(): number;
        static defaultWeight(): number;
        setNaturallySpawned(arg0: boolean): void;
        static minWeight(): number;
        setWeight(arg0: number): void;
        static maxWeight(): number;
        getBonusCacheTick(): number;
        getBonusCacheValue(): boolean;
        isNaturallySpawned(): boolean;
        storeBonusCache(arg0: number, arg1: boolean): void;
        isEngaged(): boolean;
        setEngaged(arg0: boolean): void;
        getTicksSinceEvaluation(): number;
        resetTicksSinceEvaluation(): void;
        incrementTicksSinceEvaluation(): void;
        constructor(arg0: number);
        constructor();
        get bonusCacheTick(): number;
        get bonusCacheValue(): boolean;
        get ticksSinceEvaluation(): number;
    }
}
