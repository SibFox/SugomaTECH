import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $ISubEnum } from "@package/com/denfop/blocks";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/denfop/blockentity/transport/types" {
    export class $SEType extends $Enum<$SEType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $SEType;
        static values(): $SEType[];
        static valueOf(arg0: string): $SEType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        static scable: $SEType;
        maxInsulation: number;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SEType}.
     */
    export type $SEType_ = "scable_scable";
    export class $AmpereType extends $Enum<$AmpereType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $AmpereType;
        static values(): $AmpereType[];
        static valueOf(arg0: string): $AmpereType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        static acable: $AmpereType;
        maxInsulation: number;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AmpereType}.
     */
    export type $AmpereType_ = "acable_acable";
    export class $HeatType extends $Enum<$HeatType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $HeatType;
        static values(): $HeatType[];
        static valueOf(arg0: string): $HeatType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        static pipes3: $HeatType;
        static pipes4: $HeatType;
        thickness: number;
        static pipes1: $HeatType;
        static pipes2: $HeatType;
        maxInsulation: number;
        static pipes: $HeatType;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HeatType}.
     */
    export type $HeatType_ = "pipes_pipes" | "pipes1_pipes" | "pipes2_pipes" | "pipes3_pipes" | "pipes4_pipes";
    export class $BioType extends $Enum<$BioType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $BioType;
        static values(): $BioType[];
        static valueOf(arg0: string): $BioType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        static bpipe: $BioType;
        maxInsulation: number;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BioType}.
     */
    export type $BioType_ = "bpipe_bpipe";
    export class $ICableItem {
    }
    export interface $ICableItem {
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        get nameCable(): string;
        get thickness(): number;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
    }
    export class $UniversalType extends $Enum<$UniversalType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $UniversalType;
        static values(): $UniversalType[];
        static valueOf(arg0: string): $UniversalType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static glass10: $UniversalType;
        static glass: $UniversalType;
        thickness: number;
        capacity: number;
        loss: number;
        static glass2: $UniversalType;
        static glass3: $UniversalType;
        static glass1: $UniversalType;
        static glass6: $UniversalType;
        static glass7: $UniversalType;
        static glass4: $UniversalType;
        static glass5: $UniversalType;
        static glass8: $UniversalType;
        static glass9: $UniversalType;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $UniversalType}.
     */
    export type $UniversalType_ = "glass_cable" | "glass1_cable" | "glass2_cable" | "glass3_cable" | "glass4_cable" | "glass5_cable" | "glass6_cable" | "glass7_cable" | "glass8_cable" | "glass9_cable" | "glass10_cable";
    export class $ItemType extends $Enum<$ItemType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $ItemType;
        static values(): $ItemType[];
        static valueOf(arg0: string): $ItemType;
        getId(): number;
        getNameCable(): string;
        getMax(): number;
        isInput(): boolean;
        getThickness(): number;
        isOutput(): boolean;
        getMainPath(): string;
        isItem(): boolean;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        thickness: number;
        static itemcable29: $ItemType;
        static itemcable28: $ItemType;
        static itemcable23: $ItemType;
        static itemcable22: $ItemType;
        static itemcable21: $ItemType;
        static itemcable1: $ItemType;
        static itemcable20: $ItemType;
        static itemcable27: $ItemType;
        static itemcable26: $ItemType;
        static itemcable25: $ItemType;
        static itemcable24: $ItemType;
        static itemcable6: $ItemType;
        static itemcable7: $ItemType;
        static itemcable: $ItemType;
        static itemcable8: $ItemType;
        static itemcable9: $ItemType;
        static itemcable2: $ItemType;
        static itemcable3: $ItemType;
        static itemcable4: $ItemType;
        static itemcable5: $ItemType;
        static itemcable19: $ItemType;
        static itemcable18: $ItemType;
        static itemcable17: $ItemType;
        static itemcable12: $ItemType;
        static itemcable11: $ItemType;
        static itemcable10: $ItemType;
        static itemcable16: $ItemType;
        static itemcable15: $ItemType;
        static itemcable14: $ItemType;
        static itemcable13: $ItemType;
        get id(): number;
        get nameCable(): string;
        get max(): number;
        get input(): boolean;
        get output(): boolean;
        get mainPath(): string;
        get item(): boolean;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemType}.
     */
    export type $ItemType_ = "itemcable_pipes" | "itemcable1_pipes" | "itemcable2_pipes" | "itemcable3_pipes" | "itemcable4_pipes" | "itemcable5_pipes" | "itemcable6_pipes" | "itemcable7_pipes" | "itemcable8_pipes" | "itemcable9_pipes" | "itemcable10_pipes" | "itemcable11_pipes" | "itemcable12_pipes" | "itemcable13_pipes" | "itemcable14_pipes" | "itemcable15_pipes" | "itemcable16_pipes" | "itemcable17_pipes" | "itemcable18_pipes" | "itemcable19_pipes" | "itemcable20_pipes" | "itemcable21_pipes" | "itemcable22_pipes" | "itemcable23_pipes" | "itemcable24_pipes" | "itemcable25_pipes" | "itemcable26_pipes" | "itemcable27_pipes" | "itemcable28_pipes" | "itemcable29_pipes";
    export class $CoolType extends $Enum<$CoolType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $CoolType;
        static values(): $CoolType[];
        static valueOf(arg0: string): $CoolType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        static cool: $CoolType;
        maxInsulation: number;
        static cool4: $CoolType;
        static cool3: $CoolType;
        static cool2: $CoolType;
        static cool1: $CoolType;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CoolType}.
     */
    export type $CoolType_ = "cool_pipes" | "cool1_pipes" | "cool2_pipes" | "cool3_pipes" | "cool4_pipes";
    export class $HeatColdType extends $Enum<$HeatColdType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $HeatColdType;
        static values(): $HeatColdType[];
        static valueOf(arg0: string): $HeatColdType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static heatcool2: $HeatColdType;
        static heatcool1: $HeatColdType;
        loss: number;
        static heatcool4: $HeatColdType;
        static heatcool3: $HeatColdType;
        thickness: number;
        capacity1: number;
        maxInsulation: number;
        static heatcool: $HeatColdType;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HeatColdType}.
     */
    export type $HeatColdType_ = "heatcool_pipes" | "heatcool1_pipes" | "heatcool2_pipes" | "heatcool3_pipes" | "heatcool4_pipes";
    export class $QEType extends $Enum<$QEType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $QEType;
        static values(): $QEType[];
        static valueOf(arg0: string): $QEType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        static qcable: $QEType;
        maxInsulation: number;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $QEType}.
     */
    export type $QEType_ = "qcable_qcable";
    export class $SteamType extends $Enum<$SteamType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $SteamType;
        static values(): $SteamType[];
        static valueOf(arg0: string): $SteamType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        static spipe: $SteamType;
        maxInsulation: number;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SteamType}.
     */
    export type $SteamType_ = "spipe_spipe";
    export class $NightType extends $Enum<$NightType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $NightType;
        static values(): $NightType[];
        static valueOf(arg0: string): $NightType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        thickness: number;
        maxInsulation: number;
        static npipe: $NightType;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $NightType}.
     */
    export type $NightType_ = "npipe_npipe";
    export class $CableType extends $Enum<$CableType> implements $StringRepresentable, $ICableItem {
        getName(): string;
        static get(arg0: string): $CableType;
        static values(): $CableType[];
        static valueOf(arg0: string): $CableType;
        getId(): number;
        getNameCable(): string;
        getSerializedName(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        getRemappedEnumConstantName(): string;
        thickness: number;
        static gold1: $CableType;
        static tin1: $CableType;
        capacity: number;
        static gold: $CableType;
        loss: number;
        static glass2: $CableType;
        static glass_1: $CableType;
        static iron1: $CableType;
        static glass3: $CableType;
        static glass1: $CableType;
        static glass6: $CableType;
        static tin: $CableType;
        static glass7: $CableType;
        static copper: $CableType;
        static glass4: $CableType;
        static glass5: $CableType;
        static glass8: $CableType;
        static glass9: $CableType;
        static glass10: $CableType;
        static glass: $CableType;
        static copper1: $CableType;
        insulation: number;
        static iron: $CableType;
        get id(): number;
        get nameCable(): string;
        get serializedName(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CableType}.
     */
    export type $CableType_ = "glass_cable" | "glass1_cable" | "glass2_cable" | "glass3_cable" | "glass4_cable" | "glass5_cable" | "glass6_cable" | "glass7_cable" | "glass8_cable" | "glass9_cable" | "glass10_cable" | "copper_cable" | "copper1_cable" | "glass_1_cable" | "gold_cable" | "gold1_cable" | "iron_cable" | "iron1_cable" | "tin_cable" | "tin1_cable";
    export class $ExpType extends $Enum<$ExpType> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $ExpType;
        static values(): $ExpType[];
        static valueOf(arg0: string): $ExpType;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        static expcable: $ExpType;
        loss: number;
        thickness: number;
        maxInsulation: number;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ExpType}.
     */
    export type $ExpType_ = "expcable_expcable";
    export class $RadTypes extends $Enum<$RadTypes> implements $ISubEnum, $ICableItem {
        getName(): string;
        static get(arg0: string): $RadTypes;
        static values(): $RadTypes[];
        static valueOf(arg0: string): $RadTypes;
        getId(): number;
        getNameCable(): string;
        getThickness(): number;
        getMainPath(): string;
        getRecourse(): $ResourceLocation;
        register(): boolean;
        createProperties(): $BlockBehaviour$Properties;
        getSerializedName(): string;
        getOtherPart(): string;
        registerVariants(): boolean;
        registerOnlyBlock(): boolean;
        canAddToTab(): boolean;
        getRemappedEnumConstantName(): string;
        loss: number;
        static rad_cable: $RadTypes;
        thickness: number;
        maxInsulation: number;
        minColoredInsulation: number;
        capacity: number;
        get id(): number;
        get nameCable(): string;
        get mainPath(): string;
        get recourse(): $ResourceLocation;
        get serializedName(): string;
        get otherPart(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RadTypes}.
     */
    export type $RadTypes_ = "rad_cable_radcable";
}
