import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Suggestions, $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringRange } from "@package/com/mojang/brigadier/context";
import { $Collection_, $List, $List_ } from "@package/java/util";
import { $Comparable, $Record } from "@package/java/lang";
export * as duck from "@package/endorh/smartcompletion/duck";

declare module "@package/endorh/smartcompletion" {
    export class $MultiMatch extends $Record implements $Comparable<$MultiMatch> {
        matchRatio(): number;
        static scoreRatio(portion: number): number;
        priority(): number;
        size(): number;
        compareTo(other: $MultiMatch_): number;
        isEmpty(): boolean;
        split(): $WordSplit;
        static of(split: $WordSplit_, matches: $Collection_<string>, indices: $IntList, partIndices: $IntList, repeats: $List_<$IntList>, priority: number): $MultiMatch;
        static empty(): $MultiMatch;
        parts(): string[];
        word(): string;
        indices(): number[];
        totalLength(): number;
        isWeak(): boolean;
        static whole(string: string, priority: number): $MultiMatch;
        static whole(string: string): $MultiMatch;
        repeats(): number[][];
        withPriority(priority: number): $MultiMatch;
        unprefixedMatchRatio(): number;
        isCompletelyMatched(): boolean;
        unprefixedWord(): string;
        hyperVolume(): number;
        totalRepeats(): number;
        partIndices(): number[];
        letterLength(): number;
        letterMatchRatio(): number;
        compareRatio(a: number, b: number): number;
        constructor(split: $WordSplit_, parts: string[], indices: number[], partIndices: number[], repeats: number[][], priority: number);
        get weak(): boolean;
        get completelyMatched(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MultiMatch}.
     */
    export type $MultiMatch_ = { repeats?: number[][], partIndices?: number[], priority?: number, parts?: string[], split?: $WordSplit_, indices?: number[],  } | [repeats?: number[][], partIndices?: number[], priority?: number, parts?: string[], split?: $WordSplit_, indices?: number[], ];
    export class $AggregatedSuggestions extends $Record {
        isEmpty(): boolean;
        range(): $StringRange;
        isEquivalent(other: $AggregatedSuggestions_): boolean;
        wordBlindSuggestions(): $Suggestions;
        argBlindSuggestions(): $Suggestions;
        sortedSuggestionMatches(): $List<$MultiMatch>;
        informedSuggestions(): $Suggestions;
        dummyEmptyEquivalentSuggestions(): $CompletableFuture<$Suggestions>;
        argQuery(): string;
        hasWordBlindMatches(): boolean;
        sortedSuggestions(): $List<$Suggestion>;
        hasArgBlindMatches(): boolean;
        hasWeakMatches(): boolean;
        constructor(argQuery: string, range: $StringRange, sortedSuggestions: $List_<$Suggestion>, sortedSuggestionMatches: $List_<$MultiMatch_>, argBlindSuggestions: $Suggestions, wordBlindSuggestions: $Suggestions, informedSuggestions: $Suggestions, hasArgBlindMatches: boolean, hasWordBlindMatches: boolean, hasWeakMatches: boolean);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AggregatedSuggestions}.
     */
    export type $AggregatedSuggestions_ = { argQuery?: string, argBlindSuggestions?: $Suggestions, wordBlindSuggestions?: $Suggestions, hasWordBlindMatches?: boolean, range?: $StringRange, informedSuggestions?: $Suggestions, sortedSuggestionMatches?: $List_<$MultiMatch_>, hasWeakMatches?: boolean, hasArgBlindMatches?: boolean, sortedSuggestions?: $List_<$Suggestion>,  } | [argQuery?: string, argBlindSuggestions?: $Suggestions, wordBlindSuggestions?: $Suggestions, hasWordBlindMatches?: boolean, range?: $StringRange, informedSuggestions?: $Suggestions, sortedSuggestionMatches?: $List_<$MultiMatch_>, hasWeakMatches?: boolean, hasArgBlindMatches?: boolean, sortedSuggestions?: $List_<$Suggestion>, ];
    export class $WordSplit extends $Record {
        size(): number;
        static of(string: string, words: string[], indices: number[]): $WordSplit;
        static of(string: string, words: $Collection_<string>, indices: $IntList): $WordSplit;
        string(): string;
        words(): string[];
        indices(): number[];
        static whole(string: string): $WordSplit;
        constructor(string: string, words: string[], indices: number[]);
    }
    /**
     * Values that may be interpreted as {@link $WordSplit}.
     */
    export type $WordSplit_ = { string?: string, words?: string[], indices?: number[],  } | [string?: string, words?: string[], indices?: number[], ];
}
