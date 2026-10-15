import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockEntityRadPipes, $BlockEntityMultiCable } from "@package/com/denfop/blockentity/transport/tiles";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $SoilPollutionComponent } from "@package/com/denfop/componets";
import { $NumberFormat } from "@package/java/text";
import { $DataCable } from "@package/com/denfop/render/transport";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ICableItem } from "@package/com/denfop/blockentity/transport/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/transport/tiles/radiation" {
    export class $BlockEntityRadiationPipe extends $BlockEntityRadPipes {
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
        addedToEnergyNet: boolean;
        connectivity: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        cableItem: $ICableItem;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        static ticker: number;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        static list: $List<$BlockEntityType<$BlockEntityMultiCable>>;
        worldPosition: $BlockPos;
        pollutionAir: $AirPollutionComponent;
        dataCable: $DataCable;
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        static lossFormat: $NumberFormat;
        stackFacade: $ItemStack;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
