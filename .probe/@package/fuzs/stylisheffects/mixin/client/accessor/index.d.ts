import { $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";

declare module "@package/fuzs/stylisheffects/mixin/client/accessor" {
    export class $AbstractContainerMenuAccessor {
    }
    export interface $AbstractContainerMenuAccessor {
        getMenuType(): $MenuType<never>;
        get menuType(): $MenuType<never>;
    }
    /**
     * Values that may be interpreted as {@link $AbstractContainerMenuAccessor}.
     */
    export type $AbstractContainerMenuAccessor_ = (() => $MenuType_<never>);
}
