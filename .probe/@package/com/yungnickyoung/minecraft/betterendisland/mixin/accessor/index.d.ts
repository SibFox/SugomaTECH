import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";

declare module "@package/com/yungnickyoung/minecraft/betterendisland/mixin/accessor" {
    export class $EndDragonFightAccessor {
    }
    export interface $EndDragonFightAccessor {
        setDragonKilled(arg0: boolean): void;
        getPreviouslyKilled(): boolean;
        invokeCreateNewDragon(): $EnderDragon;
        setPortalLocation(arg0: $BlockPos_): void;
        getDragonEvent(): $ServerBossEvent;
        getGateways(): $ObjectArrayList<number>;
        getPortalLocation(): $BlockPos;
        set dragonKilled(value: boolean);
        get previouslyKilled(): boolean;
        get dragonEvent(): $ServerBossEvent;
        get gateways(): $ObjectArrayList<number>;
    }
}
