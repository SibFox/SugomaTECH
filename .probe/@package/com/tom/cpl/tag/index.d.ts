import { $EntityType } from "@package/com/tom/cpl/block/entity";
import { $List, $List_, $Map_ } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";
import { $Stack } from "@package/com/tom/cpl/item";
import { $BlockState, $Biome } from "@package/com/tom/cpl/block";

declare module "@package/com/tom/cpl/tag" {
    export class $IAllTags {
    }
    export interface $IAllTags {
        getBlockTags(): $TagManager<$BlockState>;
        getItemTags(): $TagManager<$Stack>;
        getByType<T>(arg0: $TagType_): $TagManager<T>;
        getBiomeTags(): $TagManager<$Biome>;
        getEntityTags(): $TagManager<$EntityType>;
        get blockTags(): $TagManager<$BlockState>;
        get itemTags(): $TagManager<$Stack>;
        get biomeTags(): $TagManager<$Biome>;
        get entityTags(): $TagManager<$EntityType>;
    }
    export class $TagManager<T> {
        create(arg0: string, ...arg1: string[]): $Tag<T>;
        fromMap(arg0: $Map_<string, $List_<string>>): void;
        listStacks(arg0: $List_<string>): $List<T>;
        isInTag(arg0: $List_<string>, arg1: T): boolean;
        listStackTags(arg0: T): $List<$Tag<T>>;
        listAllTags(): $List<$Tag<T>>;
        getNativeManager(): $NativeTagManager<T>;
        applyBuiltin(arg0: $Map_<string, $List_<$Map_<string, $Object>>>, arg1: string): void;
        constructor(arg0: $NativeTagManager<T>);
        constructor(arg0: $TagManager<T>);
        get nativeManager(): $NativeTagManager<T>;
    }
    export class $TagType extends $Enum<$TagType> {
        static values(): $TagType[];
        static valueOf(arg0: string): $TagType;
        static ITEM: $TagType;
        static ENTITY: $TagType;
        static BIOME: $TagType;
        static BLOCK: $TagType;
        static VALUES: $TagType[];
    }
    /**
     * Values that may be interpreted as {@link $TagType}.
     */
    export type $TagType_ = "item" | "block" | "entity" | "biome";
}
