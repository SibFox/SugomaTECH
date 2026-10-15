import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity, $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $EnumLevelRadiation_ } from "@package/com/denfop/api/pollution/radiation";

declare module "@package/com/denfop/api/item/armor" {
    export class $VolcanoArmor {
        static hasCompleteHazmat(arg0: $LivingEntity): boolean;
    }
    export interface $VolcanoArmor {
        addsProtection(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        fullyProtects(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VolcanoArmor}.
     */
    export type $VolcanoArmor_ = ((arg0: $LivingEntity, arg1: $EquipmentSlot, arg2: $ItemStack) => boolean);
    export class $HazmatLike {
        static hasCompleteHazmat(arg0: $LivingEntity): boolean;
        static hasCompleteHazmat(arg0: $LivingEntity, arg1: $EnumLevelRadiation_): boolean;
    }
    export interface $HazmatLike {
        getLevel(): number;
        addsProtection(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        fullyProtects(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_): boolean;
        get level(): number;
    }
    /**
     * Values that may be interpreted as {@link $HazmatLike}.
     */
    export type $HazmatLike_ = ((arg0: $LivingEntity, arg1: $EquipmentSlot, arg2: $ItemStack) => boolean);
}
