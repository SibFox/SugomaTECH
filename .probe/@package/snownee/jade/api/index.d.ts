import { $LevelAccessor, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MapEncoder, $DynamicOps, $MapDecoder } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IElement$Align_, $ScreenDirection_, $IElement } from "@package/snownee/jade/api/ui";
import { $ItemView, $FluidView, $IServerExtensionProvider, $IClientExtensionProvider, $ProgressView, $EnergyView } from "@package/snownee/jade/api/view";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $JadeBeforeTooltipCollectCallback_, $JadeBeforeRenderCallback_, $JadeAfterRenderCallback_, $JadeItemModNameCallback_, $JadeTooltipCollectedCallback_, $JadeRayTraceCallback_ } from "@package/snownee/jade/api/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $IPluginConfig } from "@package/snownee/jade/api/config";
import { $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $HitResult, $EntityHitResult, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $PlatformWailaClientRegistration } from "@package/snownee/jade/api/platform";
export * as view from "@package/snownee/jade/api/view";
export * as ui from "@package/snownee/jade/api/ui";
export * as callback from "@package/snownee/jade/api/callback";
export * as platform from "@package/snownee/jade/api/platform";
export * as theme from "@package/snownee/jade/api/theme";
export * as fluid from "@package/snownee/jade/api/fluid";
export * as config from "@package/snownee/jade/api/config";

declare module "@package/snownee/jade/api" {
    export class $IJadeProvider {
    }
    export interface $IJadeProvider {
        getUid(): $ResourceLocation;
        getDefaultPriority(): number;
        get uid(): $ResourceLocation;
        get defaultPriority(): number;
    }
    /**
     * Values that may be interpreted as {@link $IJadeProvider}.
     */
    export type $IJadeProvider_ = (() => $ResourceLocation_);
    export class $EntityAccessor {
    }
    export interface $EntityAccessor extends $Accessor<$EntityHitResult> {
        getEntity(): $Entity;
        getAccessorType(): $Class<$Accessor<never>>;
        getRawEntity(): $Entity;
        get entity(): $Entity;
        get accessorType(): $Class<$Accessor<never>>;
        get rawEntity(): $Entity;
    }
    export class $EntityAccessor$Builder {
    }
    export interface $EntityAccessor$Builder {
        from(arg0: $EntityAccessor): $EntityAccessor$Builder;
        build(): $EntityAccessor;
        level(arg0: $Level_): $EntityAccessor$Builder;
        hit(arg0: $EntityHitResult): $EntityAccessor$Builder;
        hit(arg0: $Supplier_<$EntityHitResult>): $EntityAccessor$Builder;
        entity(arg0: $Entity): $EntityAccessor$Builder;
        entity(arg0: $Supplier_<$Entity>): $EntityAccessor$Builder;
        serverData(arg0: $CompoundTag_): $EntityAccessor$Builder;
        player(arg0: $Player): $EntityAccessor$Builder;
        serverConnected(arg0: boolean): $EntityAccessor$Builder;
        showDetails(arg0: boolean): $EntityAccessor$Builder;
        requireVerification(): $EntityAccessor$Builder;
    }
    export class $BlockAccessor$Builder {
    }
    export interface $BlockAccessor$Builder {
        from(arg0: $BlockAccessor): $BlockAccessor$Builder;
        build(): $BlockAccessor;
        level(arg0: $Level_): $BlockAccessor$Builder;
        hit(arg0: $BlockHitResult): $BlockAccessor$Builder;
        serverData(arg0: $CompoundTag_): $BlockAccessor$Builder;
        player(arg0: $Player): $BlockAccessor$Builder;
        blockEntity(arg0: $Supplier_<$BlockEntity>): $BlockAccessor$Builder;
        blockEntity(arg0: $BlockEntity): $BlockAccessor$Builder;
        blockState(arg0: $BlockState_): $BlockAccessor$Builder;
        serverConnected(arg0: boolean): $BlockAccessor$Builder;
        showDetails(arg0: boolean): $BlockAccessor$Builder;
        fakeBlock(arg0: $ItemStack_): $BlockAccessor$Builder;
        requireVerification(): $BlockAccessor$Builder;
    }
    export class $IServerDataProvider<T extends $Accessor<never>> {
    }
    export interface $IServerDataProvider<T extends $Accessor<never>> extends $IJadeProvider {
        shouldRequestData(arg0: T): boolean;
        appendServerData(arg0: $CompoundTag_, arg1: T): void;
    }
    export class $AccessorClientHandler<T extends $Accessor<never>> {
    }
    export interface $AccessorClientHandler<T extends $Accessor<never>> {
        isEnabled(arg0: $IToggleableProvider_): boolean;
        getIcon(arg0: T): $IElement;
        shouldDisplay(arg0: T): boolean;
        requestData(arg0: T, arg1: $List_<$IServerDataProvider<T>>): void;
        gatherComponents(arg0: T, arg1: $Function_<$IJadeProvider, $ITooltip>): void;
        shouldRequestData(arg0: T): $List<$IServerDataProvider<T>>;
    }
    export class $BlockAccessor {
    }
    export interface $BlockAccessor extends $Accessor<$BlockHitResult> {
        getPosition(): $BlockPos;
        getBlock(): $Block;
        getSide(): $Direction;
        getBlockState(): $BlockState;
        getBlockEntity(): $BlockEntity;
        getAccessorType(): $Class<$Accessor<never>>;
        getFakeBlock(): $ItemStack;
        isFakeBlock(): boolean;
        get position(): $BlockPos;
        get block(): $Block;
        get side(): $Direction;
        get blockState(): $BlockState;
        get blockEntity(): $BlockEntity;
        get accessorType(): $Class<$Accessor<never>>;
    }
    export class $IWailaPlugin {
    }
    export interface $IWailaPlugin {
        register(arg0: $IWailaCommonRegistration): void;
        registerClient(arg0: $IWailaClientRegistration): void;
    }
    export class $IComponentProvider<T extends $Accessor<never>> {
    }
    export interface $IComponentProvider<T extends $Accessor<never>> extends $IToggleableProvider {
        getIcon(arg0: T, arg1: $IPluginConfig, arg2: $IElement): $IElement;
        appendTooltip(arg0: $ITooltip, arg1: T, arg2: $IPluginConfig): void;
    }
    export class $IToggleableProvider {
    }
    export interface $IToggleableProvider extends $IJadeProvider {
        isRequired(): boolean;
        enabledByDefault(): boolean;
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IToggleableProvider}.
     */
    export type $IToggleableProvider_ = (() => void);
    export class $IBlockComponentProvider {
    }
    export interface $IBlockComponentProvider extends $IComponentProvider<$BlockAccessor> {
    }
    export class $IWailaClientRegistration {
    }
    export interface $IWailaClientRegistration extends $PlatformWailaClientRegistration {
        addConfig(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        addConfig(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        addConfig(arg0: $ResourceLocation_, arg1: string, arg2: $Predicate_<string>): void;
        addConfig<T extends $Enum<T>>(arg0: $ResourceLocation_, arg1: T): void;
        addConfig(arg0: $ResourceLocation_, arg1: boolean): void;
        registerBlockComponent(arg0: $IComponentProvider<$BlockAccessor>, arg1: $Class<$Block_>): void;
        setConfigCategoryOverride(arg0: $ResourceLocation_, arg1: $Component_): void;
        setConfigCategoryOverride(arg0: $ResourceLocation_, arg1: $List_<$Component_>): void;
        shouldHide(arg0: $BlockState_): boolean;
        shouldHide(arg0: $Entity): boolean;
        entityAccessor(): $EntityAccessor$Builder;
        blockAccessor(): $BlockAccessor$Builder;
        getServerData(): $CompoundTag;
        registerEntityComponent(arg0: $IComponentProvider<$EntityAccessor>, arg1: $Class<$Entity>): void;
        addAfterRenderCallback(arg0: number, arg1: $JadeAfterRenderCallback_): void;
        addAfterRenderCallback(arg0: $JadeAfterRenderCallback_): void;
        addBeforeRenderCallback(arg0: number, arg1: $JadeBeforeRenderCallback_): void;
        addBeforeRenderCallback(arg0: $JadeBeforeRenderCallback_): void;
        addRayTraceCallback(arg0: number, arg1: $JadeRayTraceCallback_): void;
        addRayTraceCallback(arg0: $JadeRayTraceCallback_): void;
        addItemModNameCallback(arg0: $JadeItemModNameCallback_): void;
        addItemModNameCallback(arg0: number, arg1: $JadeItemModNameCallback_): void;
        markAsClientFeature(arg0: $ResourceLocation_): void;
        registerProgressClient(arg0: $IClientExtensionProvider<$CompoundTag_, $ProgressView>): void;
        markAsServerFeature(arg0: $ResourceLocation_): void;
        isShowDetailsPressed(): boolean;
        registerAccessorHandler<T extends $Accessor<never>>(arg0: $Class<T>, arg1: $AccessorClientHandler<T>): void;
        createPluginConfigScreen(arg0: $Screen, arg1: $Component_): $Screen;
        registerItemStorageClient(arg0: $IClientExtensionProvider<$ItemStack_, $ItemView>): void;
        registerFluidStorageClient(arg0: $IClientExtensionProvider<$CompoundTag_, $FluidView>): void;
        hideTarget(arg0: $Block_): void;
        hideTarget(arg0: $EntityType_<never>): void;
        shouldPick(arg0: $BlockState_): boolean;
        shouldPick(arg0: $Entity): boolean;
        registerEntityIcon(arg0: $IComponentProvider<$EntityAccessor>, arg1: $Class<$Entity>): void;
        usePickedResult(arg0: $EntityType_<never>): void;
        usePickedResult(arg0: $Block_): void;
        maybeLowVisionUser(): boolean;
        addConfigListener(arg0: $ResourceLocation_, arg1: $Consumer_<$ResourceLocation>): void;
        setServerData(arg0: $CompoundTag_): void;
        getAccessorHandler(arg0: $Class<$Accessor<never>>): $AccessorClientHandler<$Accessor<never>>;
        registerBlockIcon(arg0: $IComponentProvider<$BlockAccessor>, arg1: $Class<$Block_>): void;
        isServerConnected(): boolean;
        getBlockCamouflage(arg0: $LevelAccessor, arg1: $BlockPos_): $ItemStack;
        isClientFeature(arg0: $ResourceLocation_): boolean;
        addBeforeTooltipCollectCallback(arg0: $JadeBeforeTooltipCollectCallback_): void;
        addBeforeTooltipCollectCallback(arg0: number, arg1: $JadeBeforeTooltipCollectCallback_): void;
        registerEnergyStorageClient(arg0: $IClientExtensionProvider<$CompoundTag_, $EnergyView>): void;
        addTooltipCollectedCallback(arg0: $JadeTooltipCollectedCallback_): void;
        addTooltipCollectedCallback(arg0: number, arg1: $JadeTooltipCollectedCallback_): void;
        get showDetailsPressed(): boolean;
        get serverConnected(): boolean;
    }
    export class $Accessor<T extends $HitResult> {
    }
    export interface $Accessor<T extends $HitResult> {
        getTarget(): $Object;
        getLevel(): $Level;
        verifyData(arg0: $CompoundTag_): boolean;
        writeData<D>(arg0: $MapEncoder<D>, arg1: D): void;
        getPlayer(): $Player;
        getServerData(): $CompoundTag;
        getPickedResult(): $ItemStack;
        getHitResult(): T;
        decodeFromNbt<D>(arg0: $StreamDecoder_<$RegistryFriendlyByteBuf, D>, arg1: $Tag_): (D) | undefined;
        encodeAsNbt<D>(arg0: $StreamEncoder_<$RegistryFriendlyByteBuf, D>, arg1: D): $Tag;
        getAccessorType(): $Class<$Accessor<never>>;
        readData<D>(arg0: $MapDecoder<D>): (D) | undefined;
        tickRate(): number;
        nbtOps(): $DynamicOps<$Tag>;
        showDetails(): boolean;
        isServerConnected(): boolean;
        get target(): $Object;
        get level(): $Level;
        get player(): $Player;
        get serverData(): $CompoundTag;
        get pickedResult(): $ItemStack;
        get hitResult(): T;
        get accessorType(): $Class<$Accessor<never>>;
        get serverConnected(): boolean;
    }
    export class $IWailaCommonRegistration {
    }
    export interface $IWailaCommonRegistration {
        registerBlockDataProvider(arg0: $IServerDataProvider<$BlockAccessor>, arg1: $Class<never>): void;
        registerEntityDataProvider(arg0: $IServerDataProvider<$EntityAccessor>, arg1: $Class<$Entity>): void;
        registerItemStorage<T>(arg0: $IServerExtensionProvider<$ItemStack_>, arg1: $Class<T>): void;
        registerFluidStorage<T>(arg0: $IServerExtensionProvider<$CompoundTag_>, arg1: $Class<T>): void;
        registerEnergyStorage<T>(arg0: $IServerExtensionProvider<$CompoundTag_>, arg1: $Class<T>): void;
        registerProgress<T>(arg0: $IServerExtensionProvider<$CompoundTag_>, arg1: $Class<T>): void;
    }
    export class $ITooltip {
    }
    export interface $ITooltip {
        remove(arg0: $ResourceLocation_): boolean;
        size(): number;
        get(arg0: $ResourceLocation_): $List<$IElement>;
        get(arg0: number, arg1: $IElement$Align_): $List<$IElement>;
        append(arg0: $IElement): void;
        append(arg0: number, arg1: $List_<$IElement>): void;
        append(arg0: $Component_, arg1: $ResourceLocation_): void;
        append(arg0: number, arg1: $IElement): void;
        append(arg0: $Component_): void;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: $ResourceLocation_, arg1: $UnaryOperator_<$List<$List<$IElement>>>): boolean;
        replace(arg0: $ResourceLocation_, arg1: $Component_): boolean;
        add(arg0: $Component_): void;
        add(arg0: $Component_, arg1: $ResourceLocation_): void;
        add(arg0: number, arg1: $Component_): void;
        add(arg0: $List_<$IElement>): void;
        add(arg0: number, arg1: $IElement): void;
        add(arg0: number, arg1: $List_<$IElement>): void;
        add(arg0: number, arg1: $Component_, arg2: $ResourceLocation_): void;
        add(arg0: $IElement): void;
        addAll(arg0: $List_<$Component_>): void;
        getMessage(arg0: $ResourceLocation_): string;
        getMessage(): string;
        setLineMargin(arg0: number, arg1: $ScreenDirection_, arg2: number): void;
        get empty(): boolean;
    }
}
