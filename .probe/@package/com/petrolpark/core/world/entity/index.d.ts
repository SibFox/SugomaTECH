import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
export * as npc from "@package/com/petrolpark/core/world/entity/npc";

declare module "@package/com/petrolpark/core/world/entity" {
    export class $EntityFallOnEvent extends $EntityEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        getPos(): $BlockPos;
        constructor(arg0: $Entity, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $BlockState;
        get level(): $Level;
        get pos(): $BlockPos;
    }
}
