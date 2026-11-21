import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";

declare module "@package/com/petrolpark/core/world/entity/npc" {
    export class $VillagerUpdateSpecialPricesEvent extends $PlayerEvent {
        getOffers(): $MerchantOffers;
        getVillager(): $Villager;
        constructor(arg0: $Player, arg1: $Villager);
        get offers(): $MerchantOffers;
        get villager(): $Villager;
    }
}
