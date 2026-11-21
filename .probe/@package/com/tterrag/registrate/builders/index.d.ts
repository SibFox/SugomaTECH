import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FluidType_, $FluidType, $FluidType$Properties } from "@package/net/neoforged/neoforge/fluids";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $NonNullFunction_, $NonNullSupplier, $NonNullSupplier_, $NonNullBiConsumer_, $NonNullFunction, $NonNullConsumer_ } from "@package/com/tterrag/registrate/util/nullness";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ProviderType_, $DataGenContext, $RegistrateProvider } from "@package/com/tterrag/registrate/providers";
import { $MenuType_, $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/tterrag/registrate/builders" {
    export class $FluidBuilder$FluidTypeFactory {
    }
    export interface $FluidBuilder$FluidTypeFactory {
        create(arg0: $FluidType$Properties, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidType;
    }
    /**
     * Values that may be interpreted as {@link $FluidBuilder$FluidTypeFactory}.
     */
    export type $FluidBuilder$FluidTypeFactory_ = ((arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation) => $FluidType_);
    export class $MenuBuilder$MenuFactory<T extends $AbstractContainerMenu> {
    }
    export interface $MenuBuilder$MenuFactory<T extends $AbstractContainerMenu> {
        create(arg0: $MenuType_<T>, arg1: number, arg2: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuBuilder$MenuFactory}.
     */
    export type $MenuBuilder$MenuFactory_<T> = ((arg0: $MenuType<T>, arg1: number, arg2: $Inventory) => T);
    export class $BuilderCallback {
    }
    export interface $BuilderCallback {
        accept<R, T extends R>(arg0: string, arg1: $ResourceKey_<$Registry<R>>, arg2: $Builder<R, T, never, never>, arg3: $NonNullSupplier_<T>, arg4: $NonNullFunction_<$DeferredHolder<R, T>, $RegistryEntry<R, T>>): $RegistryEntry<R, T>;
        accept<R, T extends R>(arg0: string, arg1: $ResourceKey_<$Registry<R>>, arg2: $Builder<R, T, never, never>, arg3: $NonNullSupplier_<T>): $RegistryEntry<R, T>;
    }
    /**
     * Values that may be interpreted as {@link $BuilderCallback}.
     */
    export type $BuilderCallback_ = ((arg0: string, arg1: $ResourceKey<$Registry<any>>, arg2: $Builder<any, any, never, never>, arg3: $NonNullSupplier<any>, arg4: $NonNullFunction<$DeferredHolder<any, any>, $RegistryEntry<any, any>>) => $RegistryEntry<any, any>);
    export class $Builder<R, T extends R, P, S extends $Builder<R, T, P, S>> {
    }
    export interface $Builder<R, T extends R, P, S extends $Builder<R, T, P, S>> extends $NonNullSupplier<$RegistryEntry<R, T>> {
        getName(): string;
        get(): $RegistryEntry<R, $RegistryEntry<R, T>>;
        transform<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(arg0: $NonNullFunction_<S, S2>): S2;
        register(): $RegistryEntry<R, $RegistryEntry<R, T>>;
        getParent(): P;
        build(): P;
        getOwner(): $AbstractRegistrate<never>;
        getEntry(): $RegistryEntry<R, T>;
        setData<D extends $RegistrateProvider>(arg0: $ProviderType_<D>, arg1: $NonNullBiConsumer_<$DataGenContext<R, $RegistryEntry<R, T>>, D>): S;
        dataMap<D>(arg0: $DataMapType<R, D>, arg1: $NonNullFunction_<$DataGenContext<R, $RegistryEntry<R, T>>, D>): S;
        dataMap<D>(arg0: $DataMapType<R, D>, arg1: D): S;
        onRegister(arg0: $NonNullConsumer_<$RegistryEntry<R, T>>): S;
        asSupplier(): $NonNullSupplier<$RegistryEntry<R, T>>;
        getRegistryKey(): $ResourceKey<$Registry<R>>;
        addMiscData<D extends $RegistrateProvider>(arg0: $ProviderType_<D>, arg1: $NonNullConsumer_<D>): S;
        onRegisterAfter<OR>(arg0: $ResourceKey_<$Registry<OR>>, arg1: $NonNullConsumer_<$RegistryEntry<R, T>>): S;
        get name(): string;
        get parent(): P;
        get owner(): $AbstractRegistrate<never>;
        get entry(): $RegistryEntry<R, T>;
        get registryKey(): $ResourceKey<$Registry<R>>;
    }
    export class $MenuBuilder$ForgeMenuFactory<T extends $AbstractContainerMenu> {
    }
    export interface $MenuBuilder$ForgeMenuFactory<T extends $AbstractContainerMenu> {
        create(arg0: $MenuType_<T>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf | null): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuBuilder$ForgeMenuFactory}.
     */
    export type $MenuBuilder$ForgeMenuFactory_<T> = ((arg0: $MenuType<T>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf) => T);
    export class $MenuBuilder$ScreenFactory<M extends $AbstractContainerMenu, T extends $Screen> {
    }
    export interface $MenuBuilder$ScreenFactory<M extends $AbstractContainerMenu, T extends $Screen> {
        create(arg0: M, arg1: $Inventory, arg2: $Component_): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuBuilder$ScreenFactory}.
     */
    export type $MenuBuilder$ScreenFactory_<M, T> = ((arg0: M, arg1: $Inventory, arg2: $Component) => T);
    export class $BlockEntityBuilder$BlockEntityFactory<T extends $BlockEntity> {
    }
    export interface $BlockEntityBuilder$BlockEntityFactory<T extends $BlockEntity> {
        create(arg0: $BlockEntityType_<T>, arg1: $BlockPos_, arg2: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityBuilder$BlockEntityFactory}.
     */
    export type $BlockEntityBuilder$BlockEntityFactory_<T> = ((arg0: $BlockEntityType<T>, arg1: $BlockPos, arg2: $BlockState) => T);
}
