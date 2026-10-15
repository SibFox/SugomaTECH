import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LivingEntity, $EntityType } from "@package/net/minecraft/world/entity";
import { $Gene } from "@package/dev/aaronhowser/mods/geneticsresequenced/gene";
import { $Object } from "@package/java/lang";
import { $Map_, $Map, $Set, $Set_ } from "@package/java/util";

declare module "@package/dev/aaronhowser/mods/geneticsresequenced/event/custom" {
    export class $ModifyEntityGenesEvent extends $Event {
        remove(arg0: $ResourceKey_<$Gene>): void;
        copy(arg0: $ResourceKey_<$EntityType<never>>, arg1: $Map_<$ResourceKey_<$Gene>, number>): $ModifyEntityGenesEvent;
        getWeight(arg0: $ResourceKey_<$Gene>): number;
        component1(): $ResourceKey<$EntityType<never>>;
        getEntityType(): $ResourceKey<$EntityType<never>>;
        getTotalWeight(): number;
        setWeight(arg0: $ResourceKey_<$Gene>, arg1: number): void;
        component2(): $Map<$ResourceKey<$Gene>, number>;
        static copy$default(arg0: $ModifyEntityGenesEvent, arg1: $ResourceKey_<any>, arg2: $Map_<any, any>, arg3: number, arg4: $Object): $ModifyEntityGenesEvent;
        getGeneWeights(): $Map<$ResourceKey<$Gene>, number>;
        getEntityTypeString(): string;
        constructor(arg0: $ResourceKey_<$EntityType<never>>, arg1: $Map_<$ResourceKey_<$Gene>, number>);
        get entityType(): $ResourceKey<$EntityType<never>>;
        get totalWeight(): number;
        get geneWeights(): $Map<$ResourceKey<$Gene>, number>;
        get entityTypeString(): string;
    }
    export class $GeneChangeEvent$Pre extends $GeneChangeEvent implements $ICancellableEvent {
        copy(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: boolean): $GeneChangeEvent$Pre;
        component1(): $LivingEntity;
        component3(): boolean;
        component2(): $Holder<$Gene>;
        static copy$default(arg0: $GeneChangeEvent$Pre, arg1: $LivingEntity, arg2: $Holder_<any>, arg3: boolean, arg4: number, arg5: $Object): $GeneChangeEvent$Pre;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: boolean);
    }
    export class $TemporaryGeneAddedEvent$Post extends $TemporaryGeneAddedEvent {
        copy(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: number): $TemporaryGeneAddedEvent$Post;
        component1(): $LivingEntity;
        component3(): number;
        component2(): $Holder<$Gene>;
        static copy$default(arg0: $TemporaryGeneAddedEvent$Post, arg1: $LivingEntity, arg2: $Holder_<any>, arg3: number, arg4: number, arg5: $Object): $TemporaryGeneAddedEvent$Post;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: number);
    }
    export class $ModifyGeneRequirementsEvent extends $Event {
        copy(arg0: $ResourceKey_<$Gene>, arg1: $Set_<$ResourceKey_<$Gene>>): $ModifyGeneRequirementsEvent;
        component1(): $ResourceKey<$Gene>;
        component2(): $Set<$ResourceKey<$Gene>>;
        static copy$default(arg0: $ModifyGeneRequirementsEvent, arg1: $ResourceKey_<any>, arg2: $Set_<any>, arg3: number, arg4: $Object): $ModifyGeneRequirementsEvent;
        getGene(): $ResourceKey<$Gene>;
        getRequirements(): $Set<$ResourceKey<$Gene>>;
        constructor(arg0: $ResourceKey_<$Gene>, arg1: $Set_<$ResourceKey_<$Gene>>);
        get gene(): $ResourceKey<$Gene>;
        get requirements(): $Set<$ResourceKey<$Gene>>;
    }
    export class $GeneChangeEvent extends $Event {
        getEntity(): $LivingEntity;
        getGeneHolder(): $Holder<$Gene>;
        isAddition(): boolean;
        constructor(arg0: $DefaultConstructorMarker);
        get entity(): $LivingEntity;
        get geneHolder(): $Holder<$Gene>;
        get addition(): boolean;
    }
    export class $GeneChangeEvent$Post extends $GeneChangeEvent {
        copy(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: boolean): $GeneChangeEvent$Post;
        component1(): $LivingEntity;
        component3(): boolean;
        component2(): $Holder<$Gene>;
        static copy$default(arg0: $GeneChangeEvent$Post, arg1: $LivingEntity, arg2: $Holder_<any>, arg3: boolean, arg4: number, arg5: $Object): $GeneChangeEvent$Post;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: boolean);
    }
    export class $GeneCooldownEvent$Add extends $GeneCooldownEvent implements $ICancellableEvent {
        copy(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: number): $GeneCooldownEvent$Add;
        component1(): $LivingEntity;
        component3(): number;
        component2(): $Holder<$Gene>;
        static copy$default(arg0: $GeneCooldownEvent$Add, arg1: $LivingEntity, arg2: $Holder_<any>, arg3: number, arg4: number, arg5: $Object): $GeneCooldownEvent$Add;
        getCooldownTicks(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: number);
        get cooldownTicks(): number;
    }
    export class $GeneCooldownEvent extends $Event {
        getEntity(): $LivingEntity;
        getGeneHolder(): $Holder<$Gene>;
        constructor(arg0: $DefaultConstructorMarker);
        get entity(): $LivingEntity;
        get geneHolder(): $Holder<$Gene>;
    }
    export class $TemporaryGeneRemovedEvent extends $Event {
        copy(arg0: $LivingEntity, arg1: $Holder_<$Gene>): $TemporaryGeneRemovedEvent;
        getEntity(): $LivingEntity;
        component1(): $LivingEntity;
        component2(): $Holder<$Gene>;
        static copy$default(arg0: $TemporaryGeneRemovedEvent, arg1: $LivingEntity, arg2: $Holder_<any>, arg3: number, arg4: $Object): $TemporaryGeneRemovedEvent;
        getGeneHolder(): $Holder<$Gene>;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$Gene>);
        get entity(): $LivingEntity;
        get geneHolder(): $Holder<$Gene>;
    }
    export class $TemporaryGeneAddedEvent$Pre extends $TemporaryGeneAddedEvent implements $ICancellableEvent {
        copy(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: number): $TemporaryGeneAddedEvent$Pre;
        component1(): $LivingEntity;
        component3(): number;
        component2(): $Holder<$Gene>;
        static copy$default(arg0: $TemporaryGeneAddedEvent$Pre, arg1: $LivingEntity, arg2: $Holder_<any>, arg3: number, arg4: number, arg5: $Object): $TemporaryGeneAddedEvent$Pre;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$Gene>, arg2: number);
    }
    export class $TemporaryGeneAddedEvent extends $Event {
        getEntity(): $LivingEntity;
        getDurationTicks(): number;
        getGeneHolder(): $Holder<$Gene>;
        constructor(arg0: $DefaultConstructorMarker);
        get entity(): $LivingEntity;
        get durationTicks(): number;
        get geneHolder(): $Holder<$Gene>;
    }
    export class $GeneCooldownEvent$Remove extends $GeneCooldownEvent {
        copy(arg0: $LivingEntity, arg1: $Holder_<$Gene>): $GeneCooldownEvent$Remove;
        component1(): $LivingEntity;
        component2(): $Holder<$Gene>;
        static copy$default(arg0: $GeneCooldownEvent$Remove, arg1: $LivingEntity, arg2: $Holder_<any>, arg3: number, arg4: $Object): $GeneCooldownEvent$Remove;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$Gene>);
    }
}
