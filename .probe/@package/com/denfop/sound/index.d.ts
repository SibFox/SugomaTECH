import { $DeferredHolder, $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $SoundEvent_, $SoundEvent, $SoundSource } from "@package/net/minecraft/sounds";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SoundInstance$Attenuation, $Sound, $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/denfop/sound" {
    export class $EnumSound extends $Enum<$EnumSound> {
        static values(): $EnumSound[];
        static valueOf(arg0: string): $EnumSound;
        getSoundEvent(): $SoundEvent;
        setSoundEvent(arg0: $DeferredHolder<$SoundEvent_, $SoundEvent_>): void;
        getSoundName(): string;
        static getSondFromString(arg0: string): $SoundEvent;
        getNameSounds(): string;
        static NanosabrePowerup: $EnumSound;
        static handlerho: $EnumSound;
        static oilrefiner: $EnumSound;
        static low_radiation: $EnumSound;
        static default_radiation: $EnumSound;
        static air_collector: $EnumSound;
        static AssamplerScrap: $EnumSound;
        static cutter: $EnumSound;
        static fisher: $EnumSound;
        static purifier: $EnumSound;
        static enrichment: $EnumSound;
        static rig: $EnumSound;
        static WitherSpawn1: $EnumSound;
        static teleporter: $EnumSound;
        static upgrade_block: $EnumSound;
        static katana: $EnumSound;
        static metalformer: $EnumSound;
        static pen: $EnumSound;
        static JetpackLoop: $EnumSound;
        static zab: $EnumSound;
        static solid_electrolyzer: $EnumSound;
        static biomass_progress: $EnumSound;
        static genmirc: $EnumSound;
        static welding: $EnumSound;
        static InterruptOne: $EnumSound;
        static zap: $EnumSound;
        static PumpOp: $EnumSound;
        static quarry: $EnumSound;
        static dryer: $EnumSound;
        static fluid_mixer: $EnumSound;
        static wrench: $EnumSound;
        static Fermer: $EnumSound;
        static plastic: $EnumSound;
        static petrol_generator: $EnumSound;
        static gen_obsidiant: $EnumSound;
        static gen_cobblectone: $EnumSound;
        static centrifuge: $EnumSound;
        static cooling: $EnumSound;
        static mixer: $EnumSound;
        static biomass_interrupt: $EnumSound;
        static gas_combiner: $EnumSound;
        static primal_macerator: $EnumSound;
        static squeezer: $EnumSound;
        static interruptone_steam: $EnumSound;
        static blast_furnace: $EnumSound;
        static compressor: $EnumSound;
        static very_high_radiation: $EnumSound;
        static alloysmelter: $EnumSound;
        static toolchange: $EnumSound;
        static extractor: $EnumSound;
        static plate: $EnumSound;
        static electrolyzer: $EnumSound;
        static bow: $EnumSound;
        static high_radiation: $EnumSound;
        static primal_compressor: $EnumSound;
        static button: $EnumSound;
        static WitherHurt3: $EnumSound;
        static WitherDeath1: $EnumSound;
        static analyzer: $EnumSound;
        static gas: $EnumSound;
        static molecular: $EnumSound;
        static steam: $EnumSound;
        static molot: $EnumSound;
        static extruder: $EnumSound;
        static RecyclerOp: $EnumSound;
        static hydrogen_generator: $EnumSound;
        static NanosabreIdle: $EnumSound;
        static magnet_generator: $EnumSound;
        static medium_radiation: $EnumSound;
        static diesel_generator: $EnumSound;
        static oilgetter: $EnumSound;
        static WitherIdle1: $EnumSound;
        static magnet: $EnumSound;
        static synthesys: $EnumSound;
        static NanosabreSwing2: $EnumSound;
        static NanosabreSwing1: $EnumSound;
        static painting: $EnumSound;
        static radiation: $EnumSound;
        static Treetap: $EnumSound;
        static ore_washing: $EnumSound;
        static MaceratorOp: $EnumSound;
        static plastic_plate: $EnumSound;
        static NanosabreSwing3: $EnumSound;
        static solid_mixer: $EnumSound;
        static gen_lava: $EnumSound;
        get soundName(): string;
        get nameSounds(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnumSound}.
     */
    export type $EnumSound_ = "air_collector" | "alloysmelter" | "analyzer" | "assamplerscrap" | "blast_furnace" | "centrifuge" | "compressor" | "cooling" | "cutter" | "diesel_generator" | "electrolyzer" | "enrichment" | "extractor" | "extruder" | "fermer" | "fisher" | "gas" | "gen_cobblectone" | "gen_lava" | "gen_obsidiant" | "genmirc" | "handlerho" | "hydrogen_generator" | "interruptone" | "maceratorop" | "magnet" | "magnet_generator" | "metalformer" | "molecular" | "oilgetter" | "oilrefiner" | "ore_washing" | "painting" | "pen" | "petrol_generator" | "plastic" | "plastic_plate" | "plate" | "pumpop" | "quarry" | "radiation" | "recyclerop" | "rig" | "synthesys" | "upgrade_block" | "welding" | "witherdeath1" | "witherhurt3" | "witheridle1" | "witherspawn1" | "zab" | "zap" | "bow" | "jetpackloop" | "nanosabreidle" | "nanosabrepowerup" | "nanosabreswing1" | "nanosabreswing2" | "nanosabreswing3" | "purifier" | "toolchange" | "treetap" | "wrench" | "teleporter" | "katana" | "low_radiation" | "default_radiation" | "medium_radiation" | "high_radiation" | "very_high_radiation" | "gas_combiner" | "molot" | "primal_macerator" | "solid_electrolyzer" | "primal_compressor" | "dryer" | "squeezer" | "mixer" | "fluid_mixer" | "solid_mixer" | "steam" | "interruptone_steam" | "biomass_progress" | "biomass_interrupt" | "button";
    export class $TypePath extends $Enum<$TypePath> {
        static values(): $TypePath[];
        static valueOf(arg0: string): $TypePath;
        static Radiation: $TypePath;
        static Tools: $TypePath;
        static Machines: $TypePath;
    }
    /**
     * Values that may be interpreted as {@link $TypePath}.
     */
    export type $TypePath_ = "machines" | "tools" | "radiation";
    export class $SoundHandler {
        static playSound(arg0: $Player, arg1: $EnumSound_): void;
        static playSound(arg0: $Player, arg1: string): void;
        static stopSound(): void;
        static stopSound(arg0: $BlockPos_): void;
        static stopSound(arg0: $EnumSound_): void;
        constructor();
    }
    export class $PlayerSound extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $Player, arg1: $SoundEvent_);
    }
    export class $Sounds {
        static registerSounds(arg0: $DeferredRegister<$SoundEvent_>): void;
        constructor();
    }
}
