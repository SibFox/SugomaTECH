import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Set } from "@package/java/util";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/mrcrayfish/furniture/refurbished/electricity" {
    export class $IElectricityNode {
        static searchNodes(arg0: $IElectricityNode): $List<$IElectricityNode>;
        static searchNodes(arg0: $IElectricityNode, arg1: number, arg2: boolean, arg3: $Predicate_<$IElectricityNode>, arg4: $Predicate_<$IElectricityNode>): $List<$IElectricityNode>;
    }
    export interface $IElectricityNode {
        getPowerSources(): $Set<$BlockPos>;
        onNodeDestroyed(): void;
        registerElectricityNodeTicker(arg0: $Level_): void;
        isNodeConnectionLimitReached(): boolean;
        getPositionedNodeInteractBox(): $AABB;
        updateAndGetNodeConnections(): $Set<$Connection>;
        isSourceNode(): boolean;
        getNodeInteractBox(): $AABB;
        connectToNode(arg0: $IElectricityNode): boolean;
        writeNodeNbt(arg0: $CompoundTag_): void;
        getNodeOwner(): $BlockEntity;
        onNodeConnectedTo(arg0: $IElectricityNode): void;
        getNodePosition(): $BlockPos;
        setNodePowered(arg0: boolean): void;
        earlyNodeTick(arg0: $Level_): void;
        isConnectedToNode(arg0: $IElectricityNode): boolean;
        isNodeValid(): boolean;
        isNodePowered(): boolean;
        readNodeNbt(arg0: $CompoundTag_): void;
        saveNodeNbtToItem(arg0: $ItemStack_, arg1: $HolderLookup$Provider): void;
        getNodeLevel(): $Level;
        getNodeConnections(): $Set<$Connection>;
        canPowerTraverseNode(): boolean;
        updateNodeConnections(): void;
        getNodeMaximumConnections(): number;
        setNodeReceivingPower(arg0: boolean): void;
        removeAllNodeConnections(): void;
        syncDataToTrackingClients(): void;
        isNodeInPowerableNetwork(): boolean;
        isNodeInPowerableNetwork(arg0: $BlockPos_): boolean;
        isNodeReceivingPower(): boolean;
        removeNodeConnection(arg0: $Connection): void;
        get powerSources(): $Set<$BlockPos>;
        get nodeConnectionLimitReached(): boolean;
        get positionedNodeInteractBox(): $AABB;
        get sourceNode(): boolean;
        get nodeInteractBox(): $AABB;
        get nodeOwner(): $BlockEntity;
        get nodePosition(): $BlockPos;
        get nodeValid(): boolean;
        get nodeLevel(): $Level;
        get nodeConnections(): $Set<$Connection>;
        get nodeMaximumConnections(): number;
    }
    export class $ElectricityTicker {
        static get(arg0: $Level_): $ElectricityTicker;
        tick(): void;
        addElectricityNode(arg0: $IElectricityNode): void;
        earlyTick(): void;
        constructor(arg0: $Level_);
    }
    export class $Connection {
        static of(arg0: $BlockPos_, arg1: $BlockPos_): $Connection;
        isConnected(arg0: $Level_): boolean;
        isPowered(arg0: $Level_): boolean;
        getPosA(): $BlockPos;
        getPosB(): $BlockPos;
        getNodeB(arg0: $Level_): $IElectricityNode;
        getOtherNode(arg0: $IElectricityNode): $IElectricityNode;
        isCrossingPowerableZone(arg0: $Level_): boolean;
        getNodeA(arg0: $Level_): $IElectricityNode;
        get posA(): $BlockPos;
        get posB(): $BlockPos;
    }
    export class $ElectricityTicker$Access {
    }
    export interface $ElectricityTicker$Access {
        refurbishedFurniture$GetElectricityTicker(): $ElectricityTicker;
    }
    /**
     * Values that may be interpreted as {@link $ElectricityTicker$Access}.
     */
    export type $ElectricityTicker$Access_ = (() => $ElectricityTicker);
    export class $LinkManager$Access {
    }
    export interface $LinkManager$Access {
        refurbishedFurniture$GetLinkManager(): $LinkManager;
    }
    /**
     * Values that may be interpreted as {@link $LinkManager$Access}.
     */
    export type $LinkManager$Access_ = (() => $LinkManager);
    export class $LinkManager {
        static get(arg0: $MinecraftServer): ($LinkManager) | undefined;
        onPlayerLoggedOut(arg0: $Player): void;
        onPlayerTick(arg0: $Player): void;
        onNodeInteract(arg0: $Level_, arg1: $Player, arg2: $IElectricityNode): void;
        static MAX_LINK_LENGTH: number;
        constructor();
    }
}
