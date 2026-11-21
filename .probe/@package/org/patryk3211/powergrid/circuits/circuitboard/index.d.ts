import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $FloatingNode, $OwnedFloatingNode, $INode } from "@package/org/patryk3211/powergrid/electricity/sim/node";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Function_ } from "@package/java/util/function";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ITerminalPlacement, $TerminalBoundingBox, $ElectricBlockEntity, $IElectricEntity$CircuitBuilder, $ElectricBehaviour, $IElectric, $ElectricBehaviour$SyncAppender } from "@package/org/patryk3211/powergrid/electricity/base";
import { $Class } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $CircuitSchematic$Node_, $ISchematicHolder, $PlacedComponent, $CircuitSchematic } from "@package/org/patryk3211/powergrid/circuits/schematic";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $AbstractElectricWire } from "@package/org/patryk3211/powergrid/electricity/sim";
import { $ThermalUnit } from "@package/org/patryk3211/powergrid/circuits/thermal";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $AirCurrent } from "@package/com/simibubi/create/content/kinetics/fan";

declare module "@package/org/patryk3211/powergrid/circuits/circuitboard" {
    export class $CircuitBoardModelQuads {
        getQuads(state: $BlockState_, side: $Direction_, type: $RenderType): $List<$BakedQuad>;
        putQuads(state: $BlockState_, side: $Direction_, type: $RenderType, quads: $List_<$BakedQuad>): void;
        state: $BlockState;
        constructor();
    }
    export class $ComponentCircuitBuilder extends $IElectricEntity$CircuitBuilder {
        constructor(pos: $BlockPos_, externalNodeProvider: $Function_<number, $FloatingNode>, internalNodes: $Collection_<$INode>, wires: $Collection_<$AbstractElectricWire>);
    }
    export class $BakedCircuit {
        static from(schematic: $CircuitSchematic, be: $CircuitBoardBlockEntity): $BakedCircuit;
        write(tag: $CompoundTag_): void;
        read(tag: $CompoundTag_, clientPacket: boolean): void;
        getNode(node: $CircuitSchematic$Node_): $FloatingNode;
        tick(): void;
        isDamaged(): boolean;
        wires: $List<$AbstractElectricWire>;
        tickedComponents: $List<$PlacedComponent>;
        externalNodes: $List<$OwnedFloatingNode>;
        internalNodes: $List<$INode>;
        thermalUnits: $List<$ThermalUnit>;
        terminals: $List<$TerminalBoundingBox>;
        get damaged(): boolean;
    }
    export class $CircuitBoardBlockEntity extends $ElectricBlockEntity implements $IElectric, $IHaveGoggleInformation, $ISchematicHolder, $ElectricBehaviour$SyncAppender {
        getShape(state: $BlockState_, baseShape: $VoxelShape): $VoxelShape;
        terminal(state: $BlockState_, index: number): $ITerminalPlacement;
        getComponents<T>(ofClass: $Class<T>): $Collection<$PlacedComponent>;
        addToGoggleTooltip(tooltip: $List_<$Component_>, isPlayerSneaking: boolean): boolean;
        getSchematicName(): string;
        setSchematicName(name: string): void;
        terminalCount(): number;
        getSchematic(): $CircuitSchematic;
        setAdditionalData(tag: $CompoundTag_): void;
        repairBroken(): void;
        setSchematic(schematic: $CircuitSchematic): void;
        getBaked(): $BakedCircuit;
        writeToSync(buffer: $FriendlyByteBuf): void;
        readFromSync(buffer: $FriendlyByteBuf): void;
        removeCoolingMultiplier(current: $AirCurrent): void;
        addCoolingMultiplier(current: $AirCurrent, value: number): void;
        accepts(wireStack: $ItemStack_): boolean;
        onWire(state: $BlockState_, context: $UseOnContext): $InteractionResult;
        terminalAt(state: $BlockState_, pos: $Vec3_): $ITerminalPlacement;
        getBehaviour(world: $Level_, pos: $BlockPos_, state: $BlockState_): $ElectricBehaviour;
        terminalIndexAt(state: $BlockState_, pos: $Vec3_): number;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        totalCoolingFactorMultiplier: number;
        quads: $CircuitBoardModelQuads;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, state: $BlockState_);
        set additionalData(value: $CompoundTag_);
        get baked(): $BakedCircuit;
    }
}
