import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Color4I, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TeamPropertyCollection, $TeamProperty } from "@package/dev/ftb/mods/ftbteams/api/property";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID, $List, $Map, $Collection, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as property from "@package/dev/ftb/mods/ftbteams/api/property";
export * as event from "@package/dev/ftb/mods/ftbteams/api/event";

declare module "@package/dev/ftb/mods/ftbteams/api" {
    export class $TeamRank extends $Enum<$TeamRank> implements $StringRepresentable {
        static values(): $TeamRank[];
        static valueOf(name: string): $TeamRank;
        getDisplayName(): $Component;
        getIcon(): ($Icon) | undefined;
        isAtLeast(rank: $TeamRank_): boolean;
        getSerializedName(): string;
        getPower(): number;
        isAllyOrBetter(): boolean;
        isMemberOrBetter(): boolean;
        isOwner(): boolean;
        isInvitedOrBetter(): boolean;
        isOfficerOrBetter(): boolean;
        isNoneOrBetter(): boolean;
        isEnemyOrWorse(): boolean;
        getRemappedEnumConstantName(): string;
        static OWNER: $TeamRank;
        static INVITED: $TeamRank;
        static ALLY: $TeamRank;
        static NAME_MAP: $NameMap<$TeamRank>;
        static ENEMY: $TeamRank;
        static OFFICER: $TeamRank;
        static NONE: $TeamRank;
        static MEMBER: $TeamRank;
        get displayName(): $Component;
        get icon(): ($Icon) | undefined;
        get serializedName(): string;
        get power(): number;
        get allyOrBetter(): boolean;
        get memberOrBetter(): boolean;
        get owner(): boolean;
        get invitedOrBetter(): boolean;
        get officerOrBetter(): boolean;
        get noneOrBetter(): boolean;
        get enemyOrWorse(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TeamRank}.
     */
    export type $TeamRank_ = "enemy" | "none" | "ally" | "invited" | "member" | "officer" | "owner";
    export class $Team {
    }
    export interface $Team {
        getName(): $Component;
        getProperty<T>(arg0: $TeamProperty<T>): T;
        setProperty<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getProperties(): $TeamPropertyCollection;
        getId(): $UUID;
        getOwner(): $UUID;
        isValid(): boolean;
        getMembers(): $Set<$UUID>;
        getExtraData(): $CompoundTag;
        getShortName(): string;
        sendMessage(arg0: $UUID_, arg1: string): void;
        sendMessage(arg0: $UUID_, arg1: $Component_): void;
        getTeamId(): $UUID;
        markDirty(): void;
        getRankForPlayer(arg0: $UUID_): $TeamRank;
        getPlayersByRank(arg0: $TeamRank_): $Map<$UUID, $TeamRank>;
        createParty(arg0: string, arg1: $Color4I): $Team;
        getTeamInfo(): $List<$Component>;
        isPlayerTeam(): boolean;
        isServerTeam(): boolean;
        getColoredName(): $Component;
        isClientTeam(): boolean;
        getMessageHistory(): $List<$TeamMessage>;
        syncOnePropertyToTeam<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getTypeTranslationKey(): string;
        syncOnePropertyToAll<T>(arg0: $MinecraftServer, arg1: $TeamProperty<T>, arg2: T): void;
        getOnlineMembers(): $Collection<$ServerPlayer>;
        isPartyTeam(): boolean;
        get name(): $Component;
        get properties(): $TeamPropertyCollection;
        get id(): $UUID;
        get owner(): $UUID;
        get valid(): boolean;
        get members(): $Set<$UUID>;
        get extraData(): $CompoundTag;
        get shortName(): string;
        get teamId(): $UUID;
        get teamInfo(): $List<$Component>;
        get playerTeam(): boolean;
        get serverTeam(): boolean;
        get coloredName(): $Component;
        get clientTeam(): boolean;
        get messageHistory(): $List<$TeamMessage>;
        get typeTranslationKey(): string;
        get onlineMembers(): $Collection<$ServerPlayer>;
        get partyTeam(): boolean;
    }
    export class $TeamMessage {
    }
    export interface $TeamMessage {
        text(): $Component;
        date(): number;
        sender(): $UUID;
    }
}
