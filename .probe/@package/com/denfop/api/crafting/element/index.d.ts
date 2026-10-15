import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/denfop/api/crafting/element" {
    export class $CraftingInputIndustrial implements $RecipeInput {
        size(): number;
        isEmpty(): boolean;
        static of(arg0: number, arg1: number, arg2: $List_<$ItemStack_>): $CraftingInputIndustrial;
        width(): number;
        height(): number;
        getItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        items(): $List<$ItemStack>;
        ingredientCount(): number;
        static ofPositioned(arg0: number, arg1: number, arg2: $List_<$ItemStack_>): $CraftingInputIndustrial$Positioned;
        stackedContents(): $StackedContents;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        static EMPTY: $CraftingInputIndustrial;
        constructor(arg0: number, arg1: number, arg2: $List_<$ItemStack_>);
        get empty(): boolean;
    }
    export class $CraftingInputIndustrial$Positioned extends $Record {
        input(): $CraftingInputIndustrial;
        top(): number;
        left(): number;
        static EMPTY: $CraftingInputIndustrial$Positioned;
        constructor(input: $CraftingInputIndustrial, left: number, top: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingInputIndustrial$Positioned}.
     */
    export type $CraftingInputIndustrial$Positioned_ = { left?: number, input?: $CraftingInputIndustrial, top?: number,  } | [left?: number, input?: $CraftingInputIndustrial, top?: number, ];
}
