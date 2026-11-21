import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Style, $TextColor_, $HoverEvent, $ClickEvent_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Renderable, $MultilineTextField } from "@package/net/minecraft/client/gui/components";
import { $Map, $List } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/dev/terminalmc/chatnotify/mixin/accessor" {
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        chatnotify$setOverlayMessageTime(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiAccessor}.
     */
    export type $GuiAccessor_ = ((arg0: number) => void);
    export class $MultilineTextFieldAccessor {
    }
    export interface $MultilineTextFieldAccessor {
        chatnotify$setSelectCursor(arg0: number): void;
        chatnotify$getCursor(): number;
        chatnotify$setWidth(arg0: number): void;
        chatnotify$setCursor(arg0: number): void;
    }
    export class $KeyAccessor {
        static chatnotify$getNameMap(): $Map<string, $InputConstants$Key>;
    }
    export interface $KeyAccessor {
    }
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        chatnotify$getChildren(): $List<$GuiEventListener>;
        chatnotify$getRenderables(): $List<$Renderable>;
        chatnotify$getNarratables(): $List<$NarratableEntry>;
    }
    export class $TextColorAccessor {
    }
    export interface $TextColorAccessor {
        chatnotify$formatValue(): string;
    }
    /**
     * Values that may be interpreted as {@link $TextColorAccessor}.
     */
    export type $TextColorAccessor_ = (() => string);
    export class $StyleAccessor {
        static chatnotify$new(arg0: $TextColor_, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ClickEvent_, arg7: $HoverEvent, arg8: string, arg9: $ResourceLocation_): $Style;
    }
    export interface $StyleAccessor {
    }
    export class $MultiLineEditBoxAccessor {
    }
    export interface $MultiLineEditBoxAccessor {
        chatnotify$getTextField(): $MultilineTextField;
    }
    /**
     * Values that may be interpreted as {@link $MultiLineEditBoxAccessor}.
     */
    export type $MultiLineEditBoxAccessor_ = (() => $MultilineTextField);
}
