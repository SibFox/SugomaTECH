import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/mods/cybercat/gigeresque/common/util" {
    export class $SilencedEntityTypeBuilder {
    }
    export interface $SilencedEntityTypeBuilder {
        buildWithoutDataFixerCheck<T extends $Entity>(): $EntityType<T>;
    }
    /**
     * Values that may be interpreted as {@link $SilencedEntityTypeBuilder}.
     */
    export type $SilencedEntityTypeBuilder_ = (() => $EntityType_<any>);
}
