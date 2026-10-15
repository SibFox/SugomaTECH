import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $VillagerTradesEvent } from "@package/net/neoforged/neoforge/event/village";
import { $Enum } from "@package/java/lang";
import { $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/com/denfop/villager" {
    export class $VillagerInit {
        static init(): void;
        static ENGINEER_POI: $DeferredHolder<$PoiType, $PoiType>;
        static NUCLEAR: $DeferredHolder<$VillagerProfession, $VillagerProfession>;
        static CHEMIST: $DeferredHolder<$VillagerProfession, $VillagerProfession>;
        static MECHANIC_POI: $DeferredHolder<$PoiType, $PoiType>;
        static MECHANIC: $DeferredHolder<$VillagerProfession, $VillagerProfession>;
        static ENGINEER: $DeferredHolder<$VillagerProfession, $VillagerProfession>;
        static METALLURG_POI: $DeferredHolder<$PoiType, $PoiType>;
        static METALLURG: $DeferredHolder<$VillagerProfession, $VillagerProfession>;
        static BOTANIST_POI: $DeferredHolder<$PoiType, $PoiType>;
        static CHEMIST_POI: $DeferredHolder<$PoiType, $PoiType>;
        static NUCLEAR_POI: $DeferredHolder<$PoiType, $PoiType>;
        static BOTANIST: $DeferredHolder<$VillagerProfession, $VillagerProfession>;
        constructor();
    }
    export class $MerchantOffer {
        getResult(): $ItemStack;
        resetUses(): void;
        getCostB(): $ItemStack;
        assemble(): $ItemStack;
        resetSpecialPriceDiff(): void;
        addToSpecialPriceDiff(arg0: number): void;
        getUses(): number;
        updateDemand(): void;
        needsRestock(): boolean;
        getPriceMultiplier(): number;
        shouldRewardExp(): boolean;
        getBaseCostA(): $ItemStack;
        increaseUses(): void;
        getXp(): number;
        getCostA(): $ItemStack;
        getMaxUses(): number;
        getDemand(): number;
        isOutOfStock(): boolean;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(arg0: number): void;
        setToOutOfStock(): void;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        get result(): $ItemStack;
        get costB(): $ItemStack;
        get uses(): number;
        get priceMultiplier(): number;
        get baseCostA(): $ItemStack;
        get xp(): number;
        get costA(): $ItemStack;
        get maxUses(): number;
        get demand(): number;
        get outOfStock(): boolean;
    }
    export class $EventTradeVillager extends $Event {
        getProfession(): $Profession;
        constructor(arg0: $Profession_);
        get profession(): $Profession;
    }
    export class $TradingSystem {
        register(arg0: $Tuple<$Profession_, number>, arg1: $MerchantOffer): void;
        static init(): $TradingSystem;
        onVillagerEvent(arg0: $VillagerTradesEvent): void;
        onBotanistTrading(arg0: $EventTradeVillager): void;
        onNuclearTrading(arg0: $EventTradeVillager): void;
        onEngineerTrading(arg0: $EventTradeVillager): void;
        onMetallurgTrading(arg0: $EventTradeVillager): void;
        onMechanicTrading(arg0: $EventTradeVillager): void;
        onChemistTrading(arg0: $EventTradeVillager): void;
        static isProfessionEnabled(arg0: $Profession_): boolean;
        static instance: $TradingSystem;
        constructor();
    }
    export class $TradeBuilder {
        static create(): $TradeBuilder;
        build(): void;
        setResult(arg0: $ItemStack_): $TradeBuilder;
        setLevel(arg0: number): $TradeBuilder;
        setProfession(arg0: $Profession_): $TradeBuilder;
        setXp(arg0: number): $TradeBuilder;
        setMaxUse(arg0: number): $TradeBuilder;
        setEmeralds(arg0: number): $TradeBuilder;
        addSecondStack(arg0: $ItemStack_): $TradeBuilder;
        addFirstStack(arg0: $ItemStack_): $TradeBuilder;
        constructor(arg0: $ItemStack_);
        constructor();
        set result(value: $ItemStack_);
        set level(value: number);
        set profession(value: $Profession_);
        set xp(value: number);
        set maxUse(value: number);
        set emeralds(value: number);
    }
    export class $Profession extends $Enum<$Profession> {
        static values(): $Profession[];
        static valueOf(arg0: string): $Profession;
        static NUCLEAR: $Profession;
        static CHEMIST: $Profession;
        static MECHANIC: $Profession;
        static ENGINEER: $Profession;
        static METALLURG: $Profession;
        static BOTANIST: $Profession;
    }
    /**
     * Values that may be interpreted as {@link $Profession}.
     */
    export type $Profession_ = "engineer" | "mechanic" | "nuclear" | "metallurg" | "chemist" | "botanist";
}
