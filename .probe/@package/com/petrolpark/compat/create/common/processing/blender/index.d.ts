import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";

declare module "@package/com/petrolpark/compat/create/common/processing/blender" {
    export class $BlenderRecipeEvent$IsPossible extends $BlenderRecipeEvent {
        isPossible(): boolean;
        setPossible(): void;
        constructor(arg0: $Recipe<never>);
    }
    export class $BlenderRecipeEvent extends $Event implements $ICancellableEvent {
        getRecipe(): $Recipe<never>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Recipe<never>);
        get recipe(): $Recipe<never>;
    }
    export class $BlenderRecipeEvent$Convert extends $BlenderRecipeEvent {
        convertTo(arg0: $Recipe<never>): void;
        getConverted(): ($Recipe<never>) | undefined;
        constructor(arg0: $Recipe<never>);
        get converted(): ($Recipe<never>) | undefined;
    }
}
