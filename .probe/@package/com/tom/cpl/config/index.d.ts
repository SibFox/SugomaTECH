import { $Map_, $Set } from "@package/java/util";
import { $Runnable_, $Object } from "@package/java/lang";

declare module "@package/com/tom/cpl/config" {
    export class $ConfigEntry {
        getBoolean(arg0: string, arg1: boolean): boolean;
        getInt(arg0: string, arg1: number): number;
        getFloat(arg0: string, arg1: number): number;
        clear(): void;
        keySet(): $Set<string>;
        setBoolean(arg0: string, arg1: boolean): void;
        setInt(arg0: string, arg1: number): void;
        setFloat(arg0: string, arg1: number): void;
        getEntry(arg0: string): $ConfigEntry;
        getString(arg0: string, arg1: string): string;
        setString(arg0: string, arg1: string): void;
        getSetInt(arg0: string, arg1: number): number;
        clearValue(arg0: string): void;
        getSetBoolean(arg0: string, arg1: boolean): boolean;
        getSetString(arg0: string, arg1: string): string;
        getEntryList(arg0: string): $ConfigEntry$ConfigEntryList;
        getSetFloat(arg0: string, arg1: number): number;
        hasEntry(arg0: string): boolean;
        constructor(arg0: $Map_<string, $Object>, arg1: $Runnable_);
    }
}
