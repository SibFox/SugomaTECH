import { $SuperRenderTypeBuffer, $BindableTexture_ } from "@package/net/createmod/catnip/render";
import { $OutlineEntryAccessor, $OutlinerAccessor, $OutlineParamsAccessor } from "@package/com/petrolpark/mixin/compat/create/accessor/client";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Iterable_, $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";
import { $Vector4f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/net/createmod/catnip/outliner" {
    export class $Outliner$OutlineEntry implements $OutlineEntryAccessor {
        isAlive(): boolean;
        tick(): void;
        getOutline(): $Outline;
        isFading(): boolean;
        getTicksTillRemoval(): number;
        setTicksTillRemoval(arg0: number): void;
        static FADE_TICKS: number;
        constructor(arg0: $Outline);
        get alive(): boolean;
        get outline(): $Outline;
        get fading(): boolean;
    }
    export class $Outline {
        render(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_, arg3: number): void;
        tick(): void;
        getParams(): $Outline$OutlineParams;
        bufferCuboidLine(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $Vector3f, arg3: $Direction_, arg4: number, arg5: number, arg6: $Vector4f, arg7: number, arg8: boolean): void;
        bufferCuboidLine(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Vec3_, arg3: $Vector3d, arg4: $Vector3d, arg5: number, arg6: $Vector4f, arg7: number, arg8: boolean): void;
        bufferQuad(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $Vector3f, arg3: $Vector3f, arg4: $Vector3f, arg5: $Vector3f, arg6: $Vector4f, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: $Vector3f): void;
        bufferQuad(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $Vector3f, arg3: $Vector3f, arg4: $Vector3f, arg5: $Vector3f, arg6: $Vector4f, arg7: number, arg8: $Vector3f): void;
        bufferCuboid(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $Vector3f, arg3: $Vector3f, arg4: $Vector4f, arg5: number, arg6: boolean): void;
        constructor();
        get params(): $Outline$OutlineParams;
    }
    export class $Outline$OutlineParams implements $OutlineParamsAccessor {
        lightmap(arg0: number): $Outline$OutlineParams;
        lineWidth(arg0: number): $Outline$OutlineParams;
        colored(arg0: $Color): $Outline$OutlineParams;
        colored(arg0: number): $Outline$OutlineParams;
        disableLineNormals(): $Outline$OutlineParams;
        withFaceTexture(arg0: $BindableTexture_ | null): $Outline$OutlineParams;
        highlightFace(arg0: $Direction_ | null): $Outline$OutlineParams;
        getLineWidth(): number;
        disableCull(): $Outline$OutlineParams;
        loadColor(arg0: $Vector4f): void;
        withFaceTextures(arg0: $BindableTexture_ | null, arg1: $BindableTexture_ | null): $Outline$OutlineParams;
        clearTextures(): $Outline$OutlineParams;
        getHighlightedFace(): $Direction;
        getDisableLineNormals(): boolean;
        getLightmap(): number;
        constructor();
        get highlightedFace(): $Direction;
    }
    export class $Outliner implements $OutlinerAccessor {
        remove(arg0: $Object): void;
        static getInstance(): $Outliner;
        keep(arg0: $Object): void;
        chaseAABB(arg0: $Object, arg1: $AABB_): $Outline$OutlineParams;
        edit(arg0: $Object): ($Outline$OutlineParams) | undefined;
        showLine(arg0: $Object, arg1: $Vec3_, arg2: $Vec3_): $Outline$OutlineParams;
        showAABB(arg0: $Object, arg1: $AABB_, arg2: number): $Outline$OutlineParams;
        showAABB(arg0: $Object, arg1: $AABB_): $Outline$OutlineParams;
        renderOutlines(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_, arg3: number): void;
        tickOutlines(): void;
        showItem(arg0: $Object, arg1: $Vec3_, arg2: $ItemStack_): $Outline$OutlineParams;
        endChasingLine(arg0: $Object, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: boolean): $Outline$OutlineParams;
        showCluster(arg0: $Object, arg1: $Iterable_<$BlockPos>): $Outline$OutlineParams;
        showOutline(arg0: $Object, arg1: $Outline): $Outline$OutlineParams;
        getOutlines(): $Map<$Object, $Outliner$OutlineEntry>;
        constructor();
        static get instance(): $Outliner;
        get outlines(): $Map<$Object, $Outliner$OutlineEntry>;
    }
}
