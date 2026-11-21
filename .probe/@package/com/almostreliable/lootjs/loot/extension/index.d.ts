import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Map, $List_ } from "@package/java/util";
import { $LootFunctionList, $LootConditionList, $LootEntryList } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootType, $LootType_ } from "@package/com/almostreliable/lootjs/core";
import { $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $Object } from "@package/java/lang";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootTable, $LootPool, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/almostreliable/lootjs/loot/extension" {
    export class $LootItemFunctionExtension {
    }
    export interface $LootItemFunctionExtension {
        when(arg0: $Consumer_<$LootConditionList>): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunctionExtension}.
     */
    export type $LootItemFunctionExtension_ = ((arg0: $Consumer<$LootConditionList>) => $LootItemFunction);
    export class $LootParamsExtension {
    }
    export interface $LootParamsExtension {
        setType(arg0: $LootType_): void;
        getType(): $LootType;
    }
    export class $LootContextExtension {
        static cast(arg0: $LootContext): $LootContextExtension;
    }
    export interface $LootContextExtension {
        getAttackingEntity(): $Entity;
        getDamageSource(): $DamageSource;
        getKillerPlayer(): $ServerPlayer;
        getExplosionRadius(): number;
        isExploded(): boolean;
        getServer(): $MinecraftServer;
        getId(): $ResourceLocation;
        getEntity(): $Entity;
        getData(): $Map<string, $Object>;
        getType(): $LootType;
        isType(arg0: $LootType_): boolean;
        self(): $LootContext;
        getPosition(): $Vec3;
        getTool(): $ItemStack;
        get attackingEntity(): $Entity;
        get damageSource(): $DamageSource;
        get killerPlayer(): $ServerPlayer;
        get explosionRadius(): number;
        get exploded(): boolean;
        get server(): $MinecraftServer;
        get id(): $ResourceLocation;
        get entity(): $Entity;
        get data(): $Map<string, $Object>;
        get position(): $Vec3;
        get tool(): $ItemStack;
    }
    export class $LootTableExtension {
        static cast(arg0: $LootTable): $LootTableExtension;
    }
    export interface $LootTableExtension {
        lootjs$setRandomSequence(arg0: $ResourceLocation_ | null): void;
        lootjs$createFunctionList(): $LootFunctionList;
        lootjs$getRandomSequence(): $ResourceLocation;
        lootjs$setPools(arg0: $List_<$LootPool>): void;
        lootjs$getParamSet(): $LootContextParamSet;
        lootjs$getPools(): $List<$LootPool>;
        lootjs$setParamSet(arg0: $LootContextParamSet): void;
    }
    export class $CompositeEntryBaseExtension {
    }
    export interface $CompositeEntryBaseExtension {
        lootjs$getEntries(): $List<$LootPoolEntryContainer>;
    }
    export class $LootPoolExtension {
        static cast(arg0: $LootPool): $LootPoolExtension;
    }
    export interface $LootPoolExtension {
        lootjs$getConditions(): $LootConditionList;
        lootjs$asVanillaPool(): $LootPool;
        lootjs$getFunctions(): $LootFunctionList;
        lootjs$collectDebugInfo(arg0: $DebugInfo): void;
        lootjs$getEntries(): $LootEntryList;
        lootjs$setName(arg0: string): void;
    }
}
