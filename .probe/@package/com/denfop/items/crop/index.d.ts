import { $CreativeModeTab_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemStackInventory, $IProperties, $IItemStackInventory, $ItemMain } from "@package/com/denfop/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ContainerMenuAgriculturalAnalyzer } from "@package/com/denfop/containermenu";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerItem } from "@package/com/denfop/datacomponent";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";
import { $Genome } from "@package/com/denfop/api/crop/genetics";
import { $ICrop, $ICropItem } from "@package/com/denfop/api/crop";
import { $IItemTab } from "@package/com/denfop/tabs";

declare module "@package/com/denfop/items/crop" {
    export class $ItemAgriculturalAnalyzer extends $Item implements $IItemStackInventory, $IItemTab {
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
    export class $ItemCrops<T extends $Enum<T>> extends $ItemMain<T> implements $ICropItem, $IProperties {
        properties(): string[];
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getCrop(arg0: number): $ItemStack;
        getCrop(arg0: number, arg1: $ItemStack_): $ICrop;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
    }
    export class $ItemStackAgriculturalAnalyzer extends $ItemStackInventory {
        getGuiContainer(arg0: $Player): $ContainerMenuAgriculturalAnalyzer;
        containerStack: $ItemStack;
        genome: $Genome;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        itemStack1: $ItemStack;
        crop: $ICrop;
        inventorySize: number;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: number);
    }
    export class $ItemCrops$Types extends $Enum<$ItemCrops$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemCrops$Types[];
        static valueOf(arg0: string): $ItemCrops$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemCrops$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static crop: $ItemCrops$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemCrops$Types}.
     */
    export type $ItemCrops$Types_ = "crop";
}
