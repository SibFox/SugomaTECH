import { RegistryTypes, RegistryMarked } from "@special/types";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $IntegerBounds, $IntegerBounds_ } from "@package/com/momosoftworks/coldsweat/data/codec/util";

declare module "@package/com/momosoftworks/coldsweat/api/temperature/effect" {
    export class $TempEffectType<T extends $TempEffect> {
        create(arg0: $TempEffectType_<T>, arg1: $IntegerBounds_): T;
        constructor(arg0: $TempEffectType$Constructor_<T>);
    }
    /**
     * Values that may be interpreted as {@link $TempEffectType}.
     */
    export type $TempEffectType_<T> = RegistryTypes.ColdSweatTempEffect;
    export class $TempEffect$Side extends $Enum<$TempEffect$Side> {
        static values(): $TempEffect$Side[];
        static valueOf(arg0: string): $TempEffect$Side;
        checkSide(arg0: boolean): boolean;
        static SERVER: $TempEffect$Side;
        static COMMON: $TempEffect$Side;
        static CLIENT: $TempEffect$Side;
    }
    /**
     * Values that may be interpreted as {@link $TempEffect$Side}.
     */
    export type $TempEffect$Side_ = "client" | "server" | "common";
    export class $TempEffect {
        type(): $TempEffectType<never>;
        getSide(): $TempEffect$Side;
        getEffectFactor(arg0: $LivingEntity): number;
        constructor(arg0: $TempEffectType_<never>, arg1: $IntegerBounds_);
        get side(): $TempEffect$Side;
    }
    export interface $TempEffectType<T> extends RegistryMarked<RegistryTypes.ColdSweatTempEffectTag, RegistryTypes.ColdSweatTempEffect> {}
    export class $TempEffectType$Constructor<T extends $TempEffect> {
    }
    export interface $TempEffectType$Constructor<T extends $TempEffect> {
        create(arg0: $TempEffectType_<T>, arg1: $IntegerBounds_): T;
    }
    /**
     * Values that may be interpreted as {@link $TempEffectType$Constructor}.
     */
    export type $TempEffectType$Constructor_<T> = ((arg0: $TempEffectType<T>, arg1: $IntegerBounds) => T);
}
