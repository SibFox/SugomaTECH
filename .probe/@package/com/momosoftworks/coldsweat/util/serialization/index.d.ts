import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $Holder_, $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/com/momosoftworks/coldsweat/util/serialization" {
    export class $OptionalHolder<T> {
        get(): $Holder<T>;
        value(): ($Holder<T>) | undefined;
        key(): $ResourceKey<T>;
        setValue(arg0: $Holder_<T>): void;
        is(arg0: $Holder_<T>): boolean;
        static ofHolder<T>(arg0: $Holder_<T>): $OptionalHolder<T>;
        constructor(arg0: $ResourceKey_<T>);
    }
    export class $DynamicHolder$Loader<T> {
    }
    export interface $DynamicHolder$Loader<T> {
        load(arg0: $DynamicHolder<T>, arg1: $RegistryAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $DynamicHolder$Loader}.
     */
    export type $DynamicHolder$Loader_<T> = ((arg0: $DynamicHolder<T>, arg1: $RegistryAccess) => void);
    export class $DynamicHolder$Saver<T> {
    }
    export interface $DynamicHolder$Saver<T> {
        save(arg0: T, arg1: $RegistryAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $DynamicHolder$Saver}.
     */
    export type $DynamicHolder$Saver_<T> = ((arg0: T, arg1: $RegistryAccess) => void);
    export class $DynamicHolder$SyncType extends $Enum<$DynamicHolder$SyncType> {
        static values(): $DynamicHolder$SyncType[];
        static valueOf(arg0: string): $DynamicHolder$SyncType;
        canReceive(): boolean;
        canSend(): boolean;
        static ONE_WAY: $DynamicHolder$SyncType;
        static NONE: $DynamicHolder$SyncType;
        static BOTH_WAYS: $DynamicHolder$SyncType;
    }
    /**
     * Values that may be interpreted as {@link $DynamicHolder$SyncType}.
     */
    export type $DynamicHolder$SyncType_ = "none" | "both_ways" | "one_way";
    export class $DynamicHolder<T> implements $Supplier<T> {
        getName(): $ResourceLocation;
        reset(): void;
        get(): T;
        get(arg0: $RegistryAccess): T;
        load(arg0: $RegistryAccess, arg1: boolean): void;
        load(arg0: boolean): void;
        decode(arg0: $Tag_): void;
        encode(arg0: $RegistryAccess): $Tag;
        set(arg0: T): void;
        save(arg0: $RegistryAccess): void;
        static create<T>(arg0: $ResourceLocation_, arg1: $Supplier_<T>): $DynamicHolder<T>;
        static create<T>(arg0: $ResourceLocation_, arg1: $Supplier_<T>, arg2: $Consumer_<$DynamicHolder<T>>, arg3: $Consumer_<T>): $DynamicHolder<T>;
        static create<T>(arg0: $ResourceLocation_, arg1: $Supplier_<T>, arg2: $Consumer_<$DynamicHolder<T>>): $DynamicHolder<T>;
        getCodec(): $Codec<T>;
        setUnsafe(arg0: $Object): void;
        isSynced(): boolean;
        getSyncType(): $DynamicHolder$SyncType;
        static createSyncedWithRegistries<T>(arg0: $ResourceLocation_, arg1: $Supplier_<T>, arg2: $DynamicHolder$Loader_<T>, arg3: $Codec<T>, arg4: $DynamicHolder$Saver_<T>, arg5: $DynamicHolder$SyncType_): $DynamicHolder<T>;
        static createWithRegistries<T>(arg0: $ResourceLocation_, arg1: $Supplier_<T>, arg2: $DynamicHolder$Loader_<T>): $DynamicHolder<T>;
        requiresRegistries(): boolean;
        static createSynced<T>(arg0: $ResourceLocation_, arg1: $Supplier_<T>, arg2: $Consumer_<$DynamicHolder<T>>, arg3: $Codec<T>, arg4: $Consumer_<T>, arg5: $DynamicHolder$SyncType_): $DynamicHolder<T>;
        get name(): $ResourceLocation;
        get codec(): $Codec<T>;
        set unsafe(value: $Object);
        get synced(): boolean;
        get syncType(): $DynamicHolder$SyncType;
    }
}
