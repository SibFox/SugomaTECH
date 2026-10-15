import { $Explosion$BlockInteraction_ } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LootAction } from "@package/com/almostreliable/lootjs/loot/modifier";
import { $LootBucket } from "@package/com/almostreliable/lootjs/core";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $ItemFilter_, $ItemFilter } from "@package/com/almostreliable/lootjs/core/filters";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootContext, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/almostreliable/lootjs/loot/modifier/handler" {
    export class $LightningStrikeAction implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        constructor(arg0: boolean);
    }
    export class $AddLootAction implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        entries(): $LootPoolEntryContainer[];
        constructor(...arg0: $LootEntry[]);
    }
    export class $CustomPlayerAction implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        constructor(arg0: $Consumer_<$ServerPlayer>);
    }
    export class $ExplodeAction implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        constructor(arg0: number, arg1: $Explosion$BlockInteraction_, arg2: boolean);
    }
    export class $LootPoolAction extends $Record implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        pool(): $LootPool;
        constructor(pool: $LootPool);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolAction}.
     */
    export type $LootPoolAction_ = { pool?: $LootPool,  } | [pool?: $LootPool, ];
    export class $RemoveLootAction extends $Record implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        filter(): $ItemFilter;
        constructor(filter: $ItemFilter_);
    }
    /**
     * Values that may be interpreted as {@link $RemoveLootAction}.
     */
    export type $RemoveLootAction_ = { filter?: $ItemFilter_,  } | [filter?: $ItemFilter_, ];
    export class $ModifyLootAction extends $Record implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        predicate(): $ItemFilter;
        callback(): $ModifyLootAction$Callback;
        constructor(predicate: $ItemFilter_, callback: $ModifyLootAction$Callback_);
    }
    /**
     * Values that may be interpreted as {@link $ModifyLootAction}.
     */
    export type $ModifyLootAction_ = { callback?: $ModifyLootAction$Callback_, predicate?: $ItemFilter_,  } | [callback?: $ModifyLootAction$Callback_, predicate?: $ItemFilter_, ];
    export class $ModifyLootAction$Callback {
    }
    export interface $ModifyLootAction$Callback {
        modify(arg0: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ModifyLootAction$Callback}.
     */
    export type $ModifyLootAction$Callback_ = ((arg0: $ItemStack) => $ItemStack_);
    export class $ReplaceLootAction extends $Record implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        filter(): $ItemFilter;
        lootEntry(): $LootEntry;
        preserveComponentTypes(): $DataComponentType<never>[];
        preserveCount(): boolean;
        constructor(filter: $ItemFilter_, lootEntry: $LootEntry, preserveCount: boolean, preserveComponentTypes: $DataComponentType_<never>[]);
    }
    /**
     * Values that may be interpreted as {@link $ReplaceLootAction}.
     */
    export type $ReplaceLootAction_ = { filter?: $ItemFilter_, preserveComponentTypes?: $DataComponentType_<never>[], lootEntry?: $LootEntry, preserveCount?: boolean,  } | [filter?: $ItemFilter_, preserveComponentTypes?: $DataComponentType_<never>[], lootEntry?: $LootEntry, preserveCount?: boolean, ];
    export class $DropExperienceAction implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        constructor(arg0: $NumberProvider_);
    }
}
