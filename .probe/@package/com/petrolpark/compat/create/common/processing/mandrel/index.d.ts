import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as animation from "@package/com/petrolpark/compat/create/common/processing/mandrel/animation";

declare module "@package/com/petrolpark/compat/create/common/processing/mandrel" {
    export class $MandrelBlockEntity extends $KineticBlockEntity {
        process(): void;
        spawnParticles(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        startProcessing(): void;
        resetProcessing(): void;
        level: $Level;
        inputInv: $ItemStackHandler;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        sourceIndex: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        running: boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        timer: number;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        capability: $IItemHandler;
        updateSpeed: boolean;
        outputInv: $ItemStackHandler;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
