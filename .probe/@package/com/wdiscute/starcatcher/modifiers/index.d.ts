import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $AbstractMinigameModifier } from "@package/com/wdiscute/starcatcher/modifiers/minigamemodifiers";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractCatchModifier } from "@package/com/wdiscute/starcatcher/modifiers/catchmodifiers";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map, $List } from "@package/java/util";
export * as catchmodifiers from "@package/com/wdiscute/starcatcher/modifiers/catchmodifiers";
export * as minigamemodifiers from "@package/com/wdiscute/starcatcher/modifiers/minigamemodifiers";

declare module "@package/com/wdiscute/starcatcher/modifiers" {
    export class $Modifier {
        static getModifiers(arg0: $ItemStack_): $List<$Modifier>;
        static getModifiers(arg0: $Player): $List<$Modifier>;
        static registerMinigame(): void;
        static registerCatch(): void;
        static getDefaultMinigameModifiers(): $List<$AbstractMinigameModifier>;
        static getMinigameModifiers(arg0: $ItemStack_): $List<$AbstractMinigameModifier>;
        static getMinigameModifiers(arg0: $Player): $List<$AbstractMinigameModifier>;
        static getDefaultCatchModifiers(): $List<$AbstractCatchModifier>;
        static getCatchModifiers(arg0: $ItemStack_): $List<$AbstractCatchModifier>;
        static getCatchModifiers(arg0: $Player): $List<$AbstractCatchModifier>;
        static CODEC: $Codec<$Modifier>;
        static MODIFIERS: $Map<$ResourceLocation, $MapCodec<$Modifier>>;
        static get defaultMinigameModifiers(): $List<$AbstractMinigameModifier>;
        static get defaultCatchModifiers(): $List<$AbstractCatchModifier>;
    }
    export interface $Modifier {
        getIdentifier(): $ResourceLocation;
        getCodec(): $MapCodec<$Modifier>;
        getDescription(arg0: boolean): $List<$Component>;
        get identifier(): $ResourceLocation;
        get codec(): $MapCodec<$Modifier>;
    }
}
