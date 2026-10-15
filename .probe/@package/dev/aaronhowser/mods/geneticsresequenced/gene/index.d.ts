import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $EntityType_, $LivingEntity, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $Optional, $List_ } from "@package/java/util";
import { $HolderLookup$Provider, $Holder_, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/aaronhowser/mods/geneticsresequenced/gene" {
    export class $Gene$AttributeEntry {
        copy(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): $Gene$AttributeEntry;
        getAttribute(): $Holder<$Attribute>;
        static access$getDIRECT_CODEC$cp(): $Codec<any>;
        component1(): $Holder<$Attribute>;
        getModifier(): $AttributeModifier;
        component2(): $AttributeModifier;
        static access$getDIRECT_STREAM_CODEC$cp(): $StreamCodec<any, any>;
        static copy$default(arg0: $Gene$AttributeEntry, arg1: $Holder_<any>, arg2: $AttributeModifier_, arg3: number, arg4: $Object): $Gene$AttributeEntry;
        static Companion: $Gene$AttributeEntry$Companion;
        constructor(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_);
        get attribute(): $Holder<$Attribute>;
        get modifier(): $AttributeModifier;
    }
    export class $Gene$PotionDetails$Companion {
        getDIRECT_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Gene$PotionDetails>;
        getDIRECT_CODEC(): $Codec<$Gene$PotionDetails>;
        constructor(arg0: $DefaultConstructorMarker);
        get DIRECT_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Gene$PotionDetails>;
        get DIRECT_CODEC(): $Codec<$Gene$PotionDetails>;
    }
    export class $Gene$PotionDetails {
        copy(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean): $Gene$PotionDetails;
        getDuration(): number;
        getLevel(): number;
        static access$getDIRECT_CODEC$cp(): $Codec<any>;
        component1(): $Holder<$MobEffect>;
        getEffect(): $Holder<$MobEffect>;
        component4(): boolean;
        component3(): number;
        component2(): number;
        static access$getDIRECT_STREAM_CODEC$cp(): $StreamCodec<any, any>;
        static copy$default(arg0: $Gene$PotionDetails, arg1: $Holder_<any>, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: $Object): $Gene$PotionDetails;
        getShowIcon(): boolean;
        static Companion: $Gene$PotionDetails$Companion;
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: $Holder_<any>, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: $DefaultConstructorMarker);
        get duration(): number;
        get level(): number;
        get effect(): $Holder<$MobEffect>;
        get showIcon(): boolean;
    }
    export class $Gene$Companion {
        getName(arg0: $Holder_<$Gene>): $MutableComponent;
        isNegative(arg0: $Holder_<$Gene>): boolean;
        getHOLDER_SET_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $HolderSet<$Gene>>;
        getUNKNOWN_GENE_COMPONENT(): $MutableComponent;
        getDIRECT_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Gene>;
        static getNameComponent$default(arg0: $Gene$Companion, arg1: $ResourceKey_<any>, arg2: $HolderLookup$Provider, arg3: number, arg4: $Object): $MutableComponent;
        getHOLDER_SET_CODEC(): $Codec<$HolderSet<$Gene>>;
        isGene(arg0: $Holder_<$Gene>, arg1: $Holder_<$Gene>): boolean;
        isGene(arg0: $Holder_<$Gene>, arg1: $ResourceKey_<$Gene>): boolean;
        isMutation(arg0: $Holder_<$Gene>): boolean;
        isDisabled(arg0: $ResourceKey_<$Gene>, arg1: $HolderLookup$Provider): boolean;
        isDisabled(arg0: $Holder_<$Gene>): boolean;
        getCODEC(): $Codec<$Holder<$Gene>>;
        getTranslationKey(arg0: $Holder_<$Gene>): string;
        getTranslationKey(arg0: $ResourceKey_<$Gene>): string;
        getSTREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Gene>>;
        getDIRECT_CODEC(): $Codec<$Gene>;
        getNameComponent(arg0: $ResourceKey_<$Gene>, arg1: $HolderLookup$Provider): $MutableComponent;
        getNameComponent(arg0: $Holder_<$Gene>): $MutableComponent;
        isHelixOnly(arg0: $Holder_<$Gene>): boolean;
        constructor(arg0: $DefaultConstructorMarker);
        get HOLDER_SET_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $HolderSet<$Gene>>;
        get UNKNOWN_GENE_COMPONENT(): $MutableComponent;
        get DIRECT_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Gene>;
        get HOLDER_SET_CODEC(): $Codec<$HolderSet<$Gene>>;
        get CODEC(): $Codec<$Holder<$Gene>>;
        get STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Gene>>;
        get DIRECT_CODEC(): $Codec<$Gene>;
    }
    export class $Gene$AttributeEntry$Companion {
        getDIRECT_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Gene$AttributeEntry>;
        getDIRECT_CODEC(): $Codec<$Gene$AttributeEntry>;
        constructor(arg0: $DefaultConstructorMarker);
        get DIRECT_STREAM_CODEC(): $StreamCodec<$RegistryFriendlyByteBuf, $Gene$AttributeEntry>;
        get DIRECT_CODEC(): $Codec<$Gene$AttributeEntry>;
    }
    export class $Gene {
        copy(arg0: number, arg1: $HolderSet_<$EntityType<never>>, arg2: $List_<$Gene$PotionDetails>, arg3: $List_<$Gene$AttributeEntry>, arg4: ($TagKey_<$EntityType<never>>) | undefined, arg5: $List_<$ResourceKey_<$Gene>>): $Gene;
        getIncompatibleGenes(): $List<$ResourceKey<$Gene>>;
        getDnaPointsRequired(): number;
        setAttributeModifiers(arg0: $LivingEntity, arg1: boolean): void;
        static access$getDIRECT_CODEC$cp(): $Codec<any>;
        getScaresEntitiesWithTag(): ($TagKey<$EntityType<never>>) | undefined;
        static access$getSTREAM_CODEC$cp(): $StreamCodec<any, any>;
        component6(): $List<$ResourceKey<$Gene>>;
        getPotions(): $List<$MobEffectInstance>;
        component1(): number;
        getAttributeModifiers(): $List<$Gene$AttributeEntry>;
        static access$getCODEC$cp(): $Codec<any>;
        component4(): $List<$Gene$AttributeEntry>;
        component5(): ($TagKey<$EntityType<never>>) | undefined;
        component3(): $List<$Gene$PotionDetails>;
        component2(): $HolderSet<$EntityType<never>>;
        static access$getDIRECT_STREAM_CODEC$cp(): $StreamCodec<any, any>;
        static access$getHOLDER_SET_CODEC$cp(): $Codec<any>;
        static copy$default(arg0: $Gene_, arg1: number, arg2: $HolderSet_<any>, arg3: $List_<any>, arg4: $List_<any>, arg5: $Optional<any>, arg6: $List_<any>, arg7: number, arg8: $Object): $Gene;
        static access$getHOLDER_SET_STREAM_CODEC$cp(): $StreamCodec<any, any>;
        static access$getUNKNOWN_GENE_COMPONENT$cp(): $MutableComponent;
        getAllowedEntities(): $HolderSet<$EntityType<never>>;
        canEntityTypeHave(arg0: $EntityType_<never>): boolean;
        getAllowsMobs(): boolean;
        getPotionDetails(): $List<$Gene$PotionDetails>;
        canEntityHave(arg0: $Entity): boolean;
        static Companion: $Gene$Companion;
        constructor(arg0: number, arg1: $HolderSet_<$EntityType<never>>, arg2: $List_<$Gene$PotionDetails>, arg3: $List_<$Gene$AttributeEntry>, arg4: ($TagKey_<$EntityType<never>>) | undefined, arg5: $List_<$ResourceKey_<$Gene>>);
        get incompatibleGenes(): $List<$ResourceKey<$Gene>>;
        get dnaPointsRequired(): number;
        get scaresEntitiesWithTag(): ($TagKey<$EntityType<never>>) | undefined;
        get potions(): $List<$MobEffectInstance>;
        get allowedEntities(): $HolderSet<$EntityType<never>>;
        get allowsMobs(): boolean;
        get potionDetails(): $List<$Gene$PotionDetails>;
    }
    /**
     * Values that may be interpreted as {@link $Gene}.
     */
    export type $Gene_ = RegistryTypes.GeneticsresequencedGene;
    export interface $Gene extends RegistryMarked<RegistryTypes.GeneticsresequencedGeneTag, RegistryTypes.GeneticsresequencedGene> {}
}
