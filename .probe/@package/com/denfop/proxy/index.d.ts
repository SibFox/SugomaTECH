import { $Level } from "@package/net/minecraft/world/level";
import { $Holder_ } from "@package/net/minecraft/core";
import { $FMLClientSetupEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $BlockEntityBase } from "@package/com/denfop/blockentity/base";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $IProperties } from "@package/com/denfop/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RegisterClientExtensionsEvent } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $List } from "@package/java/util";
import { $ModelEvent$RegisterGeometryLoaders, $ClientTickEvent$Pre, $RegisterClientTooltipComponentFactoriesEvent, $RegisterGuiLayersEvent, $RegisterParticleProvidersEvent, $RegisterColorHandlersEvent$Block, $EntityRenderersEvent$RegisterRenderers, $RegisterMenuScreensEvent, $RegisterKeyMappingsEvent, $RegisterColorHandlersEvent$Item } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/denfop/proxy" {
    export class $ClientProxy extends $CommonProxy {
        registerBlockColor(arg0: $RegisterColorHandlersEvent$Block): void;
        onServerTick(arg0: $ClientTickEvent$Pre): void;
        registerRenderers(arg0: $EntityRenderersEvent$RegisterRenderers): void;
        registerKeys(arg0: $RegisterKeyMappingsEvent): void;
        registerMenu(arg0: $RegisterMenuScreensEvent): void;
        registerParticleFactories(arg0: $RegisterParticleProvidersEvent): void;
        registerClientExtensions(arg0: $RegisterClientExtensionsEvent): void;
        onClientSetup(arg0: $FMLClientSetupEvent): void;
        registerItemColor(arg0: $RegisterColorHandlersEvent$Item): void;
        onRegisterGeometryLoaders(arg0: $ModelEvent$RegisterGeometryLoaders): void;
        onRegisterGuiOverlays(arg0: $RegisterGuiLayersEvent): void;
        onRegisterBlockColors(arg0: $RegisterColorHandlersEvent$Block): void;
        registerTooltipFactories(arg0: $RegisterClientTooltipComponentFactoriesEvent): void;
        constructor();
    }
    export class $CommonProxy {
        init(): void;
        postInit(): void;
        getWorld(arg0: $ResourceKey_<$Level>): $Level;
        getPropertiesList(): $List<$IProperties>;
        preInit(): void;
        messagePlayer(arg0: $Player, arg1: string): void;
        setLevelIfNull(arg0: $BlockEntityBase): void;
        addProperties(arg0: $IProperties): void;
        getPlayerInstance(): $Player;
        removePotion(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>): void;
        static sendPlayerMessage(arg0: $Player, arg1: string): void;
        constructor();
        get propertiesList(): $List<$IProperties>;
        set levelIfNull(value: $BlockEntityBase);
        get playerInstance(): $Player;
    }
}
