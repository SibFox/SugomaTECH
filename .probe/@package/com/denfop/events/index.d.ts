import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CropGrowEvent$Pre } from "@package/net/neoforged/neoforge/event/level/block";
import { $TagsUpdatedEvent } from "@package/net/neoforged/neoforge/event";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List } from "@package/java/util";
import { $PlayerInteractEvent$RightClickBlock, $ItemTooltipEvent, $ItemEntityPickupEvent$Pre, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $PlayerTickEvent$Pre, $LevelTickEvent$Pre, $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $RenderLevelStageEvent, $RenderTooltipEvent$GatherComponents, $RenderGuiEvent$Post } from "@package/net/neoforged/neoforge/client/event";
import { $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LivingDamageEvent$Pre, $LivingDeathEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ServerStoppingEvent, $ServerStoppedEvent } from "@package/net/neoforged/neoforge/event/server";
import { $LevelEvent$Unload, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $IWorldTickCallback_ } from "@package/com/denfop/world";
export * as client from "@package/com/denfop/events/client";

declare module "@package/com/denfop/events" {
    export class $VillagePoolInjectorNbt {
        static onTagsUpdated(arg0: $TagsUpdatedEvent): void;
    }
    export class $TickHandlerIU {
        onWorldTick(arg0: $LevelTickEvent$Post): void;
        onClientTick(arg0: $LevelTickEvent$Pre): void;
        hurt(arg0: $LivingDamageEvent$Pre): void;
        static requestSingleWorldTick(arg0: $Level_, arg1: $IWorldTickCallback_): void;
        onWorldTick1(arg0: $LevelTickEvent$Pre): void;
        constructor();
    }
    export class $ElectricItemTooltipHandler {
        drawTooltips(arg0: $ItemTooltipEvent): void;
        constructor();
    }
    export class $EventUpdate {
        onPlayerLoggedIn(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        constructor();
    }
    export class $ClientTickHandler {
        static onTickRender1(arg0: $GuiGraphics): void;
        constructor();
    }
    export class $TickHandler {
        clamp(arg0: number, arg1: number, arg2: number): number;
        renderTick(arg0: $RenderGuiEvent$Post): void;
        onGatherTooltipComponents(arg0: $RenderTooltipEvent$GatherComponents): void;
        getDirection(arg0: $ItemStack_): $Direction;
        onRenderWorld(arg0: $RenderLevelStageEvent): void;
        getOreColor(arg0: $BlockState_): number;
        showRadiationEffects(arg0: $LocalPlayer, arg1: $Level_, arg2: $ChunkPos, arg3: number): void;
        onRenderTileSide(arg0: $RenderLevelStageEvent): void;
        onRenderOres(arg0: $RenderLevelStageEvent): void;
        onPlayerUpdate(arg0: $PlayerTickEvent$Pre): void;
        constructor();
    }
    export class $WorldSavedDataIU extends $SavedData {
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $WorldSavedDataIU;
        static create(): $WorldSavedDataIU;
        getWorld(): $Level;
        setWorld(arg0: $Level_): void;
        readNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getTagCompound(): $CompoundTag;
        static loadShellClusterChunks(arg0: $CompoundTag_): void;
        static saveShellClusterChunks(): $CompoundTag;
        col: number;
        constructor(arg0: string);
        constructor();
        get tagCompound(): $CompoundTag;
    }
    export class $EventSaveData {
        data: $WorldSavedDataIU;
        constructor();
    }
    export class $IUEventHandler {
        onWorldTick(arg0: $LevelTickEvent$Post): void;
        loginPlayer(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        canFly(arg0: $ItemStack_): boolean;
        onLevelTick(arg0: $LevelTickEvent$Post): void;
        onWorldUnload(arg0: $LevelEvent$Unload): void;
        onWorldLoad(arg0: $LevelEvent$Load): void;
        addInfo(arg0: $ItemTooltipEvent): void;
        onServerStopped(arg0: $ServerStoppedEvent): void;
        onServerStopping(arg0: $ServerStoppingEvent): void;
        static getUpgradeItem(arg0: $ItemStack_): boolean;
        setFly(arg0: $Player, arg1: boolean, arg2: $ItemStack_): void;
        bagPickup(arg0: $ItemEntityPickupEvent$Pre): void;
        FlyUpdate(arg0: $PlayerTickEvent$Pre): void;
        onPlayerDeath(arg0: $LivingDeathEvent): void;
        workCutters(arg0: $PlayerInteractEvent$RightClickBlock): void;
        onCropGrowPre(arg0: $CropGrowEvent$Pre): void;
        onCropGrowPre1(arg0: $CropGrowEvent$Pre): void;
        addInformItem(arg0: $ItemTooltipEvent): void;
        onWorldTick1(arg0: $LevelTickEvent$Post): void;
        static electrumTag: $TagKey<$Item>;
        static entityItemList: $List<$ItemEntity>;
        static coalDustTag: $TagKey<$Item>;
        constructor();
    }
}
