import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeType_, $SmeltingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $InventoryOutput } from "@package/com/denfop/api/recipe";
import { $EntityType, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $FluidActionResult, $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $RegisterKeyMappingsEvent } from "@package/net/neoforged/neoforge/client/event";
import { $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $RegistryAccess, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IKeyboard } from "@package/com/denfop/api";
import { $DataComponentType, $PatchedDataComponentMap, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Iterable_, $Enum, $Object } from "@package/java/lang";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $QuarryItem } from "@package/com/denfop/blockentity/mechanism/quarry";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $VeinType } from "@package/com/denfop/world/vein";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ElectricItemManager as $ElectricItemManager$1 } from "@package/com/denfop/api/item/energy";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnumCoefficient_ } from "@package/com/denfop/api/pollution/radiation";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/denfop/utils" {
    export class $ListInformationUtils {
        static init(): void;
        static wind_generator: $List<string>;
        static panelinform: $List<string>;
        static quarryvein: $List<string>;
        static fisherinform: $List<string>;
        static solar: $List<string>;
        static facade: $List<string>;
        static index2: number;
        static mechanism_info1: $Map<$MultiBlockEntity, $Component>;
        static limiter_info: $List<string>;
        static mechanism_info2: $List<string>;
        static heat_limiter: $List<string>;
        static water_generator: $List<string>;
        static heating: $List<string>;
        static integerListMap: $Map<number, $List<string>>;
        static storageinform: $List<string>;
        static anti_upgrade_block: $List<string>;
        static index: number;
        static tick: number;
        static quarry: $List<string>;
        static analyzeinform: $List<string>;
        static coke_oven: $List<string>;
        static index1: number;
        static cooling: $List<string>;
        static quarryinform: $List<string>;
        static mechanism_info: $List<string>;
        static blast_furnace: $List<string>;
        constructor();
    }
    export class $Precision {
        static round(arg0: number, arg1: number): number;
        static round(arg0: number, arg1: number, arg2: number): number;
    }
    export class $Timer {
        writeBuffer(arg0: $CustomPacketBuffer): void;
        getTime(): number;
        work(): void;
        work(arg0: number): void;
        getMinute(arg0: number): boolean;
        readBuffer(arg0: $CustomPacketBuffer): void;
        getMax(): number;
        readNBT(arg0: $CompoundTag_): void;
        writeNBT(arg0: $CompoundTag_): $CompoundTag;
        setCanWork(arg0: boolean): void;
        canWork(): boolean;
        getBar(): number;
        rework(): void;
        getDisplay(): string;
        getProgressBar(): number;
        cloning(): $Timer;
        readTimer(arg0: $Timer): void;
        getTimeFromTimerRemove(arg0: $Timer): void;
        constructor(arg0: $CustomPacketBuffer);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: number);
        get time(): number;
        get max(): number;
        get bar(): number;
        get display(): string;
        get progressBar(): number;
    }
    export class $KeyboardClient extends $KeyboardIU {
        static savemode: $KeyMapping;
        static altmode: $KeyMapping;
        static flymode: $KeyMapping;
        static blackmode: $KeyMapping;
        static bootsmode: $KeyMapping;
        static leggingsmode: $KeyMapping;
        static streakmode: $KeyMapping;
        static changemode: $KeyMapping;
        static blacklistviewmode: $KeyMapping;
        static verticalmode: $KeyMapping;
        static armormode: $KeyMapping;
        static abilitymode: $KeyMapping;
        constructor();
    }
    export class $ModUtils {
        static getSize(arg0: $ItemStack_): number;
        static slot(arg0: $List_<number>): number;
        static mode(arg0: $CompoundTag_, arg1: $ItemStack_): $ItemStack;
        static mode(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        static mode(arg0: number): string;
        static mode(arg0: $ItemStack_): string;
        static get(arg0: $Player, arg1: $InteractionHand_): $ItemStack;
        static isEmpty(arg0: $ItemStack_): boolean;
        static isEmpty(arg0: $Player, arg1: $InteractionHand_): boolean;
        static limit(arg0: number, arg1: number, arg2: number): number;
        static limit(arg0: number, arg1: number, arg2: number): number;
        static limit(arg0: number, arg1: number, arg2: number): number;
        static info(arg0: string): void;
        static setSize(arg0: $Item_, arg1: number): $ItemStack;
        static setSize(arg0: $ItemStack_, arg1: number): $ItemStack;
        static getString(arg0: number): string;
        static getString(arg0: number): string;
        static Boolean(arg0: boolean): string;
        static tick(arg0: $InventoryOutput, arg1: $BlockEntityBase): void;
        static Time(arg0: number): $List<number>;
        static compareNbt(arg0: $DataComponentMap_, arg1: $DataComponentMap_, arg2: boolean): boolean;
        static getItemHandler(arg0: $BlockEntity | null, arg1: $Direction_): $IItemHandler;
        static nbt(): $CompoundTag;
        static nbt(arg0: $ItemStack_): $CompoundTag;
        static insertItem(arg0: $IItemHandler, arg1: $ItemStack_, arg2: boolean, arg3: number): $ItemStack;
        static tryFillContainerAndStow(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: $IItemHandler, arg3: number, arg4: $Player, arg5: boolean): $FluidActionResult;
        static tryEmptyContainerAndStow(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: $IItemHandler, arg3: number, arg4: $Player, arg5: boolean): $FluidActionResult;
        static SetDoubleWithoutItem(arg0: $CompoundTag_, arg1: string, arg2: number): void;
        static getUnit(arg0: $EnumCoefficient_): string;
        static setComponents(arg0: $ItemStack_, arg1: $PatchedDataComponentMap): void;
        static getore(arg0: $Item_): boolean;
        static getore(arg0: $ItemStack_): boolean;
        static getore(arg0: $Block_, arg1: $Block_): boolean;
        static interactWithFluidHandler(arg0: $Player, arg1: $InteractionHand_, arg2: $IFluidHandler): boolean;
        static tryEmptyContainer(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: number, arg3: $Player, arg4: boolean): $FluidActionResult;
        static tryFillContainer(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: number, arg3: $Player, arg4: boolean): $FluidActionResult;
        static getOre(arg0: $Block_): boolean;
        static nbtOrNull(arg0: $ItemStack_): $CompoundTag;
        static getsum1(arg0: $List_<number>): number;
        static getString1(arg0: number): string;
        static checkItemEqualityStrict(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static convertRGBcolorToInt(arg0: number, arg1: number, arg2: number): number;
        static cleanComponentString(arg0: string): string;
        static copyStackWithSize(arg0: $ItemStack_, arg1: number): $ItemStack;
        static checkItemEquality(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static checkItemEquality(arg0: $ItemStack_, arg1: $Item_): boolean;
        static dropAsEntity(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        static dropAsEntity(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: number): void;
        static getStringBukket(arg0: number): string;
        static getInformationFromOre(arg0: $BlockState_): $List<$Component>;
        static tryFluidTransfer(arg0: $IFluidHandler, arg1: $IFluidHandler, arg2: number, arg3: boolean): $FluidStack;
        static tryFluidTransfer(arg0: $IFluidHandler, arg1: $IFluidHandler, arg2: $FluidStack_, arg3: boolean): $FluidStack;
        static tryFluidTransfer(arg0: $IFluidHandler, arg1: $IFluidHandler, arg2: number, arg3: boolean, arg4: number): $FluidStack;
        static convertRGBAcolorToInt(arg0: number, arg1: number, arg2: number): number;
        static inChanceOre(arg0: $VeinType, arg1: $BlockState_): boolean;
        static showFlames(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        static decSize(arg0: $ItemStack_): $ItemStack;
        static decSize(arg0: $ItemStack_, arg1: number): $ItemStack;
        static incSize(arg0: $ItemStack_, arg1: number): $ItemStack;
        static getFacingFromTwoPositions(arg0: $BlockPos_, arg1: $BlockPos_): $Direction;
        static insertItem2(arg0: $IItemHandler, arg1: number, arg2: $ItemStack_, arg3: boolean): $ItemStack;
        static insertItem1(arg0: $IItemHandler, arg1: $ItemStack_, arg2: boolean, arg3: number): $ItemStack;
        static canItemStacksStack(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static getCellFromFluid(arg0: $Fluid_): $ItemStack;
        static getVecFromVec3i(arg0: $Vec3i): $Vec3;
        static getFuelValue(arg0: $ItemStack_, arg1: boolean): number;
        static storeInventoryItem(arg0: $ItemStack_, arg1: $Player, arg2: boolean): boolean;
        static getRecipeFromType(arg0: $Level_, arg1: $ItemStack_, arg2: $RecipeType_<$SmeltingRecipe>): $ItemStack;
        static checkNbtEquality(arg0: $DataComponentMap_, arg1: $DataComponentMap_): boolean;
        static getEnergyValue(arg0: $ItemStack_): number;
        static getListFromModule(arg0: $ItemStack_): $List<$ItemStack>;
        static areAllDataComponentsEqual(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static get_blacklist_block(): $List<$ItemStack>;
        static getQuarryListFromModule(arg0: $ItemStack_): $List<$QuarryItem>;
        static noFacings: $Set<$Direction>;
        static HORIZONTALS: $Direction[];
        static onlyNorth: $Set<$Direction>;
        static downSideFacings: $Set<$Direction>;
        static log: $Logger;
        static verticalFacings: $Set<$Direction>;
        static allFacings: $Set<$Direction>;
        static horizontalFacings: $Set<$Direction>;
        static ignoredNbtKeys: $Set<$DataComponentType<never>>;
        static emptyStack: $ItemStack;
        static facings: $Direction[];
        constructor();
        static get _blacklist_block(): $List<$ItemStack>;
    }
    export class $RetraceDiggingUtils {
        static getBlockReachDistance(arg0: $Player): number;
        static retrace(arg0: $Player, arg1: number, arg2: boolean): $BlockHitResult;
        static retrace(arg0: $Player, arg1: number): $BlockHitResult;
        static retrace(arg0: $Player): $BlockHitResult;
        static getCorrectedHeadVec(arg0: $Player): $Vec3;
        static getEndVec(arg0: $Player, arg1: number): $Vec3;
        static getStartVec(arg0: $Player): $Vec3;
        constructor();
    }
    export class $KeyboardIU$Key extends $Enum<$KeyboardIU$Key> {
        static values(): $KeyboardIU$Key[];
        static valueOf(arg0: string): $KeyboardIU$Key;
        static toInt(arg0: $Iterable_<$KeyboardIU$Key>): number;
        static fromInt(arg0: number): $Set<$KeyboardIU$Key>;
        static ARMOR: $KeyboardIU$Key;
        static BOOTS: $KeyboardIU$Key;
        static keys: $KeyboardIU$Key[];
        static SAVEMODE: $KeyboardIU$Key;
        static ALT: $KeyboardIU$Key;
        static FORWARD: $KeyboardIU$Key;
        static BLACKLISTVIEWMODE: $KeyboardIU$Key;
        static JUMP: $KeyboardIU$Key;
        static BLACKMODE: $KeyboardIU$Key;
        static LEGGINGS: $KeyboardIU$Key;
        static SHIFT: $KeyboardIU$Key;
        static STREAK: $KeyboardIU$Key;
        static FLYMODE: $KeyboardIU$Key;
        static VERTICALMODE: $KeyboardIU$Key;
        static CHANGE: $KeyboardIU$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyboardIU$Key}.
     */
    export type $KeyboardIU$Key_ = "change" | "blacklistviewmode" | "flymode" | "verticalmode" | "savemode" | "shift" | "streak" | "blackmode" | "forward" | "jump" | "armor" | "boots" | "leggings" | "alt";
    export class $ParticleUtils {
        static spawnApiaryParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnObsidianGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnLavaGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnDieselGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnHeliumGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnGasolineGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnHydrogenGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnFusionCoreParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnRadiationParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnMagneticCatcherParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnWaterGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnPlasticParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnElectrolyzerParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnAlloySmelterParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnMicrochipAssemblerParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnFishingMachineParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnStoneGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static showFlames(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): void;
        static spawnRollingMillParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnExtractorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnRecyclerParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnExtruderParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnCutterParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnMaceratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnCompressorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnOreWashingParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnCentrifugeParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnFermenterParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnFarmParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnGearParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnMineralSeparatorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnWitherFabricatorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnMagneticGeneratorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static spawnFallingLeavesParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $Block_): void;
        static spawnScrapCollectorParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        constructor();
    }
    export class $DamageHandler {
        static getDamage(arg0: $ItemStack_): number;
        static damage(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): boolean;
        static setDamage(arg0: $ItemStack_, arg1: number): void;
        static getMaxDamage(arg0: $ItemStack_): number;
        constructor();
    }
    export class $ElectricItemManager implements $ElectricItemManager$1 {
        canUse(arg0: $ItemStack_, arg1: number): boolean;
        use(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity): boolean;
        charge(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: boolean): number;
        getCharge(arg0: $ItemStack_): number;
        getTier(arg0: $ItemStack_): number;
        getToolTip(arg0: $ItemStack_): string;
        discharge(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): number;
        static addChargeVariants(arg0: $Item_, arg1: $List_<$ItemStack_>): void;
        getMaxCharge(arg0: $ItemStack_): number;
        static getCharged(arg0: $Item_, arg1: number): $ItemStack;
        constructor();
    }
    export class $FluidHandlerFix {
        static getFluidHandler(arg0: $ItemStack_): $IFluidHandlerItem;
        static hasFluidHandler(arg0: $ItemStack_): boolean;
        constructor();
    }
    export class $MatterRecipe {
        getStack(): $ItemStack;
        isEqual(arg0: $ItemStack_ | null, arg1: $ItemStack_ | null, arg2: number): boolean;
        can(): boolean;
        addMatter(arg0: number): void;
        addAqua(arg0: number): void;
        addNight(arg0: number): void;
        addSun(arg0: number): void;
        addNether(arg0: number): void;
        addEarth(arg0: number): void;
        addEnd(arg0: number): void;
        addAer(arg0: number): void;
        setCan(arg0: boolean): void;
        getMatter(): number;
        getAqua(): number;
        getSun(): number;
        getEnd(): number;
        getNight(): number;
        getEarth(): number;
        getAer(): number;
        getNether(): number;
        static areItemStackTagsEqual(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        isEqualNbt(arg0: $ItemStack_ | null, arg1: $ItemStack_ | null): boolean;
        constructor(arg0: $ItemStack_);
        get stack(): $ItemStack;
        get matter(): number;
        get aqua(): number;
        get sun(): number;
        get end(): number;
        get night(): number;
        get earth(): number;
        get aer(): number;
        get nether(): number;
    }
    export class $KeyboardIU implements $IKeyboard {
        register(arg0: $RegisterKeyMappingsEvent): void;
        static isKeyDown(arg0: number): boolean;
        static keyDown(arg0: $KeyMapping): boolean;
        removePlayerReferences(arg0: $Player): void;
        isFlyModeKeyDown(arg0: $Player): boolean;
        isSneakKeyDown(arg0: $Player): boolean;
        isVerticalMode(arg0: $Player): boolean;
        isForwardKeyDown(arg0: $Player): boolean;
        isBootsMode(arg0: $Player): boolean;
        isLeggingsMode(arg0: $Player): boolean;
        isChangeKeyDown(arg0: $Player): boolean;
        isStreakKeyDown(arg0: $Player): boolean;
        isJumpKeyDown(arg0: $Player): boolean;
        processKeyUpdate(arg0: $Player, arg1: number): void;
        sendKeyUpdate(arg0: $Level_): void;
        isAltKeyDown(arg0: $Player): boolean;
        isSaveModeKeyDown(arg0: $Player): boolean;
        isBlackListModeViewKeyDown(arg0: $Player): boolean;
        isBlackListModeKeyDown(arg0: $Player): boolean;
        isArmorKey(arg0: $Player): boolean;
        constructor();
    }
    export class $ElectricItem {
        static manager: $ElectricItemManager$1;
        constructor();
    }
    export class $ExperienceUtils {
        static getLevelForExperience(arg0: number): number;
        static getExperienceForLevel(arg0: number): number;
        static addPlayerXP(arg0: $Player, arg1: number): void;
        static getPlayerXP(arg0: $Player): number;
        static removePlayerXP(arg0: $Player, arg1: number, arg2: number): number;
        static removePlayerXP(arg0: $Player, arg1: number, arg2: number): number;
        static addPlayerXP1(arg0: $Player, arg1: number): number;
        constructor();
    }
    export class $Vector2 {
        getZ(): number;
        getX(): number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $Localization {
        static translate(arg0: string): string;
        static translate(arg0: string, ...arg1: $Object[]): string;
        constructor();
    }
    export class $Keys {
        static instance: $IKeyboard;
        constructor();
    }
    export class $DataEntities {
        contains(arg0: $ResourceLocation_): boolean;
        getTypeFromResourceLocation(arg0: $ResourceLocation_): $EntityType<never>;
        createEntityByIDFromName(arg0: $ResourceLocation_, arg1: $Level_): $Entity;
        constructor();
    }
    export class $CapturedMobUtils {
        getResource(): string;
        static create(arg0: $Entity | null): $CapturedMobUtils;
        static create(arg0: $ItemStack_, arg1: $RegistryAccess): $CapturedMobUtils;
        static isValid(arg0: $ItemStack_): boolean;
        getColor(): number;
        getEntity(arg0: $Level_ | null, arg1: boolean): $Entity;
        getEntity(arg0: $Level_ | null, arg1: $BlockPos_ | null, arg2: boolean): $Entity;
        getCustomName(): string;
        getEntityId(): $ResourceLocation;
        toNbt(arg0: $CompoundTag_ | null): $CompoundTag;
        static isBlacklisted(arg0: $Entity): boolean;
        getCoefficient(): number;
        static containsSoul(arg0: $ItemStack_): boolean;
        static CODEC: $Codec<$CapturedMobUtils>;
        static data: $DataEntities;
        static EMPTY: $CapturedMobUtils;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CapturedMobUtils>;
        constructor(arg0: $ResourceLocation_, arg1: string | null, arg2: number, arg3: number, arg4: string);
        get resource(): string;
        get color(): number;
        get customName(): string;
        get entityId(): $ResourceLocation;
        get coefficient(): number;
    }
    export class $Keyboard {
        static isKeyDown(arg0: number): boolean;
        static KEY_LSHIFT: number;
        static KEY_LEFT: number;
        static KEY_RIGHT: number;
        static KEY_LCONTROL: number;
        static KEY_LALT: number;
        constructor();
    }
}
