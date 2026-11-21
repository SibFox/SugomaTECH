import { $LootParams } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/evandev/reliable_remover/mixin/minecraft/accessor" {
    export class $LootContextAccessor {
    }
    export interface $LootContextAccessor {
        reliable_remover$getParams(): $LootParams;
    }
    /**
     * Values that may be interpreted as {@link $LootContextAccessor}.
     */
    export type $LootContextAccessor_ = (() => $LootParams);
}
