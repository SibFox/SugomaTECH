import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISlotInv, $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $EquipmentSlot_, $EquipmentSlot } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_, $List_, $Map, $Set, $AbstractList } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockEntityStorageExp } from "@package/com/denfop/blockentity/mechanism/exp";
import { $BlockEntityAutoCrafter } from "@package/com/denfop/blockentity/mechanism";
import { $BlockEntityEnergySubstitute } from "@package/com/denfop/blockentity/mechanism/energy";
import { $AbstractContainerMenu, $Slot, $TransientCraftingContainer } from "@package/net/minecraft/world/inventory";
import { $Enum, $Iterable } from "@package/java/lang";
import { $IInputItemStack } from "@package/com/denfop/recipe";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockEntityBaseQuantumQuarry } from "@package/com/denfop/blockentity/mechanism/quarry";
import { $VirtualSlot } from "@package/com/denfop/api/menu";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityHydroTurbineController } from "@package/com/denfop/blockentity/hydroturbine";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $BlockEntityInventory, $BlockEntityCombinerSEGenerators, $BlockEntityAntiUpgradeBlock, $BlockEntityAnalyzer, $BlockEntityCombinerMatter, $BlockEntityBaseWorldCollector, $BlockEntityLimiter, $BlockEntitySintezator, $BlockEntitySolarGeneratorEnergy, $BlockEntitySimulatorReactor, $BlockEntityAutoSpawner, $BlockEntityCombinerSolidMatter, $BlockEntityScanner, $BlockEntityAutoDigger } from "@package/com/denfop/blockentity/base";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory as $Inventory$1 } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityBaseRedstoneGenerator } from "@package/com/denfop/blockentity/mechanism/generator/energy/redstone";
import { $BlockEntityWindTurbineController } from "@package/com/denfop/blockentity/windturbine";
import { $ITypeSlot, $EnumTypeSlot } from "@package/com/denfop/api/widget";
import { $BlockEntityPatternMonitor, $BlockEntityPreCraft } from "@package/com/denfop/blockentity/storage";
import { $BlockEntityBaseWaterGenerator } from "@package/com/denfop/blockentity/mechanism/water";
import { $SameStack } from "@package/com/denfop/api/storage/autocrafting";
import { $BlockEntityMiniPanels, $BlockEntitySolarPanel } from "@package/com/denfop/blockentity/panels/entity";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $BlockEntityWindGenerator } from "@package/com/denfop/blockentity/mechanism/wind";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $IWindUpgradeBlock } from "@package/com/denfop/api/windsystem";

declare module "@package/com/denfop/inventory" {
    export class $InventorySimulatorReactor extends $Inventory implements $VirtualSlot {
        getFluidStackList(): $List<$FluidStack>;
        isFluid(): boolean;
        setFluidList(arg0: $List_<$FluidStack_>): void;
        canPlaceVirtualItem(arg0: number, arg1: $ItemStack_): boolean;
        setFluid(arg0: number, arg1: $SameStack): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntitySimulatorReactor, arg1: $Inventory$TypeItemSlot_, arg2: number);
        get fluidStackList(): $List<$FluidStack>;
        set fluidList(value: $List_<$FluidStack_>);
    }
    export class $InventoryConverterSolidMatter extends $Inventory implements $ISlotInv {
        consume(arg0: number, arg1: number, arg2: boolean): void;
        consume(arg0: number, arg1: number): void;
        accepts(arg0: number, arg1: $ItemStack_): boolean;
        getmatter(): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory);
        get matter(): void;
    }
    export class $InventoryRedstoneGenerator extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityBaseRedstoneGenerator);
    }
    export class $InventoryFluid$TypeFluidSlot extends $Enum<$InventoryFluid$TypeFluidSlot> {
        static values(): $InventoryFluid$TypeFluidSlot[];
        static valueOf(arg0: string): $InventoryFluid$TypeFluidSlot;
        static INPUT: $InventoryFluid$TypeFluidSlot;
        static OUTPUT: $InventoryFluid$TypeFluidSlot;
        static INPUT_OUTPUT: $InventoryFluid$TypeFluidSlot;
    }
    /**
     * Values that may be interpreted as {@link $InventoryFluid$TypeFluidSlot}.
     */
    export type $InventoryFluid$TypeFluidSlot_ = "input" | "output" | "input_output";
    export class $InventoryWaterRotorBlades extends $Inventory implements $ITypeSlot {
        work(): void;
        consume(arg0: number, arg1: boolean): void;
        consume(arg0: number): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityBaseWaterGenerator);
    }
    export class $Inventory$TypeItemSlot extends $Enum<$Inventory$TypeItemSlot> {
        static values(): $Inventory$TypeItemSlot[];
        static valueOf(arg0: string): $Inventory$TypeItemSlot;
        isInput(): boolean;
        isOutput(): boolean;
        static INPUT: $Inventory$TypeItemSlot;
        static OUTPUT: $Inventory$TypeItemSlot;
        static NONE: $Inventory$TypeItemSlot;
        static INPUT_OUTPUT: $Inventory$TypeItemSlot;
        get input(): boolean;
        get output(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Inventory$TypeItemSlot}.
     */
    export type $Inventory$TypeItemSlot_ = "input" | "output" | "input_output" | "none";
    export class $InventoryWorldCollector extends $Inventory {
        consume(arg0: number, arg1: number): void;
        consume(arg0: number, arg1: number, arg2: boolean): void;
        getmatter(): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityBaseWorldCollector);
        get matter(): void;
    }
    export class $InventoryRotorWater extends $Inventory implements $ITypeSlot {
        base: $CustomWorldContainer;
        constructor(arg0: $InventoryWaterUpgrade);
    }
    export class $InventoryRotorBlades extends $Inventory implements $ITypeSlot {
        work(): void;
        consume(arg0: number, arg1: boolean): void;
        consume(arg0: number): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityWindGenerator);
    }
    export class $InventoryScannable extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityScanner, arg1: number);
    }
    export class $InventoryScheduleReactor extends $Inventory {
        getAccepts(): $Map<number, $ItemStack>;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: number, arg2: number, arg3: number, arg4: number);
        get accepts(): $Map<number, $ItemStack>;
    }
    export class $InventoryHydroTurbineRotor extends $Inventory implements $ITypeSlot {
        damage(arg0: number, arg1: number): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityHydroTurbineController);
    }
    export class $InventoryTuner extends $Inventory implements $ITypeSlot {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory);
    }
    export class $InventoryAutoCrafter extends $Inventory implements $VirtualSlot {
        getFluidStackList(): $List<$FluidStack>;
        isFluid(): boolean;
        setFluidList(arg0: $List_<$FluidStack_>): void;
        canPlaceVirtualItem(arg0: number, arg1: $ItemStack_): boolean;
        setFluid(arg0: number, arg1: $SameStack): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityAutoCrafter, arg1: $Inventory$TypeItemSlot_, arg2: number);
        get fluidStackList(): $List<$FluidStack>;
        set fluidList(value: $List_<$FluidStack_>);
    }
    export class $InventoryPrivatizer extends $Inventory implements $ITypeSlot {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: number);
    }
    export class $InventoryTurbineRotorBlades extends $Inventory implements $ITypeSlot {
        work(): void;
        consume(arg0: number, arg1: boolean): void;
        consume(arg0: number): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityWindTurbineController);
    }
    export class $InventoryPanel extends $Inventory {
        charge(): void;
        solartype(): number;
        wirelessmodule(): void;
        checkmodule(): void;
        solartypeFast(): number;
        tier: number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntitySolarPanel, arg1: number, arg2: number, arg3: $Inventory$TypeItemSlot_);
    }
    export class $InventoryFisher extends $Inventory implements $ITypeSlot {
        consume(arg0: number): void;
        consume(arg0: number, arg1: boolean): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory);
    }
    export class $InventoryAnalyzer extends $Inventory implements $ITypeSlot {
        macerator(): boolean;
        quarry(): boolean;
        comb_macerator(): boolean;
        lucky(): number;
        polisher(): boolean;
        getwirelessmodule(): boolean;
        CheckBlackList(arg0: $List_<string>, arg1: string): boolean;
        wirelessmodule(): $List<number>;
        CheckWhiteList(arg0: $List_<string>, arg1: string): boolean;
        getblacklist(): $List<string>;
        getwhitelist(): $List<string>;
        getChunksize(): number;
        getFurnaceModule(): boolean;
        getenergycost(): number;
        getenergycost(arg0: $BlockEntityBaseQuantumQuarry): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityAnalyzer, arg1: string, arg2: number, arg3: number);
        get blacklist(): $List<string>;
        get whitelist(): $List<string>;
        get chunksize(): number;
        get furnaceModule(): boolean;
    }
    export class $InventoryAntiUpgradeBlock extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityAntiUpgradeBlock);
    }
    export class $InventoryPreCraft extends $Inventory implements $VirtualSlot {
        getFluidStackList(): $List<$FluidStack>;
        setFluid(arg0: number, arg1: $SameStack): void;
        isFluid(): boolean;
        setFluidList(arg0: $List_<$FluidStack_>): void;
        canPlaceVirtualItem(arg0: number, arg1: $ItemStack_): boolean;
        sameStackList: $List<$SameStack>;
        integerList: $List<number>;
        booleanList: $List<boolean>;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityPreCraft, arg1: number);
        get fluidStackList(): $List<$FluidStack>;
        set fluidList(value: $List_<$FluidStack_>);
    }
    export class $InventorySolidMatter extends $Inventory implements $ITypeSlot {
        getMaxEnergy(): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityCombinerSolidMatter);
        get maxEnergy(): number;
    }
    export class $InventoryElectrolyzer extends $Inventory implements $ITypeSlot {
        consume(arg0: number): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: number);
    }
    export class $InventoryElectricBlock extends $Inventory {
        output_plus(arg0: number): number;
        checkignore(): boolean;
        wirelessmodule(): void;
        gettrue(arg0: boolean, arg1: boolean): boolean;
        getstats(): $List<boolean>;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: number);
        get stats(): $List<boolean>;
    }
    export class $InventoryGenCombinerSunarrium extends $Inventory implements $ITypeSlot {
        coefday(): $List<number>;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityCombinerSEGenerators);
    }
    export class $InventoryWaterUpgrade extends $Inventory implements $ITypeSlot {
        put(arg0: number, arg1: $ItemStack_, arg2: boolean): void;
        update(arg0: $ItemStack_): void;
        base: $CustomWorldContainer;
        constructor(arg0: $IWindUpgradeBlock);
    }
    export class $Inventory extends $AbstractList<$ItemStack> implements $ITypeSlot, $Container {
        getStacks(arg0: number): $List<$IInputItemStack>;
        get(arg0: number): $ItemStack;
        update(): void;
        add(arg0: $ItemStack_): boolean;
        add(arg0: $List_<$ItemStack_>, arg1: boolean): boolean;
        add(arg0: $List_<$ItemStack_>): boolean;
        set(arg0: number, arg1: $ItemStack_): $ItemStack;
        read(arg0: $Inventory): void;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setChanged(): void;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        writeToNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        writeToNbt(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CompoundTag;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        clearContent(): void;
        readFromNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNbt(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        canAdd(arg0: $ItemStack_): boolean;
        canAdd(arg0: $List_<$ItemStack_>): boolean;
        hasItemList(): boolean;
        canShift(): boolean;
        canInput(): boolean;
        setTypeItemSlot(arg0: $Inventory$TypeItemSlot_): void;
        addExperimental(arg0: $ItemStack_): number;
        addExperimental(arg0: $ItemStack_, arg1: boolean): number;
        acceptAllOrIndex(): boolean;
        canOutput(): boolean;
        getTypeItemSlot(): $Inventory$TypeItemSlot;
        getStackSizeLimit(): number;
        setStackSizeLimit(arg0: number): void;
        getTypeSlot(): $EnumTypeSlot;
        getTypeSlot(arg0: number): $EnumTypeSlot;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        self(): $Container;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        getHeight(): number;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: $Inventory$TypeItemSlot_, arg2: number);
        constructor(arg0: number);
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $InventoryStorageMiniPanels extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityMiniPanels);
    }
    export class $InventoryDischarge extends $Inventory {
        discharge(arg0: number, arg1: boolean): number;
        setTier(arg0: number): void;
        dischargeWithRedstone(arg0: number, arg1: number): number;
        tier: number;
        allowRedstoneDust: boolean;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: $Inventory$TypeItemSlot_, arg2: number, arg3: boolean);
        constructor(arg0: $CustomWorldContainer, arg1: number);
        constructor(arg0: $CustomWorldContainer, arg1: $Inventory$TypeItemSlot_, arg2: number);
    }
    export class $InventoryGenSunarrium extends $Inventory {
        coefday(): $List<number>;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntitySolarGeneratorEnergy);
    }
    export class $InventoryLimiter extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityLimiter);
    }
    export class $InventoryPatternOutput extends $Inventory implements $VirtualSlot {
        getFluidStackList(): $List<$FluidStack>;
        setFluid(arg0: number, arg1: $SameStack): void;
        isFluid(): boolean;
        setFluidList(arg0: $List_<$FluidStack_>): void;
        canPlaceVirtualItem(arg0: number, arg1: $ItemStack_): boolean;
        sameStackList: $List<$SameStack>;
        booleanList: $List<boolean>;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityPatternMonitor, arg1: number);
        get fluidStackList(): $List<$FluidStack>;
        set fluidList(value: $List_<$FluidStack_>);
    }
    export class $InventoryDigger extends $Inventory implements $ITypeSlot {
        stackSizeLimit: number;
        tile: $BlockEntityAutoDigger;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityAutoDigger);
    }
    export class $InventoryCharge extends $Inventory {
        charge(arg0: number): number;
        setTier(arg0: number): void;
        setIgnore(arg0: boolean): void;
        tier: number;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: number);
        set ignore(value: boolean);
    }
    export class $SlotArmor extends $Slot {
        getEquipmentSlotForItem(arg0: $ItemStack_): $EquipmentSlot;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(arg0: $Inventory$1, arg1: $EquipmentSlot_, arg2: number, arg3: number);
    }
    export class $InventoryInput extends $Inventory {
        tool: $ItemStack;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityAutoDigger, arg1: number);
    }
    export class $InventoryQuantumQuarry extends $Inventory implements $ITypeSlot {
        stackSizeLimit: number;
        tile: $BlockEntityBaseQuantumQuarry;
        type: number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityBaseQuantumQuarry, arg1: number, arg2: number);
    }
    export class $InventoryAutoCrafting extends $TransientCraftingContainer {
        menu: $AbstractContainerMenu;
        constructor(arg0: $BlockEntityAutoCrafter);
    }
    export class $InventoryTank extends $InventoryFluid implements $ITypeSlot {
        tank: $IFluidTank;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: $Inventory$TypeItemSlot_, arg2: number, arg3: $InventoryFluid$TypeFluidSlot_, arg4: $IFluidTank);
    }
    export class $InventoryDrainTank extends $InventoryFluid implements $ITypeSlot {
        acceptsLiquid(arg0: $Fluid_): boolean;
        getPossibleFluids(): $Iterable<$Fluid>;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: $Inventory$TypeItemSlot_, arg2: number, arg3: $InventoryFluid$TypeFluidSlot_, ...arg4: $Fluid_[]);
        get possibleFluids(): $Iterable<$Fluid>;
    }
    export class $InventoryHydroTurbineRotorBlades extends $Inventory implements $ITypeSlot {
        work(): void;
        consume(arg0: number, arg1: boolean): void;
        consume(arg0: number): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityHydroTurbineController);
    }
    export class $InventoryWaterRotor extends $Inventory implements $ITypeSlot {
        damage(arg0: number, arg1: number): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityBaseWaterGenerator);
    }
    export class $InventoryModules extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityAutoSpawner);
    }
    export class $InventoryUpgrade extends $Inventory implements $ITypeSlot {
        getItemHandler(arg0: $BlockPos_, arg1: $Level_, arg2: $Direction_): $IItemHandler;
        getFluidHandler(arg0: $BlockPos_ | null, arg1: $Level_, arg2: $Direction_): $IFluidHandler;
        getEnergyStorage(arg0: number, arg1: number, arg2: number): number;
        getEnergyStorage(arg0: number): number;
        getEnergyStorage(arg0: number): number;
        static getDirection(arg0: $ItemStack_): $Direction;
        getTier(arg0: number): number;
        tickNoMark(): boolean;
        getOperationsPerTick(arg0: number): number;
        insertItem2(arg0: $HandlerInventory, arg1: number, arg2: $ItemStack_, arg3: boolean): $ItemStack;
        insertItem1(arg0: $HandlerInventory, arg1: $ItemStack_, arg2: boolean, arg3: number): $ItemStack;
        canItemStacksStack(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getEnergyDemand(arg0: number): number;
        getEnergyDemand(arg0: number): number;
        getOperationLength(arg0: number): number;
        getEnergyDemand1(arg0: number): number;
        getOperationLength1(arg0: number): number;
        getOperationsPerTick1(arg0: number): number;
        processTimeMultiplier: number;
        extraProcessTime: number;
        extraEnergyDemand: number;
        tick: number;
        energyStorageMultiplier: number;
        energyDemandMultiplier: number;
        energyConsume: number;
        operationsPerTick: number;
        operationLength: number;
        extraTier: number;
        extraEnergyStorage: number;
        isUpdate: boolean;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: number);
    }
    export class $InventorySubstitute extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityEnergySubstitute);
    }
    export class $InventoryExpStorage extends $Inventory implements $ITypeSlot {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityStorageExp);
    }
    export class $InventoryUpgradeModule extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityAutoSpawner);
    }
    export class $InventoryFluid extends $Inventory {
        fill(arg0: $FluidStack_, arg1: $MutableObject<$ItemStack_>, arg2: boolean): number;
        drain(arg0: $Fluid_, arg1: number, arg2: $MutableObject<$ItemStack_>, arg3: boolean): $FluidStack;
        processFromTank(arg0: $IFluidTank, arg1: $InventoryOutput): boolean;
        transferFromTank(arg0: $IFluidTank, arg1: $MutableObject<$ItemStack_>, arg2: boolean): boolean;
        setTypeFluidSlot(arg0: $InventoryFluid$TypeFluidSlot_): void;
        transferToTank(arg0: $IFluidTank, arg1: $MutableObject<$ItemStack_>, arg2: boolean): boolean;
        processIntoTank(arg0: $IFluidTank, arg1: $InventoryOutput): boolean;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: number);
        constructor(arg0: $CustomWorldContainer, arg1: $Inventory$TypeItemSlot_, arg2: number, arg3: $InventoryFluid$TypeFluidSlot_);
        set typeFluidSlot(value: $InventoryFluid$TypeFluidSlot_);
    }
    export class $InventoryCombinerSEG extends $Inventory implements $ITypeSlot {
        getMaxEnergy(): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityCombinerSEGenerators);
        get maxEnergy(): number;
    }
    export class $InventorySintezator extends $Inventory {
        solartype(): number;
        wirelessmodule(): void;
        checkmodule(): void;
        tile: $BlockEntitySintezator;
        type: number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntitySintezator, arg1: string, arg2: number, arg3: number);
    }
    export class $InventoryOutputMiniPanels extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityMiniPanels);
    }
    export class $InventoryModule extends $Inventory implements $ITypeSlot {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: number);
    }
    export class $HandlerInventory {
        getHandler(): $IItemHandler;
        getInventory(): $Container;
        constructor(arg0: $IItemHandler, arg1: $Container);
        get handler(): $IItemHandler;
        get inventory(): $Container;
    }
    export class $CableItem {
        getCount(): number;
        addCount(arg0: number): void;
        getStack(): $ItemStack;
        getProvider(): number;
        shrink(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: $ItemStack_);
        constructor(arg0: number, arg1: $ItemStack_);
        get count(): number;
        get stack(): $ItemStack;
        get provider(): number;
    }
    export class $InventoryGlassMiniPanels extends $Inventory {
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityMiniPanels);
    }
    export class $InventoryFluidByList extends $InventoryFluid implements $ITypeSlot {
        setUsually(arg0: boolean): void;
        getAcceptedFluids(): $Set<$Fluid>;
        setAcceptedFluids(arg0: $Set_<$Fluid_>): void;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: number, arg3: $Fluid_, arg4: $InventoryFluid$TypeFluidSlot_);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $List_<$Fluid_>);
        constructor(arg0: $BlockEntityInventory, arg1: number, ...arg2: $Fluid_[]);
        constructor(arg0: $BlockEntityInventory, arg1: number, arg2: $Fluid_);
        constructor(arg0: $BlockEntityInventory, arg1: $Inventory$TypeItemSlot_, arg2: number, arg3: $InventoryFluid$TypeFluidSlot_, ...arg4: $Fluid_[]);
        set usually(value: boolean);
    }
    export class $InventoryMatter extends $Inventory implements $ITypeSlot {
        getFluidTank(arg0: $InventoryMatter): number;
        getMaxEnergy(arg0: $InventoryMatter): number;
        getcostEnergy(arg0: $InventoryMatter): number;
        getMatterenergy(arg0: $ItemStack_): number;
        getMattercostenergy(arg0: $ItemStack_): number;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityCombinerMatter);
    }
}
