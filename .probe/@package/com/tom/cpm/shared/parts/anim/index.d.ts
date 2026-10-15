import { $IPose_, $IAnimation, $Animation } from "@package/com/tom/cpm/shared/animation";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $Map, $List } from "@package/java/util";
export * as menu from "@package/com/tom/cpm/shared/parts/anim/menu";

declare module "@package/com/tom/cpm/shared/parts/anim" {
    export class $ParameterDetails {
        write(arg0: $IOHelper): void;
        static parse(arg0: $IOHelper, arg1: $AnimLoaderState): void;
        createSyncParams(): number[];
        getDefaultParam(arg0: number): number;
        static DEFAULT: $ParameterDetails;
        constructor(arg0: number[], arg1: number[]);
        constructor(arg0: number, arg1: number);
    }
    export class $LegacyAnimationParser {
        register(): void;
        addPose(arg0: $IPose_, arg1: $Animation, arg2: boolean): void;
        addGesture(arg0: $LegacyAnimationParser$Gesture, arg1: number): void;
        addCustomPose(arg0: $LegacyAnimationParser$Pose, arg1: number): void;
        gestures: $Map<string, $List<$IAnimation>>;
        constructor(arg0: $ModelDefinition);
    }
}
