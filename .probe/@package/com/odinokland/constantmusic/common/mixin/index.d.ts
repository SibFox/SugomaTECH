import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";

declare module "@package/com/odinokland/constantmusic/common/mixin" {
    export class $MusicManagerAccessor {
    }
    export interface $MusicManagerAccessor {
        getTimer(): number;
        getCurrentMusic(): $SoundInstance;
        get timer(): number;
        get currentMusic(): $SoundInstance;
    }
}
