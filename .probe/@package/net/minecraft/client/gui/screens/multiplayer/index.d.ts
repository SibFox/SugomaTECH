import { $Logger } from "@package/org/slf4j";
import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $HeaderAndFooterLayout, $Layout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ThreadPoolExecutor, $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $WidgetTooltipHolder, $ObjectSelectionList, $AbstractSelectionList, $Checkbox, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $ContainerObjectSelectionList, $AbstractSelectionList$Entry, $Button, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $AccessorJoinMultiplayerScreen, $AccessorServerSelectionListEntry } from "@package/com/illusivesoulworks/cherishedworlds/mixin/core";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AutoCloseable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerNarration(): $Component;
        getServerData(): $LanServer;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        serverData: $LanServer;
        constructor(screen: $JoinMultiplayerScreen, serverData: $LanServer);
        get serverNarration(): $Component;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen implements $AccessorJoinMultiplayerScreen {
        setSelected(selected: $ServerSelectionList$Entry): void;
        onSelectedChange(): void;
        joinSelectedServer(): void;
        getServers(): $ServerList;
        getPinger(): $ServerStatusPinger;
        getSelectionList(): $ServerSelectionList;
        getDeleteButton(): $Button;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        serverSelectionList: $ServerSelectionList;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
        set selected(value: $ServerSelectionList$Entry);
        get servers(): $ServerList;
        get pinger(): $ServerStatusPinger;
        get selectionList(): $ServerSelectionList;
        get deleteButton(): $Button;
    }
    export class $SafetyScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        message: $Component;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(previous: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_, connection: $Connection);
    }
    export class $WarningScreen extends $Screen {
        addFooterButtons(): $Layout;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        message: $Component;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_, content: $Component_, narration: $Component_);
        constructor(title: $Component_, content: $Component_, check: $Component_ | null, narration: $Component_);
    }
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerLinksScreen$LinkListEntry>;
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> {
        removed(): void;
        static access$000(arg0: $ServerSelectionList, arg1: $AbstractSelectionList$Entry<any>): void;
        static access$100(arg0: $ServerSelectionList, arg1: number): number;
        setSelected(entry: $ServerSelectionList$Entry | null): void;
        updateOnlineServers(servers: $ServerList): void;
        updateNetworkServers(lanServers: $List_<$LanServer>): void;
        static PINGING_2_SPRITE: $ResourceLocation;
        static PING_1_SPRITE: $ResourceLocation;
        static PINGING_1_SPRITE: $ResourceLocation;
        static PINGING_3_SPRITE: $ResourceLocation;
        static SCANNING_LABEL: $Component;
        itemHeight: number;
        static CANT_CONNECT_TEXT: $Component;
        tooltip: $WidgetTooltipHolder;
        packedFGColor: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static MOVE_UP_SPRITE: $ResourceLocation;
        static THREAD_POOL: $ThreadPoolExecutor;
        static ONLINE_STATUS: $Component;
        height: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        xOffset: number;
        active: boolean;
        static INCOMPATIBLE_SPRITE: $ResourceLocation;
        static JOIN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static MOVE_DOWN_SPRITE: $ResourceLocation;
        static PING_4_SPRITE: $ResourceLocation;
        static SCROLLER_SPRITE: $ResourceLocation;
        static PINGING_5_SPRITE: $ResourceLocation;
        static NO_CONNECTION_STATUS: $Component;
        centerListVertically: boolean;
        static PING_2_SPRITE: $ResourceLocation;
        static LOGGER: $Logger;
        minecraft: $Minecraft;
        static PINGING_STATUS: $Component;
        static MOVE_UP_HIGHLIGHTED_SPRITE: $ResourceLocation;
        alpha: number;
        scrollAmount: number;
        static SCROLLBAR_WIDTH: number;
        static INCOMPATIBLE_STATUS: $Component;
        static UNREACHABLE_SPRITE: $ResourceLocation;
        static CANT_RESOLVE_TEXT: $Component;
        static PING_3_SPRITE: $ResourceLocation;
        static PING_5_SPRITE: $ResourceLocation;
        static PINGING_4_SPRITE: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        headerHeight: number;
        hovered: $ServerSelectionList$Entry;
        static MOVE_DOWN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static JOIN_SPRITE: $ResourceLocation;
        constructor(screen: $JoinMultiplayerScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        set selected(value: $ServerSelectionList$Entry | null);
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry implements $AccessorServerSelectionListEntry {
        getServerData(): $ServerData;
        drawIcon(guiGraphics: $GuiGraphics, x: number, y: number, icon: $ResourceLocation_): void;
        updateServerList(): void;
        static createEntry$cherishedworlds_$md$6cde14$1(arg0: $ServerSelectionList, arg1: $JoinMultiplayerScreen, arg2: $ServerData): $ServerSelectionList$OnlineServerEntry;
        this$0: $ServerSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor(screen: $ServerSelectionList, serverData: $JoinMultiplayerScreen, arg2: $ServerData);
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        xOffset: number;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $ServerLinksScreen$LinkListEntry;
        height: number;
    }
    export class $ServerLinksScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        self: $Screen;
        links: $ServerLinks;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, links: $ServerLinks_);
    }
}
