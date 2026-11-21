import { $Mask, $Neither } from "@package/com/petrolpark/util";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $IDoughTopping } from "@package/com/petrolpark/compat/create/core/dough/topping";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as topping from "@package/com/petrolpark/compat/create/core/dough/topping";

declare module "@package/com/petrolpark/compat/create/core/dough" {
    export class $DoughData$Toppings extends $Record {
        "with"(arg0: $DoughData$Toppings$Entry_): $DoughData$Toppings;
        has(arg0: $Holder_<$IDoughTopping>): boolean;
        without(arg0: $Holder_<$IDoughTopping>): $DoughData$Toppings;
        toppings(): $List<$DoughData$Toppings$Entry>;
        static CODEC: $Codec<$DoughData$Toppings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DoughData$Toppings>;
        constructor(toppings: $List_<$DoughData$Toppings$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $DoughData$Toppings}.
     */
    export type $DoughData$Toppings_ = { toppings?: $List_<$DoughData$Toppings$Entry_>,  } | [toppings?: $List_<$DoughData$Toppings$Entry_>, ];
    export class $DoughData$Cuts$Entry extends $Record {
        x(): number;
        y(): number;
        rotation(): $Rotation;
        cut(): $Holder<$DoughCut>;
        static CODEC: $Codec<$DoughData$Cuts$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DoughData$Cuts$Entry>;
        constructor(cut: $Holder_<$DoughCut>, x: number, y: number, rotation: $Rotation_);
    }
    /**
     * Values that may be interpreted as {@link $DoughData$Cuts$Entry}.
     */
    export type $DoughData$Cuts$Entry_ = { x?: number, y?: number, cut?: $Holder_<$DoughCut>, rotation?: $Rotation_,  } | [x?: number, y?: number, cut?: $Holder_<$DoughCut>, rotation?: $Rotation_, ];
    export class $DoughCut extends $Record {
        pattern(): $Mask;
        shape(): $Mask;
        area(): number;
        static CODEC: $Codec<$Holder<$DoughCut>>;
        static DIRECT_CODEC: $Codec<$DoughCut>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DoughCut>>;
        constructor(arg0: $Mask, arg1: number);
        constructor(shape: $Mask, pattern: $Mask, area: number);
    }
    /**
     * Values that may be interpreted as {@link $DoughCut}.
     */
    export type $DoughCut_ = RegistryTypes.PetrolparkDoughCut | { area?: number, shape?: $Mask, pattern?: $Mask,  } | [area?: number, shape?: $Mask, pattern?: $Mask, ];
    export class $DoughData$Cuts extends $Record {
        cuts(): $List<$DoughData$Cuts$Entry>;
        static CODEC: $Codec<$DoughData$Cuts>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DoughData$Cuts>;
        constructor(cuts: $List_<$DoughData$Cuts$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $DoughData$Cuts}.
     */
    export type $DoughData$Cuts_ = { cuts?: $List_<$DoughData$Cuts$Entry_>,  } | [cuts?: $List_<$DoughData$Cuts$Entry_>, ];
    export interface $DoughCut extends RegistryMarked<RegistryTypes.PetrolparkDoughCutTag, RegistryTypes.PetrolparkDoughCut> {}
    export class $DoughData extends $Record {
        static get(arg0: $ItemStack_): $DoughData;
        length(): number;
        width(): number;
        withDough(arg0: $IDough): $DoughData;
        decoration(): $Neither<$DoughData$Cuts, $DoughData$Toppings>;
        thickness(): number;
        forItem(): $DoughData;
        dough(): $IDough;
        rolled(arg0: boolean, arg1: boolean): $DoughData;
        rolled(arg0: number, arg1: number, arg2: boolean): $DoughData;
        isRollable(arg0: boolean): boolean;
        withNewTopping(arg0: $DoughData$Toppings$Entry_): $DoughData;
        withNewTopping(arg0: $Holder_<$IDoughTopping>): $DoughData;
        withThickness(arg0: number): $DoughData;
        remainingArea(): number;
        madeByPlayer(arg0: boolean): $DoughData;
        madeByPlayer(): boolean;
        withoutTopping(arg0: $Holder_<$IDoughTopping>): $DoughData;
        static CODEC: $Codec<$DoughData>;
        static MAX_WIDTH: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DoughData>;
        constructor(dough: $IDough, thickness: number, width: number, length: number, decoration: $Neither<$DoughData$Cuts_, $DoughData$Toppings_>, madeByPlayer: boolean);
    }
    /**
     * Values that may be interpreted as {@link $DoughData}.
     */
    export type $DoughData_ = { thickness?: number, length?: number, decoration?: $Neither<$DoughData$Cuts_, $DoughData$Toppings_>, dough?: $IDough, madeByPlayer?: boolean, width?: number,  } | [thickness?: number, length?: number, decoration?: $Neither<$DoughData$Cuts_, $DoughData$Toppings_>, dough?: $IDough, madeByPlayer?: boolean, width?: number, ];
    export interface $IDoughType<DOUGH> extends RegistryMarked<RegistryTypes.PetrolparkDoughTypeTag, RegistryTypes.PetrolparkDoughType> {}
    export class $DoughData$Toppings$Entry extends $Record {
        topping(): $Holder<$IDoughTopping>;
        static CODEC: $Codec<$DoughData$Toppings$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DoughData$Toppings$Entry>;
        constructor(topping: $Holder_<$IDoughTopping>);
    }
    /**
     * Values that may be interpreted as {@link $DoughData$Toppings$Entry}.
     */
    export type $DoughData$Toppings$Entry_ = { topping?: $Holder_<$IDoughTopping>,  } | [topping?: $Holder_<$IDoughTopping>, ];
    export class $IDoughType<DOUGH extends $IDough> {
    }
    export interface $IDoughType<DOUGH extends $IDough> {
        codec(): $MapCodec<DOUGH>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, DOUGH>;
    }
    /**
     * Values that may be interpreted as {@link $IDoughType}.
     */
    export type $IDoughType_<DOUGH> = RegistryTypes.PetrolparkDoughType;
    export class $IDough {
        static CODEC: $Codec<$IDough>;
        static TYPED_CODEC: $Codec<$IDough>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IDough>;
    }
    export interface $IDough {
        name(): $Component;
        getType(): $IDoughType<never>;
        textureLocation(): $ResourceLocation;
        tint(): number;
        minimumThickness(): number;
        toppable(): boolean;
        cuttable(): boolean;
        get type(): $IDoughType<never>;
    }
}
