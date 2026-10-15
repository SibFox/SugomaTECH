import { $List } from "@package/java/util";

declare module "@package/com/audiolayer/kubejs" {
    export class $AudiolayerJSWrapper {
        stop(): void;
        stop(arg0: string): void;
        isLoaded(arg0: string): boolean;
        reload(): void;
        play(arg0: string): void;
        play(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string): void;
        play(arg0: string, arg1: number, arg2: number, arg3: number): void;
        listSounds(): $List<string>;
        constructor();
    }
}
