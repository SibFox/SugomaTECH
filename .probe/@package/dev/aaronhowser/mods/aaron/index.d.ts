import { $ScheduledTaskHandler } from "@package/dev/aaronhowser/mods/aaron/scheduler";
import { $LevelActor } from "@package/dev/aaronhowser/mods/aaron/actor";
import { $List } from "@package/java/util";
export * as actor from "@package/dev/aaronhowser/mods/aaron/actor";
export * as scheduler from "@package/dev/aaronhowser/mods/aaron/scheduler";

declare module "@package/dev/aaronhowser/mods/aaron" {
    export class $LevelActorHolder {
    }
    export interface $LevelActorHolder {
        aaron$getLevelActors(): $List<$LevelActor>;
    }
    export class $SchedulerHolder {
    }
    export interface $SchedulerHolder {
        aaron$getScheduledTaskHandler(): $ScheduledTaskHandler;
        aaron$getScheduledTaskHandlerRaw(): $ScheduledTaskHandler;
    }
}
