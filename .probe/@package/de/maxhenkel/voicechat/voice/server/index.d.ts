import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $VoicechatSocket, $Group$Type } from "@package/de/maxhenkel/voicechat/api";
import { $SocketAddress } from "@package/java/net";
import { $Packet, $Secret, $NetworkMessage, $MicPacket, $PingPacket, $SoundPacket, $ClientGroup, $PlayerState } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread } from "@package/java/lang";
import { $UUID, $Map, $UUID_, $Collection_, $Collection } from "@package/java/util";
import { $CategoryManager } from "@package/de/maxhenkel/voicechat/plugins";

declare module "@package/de/maxhenkel/voicechat/voice/server" {
    export class $PingManager$PingListener {
    }
    export interface $PingManager$PingListener {
        onPong(arg0: number, arg1: number): void;
        onFailedAttempt(arg0: number): void;
        onTimeout(arg0: number): void;
    }
    export class $Server extends $Thread {
        disconnectClient(arg0: $UUID_): void;
        sendPacketRaw(arg0: $Packet<never>, arg1: $ClientConnection): void;
        close(): void;
        getPort(): number;
        getConnection(arg0: $UUID_): $ClientConnection;
        getSocket(): $VoicechatSocket;
        broadcast(arg0: $Collection_<$ServerPlayer>, arg1: $SoundPacket<never>, arg2: $ServerPlayer | null, arg3: $PlayerState | null, arg4: $UUID_ | null, arg5: string): void;
        isClosed(): boolean;
        getSecret(arg0: $UUID_): $Secret;
        sendPacket(arg0: $Packet<never>, arg1: $ClientConnection): boolean;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        getServer(): $MinecraftServer;
        getBroadcastRange(arg0: number): number;
        getConnections(): $Map<$UUID, $ClientConnection>;
        getSender(arg0: $NetworkMessage): $ClientConnection;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        getPlayerStateManager(): $PlayerStateManager;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        changePort(arg0: number): void;
        generateNewSecret(arg0: $UUID_): $Secret;
        onMicPacket(arg0: $UUID_, arg1: $MicPacket): void;
        getGroupManager(): $ServerGroupManager;
        getPingManager(): $PingManager;
        sendSoundPacket(arg0: $ServerPlayer | null, arg1: $PlayerState | null, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $ClientConnection | null, arg5: $SoundPacket<never>, arg6: string): void;
        getCategoryManager(): $ServerCategoryManager;
        getUnconnectedSender(arg0: $NetworkMessage): $ClientConnection;
        hasSecret(arg0: $UUID_): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $MinecraftServer);
        get port(): number;
        get socket(): $VoicechatSocket;
        get closed(): boolean;
        get server(): $MinecraftServer;
        get connections(): $Map<$UUID, $ClientConnection>;
        get playerStateManager(): $PlayerStateManager;
        get groupManager(): $ServerGroupManager;
        get pingManager(): $PingManager;
        get categoryManager(): $ServerCategoryManager;
    }
    export class $PingManager {
        onPongPacket(arg0: $PingPacket): void;
        checkTimeouts(): void;
        sendPing(arg0: $ClientConnection, arg1: number, arg2: number, arg3: $PingManager$PingListener): void;
        constructor(arg0: $Server);
    }
    export class $PlayerStateManager {
        broadcastState(arg0: $ServerPlayer | null, arg1: $PlayerState): void;
        getState(arg0: $UUID_): $PlayerState;
        setGroup(arg0: $ServerPlayer, arg1: $UUID_ | null): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        getStates(): $Collection<$PlayerState>;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        broadcastRemoveState(arg0: $ServerPlayer): void;
        static defaultDisconnectedState(arg0: $ServerPlayer): $PlayerState;
        constructor(arg0: $Server);
        get states(): $Collection<$PlayerState>;
    }
    export class $ClientConnection {
        getAddress(): $SocketAddress;
        send(arg0: $Server, arg1: $NetworkMessage): void;
        getPlayerUUID(): $UUID;
        getLastKeepAliveResponse(): number;
        setLastKeepAliveResponse(arg0: number): void;
        constructor(arg0: $UUID_, arg1: $SocketAddress);
        get address(): $SocketAddress;
        get playerUUID(): $UUID;
    }
    export class $ServerCategoryManager extends $CategoryManager {
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
    }
    export class $ServerGroupManager {
        getPlayerGroup(arg0: $ServerPlayer): $Group;
        cleanupGroups(): void;
        getGroup(arg0: $UUID_): $Group;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        getGroups(): $Map<$UUID, $Group>;
        removeGroup(arg0: $UUID_): boolean;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        addGroup(arg0: $Group, arg1: $ServerPlayer | null): void;
        joinGroup(arg0: $Group | null, arg1: $ServerPlayer, arg2: string | null): void;
        leaveGroup(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
        get groups(): $Map<$UUID, $Group>;
    }
    export class $Group {
        toClientGroup(): $ClientGroup;
        getName(): string;
        isHidden(): boolean;
        isOpen(): boolean;
        getId(): $UUID;
        getType(): $Group$Type;
        isNormal(): boolean;
        getPassword(): string;
        isPersistent(): boolean;
        isIsolated(): boolean;
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean, arg4: boolean, arg5: $Group$Type);
        constructor();
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null);
        constructor(arg0: $UUID_, arg1: string);
        get name(): string;
        get hidden(): boolean;
        get open(): boolean;
        get id(): $UUID;
        get type(): $Group$Type;
        get normal(): boolean;
        get password(): string;
        get persistent(): boolean;
        get isolated(): boolean;
    }
}
