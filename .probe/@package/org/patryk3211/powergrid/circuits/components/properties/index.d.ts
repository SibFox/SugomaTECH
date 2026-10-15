import { $Tag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $PlacedComponent } from "@package/org/patryk3211/powergrid/circuits/schematic";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object, $Enum, $Class } from "@package/java/lang";

declare module "@package/org/patryk3211/powergrid/circuits/components/properties" {
    export class $StringProperty extends $ComponentProperty<string> {
        toString(value: string): string;
        write(value: string): $Tag;
        read(element: $Tag_): string;
        defaultValue(): string;
        parse(str: string): string;
        constructor(namespace: string, name: string);
        constructor(namespace: string, name: string, defaultValue: string);
    }
    export class $PropertyEntry<T> {
        get(): T;
        set(value: T): void;
        write(compound: $CompoundTag_): void;
        read(compound: $CompoundTag_): void;
        setValue(value: string): void;
        stringValue(): string;
        static makeFor<T>(property: $ComponentProperty<T>, parent: $PlacedComponent): $PropertyEntry<T>;
        setValueRaw(value: $Object): void;
        parent: $PlacedComponent;
        property: $ComponentProperty<T>;
        set value(value: string);
        set valueRaw(value: $Object);
    }
    export class $EnumProperty<T extends $Enum<T>> extends $ComponentProperty<T> {
        toString(value: T): string;
        write(value: T): $Tag;
        read(element: $Tag_): T;
        defaultValue(): T;
        parse(str: string): T;
        allValues(): T[];
        constructor(namespace: string, name: string, clazz: $Class<T>, values: T[], defaultValue: T);
        constructor(namespace: string, name: string, clazz: $Class<T>, values: T[]);
        constructor(namespace: string, name: string, clazz: $Class<T>);
    }
    export class $ConstantProperty extends $ComponentProperty<string> {
        toString(value: string): string;
        write(value: string): $Tag;
        read(element: $Tag_): string;
        defaultValue(): string;
        parse(value: string): string;
        constructor(namespace: string, name: string, value: $Component_);
    }
    export class $Orientation extends $Enum<$Orientation> {
        static values(): $Orientation[];
        static valueOf(name: string): $Orientation;
        rotate(rotateBy: $Orientation_): $Orientation;
        positive(): boolean;
        isX(): boolean;
        getOpposite(): $Orientation;
        isY(): boolean;
        getClockwise(): $Orientation;
        getCounterClockwise(): $Orientation;
        static DOWN: $Orientation;
        static LEFT: $Orientation;
        static PROPERTY: $EnumProperty<$Orientation>;
        static RIGHT: $Orientation;
        static UP: $Orientation;
        get x(): boolean;
        get opposite(): $Orientation;
        get y(): boolean;
        get clockwise(): $Orientation;
        get counterClockwise(): $Orientation;
    }
    /**
     * Values that may be interpreted as {@link $Orientation}.
     */
    export type $Orientation_ = "right" | "up" | "left" | "down";
    export class $ComponentProperty<T> {
        toString(arg0: T): string;
        isHidden(): boolean;
        cast<X extends $ComponentProperty<T>>(): X;
        id(): $ResourceLocation;
        write(arg0: T): $Tag;
        read(arg0: $Tag_): T;
        defaultValue(): T;
        parse(arg0: string): T;
        hidden(): $ComponentProperty<T>;
        translationKey(): string;
        constructor(namespace: string, name: string);
    }
}
