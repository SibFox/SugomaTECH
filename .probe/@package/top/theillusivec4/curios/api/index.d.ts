import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
export * as type from "@package/top/theillusivec4/curios/api/type";
export * as event from "@package/top/theillusivec4/curios/api/event";
export * as extensions from "@package/top/theillusivec4/curios/api/extensions";

declare module "@package/top/theillusivec4/curios/api" {
    export class $SlotContext extends $Record {
        index(): number;
        identifier(): string;
        visible(): boolean;
        entity(): $LivingEntity;
        cosmetic(): boolean;
        constructor(identifier: string, entity: $LivingEntity, index: number, cosmetic: boolean, visible: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SlotContext}.
     */
    export type $SlotContext_ = { visible?: boolean, entity?: $LivingEntity, identifier?: string, index?: number, cosmetic?: boolean,  } | [visible?: boolean, entity?: $LivingEntity, identifier?: string, index?: number, cosmetic?: boolean, ];
    export class $SlotResult extends $Record {
        stack(): $ItemStack;
        slotContext(): $SlotContext;
        constructor(slotContext: $SlotContext_, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SlotResult}.
     */
    export type $SlotResult_ = { stack?: $ItemStack_, slotContext?: $SlotContext_,  } | [stack?: $ItemStack_, slotContext?: $SlotContext_, ];
}
