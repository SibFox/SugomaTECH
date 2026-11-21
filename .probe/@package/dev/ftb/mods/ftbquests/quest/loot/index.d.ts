import { $ConfigGroup } from "@package/dev/ftb/mods/ftblibrary/config";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Color4I } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $List, $Map, $Collection } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Reward } from "@package/dev/ftb/mods/ftbquests/quest/reward";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BaseQuestFile, $QuestObjectBase, $Quest } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/loot" {
    export class $LootCrate {
        getTable(): $RewardTable;
        getColor(): $Color4I;
        writeData(nbt: $CompoundTag_): void;
        createStack(): $ItemStack;
        getDrops(): $EntityWeight;
        readData(nbt: $CompoundTag_): void;
        getItemName(): string;
        isGlow(): boolean;
        getStringID(): string;
        static getLootCrates(isClient: boolean): $Map<string, $LootCrate>;
        fillConfigGroup(config: $ConfigGroup): void;
        static allCrateStacks(isClientSide: boolean): $Collection<$ItemStack>;
        readNetData(data: $FriendlyByteBuf): void;
        writeNetData(data: $FriendlyByteBuf): void;
        initFromTable(): void;
        constructor(table: $RewardTable, initFromTable: boolean);
        get table(): $RewardTable;
        get color(): $Color4I;
        get drops(): $EntityWeight;
        get itemName(): string;
        get glow(): boolean;
        get stringID(): string;
    }
    export class $EntityWeight {
        getWeight(entity: $Entity): number;
        writeData(nbt: $CompoundTag_): void;
        readData(nbt: $CompoundTag_): void;
        readNetData(data: $FriendlyByteBuf): void;
        writeNetData(data: $FriendlyByteBuf): void;
        boss: number;
        passive: number;
        monster: number;
        constructor();
    }
    export class $RewardTable extends $QuestObjectBase {
        copy(): $RewardTable;
        getFile(): $BaseQuestFile;
        getFilename(): string;
        getTotalWeight(includeEmpty: boolean): number;
        getTitleOrElse(def: $Component_): $Component;
        addMouseOverText(list: $TooltipList, includeWeight: boolean, includeEmpty: boolean): void;
        static createRewardForTable(id: number, type: string, file: $BaseQuestFile): $QuestObjectBase;
        makeWeightedItemReward(stack: $ItemStack_, weight: number): $WeightedReward;
        generateWeightedRandomRewards(random: $RandomSource, nAttempts: number, includeEmpty: boolean): $Collection<$WeightedReward>;
        shouldShowTooltip(): boolean;
        removeReward(weightedReward: $WeightedReward): void;
        getLootCrate(): $LootCrate;
        static isFakeQuestId(id: number): boolean;
        getWeightedRewards(): $List<$WeightedReward>;
        toggleLootCrate(): $LootCrate;
        getFakeQuest(): $Quest;
        addReward(weightedReward: $WeightedReward): void;
        id: number;
        constructor(id: number, file: $BaseQuestFile);
        constructor(id: number, file: $BaseQuestFile, filename: string);
        get file(): $BaseQuestFile;
        get filename(): string;
        get lootCrate(): $LootCrate;
        get weightedRewards(): $List<$WeightedReward>;
        get fakeQuest(): $Quest;
    }
    export class $WeightedReward implements $Comparable<$WeightedReward> {
        compareTo(o: $WeightedReward): number;
        copy(): $WeightedReward;
        getWeight(): number;
        setWeight(weight: number): void;
        static chanceString(weight: number, totalWeight: number): string;
        static chanceString(weight: number, totalWeight: number, empty: boolean): string;
        getReward(): $Reward;
        constructor(reward: $Reward, weight: number);
        get reward(): $Reward;
    }
}
