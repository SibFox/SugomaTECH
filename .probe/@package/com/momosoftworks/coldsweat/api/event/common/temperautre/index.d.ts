import { $Function, $Function_ } from "@package/java/util/function";
import { $TempModifier } from "@package/com/momosoftworks/coldsweat/api/temperature/modifier";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Temperature$Trait, $Temperature$Trait_ } from "@package/com/momosoftworks/coldsweat/api/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/com/momosoftworks/coldsweat/api/event/common/temperautre" {
    export class $TempModifierEvent$Calculate$Post extends $TempModifierEvent$Calculate {
        getFunction(): $Function<number, number>;
        setFunction(arg0: $Function_<number, number>): void;
        constructor(arg0: $TempModifier, arg1: $LivingEntity, arg2: number, arg3: $Function_<number, number>, arg4: $Temperature$Trait_);
    }
    export class $TemperatureChangedEvent extends $Event implements $ICancellableEvent {
        getEntity(): $LivingEntity;
        getTemperature(): number;
        getTrait(): $Temperature$Trait;
        setTemperature(arg0: number): void;
        getOldTemperature(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Temperature$Trait_, arg2: number, arg3: number);
        get entity(): $LivingEntity;
        get trait(): $Temperature$Trait;
        get oldTemperature(): number;
    }
    export class $TempModifierEvent$Add extends $TempModifierEvent implements $ICancellableEvent {
        setTrait(arg0: $Temperature$Trait_): void;
        setModifier(arg0: $TempModifier): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Temperature$Trait_, arg2: $TempModifier);
        set trait(value: $Temperature$Trait_);
        set modifier(value: $TempModifier);
    }
    export class $TempModifierEvent extends $Event {
        getEntity(): $LivingEntity;
        getModifier(): $TempModifier;
        getTrait(): $Temperature$Trait;
        get entity(): $LivingEntity;
        get modifier(): $TempModifier;
        get trait(): $Temperature$Trait;
    }
    export class $TempModifierEvent$Calculate extends $TempModifierEvent {
        getTemperature(): number;
        setTemperature(arg0: number): void;
        constructor(arg0: $TempModifier, arg1: $LivingEntity, arg2: number, arg3: $Temperature$Trait_);
    }
    export class $TempModifierEvent$Remove extends $TempModifierEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Temperature$Trait_, arg2: $TempModifier);
    }
    export class $TempModifierEvent$Calculate$Pre extends $TempModifierEvent$Calculate implements $ICancellableEvent {
        getFunction(): $Function<number, number>;
        setFunction(arg0: $Function_<number, number>): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $TempModifier, arg1: $LivingEntity, arg2: number, arg3: $Temperature$Trait_);
    }
}
