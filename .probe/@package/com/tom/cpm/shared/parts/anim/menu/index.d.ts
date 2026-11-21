import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $AnimLoaderState } from "@package/com/tom/cpm/shared/parts/anim";
import { $Set } from "@package/java/util";
import { $ConfigEntry } from "@package/com/tom/cpl/config";

declare module "@package/com/tom/cpm/shared/parts/anim/menu" {
    export class $AbstractGestureButtonData {
        getName(): string;
        write(arg0: $IOHelper): void;
        setName(arg0: string): void;
        static parse(arg0: $IOHelper, arg1: $AnimLoaderState): void;
        getType(): $GestureButtonType;
        getDefinition(): $ModelDefinition;
        loadFrom(arg0: $ConfigEntry): void;
        onRegistered(): void;
        setDef(arg0: $ModelDefinition): void;
        canShow(): boolean;
        onKeybind(arg0: string, arg1: boolean, arg2: boolean): void;
        storeTo(arg0: $ConfigEntry): void;
        isProperty(): boolean;
        getCommandActions(): $Set<$CommandAction>;
        getKeybindId(): string;
        constructor();
        get type(): $GestureButtonType;
        get definition(): $ModelDefinition;
        set def(value: $ModelDefinition);
        get property(): boolean;
        get commandActions(): $Set<$CommandAction>;
        get keybindId(): string;
    }
    export class $CustomPoseGestureButtonData extends $AbstractGestureButtonData$AbstractCommandTriggerableData {
        static pose(): $CustomPoseGestureButtonData;
        activate(): void;
        static gesture(): $CustomPoseGestureButtonData;
        isPose(): boolean;
        static CONDITIONAL: number;
        gid: number;
        hidden: boolean;
        static LAYER_CTRL: number;
        static PROPERTY: number;
        id: number;
        static COMMAND_CTRL: number;
        static HIDDEN: number;
        gestureTimeout: number;
        command: boolean;
        layerCtrl: boolean;
        constructor(arg0: boolean);
    }
    export class $CommandAction$ServerCommandAction {
    }
    export interface $CommandAction$ServerCommandAction {
        getName(): string;
        getValue(): number;
        isCommandControlled(): boolean;
        get name(): string;
        get value(): number;
        get commandControlled(): boolean;
    }
    export class $CommandAction {
        static serialize(arg0: $CommandAction): $NBTTagCompound;
    }
    export interface $CommandAction {
        getName(): string;
        getValue(): number;
        write(arg0: $NBTTagCompound): void;
        setValue(arg0: number): void;
        getType(): $CommandAction$ActionType;
        getMaxValue(): number;
        isCommandControlled(): boolean;
        get name(): string;
        get type(): $CommandAction$ActionType;
        get maxValue(): number;
        get commandControlled(): boolean;
    }
}
