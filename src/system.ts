import * as AWS from 'aws-sdk'
import * as path from 'path'
import { ENV } from '~/common/consts'
import { ClockComponent, IClockComponent } from '~/components/clock'
import { ExpressService, IService } from '~/components/http-server'
import { PrismaComponent } from '~/components/prisma'
import { PrismaClientComponent } from '~/components/prisma-client'
import { PubSubComponent } from '~/components/pubsub'
import { IRedisComponent, IRedisComponentConfig, RedisComponent } from '~/components/redis'
import { IS3Component, S3Component } from '~/components/s3'
import { IComponentMap, System } from '~/components/system'
import { ITokenComponent, ITokenConfig, TokenComponent } from '~/components/token'
import { Prisma as PrismaBinding } from '~/generated/prisma'
import { prisma, Prisma } from '~/prisma-client'
import { routes } from '~/routes'
import { ConfigComponent, IConfigComponent } from './components/config'
import { IMQTTComponent, IMQTTConfig, MQTTComponent } from './components/mqtt'
import { mqttHandlers } from './diplomat/mqtt'

export interface IConfig {
  service: IService,
  devspace: string,
  mqtt: IMQTTConfig,
  token: ITokenConfig
  redis: IRedisComponentConfig
}

export interface IComponents {
  config: IConfigComponent<IConfig>,
  token: ITokenComponent,
  s3: IS3Component
  mqtt: IMQTTComponent
  clock: IClockComponent,
  redis: IRedisComponent,
  prismaBinding: PrismaComponent<PrismaBinding>
  prismaClient: PrismaClientComponent<Prisma>
  pubsub: PubSubComponent
}

const env = process.env.NODE_ENV as ENV || ENV.dev
const configFolder = path.join(__dirname, '../resources')

export const componentMap: IComponentMap = {
  config: {
    instance: new ConfigComponent<IConfig>(env, configFolder),
    dependenciesList: [],
  },
  token: {
    instance: new TokenComponent(),
    dependenciesList: ['s3', 'config', 'clock', 'redis'],
  },
  clock: {
    instance: new ClockComponent(),
    dependenciesList: [],
  },
  redis: {
    instance: new RedisComponent(),
    dependenciesList: ['config'],
  },
  s3: {
    instance: new S3Component(new AWS.S3()),
    dependenciesList: [],
  },
  prismaClient: {
    instance: new PrismaClientComponent(prisma),
    dependenciesList: [],
  },
  prismaBinding: {
    instance: new PrismaComponent(PrismaBinding),
    dependenciesList: ['config'],
  },
  mqtt: {
    instance: new MQTTComponent(mqttHandlers),
    dependenciesList: ['config', 'prismaBinding', 'prismaClient', 'clock', 'pubsub'],
  },
  pubsub: {
    instance: new PubSubComponent(),
    dependenciesList: [],
  },
  service: {
    instance: new ExpressService(routes),
    dependenciesList: ['config', 'prismaBinding', 'prismaClient', 'token', 'clock', 'redis', 'mqtt', 'pubsub'],
  },
}

export const system = new System<IComponents>(componentMap)
