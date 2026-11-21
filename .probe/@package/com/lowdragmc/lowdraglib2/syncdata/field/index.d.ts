import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedKey {
        getName(): string;
        getFieldAccessor(): $IAccessor<never>;
        getContentType(): $Type;
        isLazy(): boolean;
        getPersistentKey(): string;
        isDrop(): boolean;
        isDestSync(): boolean;
        isPersist(): boolean;
        getRawField(): $Field;
        createRef(arg0: $Object): $IRef<never>;
        isReadOnlyManaged(): boolean;
        getSerializeMethod(): $Method;
        getClazzType(): $Class<never>;
        static getClazzType(arg0: $Type): $Class<never>;
        getOnDirtyMethod(): $Method;
        getDeserializeMethod(): $Method;
        setPersistentKey(arg0: string): void;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get name(): string;
        get fieldAccessor(): $IAccessor<never>;
        get contentType(): $Type;
        get lazy(): boolean;
        get drop(): boolean;
        get destSync(): boolean;
        get persist(): boolean;
        get rawField(): $Field;
        get readOnlyManaged(): boolean;
        get serializeMethod(): $Method;
        get onDirtyMethod(): $Method;
        get deserializeMethod(): $Method;
    }
}
