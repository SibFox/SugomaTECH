import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/collision" {
    export class $BlockEntityCollisionProxy extends $BlockEntity {
        getCapability<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_): T;
        setMasterPos(arg0: $BlockPos_): void;
        getMasterPos(): $BlockPos;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
