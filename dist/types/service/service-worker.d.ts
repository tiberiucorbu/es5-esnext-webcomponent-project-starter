declare const CACHE_VERSION = "v1";
declare const CACHE_NAME: string;
declare function openCache(): Promise<Cache>;
declare function cacheStaticAssets(): Promise<void>;
declare function loadFromCache(request: any): Promise<Response | undefined>;
