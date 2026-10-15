import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/immersive_aircraft/mixin/client" {
    export class $KeyMappingAccessorMixin {
    }
    export interface $KeyMappingAccessorMixin {
        getKey(): $InputConstants$Key;
        setClickCount(arg0: number): void;
        getClickCount(): number;
        get key(): $InputConstants$Key;
    }
}
