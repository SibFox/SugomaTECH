import { $RenderStateShard$TexturingStateShard, $RenderType$OutlineProperty, $RenderStateShard$LineStateShard, $RenderStateShard$OverlayStateShard, $RenderStateShard$CullStateShard, $RenderStateShard$TransparencyStateShard, $RenderType$OutlineProperty_, $RenderStateShard$EmptyTextureStateShard, $RenderType$CompositeState, $RenderStateShard$OutputStateShard, $RenderStateShard$ShaderStateShard, $RenderStateShard$WriteMaskStateShard, $RenderStateShard, $RenderStateShard$DepthTestStateShard, $RenderStateShard$LightmapStateShard, $RenderStateShard$ColorLogicStateShard, $RenderStateShard$LayeringStateShard } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
export * as layer from "@package/foundry/veil/api/client/render/rendertype/layer";

declare module "@package/foundry/veil/api/client/render/rendertype" {
    export class $VeilRenderTypeBuilder {
    }
    export interface $VeilRenderTypeBuilder {
        create(arg0: $RenderType$OutlineProperty_): $RenderType$CompositeState;
        create(arg0: boolean): $RenderType$CompositeState;
        lineState(arg0: $RenderStateShard$LineStateShard): $VeilRenderTypeBuilder;
        cullState(arg0: $RenderStateShard$CullStateShard): $VeilRenderTypeBuilder;
        addLayer(arg0: $RenderStateShard): $VeilRenderTypeBuilder;
        outputState(arg0: $RenderStateShard$OutputStateShard): $VeilRenderTypeBuilder;
        textureState(arg0: $RenderStateShard$EmptyTextureStateShard): $VeilRenderTypeBuilder;
        shaderState(arg0: $RenderStateShard$ShaderStateShard): $VeilRenderTypeBuilder;
        transparencyState(arg0: $RenderStateShard$TransparencyStateShard): $VeilRenderTypeBuilder;
        depthTestState(arg0: $RenderStateShard$DepthTestStateShard): $VeilRenderTypeBuilder;
        lightmapState(arg0: $RenderStateShard$LightmapStateShard): $VeilRenderTypeBuilder;
        overlayState(arg0: $RenderStateShard$OverlayStateShard): $VeilRenderTypeBuilder;
        colorLogicState(arg0: $RenderStateShard$ColorLogicStateShard): $VeilRenderTypeBuilder;
        texturingState(arg0: $RenderStateShard$TexturingStateShard): $VeilRenderTypeBuilder;
        writeMaskState(arg0: $RenderStateShard$WriteMaskStateShard): $VeilRenderTypeBuilder;
        layeringState(arg0: $RenderStateShard$LayeringStateShard): $VeilRenderTypeBuilder;
    }
    export class $VeilRenderTypeAccessor {
    }
    export interface $VeilRenderTypeAccessor {
        states(): $List<$RenderStateShard>;
        lineState(): $RenderStateShard$LineStateShard;
        cullState(): $RenderStateShard$CullStateShard;
        outputState(): $RenderStateShard$OutputStateShard;
        outlineProperty(): $RenderType$OutlineProperty;
        textureState(): $RenderStateShard$EmptyTextureStateShard;
        shaderState(): $RenderStateShard$ShaderStateShard;
        transparencyState(): $RenderStateShard$TransparencyStateShard;
        depthTestState(): $RenderStateShard$DepthTestStateShard;
        lightmapState(): $RenderStateShard$LightmapStateShard;
        overlayState(): $RenderStateShard$OverlayStateShard;
        colorLogicState(): $RenderStateShard$ColorLogicStateShard;
        texturingState(): $RenderStateShard$TexturingStateShard;
        writeMaskState(): $RenderStateShard$WriteMaskStateShard;
        veilShaderId(): $ResourceLocation;
        layeringState(): $RenderStateShard$LayeringStateShard;
    }
}
