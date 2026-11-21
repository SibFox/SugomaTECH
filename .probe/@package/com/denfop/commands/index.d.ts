import { $RegisterCommandsEvent } from "@package/net/neoforged/neoforge/event";

declare module "@package/com/denfop/commands" {
    export class $VeinCommand {
        static registerCommands(arg0: $RegisterCommandsEvent): void;
        constructor();
    }
}
