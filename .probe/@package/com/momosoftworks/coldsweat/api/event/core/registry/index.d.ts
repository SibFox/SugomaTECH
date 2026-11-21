import { $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockTemp } from "@package/com/momosoftworks/coldsweat/api/temperature/block_temp";
import { $Multimap } from "@package/com/google/common/collect";
import { $Collection_, $Collection } from "@package/java/util";
import { $RegistryHolder_, $RegistryHolder } from "@package/com/momosoftworks/coldsweat/data";
import { $RegistryMultiMap } from "@package/com/momosoftworks/coldsweat/util/math";
import { $RegistryModifierData } from "@package/com/momosoftworks/coldsweat/data/codec/configuration";
import { $Supplier_ } from "@package/java/util/function";
import { $Holder_, $Holder, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $TempModifier } from "@package/com/momosoftworks/coldsweat/api/temperature/modifier";
import { $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ConfigData } from "@package/com/momosoftworks/coldsweat/data/codec/impl";
import { $Edible } from "@package/com/momosoftworks/coldsweat/common/entity/data/edible";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/momosoftworks/coldsweat/api/event/core/registry" {
    export class $LoadRegistriesEvent$Post extends $LoadRegistriesEvent {
        constructor(arg0: $RegistryAccess, arg1: $RegistryMultiMap<$RegistryHolder_<never>, $Holder_<$ConfigData>>);
    }
    export class $LoadRegistriesEvent extends $Event {
        getRegistry<T extends $ConfigData>(arg0: $RegistryHolder_<T>): $Collection<$Holder<T>>;
        getRegistries(): $RegistryMultiMap<$RegistryHolder<never>, $Holder<$ConfigData>>;
        getRegistryAccess(): $RegistryAccess;
        addRegistryEntry<T extends $ConfigData>(arg0: $RegistryHolder_<T>, arg1: T): void;
        addRegistryEntry<T extends $ConfigData>(arg0: $RegistryHolder_<T>, arg1: $Holder_<T>): void;
        addRegistryEntries<T extends $ConfigData>(arg0: $RegistryHolder_<T>, arg1: $Collection_<$Holder_<T>>): void;
        constructor(arg0: $RegistryAccess, arg1: $RegistryMultiMap<$RegistryHolder_<never>, $Holder_<$ConfigData>>);
        get registries(): $RegistryMultiMap<$RegistryHolder<never>, $Holder<$ConfigData>>;
        get registryAccess(): $RegistryAccess;
    }
    export class $LoadRegistriesEvent$Pre extends $LoadRegistriesEvent {
        getRegistryModifiers(): $Multimap<$ResourceKey<$Registry<$ConfigData>>, $RegistryModifierData<never>>;
        constructor(arg0: $RegistryAccess, arg1: $RegistryMultiMap<$RegistryHolder_<never>, $Holder_<$ConfigData>>, arg2: $Multimap<$RegistryHolder_<never>, $Holder_<$RegistryModifierData<never>>>);
        get registryModifiers(): $Multimap<$ResourceKey<$Registry<$ConfigData>>, $RegistryModifierData<never>>;
    }
    export class $AddRegistriesEvent extends $Event {
        createRegistry<V extends $ConfigData>(arg0: $ResourceLocation_, arg1: $Codec<V>): $RegistryHolder<V>;
        /**
         * @deprecated
         */
        createRegistry<V extends $ConfigData>(arg0: $ResourceLocation_, arg1: $Codec<V>, arg2: $Class<V>): $RegistryHolder<V>;
        constructor();
    }
    export class $BlockTempRegisterEvent extends $Event {
        register(arg0: $BlockTemp): void;
        registerFirst(arg0: $BlockTemp): void;
        constructor();
    }
    export class $TempModifierRegisterEvent extends $Event {
        register(arg0: $ResourceLocation_, arg1: $Supplier_<$TempModifier>): void;
        registerByClassName(arg0: $ResourceLocation_, arg1: string, ...arg2: $Object[]): void;
        constructor();
    }
    export class $EdiblesRegisterEvent extends $Event {
        registerEdible(arg0: $Edible): void;
        constructor();
    }
}
