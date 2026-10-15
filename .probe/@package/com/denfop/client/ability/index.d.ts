import { $DeltaTracker } from "@package/net/minecraft/client";
import { $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $RegisterGuiLayersEvent, $ClientTickEvent$Post } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/denfop/client/ability" {
    export class $AbilityKeyHandler {
        static onClientTick(arg0: $ClientTickEvent$Post): void;
    }
    export class $AbilityClientModEvents {
        static registerOverlays(arg0: $RegisterGuiLayersEvent): void;
    }
    export class $AbilityHudOverlay implements $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static getHudScale(): number;
        static setHudScale(arg0: number): void;
    }
}
