import { $Consumer } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/qinomed/kubejsdelight/block/custom" {
    export class $PieBlockBuilder extends $BlockBuilder {
        bites(arg0: number): $PieBlockBuilder;
        sliceItem(arg0: $ResourceLocation_): $PieBlockBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $FeastBlockBuilder extends $BlockBuilder {
        servingItems(arg0: $ResourceLocation_[]): $FeastBlockBuilder;
        hasLeftovers(arg0: boolean): $FeastBlockBuilder;
        servingsAmount(arg0: number): $FeastBlockBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(arg0: $ResourceLocation_);
    }
}
