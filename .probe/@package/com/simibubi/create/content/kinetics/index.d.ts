import { $Level_ } from "@package/net/minecraft/world/level";
import { $KineticNetworkAccessor } from "@package/com/hlysine/create_connected/mixin/kineticbattery";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as chainConveyor from "@package/com/simibubi/create/content/kinetics/chainConveyor";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $KineticNetwork implements $KineticNetworkAccessor {
        getSize(): number;
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        sync(): void;
        wrapOperation$kbn000$petrolpark$checkCompositeKBEsMatchPos$mixinextras$bridge$25(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $LocalRef<any>): $BlockEntity;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        updateNetwork(): void;
        calculateCapacity(): number;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        wrapOperation$kbn000$petrolpark$checkCompositeKBEsMatchPos(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $KineticBlockEntity): $BlockEntity;
        redirect$fki000$simulated$extraKineticsStress(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$fki000$simulated$extraKineticsCapacity(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        updateCapacity(): void;
        calculateStress(): number;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        getUnloadedStress(): number;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
        get unloadedStress(): number;
    }
}
