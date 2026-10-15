import { $BiPredicate_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $Map$Entry, $Collection, $Collection_ } from "@package/java/util";
import { $InsulatorData } from "@package/com/momosoftworks/coldsweat/data/codec/configuration";

declare module "@package/com/momosoftworks/coldsweat/api/event/client" {
    export class $InsulatorTabBuildEvent extends $Event {
        getItems(): $Collection<$Map$Entry<$Item, $InsulatorData>>;
        addCheck(arg0: $BiPredicate_<$Item, $InsulatorData>): void;
        constructor(arg0: $Collection_<$Map$Entry<$Item_, $InsulatorData>>);
        get items(): $Collection<$Map$Entry<$Item, $InsulatorData>>;
    }
}
