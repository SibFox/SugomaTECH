import { $ActionBuilder } from "@package/com/tom/cpm/shared/editor/actions";
import { $Direction, $Direction$Axis, $ItemSlot, $ItemSlot_ } from "@package/com/tom/cpl/util";
import { $Vec4f, $MatrixStack, $MatrixStack$Entry } from "@package/com/tom/cpl/math";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $JsonMap } from "@package/com/tom/cpm/shared/editor/project";
import { $ModelElement } from "@package/com/tom/cpm/shared/editor/elements";
import { $Enum, $Object } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $SkinType_, $RenderedCube, $PartValues } from "@package/com/tom/cpm/shared/model";
import { $VertexBuffer } from "@package/com/tom/cpl/render";
import { $TreeElement$TreeSettingElement } from "@package/com/tom/cpm/shared/editor/tree";

declare module "@package/com/tom/cpm/shared/model/render" {
    export class $Mesh {
        static EMPTY: $Mesh;
    }
    export interface $Mesh {
        getLayer(): $RenderMode;
        free(): void;
        draw(arg0: $MatrixStack, arg1: $VertexBuffer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        get layer(): $RenderMode;
    }
    export class $VanillaModelPart {
    }
    export interface $VanillaModelPart {
        getName(): string;
        getId(arg0: $RenderedCube): number;
        getCopyFrom(): $VanillaModelPart;
        needsPoseSetup(): boolean;
        getDefaultSize(arg0: $SkinType_): $PartValues;
        get name(): string;
        get copyFrom(): $VanillaModelPart;
    }
    export class $ItemRenderer {
        slotID: number;
        slot: $ItemSlot;
        constructor(arg0: $ItemSlot_, arg1: number);
        constructor(arg0: $ItemRenderer);
    }
    export class $ItemTransform {
        set(arg0: $MatrixStack, arg1: boolean): void;
        getMatrix(): $MatrixStack$Entry;
        constructor();
        get matrix(): $MatrixStack$Entry;
    }
    export class $PerFaceUV {
        get(arg0: $Direction): $PerFaceUV$Face;
        contains(arg0: $Direction): boolean;
        toMap(): $Map<string, $Object>;
        mirror(arg0: $ActionBuilder, arg1: $Direction$Axis): void;
        getRot(arg0: $Direction): $PerFaceUV$Rot;
        getVec(arg0: $Direction): $Vec4f;
        readFaces(arg0: $IOHelper): void;
        writeFaces(arg0: $IOHelper): void;
        getDragBoxes(arg0: $ModelElement): $List<$TreeElement$TreeSettingElement>;
        getFaceElements(arg0: $ModelElement): $List<$TreeElement$TreeSettingElement>;
        getFaceElement(arg0: $ModelElement, arg1: $Direction): $TreeElement$TreeSettingElement;
        isAutoUV(arg0: $Direction): boolean;
        faces: $Map<$Direction, $PerFaceUV$Face>;
        constructor(arg0: $JsonMap);
        constructor(arg0: $PerFaceUV);
        constructor(arg0: $ModelElement);
        constructor();
    }
    export class $PlayerModelSetup$ArmPose extends $Enum<$PlayerModelSetup$ArmPose> {
        static values(): $PlayerModelSetup$ArmPose[];
        static valueOf(arg0: string): $PlayerModelSetup$ArmPose;
        static of<T extends $Enum<T>>(arg0: T): $PlayerModelSetup$ArmPose;
        isTwoHanded(): boolean;
        static ITEM: $PlayerModelSetup$ArmPose;
        static BOW_AND_ARROW: $PlayerModelSetup$ArmPose;
        static BRUSH: $PlayerModelSetup$ArmPose;
        static TOOT_HORN: $PlayerModelSetup$ArmPose;
        static CROSSBOW_HOLD: $PlayerModelSetup$ArmPose;
        static BLOCK: $PlayerModelSetup$ArmPose;
        static VALUES: $PlayerModelSetup$ArmPose[];
        static CROSSBOW_CHARGE: $PlayerModelSetup$ArmPose;
        static THROW_SPEAR: $PlayerModelSetup$ArmPose;
        static EMPTY: $PlayerModelSetup$ArmPose;
        static SPEAR: $PlayerModelSetup$ArmPose;
        static SPYGLASS: $PlayerModelSetup$ArmPose;
        get twoHanded(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelSetup$ArmPose}.
     */
    export type $PlayerModelSetup$ArmPose_ = "empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush" | "spear";
}
