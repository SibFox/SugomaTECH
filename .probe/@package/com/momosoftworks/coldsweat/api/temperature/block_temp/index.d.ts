import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Set } from "@package/java/util";

declare module "@package/com/momosoftworks/coldsweat/api/temperature/block_temp" {
    export class $BlockTemp {
        range(): number;
        isValid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        fade(): boolean;
        getAffectedBlocks(): $Set<$Block>;
        hasBlock(arg0: $Block_): boolean;
        getTemperature(arg0: $Level_, arg1: $LivingEntity | null, arg2: $BlockState_, arg3: $BlockPos_, arg4: number): number;
        minEffect(): number;
        maxEffect(): number;
        minTemperature(): number;
        maxTemperature(): number;
        logarithmic(): boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, ...arg6: $Block_[]);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean, ...arg7: $Block_[]);
        constructor(...arg0: $Block_[]);
        get affectedBlocks(): $Set<$Block>;
    }
}
