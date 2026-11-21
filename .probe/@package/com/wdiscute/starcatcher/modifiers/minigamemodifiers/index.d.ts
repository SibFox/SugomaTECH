import { $Modifier } from "@package/com/wdiscute/starcatcher/modifiers";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $FishingMinigameScreen, $ActiveSweetSpot } from "@package/com/wdiscute/starcatcher/minigame";

declare module "@package/com/wdiscute/starcatcher/modifiers/minigamemodifiers" {
    export class $AbstractMinigameModifier implements $Modifier {
        onRemove(arg0: $FishingMinigameScreen): void;
        getDescription(arg0: boolean): $List<$Component>;
        tick(arg0: $FishingMinigameScreen): void;
        onAdd(arg0: $FishingMinigameScreen): void;
        onHit(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): boolean;
        renderBackground(arg0: $FishingMinigameScreen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        mouseScrolled(arg0: $FishingMinigameScreen, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onKeyPress(arg0: $FishingMinigameScreen, arg1: number, arg2: number, arg3: number): void;
        onKeyReleased(arg0: $FishingMinigameScreen, arg1: number, arg2: number, arg3: number): void;
        renderForeground(arg0: $FishingMinigameScreen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        canHitSpot(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): boolean;
        onMiss(arg0: $FishingMinigameScreen): void;
        onSpotAdded(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): $ActiveSweetSpot;
        shouldDarkenWheel(arg0: $FishingMinigameScreen): boolean;
        renderOnPointer(arg0: $FishingMinigameScreen, arg1: $GuiGraphics, arg2: $PoseStack, arg3: number): void;
        skipMissSound(arg0: $FishingMinigameScreen): boolean;
        renderOnSweetSpot(arg0: $FishingMinigameScreen, arg1: $GuiGraphics, arg2: $PoseStack, arg3: $ActiveSweetSpot, arg4: number): void;
        skipHitParticles(arg0: $FishingMinigameScreen): boolean;
        skipHitSound(arg0: $FishingMinigameScreen): boolean;
        getNonOverriddenDescription(arg0: boolean): $List<$Component>;
        disablePointerRendering(arg0: $FishingMinigameScreen): boolean;
        disableSweetSpotRendering(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): boolean;
        flipRodAndProgressDisplay(arg0: $FishingMinigameScreen): boolean;
        preventLosingMinigame(arg0: $FishingMinigameScreen): boolean;
        forceAwardTreasure(arg0: $FishingMinigameScreen): boolean;
        removed: boolean;
    }
}
