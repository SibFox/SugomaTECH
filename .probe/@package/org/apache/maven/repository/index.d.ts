export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getProtocol(): string;
        getHost(): string;
        getPort(): number;
        getPassword(): string;
        getUserName(): string;
        setPort(arg0: number): void;
        setHost(arg0: string): void;
        setPassword(arg0: string): void;
        setProtocol(arg0: string): void;
        getNonProxyHosts(): string;
        setNonProxyHosts(arg0: string): void;
        getNtlmDomain(): string;
        setUserName(arg0: string): void;
        setNtlmHost(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        getNtlmHost(): string;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
