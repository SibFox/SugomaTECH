import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $Tag, $TagManager } from "@package/com/tom/cpl/tag";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/tom/cpl/item" {
    export class $Inventory {
    }
    export interface $Inventory {
        size(): number;
        reset(): void;
        getStack(arg0: number): $Stack;
        getNamedSlotId(arg0: $NamedSlot): number;
        getInSlot(arg0: number): $Stack;
    }
    export class $Stack {
        getCount(): number;
        is(arg0: $Tag<$Stack>): boolean;
        getDisplayName(): string;
        getDamage(): number;
        getModId(): string;
        getItemId(): string;
        getMaxDamage(): number;
        getNbtTag(): $NBTTagCompound;
        getMaxCount(): number;
        isInNativeTag(arg0: string): boolean;
        listNativeTags(): $List<string>;
        getStackTags(arg0: $TagManager<$Stack>): $List<$Tag<$Stack>>;
        static handler: $ItemStackHandler<$Object>;
        static EMPTY: $Stack;
        get count(): number;
        get displayName(): string;
        get damage(): number;
        get modId(): string;
        get itemId(): string;
        get maxDamage(): number;
        get nbtTag(): $NBTTagCompound;
        get maxCount(): number;
    }
}
