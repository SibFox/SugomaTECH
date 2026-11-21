import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FishingBobEntity } from "@package/com/wdiscute/starcatcher/bobentity";

declare module "@package/com/wdiscute/starcatcher/registry/tackleskin" {
    export interface $AbstractTackleSkin extends RegistryMarked<RegistryTypes.StarcatcherBobberSkinTag, RegistryTypes.StarcatcherBobberSkin> {}
    export class $AbstractTackleSkin {
        onTick(arg0: $FishingBobEntity): void;
        onFailedMinigame(arg0: $Player): void;
        onSuccessfulMinigame(arg0: $Player): void;
        onRetrieve(arg0: $Player): void;
        onCast(arg0: $Player): void;
        onBiting(arg0: $Player, arg1: $Entity): void;
        onMissed(arg0: $Player): void;
        onMinigameStarted(arg0: $Player): void;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $AbstractTackleSkin}.
     */
    export type $AbstractTackleSkin_ = RegistryTypes.StarcatcherBobberSkin;
}
