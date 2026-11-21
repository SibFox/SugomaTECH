import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map, $Set, $Set_ } from "@package/java/util";

declare module "@package/mods/cybercat/gigeresque/mixins/common" {
    export class $PointOfInterestTypesInvoker {
        static getTypeByState(): $Map<$BlockState, $Holder<$PoiType>>;
        static invokeGetBlockStates(arg0: $Block_): $Set<$BlockState>;
        static invokeRegisterBlockStates(arg0: $Holder_<$PoiType>, arg1: $Set_<$BlockState_>): void;
        static get typeByState(): $Map<$BlockState, $Holder<$PoiType>>;
    }
    export interface $PointOfInterestTypesInvoker {
    }
}
