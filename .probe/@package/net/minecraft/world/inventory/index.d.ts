import { $CraftingResultSlotAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $SmithingRecipe, $RecipeType_, $Recipe, $RecipeHolder, $CraftingInput, $SmithingRecipeInput_, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ExtendedInventory$DelayedSlotPopulation } from "@package/com/petrolpark/core/inventory/extended";
import { $AccessorCraftingMenu, $AccessorCrafterMenu, $AccessorInventoryMenu } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $ContainerListener as $ContainerListener$1, $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $MerchantOffer, $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $SlotAccessor as $SlotAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $IChipwareSlotsMenu } from "@package/com/perigrine3/createcybernetics/api";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $EnchantmentMenuAccessor } from "@package/fuzs/easymagic/mixin/accessor";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerLevelAccessMixin } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $AbstractContainerMenuAccessor, $AbstractContainerMenuInvoker } from "@package/com/perigrine3/createcybernetics/mixin";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $UISyncManager } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $IModularUIHolderMenu } from "@package/com/lowdragmc/lowdraglib2/gui/holder";
import { $Set_, $Map, $Set, $OptionalInt, $List, $List_, $Optional } from "@package/java/util";
import { $SlotAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Supplier_, $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $AbstractContainerMenuAccessor as $AbstractContainerMenuAccessor$2 } from "@package/fuzs/stylisheffects/mixin/client/accessor";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $EnchantmentInstance } from "@package/net/minecraft/world/item/enchantment";
import { $AbstractContainerMenuAccessor as $AbstractContainerMenuAccessor$1 } from "@package/com/denfop/mixin/access";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Record, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $BigSlot } from "@package/com/periut/chisel/gui";
import { $StonecutterMenuAccessor } from "@package/einstein/subtle_effects/mixin/common";
import { $ItemSlot } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AccessorTransientCraftingContainer } from "@package/xfacthd/framedblocks/mixin";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(stack: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(furnaceMenu: $AbstractFurnaceMenu, furnaceContainer: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorInventoryMenu, $IChipwareSlotsMenu {
        static isHotbarSlot(index: number): boolean;
        cc$chipwareSlotsActive(): boolean;
        getOwner(): $Player;
        getResultSlots(): $ResultContainer;
        getCraftSlots(): $CraftingContainer;
        quickcraftSlots: $Set<$Slot>;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static TEXTURE_EMPTY_SLOTS: $Map<$EquipmentSlot, $ResourceLocation>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        static SLOT_IDS: $EquipmentSlot[];
        stateId: number;
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static CONTAINER_ID: number;
        constructor(playerInventory: $Inventory, active: boolean, owner: $Player);
        get resultSlots(): $ResultContainer;
        get craftSlots(): $CraftingContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(player: $Player, merchant: $Merchant, slots: $MerchantContainer, slot: number, xPosition: number, yPosition: number);
    }
    export class $SlotRanges {
        static allNames(): $Stream<string>;
        static singleSlotNames(): $Stream<string>;
        static nameToIds(name: string): $SlotRange;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(container: $Container, owner: $LivingEntity, slot: $EquipmentSlot_, slotIndex: number, x: number, y: number, emptyIcon: $ResourceLocation_ | null);
    }
    export class $ResultSlot extends $Slot implements $CraftingResultSlotAccessor {
        getInput(): $CraftingContainer;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(player: $Player, craftSlots: $CraftingContainer, container: $Container, slot: number, xPosition: number, yPosition: number);
        get input(): $CraftingContainer;
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, inventory: $Inventory, horseContainer: $Container, horse: $AbstractHorse, columns: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        handler$kee000$petrolpark$propagateContaminantsAndStartDecay(arg0: $CallbackInfo, arg1: $SmithingRecipeInput_, arg2: $List_<any>, arg3: $RecipeHolder_<any>, arg4: $ItemStack_): void;
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        selectedRecipe: $RecipeHolder<$SmithingRecipe>;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        resultSlotIndex: number;
        static TEMPLATE_SLOT: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        static BASE_SLOT: number;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(containerId: number, playerInventory: $Inventory): T;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getId(): string;
        kjs$getKey(): $ResourceKey<any>;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(_constructor: $MenuType$MenuSupplier_<T>, requiredFeatures: $FeatureFlagSet);
        get mod(): string;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
        get idLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        getActiveOffer(): $MerchantOffer;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getFutureXp(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        updateSellItem(): void;
        setSelectionHint(currentRecipeIndex: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        constructor(merchant: $Merchant);
        get activeOffer(): $MerchantOffer;
        get containerSize(): number;
        get futureXp(): number;
        set selectionHint(value: number);
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        static encodeEffect(effect: $Holder_<$MobEffect> | null): number;
        getPrimaryEffect(): $Holder<$MobEffect>;
        getSecondaryEffect(): $Holder<$MobEffect>;
        static decodeEffect(effectId: number): $Holder<$MobEffect>;
        updateEffects(primaryEffect: ($Holder_<$MobEffect>) | undefined, secondaryEffect: ($Holder_<$MobEffect>) | undefined): void;
        getLevels(): number;
        hasPayment(): boolean;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, container: $Container);
        constructor(containerId: number, container: $Container, beaconData: $ContainerData, access: $ContainerLevelAccess_);
        get primaryEffect(): $Holder<$MobEffect>;
        get secondaryEffect(): $Holder<$MobEffect>;
        get levels(): number;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorCraftingMenu {
        static slotChangedCraftingGrid(menu: $AbstractContainerMenu, level: $Level_, player: $Player, craftSlots: $CraftingContainer, resultSlots: $ResultContainer, recipe: $RecipeHolder_<$CraftingRecipe> | null): void;
        getPlayer(): $Player;
        getResultSlots(): $ResultContainer;
        getCraftSlots(): $CraftingContainer;
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlots(): $ResultContainer;
        get craftSlots(): $CraftingContainer;
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(container: $Container, slot: number, x: number, y: number, menu: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        /**
         * Gets the inventory associated with this chest container.
         * 
         * @see #field_75155_e
         */
        getContainer(): $Container;
        wrapOperation$kco000$petrolpark$removeAppliedDecay(arg0: $Slot, arg1: $Operation_<any>): $ItemStack;
        static threeRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static threeRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        getRowCount(): number;
        static oneRow(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fiveRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fourRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static twoRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(type: $MenuType_<never>, containerId: number, playerInventory: $Inventory, container: $Container, rows: number);
        get container(): $Container;
        get rowCount(): number;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, smokerContainer: $Container, smokerData: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getBrewingTicks(): number;
        getFuel(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, brewingStandContainer: $Container, brewingStandData: $ContainerData);
        get brewingTicks(): number;
        get fuel(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(containerId: number, playerInventory: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getBook(): $ItemStack;
        getPage(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static BUTTON_PREV_PAGE: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number);
        constructor(containerId: number, lectern: $Container, lecternData: $ContainerData);
        get book(): $ItemStack;
        get page(): number;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getWidth(): number;
        getHeight(): number;
        getItems(): $List<$ItemStack>;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        get width(): number;
        get height(): number;
        get items(): $List<$ItemStack>;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        getResultSlot(): $Slot;
        getBannerSlot(): $Slot;
        getPatternSlot(): $Slot;
        getSelectedBannerPatternIndex(): number;
        wrapOperation$bph000$supplementaries$supp$flagStuff(arg0: $ItemStack_, arg1: $Operation_<any>): $Item;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        registerUpdateListener(listener: $Runnable_): void;
        getDyeSlot(): $Slot;
        quickcraftSlots: $Set<$Slot>;
        slotUpdateListener: $Runnable;
        lastSoundTime: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        bannerSlot: $Slot;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        dyeSlot: $Slot;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        selectedBannerPatternIndex: $DataSlot;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): $Slot;
        get patternSlot(): $Slot;
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(contents: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        handler$cae000$supplementaries$supp$preventInsertion(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(container: $Container, slot: number, x: number, y: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        isActiveChest(enderChest: $EnderChestBlockEntity): boolean;
        setActiveChest(enderChestBlockEntity: $EnderChestBlockEntity): void;
        size: number;
        listeners: $List<$ContainerListener$1>;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getSlot(slot: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        getResultSlotIndex(): number;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getNumOfInputSlots(): number;
        getInputSlotIndexes(): $List<number>;
        hasSlot(slot: number): boolean;
        constructor(slots: $List_<$ItemCombinerMenuSlotDefinition$SlotDefinition_>, resultSlot: $ItemCombinerMenuSlotDefinition$SlotDefinition_);
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        get resultSlotIndex(): number;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get numOfInputSlots(): number;
        get inputSlotIndexes(): $List<number>;
    }
    export class $SlotRange {
        static of(name: string, values: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu implements $EnchantmentMenuAccessor {
        getGoldCount(): number;
        getEnchantmentList(registryAccess: $RegistryAccess, stack: $ItemStack_, slot: number, cost: number): $List<$EnchantmentInstance>;
        getRandom(): $RandomSource;
        callGetEnchantmentList(registryAccess: $RegistryAccess, stack: $ItemStack_, slot: number, cost: number): $List<$EnchantmentInstance>;
        getEnchantmentSeed(): $DataSlot;
        /**
         * Callback for when the crafting matrix is changed.
         */
        setEnchantSlots(inventory: $Container): void;
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        random: $RandomSource;
        ldlib2$itemSlotMap: $Map<any, any>;
        enchantSlots: $Container;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        costs: number[];
        stateId: number;
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
        enchantmentSeed: $DataSlot;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get goldCount(): number;
    }
    export class $ContainerLevelAccess {
        static create(level: $Level_, pos: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess extends $ContainerLevelAccessMixin {
        execute(levelPosConsumer: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>, defaultValue: T): T;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        handler$boc000$supplementaries$supp$getItem(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $Level_, arg4: $BlockPos_, arg5: $CallbackInfo, arg6: $MapItemSavedData): void;
        handler$boc000$supplementaries$supp$getItem(arg0: $Player, arg1: number, arg2: $CallbackInfoReturnable<any>, arg3: $ItemStack_, arg4: $Slot, arg5: $ItemStack_): void;
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        static ADDITIONAL_SLOT: number;
        lastSoundTime: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        mayPickup(player: $Player, hasStack: boolean): boolean;
        onTake(player: $Player, stack: $ItemStack_): void;
        isValidBlock(state: $BlockState_): boolean;
        /**
         * Called when the Anvil Input Slot changes, calculates the new result and puts it in the output slot.
         */
        createResult(): void;
        createContainer(size: number): $SimpleContainer;
        createResultSlot(slotDefinition: $ItemCombinerMenuSlotDefinition): void;
        getResultSlot(): number;
        createInputSlots(slotDefinition: $ItemCombinerMenuSlotDefinition): void;
        getSlotToQuickMoveTo(stack: $ItemStack_): number;
        createInputSlotDefinitions(): $ItemCombinerMenuSlotDefinition;
        canMoveIntoInputSlots(stack: $ItemStack_): boolean;
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        resultSlotIndex: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(type: $MenuType_<never> | null, containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getRecipeUsed(): $RecipeHolder<never>;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        constructor();
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, furnaceContainer: $Container, furnaceData: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> {
        isLit(): boolean;
        canSmelt(stack: $ItemStack_): boolean;
        getLitProgress(): number;
        getBurnProgress(): number;
        isFuel(stack: $ItemStack_): boolean;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(menuType: $MenuType_<never>, recipeType: $RecipeType_<$AbstractCookingRecipe>, recipeBookType: $RecipeBookType_, containerId: number, playerInventory: $Inventory);
        constructor(menuType: $MenuType_<never>, recipeType: $RecipeType_<$AbstractCookingRecipe>, recipeBookType: $RecipeBookType_, containerId: number, playerInventory: $Inventory, container: $Container, data: $ContainerData);
        get lit(): boolean;
        get litProgress(): number;
        get burnProgress(): number;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        static CONTAINER_SIZE: number;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        constructor(size: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu implements $StonecutterMenuAccessor {
        /**
         * Reset the drag fields
         */
        setupResultSlot(): void;
        /**
         * Returns the index of the selected recipe.
         */
        getNumRecipes(): number;
        hasInputItem(): boolean;
        registerUpdateListener(listener: $Runnable_): void;
        /**
         * Returns the index of the selected recipe.
         */
        getSelectedRecipeIndex(): number;
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        getInputSlot(): $Slot;
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        lastSoundTime: number;
        slotUpdateListener: $Runnable;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        resultSlot: $Slot;
        ldlib2$itemSlotMap: $Map<any, any>;
        inputSlot: $Slot;
        resultContainer: $ResultContainer;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static INPUT_SLOT: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get numRecipes(): number;
        get selectedRecipeIndex(): number;
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu {
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $AbstractContainerMenu implements $IModularUIHolderMenu, $AbstractContainerMenuAccessor$2, $AbstractContainerMenuAccessor$1, $AbstractContainerMenuAccessor, $AbstractContainerMenuInvoker, $ExtendedInventory$DelayedSlotPopulation {
        getSlot(slotId: number): $Slot;
        getType(): $MenuType<never>;
        /**
         * Called when the container is closed.
         */
        removed(player: $Player): void;
        setData(id: number, data: number): void;
        /**
         * Determines whether supplied player can use this container
         */
        stillValid(player: $Player): boolean;
        static stillValid(access: $ContainerLevelAccess_, player: $Player, targetBlock: $Block_): boolean;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        getItems(): $NonNullList<$ItemStack>;
        clicked(slotId: number, button: number, clickType: $ClickType_, player: $Player): void;
        getCarried(): $ItemStack;
        setCarried(stack: $ItemStack_): void;
        /**
         * Puts an ItemStack in a slot.
         */
        setItem(slotId: number, stateId: number, stack: $ItemStack_): void;
        wrapOperation$ffn000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        /**
         * Adds an item slot to this container
         */
        addSlot(slot: $Slot): $Slot;
        doClick(slotId: number, button: number, clickType: $ClickType_, player: $Player): void;
        /**
         * Returns `true` if the player can "drag-spilt" items into this slot. Returns `true` by default. Called to check if the slot can be added to a list of Slots to split the held ItemStack across.
         */
        canDragTo(slot: $Slot): boolean;
        getStateId(): number;
        transferState(menu: $AbstractContainerMenu): void;
        addSlotListener(listener: $ContainerListener): void;
        setRemoteSlot(slot: number, stack: $ItemStack_): void;
        setSynchronizer(synchronizer: $ContainerSynchronizer): void;
        addDataSlot(intValue: $DataSlot): $DataSlot;
        removeSlotListener(listener: $ContainerListener): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastFullState(): void;
        static checkContainerSize(container: $Container, minSize: number): void;
        isValidSlotIndex(slotIndex: number): boolean;
        addDataSlots(array: $ContainerData): void;
        /**
         * Handles the given Button-click on the server, currently only used by enchanting. Name is for legacy.
         */
        clickMenuButton(player: $Player, id: number): boolean;
        static getQuickcraftMask(quickCraftingHeader: number, quickCraftingType: number): number;
        incrementStateId(): number;
        ldlib2$getItemSlot(arg0: $Slot): $ItemSlot;
        setRemoteCarried(stack: $ItemStack_): void;
        /**
         * Merges provided ItemStack with the first available one in the container/player inventor between minIndex (included) and maxIndex (excluded). Args : stack, minIndex, maxIndex, negativDirection. [!] the Container implementation do not check if the item is valid for the slot
         */
        moveItemStackTo(stack: $ItemStack_, startIndex: number, endIndex: number, reverseDirection: boolean): boolean;
        /**
         * Callback for when the crafting matrix is changed.
         */
        slotsChanged(container: $Container): void;
        /**
         * Handle when the stack in slot `index` is shift-clicked. Normally this moves the stack between the player inventory and the other inventory(s).
         */
        quickMoveStack(player: $Player, index: number): $ItemStack;
        clearContainer(player: $Player, container: $Container): void;
        ldlib2$addSlot(arg0: $ItemSlot): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resetQuickCraft(): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftType(clickedButton: number): number;
        initializeContents(stateId: number, items: $List_<any>, carried: $ItemStack_): void;
        handler$lep000$ae2things$CLONE(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player, arg4: $CallbackInfo): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastChanges(): void;
        wrapOperation$kmh000$azurelib$detectSlotChangeWithAzureID(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$ffn000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$ffn000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$kmh000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$kmh000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        /**
         * Like the version that takes an inventory. If the given BlockEntity is not an Inventory, 0 is returned instead.
         */
        static getRedstoneSignalFromBlockEntity(blockEntity: $BlockEntity | null): number;
        static getRedstoneSignalFromContainer(container: $Container | null): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        populateDelayedSlots(): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        synchronizeCarriedToRemote(): void;
        static isValidQuickcraftType(dragMode: number, player: $Player): boolean;
        /**
         * Called to determine if the current slot is valid for the stack merging (double-click) code. The stack passed in is null for the initial slot that was double-clicked.
         */
        canTakeItemForPickAll(stack: $ItemStack_, slot: $Slot): boolean;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resumeRemoteUpdates(): void;
        createCarriedSlotAccess(): $SlotAccess;
        ldlib2$setModularUI(arg0: $ModularUI): void;
        static getQuickCraftPlaceCount(slots: $Set_<$Slot>, type: number, stack: $ItemStack_): number;
        /**
         * Checks if it's possible to add the given itemstack to the given slot.
         */
        static canItemQuickReplace(slot: $Slot | null, stack: $ItemStack_, stackSizeMatters: boolean): boolean;
        setRemoteSlotNoCopy(slot: number, stack: $ItemStack_): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftHeader(clickedButton: number): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        sendAllDataToRemote(): void;
        ldlib2$getModularUI(): $ModularUI;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        suppressRemoteUpdates(): void;
        static checkContainerDataCount(intArray: $ContainerData, minSize: number): void;
        updateDataSlotListeners(id: number, data: number): void;
        findSlot(container: $Container, slotIndex: number): $OptionalInt;
        addSlot(arg0: $ItemSlot): void;
        getModularUI(): $ModularUI;
        getItemSlot(arg0: $Slot): $ItemSlot;
        setModularUI(arg0: $ModularUI): void;
        hasModularUI(): boolean;
        getSyncManager(): $UISyncManager;
        self(): $AbstractContainerMenu;
        /**
         * Returns `true` if the player can "drag-spilt" items into this slot. Returns `true` by default. Called to check if the slot can be added to a list of Slots to split the held ItemStack across.
         */
        isItemSlot(slot: $Slot): boolean;
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        /**
         * Adds an item slot to this container
         */
        cc$invokeAddSlot(slot: $Slot): $Slot;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        cc$getSlots(): $NonNullList<$Slot>;
        getMenuType(): $MenuType<never>;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        invokeSynchronizeCarriedToRemote(): void;
        invokeSynchronizeSlotToRemote(slotIndex: number, stack: $ItemStack_, supplier: $Supplier_<$ItemStack>): void;
        /**
         * Merges provided ItemStack with the first available one in the container/player inventor between minIndex (included) and maxIndex (excluded). Args : stack, minIndex, maxIndex, negativDirection. [!] the Container implementation do not check if the item is valid for the slot
         */
        cc$invokeMoveItemStackTo(stack: $ItemStack_, startIndex: number, endIndex: number, reverseDirection: boolean): boolean;
        invokeTriggerSlotListeners(slotIndex: number, stack: $ItemStack_, supplier: $Supplier_<$ItemStack>): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(menuType: $MenuType_<never> | null, containerId: number);
        get type(): $MenuType<never>;
        get items(): $NonNullList<$ItemStack>;
        get syncManager(): $UISyncManager;
    }
    export class $Slot implements $SlotAccessor, $SlotAccessor$1, $BigSlot {
        /**
         * Decrease the size of the stack in slot (first int arg) by the amount of the second int arg. Returns the new stack.
         */
        remove(amount: number): $ItemStack;
        set(stack: $ItemStack_): void;
        /**
         * Returns if this slot contains a stack.
         */
        isActive(): boolean;
        /**
         * Helper function to get the stack in the slot.
         */
        getItem(): $ItemStack;
        /**
         * Returns if this slot contains a stack.
         */
        hasItem(): boolean;
        wrapMethod$ked000$petrolpark$removeAppliedDecay(arg0: $Player, arg1: $ItemStack_, arg2: $Operation_<any>): void;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        /**
         * Returns if this slot contains a stack.
         */
        isHighlightable(): boolean;
        isSameInventory(arg0: $Slot): boolean;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        /**
         * Called when the stack in a Slot changes
         */
        setChanged(): void;
        /**
         * Check if the stack is allowed to be placed in this slot, used for armor slots as well as furnace fuel.
         */
        mayPlace(stack: $ItemStack_): boolean;
        safeTake(count: number, decrement: number, player: $Player): $ItemStack;
        mayPickup(player: $Player): boolean;
        onTake(stack: $Player, arg1: $ItemStack_): void;
        safeInsert(stack: $ItemStack_): $ItemStack;
        safeInsert(stack: $ItemStack_, increment: number): $ItemStack;
        tryRemove(count: number, decrement: number, player: $Player): ($ItemStack) | undefined;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        checkTakeAchievements(stack: $ItemStack_): void;
        setByPlayer(stack: $ItemStack_): void;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        setByPlayer(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        /**
         * Typically increases an internal count, then calls `onCrafting(item)`.
         */
        onQuickCraft(stack: $ItemStack_, amount: number): void;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        onQuickCraft(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getContainerSlot(): number;
        onSwapCraft(numItemsCrafted: number): void;
        handler$mak000$chisel$canBeHighlightedBig(cir: $CallbackInfoReturnable<any>): void;
        allowModification(player: $Player): boolean;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getSlotIndex(): number;
        setBigSlot(bigSlot: boolean): $Slot;
        /**
         * Returns if this slot contains a stack.
         */
        isBigSlot(): boolean;
        /**
         * Returns if this slot contains a stack.
         */
        isFake(): boolean;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getY(): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getX(): number;
        setX(numItemsCrafted: number): void;
        setY(numItemsCrafted: number): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(container: $Container, slot: number, x: number, y: number);
        get active(): boolean;
        get item(): $ItemStack;
        get highlightable(): boolean;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get containerSlot(): number;
        get slotIndex(): number;
        get fake(): boolean;
    }
    export class $DataSlot {
        get(): number;
        set(value: number): void;
        static shared(data: number[], idx: number): $DataSlot;
        static standalone(): $DataSlot;
        static forContainer(data: $ContainerData, idx: number): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static FARMERSDELIGHT_COOKING: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static REFURBISHED_FURNITURE_FREEZER: $RecipeBookType;
        static REFURBISHED_FURNITURE_MICROWAVE: $RecipeBookType;
        static REFURBISHED_FURNITURE_OVEN: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker" | "farmersdelight_cooking" | "refurbished_furniture_freezer" | "refurbished_furniture_microwave" | "refurbished_furniture_oven";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        x(): number;
        y(): number;
        slotIndex(): number;
        mayPlace(): $Predicate<$ItemStack>;
        static EMPTY: $ItemCombinerMenuSlotDefinition$SlotDefinition;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number,  } | [x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer, $AccessorTransientCraftingContainer {
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        getItems(): $List<$ItemStack>;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        fillStackedContents(contents: $StackedContents): void;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        self(): $Container;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        framedblocks$getItems(): $NonNullList<$ItemStack>;
        menu: $AbstractContainerMenu;
        constructor(menu: $AbstractContainerMenu, width: number, height: number);
        constructor(menu: $AbstractContainerMenu, width: number, height: number, items: $NonNullList<$ItemStack_>);
        get items(): $List<$ItemStack>;
        get containerSize(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendInitialData(container: $AbstractContainerMenu, items: $NonNullList<$ItemStack_>, carriedItem: $ItemStack_, initialData: number[]): void;
        sendDataChange(container: $AbstractContainerMenu, id: number, value: number): void;
        sendSlotChange(container: $AbstractContainerMenu, slot: number, itemStack: $ItemStack_): void;
        sendCarriedChange(containerMenu: $AbstractContainerMenu, stack: $ItemStack_): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu {
        canRestock(): boolean;
        getOffers(): $MerchantOffers;
        /**
         * `ClientPacketListener` uses this to set offers for the client side MerchantContainer.
         */
        setOffers(offers: $MerchantOffers): void;
        tryMoveItems(level: number): void;
        showProgressBar(): boolean;
        getFutureTraderXp(): number;
        getTraderLevel(): number;
        setMerchantLevel(level: number): void;
        setSelectionHint(level: number): void;
        getTraderXp(): number;
        setCanRestock(canRestock: boolean): void;
        setShowProgressBar(canRestock: boolean): void;
        setXp(level: number): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static PAYMENT1_SLOT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static PAYMENT2_SLOT: number;
        stateId: number;
        trader: $Merchant;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, trader: $Merchant);
        get futureTraderXp(): number;
        get traderLevel(): number;
        set merchantLevel(value: number);
        set selectionHint(value: number);
        get traderXp(): number;
        set xp(value: number);
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(inputItem: $ItemStack_, additionalItem: $ItemStack_): $ItemStack;
        quickcraftSlots: $Set<$Slot>;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static INPUT_SLOT: number;
        repairSlots: $Container;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        getSize(): number;
        /**
         * Reset the drag fields
         */
        beginPlacingRecipe(): void;
        recipeMatches(recipe: $RecipeHolder_<R>): boolean;
        getGridWidth(): number;
        getGridHeight(): number;
        getRecipeBookType(): $RecipeBookType;
        getResultSlotIndex(): number;
        handlePlacement(placeAll: boolean, recipe: $RecipeHolder_<never>, player: $ServerPlayer): void;
        fillCraftSlotsStackedContents(itemHelper: $StackedContents): void;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        finishPlacingRecipe(recipe: $RecipeHolder_<R>): void;
        shouldMoveToInventory(slotIndex: number): boolean;
        /**
         * Reset the drag fields
         */
        clearCraftingContent(): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(menuType: $MenuType_<never>, containerId: number);
        get size(): number;
        get gridWidth(): number;
        get gridHeight(): number;
        get recipeBookType(): $RecipeBookType;
        get resultSlotIndex(): number;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener, $AccessorCrafterMenu {
        getContainer(): $Container;
        isPowered(): boolean;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        setSlotState(slot: number, enabled: boolean): void;
        isSlotDisabled(slot: number): boolean;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
        modifyExpressionValue$kdb000$petrolpark$addBookRequiredRecipes(arg0: $Optional<any>): $Optional<any>;
        /**
         * Reset the drag fields
         */
        callRefreshRecipeResult(): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $CraftingContainer, containerData: $ContainerData);
        get container(): $Container;
        get powered(): boolean;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        constructor(player: $Player, container: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, blastFurnaceContainer: $Container, blastFurnaceData: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        setItemName(itemName: string): boolean;
        setMaximumCost(arg0: number): void;
        static calculateIncreasedRepairCost(oldRepairCost: number): number;
        handler$hhl000$inventoryprofilesnext$onTakeOutputPre(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        handler$hhl000$inventoryprofilesnext$onTakeOutputPost(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        modifyExpressionValue$lbf000$ae2$setAnnihilationPlaneThreadLocal(arg0: boolean): boolean;
        /**
         * Gets the maximum xp cost
         */
        getCost(): number;
        quickcraftSlots: $Set<$Slot>;
        repairItemCountCost: number;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        itemName: string;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        inputSlotIndexes: $List<number>;
        static INPUT_SLOT: number;
        resultSlotIndex: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        set maximumCost(value: number);
        get cost(): number;
    }
    export interface $MenuType<T> extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        build(): $ItemCombinerMenuSlotDefinition;
        withResultSlot(slotIndex: number, x: number, y: number): $ItemCombinerMenuSlotDefinition$Builder;
        withSlot(slotIndex: number, x: number, y: number, mayPlace: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        constructor();
    }
}
