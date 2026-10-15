import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $FluidType, $FluidType$Properties } from "@package/net/neoforged/neoforge/fluids";
import { $FluidName_ } from "@package/com/denfop/blocks";

declare module "@package/com/denfop/blocks/fluid" {
    export class $IUFluidType extends $FluidType {
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
        constructor(arg0: $FluidName_, arg1: $FluidType$Properties);
    }
}
