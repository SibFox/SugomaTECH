import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Vec3i, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $TransportedItemStackHandlerBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $AirCurrentSegmentAccess, $AirCurrentAccess } from "@package/plus/dragons/createdragonsplus/common/kinetics/fan";
import { $List } from "@package/java/util";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $AABB, $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
export * as processing from "@package/com/simibubi/create/content/kinetics/fan/processing";

declare module "@package/com/simibubi/create/content/kinetics/fan" {
    export class $AirCurrent implements $AirCurrentAccess {
        static isPlayerCreativeFlying(arg0: $Entity): boolean;
        tick(): void;
        findEntities(): void;
        rebuild(): void;
        findAffectedHandlers(): void;
        static getFlowLimit(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $Direction_): number;
        getSegmentAccessAt(arg0: number): $AirCurrentSegmentAccess;
        redirect$jeh000$sable$reverseProjectEntityBB(arg0: $Entity): $AABB;
        redirect$jeh000$sable$reverseProjectAllPositions(arg0: $Entity): $Vec3;
        wrapOperation$jeh000$sable$transformFlowVector(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $Vec3i, arg4: number, arg5: $Vec3_, arg6: number): void;
        wrapOperation$ike000$petrolsparts$petrolsParts$filteredRecipeManagerWorld(arg0: $TransportedItemStackHandlerBehaviour, arg1: $Operation_<any>): $Level;
        wrapOperation$jeh000$sable$transformFlowVector$mixinextras$bridge$33(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalFloatRef, arg5: $LocalRef<any>, arg6: $LocalFloatRef): void;
        handler$jeh000$sable$updateSubLevel(arg0: $CallbackInfo): void;
        getTypeAt(arg0: number): $FanProcessingType;
        tickAffectedHandlers(): void;
        bounds: $AABB;
        maxDistance: number;
        source: $IAirCurrentSource;
        pushing: boolean;
        segments: $List<$AirCurrent$AirCurrentSegment>;
        direction: $Direction;
        constructor(arg0: $IAirCurrentSource);
    }
}
