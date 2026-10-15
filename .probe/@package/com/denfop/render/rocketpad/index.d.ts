import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IRoversItem } from "@package/com/denfop/api/space/rovers/api";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRocketLaunchPad } from "@package/com/denfop/blockentity/mechanism";

declare module "@package/com/denfop/render/rocketpad" {
    export class $DataRocket {
        getItem(): $ItemStack;
        getPos(): number;
        setPos(arg0: number): void;
        constructor(arg0: $IRoversItem, arg1: number);
        get item(): $ItemStack;
    }
    export class $RocketPadRender {
        static render(arg0: $BlockEntityRocketLaunchPad, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        constructor();
    }
}
