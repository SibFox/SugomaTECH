import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";

declare module "@package/net/bettercombat/mixin/client" {
    export class $MinecraftClientAccessor {
    }
    export interface $MinecraftClientAccessor {
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        setAttackCooldown(arg0: number): void;
        getMissTime(): number;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        set attackCooldown(value: number);
        get missTime(): number;
    }
}
