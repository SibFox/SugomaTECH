import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FinalizeSpawnEvent, $LivingEntityUseItemEvent$Finish } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Enum } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $IAdvReactor } from "@package/com/denfop/api/reactors";
import { $ItemTooltipEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $PlayerTickEvent$Post, $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";

declare module "@package/com/denfop/api/pollution/radiation" {
    export class $EventHandler {
        tick(arg0: $LevelTickEvent$Post): void;
        tick(arg0: $PlayerTickEvent$Post): void;
        onFinalizeSpawn(arg0: $FinalizeSpawnEvent): void;
        constructor();
    }
    export class $RadiationFoodHelper {
        static getCategory(arg0: $ItemStack_): $RadiationFoodHelper$FoodCategory;
        static getDoseRatio(arg0: $ItemStack_): number;
        static hasRadiation(arg0: $ItemStack_): boolean;
        static isConsumableCandidate(arg0: $ItemStack_): boolean;
        static getContaminationIncrement(arg0: $EnumLevelRadiation_, arg1: $ItemStack_): number;
        static addFoodRadiationDose(arg0: $ItemStack_, arg1: number): number;
        static shouldSpoilIntoRottenFlesh(arg0: $ItemStack_): boolean;
        static getFoodRadiationDose(arg0: $ItemStack_): number;
        static isWaterLikeCategory(arg0: $ItemStack_): boolean;
        static getDoseFormatting(arg0: number, arg1: number): $ChatFormatting;
        static getSpoilThreshold(arg0: $ItemStack_): number;
        static createSpoiledStack(arg0: $ItemStack_): $ItemStack;
        static formatDose(arg0: number): string;
        static setFoodRadiationDose(arg0: $ItemStack_, arg1: number): void;
        static isAboveCriticalThreshold(arg0: $ItemStack_): boolean;
        static isContaminatableFood(arg0: $ItemStack_): boolean;
        static isDrinkLike(arg0: $ItemStack_): boolean;
        static getBaseContaminationIncrement(arg0: $EnumLevelRadiation_): number;
    }
    export class $Radiation {
        process(arg0: $Player): void;
        getCoef(): $EnumCoefficient;
        setLevel(arg0: $EnumLevelRadiation_): void;
        getLevel(): $EnumLevelRadiation;
        getPos(): $ChunkPos;
        writePacket(arg0: $CustomPacketBuffer): $CustomPacketBuffer;
        removeRadiationWithType(arg0: number, arg1: $Level_): boolean;
        addRadiation(arg0: number): void;
        getRadiation(): number;
        setCoef(arg0: $EnumCoefficient_): void;
        removeRadiation(arg0: number): void;
        setRadiation(arg0: number): void;
        writeCompound(): $CompoundTag;
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $ChunkPos);
        get pos(): $ChunkPos;
    }
    export class $RadiationSystem {
        update(arg0: $Player): void;
        clear(): void;
        getMap(): $Map<$ChunkPos, $Radiation>;
        work(arg0: $Player): void;
        addRadiation(arg0: $CompoundTag_): void;
        addRadiation(arg0: $Radiation): void;
        getAdvReactorMap(): $Map<$ChunkPos, $List<$IAdvReactor>>;
        addRadiationWihoutUpdate(arg0: $Radiation): void;
        getRadiationList(): $List<$Radiation>;
        workDecay(arg0: $Level_): void;
        radiationList: $List<$Radiation>;
        static rad_system: $RadiationSystem;
        constructor();
        get map(): $Map<$ChunkPos, $Radiation>;
        get advReactorMap(): $Map<$ChunkPos, $List<$IAdvReactor>>;
    }
    export class $RadiationFoodHelper$FoodCategory extends $Enum<$RadiationFoodHelper$FoodCategory> {
        static values(): $RadiationFoodHelper$FoodCategory[];
        static valueOf(arg0: string): $RadiationFoodHelper$FoodCategory;
        getTranslationKey(): string;
        static OTHER: $RadiationFoodHelper$FoodCategory;
        static VEGETABLE: $RadiationFoodHelper$FoodCategory;
        static MEAT: $RadiationFoodHelper$FoodCategory;
        static WATER: $RadiationFoodHelper$FoodCategory;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $RadiationFoodHelper$FoodCategory}.
     */
    export type $RadiationFoodHelper$FoodCategory_ = "meat" | "vegetable" | "water" | "other";
    export class $EnumCoefficient extends $Enum<$EnumCoefficient> {
        static values(): $EnumCoefficient[];
        static valueOf(arg0: string): $EnumCoefficient;
        static NANO: $EnumCoefficient;
        static KILO: $EnumCoefficient;
        static MICRO: $EnumCoefficient;
        static MILI: $EnumCoefficient;
        static DEFAULT: $EnumCoefficient;
    }
    /**
     * Values that may be interpreted as {@link $EnumCoefficient}.
     */
    export type $EnumCoefficient_ = "nano" | "micro" | "mili" | "default" | "kilo";
    export class $EnumLevelRadiation extends $Enum<$EnumLevelRadiation> {
        static values(): $EnumLevelRadiation[];
        static valueOf(arg0: string): $EnumLevelRadiation;
        static VERY_HIGH: $EnumLevelRadiation;
        static HIGH: $EnumLevelRadiation;
        static MEDIUM: $EnumLevelRadiation;
        static LOW: $EnumLevelRadiation;
        static DEFAULT: $EnumLevelRadiation;
    }
    /**
     * Values that may be interpreted as {@link $EnumLevelRadiation}.
     */
    export type $EnumLevelRadiation_ = "low" | "default" | "medium" | "high" | "very_high";
    export class $RadiationFoodSystem {
        onTooltip(arg0: $ItemTooltipEvent): void;
        onPlayerTick(arg0: $PlayerTickEvent$Post): void;
        onItemConsumed(arg0: $LivingEntityUseItemEvent$Finish): void;
        onFinishUse(arg0: $LivingEntityUseItemEvent$Finish): void;
        constructor();
    }
}
