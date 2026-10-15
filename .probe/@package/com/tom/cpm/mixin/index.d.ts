import { $DeltaTracker } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/tom/cpm/mixin" {
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        callRenderChat(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiAccessor}.
     */
    export type $GuiAccessor_ = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
}
