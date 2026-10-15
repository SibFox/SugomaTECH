import { $Codec } from "@package/com/mojang/serialization";
import { $ServerInfo, $MinecraftServer } from "@package/net/minecraft/server";
import { $ExecutorService, $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $RelativeMovement_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetAddress, $SocketAddress, $URL } from "@package/java/net";
import { $PacketSendListener, $Connection, $DisconnectionDetails_, $TickablePacketListener, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $ChatType$Bound_, $PlayerChatMessage_, $FilterMask, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $NetH$ServerNetH } from "@package/com/tom/cpm/shared/network";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $PlayerData } from "@package/com/tom/cpm/shared/config";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $ServerStatusPacketListener, $ServerStatus_, $ServerboundStatusRequestPacket } from "@package/net/minecraft/network/protocol/status";
import { $ServerLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/server";
import { $NetworkHandlerExtensions, $PacketCallbackListener } from "@package/net/fabricmc/fabric/impl/networking";
import { $ServerCommonNetworkHandlerAccessor, $ServerLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $ServerboundCookieResponsePacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ServerboundKeepAlivePacket, $ServerboundCustomPayloadPacket_, $ServerboundPongPacket, $ServerboundResourcePackPacket_, $ServerboundClientInformationPacket_, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $RuntimeException, $Exception, $Throwable, $Iterable_, $Record, $AutoCloseable } from "@package/java/lang";
import { $FabricServerConfigurationNetworkHandler } from "@package/net/fabricmc/fabric/api/networking/v1";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $ServerboundLoginAcknowledgedPacket, $ServerLoginPacketListener, $ServerboundKeyPacket, $ServerboundHelloPacket_, $ServerboundCustomQueryAnswerPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $ServerHandshakePacketListener, $ClientIntentionPacket_ } from "@package/net/minecraft/network/protocol/handshake";
import { $ServerboundSetCommandMinecartPacket, $ServerboundJigsawGeneratePacket, $ServerboundDebugSampleSubscriptionPacket_, $ServerboundChangeDifficultyPacket, $ServerboundPlaceRecipePacket, $ServerboundUseItemPacket, $ServerboundBlockEntityTagQueryPacket, $ServerboundPickItemPacket, $ServerboundChatPacket_, $ServerboundPlayerActionPacket, $ServerGamePacketListener, $ServerboundPaddleBoatPacket, $ServerboundMoveVehiclePacket, $ServerboundLockDifficultyPacket, $ServerboundSetBeaconPacket_, $ServerboundSetStructureBlockPacket, $ServerboundPlayerInputPacket, $ServerboundEditBookPacket_, $ServerboundConfigurationAcknowledgedPacket, $ServerboundClientCommandPacket, $ServerboundSelectTradePacket, $ServerboundPlayerCommandPacket, $ServerboundSeenAdvancementsPacket, $ServerboundSwingPacket, $ServerboundMovePlayerPacket, $ServerboundSetJigsawBlockPacket, $ServerboundContainerClickPacket, $ServerboundPlayerAbilitiesPacket, $ServerboundCommandSuggestionPacket, $ServerboundEntityTagQueryPacket, $ServerboundRecipeBookChangeSettingsPacket, $ServerboundInteractPacket, $ServerboundChunkBatchReceivedPacket_, $ServerboundSetCarriedItemPacket, $ServerboundChatSessionUpdatePacket_, $ServerboundSetCommandBlockPacket, $ServerboundSignUpdatePacket, $ServerboundAcceptTeleportationPacket, $ServerboundChatAckPacket_, $ServerboundContainerSlotStateChangedPacket_, $ServerboundUseItemOnPacket, $ServerboundContainerClosePacket, $ServerboundTeleportToEntityPacket, $ServerboundChatCommandSignedPacket_, $ServerboundChatCommandPacket_, $ServerboundRenameItemPacket, $ServerboundContainerButtonClickPacket_, $ServerboundRecipeBookSeenRecipePacket, $ServerboundSetCreativeModeSlotPacket_ } from "@package/net/minecraft/network/protocol/game";
import { $ServerConfigurationPacketListener, $ServerboundFinishConfigurationPacket, $ServerboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ServerboundPingRequestPacket } from "@package/net/minecraft/network/protocol/ping";
import { $ServerGamePacketListenerImplMixin } from "@package/io/github/cotrin8672/cem/mixin";
import { $Channel, $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $SableUDPServer } from "@package/dev/ryanhcode/sable/network/udp";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ServerConnectionListenerExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/net/minecraft/server/network/config";

declare module "@package/net/minecraft/server/network" {
    export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener, $ServerPlayerConnection, $TickablePacketListener, $NeoListenableNetworkHandler, $ServerGamePacketListenerImplMixin, $NetH$ServerNetH {
        getRemoteAddress(): $SocketAddress;
        handleChatAck(packet: $ServerboundChatAckPacket_): void;
        tick(): void;
        addPendingMessage(message: $PlayerChatMessage_): void;
        switchToConfig(): void;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        getPlayer(): $ServerPlayer;
        handlePickItem(packet: $ServerboundPickItemPacket): void;
        cpm$hasMod(): boolean;
        teleport(x: number, arg1: number, y: number, arg3: number, z: number): void;
        /**
         * Teleports the player position to the (relative) values specified, and syncs to the client
         */
        teleport(x: number, arg1: number, y: number, arg3: number, z: number, arg5: $Set_<$RelativeMovement_>): void;
        /**
         * Called when a client is using an item while not pointing at a block, but simply using an item
         */
        handleUseItem(packet: $ServerboundUseItemPacket): void;
        /**
         * Processes the player initiating/stopping digging on a particular spot, as well as a player dropping items
         */
        handlePlayerAction(packet: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(packet: $ServerboundUseItemOnPacket): void;
        handlePaddleBoat(packet: $ServerboundPaddleBoatPacket): void;
        handleChatCommand(packet: $ServerboundChatCommandPacket_): void;
        resetPosition(): void;
        handleRenameItem(packet: $ServerboundRenameItemPacket): void;
        handleSelectTrade(packet: $ServerboundSelectTradePacket): void;
        handleEditBook(packet: $ServerboundEditBookPacket_): void;
        filterTextPacket(text: string): $CompletableFuture<$FilteredText>;
        filterTextPacket(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        /**
         * Processes player movement input. Includes walking, strafing, jumping, and sneaking. Excludes riding and toggling flying/sprinting.
         */
        handlePlayerInput(packet: $ServerboundPlayerInputPacket): void;
        handleDisconnect(): void;
        /**
         * Updates which quickbar slot is selected
         */
        handleSetCarriedItem(packet: $ServerboundSetCarriedItemPacket): void;
        /**
         * Processes a player starting/stopping flying
         */
        handlePlayerAbilities(packet: $ServerboundPlayerAbilitiesPacket): void;
        /**
         * Processes the client closing windows (container)
         */
        handleContainerClose(packet: $ServerboundContainerClosePacket): void;
        handleChangeDifficulty(packet: $ServerboundChangeDifficultyPacket): void;
        localvar$zbc000$tinymultiblocklib$useAllower(arg0: $Vec3_, arg1: $ServerLevel, arg2: $BlockPos_): $Vec3;
        handler$hja000$ftbquests$handleClientInformation(packet: $ServerboundClientInformationPacket_, ci: $CallbackInfo): void;
        redirect$efa000$bettercombat$getStackInHand(instance: $ServerPlayer, hand: $InteractionHand_): $ItemStack;
        /**
         * Process chat messages (broadcast back to clients) and commands (executes)
         */
        handleChat(packet: $ServerboundChatPacket_): void;
        handler$kdn000$petrolpark$setExtendedInventoryCarriedItem(arg0: $ServerboundSetCarriedItemPacket, arg1: $CallbackInfo): void;
        /**
         * Processes clients perspective on player positioning and/or orientation
         */
        handleMovePlayer(packet: $ServerboundMovePlayerPacket): void;
        handleAnimate(packet: $ServerboundSwingPacket): void;
        handleMoveVehicle(packet: $ServerboundMoveVehiclePacket): void;
        handlePlaceRecipe(packet: $ServerboundPlaceRecipePacket): void;
        cpm$setHasMod(arg0: boolean): void;
        handleRecipeBookChangeSettingsPacket(packet: $ServerboundRecipeBookChangeSettingsPacket): void;
        handler$ime000$sable$handleMovePlayer(arg0: $ServerboundMovePlayerPacket, arg1: $CallbackInfo): void;
        /**
         * Processes left and right clicks on entities
         */
        handleInteract(packet: $ServerboundInteractPacket): void;
        handleSignUpdate(packet: $ServerboundSignUpdatePacket): void;
        handleBlockEntityTagQuery(packet: $ServerboundBlockEntityTagQueryPacket): void;
        handleSetJigsawBlock(packet: $ServerboundSetJigsawBlockPacket): void;
        handleJigsawGenerate(packet: $ServerboundJigsawGeneratePacket): void;
        handleSeenAdvancements(packet: $ServerboundSeenAdvancementsPacket): void;
        handleSetCommandBlock(packet: $ServerboundSetCommandBlockPacket): void;
        handleSetCommandMinecart(packet: $ServerboundSetCommandMinecartPacket): void;
        handleAcceptTeleportPacket(packet: $ServerboundAcceptTeleportationPacket): void;
        handleSetBeaconPacket(packet: $ServerboundSetBeaconPacket_): void;
        handleEntityTagQuery(packet: $ServerboundEntityTagQueryPacket): void;
        handleSignedChatCommand(packet: $ServerboundChatCommandSignedPacket_): void;
        ackBlockChangesUpTo(sequence: number): void;
        handleSetStructureBlock(packet: $ServerboundSetStructureBlockPacket): void;
        /**
         * Processes a range of action-types: sneaking, sprinting, waking from sleep, opening the inventory or setting jump height of the horse the player is riding
         */
        handlePlayerCommand(packet: $ServerboundPlayerCommandPacket): void;
        handleLockDifficulty(packet: $ServerboundLockDifficultyPacket): void;
        sendDisguisedChatMessage(message: $Component_, boundType: $ChatType$Bound_): void;
        /**
         * Enchants the item identified by the packet given some convoluted conditions (matching window, which should/shouldn't be in use?)
         */
        handleContainerButtonClick(packet: $ServerboundContainerButtonClickPacket_): void;
        /**
         * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
         */
        handleContainerClick(packet: $ServerboundContainerClickPacket): void;
        handleChatSessionUpdate(packet: $ServerboundChatSessionUpdatePacket_): void;
        sendPlayerChatMessage(chatMessage: $PlayerChatMessage_, boundType: $ChatType$Bound_): void;
        handleChunkBatchReceived(packet: $ServerboundChunkBatchReceivedPacket_): void;
        cpm$getEncodedModelData(): $PlayerData;
        cpm$setEncodedModelData(arg0: $PlayerData): void;
        /**
         * Update the server with an ItemStack in a slot.
         */
        handleSetCreativeModeSlot(packet: $ServerboundSetCreativeModeSlotPacket_): void;
        /**
         * Processes the client status updates: respawn attempt from player, opening statistics or achievements, or acquiring 'open inventory' achievement
         */
        handleClientCommand(packet: $ServerboundClientCommandPacket): void;
        handleRecipeBookSeenRecipePacket(packet: $ServerboundRecipeBookSeenRecipePacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCustomCommandSuggestions(packet: $ServerboundCommandSuggestionPacket): void;
        handleContainerSlotStateChanged(packet: $ServerboundContainerSlotStateChangedPacket_): void;
        handleTeleportToEntityPacket(packet: $ServerboundTeleportToEntityPacket): void;
        handleConfigurationAcknowledged(packet: $ServerboundConfigurationAcknowledgedPacket): void;
        handleDebugSampleSubscription(packet: $ServerboundDebugSampleSubscriptionPacket_): void;
        handler$kdn000$petrolpark$setExtendedInventoryCreativeModeSlot(arg0: $ServerboundSetCreativeModeSlotPacket_, arg1: $CallbackInfo, arg2: boolean, arg3: $ItemStack_, arg4: $CustomData): void;
        redirect$fhe000$immersive_aircraft$getInteractionBoundingBox(entity: $Entity): $AABB;
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        /**
         * Sends all given payloads as a bundle to the client.
         */
        sendBundled(payloads: $Iterable_<$CustomPacketPayload>): void;
        setAboveGroundTickCount(sequence: number): void;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        aboveGroundTickCount: number;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        static LOGGER: $Logger;
        connection: $Connection;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        connectionType: $ConnectionType;
        player: $ServerPlayer;
        constructor(server: $MinecraftServer, connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_);
        get remoteAddress(): $SocketAddress;
    }
    export class $ServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask {
    }
    export interface $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(task: $Consumer_<$Packet<never>>): void;
    }
    export class $TextFilterClient$JoinOrLeaveEncoder {
    }
    export interface $TextFilterClient$JoinOrLeaveEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$JoinOrLeaveEncoder}.
     */
    export type $TextFilterClient$JoinOrLeaveEncoder_ = (() => void);
    export class $ServerConnectionListener$LatencySimulator$DelayedMessage {
    }
    export class $ServerLoginPacketListenerImpl$State extends $Enum<$ServerLoginPacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginPacketListenerImpl$State}.
     */
    export type $ServerLoginPacketListenerImpl$State_ = "hello" | "key" | "authenticating" | "negotiating" | "verifying" | "waiting_for_dupe_disconnect" | "protocol_switching" | "accepted";
    export class $ServerConnectionListener implements $ServerConnectionListenerExtension {
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        stop(): void;
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        tick(): void;
        /**
         * Adds a channel that listens locally
         */
        startMemoryChannel(): $SocketAddress;
        getServer(): $MinecraftServer;
        getConnections(): $List<$Connection>;
        /**
         * Adds a channel that listens on publicly accessible network ports
         */
        startTcpServerListener(address: $InetAddress | null, port: number): void;
        sable$getServer(): $SableUDPServer;
        sable$setupUDPServer(arg0: $Channel): void;
        running: boolean;
        server: $MinecraftServer;
        static SERVER_EVENT_GROUP: $Supplier<$NioEventLoopGroup>;
        static SERVER_EPOLL_EVENT_GROUP: $Supplier<$EpollEventLoopGroup>;
        connections: $List<$Connection>;
        constructor(server: $MinecraftServer);
    }
    export class $LegacyQueryHandler extends $ChannelInboundHandlerAdapter {
        constructor(server: $ServerInfo);
    }
    export class $ServerConnectionListener$LatencySimulator extends $ChannelInboundHandlerAdapter {
    }
    export class $ServerConfigurationPacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $FabricServerConfigurationNetworkHandler {
        tick(): void;
        addTask(arg0: $ConfigurationTask): void;
        finishCurrentTask(taskType: $ConfigurationTask$Type_): void;
        handleConfigurationFinished(packet: $ServerboundFinishConfigurationPacket): void;
        handleDisconnect(): void;
        handleSelectKnownPacks(packet: $ServerboundSelectKnownPacks_): void;
        startConfiguration(): void;
        returnToWorld(): void;
        completeTask(taskType: $ConfigurationTask$Type_): void;
        handler$dkp000$glitchcore$onStartConfiguration(arg0: $CallbackInfo): void;
        modify$ifl000$fabric_resource_loader_v0$filterKnownPacks(arg0: $List_<any>): $List<any>;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
    }
    export class $CommonListenerCookie extends $Record {
        transferred(): boolean;
        latency(): number;
        connectionType(): $ConnectionType;
        clientInformation(): $ClientInformation;
        gameProfile(): $GameProfile;
        static createInitial(gameProfile: $GameProfile, transferred: boolean): $CommonListenerCookie;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: number, arg2: $ClientInformation_, arg3: boolean);
        constructor(gameProfile: $GameProfile, latency: number, clientInformation: $ClientInformation_, transferred: boolean, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { transferred?: boolean, latency?: number, clientInformation?: $ClientInformation_, connectionType?: $ConnectionType_, gameProfile?: $GameProfile,  } | [transferred?: boolean, latency?: number, clientInformation?: $ClientInformation_, connectionType?: $ConnectionType_, gameProfile?: $GameProfile, ];
    export class $ServerGamePacketListenerImpl$EntityInteraction {
    }
    export interface $ServerGamePacketListenerImpl$EntityInteraction {
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImpl$EntityInteraction}.
     */
    export type $ServerGamePacketListenerImpl$EntityInteraction_ = (() => void);
    export class $TextFilterClient$IgnoreStrategy {
        static ignoreOverThreshold(threshold: number): $TextFilterClient$IgnoreStrategy;
        static select(threshold: number): $TextFilterClient$IgnoreStrategy;
        static NEVER_IGNORE: $TextFilterClient$IgnoreStrategy;
        static IGNORE_FULLY_FILTERED: $TextFilterClient$IgnoreStrategy;
    }
    export interface $TextFilterClient$IgnoreStrategy {
        shouldIgnore(text: string, threshold: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$IgnoreStrategy}.
     */
    export type $TextFilterClient$IgnoreStrategy_ = ((arg0: string, arg1: number) => boolean);
    export class $Filterable<T> extends $Record {
        get(filtered: boolean): T;
        map<U>(mappingFunction: $Function_<T, U>): $Filterable<U>;
        static from(filteredText: $FilteredText_): $Filterable<string>;
        resolve<U>(resolver: $Function_<T, (U) | undefined>): ($Filterable<U>) | undefined;
        raw(): T;
        static codec<T>(codec: $Codec<T>): $Codec<$Filterable<T>>;
        filtered(): (T) | undefined;
        static streamCodec<B extends $ByteBuf, T>(codec: $StreamCodec_<B, T>): $StreamCodec<B, $Filterable<T>>;
        static passThrough<T>(value: T): $Filterable<T>;
        constructor(arg0: T, arg1: (T) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Filterable}.
     */
    export type $Filterable_<T> = { raw?: any, filtered?: (T) | undefined,  } | [raw?: any, filtered?: (T) | undefined, ];
    export class $TextFilter {
        static DUMMY: $TextFilter;
    }
    export interface $TextFilter {
        join(): void;
        processStreamMessage(text: string): $CompletableFuture<$FilteredText>;
        leave(): void;
        processMessageBundle(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
    }
    export class $TextFilterClient$RequestFailedException extends $RuntimeException {
        constructor(message: string);
    }
    export class $TextFilterClient$PlayerContext implements $TextFilter {
    }
    export class $LegacyProtocolUtils {
        static writeLegacyString(buffer: $ByteBuf, string: string): void;
        static readLegacyString(buffer: $ByteBuf): string;
        static GET_INFO_PACKET_VERSION_1: number;
        static GET_INFO_PACKET_ID: number;
        static CUSTOM_PAYLOAD_PACKET_ID: number;
        static FAKE_PROTOCOL_VERSION: number;
        static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
        static DISCONNECT_PACKET_ID: number;
        constructor();
    }
    export class $ServerStatusPacketListenerImpl implements $ServerStatusPacketListener {
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleStatusRequest(packet: $ServerboundStatusRequestPacket): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(status: $ServerStatus_, connection: $Connection);
        constructor(arg0: $ServerStatus_, arg1: $Connection, arg2: string);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask$Type extends $Record {
        id(): string;
        constructor(arg0: $ResourceLocation_);
        constructor(id: string);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationTask$Type}.
     */
    export type $ConfigurationTask$Type_ = { id?: string,  } | [id?: string, ];
    export class $PlayerChunkSender {
        static sendChunk(packetListener: $ServerGamePacketListenerImpl, level: $ServerLevel, chunk: $LevelChunk): void;
        sendNextChunks(player: $ServerPlayer): void;
        onChunkBatchReceivedByClient(desiredBatchSize: number): void;
        markChunkPendingToSend(chunk: $LevelChunk): void;
        isPending(chunkPos: number): boolean;
        dropChunk(player: $ServerPlayer, chunkPos: $ChunkPos): void;
        static MIN_CHUNKS_PER_TICK: number;
        static MAX_CHUNKS_PER_TICK: number;
        constructor(memoryConnection: boolean);
    }
    export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener, $ServerCommonNetworkHandlerAccessor {
        getOwner(): $GameProfile;
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        disconnect(reason: $Component_): void;
        /**
         * @deprecated
         */
        createCookie(clientInformation: $ClientInformation_): $CommonListenerCookie;
        createCookie(arg0: $ClientInformation_, arg1: $ConnectionType_): $CommonListenerCookie;
        send(packet: $Packet<never>): void;
        send(packet: $Packet<never>, listener: $PacketSendListener | null): void;
        latency(): number;
        /**
         * @return the connection type of this packet listener
         */
        getConnectionType(): $ConnectionType;
        isSingleplayerOwner(): boolean;
        handleKeepAlive(packet: $ServerboundKeepAlivePacket): void;
        handlePong(packet: $ServerboundPongPacket): void;
        playerProfile(): $GameProfile;
        onDisconnect(disconnectionDetails: $DisconnectionDetails_): void;
        /**
         * @return the main thread event loop
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        handleCustomPayload(packet: $ServerboundCustomPayloadPacket_): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        handleResourcePackResponse(packet: $ServerboundResourcePackPacket_): void;
        resumeFlushing(): void;
        keepConnectionAlive(): void;
        suspendFlushing(): void;
        wrapOperation$hln000$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$hln000$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        /**
         * {@inheritDoc}
         */
        send(payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to the client of this listener.
         */
        send(payload: $CustomPacketPayload_, listener: $PacketSendListener): void;
        flow(): $PacketFlow;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
        get owner(): $GameProfile;
        get singleplayerOwner(): boolean;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $FilteredText extends $Record {
        mask(): $FilterMask;
        raw(): string;
        isFiltered(): boolean;
        filtered(): string;
        filteredOrEmpty(): string;
        static passThrough(raw: string): $FilteredText;
        static fullyFiltered(raw: string): $FilteredText;
        static EMPTY: $FilteredText;
        constructor(arg0: string, arg1: $FilterMask);
    }
    /**
     * Values that may be interpreted as {@link $FilteredText}.
     */
    export type $FilteredText_ = { raw?: string, mask?: $FilterMask,  } | [raw?: string, mask?: $FilterMask, ];
    export class $TextFilterClient implements $AutoCloseable {
        close(): void;
        createContext(profile: $GameProfile): $TextFilter;
        static createFromConfig(config: string): $TextFilterClient;
        processJoinOrLeave(profile: $GameProfile, url: $URL, encoder: $TextFilterClient$JoinOrLeaveEncoder_, executor: $Executor_): void;
        requestMessageProcessing(profile: $GameProfile, text: string, ignoreStrategy: $TextFilterClient$IgnoreStrategy_, executor: $Executor_): $CompletableFuture<$FilteredText>;
        joinEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEndpoint: $URL;
        workerPool: $ExecutorService;
        chatIgnoreStrategy: $TextFilterClient$IgnoreStrategy;
        joinEndpoint: $URL;
    }
    export class $ServerLoginPacketListenerImpl implements $ServerLoginPacketListener, $TickablePacketListener, $NetworkHandlerExtensions, $PacketCallbackListener, $ServerLoginNetworkHandlerAccessor {
        disconnect(reason: $Component_): void;
        getUserName(): string;
        tick(): void;
        handleKey(packet: $ServerboundKeyPacket): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        getAddon(): $ServerLoginNetworkAddon;
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleHello(packet: $ServerboundHelloPacket_): void;
        sent(arg0: $Packet<any>): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        handleLoginAcknowledgement(packet: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(packet: $ServerboundCustomQueryAnswerPacket_): void;
        startClientVerification(profile: $GameProfile): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        server: $MinecraftServer;
        requestedUsername: string;
        static LOGGER: $Logger;
        connection: $Connection;
        constructor(server: $MinecraftServer, connection: $Connection, transferred: boolean);
        get userName(): string;
        get addon(): $ServerLoginNetworkAddon;
        get acceptingMessages(): boolean;
    }
    export class $TextFilterClient$MessageEncoder {
    }
    export interface $TextFilterClient$MessageEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$MessageEncoder}.
     */
    export type $TextFilterClient$MessageEncoder_ = (() => void);
    export class $ServerPlayerConnection {
    }
    export interface $ServerPlayerConnection {
        send(packet: $Packet<never>): void;
        getPlayer(): $ServerPlayer;
        get player(): $ServerPlayer;
    }
    export class $MemoryServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
}
