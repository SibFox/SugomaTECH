import { $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $TagsUpdatedEvent } from "@package/net/neoforged/neoforge/event";
import { $List, $Set, $Collection } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $RegistryAccess, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Runnable_, $Object } from "@package/java/lang";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as recipe from "@package/com/petrolpark/core/contamination/recipe";

declare module "@package/com/petrolpark/core/contamination" {
    export class $IContamination<OBJECT, OBJECT_STACK> {
        static get(arg0: $Object): ($IContamination<never, never>) | undefined;
        static perpetuate(arg0: $Stream<$Object>, arg1: $Stream<$Object>): void;
        static perpetuate(arg0: $Stream<$ItemStack_>, arg1: $Stream<$FluidStack_>, arg2: number, arg3: $Stream<$ItemStack_>, arg4: $Stream<$FluidStack_>): void;
        static perpetuate<OBJECT>(arg0: $Stream<OBJECT>, arg1: $Stream<OBJECT>, arg2: $Function_<OBJECT, $IContamination<never, never>>): void;
    }
    export interface $IContamination<OBJECT, OBJECT_STACK> {
        save(): void;
        getType(): OBJECT;
        has(arg0: $Holder_<$Contaminant>): boolean;
        getAmount(): number;
        isIntrinsic(arg0: $Holder_<$Contaminant>): boolean;
        streamAllContaminants(): $Stream<$Holder<$Contaminant>>;
        contaminateAll(arg0: $Stream<$Holder_<$Contaminant>>): boolean;
        streamOrphanExtrinsicContaminants(): $Stream<$Holder<$Contaminant>>;
        getContaminable(): $Contaminable<OBJECT, OBJECT_STACK>;
        hasAnyContaminant(): boolean;
        fullyDecontaminate(): boolean;
        contaminate(arg0: $Holder_<$Contaminant>): boolean;
        decontaminateOnly(arg0: $Holder_<$Contaminant>): boolean;
        decontaminate(arg0: $Holder_<$Contaminant>): boolean;
        streamShownContaminants(): $Stream<$Holder<$Contaminant>>;
        hasAnyExtrinsicContaminant(): boolean;
        streamShownIfAbsentContaminants(): $Stream<$Holder<$Contaminant>>;
        streamIntrinsicContaminants(): $Stream<$Holder<$Contaminant>>;
        streamShownAbsentContaminants(): $Stream<$Holder<$Contaminant>>;
        get type(): OBJECT;
        get amount(): number;
        get contaminable(): $Contaminable<OBJECT, OBJECT_STACK>;
    }
    export class $ComponentHolderContamination<OBJECT, OBJECT_STACK extends $MutableDataComponentHolder> extends $Contamination<OBJECT, OBJECT_STACK> {
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Contaminant>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Contaminant>>>;
    }
    export class $Contamination<OBJECT, OBJECT_STACK> implements $IContamination<OBJECT, OBJECT_STACK> {
        has(arg0: $Holder_<$Contaminant>): boolean;
        isIntrinsic(arg0: $Holder_<$Contaminant>): boolean;
        streamAllContaminants(): $Stream<$Holder<$Contaminant>>;
        contaminateAll(arg0: $Stream<$Holder_<$Contaminant>>): boolean;
        streamOrphanExtrinsicContaminants(): $Stream<$Holder<$Contaminant>>;
        hasAnyContaminant(): boolean;
        fullyDecontaminate(): boolean;
        contaminate(arg0: $Holder_<$Contaminant>): boolean;
        decontaminateOnly(arg0: $Holder_<$Contaminant>): boolean;
        decontaminate(arg0: $Holder_<$Contaminant>): boolean;
        hasAnyExtrinsicContaminant(): boolean;
        streamShownIfAbsentContaminants(): $Stream<$Holder<$Contaminant>>;
        streamIntrinsicContaminants(): $Stream<$Holder<$Contaminant>>;
        streamShownContaminants(): $Stream<$Holder<$Contaminant>>;
        streamShownAbsentContaminants(): $Stream<$Holder<$Contaminant>>;
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Contaminant>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Contaminant>>>;
    }
    export class $GenericContamination extends $Contamination<$Object, $Object> {
        readNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): $GenericContamination;
        writeNBT(arg0: $HolderLookup$Provider): $Tag;
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Contaminant>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Contaminant>>>;
        constructor();
        constructor(arg0: $Runnable_);
    }
    export class $Contaminable<OBJECT, OBJECT_STACK> {
        getContamination(arg0: $Object): $IContamination<OBJECT, OBJECT_STACK>;
        onTagsLoaded(arg0: $TagsUpdatedEvent): void;
        isContaminable(arg0: OBJECT): boolean;
        getContaminationOptional(arg0: $Object): ($IContamination<OBJECT, OBJECT_STACK>) | undefined;
        isContaminableStack(arg0: OBJECT_STACK): boolean;
        getIntrinsicContaminants(arg0: OBJECT): $Collection<$Holder<$Contaminant>>;
        getShownIfAbsentContaminants(arg0: OBJECT): $Collection<$Holder<$Contaminant>>;
        constructor();
    }
    export class $ItemContamination extends $ComponentHolderContamination<$Item, $ItemStack> {
        static get(arg0: $ItemStack_): $IContamination<never, never>;
        getType(): $Item;
        static create(arg0: $ItemStack_): $IContamination<never, never>;
        static perpetuate(arg0: $Stream<$ItemStack_>, arg1: $Stream<$ItemStack_>): void;
        static perpetuateSingle(arg0: $Stream<$ItemStack_>, arg1: $Stream<$ItemStack_>): void;
        static perpetuateSingle(arg0: $Stream<$ItemStack_>, arg1: $ItemStack_): void;
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Contaminant>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Contaminant>>>;
        get type(): $Item;
    }
    export class $Contaminant {
        static getName(arg0: $Holder_<$Contaminant>): $Component;
        getChildren(): $Set<$Holder<$Contaminant>>;
        isPreserved(arg0: number): boolean;
        getColor(): number;
        getParents(): $Set<$Holder<$Contaminant>>;
        static onTagsUpdated(arg0: $TagsUpdatedEvent): void;
        static getNameColored(arg0: $Holder_<$Contaminant>): $Component;
        getAbsentColor(): number;
        static loadChildren(arg0: $RegistryAccess): void;
        static compareHolders(arg0: $Holder_<$Contaminant>, arg1: $Holder_<$Contaminant>): number;
        static getAbsentName(arg0: $Holder_<$Contaminant>): $Component;
        static getAbsentNameColored(arg0: $Holder_<$Contaminant>): $Component;
        getPreservationProportion(): number;
        static CODEC: $Codec<$Holder<$Contaminant>>;
        color: number;
        absentColor: number;
        static DIRECT_CODEC: $Codec<$Contaminant>;
        preservationProportion: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Contaminant>>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $HolderSet_<$Contaminant>);
        get children(): $Set<$Holder<$Contaminant>>;
        get parents(): $Set<$Holder<$Contaminant>>;
    }
    /**
     * Values that may be interpreted as {@link $Contaminant}.
     */
    export type $Contaminant_ = RegistryTypes.PetrolparkContaminant;
    export interface $Contaminant extends RegistryMarked<RegistryTypes.PetrolparkContaminantTag, RegistryTypes.PetrolparkContaminant> {}
    export class $ItemContaminationSavedEvent extends $Event {
        stack: $ItemStack;
        contamination: $ItemContamination;
        constructor(arg0: $ItemStack_, arg1: $ItemContamination);
    }
}
