import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ItemFluidContainer, $EnumInfoUpgradeModules, $ItemStackInventory, $IItemStackInventory, $IProperties, $BaseEnergyItem } from "@package/com/denfop/items";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $Map, $Set, $UUID, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Predicate } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $ContainerItem, $ContainerAdditionalItem } from "@package/com/denfop/datacomponent";
import { $MenuType, $ClickType_, $Slot, $ContainerSynchronizer, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Enum, $Object } from "@package/java/lang";
import { $ScreenMain } from "@package/com/denfop/screen";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $TieredItem, $CreativeModeTab, $Item, $DiggerItem, $BowItem, $Item$Properties, $ShovelItem, $CreativeModeTab_, $Tier_, $ItemStack_, $ItemStack, $Tier, $PickaxeItem, $AxeItem } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Tool } from "@package/net/minecraft/world/item/component";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $UpgradeItem } from "@package/com/denfop/api/item/upgrade";
import { $IUpdatableItemStackEvent, $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Arrow, $AbstractArrow, $AbstractArrow$Pickup } from "@package/net/minecraft/world/entity/projectile";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $ContainerMenuHandHeldInventory } from "@package/com/denfop/containermenu";
import { $EnergyItem } from "@package/com/denfop/api/item/energy";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $IItemTag } from "@package/com/denfop/datagen/itemtag";
import { $IItemTab } from "@package/com/denfop/tabs";
export * as instruments from "@package/com/denfop/items/energy/instruments";

declare module "@package/com/denfop/items/energy" {
    export class $ItemToolIU extends $DiggerItem implements $IItemTab, $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        getItemCategory(): $CreativeModeTab;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $TagKey_<$Block>, arg1: $Item$Properties, arg2: $Tier_);
        constructor(arg0: $TagKey_<$Block>, arg1: $Item$Properties);
        constructor(arg0: $TagKey_<$Block>);
        get item(): $Item;
        get tags(): string[];
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemQuantumSaber extends $TieredItem implements $EnergyItem, $UpgradeItem, $IProperties, $IItemTab {
        properties(): string[];
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        drainSaber(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): void;
        isCorrectToolForDrops(arg0: $BlockState_): boolean;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        getRandomSwingSound(): string;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static ticker: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        maxCharge: number;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        transferLimit: number;
        tier: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        activedamage: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        get itemCategory(): $CreativeModeTab;
        get randomSwingSound(): string;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemToolWrench extends $Item implements $IItemTab {
        damage(arg0: $ItemStack_, arg1: number, arg2: $Player): void;
        getItemCategory(): $CreativeModeTab;
        static wrenchBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player, arg4: boolean): $ItemToolWrench$WrenchResult;
        canTakeDamage(arg0: $ItemStack_, arg1: number): boolean;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemTreetap extends $Item implements $IItemTab {
        getItemCategory(): $CreativeModeTab;
        static attemptExtract(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $List_<$ItemStack_>): boolean;
        static attemptSwampExtract(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $List_<$ItemStack_>): boolean;
        static attemptTropicalExtract(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $List_<$ItemStack_>): boolean;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemGraviTool extends $TieredItem implements $EnergyItem, $UpgradeItem, $IProperties, $IItemTab {
        properties(): string[];
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        static hasNecessaryPower(arg0: $ItemStack_, arg1: number, arg2: $Player): boolean;
        static readNextToolMode(arg0: $ItemStack_): $ItemGraviTool$GraviToolMode;
        static saveToolMode(arg0: $ItemStack_, arg1: $ItemGraviTool$GraviToolMode_): void;
        static readToolMode(arg0: $ItemStack_): $ItemGraviTool$GraviToolMode;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
        get itemCategory(): $CreativeModeTab;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ContainerMenuMagnet extends $ContainerMenuHandHeldInventory<$ItemStackMagnet> {
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
        base: $ItemStackMagnet;
        constructor(arg0: $Player, arg1: $ItemStackMagnet);
    }
    export class $ItemEnergyBow extends $BowItem implements $EnergyItem, $UpgradeItem, $IProperties, $IItemTab {
        properties(): string[];
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        createArrow(arg0: $Level_, arg1: $ItemStack_, arg2: $LivingEntity): $EntityAdvArrow;
        customArrow(arg0: $AbstractArrow): $EntityAdvArrow;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        getMaxItemUseDuration(arg0: $ItemStack_): number;
        static getArrowVelocity(arg0: number): number;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_RANGE: number;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static MAX_DRAW_DURATION: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get itemCategory(): $CreativeModeTab;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemTreetapEnergy extends $ItemEnergyTool {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        maxCharge: number;
        static MAX_BAR_WIDTH: number;
        operationEnergyCost: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        transferLimit: number;
        tier: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemSteelHammer extends $ItemToolIU {
        onDestroyed(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $LivingEntity): boolean;
        breakBlock(arg0: $Level_, arg1: $Block_, arg2: $BlockHitResult, arg3: number, arg4: $Player, arg5: $BlockPos_, arg6: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemToolWrench$WrenchResult extends $Enum<$ItemToolWrench$WrenchResult> {
    }
    /**
     * Values that may be interpreted as {@link $ItemToolWrench$WrenchResult}.
     */
    export type $ItemToolWrench$WrenchResult_ = "rotated" | "removed" | "nothing";
    export class $ItemSprayer$Target extends $Enum<$ItemSprayer$Target> {
    }
    /**
     * Values that may be interpreted as {@link $ItemSprayer$Target}.
     */
    export type $ItemSprayer$Target_ = "any" | "scaffold";
    export class $ItemToolWrenchEnergy extends $ItemToolWrench implements $EnergyItem {
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemEnergyTool extends $ItemToolIU implements $EnergyItem {
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        maxCharge: number;
        static MAX_BAR_WIDTH: number;
        operationEnergyCost: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        transferLimit: number;
        tier: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TagKey_<$Block>);
    }
    export class $ItemKatana extends $TieredItem implements $EnergyItem, $UpgradeItem, $IProperties, $IItemTab {
        properties(): string[];
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        drainSaber(arg0: $ItemStack_, arg1: number): boolean;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        damage1: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        maxCharge: number;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        transferLimit: number;
        tier: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
        get itemCategory(): $CreativeModeTab;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemShovel extends $ShovelItem implements $IItemTab, $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        getItemCategory(): $CreativeModeTab;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static FLATTENABLES: $Map<$Block, $BlockState>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string);
        get item(): $Item;
        get tags(): string[];
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemIronHammer extends $ItemToolIU {
        onDestroyed(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $LivingEntity): boolean;
        breakBlock(arg0: $Level_, arg1: $Block_, arg2: $BlockHitResult, arg3: number, arg4: $Player, arg5: $BlockPos_, arg6: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemHammer extends $ItemToolIU {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemMagnet extends $BaseEnergyItem implements $IItemStackInventory, $IUpdatableItemStackEvent, $UpgradeItem {
        save(arg0: $ItemStack_, arg1: $Player): void;
        getInventory(arg0: $Player, arg1: $ItemStack_): $CustomWorldContainer;
        updateField(arg0: string, arg1: $CustomPacketBuffer, arg2: $ItemStack_): void;
        updateEvent(arg0: number, arg1: $ItemStack_): void;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemBattery extends $BaseEnergyItem implements $IProperties {
        properties(): string[];
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        wirelessCharge: boolean;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $ScreenMagnet<T extends $ContainerMenuMagnet> extends $ScreenMain<$ContainerMenuMagnet> {
        container: $ContainerMenuMagnet;
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
        menu: $ContainerMenuMagnet;
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
        constructor(arg0: $ContainerMenuMagnet, arg1: $ItemStack_);
    }
    export class $ItemSpectralSaber extends $TieredItem implements $EnergyItem, $UpgradeItem, $IProperties, $IItemTab {
        properties(): string[];
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        drainSaber(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): void;
        isCorrectToolForDrops(arg0: $BlockState_): boolean;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        getRandomSwingSound(): string;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static ticker: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        maxCharge: number;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        transferLimit: number;
        tier: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        activedamage: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        get itemCategory(): $CreativeModeTab;
        get randomSwingSound(): string;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemWindMeter extends $BaseEnergyItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $EntityAdvArrow extends $Arrow {
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        setKsnockback(arg0: number): void;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        leftOwner: boolean;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        shakeTime: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        inGroundTime: number;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        ownerUUID: $UUID;
        inGround: boolean;
        walkDistO: number;
        pickup: $AbstractArrow$Pickup;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        hasBeenShot: boolean;
        cachedOwner: $Entity;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_, arg3: $ItemStack_ | null);
        set ksnockback(value: number);
    }
    export class $ItemNet extends $ItemToolIU {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemGraviTool$GraviToolMode extends $Enum<$ItemGraviTool$GraviToolMode> {
        static values(): $ItemGraviTool$GraviToolMode[];
        static valueOf(arg0: string): $ItemGraviTool$GraviToolMode;
        static getFromID(arg0: number): $ItemGraviTool$GraviToolMode;
        static TREETAP: $ItemGraviTool$GraviToolMode;
        static WRENCH: $ItemGraviTool$GraviToolMode;
        colour: $ChatFormatting;
        static SCREWDRIVER: $ItemGraviTool$GraviToolMode;
        translationName: string;
        static PURIFIER: $ItemGraviTool$GraviToolMode;
        static HOE: $ItemGraviTool$GraviToolMode;
    }
    /**
     * Values that may be interpreted as {@link $ItemGraviTool$GraviToolMode}.
     */
    export type $ItemGraviTool$GraviToolMode_ = "hoe" | "treetap" | "wrench" | "screwdriver" | "purifier";
    export class $ItemSprayer extends $ItemFluidContainer implements $IItemTab {
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getItemCategory(): $CreativeModeTab;
        sprayFoam(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemSprayer$Target_, arg4: number): number;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        capacity: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
        get itemCategory(): $CreativeModeTab;
    }
    export class $IUTiers extends $Enum<$IUTiers> implements $Tier {
        static values(): $IUTiers[];
        static valueOf(arg0: string): $IUTiers;
        getTag(): $TagKey<$Block>;
        getLevel(): number;
        getSpeed(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getAttackDamageBonus(): number;
        getUses(): number;
        getEnchantmentValue(): number;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        static IRON: $IUTiers;
        static RUBY: $IUTiers;
        get tag(): $TagKey<$Block>;
        get level(): number;
        get speed(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get attackDamageBonus(): number;
        get uses(): number;
        get enchantmentValue(): number;
    }
    /**
     * Values that may be interpreted as {@link $IUTiers}.
     */
    export type $IUTiers_ = "ruby" | "iron";
    export class $ItemPickaxe extends $PickaxeItem implements $IItemTab, $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        getItemCategory(): $CreativeModeTab;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string);
        get item(): $Item;
        get tags(): string[];
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemBatterySU extends $Item implements $IItemTab {
        getItemCategory(): $CreativeModeTab;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        capacity: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number);
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemStackMagnet extends $ItemStackInventory {
        save(): void;
        getGuiContainer(arg0: $Player): $ContainerMenuMagnet;
        putWithoutSave(arg0: number, arg1: $ItemStack_): void;
        addWithoutSave(arg0: $ItemStack_): boolean;
        containerStack: $ItemStack;
        containerAdditionItem: $ContainerAdditionalItem;
        list: $List<$ItemStack>;
        inventory: $List<$ItemStack>;
        containerItem: $ContainerItem;
        containerId: number;
        cleared: boolean;
        inventorySize: number;
        itemStack1: $ItemStack;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: number);
    }
    export class $ItemAxe extends $AxeItem implements $IItemTab, $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        getItemCategory(): $CreativeModeTab;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: string);
        get item(): $Item;
        get tags(): string[];
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemStackUpgradeItem extends $ItemStackInventory {
        hasCustomName(): boolean;
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
    export class $ItemEnergyToolHoe extends $ItemEnergyTool {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        maxCharge: number;
        static MAX_BAR_WIDTH: number;
        operationEnergyCost: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        transferLimit: number;
        tier: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $ItemNanoSaber extends $TieredItem implements $EnergyItem, $UpgradeItem, $IProperties, $IItemTab {
        properties(): string[];
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        drainSaber(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): void;
        getMaxEnergy(arg0: $ItemStack_): number;
        canProvideEnergy(arg0: $ItemStack_): boolean;
        getTierItem(arg0: $ItemStack_): number;
        getTransferEnergy(arg0: $ItemStack_): number;
        getItemProperty(arg0: $ItemStack_, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number, arg4: string): number;
        getItemCategory(): $CreativeModeTab;
        getRandomSwingSound(): string;
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static ticker: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        maxCharge: number;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        transferLimit: number;
        tier: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        canRepair: boolean;
        activedamage: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        get itemCategory(): $CreativeModeTab;
        get randomSwingSound(): string;
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
    export class $ItemPurifier extends $BaseEnergyItem implements $UpgradeItem {
        getUpgradeModules(): $List<$EnumInfoUpgradeModules>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: number, arg1: number, arg2: number);
        get upgradeModules(): $List<$EnumInfoUpgradeModules>;
    }
}
