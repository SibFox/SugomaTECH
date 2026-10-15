import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Mount, $WritableMount } from "@package/dan200/computercraft/api/filesystem";
import { $Map, $Set } from "@package/java/util";
import { $Runnable_, $Object } from "@package/java/lang";

declare module "@package/dan200/computercraft/api/peripheral" {
    export class $IPeripheral {
    }
    export interface $IPeripheral {
        equals(arg0: $IPeripheral): boolean;
        getType(): string;
        getTarget(): $Object;
        attach(arg0: $IComputerAccess): void;
        detach(arg0: $IComputerAccess): void;
        getAdditionalTypes(): $Set<string>;
        get type(): string;
        get target(): $Object;
        get additionalTypes(): $Set<string>;
    }
    export class $WorkMonitor {
    }
    export interface $WorkMonitor {
        shouldWork(): boolean;
        canWork(): boolean;
        trackWork(arg0: number, arg1: $TimeUnit_): void;
        runWork(arg0: $Runnable_): boolean;
    }
    export class $IComputerAccess {
    }
    export interface $IComputerAccess {
        mount(arg0: string, arg1: $Mount): string;
        mount(arg0: string, arg1: $Mount, arg2: string): string;
        unmount(arg0: string): void;
        getID(): number;
        queueEvent(arg0: string, ...arg1: $Object[]): void;
        mountWritable(arg0: string, arg1: $WritableMount, arg2: string): string;
        mountWritable(arg0: string, arg1: $WritableMount): string;
        getAttachmentName(): string;
        getAvailablePeripheral(arg0: string): $IPeripheral;
        getMainThreadMonitor(): $WorkMonitor;
        getAvailablePeripherals(): $Map<string, $IPeripheral>;
        get ID(): number;
        get attachmentName(): string;
        get mainThreadMonitor(): $WorkMonitor;
        get availablePeripherals(): $Map<string, $IPeripheral>;
    }
}
