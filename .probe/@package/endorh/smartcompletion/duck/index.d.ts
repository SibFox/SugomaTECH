import { $EditBox } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AggregatedSuggestions_, $AggregatedSuggestions } from "@package/endorh/smartcompletion";

declare module "@package/endorh/smartcompletion/duck" {
    export class $SmartCommandSuggestions {
    }
    export interface $SmartCommandSuggestions {
        getInput(): $EditBox;
        getMinecraft(): $Minecraft;
        enforceShowSuggestions(): void;
        getFont(): $Font;
        smartcompletion$getLastAggregatedSuggestions(): $AggregatedSuggestions;
        smartcompletion$updateAggregatedSuggestions(arg0: $AggregatedSuggestions_, arg1: boolean): void;
        smartcompletion$enforceShowSuggestions(): void;
        smartcompletion$getSuggestionLineLimit(): number;
        getLastAggregatedSuggestions(): $AggregatedSuggestions;
        smartcompletion$setKeepSuggestions(arg0: boolean): void;
        smartcompletion$isAnchorToBottom(): boolean;
        smartcompletion$isKeepSuggestions(): boolean;
        smartcompletion$hasUnparsedInput(): boolean;
        smartcompletion$getMinecraft(): $Minecraft;
        updateAggregatedSuggestions(suggestions: $AggregatedSuggestions_): void;
        isAnchorToBottom(): boolean;
        setKeepSuggestions(keepSuggestions: boolean): void;
        isKeepSuggestions(): boolean;
        hasUnparsedInput(): boolean;
        smartcompletion$getInput(): $EditBox;
        smartcompletion$getFont(): $Font;
        getSuggestionLineLimit(): number;
        get input(): $EditBox;
        get minecraft(): $Minecraft;
        get font(): $Font;
        get lastAggregatedSuggestions(): $AggregatedSuggestions;
        get anchorToBottom(): boolean;
        get suggestionLineLimit(): number;
    }
}
