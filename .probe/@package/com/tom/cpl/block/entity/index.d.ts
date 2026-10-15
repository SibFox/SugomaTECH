import { $Object } from "@package/java/lang";

declare module "@package/com/tom/cpl/block/entity" {
    export class $EntityType {
        getId(): string;
        getType(): $Object;
        static handler: $EntityTypeHandler<$Object>;
        constructor(arg0: $Object);
        get id(): string;
        get type(): $Object;
    }
    export class $ActiveEffect {
        duration: number;
        effectId: string;
        hidden: boolean;
        amplifier: number;
        constructor(arg0: string, arg1: number, arg2: number, arg3: boolean);
    }
}
