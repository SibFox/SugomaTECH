import { $Enum } from "@package/java/lang";

declare module "@package/com/perigrine3/createcybernetics/api" {
    export class $IChipwareSlotsMenu {
    }
    export interface $IChipwareSlotsMenu {
        cc$chipwareSlotsActive(): boolean;
        cc$setChipwareSlotsVisible(arg0: boolean): void;
    }
    export class $CyberwareSlot extends $Enum<$CyberwareSlot> {
        static values(): $CyberwareSlot[];
        static valueOf(arg0: string): $CyberwareSlot;
        static LLEG: $CyberwareSlot;
        static EYES: $CyberwareSlot;
        static LUNGS: $CyberwareSlot;
        static MUSCLE: $CyberwareSlot;
        static RARM: $CyberwareSlot;
        static HEART: $CyberwareSlot;
        static ORGANS: $CyberwareSlot;
        static LARM: $CyberwareSlot;
        size: number;
        static RLEG: $CyberwareSlot;
        static BONE: $CyberwareSlot;
        static SKIN: $CyberwareSlot;
        static BRAIN: $CyberwareSlot;
    }
    /**
     * Values that may be interpreted as {@link $CyberwareSlot}.
     */
    export type $CyberwareSlot_ = "brain" | "eyes" | "heart" | "lungs" | "organs" | "rarm" | "larm" | "rleg" | "lleg" | "muscle" | "bone" | "skin";
    export class $ISandevistanTrailState {
    }
    export interface $ISandevistanTrailState {
        createcybernetics$isSandevistanTrailActive(): boolean;
        createcybernetics$setSandevistanTrailActive(arg0: boolean): void;
    }
}
