import { $Codec } from "@package/com/mojang/serialization";
import { $CreativeModeTab_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $UpgradeItem } from "@package/com/denfop/api/item/upgrade";
import { $IUpdatableItemStackEvent, $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $EnumInfoUpgradeModules, $ItemStackInventory, $IProperties, $IItemStackInventory } from "@package/com/denfop/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $EnergyItem } from "@package/com/denfop/api/item/energy";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ContainerMenuLeadBox, $ContainerMenuBags } from "@package/com/denfop/containermenu";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerAdditionalItem, $ContainerItem } from "@package/com/denfop/datacomponent";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $IItemTab } from "@package/com/denfop/tabs";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/denfop/items/bags" {
    export class $ItemLeadBox extends $Item implements $IItemStackInventory, $IItemTab {
        insert(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): void;
        save(arg0: $ItemStack_, arg1: $Player): void;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        canInsert(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        getInventory(arg0: $Player, arg1: $ItemStack_): $CustomWorldContainer;
        getItemCategory(): $CreativeModeTab;
        allowedIn(arg0: $CreativeModeTab_): boolean;
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
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemStackBags extends $ItemStackInventory {
        save(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuBags;
        putWithoutSave(arg0: number, arg1: $ItemStack_): void;
        addWithoutSave(arg0: $ItemStack_): boolean;
        containerStack: $ItemStack;
        containerAdditionItem: $ContainerAdditionalItem;
        list: $List<$ItemStack>;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        itemStack1: $ItemStack;
        inventorySize: number;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: number);
    }
    export class $ItemEnergyBags extends $Item implements $IItemStackInventory, $IProperties, $IUpdatableItemStackEvent, $IItemTab, $UpgradeItem, $EnergyItem {
        insert(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): void;
        properties(): string[];
        save(arg0: $ItemStack_, arg1: $Player): void;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        canInsert(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        getInventory(arg0: $Player, arg1: $ItemStack_): $CustomWorldContainer;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        updateField(arg0: string, arg1: $CustomPacketBuffer, arg2: $ItemStack_): void;
        getItemCategory(): $CreativeModeTab;
        updateEvent(arg0: number, arg1: $ItemStack_): void;
        insertWithoutSave(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number, arg2: number);
        get itemCategory(): $CreativeModeTab;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $BagsDescription {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getCount(): number;
        addCount(arg0: number): void;
        getStack(): $ItemStack;
        getDisplayStack(): $ItemStack;
        getDisplayCountText(): string;
        static CODEC: $Codec<$BagsDescription>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BagsDescription>;
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: $ItemStack_, arg1: number);
        constructor(arg0: $ItemStack_);
        get count(): number;
        get stack(): $ItemStack;
        get displayStack(): $ItemStack;
        get displayCountText(): string;
    }
    export class $ItemStackLeadBox extends $ItemStackInventory {
        getGuiContainer(arg0: $Player): $ContainerMenuLeadBox;
        containerStack: $ItemStack;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        itemStack1: $ItemStack;
        inventorySize: number;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: number);
    }
}
