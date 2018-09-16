import { ILifecycle } from './lifecycle';
import * as Redis from 'ioredis'
import { IConfigComponent } from './config';

export interface IRedisComponentDependencies {
  config: IConfigComponent<any>
}

export interface IRedisComponent {
  getValue: (key: string, ...args: any[]) => Promise<string | null>
  putValue: (key: string, value: any, ...args: any[]) => Promise<void>
}
export class RedisComponent implements ILifecycle, IRedisComponent {
  private redis: Redis.Redis

  public getValue = async (key: string) => {
    return this.redis.get(key)
  }

  public putValue = async (key: string, value: any, ...args: any[]): Promise<void> => {
    return this.redis.set(key, value, ...args)
  }

  public async start({ config }: IRedisComponentDependencies) {
    const redisUri = config.getRequiredValue(['redis', 'uri']) as string

    const redis = await new Redis(redisUri)
    this.redis = redis
  }

  public stop() {
    this.redis.disconnect()
    this.redis = null
  }
}