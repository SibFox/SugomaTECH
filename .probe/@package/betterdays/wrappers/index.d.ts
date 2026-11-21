import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SleepStatus } from "@package/betterdays/time";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";

declare module "@package/betterdays/wrappers" {
    export class $ServerLevelWrapper extends $Wrapper<$ServerLevel> {
        wakeUpAllPlayers(): void;
        tickBlockEntities(): void;
        weatherCycleEnabled(): boolean;
        setRandomTickSpeed(arg0: number): void;
        static isDerived(arg0: $LevelAccessor): boolean;
        static isServerLevel(arg0: $LevelAccessor): boolean;
        setSleepStatus(arg0: $SleepStatus): void;
        weatherRuleEnabled(): boolean;
        stopWeather(): void;
        daylightRuleEnabled(): boolean;
        levelData: $ServerLevelData;
        constructor(arg0: $LevelAccessor);
        set randomTickSpeed(value: number);
        set sleepStatus(value: $SleepStatus);
    }
    export class $Wrapper<T> {
        get(): T;
        constructor(arg0: T);
    }
}
