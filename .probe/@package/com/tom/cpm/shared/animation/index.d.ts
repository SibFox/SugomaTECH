import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $CustomPoseGestureButtonData, $AbstractGestureButtonData, $CommandAction } from "@package/com/tom/cpm/shared/parts/anim/menu";
import { $PlayerModelSetup$ArmPose } from "@package/com/tom/cpm/shared/model/render";
import { $List, $Map, $Set, $Set_, $List_ } from "@package/java/util";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $EntityType, $ActiveEffect } from "@package/com/tom/cpl/block/entity";
import { $Image, $HandAnimation, $Hand } from "@package/com/tom/cpl/util";
import { $Rotation, $Vec2i, $Vec3f } from "@package/com/tom/cpl/math";
import { $Enum } from "@package/java/lang";
import { $ParameterDetails, $LegacyAnimationParser } from "@package/com/tom/cpm/shared/parts/anim";
import { $TextureSheetType_, $CopyTransform } from "@package/com/tom/cpm/shared/model";
import { $World } from "@package/com/tom/cpl/block";
import { $Inventory } from "@package/com/tom/cpl/item";
import { $I18n_, $I18n } from "@package/com/tom/cpl/text";

declare module "@package/com/tom/cpm/shared/animation" {
    export class $AnimatedTexture {
        update(arg0: number, arg1: boolean): void;
        static copyTextureInt(arg0: $Image, arg1: $Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number): void;
        static copyTexture(arg0: $Image, arg1: $Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean): void;
        constructor(arg0: $ModelDefinition, arg1: $TextureSheetType_, arg2: $Vec2i, arg3: $Vec2i, arg4: $Vec2i, arg5: number, arg6: number, arg7: boolean, arg8: boolean);
    }
    export class $AnimationHandler {
        clear(): void;
        animate(arg0: $AnimationState, arg1: number): void;
        addAnimations(arg0: $AnimationState, arg1: $List_<$AnimationTrigger>, arg2: $IPose_): void;
        constructor(arg0: $Supplier_<$ModelDefinition>, arg1: $AnimationEngine$AnimationMode_);
    }
    export class $AnimationTrigger {
        getTime(arg0: $AnimationState, arg1: number): number;
        canPlay(arg0: $AnimationState, arg1: $AnimationEngine$AnimationMode_): boolean;
        reg: $AnimationRegistry;
        looping: boolean;
        onPoses: $Set<$IPose>;
        animations: $List<$IAnimation>;
        mustFinish: boolean;
        valuePose: $VanillaPose;
        constructor(arg0: $AnimationRegistry, arg1: $Set_<$IPose_>, arg2: $VanillaPose_, arg3: $List_<$IAnimation>, arg4: boolean, arg5: boolean);
    }
    export class $AnimationState {
        resetPlayer(): void;
        getMainPose(arg0: number, arg1: $AnimationRegistry): $VanillaPose;
        collectAnimations(arg0: $Consumer_<$VanillaPose>, arg1: $AnimationRegistry): void;
        resetModel(): void;
        wearingBoots: boolean;
        encodedState: number;
        invisible: boolean;
        wearingHelm: boolean;
        moveAmountX: number;
        moveAmountY: number;
        moveAmountZ: number;
        dying: boolean;
        prevGestureData: number[];
        blockLight: number;
        leftArm: $PlayerModelSetup$ArmPose;
        firstPersonMod: boolean;
        pitch: number;
        isBurning: boolean;
        swingingHand: $Hand;
        isClimbing: boolean;
        bowPullback: number;
        takingDmg: boolean;
        attackTime: number;
        speakLevel: number;
        wearingLegs: boolean;
        gestureData: number[];
        bodyYaw: number;
        wearingElytra: boolean;
        inGui: boolean;
        wearingBody: boolean;
        sprinting: boolean;
        mainHand: $Hand;
        sneaking: boolean;
        hurtTime: number;
        parrotRight: boolean;
        crawling: boolean;
        allEffects: $List<$ActiveEffect>;
        jumping: number;
        rightArm: $PlayerModelSetup$ArmPose;
        skyLight: number;
        isFreezing: boolean;
        animationMode: $AnimationEngine$AnimationMode;
        riding: boolean;
        elytraFlying: boolean;
        retroSwimming: boolean;
        sleeping: boolean;
        vehicle: $EntityType;
        swimAmount: number;
        dayTime: number;
        swimming: boolean;
        world: $World;
        isOnLadder: boolean;
        vrState: $AnimationState$VRState;
        activeHand: $Hand;
        voiceMuted: boolean;
        tridentSpin: boolean;
        usingAnimation: $HandAnimation;
        playerInventory: $Inventory;
        syncState: $ServerAnimationState;
        hasSkullOnHead: boolean;
        yaw: number;
        parrotLeft: boolean;
        lastGestureReceiveTime: number;
        crossbowPullback: number;
        currentPose: $IPose;
        constructor();
        constructor(arg0: $AnimationEngine$AnimationMode_);
    }
    export class $AnimationState$VRState extends $Enum<$AnimationState$VRState> {
        static values(): $AnimationState$VRState[];
        static valueOf(arg0: string): $AnimationState$VRState;
        static THIRD_PERSON_STANDING: $AnimationState$VRState;
        static THIRD_PERSON_SITTING: $AnimationState$VRState;
        static FIRST_PERSON: $AnimationState$VRState;
    }
    /**
     * Values that may be interpreted as {@link $AnimationState$VRState}.
     */
    export type $AnimationState$VRState_ = "first_person" | "third_person_sitting" | "third_person_standing";
    export class $VanillaPose extends $Enum<$VanillaPose> implements $IPose {
        getName(arg0: $I18n_, arg1: string): string;
        static values(): $VanillaPose[];
        static valueOf(arg0: string): $VanillaPose;
        getTime(arg0: $AnimationState, arg1: number): number;
        hasStateGetter(): boolean;
        static CROSSBOW_CH_LEFT: $VanillaPose;
        static BOW_RIGHT: $VanillaPose;
        static IN_GUI: $VanillaPose;
        static ON_LADDER: $VanillaPose;
        static BOW_LEFT: $VanillaPose;
        static FREEZING: $VanillaPose;
        static FIRST_PERSON_MOD: $VanillaPose;
        static HEAD_ROTATION_YAW: $VanillaPose;
        static ON_FIRE: $VanillaPose;
        static SNEAK_WALK: $VanillaPose;
        static HEALTH: $VanillaPose;
        static HEAD_ROTATION_PITCH: $VanillaPose;
        static SPYGLASS_RIGHT: $VanillaPose;
        static HUNGER: $VanillaPose;
        static SLEEPING: $VanillaPose;
        static ARMOR_HEAD: $VanillaPose;
        static VOICE_MUTED: $VanillaPose;
        static WALKING: $VanillaPose;
        static TRIDENT_LEFT: $VanillaPose;
        static TOOT_HORN_LEFT: $VanillaPose;
        static SPYGLASS_LEFT: $VanillaPose;
        static RUNNING: $VanillaPose;
        static IN_MENU: $VanillaPose;
        static DYNAMIC_DURATION_MUL: number;
        static RIDING: $VanillaPose;
        static LIGHT: $VanillaPose;
        static WEARING_SKULL: $VanillaPose;
        static AIR: $VanillaPose;
        static SKULL_RENDER: $VanillaPose;
        static HURT: $VanillaPose;
        static PUNCH_RIGHT: $VanillaPose;
        static CROSSBOW_LEFT: $VanillaPose;
        static HOLDING_RIGHT: $VanillaPose;
        static VR_FIRST_PERSON: $VanillaPose;
        static BRUSH_RIGHT: $VanillaPose;
        static STANDING: $VanillaPose;
        static JUMPING: $VanillaPose;
        static INVISIBLE: $VanillaPose;
        static FIRST_PERSON_HAND: $VanillaPose;
        static SPEAKING: $VanillaPose;
        static EATING_LEFT: $VanillaPose;
        static PARROT_RIGHT: $VanillaPose;
        static FLYING: $VanillaPose;
        static CROSSBOW_CH_RIGHT: $VanillaPose;
        static HOLDING_LEFT: $VanillaPose;
        static CLIMBING_ON_LADDER: $VanillaPose;
        static ARMOR_BOOTS: $VanillaPose;
        static SPEAR_RIGHT: $VanillaPose;
        static EATING_RIGHT: $VanillaPose;
        static VR_THIRD_PERSON_STANDING: $VanillaPose;
        static SNEAKING: $VanillaPose;
        static FALLING: $VanillaPose;
        static CREATIVE_FLYING: $VanillaPose;
        static RETRO_SWIMMING: $VanillaPose;
        static CUSTOM: $VanillaPose;
        static GLOBAL: $VanillaPose;
        static DYNAMIC_DURATION_DIV: number;
        static VALUES: $VanillaPose[];
        static PUNCH_LEFT: $VanillaPose;
        static ARMOR_BODY: $VanillaPose;
        static CRAWLING: $VanillaPose;
        static WEARING_ELYTRA: $VanillaPose;
        static ARMOR_LEGS: $VanillaPose;
        static TOOT_HORN_RIGHT: $VanillaPose;
        static VR_THIRD_PERSON_SITTING: $VanillaPose;
        static SPEAR_LEFT: $VanillaPose;
        static DYING: $VanillaPose;
        static CROSSBOW_RIGHT: $VanillaPose;
        static BLOCKING_LEFT: $VanillaPose;
        static SWIMMING: $VanillaPose;
        static BLOCKING_RIGHT: $VanillaPose;
        static BRUSH_LEFT: $VanillaPose;
        static TRIDENT_SPIN: $VanillaPose;
        static TRIDENT_RIGHT: $VanillaPose;
        static PARROT_LEFT: $VanillaPose;
    }
    /**
     * Values that may be interpreted as {@link $VanillaPose}.
     */
    export type $VanillaPose_ = "custom" | "standing" | "walking" | "running" | "sneaking" | "swimming" | "falling" | "sleeping" | "riding" | "flying" | "dying" | "skull_render" | "global" | "creative_flying" | "eating_left" | "eating_right" | "retro_swimming" | "jumping" | "sneak_walk" | "punch_left" | "punch_right" | "armor_head" | "armor_body" | "armor_legs" | "armor_boots" | "wearing_elytra" | "bow_left" | "bow_right" | "crossbow_left" | "crossbow_right" | "crossbow_ch_left" | "crossbow_ch_right" | "trident_left" | "trident_right" | "trident_spin" | "spyglass_left" | "spyglass_right" | "holding_left" | "holding_right" | "wearing_skull" | "blocking_left" | "blocking_right" | "parrot_left" | "parrot_right" | "hurt" | "on_fire" | "freezing" | "on_ladder" | "climbing_on_ladder" | "speaking" | "toot_horn_left" | "toot_horn_right" | "in_gui" | "first_person_mod" | "voice_muted" | "vr_first_person" | "vr_third_person_sitting" | "vr_third_person_standing" | "first_person_hand" | "health" | "hunger" | "air" | "in_menu" | "invisible" | "light" | "head_rotation_yaw" | "head_rotation_pitch" | "brush_left" | "brush_right" | "crawling" | "spear_left" | "spear_right";
    export class $IModelComponent {
    }
    export interface $IModelComponent {
        reset(): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        getRGB(): number;
        getPosition(): $Vec3f;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        getRotation(): $Rotation;
        getRenderScale(): $Vec3f;
        setRotation(arg0: boolean, arg1: number, arg2: number, arg3: number): void;
        setPosition(arg0: boolean, arg1: number, arg2: number, arg3: number): void;
        setRenderScale(arg0: boolean, arg1: number, arg2: number, arg3: number): void;
        get RGB(): number;
    }
    export class $ServerAnimationState {
        static mergedCopy(arg0: $ServerAnimationState, arg1: $ServerAnimationState): $ServerAnimationState;
        falling: number;
        health: number;
        inMenu: boolean;
        air: number;
        creativeFlying: boolean;
        updated: boolean;
        isSelf: boolean;
        hunger: number;
        constructor();
    }
    export class $CustomPose implements $IPose {
        getName(): string;
        getName(arg0: $I18n_, arg1: string): string;
        getId(): string;
        getTime(arg0: $AnimationState, arg1: number): number;
        command: boolean;
        layerCtrl: boolean;
        order: number;
        constructor(arg0: string, arg1: number);
        get id(): string;
    }
    export class $PersistentAnimationState {
        apply(arg0: $AnimationState): void;
        receiveEvent(arg0: $NBTTagCompound, arg1: boolean): void;
        serverState: $ServerAnimationState;
        jumping: number;
        prevGestureData: number[];
        gestureData: number[];
        lastGestureReceiveTime: number;
        prevPose: $VanillaPose;
        localState: $ServerAnimationState;
        currentPose: $IPose;
        constructor();
    }
    export class $AnimationRegistry {
        register(arg0: $AbstractGestureButtonData): void;
        register(arg0: $AnimationTrigger): void;
        setParams(arg0: $ParameterDetails): void;
        getParams(): $ParameterDetails;
        getProfileId(): string;
        getAnimations(): $Set<$AnimationTrigger>;
        getBlankGesture(): number;
        addAnimatedTexture(arg0: $AnimatedTexture): void;
        applyCopy(): void;
        getPoseEncoded(arg0: number, arg1: $IPose_): $IPose;
        getNamedActions(): $List<$AbstractGestureButtonData>;
        getPoseById(arg0: number, arg1: $IPose_): $IPose;
        getPoseResetId(): number;
        tickAnimated(arg0: number, arg1: boolean): void;
        getPoseAnimations(arg0: $IPose_): $List<$AnimationTrigger>;
        getCommandActionsMap(): $Map<string, $CommandAction>;
        getNamedActionByKeybind(): $Map<string, $AbstractGestureButtonData>;
        getCustomPoses(): $Map<string, $CustomPose>;
        finishLoading(): void;
        addCopy(arg0: $CopyTransform): void;
        hasPoseAnimations(arg0: $VanillaPose_): boolean;
        getGestureById(arg0: number): $CustomPoseGestureButtonData;
        setBlankGesture(arg0: number): void;
        setPoseResetId(arg0: number): void;
        setProfileId(arg0: string): void;
        getGestureEncoded(arg0: number): $CustomPoseGestureButtonData;
        getLegacyParser(arg0: $ModelDefinition): $LegacyAnimationParser;
        constructor();
        get animations(): $Set<$AnimationTrigger>;
        get namedActions(): $List<$AbstractGestureButtonData>;
        get commandActionsMap(): $Map<string, $CommandAction>;
        get namedActionByKeybind(): $Map<string, $AbstractGestureButtonData>;
        get customPoses(): $Map<string, $CustomPose>;
    }
    export class $IPose {
    }
    export interface $IPose {
        getName(arg0: $I18n_, arg1: string): string;
        getTime(arg0: $AnimationState, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IPose}.
     */
    export type $IPose_ = ((arg0: $I18n, arg1: string) => string);
    export class $AnimationEngine$AnimationMode extends $Enum<$AnimationEngine$AnimationMode> {
        static values(): $AnimationEngine$AnimationMode[];
        static valueOf(arg0: string): $AnimationEngine$AnimationMode;
        static PLAYER: $AnimationEngine$AnimationMode;
        static SKULL: $AnimationEngine$AnimationMode;
        static GUI: $AnimationEngine$AnimationMode;
        static FIRST_PERSON: $AnimationEngine$AnimationMode;
        static HAND: $AnimationEngine$AnimationMode;
    }
    /**
     * Values that may be interpreted as {@link $AnimationEngine$AnimationMode}.
     */
    export type $AnimationEngine$AnimationMode_ = "player" | "skull" | "hand" | "gui" | "first_person";
}
