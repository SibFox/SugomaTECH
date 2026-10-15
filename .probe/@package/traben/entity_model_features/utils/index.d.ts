import { $WolfModel } from "@package/net/minecraft/client/model";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $Map_, $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EMFModelPartRoot } from "@package/traben/entity_model_features/models/parts";
import { $Wolf } from "@package/net/minecraft/world/entity/animal";

declare module "@package/traben/entity_model_features/utils" {
    export class $IEMFTextureSizeSupplier {
    }
    export interface $IEMFTextureSizeSupplier {
        emf$setTextureSize(arg0: number[]): void;
        emf$getTextureSize(): number[];
    }
    export class $IEMFCustomModelHolder {
    }
    export interface $IEMFCustomModelHolder {
        emf$getModel(): $EMFModelPartRoot;
        emf$setModel(arg0: $EMFModelPartRoot): void;
        emf$hasModel(): boolean;
    }
    export class $EMFEntity {
    }
    export interface $EMFEntity extends $ETFEntity {
        emf$getY(): number;
        emf$prevX(): number;
        emf$prevZ(): number;
        emf$age(): number;
        emf$isWet(): boolean;
        emf$prevY(): number;
        emf$getZ(): number;
        emf$getX(): number;
        emf$getYaw(): number;
        emf$prevPitch(): number;
        emf$isOnGround(): boolean;
        emf$getPitch(): number;
        emf$isAlive(): boolean;
        emf$isGlowing(): boolean;
        emf$getTypeString(): string;
        emf$getVariableMap(): $Map<string, number>;
        emf$hasVehicle(): boolean;
        emf$getVelocity(): $Vec3;
        emf$isSneaking(): boolean;
        emf$isInLava(): boolean;
        emf$hasPassengers(): boolean;
        emf$isInvisible(): boolean;
        emf$isSprinting(): boolean;
        emf$isOnFire(): boolean;
        emf$isTouchingWater(): boolean;
    }
    export class $IEMFUnmodifiedLayerRootGetter {
    }
    export interface $IEMFUnmodifiedLayerRootGetter {
        emf$getUnmodifiedRoots(): $Map<$ModelLayerLocation, $LayerDefinition>;
    }
    /**
     * Values that may be interpreted as {@link $IEMFUnmodifiedLayerRootGetter}.
     */
    export type $IEMFUnmodifiedLayerRootGetter_ = (() => $Map_<$ModelLayerLocation, $LayerDefinition>);
    export class $IEMFWolfCollarHolder<T extends $Wolf> {
    }
    export interface $IEMFWolfCollarHolder<T extends $Wolf> {
        emf$getCollarModel(): $WolfModel<T>;
        emf$hasCollarModel(): boolean;
        emf$setCollarModel(arg0: $WolfModel<T>): void;
    }
    export class $EMFDirectoryHandler {
        static basic(filename: string): $EMFDirectoryHandler;
        validForThisBase(propertiesOrSecond: $EMFDirectoryHandler): boolean;
        getRelativeDirectoryLocationNoValidation(fileName: string): string;
        getRelativeFilePossiblyEMFOverridden(jpmOrVariantFileNameWithSuffixAndFileType: string): $ResourceLocation;
        packIndex(): number;
        getFinalFileLocation(): string;
        static getDirectoryManagerOrNull(printing: boolean, namespace: string, modelFileName: string, suffixAndFileType: string): $EMFDirectoryHandler;
        getFileNameWithType(): string;
        rawFileName: string;
        namespace: string;
        isSubFolder: boolean;
        get finalFileLocation(): string;
        get fileNameWithType(): string;
    }
    export class $IEMFCuboidDataSupplier {
    }
    export interface $IEMFCuboidDataSupplier {
        emf$getSizeAdd(): number[];
        emf$getTextureUV(): number[];
        emf$getTextureXY(): number[];
    }
}
