import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SettingsFrom_ } from "@package/appeng/util";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $Clearable, $InteractionHand_ } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ItemLike, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AECableType_, $AEColor, $AECableType, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityProvider_, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/api/parts" {
    export class $IPartCollisionHelper {
    }
    export interface $IPartCollisionHelper {
        getWorldY(): $Direction;
        getWorldZ(): $Direction;
        getWorldX(): $Direction;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isBBCollision(): boolean;
        get worldY(): $Direction;
        get worldZ(): $Direction;
        get worldX(): $Direction;
        get BBCollision(): boolean;
    }
    export class $IPartItem<P extends $IPart> {
        static getId(arg0: $IPartItem<never>): $ResourceLocation;
        static byId(arg0: $ResourceLocation_): $IPartItem<never>;
        static byNetworkId(arg0: number): $IPartItem<never>;
        static getNetworkId(arg0: $IPartItem<never>): number;
    }
    export interface $IPartItem<P extends $IPart> extends $ItemLike {
        getPartClass(): $Class<P>;
        createPart(): P;
        get partClass(): $Class<P>;
    }
    export class $IPart {
    }
    export interface $IPart extends $ICustomCableConnection, $Clearable {
        addEntityCrashInfo(arg0: $CrashReportCategory): void;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        isLadder(arg0: $LivingEntity): boolean;
        onEntityCollision(arg0: $Entity): void;
        canBePlacedOn(arg0: $BusSupport_): boolean;
        onNeighborChanged(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): void;
        addAdditionalDrops(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        clearContent(): void;
        isSolid(): boolean;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        getModelData(): $ModelData;
        getLightLevel(): number;
        canConnectRedstone(): boolean;
        getBoxes(arg0: $IPartCollisionHelper): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        getGridNode(): $IGridNode;
        getPartItem(): $IPartItem<never>;
        exportSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap$Builder): void;
        importSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap_, arg2: $Player): void;
        getStaticModels(): $IPartModel;
        addPartDrop(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        onShiftClicked(arg0: $Player, arg1: $Vec3_): boolean;
        setPartHostInfo(arg0: $Direction_, arg1: $IPartHost, arg2: $BlockEntity): void;
        onPlacement(arg0: $Player): void;
        onUseWithoutItem(arg0: $Player, arg1: $Vec3_): boolean;
        renderDynamic(arg0: number, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
        removeFromWorld(): void;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        onUpdateShape(arg0: $Direction_): void;
        getExternalCableConnectionType(): $AECableType;
        getCableConnectionLength(arg0: $AECableType_): number;
        readVisualStateFromNBT(arg0: $CompoundTag_): void;
        getExternalFacingNode(): $IGridNode;
        writeVisualStateToNBT(arg0: $CompoundTag_): void;
        getDesiredConnectionType(): $AECableType;
        requireDynamicRender(): boolean;
        isProvidingWeakPower(): number;
        isProvidingStrongPower(): number;
        addToWorld(): void;
        get solid(): boolean;
        get modelData(): $ModelData;
        get lightLevel(): number;
        get gridNode(): $IGridNode;
        get partItem(): $IPartItem<never>;
        get staticModels(): $IPartModel;
        get externalCableConnectionType(): $AECableType;
        get externalFacingNode(): $IGridNode;
        get desiredConnectionType(): $AECableType;
        get providingWeakPower(): number;
        get providingStrongPower(): number;
    }
    export class $SelectedPart {
        side: $Direction;
        part: $IPart;
        facade: $IFacadePart;
        constructor();
        constructor(arg0: $IPart, arg1: $Direction_);
        constructor(arg0: $IFacadePart, arg1: $Direction_);
    }
    export class $ICustomCableConnection {
    }
    export interface $ICustomCableConnection {
        getCableConnectionLength(arg0: $AECableType_): number;
    }
    /**
     * Values that may be interpreted as {@link $ICustomCableConnection}.
     */
    export type $ICustomCableConnection_ = ((arg0: $AECableType) => number);
    export class $IFacadeContainer {
    }
    export interface $IFacadeContainer {
        isEmpty(): boolean;
        addFacade(arg0: $IFacadePart): boolean;
        getFacade(arg0: $Direction_): $IFacadePart;
        removeFacade(arg0: $IPartHost, arg1: $Direction_): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        canAddFacade(arg0: $IFacadePart): boolean;
        get empty(): boolean;
    }
    export class $IPartHost {
    }
    export interface $IPartHost extends $ICustomCableConnection {
        isEmpty(): boolean;
        getLocation(): $DimensionalBlockPos;
        hasRedstone(): boolean;
        cleanup(): void;
        getColor(): $AEColor;
        isBlocked(arg0: $Direction_): boolean;
        notifyNeighbors(): void;
        getBlockEntity(): $BlockEntity;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        clearContainer(): void;
        isInWorld(): boolean;
        getPart(arg0: $Direction_): $IPart;
        markForSave(): void;
        markForUpdate(): void;
        replacePart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player, arg3: $InteractionHand_): T;
        removePart(arg0: $IPart): boolean;
        canAddPart(arg0: $ItemStack_, arg1: $Direction_): boolean;
        partChanged(): void;
        getFacadeContainer(): $IFacadeContainer;
        notifyNeighborNow(arg0: $Direction_): void;
        selectPartWorld(arg0: $Vec3_): $SelectedPart;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        removePartFromSide(arg0: $Direction_): void;
        addPart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player): T;
        get empty(): boolean;
        get location(): $DimensionalBlockPos;
        get color(): $AEColor;
        get blockEntity(): $BlockEntity;
        get inWorld(): boolean;
        get facadeContainer(): $IFacadeContainer;
    }
    export class $BusSupport extends $Enum<$BusSupport> {
        static values(): $BusSupport[];
        static valueOf(arg0: string): $BusSupport;
        static DENSE_CABLE: $BusSupport;
        static CABLE: $BusSupport;
    }
    /**
     * Values that may be interpreted as {@link $BusSupport}.
     */
    export type $BusSupport_ = "cable" | "dense_cable";
    export class $IPartModel {
    }
    export interface $IPartModel {
        getModels(): $List<$ResourceLocation>;
        requireCableConnection(): boolean;
        get models(): $List<$ResourceLocation>;
    }
    export class $IFacadePart {
    }
    export interface $IFacadePart {
        getItem(): $Item;
        getSide(): $Direction;
        getBlockState(): $BlockState;
        getItemStack(): $ItemStack;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        getBoxes(arg0: $IPartCollisionHelper, arg1: boolean): void;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        getTextureItem(): $ItemStack;
        get item(): $Item;
        get side(): $Direction;
        get blockState(): $BlockState;
        get itemStack(): $ItemStack;
        get textureItem(): $ItemStack;
    }
    export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent {
        register<T, C, P extends $IPart>(arg0: $BlockCapability<T, C>, arg1: $ICapabilityProvider_<P, C, T>, arg2: $Class<P>): void;
        addHostType<T extends $BlockEntity>(arg0: $BlockEntityType_<T>): void;
        registerContext<T, C>(arg0: $BlockCapability<T, C>, arg1: $Function_<C, $Direction>): void;
        constructor();
    }
}
