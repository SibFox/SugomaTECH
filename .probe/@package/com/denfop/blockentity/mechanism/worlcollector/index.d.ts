import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IIsMolecular, $BlockEntityBase, $BlockEntityBaseWorldCollector, $EnumTypeCollector } from "@package/com/denfop/blockentity/base";
import { $InventoryWorldCollector, $InventoryDischarge, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $InventoryOutput, $InventoryRecipes } from "@package/com/denfop/api/recipe";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $Energy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/worlcollector" {
    export class $BlockEntityCrystallize extends $BlockEntityBaseWorldCollector implements $IIsMolecular {
        getMode(): number;
        getBakedModel(): $BakedModel;
        getItemStack(): $ItemStack;
        getEntityBlock(): $BlockEntityBase;
        getTransformedModel(): $BakedModel;
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        matter_energy: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryRecipes;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        MatterSlot: $InventoryWorldCollector;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        max_matter_energy: number;
        level: $Level;
        enumTypeCollector: $EnumTypeCollector;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        need_matter: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get mode(): number;
        get bakedModel(): $BakedModel;
        get itemStack(): $ItemStack;
        get entityBlock(): $BlockEntityBase;
        get transformedModel(): $BakedModel;
    }
    export class $BlockEntityNetherAssembler extends $BlockEntityBaseWorldCollector {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        matter_energy: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryRecipes;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        MatterSlot: $InventoryWorldCollector;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        max_matter_energy: number;
        level: $Level;
        enumTypeCollector: $EnumTypeCollector;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        need_matter: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityEnderAssembler extends $BlockEntityBaseWorldCollector {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        matter_energy: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryRecipes;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        MatterSlot: $InventoryWorldCollector;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        max_matter_energy: number;
        level: $Level;
        enumTypeCollector: $EnumTypeCollector;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        need_matter: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAerAssembler extends $BlockEntityBaseWorldCollector {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        matter_energy: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryRecipes;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        MatterSlot: $InventoryWorldCollector;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        max_matter_energy: number;
        level: $Level;
        enumTypeCollector: $EnumTypeCollector;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        need_matter: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityAquaAssembler extends $BlockEntityBaseWorldCollector {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        matter_energy: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryRecipes;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        MatterSlot: $InventoryWorldCollector;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        max_matter_energy: number;
        level: $Level;
        enumTypeCollector: $EnumTypeCollector;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        need_matter: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityEarthAssembler extends $BlockEntityBaseWorldCollector {
        blockState: $BlockState;
        sound: boolean;
        advComponentMap: $Map<string, $AbstractComponent>;
        matter_energy: number;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        guiChargeLevel: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        tier: number;
        inputSlot: $InventoryRecipes;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        MatterSlot: $InventoryWorldCollector;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        guiProgress: number;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        max_matter_energy: number;
        level: $Level;
        enumTypeCollector: $EnumTypeCollector;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        need_matter: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
