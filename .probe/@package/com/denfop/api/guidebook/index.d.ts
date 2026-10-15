import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/com/denfop/api/guidebook" {
    export class $Quest {
        getLocalizedName(): string;
        getLocalizedDescription(): string;
        prevShape: $Shape;
        shape: $Shape;
        hasPrev: boolean;
        typeObject: $TypeObject;
        icon: $ItemStack;
        fluidStacks: $List<$FluidStack>;
        itemStacks: $List<$ItemStack>;
        typeQuest: $TypeQuest;
        x: number;
        prevName: string;
        prevY: number;
        y: number;
        unLocalizedName: string;
        prevX: number;
        get localizedName(): string;
        get localizedDescription(): string;
    }
    export class $GuideBookCore {
        remove(arg0: $UUID_, arg1: string, arg2: string): void;
        load(arg0: $UUID_, arg1: $Player): void;
        static init(): void;
        setData(arg0: $UUID_, arg1: $Map_<string, $List_<string>>): void;
        loadOrThrow(arg0: $UUID_): void;
        addTab(arg0: $GuideTab): void;
        static getBlockStack(arg0: $MultiBlockEntity): $ItemStack;
        getPrev(arg0: string, arg1: $GuideTab): $Quest;
        getQuests(arg0: number): $List<$Quest>;
        getQuests(arg0: $List_<$Quest>, arg1: string): $Quest;
        addQuestToTab(arg0: $Quest, arg1: $GuideTab): void;
        getGuideTabs(): $List<$GuideTab>;
        static getUuidGuideMap(): $Map<$UUID, $Map<string, $List<string>>>;
        getGuideTabListMap(): $Map<$GuideTab, $List<$Quest>>;
        static uuidGuideMap: $Map<$UUID, $Map<string, $List<string>>>;
        static instance: $GuideBookCore;
        constructor();
        get guideTabs(): $List<$GuideTab>;
        get guideTabListMap(): $Map<$GuideTab, $List<$Quest>>;
    }
    export class $TypeObject extends $Enum<$TypeObject> {
        static values(): $TypeObject[];
        static valueOf(arg0: string): $TypeObject;
        isFluid(): boolean;
        isItem(): boolean;
        static ITEM: $TypeObject;
        static FLUID: $TypeObject;
        static FLUID_ITEM: $TypeObject;
        get fluid(): boolean;
        get item(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TypeObject}.
     */
    export type $TypeObject_ = "fluid" | "item" | "fluid_item";
    export class $GuideTab {
        getName(): string;
        getUnLocalized(): string;
        name: string;
        icon: $ItemStack;
        unLocalized: string;
        description: string;
        constructor(arg0: string, arg1: $ItemStack_, arg2: string);
    }
    export class $Quest$Builder {
        name(arg0: string): $Quest$Builder;
        type(arg0: $TypeObject_): $Quest$Builder;
        position(arg0: number, arg1: number): $Quest$Builder;
        prev(arg0: string): $Quest$Builder;
        tab(arg0: $GuideTab): $Quest$Builder;
        static create(): $Quest$Builder;
        static create(arg0: string): $Quest$Builder;
        build(): void;
        shape(arg0: $Shape_): $Quest$Builder;
        icon(arg0: $ItemStack_): $Quest$Builder;
        description(arg0: string): $Quest$Builder;
        fluidStack(...arg0: $FluidStack_[]): $Quest$Builder;
        fluidStack(arg0: $List_<$FluidStack_>): $Quest$Builder;
        fluidStack(arg0: $FluidStack_): $Quest$Builder;
        itemStack(arg0: $ItemStack_): $Quest$Builder;
        itemStack(...arg0: $ItemStack_[]): $Quest$Builder;
        itemStack(arg0: $List_<$ItemStack_>): $Quest$Builder;
        quest(arg0: $TypeQuest_): $Quest$Builder;
        localizationItem(): $Quest$Builder;
        noDescription(): $Quest$Builder;
        useItemInform(): $Quest$Builder;
        constructor();
    }
    export class $Shape extends $Enum<$Shape> {
        static values(): $Shape[];
        static valueOf(arg0: string): $Shape;
        static EPIC: $Shape;
        static UNIQUE: $Shape;
        static DEFAULT: $Shape;
    }
    /**
     * Values that may be interpreted as {@link $Shape}.
     */
    export type $Shape_ = "default" | "unique" | "epic";
    export class $Lines extends $Enum<$Lines> {
        static values(): $Lines[];
        static valueOf(arg0: string): $Lines;
        getVX(): number;
        getVY(): number;
        getHY(): number;
        getHX(): number;
        static GOLD: $Lines;
        static GRAY: $Lines;
        static DARK: $Lines;
        get VX(): number;
        get VY(): number;
        get HY(): number;
        get HX(): number;
    }
    /**
     * Values that may be interpreted as {@link $Lines}.
     */
    export type $Lines_ = "gold" | "gray" | "dark";
    export class $TypeQuest extends $Enum<$TypeQuest> {
        static values(): $TypeQuest[];
        static valueOf(arg0: string): $TypeQuest;
        static NONE: $TypeQuest;
        static CONSUME: $TypeQuest;
        static DETECT: $TypeQuest;
    }
    /**
     * Values that may be interpreted as {@link $TypeQuest}.
     */
    export type $TypeQuest_ = "consume" | "detect" | "none";
}
