/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly UPSTASH_REDIS_REST_URL: string;
	readonly UPSTASH_REDIS_REST_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
