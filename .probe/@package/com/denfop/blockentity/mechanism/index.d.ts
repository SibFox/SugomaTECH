import { $IResearchTable, $IRocketLaunchPad } from "@package/com/denfop/api/space/research/api";
import { $DataBlockEntity } from "@package/com/denfop/dataregistry";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $InventoryPrivatizer, $InventoryRotorWater, $InventoryScannable, $InventoryDischarge, $InventoryFluid, $InventoryTuner, $InventoryUpgrade as $InventoryUpgrade$1, $Inventory, $InventoryModule, $InventoryWaterUpgrade, $InventoryFluidByList, $InventoryAutoCrafter, $InventoryTank, $InventoryCharge, $InventoryElectrolyzer } from "@package/com/denfop/inventory";
import { $FluidStack, $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $RenderLevelStageEvent } from "@package/net/neoforged/neoforge/client/event";
import { $EnumLevels, $EnumLevels_, $IBody } from "@package/com/denfop/api/space";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $IRoversItem } from "@package/com/denfop/api/space/rovers/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $EnumTypeAudio_, $AudioFixer, $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $IInputItemStack } from "@package/com/denfop/recipe";
import { $Item, $DyeColor, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityCombinedPump, $EnumTypePump } from "@package/com/denfop/blockentity/mechanism/combpump";
import { $BlockEntityBaseGenerationMicrochip, $BlockEntityBaseWitherMaker, $BlockEntityBaseHandlerHeavyOre, $BlockEntityDoubleElectricMachine, $BlockEntityMultiMatter, $IManufacturerBlock, $BlockEntityBasePlasticPlateCreator, $BlockEntityElectricLiquidTankInventory, $BlockEntityElectricMachine, $BlockEntityBasePlasticCreator, $BlockEntityScanner$State, $BlockEntityInventory, $BlockEntityBase, $IMatter, $BlockEntityScanner } from "@package/com/denfop/blockentity/base";
import { $InfoSends } from "@package/com/denfop/api/space/colonies";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $BaseRecipe } from "@package/com/denfop/api/crafting";
import { $InventoryRotor } from "@package/com/denfop/api/windsystem/upgrade";
import { $DataFluid } from "@package/com/denfop/render/tank";
import { $DataRocket } from "@package/com/denfop/render/rocketpad";
import { $SpaceOperation, $IFakeBody, $Data } from "@package/com/denfop/api/space/fakebody";
import { $IHasRecipe, $BaseMachineRecipe, $InventoryOutput, $MachineRecipe, $FluidHandlerRecipe, $IPatternStorage, $RecipeInfo, $IUpdateTick, $InventoryRecipes } from "@package/com/denfop/api/recipe";
import { $LootPoolSingletonContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $ChunkLevel } from "@package/com/denfop/api/pollution/component";
import { $Map, $List, $List_, $Set, $UUID } from "@package/java/util";
import { $Function } from "@package/java/util/function";
import { $BlockEntityMultiBlockBase } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Genome as $Genome$1 } from "@package/com/denfop/api/bee/genetics";
import { $Enum, $Object } from "@package/java/lang";
import { $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $IAdvReactor } from "@package/com/denfop/api/reactors";
import { $ChunkPos, $ItemLike, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $IColony } from "@package/com/denfop/api/space/colonies/api";
import { $VeinBase } from "@package/com/denfop/api/vein/common";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ComponentProgress, $ComponentSteamEnergy, $ComponentTimer, $ComponentUpgradeSlots, $AbstractComponent, $CoolComponent, $ComponentBaseEnergy, $AirPollutionComponent, $Fluids, $SoilPollutionComponent, $EnumTypeStyle, $ComponentUpgrade, $ComponentBioFuelEnergy, $Fluids$InternalFluidTank, $ComponentProcess, $Energy, $HeatComponent } from "@package/com/denfop/componets";
import { $IType } from "@package/com/denfop/api/widget";
import { $IUpgradableBlock, $UpgradableProperty } from "@package/com/denfop/api/upgrades";
import { $ContainerMenuModuleMachine, $ContainerMenuProgrammingTable, $ContainerMenuNightTransformer, $ContainerMenuAdvOilRefiner, $ContainerMenuElectricRefractoryFurnace, $ContainerMenuGeneticReplicator, $ContainerMenuInsulator, $ContainerMenuFieldCleaner, $ContainerMenuSatelliteAssembler, $ContainerMenuImpAlloySmelter, $ContainerMenuRotorUpgrade, $ContainerMenuImpOilRefiner, $ContainerMenuAmpereStorage, $ContainerMenuRoverAssembler, $ContainerMenuSolidFluidIntegrator, $ContainerMenuResearchTableSpace, $ContainerMenuElectronicsAssembler, $ContainerMenuBaseWitherMaker, $ContainerMenuGenStone, $ContainerMenuReplicator, $ContainerMenuMatterFactory, $ContainerMenuWeeder, $ContainerMenuItemDivider, $ContainerMenuSolderingMechanism, $ContainerMenuPlantGardener, $ContainerMenuFluidSeparator, $ContainerMenuWirelessOilPump, $ContainerMenuEnchanterBooks, $ContainerMenuAutoOpenBox, $ContainerMenuBrewingPlant, $ContainerMenuPrivatizer, $ContainerMenuSafetyDoom, $ContainerMenuTunerRecipe, $ContainerMenuMachineCharger, $ContainerMenuNuclearWasteRecycler, $ContainerMenuRadioactiveOreHandler, $ContainerMenuCrystalCharger, $ContainerMenuRodManufacturer, $ContainerMenuPump, $ContainerMenuSteamGenerator, $ContainerMenuFacadeBlock, $ContainerMenuAmpereGenerator, $ContainerMenuUpgradeMachineFactory, $ContainerMenuWireInsulator, $ContainerMenuSolidFluidMixer, $ContainerMenuProbeAssembler, $ContainerMenuGeneticPolymerizer, $ContainerMenuAlkalineEarthQuarry, $ContainerMenuApothecaryBee, $ContainerMenuGraphite, $ContainerMenuSaplingGardener, $ContainerMenuPlasticCreator, $ContainerMenuNightConverter, $ContainerMenuFluidIntegrator, $ContainerMenuSocket, $ContainerMenuElectricBioGenerator, $ContainerMenuOilPurifier, $ContainerMenuInoculator, $ContainerMenuCowFarm, $ContainerMenuPositronsConverter, $ContainerMenuGasPump, $ContainerMenuShield, $ContainerMenuBaseGenerationChipMachine, $ContainerMenuStamp, $ContainerMenuAnalyzerChest, $ContainerMenuSolidCoolMachine, $ContainerMenuOilRefiner, $ContainerMenuNeutronSeparator, $ContainerMenuRodFactory, $ContainerMenuIndustrialOrePurifier, $ContainerMenuMutatron, $ContainerMenuHeatFluids, $ContainerMenuItemDividerFluids, $ContainerMenuTripleSolidMixer, $ContainerMenuFluidAdapter, $ContainerMenuMagnetGenerator, $ContainerMenuLaserPolisher, $ContainerMenuSawmill, $ContainerMenuElectricElectronicsAssembler, $ContainerMenuPlasticPlateCreator, $ContainerMenuSiliconCrystalHandler, $ContainerMenuRocketLaunchPad, $ContainerMenuPlantCollector, $SlotInfo, $ContainerMenuPlantFertilizer, $ContainerMenuTunerWireless, $ContainerMenuGeneticTransposer, $ContainerMenuRotorAssembler, $ContainerMenuSoilAnalyzer, $ContainerMenuSingleFluidAdapter, $ContainerMenuTreeBreaker, $ContainerMenuGenomeExtractor, $ContainerMenuMoonSpotter, $ContainerMenuPolymerizer, $ContainerMenuFluidMixer, $ContainerMenuPerAlloySmelter, $ContainerMenuAutoCrafter, $ContainerMenuCactusFarm, $ContainerMenuPrimalProgrammingTable, $ContainerMenuRNACollector, $ContainerMenuElectricSqueezer, $ContainerMenuRocketAssembler, $ContainerMenuQuantumMiner, $ContainerMenuCentrifuge, $ContainerMenuVolcanoChest, $ContainerMenuWirelessGasPump, $ContainerMenuGasCombiner, $ContainerMenuWaterRotorAssembler, $ContainerMenuAdditionGenStone, $ContainerMenuSafe, $ContainerMenuReverseTransriptor, $ContainerMenuWaterRotorUpgrade, $ContainerMenuWirelessMineralQuarry, $ContainerMenuSolidStateElectrolyzer, $ContainerMenuGeneticStabilizer, $ContainerMenuDryer, $ContainerMenuBattery, $ContainerMenuAutoFuse, $ContainerMenuSolidMixer, $ContainerMenuRefrigerator, $ContainerMenuSheepFarm, $ContainerMenuCollectorProductBee, $ContainerMenuPigFarm, $ContainerMenuChickenFarm, $ContainerMenuWirelessControllerReactors, $ContainerMenuMagnet, $ContainerMenuIncubator, $ContainerMenuOilPump, $ContainerMenuItemManipulator, $ContainerMenuPalletGenerator } from "@package/com/denfop/containermenu";
import { $ResourceKey, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Radiation } from "@package/com/denfop/api/pollution/radiation";
import { $Genome } from "@package/com/denfop/api/crop/genetics";
import { $IWindUpgradeBlock, $InventoryUpgrade, $WindRotor } from "@package/com/denfop/api/windsystem";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as steamturbine from "@package/com/denfop/blockentity/mechanism/steamturbine";
export * as combpump from "@package/com/denfop/blockentity/mechanism/combpump";
export * as worlcollector from "@package/com/denfop/blockentity/mechanism/worlcollector";
export * as steam from "@package/com/denfop/blockentity/mechanism/steam";
export * as multimechanism from "@package/com/denfop/blockentity/mechanism/multimechanism";
export * as quarry from "@package/com/denfop/blockentity/mechanism/quarry";
export * as generator from "@package/com/denfop/blockentity/mechanism/generator";
export * as replicator from "@package/com/denfop/blockentity/mechanism/replicator";
export * as radiation_storage from "@package/com/denfop/blockentity/mechanism/radiation_storage";
export * as bio from "@package/com/denfop/blockentity/mechanism/bio";
export * as blastfurnace from "@package/com/denfop/blockentity/mechanism/blastfurnace";
export * as wind from "@package/com/denfop/blockentity/mechanism/wind";
export * as quantum_storage from "@package/com/denfop/blockentity/mechanism/quantum_storage";
export * as steamboiler from "@package/com/denfop/blockentity/mechanism/steamboiler";
export * as energy from "@package/com/denfop/blockentity/mechanism/energy";
export * as vending from "@package/com/denfop/blockentity/mechanism/vending";
export * as multiblocks from "@package/com/denfop/blockentity/mechanism/multiblocks";
export * as dual from "@package/com/denfop/blockentity/mechanism/dual";
export * as solardestiller from "@package/com/denfop/blockentity/mechanism/solardestiller";
export * as solarium_storage from "@package/com/denfop/blockentity/mechanism/solarium_storage";
export * as heat from "@package/com/denfop/blockentity/mechanism/heat";
export * as exp from "@package/com/denfop/blockentity/mechanism/exp";
export * as water from "@package/com/denfop/blockentity/mechanism/water";
export * as cooling from "@package/com/denfop/blockentity/mechanism/cooling";
export * as triple from "@package/com/denfop/blockentity/mechanism/triple";

declare module "@package/com/denfop/blockentity/mechanism" {
    export class $BlockEntityAmpereStorage extends $BlockEntityElectricMachine implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuAmpereStorage;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        pressure: $ComponentBaseEnergy;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityGeneticTransposer extends $BlockEntityElectricLiquidTankInventory implements $IHasRecipe, $IUpdateTick, $IUpgradableBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuGeneticTransposer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $InventoryOutput;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluidByList;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityChickenFarm extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuChickenFarm;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        slotSeeds: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        output: $InventoryOutput;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityRefrigeratorCoolant extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuRefrigerator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $Fluids$InternalFluidTank;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryTank;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityTunerWireless extends $BlockEntityElectricMachine implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuTunerWireless;
        blockState: $BlockState;
        inputslot: $InventoryTuner;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityBatteryFactory extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number, arg1: number, arg2: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuBattery;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPlantGardener extends $BlockEntityInventory implements $IUpgradableBlock {
        contains(arg0: $BlockPos_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuPlantGardener;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        output: $Inventory;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySheepFarm extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuSheepFarm;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        slotSeeds: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static ITEM_BY_DYE: $Map<$DyeColor, $ItemLike>;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        output: $InventoryOutput;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityBrewingPlant extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number, arg1: $ItemStack_): void;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addRecipe(arg0: string, arg1: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuBrewingPlant;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySocketFactory extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSocket;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityBaseGenStone$Mode extends $Enum<$BlockEntityBaseGenStone$Mode> {
        static values(): $BlockEntityBaseGenStone$Mode[];
        static valueOf(arg0: string): $BlockEntityBaseGenStone$Mode;
        static SAND: $BlockEntityBaseGenStone$Mode;
        static COBBLESTONE: $BlockEntityBaseGenStone$Mode;
        static GRAVEL: $BlockEntityBaseGenStone$Mode;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityBaseGenStone$Mode}.
     */
    export type $BlockEntityBaseGenStone$Mode_ = "cobblestone" | "gravel" | "sand";
    export class $BlockEntityMagnetGenerator extends $BlockEntityElectricMachine {
        getGuiContainer(arg0: $Player): $ContainerMenuMagnetGenerator;
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        timer: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
    }
    export class $BlockEntityPatternStorage extends $BlockEntityInventory implements $IUpdatableTileEvent, $IPatternStorage {
        readContents(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getPatterns(): $List<$RecipeInfo>;
        addPattern(arg0: $RecipeInfo): boolean;
        refreshInfo(): void;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $RecipeInfo;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        maxIndex: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        diskSlot: $Inventory;
        block: $BlockTileEntity<any>;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get patterns(): $List<$RecipeInfo>;
    }
    export class $BlockEntityFluidIntegrator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        static addRecipe(arg0: $IInputItemStack, arg1: $ItemStack_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuFluidIntegrator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGeneticReplicator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuGeneticReplicator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        fluidTank3: $Fluids$InternalFluidTank;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityInsulator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe, $IUpdateTick {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuInsulator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPrimalProgrammingTable extends $BlockEntityElectricMachine implements $IUpdateTick, $IHasRecipe, $IUpdatableTileEvent {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuPrimalProgrammingTable;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: number[];
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        start: boolean;
        data1: $Map<$UUID, number>;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPlantCollector extends $BlockEntityInventory implements $IUpgradableBlock {
        contains(arg0: $BlockPos_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuPlantCollector;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        output: $InventoryOutput;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySolidStateElectrolyzer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, ...arg2: $FluidStack_[]): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSolidStateElectrolyzer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        anodeslot: $InventoryElectrolyzer;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        cathodeslot: $InventoryElectrolyzer;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityTreeBreaker extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuTreeBreaker;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $InventoryOutput;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityModuleMachine extends $BlockEntityElectricMachine implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuModuleMachine;
        blockState: $BlockState;
        inputslot: $InventoryModule;
        inputslotA: $InventoryModule;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        listItems: $List<$TagKey<$Item>>;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityFluidSeparator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuFluidSeparator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        se: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        fluidTank3: $Fluids$InternalFluidTank;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySatelliteAssembler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSatelliteAssembler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityFacadeBlock extends $BlockEntityInventory implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuFacadeBlock;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        stackSlot: $Inventory;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityWirelessControllerReactors extends $BlockEntityInventory implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuWirelessControllerReactors;
        updateList(): void;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        itemStacks: $List<$ItemStack>;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        tileMultiBlockBaseList: $List<$BlockEntityMultiBlockBase>;
        invslot: $Inventory;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPerScanner extends $BlockEntityScanner {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $ItemStack;
        recipe: $BaseMachineRecipe;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        maxprogress: number;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryScannable;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        diskSlot: $Inventory;
        block: $BlockTileEntity<any>;
        state: $BlockEntityScanner$State;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityShield extends $BlockEntityInventory implements $IUpdatableTileEvent {
        getSlot(): $Inventory;
        getMode(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuShield;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        visibleShield: boolean;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        visibleLaser: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get slot(): $Inventory;
        get mode(): number;
    }
    export class $BlockEntityBaseReplicator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IType, $IUpdatableTileEvent {
        getMode(): $BlockEntityBaseReplicator$Mode;
        getStyle(): $EnumTypeStyle;
        getGuiContainer(arg0: $Player): $ContainerMenuReplicator;
        gainFluid(): void;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        refreshInfo(): void;
        getPatternStorage(): $IPatternStorage;
        setOverclockRates(): void;
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $RecipeInfo;
        uuProcessed: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        cellSlot: $InventoryOutput;
        remove: boolean;
        mode: $BlockEntityBaseReplicator$Mode;
        maxIndex: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: number, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
        get style(): $EnumTypeStyle;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get patternStorage(): $IPatternStorage;
    }
    export class $BlockEntityWirelessOilPump extends $BlockEntityInventory implements $IManufacturerBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuWirelessOilPump;
        updateList(): void;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        levelBlock: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        veinList: $List<$VeinBase>;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        invslot: $Inventory;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityFieldCleaner extends $BlockEntityInventory implements $IUpgradableBlock {
        contains(arg0: $BlockPos_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuFieldCleaner;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        tank: $Fluids$InternalFluidTank;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityChargepadExperience extends $BlockEntityInventory {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPrivatizer extends $BlockEntityElectricMachine implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuPrivatizer;
        blockState: $BlockState;
        inputslot: $InventoryPrivatizer;
        inputslotA: $InventoryPrivatizer;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        listItems: $List<string>;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRotorModifier extends $BlockEntityInventory implements $IWindUpgradeBlock, $IUpdatableTileEvent {
        getItemStack(): $ItemStack;
        getGuiContainer(arg0: $Player): $ContainerMenuRotorUpgrade;
        getRotor(): $WindRotor;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $InventoryUpgrade;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        rotor_slot: $InventoryRotor;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get itemStack(): $ItemStack;
        get rotor(): $WindRotor;
    }
    export class $BlockEntityBaseGenStone extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent {
        getOutput(): $MachineRecipe;
        getMode(): $BlockEntityBaseGenStone$Mode;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuGenStone;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(arg0: $MachineRecipe): void;
        setOverclockRates(): void;
        operateOnce(arg0: $MachineRecipe, arg1: $List_<$ItemStack_>): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        mode: $BlockEntityBaseGenStone$Mode;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $MultiBlockEntity, arg4: $BlockPos_, arg5: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityNuclearWasteRecycler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuNuclearWasteRecycler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        rad: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $EnumTypeMachines extends $Enum<$EnumTypeMachines> {
        static values(): $EnumTypeMachines[];
        static valueOf(arg0: string): $EnumTypeMachines;
        getSound(): $SoundEvent;
        setSound(arg0: $SoundEvent_): void;
        static writeSound(): void;
        static Centrifuge: $EnumTypeMachines;
        static EXTRACTOR: $EnumTypeMachines;
        static COMPRESSOR: $EnumTypeMachines;
        static OreWashing: $EnumTypeMachines;
        static CUTTING: $EnumTypeMachines;
        static ROLLING: $EnumTypeMachines;
        static COMBMACERATOR: $EnumTypeMachines;
        recipe: string;
        static ELECTRICFURNACE: $EnumTypeMachines;
        static FARMER: $EnumTypeMachines;
        static ASSAMPLERSCRAP: $EnumTypeMachines;
        static Gearing: $EnumTypeMachines;
        static COMBRECYCLER: $EnumTypeMachines;
        static MACERATOR: $EnumTypeMachines;
        meta: number;
        static RECYCLER: $EnumTypeMachines;
        static METALFOMER: $EnumTypeMachines;
        block: $DataBlockEntity<any>;
        static EXTRUDING: $EnumTypeMachines;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeMachines}.
     */
    export type $EnumTypeMachines_ = "macerator" | "extractor" | "compressor" | "electricfurnace" | "metalfomer" | "recycler" | "combrecycler" | "combmacerator" | "rolling" | "extruding" | "cutting" | "farmer" | "assamplerscrap" | "orewashing" | "centrifuge" | "gearing";
    export class $BlockEntityEnchanterBooks extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IHasRecipe, $IUpdatableTileEvent {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        addRecipe(arg0: $ItemStack_, arg1: $ResourceKey_<$Enchantment>, arg2: number, arg3: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuEnchanterBooks;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        addRecipe1(arg0: $ItemStack_, arg1: $ResourceKey_<$Enchantment>, arg2: number, arg3: number): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        enchant: $ComponentBaseEnergy;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityBioGenerator extends $BlockEntityElectricMachine implements $IHasRecipe, $IUpdateTick {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuElectricBioGenerator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        steam: $Energy;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        bioEnergy: $ComponentBioFuelEnergy;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPrimalWireInsulator extends $BlockEntityInventory implements $IUpdateTick, $AudioFixer {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: $Map<$UUID, number>;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get enable(): boolean;
        get typeAudio(): $EnumTypeAudio;
    }
    export class $BlockEntityPalletGenerator extends $BlockEntityElectricMachine {
        static init(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuPalletGenerator;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        update: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        static integerMap: $Map<$ItemStack, number>;
        rad: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        generate: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRefractoryFurnace extends $BlockEntityInventory implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        worldPosition: $BlockPos;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
    }
    export class $BlockEntityReactorSafetyDoom extends $BlockEntityElectricMachine {
        getGuiContainer(arg0: $Player): $ContainerMenuSafetyDoom;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        rad: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        iAdvReactorList: $List<$List<$IAdvReactor>>;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPrimalSolderingMechanism extends $BlockEntityElectricMachine implements $IUpdateTick, $IHasRecipe, $IUpdatableTileEvent {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSolderingMechanism;
        getInterruptSoundFile(): string;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getStartSoundFile(): string;
        getWrenchDropRate(): number;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: number[];
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        solderingIronSlot: $Inventory;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        start: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get startSoundFile(): string;
        get wrenchDropRate(): number;
    }
    export class $BlockEntityRocketAssembler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_, arg5: $ItemStack_, arg6: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuRocketAssembler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPrimalFluidHeater extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityElectricSqueezer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, ...arg1: $FluidStack_[]): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuElectricSqueezer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityCanner extends $BlockEntityElectricLiquidTankInventory implements $IUpgradableBlock, $IUpdateTick, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        outputTank: $Fluids$InternalFluidTank;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityWaterRotorModifier extends $BlockEntityInventory implements $IWindUpgradeBlock, $IUpdatableTileEvent {
        getItemStack(): $ItemStack;
        getGuiContainer(arg0: $Player): $ContainerMenuWaterRotorUpgrade;
        getRotor(): $WindRotor;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $InventoryWaterUpgrade;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        rotor_slot: $InventoryRotorWater;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get itemStack(): $ItemStack;
        get rotor(): $WindRotor;
    }
    export class $BlockEntityInoculator extends $BlockEntityElectricMachine implements $IHasRecipe, $AudioFixer, $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent {
        init(): void;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuInoculator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getWrenchDropRate(): number;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get wrenchDropRate(): number;
    }
    export class $BlockEntityNightTransformer extends $BlockEntityInventory implements $IManufacturerBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuNightTransformer;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        se: $ComponentBaseEnergy;
        levelBlock: number;
        qe: $ComponentBaseEnergy;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        ne: $ComponentBaseEnergy;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityDryer extends $BlockEntityInventory implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        operateOnce(): void;
        blockState: $BlockState;
        data: $Map<$UUID, number>;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityItemDivider extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, ...arg2: $FluidStack_[]): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuItemDivider;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityCentrifuge extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addRecipe(arg0: number, arg1: $ItemStack_): void;
        static addRecipe(arg0: string, arg1: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuCentrifuge;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        rpm: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityOilRefiner extends $BlockEntityElectricMachine implements $IManufacturerBlock, $IUpgradableBlock, $IHasRecipe {
        init(): void;
        getFluidTank(arg0: number): $FluidTank;
        getGuiContainer(arg0: $Player): $ContainerMenuOilRefiner;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        setOverclockRates(): void;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluidTank3: $Fluids$InternalFluidTank;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntitySolidCooling extends $BlockEntityElectricMachine implements $IUpdatableTileEvent {
        static init(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSolidCoolMachine;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        cold: $CoolComponent;
        slot: $Inventory;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        max: number;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        time: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityOilPump extends $BlockEntityElectricLiquidTankInventory implements $IUpgradableBlock, $IManufacturerBlock {
        setUpgradestat(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuOilPump;
        getInterruptSoundFile(): string;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getVein(): $VeinBase;
        getStartSoundFile(): string;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        type: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        maxcount: number;
        static ticker: number;
        vein: $VeinBase;
        pollutionSoil: $SoilPollutionComponent;
        levelMech: number;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get startSoundFile(): string;
        get levelMechanism(): number;
    }
    export class $BlockEntitySolidFluidMixer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        static addRecipe(arg0: $IInputItemStack, arg1: $FluidStack_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSolidFluidMixer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        output: $MachineRecipe;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        inputSlotA: $InventoryRecipes;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        fluidTank3: $Fluids$InternalFluidTank;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        output1: $InventoryOutput;
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typeAudio: $EnumTypeAudio;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGenerationAdditionStone extends $BlockEntityBaseAdditionGenStone implements $IHasRecipe {
        init(): void;
        static addGen(arg0: $IInputItemStack, arg1: $IInputItemStack, arg2: $ItemStack_): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        mode: $BlockEntityBaseAdditionGenStone$Mode;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        andesite: $ItemStack;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        diorite: $ItemStack;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        granite: $ItemStack;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntitySqueezer extends $BlockEntityInventory implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: $Map<$UUID, number>;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        worldPosition: $BlockPos;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
    }
    export class $BlockEntityItemDividerFluids extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, ...arg1: $FluidStack_[]): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuItemDividerFluids;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGraphiteHandler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe, $IManufacturerBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number, arg1: number): void;
        onUpdate(): void;
        setUpgradestat(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuGraphite;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        col: number;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        timer: $ComponentTimer;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        flintSlot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityMachineCharge extends $BlockEntityInventory {
        getEnergy(): $Energy;
        getGuiContainer(arg0: $Player): $ContainerMenuMachineCharger;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get energy(): $Energy;
    }
    export class $BlockEntityTripleSolidMixer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_): void;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $IInputItemStack, arg3: $ItemStack_, arg4: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuTripleSolidMixer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityVolcanoChest extends $BlockEntityInventory {
        generateLoot(): $List<$ItemStack>;
        addItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): $LootPoolSingletonContainer$Builder<never>;
        getVolcano(): $LootTable$Builder;
        getGuiContainer(arg0: $Player): $ContainerMenuVolcanoChest;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        invSlot: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get volcano(): $LootTable$Builder;
    }
    export class $BlockEntityNightConverter extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent {
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuNightConverter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        ne: $ComponentBaseEnergy;
        valuesAudio: $EnumTypeAudio[];
        progress: $ComponentProgress;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGeneticPolymerizer extends $BlockEntityElectricLiquidTankInventory implements $IHasRecipe, $IUpdateTick, $IUpgradableBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuGeneticPolymerizer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $InventoryOutput;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluidByList;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPigFarm extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuPigFarm;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        slotSeeds: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        output: $InventoryOutput;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySafe extends $BlockEntityInventory {
        getGuiContainer(arg0: $Player): $ContainerMenuSafe;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        timer: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityMoonSpotter extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe, $IManufacturerBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuMoonSpotter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        timer: $ComponentTimer;
        levelBlock: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntitySteamGenerator extends $BlockEntityInventory implements $AudioFixer, $IUpdatableTileEvent {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        isConverting(): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuSteamGenerator;
        gainEnergy(): boolean;
        getWrenchDropRate(): number;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        production: number;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        addedToEnergyNet: boolean;
        chargeSlot: $InventoryCharge;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        steam: $ComponentSteamEnergy;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        coef: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get converting(): boolean;
        get wrenchDropRate(): number;
        get enable(): boolean;
    }
    export class $BlockEntityAdvHandlerHeavyOre extends $BlockEntityBaseHandlerHeavyOre {
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityQuantumMiner extends $BlockEntityInventory {
        getGuiContainer(arg0: $Player): $ContainerMenuQuantumMiner;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        qe: $ComponentBaseEnergy;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        progress: $ComponentProgress;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRNACollector extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_, arg2: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuRNACollector;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        output: $MachineRecipe;
        operationsPerTick: number;
        rad: $ComponentBaseEnergy;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        inputSlotA: $InventoryRecipes;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        output1: $InventoryOutput;
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typeAudio: $EnumTypeAudio;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySaplingGardener extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuSaplingGardener;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGenomeExtractor extends $BlockEntityInventory implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuGenomeExtractor;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $InventoryOutput;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        genBee: $Genome$1;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $ComponentBaseEnergy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        genCrop: $Genome;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        input: $Inventory;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPrimalPump extends $BlockEntityElectricLiquidTankInventory {
        pump(arg0: $BlockPos_, arg1: boolean): $FluidStack;
        canoperate(): boolean;
        operate(arg0: boolean): boolean;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRecipeTuner extends $BlockEntityInventory implements $IUpdatableTileEvent {
        getGuiContainer(arg0: $Player): $ContainerMenuTunerRecipe;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCowFarm extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuCowFarm;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        output1: $InventoryOutput;
        slotSeeds: $Inventory;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        output: $InventoryOutput;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPerAlloySmelter extends $BlockEntityElectricMachine implements $IHasRecipe, $IType, $IUpdateTick, $IUpgradableBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getStyle(): $EnumTypeStyle;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuPerAlloySmelter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        static addAlloysmelter(arg0: $Object, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Object, arg5: $ItemStack_, arg6: number): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get style(): $EnumTypeStyle;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityImpAlloySmelter extends $BlockEntityElectricMachine implements $IHasRecipe, $IType, $IUpdateTick, $IUpgradableBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getStyle(): $EnumTypeStyle;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuImpAlloySmelter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        static addAlloysmelter(arg0: $Object, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $ItemStack_, arg5: number): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get style(): $EnumTypeStyle;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySimpleScanner extends $BlockEntityScanner {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $ItemStack;
        recipe: $BaseMachineRecipe;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        maxprogress: number;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryScannable;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        diskSlot: $Inventory;
        block: $BlockTileEntity<any>;
        state: $BlockEntityScanner$State;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPhotonicReplicator extends $BlockEntityBaseReplicator {
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $RecipeInfo;
        uuProcessed: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        cellSlot: $InventoryOutput;
        remove: boolean;
        mode: $BlockEntityBaseReplicator$Mode;
        maxIndex: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        index: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluid;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAutoOpenBox extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuAutoOpenBox;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        timer: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        slot1: $Inventory;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySimplePump extends $BlockEntityPump {
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationsPerTick: number;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        containerSlot: $InventoryFluid;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $TileEntityHologramSpace extends $BlockEntityBase {
        createFunction(arg0: $TileEntityHologramSpace): $Function<$RenderLevelStageEvent, void>;
        fakeBodyList: $List<$IFakeBody>;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityProbeAssembler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuProbeAssembler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPolymerizer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuPolymerizer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        se: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityUpgradeMachineFactory extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $BaseRecipe, arg1: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuUpgradeMachineFactory;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityBaseAdditionGenStone$Mode extends $Enum<$BlockEntityBaseAdditionGenStone$Mode> {
        static values(): $BlockEntityBaseAdditionGenStone$Mode[];
        static valueOf(arg0: string): $BlockEntityBaseAdditionGenStone$Mode;
        static GRANITE: $BlockEntityBaseAdditionGenStone$Mode;
        static ANDESITE: $BlockEntityBaseAdditionGenStone$Mode;
        static DIORITE: $BlockEntityBaseAdditionGenStone$Mode;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityBaseAdditionGenStone$Mode}.
     */
    export type $BlockEntityBaseAdditionGenStone$Mode_ = "granite" | "diorite" | "andesite";
    export class $BlockEntityBaseAdditionGenStone extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent {
        getOutput(): $MachineRecipe;
        getMode(): $BlockEntityBaseAdditionGenStone$Mode;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuAdditionGenStone;
        getInterruptSoundFile(): string;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(arg0: $MachineRecipe): void;
        getStartSoundFile(): string;
        setOverclockRates(): void;
        operateOnce(arg0: $MachineRecipe, arg1: $List_<$ItemStack_>): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        mode: $BlockEntityBaseAdditionGenStone$Mode;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        andesite: $ItemStack;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        diorite: $ItemStack;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        granite: $ItemStack;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $MultiBlockEntity, arg4: $BlockPos_, arg5: $BlockState_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $MultiBlockEntity, arg5: $BlockPos_, arg6: $BlockState_);
        get progress(): number;
        get interruptSoundFile(): string;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get startSoundFile(): string;
    }
    export class $BlockEntityPrimalLaserPolisher extends $BlockEntityInventory implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: $Map<$UUID, number>;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityBaseReplicator$Mode extends $Enum<$BlockEntityBaseReplicator$Mode> {
        static values(): $BlockEntityBaseReplicator$Mode[];
        static valueOf(arg0: string): $BlockEntityBaseReplicator$Mode;
        static SINGLE: $BlockEntityBaseReplicator$Mode;
        static STOPPED: $BlockEntityBaseReplicator$Mode;
        static CONTINUOUS: $BlockEntityBaseReplicator$Mode;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityBaseReplicator$Mode}.
     */
    export type $BlockEntityBaseReplicator$Mode_ = "stopped" | "single" | "continuous";
    export class $BlockEntityHandlerHeavyOre extends $BlockEntityBaseHandlerHeavyOre implements $IHasRecipe {
        init(): void;
        static addhandlerore(arg0: $ItemStack_, arg1: $ItemStack_[], arg2: number, ...arg3: number[]): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRollingMachine extends $BlockEntityInventory implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: $Map<$UUID, number>;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityIndustrialOrePurifier extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuIndustrialOrePurifier;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        se: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        consumeSE: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySolidMixer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSolidMixer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityIncubator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_, arg2: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuIncubator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGasCombiner extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuGasCombiner;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        fluidTank3: $Fluids$InternalFluidTank;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityFluidMixer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuFluidMixer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        fluidTank4: $Fluids$InternalFluidTank;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        fluidSlot4: $InventoryFluidByList;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        fluidTank3: $Fluids$InternalFluidTank;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityWirelessGasPump extends $BlockEntityInventory implements $IManufacturerBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuWirelessGasPump;
        updateList(): void;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        levelBlock: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        veinList: $List<$VeinBase>;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        invslot: $Inventory;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityFluidAdapter extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuFluidAdapter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySunnariumPanelMaker extends $BlockEntityDoubleElectricMachine implements $IHasRecipe {
        init(): void;
        getInterruptSoundFile(): string;
        static addsunnuriumpanel(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getStartSoundFile(): string;
        heat: $HeatComponent;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        sunenergy: $ComponentBaseEnergy;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
    }
    export class $BlockEntityAdvOilRefiner extends $BlockEntityElectricMachine implements $IManufacturerBlock, $IUpgradableBlock, $IHasRecipe {
        init(): void;
        getFluidTank(arg0: number): $FluidTank;
        getGuiContainer(arg0: $Player): $ContainerMenuAdvOilRefiner;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        setOverclockRates(): void;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        dataFluid2: $DataFluid;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        dataFluid1: $DataFluid;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        dataFluid: $DataFluid;
        fluidTank3: $Fluids$InternalFluidTank;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityPrimalSiliconCrystalHandler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setUpgradestat(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        col: number;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        timer: $ComponentTimer;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityRodManufacturer extends $BlockEntityInventory implements $IUpgradableBlock, $IUpdateTick, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: string, arg2: string, arg3: $ItemStack_): void;
        static addRecipe(arg0: string, arg1: string, arg2: $ItemStack_): void;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_, arg5: $ItemStack_, arg6: $ItemStack_): void;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: string, arg3: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuRodManufacturer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        static addRecipe2(arg0: string, arg1: string, arg2: $ItemStack_): void;
        static addRecipe1(arg0: $ItemStack_, arg1: $ItemStack_, arg2: string, arg3: $ItemStack_): void;
        static addRecipe1(arg0: string, arg1: string, arg2: $ItemStack_): void;
        static addRecipe1(arg0: $ItemStack_, arg1: string, arg2: string, arg3: $ItemStack_): void;
        operate(arg0: $MachineRecipe): void;
        setOverclockRates(): void;
        operateOnce(arg0: $List_<$ItemStack_>): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPlantFertilizer extends $BlockEntityInventory implements $IUpgradableBlock {
        contains(arg0: $BlockPos_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuPlantFertilizer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityMiniSmeltery extends $BlockEntityInventory implements $IHasRecipe {
        init(): void;
        createFunction(arg0: $BlockEntityMiniSmeltery): $Function<$RenderLevelStageEvent, void>;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        operate(): void;
        operateOnce(): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRoverAssembler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuRoverAssembler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPrimalGasChamber extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        dataFluid2: $DataFluid;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        energyConsume: number;
        dataFluid1: $DataFluid;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        dataFluid: $DataFluid;
        fluid_handler: $FluidHandlerRecipe;
        fluidTank3: $Fluids$InternalFluidTank;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityReverseTransriptor extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuReverseTransriptor;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        rad: $ComponentBaseEnergy;
        qe: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityOilPurifier extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuOilPurifier;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityElectricRefractoryFurnace extends $BlockEntityBasePlasticPlateCreator implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuElectricRefractoryFurnace;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $InventoryOutput;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluidByList;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityLaserPolisher extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addRecipe(arg0: number, arg1: $ItemStack_): void;
        static addRecipe(arg0: string, arg1: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuLaserPolisher;
        getGuiContainer1(arg0: $Player): $ContainerMenuLaserPolisher;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityWeeder extends $BlockEntityInventory implements $IUpgradableBlock {
        contains(arg0: $BlockPos_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuWeeder;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $Inventory;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntitySolidFluidIntegrator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getProgress(): number;
        static addRecipe(arg0: $FluidStack_, arg1: $FluidStack_, arg2: $ItemStack_, arg3: $FluidStack_): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSolidFluidIntegrator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluidTank3: $Fluids$InternalFluidTank;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityAutoFuse extends $BlockEntityInventory {
        getParent(): $BlockEntityInventory;
        getGuiContainer(arg0: $Player): $ContainerMenuAutoFuse;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        fuse: boolean;
        timer: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        rad_energy: $ComponentBaseEnergy;
        worldPosition: $BlockPos;
        slotBomb: $Inventory;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get parent(): $BlockEntityInventory;
    }
    export class $BlockEntityMacerator extends $BlockEntityInventory implements $IUpdateTick, $AudioFixer {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: $Map<$UUID, number>;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        durability: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get enable(): boolean;
        get typeAudio(): $EnumTypeAudio;
    }
    export class $BlockEntityImpScanner extends $BlockEntityScanner {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $ItemStack;
        recipe: $BaseMachineRecipe;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        maxprogress: number;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryScannable;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        diskSlot: $Inventory;
        block: $BlockTileEntity<any>;
        state: $BlockEntityScanner$State;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPerHandlerHeavyOre extends $BlockEntityBaseHandlerHeavyOre {
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityMatterFactory extends $BlockEntityElectricMachine implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuMatterFactory;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        timer: $ComponentTimer;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntitySingleFluidAdapter extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $IInputItemStack, arg1: $FluidStack_, arg2: $FluidStack_): void;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_, arg2: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSingleFluidAdapter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityAutoCrafter extends $BlockEntityElectricMachine implements $IUpgradableBlock {
        getSlot(): $Inventory;
        getRecipe(): $BaseMachineRecipe;
        getGuiContainer(arg0: $Player): $ContainerMenuAutoCrafter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(arg0: $BaseMachineRecipe): void;
        getAutoCrafter(): $InventoryAutoCrafter;
        updateCraft(): void;
        setOverclockRates(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get slot(): $Inventory;
        get recipe(): $BaseMachineRecipe;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get autoCrafter(): $InventoryAutoCrafter;
    }
    export class $BlockEntityWirelessMineralQuarry extends $BlockEntityInventory implements $IManufacturerBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuWirelessMineralQuarry;
        updateList(): void;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        output: $InventoryOutput;
        levelBlock: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        itemStacks: $List<$ItemStack>;
        veinList: $List<$VeinBase>;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        invslot: $Inventory;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityWitherMaker extends $BlockEntityBaseWitherMaker implements $IHasRecipe {
        init(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuBaseWitherMaker;
        static GenerationMicrochip(arg0: $IInputItemStack, arg1: $IInputItemStack, arg2: $ItemStack_): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        static soundEvents: $SoundEvent[];
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityCactusFarm extends $BlockEntityInventory implements $IUpgradableBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuCactusFarm;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $InventoryOutput;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGenerationMicrochip extends $BlockEntityBaseGenerationMicrochip implements $IUpdateTick, $IHasRecipe {
        static add(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: string, arg4: $ItemStack_, arg5: $ItemStack_, arg6: boolean): void;
        static add(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: string, arg5: $ItemStack_, arg6: number, arg7: boolean): void;
        static add(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_, arg5: $ItemStack_, arg6: number, arg7: boolean): void;
        init(): void;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuBaseGenerationChipMachine;
        static getLevelCircuit(arg0: $ItemStack_, arg1: number): $ItemStack;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityRotorAssembler extends $BlockEntityInventory implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number, arg1: number, arg2: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuRotorAssembler;
        operate(arg0: $MachineRecipe): void;
        operateOnce(arg0: $List_<$ItemStack_>): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        recipe: $MachineRecipe;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
    }
    export class $BlockEntityPhotonicHandlerHO extends $BlockEntityBaseHandlerHeavyOre {
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPump extends $BlockEntityElectricLiquidTankInventory implements $IUpgradableBlock, $IType {
        getStyle(): $EnumTypeStyle;
        pump(arg0: $BlockPos_, arg1: boolean): $FluidStack;
        setUpgradestat(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuPump;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        canoperate(): boolean;
        operate(arg0: boolean): boolean;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationsPerTick: number;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        containerSlot: $InventoryFluid;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: number, arg1: number, arg2: $MultiBlockEntity, arg3: $BlockPos_, arg4: $BlockState_);
        get style(): $EnumTypeStyle;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityAnalyzerChest extends $BlockEntityInventory {
        getGuiContainer(arg0: $Player): $ContainerMenuAnalyzerChest;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntitySawmill extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number, arg1: $ItemStack_): void;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static addRecipe(arg0: string, arg1: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSawmill;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPhotonicScanner extends $BlockEntityScanner {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $ItemStack;
        recipe: $BaseMachineRecipe;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        maxprogress: number;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryScannable;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        diskSlot: $Inventory;
        block: $BlockTileEntity<any>;
        state: $BlockEntityScanner$State;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityFluidHeater extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuHeatFluids;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPrimalFluidIntegrator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $IInputItemStack, arg1: $ItemStack_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGasPump extends $BlockEntityElectricLiquidTankInventory implements $IUpgradableBlock, $IManufacturerBlock {
        setUpgradestat(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuGasPump;
        getInterruptSoundFile(): string;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getVein(): $VeinBase;
        getStartSoundFile(): string;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        type: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        levelBlock: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        maxcount: number;
        static ticker: number;
        vein: $VeinBase;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get startSoundFile(): string;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntitySiliconCrystalHandler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe, $IManufacturerBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setUpgradestat(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuSiliconCrystalHandler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        col: number;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        timer: $ComponentTimer;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        flintSlot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityImpOilRefiner extends $BlockEntityElectricMachine implements $IManufacturerBlock, $IUpgradableBlock, $IHasRecipe {
        init(): void;
        getFluidTank(arg0: number): $FluidTank;
        getGuiContainer(arg0: $Player): $ContainerMenuImpOilRefiner;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        setOverclockRates(): void;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluidTank3: $Fluids$InternalFluidTank;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityRadioactiveOreHandler extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $Object, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuRadioactiveOreHandler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $InventoryOutput;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        componentRadiation: $ComponentBaseEnergy;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityItemManipulator extends $BlockEntityElectricMachine implements $IUpdatableTileEvent {
        isItemValidForSlot(arg0: number, arg1: $ItemStack_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuItemManipulator;
        blockState: $BlockState;
        inputslot: $Inventory;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        inputslot1: $Inventory;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        inputslot2: $Inventory;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $Inventory;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityMobMagnet extends $BlockEntityInventory {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityStampMechanism extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: string, arg1: $ItemStack_, ...arg2: $Object[]): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuStamp;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        inputSlotB: $Inventory;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityElectricDryer extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuDryer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        output1: $InventoryOutput;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityAdvScanner extends $BlockEntityScanner {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        pattern: $ItemStack;
        recipe: $BaseMachineRecipe;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        maxprogress: number;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryScannable;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        diskSlot: $Inventory;
        block: $BlockTileEntity<any>;
        state: $BlockEntityScanner$State;
        patternUu: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        patternEu: number;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityMagnet extends $BlockEntityElectricMachine implements $IUpdatableTileEvent {
        updateData(): void;
        getEnergy(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuMagnet;
        canInsertOrExtract(arg0: $ItemStack_): boolean;
        getEntitiesWithinAABB(): $List<$ItemEntity>;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot: $SlotInfo;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        energyconsume: number;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        player: string;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        x: number;
        y: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        z: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get entitiesWithinAABB(): $List<$ItemEntity>;
    }
    export class $BlockEntityCollectorProductBee extends $BlockEntityInventory implements $IUpgradableBlock {
        contains(arg0: $BlockPos_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuCollectorProductBee;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        tank1: $Fluids$InternalFluidTank;
        block: $BlockTileEntity<any>;
        tank: $Fluids$InternalFluidTank;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $InventoryOutput;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        componentUpgrade: $ComponentUpgradeSlots;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        fluidSlot: $InventoryFluidByList;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityMutatron extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IHasRecipe {
        init(): void;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getProgress(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuMutatron;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        qe: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        fluidSlot3: $InventoryFluidByList;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        fluid_handler: $FluidHandlerRecipe;
        fluidTank3: $Fluids$InternalFluidTank;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityAlkalineEarthQuarry extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IManufacturerBlock {
        static addRecipe(arg0: number): void;
        getGuiContainer(arg0: $Player): $ContainerMenuAlkalineEarthQuarry;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        static lithium: $ItemStack;
        timer: $ComponentTimer;
        levelBlock: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static beryllium: $ItemStack;
        block: $BlockTileEntity<any>;
        level_mesh: number;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        inputSlotB: $Inventory;
        static ticker: number;
        inputSlotA: $Inventory;
        type_block: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static boron: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityPlasticCreator extends $BlockEntityBasePlasticCreator implements $IHasRecipe {
        init(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuPlasticCreator;
        getInventoryName(): string;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $InventoryOutput;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluidByList;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get inventoryName(): string;
    }
    export class $BlockEntityMatter extends $BlockEntityMultiMatter implements $IHasRecipe {
        init(): void;
        static addAmplifier(arg0: $ItemStack_, arg1: number): void;
        blockState: $BlockState;
        fluidTank: $FluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        static worldMatterMap: $Map<$ResourceKey<$Level>, $Map<$ChunkPos, $List<$IMatter>>>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        energycost: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        scrap: number;
        redstonePowered: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        amplifierSlot: $InventoryRecipes;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        work: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        containerslot: $InventoryFluid;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityWireInsulator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuWireInsulator;
        getGuiContainer1(arg0: $Player): $ContainerMenuWireInsulator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        componentUpgrades: $ComponentUpgrade;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityGenerationStone extends $BlockEntityBaseGenStone implements $IHasRecipe {
        init(): void;
        static addGen(arg0: $IInputItemStack, arg1: $IInputItemStack, arg2: $ItemStack_): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        mode: $BlockEntityBaseGenStone$Mode;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityNeutronSeparator extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuNeutronSeparator;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        qe: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPositronConverter extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuPositronsConverter;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        positrons: $ComponentBaseEnergy;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        qe: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityPhoCombPump extends $BlockEntityCombinedPump {
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        containerSlot: $InventoryFluid;
        level: $Level;
        energyQe: $ComponentBaseEnergy;
        active: string;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typePump: $EnumTypePump;
        typeAudio: $EnumTypeAudio;
        x: number;
        progress: number;
        y: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        z: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityImpHandlerHeavyOre extends $BlockEntityBaseHandlerHeavyOre {
        heat: $HeatComponent;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAutoLatexCollector extends $BlockEntityInventory {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        tank: $Fluids$InternalFluidTank;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityEnergyBarrier extends $BlockEntityInventory {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityProgrammingTable extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe, $IManufacturerBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuProgrammingTable;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        timer: $ComponentTimer;
        levelBlock: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityGeneticStabilize extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getProgress(): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $FluidStack_, arg2: $FluidStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuGeneticStabilizer;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        operate(): void;
        setOverclockRates(): void;
        operateOnce(): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        energyConsume: number;
        output: $MachineRecipe;
        operationsPerTick: number;
        block: $BlockTileEntity<any>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        inputSlotA: $InventoryRecipes;
        level: $Level;
        fluidSlot2: $InventoryFluidByList;
        active: string;
        fluidSlot1: $InventoryFluidByList;
        dischargeSlot: $InventoryDischarge;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        fluid_handler: $FluidHandlerRecipe;
        pollutionAir: $AirPollutionComponent;
        fluidTank2: $Fluids$InternalFluidTank;
        fluidTank1: $Fluids$InternalFluidTank;
        upgradeSlot: $InventoryUpgrade$1;
        defaultTier: number;
        valuesAudio: $EnumTypeAudio[];
        output1: $InventoryOutput;
        advComponentMap: $Map<string, $AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        remove: boolean;
        operationLength: number;
        se: $ComponentBaseEnergy;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        static defaultAabbs: $List<$AABB>;
        guiProgress: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        static ATTACHMENTS_NBT_KEY: string;
        typeAudio: $EnumTypeAudio;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityApothecaryBee extends $BlockEntityInventory {
        contains(arg0: $BlockPos_): boolean;
        getGuiContainer(arg0: $Player): $ContainerMenuApothecaryBee;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $ComponentBaseEnergy;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityFluidTrash extends $BlockEntityInventory {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPlasticPlateCreator extends $BlockEntityBasePlasticPlateCreator implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuPlasticPlateCreator;
        getInventoryName(): string;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        fluidTank: $Fluids$InternalFluidTank;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        outputSlot1: $InventoryOutput;
        teBlock: $MultiBlockEntity;
        fluids: $Fluids;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        fluidSlot: $InventoryFluidByList;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get inventoryName(): string;
    }
    export class $BlockEntityCompressor extends $BlockEntityInventory implements $IUpdateTick, $AudioFixer {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: $Map<$UUID, number>;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        durability: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get enable(): boolean;
        get typeAudio(): $EnumTypeAudio;
    }
    export class $BlockEntityUpgradeRover extends $BlockEntityDoubleElectricMachine implements $IHasRecipe {
        init(): void;
        static getUpgradeItem(arg0: $ItemStack_): boolean;
        getInterruptSoundFile(): string;
        getStartSoundFile(): string;
        getWrenchDropRate(): number;
        heat: $HeatComponent;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get startSoundFile(): string;
        get wrenchDropRate(): number;
    }
    export class $BlockEntityWaterRotorAssembler extends $BlockEntityInventory implements $IUpdateTick, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: number, arg1: number, arg2: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuWaterRotorAssembler;
        operate(arg0: $MachineRecipe): void;
        operateOnce(arg0: $List_<$ItemStack_>): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        recipe: $MachineRecipe;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        defaultEnergyStorage: number;
        remove: boolean;
        energyConsume: number;
        operationLength: number;
        operationsPerTick: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        defaultEnergyConsume: number;
        defaultOperationLength: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        defaultTier: number;
        progress: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get output(): $MachineRecipe;
    }
    export class $BlockEntityAmpereGenerator extends $BlockEntityElectricMachine implements $IUpdatableTileEvent, $IManufacturerBlock {
        getGuiContainer(arg0: $Player): $ContainerMenuAmpereGenerator;
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        levelBlock: number;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        pressure: $ComponentBaseEnergy;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityItemTrash extends $BlockEntityInventory {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPrimalElectronicsAssembler extends $BlockEntityElectricMachine implements $IUpdateTick, $IHasRecipe, $IUpdatableTileEvent {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuElectronicsAssembler;
        getInterruptSoundFile(): string;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getStartSoundFile(): string;
        getWrenchDropRate(): number;
        getInventoryName(): string;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        data: number[];
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        start: boolean;
        data1: $Map<$UUID, number>;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get interruptSoundFile(): string;
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get startSoundFile(): string;
        get wrenchDropRate(): number;
        get inventoryName(): string;
    }
    export class $BlockEntityCrystalCharger extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IUpdatableTileEvent, $IHasRecipe {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuCrystalCharger;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        ampere: $ComponentBaseEnergy;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityResearchTableSpace extends $BlockEntityInventory implements $IResearchTable {
        setLevel(arg0: $EnumLevels_): void;
        getPlayer(): $UUID;
        getSpaceBody(): $Map<$IBody, $SpaceOperation>;
        getLevelTable(): $EnumLevels;
        getGuiContainer(arg0: $Player): $ContainerMenuResearchTableSpace;
        getSends(): $InfoSends;
        blockState: $BlockState;
        colony: $IColony;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        body: $IBody;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        timer: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        dataMap: $Map<$IBody, $Data>;
        block: $BlockTileEntity<any>;
        operationMap: $Map<$IBody, $SpaceOperation>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        map: $Map<$IBody, $SpaceOperation>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        slotLens: $Inventory;
        pollutionSoil: $SoilPollutionComponent;
        level: $EnumLevels;
        fakeBodySpaceOperationMap: $List<$SpaceOperation>;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        fakeBody: $IFakeBody;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get player(): $UUID;
        get spaceBody(): $Map<$IBody, $SpaceOperation>;
        get levelTable(): $EnumLevels;
        get sends(): $InfoSends;
    }
    export class $BlockEntityEnergyTrash extends $BlockEntityInventory {
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntitySoilAnalyzer extends $BlockEntityElectricMachine {
        getGuiContainer(arg0: $Player): $ContainerMenuSoilAnalyzer;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        analyzed: boolean;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        radiation: $Radiation;
        valuesAudio: $EnumTypeAudio[];
        progress: $ComponentProgress;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPurifierSoil extends $BlockEntityInventory implements $IManufacturerBlock {
        setLevelMech(arg0: number): void;
        getLevelMechanism(): number;
        removeLevel(arg0: number): void;
        static getSoilPurificationPerSecond(arg0: number): number;
        static getAirSideEffectPerSecondInt(arg0: number): number;
        static getSoilPurificationPerSecondInt(arg0: number): number;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        levelBlock: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        chunkLevel: $ChunkLevel;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        chunkPos: $ChunkPos;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set levelMech(value: number);
        get levelMechanism(): number;
    }
    export class $BlockEntityRodFactory extends $BlockEntityElectricMachine implements $IUpgradableBlock, $IUpdateTick, $IHasRecipe, $IUpdatableTileEvent {
        init(): void;
        getOutput(): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        addDualRecipe(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_): void;
        addQuadRecipe(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuRodFactory;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        addSimpleRecipe(arg0: $ItemStack_, arg1: number, arg2: $ItemStack_): void;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        type: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
    }
    export class $BlockEntityElectronicsAssembler extends $BlockEntityElectricMachine implements $IUpdateTick, $IHasRecipe, $IUpgradableBlock {
        init(): void;
        getOutput(): $MachineRecipe;
        static applyModifier(arg0: number, arg1: number, arg2: number): number;
        getRecipeOutput(): $MachineRecipe;
        static addRecipe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $ItemStack_, arg5: $ItemStack_): void;
        onUpdate(): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
        getGuiContainer(arg0: $Player): $ContainerMenuElectricElectronicsAssembler;
        getUpgradableProperties(): $Set<$UpgradableProperty>;
        getWrenchDropRate(): number;
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        output: $MachineRecipe;
        tier: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade$1;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get upgradableProperties(): $Set<$UpgradableProperty>;
        get wrenchDropRate(): number;
    }
    export class $BlockEntityRocketLaunchPad extends $BlockEntityInventory implements $IRocketLaunchPad {
        createFunction(arg0: $BlockEntityRocketLaunchPad): $Function<$RenderLevelStageEvent, void>;
        charge(arg0: $ItemStack_): void;
        getPlayer(): $UUID;
        getGuiContainer(arg0: $Player): $ContainerMenuRocketLaunchPad;
        addFluidStack(arg0: $FluidStack_): void;
        refuel(arg0: $ItemStack_, arg1: $IRoversItem): void;
        getRover(): $IRoversItem;
        getWorldPad(): $Level;
        getRoverStack(): $ItemStack;
        getSlotOutput(): $InventoryOutput;
        addDataRocket(arg0: $ItemStack_): void;
        getRoverSlot(): $Inventory;
        consumeRover(): void;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        tanks: $Fluids$InternalFluidTank[];
        block: $BlockTileEntity<any>;
        tank: $Fluids$InternalFluidTank;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        rocketList: $List<$DataRocket>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        fluids: $Fluids;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        roverSlot: $Inventory;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get player(): $UUID;
        get rover(): $IRoversItem;
        get worldPad(): $Level;
        get roverStack(): $ItemStack;
        get slotOutput(): $InventoryOutput;
    }
}
