import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $EnumSet, $EnumMap, $Map_, $Map, $Collection_, $List_ } from "@package/java/util";
import { $Vec3_, $AABB_, $Vec3, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/denfop/screen/cable" {
    export class $CablePreviewRenderer {
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CablePreviewStateFactory$PreparedPreview_, arg7: number, arg8: number, arg9: number): $CablePreviewHitResult;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CablePreviewStateFactory$PreparedPreview_, arg6: $EnumSet<$Direction_>, arg7: $CablePreviewHitResult_, arg8: $EnumMap<$Direction_, $BlockState_>, arg9: number, arg10: number, arg11: number): void;
        projectPoint(arg0: $Vec3_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $CablePreviewRenderer$ScreenProjection;
        renderWithoutOutline(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CablePreviewStateFactory$PreparedPreview_, arg6: $EnumSet<$Direction_>, arg7: $CablePreviewHitResult_, arg8: $EnumMap<$Direction_, $BlockState_>, arg9: number, arg10: number, arg11: number): void;
        constructor();
    }
    export class $CablePreviewStateFactory {
        static prepare(arg0: $BlockState_, arg1: $Collection_<$Direction_>): $CablePreviewStateFactory$PreparedPreview;
    }
    export class $CablePreviewStateFactory$PreparedPreview extends $Record {
        state(): $BlockState;
        boxes(): $Map<$CablePreviewPart, $List<$AABB>>;
        boxes(arg0: $CablePreviewPart_): $List<$AABB>;
        mergedBox(arg0: $CablePreviewPart_): $AABB;
        constructor(state: $BlockState_, boxes: $Map_<$CablePreviewPart_, $List_<$AABB_>>);
    }
    /**
     * Values that may be interpreted as {@link $CablePreviewStateFactory$PreparedPreview}.
     */
    export type $CablePreviewStateFactory$PreparedPreview_ = { boxes?: $Map_<$CablePreviewPart_, $List_<$AABB_>>, state?: $BlockState_,  } | [boxes?: $Map_<$CablePreviewPart_, $List_<$AABB_>>, state?: $BlockState_, ];
    export class $CablePreviewPart extends $Enum<$CablePreviewPart> {
        static values(): $CablePreviewPart[];
        static valueOf(arg0: string): $CablePreviewPart;
        direction(): $Direction;
        static fromDirection(arg0: $Direction_): $CablePreviewPart;
        isToggleable(): boolean;
        static CENTER: $CablePreviewPart;
        static DOWN: $CablePreviewPart;
        static NORTH: $CablePreviewPart;
        static WEST: $CablePreviewPart;
        static SOUTH: $CablePreviewPart;
        static UP: $CablePreviewPart;
        static EAST: $CablePreviewPart;
        get toggleable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CablePreviewPart}.
     */
    export type $CablePreviewPart_ = "center" | "north" | "south" | "east" | "west" | "up" | "down";
    export class $CablePreviewHitResult extends $Record {
        depth(): number;
        box(): $AABB;
        anchor(): $Vec3;
        direction(): $Direction;
        part(): $CablePreviewPart;
        constructor(part: $CablePreviewPart_, box: $AABB_, anchor: $Vec3_, depth: number);
    }
    /**
     * Values that may be interpreted as {@link $CablePreviewHitResult}.
     */
    export type $CablePreviewHitResult_ = { depth?: number, part?: $CablePreviewPart_, anchor?: $Vec3_, box?: $AABB_,  } | [depth?: number, part?: $CablePreviewPart_, anchor?: $Vec3_, box?: $AABB_, ];
    export class $CablePreviewRenderer$ScreenProjection extends $Record {
        x(): number;
        z(): number;
        y(): number;
        constructor(x: number, y: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $CablePreviewRenderer$ScreenProjection}.
     */
    export type $CablePreviewRenderer$ScreenProjection_ = { x?: number, y?: number, z?: number,  } | [x?: number, y?: number, z?: number, ];
}
