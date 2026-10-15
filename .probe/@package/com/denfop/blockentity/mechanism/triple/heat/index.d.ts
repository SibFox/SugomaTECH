import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Inventory, $InventoryDischarge, $InventoryUpgrade } from "@package/com/denfop/inventory";
import { $BlockEntityTripleElectricMachine } from "@package/com/denfop/blockentity/base";
import { $IHasRecipe, $MachineRecipe, $InventoryOutput, $InventoryRecipes } from "@package/com/denfop/api/recipe";
import { $BlockTileEntity } from "@package/com/denfop/blocks";
import { $List, $Map } from "@package/java/util";
import { $AirPollutionComponent, $AbstractComponent, $ComponentProcess, $ComponentProgress, $Energy, $SoilPollutionComponent, $HeatComponent, $EnumTypeStyle, $ComponentUpgradeSlots } from "@package/com/denfop/componets";
import { $IType } from "@package/com/denfop/api/widget";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumTypeAudio } from "@package/com/denfop/api/sound";
import { $Object } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/denfop/blockentity/mechanism/triple/heat" {
    export class $BlockEntityAdvAlloySmelter extends $BlockEntityTripleElectricMachine implements $IHasRecipe, $IType {
        init(): void;
        getStyle(): $EnumTypeStyle;
        static addAlloysmelter(arg0: $Object, arg1: $Object, arg2: $Object, arg3: $ItemStack_, arg4: number): void;
        heat: $HeatComponent;
        blockState: $BlockState;
        advComponentMap: $Map<string, $AbstractComponent>;
        componentProgress: $ComponentProgress;
        componentList: $List<$AbstractComponent>;
        updateServerList: $List<$AbstractComponent>;
        facing: number;
        static updates: $Map<$ResourceKey<$Level>, $List<$ChunkPos>>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputSlot: $InventoryOutput;
        isLoaded: boolean;
        remove: boolean;
        energyConsume: number;
        output: $MachineRecipe;
        operationLength: number;
        operationsPerTick: number;
        pos: $BlockPos;
        provider: $HolderLookup$Provider;
        block: $BlockTileEntity<any>;
        static defaultAabbs: $List<$AABB>;
        updateClientList: $List<$AbstractComponent>;
        teBlock: $MultiBlockEntity;
        energy: $Energy;
        static ticker: number;
        inputSlotA: $InventoryRecipes;
        pollutionSoil: $SoilPollutionComponent;
        level: $Level;
        active: string;
        static ATTACHMENTS_NBT_KEY: string;
        componentUpgrade: $ComponentUpgradeSlots;
        dischargeSlot: $InventoryDischarge;
        worldPosition: $BlockPos;
        typeAudio: $EnumTypeAudio;
        pollutionAir: $AirPollutionComponent;
        input_slot: $Inventory;
        upgradeSlot: $InventoryUpgrade;
        valuesAudio: $EnumTypeAudio[];
        capabilityComponents: $Map<$BlockCapability<never, never>, $AbstractComponent>;
        componentProcess: $ComponentProcess;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get style(): $EnumTypeStyle;
    }
}
