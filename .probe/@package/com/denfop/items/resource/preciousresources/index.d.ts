import { $Item } from "@package/net/minecraft/world/item";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemMain } from "@package/com/denfop/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $IItemTag } from "@package/com/denfop/datagen/itemtag";

declare module "@package/com/denfop/items/resource/preciousresources" {
    export class $ItemPreciousGem$Types extends $Enum<$ItemPreciousGem$Types> implements $ISubEnum {
        getName(): string;
        static values(): $ItemPreciousGem$Types[];
        static valueOf(arg0: string): $ItemPreciousGem$Types;
        getId(): number;
        getMainPath(): string;
        static getFromID(arg0: number): $ItemPreciousGem$Types;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static ruby_gem: $ItemPreciousGem$Types;
        static sapphire_gem: $ItemPreciousGem$Types;
        static topaz_gem: $ItemPreciousGem$Types;
        get id(): number;
        get mainPath(): string;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemPreciousGem$Types}.
     */
    export type $ItemPreciousGem$Types_ = "ruby_gem" | "sapphire_gem" | "topaz_gem";
    export class $ItemPreciousGem<T extends $Enum<T>> extends $ItemMain<T> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: T);
        get item(): $Item;
        get tags(): string[];
    }
}
