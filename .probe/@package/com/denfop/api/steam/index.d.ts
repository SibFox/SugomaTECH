import { $IRod as $IRod$1, $IExchanger as $IExchanger$1, $ICoolant as $ICoolant$1, $ISocket } from "@package/com/denfop/blockentity/mechanism/steamturbine";
import { $IExchangerItem } from "@package/com/denfop/blockentity/reactors/graphite";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IMultiElement, $IMainMultiBlock } from "@package/com/denfop/api/multiblock";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Inventory } from "@package/com/denfop/inventory";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/com/denfop/api/steam" {
    export class $IRod {
    }
    export interface $IRod extends $IMultiElement {
    }
    export class $EnumSteamPhase extends $Enum<$EnumSteamPhase> {
        static values(): $EnumSteamPhase[];
        static valueOf(arg0: string): $EnumSteamPhase;
        getMax(): number;
        getMin(): number;
        static EIGHT: $EnumSteamPhase;
        static FIVE: $EnumSteamPhase;
        static SIX: $EnumSteamPhase;
        static NINE: $EnumSteamPhase;
        static ONE: $EnumSteamPhase;
        static FOUR: $EnumSteamPhase;
        static TEN: $EnumSteamPhase;
        static TWO: $EnumSteamPhase;
        static THREE: $EnumSteamPhase;
        static SEVEN: $EnumSteamPhase;
        get max(): number;
        get min(): number;
    }
    /**
     * Values that may be interpreted as {@link $EnumSteamPhase}.
     */
    export type $EnumSteamPhase_ = "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine" | "ten";
    export class $IExchanger {
    }
    export interface $IExchanger extends $IMultiElement {
        getSlot(): $Inventory;
        getPower(): number;
        getExchanger(): $IExchangerItem;
        get slot(): $Inventory;
        get power(): number;
        get exchanger(): $IExchangerItem;
    }
    export class $Steam {
        getCoef(): number;
        updateData(): void;
        getGeneration(): number;
        onTick(): void;
        constructor(arg0: $ISteam);
        get coef(): number;
        get generation(): number;
    }
    export class $ICoolant {
    }
    export interface $ICoolant extends $IMultiElement {
        getCoolant(): $FluidTank;
        getPower(): number;
        getPressure(): number;
        get coolant(): $FluidTank;
        get power(): number;
        get pressure(): number;
    }
    export class $ISteam {
    }
    export interface $ISteam extends $IMainMultiBlock {
        getStableSteamPhase(): $EnumSteamPhase;
        getInfo(): $List<$IRod$1>;
        getCoolant(): $List<$ICoolant$1>;
        addHeat(arg0: number): void;
        addPhase(arg0: number): void;
        removeHeat(arg0: number): void;
        getPhase(): number;
        getHeat(): number;
        updateInfo(): void;
        getEnergy(): $ISocket;
        getExchanger(): $List<$IExchanger$1>;
        getSteamFluid(): $FluidTank;
        getWaterFluid(): $FluidTank;
        removePhase(arg0: number): void;
        getSteamPhase(): $EnumSteamPhase;
        getPressure(): number;
        isWork(): boolean;
        getMaxHeat(): number;
        setGeneration(arg0: number): void;
        get stableSteamPhase(): $EnumSteamPhase;
        get info(): $List<$IRod$1>;
        get coolant(): $List<$ICoolant$1>;
        get phase(): number;
        get heat(): number;
        get energy(): $ISocket;
        get exchanger(): $List<$IExchanger$1>;
        get steamFluid(): $FluidTank;
        get waterFluid(): $FluidTank;
        get steamPhase(): $EnumSteamPhase;
        get pressure(): number;
        get work(): boolean;
        get maxHeat(): number;
        set generation(value: number);
    }
    export class $ISteamBlade {
    }
    export interface $ISteamBlade {
        getCoef(): number;
        getLevel(): number;
        getTexture(): $ResourceLocation;
        damageBlade(arg0: $ItemStack_): boolean;
        get coef(): number;
        get level(): number;
        get texture(): $ResourceLocation;
    }
}
