import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        canPlace(): boolean;
        handler$koh000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$koh000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$koh000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingVerticalDirection(): $Direction;
        replaceClicked: boolean;
        hitResult: $BlockHitResult;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        hitResult: $BlockHitResult;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getLevel(): $Level;
        getPlayer(): $Player;
        isInside(): boolean;
        getItemInHand(): $ItemStack;
        getRotation(): number;
        getHorizontalDirection(): $Direction;
        getHitResult(): $BlockHitResult;
        getClickLocation(): $Vec3;
        isSecondaryUseActive(): boolean;
        getHand(): $InteractionHand;
        getClickedFace(): $Direction;
        getClickedPos(): $BlockPos;
        create$getHitResult(): $BlockHitResult;
        hitResult: $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get player(): $Player;
        get inside(): boolean;
        get itemInHand(): $ItemStack;
        get rotation(): number;
        get horizontalDirection(): $Direction;
        get clickLocation(): $Vec3;
        get secondaryUseActive(): boolean;
        get hand(): $InteractionHand;
        get clickedFace(): $Direction;
        get clickedPos(): $BlockPos;
    }
}
