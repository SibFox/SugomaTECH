import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CyberwareSlot, $CyberwareSlot_ } from "@package/com/perigrine3/createcybernetics/api";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/perigrine3/createcybernetics/event/custom" {
    export class $CyberwareSurgeryEvent extends $Event {
        getPlayer(): $ServerPlayer;
        getRemoved(): $List<$CyberwareSurgeryEvent$Change>;
        getInstalls(): number;
        getInstalled(): $List<$CyberwareSurgeryEvent$Change>;
        getRemovals(): number;
        constructor(arg0: $ServerPlayer, arg1: number, arg2: number, arg3: $List_<$CyberwareSurgeryEvent$Change_>, arg4: $List_<$CyberwareSurgeryEvent$Change_>);
        get player(): $ServerPlayer;
        get removed(): $List<$CyberwareSurgeryEvent$Change>;
        get installs(): number;
        get installed(): $List<$CyberwareSurgeryEvent$Change>;
        get removals(): number;
    }
    export class $CyberwareSurgeryEvent$Change extends $Record {
        slot(): $CyberwareSlot;
        index(): number;
        stack(): $ItemStack;
        constructor(slot: $CyberwareSlot_, index: number, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $CyberwareSurgeryEvent$Change}.
     */
    export type $CyberwareSurgeryEvent$Change_ = { stack?: $ItemStack_, slot?: $CyberwareSlot_, index?: number,  } | [stack?: $ItemStack_, slot?: $CyberwareSlot_, index?: number, ];
}
