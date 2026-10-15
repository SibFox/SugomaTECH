import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $PollutionAnalyzerRecommendation, $PollutionAnalyzerSnapshot, $PollutionAnalyzerSourceSnapshot } from "@package/com/denfop/api/pollution/analyzer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/com/denfop/client/pollution" {
    export class $PollutionAnalyzerScreen$OverviewLocalSourceLayout extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$OverviewLocalSourceLayout}.
     */
    export type $PollutionAnalyzerScreen$OverviewLocalSourceLayout_ = { source?: $PollutionAnalyzerSourceSnapshot, nameLines?: $List_<$FormattedCharSequence_>, statLines?: $List_<$PollutionAnalyzerScreen$BlockLine_>, height?: number,  } | [source?: $PollutionAnalyzerSourceSnapshot, nameLines?: $List_<$FormattedCharSequence_>, statLines?: $List_<$PollutionAnalyzerScreen$BlockLine_>, height?: number, ];
    export class $PollutionAnalyzerScreen$RecommendationCardLayout extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$RecommendationCardLayout}.
     */
    export type $PollutionAnalyzerScreen$RecommendationCardLayout_ = { height?: number, recommendation?: $PollutionAnalyzerRecommendation, bodyLines?: $List_<$FormattedCharSequence_>, titleLines?: $List_<$FormattedCharSequence_>,  } | [height?: number, recommendation?: $PollutionAnalyzerRecommendation, bodyLines?: $List_<$FormattedCharSequence_>, titleLines?: $List_<$FormattedCharSequence_>, ];
    export class $PollutionAnalyzerClientCache {
        static setSnapshot(arg0: $PollutionAnalyzerSnapshot): void;
        static clear(): void;
        static requestRefresh(): void;
        static getSnapshot(): $PollutionAnalyzerSnapshot;
    }
    export class $PollutionAnalyzerClientHooks {
        static open(arg0: $ItemStack_): void;
    }
    export class $PollutionAnalyzerScreen$SourceCardLayout extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$SourceCardLayout}.
     */
    export type $PollutionAnalyzerScreen$SourceCardLayout_ = { source?: $PollutionAnalyzerSourceSnapshot, statLines?: $List_<$PollutionAnalyzerScreen$BlockLine_>, nameLines?: $List_<$FormattedCharSequence_>, height?: number, posLines?: $List_<$FormattedCharSequence_>,  } | [source?: $PollutionAnalyzerSourceSnapshot, statLines?: $List_<$PollutionAnalyzerScreen$BlockLine_>, nameLines?: $List_<$FormattedCharSequence_>, height?: number, posLines?: $List_<$FormattedCharSequence_>, ];
    export class $PollutionAnalyzerScreen$GraphLayout extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$GraphLayout}.
     */
    export type $PollutionAnalyzerScreen$GraphLayout_ = { values?: number[], color?: number, medium?: string, title?: $Component_, rate?: boolean,  } | [values?: number[], color?: number, medium?: string, title?: $Component_, rate?: boolean, ];
    export class $PollutionAnalyzerScreen$2LegendEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$2LegendEntry}.
     */
    export type $PollutionAnalyzerScreen$2LegendEntry_ = { text?: $Component_, color?: number,  } | [text?: $Component_, color?: number, ];
    export class $PollutionAnalyzerScreen$MediumCardContent extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$MediumCardContent}.
     */
    export type $PollutionAnalyzerScreen$MediumCardContent_ = { lines?: $List_<$PollutionAnalyzerScreen$BlockLine_>, state?: $Component_, title?: $Component_, height?: number, accentColor?: number,  } | [lines?: $List_<$PollutionAnalyzerScreen$BlockLine_>, state?: $Component_, title?: $Component_, height?: number, accentColor?: number, ];
    export class $PollutionAnalyzerScreen$InfoSection extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$InfoSection}.
     */
    export type $PollutionAnalyzerScreen$InfoSection_ = { title?: $Component_, height?: number, accent?: number, lines?: $List_<$PollutionAnalyzerScreen$BlockLine_>,  } | [title?: $Component_, height?: number, accent?: number, lines?: $List_<$PollutionAnalyzerScreen$BlockLine_>, ];
    export class $PollutionAnalyzerScreen$Tab extends $Enum<$PollutionAnalyzerScreen$Tab> {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$Tab}.
     */
    export type $PollutionAnalyzerScreen$Tab_ = "overview" | "sources" | "recommendations" | "cleaners" | "info" | "graphs";
    export class $PollutionAnalyzerScreen$1LegendEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$1LegendEntry}.
     */
    export type $PollutionAnalyzerScreen$1LegendEntry_ = { text?: $Component_,  } | [text?: $Component_, ];
    export class $PollutionAnalyzerScreen extends $Screen {
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
        constructor(arg0: $ItemStack_);
    }
    export class $PollutionAnalyzerScreen$BlockLine extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$BlockLine}.
     */
    export type $PollutionAnalyzerScreen$BlockLine_ = { sequence?: $FormattedCharSequence_, color?: number,  } | [sequence?: $FormattedCharSequence_, color?: number, ];
    export class $PollutionAnalyzerScreen$ChartPlot extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PollutionAnalyzerScreen$ChartPlot}.
     */
    export type $PollutionAnalyzerScreen$ChartPlot_ = { px?: number[], py?: number[], left?: number, right?: number, zeroY?: number, values?: number[],  } | [px?: number[], py?: number[], left?: number, right?: number, zeroY?: number, values?: number[], ];
}
