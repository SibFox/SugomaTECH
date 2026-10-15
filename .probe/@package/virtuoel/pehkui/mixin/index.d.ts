import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Predicate_ } from "@package/java/util/function";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $DataAccessor } from "@package/net/minecraft/server/commands/data";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EntitySelectorParser } from "@package/net/minecraft/commands/arguments/selector";
import { $EntitySelectorOptions$Modifier_ } from "@package/net/minecraft/commands/arguments/selector/options";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
export * as step_height from "@package/virtuoel/pehkui/mixin/step_height";
export * as reach from "@package/virtuoel/pehkui/mixin/reach";

declare module "@package/virtuoel/pehkui/mixin" {
    export class $OperationArgumentTypeAccessor {
        static getInvalidOperationException(): $SimpleCommandExceptionType;
        static getDivisionZeroException(): $SimpleCommandExceptionType;
        static get invalidOperationException(): $SimpleCommandExceptionType;
        static get divisionZeroException(): $SimpleCommandExceptionType;
    }
    export interface $OperationArgumentTypeAccessor {
    }
    export class $EntitySelectorOptionsInvoker {
        static callRegister(id: string, handler: $EntitySelectorOptions$Modifier_, condition: $Predicate_<$EntitySelectorParser>, description: $Component_): void;
    }
    export interface $EntitySelectorOptionsInvoker {
    }
    export class $DataCommandInvoker$Get {
        static callGetData(source: $CommandSourceStack, object: $DataAccessor): number;
    }
    export interface $DataCommandInvoker$Get {
    }
    export class $DataCommandInvoker$Scaled {
        static callGetNumeric(source: $CommandSourceStack, object: $DataAccessor, path: $NbtPathArgument$NbtPath, scale: number): number;
    }
    export interface $DataCommandInvoker$Scaled {
    }
    export class $DataCommandInvoker$Path {
        static callGetData(source: $CommandSourceStack, object: $DataAccessor, path: $NbtPathArgument$NbtPath): number;
    }
    export interface $DataCommandInvoker$Path {
    }
}
