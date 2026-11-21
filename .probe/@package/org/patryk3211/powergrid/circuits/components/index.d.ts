import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $List, $Collection } from "@package/java/util";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PlacedComponent, $ComponentFootprint } from "@package/org/patryk3211/powergrid/circuits/schematic";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TerminalBoundingBox } from "@package/org/patryk3211/powergrid/electricity/base";
import { $Record } from "@package/java/lang";
import { $ComponentCircuitBuilder } from "@package/org/patryk3211/powergrid/circuits/circuitboard";
import { $Orientation, $ComponentProperty, $ConstantProperty, $StringProperty } from "@package/org/patryk3211/powergrid/circuits/components/properties";
import { $ThermalBuilder$IEmitter_ } from "@package/org/patryk3211/powergrid/circuits/thermal";
export * as properties from "@package/org/patryk3211/powergrid/circuits/components/properties";

declare module "@package/org/patryk3211/powergrid/circuits/components" {
    export interface $ComponentItemEntry extends RegistryMarked<RegistryTypes.PowergridComponentItemsTag, RegistryTypes.PowergridComponentItems> {}
    export interface $Component extends RegistryMarked<RegistryTypes.PowergridComponentsTag, RegistryTypes.PowergridComponents> {}
    export class $ComponentItemEntry extends $Record {
        tag(): ($TagKey<$Item>) | undefined;
        item(): $Item;
        constructor(item: $Item_, tag: ($TagKey_<$Item>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ComponentItemEntry}.
     */
    export type $ComponentItemEntry_ = RegistryTypes.PowergridComponentItems | { tag?: ($TagKey_<$Item>) | undefined, item?: $Item_,  } | [tag?: ($TagKey_<$Item>) | undefined, item?: $Item_, ];
    export class $Component {
        getProperties(): $ImmutableList<$ComponentProperty<never>>;
        static current(value: number): $ConstantProperty;
        static current(resistance: number, power: number): $ConstantProperty;
        rotate(placed: $PlacedComponent, counterClockwise: boolean): boolean;
        static power(value: number): $ConstantProperty;
        tick(placed: $PlacedComponent): boolean;
        canPlace(placed: $PlacedComponent, x: number, y: number): boolean;
        bake(arg0: $PlacedComponent, arg1: $ComponentCircuitBuilder, arg2: $ThermalBuilder$IEmitter_): void;
        terminals(placed: $PlacedComponent): $List<$TerminalBoundingBox>;
        static modelChanged(pos: $BlockPos_): void;
        footprint(placed: $PlacedComponent): $ComponentFootprint;
        getPadResistance(padIndex: number): number;
        stateUpdated(placed: $PlacedComponent): void;
        static renderDataTick(placed: $PlacedComponent): void;
        requestedModels(): $Collection<$ResourceLocation>;
        static voltage(value: number): $ConstantProperty;
        dataFixup(tag: $CompoundTag_): void;
        getModelId(component: $PlacedComponent): $ResourceLocation;
        static getEdge(placed: $PlacedComponent): $Orientation;
        emitExternalTerminals(): boolean;
        static BASE_Y: number;
        static LABEL: $StringProperty;
        constructor(footprint: $ComponentFootprint);
        get properties(): $ImmutableList<$ComponentProperty<never>>;
    }
    /**
     * Values that may be interpreted as {@link $Component}.
     */
    export type $Component_ = RegistryTypes.PowergridComponents;
}
