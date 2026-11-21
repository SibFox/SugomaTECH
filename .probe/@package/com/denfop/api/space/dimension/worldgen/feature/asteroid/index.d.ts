import { $JsonElement_ } from "@package/com/google/gson";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AddReloadListenerEvent } from "@package/net/neoforged/neoforge/event";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $EnumSet, $Map_ } from "@package/java/util";

declare module "@package/com/denfop/api/space/dimension/worldgen/feature/asteroid" {
    export class $AsteroidOreRegistry {
        static getDefinitions(arg0: string): $List<$AsteroidOreRegistry$AsteroidOreDefinition>;
        static applyReload(arg0: $Map_<$ResourceLocation_, $JsonElement_>): void;
    }
    export class $AsteroidOreReloadListener {
        static onReloadListener(arg0: $AddReloadListenerEvent): void;
    }
    export class $AsteroidOreRegistry$AsteroidOreDefinition extends $Record {
        id(): $ResourceLocation;
        state(): $BlockState;
        maxDepth(): number;
        shape(): $AsteroidOreRegistry$DepositShape;
        supports(arg0: $AsteroidMaterialType_): boolean;
        weight(): number;
        minDepth(): number;
        rarity(): number;
        allowedTypes(): $EnumSet<$AsteroidMaterialType>;
        minVeinSize(): number;
        maxVeinSize(): number;
        constructor(id: $ResourceLocation_, state: $BlockState_, weight: number, minVeinSize: number, maxVeinSize: number, rarity: number, minDepth: number, maxDepth: number, shape: $AsteroidOreRegistry$DepositShape_, allowedTypes: $EnumSet<$AsteroidMaterialType_>);
    }
    /**
     * Values that may be interpreted as {@link $AsteroidOreRegistry$AsteroidOreDefinition}.
     */
    export type $AsteroidOreRegistry$AsteroidOreDefinition_ = { allowedTypes?: $EnumSet<$AsteroidMaterialType_>, maxDepth?: number, state?: $BlockState_, maxVeinSize?: number, minDepth?: number, shape?: $AsteroidOreRegistry$DepositShape_, minVeinSize?: number, weight?: number, rarity?: number, id?: $ResourceLocation_,  } | [allowedTypes?: $EnumSet<$AsteroidMaterialType_>, maxDepth?: number, state?: $BlockState_, maxVeinSize?: number, minDepth?: number, shape?: $AsteroidOreRegistry$DepositShape_, minVeinSize?: number, weight?: number, rarity?: number, id?: $ResourceLocation_, ];
    export class $AsteroidMaterialType extends $Enum<$AsteroidMaterialType> {
        static values(): $AsteroidMaterialType[];
        static valueOf(arg0: string): $AsteroidMaterialType;
        serializedName(): string;
        static byName(arg0: string): $AsteroidMaterialType;
        static ORE_RICH: $AsteroidMaterialType;
        static MIXED: $AsteroidMaterialType;
        static HOLLOW: $AsteroidMaterialType;
        static METALLIC: $AsteroidMaterialType;
        static POROUS: $AsteroidMaterialType;
        static ROCKY: $AsteroidMaterialType;
        static SPECIAL: $AsteroidMaterialType;
        static ICY: $AsteroidMaterialType;
    }
    /**
     * Values that may be interpreted as {@link $AsteroidMaterialType}.
     */
    export type $AsteroidMaterialType_ = "rocky" | "metallic" | "mixed" | "porous" | "ore_rich" | "hollow" | "icy" | "special";
    export class $AsteroidOreReloadListener$Loader extends $SimpleJsonResourceReloadListener {
    }
    export class $AsteroidOreRegistry$DepositShape extends $Enum<$AsteroidOreRegistry$DepositShape> {
        static values(): $AsteroidOreRegistry$DepositShape[];
        static valueOf(arg0: string): $AsteroidOreRegistry$DepositShape;
        static byName(arg0: string): $AsteroidOreRegistry$DepositShape;
        static CORE: $AsteroidOreRegistry$DepositShape;
        static SHELL: $AsteroidOreRegistry$DepositShape;
        static SCATTER: $AsteroidOreRegistry$DepositShape;
        static VEIN: $AsteroidOreRegistry$DepositShape;
        static CLUSTER: $AsteroidOreRegistry$DepositShape;
    }
    /**
     * Values that may be interpreted as {@link $AsteroidOreRegistry$DepositShape}.
     */
    export type $AsteroidOreRegistry$DepositShape_ = "core" | "vein" | "cluster" | "shell" | "scatter";
}
