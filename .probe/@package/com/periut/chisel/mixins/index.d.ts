import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Slot } from "@package/net/minecraft/world/inventory";

declare module "@package/com/periut/chisel/mixins" {
    export class $HandledScreenAccessor {
    }
    export interface $HandledScreenAccessor {
        getTouchDragSlotStart(): $Slot;
        getTouchIsRightClickDrag(): boolean;
        invokeCalculateOffset(): void;
        getTouchDragStack(): $ItemStack;
        getHeldButtonType(): number;
        get touchDragSlotStart(): $Slot;
        get touchIsRightClickDrag(): boolean;
        get touchDragStack(): $ItemStack;
        get heldButtonType(): number;
    }
}
