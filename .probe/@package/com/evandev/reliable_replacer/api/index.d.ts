
declare module "@package/com/evandev/reliable_replacer/api" {
    export class $IProcessedChunk {
    }
    export interface $IProcessedChunk {
        reliableReplacer$isDirty(): boolean;
        reliableReplacer$hasBeenProcessed(): boolean;
        reliableReplacer$setDirty(arg0: boolean): void;
        reliableReplacer$markProcessed(): void;
        reliableReplacer$resetProcessed(): void;
    }
}
