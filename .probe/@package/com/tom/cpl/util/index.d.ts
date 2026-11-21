import { $InputStream, $OutputStream, $File_ } from "@package/java/io";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Throwable, $Enum } from "@package/java/lang";

declare module "@package/com/tom/cpl/util" {
    export class $Hand extends $Enum<$Hand> {
        static values(): $Hand[];
        static valueOf(arg0: string): $Hand;
        static of<T extends $Enum<T>>(arg0: T): $Hand;
        static of<T extends $Enum<T>>(arg0: $Hand_, arg1: T): $Hand;
        static LEFT: $Hand;
        static RIGHT: $Hand;
    }
    /**
     * Values that may be interpreted as {@link $Hand}.
     */
    export type $Hand_ = "right" | "left";
    export class $Image {
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        fill(arg0: number): void;
        getData(): number[];
        getWidth(): number;
        getHeight(): number;
        getRGB(arg0: number, arg1: number): number;
        setRGB(arg0: number, arg1: number, arg2: number): void;
        static download(arg0: string): $CompletableFuture<$Image>;
        static loadFrom(arg0: $File_): $CompletableFuture<$Image>;
        static loadFrom(arg0: $InputStream): $Image;
        draw(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw(arg0: $Image): void;
        draw(arg0: $Image, arg1: number, arg2: number): void;
        storeTo(arg0: $OutputStream): void;
        storeTo(arg0: $File_): void;
        constructor(arg0: number[], arg1: number);
        constructor(arg0: $Image);
        constructor(arg0: number, arg1: number);
        get data(): number[];
        get width(): number;
        get height(): number;
    }
    export class $ItemSlot extends $Enum<$ItemSlot> {
        static values(): $ItemSlot[];
        static valueOf(arg0: string): $ItemSlot;
        static SLOTS: $ItemSlot[];
        static HEAD: $ItemSlot;
        static API_SLOT: $ItemSlot;
        static ANY_SLOT: $ItemSlot;
        static RIGHT_HAND: $ItemSlot;
        static LEFT_SHOULDER: $ItemSlot;
        static TOOL_SLOT: $ItemSlot;
        static VALUES: $ItemSlot[];
        static PARROTS: $ItemSlot[];
        static RIGHT_SHOULDER: $ItemSlot;
        static LEFT_HAND: $ItemSlot;
    }
    /**
     * Values that may be interpreted as {@link $ItemSlot}.
     */
    export type $ItemSlot_ = "left_hand" | "right_hand" | "head" | "any_slot" | "tool_slot" | "left_shoulder" | "right_shoulder" | "api_slot";
    export class $ThrowingConsumer<T, X extends $Throwable> {
    }
    export interface $ThrowingConsumer<T, X extends $Throwable> {
        accept(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $ThrowingConsumer}.
     */
    export type $ThrowingConsumer_<T, X> = ((arg0: T) => void);
    export class $TriConsumer<A, B, C> {
    }
    export interface $TriConsumer<A, B, C> {
        accept(arg0: A, arg1: B, arg2: C): void;
    }
    /**
     * Values that may be interpreted as {@link $TriConsumer}.
     */
    export type $TriConsumer_<A, B, C> = ((arg0: A, arg1: B, arg2: C) => void);
    export class $HandAnimation extends $Enum<$HandAnimation> {
        static values(): $HandAnimation[];
        static valueOf(arg0: string): $HandAnimation;
        static map<T extends $Enum<T>>(arg0: T): $HandAnimation;
        static of<T extends $Enum<T>>(arg0: T): $HandAnimation;
        static BLOCK: $HandAnimation;
        static BOW: $HandAnimation;
        static SPEAR: $HandAnimation;
        static TRIDENT: $HandAnimation;
        static BUNDLE: $HandAnimation;
        static BRUSH: $HandAnimation;
        static TOOT_HORN: $HandAnimation;
        static EAT: $HandAnimation;
        static VALUES: $HandAnimation[];
        static NONE: $HandAnimation;
        static DRINK: $HandAnimation;
        static CROSSBOW: $HandAnimation;
        static SPYGLASS: $HandAnimation;
    }
    /**
     * Values that may be interpreted as {@link $HandAnimation}.
     */
    export type $HandAnimation_ = "none" | "eat" | "drink" | "block" | "bow" | "trident" | "crossbow" | "spyglass" | "toot_horn" | "brush" | "bundle" | "spear";
    export class $DynamicTexture {
        free(): void;
        bind(): void;
        getImage(): $Image;
        markDirty(): void;
        getNative(): $DynamicTexture$ITexture;
        setImage(arg0: $Image): void;
        constructor(arg0: $Image);
        get native(): $DynamicTexture$ITexture;
    }
}
