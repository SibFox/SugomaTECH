import { $HandledScreenAccessor as $HandledScreenAccessor$1 } from "@package/dev/emi/emi/mixin/accessor";
import { $IMixinAbstractContainerScreen } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $RecipeUpdateListener, $AbstractFurnaceRecipeBookComponent, $RecipeBookComponent } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $Executor } from "@package/java/util/concurrent";
import { $HandledScreenAccessor } from "@package/com/periut/chisel/mixins";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$2 } from "@package/yalter/mousetweaks/mixin";
import { $IAntiquable } from "@package/net/mehvahdjukaar/supplementaries/common/block";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $Map, $Set, $Iterator, $List, $List_, $Optional } from "@package/java/util";
import { $AccessorSmithingScreen } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$3 } from "@package/net/blay09/mods/balm/mixin";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SimpleContainer, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DrawsOnLeft } from "@package/dev/shadowsoffire/placebo/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AbstractContainerScreenAccessor } from "@package/com/perigrine3/createcybernetics/mixin/client";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$1 } from "@package/com/denfop/mixin/access";
import { $TextFieldHelper } from "@package/net/minecraft/client/gui/font";
import { $HorseInventoryMenu, $ChestMenu, $FurnaceMenu, $MenuType, $LecternMenu, $ClickType_, $BeaconMenu, $CartographyTableMenu, $StonecutterMenu, $AnvilMenu, $Slot, $ShulkerBoxMenu, $ItemCombinerMenu, $EnchantmentMenu, $CrafterMenu, $CraftingMenu, $SmokerMenu, $ContainerSynchronizer, $BlastFurnaceMenu, $MerchantMenu, $SmithingMenu, $HopperMenu, $GrindstoneMenu, $DispenserMenu, $AbstractContainerMenu, $BrewingStandMenu, $AbstractFurnaceMenu, $InventoryMenu, $LoomMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $FabricCreativeInventoryScreen } from "@package/net/fabricmc/fabric/api/client/itemgroup/v1";
import { $MerchantOffer, $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $BaseCommandBlock } from "@package/net/minecraft/world/level";
import { $CreativeModeTab, $CreativeModeTab_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ContainerScreenLockTooltip, $ContainerScreenDrawTooltip } from "@package/com/misterpemodder/shulkerboxtooltip/impl/hook";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CommandSuggestions, $EditBox, $AbstractButton, $WidgetSprites, $Renderable, $CycleButton, $WidgetTooltipHolder, $Button, $Button$OnPress_, $Button$CreateNarration } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CreativeTabsScreenPage } from "@package/net/neoforged/neoforge/client/gui";
import { $WoodType } from "@package/net/minecraft/world/level/block/state/properties";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $CreativeModeInventoryScreenAccessor as $CreativeModeInventoryScreenAccessor$1 } from "@package/com/rieno/gadgetsandgizmos/mixin";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $CreativeModeInventoryScreenAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $SignBlockEntity, $SignText, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as tooltip from "@package/net/minecraft/client/gui/screens/inventory/tooltip";

declare module "@package/net/minecraft/client/gui/screens/inventory" {
    export class $SmithingScreen extends $ItemCombinerScreen<$SmithingMenu> implements $AccessorSmithingScreen {
        callUpdateArmorStandPreview(stack: $ItemStack_): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        static ARMOR_STAND_ANGLE: $Quaternionf;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static ARMOR_STAND_TRANSLATION: $Vector3f;
        static EMPTY_SLOT_SMITHING_TEMPLATES: $List<$ResourceLocation>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $SmithingMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        static MISSING_TEMPLATE_TOOLTIP: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        static ERROR_TOOLTIP: $Component;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $SmithingMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentScreen extends $AbstractContainerScreen<$EnchantmentMenu> {
        tickBook(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBook(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        oOpen: number;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        flipA: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        static ENCHANTMENT_SLOT_HIGHLIGHTED_SPRITE: $ResourceLocation;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        static DISABLED_LEVEL_SPRITES: $ResourceLocation[];
        minecraft: $Minecraft;
        oFlip: number;
        static CUBE_MAP: $CubeMap;
        static ENCHANTMENT_SLOT_SPRITE: $ResourceLocation;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        flipT: number;
        snapbackItem: $ItemStack;
        static ENCHANTMENT_SLOT_DISABLED_SPRITE: $ResourceLocation;
        flip: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        static ENABLED_LEVEL_SPRITES: $ResourceLocation[];
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $EnchantmentMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        time: number;
        screenExecutor: $Executor;
        topPos: number;
        static ENCHANTING_TABLE_LOCATION: $ResourceLocation;
        open: number;
        font: $Font;
        constructor(menu: $EnchantmentMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookViewScreen$BookAccess extends $Record implements $IAntiquable {
        pages(): $List<$Component>;
        supplementaries$isAntique(): boolean;
        supplementaries$setAntique(arg0: boolean): void;
        /**
         * Returns the size of the book
         */
        getPageCount(): number;
        static fromItem(stack: $ItemStack_): $BookViewScreen$BookAccess;
        getPage(page: number): $FormattedText;
        constructor(arg0: $List_<$Component_>);
        get pageCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $BookViewScreen$BookAccess}.
     */
    export type $BookViewScreen$BookAccess_ = { pages?: $List_<$Component_>,  } | [pages?: $List_<$Component_>, ];
    export class $BeaconScreen$BeaconPowerButton extends $BeaconScreen$BeaconScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $CyclingSlotBackground {
        render(containerMenu: $AbstractContainerMenu, guiGraphics: $GuiGraphics, partialTick: number, x: number, y: number): void;
        tick(icons: $List_<$ResourceLocation_>): void;
        constructor(slotIndex: number);
    }
    export class $ShulkerBoxScreen extends $AbstractContainerScreen<$ShulkerBoxMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $ShulkerBoxMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $ShulkerBoxMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$SlotWrapper extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
        target: $Slot;
        constructor(slot: $Slot, index: number, x: number, y: number);
    }
    export class $CommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        updateGui(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor(autoCommandBlock: $CommandBlockEntity);
    }
    export class $BrewingStandScreen extends $AbstractContainerScreen<$BrewingStandMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $BrewingStandMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $BrewingStandMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen extends $EffectRenderingInventoryScreen<$CreativeModeInventoryScreen$ItemPickerMenu> implements $FabricCreativeInventoryScreen {
        static handleHotbarLoadOrSave(client: $Minecraft, index: number, load: boolean, save: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getPageCount(): number;
        getPage(tab: $CreativeModeTab_): number;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        isInventoryOpen(): boolean;
        getCurrentPage(): $CreativeTabsScreenPage;
        switchToPage(keyCode: number): boolean;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        hasAdditionalPages(): boolean;
        checkTabHovering(guiGraphics: $GuiGraphics, creativeModeTab: $CreativeModeTab_, mouseX: number, mouseY: number): boolean;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        switchToNextPage(): boolean;
        getScrollOffs(): number;
        setCurrentPage(arg0: $CreativeTabsScreenPage): void;
        checkTabClicked(creativeModeTab: $CreativeModeTab_, relativeMouseX: number, arg2: number): boolean;
        insideScrollbar(mouseX: number, arg1: number): boolean;
        handler$keg000$petrolpark$addItemsToExtendedInventorySlots(arg0: $Slot | null, arg1: number, arg2: number, arg3: $ClickType_, arg4: $CallbackInfo): void;
        handler$keg000$petrolpark$addExtendedInventorySlots(arg0: $CreativeModeTab_, arg1: $CallbackInfo): void;
        renderTabButton(guiGraphics: $GuiGraphics, creativeModeTab: $CreativeModeTab_): void;
        handler$keg000$petrolpark$renderCustomTabs(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        static getSelectedTab$petrolpark_$md$6cde14$4(): $CreativeModeTab;
        getSelectedItemGroup(): $CreativeModeTab;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        switchToPreviousPage(): boolean;
        getItemGroupsOnPage(arg0: number): $List<any>;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        wrapOperation$keg000$petrolpark$dontAddExtendedInventorySlots(arg0: $NonNullList<any>, arg1: $Operation_<any>): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        screen: $AbstractContainerScreen<any>;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static selectedTab: $CreativeModeTab;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        destroyItemSlot: $Slot;
        static $assertionsDisabled: boolean;
        menu: $CreativeModeInventoryScreen$ItemPickerMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        static CONTAINER: $SimpleContainer;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(player: $LocalPlayer, enabledFeatures: $FeatureFlagSet, displayOperatorCreativeTab: boolean);
        get pageCount(): number;
        get inventoryOpen(): boolean;
        get scrollOffs(): number;
        static get selectedTab$petrolpark_$md$6cde14$4(): $CreativeModeTab;
    }
    export class $AbstractCommandBlockEditScreen extends $Screen {
        getCommandBlock(): $BaseCommandBlock;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getPreviousY(): number;
        updatePreviousOutput(trackOutput: boolean): void;
        populateAndSendPacket(commandBlock: $BaseCommandBlock): void;
        onDone(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor();
        get commandBlock(): $BaseCommandBlock;
        get previousY(): number;
    }
    export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        canSeeEffects(): boolean;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        screen: $AbstractContainerScreen<any>;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
    }
    export class $DispenserScreen extends $AbstractContainerScreen<$DispenserMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $DispenserMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $DispenserMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$CustomCreativeSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        bigSlot: boolean;
    }
    export class $BookViewScreen extends $Screen {
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        forcePage(pageNum: number): boolean;
        /**
         * Moves the display back one page
         */
        pageBack(): void;
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        setPage(pageNum: number): boolean;
        /**
         * Moves the display back one page
         */
        createPageControlButtons(): void;
        /**
         * Moves the display back one page
         */
        createMenuControls(): void;
        setBookAccess(bookAccess: $BookViewScreen$BookAccess_): void;
        /**
         * Moves the display back one page
         */
        pageForward(): void;
        /**
         * Moves the display back one page
         */
        closeScreen(): void;
        modify$cap000$supplementaries$supp$setTatteredBookTexture(arg0: $ResourceLocation_): $ResourceLocation;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEXT_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static TEXT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static IMAGE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static IMAGE_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor();
        constructor(bookAccess: $BookViewScreen$BookAccess_);
        set page(value: number);
        set bookAccess(value: $BookViewScreen$BookAccess_);
    }
    export class $BeaconScreen extends $AbstractContainerScreen<$BeaconMenu> {
        static access$000(arg0: $BeaconScreen): $Minecraft;
        static access$100(arg0: $BeaconScreen): $Minecraft;
        static access$200(arg0: $BeaconScreen): $Minecraft;
        updateButtons(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        static CANCEL_SPRITE: $ResourceLocation;
        snapbackStartX: number;
        static CONFIRM_SPRITE: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        static BUTTON_DISABLED_SPRITE: $ResourceLocation;
        inventoryLabelX: number;
        secondary: $Holder<$MobEffect>;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        static BUTTON_SPRITE: $ResourceLocation;
        playerInventoryTitle: $Component;
        static BUTTON_HIGHLIGHTED_SPRITE: $ResourceLocation;
        primary: $Holder<$MobEffect>;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static BUTTON_SELECTED_SPRITE: $ResourceLocation;
        static $assertionsDisabled: boolean;
        menu: $BeaconMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $BeaconMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $ContainerScreen extends $AbstractContainerScreen<$ChestMenu> implements $MenuAccess<$ChestMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $ChestMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $ChestMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconCancelButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $InventoryScreen extends $EffectRenderingInventoryScreen<$InventoryMenu> implements $RecipeUpdateListener {
        static renderEntityInInventoryFollowsAngle(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        static renderEntityInInventoryFollowsMouse(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        static renderEntityInInventory(guiGraphics: $GuiGraphics, x: number, y: number, scale: number, translate: $Vector3f, pose: $Quaternionf, cameraOrientation: $Quaternionf | null, entity: $LivingEntity): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        screen: $AbstractContainerScreen<any>;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        xMouse: number;
        minecraft: $Minecraft;
        yMouse: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $InventoryMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(player: $Player);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $HopperScreen extends $AbstractContainerScreen<$HopperMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $HopperMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $HopperMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookEditScreen$DisplayCache {
    }
    export class $FurnaceScreen extends $AbstractFurnaceScreen<$FurnaceMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $FurnaceMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $FurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $MerchantScreen$TradeOfferButton extends $Button {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getIndex(): number;
        renderToolTip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        index: number;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        this$0: $MerchantScreen;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: $MerchantScreen, y: number, index: number, onPress: number, arg4: $Button$OnPress_);
    }
    export class $CartographyTableScreen extends $AbstractContainerScreen<$CartographyTableMenu> {
        localvar$cbb000$supplementaries$supp$setAntiqueInk(arg0: $ItemStack_): $ItemStack;
        handler$cbb000$supplementaries$supp$animateSlots(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $CartographyTableMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $CartographyTableMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $LoomScreen extends $AbstractContainerScreen<$LoomMenu> {
        modifyExpressionValue$cbl000$supplementaries$supp$swapFlag(arg0: $ItemStack_): $ItemStack;
        handler$cbl000$supplementaries$supp$renderFlags(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $LoomMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $LoomMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractFurnaceScreen<T extends $AbstractFurnaceMenu> extends $AbstractContainerScreen<T> implements $RecipeUpdateListener {
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, recipeBookComponent: $AbstractFurnaceRecipeBookComponent, playerInventory: $Inventory, title: $Component_, texture: $ResourceLocation_, listProgressSprite: $ResourceLocation_, burnProgressSprite: $ResourceLocation_);
    }
    export class $SmokerScreen extends $AbstractFurnaceScreen<$SmokerMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $SmokerMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $SmokerMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentNames {
        static getInstance(): $EnchantmentNames;
        /**
         * Resets the underlying random number generator using a given seed.
         */
        initSeed(seed: number): void;
        getRandomName(fontRenderer: $Font, maxWidth: number): $FormattedText;
        static get instance(): $EnchantmentNames;
    }
    export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $AbstractContainerScreenAccessor$3, $ContainerEventHandler, $HandledScreenAccessor$1, $AbstractContainerScreenAccessor$2, $DrawsOnLeft, $CreativeModeInventoryScreenAccessor, $AbstractContainerScreenAccessor$1, $ContainerScreenLockTooltip, $ContainerScreenDrawTooltip, $AbstractContainerScreenAccessor, $CreativeModeInventoryScreenAccessor$1, $IMixinAbstractContainerScreen, $HandledScreenAccessor {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiTop(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiLeft(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getYSize(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getXSize(): number;
        handler$ckb000$pointblank$beforeRenderingSlotItem(arg0: $GuiGraphics, arg1: $ItemStack_, arg2: $Slot, arg3: string, arg4: $CallbackInfo): void;
        handler$hhk000$inventoryprofilesnext$slotClicked(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_, arg4: $CallbackInfo): void;
        renderTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        recalculateQuickCraftRemaining(): void;
        wrapOperation$mal000$chisel$back(instance: $AbstractContainerScreen<any>, drawContext: $GuiGraphics, slot: $Slot, x: number, y: number, v: number, original: $Operation_<any>): void;
        getTooltipFromContainerItem(stack: $ItemStack_): $List<$Component>;
        renderBg(guiGraphics: $GuiGraphics, partialTick: number, mouseX: number, mouseY: number): void;
        isHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        isHovering(x: number, y: number, width: number, height: number, mouseX: number, arg5: number): boolean;
        renderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        localvar$lbl000$ae2$changeStackForDisplay(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: $Slot): $ItemStack;
        shulkerboxtooltip$drawMouseoverTooltip(graphics: $GuiGraphics, font: $Font, text: $List_<any>, data: $Optional<any>, stack: $ItemStack_, x: number, y: number): void;
        shulkerboxtooltip$lockTooltipPosition(graphics: $GuiGraphics, font: $Font, text: $List_<any>, data: $Optional<any>, stack: $ItemStack_, x: number, y: number): void;
        checkHotbarKeyPressed(keyCode: number, scanCode: number): boolean;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        renderSlotHighlight(arg0: $GuiGraphics, arg1: $Slot, arg2: number, arg3: number, arg4: number): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): void;
        drawSlotHighlightBackBig(partialTick: $GuiGraphics): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        getSlotColor(arg0: number): number;
        containerTick(): void;
        hasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, guiLeft: number): boolean;
        renderLabels(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        /**
         * Called when the mouse is clicked over a slot or outside the gui.
         */
        slotClicked(slot: $Slot, slotId: number, mouseButton: number, type: $ClickType_): void;
        getSlotUnderMouse(): $Slot;
        clearDraggingState(): void;
        renderSlotContents(arg0: $GuiGraphics, arg1: $ItemStack_, arg2: $Slot, arg3: string | null): void;
        renderFloatingItem(guiGraphics: $GuiGraphics, stack: $ItemStack_, x: number, y: number, text: string): void;
        handler$hhk000$inventoryprofilesnext$afterSlotClicked(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_, arg4: $CallbackInfo): void;
        findSlot(mouseX: number, arg1: number): $Slot;
        __ths(): $AbstractContainerScreen<never>;
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number): void;
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number, arg3: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        getMenu(): T;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        getClickedSlot(): $Slot;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        mousetweaks$getIsQuickCrafting(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        mousetweaks$getQuickCraftingButton(): number;
        /**
         * Sets the focus state of the GUI element.
         */
        mousetweaks$setIsQuickCrafting(focused: boolean): void;
        /**
         * Called when the mouse is clicked over a slot or outside the gui.
         */
        mousetweaks$invokeSlotClicked(slot: $Slot, slotId: number, mouseButton: number, type: $ClickType_): void;
        /**
         * Sets the focus state of the GUI element.
         */
        mousetweaks$setSkipNextRelease(focused: boolean): void;
        cc$getMenu(): $AbstractContainerMenu;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTopPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLeftPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getQuickCraftingRemainder(): number;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        getIsSplittingStack(): boolean;
        get_hoveredSlot_FancyMenu(): $Slot;
        get_draggingItem_FancyMenu(): $ItemStack;
        getTouchDragSlotStart(): $Slot;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        getTouchIsRightClickDrag(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBackgroundHeight(): number;
        invokeCalculateOffset(): void;
        setQuickCraftingRemainder(keyCode: number): void;
        mousetweaks$invokeFindSlot(mouseX: number, arg1: number): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getQuickCraftingType(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        cc$getLeftPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        cc$getTopPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getImageWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getSnapbackStartX(): number;
        getHoveredSlot(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getImageHeight(): number;
        callIsHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        callRenderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        getFocusedSlot(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBackgroundWidth(): number;
        invokeGetSlotAt(mouseX: number, arg1: number): $Slot;
        getQuickdropSlot(): $Slot;
        getSnapbackTime(): number;
        getDraggingItem(): $ItemStack;
        getSnapbackEnd(): $Slot;
        getTouchDragStack(): $ItemStack;
        setSnapbackItem(arg0: $ItemStack_): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getSnapbackStartY(): number;
        getSnapbackItem(): $ItemStack;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeldButtonType(): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
        get guiTop(): number;
        get guiLeft(): number;
        get YSize(): number;
        get XSize(): number;
        get slotUnderMouse(): $Slot;
        get y(): number;
        get x(): number;
        get _hoveredSlot_FancyMenu(): $Slot;
        get _draggingItem_FancyMenu(): $ItemStack;
        get touchDragSlotStart(): $Slot;
        get touchIsRightClickDrag(): boolean;
        get backgroundHeight(): number;
        get focusedSlot(): $Slot;
        get backgroundWidth(): number;
        get quickdropSlot(): $Slot;
        get touchDragStack(): $ItemStack;
        get heldButtonType(): number;
    }
    export class $CreativeInventoryListener implements $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BlastFurnaceScreen extends $AbstractFurnaceScreen<$BlastFurnaceMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $BlastFurnaceMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $BlastFurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CrafterScreen extends $AbstractContainerScreen<$CrafterMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $CrafterMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $CrafterMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $HorseInventoryScreen extends $AbstractContainerScreen<$HorseInventoryMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $HorseInventoryMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $HorseInventoryMenu, inventory: $Inventory, horse: $AbstractHorse, inventoryColumns: number);
    }
    export class $BeaconScreen$BeaconConfirmButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $BeaconScreen$BeaconUpgradePowerButton extends $BeaconScreen$BeaconPowerButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $MinecartCommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor(commandBlock: $BaseCommandBlock);
    }
    export class $ItemCombinerScreen<T extends $ItemCombinerMenu> extends $AbstractContainerScreen<T> implements $ContainerListener {
        subInit(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderFg(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        renderErrorIcon(guiGraphics: $GuiGraphics, x: number, y: number): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_, menuResource: $ResourceLocation_);
    }
    export class $LecternScreen extends $BookViewScreen implements $MenuAccess<$LecternMenu> {
        getMenu(): $LecternMenu;
        /**
         * Moves the display back one page
         */
        bookChanged(): void;
        /**
         * Moves the display back one page
         */
        pageChanged(): void;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEXT_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static TEXT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static IMAGE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static IMAGE_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor(menu: $LecternMenu, playerInventory: $Inventory, title: $Component_);
        get menu(): $LecternMenu;
    }
    export class $SignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        line: number;
        signField: $TextFieldHelper;
        sign: $SignBlockEntity;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        static MAGIC_TEXT_SCALE: number;
        static PANORAMA: $PanoramaRenderer;
        static MAGIC_SCALE_NUMBER: number;
        text: $SignText;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        isFrontText: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        messages: string[];
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $CraftingScreen extends $AbstractContainerScreen<$CraftingMenu> implements $RecipeUpdateListener {
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $CraftingMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $CraftingMenu, playerInventory: $Inventory, title: $Component_);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $MerchantScreen extends $AbstractContainerScreen<$MerchantMenu> {
        static access$000(arg0: $MerchantScreen): $Font;
        static access$100(arg0: $MerchantScreen): $Font;
        static access$200(arg0: $MerchantScreen): $Font;
        postButtonClick(): void;
        handler$hhn000$inventoryprofilesnext$render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo, arg5: $MerchantOffers, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: $Iterator<any>, arg12: $MerchantOffer, arg13: $ItemStack_, arg14: $ItemStack_, arg15: $ItemStack_, arg16: $ItemStack_): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        scrollOff: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        shopItem: number;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $MerchantMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        tradeOfferButtons: $MerchantScreen$TradeOfferButton[];
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $MerchantMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconSpriteScreenButton extends $BeaconScreen$BeaconScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $BookEditScreen$Pos2i {
    }
    export class $JigsawBlockEditScreen extends $Screen {
        static isValidResourceLocation(location: string): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        levels: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(jigsawEntity: $JigsawBlockEntity);
    }
    export class $BeaconScreen$BeaconScreenButton extends $AbstractButton implements $BeaconScreen$BeaconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $CreativeModeInventoryScreen$ItemPickerMenu extends $AbstractContainerMenu {
        canScroll(): boolean;
        calculateRowCount(): number;
        getScrollForRowIndex(rowIndex: number): number;
        getRowIndexForScroll(scrollOffs: number): number;
        subtractInputFromScroll(scrollOffs: number, input: number): number;
        /**
         * Updates the gui slot's ItemStacks based on scroll position.
         */
        scrollTo(pos: number): void;
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
        items: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(player: $Player);
    }
    export class $BookEditScreen$LineInfo {
    }
    export class $BeaconScreen$BeaconButton {
    }
    export interface $BeaconScreen$BeaconButton {
    }
    /**
     * Values that may be interpreted as {@link $BeaconScreen$BeaconButton}.
     */
    export type $BeaconScreen$BeaconButton_ = (() => void);
    export class $BookEditScreen extends $Screen {
        static findLineFromPos(lineStarts: number[], find: number): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(owner: $Player, book: $ItemStack_, hand: $InteractionHand_);
    }
    export class $HangingSignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        line: number;
        signField: $TextFieldHelper;
        sign: $SignBlockEntity;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        static PANORAMA: $PanoramaRenderer;
        text: $SignText;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MAGIC_BACKGROUND_SCALE: number;
        isFrontText: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        messages: string[];
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $StonecutterScreen extends $AbstractContainerScreen<$StonecutterMenu> {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getOffscreenRows(): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $StonecutterMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $StonecutterMenu, playerInventory: $Inventory, title: $Component_);
        get offscreenRows(): number;
    }
    export class $MenuAccess<T extends $AbstractContainerMenu> {
    }
    export interface $MenuAccess<T extends $AbstractContainerMenu> {
        getMenu(): T;
        get menu(): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuAccess}.
     */
    export type $MenuAccess_<T> = (() => T);
    export class $AnvilScreen extends $ItemCombinerScreen<$AnvilMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        name: $EditBox;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $AnvilMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $AnvilMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractSignEditScreen extends $Screen {
        getSignTextScale(): $Vector3f;
        renderSignBackground(guiGraphics: $GuiGraphics, state: $BlockState_): void;
        offsetSign(guiGraphics: $GuiGraphics, state: $BlockState_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        line: number;
        signField: $TextFieldHelper;
        sign: $SignBlockEntity;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        static PANORAMA: $PanoramaRenderer;
        text: $SignText;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        isFrontText: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        messages: string[];
        self: $Screen;
        screenExecutor: $Executor;
        font: $Font;
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean);
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean, title: $Component_);
        get signTextScale(): $Vector3f;
    }
    export class $GrindstoneScreen extends $AbstractContainerScreen<$GrindstoneMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $GrindstoneMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $GrindstoneMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $PageButton extends $Button implements $IAntiquable {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        supplementaries$isAntique(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        supplementaries$setAntique(focused: boolean): void;
        modify$cbp001$supplementaries$supp$setTatteredBookTexture(arg0: $ResourceLocation_): $ResourceLocation;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        xOffset: number;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, isForward: boolean, onPress: $Button$OnPress_, playTurnSound: boolean);
    }
    export class $StructureBlockEditScreen extends $Screen {
        static access$000(arg0: $StructureBlockEditScreen, arg1: string, arg2: string, arg3: number): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(structure: $StructureBlockEntity);
    }
}
