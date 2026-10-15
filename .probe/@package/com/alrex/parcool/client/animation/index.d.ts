import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Parkourability } from "@package/com/alrex/parcool/common/attachment/common";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AnimationOption } from "@package/com/alrex/parcool/api/unstable/animation";
import { $Vector3f } from "@package/org/joml";
import { $RenderFrameEvent, $ViewportEvent$ComputeCameraAngles } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/alrex/parcool/client/animation" {
    export class $PlayerModelTransformer {
        reset(): void;
        end(): void;
        rotateAdditionallyHeadRoll(arg0: number): $PlayerModelTransformer;
        setOption(arg0: $AnimationOption): void;
        getRawModel(): $PlayerModel<any>;
        getLimbSwing(): number;
        rotateHeadPitch(arg0: number): $PlayerModelTransformer;
        getPartialTick(): number;
        getLimbSwingAmount(): number;
        rotateLeftArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        rotateLeftArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        translateRightArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateRightArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        rotateRightArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateLeftLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateLeftLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        addRotateRightLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateRightLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        makeArmsNatural(): $PlayerModelTransformer;
        rotateLeftLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateLeftLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        translateLeftLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        translateLeftArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        translateRightLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateRightLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateRightLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        addRotateRightArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        addRotateRightArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateLeftArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateLeftArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        rotateAdditionallyHeadYaw(arg0: number): $PlayerModelTransformer;
        rotateAdditionallyHeadPitch(arg0: number): $PlayerModelTransformer;
        getHeadPitch(): number;
        copyFromBodyToWear(): void;
        resetModel(arg0: $ModelPart): void;
        rotateHeadYawRadian(arg0: number): $PlayerModelTransformer;
        makeLegsLittleMoving(): $PlayerModelTransformer;
        translateHead(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateHeadYaw(arg0: number): $PlayerModelTransformer;
        getNetHeadYaw(): number;
        makeLegsShakingDynamically(arg0: number): $PlayerModelTransformer;
        makeArmsMoveDynamically(arg0: number): $PlayerModelTransformer;
        makeLegsMoveDynamically(arg0: number): $PlayerModelTransformer;
        constructor(arg0: $Player, arg1: $PlayerModel<any>, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        set option(value: $AnimationOption);
        get rawModel(): $PlayerModel<any>;
        get limbSwing(): number;
        get partialTick(): number;
        get limbSwingAmount(): number;
        get headPitch(): number;
        get netHeadYaw(): number;
    }
    export class $PlayerModelRotator {
        end(): void;
        start(): $PlayerModelRotator;
        rotate(arg0: number, arg1: $Vector3f): $PlayerModelRotator;
        translate(arg0: number, arg1: number, arg2: number): $PlayerModelRotator;
        getYRot(): number;
        getPartialTick(): number;
        translateY(arg0: number): $PlayerModelRotator;
        startBasedCenter(): $PlayerModelRotator;
        rotateYawRightward(arg0: number): $PlayerModelRotator;
        endEnabledLegGrounding(): void;
        rotatePitchFrontward(arg0: number): $PlayerModelRotator;
        rotateRollRightward(arg0: number): $PlayerModelRotator;
        startBasedTop(): $PlayerModelRotator;
        getRawStack(): $PoseStack;
        constructor(arg0: $PoseStack, arg1: $Player, arg2: number, arg3: number);
        get YRot(): number;
        get partialTick(): number;
        get rawStack(): $PoseStack;
    }
    export class $Animator {
        tick(arg0: $Player): void;
        rotatePre(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelRotator): boolean;
        rotatePost(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelRotator): void;
        onRenderTick(arg0: $RenderFrameEvent, arg1: $Player, arg2: $Parkourability): void;
        onCameraSetUp(arg0: $ViewportEvent$ComputeCameraAngles, arg1: $Player, arg2: $Parkourability): void;
        shouldRemoved(arg0: $Player, arg1: $Parkourability): boolean;
        animatePost(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelTransformer): void;
        animatePre(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelTransformer): boolean;
        constructor();
    }
}
