
declare module "@package/com/vicmatskiv/pointblank/client/render" {
    export class $RenderTargetExt {
    }
    export interface $RenderTargetExt {
        enablePointblankStencil(): void;
        isPointblankStencilEnabled(): boolean;
        get pointblankStencilEnabled(): boolean;
    }
}
