import { $IBody } from "@package/com/denfop/api/space";
import { $IEntertainment, $IStorage, $IFactory, $IColonyMiningFactory, $IGenerator, $IBuildingHouse, $IOxygenFactory, $IColonyStorage, $IProtectionBuilding } from "@package/com/denfop/api/space/colonies/api/building";
import { $HolderLookup$Provider, $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Sends, $DataItem } from "@package/com/denfop/api/space/colonies";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $EnumHouses_, $EnumTypeBuilding, $EnumProblems } from "@package/com/denfop/api/space/colonies/enums";
export * as building from "@package/com/denfop/api/space/colonies/api/building";

declare module "@package/com/denfop/api/space/colonies/api" {
    export class $IBuildingItem {
    }
    export interface $IBuildingItem {
        getBuilding(arg0: $ItemStack_): $EnumTypeBuilding;
        getBuilding(arg0: $IColony, arg1: $ItemStack_, arg2: boolean): $IColonyBuilding;
    }
    export class $IColonyBuilding {
    }
    export interface $IColonyBuilding {
        getId(): number;
        work(): void;
        getColony(): $IColony;
        getPeople(): number;
        isIgnore(): boolean;
        writeTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        writePacket(arg0: $CustomPacketBuffer): $CustomPacketBuffer;
        getTypeBuilding(): $EnumTypeBuilding;
        getMinLevelColony(): number;
        get id(): number;
        get colony(): $IColony;
        get people(): number;
        get ignore(): boolean;
        get typeBuilding(): $EnumTypeBuilding;
        get minLevelColony(): number;
    }
    export class $IColony {
    }
    export interface $IColony {
        update(): void;
        matched(arg0: $IBody): boolean;
        getList(): $List<$IColonyBuilding>;
        getLevel(): number;
        getFactories(): $List<$IFactory>;
        getGenerators(): $List<$IGenerator>;
        getBody(): $IBody;
        getFood(): number;
        getExperience(): number;
        getEnergy(): number;
        isAuto(): boolean;
        writeNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getTick(): number;
        addEnergy(arg0: number): void;
        getOxygen(): number;
        getMaxEnergy(): number;
        addStorage(arg0: $IStorage): void;
        consumeEnergy(arg0: number): boolean;
        useEnergy(arg0: number): void;
        writePacket(arg0: $RegistryAccess): $CustomPacketBuffer;
        getMaxExperience(): number;
        getFakePlayer(): $UUID;
        addFood(arg0: number): void;
        getProtection(): number;
        getEntertainment(): number;
        addProtection(arg0: number): void;
        getUsingOxygen(): number;
        addMaxEnergy(arg0: number): void;
        getNeededWorkers(): number;
        getProtections(): $List<$IProtectionBuilding>;
        getGenerationFood(): number;
        getMaxBuilding(): number;
        getColonyStorages(): $List<$IColonyStorage>;
        getUsingEnergy(): number;
        getAvailableFluid(): number;
        getTimeToDelete(): number;
        getMaxOxygen(): number;
        getColonyBuilding(): $List<$IColonyBuilding>;
        getUsingFood(): number;
        getEntertainments(): $List<$IEntertainment>;
        getBuildingList(): $List<$IColonyBuilding>;
        getNeedWorkers(): number;
        getFreeWorkers(): number;
        addMaxOxygen(arg0: number): void;
        getMaxWorkers(): number;
        getAvailableItem(): number;
        removeWorkers(arg0: number): void;
        getToDelete(): number;
        getStorageList(): $List<$IStorage>;
        addBuilding(arg0: $IColonyBuilding): void;
        getProblems(): $List<$EnumProblems>;
        getMaxoxygen(): number;
        getMaxenergy(): number;
        addFreeWorkers(arg0: number): void;
        canUseOxygen(arg0: $EnumHouses_): boolean;
        addEntertainment(arg0: number): void;
        setAuto(arg0: boolean): void;
        addOxygen(arg0: number): void;
        canUseFood(arg0: $EnumHouses_): boolean;
        getWorkers(): number;
        useOxygen(arg0: number): void;
        useFood(arg0: number): void;
        getOxygenFactoriesList(): $List<$IOxygenFactory>;
        getPercentEntertainment(): number;
        getEnumProblemsList(): $List<$EnumProblems>;
        getFluidsFromStorage(): $List<$FluidStack>;
        getMaxAvailableItem(): number;
        getMaxAvailableFluid(): number;
        removeAvailableItem(arg0: number): void;
        getGenerationOxygen(): number;
        removeAvailableFluid(arg0: number): void;
        getAvailableBuilding(): number;
        getBuildingHouseList(): $List<$IBuildingHouse>;
        getBuildingMiningList(): $List<$IColonyMiningFactory>;
        getStacksFromStorage(): $List<$ItemStack>;
        getGenerationEnergy(): number;
        get list(): $List<$IColonyBuilding>;
        get level(): number;
        get factories(): $List<$IFactory>;
        get generators(): $List<$IGenerator>;
        get body(): $IBody;
        get food(): number;
        get experience(): number;
        get energy(): number;
        get tick(): number;
        get oxygen(): number;
        get maxEnergy(): number;
        get maxExperience(): number;
        get fakePlayer(): $UUID;
        get protection(): number;
        get entertainment(): number;
        get usingOxygen(): number;
        get neededWorkers(): number;
        get protections(): $List<$IProtectionBuilding>;
        get generationFood(): number;
        get maxBuilding(): number;
        get colonyStorages(): $List<$IColonyStorage>;
        get usingEnergy(): number;
        get availableFluid(): number;
        get timeToDelete(): number;
        get maxOxygen(): number;
        get colonyBuilding(): $List<$IColonyBuilding>;
        get usingFood(): number;
        get entertainments(): $List<$IEntertainment>;
        get buildingList(): $List<$IColonyBuilding>;
        get needWorkers(): number;
        get freeWorkers(): number;
        get maxWorkers(): number;
        get availableItem(): number;
        get toDelete(): number;
        get storageList(): $List<$IStorage>;
        get problems(): $List<$EnumProblems>;
        get maxoxygen(): number;
        get maxenergy(): number;
        get workers(): number;
        get oxygenFactoriesList(): $List<$IOxygenFactory>;
        get percentEntertainment(): number;
        get enumProblemsList(): $List<$EnumProblems>;
        get fluidsFromStorage(): $List<$FluidStack>;
        get maxAvailableItem(): number;
        get maxAvailableFluid(): number;
        get generationOxygen(): number;
        get availableBuilding(): number;
        get buildingHouseList(): $List<$IBuildingHouse>;
        get buildingMiningList(): $List<$IColonyMiningFactory>;
        get stacksFromStorage(): $List<$ItemStack>;
        get generationEnergy(): number;
    }
    export class $IColonyNet {
    }
    export interface $IColonyNet {
        unload(): void;
        getMap(): $Map<$UUID, $List<$IColony>>;
        working(): void;
        getList(): $List<$UUID>;
        addItemStack(arg0: $IBody, arg1: number, arg2: $ItemStack_): void;
        writeNBT(arg0: $CompoundTag_, arg1: $UUID_, arg2: $HolderLookup$Provider): $CompoundTag;
        getSendsFromUUID(arg0: $UUID_): $List<$Sends>;
        addFluidStack(arg0: $IBody, arg1: number, arg2: $FluidStack_): void;
        getFluidsFromBody(arg0: $IBody): $List<$DataItem<$FluidStack>>;
        getItemsFromBody(arg0: $IBody): $List<$DataItem<$ItemStack>>;
        addColony(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        addColony(arg0: $IBody, arg1: $Player): void;
        removeColony(arg0: $IBody, arg1: $UUID_): void;
        removeColony(arg0: $IColony, arg1: $UUID_): void;
        canAddColony(arg0: $IBody, arg1: $Player): boolean;
        addItemToColony(arg0: $IBody, arg1: $Player): void;
        getColonies(): $List<$IColony>;
        setAutoSends(arg0: $UUID_, arg1: $IBody): void;
        sendResourceToPlanet(arg0: $UUID_, arg1: $IBody): void;
        get map(): $Map<$UUID, $List<$IColony>>;
        get list(): $List<$UUID>;
        get colonies(): $List<$IColony>;
    }
}
