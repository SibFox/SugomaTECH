import { $RegistryAccess } from "@package/net/minecraft/core";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/denfop/damagesource" {
    export class $IUDamageSource {
        static initDamage(arg0: $RegistryAccess): void;
        static frostbite: $DamageSource;
        static current: $DamageSource;
        static bee: $DamageSource;
        static radiation: $DamageSource;
        static poison_gas: $DamageSource;
        constructor();
    }
}
