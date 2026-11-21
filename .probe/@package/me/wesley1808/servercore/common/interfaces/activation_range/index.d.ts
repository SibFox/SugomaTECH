import { $ActivationType } from "@package/me/wesley1808/servercore/common/config/data/activation_range";

declare module "@package/me/wesley1808/servercore/common/interfaces/activation_range" {
    export class $ActivationEntity {
    }
    export interface $ActivationEntity {
        servercore$isExcluded(): boolean;
        servercore$setInactive(arg0: boolean): void;
        servercore$getActivatedImmunityTick(): number;
        servercore$setActivatedImmunityTick(arg0: number): void;
        servercore$isInactive(): boolean;
        servercore$incFullTickCount(): void;
        servercore$getFullTickCount(): number;
        servercore$getActivatedTick(): number;
        servercore$getActivationType(): $ActivationType;
        servercore$setActivatedTick(arg0: number): void;
    }
    export class $Inactive {
    }
    export interface $Inactive {
        servercore$inactiveTick(): void;
    }
}
