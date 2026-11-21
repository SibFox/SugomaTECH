
declare module "@package/com/supermartijn642/core/registry" {
    export class $RegistrationHandler$Helper<T> {
        register<X extends T>(identifier: string, object: X): X;
        registerOverride<X extends T>(namespace: string, identifier: string, object: X): X;
    }
}
