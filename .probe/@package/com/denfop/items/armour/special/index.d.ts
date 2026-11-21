import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $EquipmentSlot, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $EnumInfoUpgradeModules, $IItemStackInventory, $ItemStackInventory } from "@package/com/denfop/items";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $IntConsumer_, $Supplier } from "@package/java/util/function";
import { $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $ContainerItem } from "@package/com/denfop/datacomponent";
import { $ContainerSynchronizer, $MenuType, $ClickType_, $Slot, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Enum, $Object } from "@package/java/lang";
import { $ScreenMain } from "@package/com/denfop/screen";
import { $ISpecialArmor, $ISpecialArmor$ArmorProperties } from "@package/com/denfop/items/armour";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $CreativeModeTab_, $ArmorMaterial, $CreativeModeTab, $Item, $ItemStack_, $ArmorItem, $ItemStack, $ArmorItem$Type } from "@package/net/minecraft/world/item";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ItemAttributeModifiers } from "@package/net/minecraft/world/item/component";
import { $UpgradeItem } from "@package/com/denfop/api/item/upgrade";
import { $CycleButton, $WidgetTooltipHolder, $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $ButtonListSliderWidget$GuiResponder, $SliderWidget$FormatHelper } from "@package/com/denfop/api/widget";
import { $EnergyItem } from "@package/com/denfop/api/item/energy";
import { $ContainerMenuHandHeldInventory } from "@package/com/denfop/containermenu";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LivingFallEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IItemTab } from "@package/com/denfop/tabs";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/denfop/items/armour/special" {
    export class $EnumTypeArmor extends $Enum<$EnumTypeArmor> {
        static values(): $EnumTypeArmor[];
        static valueOf(arg0: string): $EnumTypeArmor;
        getMaxTransfer(): number;
        getTexture(): string;
        getTier(): number;
        getMaxEnergy(): number;
        getListCapability(): $List<$EnumCapability>;
        getArmorMulDamage(): $ArmorMulDamage;
        getSkinsList(): $List<string>;
        getDamageEnergy(): number;
        static NANO: $EnumTypeArmor;
        static ADV_NANO: $EnumTypeArmor;
        static QUANTUM: $EnumTypeArmor;
        static SPECTRAL: $EnumTypeArmor;
        get maxTransfer(): number;
        get texture(): string;
        get tier(): number;
        get maxEnergy(): number;
        get listCapability(): $List<$EnumCapability>;
        get armorMulDamage(): $ArmorMulDamage;
        get skinsList(): $List<string>;
        get damageEnergy(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeArmor}.
     */
    export type $EnumTypeArmor_ = "nano" | "adv_nano" | "quantum" | "spectral";
    export class $ScreenLegsBags<T extends $ContainerMenuLegsBags> extends $ScreenMain<$ContainerMenuLegsBags> {
        container: $ContainerMenuLegsBags;
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
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static currentTexture: $ResourceLocation;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $ContainerMenuLegsBags;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        isBlack: boolean;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $ContainerMenuLegsBags, arg1: $ItemStack_);
    }
    export class $EnumSubTypeArmor extends $Enum<$EnumSubTypeArmor> {
        static values(): $EnumSubTypeArmor[];
        static valueOf(arg0: string): $EnumSubTypeArmor;
        getCapabilities(): $List<$EnumCapability>;
        getEntityType(): $ArmorItem$Type;
        getEntityEquipmentSlot(): $EquipmentSlot;
        static LEGGINGS: $EnumSubTypeArmor;
        static HELMET: $EnumSubTypeArmor;
        static CHESTPLATE: $EnumSubTypeArmor;
        static BOOTS: $EnumSubTypeArmor;
        get capabilities(): $List<$EnumCapability>;
        get entityType(): $ArmorItem$Type;
        get entityEquipmentSlot(): $EquipmentSlot;
    }
    /**
     * Values that may be interpreted as {@link $EnumSubTypeArmor}.
     */
    export type $EnumSubTypeArmor_ = "helmet" | "chestplate" | "leggings" | "boots";
    export class $PresetColorScrollWidget extends $AbstractWidget {
        setSelectedColor(arg0: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        xOffset: number;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $List_<number>, arg5: number, arg6: $IntConsumer_);
        set selectedColor(value: number);
    }
    export class $ContainerMenuLegsBags extends $ContainerMenuHandHeldInventory<$ItemStackLegsBags> {
        slotClick1(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player): $ItemStack;
        quickcraftSlots: $Set<$Slot>;
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
        inventorySize: number;
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
        base: $ItemStackLegsBags;
        constructor(arg0: $Player, arg1: $ItemStackLegsBags);
    }
    export class $EnumCapability extends $Enum<$EnumCapability> {
        static values(): $EnumCapability[];
        static valueOf(arg0: string): $EnumCapability;
        static NIGHT_VISION_WITH: $EnumCapability;
        static JETPACK: $EnumCapability;
        static AUTO_JUMP: $EnumCapability;
        static VERTICAL_FLY: $EnumCapability;
        static NIGHT_VISION_WITHOUT: $EnumCapability;
        static SPEED: $EnumCapability;
        static MAGNET: $EnumCapability;
        static FLY: $EnumCapability;
        static NIGHT_VISION_AUTO: $EnumCapability;
        static BAGS: $EnumCapability;
        static JETPACK_FLY: $EnumCapability;
        static BIG_JUMP: $EnumCapability;
        static ALL_ACTIVE_EFFECT: $EnumCapability;
        static ACTIVE_EFFECT: $EnumCapability;
        static FOOD: $EnumCapability;
    }
    /**
     * Values that may be interpreted as {@link $EnumCapability}.
     */
    export type $EnumCapability_ = "night_vision_with" | "night_vision_without" | "night_vision_auto" | "active_effect" | "food" | "all_active_effect" | "jetpack" | "jetpack_fly" | "fly" | "speed" | "bags" | "magnet" | "big_jump" | "auto_jump" | "vertical_fly";
    export class $HueSliderWidget extends $AbstractWidget {
        setHue(arg0: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        xOffset: number;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $HueSliderWidget$Listener_);
        set hue(value: number);
    }
    export class $ColorPickerRenderUtil {
        static drawPanel(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static drawGradientRect(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static drawBorder(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static drawInsetPanel(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static drawCheckerboard(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static drawVerticalGradient(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static drawHorizontalGradient(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    }
    export class $ArmorMulDamage {
        getHeadMul(): number;
        getChestMul(): number;
        getLeggingsMul(): number;
        getBootsMul(): number;
        constructor(...arg0: number[]);
        get headMul(): number;
        get chestMul(): number;
        get leggingsMul(): number;
        get bootsMul(): number;
    }
    export class $HsvColorPaletteWidget$Listener {
    }
    export interface $HsvColorPaletteWidget$Listener {
        onSaturationValueChanged(arg0: number, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $HsvColorPaletteWidget$Listener}.
     */
    export type $HsvColorPaletteWidget$Listener_ = ((arg0: number, arg1: number) => void);
    export class $HsvColorPaletteWidget extends $AbstractWidget {
        setHue(arg0: number): void;
        setSaturationValue(arg0: number, arg1: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        xOffset: number;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $HsvColorPaletteWidget$Listener_);
        set hue(value: number);
    }
    export class $ItemStackStreakSettings extends $ItemStackInventory {
        containerStack: $ItemStack;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        itemStack1: $ItemStack;
        inventorySize: number;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_);
    }
    export class $JetpackAnimationData {
    }
    export class $JetpackVisualState extends $Enum<$JetpackVisualState> {
        static values(): $JetpackVisualState[];
        static valueOf(arg0: string): $JetpackVisualState;
        static BOOST: $JetpackVisualState;
        static IDLE: $JetpackVisualState;
        static ASCENT: $JetpackVisualState;
        static HOVER: $JetpackVisualState;
        static START: $JetpackVisualState;
        static DESCENT: $JetpackVisualState;
    }
    /**
     * Values that may be interpreted as {@link $JetpackVisualState}.
     */
    export type $JetpackVisualState_ = "idle" | "start" | "ascent" | "hover" | "descent" | "boost";
    export class $JetpackVisualController {
        static tick(arg0: $Player, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number): void;
    }
    export class $JetpackAnimationContext {
    }
    export class $ItemStackLegsBags extends $ItemStackInventory {
        containerStack: $ItemStack;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        inventorySize: number;
        itemStack1: $ItemStack;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_);
    }
    export class $WidgetColorPicker<T extends $ContainerMenuStreak> extends $ScreenMain<$ContainerMenuStreak> implements $ButtonListSliderWidget$GuiResponder, $SliderWidget$FormatHelper {
        getText(arg0: number, arg1: string, arg2: number): string;
        setEntryValue(arg0: number, arg1: boolean): void;
        setEntryValue(arg0: number, arg1: string): void;
        setEntryValue(arg0: number, arg1: number): void;
        container: $ContainerMenuStreak;
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
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static currentTexture: $ResourceLocation;
        snapbackItem: $ItemStack;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        snapbackEnd: $Slot;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $ContainerMenuStreak;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        isBlack: boolean;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        self: $Screen;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $ContainerMenuStreak, arg1: $ItemStack_);
    }
    export class $ItemSpecialArmor extends $ArmorItem implements $ISpecialArmor, $IItemStackInventory, $EnergyItem, $UpgradeItem, $IItemTab {
        getProperties(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): $ISpecialArmor$ArmorProperties;
        save(arg0: $ItemStack_, arg1: $Player): void;
        use(arg0: $ItemStack_, arg1: number): void;
        getArmor(): $EnumTypeArmor;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getInventory(arg0: $Player, arg1: $ItemStack_): $CustomWorldContainer;
        moveRelative(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number): void;
        Potion(arg0: $EntityTickEvent$Pre): void;
        getCharge(arg0: $ItemStack_): number;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        damageArmor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): void;
        getListCapability(): $List<$EnumCapability>;
        getItemCategory(): $CreativeModeTab;
        onEntityLivingFallEvent(arg0: $LivingFallEvent): void;
        onArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        getArmorDisplay(arg0: $Player, arg1: $ItemStack_, arg2: number): number;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        useJetpack(arg0: $Player): boolean;
        getIsRepairable(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        handleUnblockableDamage(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $DamageSource_, arg3: number, arg4: number): boolean;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $EnumSubTypeArmor_, arg1: $EnumTypeArmor_);
        get armor(): $EnumTypeArmor;
        get listCapability(): $List<$EnumCapability>;
        get itemCategory(): $CreativeModeTab;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ContainerMenuStreak extends $ContainerMenuHandHeldInventory<$ItemStackStreakSettings> {
        slotClick1(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player): $ItemStack;
        quickcraftSlots: $Set<$Slot>;
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
        base: $ItemStackStreakSettings;
        constructor(arg0: $Player, arg1: $ItemStackStreakSettings);
    }
    export class $HueSliderWidget$Listener {
    }
    export interface $HueSliderWidget$Listener {
        onHueChanged(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $HueSliderWidget$Listener}.
     */
    export type $HueSliderWidget$Listener_ = ((arg0: number) => void);
}
