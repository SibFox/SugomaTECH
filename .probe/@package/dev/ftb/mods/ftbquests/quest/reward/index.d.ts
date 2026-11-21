import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $UUID_, $List_ } from "@package/java/util";
import { $Widget, $Button, $Panel } from "@package/dev/ftb/mods/ftblibrary/ui";
import { $RandomSource } from "@package/net/minecraft/util";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $Consumer_, $Consumer, $Supplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Enum } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $QuestObjectBase, $Quest } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/reward" {
    export class $CustomReward extends $Reward {
        id: number;
        constructor(id: number, quest: $Quest);
    }
    export class $RewardType {
        getDisplayName(): $Component;
        setDisplayName(name: $Component_): $RewardType;
        getTypeId(): $ResourceLocation;
        getTypeForNBT(): string;
        makeExtraNBT(): $CompoundTag;
        getGuiProvider(): $RewardType$GuiProvider;
        setGuiProvider(p: $RewardType$GuiProvider_): $RewardType;
        getIconSupplier(): $Icon;
        setExcludeFromListRewards(v: boolean): $RewardType;
        getExcludeFromListRewards(): boolean;
        static createReward(id: number, quest: $Quest, typeId: string): $Reward;
        createReward(id: number, quest: $Quest): $Reward;
        intId: number;
        constructor(typeId: $ResourceLocation_, provider: $RewardType$Provider_, iconSupplier: $Supplier_<$Icon>, availableByDefault: boolean);
        constructor(typeId: $ResourceLocation_, provider: $RewardType$Provider_, iconSupplier: $Supplier_<$Icon>);
        get typeId(): $ResourceLocation;
        get typeForNBT(): string;
        get iconSupplier(): $Icon;
    }
    export class $RewardType$Provider {
    }
    export interface $RewardType$Provider {
        create(arg0: number, arg1: $Quest): $Reward;
    }
    /**
     * Values that may be interpreted as {@link $RewardType$Provider}.
     */
    export type $RewardType$Provider_ = ((arg0: number, arg1: $Quest) => $Reward);
    export class $RewardType$GuiProvider {
    }
    export interface $RewardType$GuiProvider {
        openCreationGui(arg0: $Panel, arg1: $Quest, arg2: $Consumer_<$Reward>): void;
    }
    /**
     * Values that may be interpreted as {@link $RewardType$GuiProvider}.
     */
    export type $RewardType$GuiProvider_ = ((arg0: $Panel, arg1: $Quest, arg2: $Consumer<$Reward>) => void);
    export class $RewardAutoClaim extends $Enum<$RewardAutoClaim> {
        static values(): $RewardAutoClaim[];
        static valueOf(name: string): $RewardAutoClaim;
        static DISABLED: $RewardAutoClaim;
        static NO_TOAST: $RewardAutoClaim;
        static INVISIBLE: $RewardAutoClaim;
        static NAME_MAP: $NameMap<$RewardAutoClaim>;
        static NAME_MAP_NO_DEFAULT: $NameMap<$RewardAutoClaim>;
        static ENABLED: $RewardAutoClaim;
        id: string;
        static DEFAULT: $RewardAutoClaim;
    }
    /**
     * Values that may be interpreted as {@link $RewardAutoClaim}.
     */
    export type $RewardAutoClaim_ = "default" | "disabled" | "enabled" | "no_toast" | "invisible";
    export class $RewardClaimType extends $Enum<$RewardClaimType> {
        static values(): $RewardClaimType[];
        static valueOf(name: string): $RewardClaimType;
        canClaim(): boolean;
        cantClaim(): boolean;
        isClaimed(): boolean;
        static CLAIMED: $RewardClaimType;
        static CAN_CLAIM: $RewardClaimType;
        static CANT_CLAIM: $RewardClaimType;
        get claimed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RewardClaimType}.
     */
    export type $RewardClaimType_ = "can_claim" | "cant_claim" | "claimed";
    export class $Reward extends $QuestObjectBase {
        getType(): $RewardType;
        claim(arg0: $ServerPlayer, arg1: boolean): void;
        getButtonText(): string;
        getIngredient(widget: $Widget): ($PositionedIngredient) | undefined;
        addMouseOverText(list: $TooltipList): void;
        getExcludeFromClaimAll(): boolean;
        isClaimAllHardcoded(): boolean;
        addAnyProtoTranslations(tag: $CompoundTag_): void;
        onButtonClicked(button: $Button, canClick: boolean): void;
        ignoreRewardBlocking(): boolean;
        addTitleInMouseOverText(): boolean;
        automatedClaimPre(blockEntity: $BlockEntity, items: $List_<$ItemStack_>, random: $RandomSource, playerId: $UUID_, player: $ServerPlayer): boolean;
        automatedClaimPost(blockEntity: $BlockEntity, playerId: $UUID_, player: $ServerPlayer): void;
        isTeamReward(): boolean;
        getAutoClaimType(): $RewardAutoClaim;
        getQuest(): $Quest;
        id: number;
        constructor(id: number, q: $Quest);
        get type(): $RewardType;
        get buttonText(): string;
        get excludeFromClaimAll(): boolean;
        get claimAllHardcoded(): boolean;
        get teamReward(): boolean;
        get autoClaimType(): $RewardAutoClaim;
        get quest(): $Quest;
    }
}
