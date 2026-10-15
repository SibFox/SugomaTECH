import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $IUpdatableTileEvent } from "@package/com/denfop/network";
import { $InventoryExpStorage } from "@package/com/denfop/inventory";
import { $BlockEntityInventory } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $ComponentBaseEnergy, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ContainerMenuStorageExp } from "@package/com/denfop/containermenu";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AudioFixer, $EnumTypeAudio_, $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/exp" {
    export class $BlockEntityStorageExp extends $BlockEntityInventory implements $IUpdatableTileEvent, $AudioFixer {
        setType(arg0: $EnumTypeAudio_): void;
        getSound(): $SoundEvent;
        getGuiContainer(arg0: $Player): $ContainerMenuStorageExp;
        initiate(arg0: number): void;
        getEnable(): boolean;
        getTypeAudio(): $EnumTypeAudio;
        updateTileServer(arg0: $Player, arg1: number): void;
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
        inputSlot: $InventoryExpStorage;
        expirencelevel1: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $ComponentBaseEnergy;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        valuesAudio: $EnumTypeAudio[];
        expirencelevel: number;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sound(): $SoundEvent;
        get enable(): boolean;
    }
}
