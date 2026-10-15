import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $UpgradeType, $UpgradeBase, $UpgradeData_, $UpgradeData } from "@package/dan200/computercraft/api/upgrades";
import { $BlockPos, $BlockPos_, $Direction_, $Registry, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Enum, $Object } from "@package/java/lang";
import { $MethodResult } from "@package/dan200/computercraft/api/lua";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";

declare module "@package/dan200/computercraft/api/turtle" {
    export class $TurtleCommand {
    }
    export interface $TurtleCommand {
        execute(arg0: $ITurtleAccess): $TurtleCommandResult;
    }
    /**
     * Values that may be interpreted as {@link $TurtleCommand}.
     */
    export type $TurtleCommand_ = ((arg0: $ITurtleAccess) => $TurtleCommandResult);
    export class $TurtleVerb extends $Enum<$TurtleVerb> {
        static values(): $TurtleVerb[];
        static valueOf(arg0: string): $TurtleVerb;
        static DIG: $TurtleVerb;
        static ATTACK: $TurtleVerb;
    }
    /**
     * Values that may be interpreted as {@link $TurtleVerb}.
     */
    export type $TurtleVerb_ = "dig" | "attack";
    export class $ITurtleAccess {
    }
    export interface $ITurtleAccess {
        getLevel(): $Level;
        getPosition(): $BlockPos;
        isRemoved(): boolean;
        getDirection(): $Direction;
        getInventory(): $Container;
        teleportTo(arg0: $Level_, arg1: $BlockPos_): boolean;
        consumeFuel(arg0: number): boolean;
        setDirection(arg0: $Direction_): void;
        playAnimation(arg0: $TurtleAnimation_): void;
        getUpgradeData(arg0: $TurtleSide_): $DataComponentPatch;
        getUpgrade(arg0: $TurtleSide_): $ITurtleUpgrade;
        executeCommand(arg0: $TurtleCommand_): $MethodResult;
        setSelectedSlot(arg0: number): void;
        getUpgradeWithData(arg0: $TurtleSide_): $UpgradeData<$ITurtleUpgrade>;
        getSelectedSlot(): number;
        setColour(arg0: number): void;
        addFuel(arg0: number): void;
        setUpgrade(arg0: $TurtleSide_, arg1: $UpgradeData_<$ITurtleUpgrade_>): void;
        getPeripheral(arg0: $TurtleSide_): $IPeripheral;
        getColour(): number;
        getFuelLevel(): number;
        getFuelLimit(): number;
        setFuelLevel(arg0: number): void;
        setUpgradeData(arg0: $TurtleSide_, arg1: $DataComponentPatch_): void;
        getOwningPlayer(): $GameProfile;
        isFuelNeeded(): boolean;
        get level(): $Level;
        get position(): $BlockPos;
        get removed(): boolean;
        get inventory(): $Container;
        get fuelLimit(): number;
        get owningPlayer(): $GameProfile;
        get fuelNeeded(): boolean;
    }
    export interface $ITurtleUpgrade extends RegistryMarked<RegistryTypes.ComputercraftTurtleUpgradeTag, RegistryTypes.ComputercraftTurtleUpgrade> {}
    export class $TurtleSide extends $Enum<$TurtleSide> {
        static values(): $TurtleSide[];
        static valueOf(arg0: string): $TurtleSide;
        static LEFT: $TurtleSide;
        static RIGHT: $TurtleSide;
    }
    /**
     * Values that may be interpreted as {@link $TurtleSide}.
     */
    export type $TurtleSide_ = "left" | "right";
    export class $ITurtleUpgrade {
        static typeRegistry(): $ResourceKey<$Registry<$UpgradeType<$ITurtleUpgrade>>>;
        static createKey(arg0: $ResourceLocation_): $ResourceKey<$ITurtleUpgrade>;
        static REGISTRY: $ResourceKey<$Registry<$ITurtleUpgrade>>;
    }
    export interface $ITurtleUpgrade extends $UpgradeBase {
        update(arg0: $ITurtleAccess, arg1: $TurtleSide_): void;
        getType(): $UpgradeType<$ITurtleUpgrade>;
        useTool(arg0: $ITurtleAccess, arg1: $TurtleSide_, arg2: $TurtleVerb_, arg3: $Direction_): $TurtleCommandResult;
        getUpgradeType(): $TurtleUpgradeType;
        createPeripheral(arg0: $ITurtleAccess, arg1: $TurtleSide_): $IPeripheral;
        getPersistedData(arg0: $DataComponentPatch_): $DataComponentPatch;
        get type(): $UpgradeType<$ITurtleUpgrade>;
        get upgradeType(): $TurtleUpgradeType;
    }
    /**
     * Values that may be interpreted as {@link $ITurtleUpgrade}.
     */
    export type $ITurtleUpgrade_ = RegistryTypes.ComputercraftTurtleUpgrade;
    export class $TurtleCommandResult {
        static failure(): $TurtleCommandResult;
        static failure(arg0: string): $TurtleCommandResult;
        static success(): $TurtleCommandResult;
        static success(arg0: $Object[]): $TurtleCommandResult;
        isSuccess(): boolean;
        getErrorMessage(): string;
        getResults(): $Object[];
        get errorMessage(): string;
        get results(): $Object[];
    }
    export class $TurtleUpgradeType extends $Enum<$TurtleUpgradeType> {
        static values(): $TurtleUpgradeType[];
        static valueOf(arg0: string): $TurtleUpgradeType;
        isTool(): boolean;
        isPeripheral(): boolean;
        static PERIPHERAL: $TurtleUpgradeType;
        static BOTH: $TurtleUpgradeType;
        static TOOL: $TurtleUpgradeType;
        get tool(): boolean;
        get peripheral(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TurtleUpgradeType}.
     */
    export type $TurtleUpgradeType_ = "tool" | "peripheral" | "both";
    export class $TurtleAnimation extends $Enum<$TurtleAnimation> {
        static values(): $TurtleAnimation[];
        static valueOf(arg0: string): $TurtleAnimation;
        static TURN_RIGHT: $TurtleAnimation;
        static SWING_LEFT_TOOL: $TurtleAnimation;
        static MOVE_UP: $TurtleAnimation;
        static MOVE_DOWN: $TurtleAnimation;
        static TURN_LEFT: $TurtleAnimation;
        static MOVE_BACK: $TurtleAnimation;
        static MOVE_FORWARD: $TurtleAnimation;
        static NONE: $TurtleAnimation;
        static SWING_RIGHT_TOOL: $TurtleAnimation;
        static WAIT: $TurtleAnimation;
        static SHORT_WAIT: $TurtleAnimation;
    }
    /**
     * Values that may be interpreted as {@link $TurtleAnimation}.
     */
    export type $TurtleAnimation_ = "none" | "move_forward" | "move_back" | "move_up" | "move_down" | "turn_left" | "turn_right" | "swing_left_tool" | "swing_right_tool" | "wait" | "short_wait";
}
