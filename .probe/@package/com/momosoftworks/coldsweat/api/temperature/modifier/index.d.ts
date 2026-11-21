import { $Function, $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Temperature$Trait_ } from "@package/com/momosoftworks/coldsweat/api/util";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";

declare module "@package/com/momosoftworks/coldsweat/api/temperature/modifier" {
    export class $TempModifier {
        update(arg0: number, arg1: $LivingEntity, arg2: $Temperature$Trait_): number;
        apply(arg0: $Temperature$Trait_, arg1: number): number;
        getFunction(arg0: $Temperature$Trait_): $Function<number, number>;
        getID(): $ResourceLocation;
        expires<T extends $TempModifier>(arg0: number): T;
        isDirty(): boolean;
        tick(arg0: $LivingEntity): void;
        getTickRate(): number;
        getTicksExisted(): number;
        onAdded(arg0: $LivingEntity, arg1: $Temperature$Trait_): void;
        onRemoved(arg0: $LivingEntity, arg1: $Temperature$Trait_): void;
        getExpireTime(): number;
        onSiblingAdded(arg0: $LivingEntity, arg1: $Temperature$Trait_, arg2: $TempModifier): void;
        onSiblingRemoved(arg0: $LivingEntity, arg1: $Temperature$Trait_, arg2: $TempModifier): void;
        setNBT(arg0: $CompoundTag_): void;
        tickRate<T extends $TempModifier>(arg0: number): T;
        getLastOutput(arg0: $Temperature$Trait_): number;
        getNBT(): $CompoundTag;
        markDirty(): void;
        markClean(): void;
        getLastInput(arg0: $Temperature$Trait_): number;
        setTicksExisted(arg0: number): number;
        static CODEC: $Codec<$TempModifier>;
        constructor();
        get ID(): $ResourceLocation;
        get dirty(): boolean;
        get expireTime(): number;
    }
    export class $TempModifier$Factory extends $Record implements $Supplier<$TempModifier> {
        get(): $TempModifier;
        type(): $ResourceLocation;
        expireTime(): number;
        nbt(): $CompoundTag;
        tickRate(): number;
        static CODEC: $Codec<$TempModifier$Factory>;
        constructor(type: $ResourceLocation_, nbt: $CompoundTag_, expireTime: number, tickRate: number);
    }
    /**
     * Values that may be interpreted as {@link $TempModifier$Factory}.
     */
    export type $TempModifier$Factory_ = { nbt?: $CompoundTag_, type?: $ResourceLocation_, expireTime?: number, tickRate?: number,  } | [nbt?: $CompoundTag_, type?: $ResourceLocation_, expireTime?: number, tickRate?: number, ];
}
