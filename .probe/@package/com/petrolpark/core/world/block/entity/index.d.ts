import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $GenericContamination, $Contaminant } from "@package/com/petrolpark/core/contamination";

declare module "@package/com/petrolpark/core/world/block/entity" {
    export class $IShulkerBoxBlockEntityDuck {
    }
    export interface $IShulkerBoxBlockEntityDuck {
        contaminateAll(arg0: $Stream<$Holder_<$Contaminant>>): void;
        getContamination(): $GenericContamination;
        get contamination(): $GenericContamination;
    }
}
