import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as placement from "@package/com/momosoftworks/coldsweat/api/util/placement";

declare module "@package/com/momosoftworks/coldsweat/api/util" {
    export class $Temperature$Trait extends $Enum<$Temperature$Trait> implements $StringRepresentable {
        static values(): $Temperature$Trait[];
        static valueOf(arg0: string): $Temperature$Trait;
        getSerializedName(): string;
        getFormattedName(): string;
        static fromID(arg0: string): $Temperature$Trait;
        isForWorld(): boolean;
        isForAttributes(): boolean;
        isProportional(): boolean;
        isForTemperature(): boolean;
        isForModifiers(): boolean;
        isNegativeValueGood(): boolean;
        getRemappedEnumConstantName(): string;
        static CORE: $Temperature$Trait;
        static FREEZING_POINT: $Temperature$Trait;
        static BURNING_POINT: $Temperature$Trait;
        static HEAT_RESISTANCE: $Temperature$Trait;
        static CODEC: $Codec<$Temperature$Trait>;
        static RATE: $Temperature$Trait;
        static COLD_RESISTANCE: $Temperature$Trait;
        static COLD_DAMPENING: $Temperature$Trait;
        static HEAT_DAMPENING: $Temperature$Trait;
        static WORLD: $Temperature$Trait;
        static BODY: $Temperature$Trait;
        static BASE: $Temperature$Trait;
        get serializedName(): string;
        get formattedName(): string;
        get forWorld(): boolean;
        get forAttributes(): boolean;
        get proportional(): boolean;
        get forTemperature(): boolean;
        get forModifiers(): boolean;
        get negativeValueGood(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Temperature$Trait}.
     */
    export type $Temperature$Trait_ = "world" | "core" | "base" | "body" | "rate" | "freezing_point" | "burning_point" | "cold_resistance" | "heat_resistance" | "cold_dampening" | "heat_dampening";
    export class $Temperature$Units extends $Enum<$Temperature$Units> implements $StringRepresentable {
        static values(): $Temperature$Units[];
        static valueOf(arg0: string): $Temperature$Units;
        getFullName(): $Component;
        getSerializedName(): string;
        getFormattedName(): $Component;
        static fromID(arg0: string): $Temperature$Units;
        getRemappedEnumConstantName(): string;
        static C: $Temperature$Units;
        static CODEC: $Codec<$Temperature$Units>;
        static F: $Temperature$Units;
        static MC: $Temperature$Units;
        get fullName(): $Component;
        get serializedName(): string;
        get formattedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Temperature$Units}.
     */
    export type $Temperature$Units_ = "f" | "c" | "mc";
}
