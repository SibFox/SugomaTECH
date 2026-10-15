import { $IBody } from "@package/com/denfop/api/space";
import { $IResearchTable, $IResearchSystem } from "@package/com/denfop/api/space/research/api";
import { $IRovers } from "@package/com/denfop/api/space/rovers/api";
import { $Data } from "@package/com/denfop/api/space/fakebody";
export * as event from "@package/com/denfop/api/space/research/event";
export * as api from "@package/com/denfop/api/space/research/api";

declare module "@package/com/denfop/api/space/research" {
    export class $SpaceResearchSystem {
        constructor();
    }
    export class $BaseSpaceResearchSystem implements $IResearchSystem {
        returnOperation(arg0: $IBody, arg1: $IResearchTable): void;
        sendingOperation(arg0: $IRovers, arg1: $IBody, arg2: $IResearchTable): void;
        getDataFromPlayer(arg0: $IResearchTable, arg1: $IBody): $Data;
        canSendingOperation(arg0: $IRovers, arg1: $IBody, arg2: $IResearchTable): boolean;
        sendingAutoOperation(arg0: $IRovers, arg1: $IBody, arg2: $IResearchTable): void;
        constructor();
    }
}
