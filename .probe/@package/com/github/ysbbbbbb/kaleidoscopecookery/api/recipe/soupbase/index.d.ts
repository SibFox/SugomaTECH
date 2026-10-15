import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ISoupBaseRender } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/client/render";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/recipe/soupbase" {
    export class $ISoupBase {
    }
    export interface $ISoupBase {
        getName(): $ResourceLocation;
        isSoupBase(arg0: $ItemStack_): boolean;
        isContainer(arg0: $ItemStack_): boolean;
        getDisplayStack(): $ItemStack;
        getBubbleColor(): number;
        getReturnSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): $ItemStack;
        getReturnContainer(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): $ItemStack;
        getRender(): $ISoupBaseRender;
        get name(): $ResourceLocation;
        get displayStack(): $ItemStack;
        get bubbleColor(): number;
        get render(): $ISoupBaseRender;
    }
}
