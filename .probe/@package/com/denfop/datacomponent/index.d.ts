import { $DeferredHolder, $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $CapturedMobUtils } from "@package/com/denfop/utils";
import { $EnumBeerVariety, $EnumWaterVariety, $EnumBeerVariety_, $EnumTimeVariety_, $EnumTimeVariety, $EnumWaterVariety_ } from "@package/com/denfop/api/brewage";
import { $RotorUpgradeItemInform as $RotorUpgradeItemInform$1 } from "@package/com/denfop/api/windsystem/upgrade";
import { $RotorUpgradeItemInform } from "@package/com/denfop/api/water/upgrade";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Bee } from "@package/com/denfop/blockentity/bee";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $UpgradeItemInform, $UpgradeModificator } from "@package/com/denfop/api/item/upgrade";
import { $BagsDescription } from "@package/com/denfop/items/bags";
import { $SimpleFluidContent, $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";
import { $SpaceUpgradeItemInform } from "@package/com/denfop/api/space/upgrades/info";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnumGenetic_ as $EnumGenetic_$1, $GeneticTraits, $EnumGenetic as $EnumGenetic$1, $GeneticTraits_ } from "@package/com/denfop/api/bee/genetics";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $GeneticTraits_ as $GeneticTraits_$1, $EnumGenetic, $GeneticTraits as $GeneticTraits$1, $EnumGenetic_ } from "@package/com/denfop/api/crop/genetics";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/denfop/datacomponent" {
    export class $UpgradeItem extends $Record {
        copy(): $UpgradeItem;
        amount(): number;
        updateAmount(arg0: $ItemStack_, arg1: number): $UpgradeItem;
        blackList(): $List<string>;
        upgradeModificators(): $List<$UpgradeModificator>;
        updateModificator(arg0: $ItemStack_, arg1: $List_<$UpgradeModificator>): $UpgradeItem;
        updateCanUpgrade(arg0: $ItemStack_, arg1: boolean): $UpgradeItem;
        updateBlackList(arg0: $ItemStack_, arg1: $List_<string>): $UpgradeItem;
        updateListUpgrades(arg0: $ItemStack_, arg1: $List_<number>): $UpgradeItem;
        updateUpgrades(arg0: $ItemStack_, arg1: $List_<$UpgradeItemInform>): $UpgradeItem;
        updateRegistry(arg0: $ItemStack_, arg1: boolean): $UpgradeItem;
        listUpgrades(): $List<number>;
        upgradeItemInforms(): $List<$UpgradeItemInform>;
        canupgrade(): boolean;
        isRegistry(): boolean;
        static CODEC: $Codec<$UpgradeItem>;
        static EMPTY: $UpgradeItem;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $UpgradeItem>;
        constructor(upgradeItemInforms: $List_<$UpgradeItemInform>, isRegistry: boolean, upgradeModificators: $List_<$UpgradeModificator>, amount: number, listUpgrades: $List_<number>, blackList: $List_<string>, canupgrade: boolean);
        get registry(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeItem}.
     */
    export type $UpgradeItem_ = { amount?: number, isRegistry?: boolean, listUpgrades?: $List_<number>, upgradeModificators?: $List_<$UpgradeModificator>, canupgrade?: boolean, blackList?: $List_<string>, upgradeItemInforms?: $List_<$UpgradeItemInform>,  } | [amount?: number, isRegistry?: boolean, listUpgrades?: $List_<number>, upgradeModificators?: $List_<$UpgradeModificator>, canupgrade?: boolean, blackList?: $List_<string>, upgradeItemInforms?: $List_<$UpgradeItemInform>, ];
    export class $GenomeCrop extends $Record {
        isEmpty(): boolean;
        geneticTraitsMap(): $Map<$EnumGenetic, $GeneticTraits$1>;
        static CODEC: $Codec<$GenomeCrop>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GenomeCrop>;
        constructor(geneticTraitsMap: $Map_<$EnumGenetic_, $GeneticTraits_$1>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GenomeCrop}.
     */
    export type $GenomeCrop_ = { geneticTraitsMap?: $Map_<$EnumGenetic_, $GeneticTraits_$1>,  } | [geneticTraitsMap?: $Map_<$EnumGenetic_, $GeneticTraits_$1>, ];
    export class $UpgradeRover extends $Record {
        copy(): $UpgradeRover;
        amount(): number;
        updateAmount(arg0: $ItemStack_, arg1: number): $UpgradeRover;
        updateCanUpgrade(arg0: $ItemStack_, arg1: boolean): $UpgradeRover;
        updateUpgrades(arg0: $ItemStack_, arg1: $List_<$SpaceUpgradeItemInform>): $UpgradeRover;
        updateRegistry(arg0: $ItemStack_, arg1: boolean): $UpgradeRover;
        upgradeItemInforms(): $List<$SpaceUpgradeItemInform>;
        canupgrade(): boolean;
        isRegistry(): boolean;
        static CODEC: $Codec<$UpgradeRover>;
        static EMPTY: $UpgradeRover;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $UpgradeRover>;
        constructor(upgradeItemInforms: $List_<$SpaceUpgradeItemInform>, isRegistry: boolean, amount: number, canupgrade: boolean);
        get registry(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeRover}.
     */
    export type $UpgradeRover_ = { amount?: number, upgradeItemInforms?: $List_<$SpaceUpgradeItemInform>, canupgrade?: boolean, isRegistry?: boolean,  } | [amount?: number, upgradeItemInforms?: $List_<$SpaceUpgradeItemInform>, canupgrade?: boolean, isRegistry?: boolean, ];
    export class $ComponentEquality {
        static sameFluidStackList(arg0: $List_<$FluidStack_>, arg1: $List_<$FluidStack_>): boolean;
        static fluidStackListHash(arg0: $List_<$FluidStack_>): number;
        static itemStackHash(arg0: $ItemStack_): number;
        static sameItemStackList(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>): boolean;
        static itemStackListHash(arg0: $List_<$ItemStack_>): number;
        static sameFluidStack(arg0: $FluidStack_, arg1: $FluidStack_): boolean;
        static sameItemStack(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static fluidStackHash(arg0: $FluidStack_): number;
    }
    export class $VeinInfo extends $Record {
        type(): string;
        x(): number;
        z(): number;
        static CODEC: $Codec<$VeinInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VeinInfo>;
        constructor(type: string, x: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $VeinInfo}.
     */
    export type $VeinInfo_ = { x?: number, type?: string, z?: number,  } | [x?: number, type?: string, z?: number, ];
    export class $WirelessConnection extends $Record {
        x(): number;
        z(): number;
        y(): number;
        change(): boolean;
        world(): $ResourceLocation;
        tier(): number;
        updateChange(arg0: $ItemStack_, arg1: boolean): $WirelessConnection;
        static CODEC: $Codec<$WirelessConnection>;
        static EMPTY: $WirelessConnection;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WirelessConnection>;
        constructor(world: $ResourceLocation_, tier: number, x: number, y: number, z: number, change: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WirelessConnection}.
     */
    export type $WirelessConnection_ = { x?: number, y?: number, z?: number, change?: boolean, world?: $ResourceLocation_, tier?: number,  } | [x?: number, y?: number, z?: number, change?: boolean, world?: $ResourceLocation_, tier?: number, ];
    export class $GenomeBee extends $Record {
        isEmpty(): boolean;
        geneticTraitsMap(): $Map<$EnumGenetic$1, $GeneticTraits>;
        static CODEC: $Codec<$GenomeBee>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GenomeBee>;
        constructor(geneticTraitsMap: $Map_<$EnumGenetic_$1, $GeneticTraits_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GenomeBee}.
     */
    export type $GenomeBee_ = { geneticTraitsMap?: $Map_<$EnumGenetic_$1, $GeneticTraits_>,  } | [geneticTraitsMap?: $Map_<$EnumGenetic_$1, $GeneticTraits_>, ];
    export class $ContainerAdditionalItem extends $Record {
        updateItems(arg0: $ItemStack_, arg1: $List_<$ItemStack_>): $ContainerAdditionalItem;
        listItem(): $List<$ItemStack>;
        static CODEC: $Codec<$ContainerAdditionalItem>;
        static EMPTY: $ContainerAdditionalItem;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ContainerAdditionalItem>;
        static CUSTOM_ITEMSTACK_CODEC: $Codec<$ItemStack>;
        constructor(listItem: $List_<$ItemStack_>);
    }
    /**
     * Values that may be interpreted as {@link $ContainerAdditionalItem}.
     */
    export type $ContainerAdditionalItem_ = { listItem?: $List_<$ItemStack_>,  } | [listItem?: $List_<$ItemStack_>, ];
    export class $StorageCellData extends $Record {
        normalize(arg0: number): $StorageCellData;
        static createEmpty(arg0: number): $StorageCellData;
        storage(): number;
        fluids(): $List<$FluidStack>;
        updateAll(arg0: $ItemStack_, arg1: number, arg2: $List_<$FluidStack_>, arg3: $List_<number>): $StorageCellData;
        updateFluids(arg0: $ItemStack_, arg1: $List_<$FluidStack_>): $StorageCellData;
        updateStacksForCraft(arg0: $ItemStack_, arg1: $List_<number>): $StorageCellData;
        stacksForCraft(): $List<number>;
        updateStorage(arg0: $ItemStack_, arg1: number): $StorageCellData;
        static CUSTOM_FLUID_CODEC: $Codec<$FluidStack>;
        static CODEC: $Codec<$StorageCellData>;
        static CUSTOM_FLUID_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        static EMPTY: $StorageCellData;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StorageCellData>;
        constructor(storage: number, fluids: $List_<$FluidStack_>, stacksForCraft: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $StorageCellData}.
     */
    export type $StorageCellData_ = { fluids?: $List_<$FluidStack_>, storage?: number, stacksForCraft?: $List_<number>,  } | [fluids?: $List_<$FluidStack_>, storage?: number, stacksForCraft?: $List_<number>, ];
    export class $ContainerItem extends $Record {
        open(): boolean;
        uid(): number;
        static getContainer(arg0: $ItemStack_): $ContainerItem;
        updateSlot(arg0: $ItemStack_, arg1: number): $ContainerItem;
        slot_inventory(): number;
        updateItems(arg0: $ItemStack_, arg1: $List_<$ItemStack_>): $ContainerItem;
        updateOpen(arg0: $ItemStack_, arg1: boolean): $ContainerItem;
        listItem(): $List<$ItemStack>;
        updateUUID(arg0: $ItemStack_, arg1: number): $ContainerItem;
        static CODEC: $Codec<$ContainerItem>;
        static OVERSTACK_ITEM_CODEC: $Codec<$ItemStack>;
        static EMPTY: $ContainerItem;
        static CUSTOM_ITEMSTACK_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ContainerItem>;
        static CUSTOM_ITEMSTACK_CODEC: $Codec<$ItemStack>;
        constructor(open: boolean, slot_inventory: number, listItem: $List_<$ItemStack_>, uid: number);
    }
    /**
     * Values that may be interpreted as {@link $ContainerItem}.
     */
    export type $ContainerItem_ = { uid?: number, listItem?: $List_<$ItemStack_>, open?: boolean, slot_inventory?: number,  } | [uid?: number, listItem?: $List_<$ItemStack_>, open?: boolean, slot_inventory?: number, ];
    export class $BeerInfo extends $Record {
        timeVariety(): $EnumTimeVariety;
        waterVariety(): $EnumWaterVariety;
        beerVariety(): $EnumBeerVariety;
        amount(): number;
        updateAmount(arg0: $ItemStack_): $BeerInfo;
        static CODEC: $Codec<$BeerInfo>;
        static DEFAULT: $BeerInfo;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BeerInfo>;
        constructor(waterVariety: $EnumWaterVariety_, timeVariety: $EnumTimeVariety_, beerVariety: $EnumBeerVariety_, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $BeerInfo}.
     */
    export type $BeerInfo_ = { amount?: number, beerVariety?: $EnumBeerVariety_, waterVariety?: $EnumWaterVariety_, timeVariety?: $EnumTimeVariety_,  } | [amount?: number, beerVariety?: $EnumBeerVariety_, waterVariety?: $EnumWaterVariety_, timeVariety?: $EnumTimeVariety_, ];
    export class $DataComponentsInit {
        static init(arg0: $DeferredRegister<$DataComponentType_<never>>): void;
        static JETPACK: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        static FOOD_RADIATION_DOSE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static UPGRADE_KIT: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$UpgradeKit>>;
        static RADIATION_ENERGY: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static MODE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static CROP: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static SOLARIUM_ENERGY: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static LIST_STRING: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<string>>>;
        static VERTICAL: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        static WIRELESS: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$WirelessConnection>>;
        static REACTOR_DATA: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$ReactorData>>;
        static INT_TUPLE_CODEC: $Codec<$Tuple<number, number>>;
        static BOOKMARK: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<$Tuple<number, number>>>>;
        static STORAGE_CELL: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$StorageCellData>>;
        static PATTERN_DATA: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$CompoundTag>>;
        static STORAGE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static ENERGY: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static LEVEL: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static NAME: $DeferredHolder<$DataComponentType<never>, $DataComponentType<string>>;
        static BEER: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$BeerInfo>>;
        static GENOME_CROP: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$GenomeCrop>>;
        static LIST_STACK: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<$ItemStack>>>;
        static DATA: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$CompoundTag>>;
        static LIST_INTEGER: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<number>>>;
        static VEIN_INFO: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$VeinInfo>>;
        static TELEPORT: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$BlockPos>>;
        static EXPERIENCE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static NIGHT_VISION: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        static LEVEL_MICROCHIP: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static WATER_UPGRADE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<$RotorUpgradeItemInform>>>;
        static ORE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static TYPE_RECIPE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        static ACTIVE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        static DESCRIPTIONS_CONTAINER: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<$BagsDescription>>>;
        static INT_ARRAY: $StreamCodec<$ByteBuf, $List<number>>;
        static LIST_TUPLE_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Tuple<number, number>>>;
        static GENOME_BEE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$GenomeBee>>;
        static FLY: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        static QUANTUM_ENERGY: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static FLUID: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$SimpleFluidContent>>;
        static PATTERN: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$ItemStack>>;
        static UPGRADE_ROVER: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$UpgradeRover>>;
        static SKIN: $DeferredHolder<$DataComponentType<never>, $DataComponentType<string>>;
        static SAVE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        static UPGRADE_ITEM: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$UpgradeItem>>;
        static MOB: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$CapturedMobUtils>>;
        static SWARM: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static BEE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static BEE_LIST: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<$Bee>>>;
        static EXPERIENCE_ENERGY: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static DIRECTION: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static BOOK_ZOOM: $DeferredHolder<$DataComponentType<never>, $DataComponentType<number>>;
        static UUID_STRING: $DeferredHolder<$DataComponentType<never>, $DataComponentType<string>>;
        static CONTAINER_ADDITIONAL: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$ContainerAdditionalItem>>;
        static INT_TUPLE_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Tuple<number, number>>;
        static WIND_UPGRADE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$List<$RotorUpgradeItemInform$1>>>;
        static CONTAINER: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$ContainerItem>>;
        static REACTOR_SCHEDULE: $DeferredHolder<$DataComponentType<never>, $DataComponentType<$ReactorSchedule>>;
        static BLACK_LIST: $DeferredHolder<$DataComponentType<never>, $DataComponentType<boolean>>;
        constructor();
    }
    export class $UpgradeKit extends $Record {
        input(): $ItemStack;
        output(): $ItemStack;
        static CODEC: $Codec<$UpgradeKit>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $UpgradeKit>;
        constructor(input: $ItemStack_, output: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $UpgradeKit}.
     */
    export type $UpgradeKit_ = { output?: $ItemStack_, input?: $ItemStack_,  } | [output?: $ItemStack_, input?: $ItemStack_, ];
    export class $ReactorSchedule extends $Record {
        name(): string;
        type(): number;
        level(): number;
        items(): $List<$ItemStack>;
        generation(): number;
        rad(): number;
        gridLayout(): $List<number>;
        static CODEC: $Codec<$ReactorSchedule>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ReactorSchedule>;
        constructor(type: number, level: number, name: string, generation: number, rad: number, items: $List_<$ItemStack_>, gridLayout: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $ReactorSchedule}.
     */
    export type $ReactorSchedule_ = { name?: string, rad?: number, generation?: number, type?: number, items?: $List_<$ItemStack_>, gridLayout?: $List_<number>, level?: number,  } | [name?: string, rad?: number, generation?: number, type?: number, items?: $List_<$ItemStack_>, gridLayout?: $List_<number>, level?: number, ];
    export class $ReactorData extends $Record {
        name(): string;
        pos(): $BlockPos;
        static CODEC: $Codec<$ReactorData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ReactorData>;
        constructor(pos: $BlockPos_, name: string);
    }
    /**
     * Values that may be interpreted as {@link $ReactorData}.
     */
    export type $ReactorData_ = { pos?: $BlockPos_, name?: string,  } | [pos?: $BlockPos_, name?: string, ];
}
