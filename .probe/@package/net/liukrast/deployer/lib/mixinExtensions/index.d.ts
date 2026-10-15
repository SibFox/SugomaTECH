import { $PanelConnection, $PanelConnection_ } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $StockInventoryType_ } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $BlockPos } from "@package/net/minecraft/core";
import { $GenericRequestPromise } from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $FactoryPanelConnection } from "@package/com/simibubi/create/content/logistics/factoryBoard";

declare module "@package/net/liukrast/deployer/lib/mixinExtensions" {
    export class $RPQExtension {
    }
    export interface $RPQExtension {
        deployer$getTotalPromisedAndRemoveExpired<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V, arg2: number): number;
        deployer$flatten<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: boolean): $List<$GenericRequestPromise<V>>;
        deployer$add<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: $GenericRequestPromise<V>): void;
        deployer$forceClear<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V): void;
        deployer$genericEnteredSystem<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V, arg2: number): void;
    }
    export class $ACPExtension {
    }
    export interface $ACPExtension {
        deployer$getCape(): number;
    }
    /**
     * Values that may be interpreted as {@link $ACPExtension}.
     */
    export type $ACPExtension_ = (() => number);
    export class $FPBExtension {
    }
    export interface $FPBExtension {
        deployer$getExtra(): $Map<$BlockPos, $FactoryPanelConnection>;
        deployer$getOutputConnections(): $Set<$PanelConnection<never>>;
        deployer$getInputConnections(): $Set<$PanelConnection<never>>;
        deployer$getConnectionValue<T>(arg0: $PanelConnection_<T>): (T) | undefined;
    }
    export class $FPCExtension {
    }
    export interface $FPCExtension {
        deployer$setLinkMode(arg0: $PanelConnection_<never>): void;
        deployer$getLinkMode(): $PanelConnection<never>;
    }
    export class $PRExtension {
    }
    export interface $PRExtension {
        deployer$flag(): void;
        deployer$isFlagged(): boolean;
    }
    export class $FPBEExtension {
    }
    export interface $FPBEExtension {
        deployer$getExtraDrops(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $FPBEExtension}.
     */
    export type $FPBEExtension_ = (() => $List_<$ItemStack_>);
    export class $VITBExtension {
    }
    export interface $VITBExtension {
        deployer$stillWaiting(arg0: $Object): boolean;
        deployer$awaitNewVersion(arg0: $Object): void;
    }
}
