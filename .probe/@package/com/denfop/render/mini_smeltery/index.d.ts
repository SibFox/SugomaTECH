import { $BlockEntityMiniSmeltery } from "@package/com/denfop/blockentity/mechanism";
import { $RenderLevelStageEvent } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/denfop/render/mini_smeltery" {
    export class $RenderMiniSmeltery {
        static render(arg0: $BlockEntityMiniSmeltery, arg1: $RenderLevelStageEvent): void;
        constructor();
    }
}
