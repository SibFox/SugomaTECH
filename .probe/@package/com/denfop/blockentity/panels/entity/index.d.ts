import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $DataBlockEntity } from "@package/com/denfop/dataregistry";
import { $Wrenchable, $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $InventoryStorageMiniPanels, $InventoryGlassMiniPanels, $InventoryOutputMiniPanels, $InventoryPanel, $Inventory } from "@package/com/denfop/inventory";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $SunCoef } from "@package/com/denfop/api/energy/utils";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $List_, $Map } from "@package/java/util";
import { $EnumSolarType_, $ISolarTile, $EnumTypeParts_ } from "@package/com/denfop/api/solar";
import { $AbstractComponent, $WirelessComponent, $ComponentPollution, $AirPollutionComponent, $ComponentMiniPanel, $ComponentTimer, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $ContainerMenuMiniPanels } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnergySource, $EnergyAcceptor, $EnergyTile } from "@package/com/denfop/api/energy/interfaces";
import { $InfoTile } from "@package/com/denfop/api/otherenergies/common";
import { $Enum } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/panels/entity" {
    export class $BlockEntityMiniPanels$EnumState extends $Enum<$BlockEntityMiniPanels$EnumState> {
        static values(): $BlockEntityMiniPanels$EnumState[];
        static valueOf(arg0: string): $BlockEntityMiniPanels$EnumState;
        static STABLE: $BlockEntityMiniPanels$EnumState;
        static EMPTY: $BlockEntityMiniPanels$EnumState;
        static UNSTABLE: $BlockEntityMiniPanels$EnumState;
        static NORMAL: $BlockEntityMiniPanels$EnumState;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityMiniPanels$EnumState}.
     */
    export type $BlockEntityMiniPanels$EnumState_ = "stable" | "unstable" | "normal" | "empty";
    export class $BlockEntitySolarPanel$GenerationState extends $Enum<$BlockEntitySolarPanel$GenerationState> {
        static values(): $BlockEntitySolarPanel$GenerationState[];
        static valueOf(arg0: string): $BlockEntitySolarPanel$GenerationState;
        static RAINNIGHT: $BlockEntitySolarPanel$GenerationState;
        static NIGHT: $BlockEntitySolarPanel$GenerationState;
        static NETHER: $BlockEntitySolarPanel$GenerationState;
        static END: $BlockEntitySolarPanel$GenerationState;
        static RAINDAY: $BlockEntitySolarPanel$GenerationState;
        static NONE: $BlockEntitySolarPanel$GenerationState;
        static DAY: $BlockEntitySolarPanel$GenerationState;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntitySolarPanel$GenerationState}.
     */
    export type $BlockEntitySolarPanel$GenerationState_ = "day" | "night" | "rainday" | "rainnight" | "nether" | "end" | "none";
    export class $EnumType extends $Enum<$EnumType> {
        static values(): $EnumType[];
        static valueOf(arg0: string): $EnumType;
        static getFromID(arg0: number): $EnumType;
        getNameType(): string;
        static EARTH: $EnumType;
        texture: $ResourceLocation;
        static AIR: $EnumType;
        coefficient_rain: number;
        static RAIN: $EnumType;
        static NETHER: $EnumType;
        static NIGHT: $EnumType;
        meta: number;
        coefficient_nether: number;
        coefficient_end: number;
        static END: $EnumType;
        coefficient_day: number;
        static DAY: $EnumType;
        static DEFAULT: $EnumType;
        coefficient_night: number;
        get nameType(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnumType}.
     */
    export type $EnumType_ = "default" | "air" | "earth" | "nether" | "end" | "night" | "day" | "rain";
    export class $EnumSolarPanels extends $Enum<$EnumSolarPanels> {
        static values(): $EnumSolarPanels[];
        static valueOf(arg0: string): $EnumSolarPanels;
        static registerTile(): void;
        static getFromID(arg0: number): $EnumSolarPanels;
        static ADVANCED_SOLAR_PANEL: $EnumSolarPanels;
        static HYBRID_SOLAR_PANEL: $EnumSolarPanels;
        static HADRON_SOLAR_PANEL: $EnumSolarPanels;
        maxstorage: number;
        genday: number;
        gennight: number;
        static SINGULAR_SOLAR_PANEL: $EnumSolarPanels;
        static PERFECT_SOLAR_PANEL: $EnumSolarPanels;
        static QUANTUM_SOLAR_PANEL: $EnumSolarPanels;
        static DIFFRACTION_SOLAR_PANEL: $EnumSolarPanels;
        static GRAVITON_SOLAR_PANEL: $EnumSolarPanels;
        static QUARK_SOLAR_PANEL: $EnumSolarPanels;
        producing: number;
        tier: number;
        solarold: $EnumSolarPanels;
        meta: number;
        static PROTON_SOLAR_PANEL: $EnumSolarPanels;
        block: $DataBlockEntity<any>;
        static BARION_SOLAR_PANEL: $EnumSolarPanels;
        static SOLAR_PANEL_DEFAULT: $EnumSolarPanels;
        static SPECTRAL_SOLAR_PANEL: $EnumSolarPanels;
        static PHOTONIC_SOLAR_PANEL: $EnumSolarPanels;
        static NEUTRONIUN_SOLAR_PANEL: $EnumSolarPanels;
        register: boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumSolarPanels}.
     */
    export type $EnumSolarPanels_ = "solar_panel_default" | "advanced_solar_panel" | "hybrid_solar_panel" | "perfect_solar_panel" | "quantum_solar_panel" | "spectral_solar_panel" | "proton_solar_panel" | "singular_solar_panel" | "diffraction_solar_panel" | "photonic_solar_panel" | "neutroniun_solar_panel" | "barion_solar_panel" | "hadron_solar_panel" | "graviton_solar_panel" | "quark_solar_panel";
    export class $BlockEntityMiniPanels extends $BlockEntityInventory implements $ISolarTile {
        setCapacity(arg0: number): void;
        setOutput(arg0: number): void;
        getGuiContainer(arg0: $Player): $ContainerMenuMiniPanels;
        updateVisibility(): void;
        gainFuel(): void;
        setLoad(arg0: number): void;
        setBonus(arg0: $EnumTypeParts_, arg1: number): void;
        getBonus(arg0: $EnumTypeParts_): number;
        setStables(arg0: number, arg1: $List_<$BlockEntityMiniPanels$EnumState_>): void;
        getStables(): $List<$List<$BlockEntityMiniPanels$EnumState>>;
        getCapacityItems(): $List<$ItemStack>;
        setGeneration(arg0: $EnumSolarType_, arg1: number): void;
        getCoreLevel(): number;
        getOutputItems(): $List<$ItemStack>;
        setCoreLevel(arg0: number): void;
        getGenerationItems(): $List<$ItemStack>;
        getCoresItems(): $List<$ItemStack>;
        listStable: $List<$List<$BlockEntityMiniPanels$EnumState>>;
        blockState: $BlockState;
        canRain: boolean;
        activeState: $BlockEntitySolarPanel$GenerationState;
        advComponentMap: $Map<string, $AbstractComponent>;
        skyIsVisible: boolean;
        invSlotStorage: $InventoryStorageMiniPanels;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        generating: number;
        pollution: $ComponentPollution;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        timer: $ComponentTimer;
        load: number;
        sunIsUp: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        inventoryCore: $Inventory;
        block: $BlockTileEntity<any>;
        wetBiome: boolean;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        rain: boolean;
        static ticker: number;
        hasSky: boolean;
        genDayNight: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        invSlotOutput: $InventoryOutputMiniPanels;
        invSlotGlass: $InventoryGlassMiniPanels;
        genDay: number;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        noSunWorld: boolean;
        worldPosition: $BlockPos;
        component: $ComponentMiniPanel;
        pollutionAir: $AirPollutionComponent;
        biome: $Holder<$Biome>;
        genNight: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        bonusGeneration: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set capacity(value: number);
        set output(value: number);
        get capacityItems(): $List<$ItemStack>;
        get outputItems(): $List<$ItemStack>;
        get generationItems(): $List<$ItemStack>;
        get coresItems(): $List<$ItemStack>;
    }
    export class $BlockEntitySolarPanel extends $BlockEntityInventory implements $EnergySource, $Wrenchable, $IUpdatableTileEvent {
        setType(arg0: $EnumType_): void;
        setId(arg0: number): void;
        getFacing(arg0: $Level_, arg1: $BlockPos_): $Direction;
        isSource(): boolean;
        extractEnergy(arg0: number): void;
        setFacing(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player): boolean;
        getTiles(): $Map<$Direction, $EnergyTile>;
        canRender(): boolean;
        getDrop(): $List<$ItemStack>;
        updateVisibility(): void;
        setHashCodeSource(arg0: number): void;
        getHashCodeSource(): number;
        getValidReceivers(): $List<$InfoTile<$EnergyTile>>;
        getIdNetwork(): number;
        wrenchCanRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): boolean;
        getWrenchDrops(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Player, arg5: number): $List<$ItemStack>;
        wrenchBreak(arg0: $Level_, arg1: $BlockPos_): void;
        RemoveTile(arg0: $EnergyTile, arg1: $Direction_): void;
        AddTile(arg0: $EnergyTile, arg1: $Direction_): void;
        gainFuel(): void;
        getPanels(): $EnumSolarPanels;
        getSourceTier(): number;
        updateTileServer(arg0: $Player, arg1: number): void;
        setSolarType(arg0: $EnumType_): number;
        getPastEnergy(): number;
        emitsEnergyTo(arg0: $EnergyAcceptor, arg1: $Direction_): boolean;
        shouldRenderInPass(arg0: number): boolean;
        getTypePanel(): $EnumType;
        gaugeEnergyScaled(arg0: number): number;
        getPerEnergy(): number;
        addPerEnergy(arg0: number): void;
        setPastEnergy(arg0: number): void;
        canExtractEnergy(): number;
        extractEnergy(arg0: $Direction_, arg1: number): void;
        getSourceTier(arg0: $Direction_): number;
        canExtractEnergy(arg0: $Direction_): number;
        isRemovedTile(): boolean;
        blockState: $BlockState;
        solarpanels: $EnumSolarPanels;
        inputslot: $InventoryPanel;
        activeState: $BlockEntitySolarPanel$GenerationState;
        skyIsVisible: boolean;
        defaultOutoput: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        pollution: $ComponentPollution;
        type: $EnumType;
        twoContainer: boolean;
        isLoaded: boolean;
        output: number;
        addedToEnergyNet: boolean;
        sunIsUp: boolean;
        block: $BlockTileEntity<any>;
        wetBiome: boolean;
        moonPhase: number;
        levelPanel: number;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        defaultNight: number;
        rain: boolean;
        coef: number;
        hasSky: boolean;
        level: $Level;
        genDay: number;
        active: string;
        static list: $List<$BlockEntityType<$BlockEntitySolarPanel>>;
        noSunWorld: boolean;
        worldPosition: $BlockPos;
        debtMax: number;
        pollutionAir: $AirPollutionComponent;
        biome: $Holder<$Biome>;
        genNight: number;
        defaultTier: number;
        sunCoef: $SunCoef;
        debt: number;
        canRain: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        deptPercent: number;
        facing: number;
        generating: number;
        storage: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        percent: number;
        remove: boolean;
        timer: $ComponentTimer;
        tier: number;
        defaultMaxStorage: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        slotDept: $Inventory;
        static defaultAabbs: $List<$AABB>;
        maxStorage: number;
        deptGenerate: number;
        static ticker: number;
        charge: boolean;
        pollutionSoil: $SoilPollutionComponent;
        wirelessComponent: $WirelessComponent;
        defaultDay: number;
        static ATTACHMENTS_NBT_KEY: string;
        solarType: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EnumSolarPanels_, arg5: $MultiBlockEntity, arg6: $BlockPos_, arg7: $BlockState_);
        constructor(arg0: $EnumSolarPanels_, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
        set id(value: number);
        get source(): boolean;
        get tiles(): $Map<$Direction, $EnergyTile>;
        get drop(): $List<$ItemStack>;
        get validReceivers(): $List<$InfoTile<$EnergyTile>>;
        get idNetwork(): number;
        get panels(): $EnumSolarPanels;
        get typePanel(): $EnumType;
        get perEnergy(): number;
        get removedTile(): boolean;
    }
}
