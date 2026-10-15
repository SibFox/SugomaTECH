import { $Timer } from "@package/com/denfop/utils";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $BlockEntityMultiBlockElement } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $ContainerMenuWaterSecurity } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $EnumTypeSecurity_, $EnumTypeSecurity } from "@package/com/denfop/api/reactors";
import { $ISecurity } from "@package/com/denfop/blockentity/reactors/water";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/reactors/water/security" {
    export class $BlockEntityPerSecurity extends $BlockEntityMultiBlockElement implements $ISecurity {
        getSecurity(): $EnumTypeSecurity;
        getGuiContainer(arg0: $Player): $ContainerMenuWaterSecurity;
        getYellow_timer(): $Timer;
        setSecurity(arg0: $EnumTypeSecurity_): void;
        getRed_timer(): $Timer;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        security: $EnumTypeSecurity;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get yellow_timer(): $Timer;
        get red_timer(): $Timer;
    }
    export class $BlockEntityAdvSecurity extends $BlockEntityMultiBlockElement implements $ISecurity {
        getSecurity(): $EnumTypeSecurity;
        getGuiContainer(arg0: $Player): $ContainerMenuWaterSecurity;
        getYellow_timer(): $Timer;
        setSecurity(arg0: $EnumTypeSecurity_): void;
        getRed_timer(): $Timer;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        security: $EnumTypeSecurity;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get yellow_timer(): $Timer;
        get red_timer(): $Timer;
    }
    export class $BlockEntitySimpleSecurity extends $BlockEntityMultiBlockElement implements $ISecurity {
        getSecurity(): $EnumTypeSecurity;
        getGuiContainer(arg0: $Player): $ContainerMenuWaterSecurity;
        getYellow_timer(): $Timer;
        setSecurity(arg0: $EnumTypeSecurity_): void;
        getRed_timer(): $Timer;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        security: $EnumTypeSecurity;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get yellow_timer(): $Timer;
        get red_timer(): $Timer;
    }
    export class $BlockEntityImpSecurity extends $BlockEntityMultiBlockElement implements $ISecurity {
        getSecurity(): $EnumTypeSecurity;
        getGuiContainer(arg0: $Player): $ContainerMenuWaterSecurity;
        getYellow_timer(): $Timer;
        setSecurity(arg0: $EnumTypeSecurity_): void;
        getRed_timer(): $Timer;
        blockState: $BlockState;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        active: string;
        facing: number;
        static ATTACHMENTS_NBT_KEY: string;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        worldPosition: $BlockPos;
        security: $EnumTypeSecurity;
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get yellow_timer(): $Timer;
        get red_timer(): $Timer;
    }
}
