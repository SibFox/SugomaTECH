import { $Registry } from "@package/net/minecraft/core";

declare module "@package/com/momosoftworks/coldsweat/mixin_interface" {
    export class $RegistryTagLoader<T> {
    }
    export interface $RegistryTagLoader<T> {
        setRegistry(arg0: $Registry<T>): void;
        getRegistry(): $Registry<T>;
    }
}
