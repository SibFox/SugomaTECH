import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockEntityMultiBlockBase } from "@package/com/denfop/blockentity/mechanism/multiblocks/base";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Class } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
export * as preview from "@package/com/denfop/api/multiblock/preview";

declare module "@package/com/denfop/api/multiblock" {
    export class $IMultiElement {
    }
    export interface $IMultiElement {
        setMainMultiElement(arg0: $IMainMultiBlock): void;
        getMain(): $IMainMultiBlock;
        getBlockLevel(): number;
        canCreateSystem(arg0: $IMainMultiBlock): boolean;
        hasOwnInventory(): boolean;
        isMain(): boolean;
        set mainMultiElement(value: $IMainMultiBlock);
        get blockLevel(): number;
    }
    export class $MultiBlockSystem {
        add(arg0: string, arg1: $MultiBlockStructure): $MultiBlockStructure;
        add(arg0: string): $MultiBlockStructure;
        static getInstance(): $MultiBlockSystem;
        getMapMultiBlocks(): $Map<string, $MultiBlockStructure>;
        mapMultiBlocks: $Map<string, $MultiBlockStructure>;
        static instance: $MultiBlockSystem;
        constructor();
    }
    export class $MultiBlockStructure {
        getLength(): number;
        add(arg0: $BlockPos_, arg1: $Class<$IMultiElement>, arg2: $ItemStack_, arg3: $Direction_): void;
        add(arg0: $BlockPos_, arg1: $Class<$IMultiElement>, arg2: $ItemStack_): void;
        getHeight(): number;
        getWeight(): number;
        getPos(): $BlockPos;
        markDirty(arg0: $BlockEntityMultiBlockBase, arg1: boolean): void;
        setMain(arg0: $Class<$IMainMultiBlock>): $MultiBlockStructure;
        getWorldCenter(arg0: $Direction_, arg1: $BlockPos_): $Vec3;
        getPosFromClass(arg0: $Direction_, arg1: $BlockPos_, arg2: $Class<$IMultiElement>): $List<$BlockPos>;
        getItemStackMap(): $Map<$BlockPos, $ItemStack>;
        getRotationMap(): $Map<$BlockPos, $Direction>;
        isHasActivatedItem(): boolean;
        isActivateItem(arg0: $ItemStack_): boolean;
        getActivateItem(): $ItemStack;
        getPoses(arg0: $Direction_, arg1: $BlockPos_): $List<$BlockPos>;
        getFull(arg0: $Direction_, arg1: $BlockPos_, arg2: $Level_): boolean;
        getFull(arg0: $Direction_, arg1: $BlockPos_, arg2: $Level_, arg3: $Player): boolean;
        getItemStackList(): $List<$ItemStack>;
        isHasUniqueModels(): boolean;
        setActivateItem(arg0: $ItemStack_): $MultiBlockStructure;
        setUniqueModel(): $MultiBlockStructure;
        setIgnoreMetadata(arg0: boolean): $MultiBlockStructure;
        getLocalCenterOffset(): $Vec3;
        getWorldCenterBlockPos(arg0: $Direction_, arg1: $BlockPos_): $BlockPos;
        setHasActivatedItem(arg0: boolean): $MultiBlockStructure;
        addReport(arg0: $Class<$IMultiElement>, arg1: string): void;
        ItemStackMap: $Map<$BlockPos, $ItemStack>;
        RotationMap: $Map<$BlockPos, $Direction>;
        activateItem: $ItemStack;
        bakedModelMap: $Map<$BlockPos, $BakedModel>;
        hasActivatedItem: boolean;
        minLength: number;
        length: number;
        minWeight: number;
        ignoreMetadata: boolean;
        weight: number;
        maxWeight: number;
        blockPosMap: $Map<$BlockPos, $Class<$IMultiElement>>;
        minHeight: number;
        pos: $BlockPos;
        maxHeight: number;
        hasUniqueModels: boolean;
        itemStackList: $List<$ItemStack>;
        maxLength: number;
        height: number;
        constructor();
        set main(value: $Class<$IMainMultiBlock>);
        get itemStackMap(): $Map<$BlockPos, $ItemStack>;
        get rotationMap(): $Map<$BlockPos, $Direction>;
        get localCenterOffset(): $Vec3;
    }
    export class $IMainMultiBlock {
    }
    export interface $IMainMultiBlock extends $IMultiElement {
        isFull(): boolean;
        getMultiBlockStucture(): $MultiBlockStructure;
        getBlockLevel(): number;
        wasActivated(): boolean;
        setActivated(arg0: boolean): void;
        setFull(arg0: boolean): void;
        updateFull(arg0: $Player): void;
        updateFull(): void;
        get multiBlockStucture(): $MultiBlockStructure;
        get blockLevel(): number;
        set activated(value: boolean);
    }
}
