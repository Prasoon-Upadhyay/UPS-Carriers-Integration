import { Redis } from "ioredis";

export interface ICache<T> {
  get(key: string): Promise<T | null>;
  set(key: string, value: T, ttlSeconds?: number): Promise<void>;
}

export class RedisCache<T> implements ICache<T> {
  private client: Redis;

  constructor(redisUrl: string) {
    console.log(redisUrl)
    this.client = new Redis(redisUrl);
  }

  async get(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  }

  async set(key: string, value: T, ttlSeconds: number = 3600): Promise<void> {
    await this.client.set(key, JSON.stringify(value), 'EX', ttlSeconds);
  }
}