import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setEnabled(arg0: boolean): void;
        setChecksumPolicy(arg0: string): void;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor();
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
    }
    export class $Authentication {
        getPassword(): string;
        setUsername(arg0: string): void;
        setPassword(arg0: string): void;
        getUsername(): string;
        getPrivateKey(): string;
        setPrivateKey(arg0: string): void;
        setPassphrase(arg0: string): void;
        getPassphrase(): string;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getLayout(): $ArtifactRepositoryLayout;
        setId(arg0: string): void;
        getProxy(): $Proxy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getReleases(): $ArtifactRepositoryPolicy;
        isBlocked(): boolean;
        setProxy(arg0: $Proxy): void;
        setBlocked(arg0: boolean): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setUrl(arg0: string): void;
        pathOf(arg0: $Artifact): string;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getBasedir(): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        setAuthentication(arg0: $Authentication): void;
        isProjectAware(): boolean;
        findVersions(arg0: $Artifact): $List<string>;
        getAuthentication(): $Authentication;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        get key(): string;
        get protocol(): string;
        get snapshots(): $ArtifactRepositoryPolicy;
        get releases(): $ArtifactRepositoryPolicy;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get basedir(): string;
        get projectAware(): boolean;
        get uniqueVersion(): boolean;
    }
}
