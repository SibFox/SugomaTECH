import { $Enum } from "@package/java/lang";
export * as chargepad from "@package/com/denfop/blockentity/wiring/chargepad";
export * as storage from "@package/com/denfop/blockentity/wiring/storage";

declare module "@package/com/denfop/blockentity/wiring" {
    export class $EnumElectricBlock extends $Enum<$EnumElectricBlock> {
        static values(): $EnumElectricBlock[];
        static valueOf(arg0: string): $EnumElectricBlock;
        static getFromID(arg0: number): $EnumElectricBlock;
        static MFSU_CHARGEPAD: $EnumElectricBlock;
        static HAD_MFSU_CHARGEPAD: $EnumElectricBlock;
        static PER_MFSU: $EnumElectricBlock;
        static MFE_CHARGEPAD: $EnumElectricBlock;
        static BAR_MFSU: $EnumElectricBlock;
        static CESU_CHARGEPAD: $EnumElectricBlock;
        static BATBOX: $EnumElectricBlock;
        static MFE: $EnumElectricBlock;
        static ULT_MFSU: $EnumElectricBlock;
        chargepad: boolean;
        producing: number;
        static ADV_MFSU: $EnumElectricBlock;
        tier: number;
        static GRA_MFSU: $EnumElectricBlock;
        static BAR_MFSU_CHARGEPAD: $EnumElectricBlock;
        static CESU: $EnumElectricBlock;
        id: number;
        static KVR_MFSU_CHARGEPAD: $EnumElectricBlock;
        static MFSU: $EnumElectricBlock;
        kit_meta: number;
        maxstorage: number;
        static BATBOX_CHARGEPAD: $EnumElectricBlock;
        static KVR_MFSU: $EnumElectricBlock;
        static GRA_MFSU_CHARGEPAD: $EnumElectricBlock;
        static ADV_MFSU_CHARGEPAD: $EnumElectricBlock;
        meta: number;
        static PER_MFSU_CHARGEPAD: $EnumElectricBlock;
        name1: string;
        static HAD_MFSU: $EnumElectricBlock;
        static ULT_MFSU_CHARGEPAD: $EnumElectricBlock;
    }
    /**
     * Values that may be interpreted as {@link $EnumElectricBlock}.
     */
    export type $EnumElectricBlock_ = "batbox" | "cesu" | "mfe" | "mfsu" | "adv_mfsu" | "ult_mfsu" | "per_mfsu" | "bar_mfsu" | "had_mfsu" | "gra_mfsu" | "kvr_mfsu" | "batbox_chargepad" | "cesu_chargepad" | "mfe_chargepad" | "mfsu_chargepad" | "adv_mfsu_chargepad" | "ult_mfsu_chargepad" | "per_mfsu_chargepad" | "bar_mfsu_chargepad" | "had_mfsu_chargepad" | "gra_mfsu_chargepad" | "kvr_mfsu_chargepad";
}
