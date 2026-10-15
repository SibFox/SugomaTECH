import { $Consumer_ } from "@package/java/util/function";
import { $TextureProvider } from "@package/com/tom/cpm/shared/skin";
import { $Image } from "@package/com/tom/cpl/util";
import { $Vec2i, $Box } from "@package/com/tom/cpl/math";
import { $EditorTexture } from "@package/com/tom/cpm/shared/editor";
import { $Enum } from "@package/java/lang";
import { $ServerCaps } from "@package/com/tom/cpm/shared/network";
import { $FormatText } from "@package/com/tom/cpl/text";

declare module "@package/com/tom/cpm/shared/util" {
    export class $ScalingOptions extends $Enum<$ScalingOptions> {
        static values(): $ScalingOptions[];
        static valueOf(arg0: string): $ScalingOptions;
        asText(): $FormatText;
        getMax(): number;
        getMin(): number;
        getDefualtEnabled(): boolean;
        getCaps(): $ServerCaps;
        getNetKey(): string;
        static DEFENSE: $ScalingOptions;
        static WIDTH: $ScalingOptions;
        static FLIGHT_SPEED: $ScalingOptions;
        static HITBOX_HEIGHT: $ScalingOptions;
        static ENTITY: $ScalingOptions;
        static MOTION: $ScalingOptions;
        static PROJECTILE_DMG: $ScalingOptions;
        static EYE_HEIGHT: $ScalingOptions;
        static VIEW_BOBBING: $ScalingOptions;
        static SAFE_FALL_DISTANCE: $ScalingOptions;
        static VALUES: $ScalingOptions[];
        static HEALTH: $ScalingOptions;
        static THIRD_PERSON: $ScalingOptions;
        static ATTACK_SPEED: $ScalingOptions;
        static KNOCKBACK_RESIST: $ScalingOptions;
        static EXPLOSION_DMG: $ScalingOptions;
        static HITBOX_WIDTH: $ScalingOptions;
        static MINING_SPEED: $ScalingOptions;
        static HEIGHT: $ScalingOptions;
        static STEP_HEIGHT: $ScalingOptions;
        static REACH: $ScalingOptions;
        static ATTACK_DMG: $ScalingOptions;
        static JUMP_HEIGHT: $ScalingOptions;
        static FALL_DAMAGE: $ScalingOptions;
        static MOB_VISIBILITY: $ScalingOptions;
        static ATTACK_KNOCKBACK: $ScalingOptions;
        get max(): number;
        get min(): number;
        get defualtEnabled(): boolean;
        get caps(): $ServerCaps;
        get netKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ScalingOptions}.
     */
    export type $ScalingOptions_ = "entity" | "eye_height" | "hitbox_width" | "hitbox_height" | "third_person" | "view_bobbing" | "motion" | "step_height" | "flight_speed" | "fall_damage" | "reach" | "mining_speed" | "attack_speed" | "attack_knockback" | "attack_dmg" | "defense" | "health" | "mob_visibility" | "width" | "height" | "jump_height" | "projectile_dmg" | "explosion_dmg" | "knockback_resist" | "safe_fall_distance";
    export class $TextureStitcher {
        stitchImage(arg0: $TextureProvider, arg1: $Consumer_<$Vec2i>): void;
        stitchImage(arg0: $EditorTexture): void;
        stitchImage(arg0: $Image, arg1: $Consumer_<$Vec2i>): void;
        allocSingleColor(arg0: $Vec2i, arg1: number, arg2: $Consumer_<$Vec2i>): void;
        checkImageSize(arg0: $Box): void;
        finish(): $TextureProvider;
        finish(arg0: $TextureProvider): void;
        refresh(arg0: $Image): boolean;
        setBase(arg0: $Image): void;
        setBase(arg0: $TextureProvider): void;
        static smallestEncompassingPowerOfTwo(arg0: number): number;
        hasStitches(): boolean;
        constructor(arg0: number);
    }
}
