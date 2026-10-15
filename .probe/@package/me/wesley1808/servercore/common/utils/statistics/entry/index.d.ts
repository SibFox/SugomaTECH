import { $Comparable } from "@package/java/lang";

declare module "@package/me/wesley1808/servercore/common/utils/statistics/entry" {
    export class $StatisticEntry<T> implements $Comparable<$StatisticEntry<T>> {
        compareTo(other: $StatisticEntry<$StatisticEntry<T>>): number;
        increment(value: $StatisticEntry<T>): void;
        formatValue(): string;
        constructor();
    }
}
