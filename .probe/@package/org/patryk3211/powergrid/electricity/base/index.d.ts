import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $TransformerCoupling, $IElectricNode, $INode, $OwnedFloatingNode, $FloatingNode } from "@package/org/patryk3211/powergrid/electricity/sim/node";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Function_ } from "@package/java/util/function";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $ChunkHolder } from "@package/net/minecraft/server/level";
import { $BlockPos, $Direction$Axis_, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockWireEndpoint, $BaseWireEntity, $IWireEndpoint } from "@package/org/patryk3211/powergrid/electricity/wire";
import { $TransmissionLine } from "@package/org/patryk3211/powergrid/electricity/sim/special";
import { $Class, $Object } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $BakedCircuit } from "@package/org/patryk3211/powergrid/circuits/circuitboard";
import { $StateS2CPacket$Key } from "@package/org/patryk3211/powergrid/network/packets";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $AbstractElectricWire, $SwitchedWire, $ElectricWire, $ElectricalNetwork } from "@package/org/patryk3211/powergrid/electricity/sim";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/org/patryk3211/powergrid/electricity/base" {
    export class $ElectricBehaviour extends $BlockEntityBehaviour implements $ISynchronizedElement {
        remove(): void;
        getKey(): $StateS2CPacket$Key;
        getTerminal(index: number): $OwnedFloatingNode;
        pause(): void;
        isPaused(): boolean;
        getConnections(): $Map<$BlockWireEndpoint, $Set<$BaseWireEntity>>;
        unpause(): void;
        removeConnection(endpoint: $BlockWireEndpoint, wire: $BaseWireEntity): void;
        hasConnection(source: $BlockWireEndpoint, destination: $BlockWireEndpoint): boolean;
        addConnection(endpoint: $BlockWireEndpoint, wire: $BaseWireEntity): void;
        refreshConnectionEntities(): void;
        breakConnections(): void;
        writeToSync(buffer: $FriendlyByteBuf, useDoubles: boolean, lineGetter: $Function_<$OwnedFloatingNode, $TransmissionLine>): void;
        setSyncAppender(syncAppender: $ElectricBehaviour$SyncAppender): void;
        joinNetwork(network: $ElectricalNetwork, externalIndex: number): void;
        static writeToBuffer(buffer: $FriendlyByteBuf, value: number, useDoubles: boolean): void;
        getExternalNodes(): $List<$OwnedFloatingNode>;
        getInternalNodes(): $List<$INode>;
        hasInternals(): boolean;
        hasTerminal(terminal: number): boolean;
        static readFromBuffer(buffer: $FriendlyByteBuf, useDoubles: boolean): number;
        readFromSync(buffer: $FriendlyByteBuf, useDoubles: boolean): void;
        inheritConnections(otherBehaviour: $ElectricBehaviour): void;
        rebuildCircuit(rebuildExternal: boolean): void;
        static handleTicketChange(newLevel: number, holder: $ChunkHolder, oldLevel: number): void;
        reducedSync(): void;
        tracedAdd(network: $ElectricalNetwork, node: $IElectricNode): void;
        tracedAdd(scanNodes: $List_<$INode>): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$ElectricBehaviour>;
        constructor<T extends $SmartBlockEntity>(be: T);
        get key(): $StateS2CPacket$Key;
        get paused(): boolean;
        get connections(): $Map<$BlockWireEndpoint, $Set<$BaseWireEntity>>;
        set syncAppender(value: $ElectricBehaviour$SyncAppender);
        get externalNodes(): $List<$OwnedFloatingNode>;
        get internalNodes(): $List<$INode>;
    }
    export class $ITerminalPlacement {
    }
    export interface $ITerminalPlacement {
        check(arg0: $Vec3_): boolean;
        check(blockPos: $BlockPos_, position: $Vec3_): boolean;
        getOrigin(): $Vec3;
        get origin(): $Vec3;
    }
    export class $IDecoratedTerminal {
        static POSITIVE: $Component;
        static CORD: $Component;
        static TAP: $Component;
        static GRAY: number;
        static INPUT: $Component;
        static OUTPUT: $Component;
        static BLUE: number;
        static SOCKET: $Component;
        static GREEN: number;
        static RED: number;
        static NEGATIVE: $Component;
        static COMMON: $Component;
        static CONNECTOR: $Component;
        static CONTROL: $Component;
    }
    export interface $IDecoratedTerminal {
        getName(): $Component;
        getColor(): number;
        getOutline(): $AABB;
        get name(): $Component;
        get color(): number;
        get outline(): $AABB;
    }
    export class $ElectricBehaviour$SyncAppender {
    }
    export interface $ElectricBehaviour$SyncAppender {
        writeToSync(arg0: $FriendlyByteBuf): void;
        readFromSync(arg0: $FriendlyByteBuf): void;
    }
    export class $IElectric {
        static getAt(world: $Level_, pos: $BlockPos_): $IElectric;
        static sendMessage(context: $UseOnContext, text: $Component_): void;
        static makeConnection(world: $Level_, endpoint1: $IWireEndpoint, endpoint2: $IWireEndpoint, context: $UseOnContext): $InteractionResult;
        static getTerminalPos(world: $Level_, position: $BlockPos_, terminalIndex: number): $Vec3;
        static makeHangingWireConnection(world: $Level_, endpoint1: $BlockWireEndpoint, endpoint2: $BlockWireEndpoint, context: $UseOnContext): $InteractionResult;
    }
    export interface $IElectric extends $IWrenchable {
        accepts(wireStack: $ItemStack_): boolean;
        terminal(arg0: $BlockState_, arg1: number): $ITerminalPlacement;
        onWire(state: $BlockState_, context: $UseOnContext): $InteractionResult;
        terminalAt(state: $BlockState_, pos: $Vec3_): $ITerminalPlacement;
        getBehaviour(world: $Level_, pos: $BlockPos_, state: $BlockState_): $ElectricBehaviour;
        terminalIndexAt(state: $BlockState_, pos: $Vec3_): number;
        terminalCount(): number;
    }
    export class $ElectricBlockEntity extends $SmartBlockEntity implements $IElectricEntity {
        isNoisy(): boolean;
        tickAudio(): void;
        setUnsaved(): void;
        getElectricBehaviour(): $ElectricBehaviour;
        electricalTick(): void;
        specifyThermalBehaviour(): $ThermalBehaviour;
        resistance(suffix: string): number;
        resistance(): number;
        paused(): void;
        unpaused(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, state: $BlockState_);
        get noisy(): boolean;
        get electricBehaviour(): $ElectricBehaviour;
    }
    export class $TerminalBoundingBox implements $ITerminalPlacement, $IDecoratedTerminal {
        getName(): $Component;
        offset(x: number, y: number, z: number): $TerminalBoundingBox;
        offset(offset: $Vec3_): $TerminalBoundingBox;
        check(position: $Vec3_): boolean;
        rotate(axis: $Direction$Axis_, rotation: $Rotation_): $TerminalBoundingBox;
        rotate(axis: $Direction$Axis_, angle: number): $TerminalBoundingBox;
        getColor(): number;
        getOrigin(): $Vec3;
        getShape(): $VoxelShape;
        withColor(rgb: number): $TerminalBoundingBox;
        getOutline(): $AABB;
        rotateAroundY(rotation: $Rotation_): $TerminalBoundingBox;
        rotateAroundY(angle: number): $TerminalBoundingBox;
        rotateAroundZ(angle: number): $TerminalBoundingBox;
        rotateAroundZ(rotation: $Rotation_): $TerminalBoundingBox;
        rotateAroundX(angle: number): $TerminalBoundingBox;
        rotateAroundX(rotation: $Rotation_): $TerminalBoundingBox;
        withOrigin(origin: $Vec3_): $TerminalBoundingBox;
        withOrigin(x: number, y: number, z: number): $TerminalBoundingBox;
        check(blockPos: $BlockPos_, position: $Vec3_): boolean;
        constructor(name: $Component_, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, expand: number);
        constructor(name: $Component_, boundingBox: $AABB_);
        constructor(name: $Component_, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
        get name(): $Component;
        get color(): number;
        get origin(): $Vec3;
        get shape(): $VoxelShape;
        get outline(): $AABB;
    }
    export class $IElectricEntity$CircuitBuilder {
        clear(): void;
        add(wire: $AbstractElectricWire): void;
        add(node: $INode): void;
        connect(resistance: number, node1: $IElectricNode, node2: $IElectricNode): $ElectricWire;
        setTo(circuit: $BakedCircuit): void;
        paused(): void;
        couple(ratio: number, p1: $IElectricNode, s1: $IElectricNode): $TransformerCoupling;
        couple(ratio: number, resistance: number, p1: $IElectricNode, p2: $IElectricNode, s1: $IElectricNode, s2: $IElectricNode): $TransformerCoupling;
        couple(ratio: number, resistance: number, p1: $IElectricNode, s1: $IElectricNode, s2: $IElectricNode): $TransformerCoupling;
        couple(ratio: number, p1: $IElectricNode, s1: $IElectricNode, s2: $IElectricNode): $TransformerCoupling;
        couple(ratio: number, p1: $IElectricNode, p2: $IElectricNode, s1: $IElectricNode, s2: $IElectricNode): $TransformerCoupling;
        couple(ratio: number, resistance: number, p1: $IElectricNode, s1: $IElectricNode): $TransformerCoupling;
        addInternalNode(): $FloatingNode;
        addInternalNode<T extends $INode>(clazz: $Class<T>, ...params: $Object[]): T;
        rebuildExternal(rebuildExternal: boolean): void;
        connectSwitch(resistance: number, node1: $IElectricNode, node2: $IElectricNode, state: boolean): $SwitchedWire;
        connectSwitch(resistance: number, node1: $IElectricNode, node2: $IElectricNode): $SwitchedWire;
        setTerminalCount(count: number): void;
        terminalNode(index: number): $FloatingNode;
        constructor(pos: $BlockPos_, externalNodes: $List_<$OwnedFloatingNode>, internalNodes: $Collection_<$INode>, wires: $Collection_<$AbstractElectricWire>);
        set to(value: $BakedCircuit);
        set terminalCount(value: number);
    }
}
