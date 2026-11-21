import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $EnumTypeUpgrade, $EnumTypeUpgrade_ } from "@package/com/denfop/api/space/rovers/enums";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/denfop/api/space/upgrades/info" {
    export class $SpaceUpgradeItemInform {
        getName(): string;
        matched(arg0: $EnumTypeUpgrade_): boolean;
        getInformation(arg0: $EnumTypeUpgrade_): number;
        number: number;
        static CODEC: $Codec<$SpaceUpgradeItemInform>;
        upgrade: $EnumTypeUpgrade;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SpaceUpgradeItemInform>;
        constructor(arg0: $EnumTypeUpgrade_, arg1: number);
        get name(): string;
    }
}
