import { $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $PlayableResource } from "@package/de/keksuccino/fancymenu/util/resource";

declare module "@package/de/keksuccino/fancymenu/util/resource/resources/audio" {
    export class $PlayableResourceWithAudio {
    }
    export interface $PlayableResourceWithAudio extends $PlayableResource {
        getVolume(): number;
        setVolume(arg0: number): void;
    }
    export class $IAudio {
    }
    export interface $IAudio extends $PlayableResourceWithAudio {
        getDuration(): number;
        play(): void;
        getPlayTime(): number;
        setSoundChannel(arg0: $SoundSource_): void;
        getSoundChannel(): $SoundSource;
        setPlayTime(arg0: number): void;
        get duration(): number;
    }
}
