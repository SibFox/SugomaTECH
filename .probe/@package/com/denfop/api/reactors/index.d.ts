import { $Timer } from "@package/com/denfop/utils";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CustomWorldContainer } from "@package/com/denfop/api/container";
import { $IMainMultiBlock } from "@package/com/denfop/api/multiblock";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Enum } from "@package/java/lang";
import { $Random, $List, $List_ } from "@package/java/util";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Energy, $ComponentBaseEnergy } from "@package/com/denfop/componets";

declare module "@package/com/denfop/api/reactors" {
    export class $IGraphiteReactor {
    }
    export interface $IGraphiteReactor extends $IAdvReactor, $IMainMultiBlock {
        getWaterTank(): $FluidTank;
        getEnergy(): $Energy;
        getFuelGraphite(arg0: number): number;
        getLevelGraphite(arg0: number): number;
        consumeGraphite(arg0: number): void;
        workCoolant(arg0: number): number;
        getOxideTank(): $FluidTank;
        getSteamTank(): $FluidTank;
        updateDataReactor(): void;
        getCoalDioxideTank(): $FluidTank;
        getGraphite(arg0: number): $ItemStack;
        consumeFuelGraphite(arg0: number, arg1: number): void;
        canWorkWithGraphite(): boolean;
        get waterTank(): $FluidTank;
        get energy(): $Energy;
        get oxideTank(): $FluidTank;
        get steamTank(): $FluidTank;
        get coalDioxideTank(): $FluidTank;
    }
    export class $IReactorModule {
    }
    export interface $IReactorModule {
        getGeneration(arg0: $ItemStack_): number;
        getExchanger(arg0: $ItemStack_): number;
        getComponentVent(arg0: $ItemStack_): number;
        getCapacitor(arg0: $ItemStack_): number;
        getStableHeat(arg0: $ItemStack_): number;
        getRadiation(arg0: $ItemStack_): number;
        getVent(arg0: $ItemStack_): number;
    }
    export class $LogicCreativeGasReactor extends $LogicCreativeReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $CreativeReactor);
    }
    export class $LogicCreativeFluidReactor extends $LogicCreativeReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $CreativeReactor);
    }
    export class $InventoryReactorModules<T extends $IAdvReactor> extends $Inventory {
        load(): void;
        getGeneration(): number;
        getExchanger(): number;
        getComponentVent(): number;
        getCapacitor(): number;
        getStableHeat(): number;
        getRadiation(): number;
        getVent(): number;
        base: $CustomWorldContainer;
        constructor(arg0: $ItemStack_);
        get generation(): number;
        get exchanger(): number;
        get componentVent(): number;
        get capacitor(): number;
        get stableHeat(): number;
        get radiation(): number;
        get vent(): number;
    }
    export class $IFluidReactor {
    }
    export interface $IFluidReactor extends $IAdvReactor, $IMainMultiBlock {
        getPressure(): number;
        addPressure(arg0: number): void;
        getInputTank(): $FluidTank;
        getHotCoolantTank(): $FluidTank;
        removePressure(arg0: number): void;
        getCoolantTank(): $FluidTank;
        getOutputTank(): $FluidTank;
        get pressure(): number;
        get inputTank(): $FluidTank;
        get hotCoolantTank(): $FluidTank;
        get coolantTank(): $FluidTank;
        get outputTank(): $FluidTank;
    }
    export class $LogicReactor {
        getGeneration(): number;
        onTick(): void;
        getRadGeneration(): number;
        getListIndexRod(): $List<number>;
        getMaxHeat(): number;
        setGeneration(arg0: number): void;
        setRadGeneration(arg0: number): void;
        calculateComponent(): void;
        getRodsList(): $List<$LogicComponent>;
        getListComponent(): $List<$LogicComponent>;
        static rand: $Random;
        constructor(arg0: $IAdvReactor);
        get listIndexRod(): $List<number>;
        get maxHeat(): number;
        get rodsList(): $List<$LogicComponent>;
        get listComponent(): $List<$LogicComponent>;
    }
    export class $IReactorItem {
    }
    export interface $IReactorItem {
        getType(): $EnumTypeComponent;
        caneExtractHeat(): boolean;
        getAutoRepair(arg0: $IAdvReactor): number;
        getRepairOther(arg0: $IAdvReactor): number;
        getDamageCFromHeat(arg0: number, arg1: $IAdvReactor): number;
        updatableItem(): boolean;
        getLevel(): number;
        getHeat(arg0: $IAdvReactor): number;
        needClear(arg0: $ItemStack_): boolean;
        damageItem(arg0: $ItemStack_, arg1: number): void;
        getEnergyProduction(arg0: $IAdvReactor): number;
        getHeatRemovePercent(arg0: $IAdvReactor): number;
        getRadiation(): number;
        get type(): $EnumTypeComponent;
        get level(): number;
        get radiation(): number;
    }
    export class $EnumTypeComponent extends $Enum<$EnumTypeComponent> {
        static values(): $EnumTypeComponent[];
        static valueOf(arg0: string): $EnumTypeComponent;
        static NEUTRON_PROTECTOR: $EnumTypeComponent;
        static COOLANT_ROD: $EnumTypeComponent;
        static ROD: $EnumTypeComponent;
        static CAPACITOR: $EnumTypeComponent;
        static HEAT_EXCHANGER: $EnumTypeComponent;
        static ENERGY_COUPLER: $EnumTypeComponent;
        static PLATE: $EnumTypeComponent;
        static HEAT_SINK: $EnumTypeComponent;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeComponent}.
     */
    export type $EnumTypeComponent_ = "rod" | "plate" | "capacitor" | "heat_exchanger" | "heat_sink" | "coolant_rod" | "energy_coupler" | "neutron_protector";
    export class $CreativeReactor implements $IAdvReactor {
        reset(arg0: $EnumReactors_): void;
        setTime(arg0: $EnumTypeSecurity_): void;
        getWidth(): number;
        getHeight(): number;
        getTimer(): $Timer;
        getOutput(): number;
        tick(arg0: number): void;
        getHeat(): number;
        explode(): void;
        setOutput(arg0: number): void;
        getSecurity(): $EnumTypeSecurity;
        isWork(): boolean;
        setWork(arg0: boolean): void;
        getModuleVent(): number;
        getModuleCapacitor(): number;
        getStableMaxHeat(): number;
        getModuleExchanger(): number;
        getMulHeatRod(arg0: number, arg1: number, arg2: $ItemStack_): number;
        getModuleRadiation(): number;
        setSecurity(arg0: $EnumTypeSecurity_): void;
        getTypeRector(): $ITypeRector;
        getMulOutput(arg0: number, arg1: number, arg2: $ItemStack_): number;
        getMaxLevelReactor(): number;
        increaseLevelReactor(): void;
        getModuleStableHeat(): number;
        getModuleGeneration(): number;
        getModuleComponentVent(): number;
        getItemAt(arg0: number, arg1: number): $ItemStack;
        getRad(): number;
        getMaxHeat(): number;
        getLevelReactor(): number;
        getRadiation(): $ComponentBaseEnergy;
        workTimer(): void;
        setItemAt(arg0: number, arg1: number): void;
        setRad(arg0: number): void;
        setUpdate(): void;
        getBlockLevel(): number;
        setHeat(arg0: number): void;
        getMulDamage(arg0: number, arg1: number, arg2: $ItemStack_): number;
        getMulHeat(arg0: number, arg1: number, arg2: $ItemStack_): number;
        timer: $Timer;
        level: number;
        static graphite_capacitor: number[];
        static graphite_capacitors: number[];
        red_timer: $Timer;
        static heat_graphite: number[];
        yellow_timer: $Timer;
        constructor(arg0: $EnumReactors_, arg1: $Inventory);
        set time(value: $EnumTypeSecurity_);
        get width(): number;
        get height(): number;
        get moduleVent(): number;
        get moduleCapacitor(): number;
        get stableMaxHeat(): number;
        get moduleExchanger(): number;
        get moduleRadiation(): number;
        get typeRector(): $ITypeRector;
        get maxLevelReactor(): number;
        get moduleStableHeat(): number;
        get moduleGeneration(): number;
        get moduleComponentVent(): number;
        get maxHeat(): number;
        get levelReactor(): number;
        get radiation(): $ComponentBaseEnergy;
        get blockLevel(): number;
    }
    export class $LogicGraphiteReactor extends $LogicReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $IGraphiteReactor);
    }
    export class $LogicCreativeHeatReactor extends $LogicCreativeReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $CreativeReactor);
    }
    export class $IHeatReactor {
    }
    export interface $IHeatReactor extends $IAdvReactor, $IMainMultiBlock {
        getHydrogenTank(): $FluidTank;
        getWaterTank(): $FluidTank;
        getOxygenTank(): $FluidTank;
        getPowerPump(arg0: number): number;
        getEnergyPump(arg0: number): number;
        getHeliumTank(): $FluidTank;
        getLengthPump(): number;
        getPowerSimplePump(arg0: number): number;
        getFuelGraphite(arg0: number): number;
        getLevelGraphite(arg0: number): number;
        consumeGraphite(arg0: number): void;
        updateDataReactor(): void;
        getGraphite(arg0: number): $ItemStack;
        getHeliumToRegenerate(): number;
        addHeliumToRegenerate(arg0: number): void;
        getLengthSimplePump(): number;
        getLengthGraphiteIndex(arg0: number): number[];
        getEnergySimplePump(arg0: number): number;
        consumeFuelGraphite(arg0: number, arg1: number): void;
        damagePump(arg0: number): void;
        get hydrogenTank(): $FluidTank;
        get waterTank(): $FluidTank;
        get oxygenTank(): $FluidTank;
        get heliumTank(): $FluidTank;
        get lengthPump(): number;
        get heliumToRegenerate(): number;
        get lengthSimplePump(): number;
    }
    export class $LogicFluidReactor extends $LogicReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $IFluidReactor);
    }
    export class $LogicCreativeReactor {
        getGeneration(): number;
        onTick(): void;
        getInfoStack(): $List<$ItemStack>;
        getRadGeneration(): number;
        getListIndexRod(): $List<number>;
        getMaxHeat(): number;
        setGeneration(arg0: number): void;
        setRadGeneration(arg0: number): void;
        calculateComponent(): void;
        getRodsList(): $List<$LogicCreativeComponent>;
        static rand: $Random;
        constructor(arg0: $IAdvReactor);
        get infoStack(): $List<$ItemStack>;
        get listIndexRod(): $List<number>;
        get maxHeat(): number;
        get rodsList(): $List<$LogicCreativeComponent>;
    }
    export class $LogicHeatReactor extends $LogicReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $IHeatReactor);
    }
    export class $ITypeRector extends $Enum<$ITypeRector> {
        static values(): $ITypeRector[];
        static valueOf(arg0: string): $ITypeRector;
        static GRAPHITE_FLUID: $ITypeRector;
        static FLUID: $ITypeRector;
        static GAS_COOLING_FAST: $ITypeRector;
        static HIGH_SOLID: $ITypeRector;
    }
    /**
     * Values that may be interpreted as {@link $ITypeRector}.
     */
    export type $ITypeRector_ = "fluid" | "high_solid" | "graphite_fluid" | "gas_cooling_fast";
    export class $EnumTypeWork extends $Enum<$EnumTypeWork> {
        static values(): $EnumTypeWork[];
        static valueOf(arg0: string): $EnumTypeWork;
        static WORK: $EnumTypeWork;
        static LEVEL_INCREASE: $EnumTypeWork;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeWork}.
     */
    export type $EnumTypeWork_ = "work" | "level_increase";
    export class $LogicComponent {
        getStack(): $ItemStack;
        getItem(): $IReactorItem;
        getDamage(): number;
        getY(): number;
        getHeat(): number;
        getX(): number;
        onTick(): boolean;
        getLogicComponents(): $List<$LogicComponent>;
        updateAllInterface(arg0: $List_<$LogicComponent>, arg1: number, arg2: number, arg3: $IAdvReactor): void;
        canExtractHeat(): boolean;
        damage: number;
        nearRod: number;
        constructor(arg0: $IReactorItem, arg1: number, arg2: number, arg3: $ItemStack_, arg4: $IAdvReactor);
        get stack(): $ItemStack;
        get item(): $IReactorItem;
        get y(): number;
        get heat(): number;
        get x(): number;
        get logicComponents(): $List<$LogicComponent>;
    }
    export class $LogicCreativeComponent {
        getStack(): $ItemStack;
        getItem(): $IReactorItem;
        getY(): number;
        getHeat(): number;
        getX(): number;
        onTick(): boolean;
        getLogicComponents(): $List<$LogicCreativeComponent>;
        updateAllInterface(arg0: $List_<$LogicCreativeComponent>, arg1: number, arg2: number, arg3: $IAdvReactor): void;
        canExtractHeat(): boolean;
        calculateDamageOther(): void;
        damage: number;
        nearRod: number;
        constructor(arg0: $IReactorItem, arg1: number, arg2: number, arg3: $ItemStack_, arg4: $IAdvReactor);
        get stack(): $ItemStack;
        get item(): $IReactorItem;
        get y(): number;
        get heat(): number;
        get x(): number;
        get logicComponents(): $List<$LogicCreativeComponent>;
    }
    export class $EnumTypeSecurity extends $Enum<$EnumTypeSecurity> {
        static values(): $EnumTypeSecurity[];
        static valueOf(arg0: string): $EnumTypeSecurity;
        static ERROR: $EnumTypeSecurity;
        static STABLE: $EnumTypeSecurity;
        static NONE: $EnumTypeSecurity;
        static UNSTABLE: $EnumTypeSecurity;
    }
    /**
     * Values that may be interpreted as {@link $EnumTypeSecurity}.
     */
    export type $EnumTypeSecurity_ = "stable" | "unstable" | "error" | "none";
    export class $EnumReactors extends $Enum<$EnumReactors> {
        static values(): $EnumReactors[];
        static valueOf(arg0: string): $EnumReactors;
        getType(): $ITypeRector;
        getWidth(): number;
        getHeight(): number;
        getNameReactor(): string;
        getMaxStable(): number;
        getRad(): number;
        getMaxHeat(): number;
        getRadiation(): number;
        static HI: $EnumReactors;
        static GI: $EnumReactors;
        static FI: $EnumReactors;
        static GRP: $EnumReactors;
        static HP: $EnumReactors;
        static GP: $EnumReactors;
        static GRS: $EnumReactors;
        static FP: $EnumReactors;
        static HS: $EnumReactors;
        static GS: $EnumReactors;
        static FS: $EnumReactors;
        static GRA: $EnumReactors;
        static HA: $EnumReactors;
        static GA: $EnumReactors;
        static FA: $EnumReactors;
        static GRI: $EnumReactors;
        get type(): $ITypeRector;
        get width(): number;
        get height(): number;
        get nameReactor(): string;
        get maxStable(): number;
        get rad(): number;
        get maxHeat(): number;
        get radiation(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumReactors}.
     */
    export type $EnumReactors_ = "fs" | "fa" | "fi" | "fp" | "gs" | "ga" | "gi" | "gp" | "grs" | "gra" | "gri" | "grp" | "hs" | "ha" | "hi" | "hp";
    export class $LogicGasReactor extends $LogicReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $IGasReactor);
    }
    export class $LogicCreativeGraphiteReactor extends $LogicCreativeReactor {
        setTemp_heat(arg0: number): void;
        getTemp_heat(): number;
        static rand: $Random;
        temp_heat: number;
        coolant: number[];
        constructor(arg0: $CreativeReactor);
    }
    export class $IGasReactor {
    }
    export interface $IGasReactor extends $IAdvReactor, $IMainMultiBlock {
        getHydrogenTank(arg0: number): $FluidTank;
        getWaterTank(arg0: number): $FluidTank;
        getPowerFan(arg0: number): number;
        getLengthFan(): number;
        getEnergyFan(arg0: number): number;
        getOxygenTank(arg0: number): $FluidTank;
        getPowerPump(arg0: number): number;
        getEnergyPump(arg0: number): number;
        getHeliumTank(): $FluidTank;
        getCapacityHelium(): number;
        getLengthPump(): number;
        getEnergy(): $Energy;
        getPressure(arg0: number): number;
        getLengthCompressors(): number;
        getTemperatureRefrigerator(): number;
        getHeliumToRegenerate(): number;
        addHeliumToRegenerate(arg0: number): void;
        getEnergyCompressor(arg0: number): number;
        hasFan(): boolean;
        hasPump(): boolean;
        damagePump(arg0: number): void;
        damageFan(arg0: number): void;
        get lengthFan(): number;
        get heliumTank(): $FluidTank;
        get capacityHelium(): number;
        get lengthPump(): number;
        get energy(): $Energy;
        get lengthCompressors(): number;
        get temperatureRefrigerator(): number;
        get heliumToRegenerate(): number;
    }
    export class $LogicCreativeWaterReactor extends $LogicFluidReactor {
        static rand: $Random;
        temp_heat: number;
        constructor(arg0: $IFluidReactor);
    }
    export class $IAdvReactor {
    }
    export interface $IAdvReactor {
        setTime(arg0: $EnumTypeSecurity_): void;
        getWidth(): number;
        getHeight(): number;
        getTimer(): $Timer;
        getOutput(): number;
        getHeat(): number;
        explode(): void;
        setOutput(arg0: number): void;
        getSecurity(): $EnumTypeSecurity;
        isWork(): boolean;
        setWork(arg0: boolean): void;
        getModuleVent(): number;
        getMulDamage(arg0: number, arg1: number, arg2: $ItemStack_): number;
        getModuleCapacitor(): number;
        getStableMaxHeat(): number;
        getModuleExchanger(): number;
        getMulHeatRod(arg0: number, arg1: number, arg2: $ItemStack_): number;
        getModuleRadiation(): number;
        setSecurity(arg0: $EnumTypeSecurity_): void;
        getTypeRector(): $ITypeRector;
        getMulOutput(arg0: number, arg1: number, arg2: $ItemStack_): number;
        getMaxLevelReactor(): number;
        increaseLevelReactor(): void;
        getModuleStableHeat(): number;
        getModuleGeneration(): number;
        getModuleComponentVent(): number;
        getItemAt(arg0: number, arg1: number): $ItemStack;
        getMaxHeat(): number;
        getLevelReactor(): number;
        getRadiation(): $ComponentBaseEnergy;
        workTimer(): void;
        setItemAt(arg0: number, arg1: number): void;
        getMulHeat(arg0: number, arg1: number, arg2: $ItemStack_): number;
        setRad(arg0: number): void;
        setUpdate(): void;
        getBlockLevel(): number;
        setHeat(arg0: number): void;
        set time(value: $EnumTypeSecurity_);
        get width(): number;
        get height(): number;
        get timer(): $Timer;
        get moduleVent(): number;
        get moduleCapacitor(): number;
        get stableMaxHeat(): number;
        get moduleExchanger(): number;
        get moduleRadiation(): number;
        get typeRector(): $ITypeRector;
        get maxLevelReactor(): number;
        get moduleStableHeat(): number;
        get moduleGeneration(): number;
        get moduleComponentVent(): number;
        get maxHeat(): number;
        get levelReactor(): number;
        get radiation(): $ComponentBaseEnergy;
        set rad(value: number);
        get blockLevel(): number;
    }
}
