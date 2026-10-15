import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $FishingMinigameScreen, $ActiveSweetSpot } from "@package/com/wdiscute/starcatcher/minigame";

declare module "@package/com/wdiscute/starcatcher/registry/sweetspotbehaviour" {
    export class $AbstractSweetSpotBehaviour {
        onRemove(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): void;
        render(arg0: $GuiGraphics, arg1: $PoseStack, arg2: number, arg3: $FishingMinigameScreen, arg4: $ActiveSweetSpot): void;
        tick(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): void;
        onAdd(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): void;
        onHit(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): void;
        renderForeground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $FishingMinigameScreen, arg5: $ActiveSweetSpot): void;
        onMiss(arg0: $FishingMinigameScreen, arg1: $ActiveSweetSpot): void;
        constructor();
    }
}
