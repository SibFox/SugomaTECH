import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $Predicate_ } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/ref" {
    export class $IRef<TYPE> {
    }
    export interface $IRef<TYPE> {
        update(): void;
        getKey(): $ManagedKey;
        getAccessor(): $IAccessor<TYPE>;
        clearSyncDirty(): void;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        markAsDirty(): void;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        isSyncDirty(): boolean;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        isPersistedDirty(): boolean;
        getPersistedKey(): string;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        writeRaw(arg0: TYPE): void;
        readRaw(): TYPE;
        getPersistedPrefixName(): string;
        setPersistedPrefixName(arg0: string): void;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        clearPersistedDirty(): void;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        get syncDirty(): boolean;
        set onSyncListener(value: $BooleanConsumer_);
        get persistedDirty(): boolean;
        get persistedKey(): string;
        set onPersistedListener(value: $BooleanConsumer_);
        set conditionalSynced(value: $Predicate_<TYPE>);
    }
}
