import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $RecipeItem$RecipeRecord, $RecipeItem$RecipeRecord_ } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/item";
import { $StockpotArmAutomation } from "@package/com/bmt/kaleidoscope_compat/compat/create";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $MillstoneBlockEntityAccessor, $StockpotBlockEntityAccessor as $StockpotBlockEntityAccessor$1 } from "@package/com/bmt/kaleidoscope_compat/mixins/kaleidoscope_cookery/accessor";
import { $List_ } from "@package/java/util";
import { $BaseBlockEntity } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity";
import { $ISoupBase } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/recipe/soupbase";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IStockpot, $IMillstone } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/blockentity";
import { $BlockPos, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $MillstoneRecipe, $StockpotVisuals, $StockpotRecipe_ } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/recipe";
import { $StockpotInput, $SimpleInput } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/container";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $StockpotBlockEntityAccessor } from "@package/com/mastermarisa/kaleidoscopecookery_automation/mixin";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity/kitchen" {
    export class $MillstoneBlockEntity extends $BaseBlockEntity implements $IMillstone, $MillstoneBlockEntityAccessor {
        getOutputs(): $IItemHandler;
        tick(arg0: $Level_): void;
        getRotation(arg0: $Level_, arg1: number): number;
        hasEntity(): boolean;
        sendActionBarMessage(arg0: $LivingEntity, arg1: string, ...arg2: $Object[]): void;
        bindEntity(arg0: $Mob): void;
        saddleEntityIsControlling(arg0: $Mob): boolean;
        onPutItem(arg0: $Level_, arg1: $ItemStack_): boolean;
        canBindEntity(arg0: $Mob): boolean;
        getCacheRot(): number;
        matchRecipe(arg0: $SimpleInput, arg1: $Level_): ($RecipeHolder<$MillstoneRecipe>) | undefined;
        isOutputEmpty(): boolean;
        setCacheRot(arg0: number): void;
        resetWhenTakeout(): void;
        getLiftAngle(): number;
        getProgressPercent(): number;
        setInput(arg0: $ItemStack_): void;
        getInput(): $ItemStack;
        getProgress(): number;
        setProgress(arg0: number): void;
        getRotSpeedTick(): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        static MAX_INPUT_COUNT: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get outputs(): $IItemHandler;
        get outputEmpty(): boolean;
        get liftAngle(): number;
        get progressPercent(): number;
        get rotSpeedTick(): number;
    }
    export class $StockpotBlockEntity extends $BaseBlockEntity implements $IStockpot, $StockpotBlockEntityAccessor, $IHaveGoggleInformation, $StockpotBlockEntityAccessor$1, $StockpotArmAutomation {
        isEmpty(): boolean;
        getInput(): $StockpotInput;
        getResult(): $ItemStack;
        getIcon(arg0: boolean): $ItemStack;
        removeIngredient(arg0: $Level_, arg1: $LivingEntity): boolean;
        getInputs(): $NonNullList<$ItemStack>;
        tick(arg0: $Level_): void;
        getStatus(): number;
        setRecipe(arg0: $Level_): void;
        clientTick(): void;
        getSoupBase(): $ISoupBase;
        addSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        addIngredient(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        getTakeoutCount(): number;
        takeOutProduct(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        hasHeatSource(arg0: $Level_): boolean;
        addToGoggleTooltip(arg0: $List_<any>, arg1: boolean): boolean;
        hasLid(): boolean;
        getLidItem(): $ItemStack;
        setLidItem(arg0: $ItemStack_): void;
        kaleidoscopeCompat$setStoredRecipeClient(arg0: $RecipeItem$RecipeRecord_): void;
        setStatus(arg0: number): void;
        onLitClick(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        kaleidoscopeCompat$setStoredRecipe(arg0: $RecipeItem$RecipeRecord_): void;
        kaleidoscopeCompat$getStoredRecipe(): $RecipeItem$RecipeRecord;
        addAllIngredients(arg0: $List_<$ItemStack_>, arg1: $LivingEntity): void;
        removeSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        getSoupBaseId(): $ResourceLocation;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        kaleidoscopeCompat$setResult(arg0: $ItemStack_): void;
        kaleidoscopeCompat$setTakeoutCount(arg0: number): void;
        kaleidoscopeCompat$setSoupBaseId(arg0: $ResourceLocation_): void;
        kaleidoscopeCompat$setCurrentTick(arg0: number): void;
        kaleidoscopeCompat$setRecipeId(arg0: $ResourceLocation_): void;
        kaleidoscopeCompat$getRecipeId(): $ResourceLocation;
        kaleidoscopeCompat$getSoupBaseId(): $ResourceLocation;
        invokeApplyRecipe(arg0: $Level_, arg1: $StockpotInput, arg2: $RecipeHolder_<$StockpotRecipe_>): void;
        worldPosition: $BlockPos;
        static MAX_TAKEOUT_COUNT: number;
        visuals: $StockpotVisuals;
        level: $Level;
        renderEntity: $Entity;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get empty(): boolean;
        get input(): $StockpotInput;
        get result(): $ItemStack;
        get inputs(): $NonNullList<$ItemStack>;
        set recipe(value: $Level_);
        get soupBase(): $ISoupBase;
        get takeoutCount(): number;
        get soupBaseId(): $ResourceLocation;
    }
}
