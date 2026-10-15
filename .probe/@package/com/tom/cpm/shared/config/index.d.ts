import { $AnimationState, $AnimationHandler, $PersistentAnimationState, $ServerAnimationState, $AnimationEngine$AnimationMode_ } from "@package/com/tom/cpm/shared/animation";
import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $CommandAction$ServerCommandAction } from "@package/com/tom/cpm/shared/parts/anim/menu";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Multimap } from "@package/com/google/common/collect";
import { $ArgType } from "@package/com/tom/cpl/command";
import { $UUID, $EnumSet, $Map_, $Map, $List_ } from "@package/java/util";
import { $NetHandler, $ModelEventType } from "@package/com/tom/cpm/shared/network";
import { $DoubleUnaryOperator_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ModelDefinition, $SafetyException$BlockReason_ } from "@package/com/tom/cpm/shared/definition";
import { $PlayerTextureLoader } from "@package/com/tom/cpm/shared/skin";
import { $ScalingOptions_, $ScalingOptions } from "@package/com/tom/cpm/shared/util";
import { $GuiElement } from "@package/com/tom/cpl/gui/elements";
import { $Enum, $Object } from "@package/java/lang";
import { $SafetyPanel } from "@package/com/tom/cpm/shared/gui/panel";
import { $SkinType } from "@package/com/tom/cpm/shared/model";
import { $ConfigEntry } from "@package/com/tom/cpl/config";
import { $IText } from "@package/com/tom/cpl/text";

declare module "@package/com/tom/cpm/shared/config" {
    export class $PlayerSpecificConfigKey$KeyGroup extends $Enum<$PlayerSpecificConfigKey$KeyGroup> {
        static values(): $PlayerSpecificConfigKey$KeyGroup[];
        static valueOf(arg0: string): $PlayerSpecificConfigKey$KeyGroup;
        static FRIEND: $PlayerSpecificConfigKey$KeyGroup;
        static GLOBAL: $PlayerSpecificConfigKey$KeyGroup;
        static VALUES: $PlayerSpecificConfigKey$KeyGroup[];
    }
    /**
     * Values that may be interpreted as {@link $PlayerSpecificConfigKey$KeyGroup}.
     */
    export type $PlayerSpecificConfigKey$KeyGroup_ = "global" | "friend";
    export class $ResourceLoader$ResourceEncoding extends $Enum<$ResourceLoader$ResourceEncoding> {
        static values(): $ResourceLoader$ResourceEncoding[];
        static valueOf(arg0: string): $ResourceLoader$ResourceEncoding;
        static NO_ENCODING: $ResourceLoader$ResourceEncoding;
        static BASE64: $ResourceLoader$ResourceEncoding;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoader$ResourceEncoding}.
     */
    export type $ResourceLoader$ResourceEncoding_ = "no_encoding" | "base64";
    export class $PlayerData {
        load(arg0: string): void;
        save(arg0: string): void;
        rescale<P>(arg0: $NetHandler<never, P, never>, arg1: P, arg2: $Map_<$ScalingOptions_, number>, arg3: $List_<$ScalingOptions_>): void;
        rescale<P>(arg0: $NetHandler<never, P, never>, arg1: P): void;
        setModel(arg0: string, arg1: boolean, arg2: boolean): void;
        setModel(arg0: number[], arg1: boolean, arg2: boolean): void;
        resetScale<P>(arg0: $NetHandler<never, P, never>, arg1: P): void;
        canChangeModel(): boolean;
        rescaleToTarget<P>(arg0: $NetHandler<never, P, never>, arg1: P, arg2: $List_<$ScalingOptions_>): void;
        animNames: $Map<string, $CommandAction$ServerCommandAction>;
        eventSubs: $EnumSet<$ModelEventType>;
        selfSubs: $EnumSet<$ModelEventType>;
        data: number[];
        ticksSinceLogin: number;
        forced: boolean;
        targetScale: $Map<$ScalingOptions, number>;
        gestureData: number[];
        scale: $Map<$ScalingOptions, number>;
        state: $ServerAnimationState;
        pluginStates: $Map<string, $NBTTagCompound>;
        constructor();
    }
    export class $BuiltInSafetyProfiles extends $Enum<$BuiltInSafetyProfiles> {
        static get(arg0: string): $BuiltInSafetyProfiles;
        static values(): $BuiltInSafetyProfiles[];
        static valueOf(arg0: string): $BuiltInSafetyProfiles;
        getValue<V>(arg0: string): V;
        copyTo(arg0: $ConfigEntry): void;
        static HIGH: $BuiltInSafetyProfiles;
        static MEDIUM: $BuiltInSafetyProfiles;
        static LOW: $BuiltInSafetyProfiles;
        static CUSTOM: $BuiltInSafetyProfiles;
        static VALUES: $BuiltInSafetyProfiles[];
        static OFF: $BuiltInSafetyProfiles;
    }
    /**
     * Values that may be interpreted as {@link $BuiltInSafetyProfiles}.
     */
    export type $BuiltInSafetyProfiles_ = "off" | "low" | "medium" | "high" | "custom";
    export class $PlayerSpecificConfigKey<V> {
        getName(): string;
        getValue(arg0: $BuiltInSafetyProfiles_): V;
        getValue(arg0: $ConfigEntry, arg1: $PlayerSpecificConfigKey$KeyGroup_): V;
        getValue(arg0: $ConfigEntry, arg1: V): V;
        setValue(arg0: $ConfigEntry, arg1: V): void;
        getType(): $ArgType;
        hasValue(arg0: $ConfigEntry): boolean;
        static createInt(arg0: string, arg1: number, arg2: number, ...arg3: $Object[]): $PlayerSpecificConfigKey<number>;
        copyValue(arg0: $ConfigEntry, arg1: $ConfigEntry): void;
        checkFor(arg0: $Player<never>, arg1: $SafetyException$BlockReason_): void;
        checkFor(arg0: $Player<never>, arg1: V, arg2: $SafetyException$BlockReason_): void;
        checkFor(arg0: $Player<never>, arg1: $Predicate_<V>, arg2: $SafetyException$BlockReason_): void;
        formatValue(arg0: V): $IText;
        static createEnum<T extends $Enum<T>>(arg0: string, arg1: T[], ...arg2: $Object[]): $PlayerSpecificConfigKey<T>;
        getValueFor(arg0: $Player<never>): V;
        getValueFor(arg0: string, arg1: string, arg2: $ConfigEntry): V;
        static createIntLog2(arg0: string, arg1: number, arg2: number, arg3: $Function_<number, string>, ...arg4: $Object[]): $PlayerSpecificConfigKey<number>;
        createConfigElement(arg0: $SafetyPanel): $GuiElement;
        static createBool(arg0: string, ...arg1: $Object[]): $PlayerSpecificConfigKey<boolean>;
        static createIntF(arg0: string, arg1: number, arg2: number, arg3: $DoubleUnaryOperator_, arg4: $DoubleUnaryOperator_, arg5: $Function_<number, string>, arg6: number, ...arg7: $Object[]): $PlayerSpecificConfigKey<number>;
        resetValue(arg0: $ConfigEntry): void;
        getTypeArg(): $Object;
        get name(): string;
        get type(): $ArgType;
        get typeArg(): $Object;
    }
    export class $ConfigChangeRequest<K, V> {
        getKey(): K;
        getOldValue(): V;
        getNewValue(): V;
        constructor(arg0: K, arg1: V, arg2: V);
        get key(): K;
        get oldValue(): V;
        get newValue(): V;
    }
    export class $Player<P> {
        getName(): string;
        static cloneProperties<P>(arg0: $Multimap<string, P>, arg1: $Multimap<string, P>): void;
        static cloneProperties<P>(arg0: $Multimap<string, P>): $Multimap<string, P>;
        cleanup(): void;
        getUUID(): $UUID;
        getGameProfile(): $Object;
        static isEnableNames(): boolean;
        getTextures(): $PlayerTextureLoader;
        isClientPlayer(): boolean;
        static isEnableLoadingInfo(): boolean;
        static isEnableRendering(): boolean;
        static setEnableRendering(arg0: boolean): void;
        getSkinType(): $SkinType;
        getModelDefinition(): $ModelDefinition;
        setModelDefinition(arg0: $CompletableFuture<$ModelDefinition>, arg1: boolean): void;
        updatePlayer(arg0: P, arg1: $AnimationState): void;
        updateFromModel(arg0: $AnimationState, arg1: $Object): void;
        static setEnableNames(arg0: boolean): void;
        updateFromPlayer(arg0: $AnimationState, arg1: P): void;
        sendEventSubs(): void;
        getModelDefinition0(): $ModelDefinition;
        getDefinitionFuture(): $CompletableFuture<$ModelDefinition>;
        getAnimationHandler(arg0: $AnimationEngine$AnimationMode_): $AnimationHandler;
        isModel: boolean;
        forcedSkin: boolean;
        unique: string;
        persistentState: $PersistentAnimationState;
        sentEventSubs: boolean;
        constructor();
        get name(): string;
        get UUID(): $UUID;
        get gameProfile(): $Object;
        get textures(): $PlayerTextureLoader;
        get clientPlayer(): boolean;
        static get enableLoadingInfo(): boolean;
        get skinType(): $SkinType;
        get modelDefinition0(): $ModelDefinition;
        get definitionFuture(): $CompletableFuture<$ModelDefinition>;
    }
}
