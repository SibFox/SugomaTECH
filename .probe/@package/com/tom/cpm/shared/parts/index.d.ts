import { $Link, $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $TextureStitcher } from "@package/com/tom/cpm/shared/util";
import { $Image } from "@package/com/tom/cpl/util";
import { $IOHelper, $IOHelper$ObjectBlock } from "@package/com/tom/cpm/shared/io";
import { $Enum } from "@package/java/lang";
export * as anim from "@package/com/tom/cpm/shared/parts/anim";

declare module "@package/com/tom/cpm/shared/parts" {
    export class $ModelPartType extends $Enum<$ModelPartType> {
        static values(): $ModelPartType[];
        static valueOf(arg0: string): $ModelPartType;
        getFactory(): $IModelPart$Factory;
        static ROOT_INFO: $ModelPartType;
        static CLONEABLE: $ModelPartType;
        static ANIMATION_NEW: $ModelPartType;
        static PACKAGE_LINK: $ModelPartType;
        static TEMPLATE: $ModelPartType;
        static ANIMATED_TEX: $ModelPartType;
        static VALUES: $ModelPartType[];
        /**
         * @deprecated
         */
        static SKIN: $ModelPartType;
        /**
         * @deprecated
         */
        static ANIMATION_DATA: $ModelPartType;
        /**
         * @deprecated
         */
        static SCALE: $ModelPartType;
        static RENDER_EFFECT: $ModelPartType;
        /**
         * @deprecated
         */
        static DEFINITION: $ModelPartType;
        /**
         * @deprecated
         */
        static PLAYER_PARTPOS: $ModelPartType;
        static UUID_LOCK: $ModelPartType;
        /**
         * @deprecated
         */
        static DUP_ROOT: $ModelPartType;
        /**
         * @deprecated
         */
        static LIST_ICON: $ModelPartType;
        static CUBES: $ModelPartType;
        /**
         * @deprecated
         */
        static PLAYER: $ModelPartType;
        static TEXTURE: $ModelPartType;
        static SKIN_TYPE: $ModelPartType;
        static END: $ModelPartType;
        /**
         * @deprecated
         */
        static SKIN_LINK: $ModelPartType;
        /**
         * @deprecated
         */
        static DEFINITION_LINK: $ModelPartType;
        /**
         * @deprecated
         */
        static MODEL_ROOT: $ModelPartType;
        static TAGS: $ModelPartType;
        get factory(): $IModelPart$Factory;
    }
    /**
     * Values that may be interpreted as {@link $ModelPartType}.
     */
    export type $ModelPartType_ = "end" | "player" | "template" | "definition" | "definition_link" | "skin" | "skin_link" | "player_partpos" | "render_effect" | "uuid_lock" | "animation_data" | "skin_type" | "model_root" | "list_icon" | "dup_root" | "cloneable" | "scale" | "texture" | "animated_tex" | "tags" | "package_link" | "cubes" | "root_info" | "animation_new";
    export class $ModelPartCloneable implements $IModelPart, $IResolvedModelPart {
        apply(arg0: $ModelDefinition): void;
        resolve(): $IResolvedModelPart;
        write(arg0: $IOHelper): void;
        getType(): $ModelPartType;
        preApply(arg0: $ModelDefinition): void;
        stitch(arg0: $TextureStitcher): void;
        name: string;
        icon: $Image;
        desc: string;
        constructor(arg0: $IOHelper, arg1: $ModelDefinition);
        constructor(arg0: string, arg1: string, arg2: $Image);
        get type(): $ModelPartType;
    }
    export class $IModelPart {
    }
    export interface $IModelPart extends $IOHelper$ObjectBlock<$ModelPartType> {
        resolve(): $IResolvedModelPart;
        write(arg0: $IOHelper): void;
        getType(): $ModelPartType;
        get type(): $ModelPartType;
    }
    export class $ModelPartLink implements $IModelPart {
        resolve(): $IResolvedModelPart;
        write(arg0: $IOHelper): void;
        getLink(): $Link;
        constructor(arg0: $IOHelper, arg1: $ModelDefinition);
        constructor(arg0: $Link);
        get link(): $Link;
    }
    export class $IResolvedModelPart {
    }
    export interface $IResolvedModelPart {
        apply(arg0: $ModelDefinition): void;
        preApply(arg0: $ModelDefinition): void;
        stitch(arg0: $TextureStitcher): void;
    }
}
