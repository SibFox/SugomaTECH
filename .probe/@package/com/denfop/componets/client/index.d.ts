import { $BlockEntityInventory, $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $Enum } from "@package/java/lang";
import { $AbstractComponent } from "@package/com/denfop/componets";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/componets/client" {
    export class $ComponentVisibleArea extends $AbstractComponent {
        aabb: $AABB;
        constructor(arg0: $BlockEntityBase);
    }
    export class $EffectType extends $Enum<$EffectType> {
        static values(): $EffectType[];
        static valueOf(arg0: string): $EffectType;
        static HEAT: $EffectType;
        static REFRIGERATOR: $EffectType;
        static WATER_GENERATOR: $EffectType;
    }
    /**
     * Values that may be interpreted as {@link $EffectType}.
     */
    export type $EffectType_ = "heat" | "water_generator" | "refrigerator";
    export class $ComponentClientEffectRender extends $AbstractComponent {
        render(): void;
        constructor(arg0: $BlockEntityInventory, arg1: $EffectType_);
    }
}
