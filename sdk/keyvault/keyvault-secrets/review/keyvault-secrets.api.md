## API Report File for "@azure/keyvault-secrets"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AzureServiceClientOptions } from '@azure/ms-rest-azure-js';
import { HttpClient } from '@azure/ms-rest-js';
import { HttpPipelineLogger } from '@azure/ms-rest-js';
import * as msRest from '@azure/ms-rest-js';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PageSettings } from '@azure/core-paging';
import { RequestOptionsBase } from '@azure/ms-rest-js';
import { ServiceClientCredentials } from '@azure/ms-rest-js';

// @public
export interface DeletedSecret extends Secret {
    readonly deletedDate?: Date;
    recoveryId?: string;
    readonly scheduledPurgeDate?: Date;
}

// @public
export type DeletionRecoveryLevel = "Purgeable" | "Recoverable+Purgeable" | "Recoverable" | "Recoverable+ProtectedSubscription";

// @public
export interface GetSecretOptions {
    requestOptions?: msRest.RequestOptionsBase;
    version?: string;
}

// @public
export interface GetSecretsOptions {
    requestOptions?: msRest.RequestOptionsBase;
}

// @public
export interface NewPipelineOptions {
    // (undocumented)
    HTTPClient?: HttpClient;
    // (undocumented)
    logger?: HttpPipelineLogger;
    // (undocumented)
    proxyOptions?: ProxyOptions;
    // (undocumented)
    retryOptions?: RetryOptions;
    telemetry?: TelemetryOptions;
}

export { PagedAsyncIterableIterator }

export { PageSettings }

// @public (undocumented)
export interface ParsedKeyVaultEntityIdentifier {
    name: string;
    vaultUrl: string;
    version?: string;
}

// @public
export interface ProxyOptions {
    // (undocumented)
    proxySettings?: string;
}

// @public
export interface RetryOptions {
    readonly maxRetryDelayInMs?: number;
    readonly retryCount?: number;
    readonly retryIntervalInMS?: number;
}

// @public
export interface Secret extends SecretAttributes {
    value?: string;
}

// @public
export interface SecretAttributes extends ParsedKeyVaultEntityIdentifier {
    contentType?: string;
    readonly created?: Date;
    enabled?: boolean;
    expires?: Date;
    id?: string;
    readonly keyId?: string;
    readonly managed?: boolean;
    notBefore?: Date;
    readonly recoveryLevel?: DeletionRecoveryLevel;
    tags?: {
        [propertyName: string]: string;
    };
    readonly updated?: Date;
}

// @public
export class SecretsClient {
    constructor(url: string, credential: ServiceClientCredentials, pipelineOrOptions?: AzureServiceClientOptions | NewPipelineOptions);
    backupSecret(secretName: string, options?: RequestOptionsBase): Promise<Uint8Array | undefined>;
    protected readonly credential: ServiceClientCredentials;
    deleteSecret(secretName: string, options?: RequestOptionsBase): Promise<DeletedSecret>;
    static getDefaultPipeline(credential: ServiceClientCredentials, pipelineOptions?: NewPipelineOptions): AzureServiceClientOptions;
    getDeletedSecret(secretName: string, options?: RequestOptionsBase): Promise<DeletedSecret>;
    getSecret(secretName: string, options?: GetSecretOptions): Promise<Secret>;
    listDeletedSecrets(options?: GetSecretsOptions): PagedAsyncIterableIterator<SecretAttributes>;
    listSecrets(options?: GetSecretsOptions): PagedAsyncIterableIterator<SecretAttributes>;
    listSecretVersions(secretName: string, options?: GetSecretsOptions): PagedAsyncIterableIterator<SecretAttributes>;
    readonly pipeline: AzureServiceClientOptions;
    purgeDeletedSecret(secretName: string, options?: RequestOptionsBase): Promise<void>;
    recoverDeletedSecret(secretName: string, options?: RequestOptionsBase): Promise<Secret>;
    restoreSecret(secretBundleBackup: Uint8Array, options?: RequestOptionsBase): Promise<Secret>;
    setSecret(secretName: string, value: string, options?: SetSecretOptions): Promise<Secret>;
    updateSecretAttributes(secretName: string, secretVersion: string, options?: UpdateSecretOptions): Promise<Secret>;
    readonly vaultBaseUrl: string;
}

// @public
export interface SetSecretOptions {
    contentType?: string;
    enabled?: boolean;
    expires?: Date;
    notBefore?: Date;
    requestOptions?: msRest.RequestOptionsBase;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public (undocumented)
export interface TelemetryOptions {
    // (undocumented)
    value: string;
}

// @public
export interface UpdateSecretOptions {
    contentType?: string;
    enabled?: boolean;
    expires?: Date;
    notBefore?: Date;
    requestOptions?: msRest.RequestOptionsBase;
    tags?: {
        [propertyName: string]: string;
    };
}


// (No @packageDocumentation comment for this package)

```