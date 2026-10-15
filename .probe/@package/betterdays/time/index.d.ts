import { $Supplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ServerLevelWrapper } from "@package/betterdays/wrappers";
import { $SleepStatus as $SleepStatus$1 } from "@package/net/minecraft/server/players";
import { $List_ } from "@package/java/util";
import { $Number, $Comparable } from "@package/java/lang";
export * as effects from "@package/betterdays/time/effects";

declare module "@package/betterdays/time" {
    export class $TimeContext {
        getLevel(): $ServerLevelWrapper;
        getCurrentTime(): $Time;
        getTimeDelta(): $Time;
        getTimeService(): $TimeService;
        constructor(arg0: $TimeService, arg1: $Time, arg2: $Time);
        get level(): $ServerLevelWrapper;
        get currentTime(): $Time;
        get timeDelta(): $Time;
        get timeService(): $TimeService;
    }
    export class $TimeService {
        getDayTime(): $Time;
        tick(): void;
        setDayTime(arg0: $Time): $Time;
        getTimeSpeed(arg0: $Time): number;
        broadcastTime(): void;
        managesLevel(arg0: $ServerLevelWrapper): boolean;
        sleepStatus: $SleepStatus;
        static NIGHT_START: $Time;
        level: $ServerLevelWrapper;
        static DAY_START: $Time;
        constructor(arg0: $ServerLevelWrapper);
    }
    export class $Time extends $Number implements $Comparable<$Time> {
        abs(): $Time;
        compareTo(arg0: $Time): number;
        add(arg0: number): $Time;
        add(arg0: $Time): $Time;
        add(arg0: number): $Time;
        mod(arg0: number): $Time;
        getDay(): number;
        negate(): $Time;
        subtract(arg0: number): $Time;
        subtract(arg0: $Time): $Time;
        subtract(arg0: number): $Time;
        divide(arg0: $Time): number;
        divide(arg0: number): number;
        divide(arg0: number): number;
        timeOfDay(): $Time;
        static timeOfDay(arg0: number): number;
        betweenMod(arg0: $Time, arg1: $Time): boolean;
        fractionalValue(): number;
        static crossedMorning(arg0: $Time, arg1: $Time): boolean;
        static DAY_TICKS: number;
        static MORNING: $Time;
        static NOON: $Time;
        static DAY_LENGTH: $Time;
        static MIDNIGHT: $Time;
        static LUNAR_CYCLE_TICKS: number;
        static LUNAR_CYCLE_LENGTH: $Time;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor(arg0: number);
        constructor();
        get day(): number;
    }
    export class $SleepStatus extends $SleepStatus$1 {
        percentage(): number;
        allAwake(): boolean;
        ratio(): number;
        allAsleep(): boolean;
        updatePlayerCounts(arg0: $List_<$ServerPlayer>): void;
        amountActive(): number;
        constructor(arg0: $Supplier_<boolean>);
    }
}
