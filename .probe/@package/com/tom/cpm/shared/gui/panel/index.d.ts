import { $IGui } from "@package/com/tom/cpl/gui";
import { $Panel } from "@package/com/tom/cpl/gui/elements";
import { $PlayerSpecificConfigKey$KeyGroup, $PlayerSpecificConfigKey$KeyGroup_ } from "@package/com/tom/cpm/shared/config";
import { $ConfigEntry } from "@package/com/tom/cpl/config";

declare module "@package/com/tom/cpm/shared/gui/panel" {
    export class $SafetyPanel extends $Panel {
        getConfig(): $ConfigEntry;
        getKeyGroup(): $PlayerSpecificConfigKey$KeyGroup;
        mainConfig: $ConfigEntry;
        uuid: string;
        constructor(arg0: $IGui, arg1: $ConfigEntry, arg2: number, arg3: $PlayerSpecificConfigKey$KeyGroup_, arg4: string, arg5: $ConfigEntry);
        get config(): $ConfigEntry;
        get keyGroup(): $PlayerSpecificConfigKey$KeyGroup;
    }
}
