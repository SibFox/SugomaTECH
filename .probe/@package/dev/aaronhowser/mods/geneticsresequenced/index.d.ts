import { $LongOpenHashSet } from "@package/it/unimi/dsi/fastutil/longs";
export * as data from "@package/dev/aaronhowser/mods/geneticsresequenced/data";
export * as event from "@package/dev/aaronhowser/mods/geneticsresequenced/event";
export * as gene from "@package/dev/aaronhowser/mods/geneticsresequenced/gene";

declare module "@package/dev/aaronhowser/mods/geneticsresequenced" {
    export class $AntiFieldCarrier {
    }
    export interface $AntiFieldCarrier {
        geneticsresequenced$getAntiFieldPositions(): $LongOpenHashSet;
    }
}
