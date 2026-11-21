import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
export * as upgrade from "@package/com/denfop/api/item/upgrade";
export * as armor from "@package/com/denfop/api/item/armor";
export * as energy from "@package/com/denfop/api/item/energy";

declare module "@package/com/denfop/api/item" {
    export class $DamageItem {
    }
    export interface $DamageItem {
        getCustomDamage(arg0: $ItemStack_): number;
        applyCustomDamage(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): boolean;
        getMaxCustomDamage(arg0: $ItemStack_): number;
        setCustomDamage(arg0: $ItemStack_, arg1: number): void;
    }
    export class $MultiBlockItem {
    }
    export interface $MultiBlockItem {
        hasUniqueRender(arg0: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MultiBlockItem}.
     */
    export type $MultiBlockItem_ = ((arg0: $ItemStack) => boolean);
}
