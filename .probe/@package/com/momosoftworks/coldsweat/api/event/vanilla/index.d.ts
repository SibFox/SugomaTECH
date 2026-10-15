import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Style } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $GuiGraphics, $Gui$HeartType_, $Gui$HeartType } from "@package/net/minecraft/client/gui";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/momosoftworks/coldsweat/api/event/vanilla" {
    export class $RenderHeartEvent extends $Event {
        getY(): number;
        getX(): number;
        getGuiGraphics(): $GuiGraphics;
        isBlink(): boolean;
        isHardcode(): boolean;
        isHalfHeart(): boolean;
        getHeartType(): $Gui$HeartType;
        constructor(arg0: $GuiGraphics, arg1: $Gui$HeartType_, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: boolean);
        get y(): number;
        get x(): number;
        get guiGraphics(): $GuiGraphics;
        get blink(): boolean;
        get hardcode(): boolean;
        get halfHeart(): boolean;
        get heartType(): $Gui$HeartType;
    }
    export class $ContainerChangedEvent extends $Event {
        getContainer(): $AbstractContainerMenu;
        getOldStack(): $ItemStack;
        getNewStack(): $ItemStack;
        getSlotIndex(): number;
        constructor(arg0: $AbstractContainerMenu, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
        get container(): $AbstractContainerMenu;
        get oldStack(): $ItemStack;
        get newStack(): $ItemStack;
        get slotIndex(): number;
    }
    export class $RenderLevelEvent extends $Event {
        getPartialTick(): number;
        getDeltaTracker(): $DeltaTracker;
        constructor(arg0: $DeltaTracker);
        get partialTick(): number;
        get deltaTracker(): $DeltaTracker;
    }
    export class $EntityMoveEvent extends $EntityEvent implements $ICancellableEvent {
        getDirection(): $Vec3;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        getOriginalDirection(): $Vec3;
        getOriginalSpeed(): number;
        setDirection(arg0: $Vec3_): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Entity, arg1: number, arg2: $Vec3_);
        get originalDirection(): $Vec3;
        get originalSpeed(): number;
    }
    export class $RenderLevelEvent$Post extends $RenderLevelEvent {
        constructor(arg0: $DeltaTracker);
    }
    export class $ItemBreakEvent extends $LivingEvent {
        getItemStack(): $ItemStack;
        getBrokenCallback(): $Consumer<$Item>;
        constructor(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $Consumer_<$Item>);
        get itemStack(): $ItemStack;
        get brokenCallback(): $Consumer<$Item>;
    }
    export class $BlockStateChangedEvent extends $Event {
        getLevel(): $Level;
        getPosition(): $BlockPos;
        getNewState(): $BlockState;
        getOldState(): $BlockState;
        constructor(arg0: $BlockPos_, arg1: $Level_, arg2: $BlockState_, arg3: $BlockState_);
        get level(): $Level;
        get position(): $BlockPos;
        get newState(): $BlockState;
        get oldState(): $BlockState;
    }
    export class $ServerConfigsLoadedEvent extends $Event {
        getServer(): $MinecraftServer;
        constructor(arg0: $MinecraftServer);
        get server(): $MinecraftServer;
    }
    export class $RenderLevelEvent$Pre extends $RenderLevelEvent {
        constructor(arg0: $DeltaTracker);
    }
    export class $ChatComponentClickedEvent extends $Event {
        getStyle(): $Style;
        getPlayer(): $Player;
        constructor(arg0: $Style | null, arg1: $Player);
        get style(): $Style;
        get player(): $Player;
    }
    export class $EntityPickEvent extends $Event {
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        getEntity(): $Entity;
        constructor(arg0: $Entity, arg1: $ItemStack_);
        get entity(): $Entity;
    }
    export class $ProbeEventBusEvent extends $Event {
        static setState(arg0: $ProbeEventBusEvent): void;
        isBusEnabled(): boolean;
        constructor();
        static set state(value: $ProbeEventBusEvent);
        get busEnabled(): boolean;
    }
    export class $LivingEntityLoadAdditionalEvent extends $Event {
        getEntity(): $LivingEntity;
        getNBT(): $CompoundTag;
        constructor(arg0: $LivingEntity, arg1: $CompoundTag_);
        get entity(): $LivingEntity;
        get NBT(): $CompoundTag;
    }
}
