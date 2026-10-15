import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List_, $List } from "@package/java/util";
import { $MobEffectWidgetContext_, $MobEffectWidgetContext } from "@package/fuzs/stylisheffects/api/v1/client";

declare module "@package/fuzs/stylisheffects/neoforge/api/v1/client" {
    export class $NeoForgeMobEffectWidgetEvent$MouseClicked extends $NeoForgeMobEffectWidgetEvent implements $ICancellableEvent {
        getScreen(): $Screen;
        getMouseX(): number;
        getMouseY(): number;
        getButton(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(context: $MobEffectWidgetContext_, screen: $Screen, mouseX: number, mouseY: number, button: number);
        get screen(): $Screen;
        get mouseX(): number;
        get mouseY(): number;
        get button(): number;
    }
    export class $NeoForgeMobEffectWidgetEvent$EffectTooltip extends $NeoForgeMobEffectWidgetEvent {
        getTooltipLines(): $List<$Component>;
        getTooltipFlag(): $TooltipFlag;
        constructor(context: $MobEffectWidgetContext_, tooltipLines: $List_<$Component_>, tooltipFlag: $TooltipFlag);
        get tooltipLines(): $List<$Component>;
        get tooltipFlag(): $TooltipFlag;
    }
    export class $NeoForgeMobEffectWidgetEvent extends $Event {
        getContext(): $MobEffectWidgetContext;
        constructor(context: $MobEffectWidgetContext_);
        get context(): $MobEffectWidgetContext;
    }
}
