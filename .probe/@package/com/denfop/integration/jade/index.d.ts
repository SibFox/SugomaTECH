import { $Level_ } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $IElement } from "@package/snownee/jade/api/ui";
import { $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockAccessor, $IBlockComponentProvider, $IWailaPlugin, $IWailaClientRegistration, $ITooltip, $IServerDataProvider, $IWailaCommonRegistration } from "@package/snownee/jade/api";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object } from "@package/java/lang";
import { $IPluginConfig } from "@package/snownee/jade/api/config";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/denfop/integration/jade" {
    export class $Progress {
        getPrefix(): string;
        getG(): number;
        getB(): number;
        getSuffix(): string;
        getProgress(): number;
        getMax(): number;
        getR(): number;
        static intToRgb(arg0: number): number[];
        constructor(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number);
        constructor(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: string);
        constructor(arg0: number, arg1: number, arg2: string, arg3: number);
        constructor(arg0: number, arg1: number, arg2: string, arg3: number, arg4: string);
        get prefix(): string;
        get g(): number;
        get b(): number;
        get suffix(): string;
        get progress(): number;
        get max(): number;
        get r(): number;
    }
    export class $DepositsComponentProvider implements $IBlockComponentProvider {
        isRequired(): boolean;
        getUid(): $ResourceLocation;
        appendTooltip(arg0: $ITooltip, arg1: $BlockAccessor, arg2: $IPluginConfig): void;
        getIcon(arg0: $BlockAccessor, arg1: $IPluginConfig, arg2: $IElement): $IElement;
        enabledByDefault(): boolean;
        getDefaultPriority(): number;
        static INSTANCE: $DepositsComponentProvider;
        constructor();
        get required(): boolean;
        get uid(): $ResourceLocation;
        get defaultPriority(): number;
    }
    export class $BlockComponentProvider implements $IBlockComponentProvider, $IServerDataProvider<$BlockAccessor> {
        decode(arg0: $RegistryAccess, arg1: $CompoundTag_): $Object;
        encode(arg0: $RegistryAccess, arg1: $Object, arg2: $ListTag_): void;
        isRequired(): boolean;
        writeData(arg0: $Level_, arg1: $BlockEntity, arg2: $Player, arg3: $CompoundTag_, arg4: $BlockAccessor): void;
        getUid(): $ResourceLocation;
        appendTooltip(arg0: $ITooltip, arg1: $BlockAccessor, arg2: $IPluginConfig): void;
        appendServerData(arg0: $CompoundTag_, arg1: $BlockAccessor): void;
        shouldRequestData(arg0: $BlockAccessor): boolean;
        getIcon(arg0: $BlockAccessor, arg1: $IPluginConfig, arg2: $IElement): $IElement;
        getDefaultPriority(): number;
        enabledByDefault(): boolean;
        static INSTANCE: $BlockComponentProvider;
        constructor();
        get required(): boolean;
        get uid(): $ResourceLocation;
        get defaultPriority(): number;
    }
    export class $IUPlugin implements $IWailaPlugin {
        register(arg0: $IWailaCommonRegistration): void;
        registerClient(arg0: $IWailaClientRegistration): void;
        constructor();
    }
}
