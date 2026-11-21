import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $InventoryFluidByList, $Inventory } from "@package/com/denfop/inventory";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_, $ArrayList, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $Fluids$InternalFluidTank, $SteamProcessMultiComponent, $BioProcessMultiComponent, $ProcessMultiComponent, $Fluids } from "@package/com/denfop/componets";
import { $ITypeSlot } from "@package/com/denfop/api/widget";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $IInputItemStack } from "@package/com/denfop/recipe";

declare module "@package/com/denfop/api/recipe" {
    export class $Input implements $IInput {
        getInputs(): $List<$IInputItemStack>;
        getFluid(): $FluidStack;
        static readNBT(arg0: $CompoundTag_, arg1: $RegistryAccess): $Input;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        getAllStackInputs(): $List<$ItemStack>;
        getStackInputs(): $List<$ItemStack>;
        getFluidInputs(): $List<$FluidStack>;
        hasFluids(): boolean;
        constructor(...arg0: $FluidStack_[]);
        constructor(arg0: $FluidStack_, arg1: $List_<$IInputItemStack>);
        constructor(arg0: $List_<$IInputItemStack>);
        constructor(...arg0: $IInputItemStack[]);
        constructor(arg0: $FluidStack_, ...arg1: $IInputItemStack[]);
        get inputs(): $List<$IInputItemStack>;
        get fluid(): $FluidStack;
        get allStackInputs(): $List<$ItemStack>;
        get stackInputs(): $List<$ItemStack>;
        get fluidInputs(): $List<$FluidStack>;
    }
    export class $RecipesCore implements $IRecipes {
        reset(): void;
        init(): void;
        optimize(): void;
        removeAll(arg0: string): void;
        getRecipeStack(arg0: string): $Set<$Map$Entry<$ItemStack, $BaseMachineRecipe>>;
        getRecipeFluid(): $RecipesFluidCore;
        getRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, ...arg3: $ItemStack_[]): $BaseMachineRecipe;
        getRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $BaseMachineRecipe;
        getRecipeOutput(arg0: string, arg1: boolean, ...arg2: $ItemStack_[]): $BaseMachineRecipe;
        addAdderRecipe(arg0: string, arg1: $BaseMachineRecipe): void;
        getRecipeMachineRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $MachineRecipe;
        addAllRecipesFromList(): void;
        getMap_recipe_managers(): $List<string>;
        removeAllRecipesFromList(): void;
        initializationRecipes(): void;
        addRecipe(arg0: string, arg1: $BaseMachineRecipe): void;
        setCanAdd(arg0: boolean): void;
        getRecipe(arg0: string): $IBaseRecipe;
        getRecipeList(arg0: string): $List<$BaseMachineRecipe>;
        reloadRecipes(arg0: string): void;
        removeRecipe(arg0: string, arg1: $RecipeOutput): void;
        removeRecipe(arg0: string, arg1: $ItemStack_): void;
        getRecipeMachineMultiOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $MachineRecipe;
        getRecipeOutputFromInstruments(arg0: string, arg1: boolean, ...arg2: $ItemStack_[]): $BaseMachineRecipe;
        getMap_recipe_managers_itemStack(arg0: string): $RecipeArrayList<$IRecipeInputStack>;
        getRecipeOutputMachineFluid(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>, arg4: $FluidTank): $MachineRecipe;
        getRecipeOutputMachineFluid(arg0: string, arg1: boolean, arg2: $List_<$ItemStack_>, arg3: $FluidTank): $MachineRecipe;
        getRecipesForInit(): $List<$IHasRecipe>;
        addRecipeList(arg0: string, arg1: $List_<$BaseMachineRecipe>): void;
        addInitRecipes(arg0: $IHasRecipe): void;
        addRecipeManager(arg0: string, arg1: number, arg2: boolean, arg3: boolean): void;
        addRecipeManager(arg0: string, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): void;
        addRecipeManager(arg0: string, arg1: number, arg2: boolean): void;
        removeAllRecipe(arg0: string, arg1: boolean, arg2: $RecipeOutput): void;
        needContinue(arg0: $MachineRecipe, arg1: $InventoryRecipes, arg2: $FluidTank): boolean;
        needContinue(arg0: $MachineRecipe, arg1: $InventoryRecipes): boolean;
        getRecipeConsume(arg0: $IBaseRecipe, arg1: $MachineRecipe, arg2: boolean, arg3: $List_<$ItemStack_>): $BaseMachineRecipe;
        addRemoveRecipe(arg0: string, arg1: $ItemStack_, arg2: boolean): void;
        addRemoveRecipe(arg0: string, arg1: $ItemStack_): void;
        addFluidRemoveRecipe(arg0: string, arg1: $FluidStack_, arg2: boolean): void;
        addFluidRemoveRecipe(arg0: string, arg1: $FluidStack_): void;
        getInputFluidsFromRecipe(arg0: string): $List<$Fluid>;
        getRecipeMultiOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $BaseMachineRecipe;
        getRecipeMachineOutput(arg0: string, arg1: boolean, ...arg2: $ItemStack_[]): $MachineRecipe;
        getMachineRecipeConsume(arg0: $IBaseRecipe, arg1: $MachineRecipe, arg2: boolean, arg3: $List_<$ItemStack_>): $MachineRecipe;
        addFluidItemRemoveRecipe(arg0: string, arg1: $ItemStack_, arg2: boolean): void;
        addFluidAdderRecipe(arg0: string, arg1: $BaseFluidMachineRecipe): void;
        getRecipeOutputFluid(arg0: $IBaseRecipe, arg1: $MachineRecipe, arg2: boolean, arg3: $List_<$ItemStack_>, arg4: $FluidTank): $BaseMachineRecipe;
        getRecipeOutputFluid(arg0: string, arg1: boolean, arg2: $List_<$ItemStack_>, arg3: $FluidTank): $BaseMachineRecipe;
        recipeAdders: $List<$RecipeAdder>;
        recipeRemoves: $List<$RecipeRemove>;
        recipeFluidItemRemoves: $List<$RecipeRemove>;
        canAdd: boolean;
        map_recipes: $Map<string, $List<$BaseMachineRecipe>>;
        map_fluid_input: $Map<string, $List<$Fluid>>;
        map_recipe_managers: $Map<string, $IBaseRecipe>;
        recipeFluidRemoves: $List<$RecipeFluidRemove>;
        recipeFluidAdders: $List<$RecipeFluidAdder>;
        map_recipe_managers_itemStack: $Map<string, $RecipeArrayList<$IRecipeInputStack>>;
        constructor();
        get recipeFluid(): $RecipesFluidCore;
        get recipesForInit(): $List<$IHasRecipe>;
    }
    export class $IFluidRecipes {
    }
    export interface $IFluidRecipes {
    }
    export class $ISlotInv {
    }
    export interface $ISlotInv {
        accepts(arg0: number, arg1: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ISlotInv}.
     */
    export type $ISlotInv_ = ((arg0: number, arg1: $ItemStack) => boolean);
    export class $FluidHandlerRecipe {
        getName(): $IBaseRecipe;
        load(): void;
        load(arg0: $ItemStack_): void;
        setName(arg0: string): void;
        output(): $BaseFluidMachineRecipe;
        consume(arg0: $FluidTank): void;
        consume(): void;
        getOutput(arg0: $FluidTank): $BaseFluidMachineRecipe;
        getOutput(): $BaseFluidMachineRecipe;
        getOutput(arg0: $ItemStack_): $BaseFluidMachineRecipe;
        getComponent(): $Fluids;
        getFluids(arg0: number): $List<$Fluid>;
        setOutput(arg0: $BaseFluidMachineRecipe): void;
        hasFluid(arg0: $FluidStack_, arg1: $FluidTank): boolean;
        fillFluid(): void;
        fillFluid(arg0: $FluidStack_): void;
        getInputTank(): $List<$FluidTank>;
        checkOutput(arg0: $FluidTank): void;
        checkOutput(): void;
        canOperate(): boolean;
        getOutputFluids(arg0: number): $List<$Fluid>;
        checkFluids(): boolean;
        canFillFluid(arg0: $FluidStack_): boolean;
        canFillFluid(): boolean;
        getOutputTank(): $List<$FluidTank>;
        canOperate1(arg0: $FluidTank): boolean;
        canFillFluid1(): boolean;
        setTanks(arg0: $List_<$Fluids$InternalFluidTank>): void;
        fillFluid1(): void;
        drainFluid(arg0: $FluidStack_, arg1: $FluidTank): void;
        getList_recipe(): $List<$BaseFluidMachineRecipe>;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Fluids);
        get component(): $Fluids;
        get inputTank(): $List<$FluidTank>;
        get outputTank(): $List<$FluidTank>;
        set tanks(value: $List_<$Fluids$InternalFluidTank>);
        get list_recipe(): $List<$BaseFluidMachineRecipe>;
    }
    export class $BaseMachineRecipe {
        matches(arg0: $List_<$ItemStack_>): boolean;
        getOutput(): $RecipeOutput;
        static readNBT(arg0: $CompoundTag_, arg1: $RegistryAccess): $BaseMachineRecipe;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        output: $RecipeOutput;
        input: $IInput;
        constructor(arg0: $IInput, arg1: $RecipeOutput);
    }
    export class $BaseFluidMachineRecipe {
        matches(arg0: $List_<$FluidStack_>): boolean;
        getInput(): $IInputFluid;
        getOutput(): $RecipeOutput;
        static readNBT(arg0: $CompoundTag_, arg1: $RegistryAccess): $BaseFluidMachineRecipe;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        getOutput_fluid(): $List<$FluidStack>;
        input: $IInputFluid;
        output_fluid: $List<$FluidStack>;
        constructor(arg0: $IInputFluid, arg1: $RecipeOutput, arg2: $List_<$FluidStack_>);
        constructor(arg0: $IInputFluid, arg1: $RecipeOutput);
        constructor(arg0: $IInputFluid, arg1: $List_<$FluidStack_>);
        get output(): $RecipeOutput;
    }
    export class $IInputFluid {
    }
    export interface $IInputFluid {
        getStack(): $IInputItemStack;
        getInputs(): $List<$FluidStack>;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        get stack(): $IInputItemStack;
        get inputs(): $List<$FluidStack>;
    }
    export class $InventoryMultiRecipes extends $Inventory {
        load(): void;
        process(arg0: number): $MachineRecipe;
        consume(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        consume(arg0: number): $MachineRecipe;
        consume(arg0: number, arg1: number, arg2: number): void;
        consume(arg0: $MachineRecipe): $BaseMachineRecipe;
        consume(arg0: number, arg1: number): void;
        getRecipe(): $IBaseRecipe;
        changeAccepts(arg0: $ItemStack_): void;
        continue_proccess(arg0: $InventoryOutput, arg1: number): boolean;
        fastprocess(arg0: number): $MachineRecipe;
        setNameRecipe(arg0: string): void;
        recycler_output: $MachineRecipe;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: $FluidTank, arg4: number, arg5: $ProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: number, arg4: $ProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: $IBaseRecipe, arg2: $IMultiUpdateTick, arg3: number, arg4: $ProcessMultiComponent);
        get recipe(): $IBaseRecipe;
        set nameRecipe(value: string);
    }
    export class $RecipeFluidRemove {
        getStack(): $FluidStack;
        isRemoveAll(): boolean;
        getNameRecipe(): string;
        constructor(arg0: string, arg1: $FluidStack_, arg2: boolean);
        get stack(): $FluidStack;
        get removeAll(): boolean;
        get nameRecipe(): string;
    }
    export class $InventorySteamMultiRecipes extends $Inventory {
        load(): void;
        process(arg0: number): $MachineRecipe;
        consume(arg0: number): $MachineRecipe;
        consume(arg0: number, arg1: number, arg2: number): void;
        consume(arg0: $MachineRecipe): $BaseMachineRecipe;
        consume(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        consume(arg0: number, arg1: number): void;
        getRecipe(): $IBaseRecipe;
        changeAccepts(arg0: $ItemStack_): void;
        continue_proccess(arg0: $InventoryOutput, arg1: number): boolean;
        fastprocess(arg0: number): $MachineRecipe;
        setNameRecipe(arg0: string): void;
        recycler_output: $MachineRecipe;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: $FluidTank, arg4: number, arg5: $SteamProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: number, arg4: $SteamProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: $IBaseRecipe, arg2: $IMultiUpdateTick, arg3: number, arg4: $SteamProcessMultiComponent);
        get recipe(): $IBaseRecipe;
        set nameRecipe(value: string);
    }
    export class $InventoryOutput extends $Inventory {
        add(arg0: $ItemStack_, arg1: number): void;
        add(arg0: $List_<$ItemStack_>, arg1: number): boolean;
        addWithoutIgnoring(arg0: $List_<$ItemStack_>, arg1: boolean): boolean;
        base: $CustomWorldContainer;
        constructor(arg0: $CustomWorldContainer, arg1: number);
    }
    export class $RecipeAdder {
        getName(): string;
        getBaseMachineRecipe(): $BaseMachineRecipe;
        constructor(arg0: string, arg1: $BaseMachineRecipe);
        get name(): string;
        get baseMachineRecipe(): $BaseMachineRecipe;
    }
    export class $IMultiUpdateTick {
    }
    export interface $IMultiUpdateTick extends $IUpdateTick {
        getRecipeOutput(arg0: number): $MachineRecipe;
        setRecipeOutput(arg0: $MachineRecipe, arg1: number): void;
    }
    export class $MachineRecipe {
        getList(): $List<number>;
        getRecipe(): $BaseMachineRecipe;
        constructor(arg0: $BaseMachineRecipe, arg1: $List_<number>);
        get list(): $List<number>;
        get recipe(): $BaseMachineRecipe;
    }
    export class $RecipeInfo {
        getStack(): $ItemStack;
        getCol(): number;
        getPacket(arg0: $RegistryAccess): $CustomPacketBuffer;
        constructor(arg0: $ItemStack_, arg1: number);
        constructor(arg0: $CustomPacketBuffer);
        get stack(): $ItemStack;
        get col(): number;
    }
    export class $IRecipeInputStack {
    }
    export interface $IRecipeInputStack {
        getInput(): $IInputItemStack;
        matched(arg0: $ItemStack_): boolean;
        getItemStack(): $List<$ItemStack>;
        get input(): $IInputItemStack;
        get itemStack(): $List<$ItemStack>;
    }
    export class $InventoryRecipes extends $Inventory implements $ITypeSlot {
        load(): void;
        getIndex(): number;
        process(): $MachineRecipe;
        consume(arg0: number, arg1: $MachineRecipe): void;
        consume(arg0: number, arg1: number): void;
        consume(): $BaseMachineRecipe;
        consume(arg0: number, arg1: number, arg2: boolean): void;
        getTile(): $IUpdateTick;
        setIndex(arg0: number): void;
        setRecipe(arg0: string): void;
        setRecipe(arg0: $IBaseRecipe): void;
        getTank(): $Fluids$InternalFluidTank;
        getRecipe(): $IBaseRecipe;
        setInvSlotConsumableLiquidByList(arg0: $InventoryFluidByList): void;
        getRecipe_list(): $List<$BaseMachineRecipe>;
        changeAccepts(arg0: $ItemStack_): void;
        continue_proccess(arg0: $InventoryOutput): boolean;
        continue_process(arg0: $MachineRecipe): boolean;
        tile: $IUpdateTick;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IUpdateTick, arg3: $Fluids$InternalFluidTank);
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IUpdateTick);
        constructor(arg0: $BlockEntityInventory, arg1: $IBaseRecipe, arg2: $IUpdateTick);
        get tank(): $Fluids$InternalFluidTank;
        set invSlotConsumableLiquidByList(value: $InventoryFluidByList);
        get recipe_list(): $List<$BaseMachineRecipe>;
    }
    export class $IBaseRecipe {
    }
    export interface $IBaseRecipe {
        getSize(): number;
        getName(): string;
        consume(): boolean;
        require(): boolean;
        workbench(): boolean;
        get size(): number;
        get name(): string;
    }
    export class $RecipeOutput {
        metadata: $CompoundTag;
        items: $List<$ItemStack>;
        constructor(arg0: $CompoundTag_, arg1: $List_<$ItemStack_>);
        constructor(arg0: $CompoundTag_, ...arg1: $ItemStack_[]);
    }
    export class $InventoryBioMultiRecipes extends $Inventory {
        load(): void;
        process(arg0: number): $MachineRecipe;
        consume(arg0: number): $MachineRecipe;
        consume(arg0: number, arg1: number, arg2: number): void;
        consume(arg0: $MachineRecipe): $BaseMachineRecipe;
        consume(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        consume(arg0: number, arg1: number): void;
        getRecipe(): $IBaseRecipe;
        changeAccepts(arg0: $ItemStack_): void;
        continue_proccess(arg0: $InventoryOutput, arg1: number): boolean;
        fastprocess(arg0: number): $MachineRecipe;
        setNameRecipe(arg0: string): void;
        recycler_output: $MachineRecipe;
        base: $CustomWorldContainer;
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: $FluidTank, arg4: number, arg5: $BioProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: string, arg2: $IMultiUpdateTick, arg3: number, arg4: $BioProcessMultiComponent);
        constructor(arg0: $BlockEntityInventory, arg1: $IBaseRecipe, arg2: $IMultiUpdateTick, arg3: number, arg4: $BioProcessMultiComponent);
        get recipe(): $IBaseRecipe;
        set nameRecipe(value: string);
    }
    export class $RecipeFluidAdder {
        getName(): string;
        getBaseMachineRecipe(): $BaseFluidMachineRecipe;
        constructor(arg0: string, arg1: $BaseFluidMachineRecipe);
        get name(): string;
        get baseMachineRecipe(): $BaseFluidMachineRecipe;
    }
    export class $IPatternStorage {
    }
    export interface $IPatternStorage {
        getPatterns(): $List<$RecipeInfo>;
        addPattern(arg0: $RecipeInfo): boolean;
        get patterns(): $List<$RecipeInfo>;
    }
    export class $ReplicatorRecipe {
        static add(arg0: $Item_, arg1: number): void;
        static add(arg0: $Block_, arg1: number): void;
        static add(arg0: string, arg1: number): void;
        static add(arg0: $ItemStack_, arg1: number): void;
        static init(): void;
        static getInBuckets(arg0: $ItemStack_): number;
        constructor();
    }
    export class $RecipeManager implements $IBaseRecipe {
        getSize(): number;
        getName(): string;
        consume(): boolean;
        require(): boolean;
        workbench(): boolean;
        constructor(arg0: string, arg1: number, arg2: boolean);
        constructor(arg0: string, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean);
        constructor(arg0: string, arg1: number, arg2: boolean, arg3: boolean);
        get size(): number;
        get name(): string;
    }
    export class $RecipeInputFluidStack implements $IRecipeInputFluidStack {
        matched(arg0: $FluidStack_): boolean;
        getItemStack(): $List<$FluidStack>;
        constructor(arg0: $FluidStack_);
        get itemStack(): $List<$FluidStack>;
    }
    export class $RecipesFluidCore implements $IFluidRecipes {
        init(): void;
        getRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseFluidMachineRecipe>, arg2: boolean, arg3: $ItemStack_): $BaseFluidMachineRecipe;
        getRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseFluidMachineRecipe>, arg2: boolean, ...arg3: $FluidStack_[]): $BaseFluidMachineRecipe;
        getRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseFluidMachineRecipe>, arg2: boolean, arg3: $List_<$FluidStack_>): $BaseFluidMachineRecipe;
        initializationRecipes(): void;
        addRecipe(arg0: string, arg1: $BaseFluidMachineRecipe): void;
        getRecipes(): $List<string>;
        getRecipeList(arg0: string): $List<$BaseFluidMachineRecipe>;
        addInitRecipes(arg0: $IHasRecipe): void;
        addRecipeManager(arg0: string, arg1: number, arg2: boolean): void;
        removeAllRecipe(arg0: string, arg1: boolean, arg2: $ItemStack_): void;
        removeAllRecipe(arg0: string, arg1: boolean, arg2: $FluidStack_): void;
        getRecipeFromName(arg0: string): $IBaseRecipe;
        map_recipes_fluid: $Map<string, $List<$BaseFluidMachineRecipe>>;
        map_recipe_managers: $Map<string, $IBaseRecipe>;
        map_recipe_managers_itemStack: $Map<string, $List<$IRecipeInputFluidStack>>;
        constructor();
        get recipes(): $List<string>;
    }
    export class $IInput {
    }
    export interface $IInput {
        getInputs(): $List<$IInputItemStack>;
        getFluid(): $FluidStack;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        getAllStackInputs(): $List<$ItemStack>;
        getStackInputs(): $List<$ItemStack>;
        getFluidInputs(): $List<$FluidStack>;
        hasFluids(): boolean;
        get inputs(): $List<$IInputItemStack>;
        get fluid(): $FluidStack;
        get allStackInputs(): $List<$ItemStack>;
        get stackInputs(): $List<$ItemStack>;
        get fluidInputs(): $List<$FluidStack>;
    }
    export class $IRecipeInputFluidStack {
    }
    export interface $IRecipeInputFluidStack {
        matched(arg0: $FluidStack_): boolean;
        getItemStack(): $List<$FluidStack>;
        get itemStack(): $List<$FluidStack>;
    }
    export class $RecipeArrayList<T extends $IRecipeInputStack> extends $ArrayList<T> {
        contains(arg0: $ItemStack_): boolean;
        constructor();
    }
    export class $RecipeRemove {
        getStack(): $ItemStack;
        isRemoveAll(): boolean;
        getNameRecipe(): string;
        constructor(arg0: string, arg1: $ItemStack_, arg2: boolean);
        get stack(): $ItemStack;
        get removeAll(): boolean;
        get nameRecipe(): string;
    }
    export class $IUpdateTick {
    }
    export interface $IUpdateTick {
        getRecipeOutput(arg0: number): $MachineRecipe;
        getRecipeOutput(): $MachineRecipe;
        onUpdate(): void;
        setRecipeOutput(arg0: number, arg1: $MachineRecipe): void;
        setRecipeOutput(arg0: $MachineRecipe): void;
    }
    export class $InputFluid implements $IInputFluid {
        getStack(): $IInputItemStack;
        getInputs(): $List<$FluidStack>;
        static readNBT(arg0: $CompoundTag_, arg1: $RegistryAccess): $InputFluid;
        writeNBT(arg0: $RegistryAccess): $CompoundTag;
        constructor(arg0: $IInputItemStack);
        constructor(arg0: $ItemStack_, ...arg1: $FluidStack_[]);
        constructor(arg0: $IInputItemStack, ...arg1: $FluidStack_[]);
        constructor(arg0: $List_<$FluidStack_>);
        constructor(...arg0: $FluidStack_[]);
        constructor(arg0: string);
        constructor(arg0: $ItemStack_);
        get stack(): $IInputItemStack;
        get inputs(): $List<$FluidStack>;
    }
    export class $IHasRecipe {
    }
    export interface $IHasRecipe {
        getName(): string;
        init(): void;
        get name(): string;
    }
    export class $RecipeInputStack implements $IRecipeInputStack {
        getInput(): $IInputItemStack;
        matched(arg0: $ItemStack_): boolean;
        getItemStack(): $List<$ItemStack>;
        constructor(arg0: $IInputItemStack);
        constructor(arg0: $ItemStack_);
        get input(): $IInputItemStack;
        get itemStack(): $List<$ItemStack>;
    }
    export class $IRecipes {
    }
    export interface $IRecipes {
        reset(): void;
        optimize(): void;
        removeAll(arg0: string): void;
        getRecipeStack(arg0: string): $Set<$Map$Entry<$ItemStack, $BaseMachineRecipe>>;
        getRecipeFluid(): $RecipesFluidCore;
        getRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $BaseMachineRecipe;
        getRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, ...arg3: $ItemStack_[]): $BaseMachineRecipe;
        getRecipeOutput(arg0: string, arg1: boolean, ...arg2: $ItemStack_[]): $BaseMachineRecipe;
        addAdderRecipe(arg0: string, arg1: $BaseMachineRecipe): void;
        getRecipeMachineRecipeOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $MachineRecipe;
        addAllRecipesFromList(): void;
        getMap_recipe_managers(): $List<string>;
        removeAllRecipesFromList(): void;
        initializationRecipes(): void;
        addRecipe(arg0: string, arg1: $BaseMachineRecipe): void;
        getRecipe(arg0: string): $IBaseRecipe;
        getRecipeList(arg0: string): $List<$BaseMachineRecipe>;
        reloadRecipes(arg0: string): void;
        removeRecipe(arg0: string, arg1: $RecipeOutput): void;
        removeRecipe(arg0: string, arg1: $ItemStack_): void;
        getRecipeMachineMultiOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $MachineRecipe;
        getRecipeOutputFromInstruments(arg0: string, arg1: boolean, ...arg2: $ItemStack_[]): $BaseMachineRecipe;
        getMap_recipe_managers_itemStack(arg0: string): $RecipeArrayList<$IRecipeInputStack>;
        getRecipeOutputMachineFluid(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>, arg4: $FluidTank): $MachineRecipe;
        getRecipeOutputMachineFluid(arg0: string, arg1: boolean, arg2: $List_<$ItemStack_>, arg3: $FluidTank): $MachineRecipe;
        getRecipesForInit(): $List<$IHasRecipe>;
        addRecipeList(arg0: string, arg1: $List_<$BaseMachineRecipe>): void;
        addInitRecipes(arg0: $IHasRecipe): void;
        addRecipeManager(arg0: string, arg1: number, arg2: boolean): void;
        removeAllRecipe(arg0: string, arg1: boolean, arg2: $RecipeOutput): void;
        needContinue(arg0: $MachineRecipe, arg1: $InventoryRecipes): boolean;
        needContinue(arg0: $MachineRecipe, arg1: $InventoryRecipes, arg2: $FluidTank): boolean;
        getRecipeConsume(arg0: $IBaseRecipe, arg1: $MachineRecipe, arg2: boolean, arg3: $List_<$ItemStack_>): $BaseMachineRecipe;
        addRemoveRecipe(arg0: string, arg1: $ItemStack_, arg2: boolean): void;
        addRemoveRecipe(arg0: string, arg1: $ItemStack_): void;
        addFluidRemoveRecipe(arg0: string, arg1: $FluidStack_, arg2: boolean): void;
        addFluidRemoveRecipe(arg0: string, arg1: $FluidStack_): void;
        getInputFluidsFromRecipe(arg0: string): $List<$Fluid>;
        getRecipeMultiOutput(arg0: $IBaseRecipe, arg1: $List_<$BaseMachineRecipe>, arg2: boolean, arg3: $List_<$ItemStack_>): $BaseMachineRecipe;
        getRecipeMachineOutput(arg0: string, arg1: boolean, ...arg2: $ItemStack_[]): $MachineRecipe;
        getMachineRecipeConsume(arg0: $IBaseRecipe, arg1: $MachineRecipe, arg2: boolean, arg3: $List_<$ItemStack_>): $MachineRecipe;
        addFluidItemRemoveRecipe(arg0: string, arg1: $ItemStack_, arg2: boolean): void;
        addFluidAdderRecipe(arg0: string, arg1: $BaseFluidMachineRecipe): void;
        getRecipeOutputFluid(arg0: $IBaseRecipe, arg1: $MachineRecipe, arg2: boolean, arg3: $List_<$ItemStack_>, arg4: $FluidTank): $BaseMachineRecipe;
        getRecipeOutputFluid(arg0: string, arg1: boolean, arg2: $List_<$ItemStack_>, arg3: $FluidTank): $BaseMachineRecipe;
        get recipeFluid(): $RecipesFluidCore;
        get map_recipe_managers(): $List<string>;
        get recipesForInit(): $List<$IHasRecipe>;
    }
}
