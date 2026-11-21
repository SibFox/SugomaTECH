import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Quest } from "@package/com/denfop/api/guidebook";
import { $List_ } from "@package/java/util";
import { $RenderLevelStageEvent, $ClientPlayerNetworkEvent$LoggingIn, $ClientPlayerNetworkEvent$LoggingOut } from "@package/net/neoforged/neoforge/client/event";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $IBody } from "@package/com/denfop/api/space";
import { $Function_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TileEntityHologramSpace } from "@package/com/denfop/blockentity/mechanism";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/com/denfop/events/client" {
    export class $SolarSystemRenderer {
        render(arg0: $TileEntityHologramSpace, arg1: $RenderLevelStageEvent): void;
        writeDataInfo(): void;
        static renderParabolicTrajectory(arg0: $PoseStack, arg1: $RenderLevelStageEvent, arg2: number, arg3: $IBody, arg4: $IBody, arg5: number, arg6: $ItemStack_): void;
        static SATURN_RING_TEXTURE: $ResourceLocation;
        constructor();
    }
    export class $EventAutoQuests {
        complete(arg0: $Player, arg1: number, arg2: $Quest): void;
        isComplete(arg0: $Player, arg1: number, arg2: boolean, arg3: $List_<$ItemStack_>, arg4: $Quest): boolean;
        onWorldTick(arg0: $PlayerTickEvent$Post): void;
        hasAllItems(arg0: $Player, arg1: $List_<$ItemStack_>, arg2: $Quest): boolean;
        constructor();
    }
    export class $GlobalRenderManager {
        onWorldTick(arg0: $PlayerTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        onRenderWorldLast(arg0: $RenderLevelStageEvent): void;
        static clearDimensionRenders(arg0: $Level_): void;
        static addRender(arg0: $Level_, arg1: $BlockPos_, arg2: $Function_<$RenderLevelStageEvent, void>): void;
        static removeRender(arg0: $Level_, arg1: $BlockPos_): void;
        onClientLoggingOut(arg0: $ClientPlayerNetworkEvent$LoggingOut): void;
        static clearAllRenders(): void;
        onClientLoggingIn(arg0: $ClientPlayerNetworkEvent$LoggingIn): void;
        static tick: number;
        constructor();
    }
}
