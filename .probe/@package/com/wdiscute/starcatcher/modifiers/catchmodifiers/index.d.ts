import { $Modifier } from "@package/com/wdiscute/starcatcher/modifiers";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $FishingBobEntity } from "@package/com/wdiscute/starcatcher/bobentity";
import { $List, $List_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $FishProperties, $FishProperties_ } from "@package/com/wdiscute/starcatcher/fish";

declare module "@package/com/wdiscute/starcatcher/modifiers/catchmodifiers" {
    export class $AbstractCatchModifier implements $Modifier {
        getDescription(arg0: boolean): $List<$Component>;
        onAdd(arg0: $FishingBobEntity): void;
        shouldStopFishing(arg0: $FishingBobEntity): boolean;
        noGravity(arg0: $FishingBobEntity): boolean;
        onFailedMinigame(arg0: $FishingBobEntity): void;
        getNonOverriddenDescription(arg0: boolean): $List<$Component>;
        adjustMinTicksToFish(arg0: $FishingBobEntity, arg1: number): number;
        adjustChanceToFishEachTick(arg0: $FishingBobEntity, arg1: number): number;
        adjustMaxTicksToFish(arg0: $FishingBobEntity, arg1: number): number;
        onSuccessfulMinigameCompletion(arg0: $FishingBobEntity, arg1: number, arg2: boolean, arg3: boolean, arg4: number): void;
        modifyPercentile(arg0: $FishingBobEntity, arg1: number): number;
        onReelStart(arg0: $FishingBobEntity): void;
        addToFishedItems(arg0: $FishingBobEntity, arg1: $FishProperties_, arg2: number, arg3: boolean, arg4: number, arg5: boolean): $List<$ItemStack>;
        shouldBeGolden(arg0: $FishingBobEntity, arg1: number, arg2: boolean, arg3: boolean, arg4: number): boolean;
        forceSpawnEntity(arg0: $FishingBobEntity): boolean;
        cancelGolden(arg0: $FishingBobEntity): boolean;
        forceSelectFish(arg0: $FishingBobEntity): $Pair<$FishProperties, $ResourceLocation>;
        forceAwardTreasure(arg0: $FishingBobEntity, arg1: number, arg2: boolean, arg3: boolean, arg4: number): boolean;
        shouldSkipAddingBaseItem(arg0: $FishingBobEntity, arg1: $ItemStack_): boolean;
        addToTreasureWeightedList(): $List<$ItemStack>;
        modifyAvailablePool(arg0: $FishingBobEntity, arg1: $List_<$FishProperties_>): $List<$FishProperties>;
        forceSelectFishIfNoNonFishAvailable(arg0: $FishingBobEntity): $Pair<$FishProperties, $ResourceLocation>;
        modifyThrowVec(arg0: $FishingBobEntity, arg1: $Vec3_): $Vec3;
        forceSkipMinigame(arg0: $FishingBobEntity): boolean;
        survivesLava(arg0: $FishingBobEntity): boolean;
        shouldHideCatch(arg0: $FishingBobEntity): boolean;
        modifyTreasure(arg0: $FishingBobEntity, arg1: $ItemStack_, arg2: $FishProperties_): $ItemStack;
    }
}
