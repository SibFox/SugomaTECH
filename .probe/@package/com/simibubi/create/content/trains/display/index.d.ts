import { $Level } from "@package/net/minecraft/world/level";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $MutableComponent, $Component_, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $RandomSource } from "@package/net/minecraft/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Comparable } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/trains/display" {
    export class $FlapDisplaySection {
        getSize(): number;
        update(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $FlapDisplaySection;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        refresh(arg0: boolean): void;
        setText(arg0: $Component_): void;
        tick(arg0: boolean, arg1: $RandomSource): number;
        getText(): $Component;
        wideFlaps(): $FlapDisplaySection;
        rightAligned(): $FlapDisplaySection;
        renderCharsIndividually(): boolean;
        static getFlapCycle(arg0: string): string[];
        static WIDE_MONOSPACE: number;
        static MONOSPACE: number;
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean);
        get size(): number;
    }
    export class $GlobalTrainDisplayData$TrainDeparturePrediction implements $Comparable<$GlobalTrainDisplayData$TrainDeparturePrediction> {
        compareTo(arg0: $GlobalTrainDisplayData$TrainDeparturePrediction): number;
        scheduleTitle: $MutableComponent;
        ticks: number;
        destination: string;
        train: $Train;
        constructor(arg0: $Train, arg1: number, arg2: $MutableComponent_, arg3: string);
    }
    export class $FlapDisplayBlockEntity extends $KineticBlockEntity {
        setGlowing(arg0: number): void;
        getLines(): $List<$FlapDisplayLayout>;
        getController(): $FlapDisplayBlockEntity;
        initDefaultSections(): void;
        updateControllerStatus(): void;
        getDirection(): $Direction;
        getLineColor(arg0: number): number;
        getMaxCharCount(): number;
        getMaxCharCount(arg0: number): number;
        setColour(arg0: number, arg1: $DyeColor_): void;
        applyTextManually(arg0: number, arg1: $Component_): void;
        isLineGlowing(arg0: number): boolean;
        getLineIndexAt(arg0: number): number;
        glowingLines: boolean[];
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        ySize: number;
        source: $BlockPos;
        sourceIndex: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isController: boolean;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        colour: $DyeColor[];
        manualLines: boolean[];
        isRunning: boolean;
        updateSpeed: boolean;
        xSize: number;
        lines: $List<$FlapDisplayLayout>;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set glowing(value: number);
        get controller(): $FlapDisplayBlockEntity;
        get direction(): $Direction;
    }
    export class $FlapDisplayLayout {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        configure(arg0: string, arg1: $List_<$FlapDisplaySection>): void;
        getSections(): $List<$FlapDisplaySection>;
        loadDefault(arg0: number): void;
        isLayout(arg0: string): boolean;
        constructor(arg0: number);
        get sections(): $List<$FlapDisplaySection>;
    }
}
