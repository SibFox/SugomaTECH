import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $LongArrayTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $UUID, $List, $Map, $UUID_, $Collection } from "@package/java/util";
import { $INode } from "@package/org/patryk3211/powergrid/electricity/sim/node";
import { $Consumer, $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Component_ as $Component_$1, $Component as $Component$1 } from "@package/org/patryk3211/powergrid/circuits/components";
import { $Enum, $Record, $Comparable, $Object, $Class } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Orientation_, $ComponentProperty, $PropertyEntry } from "@package/org/patryk3211/powergrid/circuits/components/properties";
import { $AbstractElectricWire } from "@package/org/patryk3211/powergrid/electricity/sim";

declare module "@package/org/patryk3211/powergrid/circuits/schematic" {
    export class $CircuitLayer {
        get(x: number, y: number, dir: $TraceMatrix$TraceDirection): boolean;
        clear(x1: number, y1: number, x2: number, y2: number): void;
        clear(): void;
        from(other: $CircuitLayer): void;
        deserialize(tag: number[], fullPixelTraces: boolean): void;
        serializeNbt(): $LongArrayTag;
        hasTrace(x: number, y: number): boolean;
        addVerticalLine(x: number, y1: number, y2: number): void;
        addHorizontalLine(y: number, x1: number, x2: number): void;
        hasVerticalTrace(x: number, y: number): boolean;
        readVerticalLines(): $List<$Line>;
        hasHorizontalTrace(x: number, y: number): boolean;
        readHorizontalLines(): $List<$Line>;
        static GRID_SIZE: number;
        static GRID_TO_GRID_SCALE: number;
        constructor();
    }
    export class $CircuitSchematic$Layer extends $Enum<$CircuitSchematic$Layer> {
        static values(): $CircuitSchematic$Layer[];
        static valueOf(name: string): $CircuitSchematic$Layer;
        opposite(): $CircuitSchematic$Layer;
        static FRONT: $CircuitSchematic$Layer;
        static BACK: $CircuitSchematic$Layer;
    }
    /**
     * Values that may be interpreted as {@link $CircuitSchematic$Layer}.
     */
    export type $CircuitSchematic$Layer_ = "front" | "back";
    export class $PadLayer {
        get(x: number, y: number): boolean;
        clear(): void;
        set(x: number, y: number): void;
        calculatePoints(): $List<$Point>;
        static GRID_SIZE: number;
        static TOTAL_SIZE: number;
        constructor();
    }
    export class $PlacedComponent {
        get<T>(property: $ComponentProperty<T>): T;
        add(node: $INode): void;
        add(wire: $AbstractElectricWire): void;
        data<T>(type: $Class<T>): (T) | undefined;
        data<T>(): T;
        set<T>(property: $ComponentProperty<T>, value: T): void;
        getEntry(id: $ResourceLocation_): $PropertyEntry<never>;
        getEntry<T>(property: $ComponentProperty<T>): $PropertyEntry<T>;
        getString(property: $ComponentProperty<never>): string;
        intersects(x: number, y: number, width: number, height: number): boolean;
        has(property: $ComponentProperty<never>): boolean;
        isClient(): boolean;
        getPos(): $BlockPos;
        tick(): boolean;
        getUUID(): $UUID;
        getWorld(): $Level;
        canPlace(x: number, y: number): boolean;
        setString(property: $ComponentProperty<never>, value: string): void;
        withWorld(worldSupplier: $Supplier_<$Level>, pos: $BlockPos_): void;
        onClientWorld(callback: $Supplier_<$Consumer<$Level>>): void;
        onServerWorld(callback: $Supplier_<$Consumer<$Level>>): void;
        notifyClients(propertyId: $ResourceLocation_): void;
        notifyClients(property: $ComponentProperty<never>): void;
        serializeNbt(): $CompoundTag;
        footprint(): $ComponentFootprint;
        stateUpdated(): void;
        intersects32(x: number, y: number, width: number, height: number): boolean;
        wires: $List<$AbstractElectricWire>;
        component: $Component$1;
        destroyed: boolean;
        nodes: $List<$INode>;
        x: number;
        y: number;
        customData: $Object;
        uuid: $UUID;
        constructor(component: $Component_$1, x: number, y: number, uuid: $UUID_);
        constructor(placed: $PlacedComponent, x: number, y: number);
        constructor(placed: $PlacedComponent);
        constructor(tag: $CompoundTag_);
        get client(): boolean;
        get pos(): $BlockPos;
        get UUID(): $UUID;
        get world(): $Level;
    }
    export class $Area extends $Record {
        x1(): number;
        x2(): number;
        y1(): number;
        y2(): number;
        constructor(x1: number, y1: number, x2: number, y2: number);
    }
    /**
     * Values that may be interpreted as {@link $Area}.
     */
    export type $Area_ = { y1?: number, x1?: number, y2?: number, x2?: number,  } | [y1?: number, x1?: number, y2?: number, x2?: number, ];
    export class $Point extends $Record implements $Comparable<$Point> {
        compareTo(o: $Point_): number;
        x(): number;
        y(): number;
        constructor(x: number, y: number);
    }
    /**
     * Values that may be interpreted as {@link $Point}.
     */
    export type $Point_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $ComponentFootprint {
        getWidth(): number;
        getHeight(): number;
        render(ctx: $GuiGraphics, component: $Component_$1, x: number, y: number, hovering: boolean): void;
        getTooltip(mouseX: number, mouseY: number): $Component;
        rotated(orientation: $Orientation_): $ComponentFootprint;
        getRenderedStack(component: $Component_$1): $ItemStack;
        renderPadIndices(ctx: $GuiGraphics, textRenderer: $Font, x: number, y: number): void;
        getOriginalHeight(): number;
        getOriginalWidth(): number;
        mirroredY(): $ComponentFootprint;
        mirroredX(): $ComponentFootprint;
        getPads(): $Map<$Point, $ComponentFootprint$PadData>;
        originalHeight: number;
        originalWidth: number;
        get width(): number;
        get height(): number;
        get pads(): $Map<$Point, $ComponentFootprint$PadData>;
    }
    export class $CircuitSchematic$VisitMap {
        visit(layer: $CircuitSchematic$Layer_, x: number, y: number): boolean;
        canVisit(layer: $CircuitSchematic$Layer_, x: number, y: number): boolean;
        constructor();
    }
    export class $ComponentFootprint$PadData extends $Record {
        nodeIndex(): number;
        tooltip(): $Component;
        shortText(): $Component;
        constructor(nodeIndex: number, tooltip: $Component_, shortText: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $ComponentFootprint$PadData}.
     */
    export type $ComponentFootprint$PadData_ = { tooltip?: $Component_, nodeIndex?: number, shortText?: $Component_,  } | [tooltip?: $Component_, nodeIndex?: number, shortText?: $Component_, ];
    export class $CircuitSchematic {
        getName(): string;
        clear(): void;
        setName(name: string): void;
        getId(placed: $PlacedComponent): number;
        getLayer(layer: $CircuitSchematic$Layer_): $CircuitLayer;
        front(): $CircuitLayer;
        back(): $CircuitLayer;
        getComponent(x: number, y: number): $PlacedComponent;
        pads(): $PadLayer;
        components(): $List<$PlacedComponent>;
        canPlace(component: $PlacedComponent, x: number, y: number): boolean;
        static fromStack(stack: $ItemStack_): $CircuitSchematic;
        flood(x: number, y: number, visitMap: $CircuitSchematic$VisitMap): $Collection<$CircuitSchematic$Node>;
        flood(layer: $CircuitSchematic$Layer_, x: number, y: number, visitMap: $CircuitSchematic$VisitMap): $Collection<$CircuitSchematic$Node>;
        static fromNbt(nbt: $CompoundTag_): $CircuitSchematic;
        removeComponents(x: number, y: number, width: number, height: number): void;
        deserializeNbt(tag: $CompoundTag_): void;
        toItemStack(): $ItemStack;
        serializeNbt(): $CompoundTag;
        hasTrace(layer: $CircuitSchematic$Layer_, x: number, y: number): boolean;
        isPad(x: number, y: number): boolean;
        placeComponent(basePlacedState: $PlacedComponent, x: number, y: number): void;
        calculateAreas(forLayer: $CircuitSchematic$Layer_): $List<$Area>;
        rebuildPads(): void;
        findNodeBundles(): $Collection<$Collection<$CircuitSchematic$Node>>;
        constructor();
        constructor(schematic: $CircuitSchematic);
    }
    export class $CircuitSchematic$Node extends $Record {
        pad(): number;
        placed(): $PlacedComponent;
        getPadResistance(): number;
        constructor(placed: $PlacedComponent, pad: number);
        get padResistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $CircuitSchematic$Node}.
     */
    export type $CircuitSchematic$Node_ = { placed?: $PlacedComponent, pad?: number,  } | [placed?: $PlacedComponent, pad?: number, ];
    export class $ISchematicHolder {
    }
    export interface $ISchematicHolder {
        getSchematicName(): string;
        setSchematicName(arg0: string): void;
        getSchematic(): $CircuitSchematic;
        setSchematic(arg0: $CircuitSchematic): void;
    }
}
