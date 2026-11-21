import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Biome$Precipitation_, $Biome$Precipitation } from "@package/net/minecraft/world/level/biome";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";
export * as entity from "@package/com/petrolpark/core/world/block/entity";

declare module "@package/com/petrolpark/core/world/block" {
    export class $HandlePrecipitationEvent extends $BlockEvent implements $ICancellableEvent {
        getLevel(): $Level;
        getPrecipitation(): $Biome$Precipitation;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Biome$Precipitation_);
        get level(): $Level;
        get precipitation(): $Biome$Precipitation;
    }
}
