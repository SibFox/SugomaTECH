import { $AnimationRegistry } from "@package/com/tom/cpm/shared/animation";
import { $InputStream } from "@package/java/io";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $IAllTags } from "@package/com/tom/cpl/tag";
import { $ItemTransform, $ItemRenderer, $VanillaModelPart } from "@package/com/tom/cpm/shared/model/render";
import { $UUID, $List, $Map, $UUID_, $Collection_, $List_ } from "@package/java/util";
import { $Predicate_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $ModelPartCloneable, $IModelPart, $ModelPartLink } from "@package/com/tom/cpm/shared/parts";
import { $TextureProvider } from "@package/com/tom/cpm/shared/skin";
import { $Image, $ItemSlot_ } from "@package/com/tom/cpl/util";
import { $MatrixStack } from "@package/com/tom/cpl/math";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $Player, $ResourceLoader$ResourceEncoding_, $PlayerSpecificConfigKey } from "@package/com/tom/cpm/shared/config";
import { $Throwable, $Runnable_, $Enum } from "@package/java/lang";
import { $ScaleData, $SkinType_, $PartPosition, $RootModelElement, $PartRoot, $SkinType, $RenderedCube, $TextureSheetType_ } from "@package/com/tom/cpm/shared/model";
import { $FormatText } from "@package/com/tom/cpl/text";

declare module "@package/com/tom/cpm/shared/definition" {
    export class $SafetyException$BlockReason extends $Enum<$SafetyException$BlockReason> {
        static values(): $SafetyException$BlockReason[];
        static valueOf(arg0: string): $SafetyException$BlockReason;
        static UUID_LOCK: $SafetyException$BlockReason;
        static TEXTURE_OVERFLOW: $SafetyException$BlockReason;
        static BLOCK_LIST: $SafetyException$BlockReason;
        static LINK_OVERFLOW: $SafetyException$BlockReason;
        static CONFIG_DISABLED: $SafetyException$BlockReason;
        static TOO_MANY_CUBES: $SafetyException$BlockReason;
    }
    /**
     * Values that may be interpreted as {@link $SafetyException$BlockReason}.
     */
    export type $SafetyException$BlockReason_ = "block_list" | "link_overflow" | "config_disabled" | "too_many_cubes" | "texture_overflow" | "uuid_lock";
    export class $ModelDefinitionLoader<GP> {
        load(arg0: $Link, arg1: $ResourceLoader$ResourceEncoding_, arg2: $ModelDefinition): $InputStream;
        execute(arg0: $Runnable_): void;
        clearCache(): void;
        getPlayers(): $List<$Player<never>>;
        getModel(arg0: GP): number[];
        getTemplate(): $Image;
        loadPlayer(arg0: GP, arg1: string): $Player<never>;
        setModel(arg0: GP, arg1: number[], arg2: boolean): void;
        cloneModel(arg0: $Player<never>, arg1: string): $CompletableFuture<boolean>;
        static parseLink(arg0: string): $Link;
        getGP_UUID(arg0: GP): $UUID;
        getGP_Name(arg0: GP): string;
        loadModel(arg0: $Image, arg1: $Player<never>): $ModelDefinition;
        loadModel(arg0: number[], arg1: $Player<never>): $ModelDefinition;
        loadModel(arg0: string, arg1: $Player<never>): $ModelDefinition;
        clearServerData(): void;
        putLocalResource(arg0: $Link, arg1: number[]): void;
        getLoadedPlayer(arg0: GP): $Player<never>;
        settingsChanged(arg0: $UUID_): void;
        reloadPlayer(arg0: GP, arg1: string): $Player<never>;
        static HEADER: number;
        static PLAYER_UNIQUE: string;
        static SKULL_UNIQUE: string;
        static THREAD_POOL: $Executor;
        constructor(arg0: $Function_<GP, $Player<never>>, arg1: $Function_<GP, $UUID>, arg2: $Function_<GP, string>);
        get players(): $List<$Player<never>>;
        get template(): $Image;
        set tingsChanged(value: $UUID_);
    }
    export class $ModelDefinition$ModelLoadingState extends $Enum<$ModelDefinition$ModelLoadingState> {
        static values(): $ModelDefinition$ModelLoadingState[];
        static valueOf(arg0: string): $ModelDefinition$ModelLoadingState;
        static NEW: $ModelDefinition$ModelLoadingState;
        static SAFETY_BLOCKED: $ModelDefinition$ModelLoadingState;
        static ERRORRED: $ModelDefinition$ModelLoadingState;
        static CLEANED_UP: $ModelDefinition$ModelLoadingState;
        static LOADED: $ModelDefinition$ModelLoadingState;
        static RESOLVING: $ModelDefinition$ModelLoadingState;
    }
    /**
     * Values that may be interpreted as {@link $ModelDefinition$ModelLoadingState}.
     */
    export type $ModelDefinition$ModelLoadingState_ = "new" | "resolving" | "loaded" | "safety_blocked" | "errorred" | "cleaned_up";
    export class $Link {
        write(arg0: $IOHelper): void;
        getPath(): string;
        getLoader(): string;
        constructor(arg0: string);
        constructor(arg0: string, arg1: string);
        constructor(arg0: $IOHelper);
        get path(): string;
        get loader(): string;
    }
    export class $ModelDefinition {
        validate(): void;
        check<V>(arg0: $PlayerSpecificConfigKey<V>, arg1: $Predicate_<V>, arg2: $SafetyException$BlockReason_): void;
        check<V>(arg0: $PlayerSpecificConfigKey<V>, arg1: V, arg2: $SafetyException$BlockReason_): void;
        cleanup(): void;
        setError(arg0: $Throwable): void;
        getLoader(): $ModelDefinitionLoader<never>;
        setScale(arg0: $ScaleData): void;
        addCubes(arg0: $Collection_<$RenderedCube>): void;
        addRoot(arg0: number, arg1: $VanillaModelPart): $RootModelElement;
        hasRoot(arg0: $VanillaModelPart): boolean;
        getElementById(arg0: number): $RenderedCube;
        getScale(): $ScaleData;
        getStatus(): $FormatText;
        getError(): $Throwable;
        setTexture(arg0: $TextureSheetType_, arg1: $TextureProvider): void;
        static createVanilla(arg0: $Supplier_<$TextureProvider>, arg1: $SkinType_): $ModelDefinition;
        getTexture(arg0: $TextureSheetType_, arg1: boolean): $TextureProvider;
        getAnimations(): $AnimationRegistry;
        getTransform(arg0: $ItemSlot_): $ItemTransform;
        getTransform(arg0: $ItemRenderer): $ItemTransform;
        setParts(arg0: $List_<$IModelPart>): $ModelDefinition;
        getSkinType(): $SkinType;
        getBlockReason(): $SafetyException$BlockReason;
        isEditor(): boolean;
        startResolve(): void;
        getResolveState(): $ModelDefinition$ModelLoadingState;
        resetAnimationPos(): void;
        isRemoveArmorOffset(): boolean;
        isHideHeadIfSkull(): boolean;
        storeTransform(arg0: $ItemRenderer, arg1: $MatrixStack, arg2: boolean): void;
        getModelElementFor(arg0: $VanillaModelPart): $PartRoot;
        doRender(): boolean;
        resolveAll(): void;
        /**
         * @deprecated
         */
        getPlayerObj(): $Player<never>;
        isStitchedTexture(): boolean;
        findDefLink(): $ModelPartLink;
        removeBedOffset: boolean;
        modelTagManager: $IAllTags;
        fpLeftHand: $PartPosition;
        enableInvisGlow: boolean;
        hideHeadIfSkull: boolean;
        itemTransforms: $Map<$ItemRenderer, $ItemTransform>;
        fpRightHand: $PartPosition;
        cloneable: $ModelPartCloneable;
        removeArmorOffset: boolean;
        constructor(arg0: $Throwable, arg1: $Player<never>);
        constructor(arg0: $ModelDefinitionLoader<never>, arg1: $Player<never>);
        get loader(): $ModelDefinitionLoader<never>;
        get status(): $FormatText;
        get animations(): $AnimationRegistry;
        set parts(value: $List_<$IModelPart>);
        get skinType(): $SkinType;
        get blockReason(): $SafetyException$BlockReason;
        get editor(): boolean;
        get resolveState(): $ModelDefinition$ModelLoadingState;
        get playerObj(): $Player<never>;
        get stitchedTexture(): boolean;
    }
}
