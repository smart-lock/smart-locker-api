import { ConfigComponent, IConfigComponent } from './components/config'
import * as AWS from 'aws-sdk'
import { MQTTComponent, IMQTTConfig, IMQTTComponent } from './components/mqtt'
import { mqttHandlers } from './diplomat/mqtt'
import { IS3Component, S3Component } from '~/components/s3';
import { ITokenComponent, TokenComponent, ITokenConfig } from '~/components/token';
import { ENV } from '~/common/consts';
import { IComponentMap, System } from '~/components/system';
import * as path from 'path'
import { YogaComponent } from '~/components/yoga';

import { resolvers } from '~/resolvers';
import { IContext, contextFromReq } from '~/graphql/context';
import { ClockComponent, IClockComponent } from '~/components/clock';
import { RedisComponent, IRedisComponent, IRedisComponentConfig } from '~/components/redis';


export interface IConfig {
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
  yoga: YogaComponent<IContext>
  clock: IClockComponent,
  redis: IRedisComponent,
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
    dependenciesList: []
  },
  redis: {
    instance: new RedisComponent(),
    dependenciesList: ['config']
  },
  s3: {
    instance: new S3Component(new AWS.S3()),
    dependenciesList: [],
  },
  mqtt: {
    instance: new MQTTComponent(mqttHandlers),
    dependenciesList: ['config'],
  },
  yoga: {
    instance: new YogaComponent<IContext>({
      typeDefsFile: './src/schema.graphql',
      resolvers,
      getContext: contextFromReq,
    }),
    dependenciesList: ['config', 'mqtt', 'token'],
  }
}

export const system = new System<IComponents>(componentMap)