import { $Function_, $Function } from "@package/java/util/function";
import { $Logger } from "@package/org/slf4j";
import { $CSolver$SolverBackend_ } from "@package/org/patryk3211/powergrid/config";
import { $IMNA, $IMatrixAccess, $IAdmittanceAdder_, $ISolverHook, $IMultiHooks } from "@package/org/patryk3211/powergrid/electricity/sim/solver";
import { $IStamped } from "@package/org/patryk3211/powergrid/electricity/sim/calculation";
import { $Collection_, $List, $Collection, $Set } from "@package/java/util";
import { $INetworkElement, $IElectricNode, $INode } from "@package/org/patryk3211/powergrid/electricity/sim/node";
export * as node from "@package/org/patryk3211/powergrid/electricity/sim/node";
export * as solver from "@package/org/patryk3211/powergrid/electricity/sim/solver";
export * as calculation from "@package/org/patryk3211/powergrid/electricity/sim/calculation";

declare module "@package/org/patryk3211/powergrid/electricity/sim" {
    export class $ElectricWire extends $AbstractElectricWire {
        setResistance(resistance: number): void;
        getResistance(): number;
        constructor(resistance: number, node1: $IElectricNode, node2: $IElectricNode);
    }
    export class $ElectricalNetwork implements $IStamped {
        size(): number;
        clear(): void;
        getValue(node: $INode): number;
        isEmpty(): boolean;
        merge(other: $ElectricalNetwork): void;
        setValue(node: $INode, value: number): void;
        prepare(multiTicks: number): void;
        removeNode(node: $INode): void;
        cleanup(): void;
        isDirty(): boolean;
        isLeaf(node: $IElectricNode): boolean;
        getStamp(): number;
        addNode(node: $INode): void;
        getNodes(): $List<$INode>;
        calculate(multiTicks: number): void;
        addNodes(...nodes: $INode[]): void;
        setDirty(): void;
        getDeltaTime(): number;
        updateConductance(wire: $AbstractElectricWire, change: number): void;
        isConverged(): boolean;
        updateResistance(wire: $AbstractElectricWire, oldResistance: number): void;
        swapNodes(node1: $INode, node2: $INode): void;
        makeLeaf(node: $IElectricNode, tracked: $IElectricNode): void;
        removeLeaf(node: $IElectricNode): void;
        singleTick(): void;
        addSegment(elements: $Collection_<$INetworkElement>): void;
        hasHooks(): boolean;
        getLeafs(): $Collection<$IElectricNode>;
        removeWire(wire: $AbstractElectricWire): void;
        warmUp(ticks: number): void;
        addWire(wire: $AbstractElectricWire): void;
        setPrecision(absoluteCriterion: number, relativeCriterion: number, minimumPrecision: number, searchAlpha: number): void;
        switchBackend(backend: $CSolver$SolverBackend_): void;
        getMultiTick(): number;
        fromElements(elements: $Collection_<$INetworkElement>): void;
        alterConductanceMatrix(row: number, column: number, change: number): void;
        convergenceProblems(residual: number, ResidualVector: $IMatrixAccess): void;
        findProblematicNodes(residual: $IMatrixAccess, threshold: number): $List<$INode>;
        maxIterations: $Function<boolean, number>;
        bjtSmoothAlpha: number;
        diodeSmoothAlpha: number;
        triodeLimAnode: number;
        countUpdates: boolean;
        innerHooks: $Set<$ISolverHook>;
        static LOGGER: $Logger;
        triodeLimGrid: number;
        triodeLimCathode: number;
        static G_MIN: number;
        constructor(addGMin: boolean);
        constructor(addGMin: boolean, mna: $Function_<$ElectricalNetwork, $IMNA>);
        get empty(): boolean;
        get stamp(): number;
        get nodes(): $List<$INode>;
        get deltaTime(): number;
        get converged(): boolean;
        get leafs(): $Collection<$IElectricNode>;
        get multiTick(): number;
    }
    export class $SwitchedWire extends $ElectricWire {
        getState(): boolean;
        setState(state: boolean): void;
        constructor(resistance: number, node1: $IElectricNode, node2: $IElectricNode);
        constructor(resistance: number, node1: $IElectricNode, node2: $IElectricNode, initialState: boolean);
    }
    export class $AbstractElectricWire implements $INetworkElement, $IMultiHooks {
        remove(): void;
        current(): number;
        prepare(multiTicks: number): void;
        stamp(admittance: $IAdmittanceAdder_, change: number): void;
        power(): number;
        setNetwork(network: $ElectricalNetwork): void;
        getNetwork(): $ElectricalNetwork;
        postMicroTick(): void;
        coupledNodes(): $Collection<$IElectricNode>;
        internalPower(): number;
        isConverged(): boolean;
        conductance(): number;
        affectedNodes(): $List<$INode>;
        valueChange(x: number, x0: number, ticks: number): void;
        static softDelta(dX: number, a: number): number;
        setNode1(node1: $IElectricNode): void;
        getNode1(): $IElectricNode;
        flipNodes(): void;
        getNode2(): $IElectricNode;
        setNode2(node2: $IElectricNode): void;
        potentialDifference(): number;
        getStamp(): number;
        isSource(): boolean;
        constructor(node1: $IElectricNode, node2: $IElectricNode);
        get converged(): boolean;
        get source(): boolean;
    }
}
