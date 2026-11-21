import { $MinecraftServer } from "@package/net/minecraft/server";

declare module "@package/me/wesley1808/servercore/common/dynamic" {
    export class $DynamicManager {
        static update(server: $MinecraftServer): void;
        static getInstance(server: $MinecraftServer): $DynamicManager;
        static reload(): void;
        static modifyMobcaps(percentage: number): void;
        modifyViewDistance(distance: number): void;
        modifySimulationDistance(distance: number): void;
        getAverageTickTime(): number;
        constructor(server: $MinecraftServer);
        get averageTickTime(): number;
    }
}
