import { $CSolver$SolverBackend } from "@package/org/patryk3211/powergrid/config";
import { $Collection, $Collection_ } from "@package/java/util";
import { $IElectricNode } from "@package/org/patryk3211/powergrid/electricity/sim/node";

declare module "@package/org/patryk3211/powergrid/electricity/sim/solver" {
    export class $IResidualAdder {
    }
    export interface $IResidualAdder {
        add(arg0: number, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IResidualAdder}.
     */
    export type $IResidualAdder_ = ((arg0: number, arg1: number) => void);
    export class $IMNA {
    }
    export interface $IMNA {
        type(): $CSolver$SolverBackend;
        cleanup(): void;
        allocate(arg0: number): void;
        isConverged(): boolean;
        zeroState(): void;
        singleTick(): void;
        rhsAdd(arg0: number, arg1: number): void;
        zeroRHS(): void;
        warmUp(arg0: number): void;
        jacobianAdd(arg0: number, arg1: number, arg2: number): void;
        setPrecision(arg0: number, arg1: number, arg2: number, arg3: number): void;
        hooksChanged(): void;
        stateVector(): $IMatrixAccess;
        rowExchange(arg0: boolean): void;
        rowExchange(): boolean;
        jacobianPrepareForWrite(): void;
        finishJacobianWrite(): void;
        get converged(): boolean;
    }
    export class $IAdmittanceAdder {
    }
    export interface $IAdmittanceAdder {
        add(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IAdmittanceAdder}.
     */
    export type $IAdmittanceAdder_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $IMatrixAccess {
    }
    export interface $IMatrixAccess {
        get(arg0: number, arg1: number): number;
        add(row: number, column: number, value: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        numRows(): number;
        safe_get(row: number, column: number): number;
        safe_set(row: number, column: number, value: number): void;
        numCols(): number;
    }
    export class $IMultiHooks {
    }
    export interface $IMultiHooks {
        prepare(multiTicks: number): void;
        postMicroTick(): void;
    }
    export class $ISolverHook {
    }
    export interface $ISolverHook {
        coupledNodes(): $Collection<$IElectricNode>;
        addResidual(residual: $IResidualAdder_): void;
        startIteration(iteration: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ISolverHook}.
     */
    export type $ISolverHook_ = (() => $Collection_<$IElectricNode>);
}
