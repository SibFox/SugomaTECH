import { $File_ } from "@package/java/io";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DynamicTexture, $Image } from "@package/com/tom/cpl/util";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $Vec2i } from "@package/com/tom/cpl/math";
import { $Enum } from "@package/java/lang";

declare module "@package/com/tom/cpm/shared/skin" {
    export class $TextureProvider {
        getSize(): $Vec2i;
        write(arg0: $IOHelper): void;
        free(): void;
        bind(): void;
        getImage(): $Image;
        setImage(arg0: $Image): void;
        size: $Vec2i;
        texture: $DynamicTexture;
        constructor();
        constructor(arg0: $Image, arg1: $Vec2i);
        constructor(arg0: $IOHelper, arg1: $ModelDefinition);
    }
    export class $TextureType extends $Enum<$TextureType> {
        static values(): $TextureType[];
        static valueOf(arg0: string): $TextureType;
        static ELYTRA: $TextureType;
        static VALUES: $TextureType[];
        static SKIN: $TextureType;
        static CAPE: $TextureType;
    }
    /**
     * Values that may be interpreted as {@link $TextureType}.
     */
    export type $TextureType_ = "skin" | "cape" | "elytra";
    export class $PlayerTextureLoader {
        load(): $CompletableFuture<void>;
        getTexture(arg0: $TextureType_): $CompletableFuture<$Image>;
        hasTexture(arg0: $TextureType_): boolean;
        constructor(arg0: $File_);
        constructor();
    }
}
