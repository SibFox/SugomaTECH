import { $ItemLike } from "@package/net/minecraft/world/level";
import { $NonNullList } from "@package/net/minecraft/core";
import { $CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab_, $ItemStack_, $ItemStack, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection, $Set, $List } from "@package/java/util";

declare module "@package/com/denfop/tabs" {
    export class $TabCore extends $CreativeModeTab {
        tabsAfter: $List<$ResourceLocation>;
        backgroundTexture: $ResourceLocation;
        tabsBefore: $List<$ResourceLocation>;
        static DEFAULT_BACKGROUND: $ResourceLocation;
        displayItemsGenerator: $CreativeModeTab$DisplayItemsGenerator;
        alignedRight: boolean;
        displayItemsSearchTab: $Set<$ItemStack>;
        displayItems: $Collection<$ItemStack>;
        constructor(arg0: number, arg1: string);
    }
    export class $IItemTab {
    }
    export interface $IItemTab extends $ItemLike {
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        getItemCategory(): $CreativeModeTab;
        get itemCategory(): $CreativeModeTab;
    }
}
