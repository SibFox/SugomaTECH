import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $HandheldItemBuilder } from "@package/dev/latvian/mods/kubejs/item/custom";

declare module "@package/com/chinaex123/kubejs_kaleidoscope/item" {
    export class $KnifeItemBuilder extends $HandheldItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $SickleItemBuilder extends $HandheldItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
}
