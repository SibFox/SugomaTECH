import { $Level_ } from "@package/net/minecraft/world/level";
import { $DeferredItem, $DeferredBlock } from "@package/net/neoforged/neoforge/registries";
import { $Modifier } from "@package/com/wdiscute/starcatcher/modifiers";
import { $Codec } from "@package/com/mojang/serialization";
import { $AbstractFishRestriction$Context_, $RarityCountRestriction$RarityCount_, $AbstractFishRestriction_, $BaitRestriction, $DaytimeRestriction, $AbstractFishRestriction, $WeatherRestriction } from "@package/com/wdiscute/starcatcher/registry/fishrestrictions";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MaybeStack, $MaybeStack_ } from "@package/com/wdiscute/utils";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/wdiscute/starcatcher/fish" {
    export class $Difficulty$SweetSpot extends $Record {
        modifiers(): $List<$Modifier>;
        size(): number;
        flip(): $Difficulty$SweetSpot;
        withModifiers(...arg0: $Modifier[]): $Difficulty$SweetSpot;
        reward(): number;
        texturePath(): $ResourceLocation;
        moving(arg0: number): $Difficulty$SweetSpot;
        isFlip(): boolean;
        movingRate(): number;
        vanishing(arg0: number): $Difficulty$SweetSpot;
        vanishingRate(): number;
        sweetSpotType(): $ResourceLocation;
        particleColor(): number;
        static BROWN_MUSHROOM: $Difficulty$SweetSpot;
        static END_CRAB_CLAW: $Difficulty$SweetSpot;
        static DRIPSTONE: $Difficulty$SweetSpot;
        static NORMAL_HEAVY: $Difficulty$SweetSpot;
        static DEEPSLATE_CRAB_LEG: $Difficulty$SweetSpot;
        static NORMAL_STEADY: $Difficulty$SweetSpot;
        static NETHER_CRAB_LEG: $Difficulty$SweetSpot;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Difficulty$SweetSpot>;
        static MIRAGE_NORMAL: $Difficulty$SweetSpot;
        static VOIDBITER_SPOT: $Difficulty$SweetSpot;
        static WITHER: $Difficulty$SweetSpot;
        static CREEPER: $Difficulty$SweetSpot;
        static NETHER_CRAB_CLAW: $Difficulty$SweetSpot;
        static GLOWING: $Difficulty$SweetSpot;
        static LIST_CODEC: $Codec<$List<$Difficulty$SweetSpot>>;
        static TNT: $Difficulty$SweetSpot;
        static THIN_STEADY: $Difficulty$SweetSpot;
        static TRASH: $Difficulty$SweetSpot;
        static END_CRAB_LEG: $Difficulty$SweetSpot;
        static WITHER_BIG: $Difficulty$SweetSpot;
        static MIRAGE_THIN: $Difficulty$SweetSpot;
        static CODEC: $Codec<$Difficulty$SweetSpot>;
        static DEEPSLATE_CRAB_CLAW: $Difficulty$SweetSpot;
        static DEEPSLATE: $Difficulty$SweetSpot;
        static LIST_STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $List<$Difficulty$SweetSpot>>;
        static TREASURE: $Difficulty$SweetSpot;
        static SCULK: $Difficulty$SweetSpot;
        static CLOUD_1: $Difficulty$SweetSpot;
        static CLOUD_4: $Difficulty$SweetSpot;
        static CLOUD_2: $Difficulty$SweetSpot;
        static RED_MUSHROOM: $Difficulty$SweetSpot;
        static CLOUD_3: $Difficulty$SweetSpot;
        static FROZEN: $Difficulty$SweetSpot;
        static STONE: $Difficulty$SweetSpot;
        static TNT_VANISHING: $Difficulty$SweetSpot;
        static LEAF: $Difficulty$SweetSpot;
        static NORMAL: $Difficulty$SweetSpot;
        static THIN: $Difficulty$SweetSpot;
        static THIN_STEADY_MOSSY: $Difficulty$SweetSpot;
        static STONE_LOW_REWARD: $Difficulty$SweetSpot;
        static OBSIDIAN_CRAB_CLAW: $Difficulty$SweetSpot;
        static OBSIDIAN_CRAB_LEG: $Difficulty$SweetSpot;
        constructor(sweetSpotType: $ResourceLocation_, texturePath: $ResourceLocation_, size: number, reward: number, isFlip: boolean, vanishingRate: number, movingRate: number, particleColor: number, modifiers: $List_<$Modifier>);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: $List_<$Modifier>);
    }
    /**
     * Values that may be interpreted as {@link $Difficulty$SweetSpot}.
     */
    export type $Difficulty$SweetSpot_ = { movingRate?: number, particleColor?: number, reward?: number, vanishingRate?: number, modifiers?: $List_<$Modifier>, isFlip?: boolean, sweetSpotType?: $ResourceLocation_, texturePath?: $ResourceLocation_, size?: number,  } | [movingRate?: number, particleColor?: number, reward?: number, vanishingRate?: number, modifiers?: $List_<$Modifier>, isFlip?: boolean, sweetSpotType?: $ResourceLocation_, texturePath?: $ResourceLocation_, size?: number, ];
    export class $CatchInfo extends $Record {
        fish(): $MaybeStack;
        entityToSpawn(): $Holder<$EntityType<never>>;
        fishEntryType(): $CatchInfo$FishEntryType;
        withEntityToSpawn(arg0: $Holder_<$EntityType<never>>): $CatchInfo;
        withFish(arg0: $MaybeStack_): $CatchInfo;
        withAlwaysSpawnEntity(): $CatchInfo;
        withItemToOverrideWith(arg0: $MaybeStack_): $CatchInfo;
        overrideMinigameWith(): $MaybeStack;
        withBucket(arg0: $MaybeStack_): $CatchInfo;
        bucketedFish(): $MaybeStack;
        alwaysSpawnEntity(): boolean;
        withFishType(arg0: $CatchInfo$FishEntryType_): $CatchInfo;
        static CODEC: $Codec<$CatchInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CatchInfo>;
        static DEFAULT: $CatchInfo;
        constructor(fish: $MaybeStack_, bucketedFish: $MaybeStack_, entityToSpawn: $Holder_<$EntityType<never>>, alwaysSpawnEntity: boolean, overrideMinigameWith: $MaybeStack_, fishEntryType: $CatchInfo$FishEntryType_);
    }
    /**
     * Values that may be interpreted as {@link $CatchInfo}.
     */
    export type $CatchInfo_ = { alwaysSpawnEntity?: boolean, fish?: $MaybeStack_, bucketedFish?: $MaybeStack_, entityToSpawn?: $Holder_<$EntityType<never>>, fishEntryType?: $CatchInfo$FishEntryType_, overrideMinigameWith?: $MaybeStack_,  } | [alwaysSpawnEntity?: boolean, fish?: $MaybeStack_, bucketedFish?: $MaybeStack_, entityToSpawn?: $Holder_<$EntityType<never>>, fishEntryType?: $CatchInfo$FishEntryType_, overrideMinigameWith?: $MaybeStack_, ];
    export class $FishProperties extends $Record {
        static empty(): $FishProperties;
        message(): $FishProperties;
        extra(): $FishProperties;
        getDisplayName(): $Component;
        dif(): $Difficulty;
        restrictions(): $List<$AbstractFishRestriction>;
        textures(): $ResourceLocation;
        rarity(): $Rarity;
        hasGuideEntry(): boolean;
        calculateChance(arg0: $Entity, arg1: $Level_, arg2: $ItemStack_, arg3: $AbstractFishRestriction$Context_): number;
        withBucketedFish(arg0: $MaybeStack_): $FishProperties;
        withBucketedFish(arg0: string, arg1: string): $FishProperties;
        withSkipsMinigame(): $FishProperties;
        withWeather(arg0: $WeatherRestriction): $FishProperties;
        withHasGuideEntry(arg0: boolean): $FishProperties;
        addRestrictions(...arg0: $AbstractFishRestriction_[]): $FishProperties;
        withMaxLimit(arg0: number): $FishProperties;
        withTextures(arg0: $ResourceLocation_): $FishProperties;
        withEntityToSpawn(arg0: string, arg1: string): $FishProperties;
        withEntityToSpawn(arg0: $Holder_<$EntityType<never>>): $FishProperties;
        withRestrictions(arg0: $List_<$AbstractFishRestriction_>): $FishProperties;
        addRestriction(arg0: $AbstractFishRestriction_): $FishProperties;
        withSizeAndWeight(arg0: $SizeAndWeight_): $FishProperties;
        withSizeAndWeight(arg0: number, arg1: number, arg2: number, arg3: number): $FishProperties;
        withBaseChance(arg0: number): $FishProperties;
        baseChance(): number;
        trophy(): $FishProperties;
        withFish(arg0: $DeferredBlock<$Block_>): $FishProperties;
        withFish(arg0: $DeferredItem<$Item_>): $FishProperties;
        withFish(arg0: string, arg1: string): $FishProperties;
        withFish(arg0: $Item_): $FishProperties;
        withFish(arg0: $MaybeStack_): $FishProperties;
        withFish(arg0: $ItemStack_): $FishProperties;
        withDifficulty(arg0: $Difficulty_): $FishProperties;
        withAlwaysSpawnEntity(): $FishProperties;
        withDaytimeRestriction(arg0: $DaytimeRestriction): $FishProperties;
        addRarityRestriction(...arg0: $RarityCountRestriction$RarityCount_[]): $FishProperties;
        withItemToOverrideWith(arg0: $MaybeStack_): $FishProperties;
        withPercentageChance(arg0: number): $FishProperties;
        catchInfo(): $CatchInfo;
        toLoc(arg0: $Level_): $ResourceLocation;
        addBait(arg0: $BaitRestriction): $FishProperties;
        withRarity(arg0: $Rarity_): $FishProperties;
        sizeWeight(): $SizeAndWeight;
        withCatchInfo(arg0: $CatchInfo_): $FishProperties;
        skipMinigame(): boolean;
        static SKY: $ResourceLocation;
        static CAVE: $ResourceLocation;
        static DEEP_DARK: $ResourceLocation;
        static CODEC: $Codec<$FishProperties>;
        static LAVA_OVERWORLD: $ResourceLocation;
        static NETHER: $ResourceLocation;
        static SURFACE: $ResourceLocation;
        static END: $ResourceLocation;
        static END_VOID: $ResourceLocation;
        static ICY: $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FishProperties>;
        constructor(catchInfo: $CatchInfo_, baseChance: number, sizeWeight: $SizeAndWeight_, rarity: $Rarity_, restrictions: $List_<$AbstractFishRestriction_>, dif: $Difficulty_, skipMinigame: boolean, hasGuideEntry: boolean, textures: $ResourceLocation_);
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $FishProperties}.
     */
    export type $FishProperties_ = RegistryTypes.StarcatcherFish | { textures?: $ResourceLocation_, catchInfo?: $CatchInfo_, sizeWeight?: $SizeAndWeight_, baseChance?: number, dif?: $Difficulty_, hasGuideEntry?: boolean, restrictions?: $List_<$AbstractFishRestriction_>, skipMinigame?: boolean, rarity?: $Rarity_,  } | [textures?: $ResourceLocation_, catchInfo?: $CatchInfo_, sizeWeight?: $SizeAndWeight_, baseChance?: number, dif?: $Difficulty_, hasGuideEntry?: boolean, restrictions?: $List_<$AbstractFishRestriction_>, skipMinigame?: boolean, rarity?: $Rarity_, ];
    export class $SizeAndWeight extends $Record {
        sizeAverage(): number;
        weightAverage(): number;
        sizeDeviation(): number;
        weightDeviation(): number;
        getWeightForPercentile(arg0: number): number;
        getSizeForPercentile(arg0: number): number;
        goldenChance(): number;
        static getRandomSize(arg0: $FishProperties_, arg1: number): number;
        static getRandomWeight(arg0: $FishProperties_, arg1: number): number;
        static CODEC: $Codec<$SizeAndWeight>;
        static NONE: $SizeAndWeight;
        static DEFAULT: $SizeAndWeight;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SizeAndWeight>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(sizeAverage: number, sizeDeviation: number, weightAverage: number, weightDeviation: number, goldenChance: number);
    }
    /**
     * Values that may be interpreted as {@link $SizeAndWeight}.
     */
    export type $SizeAndWeight_ = { weightDeviation?: number, sizeAverage?: number, goldenChance?: number, sizeDeviation?: number, weightAverage?: number,  } | [weightDeviation?: number, sizeAverage?: number, goldenChance?: number, sizeDeviation?: number, weightAverage?: number, ];
    export class $Difficulty extends $Record {
        modifiers(): $List<$Modifier>;
        flip(): $Difficulty;
        decay(): number;
        speed(): number;
        hp(): number;
        addModifier(arg0: $Modifier): $Difficulty;
        moving(): $Difficulty;
        moving(arg0: number): $Difficulty;
        penalty(): number;
        addModifiers(arg0: $List_<$Modifier>): $Difficulty;
        sweetSpots(): $List<$Difficulty$SweetSpot>;
        withSpeed(arg0: number): $Difficulty;
        withHP(arg0: number): $Difficulty;
        vanishing(arg0: number): $Difficulty;
        vanishing(): $Difficulty;
        withDecay(arg0: number): $Difficulty;
        withPenalty(arg0: number): $Difficulty;
        static HARD_DEEP_DARK: $Difficulty;
        static EASY_MIRAGE: $Difficulty;
        static MEDIUM_DEEP_DARK: $Difficulty;
        static EASY_STONE: $Difficulty;
        static DEEPSLATE_CRAB: $Difficulty;
        static MEDIUM_STONE: $Difficulty;
        static HARD: $Difficulty;
        static HARD_FROZEN: $Difficulty;
        static VESANI: $Difficulty;
        static HARD_MIRAGE: $Difficulty;
        static JOEL: $Difficulty;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Difficulty>;
        static NETHER_CRAB: $Difficulty;
        static MEDIUM_FROZEN: $Difficulty;
        static WITHER: $Difficulty;
        static CLOUDFIN: $Difficulty;
        static HARD_STONE: $Difficulty;
        static WARD: $Difficulty;
        static CREEPER: $Difficulty;
        static MEDIUM_MIRAGE_MOVING: $Difficulty;
        static CERBERAY: $Difficulty;
        static TRASH: $Difficulty;
        static EASY_DEEPSLATE: $Difficulty;
        static MEDIUM_MIRAGE: $Difficulty;
        static EASY_DEEP_DARK: $Difficulty;
        static AZURE_CRYSTALBACK_MINNOW: $Difficulty;
        static AURORA: $Difficulty;
        static SHROOMFISH: $Difficulty;
        static EASY: $Difficulty;
        static HARD_DRIPSTONE: $Difficulty;
        static HARD_MIRAGE_MOVING: $Difficulty;
        static CODEC: $Codec<$Difficulty>;
        static MEDIUM: $Difficulty;
        static MEDIUM_DRIPSTONE: $Difficulty;
        static EASY_MIRAGE_MOVING: $Difficulty;
        static VOIDBITER: $Difficulty;
        static EASY_DRIPSTONE: $Difficulty;
        static OBSIDIAN_CRAB: $Difficulty;
        static DEEPSLATEFISH: $Difficulty;
        static END_CRAB: $Difficulty;
        static OASIS_SURGEON: $Difficulty;
        static EASY_FROZEN: $Difficulty;
        static BOREAL: $Difficulty;
        static MEDIUM_DEEPSLATE: $Difficulty;
        static STONEFISH: $Difficulty;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $List_<$Modifier>, ...arg5: $Difficulty$SweetSpot_[]);
        constructor(hp: number, speed: number, penalty: number, decay: number, modifiers: $List_<$Modifier>, sweetSpots: $List_<$Difficulty$SweetSpot_>);
    }
    /**
     * Values that may be interpreted as {@link $Difficulty}.
     */
    export type $Difficulty_ = { hp?: number, decay?: number, modifiers?: $List_<$Modifier>, speed?: number, sweetSpots?: $List_<$Difficulty$SweetSpot_>, penalty?: number,  } | [hp?: number, decay?: number, modifiers?: $List_<$Modifier>, speed?: number, sweetSpots?: $List_<$Difficulty$SweetSpot_>, penalty?: number, ];
    export class $CatchInfo$FishEntryType extends $Enum<$CatchInfo$FishEntryType> implements $StringRepresentable {
        static values(): $CatchInfo$FishEntryType[];
        static valueOf(arg0: string): $CatchInfo$FishEntryType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MESSAGE: $CatchInfo$FishEntryType;
        static CODEC: $Codec<$CatchInfo$FishEntryType>;
        static EXTRA: $CatchInfo$FishEntryType;
        static FISH: $CatchInfo$FishEntryType;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CatchInfo$FishEntryType>;
        static TROPHY: $CatchInfo$FishEntryType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CatchInfo$FishEntryType}.
     */
    export type $CatchInfo$FishEntryType_ = "fish" | "trophy" | "message" | "extra";
    export class $Rarity extends $Enum<$Rarity> implements $StringRepresentable {
        static values(): $Rarity[];
        static valueOf(arg0: string): $Rarity;
        getId(): number;
        getSerializedName(): string;
        static isGolden(arg0: $ItemStack_): boolean;
        wrapWithRarityMarkdownAsString(arg0: string): string;
        getXp(): number;
        wrapWithRarityMarkdown(arg0: string): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Rarity>;
        static RARE: $Rarity;
        static EPIC: $Rarity;
        static UNCOMMON: $Rarity;
        static COMMON: $Rarity;
        static NONE: $Rarity;
        static TRASH: $Rarity;
        static GOLDEN: $Rarity;
        static LEGENDARY: $Rarity;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Rarity>;
        get id(): number;
        get serializedName(): string;
        get xp(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Rarity}.
     */
    export type $Rarity_ = "none" | "trash" | "common" | "uncommon" | "rare" | "epic" | "legendary" | "golden";
    export interface $FishProperties extends RegistryMarked<RegistryTypes.StarcatcherFishTag, RegistryTypes.StarcatcherFish> {}
}
