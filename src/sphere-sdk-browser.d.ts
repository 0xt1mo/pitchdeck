declare module '@unicitylabs/sphere-sdk/impl/browser' {
  import type { StorageProvider, TransportProvider } from '@unicitylabs/sphere-sdk';

  export interface BrowserProviders {
    storage: StorageProvider;
    tokenStorage: StorageProvider;
    transport: TransportProvider;
    ipfsTokenStorage?: StorageProvider;
    [key: string]: unknown;
  }

  export interface CreateBrowserProvidersOptions {
    network?: string;
    price?: {
      platform: string;
      baseUrl?: string;
      cacheTtlMs?: number;
    };
    groupChat?: boolean;
    market?: boolean;
    tokenSync?: {
      ipfs?: { enabled: boolean };
    };
  }

  export function createBrowserProviders(options: CreateBrowserProvidersOptions): BrowserProviders;
}
