import { $Codec } from "@package/com/mojang/serialization";
import { $Trail$TilingMode_, $Trail$TilingMode } from "@package/foundry/veil/api/quasar/fx";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector4fc, $Vector4f } from "@package/org/joml";

declare module "@package/foundry/veil/api/quasar/emitters/module/render" {
    export class $TrailSettings$TrailWidthModifier {
    }
    export interface $TrailSettings$TrailWidthModifier {
        modify(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $TrailSettings$TrailWidthModifier}.
     */
    export type $TrailSettings$TrailWidthModifier_ = ((arg0: number, arg1: number) => number);
    export class $TrailSettings {
        renderImGuiSettings(): void;
        setTrailPointModifier(arg0: $TrailSettings$TrailPointModifier_): void;
        getTrailWidthModifier(): $TrailSettings$TrailWidthModifier;
        getTrailPointModifier(): $TrailSettings$TrailPointModifier;
        setTrailWidthModifier(arg0: $TrailSettings$TrailWidthModifier_): void;
        setTrailFrequency(arg0: number): void;
        setTrailLength(arg0: number): void;
        setParentRotation(arg0: boolean): void;
        setTrailTexture(arg0: $ResourceLocation_): void;
        getTrailLength(): number;
        getTrailColor(): $Vector4f;
        getTilingMode(): $Trail$TilingMode;
        setTrailColor(arg0: $Vector4f): void;
        getBillboard(): boolean;
        setBillboard(arg0: boolean): void;
        getTrailFrequency(): number;
        getTrailTexture(): $ResourceLocation;
        setTilingMode(arg0: $Trail$TilingMode_): void;
        getParentRotation(): boolean;
        static CODEC: $Codec<$TrailSettings>;
        constructor(arg0: number, arg1: number, arg2: $Vector4fc, arg3: $TrailSettings$TrailWidthModifier_, arg4: $ResourceLocation_, arg5: $TrailSettings$TrailPointModifier_, arg6: $Trail$TilingMode_, arg7: boolean, arg8: boolean);
    }
    export class $TrailSettings$TrailPointModifier {
    }
    export interface $TrailSettings$TrailPointModifier {
        modify(arg0: $Vector4f, arg1: number, arg2: $Vec3_): $Vector4f;
    }
    /**
     * Values that may be interpreted as {@link $TrailSettings$TrailPointModifier}.
     */
    export type $TrailSettings$TrailPointModifier_ = ((arg0: $Vector4f, arg1: number, arg2: $Vec3) => $Vector4f);
}
