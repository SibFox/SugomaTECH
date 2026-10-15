import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/org/patryk3211/powergrid/electricity/wire/registry" {
    export class $WireItemEntry extends $Record {
        texture(): $ResourceLocation;
        colorable(): boolean;
        maximumLength(): number;
        itemsPerMeter(): number;
        wireThickness(): number;
        resistancePerItem(): number;
        dissipationFactor(): number;
        thermalMass(): number;
        maximumCurrent(): number;
        horizontalCoefficient(): number;
        verticalCoefficient(): number;
        cord(): boolean;
        static CODEC: $Codec<$WireItemEntry>;
        constructor(resistancePerItem: number, itemsPerMeter: number, maximumLength: number, thermalMass: number, maximumCurrent: number, texture: $ResourceLocation_, horizontalCoefficient: number, verticalCoefficient: number, wireThickness: number, colorable: boolean, cord: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WireItemEntry}.
     */
    export type $WireItemEntry_ = RegistryTypes.PowergridWireTypes | { maximumLength?: number, itemsPerMeter?: number, verticalCoefficient?: number, colorable?: boolean, cord?: boolean, maximumCurrent?: number, resistancePerItem?: number, texture?: $ResourceLocation_, wireThickness?: number, horizontalCoefficient?: number, thermalMass?: number,  } | [maximumLength?: number, itemsPerMeter?: number, verticalCoefficient?: number, colorable?: boolean, cord?: boolean, maximumCurrent?: number, resistancePerItem?: number, texture?: $ResourceLocation_, wireThickness?: number, horizontalCoefficient?: number, thermalMass?: number, ];
    export interface $WireItemEntry extends RegistryMarked<RegistryTypes.PowergridWireTypesTag, RegistryTypes.PowergridWireTypes> {}
}
