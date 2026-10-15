import { $Outliner$OutlineEntry } from "@package/net/createmod/catnip/outliner";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Map_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/petrolpark/mixin/compat/create/accessor/client" {
    export class $OutlineParamsAccessor {
    }
    export interface $OutlineParamsAccessor {
        getDisableLineNormals(): boolean;
        getLightmap(): number;
        get disableLineNormals(): boolean;
        get lightmap(): number;
    }
    export class $OutlinerAccessor {
    }
    export interface $OutlinerAccessor {
        getOutlines(): $Map<$Object, $Outliner$OutlineEntry>;
        get outlines(): $Map<$Object, $Outliner$OutlineEntry>;
    }
    /**
     * Values that may be interpreted as {@link $OutlinerAccessor}.
     */
    export type $OutlinerAccessor_ = (() => $Map_<$Object, $Outliner$OutlineEntry>);
    export class $PonderLevelAccessor {
    }
    export interface $PonderLevelAccessor {
        invokeMakeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $PonderLevelAccessor}.
     */
    export type $PonderLevelAccessor_ = ((arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => $Particle);
    export class $OutlineEntryAccessor {
    }
    export interface $OutlineEntryAccessor {
        setTicksTillRemoval(arg0: number): void;
        set ticksTillRemoval(value: number);
    }
    /**
     * Values that may be interpreted as {@link $OutlineEntryAccessor}.
     */
    export type $OutlineEntryAccessor_ = ((arg0: number) => void);
}
