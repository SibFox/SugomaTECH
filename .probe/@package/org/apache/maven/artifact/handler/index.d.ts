
declare module "@package/org/apache/maven/artifact/handler" {
    export class $ArtifactHandler {
        static ROLE: string;
    }
    export interface $ArtifactHandler {
        getLanguage(): string;
        getExtension(): string;
        getClassifier(): string;
        getDirectory(): string;
        isIncludesDependencies(): boolean;
        isAddedToClasspath(): boolean;
        getPackaging(): string;
        get language(): string;
        get extension(): string;
        get classifier(): string;
        get directory(): string;
        get includesDependencies(): boolean;
        get addedToClasspath(): boolean;
        get packaging(): string;
    }
}
