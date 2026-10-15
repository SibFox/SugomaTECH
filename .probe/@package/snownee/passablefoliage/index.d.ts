export * as mixin from "@package/snownee/passablefoliage/mixin";

declare module "@package/snownee/passablefoliage" {
    export class $PassableFoliageBlock {
    }
    export interface $PassableFoliageBlock {
        pfoliage$setPassable(arg0: boolean): void;
        pfoliage$isPassable(): boolean;
    }
}
