import { $Level_ } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ItemStack, $CreativeModeTab, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $List, $Set } from "@package/java/util";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Class } from "@package/java/lang";
import { $HarvestTool, $DefaultDrop } from "@package/com/denfop/blocks/state";
import { $BlockEntityType_, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/api/blockentity" {
    export class $Wrenchable {
    }
    export interface $Wrenchable {
        getFacing(arg0: $Level_, arg1: $BlockPos_): $Direction;
        setFacing(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player): boolean;
        wrenchCanRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): boolean;
        getWrenchDrops(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Player, arg5: number): $List<$ItemStack>;
        wrenchBreak(arg0: $Level_, arg1: $BlockPos_): void;
    }
    export class $MultiBlockEntity {
        static CABLE: $MapColor;
    }
    export interface $MultiBlockEntity extends $ISubEnum {
        ordinal(): number;
        setType(arg0: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityBase>>): void;
        getSupportedFacings(): $Set<$Direction>;
        allowWrenchRotating(): boolean;
        hasItem(): boolean;
        getUniqueName(): string;
        buildDummies(): void;
        getIDBlock(): number;
        setIdBlock(arg0: number): void;
        hasActive(): boolean;
        getTeClass(): $Class<$BlockEntityBase>;
        getBlockType(): $BlockEntityType<$BlockEntityBase>;
        getMaterial(): $MapColor;
        getCreativeTab(): $CreativeModeTab;
        getDummyTe(): $BlockEntityBase;
        hasUniqueName(): boolean;
        hasOtherVersion(): boolean;
        getOtherVersion(arg0: $ItemStack_): $List<$ItemStack>;
        getHardness(): number;
        setDefaultState(arg0: $BlockState_): void;
        getHarvestTool(): $HarvestTool;
        getDefaultDrop(): $DefaultDrop;
        getMultiModels(arg0: $MultiBlockEntity): string[];
        set type(value: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityBase>>);
        get supportedFacings(): $Set<$Direction>;
        get uniqueName(): string;
        get IDBlock(): number;
        set idBlock(value: number);
        get teClass(): $Class<$BlockEntityBase>;
        get blockType(): $BlockEntityType<$BlockEntityBase>;
        get material(): $MapColor;
        get creativeTab(): $CreativeModeTab;
        get dummyTe(): $BlockEntityBase;
        get hardness(): number;
        set defaultState(value: $BlockState_);
        get harvestTool(): $HarvestTool;
        get defaultDrop(): $DefaultDrop;
    }
}
