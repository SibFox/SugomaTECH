import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";

declare module "@package/com/denfop/painting" {
    export class $IUPainting {
        static CHEMIST_PICTURE: $DeferredHolder<$PaintingVariant, $PaintingVariant>;
        constructor();
    }
}
