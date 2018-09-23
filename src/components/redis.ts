import { ILifecycle } from './lifecycle';
import * as Redis from 'ioredis'
import { IConfigComponent } from './config';

export interface IRedisComponentConfig {
  uri: string
}
export interface IRedisComponentDependencies {
  config: IConfigComponent<{redis: IRedisComponentConfig}>
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
    console.log('Starting redis...')
    const redisUri = config.getRequiredValue(['redis', 'uri']) as string

    const redis = await new Redis(redisUri)
    this.redis = redis
    console.log('Redis started!')
  }

  public stop() {
    this.redis.disconnect()
    this.redis = null
  }
}