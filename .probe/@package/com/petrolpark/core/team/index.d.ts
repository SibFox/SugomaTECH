import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { DataComponentTypes, RegistryMarked, RegistryTypes } from "@special/types";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/petrolpark/core/team" {
    export class $ITeam$ProviderType extends $Record {
        codec(): $MapCodec<$ITeam$Provider>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ITeam$Provider>;
        constructor(codec: $MapCodec_<$ITeam$Provider>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, $ITeam$Provider>);
    }
    /**
     * Values that may be interpreted as {@link $ITeam$ProviderType}.
     */
    export type $ITeam$ProviderType_ = RegistryTypes.PetrolparkTeamProviderType | { codec?: $MapCodec_<$ITeam$Provider>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ITeam$Provider>,  } | [codec?: $MapCodec_<$ITeam$Provider>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ITeam$Provider>, ];
    export class $GatherTeamProvidersEvent extends $PlayerEvent {
        add(arg0: $ITeam$Provider): boolean;
        getTeamProvidersUnmodifiable(): $List<$ITeam$Provider>;
        getTeamsUnmodifiable(arg0: $Level_): $List<$ITeam>;
        get teamProvidersUnmodifiable(): $List<$ITeam$Provider>;
    }
    export class $ITeam$Provider {
        static CODEC: $Codec<$ITeam$Provider>;
        static TYPED_CODEC: $Codec<$ITeam$Provider>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ITeam$Provider>;
    }
    export interface $ITeam$Provider {
        provideTeam(arg0: $Level_): $ITeam;
        getProviderType(): $ITeam$ProviderType;
        get providerType(): $ITeam$ProviderType;
    }
    export class $ITeam {
        static streamAll(arg0: $Player): $Stream<$ITeam>;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ITeam extends $MutableDataComponentHolder {
        getName(): $Component;
        getProvider(): $ITeam$Provider;
        isMember(arg0: $Player): boolean;
        isAdmin(arg0: $Player): boolean;
        renderIcon(arg0: $GuiGraphics): void;
        isNone(): boolean;
        getRenderedMemberList(arg0: number): $Component;
        streamMemberUsernames(): $Stream<string>;
        memberCount(): number;
        sendToAllMembers(arg0: $ClientboundPacketPayload): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get name(): $Component;
        get provider(): $ITeam$Provider;
        get none(): boolean;
    }
    export interface $ITeam$ProviderType extends RegistryMarked<RegistryTypes.PetrolparkTeamProviderTypeTag, RegistryTypes.PetrolparkTeamProviderType> {}
}
