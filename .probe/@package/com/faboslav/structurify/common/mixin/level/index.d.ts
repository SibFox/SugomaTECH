import { $VerticalAnchor } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/faboslav/structurify/common/mixin/level" {
    export class $VeryBiasedToBottomHeightAccessor {
    }
    export interface $VeryBiasedToBottomHeightAccessor {
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
        getInner(): number;
        get maxInclusive(): $VerticalAnchor;
        get minInclusive(): $VerticalAnchor;
        get inner(): number;
    }
    export class $BiasedToBottomHeightAccessor {
    }
    export interface $BiasedToBottomHeightAccessor {
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
        getInner(): number;
        get maxInclusive(): $VerticalAnchor;
        get minInclusive(): $VerticalAnchor;
        get inner(): number;
    }
    export class $TrapezoidHeightAccessor {
    }
    export interface $TrapezoidHeightAccessor {
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
        getPlateau(): number;
        get maxInclusive(): $VerticalAnchor;
        get minInclusive(): $VerticalAnchor;
        get plateau(): number;
    }
    export class $UniformHeightAccessor {
    }
    export interface $UniformHeightAccessor {
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
        get minInclusive(): $VerticalAnchor;
    }
}
