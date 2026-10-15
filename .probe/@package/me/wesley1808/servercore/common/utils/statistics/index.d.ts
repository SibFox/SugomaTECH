import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Iterable_ } from "@package/java/lang";
import { $Map, $List } from "@package/java/util";
import { $StatisticEntry } from "@package/me/wesley1808/servercore/common/utils/statistics/entry";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as entry from "@package/me/wesley1808/servercore/common/utils/statistics/entry";

declare module "@package/me/wesley1808/servercore/common/utils/statistics" {
    export class $Statistics {
        static getInstance(server: $MinecraftServer): $Statistics;
        getAllEntities(): $List<$Entity>;
        getChunkCount(onlyLoaded: boolean): number;
        getEntitiesNear(player: $ServerPlayer): $List<$Entity>;
        getEntitiesByType(entities: $Iterable_<$Entity>): $Map<string, $StatisticEntry<$Entity>>;
        getAllBlockEntities(): $List<$TickingBlockEntity>;
        getEntitiesByPlayer(players: $Iterable_<$ServerPlayer>): $Map<string, $StatisticEntry<$Entity>>;
        getBlockEntitiesByType(blockEntities: $Iterable_<$TickingBlockEntity>): $Map<string, $StatisticEntry<$TickingBlockEntity>>;
        getBlockEntitiesByPlayer(players: $Iterable_<$ServerPlayer>): $Map<string, $StatisticEntry<$TickingBlockEntity>>;
        getBlockEntitiesNear(player: $ServerPlayer): $List<$TickingBlockEntity>;
        constructor(server: $MinecraftServer);
        get allEntities(): $List<$Entity>;
        get allBlockEntities(): $List<$TickingBlockEntity>;
    }
}
