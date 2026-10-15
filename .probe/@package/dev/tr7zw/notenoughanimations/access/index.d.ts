import { $DataHolder } from "@package/dev/tr7zw/notenoughanimations/versionless/animations";
import { $Supplier_ } from "@package/java/util/function";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pose, $Pose_ } from "@package/net/minecraft/world/entity";

declare module "@package/dev/tr7zw/notenoughanimations/access" {
    export class $PlayerData {
    }
    export interface $PlayerData {
        getData<T>(arg0: $DataHolder<T>, arg1: $Supplier_<T>): T;
        isUpdated(arg0: number): number;
        setUpdated(arg0: number): void;
        isDisableBodyRotation(): boolean;
        setDisableBodyRotation(arg0: boolean): void;
        getSideSword(): $ItemStack;
        getLastHeldItems(): $ItemStack[];
        setSideSword(arg0: $ItemStack_): void;
        isRotateBodyToHead(): boolean;
        getLastRotations(): number[];
        getPoseOverwrite(): $Pose;
        setPoseOverwrite(arg0: $Pose_): void;
        getItemSwapAnimationTimer(): number;
        setLastAnimationSwapTick(arg0: number): void;
        setRotateBodyToHead(arg0: boolean): void;
        setItemSwapAnimationTimer(arg0: number): void;
        getLastAnimationSwapTick(): number;
        get lastHeldItems(): $ItemStack[];
        get lastRotations(): number[];
    }
}
