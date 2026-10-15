import { $ICell } from "@package/com/denfop/api/storage/cell";
import { $HolderLookup$Provider, $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $DataComponentMap } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_, $Collection } from "@package/java/util";
import { $ElectricStorage } from "@package/com/denfop/api/storage";
import { $Tuple } from "@package/net/minecraft/util";
export * as graph from "@package/com/denfop/api/storage/autocrafting/graph";

declare module "@package/com/denfop/api/storage/autocrafting" {
    export class $AutoCraftSystem {
        getCount(): number;
        getAutoCraftOutput(): $AutoCraftOutput;
        getIndex(): number;
        isEnd(): boolean;
        setIndex(arg0: number): void;
        writeToTag(arg0: $HolderLookup$Provider): $CompoundTag;
        static readFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $AutoCraftSystem;
        getAutoStacks(): $List<$AutoCraftStack>;
        getReservedFluidSlots(): $Map<string, $Map<$SameStack, number>>;
        getReservedItemSlots(): $Map<string, $Map<$SameStack, number>>;
        removeCountAutoCraftStack(arg0: number): void;
        removeReserve(arg0: $SameStack, arg1: number): void;
        addReserve(arg0: $SameStack, arg1: number): void;
        addReserve(arg0: $Map_<string, $Map_<$SameStack, number>>, arg1: string, arg2: $SameStack, arg3: number): void;
        constructor(arg0: $AutoCraftOutput, arg1: $List_<$AutoCraftStack>);
        get count(): number;
        get autoCraftOutput(): $AutoCraftOutput;
        get end(): boolean;
        get autoStacks(): $List<$AutoCraftStack>;
        get reservedFluidSlots(): $Map<string, $Map<$SameStack, number>>;
        get reservedItemSlots(): $Map<string, $Map<$SameStack, number>>;
    }
    export class $Processor {
    }
    export interface $Processor extends $ElectricStorage {
        getId(): number;
        canAddAutoCraft(): boolean;
        getAutoCrafts(): $Collection<$AutoCraftSystem>;
        addAutoCraft(arg0: $AutoCraftSystem): void;
        cancelAutoCraft(arg0: number): void;
        getAutoCraft(arg0: number): $AutoCraftSystem;
        removeCraft(arg0: number): void;
        getItemsForCraft(arg0: number): $Map<string, $Map<$SameStack, number>>;
        removeNetworkCraft(arg0: number): void;
        setId(arg0: number): void;
        getMaxSize(): number;
        getIndexes(): $Set<number>;
        getAllItemsForCraft(): $Map<number, $Map<string, $Map<$SameStack, number>>>;
        get autoCrafts(): $Collection<$AutoCraftSystem>;
        get maxSize(): number;
        get indexes(): $Set<number>;
        get allItemsForCraft(): $Map<number, $Map<string, $Map<$SameStack, number>>>;
    }
    export class $AutoCraftVisualStep extends $Record {
        stack(): $Object;
        create(): number;
        need(): number;
        willBeCreate(): number;
        have(): number;
        constructor(stack: $Object, have: number, create: number, need: number, willBeCreate: number);
    }
    /**
     * Values that may be interpreted as {@link $AutoCraftVisualStep}.
     */
    export type $AutoCraftVisualStep_ = { have?: number, need?: number, create?: number, stack?: $Object, willBeCreate?: number,  } | [have?: number, need?: number, create?: number, stack?: $Object, willBeCreate?: number, ];
    export class $AutoCraftStack {
        getAll(): number;
        writeToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $AutoCraftStack;
        getSameStack(): $SameStack;
        getCreate(): number;
        getPatternStack(): $PatternStack;
        removeCreate(arg0: number): void;
        removeAllAmount(arg0: number): void;
        addCreate(arg0: number): void;
        addAmountAll(arg0: number): void;
        getAllPart(): $Tuple<$PatternStack, $SameStack>;
        constructor(arg0: $Tuple<$PatternStack_, $SameStack>, arg1: number);
        constructor(arg0: $Tuple<$PatternStack_, $SameStack>, arg1: number, arg2: number);
        get all(): number;
        get sameStack(): $SameStack;
        get create(): number;
        get patternStack(): $PatternStack;
        get allPart(): $Tuple<$PatternStack, $SameStack>;
    }
    export class $AutoCraftSystemVisual {
        getAutoCraftOutput(): $AutoCraftOutput;
        create(arg0: $List_<$PatternStack_>, arg1: $List_<$ICell>, arg2: $List_<$ICell>): void;
        getOutput(): $SameStack;
        writeToNBT(arg0: $RegistryAccess): $CompoundTag;
        static readFromNBT(arg0: $CompoundTag_, arg1: $RegistryAccess): $AutoCraftSystemVisual;
        getVisualSteps(): $List<$AutoCraftVisualStep>;
        canAddToProcessor(): boolean;
        getStacksForCraft(): $Map<$SameStack, number>;
        getPatternStackList(): $List<$AutoCraftStack>;
        constructor(arg0: $SameStack);
        get autoCraftOutput(): $AutoCraftOutput;
        get output(): $SameStack;
        get visualSteps(): $List<$AutoCraftVisualStep>;
        get stacksForCraft(): $Map<$SameStack, number>;
        get patternStackList(): $List<$AutoCraftStack>;
    }
    export class $TypeRecipe extends $Enum<$TypeRecipe> {
        static values(): $TypeRecipe[];
        static valueOf(arg0: string): $TypeRecipe;
        static WORKBENCH: $TypeRecipe;
        static BLOCK: $TypeRecipe;
    }
    /**
     * Values that may be interpreted as {@link $TypeRecipe}.
     */
    export type $TypeRecipe_ = "workbench" | "block";
    export class $SameStack {
        isEmpty(): boolean;
        getKey(): string;
        copy(): $SameStack;
        copyWithFluid(): $SameStack;
        addCount(arg0: number): void;
        addCount(arg0: number, arg1: boolean): void;
        getStack(): $ItemStack;
        getTag(): $DataComponentMap;
        isCorrect(arg0: $FluidStack_): boolean;
        isCorrect(arg0: $ItemStack_): boolean;
        setStack(arg0: $ItemStack_): void;
        getAmount(arg0: boolean): number;
        getAmount(): number;
        setFluidStack(arg0: $FluidStack_): void;
        setAmount(arg0: number, arg1: boolean): void;
        setAmount(arg0: number): void;
        isFluid(): boolean;
        writeToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getFluidStack(): $FluidStack;
        static readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $SameStack;
        isItem(): boolean;
        static EMPTY: $DataComponentMap;
        key: string;
        constructor(arg0: $FluidStack_);
        constructor(arg0: $ItemStack_);
        constructor();
        get empty(): boolean;
        get tag(): $DataComponentMap;
        get fluid(): boolean;
        get item(): boolean;
    }
    export class $AutoCraftStorage extends $Record {
        stack(): $SameStack;
        amount(): number;
        getAmount(): number;
        getSameStack(): $SameStack;
        constructor(stack: $SameStack, amount: number);
        get sameStack(): $SameStack;
    }
    /**
     * Values that may be interpreted as {@link $AutoCraftStorage}.
     */
    export type $AutoCraftStorage_ = { stack?: $SameStack, amount?: number,  } | [stack?: $SameStack, amount?: number, ];
    export class $PatternStack extends $Record {
        matches(arg0: $List_<$SameStack>): boolean;
        location(): $ResourceLocation;
        writePattern(arg0: $ItemStack_, arg1: $RegistryAccess): $ItemStack;
        static readFromComponent(arg0: $ItemStack_, arg1: $HolderLookup$Provider): $PatternStack;
        output(): $List<$SameStack>;
        inputs(): $List<$SameStack>;
        typeRecipe(): $TypeRecipe;
        writeToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $PatternStack;
        static hasPatternComponent(arg0: $ItemStack_): boolean;
        writePatternLegacy(arg0: $ItemStack_, arg1: $RegistryAccess): $ItemStack;
        constructor(inputs: $List_<$SameStack>, output: $List_<$SameStack>, typeRecipe: $TypeRecipe_, location: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PatternStack}.
     */
    export type $PatternStack_ = { typeRecipe?: $TypeRecipe_, output?: $List_<$SameStack>, inputs?: $List_<$SameStack>, location?: $ResourceLocation_,  } | [typeRecipe?: $TypeRecipe_, output?: $List_<$SameStack>, inputs?: $List_<$SameStack>, location?: $ResourceLocation_, ];
    export class $AutoCraftOutput {
        count(): number;
        getIndex(): number;
        getAll(): number;
        setIndex(arg0: number): void;
        getAmount(): number;
        writeToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $AutoCraftOutput;
        addAmount(arg0: number): void;
        patternStack(): $PatternStack;
        getSameStack(): $SameStack;
        getCreate(): number;
        getPatternStack(): $PatternStack;
        removeCreate(arg0: number): void;
        removeAllAmount(arg0: number): void;
        addCreate(arg0: number): void;
        removeAmount(arg0: number): void;
        constructor(arg0: $Tuple<$PatternStack_, $SameStack>, arg1: number);
        constructor(arg0: $Tuple<$PatternStack_, $SameStack>, arg1: number, arg2: number, arg3: number);
        get all(): number;
        get amount(): number;
        get sameStack(): $SameStack;
        get create(): number;
    }
}
