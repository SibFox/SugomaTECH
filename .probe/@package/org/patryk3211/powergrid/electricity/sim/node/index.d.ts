import { $IWireEndpoint } from "@package/org/patryk3211/powergrid/electricity/wire";
import { $IAdmittanceAdder_ } from "@package/org/patryk3211/powergrid/electricity/sim/solver";
import { $IStamped } from "@package/org/patryk3211/powergrid/electricity/sim/calculation";
import { $Collection } from "@package/java/util";
import { $ElectricalNetwork } from "@package/org/patryk3211/powergrid/electricity/sim";

declare module "@package/org/patryk3211/powergrid/electricity/sim/node" {
    export class $TransformerCoupling extends $CouplingNode {
        static create(ratio: number, primary: $IElectricNode, secondary1: $IElectricNode, secondary2: $IElectricNode): $TransformerCoupling;
        static create(ratio: number, resistance: number, primary: $IElectricNode, secondary: $IElectricNode): $TransformerCoupling;
        static create(ratio: number, primary: $IElectricNode, secondary: $IElectricNode): $TransformerCoupling;
        static create(ratio: number, resistance: number, primary: $IElectricNode, secondary1: $IElectricNode, secondary2: $IElectricNode): $TransformerCoupling;
        static create(ratio: number, primary1: $IElectricNode, primary2: $IElectricNode, secondary1: $IElectricNode, secondary2: $IElectricNode): $TransformerCoupling;
        static create(ratio: number, resistance: number, primary1: $IElectricNode, primary2: $IElectricNode, secondary1: $IElectricNode, secondary2: $IElectricNode): $TransformerCoupling;
        setResistance(resistance: number): void;
        getResistance(): number;
        setRatio(arg0: number): void;
        set ratio(value: number);
    }
    export class $CouplingNode implements $ICouplingNode {
        getIndex(): number;
        setNetwork(network: $ElectricalNetwork): void;
        getNetwork(): $ElectricalNetwork;
        getSavedValue(): number;
        setSavedValue(value: number): void;
        assignIndex(index: number): void;
        setStateValue(value: number): void;
        remove(): void;
        getStateValue(): number;
        getStamp(): number;
        isSource(): boolean;
        isConverged(): boolean;
        constructor();
        get index(): number;
        get stamp(): number;
        get source(): boolean;
        get converged(): boolean;
    }
    export class $ICouplingNode {
    }
    export interface $ICouplingNode extends $INode {
        couple(arg0: $IAdmittanceAdder_): void;
        coupledNodes(): $Collection<$IElectricNode>;
    }
    export class $OwnedFloatingNode extends $FloatingNode {
        endpoint: $IWireEndpoint;
        constructor(endpoint: $IWireEndpoint);
    }
    export class $INode {
    }
    export interface $INode extends $INetworkElement {
        remove(): void;
        getIndex(): number;
        getSavedValue(): number;
        setSavedValue(value: number): void;
        getStateValue(): number;
        assignIndex(arg0: number): void;
        setStateValue(value: number): void;
        get index(): number;
    }
    export class $FloatingNode extends $ElectricNode {
        constructor();
    }
    export class $INetworkElement {
    }
    export interface $INetworkElement extends $IStamped {
        remove(): void;
        getStamp(): number;
        setNetwork(arg0: $ElectricalNetwork): void;
        isSource(): boolean;
        getNetwork(): $ElectricalNetwork;
        isConverged(): boolean;
        get stamp(): number;
        get source(): boolean;
        get converged(): boolean;
    }
    export class $IElectricNode {
    }
    export interface $IElectricNode extends $INode {
        getCurrent(): number;
        getVoltage(): number;
        get current(): number;
        get voltage(): number;
    }
    export class $ElectricNode implements $IElectricNode {
        getIndex(): number;
        getCurrent(): number;
        setNetwork(network: $ElectricalNetwork): void;
        setVoltage(voltage: number): void;
        getNetwork(): $ElectricalNetwork;
        getSavedValue(): number;
        setSavedValue(value: number): void;
        assignIndex(index: number): void;
        setStateValue(value: number): void;
        setCurrent(current: number): void;
        getVoltage(): number;
        remove(): void;
        getStateValue(): number;
        getStamp(): number;
        isSource(): boolean;
        isConverged(): boolean;
        constructor();
        get index(): number;
        get stamp(): number;
        get source(): boolean;
        get converged(): boolean;
    }
}
