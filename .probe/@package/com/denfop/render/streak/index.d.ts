import { $RegistryAccess } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ArrayList } from "@package/java/util";
import { $RenderPlayerEvent$Post } from "@package/net/neoforged/neoforge/client/event";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";

declare module "@package/com/denfop/render/streak" {
    export class $PlayerStreakInfo {
        setRgb(arg0: $RGB): void;
        getRgb(): $RGB;
        writeNBT(): $CompoundTag;
        setRainbow(arg0: boolean): void;
        isRainbow(): boolean;
        writePacket(arg0: $RegistryAccess): $CustomPacketBuffer;
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $RGB, arg1: boolean);
    }
    export class $EventSpectralSuitEffect {
        static clamp(arg0: number, arg1: number, arg2: number): number;
        render(arg0: $Player, arg1: number, arg2: $PoseStack): void;
        onPlayerTick(arg0: $PlayerTickEvent$Post): void;
        onRenderPlayer(arg0: $RenderPlayerEvent$Post): void;
        static getPlayerStreakLocationInfo(arg0: $Player): $ArrayList<$EventSpectralSuitEffect$StreakLocation>;
        red: number[];
        green: number[];
        blue: number[];
        static texture: $ResourceLocation;
        constructor();
    }
    export class $EventSpectralSuitEffect$StreakLocation {
        update(arg0: $Player): void;
        hasSameCoords(arg0: $EventSpectralSuitEffect$StreakLocation): boolean;
        posX: number;
        lastTick: number;
        posY: number;
        rotationPitch: number;
        posZ: number;
        renderYawOffset: number;
        isSprinting: boolean;
        rotationYawHead: number;
        startU: number;
        height: number;
        constructor(arg0: $Player);
    }
    export class $PlayerStreakPreviewRenderer {
        static renderPreview(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Player, arg6: $PlayerStreakInfo, arg7: number, arg8: number, arg9: number): void;
        static resolvePreviewRgb(arg0: $PlayerStreakInfo, arg1: number): number;
    }
    export class $StreakRenderHelper {
        static resolveColor(arg0: $PlayerStreakInfo, arg1: number, arg2: number): number[];
        static resolvePackedRgb(arg0: $PlayerStreakInfo, arg1: number): number;
        static resolveRgb(arg0: $PlayerStreakInfo, arg1: number): number[];
        static TEXTURE: $ResourceLocation;
    }
    export class $RGB {
        getBlue(): number;
        getRed(): number;
        getGreen(): number;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        setGreen(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: number);
    }
}
