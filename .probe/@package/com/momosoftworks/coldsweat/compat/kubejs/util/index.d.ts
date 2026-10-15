import { $Temperature$Trait, $Temperature$Trait_ } from "@package/com/momosoftworks/coldsweat/api/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";

declare module "@package/com/momosoftworks/coldsweat/compat/kubejs/util" {
    export class $TempModifierDataJS extends $Record {
        entity(): $LivingEntity;
        trait(): $Temperature$Trait;
        constructor(entity: $LivingEntity, trait: $Temperature$Trait_);
    }
    /**
     * Values that may be interpreted as {@link $TempModifierDataJS}.
     */
    export type $TempModifierDataJS_ = { trait?: $Temperature$Trait_, entity?: $LivingEntity,  } | [trait?: $Temperature$Trait_, entity?: $LivingEntity, ];
}
