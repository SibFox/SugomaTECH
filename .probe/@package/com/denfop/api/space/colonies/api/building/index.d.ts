import { $IColonyBuilding } from "@package/com/denfop/api/space/colonies/api";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $StorageBuilding } from "@package/com/denfop/api/space/colonies/building";
import { $CustomPacketBuffer } from "@package/com/denfop/network/packet";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $EnumTypeFactory, $EnumEntertainment, $EnumMiningFactory, $EnumHouses, $EnumTypeSolarPanel, $EnumTypeOxygenFactory, $EnumHousesLevel } from "@package/com/denfop/api/space/colonies/enums";

declare module "@package/com/denfop/api/space/colonies/api/building" {
    export class $IGenerator {
    }
    export interface $IGenerator extends $IColonyBuilding {
        getEnergy(): number;
        getPeople(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        get energy(): number;
        get people(): number;
        get workers(): number;
    }
    export class $IColonyPanelFactory {
    }
    export interface $IColonyPanelFactory extends $IGenerator {
        getType(): $EnumTypeSolarPanel;
        get type(): $EnumTypeSolarPanel;
    }
    export class $IFactory {
    }
    export interface $IFactory extends $IColonyBuilding {
        getType(): $EnumTypeFactory;
        getEnergy(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        get type(): $EnumTypeFactory;
        get energy(): number;
        get workers(): number;
    }
    export class $IBuildingHouse {
    }
    export interface $IBuildingHouse extends $IColonyBuilding {
        getLevel(): $EnumHousesLevel;
        getEnergy(): number;
        getPeople(): number;
        getMaxPeople(): number;
        getHouses(): $EnumHouses;
        getFreeWorkers(): number;
        getWorkers(): number;
        removeFreeWorkers(arg0: number): void;
        addPeople(arg0: number): void;
        get level(): $EnumHousesLevel;
        get energy(): number;
        get people(): number;
        get maxPeople(): number;
        get houses(): $EnumHouses;
        get freeWorkers(): number;
        get workers(): number;
    }
    export class $IProtectionBuilding {
    }
    export interface $IProtectionBuilding extends $IColonyBuilding {
        needWorkers(): number;
        getProtection(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        get protection(): number;
        get workers(): number;
    }
    export class $IStorage {
    }
    export interface $IStorage {
        getStacks(): $List<$ItemStack>;
        getFluidStacks(): $List<$FluidStack>;
        work(): boolean;
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
        get stacks(): $List<$ItemStack>;
        get fluidStacks(): $List<$FluidStack>;
        get maxStorageForFluid(): number;
        get storageBuilding(): $StorageBuilding;
        get maxStorage(): number;
    }
    export class $IColonyStorage {
    }
    export interface $IColonyStorage {
        getStorage(): $IStorage;
        getEnergy(): number;
        getWork(): boolean;
        setWork(arg0: boolean): void;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        getPeoples(): number;
        get storage(): $IStorage;
        get energy(): number;
        get workers(): number;
        get peoples(): number;
    }
    export class $IOxygenFactory {
    }
    export interface $IOxygenFactory {
        getType(): $EnumTypeOxygenFactory;
        getGeneration(): number;
        getMax(): number;
        getEnergy(): number;
        getPeople(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        get type(): $EnumTypeOxygenFactory;
        get generation(): number;
        get max(): number;
        get energy(): number;
        get people(): number;
        get workers(): number;
    }
    export class $IColonyMiningFactory {
    }
    export interface $IColonyMiningFactory extends $IColonyBuilding {
        getFactory(): $EnumMiningFactory;
        getEnergy(): number;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        get factory(): $EnumMiningFactory;
        get energy(): number;
        get workers(): number;
    }
    export class $IEntertainment {
    }
    export interface $IEntertainment extends $IColonyBuilding {
        getType(): $EnumEntertainment;
        needWorkers(): number;
        removeWorkers(arg0: number): void;
        getWorkers(): number;
        addWorkers(arg0: number): void;
        get type(): $EnumEntertainment;
        get workers(): number;
    }
}
