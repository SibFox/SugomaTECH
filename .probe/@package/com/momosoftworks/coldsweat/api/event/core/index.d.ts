import { $DeferredHolder, $IRegistryExtension } from "@package/net/neoforged/neoforge/registries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
export * as registry from "@package/com/momosoftworks/coldsweat/api/event/core/registry";
export * as init from "@package/com/momosoftworks/coldsweat/api/event/core/init";

declare module "@package/com/momosoftworks/coldsweat/api/event/core" {
    export class $MissingMappingsEvent$Builder<T> {
        from(arg0: string): $MissingMappingsEvent$Builder<T>;
        from(arg0: $ResourceLocation_): $MissingMappingsEvent$Builder<T>;
        to(arg0: $DeferredHolder<T, never>): void;
        to(arg0: string): void;
        to(arg0: $ResourceLocation_): void;
        namespace(arg0: string): $MissingMappingsEvent$Builder<T>;
        constructor(arg0: $IRegistryExtension<T>);
    }
    export class $MissingMappingsEvent extends $Event {
        remap<T>(arg0: $IRegistryExtension<T>): $MissingMappingsEvent$Builder<T>;
        constructor();
    }
}
