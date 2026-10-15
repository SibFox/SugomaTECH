import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Action, $Action_ } from "@package/dev/tazer/mixed_litter/actions";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $EntityPredicate_, $EntityPredicate } from "@package/net/minecraft/advancements/critereon";

declare module "@package/dev/tazer/mixed_litter/variants" {
    export interface $Variant extends RegistryMarked<RegistryTypes.MixedLitterVariantsTag, RegistryTypes.MixedLitterVariants> {}
    export class $VariantType extends $Record {
        defaults(): $JsonObject;
        actions(): $List<$Action>;
        static CODEC: $Codec<$VariantType>;
        constructor(defaults: $JsonObject_, actions: $List_<$Action_>);
    }
    /**
     * Values that may be interpreted as {@link $VariantType}.
     */
    export type $VariantType_ = RegistryTypes.MixedLitterVariantTypes | { actions?: $List_<$Action_>, defaults?: $JsonObject_,  } | [actions?: $List_<$Action_>, defaults?: $JsonObject_, ];
    export class $Variant extends $Record {
        group(): ($ResourceLocation) | undefined;
        type(): $ResourceLocation;
        "arguments"(): $JsonObject;
        conditions(): ($EntityConditions) | undefined;
        static CODEC: $Codec<$Variant>;
        constructor(type: $ResourceLocation_, group: ($ResourceLocation_) | undefined, conditions: ($EntityConditions_) | undefined, arg3: $JsonObject_);
    }
    /**
     * Values that may be interpreted as {@link $Variant}.
     */
    export type $Variant_ = RegistryTypes.MixedLitterVariants | { conditions?: ($EntityConditions_) | undefined, type?: $ResourceLocation_, arguments?: $JsonObject_, group?: ($ResourceLocation_) | undefined,  } | [conditions?: ($EntityConditions_) | undefined, type?: $ResourceLocation_, arguments?: $JsonObject_, group?: ($ResourceLocation_) | undefined, ];
    export interface $VariantGroup extends RegistryMarked<RegistryTypes.MixedLitterVariantGroupsTag, RegistryTypes.MixedLitterVariantGroups> {}
    export interface $VariantType extends RegistryMarked<RegistryTypes.MixedLitterVariantTypesTag, RegistryTypes.MixedLitterVariantTypes> {}
    export class $SelectionMethod extends $Enum<$SelectionMethod> implements $StringRepresentable {
        static values(): $SelectionMethod[];
        static valueOf(arg0: string): $SelectionMethod;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SelectionMethod>;
        static UNIFORM: $SelectionMethod;
        static WEIGHTED: $SelectionMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SelectionMethod}.
     */
    export type $SelectionMethod_ = "weighted" | "uniform";
    export class $EntityConditions extends $Record {
        matches(arg0: $ServerLevel, arg1: $Vec3_ | null, arg2: $Entity): boolean;
        predicate(): ($EntityPredicate) | undefined;
        unobtainable(): boolean;
        typeCouldMatch(arg0: $EntityType_<never>): boolean;
        clientEvaluable(): boolean;
        remodel(): (boolean) | undefined;
        static CODEC: $Codec<$EntityConditions>;
        constructor(remodel: (boolean) | undefined, predicate: ($EntityPredicate_) | undefined, unobtainable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityConditions}.
     */
    export type $EntityConditions_ = { remodel?: (boolean) | undefined, unobtainable?: boolean, predicate?: ($EntityPredicate_) | undefined,  } | [remodel?: (boolean) | undefined, unobtainable?: boolean, predicate?: ($EntityPredicate_) | undefined, ];
    export class $VariantGroup extends $Record {
        defaults(): $JsonObject;
        conflicts(): $List<$ResourceLocation>;
        selection(): $SelectionMethod;
        exclusive(): boolean;
        conditions(): ($EntityConditions) | undefined;
        replaceDefault(): boolean;
        static CODEC: $Codec<$VariantGroup>;
        static CONFLICTS_CODEC: $Codec<$List<$ResourceLocation>>;
        constructor(conditions: ($EntityConditions_) | undefined, exclusive: boolean, replaceDefault: boolean, selection: $SelectionMethod_, conflicts: $List_<$ResourceLocation_>, defaults: $JsonObject_);
    }
    /**
     * Values that may be interpreted as {@link $VariantGroup}.
     */
    export type $VariantGroup_ = RegistryTypes.MixedLitterVariantGroups | { replaceDefault?: boolean, defaults?: $JsonObject_, selection?: $SelectionMethod_, conflicts?: $List_<$ResourceLocation_>, conditions?: ($EntityConditions_) | undefined, exclusive?: boolean,  } | [replaceDefault?: boolean, defaults?: $JsonObject_, selection?: $SelectionMethod_, conflicts?: $List_<$ResourceLocation_>, conditions?: ($EntityConditions_) | undefined, exclusive?: boolean, ];
}
