import { $ColorResolver, $ColorResolver_ } from "@package/net/minecraft/world/level";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";

declare module "@package/com/petrolpark/client/rendering/world" {
    export class $BlendedBlockColorEvent extends $Event {
        setColor(arg0: number): void;
        getColor(): number;
        getLevel(): $ClientLevel;
        getPos(): $BlockPos;
        getBiome(): $Biome;
        getColorResolver(): $ColorResolver;
        constructor(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $Biome_, arg3: $ColorResolver_, arg4: number);
        get level(): $ClientLevel;
        get pos(): $BlockPos;
        get biome(): $Biome;
        get colorResolver(): $ColorResolver;
    }
}
