import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MobCategory_ } from "@package/net/minecraft/world/entity";
import { $Statistics } from "@package/me/wesley1808/servercore/common/utils/statistics";
import { $DynamicManager } from "@package/me/wesley1808/servercore/common/dynamic";
import { $MobSpawnEntry } from "@package/me/wesley1808/servercore/common/config/data/mob_spawning";
export * as activation_range from "@package/me/wesley1808/servercore/common/interfaces/activation_range";
export * as chunk from "@package/me/wesley1808/servercore/common/interfaces/chunk";

declare module "@package/me/wesley1808/servercore/common/interfaces" {
    export class $IMinecraftServer {
        static onStarted(server: $MinecraftServer): void;
    }
    export interface $IMinecraftServer {
        servercore$onStarted(arg0: $MinecraftServer): void;
        servercore$getStatistics(): $Statistics;
        servercore$getDynamicManager(): $DynamicManager;
    }
    export class $IMobCategory {
        static of(category: $MobCategory_): $IMobCategory;
        static reload(): void;
        static getOriginalCapacity(category: $MobCategory_): number;
        static getSpawnInterval(category: $MobCategory_): number;
        static modifyCapacity(category: $MobCategory_, modifier: number): void;
    }
    export interface $IMobCategory {
        servercore$modifyCapacity(arg0: number): void;
        servercore$getSpawnInterval(): number;
        servercore$modifySpawningConfig(arg0: $MobSpawnEntry): void;
        servercore$getOriginalCapacity(): number;
    }
}
