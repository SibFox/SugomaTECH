import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        getBone(arg0: string): ($GeoBone) | undefined;
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoBone {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getMirror(): boolean;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        getRotationVector(): $Vector3d;
        saveSnapshot(): $BoneSnapshot;
        getRotY(): number;
        getRotX(): number;
        setRotX(arg0: number): void;
        setRotY(arg0: number): void;
        setHidden(arg0: boolean): void;
        getWorldPosition(): $Vector3d;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getInitialSnapshot(): $BoneSnapshot;
        getPosZ(): number;
        getPosX(): number;
        getPosY(): number;
        getRotZ(): number;
        getCubes(): $List<$GeoCube>;
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        isTrackingMatrices(): boolean;
        isHidingChildren(): boolean;
        getChildBones(): $List<$GeoBone>;
        getScaleVector(): $Vector3d;
        hasPositionChanged(): boolean;
        setChildrenHidden(arg0: boolean): void;
        hasScaleChanged(): boolean;
        getPositionVector(): $Vector3d;
        resetStateChanges(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        markScaleAsChanged(): void;
        hasRotationChanged(): boolean;
        setModelPosition(arg0: $Vector3d): void;
        getModelPosition(): $Vector3d;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        shouldNeverRender(): boolean;
        getScaleY(): number;
        setPosZ(arg0: number): void;
        getInflate(): number;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        setPivotX(arg0: number): void;
        setScaleZ(arg0: number): void;
        setPivotY(arg0: number): void;
        setPivotZ(arg0: number): void;
        getScaleX(): number;
        getScaleZ(): number;
        getReset(): boolean;
        getPivotZ(): number;
        getPivotX(): number;
        getPivotY(): number;
        setRotZ(arg0: number): void;
        saveInitialSnapshot(): void;
        getLocalPosition(): $Vector3d;
        markPositionAsChanged(): void;
        getModelRotationMatrix(): $Matrix4f;
        getWorldSpaceNormal(): $Matrix3f;
        getModelSpaceMatrix(): $Matrix4f;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        markRotationAsChanged(): void;
        setTrackingMatrices(arg0: boolean): void;
        getWorldSpaceMatrix(): $Matrix4f;
        getLocalSpaceMatrix(): $Matrix4f;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get rotationVector(): $Vector3d;
        get worldPosition(): $Vector3d;
        get initialSnapshot(): $BoneSnapshot;
        get cubes(): $List<$GeoCube>;
        get hidingChildren(): boolean;
        get childBones(): $List<$GeoBone>;
        get scaleVector(): $Vector3d;
        set childrenHidden(value: boolean);
        get positionVector(): $Vector3d;
        get inflate(): number;
        get reset(): boolean;
        get localPosition(): $Vector3d;
        get modelRotationMatrix(): $Matrix4f;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { vertices?: $GeoVertex_[], normal?: $Vector3f, direction?: $Direction_,  } | [vertices?: $GeoVertex_[], normal?: $Vector3f, direction?: $Direction_, ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        mirror(): boolean;
        rotation(): $Vec3;
        quads(): $GeoQuad[];
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_,  } | [mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texU(): number;
        texV(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { texU?: number, texV?: number, position?: $Vector3f,  } | [texU?: number, texV?: number, position?: $Vector3f, ];
}
