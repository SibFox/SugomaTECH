import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Predicate_, $Consumer_ } from "@package/java/util/function";
import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $TempModifier } from "@package/com/momosoftworks/coldsweat/api/temperature/modifier";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Temperature$Trait, $Temperature$Trait_ } from "@package/com/momosoftworks/coldsweat/api/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType, $EntityType_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List, $List_, $Map, $Collection } from "@package/java/util";
import { $Placement, $Matcher_ } from "@package/com/momosoftworks/coldsweat/api/util/placement";

declare module "@package/com/momosoftworks/coldsweat/api/event/core/init" {
    /**
     * @deprecated
     */
    export class $GatherDefaultTempModifiersEvent extends $Event {
        getModifiers(): $List<$TempModifier>;
        getEntity(): $LivingEntity;
        addModifier(arg0: $TempModifier, arg1: $Matcher_, arg2: $Placement): void;
        addModifier(arg0: $TempModifier): void;
        getTrait(): $Temperature$Trait;
        removeModifiers(arg0: $TempModifier, arg1: $Matcher_): void;
        addModifiers(arg0: $List_<$TempModifier>, arg1: $Matcher_, arg2: $Placement): void;
        addModifiers(arg0: $List_<$TempModifier>): void;
        addModifierById(arg0: $ResourceLocation_, arg1: $Consumer_<$TempModifier>, arg2: $Matcher_, arg3: $Placement): void;
        constructor(arg0: $LivingEntity, arg1: $List_<$TempModifier>, arg2: $Temperature$Trait_);
        get modifiers(): $List<$TempModifier>;
        get entity(): $LivingEntity;
        get trait(): $Temperature$Trait;
    }
    export class $InitDynamicTagsEvent<T> extends $Event {
        getTags(): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        fillTag(arg0: $TagKey_<T>, arg1: $Predicate_<T>): void;
        constructor(arg0: $Registry<T>);
        get tags(): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
    }
    export class $DefaultTempModifiersEvent extends $Event {
        getModifiers(arg0: $Temperature$Trait_): $List<$TempModifier>;
        getModifiers(): $Map<$Temperature$Trait, $List<$TempModifier>>;
        getEntity(): $LivingEntity;
        addModifier(arg0: $List_<$Temperature$Trait_>, arg1: $TempModifier, arg2: $Placement): void;
        addModifier(arg0: $Temperature$Trait_, arg1: $TempModifier, arg2: $Placement): void;
        addModifier(arg0: $Temperature$Trait_, arg1: $TempModifier): void;
        removeModifiers(arg0: $Temperature$Trait_, arg1: $Predicate_<$TempModifier>): void;
        addModifiers(arg0: $Temperature$Trait_, arg1: $List_<$TempModifier>): void;
        addModifiers(arg0: $Temperature$Trait_, arg1: $List_<$TempModifier>, arg2: $Placement): void;
        addModifierById(arg0: $List_<$Temperature$Trait_>, arg1: $ResourceLocation_, arg2: $Consumer_<$TempModifier>, arg3: $Placement): void;
        addModifierById(arg0: $Temperature$Trait_, arg1: $ResourceLocation_, arg2: $Consumer_<$TempModifier>, arg3: $Placement): void;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $FetchSeasonsModsEvent extends $Event {
        getSeasonsMods(): $List<string>;
        addSeasonsMod(arg0: string): void;
        constructor();
        get seasonsMods(): $List<string>;
    }
    export class $EnableTemperatureEvent extends $Event implements $ICancellableEvent {
        isEnabled(): boolean;
        setEnabled(arg0: boolean): void;
        getEntityType(): $EntityType<never>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityType_<never>);
        get entityType(): $EntityType<never>;
    }
}
