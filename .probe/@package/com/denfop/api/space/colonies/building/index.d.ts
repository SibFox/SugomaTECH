import { $IColony } from "@package/com/denfop/api/space/colonies/api";
import { $IEntertainment, $IStorage, $IFactory, $IColonyMiningFactory, $IColonyPanelFactory, $IBuildingHouse, $IOxygenFactory, $IColonyStorage, $IProtectionBuilding } from "@package/com/denfop/api/space/colonies/api/building";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Colony, $Building } from "@package/com/denfop/api/space/colonies";
import { $List } from "@package/java/util";
import { $EnumProtectionLevel, $EnumHouses_, $EnumTypeFactory, $EnumHouses, $EnumTypeSolarPanel_, $EnumTypeOxygenFactory, $EnumHousesLevel, $EnumTypeOxygenFactory_, $EnumEntertainment, $EnumMiningFactory, $EnumTypeSolarPanel, $EnumEntertainment_, $EnumTypeFactory_, $EnumProtectionLevel_, $EnumMiningFactory_ } from "@package/com/denfop/api/space/colonies/enums";

declare module "@package/com/denfop/api/space/colonies/building" {
    export class $ProtectionBuilding extends $Building implements $IProtectionBuilding {
        getProtectionBuilding(): $EnumProtectionLevel;
        needWorkers(): number;
        getProtection(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $EnumProtectionLevel_, arg1: $IColony, arg2: boolean);
        get protectionBuilding(): $EnumProtectionLevel;
        get protection(): number;
        get workers(): number;
    }
    export class $ColonyPanelFactory extends $Building implements $IColonyPanelFactory {
        getType(): $EnumTypeSolarPanel;
        getEnergy(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $IColony, arg1: $EnumTypeSolarPanel_, arg2: boolean);
        get type(): $EnumTypeSolarPanel;
        get energy(): number;
        get workers(): number;
    }
    export class $Storage implements $IStorage {
        getStacks(): $List<$ItemStack>;
        getFluidStacks(): $List<$FluidStack>;
        work(): boolean;
        readPacket(arg0: $CustomPacketBuffer): void;
        readNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        writePacket(arg0: $CustomPacketBuffer): void;
        canAddItemStack(arg0: $ItemStack_): boolean;
        canAddFluidStack(arg0: $FluidStack_): boolean;
        canRemoveFluidStack(arg0: $FluidStack_): boolean;
        getMaxStorageForFluid(): number;
        addMaxStorageForFluid(arg0: number): void;
        getStorageBuilding(): $StorageBuilding;
        getMaxStorage(): number;
        addMaxStorage(arg0: number): void;
        canRemoveItemStack(arg0: $ItemStack_): boolean;
        constructor(arg0: $CustomPacketBuffer, arg1: $StorageBuilding);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $StorageBuilding);
        constructor(arg0: $StorageBuilding);
        get stacks(): $List<$ItemStack>;
        get fluidStacks(): $List<$FluidStack>;
        get maxStorageForFluid(): number;
        get storageBuilding(): $StorageBuilding;
        get maxStorage(): number;
    }
    export class $ItemFactory extends $Building implements $IColonyMiningFactory {
        getFactory(): $EnumMiningFactory;
        getEnergy(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $IColony, arg1: $EnumMiningFactory_, arg2: boolean);
        get factory(): $EnumMiningFactory;
        get energy(): number;
        get workers(): number;
    }
    export class $FluidFactory extends $Building implements $IColonyMiningFactory {
        getFactory(): $EnumMiningFactory;
        getEnergy(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $IColony, arg1: $EnumMiningFactory_, arg2: boolean);
        get factory(): $EnumMiningFactory;
        get energy(): number;
        get workers(): number;
    }
    export class $ColonyHouse extends $Building implements $IBuildingHouse {
        getLevel(): $EnumHousesLevel;
        getEnergy(): number;
        getMaxPeople(): number;
        getHouses(): $EnumHouses;
        getFreeWorkers(): number;
        getWorkers(): number;
        removeFreeWorkers(arg0: number): void;
        addPeople(arg0: number): void;
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $EnumHouses_, arg1: $IColony, arg2: boolean);
        get level(): $EnumHousesLevel;
        get energy(): number;
        get maxPeople(): number;
        get houses(): $EnumHouses;
        get freeWorkers(): number;
        get workers(): number;
    }
    export class $OxygenFactory extends $Building implements $IOxygenFactory {
        getType(): $EnumTypeOxygenFactory;
        getGeneration(): number;
        getMax(): number;
        getEnergy(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $IColony, arg1: $EnumTypeOxygenFactory_, arg2: boolean);
        get type(): $EnumTypeOxygenFactory;
        get generation(): number;
        get max(): number;
        get energy(): number;
        get workers(): number;
    }
    export class $Factory extends $Building implements $IFactory {
        getType(): $EnumTypeFactory;
        getEnergy(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        typeFactory: $EnumTypeFactory;
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $IColony, arg1: $EnumTypeFactory_, arg2: boolean);
        get type(): $EnumTypeFactory;
        get energy(): number;
        get workers(): number;
    }
    export class $StorageBuilding extends $Building implements $IColonyStorage {
        getStorage(): $IStorage;
        getEnergy(): number;
        getWork(): boolean;
        setWork(arg0: boolean): void;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        getPeoples(): number;
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $IColony);
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $IColony, arg1: boolean);
        get storage(): $IStorage;
        get energy(): number;
        get workers(): number;
        get peoples(): number;
    }
    export class $ColonyEntertainment extends $Building implements $IEntertainment {
        getType(): $EnumEntertainment;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        constructor(arg0: $CompoundTag_, arg1: $IColony);
        constructor(arg0: $CustomPacketBuffer, arg1: $Colony);
        constructor(arg0: $EnumEntertainment_, arg1: $IColony, arg2: boolean);
        get type(): $EnumEntertainment;
        get workers(): number;
    }
}
