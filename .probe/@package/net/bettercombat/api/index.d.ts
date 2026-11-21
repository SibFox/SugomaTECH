import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ConditionalTrailAppearance, $ConditionalTrailAppearance_, $ParticlePlacement, $ParticlePlacement_ } from "@package/net/bettercombat/api/fx";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
export * as fx from "@package/net/bettercombat/api/fx";

declare module "@package/net/bettercombat/api" {
    export class $WeaponAttributes$HitBoxShape extends $Enum<$WeaponAttributes$HitBoxShape> {
        static values(): $WeaponAttributes$HitBoxShape[];
        static valueOf(name: string): $WeaponAttributes$HitBoxShape;
        static FORWARD_BOX: $WeaponAttributes$HitBoxShape;
        static VERTICAL_PLANE: $WeaponAttributes$HitBoxShape;
        static HORIZONTAL_PLANE: $WeaponAttributes$HitBoxShape;
    }
    /**
     * Values that may be interpreted as {@link $WeaponAttributes$HitBoxShape}.
     */
    export type $WeaponAttributes$HitBoxShape_ = "forward_box" | "vertical_plane" | "horizontal_plane";
    export class $AttackHand extends $Record {
        attributes(): $WeaponAttributes;
        attack(): $WeaponAttributes$Attack;
        itemStack(): $ItemStack;
        isOffHand(): boolean;
        upswingRate(): number;
        combo(): $ComboState;
        constructor(attack: $WeaponAttributes$Attack, combo: $ComboState_, isOffHand: boolean, attributes: $WeaponAttributes, itemStack: $ItemStack_);
        get offHand(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AttackHand}.
     */
    export type $AttackHand_ = { isOffHand?: boolean, itemStack?: $ItemStack_, attributes?: $WeaponAttributes, attack?: $WeaponAttributes$Attack, combo?: $ComboState_,  } | [isOffHand?: boolean, itemStack?: $ItemStack_, attributes?: $WeaponAttributes, attack?: $WeaponAttributes$Attack, combo?: $ComboState_, ];
    export class $WeaponAttributes {
        static empty(): $WeaponAttributes;
        category(): string;
        pose(): string;
        attacks(): $WeaponAttributes$Attack[];
        isTwoHanded(): boolean;
        attackRange(): number;
        trailAppearance(): $ConditionalTrailAppearance;
        rangeBonus(): number;
        two_handed(): boolean;
        offHandPose(): string;
        constructor(attack_range: number, range_bonus: number, pose: string, off_hand_pose: string, isTwoHanded: boolean, category: string, attacks: $WeaponAttributes$Attack[], trail_appearance: $ConditionalTrailAppearance_);
        get twoHanded(): boolean;
    }
    export class $WeaponAttributes$Attack {
        static empty(): $WeaponAttributes$Attack;
        conditions(): $WeaponAttributes$Condition[];
        angle(): number;
        upswing(): number;
        animation(): string;
        damageMultiplier(): number;
        rangeMultiplier(): number;
        movementSpeedMultiplier(): number;
        hitbox(): $WeaponAttributes$HitBoxShape;
        trailParticles(): $List<$ParticlePlacement>;
        impactSound(): $WeaponAttributes$Sound;
        swingSound(): $WeaponAttributes$Sound;
        constructor();
        constructor(conditions: $WeaponAttributes$Condition_[], hitbox: $WeaponAttributes$HitBoxShape_, damage_multiplier: number, movement_speed_multiplier: number, range_multiplier: number, angle: number, upswing: number, animation: string, swing_sound: $WeaponAttributes$Sound, impact_sound: $WeaponAttributes$Sound, trail_particles: $List_<$ParticlePlacement_>);
    }
    export class $MinecraftClient_BetterCombat {
    }
    export interface $MinecraftClient_BetterCombat {
        getCurrentAttackHand(): $AttackHand;
        isWeaponSwingInProgress(): boolean;
        getCursorTarget(): $Entity;
        hasTargetsInReach(): boolean;
        getComboCount(): number;
        getCurrentAttack(): $WeaponAttributes$Attack;
        getSwingProgress(): number;
        cancelUpswing(): void;
        getUpswingTicks(): number;
        get currentAttackHand(): $AttackHand;
        get weaponSwingInProgress(): boolean;
        get cursorTarget(): $Entity;
        get comboCount(): number;
        get currentAttack(): $WeaponAttributes$Attack;
        get swingProgress(): number;
        get upswingTicks(): number;
    }
    export class $WeaponAttributes$Condition extends $Enum<$WeaponAttributes$Condition> {
        static values(): $WeaponAttributes$Condition[];
        static valueOf(name: string): $WeaponAttributes$Condition;
        static NO_OFFHAND_ITEM: $WeaponAttributes$Condition;
        static NOT_MOUNTED: $WeaponAttributes$Condition;
        static NOT_DUAL_WIELDING: $WeaponAttributes$Condition;
        static DUAL_WIELDING_ANY: $WeaponAttributes$Condition;
        static DUAL_WIELDING_SAME_CATEGORY: $WeaponAttributes$Condition;
        static MOUNTED: $WeaponAttributes$Condition;
        static MAIN_HAND_ONLY: $WeaponAttributes$Condition;
        static OFF_HAND_ONLY: $WeaponAttributes$Condition;
        static DUAL_WIELDING_SAME: $WeaponAttributes$Condition;
        static OFF_HAND_SHIELD: $WeaponAttributes$Condition;
    }
    /**
     * Values that may be interpreted as {@link $WeaponAttributes$Condition}.
     */
    export type $WeaponAttributes$Condition_ = "not_dual_wielding" | "dual_wielding_any" | "dual_wielding_same" | "dual_wielding_same_category" | "no_offhand_item" | "off_hand_shield" | "main_hand_only" | "off_hand_only" | "mounted" | "not_mounted";
    export class $WeaponAttributes$Sound {
        id(): string;
        randomness(): number;
        pitch(): number;
        volume(): number;
        constructor();
        constructor(id: string);
    }
    export class $ComboState extends $Record {
        current(): number;
        total(): number;
        constructor(current: number, total: number);
    }
    /**
     * Values that may be interpreted as {@link $ComboState}.
     */
    export type $ComboState_ = { total?: number, current?: number,  } | [total?: number, current?: number, ];
    export class $EntityPlayer_BetterCombat {
    }
    export interface $EntityPlayer_BetterCombat {
        getCurrentAttack(): $AttackHand;
        setCombatFlags(arg0: number): void;
        getCombatFlags(): number;
        getMainHandIdleAnimation(): string;
        getOffHandIdleAnimation(): string;
        get currentAttack(): $AttackHand;
        get mainHandIdleAnimation(): string;
        get offHandIdleAnimation(): string;
    }
}
