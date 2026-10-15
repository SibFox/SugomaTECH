import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $VeinType } from "@package/com/denfop/world/vein";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AddReloadListenerEvent } from "@package/net/neoforged/neoforge/event";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";

declare module "@package/com/denfop/datagen/loader" {
    export class $OreConfigLoader extends $SimpleJsonResourceReloadListener {
        static onAddReloadListeners(arg0: $AddReloadListenerEvent): void;
        static ORES: $Map<$ResourceLocation, $CustomOreConfig>;
        static LOGGER: $Logger;
        constructor();
    }
    export class $CustomOreConfig extends $Record {
        maxHeight(): number;
        minHeight(): number;
        chance(): number;
        minVeinSize(): number;
        maxVeinSize(): number;
        replaceBlock(): $Block;
        oreBlock(): $Block;
        minVeins(): number;
        maxVeins(): number;
        static CODEC: $Codec<$CustomOreConfig>;
        constructor(oreBlock: $Block_, replaceBlock: $Block_, minHeight: number, maxHeight: number, minVeinSize: number, maxVeinSize: number, minVeins: number, maxVeins: number, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $CustomOreConfig}.
     */
    export type $CustomOreConfig_ = { minHeight?: number, maxVeins?: number, minVeins?: number, minVeinSize?: number, maxVeinSize?: number, chance?: number, maxHeight?: number, oreBlock?: $Block_, replaceBlock?: $Block_,  } | [minHeight?: number, maxVeins?: number, minVeins?: number, minVeinSize?: number, maxVeinSize?: number, chance?: number, maxHeight?: number, oreBlock?: $Block_, replaceBlock?: $Block_, ];
    export class $VeinDataLoader extends $SimpleJsonResourceReloadListener {
        static onAddReloadListeners(arg0: $AddReloadListenerEvent): void;
        static VEIN_DATA: $Map<$ResourceLocation, $VeinType>;
        constructor();
    }
}
