import { $Container } from "@package/net/minecraft/world";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EnchantmentInstance } from "@package/net/minecraft/world/item/enchantment";
import { $DataSlot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/fuzs/easymagic/mixin/accessor" {
    export class $EnchantmentMenuAccessor {
    }
    export interface $EnchantmentMenuAccessor {
        getRandom(): $RandomSource;
        callGetEnchantmentList(arg0: $RegistryAccess, arg1: $ItemStack_, arg2: number, arg3: number): $List<$EnchantmentInstance>;
        getEnchantmentSeed(): $DataSlot;
        setEnchantSlots(arg0: $Container): void;
        get random(): $RandomSource;
        get enchantmentSeed(): $DataSlot;
        set enchantSlots(value: $Container);
    }
    export class $PlayerAccessor {
    }
    export interface $PlayerAccessor {
        setEnchantmentSeed(arg0: number): void;
        set enchantmentSeed(value: number);
    }
    /**
     * Values that may be interpreted as {@link $PlayerAccessor}.
     */
    export type $PlayerAccessor_ = ((arg0: number) => void);
}
