import { $Level } from "@package/net/minecraft/world/level";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
export * as accessor from "@package/toni/sodiumdynamiclights/accessor";

declare module "@package/toni/sodiumdynamiclights" {
    export class $DynamicLightSource {
    }
    export interface $DynamicLightSource {
        sodiumdynamiclights$updateDynamicLight(arg0: $LevelRenderer): boolean;
        sdl$getLuminance(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: $LevelRenderer): void;
        sdl$dynamicLightTick(): void;
        sdl$getDynamicLightX(): number;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightZ(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        sdl$resetDynamicLight(): void;
        sdl$getDynamicLightLevel(): $Level;
        sdl$isDynamicLightEnabled(): boolean;
        sdl$shouldUpdateDynamicLight(): boolean;
    }
}
