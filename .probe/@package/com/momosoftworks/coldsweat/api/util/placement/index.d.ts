import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $TempModifier } from "@package/com/momosoftworks/coldsweat/api/temperature/modifier";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/momosoftworks/coldsweat/api/util/placement" {
    export class $Order extends $Enum<$Order> implements $StringRepresentable {
        static values(): $Order[];
        static valueOf(arg0: string): $Order;
        static byName(arg0: string): $Order;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LAST: $Order;
        static FIRST: $Order;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Order}.
     */
    export type $Order_ = "first" | "last";
    export class $Matcher extends $Enum<$Matcher> implements $StringRepresentable {
        static values(): $Matcher[];
        static valueOf(arg0: string): $Matcher;
        check(arg0: $TempModifier, arg1: $TempModifier): boolean;
        static byName(arg0: string): $Matcher;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EQUALS: $Matcher;
        static SAME_CLASS: $Matcher;
        static IGNORE: $Matcher;
        static SUBCLASS: $Matcher;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Matcher}.
     */
    export type $Matcher_ = "ignore" | "same_class" | "subclass" | "equals";
    export class $Placement {
        mode(): $Mode;
        static of(arg0: $Mode_, arg1: $Order_, arg2: $Predicate_<$TempModifier>): $Placement;
        orElse(arg0: $Placement): $Placement;
        fallback(): $Placement;
        order(): $Order;
        predicate(): $Predicate<$TempModifier>;
        duplicates(): $Matcher;
        noDuplicates(arg0: $Matcher_): $Placement;
        limitDuplicates(arg0: $Matcher_, arg1: number): $Placement;
        maxDuplicates(): number;
        static LAST: $Placement;
        static FIRST: $Placement;
    }
    export class $Mode extends $Enum<$Mode> implements $StringRepresentable {
        static values(): $Mode[];
        static valueOf(arg0: string): $Mode;
        static byName(arg0: string): $Mode;
        isAdding(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ADD_AFTER: $Mode;
        static REPLACE: $Mode;
        static ADD_BEFORE: $Mode;
        get adding(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Mode}.
     */
    export type $Mode_ = "add_before" | "add_after" | "replace";
}
