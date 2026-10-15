import { $ToastComponent, $Toast$Visibility, $Toast } from "@package/net/minecraft/client/gui/components/toasts";
import { $Quest } from "@package/com/denfop/api/guidebook";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object } from "@package/java/lang";

declare module "@package/com/denfop/toast" {
    export class $GuideToast implements $Toast {
        render(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number): $Toast$Visibility;
        slotCount(): number;
        width(): number;
        height(): number;
        getToken(): $Object;
        constructor(arg0: $Quest);
        get token(): $Object;
    }
}
