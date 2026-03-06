import { ICache, RedisCache } from './redisCache.js';

let cacheInstance: ICache<any> | null = null;

export function getCacheInstance(): ICache<any> {
  if (!cacheInstance) {
    if (!process.env.REDIS_URL) {
      throw new Error('REDIS_URL is not set');
    }
    cacheInstance = new RedisCache<any>(process.env.REDIS_URL || "redis://127.0.0.1:6379");
  }
  return cacheInstance;
}