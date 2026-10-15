import { $IModelComponent } from "@package/com/tom/cpm/shared/animation";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $Consumer_ } from "@package/java/util/function";
import { $TextureType } from "@package/com/tom/cpm/shared/skin";
import { $ScalingOptions_, $ScalingOptions } from "@package/com/tom/cpm/shared/util";
import { $Image } from "@package/com/tom/cpl/util";
import { $Rotation, $Vec2i, $BoundingBox, $Vec3f } from "@package/com/tom/cpl/math";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $PerFaceUV, $Mesh, $ItemRenderer, $VanillaModelPart } from "@package/com/tom/cpm/shared/model/render";
import { $Enum, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
export * as render from "@package/com/tom/cpm/shared/model/render";

declare module "@package/com/tom/cpm/shared/model" {
    export class $CopyTransform {
        apply(): void;
        constructor(arg0: $RenderedCube, arg1: $RenderedCube, arg2: number, arg3: number);
    }
    export class $RenderedCube implements $IModelComponent {
        reset(): void;
        isHidden(): boolean;
        getBounds(): $BoundingBox;
        getParent(): $RenderedCube;
        getId(): number;
        setColor(arg0: number): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        getRGB(): number;
        getSelected(): $RenderedCube$ElementSelectMode;
        getPosition(): $Vec3f;
        setParent(arg0: $RenderedCube): void;
        addChild(arg0: $RenderedCube): void;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        getRotation(): $Rotation;
        getRenderScale(): $Vec3f;
        setHidden(arg0: boolean): void;
        setRotation(arg0: boolean, arg1: number, arg2: number, arg3: number): void;
        setPosition(arg0: boolean, arg1: number, arg2: number, arg3: number): void;
        getCube(): $Cube;
        doDisplay(): boolean;
        setRenderScale(arg0: boolean, arg1: number, arg2: number, arg3: number): void;
        setCube(arg0: $Cube): void;
        getTransformPosition(): $Vec3f;
        getTransformRotation(): $Rotation;
        itemRenderer: $ItemRenderer;
        offset: $Vec3f;
        color: number;
        rotation: $Rotation;
        display: boolean;
        rotationZYX: $Vec3f;
        updateObject: boolean;
        children: $List<$RenderedCube>;
        pos: $Vec3f;
        singleTex: boolean;
        faceUVs: $PerFaceUV;
        extrude: boolean;
        renderObject: $Mesh;
        recolor: boolean;
        renderScale: $Vec3f;
        glow: boolean;
        constructor(arg0: $Cube);
        get bounds(): $BoundingBox;
        get id(): number;
        get RGB(): number;
        get selected(): $RenderedCube$ElementSelectMode;
        get transformPosition(): $Vec3f;
        get transformRotation(): $Rotation;
    }
    export class $PartPosition {
        isChanged(): boolean;
        getRPos(): $Vec3f;
        getRScale(): $Vec3f;
        getRRotation(): $Rotation;
        setRenderScale(arg0: $Vec3f, arg1: $Rotation, arg2: $Vec3f): void;
        getRotationDeg(): $Vec3f;
        setRotationDeg(arg0: $Vec3f): void;
        setRRotation(arg0: $Rotation): void;
        setRScale(arg0: $Vec3f): void;
        setRPos(arg0: $Vec3f): void;
        constructor();
        get changed(): boolean;
    }
    export class $SkinType extends $Enum<$SkinType> {
        getName(): string;
        static get(arg0: string): $SkinType;
        static values(): $SkinType[];
        static valueOf(arg0: string): $SkinType;
        getChannel(): number;
        getSkinTexture(): $Image;
        getApiName(): string;
        static VANILLA_TYPES: $SkinType[];
        static VALUES: $SkinType[];
        static SLIM: $SkinType;
        static UNKNOWN: $SkinType;
        static DEFAULT: $SkinType;
        get channel(): number;
        get skinTexture(): $Image;
        get apiName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SkinType}.
     */
    export type $SkinType_ = "slim" | "default" | "unknown";
    export class $Cube {
        static saveDefinitionCubeV2(arg0: $IOHelper, arg1: $Cube): void;
        static loadDefinitionCubeV2(arg0: $IOHelper): $Cube;
        /**
         * @deprecated
         */
        static saveDefinitionCube(arg0: $IOHelper, arg1: $Cube): void;
        /**
         * @deprecated
         */
        static loadDefinitionCube(arg0: $IOHelper): $Cube;
        static loadDefinitionCube(arg0: $Map_<string, $Object>): $Cube;
        static resolveCubes(arg0: $List_<$Cube>): $List<$RenderedCube>;
        static resolveCubesV2(arg0: $List_<$Cube>): $List<$RenderedCube>;
        static saveTemplateCube(arg0: $Map_<string, $Object>, arg1: $Cube): void;
        static newFakeCube(): $Cube;
        meshScale: $Vec3f;
        mcScale: number;
        offset: $Vec3f;
        hidden: boolean;
        static UV_SCALED: number;
        static MC_SCALED: number;
        texSize: number;
        rotation: $Vec3f;
        scale: $Vec3f;
        static HIDDEN: number;
        static SCALED: number;
        rgb: number;
        parentId: number;
        size: $Vec3f;
        pos: $Vec3f;
        u: number;
        static MESH_SCALED: number;
        v: number;
        static HAS_TEXTURE: number;
        static HAS_MESH: number;
        id: number;
        constructor();
    }
    export class $PartRoot {
        setMainRoot(arg0: $RootModelElement): void;
        get(): $RootModelElement;
        isEmpty(): boolean;
        add(arg0: $RootModelElement): boolean;
        forEach(arg0: $Consumer_<$RootModelElement>): void;
        setRootPosAndRot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getMainRoot(): $RootModelElement;
        constructor(arg0: $RootModelElement);
        constructor();
        get empty(): boolean;
    }
    export class $RootModelElement extends $RenderedCube {
        getPos(): $Vec3f;
        getPart(): $VanillaModelPart;
        renderPart(): boolean;
        getRot(): $Rotation;
        setPosAndRot(arg0: $PartRoot): void;
        setPosAndRot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        itemRenderer: $ItemRenderer;
        rotN: $Rotation;
        offset: $Vec3f;
        color: number;
        rotation: $Rotation;
        display: boolean;
        rotationZYX: $Vec3f;
        updateObject: boolean;
        defPos: $Vec3f;
        posN: $Vec3f;
        defRot: $Rotation;
        children: $List<$RenderedCube>;
        pos: $Vec3f;
        singleTex: boolean;
        disableVanilla: boolean;
        faceUVs: $PerFaceUV;
        extrude: boolean;
        renderObject: $Mesh;
        recolor: boolean;
        renderScale: $Vec3f;
        glow: boolean;
        constructor(arg0: $VanillaModelPart, arg1: $ModelDefinition);
        get part(): $VanillaModelPart;
        get rot(): $Rotation;
    }
    export class $ScaleData extends $PartPosition {
        /**
         * @deprecated
         */
        setScale(arg0: number, arg1: number, arg2: number): void;
        getScaling(): $Map<$ScalingOptions, number>;
        static NULL: $ScaleData;
        constructor(arg0: $Map_<$ScalingOptions_, number>);
        /**
         * @deprecated
         */
        constructor(arg0: number);
        get scaling(): $Map<$ScalingOptions, number>;
    }
    export class $TextureSheetType extends $Enum<$TextureSheetType> {
        static values(): $TextureSheetType[];
        static valueOf(arg0: string): $TextureSheetType;
        getDefSize(): $Vec2i;
        static ARMOR1: $TextureSheetType;
        static ARMOR2: $TextureSheetType;
        static LIST_ICON: $TextureSheetType;
        static ELYTRA: $TextureSheetType;
        editable: boolean;
        static VALUES: $TextureSheetType[];
        static SKIN: $TextureSheetType;
        static CAPE: $TextureSheetType;
        texType: $TextureType;
        get defSize(): $Vec2i;
    }
    /**
     * Values that may be interpreted as {@link $TextureSheetType}.
     */
    export type $TextureSheetType_ = "skin" | "list_icon" | "cape" | "elytra" | "armor1" | "armor2";
    export class $RenderedCube$ElementSelectMode extends $Enum<$RenderedCube$ElementSelectMode> {
        isRenderOutline(): boolean;
        static values(): $RenderedCube$ElementSelectMode[];
        static valueOf(arg0: string): $RenderedCube$ElementSelectMode;
        static SELECTED: $RenderedCube$ElementSelectMode;
        static NULL: $RenderedCube$ElementSelectMode;
        static SEL_CHILDREN: $RenderedCube$ElementSelectMode;
        static SEL_ONLY: $RenderedCube$ElementSelectMode;
        get renderOutline(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderedCube$ElementSelectMode}.
     */
    export type $RenderedCube$ElementSelectMode_ = "null" | "selected" | "sel_children" | "sel_only";
    export class $PartValues {
    }
    export interface $PartValues {
        getSize(): $Vec3f;
        getOffset(): $Vec3f;
        getPos(): $Vec3f;
        isMirror(): boolean;
        getMCScale(): number;
        getUV(): $Vec2i;
        get size(): $Vec3f;
        get offset(): $Vec3f;
        get pos(): $Vec3f;
        get mirror(): boolean;
        get MCScale(): number;
        get UV(): $Vec2i;
    }
}
