import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $PlayerEvent$Clone, $PlayerEvent$PlayerRespawnEvent, $PlayerEvent$PlayerChangedDimensionEvent, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/denfop/ability" {
    export class $EnumPlayerAbility extends $Enum<$EnumPlayerAbility> {
        getHudLabel(): string;
        static values(): $EnumPlayerAbility[];
        static valueOf(arg0: string): $EnumPlayerAbility;
        getId(): string;
        getAccentColor(): number;
        getMinimumFoodCost(): number;
        getPanelColor(): number;
        getDefaultCooldownTicks(): number;
        static PICKAXE_VEIN: $EnumPlayerAbility;
        static AXE_TREE: $EnumPlayerAbility;
        get hudLabel(): string;
        get id(): string;
        get accentColor(): number;
        get minimumFoodCost(): number;
        get panelColor(): number;
        get defaultCooldownTicks(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumPlayerAbility}.
     */
    export type $EnumPlayerAbility_ = "pickaxe_vein" | "axe_tree";
    export class $AbilityToolHelper {
        static resolveAbility(arg0: $ItemStack_): $IPlayerAbility;
        static isSupportedVanillaPickaxe(arg0: $ItemStack_): boolean;
        static isSupportedVanillaAxe(arg0: $ItemStack_): boolean;
        static calculateFoodCost(arg0: number, arg1: number): number;
    }
    export class $IPlayerAbility {
    }
    export interface $IPlayerAbility {
        type(): $EnumPlayerAbility;
        supports(arg0: $ItemStack_): boolean;
        activate(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $BlockPos_): $AbilityActivationResult;
    }
    export class $AbilityEvents {
        static onLogin(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        static onRespawn(arg0: $PlayerEvent$PlayerRespawnEvent): void;
        static onChangedDimension(arg0: $PlayerEvent$PlayerChangedDimensionEvent): void;
        static onClone(arg0: $PlayerEvent$Clone): void;
    }
    export class $PickaxeVeinAbility implements $IPlayerAbility {
        type(): $EnumPlayerAbility;
        supports(arg0: $ItemStack_): boolean;
        activate(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $BlockPos_): $AbilityActivationResult;
        constructor();
    }
    export class $AbilityTreeSearch {
        static collectTree(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $BlockPos_, arg3: number): $List<$BlockPos>;
    }
    export class $AbilityClientState {
        static apply(arg0: $Map_<$EnumPlayerAbility_, number>): void;
        static getRemainingTicks(arg0: $EnumPlayerAbility_): number;
        static getReadyProgress(arg0: $EnumPlayerAbility_): number;
    }
    export class $AbilityManager {
        static sync(arg0: $ServerPlayer): void;
        static getAbility(arg0: $ItemStack_): $IPlayerAbility;
        static handleActivationPacket(arg0: $ServerPlayer): void;
        static buildRemainingTicksMap(arg0: $ServerPlayer): $Map<$EnumPlayerAbility, number>;
    }
    export class $AxeTreeAbility implements $IPlayerAbility {
        type(): $EnumPlayerAbility;
        supports(arg0: $ItemStack_): boolean;
        activate(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $BlockPos_): $AbilityActivationResult;
        constructor();
    }
    export class $AbilityActivationResult extends $Record {
        foodCost(): number;
        message(): $Component;
        static fail(arg0: $Component_): $AbilityActivationResult;
        static success(arg0: number, arg1: number, arg2: number): $AbilityActivationResult;
        success(): boolean;
        cooldownTicks(): number;
        brokenBlocks(): number;
        constructor(success: boolean, brokenBlocks: number, foodCost: number, cooldownTicks: number, message: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $AbilityActivationResult}.
     */
    export type $AbilityActivationResult_ = { success?: boolean, foodCost?: number, cooldownTicks?: number, message?: $Component_, brokenBlocks?: number,  } | [success?: boolean, foodCost?: number, cooldownTicks?: number, message?: $Component_, brokenBlocks?: number, ];
    export class $AbilityVeinSearch {
        static collectVein(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $BlockPos_, arg3: number, arg4: number, arg5: number): $List<$BlockPos>;
    }
    export class $AbilityBlockBreaker {
        static breakBlocks(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $List_<$BlockPos_>): number;
    }
    export class $AbilityData {
        static fromTag(arg0: $CompoundTag_): $AbilityData;
        toTag(): $CompoundTag;
        isOnCooldown(arg0: $EnumPlayerAbility_, arg1: number): boolean;
        static fromPlayer(arg0: $Player): $AbilityData;
        getRemainingTicks(arg0: $EnumPlayerAbility_, arg1: number): number;
        setCooldownEndTick(arg0: $EnumPlayerAbility_, arg1: number): void;
        saveToPlayer(arg0: $Player): void;
        getCooldownEndTick(arg0: $EnumPlayerAbility_): number;
        clearCooldown(arg0: $EnumPlayerAbility_): void;
        static ROOT_TAG: string;
        constructor();
    }
}
