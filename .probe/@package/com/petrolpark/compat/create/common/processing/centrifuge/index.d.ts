import { $Level } from "@package/net/minecraft/world/level";
import { $IRecipeBookAcceptorBlockEntity } from "@package/com/petrolpark/core/recipe/book";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Ingredient, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_ } from "@package/java/util";
import { $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";
import { $RandomSource } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/petrolpark/compat/create/common/processing/centrifuge" {
    export class $CentrifugationEvent extends $Event {
        addRecipe(arg0: $ICentrifugationRecipe): void;
        getCentrifuge(): $CentrifugeBlockEntity;
        constructor(arg0: $CentrifugeBlockEntity);
        get centrifuge(): $CentrifugeBlockEntity;
    }
    export class $CentrifugeBlockEntity extends $KineticBlockEntity implements $IRecipeBookAcceptorBlockEntity {
        process(): void;
        isFull(arg0: $SmartFluidTankBehaviour): boolean;
        getItemHandler(arg0: $Direction_): $ItemStackHandler;
        getFluidHandler(arg0: $Direction_): $IFluidHandler;
        spawnParticles(): void;
        acceptOutputs(arg0: $List_<$ItemStack_>, arg1: $FluidStack_, arg2: $FluidStack_, arg3: boolean): boolean;
        getProcessingSpeed(): number;
        acceptsRecipeBook(arg0: $RecipeHolder_<never>): boolean;
        getMatchingRecipes(): $List<$ICentrifugationRecipe>;
        getInputStack(): $FluidStack;
        getEachTankCapacity(): number;
        onAvailableRecipesChanged(): void;
        addProxyRecipeBookAcceptorPositions(arg0: $Consumer_<$BlockPos>): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        sourceIndex: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get processingSpeed(): number;
        get matchingRecipes(): $List<$ICentrifugationRecipe>;
        get inputStack(): $FluidStack;
        get eachTankCapacity(): number;
    }
    export class $ICentrifugationRecipe {
    }
    export interface $ICentrifugationRecipe {
        apply(arg0: $CentrifugeBlockEntity, arg1: boolean): boolean;
        getFluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        rollLuckyResults(arg0: $SmartBlockEntity, arg1: $RandomSource): $List<$ItemStack>;
        getProcessingDuration(): number;
        getRollableResults(): $List<$ProcessingOutput>;
        getDenseOutputFluid(): $FluidStack;
        getLightOutputFluid(): $FluidStack;
        getCentrifugationIngredients(): $NonNullList<$Ingredient>;
        get fluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        get processingDuration(): number;
        get rollableResults(): $List<$ProcessingOutput>;
        get denseOutputFluid(): $FluidStack;
        get lightOutputFluid(): $FluidStack;
        get centrifugationIngredients(): $NonNullList<$Ingredient>;
    }
}
