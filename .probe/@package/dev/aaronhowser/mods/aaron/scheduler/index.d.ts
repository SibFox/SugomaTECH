import { $LongSupplier_, $LongSupplier } from "@package/java/util/function";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $LinkedList, $List } from "@package/java/util";

declare module "@package/dev/aaronhowser/mods/aaron/scheduler" {
    export class $ScheduledTask {
        getTicksRunning(): $MutableInt;
        getHandler(): $ScheduledTaskHandler;
        getTask(): $RepeatingTask;
        tick(): boolean;
        getAt(): number;
        constructor(arg0: $ScheduledTaskHandler, arg1: $RepeatingTask_, arg2: number);
        get ticksRunning(): $MutableInt;
        get handler(): $ScheduledTaskHandler;
        get task(): $RepeatingTask;
        get at(): number;
    }
    export class $ScheduledTaskHandler {
        run(arg0: number, arg1: $RepeatingTask_): void;
        tick(): void;
        getTasks(): $LinkedList<$ScheduledTask>;
        getLevelTime(): $LongSupplier;
        getNewTasks(): $List<$ScheduledTask>;
        constructor(arg0: $LongSupplier_);
        get tasks(): $LinkedList<$ScheduledTask>;
        get levelTime(): $LongSupplier;
        get newTasks(): $List<$ScheduledTask>;
    }
    export class $RepeatingTask {
    }
    export interface $RepeatingTask {
        run(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RepeatingTask}.
     */
    export type $RepeatingTask_ = ((arg0: number) => boolean);
}
