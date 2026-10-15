import { $Level } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IUpdatableItemStackEvent, $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $ItemStackInventory, $BaseEnergyItem, $IItemStackInventory } from "@package/com/denfop/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $List_ } from "@package/java/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerItem } from "@package/com/denfop/datacomponent";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";

declare module "@package/com/denfop/items/relocator" {
    export class $RelocatorNetwork {
        static init(): void;
        addPoint(arg0: $Player, arg1: $Point): void;
        onUnload(): void;
        getPoints(arg0: $Player): $List<$Point>;
        removePoint(arg0: $Player, arg1: $Point): void;
        teleportPlayer(arg0: $Player, arg1: $Point): void;
        getWorldDataPoints(): $Map<$ResourceKey<$Level>, $Map<$UUID, $List<$Point>>>;
        addPoints(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $List_<$Point>): void;
        addPoints(arg0: $Player, arg1: $List_<$Point>): void;
        static instance: $RelocatorNetwork;
        constructor();
        get worldDataPoints(): $Map<$ResourceKey<$Level>, $Map<$UUID, $List<$Point>>>;
    }
    export class $ItemRelocator extends $BaseEnergyItem implements $IItemStackInventory, $IUpdatableItemStackEvent {
        save(arg0: $ItemStack_, arg1: $Player): void;
        getInventory(arg0: $Player, arg1: $ItemStack_): $CustomWorldContainer;
        updateField(arg0: string, arg1: $CustomPacketBuffer, arg2: $ItemStack_): void;
        updateEvent(arg0: number, arg1: $ItemStack_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $Point {
        getName(): string;
        getPos(): $BlockPos;
        writeToNBT(arg0: $CompoundTag_): $CompoundTag;
        writeToBuffer(arg0: $CustomPacketBuffer): void;
        constructor(arg0: string, arg1: $BlockPos_);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $CustomPacketBuffer);
        get name(): string;
        get pos(): $BlockPos;
    }
    export class $ItemStackRelocator extends $ItemStackInventory {
        containerStack: $ItemStack;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        itemStack1: $ItemStack;
        inventorySize: number;
        points: $List<$Point>;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_);
    }
}
