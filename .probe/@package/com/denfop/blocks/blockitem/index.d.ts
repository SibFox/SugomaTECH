import { $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBlockEntity } from "@package/com/denfop/api/blockentity";
import { $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $CreativeModeTab, $Item, $CreativeModeTab_, $BlockItem, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FakePlayerSpawner } from "@package/com/denfop/blockentity/base";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $Enum, $Object } from "@package/java/lang";
import { $BlockMineral$Type_, $SootBlock$Type, $BlockGas$Type, $BlockNuclearBomb$Type, $BlockDeepOre$Type, $BlockOres2$Type_, $BlockDeepOre1$Type_, $BlockBasalts$Type, $BlockFoam$FoamType, $BlockDeposits2$Type, $BlockThoriumOre$Type, $BlockNitrateMud$Type_, $BlockBasaltHeavyOre1$Type_, $BlockMineral$Type, $BlockSpace1$Type, $BlockHumus$Type, $BlockBasaltHeavyOre$Type_, $BlockIngots1$Type_, $BlockRaws$Type, $RadiationDustBlock$Type_, $BlockPlanksRubberWood$Type_, $BlocksRadiationOre$Type_, $BlockHeavyOre$Type, $BlockTexGlass$Type, $BlockNitrateMud$Type, $BlockOre$Type, $BlockSpace1$Type_, $BlockPreciousOre$Type, $BlockDeepOre3$Type, $BlockPreciousOre$Type_, $BlockAsteroidOre1$Type_, $BlockDeposits$Type, $BlockRaws$Type_, $BlockSpaceStone1$Type, $BlockOre$Type_, $ItemBlockCore, $BlockSpace2$Type, $BlocksRadiationOre$Type, $BlocksAlloy1$Type, $SootBlock$Type_, $BlockDeepOre2$Type, $BlockHeavyOre$Type_, $BlockApatite$Type_, $BlockNuclearBomb$Type_, $BlockRawSaltpeter$Type_, $BlockBasaltHeavyOre$Type, $BlockSpace$Type_, $BlockSpaceStone$Type_, $BlockAsteroidOre3$Type, $BlockBasalts$Type_, $BlockAsteroidOre2$Type, $BlockIngots1$Type, $BlockTropicalRubWood$RubberWoodState, $BlockGas$Type_, $BlockSwampRubWood$RubberWoodState, $BlockClassicOre$Type_, $BlockPrecious$Type_, $BlockRubWood$RubberWoodState_, $BlockOres3$Type, $BlockAsteroidOre1$Type, $BlockSpace$Type, $BlocksAlloy$Type_, $BlockAsteroidOre2$Type_, $BlockSpace2$Type_, $BlocksAlloy1$Type_, $BlockSpaceCobbleStone1$Type_, $BlockThoriumOre$Type_, $BlockIngots2$Type_, $BlockHumus$Type_, $BlockFoam$FoamType_, $BlockPlanksRubberWood$Type, $BlocksIngot$Type_, $BlockOres3$Type_, $BlockAsteroidOre$Type, $BlockOil$Type, $BlocksAlloy$Type, $BlockDeepOre$Type_, $BlockResource$Type_, $BlockSwampRubWood$RubberWoodState_, $BlockDeposits$Type_, $BlockPrecious$Type, $BlockDeposits1$Type_, $BlockOres2$Type, $BlockDeepOre2$Type_, $BlockSpaceCobbleStone$Type_, $BlockApatite$Type, $BlockSpace3$Type_, $BlockAsteroidOre3$Type_, $BlockRubWood$RubberWoodState, $BlockSpaceStone1$Type_, $BlockSpaceCobbleStone$Type, $BlockCore, $BlockDeepOre3$Type_, $BlockAsteroidOre$Type_, $BlockClassicOre$Type, $RadiationDustBlock$Type, $BlockSpaceStone$Type, $BlockOil$Type_, $BlockRawSaltpeter$Type, $BlockDeposits2$Type_, $BlockDeepOre1$Type, $BlocksIngot$Type, $BlockResource$Type, $BlockTropicalRubWood$RubberWoodState_, $BlockTexGlass$Type_, $BlockDeposits1$Type, $BlockBasaltHeavyOre1$Type, $BlockSpace3$Type, $BlockIngots2$Type, $BlockSpaceCobbleStone1$Type, $BlockTileEntity } from "@package/com/denfop/blocks";
import { $IItemTag } from "@package/com/denfop/datagen/itemtag";
import { $IItemTab } from "@package/com/denfop/tabs";

declare module "@package/com/denfop/blocks/blockitem" {
    export class $ItemBlockBasaltHeavyOre1 extends $ItemBlockCore<$BlockBasaltHeavyOre1$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockBasaltHeavyOre1$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockLeaves extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_);
    }
    export class $ItemBlockHumus extends $ItemBlockCore<$BlockHumus$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockHumus$Type_);
    }
    export class $ItemBlockDeepOre1 extends $ItemBlockCore<$BlockDeepOre1$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockDeepOre1$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockDeepOre2 extends $ItemBlockCore<$BlockDeepOre2$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockDeepOre2$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockDeepOre3 extends $ItemBlockCore<$BlockDeepOre3$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockDeepOre3$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockNitrateMud extends $ItemBlockCore<$BlockNitrateMud$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockNitrateMud$Type_);
    }
    export class $ItemBlockPreciousOre extends $ItemBlockCore<$BlockPreciousOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockPreciousOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockOil extends $ItemBlockCore<$BlockOil$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockOil$Type_);
    }
    export class $ItemBlockNuclearBomb extends $ItemBlockCore<$BlockNuclearBomb$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockNuclearBomb$Type_);
    }
    export class $ItemBlockAsteroidOre extends $ItemBlockCore<$BlockAsteroidOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockAsteroidOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockOre extends $ItemBlockCore<$BlockOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockSpace extends $ItemBlockCore<$BlockSpace$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpace$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockSpaceStone extends $ItemBlockCore<$BlockSpaceStone$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpaceStone$Type_);
    }
    export class $ItemBlockBasaltHeavyOre extends $ItemBlockCore<$BlockBasaltHeavyOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockBasaltHeavyOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockRubWood extends $ItemBlockCore<$BlockRubWood$RubberWoodState> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockRubWood$RubberWoodState_);
    }
    export class $ItemBlockAsteroidOre1 extends $ItemBlockCore<$BlockAsteroidOre1$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockAsteroidOre1$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockAsteroidOre2 extends $ItemBlockCore<$BlockAsteroidOre2$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockAsteroidOre2$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockAsteroidOre3 extends $ItemBlockCore<$BlockAsteroidOre3$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockAsteroidOre3$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockTexGlass extends $ItemBlockCore<$BlockTexGlass$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockTexGlass$Type_);
    }
    export class $ItemBlockSpace2 extends $ItemBlockCore<$BlockSpace2$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpace2$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockSpace1 extends $ItemBlockCore<$BlockSpace1$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpace1$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockSpace3 extends $ItemBlockCore<$BlockSpace3$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpace3$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockDeposits extends $ItemBlockCore<$BlockDeposits$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockDeposits$Type_);
    }
    export class $ItemBlockAlloy1 extends $ItemBlockCore<$BlocksAlloy1$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlocksAlloy1$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockTileEntity<T extends $Enum<T>> extends $ItemBlockCore<T> {
        getTeBlock(arg0: $ItemStack_): $MultiBlockEntity;
        placeTeBlock(arg0: $ItemStack_, arg1: $FakePlayerSpawner, arg2: $Level_, arg3: $BlockPos_): boolean;
        identifier: $ResourceLocation;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockTileEntity<T>, arg1: T, arg2: $ResourceLocation_);
    }
    export class $ItemBlockHeavyOre extends $ItemBlockCore<$BlockHeavyOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockHeavyOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockDeepOre extends $ItemBlockCore<$BlockDeepOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockDeepOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockRaws extends $ItemBlockCore<$BlockRaws$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockRaws$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockRadiationDust extends $ItemBlockCore<$RadiationDustBlock$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $RadiationDustBlock$Type_);
    }
    export class $ItemBlockResource extends $ItemBlockCore<$BlockResource$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockResource$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockAlloy extends $ItemBlockCore<$BlocksAlloy$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlocksAlloy$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockMineral extends $ItemBlockCore<$BlockMineral$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockMineral$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockRubberSapling extends $BlockItem implements $IItemTab {
        getItemCategory(): $CreativeModeTab;
        fillItemCategory(arg0: $CreativeModeTab_, arg1: $NonNullList<$ItemStack_>): void;
        allowedIn(arg0: $CreativeModeTab_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_);
        get itemCategory(): $CreativeModeTab;
    }
    export class $ItemBlockSpaceCobbleStone extends $ItemBlockCore<$BlockSpaceCobbleStone$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpaceCobbleStone$Type_);
    }
    export class $ItemBlockDeposits2 extends $ItemBlockCore<$BlockDeposits2$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockDeposits2$Type_);
    }
    export class $ItemBlockDeposits1 extends $ItemBlockCore<$BlockDeposits1$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockDeposits1$Type_);
    }
    export class $ItemBlockRawSaltpeter extends $ItemBlockCore<$BlockRawSaltpeter$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockRawSaltpeter$Type_);
    }
    export class $ItemBlockBasalts extends $ItemBlockCore<$BlockBasalts$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockBasalts$Type_);
    }
    export class $ItemBlockIngot extends $ItemBlockCore<$BlocksIngot$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlocksIngot$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockApatite extends $ItemBlockCore<$BlockApatite$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockApatite$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockTropicalRubWood extends $ItemBlockCore<$BlockTropicalRubWood$RubberWoodState> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockTropicalRubWood$RubberWoodState_);
    }
    export class $ItemBlockOre2 extends $ItemBlockCore<$BlockOres2$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockOres2$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockOre3 extends $ItemBlockCore<$BlockOres3$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockOres3$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockSoot extends $ItemBlockCore<$SootBlock$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $SootBlock$Type_);
    }
    export class $ItemBlockRubberPlanks extends $ItemBlockCore<$BlockPlanksRubberWood$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockPlanksRubberWood$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockRadiationOre extends $ItemBlockCore<$BlocksRadiationOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlocksRadiationOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockPrecious extends $ItemBlockCore<$BlockPrecious$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockPrecious$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockSpaceStone1 extends $ItemBlockCore<$BlockSpaceStone1$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpaceStone1$Type_);
    }
    export class $ItemBlockClassicOre extends $ItemBlockCore<$BlockClassicOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockClassicOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockGas extends $ItemBlockCore<$BlockGas$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockGas$Type_);
    }
    export class $ItemBlockThoriumOre extends $ItemBlockCore<$BlockThoriumOre$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockThoriumOre$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockFoam extends $ItemBlockCore<$BlockFoam$FoamType> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockFoam$FoamType_);
    }
    export class $ItemBlockSpaceCobbleStone1 extends $ItemBlockCore<$BlockSpaceCobbleStone1$Type> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSpaceCobbleStone1$Type_);
    }
    export class $ItemBlockIngot1 extends $ItemBlockCore<$BlockIngots1$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockIngots1$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockIngot2 extends $ItemBlockCore<$BlockIngots2$Type> implements $IItemTag {
        getItem(): $Item;
        getTags(): string[];
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockIngots2$Type_);
        get item(): $Item;
        get tags(): string[];
    }
    export class $ItemBlockSwampRubWood extends $ItemBlockCore<$BlockSwampRubWood$RubberWoodState> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $BlockCore<any>, arg1: $BlockSwampRubWood$RubberWoodState_);
    }
}
