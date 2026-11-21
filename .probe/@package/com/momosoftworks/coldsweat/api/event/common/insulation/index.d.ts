import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map_ } from "@package/java/util";

declare module "@package/com/momosoftworks/coldsweat/api/event/common/insulation" {
    export class $InsulationTickEvent extends $Event implements $ICancellableEvent {
        getProperty(arg0: string): number;
        setProperty(arg0: string, arg1: number): void;
        getPlayer(): $Player;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $Map_<string, number>);
        get player(): $Player;
    }
    export class $InsulateItemEvent extends $Event implements $ICancellableEvent {
        getPlayer(): $Player;
        setInsulator(arg0: $ItemStack_): void;
        getInsulator(): $ItemStack;
        getArmorItem(): $ItemStack;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Player);
        get player(): $Player;
        get armorItem(): $ItemStack;
    }
}
