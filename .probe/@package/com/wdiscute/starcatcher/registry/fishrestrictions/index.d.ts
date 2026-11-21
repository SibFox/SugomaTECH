import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $FishProperties_, $Rarity_, $Rarity } from "@package/com/wdiscute/starcatcher/fish";
import { $Predicate } from "@package/java/util/function";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/wdiscute/starcatcher/registry/fishrestrictions" {
    export class $WeatherRestriction extends $AbstractFishRestriction {
        static RAIN: $WeatherRestriction;
        static CODEC: $MapCodec<$WeatherRestriction>;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        translationOverride: string;
        static CLEAR: $WeatherRestriction;
        static THUNDER: $WeatherRestriction;
        constructor(arg0: $WeatherRestriction$Weather_);
        constructor(arg0: $WeatherRestriction$Weather_, arg1: string);
    }
    export class $AbstractFishRestriction$Context extends $Enum<$AbstractFishRestriction$Context> {
        static values(): $AbstractFishRestriction$Context[];
        static valueOf(arg0: string): $AbstractFishRestriction$Context;
        isGuide(): boolean;
        static GUIDE_ENTRY: $AbstractFishRestriction$Context;
        static OTHER: $AbstractFishRestriction$Context;
        static FISHING: $AbstractFishRestriction$Context;
        static TRACKER: $AbstractFishRestriction$Context;
        static RADAR: $AbstractFishRestriction$Context;
        static FISH_ENTITY: $AbstractFishRestriction$Context;
        static JEMI: $AbstractFishRestriction$Context;
        static COMMAND: $AbstractFishRestriction$Context;
        static GUIDE_FISHES_IN_AREA: $AbstractFishRestriction$Context;
        static GUIDE_FISHES_HOVER: $AbstractFishRestriction$Context;
        get guide(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbstractFishRestriction$Context}.
     */
    export type $AbstractFishRestriction$Context_ = "command" | "fishing" | "tracker" | "radar" | "guide_entry" | "guide_fishes_in_area" | "guide_fishes_hover" | "fish_entity" | "jemi" | "other";
    export class $RarityCountRestriction$RarityCount$CountType extends $Enum<$RarityCountRestriction$RarityCount$CountType> implements $StringRepresentable {
        static values(): $RarityCountRestriction$RarityCount$CountType[];
        static valueOf(arg0: string): $RarityCountRestriction$RarityCount$CountType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOTAL: $RarityCountRestriction$RarityCount$CountType;
        static ALL: $RarityCountRestriction$RarityCount$CountType;
        static CODEC: $Codec<$RarityCountRestriction$RarityCount$CountType>;
        static UNIQUE: $RarityCountRestriction$RarityCount$CountType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RarityCountRestriction$RarityCount$CountType}.
     */
    export type $RarityCountRestriction$RarityCount$CountType_ = "all" | "unique" | "total";
    export class $WeatherRestriction$Weather extends $Enum<$WeatherRestriction$Weather> implements $StringRepresentable {
        static values(): $WeatherRestriction$Weather[];
        static valueOf(arg0: string): $WeatherRestriction$Weather;
        getSerializedName(): string;
        toLanguageKey(): string;
        getRemappedEnumConstantName(): string;
        static RAIN_OR_THUNDER: $WeatherRestriction$Weather;
        static RAIN: $WeatherRestriction$Weather;
        static CODEC: $Codec<$WeatherRestriction$Weather>;
        static CLEAR_OR_RAIN: $WeatherRestriction$Weather;
        static CLEAR_OR_THUNDER: $WeatherRestriction$Weather;
        static CLEAR: $WeatherRestriction$Weather;
        static THUNDER: $WeatherRestriction$Weather;
        isCorrect: $Predicate<$Level>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WeatherRestriction$Weather}.
     */
    export type $WeatherRestriction$Weather_ = "clear" | "rain" | "thunder" | "clear_or_rain" | "clear_or_thunder" | "rain_or_thunder";
    export class $DaytimeRestriction extends $AbstractFishRestriction {
        static DAWN_AND_DUSK: $DaytimeRestriction;
        static CODEC: $MapCodec<$DaytimeRestriction>;
        static NOON: $DaytimeRestriction;
        static NIGHT: $DaytimeRestriction;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        translationOverride: string;
        static MIDNIGHT: $DaytimeRestriction;
        static DAY: $DaytimeRestriction;
        constructor(arg0: $List_<$DaytimeRestriction$Duo_>, arg1: string);
    }
    export class $BaitRestriction extends $AbstractFishRestriction {
        static CODEC: $MapCodec<$BaitRestriction>;
        translationOverride: string;
        static LEGENDARY_BAIT: $BaitRestriction;
        static SCULK_BAIT: $BaitRestriction;
        static WITHER_SKELETON_SKULL: $BaitRestriction;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        static MURKWATER_BAIT: $BaitRestriction;
        static FISH_OF_THIEVES: $BaitRestriction;
        static DRIPSTONE_BAIT: $BaitRestriction;
        baits: $Map<$ResourceLocation, number>;
        static LUSH_BAIT: $BaitRestriction;
        static CHERRY_BAIT: $BaitRestriction;
        static ALMIGHTY_WORM: $BaitRestriction;
        constructor(arg0: $Map_<$ResourceLocation_, number>, arg1: string);
    }
    export class $DaytimeRestriction$Duo extends $Record {
        first(): number;
        second(): number;
        static CODEC: $Codec<$DaytimeRestriction$Duo>;
        constructor(first: number, second: number);
    }
    /**
     * Values that may be interpreted as {@link $DaytimeRestriction$Duo}.
     */
    export type $DaytimeRestriction$Duo_ = { first?: number, second?: number,  } | [first?: number, second?: number, ];
    export interface $AbstractFishRestriction extends RegistryMarked<RegistryTypes.StarcatcherFishRestrictionsTag, RegistryTypes.StarcatcherFishRestrictions> {}
    export class $RarityCountRestriction$RarityCount extends $Record {
        count(): number;
        rarity(): $Rarity;
        countType(): $RarityCountRestriction$RarityCount$CountType;
        static CODEC: $Codec<$RarityCountRestriction$RarityCount>;
        constructor(rarity: $Rarity_, count: number, countType: $RarityCountRestriction$RarityCount$CountType_);
    }
    /**
     * Values that may be interpreted as {@link $RarityCountRestriction$RarityCount}.
     */
    export type $RarityCountRestriction$RarityCount_ = { count?: number, countType?: $RarityCountRestriction$RarityCount$CountType_, rarity?: $Rarity_,  } | [count?: number, countType?: $RarityCountRestriction$RarityCount$CountType_, rarity?: $Rarity_, ];
    export class $AbstractFishRestriction implements $Comparable<$AbstractFishRestriction> {
        compareTo(arg0: $AbstractFishRestriction_): number;
        isEnabled(): boolean;
        codec(): $MapCodec<$AbstractFishRestriction>;
        getColor(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): number;
        getDescription(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $Component;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $AbstractFishRestriction$Context_): void;
        getRegistryHolderOrThrow(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
        getRegistryHolder(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
        getCodecOrThrow(): $MapCodec<$AbstractFishRestriction>;
        getNonOverriddenDescription(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $MutableComponent;
        getDescriptionPrefix(): $MutableComponent;
        getHover(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $List<$Component>;
        getIndexHover(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $List<$Component>;
        getBlacklist(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $List<$Component>;
        adjustChance(arg0: number, arg1: $Level_, arg2: $FishProperties_, arg3: $Entity, arg4: $ItemStack_, arg5: $AbstractFishRestriction$Context_): number;
        getSortPriority(): number;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        translationOverride: string;
        get enabled(): boolean;
        get registryHolderOrThrow(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
        get registryHolder(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
        get codecOrThrow(): $MapCodec<$AbstractFishRestriction>;
        get descriptionPrefix(): $MutableComponent;
        get sortPriority(): number;
    }
    /**
     * Values that may be interpreted as {@link $AbstractFishRestriction}.
     */
    export type $AbstractFishRestriction_ = RegistryTypes.StarcatcherFishRestrictions;
}
