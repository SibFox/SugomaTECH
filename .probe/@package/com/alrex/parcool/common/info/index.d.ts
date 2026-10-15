import { $LocalStamina } from "@package/com/alrex/parcool/common/attachment/client";
import { $StaminaType } from "@package/com/alrex/parcool/common/stamina";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Action } from "@package/com/alrex/parcool/common/action";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ParCoolConfig$Server$Integers_, $ParCoolConfig$Client$Doubles_, $ParCoolConfig$Client$Integers_, $ParCoolConfig$Client$Booleans_, $ParCoolConfig$Server$Doubles_, $ParCoolConfig$Server$Booleans_ } from "@package/com/alrex/parcool/config";
import { $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/alrex/parcool/common/info" {
    export class $ServerLimitation {
        static get(arg0: $ServerPlayer): $ServerLimitation;
        get(arg0: $ParCoolConfig$Server$Integers_): number;
        get(arg0: $ParCoolConfig$Server$Booleans_): boolean;
        get(arg0: $ParCoolConfig$Server$Doubles_): number;
        writeTo(arg0: $ByteBuf): void;
        static readFrom(arg0: $ByteBuf): $ServerLimitation;
        isSynced(): boolean;
        isPermitted(arg0: $Class<$Action>): boolean;
        getStaminaConsumptionOf(arg0: $Class<$Action>): number;
        getForcedStamina(): $StaminaType;
        static UNSYNCED_INSTANCE: $ServerLimitation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLimitation>;
        constructor();
        get synced(): boolean;
        get forcedStamina(): $StaminaType;
    }
    export class $ActionInfo {
        setClientSetting(arg0: $ClientSetting): void;
        can(arg0: $Class<$Action>): boolean;
        updateStaminaType(arg0: $LocalStamina, arg1: $LocalPlayer): void;
        isStaminaInfinite(arg0: $LocalStamina, arg1: $LocalPlayer): boolean;
        getMaxStaminaLimit(): number;
        getStaminaRecoveryLimit(): number;
        getServerLimitation(): $ServerLimitation;
        getStaminaConsumptionOf(arg0: $Class<$Action>): number;
        setServerLimitation(arg0: $ServerLimitation): void;
        getClientSetting(): $ClientSetting;
        getStaminaType(): $StaminaType;
        isInfiniteStaminaPermitted(): boolean;
        constructor();
        get maxStaminaLimit(): number;
        get staminaRecoveryLimit(): number;
        get staminaType(): $StaminaType;
        get infiniteStaminaPermitted(): boolean;
    }
    export class $ClientSetting {
        get(arg0: $ParCoolConfig$Client$Integers_): number;
        get(arg0: $ParCoolConfig$Client$Booleans_): boolean;
        get(arg0: $ParCoolConfig$Client$Doubles_): number;
        getPossibilityOf(arg0: $Class<$Action>): boolean;
        writeTo(arg0: $ByteBuf): void;
        static readFrom(arg0: $ByteBuf): $ClientSetting;
        static readFromLocalConfig(): $ClientSetting;
        getStaminaConsumptionOf(arg0: $Class<$Action>): number;
        getRequestedStamina(): $StaminaType;
        static UNSYNCED_INSTANCE: $ClientSetting;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientSetting>;
        constructor();
        get requestedStamina(): $StaminaType;
    }
}
