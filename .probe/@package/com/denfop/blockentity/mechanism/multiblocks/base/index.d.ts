import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $IMainMultiBlock, $MultiBlockStructure, $IMultiElement } from "@package/com/denfop/api/multiblock";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $RenderLevelStageEvent } from "@package/net/neoforged/neoforge/client/event";
import { $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/multiblocks/base" {
    export class $BlockEntityMultiBlockElement extends $BlockEntityInventory implements $IMultiElement {
        setMainMultiElement(arg0: $IMainMultiBlock): void;
        getMain(): $IMainMultiBlock;
        getBlockLevel(): number;
        canCreateSystem(arg0: $IMainMultiBlock): boolean;
        hasOwnInventory(): boolean;
        isMain(): boolean;
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
        pollutionAir: $AirPollutionComponent;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        constructor(arg0: $MultiBlockEntity, arg1: $BlockPos_, arg2: $BlockState_);
        set mainMultiElement(value: $IMainMultiBlock);
        get blockLevel(): number;
    }
    export class $BlockEntityMultiBlockBase extends $BlockEntityInventory implements $IMainMultiBlock, $IUpdatableTileEvent {
        static createFunction(arg0: $BlockEntityMultiBlockBase): $Function<$RenderLevelStageEvent, void>;
        isFull(): boolean;
        render(arg0: $BlockEntityMultiBlockBase, arg1: $RenderLevelStageEvent): void;
        getMultiBlockStucture(): $MultiBlockStructure;
        updateAfterAssembly(): void;
        setMainMultiElement(arg0: $IMainMultiBlock): void;
        renderUniqueMultiBlock(arg0: $RenderLevelStageEvent): void;
        getMultiBlockStructure(): $MultiBlockStructure;
        getMain(): $IMainMultiBlock;
        getBlockLevel(): number;
        wasActivated(): boolean;
        setActivated(arg0: boolean): void;
        usingBeforeGUI(): void;
        setFull(arg0: boolean): void;
        isMain(): boolean;
        updateFull(): void;
        updateFull(arg0: $Player): void;
        canCreateSystem(arg0: $IMainMultiBlock): boolean;
        hasOwnInventory(): boolean;
        entityPlayerList: $List<$Player>;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isLoaded: boolean;
        remove: boolean;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        activate: boolean;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        full: boolean;
        constructor(arg0: $MultiBlockStructure, arg1: $MultiBlockEntity, arg2: $BlockPos_, arg3: $BlockState_);
        get multiBlockStucture(): $MultiBlockStructure;
        set mainMultiElement(value: $IMainMultiBlock);
        get multiBlockStructure(): $MultiBlockStructure;
        get blockLevel(): number;
        set activated(value: boolean);
    }
}
