import { $Renderer } from "@package/com/qendolin/betterclouds/clouds";

declare module "@package/com/qendolin/betterclouds/duck" {
    export class $TabNavigationWidgetExtensionDuck {
    }
    export interface $TabNavigationWidgetExtensionDuck {
        betterclouds$setRenderBackground(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $TabNavigationWidgetExtensionDuck}.
     */
    export type $TabNavigationWidgetExtensionDuck_ = ((arg0: boolean) => void);
    export class $BiomeAccessDuck {
    }
    export interface $BiomeAccessDuck {
        better_clouds$biomeSeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeAccessDuck}.
     */
    export type $BiomeAccessDuck_ = (() => number);
    export class $WorldRendererDuck {
    }
    export interface $WorldRendererDuck {
        betterclouds$getRenderer(): $Renderer;
    }
    /**
     * Values that may be interpreted as {@link $WorldRendererDuck}.
     */
    export type $WorldRendererDuck_ = (() => $Renderer);
}
