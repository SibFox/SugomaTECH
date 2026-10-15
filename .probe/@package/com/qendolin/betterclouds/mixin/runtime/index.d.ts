import { $RenderStateShard$OutputStateShard } from "@package/net/minecraft/client/renderer";
import { $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/com/qendolin/betterclouds/mixin/runtime" {
    export class $RenderPhaseAccessor {
        static getCloudsTarget(): $RenderStateShard$OutputStateShard;
        static get cloudsTarget(): $RenderStateShard$OutputStateShard;
    }
    export interface $RenderPhaseAccessor {
    }
    export class $VertexBufferAccessor {
    }
    export interface $VertexBufferAccessor {
        getVertexBufferId(): number;
        getIndexBufferId(): number;
        getVertexArrayId(): number;
        get vertexBufferId(): number;
        get indexBufferId(): number;
        get vertexArrayId(): number;
    }
    export class $BufferRendererAccessor {
        static getCurrentVertexBuffer(): $VertexBuffer;
        static setCurrentVertexBuffer(buffer: $VertexBuffer): void;
    }
    export interface $BufferRendererAccessor {
    }
}
