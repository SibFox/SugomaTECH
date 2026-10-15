import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $InventoryWaterRotorBlades, $InventoryWaterRotor } from "@package/com/denfop/inventory";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $SoilPollutionComponent, $EnumTypeStyle } from "@package/com/denfop/componets";
import { $IType } from "@package/com/denfop/api/widget";
import { $ContainerMenuBaseWaterGenerator } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IWindMechanism, $EnumLevelGenerators, $EnumLevelGenerators_, $EnumWindSide, $EnumRotorSide_, $EnumRotorSide, $EnumTypeWind, $WindRotor } from "@package/com/denfop/api/windsystem";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/water" {
    export class $BlockEntityImpWaterGenerator extends $BlockEntityBaseWaterGenerator {
        blockState: $BlockState;
        wind_side: $EnumWindSide;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot_blades: $InventoryWaterRotorBlades;
        slot: $InventoryWaterRotor;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        mind_wind: number;
        enumTypeWind: $EnumTypeWind;
        wind_speed: number;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        generation: number;
        timers: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        coefficient_power: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        mind_speed: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntitySimpleWaterGenerator extends $BlockEntityBaseWaterGenerator {
        blockState: $BlockState;
        wind_side: $EnumWindSide;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot_blades: $InventoryWaterRotorBlades;
        slot: $InventoryWaterRotor;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        mind_wind: number;
        enumTypeWind: $EnumTypeWind;
        wind_speed: number;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        generation: number;
        timers: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        coefficient_power: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        mind_speed: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityBaseWaterGenerator extends $BlockEntityInventory implements $IWindMechanism, $IType, $IUpdatableTileEvent {
        getTime(): number;
        getSpace(): boolean;
        getGeneration(): number;
        change(): void;
        getMin(): boolean;
        getStyle(): $EnumTypeStyle;
        getItemStack(): $ItemStack;
        getAngle(): number;
        getGuiContainer(arg0: $Player): $ContainerMenuBaseWaterGenerator;
        setRotationSpeed(arg0: number): void;
        setWork(arg0: boolean): void;
        getRotor(): $WindRotor;
        checkSpace(): boolean;
        getMinWind(): number;
        can_repair(): boolean;
        setCoefficient(arg0: number): void;
        need_repair(): boolean;
        getMinWindSpeed(): number;
        getLevelGenerator(): $EnumLevelGenerators;
        getRotorDiameter(): number;
        getCoefficient(): number;
        getRotorSide(): $EnumRotorSide;
        setRotorSide(arg0: $EnumRotorSide_): void;
        getAdditionalPower(): number;
        getAuto(): boolean;
        getAdditionalCoefficient(): number;
        getRotorRenderTexture(): $ResourceLocation;
        updateTileServer(arg0: $Player, arg1: number): void;
        blockState: $BlockState;
        wind_side: $EnumWindSide;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot_blades: $InventoryWaterRotorBlades;
        slot: $InventoryWaterRotor;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        mind_wind: number;
        enumTypeWind: $EnumTypeWind;
        wind_speed: number;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        generation: number;
        timers: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        coefficient_power: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        mind_speed: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $EnumLevelGenerators_, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
        get time(): number;
        get space(): boolean;
        get min(): boolean;
        get style(): $EnumTypeStyle;
        get itemStack(): $ItemStack;
        get angle(): number;
        set rotationSpeed(value: number);
        set work(value: boolean);
        get rotor(): $WindRotor;
        get minWind(): number;
        get minWindSpeed(): number;
        get levelGenerator(): $EnumLevelGenerators;
        get rotorDiameter(): number;
        get additionalPower(): number;
        get auto(): boolean;
        get additionalCoefficient(): number;
        get rotorRenderTexture(): $ResourceLocation;
    }
    export class $BlockEntityAdvWaterGenerator extends $BlockEntityBaseWaterGenerator {
        blockState: $BlockState;
        wind_side: $EnumWindSide;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot_blades: $InventoryWaterRotorBlades;
        slot: $InventoryWaterRotor;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        mind_wind: number;
        enumTypeWind: $EnumTypeWind;
        wind_speed: number;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        generation: number;
        timers: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        coefficient_power: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        mind_speed: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityPerWaterGenerator extends $BlockEntityBaseWaterGenerator {
        blockState: $BlockState;
        wind_side: $EnumWindSide;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        slot_blades: $InventoryWaterRotorBlades;
        slot: $InventoryWaterRotor;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        mind_wind: number;
        enumTypeWind: $EnumTypeWind;
        wind_speed: number;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        generation: number;
        timers: number;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        coefficient_power: number;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        mind_speed: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
