import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $List } from "@package/java/util";

declare module "@package/dev/aaronhowser/mods/aaron/actor" {
    export class $LevelActor {
        getLevel(): $Level;
        getAge(): number;
        isRemoved(): boolean;
        markForRemoval(): void;
        static access$fullTick(arg0: $LevelActor): void;
        static Companion: $LevelActor$Companion;
        constructor(arg0: $Level_);
        get level(): $Level;
        get age(): number;
        get removed(): boolean;
    }
    export class $LevelActor$Companion {
        tickActors(arg0: $Level_): void;
        addLevelActor(arg0: $Level_, arg1: $LevelActor): void;
        getLevelActors(arg0: $Level_): $List<$LevelActor>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
