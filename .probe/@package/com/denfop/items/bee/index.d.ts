import { $CreativeModeTab_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemStackInventory, $IProperties, $IItemStackInventory, $ItemMain } from "@package/com/denfop/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelPollution } from "@package/com/denfop/api/pollution/component";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ContainerMenuBeeAnalyzer } from "@package/com/denfop/containermenu";
import { $Bee } from "@package/com/denfop/api/bee";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Genome } from "@package/com/denfop/api/bee/genetics";
import { $EnumLevelRadiation } from "@package/com/denfop/api/pollution/radiation";
import { $ContainerItem } from "@package/com/denfop/datacomponent";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";
import { $IItemTab } from "@package/com/denfop/tabs";

declare module "@package/com/denfop/items/bee" {
    export class $ItemJarBees$Types extends $Enum<$ItemJarBees$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemJarBees$Types[];
        static valueOf(arg0: string): $ItemJarBees$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemJarBees$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static bees: $ItemJarBees$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemJarBees$Types}.
     */
    export type $ItemJarBees$Types_ = "bees";
    export class $ItemBeeAnalyzer extends $Item implements $IItemStackInventory, $IItemTab {
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
    export class $ItemJarBees<T extends $Enum<T>> extends $ItemMain<T> implements $IProperties {
        properties(): string[];
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getBeeStack(arg0: number): $ItemStack;
        getStackFromId(arg0: number): $ItemStack;
        static getBee(arg0: $ItemStack_): $Bee;
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
    export class $ItemStackBeeAnalyzer extends $ItemStackInventory {
        reset(): void;
        set(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuBeeAnalyzer;
        weatherGenome: number;
        swarmGenome: number;
        nightGenome: boolean;
        radiationPollution: $EnumLevelRadiation;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerStack: $ItemStack;
        sunGenome: boolean;
        containerId: number;
        foodGenome: number;
        player: $Player;
        birthRateGenome: number;
        productGenome: number;
        airPollution: $LevelPollution;
        pestGenome: number;
        inventorySize: number;
        itemStack1: $ItemStack;
        radiusGenome: number;
        populationGenome: number;
        soilPollution: $LevelPollution;
        genome: $Genome;
        jellyGenome: number;
        genomeResistance: number;
        hardeningGenome: number;
        cleared: boolean;
        crop: $Bee;
        mortalityGenome: number;
        genomeAdaptive: number;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: number);
    }
}
