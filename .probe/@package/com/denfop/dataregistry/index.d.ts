import { $DeferredHolder, $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $Supplier_ } from "@package/java/util/function";
import { $ItemBlockTileEntity } from "@package/com/denfop/blocks/blockitem";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack, $Item_, $BlockItem, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Class } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $ItemBlockCore, $TileBlockCreator, $BlockTileEntity } from "@package/com/denfop/blocks";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/dataregistry" {
    export class $DataItem<T extends $Enum<T>, E extends $Item> {
        getStack(arg0: number): E;
        getStack(arg0: T): E;
        getItem(arg0: T): E;
        getItemStack(arg0: number, arg1: number): $ItemStack;
        getItemStack(arg0: number): $ItemStack;
        getMeta(arg0: $ItemStack_): number;
        getMeta(arg0: E): number;
        getItemFromMeta(arg0: number): E;
        getRegistryObject(arg0: number): $DeferredHolder<$Item, E>;
        static objects: $List<$DeferredHolder<$Item, $Item>>;
        constructor(arg0: $Class<T>, arg1: $Class<E>);
    }
    export class $DataMultiBlock<T extends $Enum<T>, E extends $Block, F extends $ItemBlockCore<T>> {
        getItem(arg0: number): F;
        getBlock(): $DeferredHolder<$Block, E>;
        getItemStack(arg0: number): $ItemStack;
        getMeta(arg0: F): number;
        constructor(arg0: $Class<T>, arg1: $Class<E>, arg2: $Class<F>);
        get block(): $DeferredHolder<$Block, E>;
    }
    export class $DataBlockEntity<T extends $Enum<T>> {
        contains(arg0: $ItemStack_): boolean;
        getState(arg0: T): $BlockState;
        create(arg0: $Class<$BlockEntityBase>, ...arg1: $DeferredHolder<$Block_, $BlockTileEntity<T>>[]): $BlockEntityType<$BlockEntityBase>;
        getObject(arg0: number): $DeferredHolder<$Block, $BlockTileEntity<T>>;
        getItem(arg0: T): $ItemBlockTileEntity<T>;
        getItem(arg0: number): $ItemBlockTileEntity<T>;
        getItem(): $ItemBlockTileEntity<T>;
        getItem(arg0: $ItemStack_): $ItemBlockTileEntity<T>;
        getBlock(arg0: T): $BlockTileEntity<T>;
        getBlock(arg0: number): $BlockTileEntity<T>;
        getBlock(): $BlockTileEntity<T>;
        getBlock(arg0: $MultiBlockEntity): $BlockTileEntity<T>;
        getBlockState(arg0: number): $BlockState;
        getItemStack(arg0: number, arg1: number): $ItemStack;
        getItemStack(arg0: T, arg1: number): $ItemStack;
        getItemStack(arg0: number): $ItemStack;
        getItemStack(arg0: T): $ItemStack;
        getDefaultState(): $BlockState;
        getMetaFromItemStack(arg0: $ItemStack_): number;
        getElementFromID(arg0: number): T;
        getStateFromMeta(arg0: number): $BlockState;
        static instance: $TileBlockCreator;
        static objectsBlock1: $List<$DeferredHolder<$Block, $BlockTileEntity<any>>>;
        static objects: $List<$DeferredHolder<$Item, never>>;
        index: number;
        constructor(arg0: $Class<T>);
        constructor(arg0: $Class<T>, arg1: string, arg2: $DeferredRegister<$Block_>, arg3: $DeferredRegister<$BlockEntityType_<never>>, arg4: $DeferredRegister<$Item_>);
        get defaultState(): $BlockState;
    }
    export class $DataBlock<T extends $Enum<T>, E extends $Block, F extends $ItemBlockCore<T>> {
        getState(arg0: T): $BlockState;
        getStack(arg0: number): $ItemStack;
        getItem(arg0: number): F;
        getItem(arg0: T): F;
        getItem(arg0: $ItemStack_): $ItemStack;
        getItem(): F;
        getBlock(arg0: number): E;
        getBlock(arg0: T): $DeferredHolder<$Block, E>;
        getBlockState(arg0: number): $BlockState;
        getItemStack(arg0: number): F;
        getItemStack(arg0: T): $ItemStack;
        getDefaultState(): $BlockState;
        getMeta(arg0: F): number;
        getElementFromID(arg0: number): T;
        getStateFromMeta(arg0: number): $BlockState;
        static objects: $List<$DeferredHolder<$Item, never>>;
        static objectsBlock: $List<$DeferredHolder<$Block, never>>;
        constructor(arg0: $Class<T>, arg1: $Class<E>, arg2: $Class<F>);
        constructor(arg0: $Class<T>, arg1: $Class<E>, arg2: $Class<F>, arg3: $DeferredRegister<$Block_>, arg4: $DeferredRegister<$Item_>, arg5: string);
        get defaultState(): $BlockState;
    }
    export class $DataSimpleItem<E extends $Item, T extends $ResourceLocation> {
        getItem(): E;
        getItem(arg0: number): $ItemStack;
        getItemStack(): $ItemStack;
        getRegistryObject(): $DeferredHolder<$Item, E>;
        constructor(arg0: T, arg1: $Supplier_<E>);
        constructor(arg0: T, arg1: $Supplier_<E>, arg2: string, arg3: $DeferredRegister<$Item_>);
        get itemStack(): $ItemStack;
        get registryObject(): $DeferredHolder<$Item, E>;
    }
    export class $DataSimpleBlock<E extends $Block, F extends $BlockItem> {
        getItem(): F;
        getBlock(): $DeferredHolder<$Block, E>;
        getBlockState(arg0: number): $BlockState;
        getItemStack(): $ItemStack;
        getDefaultState(): $BlockState;
        getStateFromMeta(arg0: number): $BlockState;
        constructor(arg0: $Class<E>, arg1: $Class<F>, arg2: string, arg3: string);
        get item(): F;
        get block(): $DeferredHolder<$Block, E>;
        get itemStack(): $ItemStack;
        get defaultState(): $BlockState;
    }
}
