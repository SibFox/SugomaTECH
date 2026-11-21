import { $IPose_, $PersistentAnimationState, $ServerAnimationState } from "@package/com/tom/cpm/shared/animation";
import { $InputStream } from "@package/java/io";
import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $UUID, $List, $Map, $UUID_, $Collection } from "@package/java/util";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $Consumer_, $Consumer, $BiConsumer_, $IntFunction_, $Predicate_, $Supplier_, $Function_, $BiFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $ScalingOptions_, $ScalingOptions } from "@package/com/tom/cpm/shared/util";
import { $ThrowingConsumer_, $TriConsumer_ } from "@package/com/tom/cpl/util";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $ConfigChangeRequest, $PlayerData } from "@package/com/tom/cpm/shared/config";
import { $Throwable, $Runnable_, $Enum, $Object, $Class } from "@package/java/lang";
import { $ScaleData } from "@package/com/tom/cpm/shared/model";
import { $IText } from "@package/com/tom/cpl/text";

declare module "@package/com/tom/cpm/shared/network" {
    export class $NetH {
    }
    export interface $NetH {
        cpm$hasMod(): boolean;
        cpm$setHasMod(arg0: boolean): void;
    }
    export class $ModelEventType extends $Enum<$ModelEventType> {
        getName(): string;
        static values(): $ModelEventType[];
        static valueOf(arg0: string): $ModelEventType;
        trigger(arg0: $PersistentAnimationState): void;
        static of<T extends $Enum<T>>(arg0: string): $ModelEventType;
        write(arg0: $ServerAnimationState, arg1: $NBTTagCompound): void;
        read(arg0: $PersistentAnimationState, arg1: $NBTTagCompound): void;
        static getType(arg0: $IPose_): $ModelEventType;
        autoSync(): boolean;
        static FALLING: $ModelEventType;
        static CREATIVE_FLYING: $ModelEventType;
        static IN_MENU: $ModelEventType;
        static SYNC_TYPES: $ModelEventType[];
        static AIR: $ModelEventType;
        static VALUES: $ModelEventType[];
        static HEALTH: $ModelEventType;
        static HUNGER: $ModelEventType;
        static JUMPING: $ModelEventType;
    }
    /**
     * Values that may be interpreted as {@link $ModelEventType}.
     */
    export type $ModelEventType_ = "falling" | "creative_flying" | "jumping" | "health" | "hunger" | "air" | "in_menu";
    export class $ServerCaps extends $Enum<$ServerCaps> {
        static values(): $ServerCaps[];
        static valueOf(arg0: string): $ServerCaps;
        static GESTURES: $ServerCaps;
        static THIRD_PERSON: $ServerCaps;
        static INVIS_GLOW: $ServerCaps;
        static SCALING: $ServerCaps;
        static EYE_HEIGHT: $ServerCaps;
        static ATTRIBUTE_SCALE: $ServerCaps;
        static VALUES: $ServerCaps[];
        static MODEL_EVENT_SUBS: $ServerCaps;
        static NAMED_PARAMETERS: $ServerCaps;
        static PLUGIN_MESSAGES: $ServerCaps;
        static HITBOX_SCALING: $ServerCaps;
    }
    /**
     * Values that may be interpreted as {@link $ServerCaps}.
     */
    export type $ServerCaps_ = "scaling" | "eye_height" | "hitbox_scaling" | "model_event_subs" | "third_person" | "attribute_scale" | "gestures" | "plugin_messages" | "invis_glow" | "named_parameters";
    export class $NetHandler$ScalerInterface<P, K> {
        static ATTRIBUTE: string;
        static PEHKUI: string;
    }
    export interface $NetHandler$ScalerInterface<P, K> {
        getMethodName(): string;
        toKey(arg0: $ScalingOptions_): K;
        setScale(arg0: K, arg1: P, arg2: number): void;
        get methodName(): string;
    }
    export class $NetH$ServerNetH {
    }
    export interface $NetH$ServerNetH extends $NetH {
        cpm$getEncodedModelData(): $PlayerData;
        cpm$setEncodedModelData(arg0: $PlayerData): void;
    }
    export class $IPacket {
    }
    export interface $IPacket {
        write(arg0: $IOHelper): void;
        read(arg0: $IOHelper): void;
        handle(arg0: $NetHandler<never, never, never>, arg1: $NetH): void;
        handleRaw(arg0: $NetHandler<never, never, never>, arg1: $NetH): void;
    }
    export class $NetHandler<RL, P, NET> {
        isSupported(arg0: $ScalingOptions_): boolean;
        execute(arg0: $NetH, arg1: $Runnable_): void;
        getID(arg0: P): string;
        setScale(arg0: $ScaleData): void;
        tick(): void;
        sendChat(arg0: P, arg1: $IText): void;
        onEvent(arg0: P, arg1: $ModelEventType_): void;
        getPlayer(arg0: $NetH$ServerNetH): P;
        onJump(arg0: P): void;
        setExecutor(arg0: $Function_<NET, $Executor>): void;
        setExecutor(arg0: $Supplier_<$Executor>): void;
        playAnimation(arg0: P, arg1: string, arg2: number): void;
        getPlayerByUUID(arg0: $UUID_): P;
        sendPacketToServer(arg0: $IPacket): void;
        onJoin(arg0: P): void;
        setGetNet(arg0: $Function_<P, NET>): void;
        getOnlinePlayers(): $List<P>;
        onLogOut(): void;
        getPlayerId(arg0: P): number;
        onRespawn(arg0: P): void;
        receiveServer(arg0: RL, arg1: $InputStream, arg2: $NetH$ServerNetH): void;
        receiveClient(arg0: RL, arg1: $InputStream, arg2: $NetH): void;
        setDisplayText(arg0: $Consumer_<$IText>): void;
        setGetClient(arg0: $Supplier_<P>): void;
        setGetPlayerById(arg0: $IntFunction_<P>): void;
        setPlayerToLoader(arg0: $Function_<P, $Object>): void;
        sendSkinData(): void;
        hasModClient(): boolean;
        requestPlayerState(arg0: $UUID_): void;
        setSkin(arg0: P, arg1: string, arg2: boolean, arg3: boolean): void;
        setSkin(arg0: P, arg1: number[], arg2: boolean): void;
        updatePlayer(arg0: P, arg1: $ServerAnimationState): void;
        hasServerCap(arg0: $ServerCaps_): boolean;
        sendEventSubs(arg0: $ModelDefinition): void;
        displayText(arg0: $IText): void;
        enableInvisGlow(): boolean;
        setSendPacketClient(arg0: $TriConsumer_<NET, RL, number[]>): void;
        setSendPacketClient<PB>(arg0: $Function_<number[], PB>, arg1: $TriConsumer_<NET, RL, PB>): void;
        setGetPlayerAnimGetters(arg0: $BiConsumer_<P, $ServerAnimationState>): void;
        getRecommendedSettingChanges(): $List<$ConfigChangeRequest<never, never>>;
        sendPlayerData(arg0: P, arg1: P): void;
        getPacketKey(arg0: $Class<$IPacket>): RL;
        setAllowPackets(arg0: $Predicate_<NET>): void;
        setGetPlayerUUID(arg0: $Function_<P, $UUID>): void;
        setFindTracking(arg0: $BiConsumer_<P, $Consumer<P>>): void;
        handleServerCaps(arg0: $NBTTagCompound): void;
        hasScalingWarning(): boolean;
        sendPluginMessage(arg0: string, arg1: $NBTTagCompound, arg2: number): boolean;
        setGetPlayer(arg0: $Function_<NET, P>): void;
        setGetPlayerId(arg0: $ToIntFunction_<P>): void;
        getPlayerById(arg0: number): P;
        getClientNet(): NET;
        registerOut<E extends $Throwable>(arg0: $ThrowingConsumer_<RL, E>): void;
        setScalingWarning(): void;
        setSendChat(arg0: $BiConsumer_<P, $IText>): void;
        sendPacketTo(arg0: $NetH$ServerNetH, arg1: $IPacket): void;
        setKickPlayer(arg0: $BiConsumer_<P, $IText>): void;
        requestPlayerData(arg0: $UUID_): void;
        forEachTracking(arg0: P, arg1: $Consumer_<P>): void;
        getScaleSetters(): $Map<$ScalingOptions, $Map<string, $NetHandler$Scaler<P>>>;
        getLoaderId(arg0: P): $Object;
        setSendPacketServer<PB, C>(arg0: $Function_<number[], PB>, arg1: $TriConsumer_<NET, RL, PB>, arg2: $Function_<P, $Collection<C>>, arg3: $Function_<C, P>): void;
        getAnimationPlaying(arg0: P, arg1: string): number;
        setSendPacketDirect(arg0: $TriConsumer_<NET, RL, number[]>, arg1: $TriConsumer_<P, RL, number[]>): void;
        setSendPacketDirect<PB>(arg0: $Function_<number[], PB>, arg1: $TriConsumer_<NET, RL, PB>, arg2: $TriConsumer_<P, RL, PB>): void;
        sendPacketToTracking(arg0: P, arg1: $IPacket): void;
        setGetOnlinePlayers(arg0: $Supplier_<$Collection<P>>): void;
        getSNetH(arg0: P): $NetH$ServerNetH;
        addScaler<K>(arg0: $NetHandler$ScalerInterface<P, K>): void;
        registerIn<E extends $Throwable>(arg0: $ThrowingConsumer_<RL, E>): void;
        static SET_SKIN: string;
        static SET_SCALE: string;
        static HELLO: string;
        static GESTURE: string;
        static RECOMMEND_SAFETY: string;
        static RECEIVE_EVENT: string;
        static PLUGIN: string;
        static GET_SKIN: string;
        static SERVER_ANIMATION: string;
        static SUBSCRIBE_EVENT: string;
        static REQUEST_PLAYER: string;
        constructor(arg0: $BiFunction_<string, string, RL>);
        set scale(value: $ScaleData);
        set getNet(value: $Function_<P, NET>);
        get onlinePlayers(): $List<P>;
        set getClient(value: $Supplier_<P>);
        set playerToLoader(value: $Function_<P, $Object>);
        set getPlayerAnimGetters(value: $BiConsumer_<P, $ServerAnimationState>);
        get recommendedSettingChanges(): $List<$ConfigChangeRequest<never, never>>;
        set allowPackets(value: $Predicate_<NET>);
        set getPlayerUUID(value: $Function_<P, $UUID>);
        set findTracking(value: $BiConsumer_<P, $Consumer<P>>);
        get clientNet(): NET;
        set kickPlayer(value: $BiConsumer_<P, $IText>);
        get scaleSetters(): $Map<$ScalingOptions, $Map<string, $NetHandler$Scaler<P>>>;
    }
    export class $NetHandler$Scaler<P> {
    }
    export interface $NetHandler$Scaler<P> {
        applyScaling(arg0: P, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $NetHandler$Scaler}.
     */
    export type $NetHandler$Scaler_<P> = ((arg0: P, arg1: number) => void);
}
